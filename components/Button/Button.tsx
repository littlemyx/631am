import React, { PropsWithChildren } from "react";

import css from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick = () => {}
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={css.wrapper}>
      {children}
    </button>
  );
};
