import { create } from "zustand";

export enum RouteStates {
  MAIN = "MAIN",
  STACK = "STACK",
  NEW_ENTITY = "NEW_ENTITY",
  EDIT = "EDIT",
  SETTINGS = "SETTINGS"
}

interface RoutesState {
  route: RouteStates;
  change: (newRoute: RouteStates) => void;
  goToMain: () => void;
}

export const useRoutesStore = create<RoutesState>()(set => ({
  route: RouteStates.MAIN,
  change: newRoute => set(state => ({ route: newRoute })),
  goToMain: () => set(state => ({ route: RouteStates.MAIN }))
}));
