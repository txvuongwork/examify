import {
  MultipleChoiceCard,
  ShortAnswerCard,
  TrueFalseCard,
} from "@/components/questions";
import { QuestionNav } from "@/components/question-nav";
import { isQuestionAnswered } from "@/lib";
import { Button } from "@/components/ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { EXAM, getQuestionsByPart } from "@/data/exam-1";
import { EExamPart } from "@/enums";
import { createExamDefaultValues, createExamFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FunctionComponent, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const HomePage: FunctionComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [unansweredCount, setUnansweredCount] = useState(0);

  const schema = useMemo(() => createExamFormSchema(EXAM), []);
  const defaultValues = useMemo(() => createExamDefaultValues(EXAM), []);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = () => {
    const values = form.getValues();
    const count = EXAM.questions.filter(
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

  const partI = getQuestionsByPart(EXAM, EExamPart.I);
  const partII = getQuestionsByPart(EXAM, EExamPart.II);
  const partIII = getQuestionsByPart(EXAM, EExamPart.III);

  return (
    <main className="min-h-screen bg-zinc-50">
      <FormProvider {...form}>
        <form className="mx-auto max-w-5xl px-4 py-8">
          <h2 className="text-xl font-bold text-zinc-800">
            {EXAM.metadata.title} – {EXAM.metadata.subject} (Mã đề{" "}
            {EXAM.metadata.examCode})
          </h2>

          <div className="mt-8 flex gap-6">
            <div className="min-w-0 flex-1 space-y-8">
              <section className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    Phần I. {EXAM.metadata.parts[EExamPart.I].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {EXAM.metadata.parts[EExamPart.I].instructions}
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
                    Phần II. {EXAM.metadata.parts[EExamPart.II].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {EXAM.metadata.parts[EExamPart.II].instructions}
                  </p>
                </div>
                {partII.map((q) => (
                  <div key={q.id} id={q.id} className="scroll-mt-6">
                    <TrueFalseCard question={q} isSubmitted={isSubmitted} />
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    Phần III. {EXAM.metadata.parts[EExamPart.III].label}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {EXAM.metadata.parts[EExamPart.III].instructions}
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
                  <Button type="button" className="w-full" onClick={handleSubmit}>
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
              <div className="sticky top-8">
                <QuestionNav
                  questions={EXAM.questions}
                  isSubmitted={isSubmitted}
                  onSubmit={handleSubmit}
                  onReset={handleReset}
                />
              </div>
            </aside>
          </div>
        </form>
      </FormProvider>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận nộp bài</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn còn {unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn
              nộp bài?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Quay lại</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSubmit}>
              Nộp bài
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};
