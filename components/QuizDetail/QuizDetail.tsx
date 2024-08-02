import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./QuizDetail.styles";
import { QuizDetailProps as Props } from "./QuizDetail.types";
import { useFetchQuizDetail } from "@/services/finance.services.hooks";
import RadioButton from "./RadioButton";

const QuizDetail: React.FC<Props> = (props) => {
  const { quizId } = props;
  const { data: quiz } = useFetchQuizDetail(+quizId);
  const { question } = quiz ?? {};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {question?.map((item, index) => {
          const { question, option } = item;

          return (
            <View key={index}>
              <View style={styles.content}>
                <Text style={styles.text}>{item.question}</Text>
              </View>
              <View>
                {option.map((opt, idx) => {
                  return (
                    <RadioButton
                      key={idx}
                      value={opt.id}
                      label={opt.option}
                      selected={false}
                      onPress={() => {}}
                    />
                  );
                })}
                <Text>--------------------</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

QuizDetail.defaultProps = {};

export default QuizDetail;
