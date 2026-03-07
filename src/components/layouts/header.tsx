import type { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center sticky top-0 bg-gray">
      <h1 className="text-2xl font-bold text-white">Luyện đề</h1>
    </div>
  );
};
