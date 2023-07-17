import React, { PropsWithChildren, useContext } from "react";

import { DeflectorContext } from "./context";

import { DeflectionHook } from "./types";

interface ConsumerProps {
  children: (state: DeflectionHook) => React.ReactElement;
}

export const Consumer = ({ children }: ConsumerProps) => {
  const state = useContext(DeflectorContext);

  return children(state!);
};
