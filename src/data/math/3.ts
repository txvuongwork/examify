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
  title: "Đề thi thử môn toán - Đề số 3",
  subject: EExamSubject.MATH,
  examCode: "103",
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
    stem: "Hàm số y = –x³ + 3x² – 2 nghịch biến trên khoảng nào dưới đây?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "(0; 2)" },
      { label: "B", text: "(–∞; 0)" },
      { label: "C", text: "(2; +∞)" },
      { label: "D", text: "(–∞; 0) và (2; +∞)" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "y' = –3x² + 6x = –3x(x–2). y' < 0 khi x < 0 hoặc x > 2. " +
      "Hàm nghịch biến trên cả (–∞; 0) và (2; +∞) → đáp án D.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Hàm số y = 2x³ – 6x + 1 đạt cực tiểu tại điểm có hoành độ:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "x = –1" },
      { label: "B", text: "x = 0" },
      { label: "C", text: "x = 1" },
      { label: "D", text: "x = 2" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "y' = 6x² – 6 = 6(x–1)(x+1). Nghiệm x = ±1. " +
      "y''(1) = 12 > 0 → cực tiểu tại x = 1; y''(–1) = –12 < 0 → cực đại tại x = –1.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Giá trị nhỏ nhất của hàm số y = x³ – 3x trên đoạn [–2; 2] là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "–2" },
      { label: "B", text: "–1" },
      { label: "C", text: "2" },
      { label: "D", text: "–√3" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "y' = 3x² – 3 = 0 → x = ±1. " +
      "Bảng giá trị: y(–2) = –8+6 = –2; y(–1) = –1+3 = 2; y(1) = 1–3 = –2; y(2) = 8–6 = 2. " +
      "Giá trị nhỏ nhất = –2.",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Tiệm cận ngang của đồ thị hàm số y = (3x – 1)/(x + 2) là đường thẳng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "y = –2" },
      { label: "B", text: "y = 1/3" },
      { label: "C", text: "y = –1" },
      { label: "D", text: "y = 3" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "lim(x→±∞) (3x–1)/(x+2) = lim (3–1/x)/(1+2/x) = 3. " +
      "Tiệm cận ngang: y = 3 → đáp án D.",
  },
  // ── Mũ – Logarit ──────────────────────────────────────────────────────────
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Giá trị của biểu thức P = (3^(1/2) · 3^(2/3))^6 là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "3⁴" },
      { label: "B", text: "3⁵" },
      { label: "C", text: "3⁶" },
      { label: "D", text: "3⁷" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "3^(1/2) · 3^(2/3) = 3^(1/2+2/3) = 3^(3/6+4/6) = 3^(7/6). " +
      "(3^(7/6))^6 = 3^7 → đáp án D.",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Phương trình log₂(x + 3) = 3 có nghiệm là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "x = 3" },
      { label: "B", text: "x = 5" },
      { label: "C", text: "x = 6" },
      { label: "D", text: "x = 11" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "log₂(x+3) = 3 → x+3 = 2³ = 8 → x = 5. " +
      "Kiểm tra điều kiện: x+3 = 8 > 0 ✓ → đáp án B.",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Nguyên hàm của hàm số f(x) = 3x² – 4x + 1 là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    options: [
      { label: "A", text: "6x – 4 + C" },
      { label: "B", text: "x³ – 2x² + x + C" },
      { label: "C", text: "x³ – 4x² + x + C" },
      { label: "D", text: "3x³ – 4x² + x + C" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "∫(3x²–4x+1)dx = 3·(x³/3) – 4·(x²/2) + x + C = x³ – 2x² + x + C → đáp án B.",
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
      { label: "A", text: "e" },
      { label: "B", text: "e – 1" },
      { label: "C", text: "e + 1" },
      { label: "D", text: "2 + e" },
    ] as const,
    correctAnswer: "A",
    explanation: "[x² + eˣ]₀¹ = (1 + e) – (0 + 1) = e → đáp án A.",
  },
  // ── Số phức ────────────────────────────────────────────────────────────────
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Cho số phức z = (2 – i)(1 + 3i). Phần ảo của z bằng:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    options: [
      { label: "A", text: "–5" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "–7" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "(2–i)(1+3i) = 2+6i–i–3i² = 2+5i–3(–1) = 2+5i+3 = 5+5i. " +
      "Phần ảo = 5 → đáp án B.",
  },
  // ── Hình học không gian ────────────────────────────────────────────────────
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Hình chóp tứ giác đều S.ABCD có cạnh đáy a = 4 cm và chiều cao h = 3 cm. Thể tích hình chóp bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    options: [
      { label: "A", text: "8 cm³" },
      { label: "B", text: "12 cm³" },
      { label: "C", text: "16 cm³" },
      { label: "D", text: "48 cm³" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "S_đáy = a² = 16 cm². V = (1/3)·S_đáy·h = (1/3)·16·3 = 16 cm³ → đáp án C.",
  },
  // ── Tổ hợp – Xác suất ──────────────────────────────────────────────────────
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Từ các chữ số {1, 2, 3, 4, 5}, lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: false,
    options: [
      { label: "A", text: "10" },
      { label: "B", text: "20" },
      { label: "C", text: "60" },
      { label: "D", text: "125" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Chọn và sắp thứ tự 3 trong 5 chữ số (không lặp): A₅³ = 5×4×3 = 60 → đáp án C.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Một lô hàng có 8 sản phẩm đạt chuẩn và 4 sản phẩm lỗi. Kiểm tra ngẫu nhiên 3 sản phẩm. Xác suất để trong 3 sản phẩm được chọn có đúng 2 sản phẩm đạt chuẩn là:",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: true,
    options: [
      { label: "A", text: "8/55" },
      { label: "B", text: "14/55" },
      { label: "C", text: "28/55" },
      { label: "D", text: "56/165" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Tổng số cách chọn: C(12,3) = 220. " +
      "Đúng 2 đạt chuẩn + 1 lỗi: C(8,2)·C(4,1) = 28·4 = 112. " +
      "P = 112/220 = 28/55 → đáp án C.",
  },
] as const;

const partIIQuestions: readonly TrueFalseQuestion[] = [
  {
    id: "P2_Q13",
    questionNumber: 13,
    part: EExamPart.II,
    label: "Câu 13.",
    type: "true_false",
    stem: "Cho hàm số f(x) = x⁴ – 8x² + 7. Xét các mệnh đề sau:",
    context: "f'(x) = 4x³ – 16x = 4x(x–2)(x+2). Nghiệm: x = 0, x = ±2.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Hàm số đồng biến trên khoảng (–2; 0) và (2; +∞).",
        isTrue: true,
        explanation:
          "f' > 0 trên (–2;0): f'(–1) = 4(–1)(–3)(1) = 12 > 0. ✓ " +
          "f' > 0 trên (2;+∞): f'(3) = 4·3·1·5 = 60 > 0. ✓ Mệnh đề ĐÚNG.",
      },
      {
        label: "b",
        statement: "Hàm số đạt cực đại tại x = 0 với giá trị cực đại bằng 7.",
        isTrue: true,
        explanation:
          "f''(x) = 12x²–16. f''(0) = –16 < 0 → cực đại tại x = 0. " +
          "f(0) = 0–0+7 = 7. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "c",
        statement: "Giá trị cực tiểu của hàm số là –9.",
        isTrue: true,
        explanation:
          "Cực tiểu tại x = ±2: f(2) = 16–32+7 = –9; f(–2) = –9. " +
          "Giá trị cực tiểu = –9. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "d",
        statement: "Phương trình f(x) = 0 có đúng 2 nghiệm thực phân biệt.",
        isTrue: false,
        explanation:
          "Đặt t = x² ≥ 0: t²–8t+7 = 0 → (t–1)(t–7) = 0 → t=1 hoặc t=7. " +
          "t=1 → x = ±1; t=7 → x = ±√7. Tổng cộng 4 nghiệm, không phải 2. " +
          "Mệnh đề SAI. ✗",
      },
    ] as const,
  },
  {
    id: "P2_Q14",
    questionNumber: 14,
    part: EExamPart.II,
    label: "Câu 14.",
    type: "true_false",
    stem: "Bài toán thực tế — Dân số. Một thành phố năm 2020 có dân số 500 000 người, tăng đều 1,5%/năm. Mô hình dân số sau n năm kể từ 2020: P(n) = 500·(1,015)ⁿ nghìn người. Xét các mệnh đề:",
    context: "P(n) = 500·(1,015)ⁿ nghìn người; n ∈ ℕ, n = 0 ↔ năm 2020.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    items: [
      {
        label: "a",
        statement: "Năm 2030, dân số thành phố xấp xỉ 580 nghìn người.",
        isTrue: true,
        explanation:
          "P(10) = 500·(1,015)^10 ≈ 500·1,1605 ≈ 580,2 nghìn. " +
          "Xấp xỉ 580 nghìn. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "b",
        statement: "Hàm P(n) = 500·(1,015)ⁿ là hàm số nghịch biến theo n.",
        isTrue: false,
        explanation:
          "Cơ số 1,015 > 1 → hàm mũ đồng biến (tăng) khi n tăng. " +
          "Dân số ngày càng tăng, không giảm. Mệnh đề SAI. ✗",
      },
      {
        label: "c",
        statement: "Số năm tối thiểu để dân số vượt 600 nghìn người là 13 năm.",
        isTrue: true,
        explanation:
          "Cần (1,015)ⁿ > 1,2 → n > ln(1,2)/ln(1,015) ≈ 12,24. " +
          "n_min = 13. Kiểm tra: P(12) ≈ 597,8 < 600; P(13) ≈ 606,8 > 600. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "d",
        statement:
          "Nếu tốc độ tăng là 2%/năm thay vì 1,5%/năm, sau 20 năm dân số vượt 700 nghìn người.",
        isTrue: true,
        explanation:
          "P'(20) = 500·(1,02)^20 ≈ 500·1,4859 ≈ 742,97 > 700. Mệnh đề ĐÚNG. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q15",
    questionNumber: 15,
    part: EExamPart.II,
    label: "Câu 15.",
    type: "true_false",
    stem: "Cho hàm số f(x) = x² – 6x + 8 = (x–2)(x–4). Xét các mệnh đề sau:",
    context: "f(x) = (x–2)(x–4); f(x) < 0 trên (2; 4); f(x) ≥ 0 ngoài [2; 4].",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "∫₀³ (x² – 6x + 8) dx = 6.",
        isTrue: true,
        explanation:
          "[x³/3 – 3x² + 8x]₀³ = (27/3–27+24) – 0 = (9–27+24) = 6. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "b",
        statement: "∫₂⁴ (x² – 6x + 8) dx = –4/3.",
        isTrue: true,
        explanation:
          "[x³/3 – 3x² + 8x]₂⁴ = (64/3–48+32) – (8/3–12+16) " +
          "= (64/3–16) – (8/3+4) = 56/3–20 = 56/3–60/3 = –4/3. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "c",
        statement:
          "Diện tích hình phẳng giới hạn bởi đồ thị hàm số và trục Ox trên [2; 4] bằng 4/3.",
        isTrue: true,
        explanation:
          "Trên (2;4), f(x) < 0 nên S = |∫₂⁴ f(x)dx| = |–4/3| = 4/3. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "d",
        statement: "∫₀³ (x² – 6x + 8) dx = 4/3.",
        isTrue: false,
        explanation:
          "∫₀³ f(x)dx = 6 (tính ở mệnh đề a) ≠ 4/3. " +
          "Bẫy kinh điển: nhầm lẫn tích phân trên [0;3] với diện tích hình phẳng trên [2;4]. " +
          "Mệnh đề SAI. ✗",
      },
    ] as const,
  },
  {
    id: "P2_Q16",
    questionNumber: 16,
    part: EExamPart.II,
    label: "Câu 16.",
    type: "true_false",
    stem: "Trong không gian Oxyz, cho ba điểm A(2; 1; –1), B(0; 3; 1), C(–1; 2; 2). Xét các mệnh đề:",
    context: "AB⃗ = B – A = (–2; 2; 2); AC⃗ = C – A = (–3; 1; 3).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Vectơ AB⃗ = (–2; 2; 2).",
        isTrue: true,
        explanation: "AB⃗ = (0–2; 3–1; 1–(–1)) = (–2; 2; 2). Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "b",
        statement: "Độ dài AB = 2√3.",
        isTrue: true,
        explanation:
          "|AB| = √((–2)²+2²+2²) = √(4+4+4) = √12 = 2√3. Mệnh đề ĐÚNG. ✓",
      },
      {
        label: "c",
        statement: "Ba điểm A, B, C thẳng hàng.",
        isTrue: false,
        explanation:
          "Nếu thẳng hàng thì AC⃗ = k·AB⃗. " +
          "Từ –3 = –2k → k = 3/2. Kiểm tra: 1 = 2·(3/2) = 3 → mâu thuẫn. " +
          "Ba điểm không thẳng hàng. Mệnh đề SAI. ✗",
      },
      {
        label: "d",
        statement:
          "Một vectơ pháp tuyến của mặt phẳng (ABC) là n⃗ = (4; 0; 4).",
        isTrue: true,
        explanation:
          "n⃗ = AB⃗ × AC⃗. " +
          "n_x = (2·3 – 2·1) = 4; n_y = –((–2)·3 – 2·(–3)) = –(–6+6) = 0; " +
          "n_z = (–2)·1 – 2·(–3) = –2+6 = 4. → n⃗ = (4; 0; 4). Mệnh đề ĐÚNG. ✓",
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
    stem: "Giải phương trình 9ˣ – 4·3ˣ + 3 = 0. Tính tích hai nghiệm của phương trình.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    acceptedAnswers: ["0"],
    solutionSteps: [
      "Đặt t = 3ˣ (t > 0). Vì 9ˣ = (3ˣ)² = t², phương trình thành: t² – 4t + 3 = 0.",
      "(t–1)(t–3) = 0 → t = 1 hoặc t = 3.",
      "t = 1 → 3ˣ = 3⁰ → x₁ = 0.",
      "t = 3 → 3ˣ = 3¹ → x₂ = 1.",
      "Tích hai nghiệm: x₁ · x₂ = 0 · 1 = 0.",
    ],
    conclusion: "Hai nghiệm x = 0 và x = 1. Tích = 0.",
  },
  {
    id: "P3_Q18",
    questionNumber: 18,
    part: EExamPart.III,
    label: "Câu 18.",
    type: "short_answer",
    stem: "Tính tích phân I = ∫₀^π (2sin x + cos 2x) dx.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    acceptedAnswers: ["4"],
    solutionSteps: [
      "Nguyên hàm: ∫(2sin x + cos 2x) dx = –2cos x + (sin 2x)/2 + C.",
      "I = [–2cos x + (sin 2x)/2]₀^π",
      "Tại x = π: –2cos π + (sin 2π)/2 = –2·(–1) + 0 = 2.",
      "Tại x = 0: –2cos 0 + (sin 0)/2 = –2·1 + 0 = –2.",
      "I = 2 – (–2) = 4.",
    ],
    conclusion: "I = 4.",
  },
  {
    id: "P3_Q19",
    questionNumber: 19,
    part: EExamPart.III,
    label: "Câu 19.",
    type: "short_answer",
    stem: "Cho số phức z thỏa mãn z² = –3 + 4i. Tính |z|².",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    acceptedAnswers: ["5"],
    solutionSteps: [
      "Lấy mô-đun hai vế: |z²| = |–3 + 4i|.",
      "|–3 + 4i| = √((-3)² + 4²) = √(9 + 16) = √25 = 5.",
      "Vì |z²| = |z|² (tính chất mô-đun số phức), suy ra |z|² = 5.",
    ],
    conclusion: "|z|² = 5.",
  },
  {
    id: "P3_Q20",
    questionNumber: 20,
    part: EExamPart.III,
    label: "Câu 20.",
    type: "short_answer",
    stem: "Trong không gian Oxyz, cho hai điểm A(1; 2; 3), B(3; 0; 1) và mặt phẳng (P): x + y - z + 1 = 0. Gọi M là điểm di động trên mặt phẳng (P). Tính giá trị nhỏ nhất của biểu thức T = MA² + MB².",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    acceptedAnswers: ["26/3", "8.667", "8,667", "8.67", "8,67"],
    solutionSteps: [
      "Gọi I là trung điểm của AB, suy ra tọa độ I(2; 1; 2).",
      "Ta có: AB² = (3-1)² + (0-2)² + (1-3)² = 4 + 4 + 4 = 12.",
      "Biến đổi T: T = MA² + MB² = (MI⃗ + IA⃗)² + (MI⃗ + IB⃗)².",
      "Vì I là trung điểm AB nên IA⃗ + IB⃗ = 0⃗. Do đó: T = 2MI² + IA² + IB² = 2MI² + AB²/2 = 2MI² + 6.",
      "T đạt giá trị nhỏ nhất khi MI nhỏ nhất, tương đương M là hình chiếu vuông góc của I lên (P).",
      "MI_min = d(I, (P)) = |2 + 1 - 2 + 1| / √(1² + 1² + (-1)²) = 2 / √3.",
      "Vậy T_min = 2·(2/√3)² + 6 = 2·(4/3) + 6 = 8/3 + 18/3 = 26/3.",
    ],
    conclusion: "Giá trị nhỏ nhất của biểu thức là 26/3.",
  },
  {
    id: "P3_Q21",
    questionNumber: 21,
    part: EExamPart.III,
    label: "Câu 21.",
    type: "short_answer",
    stem: "Xác suất để một học sinh trả lời đúng mỗi câu trắc nghiệm (độc lập) là 0,7. Học sinh làm 3 câu. Tính xác suất để học sinh trả lời đúng ít nhất 2 câu.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.XAC_SUAT_THONG_KE,
    isApplied: true,
    acceptedAnswers: ["0.784", "0,784"],
    solutionSteps: [
      "Nhận dạng mô hình: X ~ B(3; 0,7) với p = 0,7; q = 0,3.",
      "P(X=2) = C(3,2)·(0,7)²·(0,3)¹ = 3 · 0,49 · 0,3 = 0,441.",
      "P(X=3) = C(3,3)·(0,7)³ = 1 · 0,343 = 0,343.",
      "P(X ≥ 2) = P(X=2) + P(X=3) = 0,441 + 0,343 = 0,784.",
    ],
    conclusion: "Xác suất trả lời đúng ít nhất 2 câu = 0,784.",
  },
  {
    id: "P3_Q22",
    questionNumber: 22,
    part: EExamPart.III,
    label: "Câu 22.",
    type: "short_answer",
    stem: "Một bể nước hình trụ hở (có đáy, không có nắp) cần chứa thể tích 8π m³. Gọi r (m) là bán kính đáy, h (m) là chiều cao. Tìm r để tổng diện tích tôn làm bể (đáy tròn và xung quanh) đạt giá trị nhỏ nhất.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    acceptedAnswers: ["2"],
    solutionSteps: [
      "Từ điều kiện thể tích: V = πr²·h = 8π → h = 8/r².",
      "Diện tích tôn cần dùng (đáy + xung quanh): S(r) = πr² + 2πr·h = πr² + 16π/r, r > 0.",
      "Lấy đạo hàm và cho bằng 0: S'(r) = 2πr – 16π/r² = 0.",
      "Giải: 2r³ = 16 → r³ = 8 → r = 2.",
      "S''(r) = 2π + 32π/r³ > 0 với mọi r > 0 → r = 2 là điểm cực tiểu toàn cục.",
      "S_min = S(2) = π·4 + 16π/2 = 4π + 8π = 12π m².",
      "Chiều cao tương ứng: h = 8/4 = 2 m = r (bể tối ưu khi h = r).",
    ],
    conclusion:
      "r = 2 m cho diện tích tôn nhỏ nhất S_min = 12π m². " +
      "Nhận xét: bể tối ưu có chiều cao bằng bán kính đáy.",
  },
] as const;

export const MATH_EXAM_3: Exam = {
  metadata: EXAM_METADATA,
  questions: [
    ...partIQuestions,
    ...partIIQuestions,
    ...partIIIQuestions,
  ] as const,
};
