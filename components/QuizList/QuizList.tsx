import React from "react";
import { FlatList, ListRenderItem, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import styles from "./QuizList.styles";
import { QuizListProps as Props } from "./QuizList.types";
import { useFetchQuizzesById } from "@/services/finance.services.hooks";
import { Quiz as IQuiz } from "@/interfaces/quiz.types";
import Quiz from "../Quiz/Quiz";
import EmptyState from "../global/EmptyState/EmptyState";

const QuizList: React.FC<Props> = (props) => {
  const local = useLocalSearchParams<{ id: string }>();
  const { id: categoryId } = local;
  const fetchQuizzes = useFetchQuizzesById(+categoryId);
  const { data: quizzes, refetch, status, error } = fetchQuizzes;

  const renderItem: ListRenderItem<IQuiz> = (list) => {
    const { item } = list;
    return <Quiz quiz={item} />;
  };

  const renderEmptyState = () => {
    if (status === "success") {
      return (
        <EmptyState
          onPress={async () => await refetch()}
          text="No quizzes found. Pull to refresh."
        />
      );
    }
    return null;
  };

  const renderStates = () => {
    if (status === "error") return <EmptyState text={error.message} />;

    if (status === "pending") {
      return (
        <>
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </>
      );
    }
    return null;
  };

  return (
    <FlatList
      data={quizzes}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      keyExtractor={(_item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={renderEmptyState}
      ListFooterComponent={renderStates}
    />
  );
};

QuizList.defaultProps = {};

export default QuizList;
