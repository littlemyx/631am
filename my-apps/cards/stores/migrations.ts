import { Pair } from "./cards";

export const migration = (version: number) => {
  switch (version) {
    case 0:
      return (persistedState: any) => {
        const store = {
          ...persistedState,
          cards: Object.entries(persistedState.cards).reduce(
            (prev, [key, value]) => {
              const { rating, ...rest } = value as Pair<any, any> & {
                rating: number;
              };
              return {
                ...prev,
                [key]: {
                  ...(rest as Pair<any, any>),
                  weight: 0,
                  lastReviewed: null,
                  nextReview: new Date(
                    new Date().getTime() + 24 * 60 * 60 * 1000
                  )
                }
              };
            },
            {}
          )
        };
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
