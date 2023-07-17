import { useState } from "react";

import { DeflectionHook } from "./types";

export const useDeflectorActivator = (): DeflectionHook => {
  const [isDeflectorActive, setIsDeflectorActive] = useState(false);

  const toggleDeflector = () => {
    setIsDeflectorActive(isDeflectorActive => !isDeflectorActive);
  };

  return { isDeflectorActive, toggleDeflector };
};
