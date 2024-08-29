import React, { useCallback, useEffect, useRef, useState } from "react";

import { DeleteIcon } from "@/icons/Delete";

import { useCardsStore } from "../../stores/cards";
import { Pair } from "../../stores/types";
import { Card } from "../../components/Card";
import { Popover } from "../../components/Popover";

import {
  EditItemDialogContent,
  ExportDialogContent,
  ExportPopup
} from "./components";

import styles from "./Edit.module.css";
import { Button, ButtonSizes } from "../../components/Button";

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
        title="Edit"
        isParentScrollBlocked
        onClose={popupCloseHandler}
        ref={toggleRef}
      >
        <EditItemDialogContent
          value1={editingCard?.pair[0].value}
          value2={editingCard?.pair[1].value}
          onSave={saveHandler}
        />
      </Popover>

      <ExportPopup />

      <div className={styles.listWrapper}>
        {Object.values(cards).map(card => (
          <div key={card.id} className={styles.itemWrapper}>
            <div
              className={styles.cardWrapper}
              onPointerUp={editClickHandler(card as Pair<any, any>)}
            >
              <Card text={card.pair[0].value} otherText={card.pair[1].value} />
            </div>
            <div>
              <Button
                size={ButtonSizes.BIG}
                className={styles.deleteButton}
                onPointerUp={() => {
                  removePair(card.id);
                  removeItem(card.pair[0].id);
                  removeItem(card.pair[1].id);
                }}
              >
                <DeleteIcon width={20} height={20} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
