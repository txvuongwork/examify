import { PAPER_COLORS } from "@/config";
import type { FunctionComponent } from "react";

interface LargeGridProps {
  size: number;
  color: string;
}

const LargeGrid: FunctionComponent<LargeGridProps> = ({
  size = 32,
  color = PAPER_COLORS[2].grid,
}) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="lgGrid"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lgGrid)" />
    </svg>
  );
};

export const Background: FunctionComponent = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <LargeGrid size={40} color={PAPER_COLORS[5].grid} />
    </div>
  );
};
