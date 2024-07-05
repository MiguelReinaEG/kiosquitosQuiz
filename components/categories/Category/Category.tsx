import React from "react";

import styles from "./Category.styles";
import { CategoryProps as Props } from "./Category.types";

import { useDeleteCategory } from "@/services/finance.services.hooks";
import { Text, TouchableOpacity, View } from "react-native";
import { buildCategory } from "@/utils/testUtils/builders/categories.builders";
const category = buildCategory();

const Category: React.FC<Props> = (props) => {
  const deleteMutation = useDeleteCategory();
  const { mutateAsync: deleteCategory, reset: resetDelete } = deleteMutation;
  const { name, amount, id } = category;

  const deleteCategoryHandler = async () => {
    try {
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
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>Limit: {amount}</Text>
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
