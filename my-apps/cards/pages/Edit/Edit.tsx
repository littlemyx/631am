import React, { useCallback, useEffect, useRef, useState } from "react";

import { DeleteIcon } from "@/icons/Delete";

import { useCardsStore, Pair } from "../../stores/cards";
import { Card } from "../../components/Card";
import { Popover } from "../../components/Popover";

import { EditItemDialogContent } from "./components";

import styles from "./Edit.module.css";

export const Edit = () => {
  const cards = useCardsStore(state => state.cards);
  const updatePair = useCardsStore(state => state.updatePair);
  const updateItem = useCardsStore(state => state.updateItem);
  const removePair = useCardsStore(state => state.removePair);
  const removeItem = useCardsStore(state => state.removeItem);

  const toggleRef = useRef<HTMLDivElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editingCard, setEditingCard] = useState<Pair<any, any> | null>(null);

  const editClickHandler = (pair: Pair<any, any>) => () => {
    setIsEditing(true);
    setEditingCard(pair);
    // @ts-ignore
    toggleRef.current?.showPopover();
  };

  const popupCloseHandler = useCallback(() => {
    setIsEditing(false);
    setEditingCard(null);
  }, []);

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
      // @ts-ignore
      toggleRef.current?.hidePopover();
    },
    [editingCard]
  );

  return (
    <div className={styles.wrapper}>
      <Popover
        id="editItem"
        title="edit"
        onClose={popupCloseHandler}
        ref={toggleRef}
      >
        <EditItemDialogContent
          value1={editingCard?.pair[0].value}
          value2={editingCard?.pair[1].value}
          onSave={saveHandler}
        />
      </Popover>

      <div className={styles.listWrapper}>
        {Object.values(cards).map(card => (
          <div key={card.id} className={styles.itemWrapper}>
            <div onPointerUp={editClickHandler(card)}>
              <Card text={card.pair[0].value} otherText={card.pair[1].value} />
            </div>
            <div>
              <button
                className={styles.deleteButton}
                onPointerUp={() => {
                  removePair(card.id);
                  removeItem(card.pair[0].id);
                  removeItem(card.pair[1].id);
                }}
              >
                <DeleteIcon width={20} height={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
