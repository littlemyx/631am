import { useCallback, useEffect, useRef, useState } from "react";
import { JsonEditor } from "json-edit-react";

import { Popover } from "../../components/Popover";
import { Button } from "../../components/Button";

import { useCardsStore } from "../../stores/cards";
import { TypeOfError } from "../../stores/types";

import { FileReaderComponent } from "./FileReaderComponent";
import { on } from "events";
import { set } from "zod";

interface ImportProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Import = ({ isOpen, onClose }: ImportProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const deserialize = useCardsStore(state => state.deserialize);
  const resetError = useCardsStore(state => state.resetError);
  const error = useCardsStore(state => {
    const { errors } = state;
    if (errors.import) {
      return errors.import;
    }
    return null;
  });

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

  const closeHandler = useCallback(() => {
    setPreview(null);
    onClose();
    resetError(TypeOfError.Values.import);
  }, []);

  return (
    <Popover
      id="importFromFile"
      title="Import"
      onClose={closeHandler}
      ref={toggleRef}
    >
      <FileReaderComponent onReady={fileReaderReadyHandler} isOpen={isOpen} />
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
      {error && (
        <div>
          An error has occured:<code>{error.text}</code>
        </div>
      )}
    </Popover>
  );
};
