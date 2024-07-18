import { on } from "events";
import React, { useEffect, useRef, useState } from "react";

interface PopoverProps {
  value1: string;
  value2: string;
  onSave: (value1: string, value2: string) => void;
}

export const EditItemDialogContent = ({
  value1 = "",
  value2 = "",
  onSave
}: PopoverProps) => {
  const [firstValue, setFirstValue] = useState(value1);
  const [secondValue, setSecondValue] = useState(value2);

  const [isDisabled, setIsDisabled] = useState(false);

  const saveHandler = () => {
    onSave(firstValue, secondValue);
  };

  useEffect(() => {
    setIsDisabled(firstValue?.length && secondValue?.length ? false : true);
  }, [firstValue, secondValue]);

  useEffect(() => {
    setFirstValue(value1);
    setSecondValue(value2);
  }, [value1, value2]);

  return (
    <div>
      <input value={firstValue} onChange={e => setFirstValue(e.target.value)} />
      <input
        value={secondValue}
        onChange={e => setSecondValue(e.target.value)}
      />

      <button disabled={isDisabled} onClick={saveHandler}>
        Save
      </button>
    </div>
  );
};
