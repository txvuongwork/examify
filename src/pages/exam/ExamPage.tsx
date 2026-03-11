import { QuestionNav } from "@/components/question-nav";
import {
  MultipleChoiceCard,
  ShortAnswerCard,
  TrueFalseCard,
} from "@/components/questions";
import { Button } from "@/components/ui";
import { BackConfirmDialog } from "./components/back-confirm-dialog";
import { SubmitConfirmDialog } from "./components/submit-confirm-dialog";
import { ROUTES } from "@/config";
import { EXAM_MAP } from "@/data";
import { EExamPart, EExamSubject } from "@/enums";
import { isQuestionAnswered } from "@/lib";
import { LoadingPage } from "@/pages/loading-page";
import { createExamDefaultValues, createExamFormSchema } from "@/schemas";
import type { Exam } from "@/types";
import { getQuestionsByPart } from "@/utils/exam";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

interface ExamFormProps {
  exam: Exam;
}

const ExamForm: FunctionComponent<ExamFormProps> = ({ exam }) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showBackDialog, setShowBackDialog] = useState(false);
  const [unansweredCount, setUnansweredCount] = useState(0);

  const schema = useMemo(() => createExamFormSchema(exam), [exam]);
  const defaultValues = useMemo(() => createExamDefaultValues(exam), [exam]);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = () => {
    const values = form.getValues();
    const count = exam.questions.filter(
      (q) => !isQuestionAnswered(q, values[q.id]),
    ).length;

    if (count > 0) {
      setUnansweredCount(count);
      setShowConfirmDialog(true);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmDialog(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    form.reset();
    setIsSubmitted(false);
  };

  const handleBack = () => {
    setShowBackDialog(true);
  };

  const handleConfirmBack = () => {
    setShowBackDialog(false);
    navigate(ROUTES.HOME);
  };

  const partI = getQuestionsByPart(exam, EExamPart.I);
  const partII = getQuestionsByPart(exam, EExamPart.II);
  const partIII = getQuestionsByPart(exam, EExamPart.III);

  return (
    <div className="bg-zinc-50 w-full">
      <FormProvider {...form}>
        <form className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex gap-6">
            <div className="min-w-0 flex-1 space-y-8">
              <section className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    Phần I. {exam.metadata.parts[EExamPart.I].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {exam.metadata.parts[EExamPart.I].instructions}
                  </p>
                </div>
                {partI.map((q) => (
                  <div key={q.id} id={q.id} className="scroll-mt-6">
                    <MultipleChoiceCard
                      question={q}
                      isSubmitted={isSubmitted}
                    />
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    Phần II. {exam.metadata.parts[EExamPart.II].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {exam.metadata.parts[EExamPart.II].instructions}
                  </p>
                </div>
                {partII.map((q) => (
                  <div key={q.id} id={q.id} className="scroll-mt-6">
                    <TrueFalseCard question={q} isSubmitted={isSubmitted} />
                  </div>
                ))}
              </section>

              <section className="space-y-4 mb-0">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    Phần III. {exam.metadata.parts[EExamPart.III].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {exam.metadata.parts[EExamPart.III].instructions}
                  </p>
                </div>
                {partIII.map((q) => (
                  <div key={q.id} id={q.id} className="scroll-mt-6">
                    <ShortAnswerCard question={q} isSubmitted={isSubmitted} />
                  </div>
                ))}
              </section>

              <div className="border-t border-zinc-200 pt-6 lg:hidden">
                {!isSubmitted ? (
                  <Button
                    type="button"
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    Nộp bài
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleReset}
                  >
                    Làm lại
                  </Button>
                )}
              </div>
            </div>

            <aside className="hidden shrink-0 lg:block">
              <div className="sticky top-28">
                <QuestionNav
                  questions={exam.questions}
                  isSubmitted={isSubmitted}
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                  onBack={handleBack}
                  title={exam.metadata.title}
                />
              </div>
            </aside>
          </div>
        </form>
      </FormProvider>

      <SubmitConfirmDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        unansweredCount={unansweredCount}
        onConfirm={handleConfirmSubmit}
      />

      <BackConfirmDialog
        open={showBackDialog}
        onOpenChange={setShowBackDialog}
        onConfirm={handleConfirmBack}
      />
    </div>
  );
};

interface ExamPageProps {
  subject: EExamSubject;
}

export const ExamPage: FunctionComponent<ExamPageProps> = ({ subject }) => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState<boolean>(true);

  const exam = useMemo(
    () => EXAM_MAP[subject].find((e) => e.metadata.examCode === id),
    [id, subject],
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (!exam || isLoading) return <LoadingPage />;
  return <ExamForm exam={exam} />;
};
