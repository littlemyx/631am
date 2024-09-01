import { converter } from "./migrations/versions/v0";

export const migration = (version: number) => {
  switch (version) {
    case 0:
      return (persistedState: any) => {
        const store = converter(persistedState);

        return { version: 1, store };
      };
    case 1:
      new Error("Migration not implemented");
    default:
      return (persistedState: any) => {
        return persistedState;
      };
  }
};
