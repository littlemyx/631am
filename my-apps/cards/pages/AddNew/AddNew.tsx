import react, { useCallback, useEffect, useRef, useState } from "react";

import { useCardsStore } from "../../stores/cards";
import { Popover } from "../../components/Popover";
import { Button, ButtonSizes } from "../../components/Button";

import { Import } from "./Import";

import s from "./AddNew.module.css";
import { TypeOfError } from "../../stores/types";

export const AddNew = () => {
  const ref = useRef<HTMLDivElement>(null);
  const addPair = useCardsStore(state => state.addPair);
  const resetError = useCardsStore(state => state.resetError);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const [isAdding, setIsAdding] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    if (isAdding) {
      const id = Date.now();
      addPair(`${id}_pair`, {
        id: `${id}_pair`,
        weight: 0,
        lastReviewed: null,
        nextReview: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        pair: [
          { id: `${id}_a`, value: ref1.current?.value },
          { id: `${id}_b`, value: ref2.current?.value }
        ]
      });
      setIsAdding(false);

      ref1.current!.value = "";
      ref2.current!.value = "";

      ref1.current!.focus();
    }
  }, [isAdding]);

  const addHandler = useCallback(() => {
    setIsAdding(true);
  }, []);

  const importHandler = useCallback(() => {
    setIsImporting(true);
    resetError(TypeOfError.Values.import);
  }, []);

  const closeHandler = useCallback(() => {
    setIsImporting(false);
  }, []);

  useEffect(
    () => () => {
      console.log(ref.current);
    },
    []
  );

  return (
    <div ref={ref} className={s.wrapper}>
      <Import isOpen={isImporting} onClose={closeHandler} />
      <div className={s.contentWrapper}>
        <div>
          <input ref={ref1} />
          <input ref={ref2} />

          <Button onClick={addHandler}>Add</Button>
        </div>
        <div className={s.buttonWrapper}>
          <Button size={ButtonSizes.BIG} fullWidth onClick={importHandler}>
            Import
          </Button>
        </div>
      </div>
    </div>
  );
};
