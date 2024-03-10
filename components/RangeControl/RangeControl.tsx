import react from "react";

import css from "./RangeControl.module.css";

interface RangeControlProps {
  name: string;
  onChange: (value: number) => void;
}

export const RangeControl = ({ name, onChange }: RangeControlProps) => {
  return (
    <div className={css.rangeControl}>
      <p>{name}:</p>
      <input
        min={-window?.innerWidth / 2}
        max={window?.innerWidth / 2}
        onChange={({ target: { value } }) => {
          onChange(parseInt(value, 10));
        }}
        type="range"
      />
    </div>
  );
};
