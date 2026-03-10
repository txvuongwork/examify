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

// =============================================================================
// DATA
// =============================================================================

const EXAM_METADATA: ExamMetadata = {
  title: "Đề thi thử môn hóa học - Đề số 2",
  subject: EExamSubject.CHEMISTRY,
  examCode: "0402",
  year: 2026,
  curriculum: "GDPT 2018",
  durationMinutes: 50,
  parts: {
    [EExamPart.I]: {
      label: "Trắc nghiệm nhiều phương án lựa chọn",
      count: 18,
      instructions:
        "Thí sinh trả lời từ câu 1 đến câu 18. Mỗi câu hỏi thí sinh chỉ chọn một phương án.",
    },
    [EExamPart.II]: {
      label: "Trắc nghiệm Đúng/Sai",
      count: 4,
      instructions:
        "Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.",
    },
    [EExamPart.III]: {
      label: "Trắc nghiệm trả lời ngắn",
      count: 6,
      instructions:
        "Thí sinh trả lời từ câu 1 đến câu 6. Thí sinh tính toán và ghi kết quả vào phiếu trả lời.",
    },
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// PART I QUESTIONS (Q1–Q18)
// ─────────────────────────────────────────────────────────────────────────────

const partIQuestions: readonly MultipleChoiceQuestion[] = [
  {
    id: "P1_Q1",
    questionNumber: 1,
    part: EExamPart.I,
    label: "Câu 1.",
    type: "multiple_choice",
    stem: "Kim loại nào sau đây thuộc nhóm kim loại kiềm?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    options: [
      { label: "A", text: "Ca" },
      { label: "B", text: "Na" },
      { label: "C", text: "Al" },
      { label: "D", text: "Fe" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Na thuộc nhóm IA (kim loại kiềm). Ca thuộc IIA (kiềm thổ), Al thuộc IIIA, Fe thuộc VIIIB.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Số liên kết π (pi) trong phân tử CH₂=CH–COOCH₃ là",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.ESTE_LIPIT,
    isApplied: false,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "CH₂=CH (1 liên kết π) và –COO– (nhóm C=O chứa 1 liên kết π). Tổng: 2 liên kết π.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Amino acid nào sau đây có hai nhóm –COOH trong phân tử?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.AMINE_AMINO_ACID_PROTEIN,
    isApplied: false,
    options: [
      { label: "A", text: "Glycine (Gly)" },
      { label: "B", text: "Alanine (Ala)" },
      { label: "C", text: "Glutamic acid (Glu)" },
      { label: "D", text: "Lysine (Lys)" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Glutamic acid: HOOC–CH₂–CH₂–CH(NH₂)–COOH, có 2 nhóm –COOH. Lysine có 2 nhóm –NH₂.",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Fructose thuộc loại",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.CARBOHYDRATE,
    isApplied: false,
    options: [
      { label: "A", text: "monosaccharide." },
      { label: "B", text: "disaccharide." },
      { label: "C", text: "polysaccharide." },
      { label: "D", text: "amino acid." },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Fructose (C₆H₁₂O₆) là monosaccharide. Saccharose là disaccharide, tinh bột là polysaccharide.",
  },
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Monomer dùng để trùng hợp tạo polyethylene (PE) là",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.POLYMER,
    isApplied: false,
    options: [
      { label: "A", text: "CH₂=CHCl" },
      { label: "B", text: "CH₂=CH₂" },
      { label: "C", text: "CH₂=CH–CH₃" },
      { label: "D", text: "CH₃–CH₃" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "nCH₂=CH₂ → (–CH₂–CH₂–)ₙ. A tạo PVC, C tạo polypropylene, D ankan không trùng hợp.",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Ion Na⁺ có cấu hình electron là",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.CAU_TAO_NGUYEN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "1s² 2s² 2p⁶ 3s¹" },
      { label: "B", text: "1s² 2s² 2p⁶" },
      { label: "C", text: "1s² 2s² 2p⁵" },
      { label: "D", text: "1s² 2s² 2p⁶ 3s²" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Na (Z=11): 1s² 2s² 2p⁶ 3s¹. Mất 1e → Na⁺: 1s² 2s² 2p⁶ (10 electron, giống Ne).",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Trong pin điện hoá Zn–Cu, electrode đóng vai trò cực âm (anode) là",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.DIEN_HOA_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Cu" },
      { label: "B", text: "Zn" },
      { label: "C", text: "dung dịch ZnSO₄" },
      { label: "D", text: "dung dịch CuSO₄" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Zn có tính khử mạnh hơn Cu → Zn là cực âm (bị oxi hoá): Zn → Zn²⁺ + 2e.",
  },
  {
    id: "P1_Q8",
    questionNumber: 8,
    part: EExamPart.I,
    label: "Câu 8.",
    type: "multiple_choice",
    stem: "Kim loại nào sau đây không phản ứng với dung dịch HCl loãng?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    options: [
      { label: "A", text: "Fe" },
      { label: "B", text: "Zn" },
      { label: "C", text: "Cu" },
      { label: "D", text: "Mg" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Cu đứng sau H trong dãy hoạt động → không phản ứng HCl loãng. Fe, Zn, Mg đều phản ứng.",
  },
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Số đồng phân este có công thức phân tử C₃H₆O₂ là",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.ESTE_LIPIT,
    isApplied: false,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "C₃H₆O₂ (k = 1). Đồng phân este: HCOOC₂H₅ (ethyl formate) và CH₃COOCH₃ (methyl acetate). Tổng: 2.",
  },
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Cho phản ứng thuận nghịch: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Biểu thức hằng số cân bằng Kc là",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CAN_BANG_HOA_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Kc = [SO₃]² / ([SO₂]² · [O₂])" },
      { label: "B", text: "Kc = [SO₂]² · [O₂] / [SO₃]²" },
      { label: "C", text: "Kc = [SO₃] / ([SO₂] · [O₂])" },
      { label: "D", text: "Kc = 2[SO₃] / (2[SO₂] · [O₂])" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Kc = [sản phẩm]^hệ số / [chất phản ứng]^hệ số = [SO₃]² / ([SO₂]²·[O₂]).",
  },
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Trong phản ứng: Cl₂ + 2NaOH → NaCl + NaClO + H₂O, nguyên tố Cl",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.PHAN_UNG_OXI_HOA_KHU,
    isApplied: false,
    options: [
      { label: "A", text: "chỉ bị oxi hoá." },
      { label: "B", text: "chỉ bị khử." },
      { label: "C", text: "vừa bị oxi hoá, vừa bị khử." },
      { label: "D", text: "không thay đổi số oxi hoá." },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Cl₂ (0) → Cl⁻ (–1, khử) và Cl⁺¹ trong ClO⁻ (+1, oxi hoá). Phản ứng tự oxi hoá – khử.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Cho các kim loại: Mg, Fe, Cu, Zn. Số kim loại phản ứng được với dung dịch FeCl₃ là",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Cả 4 đều phản ứng. Mg, Zn, Fe khử Fe³⁺ → Fe²⁺. " +
      "Cu + 2Fe³⁺ → Cu²⁺ + 2Fe²⁺ (vì E°(Fe³⁺/Fe²⁺) > E°(Cu²⁺/Cu)).",
  },
  {
    id: "P1_Q13",
    questionNumber: 13,
    part: EExamPart.I,
    label: "Câu 13.",
    type: "multiple_choice",
    stem: "Tinh bột và cellulose có điểm chung là",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CARBOHYDRATE,
    isApplied: false,
    options: [
      { label: "A", text: "đều tan trong nước nóng." },
      { label: "B", text: "đều có phản ứng tráng bạc." },
      { label: "C", text: "đều thuộc loại polysaccharide." },
      { label: "D", text: "đều cho phản ứng màu với I₂." },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Cả hai đều là polysaccharide (C₆H₁₀O₅)ₙ. Chỉ tinh bột cho màu xanh với I₂. " +
      "Cả hai không phản ứng tráng bạc, cellulose không tan trong nước.",
  },
  {
    id: "P1_Q14",
    questionNumber: 14,
    part: EExamPart.I,
    label: "Câu 14.",
    type: "multiple_choice",
    stem: "Phân bón nào sau đây là phân kali?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.HOA_HOC_THUC_TIEN,
    isApplied: true,
    options: [
      { label: "A", text: "NH₄NO₃" },
      { label: "B", text: "Ca(H₂PO₄)₂" },
      { label: "C", text: "KCl" },
      { label: "D", text: "(NH₄)₂SO₄" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Phân kali cung cấp K⁺. KCl là phân kali. A, D là phân đạm. B là phân lân.",
  },
  {
    id: "P1_Q15",
    questionNumber: 15,
    part: EExamPart.I,
    label: "Câu 15.",
    type: "multiple_choice",
    stem: "Hợp chất hữu cơ X có phổ khối lượng (MS) cho peak ion phân tử M⁺ = 60. Phổ IR cho peak rộng ở 2500–3300 cm⁻¹ (O–H acid) và 1710 cm⁻¹ (C=O). X là",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.PHO_HOA_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "CH₃COOH" },
      { label: "B", text: "HCOOCH₃" },
      { label: "C", text: "C₃H₇OH" },
      { label: "D", text: "CH₃COCH₃" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "M = 60: cả A (CH₃COOH) và B (HCOOCH₃) đều có M = 60. " +
      "Nhưng peak O–H acid (2500–3300, dải rộng) chỉ có ở acid. B là este, C là alcohol (M=60), D có M=58.",
  },
  {
    id: "P1_Q16",
    questionNumber: 16,
    part: EExamPart.I,
    label: "Câu 16.",
    type: "multiple_choice",
    stem: "Thuỷ phân hoàn toàn tripeptide Gly–Ala–Val trong dung dịch HCl dư thu được bao nhiêu loại amino acid?",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.AMINE_AMINO_ACID_PROTEIN,
    isApplied: false,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Gly–Ala–Val thuỷ phân hoàn toàn → 3 amino acid: glycine (Gly), alanine (Ala), valine (Val).",
  },
  {
    id: "P1_Q17",
    questionNumber: 17,
    part: EExamPart.I,
    label: "Câu 17.",
    type: "multiple_choice",
    stem: "Nhúng thanh Fe vào dung dịch CuSO₄ dư. Sau một thời gian, khối lượng thanh Fe",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    options: [
      { label: "A", text: "tăng." },
      { label: "B", text: "giảm." },
      { label: "C", text: "không đổi." },
      { label: "D", text: "tăng rồi giảm." },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Fe + CuSO₄ → FeSO₄ + Cu↓. Mỗi mol Fe (56 g) tan ra, 1 mol Cu (64 g) bám vào. " +
      "Khối lượng thanh tăng 64 – 56 = 8 g/mol Fe phản ứng.",
  },
  {
    id: "P1_Q18",
    questionNumber: 18,
    part: EExamPart.I,
    label: "Câu 18.",
    type: "multiple_choice",
    stem: "Trong công nghiệp sản xuất xà phòng, thuỷ phân tristearin (C₃H₅(OOCC₁₇H₃₅)₃) bằng dung dịch NaOH thu được glycerol và",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.ESTE_LIPIT,
    isApplied: true,
    options: [
      { label: "A", text: "C₁₇H₃₅COONa" },
      { label: "B", text: "C₁₅H₃₁COONa" },
      { label: "C", text: "C₁₇H₃₃COONa" },
      { label: "D", text: "C₁₇H₃₅COOH" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa (sodium stearate – xà phòng) + C₃H₅(OH)₃. " +
      "D sai vì trong NaOH tạo muối chứ không tạo acid.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// PART II QUESTIONS (Q19–Q22)
// ─────────────────────────────────────────────────────────────────────────────

const partIIQuestions: readonly TrueFalseQuestion[] = [
  {
    id: "P2_Q19",
    questionNumber: 19,
    part: EExamPart.II,
    label: "Câu 1.",
    type: "true_false",
    stem: "Xét các phát biểu về ăn mòn kim loại:",
    context:
      "Ăn mòn hoá học: phản ứng trực tiếp với môi trường, không phát sinh dòng điện. " +
      "Ăn mòn điện hoá: hình thành pin điện, có dòng electron di chuyển.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.DIEN_HOA_HOC,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Ăn mòn hoá học là quá trình oxi hoá – khử không phát sinh dòng điện.",
        isTrue: true,
        explanation:
          "Đúng. Kim loại phản ứng trực tiếp với chất oxi hoá trong môi trường, không qua dung dịch điện li. ✓",
      },
      {
        label: "b",
        statement:
          "Ăn mòn điện hoá xảy ra khi hai electrode khác bản chất tiếp xúc nhau trong dung dịch chất điện li.",
        isTrue: true,
        explanation:
          "Đúng. Điều kiện ăn mòn điện hoá: 2 electrode khác nhau + tiếp xúc + dung dịch điện li. ✓",
      },
      {
        label: "c",
        statement:
          "Sắt tráng kẽm (tôn) bị ăn mòn trong không khí ẩm, sắt bị ăn mòn trước.",
        isTrue: false,
        explanation:
          "Sai. Zn có tính khử mạnh hơn Fe → Zn là cực âm, bị ăn mòn trước (bảo vệ Fe bằng phương pháp điện hoá).",
      },
      {
        label: "d",
        statement:
          "Gắn lá kẽm vào vỏ tàu biển bằng thép (phần chìm trong nước biển) là phương pháp bảo vệ điện hoá.",
        isTrue: true,
        explanation:
          "Đúng. Zn đóng vai trò cực âm (anode hi sinh), bị ăn mòn thay cho thép. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q20",
    questionNumber: 20,
    part: EExamPart.II,
    label: "Câu 2.",
    type: "true_false",
    stem: "Cho 18 g glucose (C₆H₁₂O₆, M = 180) tham gia các phản ứng. Xét các phát biểu:",
    context:
      "n(glucose) = 18/180 = 0,1 mol. Glucose có nhóm –CHO và nhiều nhóm –OH.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.CARBOHYDRATE,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Glucose thuộc loại monosaccharide, có công thức phân tử C₆H₁₂O₆.",
        isTrue: true,
        explanation: "Đúng theo định nghĩa. ✓",
      },
      {
        label: "b",
        statement:
          "Lên men 18 g glucose (hiệu suất 100%): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Thể tích CO₂ ở đkc (Vₘ = 24,79 L/mol) xấp xỉ 4,96 lít.",
        isTrue: true,
        explanation:
          "n(CO₂) = 2 × 0,1 = 0,2 mol. V = 0,2 × 24,79 = 4,958 ≈ 4,96 L. ✓",
      },
      {
        label: "c",
        statement:
          "Phản ứng tráng bạc: glucose + 2AgNO₃/NH₃ → 2Ag. Khối lượng Ag thu được là 21,6 g.",
        isTrue: true,
        explanation:
          "1 glucose → 2 Ag. n(Ag) = 2 × 0,1 = 0,2 mol. m(Ag) = 0,2 × 108 = 21,6 g. ✓",
      },
      {
        label: "d",
        statement: "Glucose không phản ứng với Cu(OH)₂ ở nhiệt độ thường.",
        isTrue: false,
        explanation:
          "Sai. Glucose có nhiều nhóm –OH kề nhau → hoà tan Cu(OH)₂ ở nhiệt độ thường tạo phức đồng–gluconat màu xanh lam.",
      },
    ] as const,
  },
  {
    id: "P2_Q21",
    questionNumber: 21,
    part: EExamPart.II,
    label: "Câu 3.",
    type: "true_false",
    stem: "Trong sản xuất acid sulfuric công nghiệp (phương pháp tiếp xúc), giai đoạn oxi hoá SO₂: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH < 0. Xét các phát biểu:",
    context:
      "Phản ứng toả nhiệt (ΔH < 0), số mol khí giảm từ 3 → 2, xúc tác V₂O₅.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.CAN_BANG_HOA_HOC,
    isApplied: true,
    items: [
      {
        label: "a",
        statement: "Tăng nồng độ SO₂ làm tốc độ phản ứng thuận tăng.",
        isTrue: true,
        explanation:
          "Tăng nồng độ chất phản ứng → tăng tốc độ phản ứng thuận (theo quy tắc tốc độ). ✓",
      },
      {
        label: "b",
        statement: "Tăng nhiệt độ làm cân bằng dịch chuyển theo chiều thuận.",
        isTrue: false,
        explanation:
          "Sai. ΔH < 0 (toả nhiệt) → tăng nhiệt độ, cân bằng dịch chuyển theo chiều nghịch (thu nhiệt) để chống lại sự thay đổi.",
      },
      {
        label: "c",
        statement:
          "Sử dụng xúc tác V₂O₅ làm tăng tốc độ đạt cân bằng nhưng không làm thay đổi hằng số cân bằng.",
        isTrue: true,
        explanation:
          "Xúc tác tăng tốc cả hai chiều như nhau → không ảnh hưởng vị trí cân bằng hay Kc. ✓",
      },
      {
        label: "d",
        statement: "Tăng áp suất làm cân bằng dịch chuyển theo chiều thuận.",
        isTrue: true,
        explanation:
          "3 mol khí → 2 mol khí. Tăng áp suất → cân bằng dịch chuyển về phía ít mol khí hơn (chiều thuận). ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q22",
    questionNumber: 22,
    part: EExamPart.II,
    label: "Câu 4.",
    type: "true_false",
    stem: "Cho amino acid X: H₂N–CH₂–COOH (glycine, M = 75). Xét các phát biểu:",
    context: "Glycine (Gly): H₂N–CH₂–COOH, M = 75, hợp chất lưỡng tính.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.AMINE_AMINO_ACID_PROTEIN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Glycine vừa phản ứng HCl, vừa phản ứng NaOH → có tính chất lưỡng tính.",
        isTrue: true,
        explanation: "–NH₂ phản ứng HCl, –COOH phản ứng NaOH → lưỡng tính. ✓",
      },
      {
        label: "b",
        statement:
          "X + HCl → ClH₃N–CH₂–COOH (muối hydrochloride). M(muối) = 111,5 g/mol.",
        isTrue: true,
        explanation: "M(muối) = M(Gly) + M(HCl) = 75 + 36,5 = 111,5. ✓",
      },
      {
        label: "c",
        statement: "X + NaOH → H₂N–CH₂–COONa + H₂O. M(muối sodium) = 97 g/mol.",
        isTrue: true,
        explanation:
          "M(GlyNa) = 75 – 1 + 23 = 97 (thay H của –COOH bằng Na). ✓",
      },
      {
        label: "d",
        statement:
          "Đốt cháy hoàn toàn 1 mol glycine thu được 2 mol CO₂ và 2 mol H₂O.",
        isTrue: false,
        explanation:
          "CTPT: C₂H₅NO₂. Cháy: C₂H₅NO₂ + 9/4 O₂ → 2CO₂ + 5/2 H₂O + 1/2 N₂. " +
          "1 mol Gly → 2 mol CO₂ nhưng 2,5 mol H₂O (không phải 2 mol). Sai.",
      },
    ] as const,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// PART III QUESTIONS (Q23–Q28)
// ─────────────────────────────────────────────────────────────────────────────

const partIIIQuestions: readonly ShortAnswerQuestion[] = [
  {
    id: "P3_Q23",
    questionNumber: 23,
    part: EExamPart.III,
    label: "Câu 1.",
    type: "short_answer",
    stem: "Cho 11,2 g Fe phản ứng hoàn toàn với dung dịch HNO₃ loãng dư (sản phẩm khử duy nhất là NO). Tính thể tích khí NO ở điều kiện chuẩn (Vₘ = 24,79 L/mol). (lít, làm tròn 2 chữ số thập phân)",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    acceptedAnswers: ["4,96", "4.96"],
    solutionSteps: [
      "n(Fe) = 11,2/56 = 0,2 mol.",
      "Fe + 4HNO₃(loãng, dư) → Fe(NO₃)₃ + NO↑ + 2H₂O.",
      "Bảo toàn electron: Fe → Fe³⁺ + 3e; N⁺⁵ + 3e → N⁺² (NO).",
      "3 × n(Fe) = 3 × n(NO) → n(NO) = n(Fe) = 0,2 mol.",
      "V(NO) = 0,2 × 24,79 = 4,958 ≈ 4,96 lít.",
    ],
    conclusion: "V(NO) ≈ 4,96 lít.",
  },
  {
    id: "P3_Q24",
    questionNumber: 24,
    part: EExamPart.III,
    label: "Câu 2.",
    type: "short_answer",
    stem: "Xà phòng hoá hoàn toàn 17,6 g CH₃COOC₂H₅ (ethyl acetate, M = 88) bằng dung dịch NaOH vừa đủ. Tính khối lượng muối CH₃COONa thu được. (gam)",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.ESTE_LIPIT,
    isApplied: false,
    acceptedAnswers: ["16,4", "16.4"],
    solutionSteps: [
      "n(CH₃COOC₂H₅) = 17,6/88 = 0,2 mol.",
      "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH (tỉ lệ 1:1).",
      "n(CH₃COONa) = 0,2 mol. M(CH₃COONa) = 82 g/mol.",
      "m(muối) = 0,2 × 82 = 16,4 g.",
    ],
    conclusion: "m(CH₃COONa) = 16,4 gam.",
  },
  {
    id: "P3_Q25",
    questionNumber: 25,
    part: EExamPart.III,
    label: "Câu 3.",
    type: "short_answer",
    stem: "Điện phân dung dịch AgNO₃ bằng điện cực trơ với cường độ dòng I = 2 A trong thời gian t = 965 giây (hiệu suất 100%). Tính khối lượng Ag thu được ở cathode. (gam)",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.DIEN_HOA_HOC,
    isApplied: false,
    acceptedAnswers: ["2,16", "2.16"],
    solutionSteps: [
      "n(e) = I·t/F = (2 × 965)/96500 = 0,02 mol.",
      "Cathode: Ag⁺ + 1e → Ag. n(Ag) = n(e) = 0,02 mol.",
      "m(Ag) = 0,02 × 108 = 2,16 g.",
    ],
    conclusion: "m(Ag) = 2,16 gam.",
  },
  {
    id: "P3_Q26",
    questionNumber: 26,
    part: EExamPart.III,
    label: "Câu 4.",
    type: "short_answer",
    stem: "Cho 10 g đá vôi (chứa 80% CaCO₃ về khối lượng, phần còn lại là tạp chất trơ) phản ứng hoàn toàn với dung dịch HCl dư. Tính thể tích khí CO₂ ở đkc (Vₘ = 24,79 L/mol). (lít, làm tròn 2 chữ số thập phân)",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.HOA_HOC_THUC_TIEN,
    isApplied: true,
    acceptedAnswers: ["1,98", "1.98"],
    solutionSteps: [
      "m(CaCO₃) = 10 × 80% = 8 g. n(CaCO₃) = 8/100 = 0,08 mol.",
      "CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O.",
      "n(CO₂) = n(CaCO₃) = 0,08 mol.",
      "V(CO₂) = 0,08 × 24,79 = 1,9832 ≈ 1,98 lít.",
    ],
    conclusion: "V(CO₂) ≈ 1,98 lít.",
  },
  {
    id: "P3_Q27",
    questionNumber: 27,
    part: EExamPart.III,
    label: "Câu 5.",
    type: "short_answer",
    stem: "Thuỷ phân hoàn toàn m gam pentapeptide Gly–Gly–Gly–Gly–Gly (M = 303) bằng dung dịch NaOH dư, thu được 48,5 g muối H₂N–CH₂–COONa (M = 97). Tính m. (gam)",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.AMINE_AMINO_ACID_PROTEIN,
    isApplied: false,
    acceptedAnswers: ["30,3", "30.3"],
    solutionSteps: [
      "Gly₅ + 5NaOH → 5 H₂N–CH₂–COONa + 4H₂O.",
      "n(muối GlyNa) = 48,5/97 = 0,5 mol.",
      "n(Gly₅) = 0,5/5 = 0,1 mol.",
      "m = 0,1 × 303 = 30,3 g.",
      "Kiểm tra M(Gly₅) = 5 × 75 – 4 × 18 = 375 – 72 = 303. ✓",
    ],
    conclusion: "m = 30,3 gam.",
  },
  {
    id: "P3_Q28",
    questionNumber: 28,
    part: EExamPart.III,
    label: "Câu 6.",
    type: "short_answer",
    stem: "Cho hỗn hợp gồm 0,15 mol Mg và 0,1 mol Fe vào dung dịch chứa 0,2 mol CuSO₄. Sau phản ứng hoàn toàn, lọc thu được m gam chất rắn. Tính m. (gam)",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.KIM_LOAI,
    isApplied: false,
    acceptedAnswers: ["15,6", "15.6"],
    solutionSteps: [
      "Mg khử mạnh hơn Fe → Mg phản ứng trước.",
      "Mg + CuSO₄ → MgSO₄ + Cu. n(Mg) = 0,15 → tiêu thụ 0,15 mol CuSO₄, tạo 0,15 mol Cu.",
      "CuSO₄ còn: 0,2 – 0,15 = 0,05 mol.",
      "Fe + CuSO₄ → FeSO₄ + Cu. n(CuSO₄) = 0,05 < n(Fe) = 0,1 → Fe dư. Fe phản ứng: 0,05 mol, Cu tạo thêm: 0,05 mol.",
      "Chất rắn: Cu (0,15 + 0,05 = 0,2 mol) + Fe dư (0,1 – 0,05 = 0,05 mol).",
      "m = 0,2 × 64 + 0,05 × 56 = 12,8 + 2,8 = 15,6 g.",
    ],
    conclusion: "m = 15,6 gam.",
  },
] as const;

export const CHEMISTRY_EXAM_2: Exam = {
  metadata: EXAM_METADATA,
  questions: [...partIQuestions, ...partIIQuestions, ...partIIIQuestions],
} as const;
