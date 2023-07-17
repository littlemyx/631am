import { createContext } from "react";

import { DeflectionHook } from "./types";

export const DeflectorContext = createContext<DeflectionHook | null>(null);
