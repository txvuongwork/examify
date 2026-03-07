import { Header } from "@/components/layouts";
import {
  MultipleChoiceCard,
  ShortAnswerCard,
  TrueFalseCard,
} from "@/components/questions";
import {
  EXAM,
  getQuestionsByPart,
  isMultipleChoice,
  isShortAnswer,
  isTrueFalse,
} from "@/data/exam-1";
import { EExamPart } from "@/enums";
import type { FunctionComponent } from "react";

export const HomePage: FunctionComponent = () => {
  const partI = getQuestionsByPart(EXAM, EExamPart.I);
  const partII = getQuestionsByPart(EXAM, EExamPart.II);
  const partIII = getQuestionsByPart(EXAM, EExamPart.III);

  const mcQuestion = partI.find(isMultipleChoice);
  const tfQuestion = partII.find(isTrueFalse);
  const saQuestion = partIII.find(isShortAnswer);

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
        <h2 className="text-xl font-bold text-zinc-800">
          {EXAM.metadata.title} – {EXAM.metadata.subject} (Mã đề{" "}
          {EXAM.metadata.examCode})
        </h2>

        {mcQuestion && <MultipleChoiceCard question={mcQuestion} />}
        {tfQuestion && <TrueFalseCard question={tfQuestion} />}
        {saQuestion && <ShortAnswerCard question={saQuestion} />}
      </div>
    </main>
  );
};
