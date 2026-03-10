import { cn, isQuestionAnswered } from "@/lib";
import { Button } from "@/components/ui";
import type { ExamQuestion } from "@/types";
import { EExamPart } from "@/enums";
import type { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTES } from "@/config";

interface QuestionNavProps {
  questions: readonly ExamQuestion[];
  isSubmitted: boolean;
  title: string;
  onSubmit: () => void;
  onReset: () => void;
}

const PART_GROUPS = [
  { part: EExamPart.I, label: "Phần I" },
  { part: EExamPart.II, label: "Phần II" },
  { part: EExamPart.III, label: "Phần III" },
] as const;

function scrollToQuestion(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export const QuestionNav: FunctionComponent<QuestionNavProps> = ({
  questions,
  isSubmitted,
  onSubmit,
  onReset,
  title,
}) => {
  const navigate = useNavigate();

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  return (
    <div className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm space-y-4">
      <h2 className="text-base font-bold text-zinc-800">{title}</h2>

      {PART_GROUPS.map(({ part, label }) => {
        const partQuestions = questions.filter((q) => q.part === part);
        if (partQuestions.length === 0) return null;

        return (
          <div key={part}>
            <p className="mb-2 text-xs font-medium text-zinc-400">{label}</p>
            <div className="grid grid-cols-6 gap-1.5">
              {partQuestions.map((q) => {
                const answered = isQuestionAnswered(q, values[q.id]);
                const hasError = isSubmitted && !!errors[q.id];

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => scrollToQuestion(q.id)}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-md text-sm font-semibold transition-colors cursor-pointer",
                      hasError
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : answered
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200",
                    )}
                  >
                    {q.questionNumber}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="border-t border-zinc-200 pt-4 space-y-2">
        {!isSubmitted ? (
          <Button type="button" className="w-full" onClick={onSubmit}>
            Nộp bài
          </Button>
        ) : (
          <Button type="button" className="w-full" onClick={onReset}>
            Làm lại
          </Button>
        )}
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Quay lại
        </Button>
      </div>
    </div>
  );
};
