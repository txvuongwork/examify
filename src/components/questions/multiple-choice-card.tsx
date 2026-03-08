import { cn } from "@/lib";
import type { MultipleChoiceQuestion, OptionLabel } from "@/types";
import type { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";

interface MultipleChoiceCardProps {
  question: MultipleChoiceQuestion;
  isSubmitted: boolean;
}

export const MultipleChoiceCard: FunctionComponent<MultipleChoiceCardProps> = ({
  question,
  isSubmitted,
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selected = watch(question.id) as OptionLabel | undefined;
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

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const isCorrect = isSubmitted && opt.label === question.correctAnswer;
          const isWrong =
            isSubmitted &&
            selected === opt.label &&
            opt.label !== question.correctAnswer;

          return (
            <button
              type="button"
              key={opt.label}
              onClick={() =>
                !isSubmitted &&
                setValue(question.id, opt.label, { shouldValidate: true })
              }
              className={cn(
                "flex items-center gap-3 rounded-md border p-1 text-left text-sm transition-colors duration-300 cursor-pointer",
                selected === opt.label && !isSubmitted
                  ? "border-blue-400 bg-blue-50"
                  : "border-zinc-200 hover:bg-zinc-50",
                isCorrect
                  ? "border-green-500 bg-green-50 font-semibold text-green-800 hover:bg-green-50"
                  : "",
                isWrong
                  ? "border-red-400 bg-red-50 text-red-700 hover:bg-red-50"
                  : "",
              )}
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-md border text-sm font-bold transition-colors duration-300",
                  selected === opt.label
                    ? "border-blue-400 bg-blue-400 text-white"
                    : "border-zinc-300 text-zinc-500 bg-zinc-100",
                  isCorrect ? "border-green-500 bg-green-500 text-white" : "",
                  isWrong ? "border-red-400 bg-red-400 text-white" : "",
                )}
              >
                {opt.label}
              </span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      {hasError && !isSubmitted && (
        <p className="text-sm text-red-500">Vui lòng chọn đáp án</p>
      )}

      {isSubmitted && (
        <p className="rounded-md bg-exp-bg p-3 text-sm text-exp-text border border-exp-border border-l-[3px] border-l-exp-accent">
          {question.explanation}
        </p>
      )}
    </div>
  );
};
