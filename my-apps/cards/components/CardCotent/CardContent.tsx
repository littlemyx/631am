import { PropsWithChildren, PointerEvent } from "react";
import cx from "classnames";

import styles from "./CardContent.module.css";
import { Button, ButtonSizes } from "../Button";

interface CardContentProps {
  onFlip: (event: PointerEvent<HTMLButtonElement>) => void;
}

export const CardContent = ({
  onFlip,
  children
}: PropsWithChildren<CardContentProps>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttonWrapper}>
        <Button
          size={ButtonSizes.BIG}
          className={cx("pressable", styles.button)}
          onPointerUp={onFlip}
        >
          Flip
        </Button>
      </div>
    </div>
  );
};
