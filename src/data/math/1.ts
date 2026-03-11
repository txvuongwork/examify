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
  title: "Đề thi thử môn toán - Đề số 1",
  subject: EExamSubject.MATH,
  examCode: "101",
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
    stem: "Hàm số y = x³ – 3x + 2 đồng biến trên khoảng nào dưới đây?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "(–∞; –1)" },
      { label: "B", text: "(–1; 1)" },
      { label: "C", text: "(1; +∞)" },
      { label: "D", text: "(–∞; –1) và (1; +∞)" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "y' = 3x² – 3 = 3(x–1)(x+1). y' > 0 khi x < –1 hoặc x > 1. " +
      "Hàm đồng biến trên cả (–∞;–1) và (1;+∞), tức đáp án D.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Hàm số y = x³ – 3x² + 4 có giá trị cực đại bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "2" },
      { label: "C", text: "4" },
      { label: "D", text: "8" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "y' = 3x² – 6x = 3x(x–2). Cực đại tại x = 0: y(0) = 0 – 0 + 4 = 4.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Giá trị lớn nhất của hàm số y = –x² + 4x trên đoạn [0; 5] là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "0" },
      { label: "C", text: "–5" },
      { label: "D", text: "5" },
    ] as const,
    correctAnswer: "A",
    explanation: "y' = –2x + 4 = 0 → x = 2. y(0)=0, y(2)=4, y(5)=–5. Max = 4.",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Tổng số đường tiệm cận (tiệm cận đứng và tiệm cận ngang) của đồ thị hàm số y = (x² – 1)/(x² – 4) là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "TCĐ: x² – 4 = 0 → x = ±2 (2 đường). TCN: lim y = 1 → y = 1 (1 đường). Tổng = 3.",
  },
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Giá trị của biểu thức P = 2^(3/2) · 2^(1/2) là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "2√2" },
      { label: "C", text: "2" },
      { label: "D", text: "8" },
    ] as const,
    correctAnswer: "A",
    explanation: "P = 2^(3/2 + 1/2) = 2^2 = 4.",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Phương trình log₃(2x – 1) = 2 có nghiệm là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    options: [
      { label: "A", text: "x = 4" },
      { label: "B", text: "x = 5" },
      { label: "C", text: "x = 10" },
      { label: "D", text: "Vô nghiệm" },
    ] as const,
    correctAnswer: "B",
    explanation: "log₃(2x–1) = 2 → 2x–1 = 3² = 9 → 2x = 10 → x = 5.",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Biết F(x) là một nguyên hàm của f(x) = eˣ + 2x thỏa mãn F(0) = 3. Giá trị F(1) bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    options: [
      { label: "A", text: "e + 3" },
      { label: "B", text: "e + 2" },
      { label: "C", text: "e + 1" },
      { label: "D", text: "2e + 1" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "F(x) = eˣ + x² + C. F(0) = 1 + 0 + C = 3 → C = 2. F(1) = e + 1 + 2 = e + 3.",
  },
  {
    id: "P1_Q8",
    questionNumber: 8,
    part: EExamPart.I,
    label: "Câu 8.",
    type: "multiple_choice",
    stem: "Tích phân ∫₀^(π/2) cos x dx bằng:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "π/2" },
      { label: "D", text: "2" },
    ] as const,
    correctAnswer: "B",
    explanation: "[sin x]₀^(π/2) = sin(π/2) – sin(0) = 1 – 0 = 1.",
  },
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Cho số phức z = (1 + i)². Phần thực của z bằng:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    options: [
      { label: "A", text: "–2" },
      { label: "B", text: "0" },
      { label: "C", text: "2" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "B",
    explanation: "(1+i)² = 1 + 2i + i² = 1 + 2i – 1 = 0 + 2i. Phần thực = 0.",
  },
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Khối lăng trụ tam giác đều có cạnh đáy a = 2 và chiều cao h = √3. Thể tích khối lăng trụ đó bằng:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    options: [
      { label: "A", text: "√3" },
      { label: "B", text: "2√3" },
      { label: "C", text: "3" },
      { label: "D", text: "4√3" },
    ] as const,
    correctAnswer: "C",
    explanation: "S_đáy = (√3/4)·2² = √3. V = S_đáy·h = √3·√3 = 3.",
  },
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Có bao nhiêu cách xếp 5 học sinh vào một hàng ngang sao cho hai học sinh An và Bình phải đứng cạnh nhau?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: false,
    options: [
      { label: "A", text: "24" },
      { label: "B", text: "36" },
      { label: "C", text: "48" },
      { label: "D", text: "120" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Gộp An–Bình thành 1 khối: xếp 4 phần tử → 4! = 24 cách. " +
      "An–Bình hoán vị nội bộ: 2! = 2. Tổng: 24 × 2 = 48.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Một hộp đựng 5 bi đỏ, 3 bi xanh và 2 bi vàng. Rút ngẫu nhiên 2 bi từ hộp. Xác suất để 2 bi rút ra cùng màu là:",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TO_HOP_XAC_SUAT,
    isApplied: true,
    options: [
      { label: "A", text: "4/15" },
      { label: "B", text: "14/45" },
      { label: "C", text: "31/45" },
      { label: "D", text: "1/3" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "C(10,2) = 45. Số cặp cùng màu: C(5,2)+C(3,2)+C(2,2) = 10+3+1 = 14. P = 14/45.",
  },
] as const;

const partIIQuestions: readonly TrueFalseQuestion[] = [
  {
    id: "P2_Q13",
    questionNumber: 13,
    part: EExamPart.II,
    label: "Câu 13.",
    type: "true_false",
    stem: "Cho hàm số f(x) = x³ – 3x² – 9x + 2. Xét các mệnh đề sau:",
    context:
      "f(x) = x³ – 3x² – 9x + 2. Đạo hàm: f'(x) = 3(x+1)(x–3); nghiệm x = –1 và x = 3.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HAM_SO,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Hàm số nghịch biến trên khoảng (–1; 3).",
        isTrue: true,
        explanation: "f'(x) = 3(x+1)(x–3) < 0 với mọi x ∈ (–1; 3). ✓",
      },
      {
        label: "b",
        statement: "Hàm số đạt cực đại tại x = –1 với giá trị cực đại bằng 7.",
        isTrue: true,
        explanation: "f''(–1) = –12 < 0 → cực đại. f(–1) = –1–3+9+2 = 7. ✓",
      },
      {
        label: "c",
        statement:
          "Hàm số đạt cực tiểu tại x = 3 với giá trị cực tiểu bằng –27.",
        isTrue: false,
        explanation:
          "f(3) = 27–27–27+2 = –25 ≠ –27. Giá trị cực tiểu đúng là –25.",
      },
      {
        label: "d",
        statement: "Phương trình f(x) = 0 có đúng 3 nghiệm thực phân biệt.",
        isTrue: true,
        explanation:
          "0 ∈ (–25; 7) = (y_CT; y_CĐ) → phương trình có đúng 3 nghiệm. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q14",
    questionNumber: 14,
    part: EExamPart.II,
    label: "Câu 14.",
    type: "true_false",
    stem: "Bài toán thực tế – Lãi suất ngân hàng. Anh Nam gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất 6%/năm, tính lãi kép hàng năm. Sau n năm (n ∈ ℕ*), số tiền (cả gốc lẫn lãi) anh Nam nhận được là A(n) = 100·(1,06)ⁿ triệu đồng. Xét các mệnh đề:",
    context: "Mô hình lãi kép: A(n) = 100·(1,06)ⁿ triệu đồng.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    items: [
      {
        label: "a",
        statement:
          "Sau 10 năm, anh Nam nhận được số tiền xấp xỉ 179,08 triệu đồng.",
        isTrue: true,
        explanation: "A(10) = 100·(1,06)¹⁰ ≈ 100·1,79085 ≈ 179,08 triệu. ✓",
      },
      {
        label: "b",
        statement:
          "Sau 5 năm, số tiền lãi (không tính gốc) anh Nam nhận được là 30 triệu đồng.",
        isTrue: false,
        explanation:
          "Tiền lãi sau 5 năm = A(5) – 100 = 100·(1,06)⁵ – 100 ≈ 100·1,3382 – 100 ≈ 33,82 triệu. " +
          "Bẫy: HS nhầm lãi đơn 6%×5 = 30%, tức 30 triệu. Nhưng lãi kép cho kết quả lớn hơn.",
      },
      {
        label: "c",
        statement: "Số năm tối thiểu để số tiền tăng gấp đôi là 11 năm.",
        isTrue: false,
        explanation:
          "Cần (1,06)ⁿ ≥ 2 → n ≥ ln2/ln(1,06) ≈ 11,9. " +
          "Số năm tối thiểu là 12 (vì (1,06)¹¹ ≈ 1,898 < 2 nhưng (1,06)¹² ≈ 2,012 > 2).",
      },
      {
        label: "d",
        statement:
          "Nếu lãi suất tăng lên 8%/năm, sau 10 năm số tiền nhận được vượt 200 triệu đồng.",
        isTrue: true,
        explanation: "100·(1,08)¹⁰ ≈ 100·2,159 ≈ 215,9 triệu > 200. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q15",
    questionNumber: 15,
    part: EExamPart.II,
    label: "Câu 15.",
    type: "true_false",
    stem: "Cho hàm số y = x² – 4x + 3. Xét các mệnh đề sau:",
    context:
      "y = x² – 4x + 3 = (x–1)(x–3); nghiệm thực tại x=1 và x=3; hàm âm trên (1;3).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "∫₀⁴ (x² – 4x + 3) dx = 4/3.",
        isTrue: true,
        explanation:
          "[x³/3 – 2x² + 3x]₀⁴ = (64/3 – 32 + 12) – 0 = 64/3 – 60/3 = 4/3. ✓",
      },
      {
        label: "b",
        statement: "Hàm số y = x² – 4x + 3 nhận giá trị âm với mọi x ∈ (1; 3).",
        isTrue: true,
        explanation: "(x–1)(x–3) < 0 với 1 < x < 3 → hàm âm. ✓",
      },
      {
        label: "c",
        statement:
          "Diện tích hình phẳng giới hạn bởi đồ thị hàm số và trục Ox trên đoạn [1; 3] bằng 4/3.",
        isTrue: true,
        explanation: "Diện tích = |∫₁³ (x²–4x+3) dx| = |0 – 4/3| = 4/3. ✓",
      },
      {
        label: "d",
        statement: "∫₁³ (x² – 4x + 3) dx = 4/3.",
        isTrue: false,
        explanation:
          "∫₁³ (x²–4x+3) dx = 0 – 4/3 = –4/3 ≠ 4/3. " +
          "Bẫy cổ điển: tích phân hàm âm cho giá trị âm, không bằng diện tích!",
      },
    ] as const,
  },
  {
    id: "P2_Q16",
    questionNumber: 16,
    part: EExamPart.II,
    label: "Câu 16.",
    type: "true_false",
    stem: "Cho hình chóp S.ABC có đáy ABC là tam giác vuông tại B với AB = 3 cm, BC = 4 cm. Cạnh bên SA vuông góc với mặt phẳng đáy và SA = 6 cm. Xét các mệnh đề sau:",
    context: "∠B = 90°; AB = 3 cm; BC = 4 cm; SA ⊥ mp(ABC); SA = 6 cm.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Độ dài đoạn thẳng SC = 5√2 cm.",
        isTrue: false,
        explanation:
          "SA ⊥ AC nên SC = √(SA²+AC²) = √(36+25) = √61 cm ≈ 7,81 cm. " +
          "5√2 ≈ 7,07 cm ≠ √61. Kết quả sai.",
      },
      {
        label: "b",
        statement: "Thể tích khối chóp S.ABC bằng 12 cm³.",
        isTrue: true,
        explanation:
          "V = (1/3)·S_ABC·SA = (1/3)·(½·3·4)·6 = (1/3)·6·6 = 12 cm³. ✓",
      },
      {
        label: "c",
        statement: "Khoảng cách từ điểm B đến mặt phẳng (SAC) bằng 12/5 cm.",
        isTrue: true,
        explanation:
          "SA ⊥ mp(ABC) → mp(SAC)∩mp(ABC) = AC. " +
          "d(B, mp(SAC)) = d(B, AC) trong mp đáy = AB·BC/AC = 3·4/5 = 12/5 cm. ✓",
      },
      {
        label: "d",
        statement: "AC = 5 cm.",
        isTrue: true,
        explanation: "Pythagore: AC = √(AB² + BC²) = √(9+16) = √25 = 5 cm. ✓",
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
    stem: "Tính tổng tất cả các nghiệm của phương trình 4ˣ – 5·2ˣ + 4 = 0.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.MU_LOGARIT,
    isApplied: false,
    acceptedAnswers: ["2", "2.0"],
    solutionSteps: [
      "Đặt t = 2ˣ (t > 0). Vì 4ˣ = (2ˣ)² = t², phương trình trở thành: t² – 5t + 4 = 0.",
      "Phân tích: (t–1)(t–4) = 0 → t = 1 hoặc t = 4.",
      "t = 1 → 2ˣ = 1 = 2⁰ → x = 0.",
      "t = 4 → 2ˣ = 4 = 2² → x = 2.",
    ],
    conclusion: "Hai nghiệm x = 0 và x = 2. Tổng các nghiệm = 0 + 2 = 2.",
  },
  {
    id: "P3_Q18",
    questionNumber: 18,
    part: EExamPart.III,
    label: "Câu 18.",
    type: "short_answer",
    stem: "Tính tích phân I = ∫₁² (3x² – 2x + 1) dx.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.NGUYEN_HAM_TICH_PHAN,
    isApplied: false,
    acceptedAnswers: ["5"],
    solutionSteps: [
      "Nguyên hàm: ∫(3x²–2x+1) dx = x³ – x² + x + C.",
      "I = [x³ – x² + x]₁² = (8 – 4 + 2) – (1 – 1 + 1) = 6 – 1 = 5.",
    ],
    conclusion: "I = 5.",
  },
  {
    id: "P3_Q19",
    questionNumber: 19,
    part: EExamPart.III,
    label: "Câu 19.",
    type: "short_answer",
    stem: "Cho số phức z thỏa mãn (1 + 2i)z = 3 – i. Tính mô-đun |z|.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SO_PHUC,
    isApplied: false,
    acceptedAnswers: ["√2", "căn 2", "1.414"],
    solutionSteps: [
      "Lấy mô-đun hai vế: |1+2i|·|z| = |3–i|.",
      "|1+2i| = √(1²+2²) = √5.",
      "|3–i| = √(3²+1²) = √10.",
      "|z| = √10 / √5 = √(10/5) = √2.",
      "Kiểm tra: z = (3–i)/(1+2i) = (3–i)(1–2i)/5 = (1–7i)/5. |z|² = 1/25+49/25 = 2. ✓",
    ],
    conclusion: "|z| = √2.",
  },
  {
    id: "P3_Q20",
    questionNumber: 20,
    part: EExamPart.III,
    label: "Câu 20.",
    type: "short_answer",
    stem: "Trong không gian Oxyz, cho mặt phẳng (P): x/1 + y/2 + z/3 = 1. Điểm M(a; a; a) thuộc (P). Tính khoảng cách từ điểm N(2a; 0; 0) đến mặt phẳng (P).",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.HINH_HOC_KHONG_GIAN,
    isApplied: false,
    acceptedAnswers: ["6/77", "0.078"],
    solutionSteps: [
      "M(a;a;a) ∈ (P): a/1 + a/2 + a/3 = 1 → a(1 + 1/2 + 1/3) = 1 → a·(11/6) = 1 → a = 6/11.",
      "N(2a; 0; 0) = N(12/11; 0; 0).",
      "(P): 6x + 3y + 2z – 6 = 0.",
      "d(N, (P)) = |6·(12/11) + 3·0 + 2·0 – 6| / √(36+9+4) = |72/11 – 66/11| / 7 = (6/11) / 7 = 6/77.",
    ],
    conclusion: "Khoảng cách từ N đến (P) là 6/77.",
  },
  {
    id: "P3_Q21",
    questionNumber: 21,
    part: EExamPart.III,
    label: "Câu 21.",
    type: "short_answer",
    stem: "Một học sinh đoán ngẫu nhiên 4 câu hỏi trắc nghiệm, mỗi câu có 4 phương án (chỉ một đáp án đúng). Tính xác suất để học sinh đó trả lời đúng ít nhất 3 câu.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.XAC_SUAT_THONG_KE,
    isApplied: true,
    acceptedAnswers: ["13/256", "0.0508"],
    solutionSteps: [
      "Nhận dạng mô hình: X ~ B(4, 1/4) với p = 1/4, q = 3/4.",
      "P(X=3) = C(4,3)·(1/4)³·(3/4)¹ = 4·(1/64)·(3/4) = 12/256.",
      "P(X=4) = C(4,4)·(1/4)⁴ = 1/256.",
      "P(X ≥ 3) = P(X=3) + P(X=4) = 12/256 + 1/256 = 13/256.",
    ],
    conclusion: "Xác suất đúng ít nhất 3 câu = 13/256.",
  },
  {
    id: "P3_Q22",
    questionNumber: 22,
    part: EExamPart.III,
    label: "Câu 22.",
    type: "short_answer",
    stem: "Một xưởng cần sản xuất hộp hình hộp chữ nhật không nắp, có thể tích 32 cm³. Đáy hộp là hình vuông cạnh x (cm). Gọi S(x) là diện tích toàn phần của vật liệu dùng để làm hộp. Tìm giá trị x (cm) để S(x) đạt giá trị nhỏ nhất.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.TOAN_HOC_THUC_TE,
    isApplied: true,
    acceptedAnswers: ["4"],
    solutionSteps: [
      "Từ V = x²·h = 32 → h = 32/x².",
      "Diện tích vật liệu (không nắp): S(x) = x² + 4·x·h = x² + 128/x, với x > 0.",
      "S'(x) = 2x – 128/x² = 0 → 2x³ = 128 → x³ = 64 → x = 4.",
      "S''(x) = 2 + 256/x³ > 0 với mọi x > 0 → x = 4 là cực tiểu toàn cục.",
      "S(4) = 16 + 32 = 48 cm². Chiều cao tương ứng: h = 32/16 = 2 cm.",
    ],
    conclusion:
      "x = 4 cm cho diện tích vật liệu nhỏ nhất S_min = 48 cm². " +
      "Nhận xét: hộp tối ưu có h = x/2, một tỉ lệ phổ biến trong thiết kế bao bì.",
  },
] as const;

export const MATH_EXAM_1: Exam = {
  metadata: EXAM_METADATA,
  questions: [...partIQuestions, ...partIIQuestions, ...partIIIQuestions],
} as const;
