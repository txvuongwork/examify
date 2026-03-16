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
  title: "Đề thi thử môn Sinh học - Đề số 2",
  subject: EExamSubject.BIOLOGY,
  examCode: "302",
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

const partIQuestions: readonly MultipleChoiceQuestion[] = [
  {
    id: "P1_Q1",
    questionNumber: 1,
    part: EExamPart.I,
    label: "Câu 1.",
    type: "multiple_choice",
    stem: "Quá trình phiên mã xảy ra ở đâu trong tế bào nhân thực?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "Tế bào chất" },
      { label: "B", text: "Bộ máy Golgi" },
      { label: "C", text: "Ribosome" },
      { label: "D", text: "Nhân tế bào" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Ở tế bào nhân thực, phiên mã diễn ra trong nhân tế bào, nơi ADN khuôn mẫu nằm trong nhiễm sắc thể. mARN sau phiên mã được chế biến rồi đi ra tế bào chất để dịch mã.",
  },
  {
    id: "P1_Q2",
    questionNumber: 2,
    part: EExamPart.I,
    label: "Câu 2.",
    type: "multiple_choice",
    stem: "Mã di truyền có tính thoái hoá, nghĩa là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "Một bộ ba mã hoá cho nhiều axit amin khác nhau." },
      {
        label: "B",
        text: "Nhiều bộ ba khác nhau cùng mã hoá cho một axit amin.",
      },
      {
        label: "C",
        text: "Mã di truyền giống nhau ở tất cả các loài sinh vật.",
      },
      { label: "D", text: "Một bộ ba chỉ mã hoá cho một axit amin duy nhất." },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Tính thoái hoá (dư thừa) của mã di truyền nghĩa là nhiều bộ ba (codon) khác nhau có thể cùng quy định một loại axit amin. Ví dụ: UUU và UUC đều mã hoá phenylalanine.",
  },
  {
    id: "P1_Q3",
    questionNumber: 3,
    part: EExamPart.I,
    label: "Câu 3.",
    type: "multiple_choice",
    stem: "Theo Mendel, phép lai giữa hai cá thể dị hợp tử một cặp gen (Aa × Aa) cho tỉ lệ kiểu hình ở đời con là:",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "3 : 1" },
      { label: "B", text: "1 : 1" },
      { label: "C", text: "1 : 2 : 1" },
      { label: "D", text: "9 : 3 : 3 : 1" },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Aa × Aa → 1AA : 2Aa : 1aa. Nếu A trội hoàn toàn so với a thì tỉ lệ kiểu hình là 3 trội : 1 lặn = 3 : 1.",
  },
  {
    id: "P1_Q4",
    questionNumber: 4,
    part: EExamPart.I,
    label: "Câu 4.",
    type: "multiple_choice",
    stem: "Dạng đột biến gen nào sau đây KHÔNG làm thay đổi tổng số nuclêôtit và chiều dài của gen?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.BIEN_DI,
    isApplied: false,
    options: [
      { label: "A", text: "Mất một cặp nuclêôtit." },
      { label: "B", text: "Thêm một cặp nuclêôtit." },
      { label: "C", text: "Thay thế một cặp nuclêôtit." },
      {
        label: "D",
        text: "Mất một cặp và thêm một cặp nuclêôtit ở hai vị trí khác nhau.",
      },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Thay thế một cặp nuclêôtit bằng một cặp khác: tổng số nuclêôtit không đổi, chiều dài gen không đổi, chỉ thay đổi thành phần nuclêôtit. " +
      "Mất hoặc thêm đều làm thay đổi tổng số nuclêôtit và chiều dài gen. D là hai đột biến riêng biệt, tổng số nu không đổi nhưng đó là hai đột biến chứ không phải một dạng.",
  },
  {
    id: "P1_Q5",
    questionNumber: 5,
    part: EExamPart.I,
    label: "Câu 5.",
    type: "multiple_choice",
    stem: "Nhân tố tiến hoá nào sau đây có thể làm thay đổi tần số alen của quần thể KHÔNG theo một hướng xác định?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.TIEN_HOA,
    isApplied: false,
    options: [
      { label: "A", text: "Chọn lọc tự nhiên" },
      { label: "B", text: "Các yếu tố ngẫu nhiên (biến động di truyền)" },
      { label: "C", text: "Di – nhập gen" },
      { label: "D", text: "Đột biến gen" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Biến động di truyền (phiêu bạt gen) là nhân tố tiến hoá vô hướng — làm thay đổi tần số alen ngẫu nhiên, không theo hướng xác định, đặc biệt rõ ở quần thể nhỏ.",
  },
  {
    id: "P1_Q6",
    questionNumber: 6,
    part: EExamPart.I,
    label: "Câu 6.",
    type: "multiple_choice",
    stem: "Quan hệ sinh thái nào sau đây là quan hệ cùng loài?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: false,
    options: [
      {
        label: "A",
        text: "Cạnh tranh giữa hai con hươu đực trong mùa sinh sản.",
      },
      { label: "B", text: "Cộng sinh giữa nấm và tảo tạo thành địa y." },
      { label: "C", text: "Ký sinh giữa giun đũa và người." },
      { label: "D", text: "Hội sinh giữa cá ép và cá mập." },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Cạnh tranh giữa hai con hươu đực cùng loài trong mùa sinh sản là quan hệ cạnh tranh cùng loài. Các đáp án A, C, D đều là quan hệ khác loài.",
  },
  {
    id: "P1_Q7",
    questionNumber: 7,
    part: EExamPart.I,
    label: "Câu 7.",
    type: "multiple_choice",
    stem: "Bào quan nào sau đây có chứa ADN dạng vòng?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.TE_BAO_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Lưới nội chất" },
      { label: "B", text: "Ribosome" },
      { label: "C", text: "Ti thể" },
      { label: "D", text: "Lizôxôm" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Ti thể (và lục lạp) chứa ADN dạng vòng, tương tự ADN vi khuẩn. Đây là bằng chứng cho thuyết nội cộng sinh.",
  },
  {
    id: "P1_Q8",
    questionNumber: 8,
    part: EExamPart.I,
    label: "Câu 8.",
    type: "multiple_choice",
    stem: "Pha sáng của quang hợp diễn ra ở đâu trong lục lạp?",
    difficulty: EDifficultyLevel.NHAN_BIET,
    domain: EKnowledgeDomain.SINH_LY_THUC_VAT,
    isApplied: false,
    options: [
      { label: "A", text: "Chất nền (stroma)" },
      { label: "B", text: "Màng ngoài lục lạp" },
      { label: "C", text: "Màng thylakoid" },
      { label: "D", text: "Tế bào chất" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Pha sáng diễn ra trên màng thylakoid, nơi có các hệ quang hoá I, II và chuỗi truyền electron. Pha tối (chu trình Calvin) diễn ra ở chất nền (stroma).",
  },
  {
    id: "P1_Q9",
    questionNumber: 9,
    part: EExamPart.I,
    label: "Câu 9.",
    type: "multiple_choice",
    stem: "Một quần thể có cấu trúc di truyền: 0,36AA : 0,48Aa : 0,16aa. Tần số alen A của quần thể này là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.DI_TRUYEN_QUAN_THE,
    isApplied: false,
    options: [
      { label: "A", text: "0,36" },
      { label: "B", text: "0,48" },
      { label: "C", text: "0,60" },
      { label: "D", text: "0,64" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Tần số alen A = tần số AA + ½ × tần số Aa = 0,36 + ½ × 0,48 = 0,36 + 0,24 = 0,60.",
  },
  {
    id: "P1_Q10",
    questionNumber: 10,
    part: EExamPart.I,
    label: "Câu 10.",
    type: "multiple_choice",
    stem: "Một gen có 3000 nuclêôtit, trong đó số nuclêôtit loại Adenin (A) chiếm 20%. Số liên kết hiđrô của gen này là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    options: [
      { label: "A", text: "3000" },
      { label: "B", text: "3600" },
      { label: "C", text: "3900" },
      { label: "D", text: "4200" },
    ] as const,
    correctAnswer: "C",
    explanation:
      "Gen có 3000 nuclêôtit → 1500 cặp. A = 20% × 3000 = 600 → T = 600. G = (3000 – 2×600)/2 = 900 → X = 900. " +
      "Số liên kết H = 2A + 3G = 2×600 + 3×900 = 1200 + 2700 = 3900.",
  },
  {
    id: "P1_Q11",
    questionNumber: 11,
    part: EExamPart.I,
    label: "Câu 11.",
    type: "multiple_choice",
    stem: "Ở người, bệnh mù màu đỏ – lục do gen lặn nằm trên vùng không tương đồng của nhiễm sắc thể X quy định. Mẹ mang gen dị hợp, bố bình thường. Xác suất con trai đầu lòng bị mù màu là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    options: [
      { label: "A", text: "1/2" },
      { label: "B", text: "1/4" },
      { label: "C", text: "1/8" },
      { label: "D", text: "0" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Mẹ X^A X^a × Bố X^A Y. Con trai: 1/2 X^A Y (bình thường) : 1/2 X^a Y (mù màu). " +
      "Xác suất sinh con trai = 1/2. Xác suất con trai mù màu = 1/2 × 1/2 = 1/4.",
  },
  {
    id: "P1_Q12",
    questionNumber: 12,
    part: EExamPart.I,
    label: "Câu 12.",
    type: "multiple_choice",
    stem: "Huyết áp trong hệ mạch giảm dần theo thứ tự nào sau đây?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_LY_DONG_VAT,
    isApplied: false,
    options: [
      { label: "A", text: "Động mạch → tĩnh mạch → mao mạch" },
      { label: "B", text: "Tĩnh mạch → mao mạch → động mạch" },
      { label: "C", text: "Mao mạch → động mạch → tĩnh mạch" },
      { label: "D", text: "Động mạch → mao mạch → tĩnh mạch" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Huyết áp giảm dần từ động mạch (cao nhất) → tiểu động mạch → mao mạch → tĩnh mạch (thấp nhất). " +
      "Nguyên nhân: ma sát với thành mạch và sự phân nhánh của hệ mạch.",
  },
  {
    id: "P1_Q13",
    questionNumber: 13,
    part: EExamPart.I,
    label: "Câu 13.",
    type: "multiple_choice",
    stem: "Theo thuyết tiến hoá hiện đại, đơn vị tiến hoá cơ sở là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.TIEN_HOA,
    isApplied: false,
    options: [
      { label: "A", text: "Cá thể" },
      { label: "B", text: "Loài" },
      { label: "C", text: "Quần xã" },
      { label: "D", text: "Quần thể" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Quần thể là đơn vị tiến hoá cơ sở vì quần thể là đơn vị nhỏ nhất có vốn gen chung, " +
      "tiến hoá diễn ra khi tần số alen và thành phần kiểu gen của quần thể bị biến đổi.",
  },
  {
    id: "P1_Q14",
    questionNumber: 14,
    part: EExamPart.I,
    label: "Câu 14.",
    type: "multiple_choice",
    stem: "Trong chuỗi thức ăn: Cỏ → Châu chấu → Ếch → Rắn → Đại bàng, sinh vật tiêu thụ bậc 2 là:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: false,
    options: [
      { label: "A", text: "Châu chấu" },
      { label: "B", text: "Ếch" },
      { label: "C", text: "Rắn" },
      { label: "D", text: "Đại bàng" },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Cỏ (sinh vật sản xuất) → Châu chấu (SV tiêu thụ bậc 1) → Ếch (SV tiêu thụ bậc 2) → " +
      "Rắn (SV tiêu thụ bậc 3) → Đại bàng (SV tiêu thụ bậc 4).",
  },
  {
    id: "P1_Q15",
    questionNumber: 15,
    part: EExamPart.I,
    label: "Câu 15.",
    type: "multiple_choice",
    stem: "Thể đa bội là dạng đột biến nào sau đây?",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.BIEN_DI,
    isApplied: false,
    options: [
      { label: "A", text: "Đột biến gen" },
      { label: "B", text: "Đột biến cấu trúc nhiễm sắc thể" },
      { label: "C", text: "Đột biến lệch bội" },
      { label: "D", text: "Đột biến đa bội" },
    ] as const,
    correctAnswer: "D",
    explanation:
      "Thể đa bội là dạng đột biến số lượng nhiễm sắc thể, trong đó bộ NST tăng lên bội số của n (3n, 4n, 6n...). " +
      "Đa bội khác lệch bội (thêm/mất 1–2 NST cá biệt).",
  },
  {
    id: "P1_Q16",
    questionNumber: 16,
    part: EExamPart.I,
    label: "Câu 16.",
    type: "multiple_choice",
    stem: "Trong công nghệ gen, enzim giới hạn (restriction enzyme) có vai trò:",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.UNG_DUNG_DI_TRUYEN,
    isApplied: true,
    options: [
      { label: "A", text: "Nối các đoạn ADN lại với nhau." },
      { label: "B", text: "Nhận biết và cắt ADN tại các trình tự đặc hiệu." },
      { label: "C", text: "Nhân đôi ADN trong ống nghiệm." },
      { label: "D", text: "Phiên mã gen mục tiêu." },
    ] as const,
    correctAnswer: "B",
    explanation:
      "Enzim giới hạn nhận biết trình tự nuclêôtit đặc hiệu (thường palindrome) trên ADN và cắt tại đó, " +
      "tạo các đầu dính hoặc đầu bằng. Enzim ligase mới là enzim nối. Taq polymerase nhân đôi ADN trong PCR.",
  },

  {
    id: "P1_Q17",
    questionNumber: 17,
    part: EExamPart.I,
    label: "Câu 17.",
    type: "multiple_choice",
    stem: "Bệnh thiếu máu hồng cầu hình liềm ở người là do đột biến thay thế một cặp nuclêôtit trong gen mã hoá chuỗi β-hemoglobin, khiến axit amin glutamic bị thay bằng valin. Đây là ví dụ minh hoạ cho:",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_HOC_THUC_TE,
    isApplied: true,
    options: [
      {
        label: "A",
        text: "Đột biến gen gây biến đổi cấu trúc và chức năng protein.",
      },
      { label: "B", text: "Đột biến gen luôn gây hại cho sinh vật." },
      {
        label: "C",
        text: "Đột biến gen không làm thay đổi trình tự axit amin.",
      },
      { label: "D", text: "Đột biến gen chỉ xảy ra ở tế bào sinh dục." },
    ] as const,
    correctAnswer: "A",
    explanation:
      "Thay thế Glu (ưa nước) bằng Val (kỵ nước) làm chuỗi β-hemoglobin bị thay đổi cấu trúc, " +
      "dẫn đến hồng cầu biến dạng hình liềm. B sai vì đột biến có thể trung tính hoặc có lợi. " +
      "C sai vì đã thay đổi axit amin. D sai vì đột biến xảy ra ở cả tế bào soma và sinh dục.",
  },
  {
    id: "P1_Q18",
    questionNumber: 18,
    part: EExamPart.I,
    label: "Câu 18.",
    type: "multiple_choice",
    stem: "Một nông dân nhận thấy cây trồng trong nhà kính sinh trưởng tốt hơn khi bổ sung thêm CO₂ vào không khí. Giải thích nào sau đây là đúng nhất?",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_LY_THUC_VAT,
    isApplied: true,
    options: [
      {
        label: "A",
        text: "CO₂ tăng làm tăng cường độ quang hợp, tạo nhiều chất hữu cơ hơn cho cây.",
      },
      {
        label: "B",
        text: "CO₂ tăng làm tăng cường độ hô hấp tế bào, cung cấp nhiều năng lượng hơn.",
      },
      {
        label: "C",
        text: "CO₂ tăng làm khí khổng đóng lại, giúp cây giữ nước tốt hơn.",
      },
      { label: "D", text: "CO₂ tăng là nguồn dinh dưỡng khoáng cho cây." },
    ] as const,
    correctAnswer: "A",
    explanation:
      "CO₂ là nguyên liệu của pha tối quang hợp (chu trình Calvin). Tăng nồng độ CO₂ (trong giới hạn) " +
      "làm tăng cường độ quang hợp → tổng hợp nhiều chất hữu cơ → cây sinh trưởng tốt hơn. " +
      "B sai vì CO₂ không phải nguyên liệu chính của hô hấp. C sai vì CO₂ cao khiến khí khổng đóng là phản ứng bảo vệ, không phải lý do sinh trưởng tốt. D sai vì CO₂ không phải khoáng.",
  },
] as const;

const partIIQuestions: readonly TrueFalseQuestion[] = [
  {
    id: "P2_Q19",
    questionNumber: 19,
    part: EExamPart.II,
    label: "Câu 19.",
    type: "true_false",
    stem: "Ở một loài thực vật, gen A quy định thân cao là trội hoàn toàn so với gen a quy định thân thấp; gen B quy định hoa đỏ là trội hoàn toàn so với gen b quy định hoa trắng. Hai cặp gen nằm trên hai cặp nhiễm sắc thể khác nhau. Phép lai P: AaBb × AaBb. Xét các mệnh đề sau:",
    context:
      "AaBb × AaBb, hai gen PLĐL. Đời F1 có tỉ lệ kiểu gen: (1AA : 2Aa : 1aa)(1BB : 2Bb : 1bb). Tỉ lệ kiểu hình: 9 cao-đỏ : 3 cao-trắng : 3 thấp-đỏ : 1 thấp-trắng.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    items: [
      {
        label: "a",
        statement: "Tỉ lệ kiểu hình thân cao, hoa đỏ ở F1 là 9/16.",
        isTrue: true,
        explanation:
          "Thân cao (A_) = 3/4; hoa đỏ (B_) = 3/4. PLĐL → P(cao, đỏ) = 3/4 × 3/4 = 9/16. ✓",
      },
      {
        label: "b",
        statement: "Ở F1, có 4 loại kiểu hình khác nhau.",
        isTrue: true,
        explanation:
          "4 tổ hợp kiểu hình: cao-đỏ, cao-trắng, thấp-đỏ, thấp-trắng = 4 loại. ✓",
      },
      {
        label: "c",
        statement: "Tỉ lệ kiểu gen đồng hợp tử về cả hai cặp gen ở F1 là 1/8.",
        isTrue: false,
        explanation:
          "Đồng hợp cả hai cặp gen: AABB, AAbb, aaBB, aabb. Mỗi loại = 1/4 × 1/4 = 1/16. " +
          "Tổng = 4/16 = 1/4, không phải 1/8. ✗",
      },
      {
        label: "d",
        statement:
          "Trong các cây thân cao hoa đỏ ở F1, cây có kiểu gen dị hợp tử về cả hai cặp gen chiếm tỉ lệ 4/16.",
        isTrue: false,
        explanation:
          "Cây AaBb trong tổng F1 = 2/4 × 2/4 = 4/16. Nhưng đề hỏi 'trong các cây cao đỏ', " +
          "tỉ lệ AaBb trong nhóm cao-đỏ = (4/16)/(9/16) = 4/9, không phải 4/16. ✗",
      },
    ] as const,
  },
  {
    id: "P2_Q20",
    questionNumber: 20,
    part: EExamPart.II,
    label: "Câu 20.",
    type: "true_false",
    stem: "Một hệ sinh thái rừng mưa nhiệt đới. Xét các mệnh đề sau về đặc điểm sinh thái:",
    context:
      "Rừng mưa nhiệt đới có độ đa dạng sinh học cao nhất, nhiều tầng tán, năng suất sinh học lớn, lượng mưa > 2000 mm/năm.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: true,
    items: [
      {
        label: "a",
        statement:
          "Rừng mưa nhiệt đới là hệ sinh thái có độ đa dạng sinh học cao nhất trên Trái Đất.",
        isTrue: true,
        explanation:
          "Rừng mưa nhiệt đới chứa hơn 50% số loài sinh vật trên Trái Đất mặc dù chỉ chiếm ~6% diện tích lục địa. ✓",
      },
      {
        label: "b",
        statement:
          "Chuỗi thức ăn trong rừng mưa nhiệt đới thường ngắn hơn so với hệ sinh thái đồng cỏ.",
        isTrue: false,
        explanation:
          "Chuỗi thức ăn trong rừng mưa nhiệt đới thường DÀI hơn do đa dạng sinh học cao, " +
          "nhiều bậc dinh dưỡng hơn. ✗",
      },
      {
        label: "c",
        statement:
          "Lưới thức ăn trong rừng mưa nhiệt đới phức tạp do có nhiều loài sinh vật.",
        isTrue: true,
        explanation:
          "Đa dạng loài cao → nhiều mối quan hệ dinh dưỡng → lưới thức ăn phức tạp. ✓",
      },
      {
        label: "d",
        statement:
          "Trong rừng mưa nhiệt đới, phần lớn chất dinh dưỡng được tích luỹ trong đất.",
        isTrue: false,
        explanation:
          "Phần lớn chất dinh dưỡng ở rừng mưa nhiệt đới được tích luỹ trong sinh khối (cây, lá, xác hữu cơ), " +
          "không phải trong đất. Đất rừng nhiệt đới thường nghèo dinh dưỡng do phong hoá mạnh. ✗",
      },
    ] as const,
  },
  {
    id: "P2_Q21",
    questionNumber: 21,
    part: EExamPart.II,
    label: "Câu 21.",
    type: "true_false",
    stem: "Về cơ chế di truyền ở cấp phân tử, xét các mệnh đề sau:",
    context:
      "Nhân đôi ADN: nguyên tắc bổ sung, bán bảo tồn. Phiên mã: tổng hợp mARN. Dịch mã: tổng hợp chuỗi polipeptit.",
    difficulty: EDifficultyLevel.THONG_HIEU,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Trong quá trình nhân đôi ADN, enzim ADN polymerase tổng hợp mạch mới theo chiều 5' → 3'.",
        isTrue: true,
        explanation:
          "ADN polymerase chỉ có thể gắn nuclêôtit mới vào đầu 3'–OH tự do, " +
          "nên mạch mới luôn được tổng hợp theo chiều 5' → 3'. ✓",
      },
      {
        label: "b",
        statement:
          "Mạch khuôn dùng để phiên mã là mạch có chiều 3' → 5' (mạch gốc).",
        isTrue: true,
        explanation:
          "ARN polymerase di chuyển dọc mạch gốc theo chiều 3' → 5' để tổng hợp mARN theo chiều 5' → 3'. ✓",
      },
      {
        label: "c",
        statement:
          "Trong dịch mã, ribosome di chuyển trên mARN theo chiều 3' → 5'.",
        isTrue: false,
        explanation:
          "Ribosome di chuyển trên mARN theo chiều 5' → 3', đọc từng bộ ba mã sao (codon) để dịch mã. ✗",
      },
      {
        label: "d",
        statement:
          "Mỗi phân tử mARN ở tế bào nhân thực có thể được nhiều ribosome dịch mã đồng thời (polyribosome).",
        isTrue: true,
        explanation:
          "Nhiều ribosome cùng gắn lên một mARN tạo thành polysome (polyribosome), " +
          "giúp tổng hợp nhiều chuỗi polipeptit cùng loại đồng thời. ✓",
      },
    ] as const,
  },
  {
    id: "P2_Q22",
    questionNumber: 22,
    part: EExamPart.II,
    label: "Câu 22.",
    type: "true_false",
    stem: "Về quá trình hình thành loài mới theo thuyết tiến hoá hiện đại, xét các mệnh đề sau:",
    context:
      "Hình thành loài mới là quá trình cải biến thành phần kiểu gen của quần thể theo hướng thích nghi, " +
      "dẫn đến cách li sinh sản với quần thể gốc.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.TIEN_HOA,
    isApplied: false,
    items: [
      {
        label: "a",
        statement:
          "Hình thành loài bằng con đường cách li địa lí thường xảy ra chậm, qua nhiều giai đoạn trung gian.",
        isTrue: true,
        explanation:
          "Cách li địa lí ngăn cản giao lưu gen giữa các quần thể, qua thời gian dài " +
          "sự tích luỹ biến dị dẫn đến cách li sinh sản. Quá trình diễn ra chậm. ✓",
      },
      {
        label: "b",
        statement:
          "Hình thành loài bằng con đường đa bội hoá có thể diễn ra nhanh chóng, chỉ trong vài thế hệ.",
        isTrue: true,
        explanation:
          "Đa bội hoá (đặc biệt lai xa kèm đa bội hoá) tạo cách li sinh sản ngay lập tức, " +
          "nên hình thành loài mới rất nhanh, phổ biến ở thực vật. ✓",
      },
      {
        label: "c",
        statement:
          "Chọn lọc tự nhiên là nhân tố duy nhất quy định chiều hướng tiến hoá.",
        isTrue: false,
        explanation:
          "Chọn lọc tự nhiên là nhân tố có vai trò ĐỊNH HƯỚNG tiến hoá, nhưng không phải nhân tố duy nhất. " +
          "Các yếu tố ngẫu nhiên, di nhập gen, đột biến cũng góp phần. " +
          "Tuy nhiên, chỉ CLTN mới quy định chiều hướng thích nghi. Mệnh đề sai ở chỗ 'duy nhất'. ✗",
      },
      {
        label: "d",
        statement:
          "Cách li sinh sản là tiêu chuẩn quan trọng nhất để phân biệt hai loài thân thuộc.",
        isTrue: true,
        explanation:
          "Theo khái niệm loài sinh học, cách li sinh sản là tiêu chuẩn chủ yếu " +
          "để phân biệt loài vì nó đảm bảo sự toàn vẹn vốn gen riêng của mỗi loài. ✓",
      },
    ] as const,
  },
] as const;

const partIIIQuestions: readonly ShortAnswerQuestion[] = [
  {
    id: "P3_Q23",
    questionNumber: 23,
    part: EExamPart.III,
    label: "Câu 23.",
    type: "short_answer",
    stem: "Ở một loài thực vật, tính trạng chiều cao cây do 2 cặp gen không alen (A, a và B, b) phân li độc lập cùng quy định theo kiểu tương tác cộng gộp. Mỗi alen trội đóng góp 5 cm vào chiều cao, kiểu gen đồng hợp lặn (aabb) có chiều cao 100 cm. Phép lai AaBb × AaBb cho F1. Tính số loại kiểu hình ở F1.",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    acceptedAnswers: ["5"],
    solutionSteps: [
      "Kiểu gen aabb (0 alen trội) → 100 cm.",
      "Mỗi alen trội đóng góp 5 cm → chiều cao = 100 + 5k, với k là số alen trội (k = 0, 1, 2, 3, 4).",
      "AaBb × AaBb: số alen trội k có thể nhận giá trị 0, 1, 2, 3, 4.",
      "Tương ứng 5 kiểu hình: 100, 105, 110, 115, 120 cm.",
    ],
    conclusion: "F1 có 5 loại kiểu hình khác nhau.",
  },
  {
    id: "P3_Q24",
    questionNumber: 24,
    part: EExamPart.III,
    label: "Câu 24.",
    type: "short_answer",
    stem: "Một quần thể có 200 cá thể, trong đó: 50 cá thể AA, 100 cá thể Aa, 50 cá thể aa. Sau một thế hệ ngẫu phối, tính số cá thể có kiểu gen dị hợp tử (Aa) theo lí thuyết (biết quần thể không chịu tác động của các nhân tố tiến hoá và quần thể giữ nguyên kích thước).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.DI_TRUYEN_QUAN_THE,
    isApplied: false,
    acceptedAnswers: ["100"],
    solutionSteps: [
      "Tần số alen A = (2×50 + 100)/(2×200) = 200/400 = 0,5.",
      "Tần số alen a = 1 – 0,5 = 0,5.",
      "Sau ngẫu phối (Hardy-Weinberg): tần số Aa = 2pq = 2 × 0,5 × 0,5 = 0,5.",
      "Số cá thể Aa = 0,5 × 200 = 100.",
    ],
    conclusion: "Sau một thế hệ ngẫu phối, số cá thể dị hợp tử Aa là 100.",
  },
  {
    id: "P3_Q25",
    questionNumber: 25,
    part: EExamPart.III,
    label: "Câu 25.",
    type: "short_answer",
    stem: "Trong một hệ sinh thái, năng lượng tích luỹ ở bậc dinh dưỡng cấp 1 là 5000 kcal. Biết hiệu suất sinh thái giữa các bậc dinh dưỡng liên tiếp đều là 10%. Tính năng lượng tích luỹ ở bậc dinh dưỡng cấp 3 (đơn vị: kcal).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.SINH_THAI_HOC,
    isApplied: false,
    acceptedAnswers: ["50"],
    solutionSteps: [
      "Bậc dinh dưỡng cấp 1 (SVSX): 5000 kcal.",
      "Bậc dinh dưỡng cấp 2 (SVTT bậc 1): 5000 × 10% = 500 kcal.",
      "Bậc dinh dưỡng cấp 3 (SVTT bậc 2): 500 × 10% = 50 kcal.",
    ],
    conclusion: "Năng lượng tích luỹ ở bậc dinh dưỡng cấp 3 là 50 kcal.",
  },
  {
    id: "P3_Q26",
    questionNumber: 26,
    part: EExamPart.III,
    label: "Câu 26.",
    type: "short_answer",
    stem: "Một gen ở sinh vật nhân sơ có chiều dài 5100 Å. Tính số bộ ba mã hoá (codon) trên phân tử mARN được phiên mã từ gen này (không tính bộ ba kết thúc).",
    difficulty: EDifficultyLevel.VAN_DUNG,
    domain: EKnowledgeDomain.CO_CHE_DI_TRUYEN_PHAN_TU,
    isApplied: false,
    acceptedAnswers: ["499"],
    solutionSteps: [
      "Chiều dài gen = 5100 Å. Mỗi nuclêôtit dài 3,4 Å.",
      "Số nuclêôtit trên một mạch = 5100 / 3,4 = 1500.",
      "Số bộ ba trên mARN = 1500 / 3 = 500 (bao gồm cả bộ ba mở đầu và kết thúc).",
      "Số bộ ba mã hoá = 500 – 1 (trừ bộ ba kết thúc) = 499.",
      "Lưu ý: bộ ba mở đầu (AUG) vẫn mã hoá Met nên được tính.",
    ],
    conclusion: "Số bộ ba mã hoá trên mARN (không tính bộ ba kết thúc) là 499.",
  },
  {
    id: "P3_Q27",
    questionNumber: 27,
    part: EExamPart.III,
    label: "Câu 27.",
    type: "short_answer",
    stem: "Ở ruồi giấm, gen quy định màu mắt nằm trên vùng không tương đồng của nhiễm sắc thể X: alen W quy định mắt đỏ trội hoàn toàn so với alen w quy định mắt trắng. Phép lai: ruồi cái mắt đỏ (X^W X^w) × ruồi đực mắt đỏ (X^W Y). Ở F1, ruồi đực mắt trắng chiếm tỉ lệ bao nhiêu phần trăm?",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.QUY_LUAT_DI_TRUYEN,
    isApplied: false,
    acceptedAnswers: ["25", "25%", "1/4"],
    solutionSteps: [
      "P: X^W X^w × X^W Y.",
      "F1 gồm 4 kiểu tổ hợp ngang nhau: X^W X^W (cái đỏ), X^W X^w (cái đỏ), X^W Y (đực đỏ), X^w Y (đực trắng). Mỗi loại = 1/4.",
      "Đực mắt trắng (X^w Y) = 1/4 = 25% toàn bộ F1.",
    ],
    conclusion: "Ruồi đực mắt trắng chiếm 25% tổng F1.",
  },
  {
    id: "P3_Q28",
    questionNumber: 28,
    part: EExamPart.III,
    label: "Câu 28.",
    type: "short_answer",
    stem: "Một quần thể chuột đồng ban đầu có 1000 cá thể. Trong năm qua, có 200 cá thể mới sinh ra, 50 cá thể chết, 30 cá thể nhập cư và 20 cá thể xuất cư. Tính kích thước quần thể cuối năm.",
    difficulty: EDifficultyLevel.VAN_DUNG_CAO,
    domain: EKnowledgeDomain.SINH_HOC_THUC_TE,
    isApplied: true,
    acceptedAnswers: ["1160"],
    solutionSteps: [
      "Công thức: N_cuối = N_đầu + Sinh − Tử + Nhập cư − Xuất cư.",
      "N_cuối = 1000 + 200 − 50 + 30 − 20 = 1160.",
    ],
    conclusion: "Kích thước quần thể cuối năm là 1160 cá thể.",
  },
] as const;

export const BIOLOGY_EXAM_2: Exam = {
  metadata: EXAM_METADATA,
  questions: [...partIQuestions, ...partIIQuestions, ...partIIIQuestions],
} as const;
