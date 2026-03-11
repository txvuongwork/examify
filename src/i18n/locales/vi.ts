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

        CAU_TAO_NGUYEN_TU: "Cấu tạo nguyên tử",
        LIEN_KET_HOA_HOC: "Liên kết hóa học",
        PHAN_UNG_OXI_HOA_KHU: "Phản ứng oxi hóa – khử",
        CAN_BANG_HOA_HOC: "Cân bằng hóa học",
        KIM_LOAI: "Kim loại",
        DIEN_HOA_HOC: "Điện hóa học",
        ESTE_LIPIT: "Este – Lipit",
        CARBOHYDRATE: "Carbohydrate",
        AMINE_AMINO_ACID_PROTEIN: "Amine – Amino acid – Protein",
        POLYMER: "Polymer",
        PHO_HOA_HOC: "Phổ hóa học",
        HOA_HOC_THUC_TIEN: "Hóa học thực tiễn",

        TE_BAO_HOC: "Tế bào học",
        CO_CHE_DI_TRUYEN_PHAN_TU: "Cơ chế di truyền phân tử",
        QUY_LUAT_DI_TRUYEN: "Quy luật di truyền",
        BIEN_DI: "Biến dị",
        DI_TRUYEN_QUAN_THE: "Di truyền quần thể",
        UNG_DUNG_DI_TRUYEN: "Ứng dụng di truyền",
        TIEN_HOA: "Tiến hóa",
        SINH_LY_THUC_VAT: "Sinh lý thực vật",
        SINH_LY_DONG_VAT: "Sinh lý động vật",
        SINH_THAI_HOC: "Sinh thái học",
        SINH_HOC_THUC_TE: "Sinh học thực tế",
      },
      examPart: {
        I: "Phần I",
        II: "Phần II",
        III: "Phần III",
      },
    },
  },
} as const;
