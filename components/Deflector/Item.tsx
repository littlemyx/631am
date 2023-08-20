import React, { PropsWithChildren, useContext, useEffect, useRef } from "react";
import classNames from "classnames";

import { DeflectorContext } from "./context";

import css from "./Item.module.css";

export const Item = ({ children }: PropsWithChildren<{}>) => {
  const state = useContext(DeflectorContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element !== null) {
      const { left, top, bottom, right } = element.getBoundingClientRect();

      const width = Math.trunc(right - left);
      const height = Math.trunc(bottom - top);

      const heightCenter = Math.trunc(top + height / 2);
      const widthCenter = Math.trunc(left + width / 2);

      element.style.setProperty(
        "--offset-x",
        `${(widthCenter - window.innerWidth / 2) / (window.innerWidth / 2)}`
      );
      element.style.setProperty(
        "--offset-y",
        `${(heightCenter - window.innerHeight / 2) / (window.innerHeight / 2)}`
      );
    }
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(css.itemWrapper, {
        [css.active]: state?.isDeflectorActive,
        [css.inactive]: !state?.isDeflectorActive
      })}
    >
      {children}
    </div>
  );
};
