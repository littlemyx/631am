import React, { useCallback, useEffect, useRef, useState } from "react";

import { useCardsStore, Pair } from "../../stores/cards";
import { Card } from "../../components/Card";

import { Popover } from "./components";

import styles from "./Edit.module.css";

export const Edit = () => {
  const cards = useCardsStore(state => state.cards);
  const updatePair = useCardsStore(state => state.updatePair);
  const updateItem = useCardsStore(state => state.updateItem);

  const toggleRef = useRef<HTMLDivElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editingCard, setEditingCard] = useState<Pair<any, any> | null>(null);

  const editClickHandler = useCallback(
    (pair: Pair<any, any>) => () => {
      setIsEditing(true);
      setEditingCard(pair);
      toggleRef.current?.showPopover();
    },
    []
  );

  const toggleEventHandler = useCallback(event => {
    if (event.newState === "hidden") {
      setIsEditing(false);
      setEditingCard(null);
    }
    console.log("toggle");
  }, []);

  useEffect(() => {
    toggleRef.current?.addEventListener("toggle", toggleEventHandler);

    return () => {
      toggleRef.current?.removeEventListener("toggle", toggleEventHandler);
    };
  });

  const saveHandler = useCallback(
    (value1, value2) => {
      if (editingCard) {
        updatePair(editingCard.id, {
          ...editingCard,
          pair: [
            { ...editingCard.pair[0], value: value1 },
            { ...editingCard.pair[1], value: value2 }
          ]
        });
        updateItem(editingCard.pair[0].id, {
          ...editingCard.pair[0],
          value: value1
        });
        updateItem(editingCard.pair[1].id, {
          ...editingCard.pair[1],
          value: value2
        });
      }
      toggleRef.current?.hidePopover();
    },
    [editingCard]
  );

  return (
    <div className={styles.wrapper}>
      <div id="mypopover" popover="auto" ref={toggleRef}>
        <button popovertarget="mypopover" popovertargetaction="hide">
          Hide
        </button>
        <h2>Popover heading</h2>
        <Popover
          value1={editingCard?.pair[0].value}
          value2={editingCard?.pair[1].value}
          onSave={saveHandler}
        />
      </div>

      <div className={styles.listWrapper}>
        {Object.values(cards).map(card => (
          <div
            key={card.id}
            className={styles.itemWrapper}
            popovertarget="mypopover"
            popovertargetaction="show"
            onClick={editClickHandler(card)}
          >
            <Card text={card.pair[0].value} otherText={card.pair[1].value} />
          </div>
        ))}
      </div>
    </div>
  );
};
