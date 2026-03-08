import type { Exam, OptionLabel, TrueFalseLabel } from "@/types";
import { z } from "zod";

export type TrueFalseAnswerValue = Partial<Record<TrueFalseLabel, boolean>>;

export type ExamFormValues = Record<
  string,
  OptionLabel | TrueFalseAnswerValue | string | undefined
>;

export function createExamFormSchema(exam: Exam) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shape: Record<string, any> = {};

  for (const question of exam.questions) {
    switch (question.type) {
      case "multiple_choice":
        shape[question.id] = z.enum(["A", "B", "C", "D"]);
        break;
      case "true_false":
        shape[question.id] = z.object({
          a: z.boolean(),
          b: z.boolean(),
          c: z.boolean(),
          d: z.boolean(),
        });
        break;
      case "short_answer":
        shape[question.id] = z.string().min(1, "Vui lòng nhập đáp án");
        break;
      default:
        break;
    }
  }

  return z.object(shape);
}

export function createExamDefaultValues(exam: Exam): ExamFormValues {
  const values: ExamFormValues = {};

  for (const question of exam.questions) {
    switch (question.type) {
      case "multiple_choice":
        values[question.id] = undefined;
        break;
      case "true_false":
        values[question.id] = {};
        break;
      case "short_answer":
        values[question.id] = "";
        break;
      default:
        break;
    }
  }

  return values;
}
