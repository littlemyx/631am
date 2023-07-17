import React, { PropsWithChildren, useContext } from "react";
import classNames from "classnames";

import { DeflectorContext } from "./context";

import css from "./Item.module.css";

export const Background = ({ children }: PropsWithChildren<{}>) => {
  const state = useContext(DeflectorContext);

  return (
    <div
      className={classNames(css.bodyWrapper, {
        [css.active]: state?.isDeflectorActive,
        [css.inactive]: !state?.isDeflectorActive
      })}
    >
      {children}
    </div>
  );
};
