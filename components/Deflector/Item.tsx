import React, { PropsWithChildren, useContext } from "react";
import classNames from "classnames";

import { DeflectorContext } from "./context";

import css from "./Item.module.css";

export const Item = ({ children }: PropsWithChildren<{}>) => {
  const state = useContext(DeflectorContext);

  return (
    <div
      className={classNames(css.itemWrapper, {
        [css.active]: state?.isDeflectorActive,
        [css.inactive]: !state?.isDeflectorActive
      })}
    >
      {children}
    </div>
  );
};
