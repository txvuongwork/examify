import type { ExamQuestion } from "@/types";

export function isQuestionAnswered(
  question: ExamQuestion,
  value: unknown,
): boolean {
  switch (question.type) {
    case "multiple_choice":
      return value !== undefined;
    case "true_false":
      return value != null && Object.keys(value as object).length === 4;
    case "short_answer":
      return typeof value === "string" && value.trim() !== "";
  }
}
