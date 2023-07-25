import React, { PropsWithChildren, useContext } from "react";
import classNames from "classnames";

import { DeflectorContext } from "./context";

import css from "./Deflector.module.css";

interface BackgroundProps {
  perspectiveClassName?: string;
  backgroundClassName?: string;
}

export const Background = ({
  children,
  perspectiveClassName,
  backgroundClassName
}: PropsWithChildren<BackgroundProps>) => {
  const state = useContext(DeflectorContext);

  return (
    <div
      className={classNames(
        perspectiveClassName,
        css.backgroundPespectiveLayer
      )}
    >
      <div
        className={classNames(backgroundClassName, css.backgroundWrapper, {
          [css.active]: state?.isDeflectorActive,
          [css.inactive]: !state?.isDeflectorActive
        })}
      >
        {children}
      </div>
    </div>
  );
};
