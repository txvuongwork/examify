import type { Exam } from "@/types";
import type { FunctionComponent } from "react";
import { Link } from "react-router";
import { ClipboardList, Clock } from "lucide-react";
import { cn } from "@/lib";
import biologyBg from "@/assets/card/biology.png";
import chemistryBg from "@/assets/card/chemistry.png";
import mathBg from "@/assets/card/math.png";
import { EExamSubject } from "@/enums";

const BG_MAP = {
  [EExamSubject.MATH]: mathBg,
  [EExamSubject.BIOLOGY]: biologyBg,
  [EExamSubject.CHEMISTRY]: chemistryBg,
};

const SUBJECT_THEME: Record<
  EExamSubject,
  { text: string; bg: string; badgeBg: string; hoverBg: string }
> = {
  [EExamSubject.MATH]: {
    text: "text-blue-700",
    bg: "bg-blue-600",
    badgeBg: "bg-blue-50",
    hoverBg: "hover:bg-blue-700",
  },
  [EExamSubject.CHEMISTRY]: {
    text: "text-violet-700",
    bg: "bg-violet-600",
    badgeBg: "bg-violet-50",
    hoverBg: "hover:bg-violet-700",
  },
  [EExamSubject.BIOLOGY]: {
    text: "text-emerald-700",
    bg: "bg-emerald-600",
    badgeBg: "bg-emerald-50",
    hoverBg: "hover:bg-emerald-700",
  },
};

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard: FunctionComponent<ExamCardProps> = ({ exam }) => {
  const { metadata } = exam;
  const theme = SUBJECT_THEME[metadata.subject];

  const totalQuestions =
    metadata.parts.I.count + metadata.parts.II.count + metadata.parts.III.count;

  return (
    <div className="group rounded-md overflow-hidden shadow-md border border-zinc-200/70 transition-all duration-300 hover:shadow-xl hover:border-zinc-300">
      <div className="w-full flex justify-center items-center bg-white overflow-hidden">
        <img
          src={BG_MAP[metadata.subject]}
          alt={metadata.subject}
          className="w-1/2 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className={cn("text-base font-bold", theme.text)}>
          {metadata.title}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1",
              theme.badgeBg,
              theme.text,
            )}
          >
            <ClipboardList className="size-3" />
            {totalQuestions} câu
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1",
              theme.badgeBg,
              theme.text,
            )}
          >
            <Clock className="size-3" />
            {metadata.durationMinutes} phút
          </span>
        </div>

        <Link
          to={`/exam/${metadata.subject.toLowerCase()}/${metadata.examCode}`}
          className={cn(
            "w-full flex items-center justify-center mt-4 py-2 rounded-md text-white transition-colors duration-300",
            theme.bg,
            theme.hoverBg,
          )}
        >
          Làm bài
        </Link>
      </div>
    </div>
  );
};
