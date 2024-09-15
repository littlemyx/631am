import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

export enum ButtonSizes {
  NORMAL = "normal",
  SMALL = "small",
  BIG = "big"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  size?: ButtonSizes;
}

export const Button = ({
  children,
  className,
  fullWidth = false,
  size = ButtonSizes.NORMAL,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(className, styles.wrapper, {
        [styles.normalWidth]: !fullWidth,
        [styles.fullWidth]: fullWidth,
        [styles.small]: size === ButtonSizes.SMALL,
        [styles.normal]: size === ButtonSizes.NORMAL,
        [styles.big]: size === ButtonSizes.BIG
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
