import { z } from "zod";

import { CardsState_V_NEXT } from "../v1";

type ID = string;

interface Item<T> {
  id: ID;
  value: T;
}

interface Pair<T, U> {
  rating: number;
  id: ID;
  pair: [Item<T>, Item<U>];
}

const CardsSchema = z.record(
  z.string(),
  z.object({
    rating: z.number(),
    id: z.string(),
    pair: z.tuple([
      z.object({
        id: z.string(),
        value: z.any()
      }),
      z.object({
        id: z.string(),
        value: z.any()
      })
    ])
  })
);

type CardsType = z.infer<typeof CardsSchema>;

// Определение схемы состояния с помощью Zod
const StateSchema = z.object({
  items: z.record(z.string(), z.object({ id: z.string(), value: z.any() })),
  cards: CardsSchema
});
// Тип состояния на основе схемы Zod
type CardsState = z.infer<typeof StateSchema>;
// interface CardsState {
//   items: Record<ID, Item<any>>;
//   cards: Record<ID, Pair<any, any>>;
// }
interface CardsActions {
  deserialize: (state: string) => void;
  increaseRating: (id: ID) => void;
  decreaseRating: (id: ID) => void;
  updateItem: (id: ID, pair: Item<any>) => void;
  updatePair: (id: ID, item: Pair<any, any>) => void;
  addItem: (id: ID, value: Item<any>) => void;
  addPair: (id: ID, value: Pair<any, any>) => void;
  removeItem: (id: ID) => void;
  removePair: (id: ID) => void;
  lastGenerated: Pair<any, any>[];
  generateSome: (length: number) => void;
}

export const converter = (
  persistedState: CardsState & CardsActions
): CardsState_V_NEXT => {
  const store = {
    ...persistedState,
    cards: Object.entries(persistedState.cards).reduce((prev, [key, value]) => {
      const { rating, ...rest } = value;
      return {
        ...prev,
        [key]: {
          ...rest,
          weight: 0,
          lastReviewed: null,
          nextReview: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        }
      };
    }, {})
  };

  return store;
};
