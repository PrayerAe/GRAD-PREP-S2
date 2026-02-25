export const mathQuestions = [
  // ===== ALJABAR (1-10) =====
  {
    id: 1,
    topic: "Aljabar",
    subtopic: "Persamaan Linear",
    question: "Jika 3x − 5 = 10, nilai x adalah...",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "3x − 5 = 10 → 3x = 15 → x = 5"
  },
  {
    id: 2,
    topic: "Aljabar",
    subtopic: "Persamaan Linear",
    question: "Jika 2(x + 3) = 14, nilai x adalah...",
    options: ["3", "4", "5", "7"],
    correctAnswer: 1,
    explanation: "2(x + 3) = 14 → x + 3 = 7 → x = 4"
  },
  {
    id: 3,
    topic: "Aljabar",
    subtopic: "Sistem Persamaan",
    question: "Dari sistem persamaan x + y = 7 dan x − y = 3, nilai x adalah...",
    options: ["5", "4", "3", "2"],
    correctAnswer: 0,
    explanation: "Jumlahkan kedua persamaan: 2x = 10 → x = 5"
  },
  {
    id: 4,
    topic: "Aljabar",
    subtopic: "Operasi Aljabar",
    question: "Hasil dari (x + 3)(x − 2) adalah...",
    options: ["x² + x − 6", "x² − x − 6", "x² + 5x − 6", "x² − 5x + 6"],
    correctAnswer: 0,
    explanation: "(x+3)(x−2) = x² − 2x + 3x − 6 = x² + x − 6"
  },
  {
    id: 5,
    topic: "Aljabar",
    subtopic: "Pertidaksamaan",
    question: "Nilai x yang memenuhi 2x + 3 > 11 adalah...",
    options: ["x > 4", "x < 4", "x > 7", "x < 7"],
    correctAnswer: 0,
    explanation: "2x + 3 > 11 → 2x > 8 → x > 4"
  },
  {
    id: 6,
    topic: "Aljabar",
    subtopic: "Logaritma",
    question: "Jika log₂(8) = x, nilai x adalah...",
    options: ["2", "4", "3", "6"],
    correctAnswer: 2,
    explanation: "2³ = 8, maka log₂(8) = 3"
  },
  {
    id: 7,
    topic: "Aljabar",
    subtopic: "Eksponen",
    question: "Nilai dari 2³ × 2² adalah...",
    options: ["32", "16", "64", "128"],
    correctAnswer: 0,
    explanation: "aᵐ × aⁿ = aᵐ⁺ⁿ → 2³ × 2² = 2⁵ = 32"
  },
  {
    id: 8,
    topic: "Aljabar",
    subtopic: "Faktorisasi",
    question: "Faktorisasi dari x² − 5x + 6 adalah...",
    options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)", "(x + 1)(x − 6)"],
    correctAnswer: 0,
    explanation: "Cari dua bilangan yang hasil kali = 6 dan jumlah = −5 → −2 dan −3. Jadi (x−2)(x−3)"
  },
  {
    id: 9,
    topic: "Aljabar",
    subtopic: "Barisan Aritmetika",
    question: "Suku ke-10 dari barisan aritmetika 3, 7, 11, 15, ... adalah...",
    options: ["39", "43", "41", "37"],
    correctAnswer: 0,
    explanation: "a = 3, b = 4. U₁₀ = a + (n−1)b = 3 + 9(4) = 3 + 36 = 39"
  },
  {
    id: 10,
    topic: "Aljabar",
    subtopic: "Fungsi Komposisi",
    question: "Jika f(x) = 2x + 1 dan g(x) = x², maka (f ∘ g)(3) = ...",
    options: ["19", "49", "37", "13"],
    correctAnswer: 0,
    explanation: "g(3) = 9. f(g(3)) = f(9) = 2(9) + 1 = 19"
  },

  // ===== LOGIKA & PENALARAN (11-20) =====
  {
    id: 11,
    topic: "Logika",
    subtopic: "Silogisme",
    question: "Semua dokter adalah sarjana. Budi adalah dokter. Kesimpulan yang tepat adalah...",
    options: ["Budi bukan sarjana", "Budi adalah sarjana", "Semua sarjana adalah dokter", "Budi bukan dokter"],
    correctAnswer: 1,
    explanation: "Modus Ponens: Semua P adalah Q. S adalah P. Maka S adalah Q."
  },
  {
    id: 12,
    topic: "Logika",
    subtopic: "Negasi Pernyataan",
    question: "Negasi dari \"Semua mahasiswa rajin belajar\" adalah...",
    options: ["Ada mahasiswa yang tidak rajin belajar", "Semua mahasiswa tidak rajin belajar", "Tidak ada mahasiswa yang rajin belajar", "Ada mahasiswa yang rajin belajar"],
    correctAnswer: 0,
    explanation: "Negasi dari 'Semua A adalah B' adalah 'Ada A yang bukan B'"
  },
  {
    id: 13,
    topic: "Logika",
    subtopic: "Kontraposisi",
    question: "Jika p → q benar, maka pernyataan yang pasti benar adalah...",
    options: ["q → p", "~p → ~q", "~q → ~p", "p → ~q"],
    correctAnswer: 2,
    explanation: "Kontraposisi dari p → q adalah ~q → ~p, keduanya ekuivalen"
  },
  {
    id: 14,
    topic: "Logika",
    subtopic: "Pola Bilangan",
    question: "Pola bilangan: 2, 4, 8, 16, ___. Bilangan selanjutnya adalah...",
    options: ["24", "32", "28", "20"],
    correctAnswer: 1,
    explanation: "Setiap bilangan dikalikan 2: 16 × 2 = 32"
  },
  {
    id: 15,
    topic: "Logika",
    subtopic: "Deret Fibonacci",
    question: "Dalam deret 1, 1, 2, 3, 5, 8, bilangan berikutnya adalah...",
    options: ["11", "12", "14", "13"],
    correctAnswer: 3,
    explanation: "Fibonacci: setiap bilangan adalah jumlah dua bilangan sebelumnya. 5 + 8 = 13"
  },
  {
    id: 16,
    topic: "Logika",
    subtopic: "Nilai Kebenaran Implikasi",
    question: "Pernyataan 'Jika 2 > 3, maka 5 > 4' bernilai...",
    options: ["Benar", "Salah", "Tidak dapat ditentukan", "Bergantung kondisi"],
    correctAnswer: 0,
    explanation: "Implikasi p → q bernilai BENAR jika p salah (hipotesis salah → implikasi selalu benar)"
  },
  {
    id: 17,
    topic: "Logika",
    subtopic: "Silogisme",
    question: "Semua yang rajin belajar akan lulus. Ani tidak lulus. Kesimpulan yang tepat adalah...",
    options: ["Ani rajin belajar", "Ani tidak rajin belajar", "Ani malas", "Tidak dapat disimpulkan"],
    correctAnswer: 1,
    explanation: "Modus Tollens: Jika P → Q dan ~Q, maka ~P. Ani tidak lulus → Ani tidak rajin belajar."
  },
  {
    id: 18,
    topic: "Logika",
    subtopic: "Pola Bilangan",
    question: "Pola: 1, 4, 9, 16, 25, ___. Bilangan selanjutnya adalah...",
    options: ["30", "36", "49", "32"],
    correctAnswer: 1,
    explanation: "Pola bilangan kuadrat: 1², 2², 3², 4², 5², 6² = 36"
  },
  {
    id: 19,
    topic: "Logika",
    subtopic: "Analogi",
    question: "Buku : Perpustakaan = Obat : ...",
    options: ["Rumah Sakit", "Apotek", "Dokter", "Resep"],
    correctAnswer: 1,
    explanation: "Buku disimpan di perpustakaan, obat disimpan di apotek."
  },
  {
    id: 20,
    topic: "Logika",
    subtopic: "Deret Angka",
    question: "Pola: 3, 6, 12, 24, ___. Bilangan selanjutnya adalah...",
    options: ["36", "48", "30", "42"],
    correctAnswer: 1,
    explanation: "Setiap bilangan dikalikan 2: 24 × 2 = 48"
  },

  // ===== STATISTIKA (21-30) =====
  {
    id: 21,
    topic: "Statistika",
    subtopic: "Mean",
    question: "Jika rata-rata dari 5 angka adalah 20, maka total jumlah kelima angka tersebut adalah...",
    options: ["50", "80", "100", "120"],
    correctAnswer: 2,
    explanation: "Mean = Total / Banyak data → 20 = Total / 5 → Total = 100"
  },
  {
    id: 22,
    topic: "Statistika",
    subtopic: "Median",
    question: "Median dari data: 3, 7, 5, 9, 1, 4, 6 adalah...",
    options: ["4", "6", "5", "7"],
    correctAnswer: 2,
    explanation: "Data diurutkan: 1, 3, 4, 5, 6, 7, 9. Median (nilai tengah, n=7) = data ke-4 = 5"
  },
  {
    id: 23,
    topic: "Statistika",
    subtopic: "Modus",
    question: "Modus dari data: 2, 3, 3, 4, 5, 3, 6, 2 adalah...",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Angka 3 muncul paling sering (3 kali), angka 2 muncul 2 kali"
  },
  {
    id: 24,
    topic: "Statistika",
    subtopic: "Probabilitas",
    question: "Sebuah dadu dilempar sekali. Probabilitas muncul angka genap adalah...",
    options: ["1/3", "1/2", "2/3", "1/6"],
    correctAnswer: 1,
    explanation: "Angka genap: {2, 4, 6} = 3 kejadian. Total = 6. P = 3/6 = 1/2"
  },
  {
    id: 25,
    topic: "Statistika",
    subtopic: "Z-score",
    question: "Jika mean = 70 dan standar deviasi = 10, z-score untuk nilai 80 adalah...",
    options: ["0.5", "1", "1.5", "2"],
    correctAnswer: 1,
    explanation: "z = (x − μ) / σ = (80 − 70) / 10 = 10/10 = 1"
  },
  {
    id: 26,
    topic: "Statistika",
    subtopic: "Probabilitas Gabungan",
    question: "Jika P(A) = 0,3 dan P(B) = 0,4, dan A, B saling bebas, maka P(A ∩ B) = ...",
    options: ["0,12", "0,7", "0,1", "0,58"],
    correctAnswer: 0,
    explanation: "Jika saling bebas: P(A∩B) = P(A) × P(B) = 0,3 × 0,4 = 0,12"
  },
  {
    id: 27,
    topic: "Statistika",
    subtopic: "Range",
    question: "Data: 12, 15, 18, 22, 30. Jangkauan (range) data tersebut adalah...",
    options: ["12", "15", "18", "22"],
    correctAnswer: 2,
    explanation: "Range = Nilai terbesar − Nilai terkecil = 30 − 12 = 18"
  },
  {
    id: 28,
    topic: "Statistika",
    subtopic: "Kombinasi",
    question: "Berapa banyak cara memilih 2 orang dari 5 orang? C(5,2) = ...",
    options: ["20", "10", "15", "25"],
    correctAnswer: 1,
    explanation: "C(5,2) = 5! / (2! × 3!) = (5 × 4) / (2 × 1) = 10"
  },
  {
    id: 29,
    topic: "Statistika",
    subtopic: "Permutasi",
    question: "Berapa banyak cara menyusun 3 huruf dari kata 'ABCDE'? P(5,3) = ...",
    options: ["10", "20", "60", "120"],
    correctAnswer: 2,
    explanation: "P(5,3) = 5! / (5−3)! = 5 × 4 × 3 = 60"
  },
  {
    id: 30,
    topic: "Statistika",
    subtopic: "Quartil",
    question: "Data: 2, 4, 6, 8, 10, 12, 14, 16. Nilai Q₃ (kuartil ketiga) adalah...",
    options: ["10", "12", "13", "14"],
    correctAnswer: 2,
    explanation: "Q₃ = data ke-¾(n+1) = data ke-6,75 = 12 + 0,75(14−12) = 12 + 1,5 = 13"
  },

  // ===== KALKULUS (31-40) =====
  {
    id: 31,
    topic: "Kalkulus",
    subtopic: "Limit",
    question: "Nilai lim(x→2) (x² − 4) / (x − 2) adalah...",
    options: ["2", "4", "0", "Tidak terdefinisi"],
    correctAnswer: 1,
    explanation: "(x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Saat x→2: 2+2 = 4"
  },
  {
    id: 32,
    topic: "Kalkulus",
    subtopic: "Turunan",
    question: "Turunan dari f(x) = 3x² + 2x − 5 adalah...",
    options: ["6x + 2", "3x + 2", "6x − 5", "3x² + 2"],
    correctAnswer: 0,
    explanation: "f'(x) = 2·3x^(2-1) + 2·1 = 6x + 2"
  },
  {
    id: 33,
    topic: "Kalkulus",
    subtopic: "Nilai Ekstrim",
    question: "Nilai maksimum dari f(x) = −x² + 4x − 1 adalah...",
    options: ["2", "4", "3", "1"],
    correctAnswer: 2,
    explanation: "f'(x) = −2x + 4 = 0 → x = 2. f(2) = −4 + 8 − 1 = 3"
  },
  {
    id: 34,
    topic: "Kalkulus",
    subtopic: "Turunan Trigonometri",
    question: "Turunan dari f(x) = sin(x) adalah...",
    options: ["−sin(x)", "cos(x)", "tan(x)", "−cos(x)"],
    correctAnswer: 1,
    explanation: "Rumus dasar: d/dx [sin(x)] = cos(x)"
  },
  {
    id: 35,
    topic: "Kalkulus",
    subtopic: "Titik Kritis",
    question: "Jika f(x) = x³ − 3x, titik kritis terjadi saat...",
    options: ["x = ±1", "x = 0", "x = ±3", "x = ±2"],
    correctAnswer: 0,
    explanation: "f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1"
  },
  {
    id: 36,
    topic: "Kalkulus",
    subtopic: "Integral Dasar",
    question: "∫ 2x dx = ...",
    options: ["2x² + C", "x² + C", "2 + C", "x + C"],
    correctAnswer: 1,
    explanation: "∫ 2x dx = 2 × (x²/2) + C = x² + C"
  },
  {
    id: 37,
    topic: "Kalkulus",
    subtopic: "Integral Tentu",
    question: "Nilai ∫₀² 3x² dx adalah...",
    options: ["4", "8", "12", "6"],
    correctAnswer: 1,
    explanation: "∫ 3x² dx = x³. Evaluasi: [x³]₀² = 2³ − 0³ = 8"
  },
  {
    id: 38,
    topic: "Kalkulus",
    subtopic: "Limit",
    question: "Nilai lim(x→0) sin(x)/x adalah...",
    options: ["0", "1", "∞", "Tidak terdefinisi"],
    correctAnswer: 1,
    explanation: "Limit fundamental trigonometri: lim(x→0) sin(x)/x = 1"
  },
  {
    id: 39,
    topic: "Kalkulus",
    subtopic: "Aturan Rantai",
    question: "Turunan dari f(x) = (2x + 1)³ adalah...",
    options: ["3(2x + 1)²", "6(2x + 1)²", "2(2x + 1)³", "3(2x + 1)³"],
    correctAnswer: 1,
    explanation: "Chain Rule: f'(x) = 3(2x+1)² × 2 = 6(2x+1)²"
  },
  {
    id: 40,
    topic: "Kalkulus",
    subtopic: "Turunan",
    question: "Jika f(x) = x⁴ + 2x² − 3, nilai f'(1) adalah...",
    options: ["6", "8", "4", "2"],
    correctAnswer: 1,
    explanation: "f'(x) = 4x³ + 4x. f'(1) = 4(1)³ + 4(1) = 4 + 4 = 8"
  },
]

// Utility: get questions by topic
export const getMathByTopic = (topic) => mathQuestions.filter(q => q.topic === topic)
