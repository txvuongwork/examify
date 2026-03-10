type TPaperColor = {
  name: string;
  bg: string;
  grid: string;
};

export const PAPER_COLORS: readonly TPaperColor[] = [
  { name: "Trắng ngà", bg: "#faf8f5", grid: "#c8c4bc" },
  { name: "Trắng xanh", bg: "#f0f4f8", grid: "#a8b8c8" },
  { name: "Vàng nhạt", bg: "#fdf6e3", grid: "#d4c9a8" },
  { name: "Hồng nhạt", bg: "#fdf2f2", grid: "#d4b8b8" },
  { name: "Xanh lá nhạt", bg: "#f2f8f0", grid: "#b0c8a8" },
] as const;
