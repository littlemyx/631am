import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef
} from "react";

import { useDeflectorActivator } from "./hooks";

import { DeflectorContext } from "./context";

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  const state = useDeflectorActivator();
  const initialOffset = useRef(0);

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    document.documentElement.style.setProperty(
      "--deflation-x",
      `${clientX + initialOffset.current - window.innerWidth / 2}`
    );
    document.documentElement.style.setProperty(
      "--deflation-y",
      `${clientY + initialOffset.current - window.innerHeight / 2}`
    );
    document.documentElement.style.setProperty(
      "--deflation-x-ratio",
      `${(clientX - window.innerWidth / 2) / (window.innerWidth / 2)}`
    );
    document.documentElement.style.setProperty(
      "--deflation-y-ratio",
      `${(clientY - window.innerHeight / 2) / (window.innerHeight / 2)}`
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
