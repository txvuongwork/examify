import { EDifficultyLevel, EExamPart, EKnowledgeDomain } from "@/enums";

export type OptionLabel = "A" | "B" | "C" | "D";

export type TrueFalseLabel = "a" | "b" | "c" | "d";

interface BaseQuestion {
  /** Unique identifier, e.g. "P1_Q1", "P2_Q13", "P3_Q17" */
  id: string;
  /** Sequential number in the whole exam (1–22) */
  questionNumber: number;
  /** Which exam section this belongs to */
  part: EExamPart;
  /** Display label, e.g. "Câu 1." */
  label: string;
  /** Full question text (LaTeX-like plain text notation) */
  stem: string;
  /** Cognitive level */
  difficulty: EDifficultyLevel;
  /** Subject domain */
  domain: EKnowledgeDomain;
  /** Whether this is a real-world application problem */
  isApplied: boolean;
}

export interface MultipleChoiceOption {
  label: OptionLabel;
  text: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple_choice";
  part: EExamPart.I;
  options: readonly [
    MultipleChoiceOption & { label: "A" },
    MultipleChoiceOption & { label: "B" },
    MultipleChoiceOption & { label: "C" },
    MultipleChoiceOption & { label: "D" },
  ];
  correctAnswer: OptionLabel;
  explanation: string;
}

export interface TrueFalseItem {
  label: TrueFalseLabel;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: "true_false";
  part: EExamPart.II;
  /** Context paragraph shown before the four sub-statements */
  context: string;
  items: readonly [
    TrueFalseItem & { label: "a" },
    TrueFalseItem & { label: "b" },
    TrueFalseItem & { label: "c" },
    TrueFalseItem & { label: "d" },
  ];
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: "short_answer";
  part: EExamPart.III;
  /** Accepted exact answer(s) as string(s) */
  acceptedAnswers: readonly [string, ...string[]];
  /** Step-by-step solution */
  solutionSteps: readonly string[];
  /** Final conclusion sentence */
  conclusion: string;
}

export type ExamQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | ShortAnswerQuestion;

export interface ExamMetadata {
  title: string;
  subject: string;
  examCode: string;
  year: number;
  curriculum: string;
  durationMinutes: number;
  parts: {
    [EExamPart.I]: { label: string; count: number; instructions: string };
    [EExamPart.II]: { label: string; count: number; instructions: string };
    [EExamPart.III]: { label: string; count: number; instructions: string };
  };
}

export interface Exam {
  metadata: ExamMetadata;
  questions: readonly ExamQuestion[];
}
