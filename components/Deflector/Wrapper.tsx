import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
  useRef
} from "react";

import { useDeflectorActivator } from "./hooks";

import { DeflectorContext } from "./context";

interface Props {
  xProp: number;
  yProp: number;
}

export const Wrapper = ({
  children,
  xProp,
  yProp
}: PropsWithChildren<Props>) => {
  const state = useDeflectorActivator();
  const initialOffset = useRef(0);

  const [deflectionX, setDeflectionX] = useState(0);
  const [deflectionY, setDeflectionY] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--deflation-x",
      `${deflectionX + initialOffset.current}`
    );
    document.documentElement.style.setProperty(
      "--deflation-y",
      `${deflectionY + initialOffset.current}`
    );
    document.documentElement.style.setProperty(
      "--deflation-x-ratio",
      `${deflectionX / (window.innerWidth / 2)}`
    );
    document.documentElement.style.setProperty(
      "--deflation-y-ratio",
      `${deflectionY / (window.innerHeight / 2)}`
    );
  }, [deflectionX, deflectionY]);

  useEffect(() => {
    setDeflectionX(xProp);
    setDeflectionY(yProp);
  }, [xProp, yProp]);

  return (
    <DeflectorContext.Provider value={state}>
      {children}
    </DeflectorContext.Provider>
  );
};
