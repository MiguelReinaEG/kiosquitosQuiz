// City builder functions

import { genItems } from "./common.builders";

import { Category } from "@/interfaces/categories.types";

export const buildCategory = (overrides?: Partial<Category>): Category => {
  return {
    id: 1,
    name: "Groceries",
    amount: 100,
    emoji: "🍔",
    updated_at: new Date().toISOString(),
    ...overrides,
  };
};

export const genCategories = (quantity?: number): Category[] => {
  return genItems(buildCategory, quantity);
};
