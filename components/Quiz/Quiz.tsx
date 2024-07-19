import React from "react";
import { Text, Pressable } from "react-native";

import styles from "./Quiz.styles";
import { QuizProps as Props } from "./Quiz.types";
import { getCreatedAt } from "@/utils/date.utils";
import { Link } from "expo-router";

const Quiz: React.FC<Props> = (props) => {
  const { quiz } = props;
  const { title, created_at, id } = quiz ?? {};

  return (
    <Link asChild href={`/quiz/${id}`} style={styles.container}>
      <Pressable>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.createdAt}>{getCreatedAt(created_at)}</Text>
      </Pressable>
    </Link>
  );
};

Quiz.defaultProps = {};

export default Quiz;
