import { Category } from "./categories.types";

export interface Expenses {
  id: string;
  amount: number;
  description: string;
  category: Category["id"];
  updated_at?: string;
}
