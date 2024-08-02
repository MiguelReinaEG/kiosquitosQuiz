import { useQuery } from "@tanstack/react-query";

import { fetchCategories, fetchQuizDetail } from "./finance.services";
import { fetchCategoryById } from "./finance.services";
import { fetchQuizzesByCategoryId } from "./finance.services";
import { Category } from "@/interfaces/categories.types";
import { useAuthStore } from "@/stores/auth/auth.store";
import { Quiz } from "@/interfaces/quiz.types";

export const getCategoriesKey = () => {
  return ["categories"];
};

export const getExpensesKey = () => {
  return ["expenses"];
};

export const useFetchCategories = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: getCategoriesKey(),
    queryFn: fetchCategories,
    enabled: !!user,
  });
};

export const useFetchCategory = (categoryId: Category["id"]) => {
  return useQuery({
    queryKey: ["categories", { categoryId }],
    queryFn: () => fetchCategoryById(categoryId),
    enabled: typeof categoryId !== "undefined",
  });
};

export const useFetchQuizzesById = (categoryId?: Category["id"]) => {
  return useQuery({
    queryKey: ["quizzes", { categoryId }],
    queryFn: () => fetchQuizzesByCategoryId(categoryId!),
    enabled: typeof categoryId !== "undefined",
  });
};

export const useFetchQuizDetail = (quizId?: Quiz["id"]) => {
  return useQuery({
    queryKey: ["quiz-detail", { quizId }],
    queryFn: () => fetchQuizDetail(quizId!),
    enabled: typeof quizId !== "undefined",
    staleTime: 0,
  });
};
