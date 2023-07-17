import React, { PropsWithChildren, useCallback, useEffect } from "react";

import { useDeflectorActivator } from "./hooks";

import { DeflectorContext } from "./context";

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  const state = useDeflectorActivator();

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    document.documentElement.style.setProperty(
      "--deflation-x",
      `${clientX - window.innerWidth / 2}px`
    );
    document.documentElement.style.setProperty(
      "--deflation-y",
      `${clientY - window.innerHeight / 2}px`
    );
  }, []);

  useEffect(() => {
    if (state?.isDeflectorActive) {
      window.addEventListener("mousemove", mouseMoveHandler);
    } else {
      document.documentElement.style.setProperty("--deflation-x", `0px`);
      document.documentElement.style.setProperty("--deflation-y", `0px`);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [state?.isDeflectorActive, mouseMoveHandler]);

  return (
    <DeflectorContext.Provider value={state}>
      {children}
    </DeflectorContext.Provider>
  );
};
