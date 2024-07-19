import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import Category from "@/components/categories/Category/Category";
import { useFetchCategory } from "@/services/finance.services.hooks";

const CategoryScreen = () => {
  const { setOptions } = useNavigation();
  const local = useLocalSearchParams<{ id: string }>();
  const { id: categoryId } = local;
  const { data: category } = useFetchCategory(+categoryId);
  const { name } = category ?? {};

  useEffect(() => {
    setOptions({
      headerTitle: name ? name : "",
    });
  }, [setOptions, name]);

  return <Category />;
};

export default CategoryScreen;
