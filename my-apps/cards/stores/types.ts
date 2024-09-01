import { error } from "console";
import { text } from "stream/consumers";
import { z } from "zod";

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

export const CardsSchema = z.record(
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

export const TypeOfError = z.enum(["import", "export"]);

export type TypeOfError = z.infer<typeof TypeOfError>;

export const Errors = z.record(TypeOfError, z.object({ text: z.string() }));

export type Errors = z.infer<typeof Errors>;

// Определение схемы состояния с помощью Zod
export const StateSchema = z.object({
  items: z.record(z.string(), z.object({ id: z.string(), value: z.any() })),
  cards: CardsSchema
});

// Тип состояния на основе схемы Zod
export type CardsState = z.infer<typeof StateSchema>;

export const ErrorSchema = z.object({
  errors: Errors
});

export type ErrorState = z.infer<typeof ErrorSchema>;

export interface ErrorsActions {
  resetError: (errorType: TypeOfError) => void;
}

// interface CardsState {
//   items: Record<ID, Item<any>>;
//   cards: Record<ID, Pair<any, any>>;
// }

export interface CardsActions {
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

export type StoreType = CardsState & CardsActions & ErrorState & ErrorsActions;
