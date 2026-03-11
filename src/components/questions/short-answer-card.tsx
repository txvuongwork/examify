import { cn } from "@/lib";
import type { ShortAnswerQuestion } from "@/types";
import type { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { QuestionBadges } from "./question-badges";

interface ShortAnswerCardProps {
  question: ShortAnswerQuestion;
  isSubmitted: boolean;
}

export const ShortAnswerCard: FunctionComponent<ShortAnswerCardProps> = ({
  question,
  isSubmitted,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const answer = (watch(question.id) ?? "") as string;
  const hasError = !!errors[question.id];

  const isCorrect =
    isSubmitted &&
    question.acceptedAnswers.some(
      (a) => a.toLowerCase() === answer.trim().toLowerCase(),
    );

  return (
    <div
      className={cn(
        "rounded-md border bg-white p-6 shadow-sm space-y-2",
        hasError && !isSubmitted ? "border-red-300" : "border-zinc-200",
      )}
    >
      <p className="text-lg font-bold text-zinc-900">
        {question.label} {question.stem}
      </p>

      {isSubmitted && (
        <QuestionBadges
          difficulty={question.difficulty}
          domain={question.domain}
        />
      )}

      <div className="">
        <input
          type="text"
          {...register(question.id)}
          disabled={isSubmitted}
          placeholder="Nhập đáp án..."
          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors
            ${isSubmitted && isCorrect ? "border-green-500 bg-green-50" : ""}
            ${isSubmitted && !isCorrect ? "border-red-400 bg-red-50" : ""}
            ${!isSubmitted && hasError ? "border-red-400" : ""}
            ${!isSubmitted && !hasError ? "border-zinc-300 focus:border-blue-500" : ""}
          `}
        />
        {hasError && !isSubmitted && (
          <p className="mt-1 text-sm text-red-500">Vui lòng nhập đáp án</p>
        )}
      </div>

      {isSubmitted && (
        <div className="rounded-md bg-exp-bg text-exp-text border border-exp-border border-l-[3px] border-l-exp-accent p-4 text-sm">
          <p
            className={`font-semibold ${isCorrect ? "text-green-700" : "text-red-600"}`}
          >
            {isCorrect
              ? "Chính xác!"
              : `Sai. Đáp án đúng: ${question.acceptedAnswers[0]}`}
          </p>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-zinc-700">
            {question.solutionSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="mt-2 font-medium text-zinc-800">
            {question.conclusion}
          </p>
        </div>
      )}
    </div>
  );
};
