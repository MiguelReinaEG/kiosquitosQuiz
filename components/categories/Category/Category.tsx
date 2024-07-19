import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import styles from "./Category.styles";
import { CategoryProps as Props } from "./Category.types";
import { useFetchCategory } from "@/services/finance.services.hooks";
import { getCreatedAt } from "@/utils/date.utils";
import QuizList from "@/components/QuizList/QuizList";

const Category: React.FC<Props> = (props) => {
  const local = useLocalSearchParams<{ id: string }>();
  const { id: categoryId } = local;
  const { data: category } = useFetchCategory(+categoryId);
  const { emoji, amount, created_at } = category ?? {};

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={[styles.title, styles.emoji]}>{emoji}</Text>
        <Text style={styles.title}>Number of quizzes: {amount ?? 0}</Text>
        <Text style={styles.title}>{getCreatedAt(created_at)}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <QuizList />
      </View>
    </View>
  );
};

Category.defaultProps = {};

export default Category;
