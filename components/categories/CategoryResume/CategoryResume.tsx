import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import styles from "./CategoryResume.styles";
import { CategoryResumeProps as Props } from "./CategoryResume.types";
import CategoryPlaceholder from "../CategoryPlaceholder/CategoryPlaceholder";

import EmptyState from "@/components/global/EmptyState/EmptyState";
import { Category } from "@/interfaces/categories.types";
import { getCategoriesKey } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";

const CategoryResume: React.FC<Props> = (props) => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchCategories();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  const renderItem: ListRenderItem<Category> = (list) => {
    const { item: category } = list;
    const { limit, name } = category;
    return (
      <View style={styles.categoryContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>Limit: {limit}</Text>
        </View>
        <View style={styles.rightContainer}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.CategoryTitle}>Your last incomes</Text>
      <View style={styles.flatlist}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
          ListEmptyComponent={
            isFetching ? (
              <CategoryPlaceholder />
            ) : (
              <EmptyState text="No categories found" onPress={onRefresh} />
            )
          }
        />
      </View>
    </View>
  );
};

CategoryResume.defaultProps = {};

export default CategoryResume;
