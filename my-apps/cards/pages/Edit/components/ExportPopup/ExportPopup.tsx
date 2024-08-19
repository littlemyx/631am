import { Popover } from "@/my-apps/cards/components/Popover";
import { ExportDialogContent } from "../ExportDialogContent";
import { Button } from "@/components/Button";

import styles from "./ExportPopup.module.css";
import { useCallback, useRef } from "react";

export const ExportPopup = () => {
  const toggleRef = useRef<HTMLDivElement>(null);

  const exportClickHandler = useCallback(() => {
    toggleRef.current?.showPopover();
  }, []);

  const popupCloseHandler = useCallback(() => {}, []);

  return (
    <>
      <Popover
        id="exportPopup"
        title="Export"
        isParentScrollBlocked
        onClose={popupCloseHandler}
        ref={toggleRef}
      >
        <ExportDialogContent />
      </Popover>

      <div className={styles.exportWrapper}>
        <Button onClick={exportClickHandler}>Export</Button>
      </div>
    </>
  );
};
