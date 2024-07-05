import React from "react";

import styles from "./CategoryHeader.styles";
import { CategoryHeaderProps as Props } from "./CategoryHeader.types";

import { useFinanceStore } from "@/stores/finance/finance.store";
import { Text, TouchableOpacity, View } from "react-native";

const CategoryHeader: React.FC<Props> = (props) => {
  const handleCreateCategory = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <TouchableOpacity style={styles.button} onPress={handleCreateCategory}>
        Add Category
      </TouchableOpacity>
    </View>
  );
};

CategoryHeader.defaultProps = {};

export default CategoryHeader;
