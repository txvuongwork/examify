import biology from "@/assets/biology.png";
import chemistry from "@/assets/chemistry.png";
import math from "@/assets/math.png";
import { Header } from "@/components/layouts";
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

function ExamCard({ exam, subject }: { exam: Exam; subject: SubjectTab }) {
  const { metadata } = exam;
  const totalQuestions =
    metadata.parts.I.count + metadata.parts.II.count + metadata.parts.III.count;

  return (
    <Link
      to={`/exam/${metadata.examCode}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:ring-black/[0.08] hover:-translate-y-0.5"
    >
      <div className={`h-1.5 bg-gradient-to-r ${subject.gradient}`} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3.5">
          <img src={subject.icon} alt={subject.label} className="size-10" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-semibold text-zinc-900">
                {metadata.subject}
              </h3>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${subject.accentBg} ${subject.accentText}`}
              >
                {metadata.year}
              </span>
            </div>
            <p className="mt-0.5 text-[13px] text-zinc-500">
              Mã đề {metadata.examCode}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-[13px] text-zinc-400">
          <div className="flex items-center gap-1.5">
            <svg
              className="size-4 text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>{metadata.durationMinutes} phút</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="size-4 text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <span>{totalQuestions} câu</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
          <span className="text-xs text-zinc-400">{metadata.curriculum}</span>
          <span
            className={`inline-flex items-center gap-1 text-[13px] font-medium ${subject.accentText} transition-all duration-200 group-hover:gap-2`}
          >
            Làm bài
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
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
    <div className="min-h-screen bg-main-bg">
      <Header />

      <main className="w-full max-w-5xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-2 py-4">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2",
              activeTab === "all"
                ? "bg-navy text-white shadow-sm"
                : "bg-white text-zinc-600 hover:bg-zinc-50",
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
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2",
                activeTab === subject.id
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-zinc-600 hover:bg-zinc-50",
              )}
            >
              <span>{t(`common.${subject.id}`)}</span>
            </button>
          ))}
        </div>

        {/* Exam grid */}
        <div className="space-y-10">
          {filteredSubjects.map((subject) => (
            <section key={subject.id}>
              {activeTab === "all" && (
                <div className="mb-4 flex items-center gap-2">
                  <div className="aspect-square rounded-full bg-white/90 p-1">
                    <img
                      src={subject.icon}
                      alt={subject.label}
                      className="size-8"
                    />
                  </div>
                  <h2 className="text-base font-semibold text-zinc-800">
                    {subject.label}
                  </h2>
                  <div className="h-px flex-1 bg-zinc-200/70" />
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
      </main>
    </div>
  );
};
