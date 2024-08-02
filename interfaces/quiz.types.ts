// Quizzes interfaces and types

export interface Quiz {
  category_id: number;
  created_at: string;
  id: number;
  title: string;
  question: Question[];
}

export interface Question {
  id: number;
  level: "Easy" | "Normal" | "Hard" | "Epic";
  points: number;
  quiz_id: number;
  question: string;
  created_at: string;
}
