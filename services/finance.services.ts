import { PostgrestSingleResponse } from "@supabase/supabase-js";

import { Category } from "@/interfaces/categories.types";
import { supabase } from "@/config/supabase";
import { Quiz } from "@/interfaces/quiz.types";

export const fetchCategories = async () => {
  const response: PostgrestSingleResponse<Category[]> = await supabase
    .from("categories")
    .select("*");

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error("No categories found");
  return response.data;
};

export const fetchCategoryById = async (id: Category["id"]) => {
  const response: PostgrestSingleResponse<Category> = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error(`No category ${id} found`);
  return response.data;
};

export const fetchQuizzesByCategoryId = async (id: Category["id"]) => {
  const response: PostgrestSingleResponse<Quiz[]> = await supabase
    .from("quiz")
    .select("*")
    .eq("category_id", id);

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error(`No quizzes fround for category ${id}`);
  return response.data;
};

export const fetchQuizDetail = async (id: Quiz["id"]) => {
  const response: PostgrestSingleResponse<Quiz> = await supabase
    .from("quiz")
    .select("*")
    .eq("id", id)
    .single();

  if (response.error) throw Error(response.error.message);
  if (!response.data) throw new Error(`No quizzes fround for category ${id}`);
  return response.data;
};
