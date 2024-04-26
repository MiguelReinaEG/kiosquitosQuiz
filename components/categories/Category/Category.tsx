import React from "react";

import styles from "./Category.styles";
import { CategoryProps as Props } from "./Category.types";

import { useDeleteCategory } from "@/services/finance.services.hooks";
import { useFinanceStore } from "@/stores/finance/finance.store";
import { Text, TouchableOpacity, View } from "react-native";

const Category: React.FC<Props> = (props) => {
  const deleteMutation = useDeleteCategory();
  const { mutateAsync: deleteCategory, reset: resetDelete } = deleteMutation;
  const { isPending } = deleteMutation;
  const { category } = props;
  const { name, limit, id } = category;
  const setCategoryModalConfig = useFinanceStore(
    (state) => state.setCategoryModalConfig
  );

  const deleteCategoryHandler = async () => {
    try {
      await deleteCategory({ id });
      resetDelete();
    } catch (e) {
      console.warn(e);
    }
  };

  const editCategoryHandler = async () => {
    setCategoryModalConfig({ visible: true, mode: "update", category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>Limit: {limit}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={editCategoryHandler}>Edit</TouchableOpacity>
        <TouchableOpacity onPress={deleteCategoryHandler}>
          Delete
        </TouchableOpacity>
      </View>
    </View>
  );
};

Category.defaultProps = {};

export default Category;
