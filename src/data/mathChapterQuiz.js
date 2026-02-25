// Kuis per bab Matematika — 5 soal per bab
export const mathChapterQuiz = {
  aljabar: [
    {
      id: 'ma1',
      question: "Hasil penyederhanaan 4x + 3y − 2x + y adalah...",
      options: ["2x + 4y", "6x + 4y", "2x + 2y", "6x + 2y"],
      correctAnswer: 0,
      explanation: "Kelompokkan suku sejenis: (4x − 2x) + (3y + y) = 2x + 4y"
    },
    {
      id: 'ma2',
      question: "Jika 5x − 7 = 2x + 8, nilai x adalah...",
      options: ["3", "5", "15", "1"],
      correctAnswer: 1,
      explanation: "5x − 2x = 8 + 7 → 3x = 15 → x = 5"
    },
    {
      id: 'ma3',
      question: "Himpunan penyelesaian dari x² − 9 = 0 adalah...",
      options: ["{3}", "{−3}", "{3, −3}", "{9}"],
      correctAnswer: 2,
      explanation: "x² = 9 → x = ±3. HP = {3, −3}"
    },
    {
      id: 'ma4',
      question: "Jika 2x + y = 10 dan x − y = 2, maka nilai y adalah...",
      options: ["2", "4", "6", "8"],
      correctAnswer: 0,
      explanation: "Dari pers 2: x = 2 + y. Substitusi: 2(2+y) + y = 10 → 4 + 3y = 10 → y = 2"
    },
    {
      id: 'ma5',
      question: "Nilai log₁₀(1000) adalah...",
      options: ["2", "3", "4", "10"],
      correctAnswer: 1,
      explanation: "10³ = 1000, maka log₁₀(1000) = 3"
    },
  ],

  logika: [
    {
      id: 'ml1',
      question: "Semua kucing adalah hewan. Garfield adalah kucing. Maka...",
      options: ["Garfield bukan hewan", "Garfield adalah hewan", "Semua hewan adalah kucing", "Garfield adalah anjing"],
      correctAnswer: 1,
      explanation: "Silogisme: Semua P adalah Q, S adalah P, maka S adalah Q."
    },
    {
      id: 'ml2',
      question: "Negasi dari 'Ada siswa yang lulus' adalah...",
      options: ["Ada siswa yang tidak lulus", "Semua siswa tidak lulus", "Semua siswa lulus", "Tidak ada siswa yang tidak lulus"],
      correctAnswer: 1,
      explanation: "Negasi 'Ada A yang B' → 'Semua A tidak B' (Tidak ada A yang B)."
    },
    {
      id: 'ml3',
      question: "Pola: 5, 10, 20, 40, ___. Bilangan selanjutnya...",
      options: ["60", "80", "50", "100"],
      correctAnswer: 1,
      explanation: "Setiap suku dikalikan 2: 40 × 2 = 80"
    },
    {
      id: 'ml4',
      question: "Pena : Menulis = Kuas : ...",
      options: ["Membaca", "Melukis", "Menggambar", "Mewarnai"],
      correctAnswer: 1,
      explanation: "Pena digunakan untuk menulis, kuas digunakan untuk melukis."
    },
    {
      id: 'ml5',
      question: "Jika p: 'Hari ini hujan' dan q: 'Saya membawa payung', maka ~p ∨ q dibaca...",
      options: ["Hari ini hujan atau saya membawa payung", "Hari ini tidak hujan atau saya membawa payung", "Hari ini hujan dan saya tidak membawa payung", "Hari ini tidak hujan dan saya membawa payung"],
      correctAnswer: 1,
      explanation: "~p = 'Hari ini tidak hujan'. ~p ∨ q = 'Hari ini tidak hujan ATAU saya membawa payung'."
    },
  ],

  statistika: [
    {
      id: 'ms1',
      question: "Rata-rata dari 8, 12, 15, 9, 6 adalah...",
      options: ["8", "9", "10", "12"],
      correctAnswer: 2,
      explanation: "Mean = (8+12+15+9+6)/5 = 50/5 = 10"
    },
    {
      id: 'ms2',
      question: "Median dari data: 12, 5, 8, 3, 15, 10 adalah...",
      options: ["8", "9", "10", "12"],
      correctAnswer: 1,
      explanation: "Diurutkan: 3, 5, 8, 10, 12, 15. n=6 (genap), Median = (8+10)/2 = 9"
    },
    {
      id: 'ms3',
      question: "Dalam satu kantong ada 3 bola merah dan 7 bola putih. Probabilitas terambil bola merah adalah...",
      options: ["3/7", "7/10", "3/10", "1/3"],
      correctAnswer: 2,
      explanation: "P(merah) = 3/(3+7) = 3/10"
    },
    {
      id: 'ms4',
      question: "Berapa cara memilih ketua dan wakil ketua dari 6 orang? P(6,2) = ...",
      options: ["15", "30", "12", "36"],
      correctAnswer: 1,
      explanation: "P(6,2) = 6!/(6-2)! = 6 × 5 = 30"
    },
    {
      id: 'ms5',
      question: "Data: 4, 4, 5, 6, 7, 7, 7, 8. Modus data tersebut adalah...",
      options: ["4", "5", "7", "8"],
      correctAnswer: 2,
      explanation: "Angka 7 muncul 3 kali (paling banyak). Modus = 7"
    },
  ],

  kalkulus: [
    {
      id: 'mk1',
      question: "Nilai lim(x→3) (x² − 9)/(x − 3) adalah...",
      options: ["3", "6", "9", "0"],
      correctAnswer: 1,
      explanation: "(x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3. Saat x→3: 3+3 = 6"
    },
    {
      id: 'mk2',
      question: "Turunan dari f(x) = 5x³ − 2x + 7 adalah...",
      options: ["15x² − 2", "5x² − 2", "15x³ − 2", "5x³ + 7"],
      correctAnswer: 0,
      explanation: "f'(x) = 3·5x² − 2 = 15x² − 2"
    },
    {
      id: 'mk3',
      question: "Jika f(x) = x² − 6x + 5, nilai minimum f(x) adalah...",
      options: ["−4", "−3", "0", "5"],
      correctAnswer: 0,
      explanation: "f'(x) = 2x − 6 = 0 → x = 3. f(3) = 9 − 18 + 5 = −4"
    },
    {
      id: 'mk4',
      question: "∫ 4x³ dx = ...",
      options: ["x⁴ + C", "12x² + C", "4x⁴ + C", "x³ + C"],
      correctAnswer: 0,
      explanation: "∫ 4x³ dx = 4·(x⁴/4) + C = x⁴ + C"
    },
    {
      id: 'mk5',
      question: "Turunan dari f(x) = cos(x) adalah...",
      options: ["sin(x)", "−sin(x)", "−cos(x)", "tan(x)"],
      correctAnswer: 1,
      explanation: "Rumus dasar: d/dx[cos(x)] = −sin(x)"
    },
  ],
}
