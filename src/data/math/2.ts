import {
  EDifficultyLevel,
  EExamPart,
  EExamSubject,
  EKnowledgeDomain,
} from "@/enums";
import type {
  Exam,
  ExamMetadata,
  MultipleChoiceQuestion,
  ShortAnswerQuestion,
  TrueFalseQuestion,
} from "@/types";

const EXAM_METADATA: ExamMetadata = {
  title: "Đề thi thử môn toán - Đề số 2",
  subject: EExamSubject.MATH,
  examCode: "102",
  year: 2026,
  curriculum: "GDPT 2018",
  durationMinutes: 90,
  parts: {
    [EExamPart.I]: {
      label: "Trắc nghiệm nhiều lựa chọn",
      count: 12,
      instructions:
        "Trong mỗi câu hỏi dưới đây, thí sinh chọn một phương án đúng nhất và tô vào phiếu trả lời.",
    },
    [EExamPart.II]: {
      label: "Trắc nghiệm Đúng/Sai",
      count: 4,
      instructions:
        "Trong mỗi câu, thí sinh đánh dấu Đ (Đúng) hoặc S (Sai) cho từng mệnh đề.",
    },
    [EExamPart.III]: {
      label: "Trả lời ngắn",
      count: 6,
      instructions:
        "Thí sinh tính toán và ghi kết quả vào phiếu trả lời tương ứng.",
    },
  },
} as const;

const partIQuestions: readonly MultipleChoiceQuestion[] = [
  {
    id: "P1_Q1",
    questionNumber: 1,
    part: EExamPart.I,
    label: "Câu 1.",
    type: "multiple_choice",
    stem: "Hàm số y = –x³ + 3x nghịch biến trên khoảng nào dưới đây?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "(–1; 1)" },
      { label: "B", text: "(0; +∞)" },
      { label: "C", text: "(–∞; 0)" },
      { label: "D", text: "(–∞; –1) và (1; +∞)" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "y' = –3x² + 3 = –3(x² – 1) = –3(x – 1)(x + 1). " +
      "y' < 0 khi (x – 1)(x + 1) > 0, tức x < –1 hoặc x > 1. " +
      "Hàm nghịch biến trên (–∞; –1) và (1; +∞) → đáp án D.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Hàm số y = x⁴ – 8x² + 3 có bao nhiêu điểm cực trị?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "2" },
      { label: "C", text: "1" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "y' = 4x³ – 16x = 4x(x² – 4) = 4x(x – 2)(x + 2). " +
      "y' = 0 tại x = –2, x = 0, x = 2. " +
      "Kiểm tra đổi dấu: y' đổi dấu tại cả 3 điểm → hàm có 3 cực trị.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Tiệm cận đứng của đồ thị hàm số y = (2x + 1)/(x – 1) là đường thẳng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "y = 2" },
      { label: "B", text: "x = –1/2" },
      { label: "C", text: "y = –1" },
      { label: "D", text: "x = 1" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "TXĐ: x ≠ 1. Khi x → 1, mẫu x – 1 → 0 còn tử 2x + 1 → 3 ≠ 0. " +
      "Tiệm cận đứng: x = 1 (đáp án D). " +
      "Tiệm cận ngang: lim(x→±∞) y = 2 → y = 2 (không phải đáp án yêu cầu).",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Hàm số y = x³ – 6x² + 9x + 1 đạt cực tiểu tại điểm x bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "x = –1" },
      { label: "B", text: "x = 3" },
      { label: "C", text: "x = –3" },
      { label: "D", text: "x = 1" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "y' = 3x² – 12x + 9 = 3(x – 1)(x – 3). y' = 0 tại x = 1 và x = 3. " +
      "y'' = 6x – 12. y''(1) = –6 < 0 → cực đại tại x = 1. " +
      "y''(3) = 6 > 0 → cực tiểu tại x = 3. Giá trị cực tiểu: y(3) = 27 – 54 + 27 + 1 = 1.",
  },
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Giá trị của biểu thức A = log₂ 8 + log₂ 4 bằng:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "6" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "log₂ 8 = log₂ 2³ = 3. log₂ 4 = log₂ 2² = 2. " + "A = 3 + 2 = 5.",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Bất phương trình (1/2)^(2x – 1) > (1/2)^(x + 2) có nghiệm là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "x > 3" },
      { label: "B", text: "x < 3" },
      { label: "C", text: "x > –3" },
      { label: "D", text: "x < –3" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Cơ số 1/2 < 1 nên hàm mũ cơ số 1/2 nghịch biến → đổi chiều bất phương trình: " +
      "2x – 1 < x + 2 → x < 3.",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Nguyên hàm của hàm số f(x) = 3x² – 2 là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    options: [
      { label: "A", text: "6x + C" },
      { label: "B", text: "x³ – 2x + C" },
      { label: "C", text: "x³ + C" },
      { label: "D", text: "3x³ – 2x + C" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "∫(3x² – 2) dx = x³ – 2x + C. " +
      "Kiểm tra: (x³ – 2x + C)' = 3x² – 2 = f(x). ✓",
  },
  {
    id: "P1_Q8",
    questionNumber: 8,
    part: EExamPart.I,
    label: "Câu 8.",
    type: "multiple_choice",
    stem: "Tích phân ∫₀¹ (2x + eˣ) dx bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    options: [
      { label: "A", text: "e – 1" },
      { label: "B", text: "e + 1" },
      { label: "C", text: "e" },
      { label: "D", text: "2e – 1" },
    ] as const,
    correctAnswer: "C",
    explanation: "∫₀¹ (2x + eˣ) dx = [x² + eˣ]₀¹ = (1 + e) – (0 + 1) = e.",
  },
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Số phức liên hợp của z = 3 – 4i là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    options: [
      { label: "A", text: "3 + 4i" },
      { label: "B", text: "–3 + 4i" },
      { label: "C", text: "–3 – 4i" },
      { label: "D", text: "3 – 4i" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Số phức liên hợp của z = a + bi là z̄ = a – bi. " +
      "Với z = 3 – 4i (a = 3, b = –4): z̄ = 3 – (–4i) = 3 + 4i.",
  },
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Hình chóp tứ giác đều S.ABCD có đáy là hình vuông cạnh a = 3 cm và chiều cao h = 4 cm. Thể tích của hình chóp đó bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    options: [
      { label: "A", text: "6 cm³" },
      { label: "B", text: "9 cm³" },
      { label: "C", text: "12 cm³" },
      { label: "D", text: "36 cm³" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Diện tích đáy: S = a² = 3² = 9 cm². " +
      "Thể tích hình chóp: V = (1/3) · S · h = (1/3) · 9 · 4 = 12 cm³.",
  },
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Có bao nhiêu cách xếp 6 học sinh thành một hàng ngang?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: false,
    options: [
      { label: "A", text: "30" },
      { label: "B", text: "120" },
      { label: "C", text: "360" },
      { label: "D", text: "720" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Số cách xếp 6 học sinh phân biệt thành một hàng ngang = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Một lớp học có 15 học sinh gồm 8 nam và 7 nữ. Chọn ngẫu nhiên 3 học sinh để lập ban đại diện. Xác suất để ban đại diện có ít nhất 1 học sinh nữ là:",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: true,
    options: [
      { label: "A", text: "56/455" },
      { label: "B", text: "8/15" },
      { label: "C", text: "57/65" },
      { label: "D", text: "7/8" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "C(15, 3) = 455. Số cách chọn toàn nam: C(8, 3) = 56. " +
      "P(ít nhất 1 nữ) = 1 – 56/455 = 399/455 = 57/65.",
  },
] as const;

const partIIQuestions: readonly TrueFalseQuestion[] = [
  {
    id: "P2_Q13",
    questionNumber: 13,
    part: EExamPart.II,
    label: "Câu 13.",
    type: "true_false",
    stem: "Cho hàm số y = (x – 1)/(x + 2). Xét các mệnh đề sau:",
    context:
      "TXĐ: ℝ \\ {–2}. y' = 3/(x + 2)² > 0 với mọi x ≠ –2. " +
      "Tiệm cận: TCĐ x = –2; TCN y = 1. Hàm không có điểm nào mà y' = 0.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Hàm số đồng biến trên từng khoảng xác định của nó.",
        isTrue: true,
        explanation:
          "y' = [(x+2) – (x–1)]/(x+2)² = 3/(x+2)² > 0 với mọi x ≠ –2. " +
          "Hàm đồng biến trên (–∞; –2) và (–2; +∞). ✓",
      },
      {
        label: "b",
        statement:
          "Đồ thị hàm số có tiệm cận đứng là x = –2 và tiệm cận ngang là y = 1.",
        isTrue: true,
        explanation:
          "TCĐ: mẫu = 0 → x = –2. TCN: lim(x→±∞) (x–1)/(x+2) = 1 → y = 1. ✓",
      },
      {
        label: "c",
        statement: "Hàm số đạt cực tiểu tại x = 0.",
        isTrue: false,
        explanation:
          "y'(0) = 3/(0+2)² = 3/4 ≠ 0. " +
          "Hàm số không có cực trị tại bất kỳ điểm nào (y' > 0 trên toàn TXĐ). ✗",
      },
      {
        label: "d",
        statement: "Hàm số không có cực trị.",
        isTrue: true,
        explanation:
          "Vì y' = 3/(x+2)² > 0 với mọi x trong TXĐ, hàm số không đổi dấu → không có cực trị. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q14",
    questionNumber: 14,
    part: EExamPart.II,
    label: "Câu 14.",
    type: "true_false",
    stem: "Bài toán thực tế – Tăng trưởng dân số. Dân số một thành phố năm 2020 là 2 triệu người và tăng đều với tỷ lệ 2%/năm. Sau n năm (n ∈ ℕ*), dân số thành phố là P(n) = 2·(1,02)ⁿ triệu người. Xét các mệnh đề sau:",
    context:
      "Mô hình tăng trưởng hàm mũ: P(n) = 2·(1,02)ⁿ triệu người. " +
      "Tham khảo: (1,02)⁵ ≈ 1,1041; (1,02)¹⁰ ≈ 1,2190; ln(1,02) ≈ 0,01980; ln 2 ≈ 0,6931.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    items: [
      {
        label: "a",
        statement:
          "Sau 5 năm (năm 2025), dân số thành phố tăng thêm xấp xỉ 2,208 triệu người.",
        isTrue: false,
        explanation:
          "P(5) = 2·(1,02)⁵ ≈ 2,208 triệu người là *tổng dân số* tại năm đó. " +
          "Số dân *tăng thêm* chỉ là 2,208 – 2 = 0,208 triệu người. ✗",
      },
      {
        label: "b",
        statement: "Hàm số P(n) = 2·(1,02)ⁿ là hàm đồng biến theo n.",
        isTrue: true,
        explanation: "Cơ số 1,02 > 1 nên hàm mũ cơ số 1,02 luôn đồng biến. ✓",
      },
      {
        label: "c",
        statement:
          "Số năm tối thiểu để dân số tăng gấp đôi (đạt 4 triệu người) là 35 năm.",
        isTrue: false,
        explanation:
          "Cần (1,02)ⁿ ≥ 2 → n ≥ ln2/ln(1,02) ≈ 35,003. " +
          "Vì n là số nguyên, số năm tối thiểu phải làm tròn lên là 36 (không phải 35). ✗",
      },
      {
        label: "d",
        statement:
          "Nếu tỷ lệ tăng là 3%/năm, mô hình dân số sẽ là P(n) = 2·(1,3)ⁿ triệu người.",
        isTrue: false,
        explanation:
          "Tỷ lệ 3% tương ứng với hệ số nhân là 1 + 3% = 1,03. " +
          "Mô hình đúng phải là P(n) = 2·(1,03)ⁿ. Việc dùng 1,3 tương đương với mức tăng 30%. ✗",
      },
    ] as const,
  },
  {
    id: "P2_Q15",
    questionNumber: 15,
    part: EExamPart.II,
    label: "Câu 15.",
    type: "true_false",
    stem: "Cho số phức z = 2 + 3i. Xét các mệnh đề sau:",
    context:
      "z = 2 + 3i, tức a = 2, b = 3. " +
      "Số phức liên hợp: z̄ = 2 – 3i. Mô-đun: |z|² = 4 + 9 = 13.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Mô-đun của z là |z| = √13.",
        isTrue: true,
        explanation: "|z| = √(2² + 3²) = √(4 + 9) = √13. ✓",
      },
      {
        label: "b",
        statement: "Số phức liên hợp z̄ = 2 – 3i.",
        isTrue: true,
        explanation:
          "Số phức liên hợp của a + bi là a – bi. Với z = 2 + 3i → z̄ = 2 – 3i. ✓",
      },
      {
        label: "c",
        statement: "z² = 4 + 9i.",
        isTrue: false,
        explanation:
          "z² = (2 + 3i)² = 4 + 2·2·3i + 9i² = 4 + 12i – 9 = –5 + 12i ≠ 4 + 9i. " +
          "Bẫy: nhầm i² = 1 hoặc tính (2 + 3i)² = 2² + (3i)² mà quên hạng tử chéo 2·2·3i. ✗",
      },
      {
        label: "d",
        statement: "1/z = (2 – 3i)/13.",
        isTrue: true,
        explanation:
          "1/z = z̄/|z|² = (2 – 3i)/13. " +
          "Kiểm tra: (2 + 3i)·(2 – 3i)/13 = (4 + 9)/13 = 1. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q16",
    questionNumber: 16,
    part: EExamPart.II,
    label: "Câu 16.",
    type: "true_false",
    stem: "Trong không gian Oxyz, cho mặt phẳng (α): 2x – y + 2z – 6 = 0 và điểm A(1; 2; 3). Xét các mệnh đề sau:",
    context:
      "Mặt phẳng (α): 2x – y + 2z – 6 = 0. Vectơ pháp tuyến n = (2; –1; 2). " +
      "|n| = √(4 + 1 + 4) = √9 = 3. Điểm A(1; 2; 3).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Vectơ pháp tuyến của mặt phẳng (α) là n⃗ = (2; 1; 2).",
        isTrue: false,
        explanation:
          "Phương trình 2x – y + 2z – 6 = 0 có hệ số của y là –1. " +
          "Vectơ pháp tuyến đúng phải là n⃗ = (2; –1; 2). ✗",
      },
      {
        label: "b",
        statement: "Mặt phẳng (α) đi qua gốc tọa độ O(0; 0; 0).",
        isTrue: false,
        explanation:
          "Thay O(0; 0; 0) vào phương trình (α) ta được –6 = 0 (vô lý). " +
          "Hoặc nhìn nhanh hệ số tự do d = –6 ≠ 0 nên (α) không đi qua gốc O. ✗",
      },
      {
        label: "c",
        statement: "Điểm A(1; 2; 3) thuộc mặt phẳng (α).",
        isTrue: true,
        explanation:
          "Thay A(1; 2; 3) vào (α): 2·1 – 2 + 2·3 – 6 = 2 – 2 + 6 – 6 = 0. " +
          "Vế trái bằng 0 → A ∈ (α). ✓",
      },
      {
        label: "d",
        statement: "Mặt phẳng (α) song song với trục Oz.",
        isTrue: false,
        explanation:
          "Mặt phẳng song song với trục Oz ⟺ n⃗ ⊥ vectơ chỉ phương Oz = (0; 0; 1), " +
          "tức n⃗ · (0; 0; 1) = 0. Nhưng n⃗ · (0; 0; 1) = 2·0 + (–1)·0 + 2·1 = 2 ≠ 0. " +
          "Vậy (α) không song song với Oz. ✗",
      },
    ] as const,
  },
] as const;

const partIIIQuestions: readonly ShortAnswerQuestion[] = [
  {
    id: "P3_Q17",
    questionNumber: 17,
    part: EExamPart.III,
    label: "Câu 17.",
    type: "short_answer",
    stem: "Tính tổng tất cả các nghiệm của phương trình 9ˣ – 4·3^(x+1) + 27 = 0.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    acceptedAnswers: ["3"],
    solutionSteps: [
      "Viết lại: 9ˣ – 4·3·3ˣ + 27 = 0, tức (3ˣ)² – 12·3ˣ + 27 = 0.",
      "Đặt t = 3ˣ (t > 0). Phương trình trở thành: t² – 12t + 27 = 0.",
      "Phân tích: (t – 3)(t – 9) = 0 → t = 3 hoặc t = 9.",
      "t = 3 → 3ˣ = 3¹ → x = 1.",
      "t = 9 → 3ˣ = 3² → x = 2.",
    ],
    conclusion: "Hai nghiệm x = 1 và x = 2. Tổng các nghiệm = 1 + 2 = 3.",
  },
  {
    id: "P3_Q18",
    questionNumber: 18,
    part: EExamPart.III,
    label: "Câu 18.",
    type: "short_answer",
    stem: "Tính tích phân I = ∫₀¹ x·eˣ dx.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    acceptedAnswers: ["1"],
    solutionSteps: [
      "Áp dụng tích phân từng phần: đặt u = x, dv = eˣ dx.",
      "Suy ra du = dx, v = eˣ.",
      "I = [x·eˣ]₀¹ – ∫₀¹ eˣ dx = (1·e – 0·e⁰) – [eˣ]₀¹.",
      "I = e – (e – 1) = e – e + 1 = 1.",
    ],
    conclusion: "I = 1.",
  },
  {
    id: "P3_Q19",
    questionNumber: 19,
    part: EExamPart.III,
    label: "Câu 19.",
    type: "short_answer",
    stem: "Cho số phức z thỏa mãn 2z + iz̄ = 5 + i. Tính mô-đun |z|.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    acceptedAnswers: ["√10", "căn 10", "3.162"],
    solutionSteps: [
      "Đặt z = a + bi (a, b ∈ ℝ). Khi đó z̄ = a – bi.",
      "Tính i·z̄ = i(a – bi) = ai – bi² = ai + b (vì i² = –1).",
      "Phương trình 2z + iz̄ = 5 + i trở thành:",
      "2(a + bi) + (b + ai) = 5 + i",
      "(2a + b) + (2b + a)i = 5 + i.",
      "Đồng nhất phần thực và phần ảo: 2a + b = 5 và a + 2b = 1.",
      "Giải hệ: từ phương trình 1: b = 5 – 2a. Thay vào pt 2: a + 2(5 – 2a) = 1 → –3a = –9 → a = 3.",
      "b = 5 – 6 = –1. Vậy z = 3 – i.",
      "|z| = √(3² + (–1)²) = √(9 + 1) = √10.",
    ],
    conclusion: "|z| = √10.",
  },
  {
    id: "P3_Q20",
    questionNumber: 20,
    part: EExamPart.III,
    label: "Câu 20.",
    type: "short_answer",
    stem: "Trong không gian Oxyz, cho điểm M(1; –2; 3) và mặt phẳng (P): x + 2y – 2z + 5 = 0. Tính khoảng cách từ M đến mặt phẳng (P).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    acceptedAnswers: ["4/3"],
    solutionSteps: [
      "Áp dụng công thức: d(M, (P)) = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²).",
      "Với M(1; –2; 3) và (P): x + 2y – 2z + 5 = 0 (a=1, b=2, c=–2, d=5):",
      "Tử số: |1·1 + 2·(–2) + (–2)·3 + 5| = |1 – 4 – 6 + 5| = |–4| = 4.",
      "Mẫu số: √(1² + 2² + (–2)²) = √(1 + 4 + 4) = √9 = 3.",
      "d(M, (P)) = 4/3.",
    ],
    conclusion: "Khoảng cách từ M đến mặt phẳng (P) là 4/3.",
  },
  {
    id: "P3_Q21",
    questionNumber: 21,
    part: EExamPart.III,
    label: "Câu 21.",
    type: "short_answer",
    stem: "Một hộp chứa 6 bi đỏ và 4 bi xanh. Rút ngẫu nhiên 3 bi từ hộp. Tính xác suất để rút được đúng 2 bi đỏ và 1 bi xanh.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.XAC_SUAT_THONG_KE,
    isApplied: true,
    acceptedAnswers: ["1/2", "0.5"],
    solutionSteps: [
      "Tổng số cách rút 3 bi từ 10 bi: C(10, 3) = 10!/(3!·7!) = 120.",
      "Số cách rút đúng 2 đỏ và 1 xanh: C(6, 2) × C(4, 1) = 15 × 4 = 60.",
      "Xác suất: P = 60/120 = 1/2.",
    ],
    conclusion: "Xác suất rút được đúng 2 bi đỏ và 1 bi xanh là 1/2.",
  },
  {
    id: "P3_Q22",
    questionNumber: 22,
    part: EExamPart.III,
    label: "Câu 22.",
    type: "short_answer",
    stem: "Một mảnh vườn hình chữ nhật có diện tích 200 m². Người ta rào xung quanh toàn bộ mảnh vườn và dựng thêm 2 hàng rào song song với hai cạnh chiều rộng để chia mảnh vườn thành 3 phần bằng nhau. Gọi x (m) là chiều rộng của mảnh vườn (x > 0). Tìm x để tổng chiều dài hàng rào là nhỏ nhất.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    acceptedAnswers: ["10"],
    solutionSteps: [
      "Chiều dài mảnh vườn: l = 200/x (m).",
      "Hàng rào bên ngoài: 2 cạnh chiều rộng (2x) + 2 cạnh chiều dài (2·200/x).",
      "Hai hàng rào chia nội bộ (mỗi hàng song song cạnh chiều rộng, dài x): tổng 2x.",
      "Tổng chiều dài hàng rào: L(x) = 2x + 400/x + 2x = 4x + 400/x (x > 0).",
      "L'(x) = 4 – 400/x² = 0 → x² = 100 → x = 10 (nhận, vì x > 0).",
      "L''(x) = 800/x³ > 0 với x > 0 → x = 10 cho cực tiểu toàn cục.",
      "L(10) = 40 + 40 = 80 m. Chiều dài tương ứng: l = 200/10 = 20 m.",
    ],
    conclusion:
      "x = 10 m cho tổng chiều dài hàng rào nhỏ nhất L_min = 80 m. " +
      "Nhận xét: mảnh vườn tối ưu có tỉ lệ chiều dài/chiều rộng = 2/1.",
  },
] as const;

export const MATH_EXAM_2: Exam = {
  metadata: EXAM_METADATA,
  questions: [...partIQuestions, ...partIIQuestions, ...partIIIQuestions],
} as const;
