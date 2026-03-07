import { Button } from "@/components/ui";
import type { MultipleChoiceQuestion } from "@/types";
import { type FunctionComponent, useState } from "react";

interface MultipleChoiceCardProps {
  question: MultipleChoiceQuestion;
}

export const MultipleChoiceCard: FunctionComponent<MultipleChoiceCardProps> = ({
  question,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="mt-3 text-base font-medium text-zinc-900">
        {question.label} {question.stem}
      </p>

      <div className="mt-4 flex flex-col gap-2">
        {question.options.map((opt) => {
          const isCorrect = showResult && opt.label === question.correctAnswer;
          const isWrong =
            showResult &&
            selected === opt.label &&
            opt.label !== question.correctAnswer;

          return (
            <button
              key={opt.label}
              onClick={() => !showResult && setSelected(opt.label)}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors
                ${selected === opt.label && !showResult ? "border-blue-500 bg-blue-50" : "border-zinc-200 hover:bg-zinc-50"}
                ${isCorrect ? "border-green-500 bg-green-50 font-semibold text-green-800" : ""}
                ${isWrong ? "border-red-400 bg-red-50 text-red-700" : ""}
              `}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold
                  ${selected === opt.label ? "border-blue-500 bg-blue-500 text-white" : "border-zinc-300 text-zinc-500"}
                  ${isCorrect ? "border-green-500 bg-green-500 text-white" : ""}
                  ${isWrong ? "border-red-400 bg-red-400 text-white" : ""}
                `}
              >
                {opt.label}
              </span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Button
          disabled={!selected || showResult}
          onClick={() => setShowResult(true)}
        >
          Kiểm tra
        </Button>
        {showResult && (
          <Button
            variant="outline"
            onClick={() => {
              setSelected(null);
              setShowResult(false);
            }}
          >
            Làm lại
          </Button>
        )}
      </div>

      {showResult && (
        <p className="mt-3 rounded-lg bg-zinc-50 p-3 text-sm text-zinc-700">
          {question.explanation}
        </p>
      )}
    </div>
  );
};
