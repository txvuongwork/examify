import { MainLayout } from "@/components/layouts";
import { ROUTES } from "@/config";
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
        path: ROUTES.EXAM,
        element: <ExamPage />,
      },
    ],
  },
]);

export const Routers: FunctionComponent = () => (
  <RouterProvider router={router} />
);
