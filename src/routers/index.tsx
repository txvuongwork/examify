import { MainLayout } from "@/components/layouts";
import { ROUTES } from "@/config";
import { EExamSubject } from "@/enums";
import { ExamPage, HomePage } from "@/pages";
import type { FunctionComponent } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.EXAM.MATH,
        element: <ExamPage subject={EExamSubject.MATH} />,
      },
      {
        path: ROUTES.EXAM.CHEMISTRY,
        element: <ExamPage subject={EExamSubject.CHEMISTRY} />,
      },
      {
        path: ROUTES.EXAM.BIOLOGY,
        element: <ExamPage subject={EExamSubject.BIOLOGY} />,
      },
    ],
  },
]);

export const Routers: FunctionComponent = () => (
  <RouterProvider router={router} />
);
