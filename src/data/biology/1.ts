import { EDifficultyLevel, EExamPart, EKnowledgeDomain } from "@/enums";
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
  title: "Đề thi thử môn sinh học - Đề số 1",
  type: "biology",
  subject: "Sinh học",
  examCode: "301",
  year: 2026,
  curriculum: "GDPT 2018",
  durationMinutes: 50,
  parts: {
    [EExamPart.I]: {
      label: "Trắc nghiệm nhiều lựa chọn",
      count: 18,
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
    stem: "Đặc điểm nào sau đây CHỈ có ở tế bào nhân sơ (prokaryote) mà KHÔNG có ở tế bào nhân thực (eukaryote)?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.TE_BAO_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Có ribosome" },
      { label: "B", text: "Có màng tế bào chất" },
      { label: "C", text: "Vùng nhân không có màng bao bọc" },
      { label: "D", text: "Có phân tử ADN mang thông tin di truyền" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Tế bào nhân sơ (vi khuẩn) không có màng nhân – vùng chứa ADN gọi là nucleoid, " +
      "không được bao bọc bởi màng. Các đặc điểm A, B, D có ở cả hai loại tế bào.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Trong quá trình hô hấp tế bào hiếu khí, giai đoạn nào tạo ra nhiều ATP nhất?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.TE_BAO_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Đường phân (glycolysis)" },
      { label: "B", text: "Chu trình Krebs" },
      {
        label: "C",
        text: "Chuỗi chuyền electron hô hấp (phosphoryl hóa oxy hóa)",
      },
      { label: "D", text: "Chuyển hóa pyruvate thành acetyl-CoA" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Chuỗi chuyền electron hô hấp (ở màng trong ti thể) tạo ra khoảng 32–34 ATP " +
      "qua phosphoryl hóa oxy hóa – chiếm phần lớn ATP. " +
      "Đường phân tạo 2 ATP thực lợi; chu trình Krebs tạo 2 ATP trực tiếp.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Trong quá trình nhân đôi ADN, enzyme nào có chức năng tháo xoắn và tách hai mạch của phân tử ADN?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "ADN polymerase" },
      { label: "B", text: "Ligase" },
      { label: "C", text: "Helicase" },
      { label: "D", text: "Primase" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Helicase (enzyme tháo xoắn) phá vỡ liên kết hydro giữa hai mạch ADN. " +
      "ADN polymerase tổng hợp mạch mới; Ligase nối đoạn Okazaki; Primase tổng hợp đoạn mồi RNA.",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Một phân tử mARN có trình tự: 5'-AUG-UUU-GGG-UAA-3'. Số axit amin trong chuỗi polypeptide được tổng hợp từ mARN này là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "3" },
      { label: "C", text: "2" },
      { label: "D", text: "1" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "AUG (Met – mã khởi đầu), UUU (Phe), GGG (Gly), UAA (mã kết thúc – không mã hóa). " +
      "Chuỗi polypeptide: Met–Phe–Gly = 3 axit amin.",
  },
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Theo Mendel, khi lai hai cơ thể thuần chủng khác nhau về một cặp tính trạng tương phản (AA × aa), tỉ lệ kiểu hình ở thế hệ F2 là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "1 trội : 1 lặn" },
      { label: "B", text: "3 trội : 1 lặn" },
      { label: "C", text: "1 : 2 : 1" },
      { label: "D", text: "Toàn bộ kiểu hình trội" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "AA × aa → F1: Aa (100% trội). F1 × F1: Aa × Aa → F2: 1AA:2Aa:1aa. " +
      "Tỉ lệ kiểu hình F2 = 3 trội (A_) : 1 lặn (aa).",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Trong phép lai phân tích (test cross), cơ thể mang kiểu hình trội cần được lai với:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "Cơ thể đồng hợp tử trội (AA)" },
      { label: "B", text: "Cơ thể dị hợp tử (Aa)" },
      { label: "C", text: "Cơ thể đồng hợp tử lặn (aa)" },
      { label: "D", text: "Cơ thể có cùng kiểu gen" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Lai phân tích dùng xác định kiểu gen của cá thể mang tính trạng trội. " +
      "Phải lai với cơ thể đồng hợp tử lặn (aa) – chỉ cho giao tử a – " +
      "để kết quả đời con phản ánh trực tiếp kiểu gen cần xác định.",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Hiện tượng liên kết gen hoàn toàn (không có hoán vị gen) xảy ra khi:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "Các gen nằm trên các cặp NST tương đồng khác nhau" },
      {
        label: "B",
        text: "Không xảy ra trao đổi chéo giữa các gen cùng nằm trên một NST",
      },
      { label: "C", text: "Tần số hoán vị gen giữa hai gen bằng 50%" },
      { label: "D", text: "Hiện tượng chỉ xảy ra ở giới cái" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Liên kết hoàn toàn xảy ra khi hai gen cùng NST và không có trao đổi chéo trong giảm phân, " +
      "chỉ tạo ra hai loại giao tử bố mẹ (tần số hoán vị = 0%).",
  },
  {
    id: "P1_Q8",
    questionNumber: 8,
    part: EExamPart.I,
    label: "Câu 8.",
    type: "multiple_choice",
    stem: "Ở một loài thực vật, gen A (hoa đỏ) trội hoàn toàn so với gen a (hoa trắng); gen B (quả tròn) trội hoàn toàn so với gen b (quả dài). Hai cặp gen phân ly độc lập. Phép lai AaBb × aabb cho tỉ lệ kiểu hình ở đời con là:",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "9 : 3 : 3 : 1" },
      { label: "B", text: "3 : 3 : 1 : 1" },
      { label: "C", text: "1 : 1 : 1 : 1" },
      { label: "D", text: "3 : 1" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "AaBb cho 4 loại giao tử bằng nhau (AB, Ab, aB, ab); aabb chỉ cho giao tử ab. " +
      "F1: 1 AaBb (đỏ tròn) : 1 Aabb (đỏ dài) : 1 aaBb (trắng tròn) : 1 aabb (trắng dài) = 1:1:1:1.",
  },
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Đột biến gen là dạng biến dị:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.BIEN_DI,
    isApplied: false,
    options: [
      { label: "A", text: "Thay đổi cấu trúc nhiễm sắc thể" },
      { label: "B", text: "Thay đổi số lượng nhiễm sắc thể trong tế bào" },
      {
        label: "C",
        text: "Biến đổi cấu trúc gen liên quan đến một hoặc một số cặp nucleotide",
      },
      {
        label: "D",
        text: "Thay đổi kiểu hình do tác động môi trường, không liên quan đến kiểu gen",
      },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Đột biến gen (đột biến điểm) là biến đổi trong cấu trúc gen tại một hoặc vài nucleotide " +
      "(thêm, mất, thay thế cặp nucleotide). " +
      "Thay đổi số lượng hay cấu trúc NST là đột biến NST; thay đổi do môi trường là thường biến.",
  },
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Hội chứng Down ở người có bộ nhiễm sắc thể đặc trưng là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.BIEN_DI,
    isApplied: true,
    options: [
      { label: "A", text: "Mất đoạn nhiễm sắc thể số 5" },
      {
        label: "B",
        text: "Thể ba (2n + 1) ở cặp NST số 21, tổng bộ NST là 2n = 47",
      },
      { label: "C", text: "Đảo đoạn trên nhiễm sắc thể số 9" },
      { label: "D", text: "Đột biến gen lặn trên nhiễm sắc thể thường" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Hội chứng Down (trisomy 21): người mắc có 3 NST số 21, tổng 2n = 47. " +
      "Nguyên nhân: không phân ly cặp NST 21 trong giảm phân. " +
      "Mất đoạn NST số 5 gây hội chứng Tiếng mèo kêu (Cri-du-chat).",
  },
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Điều kiện nào sau đây là cần thiết để quần thể đạt trạng thái cân bằng Hardy–Weinberg?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.DI_TRUYEN_QUAN_THE,
    isApplied: false,
    options: [
      { label: "A", text: "Quần thể có kích thước nhỏ" },
      { label: "B", text: "Có sự di – nhập gen thường xuyên" },
      { label: "C", text: "Giao phối ngẫu nhiên, không có chọn lọc tự nhiên" },
      { label: "D", text: "Tần số đột biến gen cao" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Định luật Hardy–Weinberg đòi hỏi: quần thể lớn vô hạn, giao phối ngẫu nhiên, " +
      "không đột biến, không di–nhập gen, không chọn lọc tự nhiên. " +
      "Đáp án C nêu hai trong số các điều kiện quan trọng nhất; A, B, D vi phạm điều kiện.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Phương pháp nào có thể tạo ra cơ thể lai mang bộ nhiễm sắc thể đầy đủ của cả hai loài bố và mẹ?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.UNG_DUNG_DI_TRUYEN,
    isApplied: true,
    options: [
      { label: "A", text: "Gây đột biến bằng tia phóng xạ" },
      { label: "B", text: "Dung hợp tế bào trần (lai tế bào soma) khác loài" },
      { label: "C", text: "Chọn lọc cá thể qua nhiều thế hệ" },
      { label: "D", text: "Lai gần (giao phối cận huyết)" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Dung hợp tế bào trần (protoplast fusion) hợp nhất tế bào soma từ hai loài khác nhau, " +
      "tạo tế bào lai mang bộ gen đầy đủ của cả hai loài (ví dụ: cà chua × khoai tây → 'pomato').",
  },
  {
    id: "P1_Q13",
    questionNumber: 13,
    part: EExamPart.I,
    label: "Câu 13.",
    type: "multiple_choice",
    stem: "Theo thuyết tiến hóa tổng hợp hiện đại, nhân tố nào cung cấp nguyên liệu SƠ CẤP cho quá trình tiến hóa?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.TIEN_HOA,
    isApplied: false,
    options: [
      { label: "A", text: "Chọn lọc tự nhiên" },
      { label: "B", text: "Di – nhập gen" },
      { label: "C", text: "Đột biến" },
      { label: "D", text: "Giao phối không ngẫu nhiên" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Đột biến tạo ra các alen mới, là nguyên liệu sơ cấp của tiến hóa. " +
      "Giao phối tạo nguyên liệu thứ cấp (biến dị tổ hợp). " +
      "Chọn lọc tự nhiên định hướng tiến hóa, không tạo nguyên liệu mới.",
  },
  {
    id: "P1_Q14",
    questionNumber: 14,
    part: EExamPart.I,
    label: "Câu 14.",
    type: "multiple_choice",
    stem: "Vai trò của cách li sinh sản trong quá trình hình thành loài mới là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.TIEN_HOA,
    isApplied: false,
    options: [
      { label: "A", text: "Tạo ra các đột biến gen có lợi cho quần thể" },
      {
        label: "B",
        text: "Ngăn chặn trao đổi vốn gen giữa các quần thể, duy trì sự khác biệt di truyền",
      },
      { label: "C", text: "Tăng trực tiếp tốc độ chọn lọc tự nhiên" },
      {
        label: "D",
        text: "Làm tăng đột ngột tần số alen có lợi trong quần thể",
      },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Cách li sinh sản là điều kiện tất yếu để hình thành loài: ngăn trao đổi gen giữa các quần thể, " +
      "cho phép chúng tích lũy đột biến và biến đổi di truyền theo hướng khác nhau → loài mới.",
  },
  {
    id: "P1_Q15",
    questionNumber: 15,
    part: EExamPart.I,
    label: "Câu 15.",
    type: "multiple_choice",
    stem: "Cơ chế trực tiếp điều tiết đóng mở khí khổng của lá cây là do:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_LY_THUC_VAT,
    isApplied: false,
    options: [
      { label: "A", text: "Sự thay đổi nhiệt độ môi trường xung quanh" },
      {
        label: "B",
        text: "Sự thay đổi hàm lượng nước (áp suất thẩm thấu) của tế bào hạt đậu",
      },
      { label: "C", text: "Sự thay đổi nồng độ O₂ trong không khí" },
      { label: "D", text: "Cường độ thoát hơi nước qua bề mặt lá" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Tế bào hạt đậu (guard cells) trương nước → khí khổng mở; mất nước → khí khổng đóng. " +
      "Cơ chế: ánh sáng → K⁺ tích lũy trong tế bào hạt đậu → nước thẩm thấu vào → tế bào trương → mở khí khổng.",
  },
  {
    id: "P1_Q16",
    questionNumber: 16,
    part: EExamPart.I,
    label: "Câu 16.",
    type: "multiple_choice",
    stem: "Ở động vật có vú, máu giàu O₂ từ phổi được vận chuyển đến các cơ quan theo con đường nào?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_LY_DONG_VAT,
    isApplied: false,
    options: [
      {
        label: "A",
        text: "Phổi → tĩnh mạch phổi → tâm nhĩ trái → tâm thất trái → động mạch chủ → cơ quan",
      },
      {
        label: "B",
        text: "Phổi → động mạch phổi → tâm nhĩ trái → tâm thất phải → động mạch chủ",
      },
      {
        label: "C",
        text: "Tâm thất phải → phổi → tâm thất trái → các cơ quan",
      },
      { label: "D", text: "Tâm nhĩ phải → tâm thất trái → phổi → các cơ quan" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Máu giàu O₂ từ phổi → tĩnh mạch phổi → tâm nhĩ trái → tâm thất trái → " +
      "động mạch chủ → cung cấp cho toàn thân. " +
      "Máu nghèo O₂ đi theo chiều ngược lại qua tâm nhĩ/thất phải và động mạch phổi.",
  },
  {
    id: "P1_Q17",
    questionNumber: 17,
    part: EExamPart.I,
    label: "Câu 17.",
    type: "multiple_choice",
    stem: "Cây tầm gửi (Loranthus) sống bám trên thân cây gỗ, đâm rễ hút vào mạch gỗ của cây chủ lấy nước và muối khoáng. Quan hệ giữa cây tầm gửi và cây chủ là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Hội sinh (commensalism)" },
      { label: "B", text: "Ký sinh (parasitism)" },
      { label: "C", text: "Hợp tác (protocooperation)" },
      { label: "D", text: "Cạnh tranh (competition)" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Ký sinh: cây tầm gửi có lợi (lấy được nước, khoáng), cây chủ bị hại (mất tài nguyên). " +
      "Hội sinh: một bên lợi, bên kia không lợi không hại. " +
      "Cây tầm gửi tự quang hợp được nhưng vẫn lấy nước/khoáng từ cây chủ → ký sinh một phần.",
  },
  {
    id: "P1_Q18",
    questionNumber: 18,
    part: EExamPart.I,
    label: "Câu 18.",
    type: "multiple_choice",
    stem: "Trong quy trình công nghệ gen, plasmid tái tổ hợp đóng vai trò là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_HOC_THUC_TE,
    isApplied: true,
    options: [
      { label: "A", text: "Enzyme cắt giới hạn (restriction endonuclease)" },
      {
        label: "B",
        text: "Vector (thể truyền) mang gen cần chuyển vào tế bào chủ",
      },
      { label: "C", text: "Tế bào chủ để nhân bản gen đích" },
      { label: "D", text: "Nguồn cung cấp nucleotide để tổng hợp gen" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Quy trình công nghệ gen: (1) cắt ADN cho và plasmid bằng enzyme giới hạn cùng loại; " +
      "(2) nối đoạn gen cần chuyển vào plasmid tạo ADN tái tổ hợp; " +
      "(3) đưa plasmid tái tổ hợp (vector) vào tế bào chủ (vi khuẩn, nấm men) để nhân bản và biểu hiện gen.",
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
    label: "Câu 19.",
    type: "true_false",
    stem: "Cho biết một đoạn ADN có mạch gốc (3'→5') với trình tự: 3'-TAC-GAA-GGG-ATT-5'. Xét các mệnh đề về quá trình phiên mã và dịch mã từ đoạn ADN này:",
    context:
      "Mạch gốc ADN: 3'-TAC-GAA-GGG-ATT-5'. " +
      "Nguyên tắc bổ sung phiên mã: A(ADN)–U(ARN), T(ADN)–A(ARN), G(ADN)–C(ARN), C(ADN)–G(ARN). " +
      "Bảng mã (tham khảo): AUG = Met (mã mở đầu); CUU = Leu; CCC = Pro; UAA = mã kết thúc.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Phân tử mARN phiên mã từ mạch gốc này có trình tự: 5'-AUG-CUU-CCC-UAA-3'.",
        isTrue: true,
        explanation:
          "Áp dụng NTBS: 3'-T-A-C-G-A-A-G-G-G-A-T-T-5' → mARN 5'-A-U-G-C-U-U-C-C-C-U-A-A-3'. ✓",
      },
      {
        label: "b",
        statement:
          "Số axit amin trong chuỗi polypeptide tổng hợp từ mARN trên là 2.",
        isTrue: false,
        explanation:
          "mARN có 4 codon: AUG (Met), CUU (Leu), CCC (Pro), UAA (stop – không mã hóa aa). " +
          "Polypeptide gồm 3 axit amin: Met–Leu–Pro. '2' là sai.",
      },
      {
        label: "c",
        statement: "Codon kết thúc trên mARN là UAA.",
        isTrue: true,
        explanation:
          "UAA là một trong ba mã kết thúc (UAA, UAG, UGA). " +
          "Trong mARN này, UAA ở vị trí codon thứ 4 → đúng là mã kết thúc. ✓",
      },
      {
        label: "d",
        statement:
          "Số liên kết peptide trong chuỗi polypeptide hoàn chỉnh là 2.",
        isTrue: true,
        explanation:
          "Chuỗi 3 axit amin (Met–Leu–Pro) liên kết với nhau bởi 3 – 1 = 2 liên kết peptide. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q20",
    questionNumber: 20,
    part: EExamPart.II,
    label: "Câu 20.",
    type: "true_false",
    stem: "Ở một loài thực vật, gen A (hoa đỏ) trội hoàn toàn so với gen a (hoa trắng); gen B (quả tròn) trội hoàn toàn so với gen b (quả dài). Hai cặp gen phân ly độc lập. Phép lai P: AaBb × AaBb. Xét các mệnh đề về kết quả đời F1:",
    context:
      "Lai dị hợp hai cặp tính trạng phân ly độc lập: AaBb × AaBb. " +
      "Kết quả lý thuyết theo quy luật Mendel.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Tỉ lệ cây hoa đỏ, quả tròn (A_B_) trong F1 là 9/16.",
        isTrue: true,
        explanation: "P(A_) = 3/4; P(B_) = 3/4. P(A_B_) = 3/4 × 3/4 = 9/16. ✓",
      },
      {
        label: "b",
        statement: "Số kiểu gen xuất hiện trong F1 là 9.",
        isTrue: true,
        explanation:
          "Aa × Aa → 3 kiểu gen (AA, Aa, aa). Bb × Bb → 3 kiểu gen. " +
          "Tổ hợp độc lập: 3 × 3 = 9 kiểu gen. ✓",
      },
      {
        label: "c",
        statement: "Tỉ lệ cây hoa trắng, quả dài (aabb) trong F1 là 1/16.",
        isTrue: true,
        explanation: "P(aa) = 1/4; P(bb) = 1/4. P(aabb) = 1/4 × 1/4 = 1/16. ✓",
      },
      {
        label: "d",
        statement:
          "Tỉ lệ cây thuần chủng (đồng hợp tử cả hai cặp gen: AABB, AAbb, aaBB, aabb) là 1/8.",
        isTrue: false,
        explanation:
          "P(thuần chủng) = P(AABB) + P(AAbb) + P(aaBB) + P(aabb) " +
          "= 4 × (1/4 × 1/4) = 4/16 = 1/4. " +
          "Đáp án '1/8' là sai; đúng phải là 1/4.",
      },
    ] as const,
  },
  {
    id: "P2_Q21",
    questionNumber: 21,
    part: EExamPart.II,
    label: "Câu 21.",
    type: "true_false",
    stem: "Tăng cường hiệu suất quang hợp là mục tiêu quan trọng để nâng cao năng suất cây trồng trong sản xuất nông nghiệp. Xét các mệnh đề về quá trình quang hợp ở thực vật:",
    context:
      "Quang hợp gồm hai pha: pha sáng (xảy ra ở màng thylakoid của lục lạp) " +
      "và pha tối/chu trình Calvin (xảy ra ở chất nền stroma của lục lạp).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_LY_THUC_VAT,
    isApplied: true,
    items: [
      {
        label: "a",
        statement:
          "Pha sáng của quang hợp diễn ra ở màng thylakoid trong lục lạp.",
        isTrue: true,
        explanation:
          "Pha sáng xảy ra trên màng thylakoid, nơi tập trung phức hệ quang hệ I và II (PSI, PSII) " +
          "và ATP synthase. ✓",
      },
      {
        label: "b",
        statement:
          "Sản phẩm của pha sáng gồm ATP, NADPH và O₂ (O₂ được thải ra môi trường).",
        isTrue: true,
        explanation:
          "Pha sáng: H₂O → [quang phân li] → O₂ (thải ra) + H⁺ + e⁻. " +
          "Năng lượng ánh sáng tổng hợp ATP và NADPH để cung cấp cho chu trình Calvin. ✓",
      },
      {
        label: "c",
        statement:
          "Trong chu trình Calvin, CO₂ được cố định nhờ enzyme RuBisCO " +
          "kết hợp với RuBP tạo hợp chất 3 carbon (3-PGA).",
        isTrue: true,
        explanation:
          "RuBisCO xúc tác: CO₂ + RuBP (5C) → 2 phân tử 3-PGA (3C). " +
          "Đây là bước cố định carbon đầu tiên trong chu trình Calvin. ✓",
      },
      {
        label: "d",
        statement:
          "Cây C4 (ngô, mía) cũng cố định CO₂ lần đầu bởi enzyme RuBisCO, giống cây C3.",
        isTrue: false,
        explanation:
          "Ở cây C4, bước cố định CO₂ lần đầu xảy ra ở tế bào mô giậu nhờ enzyme PEP carboxylase " +
          "(ái lực với CO₂ cao hơn RuBisCO nhiều). RuBisCO chỉ tham gia chu trình Calvin " +
          "trong tế bào bao bó mạch của cây C4.",
      },
    ] as const,
  },
  {
    id: "P2_Q22",
    questionNumber: 22,
    part: EExamPart.II,
    label: "Câu 22.",
    type: "true_false",
    stem: "Bệnh tiểu đường (đái tháo đường) là một trong những bệnh chuyển hóa phổ biến nhất hiện nay, liên quan mật thiết đến cơ chế điều hòa nồng độ glucose máu. Xét các mệnh đề về điều hòa đường huyết ở người:",
    context:
      "Tuyến tụy có tế bào β (tiết insulin) và tế bào α (tiết glucagon). " +
      "Hai hormone hoạt động theo cơ chế đối kháng để điều hòa nồng độ glucose máu.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_LY_DONG_VAT,
    isApplied: true,
    items: [
      {
        label: "a",
        statement:
          "Insulin được tiết bởi tế bào β của tuyến tụy khi nồng độ glucose máu tăng cao.",
        isTrue: true,
        explanation:
          "Sau bữa ăn, glucose máu tăng → kích thích tế bào β tụy tiết insulin. " +
          "Insulin thúc đẩy tế bào hấp thu glucose → hạ đường huyết. ✓",
      },
      {
        label: "b",
        statement:
          "Insulin làm giảm nồng độ glucose máu bằng cách tăng vận chuyển glucose vào tế bào " +
          "và thúc đẩy tổng hợp glycogen ở gan và cơ.",
        isTrue: true,
        explanation:
          "Insulin: (1) tăng cường GLUT4 → vận chuyển glucose vào tế bào cơ, mỡ; " +
          "(2) kích hoạt glycogen synthase → tổng hợp glycogen. ✓",
      },
      {
        label: "c",
        statement:
          "Glucagon được tiết bởi tế bào α của tuyến tụy khi glucose máu giảm, " +
          "kích thích phân giải glycogen ở gan để tăng glucose máu.",
        isTrue: true,
        explanation:
          "Khi đói, glucose máu giảm → tế bào α tiết glucagon → " +
          "kích hoạt glycogen phosphorylase ở gan → phân giải glycogen → glucose vào máu. ✓",
      },
      {
        label: "d",
        statement:
          "Bệnh tiểu đường type 2 (phổ biến nhất) chủ yếu do tuyến tụy mất khả năng tiết insulin.",
        isTrue: false,
        explanation:
          "Tiểu đường type 2 chủ yếu do đề kháng insulin (tế bào đích giảm đáp ứng với insulin), " +
          "không phải do thiếu insulin. " +
          "Tiểu đường type 1 (tự miễn) mới là do tuyến tụy bị phá hủy không tiết được insulin.",
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
    label: "Câu 23.",
    type: "short_answer",
    stem: "Một phân tử ADN mạch kép có tổng số 3000 nucleotide và tỉ lệ Adenine chiếm 20% tổng số nucleotide. Tính số nucleotide loại Guanine (G) trong phân tử ADN đó.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TE_BAO_HOC,
    isApplied: false,
    acceptedAnswers: ["900"],
    solutionSteps: [
      "Tổng số nucleotide = 3000. A = 20% → A = 3000 × 0,20 = 600.",
      "ADN mạch kép: A = T = 600 (nguyên tắc bổ sung A–T).",
      "Tổng (A + T) = 600 + 600 = 1200.",
      "Tổng (G + C) = 3000 – 1200 = 1800.",
      "G = C = 1800 / 2 = 900.",
    ],
    conclusion: "Số nucleotide loại G = 900.",
  },
  {
    id: "P3_Q24",
    questionNumber: 24,
    part: EExamPart.III,
    label: "Câu 24.",
    type: "short_answer",
    stem: "Một phân tử mARN có 900 nucleotide. Biết rằng mã kết thúc không mã hóa axit amin, mã mở đầu AUG mã hóa axit amin Met. Chuỗi polypeptide được tổng hợp từ mARN này có bao nhiêu axit amin?",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    acceptedAnswers: ["299"],
    solutionSteps: [
      "Số codon = tổng nucleotide / 3 = 900 / 3 = 300 codon.",
      "Trong 300 codon: 1 codon là mã kết thúc (không mã hóa axit amin).",
      "Mã mở đầu AUG mã hóa Met → được tính là 1 axit amin.",
      "Số axit amin = 300 – 1 = 299.",
    ],
    conclusion: "Chuỗi polypeptide gồm 299 axit amin.",
  },
  {
    id: "P3_Q25",
    questionNumber: 25,
    part: EExamPart.III,
    label: "Câu 25.",
    type: "short_answer",
    stem: "Ở một loài động vật, gen A quy định thân xám trội hoàn toàn so với gen a quy định thân đen. Thực hiện phép lai: Aa × aa. Tỉ lệ phần trăm (%) cá thể thân xám trong đời con là bao nhiêu?",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    acceptedAnswers: ["50%", "50", "1/2"],
    solutionSteps: [
      "Phép lai phân tích: Aa × aa.",
      "Giao tử của Aa: A (1/2) và a (1/2). Giao tử của aa: chỉ a.",
      "Đời con: 1/2 Aa (thân xám) : 1/2 aa (thân đen).",
      "Tỉ lệ cá thể thân xám = 1/2 = 50%.",
    ],
    conclusion: "Tỉ lệ cá thể thân xám = 50%.",
  },
  {
    id: "P3_Q26",
    questionNumber: 26,
    part: EExamPart.III,
    label: "Câu 26.",
    type: "short_answer",
    stem: "Ở ruồi giấm, gen A (cánh dài) liên kết với gen B (thân xám) trên một NST; gen a (cánh cụt) liên kết với gen b (thân đen) trên NST tương đồng (ký hiệu AB/ab). Ruồi cái dị hợp tử AB/ab giao phối với ruồi đực cánh cụt thân đen (ab/ab). Biết tần số hoán vị gen ở ruồi cái là 20%. Số lớp kiểu hình xuất hiện ở đời con F1 là bao nhiêu?",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    acceptedAnswers: ["4"],
    solutionSteps: [
      "Ruồi đực ab/ab chỉ cho 1 loại giao tử: ab.",
      "Ruồi cái AB/ab (f = 20%) cho 4 loại giao tử:",
      "  - AB: (1 – 0,2)/2 = 0,4 (40%) — giao tử bố mẹ",
      "  - ab: (1 – 0,2)/2 = 0,4 (40%) — giao tử bố mẹ",
      "  - Ab: 0,2/2 = 0,1 (10%) — giao tử hoán vị",
      "  - aB: 0,2/2 = 0,1 (10%) — giao tử hoán vị",
      "F1 gồm 4 kiểu gen và 4 kiểu hình:",
      "  - AB/ab (40%): cánh dài, thân xám",
      "  - ab/ab (40%): cánh cụt, thân đen",
      "  - Ab/ab (10%): cánh dài, thân đen",
      "  - aB/ab (10%): cánh cụt, thân xám",
    ],
    conclusion: "Có 4 lớp kiểu hình xuất hiện ở đời con F1.",
  },
  {
    id: "P3_Q27",
    questionNumber: 27,
    part: EExamPart.III,
    label: "Câu 27.",
    type: "short_answer",
    stem: "Một quần thể người đang ở trạng thái cân bằng Hardy–Weinberg đối với gen quy định nhóm máu MN. Biết tần số alen M = 0,6 và tần số alen N = 0,4. Tần số kiểu gen dị hợp MN trong quần thể là bao nhiêu?",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.DI_TRUYEN_QUAN_THE,
    isApplied: true,
    acceptedAnswers: ["0,48", "0.48", "48%"],
    solutionSteps: [
      "Đặt p = tần số alen M = 0,6; q = tần số alen N = 0,4.",
      "Kiểm tra: p + q = 0,6 + 0,4 = 1,0. ✓",
      "Theo Hardy–Weinberg: tần số KG = p²(MM) + 2pq(MN) + q²(NN) = 1.",
      "Tần số kiểu gen MN = 2pq = 2 × 0,6 × 0,4 = 0,48.",
    ],
    conclusion: "Tần số kiểu gen MN = 0,48 (chiếm 48% cá thể quần thể).",
  },
  {
    id: "P3_Q28",
    questionNumber: 28,
    part: EExamPart.III,
    label: "Câu 28.",
    type: "short_answer",
    stem: "Một quần thể vi khuẩn E. coli có thời gian thế hệ là 20 phút (cứ 20 phút số tế bào tăng gấp đôi). Bắt đầu từ 100 tế bào, sau 1 giờ 40 phút, quần thể có bao nhiêu tế bào? (Giả sử điều kiện môi trường lý tưởng, không có tế bào chết.)",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: true,
    acceptedAnswers: ["3200"],
    solutionSteps: [
      "Thời gian = 1 giờ 40 phút = 100 phút.",
      "Số thế hệ n = thời gian / thời gian thế hệ = 100 / 20 = 5 thế hệ.",
      "Công thức tăng trưởng theo lũy thừa: N = N₀ × 2ⁿ.",
      "N = 100 × 2⁵ = 100 × 32 = 3200 tế bào.",
    ],
    conclusion: "Sau 1 giờ 40 phút, quần thể có 3200 tế bào vi khuẩn.",
  },
] as const;

export const BIOLOGY_EXAM_1: Exam = {
  metadata: EXAM_METADATA,
  questions: [...partIQuestions, ...partIIQuestions, ...partIIIQuestions],
} as const;
