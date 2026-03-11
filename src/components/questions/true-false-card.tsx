import { cn } from "@/lib";
import type { TrueFalseAnswerValue } from "@/schemas";
import type { TrueFalseLabel, TrueFalseQuestion } from "@/types";
import type { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { QuestionBadges } from "./question-badges";

interface TrueFalseCardProps {
  question: TrueFalseQuestion;
  isSubmitted: boolean;
}

export const TrueFalseCard: FunctionComponent<TrueFalseCardProps> = ({
  question,
  isSubmitted,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const answers = (watch(question.id) ?? {}) as TrueFalseAnswerValue;
  const hasError = !!errors[question.id];

  return (
    <div
      className={cn(
        "rounded-md border bg-white p-6 shadow-sm space-y-4",
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

      <p className="rounded-md bg-gray-100 p-3 text-sm italic text-zinc-600 border border-gray-200 border-l-[3px] border-l-gray-300">
        {question.context}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {question.items.map((item) => {
          const userAnswer = answers[item.label as TrueFalseLabel];
          const isCorrect = isSubmitted && userAnswer === item.isTrue;
          const isWrong =
            isSubmitted &&
            (userAnswer === undefined || userAnswer !== item.isTrue);

          return (
            <div
              key={item.label}
              className={cn(
                "rounded-md border transition-colors overflow-hidden border-zinc-200",
                isCorrect ? "border-green-300 bg-green-50" : "",
                isWrong ? "border-red-300 bg-red-50" : "",
              )}
            >
              <div className="flex items-center gap-3 text-sm transition-colors duration-300 p-3">
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-md border text-sm font-bold transition-colors duration-300",
                    "border-zinc-300 text-zinc-500 bg-zinc-100 uppercase",
                    isCorrect ? "border-green-500 bg-green-500 text-white" : "",
                    isWrong ? "border-red-400 bg-red-400 text-white" : "",
                  )}
                >
                  {item.label}
                </span>
                <span>{item.statement}</span>
              </div>
              <div className="flex">
                <button
                  type="button"
                  onClick={() =>
                    !isSubmitted &&
                    setValue(`${question.id}.${item.label}`, true, {
                      shouldValidate: true,
                    })
                  }
                  className={cn(
                    "bg-zinc-50 p-3 text-sm font-medium transition-colors flex-1 duration-300 border-t border-t-gray-300 cursor-pointer",
                    userAnswer === true
                      ? "border-blue-400 bg-blue-400 text-white"
                      : "border-zinc-300 hover:bg-zinc-50",
                    isSubmitted && "border-b",
                  )}
                >
                  Đúng
                </button>
                <button
                  type="button"
                  onClick={() =>
                    !isSubmitted &&
                    setValue(`${question.id}.${item.label}`, false, {
                      shouldValidate: true,
                    })
                  }
                  className={cn(
                    "bg-zinc-50 p-3 text-sm font-medium transition-colors flex-1 duration-300",
                    "border-t border-t-zinc-200 border-l border-l-zinc-200 cursor-pointer",
                    userAnswer === false
                      ? "border-blue-400 bg-blue-400 text-white"
                      : "border-zinc-300 hover:bg-zinc-50",
                    isSubmitted && "border-b",
                  )}
                >
                  Sai
                </button>
              </div>
              {isSubmitted && (
                <p
                  className={cn("text-sm p-3", {
                    "text-red-500": isWrong,
                    "text-green-500": isCorrect,
                  })}
                >
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {hasError && !isSubmitted && (
        <p className="mt-2 text-sm text-red-500">
          Vui lòng trả lời tất cả các mệnh đề
        </p>
      )}
    </div>
  );
};
