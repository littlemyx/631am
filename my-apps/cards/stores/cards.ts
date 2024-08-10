import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { z } from "zod";

export type ID = string;

export interface Item<T> {
  id: ID;
  value: T;
}

export interface Pair<T, U> {
  rating: number;
  id: ID;
  pair: [Item<T>, Item<U>];
}

// Определение схемы состояния с помощью Zod
export const StateSchema = z.object({
  items: z.record(z.string(), z.object({ id: z.string(), value: z.any() })),
  cards: z.record(
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
  )
});

// Тип состояния на основе схемы Zod
export type CardsState = z.infer<typeof StateSchema>;

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

export const useCardsStore = create<CardsState & CardsActions>()(
  immer(
    persist(
      set => ({
        items: {},
        cards: {},
        lastGenerated: [] as Pair<any, any>[],

        increaseRating: id =>
          set(state => {
            state.cards[id].rating += 1;
          }),
        decreaseRating: id =>
          set(state => {
            state.cards[id].rating -= 1;
          }),
        updateItem: (id, item) =>
          set(state => {
            state.items[id] = item;
          }),
        updatePair: (id, pair) =>
          set(state => {
            state.cards[id] = pair;
          }),
        removeItem: (id: ID) =>
          set(state => {
            delete state.items[id];
          }),
        removePair: (id: ID) =>
          set(state => {
            delete state.cards[id];
          }),
        addItem: (id: ID, value: Item<any>) =>
          set(state => {
            state.items[id] = value;
          }),
        addPair: (id: ID, value: Pair<any, any>) =>
          set(state => ({
            cards: { ...state.cards, [id]: value },
            items: {
              ...state.items,
              [value.pair[0].id]: value.pair[0],
              [value.pair[1].id]: value.pair[1]
            }
          })),

        generateSome: (length: number) =>
          set(state => {
            const store = Object.values(state.cards);
            return { lastGenerated: store };
          }),

        deserialize: (data: string) =>
          set(state => {
            const parsedState = JSON.parse(data || "{}");
            const result = StateSchema.safeParse(parsedState);

            if (result.success) {
              const validState = result.data as CardsState;
              const oldCards = state.cards;
              const oldItems = state.items;

              return {
                items: { ...oldItems, ...validState.items },
                cards: { ...oldCards, ...validState.cards }
              };
            } else {
              console.error("Invalid state:", result.error.errors);
            }
          })
      }),
      {
        name: "cards-storage"
      }
    )
  )
);
