import { BIOLOGY_EXAM_1 } from "./biology";
import { CHEMISTRY_EXAM_1 } from "./chemistry";
import { MATH_EXAM_1, MATH_EXAM_2 } from "./math";

export const MATH_EXAMS = [MATH_EXAM_1, MATH_EXAM_2] as const;
export const BIOLOGY_EXAMS = [BIOLOGY_EXAM_1] as const;
export const CHEMISTRY_EXAMS = [CHEMISTRY_EXAM_1] as const;
