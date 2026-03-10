import type { FunctionComponent } from "react";
import { Header } from "./header";
import { Background } from "./background";
import { Outlet } from "react-router";

export const MainLayout: FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Background />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
