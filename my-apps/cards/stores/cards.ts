import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { z } from "zod";
import { migration } from "./migrations";
import { VERSION } from "./version";

export type ID = string;

export interface Item<T> {
  id: ID;
  value: T;
}

export interface Pair<T, U> {
  weight: number;
  lastReviewed: Date | null;
  nextReview: Date;
  id: ID;
  pair: [Item<T>, Item<U>];
}

const CardsSchema = z.record(
  z.string(),
  z.object({
    weight: z.number(),
    lastReviewed: z.date().nullable(),
    nextReview: z.date(),
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

export type CardsType = z.infer<typeof CardsSchema>;

// Определение схемы состояния с помощью Zod
export const StateSchema = z.object({
  items: z.record(z.string(), z.object({ id: z.string(), value: z.any() })),
  cards: CardsSchema
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
        cards: {} as CardsType,
        lastGenerated: [] as Pair<any, any>[],

        increaseRating: id =>
          set(state => {
            const now = new Date();

            // Увеличение интервала при правильном ответе
            state.cards[id].weight *= 2;

            // Обновляем даты
            state.cards[id].lastReviewed = now;
            state.cards[id].nextReview = new Date(
              now.getTime() + state.cards[id].weight * 24 * 60 * 60 * 1000
            ); // Конвертация веса в дни
          }),
        decreaseRating: id =>
          set(state => {
            const now = new Date();

            // Уменьшение интервала при неправильном ответе
            state.cards[id].weight = Math.max(1, state.cards[id].weight / 2); // Минимальный вес не должен быть меньше 1

            // Обновляем даты
            state.cards[id].lastReviewed = now;
            state.cards[id].nextReview = new Date(
              now.getTime() + state.cards[id].weight * 24 * 60 * 60 * 1000
            ); // Конвертация веса в дни
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
            const currentDate = new Date();
            const cards = Object.values(state.cards);
            // Фильтрация карточек, которые нужно показать (дата nextReview <= текущая дата)
            let dueCards = cards.filter(
              card => new Date(card.nextReview) <= currentDate
            );

            // Если карточек с истекшей датой nextReview нет, выбираем самые ранние карточки на будущее
            if (dueCards.length === 0) {
              // Сортировка по дате следующей проверки
              dueCards = cards.slice().sort((a, b) => {
                return (
                  new Date(a.nextReview).getTime() -
                  new Date(b.nextReview).getTime()
                );
              });
            } else {
              // Сортируем карточки по дате следующей проверки, начиная с самых старых
              dueCards.sort(
                (a, b) =>
                  new Date(a.nextReview).getTime() -
                  new Date(b.nextReview).getTime()
              );
            }

            return { lastGenerated: dueCards.slice(0, length) };
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
        name: "cards-storage",
        version: VERSION, // a migration will be triggered if the version in the storage mismatches this one
        migrate: (persistedState, version) => {
          let currentVersion = version;
          let store = persistedState;
          while (currentVersion < VERSION) {
            ({ version: currentVersion, store } =
              migration(currentVersion)(store));
          }

          return store;
        }
      }
    )
  )
);
