import { EExamSubject } from "@/enums";

export const vi = {
  translation: {
    common: {
      all: "Tất cả",
      math: "Toán",
      chemistry: "Hóa",
      biology: "Sinh",
      questions: "{{count}} câu",
      exams: "{{count}} đề",
    },
    subject: {
      [EExamSubject.MATH]: "Toán",
      [EExamSubject.CHEMISTRY]: "Hóa",
      [EExamSubject.BIOLOGY]: "Sinh",
    } as Record<EExamSubject, string>,
    enum: {
      difficultyLevel: {
        NHAN_BIET: "Nhận biết",
        THONG_HIEU: "Thông hiểu",
        VAN_DUNG: "Vận dụng",
        VAN_DUNG_CAO: "Vận dụng cao",
      },
      knowledgeDomain: {
        HAM_SO: "Hàm số",
        MU_LOGARIT: "Hàm mũ – Logarit",
        NGUYEN_HAM_TICH_PHAN: "Nguyên hàm – Tích phân",
        SO_PHUC: "Số phức",
        HINH_HOC_KHONG_GIAN: "Hình học không gian",
        XAC_SUAT_THONG_KE: "Xác suất – Thống kê",
        TOAN_HOC_THUC_TE: "Toán học thực tế",
        TO_HOP_XAC_SUAT: "Tổ hợp – Xác suất",
      },
      examPart: {
        I: "Phần I",
        II: "Phần II",
        III: "Phần III",
      },
    },
  },
} as const;
