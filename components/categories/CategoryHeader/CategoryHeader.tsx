import React from "react";

import styles from "./CategoryHeader.styles";
import { CategoryHeaderProps as Props } from "./CategoryHeader.types";

import { Text, TouchableOpacity, View } from "react-native";

const CategoryHeader: React.FC<Props> = (props) => {
  const handleCreateCategory = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <TouchableOpacity style={styles.button} onPress={handleCreateCategory}>
        <Text>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

CategoryHeader.defaultProps = {};

export default CategoryHeader;
