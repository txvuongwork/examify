import type { FunctionComponent } from "react";
import { Loader2 } from "lucide-react";

export const LoadingPage: FunctionComponent = () => {
  return (
    <div className="w-full h-[calc(100dvh-80px)] flex items-center justify-center">
      <Loader2
        size={60}
        strokeWidth={3}
        className="text-primary animate-spin"
      />
    </div>
  );
};
