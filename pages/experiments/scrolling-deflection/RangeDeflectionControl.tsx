import React, { useEffect, useState } from "react";

import { RangeControl } from "@/components/RangeControl";

import css from "./ScrollingDeflection.module.css";

interface RangeDeflectionControlProps {
  setDeflectionX: (value: number) => void;
  setDeflectionY: (value: number) => void;
}

export const RangeDeflectionControl = ({
  setDeflectionX,
  setDeflectionY
}: RangeDeflectionControlProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className={css.rangeWrapper}>
      <RangeControl name="X" onChange={setDeflectionX} />
      <RangeControl name="Y" onChange={setDeflectionY} />
    </div>
  ) : null;
};
