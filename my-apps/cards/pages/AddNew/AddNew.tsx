import react, { useCallback, useEffect, useRef, useState } from "react";

import { useCardsStore } from "../../stores/cards";
import { Popover } from "../../components/Popover";
import { Button, ButtonSizes } from "../../components/Button";

import { Import } from "./Import";

import s from "./AddNew.module.css";

export const AddNew = () => {
  const addPair = useCardsStore(state => state.addPair);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const [isAdding, setIsAdding] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  useEffect(() => {
    if (isAdding) {
      const id = Date.now();
      addPair(`${id}_pair`, {
        id: `${id}_pair`,
        rating: 0,
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
  }, []);

  return (
    <div className={s.wrapper}>
      <Import isOpen={isImporting} onClose={() => setIsImporting(false)} />
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
