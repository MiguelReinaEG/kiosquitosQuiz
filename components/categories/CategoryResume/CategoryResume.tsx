import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { ScrollView, ListRenderItem, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

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

  const onPress = (categoryId: number) => {};

  return (
    <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {isFetching ? <CategoryPlaceholder /> : null}
        {categories && categories.length > 0 ? (
          categories.map((category, index) => {
            const { emoji = "", name, id } = category;

            return (
              <TouchableOpacity
                key={index}
                style={styles.categoryContainer}
                onPress={() => onPress(id)}
              >
                <View style={styles.top}>
                  <Text style={styles.emoji}>{emoji}</Text>
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.title} numberOfLines={1}>
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <EmptyState text="No categories found" onPress={onRefresh} />
        )}
      </View>
    </ScrollView>
  );
};

CategoryResume.defaultProps = {};

export default CategoryResume;
