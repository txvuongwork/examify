import biology from "@/assets/biology.png";
import biologyBg from "@/assets/card/biology.png";
import chemistryBg from "@/assets/card/chemistry.png";
import mathBg from "@/assets/card/math.png";
import chemistry from "@/assets/chemistry.png";
import math from "@/assets/math.png";
import { BIOLOGY_EXAMS, CHEMISTRY_EXAMS, MATH_EXAMS } from "@/data";
import { cn } from "@/lib";
import type { Exam } from "@/types";
import { type FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface SubjectTab {
  id: string;
  label: string;
  icon: string;
  gradient: string;
  accentBg: string;
  accentText: string;
  iconBg: string;
  exams: readonly Exam[];
}

const SUBJECTS: SubjectTab[] = [
  {
    id: "math",
    label: "Toán",
    icon: math,
    gradient: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    iconBg: "bg-blue-100",
    exams: MATH_EXAMS,
  },
  {
    id: "chemistry",
    label: "Hóa",
    icon: chemistry,
    gradient: "from-violet-500 to-purple-600",
    accentBg: "bg-violet-50",
    accentText: "text-violet-600",
    iconBg: "bg-violet-100",
    exams: CHEMISTRY_EXAMS,
  },
  {
    id: "biology",
    label: "Sinh",
    icon: biology,
    gradient: "from-emerald-500 to-teal-600",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    iconBg: "bg-emerald-100",
    exams: BIOLOGY_EXAMS,
  },
];

const BG_MAP = {
  math: mathBg,
  biology: biologyBg,
  chemistry: chemistryBg,
};

const TEXT_COLOR_MAP = {
  math: "bg-[#3B82F6]",
  biology: "bg-[#F59E0B]",
  chemistry: "bg-[#10B981]",
};

function ExamCard({ exam, subject }: { exam: Exam; subject: SubjectTab }) {
  const { metadata } = exam;
  const totalQuestions =
    metadata.parts.I.count + metadata.parts.II.count + metadata.parts.III.count;

  return (
    <Link
      to={`/exam/${metadata.examCode}`}
      className="rounded-md overflow-hidden shadow-md border border-zinc-200/70"
    >
      <div className="w-full flex justify-center items-center bg-white">
        <img
          src={BG_MAP[metadata.type]}
          alt={subject.label}
          className="w-2/3 object-cover"
        />
      </div>

      <div className={cn("p-4 text-white", TEXT_COLOR_MAP[metadata.type])}>
        <h3 className="text-base font-bold text-white">{metadata.title}</h3>
        <span>{totalQuestions} câu</span>
      </div>
    </Link>
  );
}

export const HomePage: FunctionComponent = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSubjects =
    activeTab === "all" ? SUBJECTS : SUBJECTS.filter((s) => s.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 h-[calc(100dvh-80px)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 py-4 shrink-0">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer border border-zinc-200/70 shadow-sm",
            activeTab === "all"
              ? "bg-navy text-white shadow-sm"
              : "bg-white text-zinc-600 hover:bg-zinc-50"
          )}
        >
          {t("common.all")}
        </button>
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() =>
              setActiveTab(activeTab === subject.id ? "all" : subject.id)
            }
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 border border-zinc-200/70 shadow-sm",
              activeTab === subject.id
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-zinc-600 hover:bg-zinc-50"
            )}
          >
            <span>{t(`common.${subject.id}`)}</span>
          </button>
        ))}
      </div>

      <div className="space-y-10 flex-1 overflow-auto pb-4 thin-scrollbar">
        {filteredSubjects.map((subject) => (
          <section key={subject.id}>
            {activeTab === "all" && (
              <div className="mb-4 flex items-center gap-2">
                <div className="aspect-square rounded-full bg-main-bg p-1 shadow-md">
                  <img
                    src={subject.icon}
                    alt={subject.label}
                    className="size-8"
                  />
                </div>
                <h2 className="text-base font-semibold text-zinc-800">
                  {subject.label}
                </h2>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subject.exams.map((exam) => (
                <ExamCard
                  key={`${subject.id}-${exam.metadata.examCode}`}
                  exam={exam}
                  subject={subject}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
