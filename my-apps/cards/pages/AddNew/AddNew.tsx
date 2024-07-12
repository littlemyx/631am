import react, { useCallback, useRef } from "react";

import { useCardsStore } from "../../stores/cards";

export const AddNew = () => {
  const addPair = useCardsStore(state => state.addPair);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const addHandler = useCallback(() => {
    const id = Date.now();
    addPair(`${id}`, {
      id: `${id}_pair`,
      rating: 0,
      pair: [
        { id: `${id}_a`, value: ref1.current?.value },
        { id: `${id}_b`, value: ref2.current?.value }
      ]
    });
  }, []);

  return (
    <div>
      <input ref={ref1} />
      <input ref={ref2} />

      <button onClick={addHandler}>Add</button>
    </div>
  );
};
