import { Button } from "@/components/ui";
import type { ShortAnswerQuestion } from "@/types";
import { type FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";

interface ShortAnswerCardProps {
  question: ShortAnswerQuestion;
}

export const ShortAnswerCard: FunctionComponent<ShortAnswerCardProps> = ({
  question,
}) => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const isCorrect =
    showResult &&
    question.acceptedAnswers.some(
      (a) => a.toLowerCase() === answer.trim().toLowerCase(),
    );

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <span className="rounded-full bg-rose-100 px-3 py-0.5 text-xs font-semibold text-rose-700">
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

      <div className="mt-4 flex items-center gap-3">
        <input
          type="text"
          value={answer}
          onChange={(e) => !showResult && setAnswer(e.target.value)}
          placeholder="Nhập đáp án..."
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors
            ${showResult && isCorrect ? "border-green-500 bg-green-50" : ""}
            ${showResult && !isCorrect ? "border-red-400 bg-red-50" : "border-zinc-300 focus:border-blue-500"}
          `}
        />
        <Button
          disabled={!answer.trim() || showResult}
          onClick={() => setShowResult(true)}
        >
          Kiểm tra
        </Button>
        {showResult && (
          <Button
            variant="outline"
            onClick={() => {
              setAnswer("");
              setShowResult(false);
            }}
          >
            Làm lại
          </Button>
        )}
      </div>

      {showResult && (
        <div className="mt-3 rounded-lg bg-zinc-50 p-4 text-sm">
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
