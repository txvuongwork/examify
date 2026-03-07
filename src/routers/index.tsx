import { ROUTES } from "@/config";
import { HomePage } from "@/pages";
import type { FunctionComponent } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);

export const Routers: FunctionComponent = () => (
  <RouterProvider router={router} />
);
