import { useCallback, useEffect, useRef, useState } from "react";
import { JsonEditor } from "json-edit-react";

import { Popover } from "../../components/Popover";
import { Button } from "../../components/Button";

import { StateSchema, CardsState, useCardsStore } from "../../stores/cards";

import { FileReaderComponent } from "./FileReaderComponent";

interface ImportProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Import = ({ isOpen, onClose }: ImportProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const deserialize = useCardsStore(state => state.deserialize);

  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
      toggleRef.current?.showPopover();
    } else {
      // @ts-ignore
      toggleRef.current?.hidePopover();
    }
  }, [isOpen]);

  const fileReaderReadyHandler = useCallback((content: string) => {
    setPreview(content);
  }, []);

  const editorSetDataHandler = useCallback((data: any) => {
    setPreview(JSON.stringify(data));
  }, []);

  const importSubmitHandler = useCallback(() => {
    if (preview !== null) {
      deserialize(preview);
    }
  }, [preview]);

  return (
    <Popover
      id="importFromFile"
      title="Import"
      onClose={onClose}
      ref={toggleRef}
    >
      <FileReaderComponent onReady={fileReaderReadyHandler} />
      {preview && (
        <>
          <details>
            <summary>Raw file content preview</summary>
            <JsonEditor
              data={JSON.parse(preview || "{}")}
              setData={editorSetDataHandler}
            />
          </details>

          <Button onClick={importSubmitHandler}>Add to my cards</Button>
        </>
      )}
    </Popover>
  );
};
