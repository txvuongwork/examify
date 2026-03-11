import logo from "@/assets/logo.png";
import type { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="w-full sticky top-0 bg-white z-20 shadow-sm">
      <div className="mx-auto h-20 max-w-5xl flex items-center gap-2 px-4">
        <div className="flex flex-col justify-center gap-1">
          <img src={logo} alt="logo" className="size-12" />
        </div>

        <div>
          <h1 className="text-base font-bold tracking-tight text-navy">
            Luyện đề thi THPT Quốc gia
          </h1>
          <p className="text-sm text-zinc-500">
            Tổng hợp đề thi thử các môn theo cấu trúc mới nhất{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </header>
  );
};
