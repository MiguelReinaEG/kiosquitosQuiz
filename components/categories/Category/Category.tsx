import React from "react";

import styles from "./Category.styles";
import { CategoryProps as Props } from "./Category.types";

import { useDeleteCategory } from "@/services/finance.services.hooks";
import { useFetchCategory } from "@/services/finance.services.hooks";
import { Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { formatDate } from "@/utils/date.utils";

const Category: React.FC<Props> = (props) => {
  const local = useLocalSearchParams<{ id: string }>();
  const { id: categoryId } = local;
  const { data: category } = useFetchCategory(categoryId);
  const deleteMutation = useDeleteCategory();
  const { mutateAsync: deleteCategory, reset: resetDelete } = deleteMutation;
  const { emoji, amount, id, created_at } = category ?? {};

  const deleteCategoryHandler = async () => {
    try {
      if (!id) return;
      await deleteCategory({ id });
      resetDelete();
    } catch (e) {
      console.warn(e);
    }
  };

  const editCategoryHandler = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{emoji}</Text>
        <Text style={styles.title}>Number of quizzes: {amount}</Text>
        <Text style={styles.title}>Created: {formatDate(created_at)}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={editCategoryHandler}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCategoryHandler}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Category.defaultProps = {};

export default Category;
