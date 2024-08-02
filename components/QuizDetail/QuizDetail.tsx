import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./QuizDetail.styles";
import { QuizDetailProps as Props } from "./QuizDetail.types";
import { useFetchQuizDetail } from "@/services/finance.services.hooks";

const QuizDetail: React.FC<Props> = (props) => {
  const { quizId } = props;
  const { data: quiz } = useFetchQuizDetail(+quizId);
  const { question } = quiz ?? {};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {question?.map((item, idx) => {
          return (
            <View key={idx}>
              <Text>{item.question}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

QuizDetail.defaultProps = {};

export default QuizDetail;
