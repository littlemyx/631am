import react, { useCallback, useEffect, useRef, useState } from "react";

import { useCardsStore } from "../../stores/cards";

export const AddNew = () => {
  const addPair = useCardsStore(state => state.addPair);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const [isAdding, setIsAdding] = useState(false);

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

  return (
    <div>
      <input ref={ref1} />
      <input ref={ref2} />

      <button onClick={addHandler}>Add</button>
    </div>
  );
};
