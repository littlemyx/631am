import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";
import cx from "classnames";

import { CloseIcon } from "@/icons/Close";

import styles from "./Popover.module.css";

interface PopoverProps {
  id: string;
  title: string;
  onClose: () => void;
  isParentScrollBlocked?: boolean;
}

export const Popover = forwardRef<
  HTMLDivElement,
  PropsWithChildren<PopoverProps>
>(({ id, title, onClose, isParentScrollBlocked, children }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);
  const toggleEventHandler = useCallback(event => {
    if (event.newState === "closed") {
      onClose();
    }
    console.log("toggle");
  }, []);

  useEffect(() => {
    innerRef?.current?.addEventListener("toggle", toggleEventHandler);

    return () => {
      innerRef?.current?.removeEventListener("toggle", toggleEventHandler);
    };
  });

  return (
    <div
      id={id}
      //@ts-ignore
      popover="auto"
      ref={innerRef}
      className={cx({ [styles.preventParentScroll]: isParentScrollBlocked })}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          //@ts-ignore
          popovertarget={id}
          popovertargetaction="hide"
        >
          <CloseIcon width={20} height={20} />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
});
