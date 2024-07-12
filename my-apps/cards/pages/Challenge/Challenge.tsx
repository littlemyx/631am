import React from "react";
import { useCardsStore } from "../../stores/cards";
import { Stack } from "../../components/Stack";

export const Challenge = () => {
  const items = useCardsStore(state =>
    state.lastGenerated.map(({ pair }) => ({
      text: pair[0].value,
      alterText: pair[1].value
    }))
  );

  return <Stack items={items} />;
};
