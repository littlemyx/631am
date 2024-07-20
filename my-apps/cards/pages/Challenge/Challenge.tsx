import React from "react";
import { useCardsStore } from "../../stores/cards";
import { Stack } from "../../components/Stack";

import style from "./Challenge.module.css";

export const Challenge = () => {
  const items = useCardsStore(state => state.lastGenerated);

  return (
    <div className={style.wrapper}>
      <Stack items={items} />
    </div>
  );
};
