import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

import styles from "./CategoryResume.styles";
import { CategoryResumeProps as Props } from "./CategoryResume.types";
import CategoryPlaceholder from "../CategoryPlaceholder/CategoryPlaceholder";
import EmptyState from "@/components/global/EmptyState/EmptyState";
import { getCategoriesKey } from "@/services/finance.services.hooks";
import { useFetchCategories } from "@/services/finance.services.hooks";

const CategoryResume: React.FC<Props> = (props) => {
  const queryClient = useQueryClient();
  const { data: categories, isFetching } = useFetchCategories();

  const onRefresh = () => {
    queryClient.refetchQueries({ queryKey: getCategoriesKey() });
  };

  return (
    <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {isFetching ? <CategoryPlaceholder /> : null}
        {categories && categories.length > 0 ? (
          categories.map((category, index) => {
            const { emoji = "", name, id } = category;

            return (
              <View key={index} style={styles.categoryContainer}>
                <View style={styles.top}>
                  <Text style={styles.emoji}>{emoji}</Text>
                </View>
                <View style={styles.bottom}>
                  <Link href={`/category/${id}`}>
                    <Text style={styles.title} numberOfLines={1}>
                      {name}
                    </Text>
                  </Link>
                </View>
              </View>
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
