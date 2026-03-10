import biology from "@/assets/biology.png";
import chemistry from "@/assets/chemistry.png";
import math from "@/assets/math.png";
import { BIOLOGY_EXAMS, CHEMISTRY_EXAMS, MATH_EXAMS } from "@/data";
import { cn } from "@/lib";
import type { Exam } from "@/types";
import { type FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExamCard } from "./components";
import { EExamSubject } from "@/enums";

interface SubjectTab {
  id: string;
  icon: string;
  exams: readonly Exam[];
}

const SUBJECTS: SubjectTab[] = [
  {
    id: EExamSubject.MATH,
    icon: math,
    exams: MATH_EXAMS,
  },
  {
    id: EExamSubject.CHEMISTRY,
    icon: chemistry,
    exams: CHEMISTRY_EXAMS,
  },
  {
    id: EExamSubject.BIOLOGY,
    icon: biology,
    exams: BIOLOGY_EXAMS,
  },
];

export const HomePage: FunctionComponent = () => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSubjects =
    activeTab === "all" ? SUBJECTS : SUBJECTS.filter((s) => s.id === activeTab);
  const totalExams = SUBJECTS.reduce(
    (acc, subject) => acc + subject.exams.length,
    0,
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 h-[calc(100dvh-80px)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 py-4 shrink-0">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer border border-zinc-200/70 shadow-sm",
            activeTab === "all"
              ? "bg-primary text-white shadow-sm"
              : "bg-white text-zinc-600 hover:bg-zinc-50",
          )}
        >
          {t("common.all")}{" "}
          <span className="text-sm font-normal">({totalExams})</span>
        </button>
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            type="button"
            onClick={() =>
              setActiveTab(activeTab === subject.id ? "all" : subject.id)
            }
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer border border-zinc-200/70 shadow-sm",
              activeTab === subject.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-zinc-600 hover:bg-zinc-50",
            )}
          >
            {t(`subject.${subject.id}`)}{" "}
            <span className="text-sm font-normal">
              ({subject.exams.length})
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-14 flex-1 overflow-auto pb-4 thin-scrollbar pr-1">
        {filteredSubjects.map((subject) => (
          <section key={subject.id}>
            {activeTab === "all" && (
              <div className="mb-4 flex items-center gap-4">
                <div className="aspect-square rounded-full bg-main-bg p-1 shadow-md">
                  <img
                    src={subject.icon}
                    alt={t(`subject.${subject.id}`)}
                    className="size-8"
                  />
                </div>
                <h2 className="text-base md:text-lg font-bold text-zinc-800">
                  {t(`subject.${subject.id}`)}{" "}
                  <span className="text-sm text-zinc-500 font-normal">
                    ({t("common.exams", { count: subject.exams.length })})
                  </span>
                </h2>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subject.exams.map((exam) => (
                <ExamCard
                  key={`${subject.id}-${exam.metadata.examCode}`}
                  exam={exam}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
