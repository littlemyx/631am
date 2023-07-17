import React, { PropsWithChildren } from "react";

import css from "./Card.module.css";

export const Card = ({ children }: PropsWithChildren<{}>) => {
  return <div className={css.wrapper}>{children}</div>;
};
