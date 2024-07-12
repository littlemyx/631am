import { PropsWithChildren } from "react";
import styles from "./CardContent.module.css";

interface CardContentProps {
  onFlip: () => void;
}

export const CardContent = ({
  onFlip,
  children
}: PropsWithChildren<CardContentProps>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onFlip}>
          Flip
        </button>
      </div>
    </div>
  );
};
