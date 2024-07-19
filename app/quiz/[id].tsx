import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

import QuizDetail from "@/components/QuizDetail/QuizDetail";
import { useFetchQuizDetail } from "@/services/finance.services.hooks";

const QuizScreen = () => {
  const { setOptions } = useNavigation();
  const local = useLocalSearchParams<{ id: string }>();
  const { id: quizId } = local;
  const { data: quiz } = useFetchQuizDetail(+quizId);
  const { title } = quiz ?? {};
  console.log({ quiz });

  useEffect(() => {
    setOptions({
      headerTitle: title ? title : "",
    });
  }, [setOptions, title]);

  return <QuizDetail />;
};

export default QuizScreen;
