import React, { useCallback, useEffect, useRef, useState } from "react";

import { JsonEditor } from "json-edit-react";
import { saveAs } from "file-saver";

import { useCardsStore } from "@/my-apps/cards/stores/cards";
import { Button, ButtonSizes } from "@/my-apps/cards/components/Button";

interface PopoverProps {}

export const ExportDialogContent = ({}: PopoverProps) => {
  const cards = useCardsStore(state => state.cards);
  const items = useCardsStore(state => state.items);

  const store = { cards, items };

  let blob = new Blob([JSON.stringify(store)], {
    type: "application/json"
  });

  const saveClickHandler = useCallback(() => {
    saveAs(blob, "export.json");
  }, []);

  return (
    <div>
      <JsonEditor data={store} />
      <Button fullWidth size={ButtonSizes.BIG} onClick={saveClickHandler}>
        Export
      </Button>
    </div>
  );
};
