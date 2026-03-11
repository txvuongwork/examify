import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default: "bg-zinc-50 text-zinc-700 ring-zinc-200",
        green: "bg-green-50 text-green-700 ring-green-200",
        blue: "bg-blue-50 text-blue-700 ring-blue-200",
        amber: "bg-amber-50 text-amber-700 ring-amber-200",
        red: "bg-red-50 text-red-700 ring-red-200",
        purple: "bg-purple-50 text-purple-700 ring-purple-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
