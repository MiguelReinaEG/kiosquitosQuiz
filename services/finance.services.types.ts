import { Category } from "@/interfaces/categories.types";

export interface CreateCategoryPayload
  extends Pick<Category, "name" | "amount"> {}

export interface UpdateCategoryPayload extends CreateCategoryPayload {
  id: Category["id"];
}

export interface DeleteCategoryPayload {
  id: Category["id"];
}

export interface CommonResponse {
  data: Category;
}
