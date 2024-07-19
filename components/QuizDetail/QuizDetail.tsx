import React from "react";
import { View, Text } from "react-native";

import styles from "./QuizDetail.styles";
import { QuizDetailProps as Props } from "./QuizDetail.types";

const QuizDetail: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>QuizDetail</Text>
    </View>
  );
};

QuizDetail.defaultProps = {};

export default QuizDetail;
