import { EDifficultyLevel, EKnowledgeDomain, type EExamPart } from "@/enums";
import type {
  Exam,
  ExamQuestion,
  MultipleChoiceQuestion,
  OptionLabel,
  ShortAnswerQuestion,
  TrueFalseLabel,
  TrueFalseQuestion,
} from "@/types";

export function isMultipleChoice(q: ExamQuestion): q is MultipleChoiceQuestion {
  return q.type === "multiple_choice";
}

export function isTrueFalse(q: ExamQuestion): q is TrueFalseQuestion {
  return q.type === "true_false";
}

export function isShortAnswer(q: ExamQuestion): q is ShortAnswerQuestion {
  return q.type === "short_answer";
}

export function getQuestionsByPart<P extends EExamPart>(
  exam: Exam,
  part: P,
): Extract<ExamQuestion, { part: P }>[] {
  return exam.questions.filter(
    (q): q is Extract<ExamQuestion, { part: P }> => q.part === part,
  );
}

export function getQuestionById(
  exam: Exam,
  id: string,
): ExamQuestion | undefined {
  return exam.questions.find((q) => q.id === id);
}

export function getQuestionsByDifficulty(
  exam: Exam,
  level: EDifficultyLevel,
): ExamQuestion[] {
  return exam.questions.filter((q) => q.difficulty === level);
}

export function getAppliedQuestions(exam: Exam): ExamQuestion[] {
  return exam.questions.filter((q) => q.isApplied);
}

export function checkMultipleChoice(
  question: MultipleChoiceQuestion,
  userAnswer: OptionLabel,
): boolean {
  return question.correctAnswer === userAnswer;
}

export function checkShortAnswer(
  question: ShortAnswerQuestion,
  userAnswer: string,
): boolean {
  const normalized = userAnswer.trim().toLowerCase();
  return question.acceptedAnswers.some(
    (ans) => ans.toLowerCase() === normalized,
  );
}

export function gradeTrueFalse(
  question: TrueFalseQuestion,
  userAnswers: Record<TrueFalseLabel, boolean>,
): number {
  return question.items.reduce(
    (score, item) =>
      userAnswers[item.label] === item.isTrue ? score + 1 : score,
    0,
  );
}

export function getDifficultyDistribution(
  exam: Exam,
): Record<EDifficultyLevel, number> {
  const dist = {} as Record<EDifficultyLevel, number>;
  for (const level of Object.values(EDifficultyLevel)) dist[level] = 0;
  for (const q of exam.questions) dist[q.difficulty]++;
  return dist;
}

export function getDomainDistribution(
  exam: Exam,
): Record<EKnowledgeDomain, number> {
  const dist = {} as Record<EKnowledgeDomain, number>;
  for (const d of Object.values(EKnowledgeDomain)) dist[d] = 0;
  for (const q of exam.questions) dist[q.domain]++;
  return dist;
}
