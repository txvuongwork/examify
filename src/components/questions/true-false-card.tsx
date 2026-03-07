import { Button } from "@/components/ui";
import type { TrueFalseQuestion } from "@/types";
import { type FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";

interface TrueFalseCardProps {
  question: TrueFalseQuestion;
}

export const TrueFalseCard: FunctionComponent<TrueFalseCardProps> = ({
  question,
}) => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = question.items.every(
    (item) => answers[item.label] != null,
  );

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-semibold text-purple-700">
          {t(`enum.examPart.${question.part}`)}
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700">
          {t(`enum.difficultyLevel.${question.difficulty}`)}
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-700">
          {t(`enum.knowledgeDomain.${question.domain}`)}
        </span>
      </div>

      <p className="mt-3 text-base font-medium text-zinc-900">
        {question.label} {question.stem}
      </p>

      <p className="mt-2 rounded-lg bg-zinc-50 p-3 text-sm italic text-zinc-600">
        {question.context}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {question.items.map((item) => {
          const userAnswer = answers[item.label];
          const isCorrect = showResult && userAnswer === item.isTrue;
          const isWrong = showResult && userAnswer !== item.isTrue;

          return (
            <div
              key={item.label}
              className={`rounded-lg border p-4 transition-colors
                ${isCorrect ? "border-green-300 bg-green-50" : ""}
                ${isWrong ? "border-red-300 bg-red-50" : "border-zinc-200"}
              `}
            >
              <p className="text-sm text-zinc-800">
                <span className="font-semibold">{item.label})</span>{" "}
                {item.statement}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() =>
                    !showResult &&
                    setAnswers((p) => ({ ...p, [item.label]: true }))
                  }
                  className={`rounded-md border px-4 py-1.5 text-xs font-medium transition-colors
                    ${userAnswer === true ? "border-blue-500 bg-blue-500 text-white" : "border-zinc-300 hover:bg-zinc-50"}
                  `}
                >
                  Đúng
                </button>
                <button
                  onClick={() =>
                    !showResult &&
                    setAnswers((p) => ({ ...p, [item.label]: false }))
                  }
                  className={`rounded-md border px-4 py-1.5 text-xs font-medium transition-colors
                    ${userAnswer === false ? "border-blue-500 bg-blue-500 text-white" : "border-zinc-300 hover:bg-zinc-50"}
                  `}
                >
                  Sai
                </button>
              </div>
              {showResult && (
                <p className="mt-2 text-xs text-zinc-600">
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Button
          disabled={!allAnswered || showResult}
          onClick={() => setShowResult(true)}
        >
          Kiểm tra
        </Button>
        {showResult && (
          <Button
            variant="outline"
            onClick={() => {
              setAnswers({});
              setShowResult(false);
            }}
          >
            Làm lại
          </Button>
        )}
      </div>
    </div>
  );
};
