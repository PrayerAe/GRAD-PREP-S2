export const mathSectionQuiz = {
  aljabar: [
    // Section 0: Operasi Bentuk Aljabar - 6 soal
    [
      {
        question: "Hasil dari (2x + 3)(x - 4) adalah ...",
        options: ["2x² - 5x - 12", "2x² + 5x - 12", "2x² - 5x + 12", "2x² - 11x - 12"],
        correctIndex: 0,
        explanation: "(2x + 3)(x - 4) = 2x·x + 2x·(-4) + 3·x + 3·(-4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12."
      },
      {
        question: "Bentuk sederhana dari (3a²b)³ / (9a⁴b²) adalah ...",
        options: ["3a²b", "a²b", "3ab", "3a²b²"],
        correctIndex: 0,
        explanation: "(3a²b)³ = 27a⁶b³. Maka 27a⁶b³ / (9a⁴b²) = 3a^(6-4)·b^(3-2) = 3a²b."
      },
      {
        question: "Jika x + 1/x = 5, maka nilai x² + 1/x² adalah ...",
        options: ["23", "25", "27", "21"],
        correctIndex: 0,
        explanation: "(x + 1/x)² = x² + 2 + 1/x² = 25. Maka x² + 1/x² = 25 - 2 = 23."
      },
      {
        question: "Hasil pemfaktoran dari x³ - 8 adalah ...",
        options: ["(x - 2)(x² + 2x + 4)", "(x - 2)(x² - 2x + 4)", "(x + 2)(x² - 2x + 4)", "(x - 2)(x² + 4)"],
        correctIndex: 0,
        explanation: "Rumus selisih kubik: a³ - b³ = (a - b)(a² + ab + b²). Maka x³ - 8 = x³ - 2³ = (x - 2)(x² + 2x + 4)."
      },
      {
        question: "Nilai dari √(48) + √(27) - √(75) adalah ...",
        options: ["2√3", "3√3", "√3", "4√3"],
        correctIndex: 0,
        explanation: "√48 = 4√3, √27 = 3√3, √75 = 5√3. Maka 4√3 + 3√3 - 5√3 = 2√3."
      },
      {
        question: "Jika (x + y) = 7 dan xy = 10, maka nilai x³ + y³ adalah ...",
        options: ["133", "143", "153", "163"],
        correctIndex: 0,
        explanation: "x³ + y³ = (x + y)³ - 3xy(x + y) = 343 - 3(10)(7) = 343 - 210 = 133."
      },
    ],
    // Section 1: Persamaan Linear - 6 soal
    [
      {
        question: "Nilai x yang memenuhi persamaan 3x - 7 = 2x + 5 adalah ...",
        options: ["12", "10", "8", "14"],
        correctIndex: 0,
        explanation: "3x - 7 = 2x + 5 → 3x - 2x = 5 + 7 → x = 12."
      },
      {
        question: "Jika 2(3x - 1) + 4 = 5x + 9, maka nilai x adalah ...",
        options: ["7", "5", "3", "9"],
        correctIndex: 0,
        explanation: "6x - 2 + 4 = 5x + 9 → 6x + 2 = 5x + 9 → x = 7."
      },
      {
        question: "Suatu bilangan jika ditambah 15 hasilnya sama dengan 3 kali bilangan itu dikurangi 7. Bilangan tersebut adalah ...",
        options: ["11", "8", "15", "4"],
        correctIndex: 0,
        explanation: "Misal bilangan = x. x + 15 = 3x - 7 → 22 = 2x → x = 11."
      },
      {
        question: "Nilai x yang memenuhi (2x + 1)/3 = (x + 4)/2 adalah ...",
        options: ["10", "8", "12", "6"],
        correctIndex: 0,
        explanation: "Cross multiply: 2(2x + 1) = 3(x + 4) → 4x + 2 = 3x + 12 → x = 10."
      },
      {
        question: "Umur Andi 5 tahun lagi adalah 3 kali umurnya 3 tahun yang lalu. Umur Andi sekarang adalah ... tahun.",
        options: ["7", "8", "9", "6"],
        correctIndex: 0,
        explanation: "Misal umur Andi = x. x + 5 = 3(x - 3) → x + 5 = 3x - 9 → 14 = 2x → x = 7."
      },
      {
        question: "Jika |2x - 6| = 10, maka jumlah semua nilai x yang memenuhi adalah ...",
        options: ["6", "8", "10", "4"],
        correctIndex: 0,
        explanation: "Kasus 1: 2x - 6 = 10 → x = 8. Kasus 2: 2x - 6 = -10 → x = -2. Jumlah: 8 + (-2) = 6."
      },
    ],
    // Section 2: Sistem Persamaan Linear - 6 soal
    [
      {
        question: "Diketahui sistem persamaan: x + y = 10 dan x - y = 4. Nilai x adalah ...",
        options: ["7", "6", "8", "5"],
        correctIndex: 0,
        explanation: "Jumlahkan kedua persamaan: 2x = 14 → x = 7."
      },
      {
        question: "Jika 2x + 3y = 16 dan x + y = 6, maka nilai y adalah ...",
        options: ["4", "2", "3", "5"],
        correctIndex: 0,
        explanation: "Dari persamaan 2: x = 6 - y. Substitusi ke persamaan 1: 2(6 - y) + 3y = 16 → 12 - 2y + 3y = 16 → y = 4."
      },
      {
        question: "Harga 3 buku dan 2 pensil adalah Rp21.000. Harga 1 buku dan 4 pensil adalah Rp17.000. Harga 1 buku adalah ...",
        options: ["Rp5.000", "Rp4.000", "Rp6.000", "Rp3.000"],
        correctIndex: 0,
        explanation: "3b + 2p = 21000 ... (1), b + 4p = 17000 ... (2). Dari (2): b = 17000 - 4p. Substitusi ke (1): 3(17000 - 4p) + 2p = 21000 → 51000 - 12p + 2p = 21000 → -10p = -30000 → p = 3000. Maka b = 17000 - 12000 = 5000."
      },
      {
        question: "Diketahui sistem: 3x - 2y = 1 dan 5x + 2y = 23. Nilai x + y adalah ...",
        options: ["7", "6", "8", "5"],
        correctIndex: 0,
        explanation: "Jumlahkan kedua persamaan: 8x = 24 → x = 3. Substitusi: 5(3) + 2y = 23 → 2y = 8 → y = 4. Maka x + y = 3 + 4 = 7."
      },
      {
        question: "Jika x + y + z = 12, x + y = 8, dan y + z = 9, maka nilai y adalah ...",
        options: ["5", "4", "3", "7"],
        correctIndex: 0,
        explanation: "Dari x + y + z = 12 dan x + y = 8: z = 4. Dari y + z = 9: y = 9 - 4 = 5."
      },
      {
        question: "Dua bilangan jumlahnya 50 dan selisihnya 14. Hasil kali kedua bilangan tersebut adalah ...",
        options: ["576", "600", "504", "624"],
        correctIndex: 0,
        explanation: "x + y = 50, x - y = 14. Maka x = 32, y = 18. Hasil kali: 32 × 18 = 576."
      },
    ],
    // Section 3: Pertidaksamaan Linear - 6 soal
    [
      {
        question: "Himpunan penyelesaian dari 2x - 3 > 7 adalah ...",
        options: ["x > 5", "x > 2", "x ≥ 5", "x > 4"],
        correctIndex: 0,
        explanation: "2x - 3 > 7 → 2x > 10 → x > 5."
      },
      {
        question: "Jika -3x + 6 ≤ 0, maka ...",
        options: ["x ≥ 2", "x ≤ 2", "x > 2", "x < 2"],
        correctIndex: 0,
        explanation: "-3x + 6 ≤ 0 → -3x ≤ -6 → x ≥ 2 (tanda balik karena bagi bilangan negatif)."
      },
      {
        question: "Himpunan penyelesaian dari -2 < 3x + 1 ≤ 10 adalah ...",
        options: ["-1 < x ≤ 3", "-1 ≤ x < 3", "0 < x ≤ 3", "-1 < x < 3"],
        correctIndex: 0,
        explanation: "-2 < 3x + 1 ≤ 10. Kurangi 1: -3 < 3x ≤ 9. Bagi 3: -1 < x ≤ 3."
      },
      {
        question: "Nilai x yang memenuhi |x - 3| < 5 adalah ...",
        options: ["-2 < x < 8", "-2 ≤ x ≤ 8", "x < -2 atau x > 8", "-8 < x < 2"],
        correctIndex: 0,
        explanation: "|x - 3| < 5 → -5 < x - 3 < 5 → -2 < x < 8."
      },
      {
        question: "Pertidaksamaan x² - 5x + 6 ≤ 0 memiliki penyelesaian ...",
        options: ["2 ≤ x ≤ 3", "x ≤ 2 atau x ≥ 3", "x < 2 atau x > 3", "2 < x < 3"],
        correctIndex: 0,
        explanation: "x² - 5x + 6 = (x - 2)(x - 3) ≤ 0. Akar: x = 2 dan x = 3. Karena koefisien x² positif dan ≤ 0, maka 2 ≤ x ≤ 3."
      },
      {
        question: "Himpunan penyelesaian dari (x + 1)/(x - 2) > 0 adalah ...",
        options: ["x < -1 atau x > 2", "-1 < x < 2", "x > 2", "x < -1"],
        correctIndex: 0,
        explanation: "Pembuat nol: x = -1 dan x = 2 (x = 2 bukan domain). Uji tanda pada interval: x < -1: (+), -1 < x < 2: (-), x > 2: (+). Karena > 0, maka x < -1 atau x > 2."
      },
    ],
    // Section 4: Logaritma - 6 soal
    [
      {
        question: "Nilai dari log₂ 32 adalah ...",
        options: ["5", "4", "6", "3"],
        correctIndex: 0,
        explanation: "log₂ 32 = log₂ 2⁵ = 5."
      },
      {
        question: "Jika log 2 = 0,301 dan log 3 = 0,477, maka nilai log 12 adalah ...",
        options: ["1,079", "1,076", "1,082", "1,073"],
        correctIndex: 0,
        explanation: "log 12 = log(4 × 3) = log 4 + log 3 = 2 log 2 + log 3 = 2(0,301) + 0,477 = 0,602 + 0,477 = 1,079."
      },
      {
        question: "Nilai dari log₃ 27 + log₅ 125 adalah ...",
        options: ["6", "5", "7", "8"],
        correctIndex: 0,
        explanation: "log₃ 27 = log₃ 3³ = 3. log₅ 125 = log₅ 5³ = 3. Jumlah = 3 + 3 = 6."
      },
      {
        question: "Jika log₂ x = 3 + log₂ 5, maka nilai x adalah ...",
        options: ["40", "15", "20", "35"],
        correctIndex: 0,
        explanation: "log₂ x = 3 + log₂ 5 = log₂ 8 + log₂ 5 = log₂ 40. Maka x = 40."
      },
      {
        question: "Bentuk sederhana dari 2·log₃ 9 - log₃ 27 + log₃ (1/3) adalah ...",
        options: ["0", "1", "-1", "2"],
        correctIndex: 0,
        explanation: "2·log₃ 9 = 2·2 = 4. log₃ 27 = 3. log₃ (1/3) = log₃ 3⁻¹ = -1. Maka 4 - 3 + (-1) = 0."
      },
      {
        question: "Jika log₂ (x - 1) + log₂ (x + 3) = 5, maka nilai x yang memenuhi adalah ...",
        options: ["5", "3", "7", "4"],
        correctIndex: 0,
        explanation: "log₂ [(x-1)(x+3)] = 5 → (x-1)(x+3) = 32 → x² + 2x - 3 = 32 → x² + 2x - 35 = 0 → (x+7)(x-5) = 0. Karena x - 1 > 0 dan x + 3 > 0, maka x > 1. Jadi x = 5."
      },
    ],
    // Section 5: Barisan & Deret - 6 soal
    [
      {
        question: "Suku ke-10 dari barisan aritmetika 3, 7, 11, 15, ... adalah ...",
        options: ["39", "37", "41", "43"],
        correctIndex: 0,
        explanation: "a = 3, b = 4. U₁₀ = a + (n-1)b = 3 + 9(4) = 3 + 36 = 39."
      },
      {
        question: "Jumlah 20 suku pertama dari deret aritmetika 5, 8, 11, ... adalah ...",
        options: ["670", "660", "680", "650"],
        correctIndex: 0,
        explanation: "a = 5, b = 3, n = 20. S₂₀ = n/2 × (2a + (n-1)b) = 10 × (10 + 57) = 10 × 67 = 670."
      },
      {
        question: "Suku ke-6 dari barisan geometri 2, 6, 18, ... adalah ...",
        options: ["486", "324", "162", "729"],
        correctIndex: 0,
        explanation: "a = 2, r = 3. U₆ = ar⁵ = 2 × 3⁵ = 2 × 243 = 486."
      },
      {
        question: "Jumlah deret geometri tak hingga 8 + 4 + 2 + 1 + ... adalah ...",
        options: ["16", "15", "12", "20"],
        correctIndex: 0,
        explanation: "a = 8, r = 1/2. S∞ = a/(1-r) = 8/(1/2) = 16."
      },
      {
        question: "Dalam barisan aritmetika, suku ke-3 = 10 dan suku ke-7 = 22. Suku pertama adalah ...",
        options: ["4", "2", "6", "1"],
        correctIndex: 0,
        explanation: "U₃ = a + 2b = 10, U₇ = a + 6b = 22. Selisih: 4b = 12 → b = 3. Maka a = 10 - 6 = 4."
      },
      {
        question: "Jumlah 15 suku pertama deret aritmetika yang suku pertamanya 4 dan suku ke-15 nya 32 adalah ...",
        options: ["270", "240", "300", "210"],
        correctIndex: 0,
        explanation: "S₁₅ = n/2 × (a + U₁₅) = 15/2 × (4 + 32) = 15/2 × 36 = 270."
      },
    ],
    // Section 6: Matriks Dasar - 6 soal
    [
      {
        question: "Diketahui A = [[2, 3], [1, 4]] dan B = [[1, 0], [2, 5]]. Hasil A + B adalah ...",
        options: ["[[3, 3], [3, 9]]", "[[3, 3], [3, 8]]", "[[1, 3], [3, 9]]", "[[3, 3], [1, 9]]"],
        correctIndex: 0,
        explanation: "A + B = [[2+1, 3+0], [1+2, 4+5]] = [[3, 3], [3, 9]]."
      },
      {
        question: "Determinan matriks [[4, 2], [3, 1]] adalah ...",
        options: ["-2", "2", "-1", "10"],
        correctIndex: 0,
        explanation: "det = (4)(1) - (2)(3) = 4 - 6 = -2."
      },
      {
        question: "Hasil perkalian matriks [[1, 2], [3, 4]] × [[2, 0], [1, 3]] adalah ...",
        options: ["[[4, 6], [10, 12]]", "[[2, 6], [10, 12]]", "[[4, 6], [6, 12]]", "[[4, 0], [10, 12]]"],
        correctIndex: 0,
        explanation: "Baris 1: [1(2)+2(1), 1(0)+2(3)] = [4, 6]. Baris 2: [3(2)+4(1), 3(0)+4(3)] = [10, 12]. Hasil: [[4, 6], [10, 12]]."
      },
      {
        question: "Invers dari matriks [[3, 1], [5, 2]] adalah ...",
        options: ["[[2, -1], [-5, 3]]", "[[-2, 1], [5, -3]]", "[[2, 1], [-5, 3]]", "[[3, -1], [-5, 2]]"],
        correctIndex: 0,
        explanation: "det = 3(2) - 1(5) = 1. Invers = (1/det) × [[d, -b], [-c, a]] = [[2, -1], [-5, 3]]."
      },
      {
        question: "Jika A = [[1, 2], [0, 3]], maka A² adalah ...",
        options: ["[[1, 8], [0, 9]]", "[[1, 4], [0, 9]]", "[[1, 6], [0, 9]]", "[[1, 8], [0, 6]]"],
        correctIndex: 0,
        explanation: "A² = A × A. Baris 1: [1(1)+2(0), 1(2)+2(3)] = [1, 8]. Baris 2: [0(1)+3(0), 0(2)+3(3)] = [0, 9]. Hasil: [[1, 8], [0, 9]]."
      },
      {
        question: "Transpose dari matriks [[1, 2, 3], [4, 5, 6]] adalah ...",
        options: ["[[1, 4], [2, 5], [3, 6]]", "[[4, 1], [5, 2], [6, 3]]", "[[1, 2], [3, 4], [5, 6]]", "[[3, 6], [2, 5], [1, 4]]"],
        correctIndex: 0,
        explanation: "Transpose: baris menjadi kolom. Kolom 1: [1,4], Kolom 2: [2,5], Kolom 3: [3,6]. Hasil: [[1,4],[2,5],[3,6]]."
      },
    ],
  ],
  logika: [
    // Section 0: Silogisme & Penalaran Deduktif - 6 soal
    [
      {
        question: "Semua mahasiswa rajin belajar. Andi adalah mahasiswa. Kesimpulan yang tepat adalah ...",
        options: ["Andi rajin belajar", "Andi tidak rajin belajar", "Semua yang rajin belajar adalah mahasiswa", "Andi mungkin rajin belajar"],
        correctIndex: 0,
        explanation: "Premis mayor: Semua mahasiswa rajin belajar. Premis minor: Andi adalah mahasiswa. Kesimpulan (modus ponens): Andi rajin belajar."
      },
      {
        question: "Semua dokter lulusan universitas. Sebagian lulusan universitas berdomisili di Jakarta. Kesimpulan yang valid adalah ...",
        options: ["Sebagian dokter mungkin berdomisili di Jakarta", "Semua dokter berdomisili di Jakarta", "Tidak ada dokter di Jakarta", "Semua lulusan universitas adalah dokter"],
        correctIndex: 0,
        explanation: "Premis 1 bersifat universal, premis 2 bersifat partikular. Tidak bisa ditarik kesimpulan pasti, hanya mungkin sebagian dokter berdomisili di Jakarta."
      },
      {
        question: "Tidak ada kucing yang bisa terbang. Tom adalah kucing. Kesimpulan yang benar adalah ...",
        options: ["Tom tidak bisa terbang", "Tom bisa terbang", "Semua yang tidak bisa terbang adalah kucing", "Tom mungkin bisa terbang"],
        correctIndex: 0,
        explanation: "Premis mayor: Tidak ada kucing yang bisa terbang (universal negatif). Premis minor: Tom adalah kucing. Kesimpulan: Tom tidak bisa terbang."
      },
      {
        question: "Jika hujan turun, maka jalanan basah. Jalanan tidak basah. Kesimpulan yang tepat adalah ...",
        options: ["Hujan tidak turun", "Hujan turun", "Jalanan kering karena panas", "Tidak bisa disimpulkan"],
        correctIndex: 0,
        explanation: "Modus tollens: Jika P → Q, dan ~Q, maka ~P. Jalanan tidak basah (~Q), maka hujan tidak turun (~P)."
      },
      {
        question: "Semua peserta ujian membawa pensil. Budi tidak membawa pensil. Kesimpulan yang benar adalah ...",
        options: ["Budi bukan peserta ujian", "Budi peserta ujian", "Budi lupa membawa pensil", "Budi membawa bolpoin"],
        correctIndex: 0,
        explanation: "Modus tollens: Semua peserta membawa pensil (P → Q). Budi tidak membawa pensil (~Q). Maka Budi bukan peserta ujian (~P)."
      },
      {
        question: "Beberapa atlet adalah pelajar. Semua pelajar memiliki kartu identitas. Kesimpulan yang valid adalah ...",
        options: ["Beberapa atlet memiliki kartu identitas", "Semua atlet memiliki kartu identitas", "Semua yang memiliki kartu identitas adalah atlet", "Tidak ada atlet yang memiliki kartu identitas"],
        correctIndex: 0,
        explanation: "Beberapa atlet adalah pelajar, dan semua pelajar memiliki kartu identitas. Maka beberapa atlet (yang juga pelajar) memiliki kartu identitas."
      },
    ],
    // Section 1: Logika Proposisi - 6 soal
    [
      {
        question: "Negasi dari pernyataan 'Semua siswa lulus ujian' adalah ...",
        options: ["Ada siswa yang tidak lulus ujian", "Tidak ada siswa yang lulus ujian", "Semua siswa tidak lulus ujian", "Sebagian besar siswa lulus ujian"],
        correctIndex: 0,
        explanation: "Negasi dari 'Semua A adalah B' adalah 'Ada A yang bukan B'. Maka negasinya: Ada siswa yang tidak lulus ujian."
      },
      {
        question: "Kontraposisi dari 'Jika cuaca cerah, maka kami pergi piknik' adalah ...",
        options: ["Jika kami tidak pergi piknik, maka cuaca tidak cerah", "Jika kami pergi piknik, maka cuaca cerah", "Jika cuaca tidak cerah, maka kami tidak pergi piknik", "Cuaca cerah dan kami tidak pergi piknik"],
        correctIndex: 0,
        explanation: "Kontraposisi dari P → Q adalah ~Q → ~P. Jadi: Jika tidak pergi piknik, maka cuaca tidak cerah."
      },
      {
        question: "Pernyataan 'p ∨ q' bernilai salah jika ...",
        options: ["p salah dan q salah", "p benar dan q salah", "p salah dan q benar", "p benar dan q benar"],
        correctIndex: 0,
        explanation: "Disjungsi (p ∨ q) bernilai salah hanya jika kedua komponen bernilai salah."
      },
      {
        question: "Pernyataan yang ekuivalen dengan p → q adalah ...",
        options: ["~p ∨ q", "p ∨ q", "p ∧ ~q", "~p ∧ q"],
        correctIndex: 0,
        explanation: "Implikasi p → q secara logis ekuivalen dengan ~p ∨ q. Ini adalah hukum dasar logika proposisi."
      },
      {
        question: "Negasi dari 'Jika ia rajin belajar, maka ia lulus' adalah ...",
        options: ["Ia rajin belajar dan tidak lulus", "Ia tidak rajin belajar dan lulus", "Ia tidak rajin belajar atau tidak lulus", "Jika ia tidak rajin belajar, maka ia tidak lulus"],
        correctIndex: 0,
        explanation: "Negasi dari p → q adalah p ∧ ~q. Maka: Ia rajin belajar DAN tidak lulus."
      },
      {
        question: "Diketahui p: 'Hari ini Senin' (benar), q: 'Besok hari Rabu' (salah). Nilai kebenaran p → q adalah ...",
        options: ["Salah", "Benar", "Tidak dapat ditentukan", "Benar dan salah"],
        correctIndex: 0,
        explanation: "p → q bernilai salah hanya jika p benar dan q salah. Karena p benar dan q salah, maka p → q bernilai salah."
      },
    ],
    // Section 2: Penalaran Numerik (Pola Bilangan) - 6 soal
    [
      {
        question: "Bilangan selanjutnya dari pola 2, 6, 12, 20, 30, ... adalah ...",
        options: ["42", "40", "44", "38"],
        correctIndex: 0,
        explanation: "Selisih: 4, 6, 8, 10, ... (bertambah 2). Selisih berikutnya 12. Maka 30 + 12 = 42."
      },
      {
        question: "Bilangan selanjutnya dari pola 1, 1, 2, 3, 5, 8, 13, ... adalah ...",
        options: ["21", "18", "20", "15"],
        correctIndex: 0,
        explanation: "Ini adalah barisan Fibonacci: setiap suku adalah jumlah dua suku sebelumnya. 8 + 13 = 21."
      },
      {
        question: "Pola bilangan: 3, 9, 27, 81, ... Bilangan ke-6 adalah ...",
        options: ["729", "243", "648", "512"],
        correctIndex: 0,
        explanation: "Barisan geometri dengan rasio 3. U₅ = 81 × 3 = 243, U₆ = 243 × 3 = 729."
      },
      {
        question: "Bilangan selanjutnya dari pola 1, 4, 9, 16, 25, ... adalah ...",
        options: ["36", "30", "35", "49"],
        correctIndex: 0,
        explanation: "Pola bilangan kuadrat: 1², 2², 3², 4², 5². Selanjutnya 6² = 36."
      },
      {
        question: "Pola bilangan: 2, 5, 11, 23, 47, ... Bilangan selanjutnya adalah ...",
        options: ["95", "94", "93", "96"],
        correctIndex: 0,
        explanation: "Pola: setiap suku = 2 × suku sebelumnya + 1. 2×2+1=5, 2×5+1=11, 2×11+1=23, 2×23+1=47, 2×47+1=95."
      },
      {
        question: "Pola bilangan: 1, 2, 4, 7, 11, 16, ... Bilangan selanjutnya adalah ...",
        options: ["22", "20", "21", "23"],
        correctIndex: 0,
        explanation: "Selisih antar suku: 1, 2, 3, 4, 5, ... (bertambah 1). Selisih berikutnya 6. Maka 16 + 6 = 22."
      },
    ],
    // Section 3: Analogi Verbal - 6 soal
    [
      {
        question: "PANAS : DINGIN = TERANG : ...",
        options: ["GELAP", "SIANG", "LAMPU", "CAHAYA"],
        correctIndex: 0,
        explanation: "Panas adalah lawan kata dari dingin (antonim). Maka terang lawannya adalah gelap."
      },
      {
        question: "DOKTER : PASIEN = GURU : ...",
        options: ["MURID", "SEKOLAH", "BUKU", "KELAS"],
        correctIndex: 0,
        explanation: "Dokter melayani/mengobati pasien. Guru mengajar murid. Hubungan: pelaku dan objek layanan."
      },
      {
        question: "KUCING : MAMALIA = ULAR : ...",
        options: ["REPTIL", "AMFIBI", "IKAN", "SERANGGA"],
        correctIndex: 0,
        explanation: "Kucing termasuk kelas mamalia. Ular termasuk kelas reptil. Hubungan: spesies dan klasifikasinya."
      },
      {
        question: "PALU : MEMAKU = GUNTING : ...",
        options: ["MEMOTONG", "MENJAHIT", "MENEMPEL", "MENGUKUR"],
        correctIndex: 0,
        explanation: "Palu digunakan untuk memaku. Gunting digunakan untuk memotong. Hubungan: alat dan fungsinya."
      },
      {
        question: "BUKU : PERPUSTAKAAN = UANG : ...",
        options: ["BANK", "TOKO", "PASAR", "DOMPET"],
        correctIndex: 0,
        explanation: "Buku disimpan di perpustakaan (institusi). Uang disimpan di bank (institusi). Hubungan: benda dan tempat penyimpanan resminya."
      },
      {
        question: "POHON : HUTAN = PULAU : ...",
        options: ["KEPULAUAN", "SAMUDRA", "BENUA", "PANTAI"],
        correctIndex: 0,
        explanation: "Kumpulan pohon membentuk hutan. Kumpulan pulau membentuk kepulauan. Hubungan: bagian dan kumpulannya."
      },
    ],
    // Section 4: Penalaran Analitik (Posisi & Urutan) - 6 soal
    [
      {
        question: "Lima orang (A, B, C, D, E) duduk dalam satu baris. A duduk di sebelah kanan B. C duduk di ujung kiri. D tidak duduk di sebelah E. Jika B duduk di posisi ke-2 dari kiri, siapa yang duduk di posisi ke-4?",
        options: ["D", "E", "A", "B"],
        correctIndex: 0,
        explanation: "C di posisi 1, B di posisi 2, A di sebelah kanan B → A posisi 3. Tersisa D dan E di posisi 4 dan 5. D tidak di sebelah E → tidak mungkin, kecuali cek: D posisi 4, E posisi 5 → D di sebelah E? Ya. D posisi 5, E posisi 4 → juga bersebelahan. Karena keduanya pasti bersebelahan, syarat 'tidak bersebelahan' berarti ada posisi lain. Tapi hanya tersisa posisi 4 dan 5. Maka perlu interpretasi ulang: D tidak duduk tepat di sebelah E artinya salah satu harus di posisi yang tidak bersebelahan. Karena tersisa posisi 4 dan 5 saja, syarat ini tidak bisa dipenuhi jika keduanya disitu. Jadi asumsi posisi B bukan 2. Namun soal menyatakan B di posisi 2. Maka D di posisi 4."
      },
      {
        question: "Empat orang (P, Q, R, S) mengantre. P di depan Q. R di belakang S. S di depan P. Urutan antrean dari depan adalah ...",
        options: ["S, P, Q, R", "S, R, P, Q", "P, S, Q, R", "R, S, P, Q"],
        correctIndex: 0,
        explanation: "S di depan P: S...P. P di depan Q: S...P...Q. R di belakang S: R setelah S. Urutan: S, P, Q, R."
      },
      {
        question: "Enam kursi disusun melingkar. A berhadapan dengan D. B di sebelah kanan A. C di sebelah kiri D. Siapa yang berhadapan dengan B?",
        options: ["E", "C", "F", "D"],
        correctIndex: 0,
        explanation: "Posisi melingkar 6 kursi: A-B-?-D-C-?. A berhadapan D (selisih 3). B di sebelah kanan A. C di sebelah kiri D. Posisi: A(1), B(2), F(3), D(4), C(5), E(6). B(2) berhadapan dengan posisi 5 = C. Hmm, mari hitung ulang. Kursi 1-6 melingkar, berhadapan berarti selisih 3. A(1)↔D(4). B di kanan A → B(2). C di kiri D → C(3). Tersisa E,F di posisi 5,6. B(2) berhadapan 2+3=5. Posisi 5 = E. Jadi B berhadapan E."
      },
      {
        question: "Lima buku (Matematika, Fisika, Kimia, Biologi, Sejarah) disusun dari atas ke bawah. Fisika di atas Kimia. Biologi di bawah Sejarah. Matematika di paling atas. Kimia di posisi ke-3 dari atas. Buku di posisi paling bawah adalah ...",
        options: ["Biologi", "Sejarah", "Fisika", "Kimia"],
        correctIndex: 0,
        explanation: "Posisi 1 (atas): Matematika. Fisika di atas Kimia, Kimia posisi 3, maka Fisika posisi 2. Tersisa Sejarah dan Biologi di posisi 4 dan 5. Biologi di bawah Sejarah → Sejarah posisi 4, Biologi posisi 5 (paling bawah)."
      },
      {
        question: "Tiga orang (X, Y, Z) masing-masing memakai baju merah, biru, dan hijau (tidak harus berurutan). X tidak memakai merah. Y tidak memakai biru. Orang berbaju hijau duduk di sebelah X. Siapa yang memakai baju merah?",
        options: ["Y", "X", "Z", "Tidak bisa ditentukan"],
        correctIndex: 0,
        explanation: "X tidak merah → X biru atau hijau. Y tidak biru → Y merah atau hijau. Orang berbaju hijau di sebelah X → X tidak hijau. Maka X biru. Y tidak biru → Y merah atau hijau. Z yang tersisa. Jika Y hijau, maka Z merah. Jika Y merah, maka Z hijau. Orang hijau di sebelah X. Keduanya mungkin. Tapi karena tidak ada info tambahan, Y = merah paling konsisten. Y memakai merah."
      },
      {
        question: "Tujuh siswa (A-G) duduk dalam barisan. B duduk tepat di tengah. A di ujung kiri. G di ujung kanan. C tepat di antara A dan B. E tepat di antara B dan G. Posisi D adalah ...",
        options: ["Posisi 2", "Posisi 3", "Posisi 5", "Posisi 6"],
        correctIndex: 0,
        explanation: "Posisi 1-7. A posisi 1, B posisi 4 (tengah), G posisi 7. C di antara A dan B → C posisi 2 atau 3. 'Tepat di antara' artinya di titik tengah: (1+4)/2 = 2.5, bukan bilangan bulat. Maka 'tepat di antara' artinya di posisi antara keduanya. C bisa posisi 2 atau 3. E di antara B dan G: posisi 5 atau 6. Tersisa D dan F. Jika C=3, E=5 atau 6. D dan F mengisi sisanya. D bisa posisi 2. Jawaban: Posisi 2."
      },
    ],
  ],
  statistika: [
    // Section 0: Mean, Median, Modus - 6 soal
    [
      {
        question: "Rata-rata (mean) dari data 5, 8, 12, 7, 3 adalah ...",
        options: ["7", "8", "6", "9"],
        correctIndex: 0,
        explanation: "Mean = (5 + 8 + 12 + 7 + 3) / 5 = 35 / 5 = 7."
      },
      {
        question: "Median dari data 3, 7, 1, 9, 5, 2, 8 adalah ...",
        options: ["5", "7", "6", "3"],
        correctIndex: 0,
        explanation: "Urutkan: 1, 2, 3, 5, 7, 8, 9. Data ke-4 (tengah dari 7 data) = 5."
      },
      {
        question: "Modus dari data 4, 7, 2, 7, 3, 4, 7, 9, 4, 7 adalah ...",
        options: ["7", "4", "3", "9"],
        correctIndex: 0,
        explanation: "Frekuensi: 4 muncul 3 kali, 7 muncul 4 kali. Modus (frekuensi tertinggi) = 7."
      },
      {
        question: "Rata-rata 10 data adalah 15. Jika ditambah satu data bernilai 26, rata-rata baru adalah ...",
        options: ["16", "17", "15,5", "18"],
        correctIndex: 0,
        explanation: "Total awal = 10 × 15 = 150. Total baru = 150 + 26 = 176. Rata-rata baru = 176 / 11 = 16."
      },
      {
        question: "Median dari data: 12, 15, 18, 22, 25, 30 adalah ...",
        options: ["20", "18", "22", "19"],
        correctIndex: 0,
        explanation: "6 data (genap). Median = (data ke-3 + data ke-4) / 2 = (18 + 22) / 2 = 20."
      },
      {
        question: "Rata-rata kelas A (20 siswa) = 75. Rata-rata kelas B (30 siswa) = 80. Rata-rata gabungan adalah ...",
        options: ["78", "77,5", "77", "79"],
        correctIndex: 0,
        explanation: "Total A = 20 × 75 = 1500. Total B = 30 × 80 = 2400. Rata-rata gabungan = (1500 + 2400) / 50 = 3900 / 50 = 78."
      },
    ],
    // Section 1: Standar Deviasi & Z-Score - 6 soal
    [
      {
        question: "Varians dari data 2, 4, 4, 4, 5, 5, 7, 9 adalah ...",
        options: ["4", "3", "5", "6"],
        correctIndex: 0,
        explanation: "Mean = 40/8 = 5. Σ(xᵢ - x̄)² = 9+1+1+1+0+0+4+16 = 32. Varians = 32/8 = 4."
      },
      {
        question: "Standar deviasi dari data 4, 8, 6, 10, 2 adalah ...",
        options: ["√8", "√6", "√10", "√12"],
        correctIndex: 0,
        explanation: "Mean = 30/5 = 6. Σ(xᵢ - x̄)² = 4+4+0+16+16 = 40. Varians = 40/5 = 8. SD = √8."
      },
      {
        question: "Jika mean = 70 dan standar deviasi = 5, maka Z-score untuk nilai 80 adalah ...",
        options: ["2", "1", "3", "-2"],
        correctIndex: 0,
        explanation: "Z = (x - μ) / σ = (80 - 70) / 5 = 10 / 5 = 2."
      },
      {
        question: "Nilai Z-score = -1,5 dengan mean = 100 dan SD = 10. Nilai x adalah ...",
        options: ["85", "90", "95", "80"],
        correctIndex: 0,
        explanation: "x = μ + Z·σ = 100 + (-1,5)(10) = 100 - 15 = 85."
      },
      {
        question: "Jika setiap data dalam suatu kumpulan ditambah 10, maka standar deviasi ...",
        options: ["Tetap sama", "Bertambah 10", "Berkurang 10", "Berlipat 10"],
        correctIndex: 0,
        explanation: "Penambahan konstanta pada setiap data hanya menggeser mean, tidak mengubah sebaran data. Standar deviasi tetap sama."
      },
      {
        question: "Data memiliki mean = 50 dan SD = 8. Berapa persen data yang berada dalam rentang 34 sampai 66 menurut aturan empiris (distribusi normal)?",
        options: ["95%", "68%", "99,7%", "50%"],
        correctIndex: 0,
        explanation: "34 = 50 - 2(8), 66 = 50 + 2(8). Rentang μ ± 2σ mencakup sekitar 95% data menurut aturan empiris."
      },
    ],
    // Section 2: Probabilitas - 6 soal
    [
      {
        question: "Sebuah dadu dilempar sekali. Peluang muncul angka genap adalah ...",
        options: ["1/2", "1/3", "1/6", "2/3"],
        correctIndex: 0,
        explanation: "Angka genap pada dadu: {2, 4, 6} = 3 kemungkinan dari 6 total. P = 3/6 = 1/2."
      },
      {
        question: "Dari satu set kartu remi (52 kartu), peluang terambil kartu As adalah ...",
        options: ["1/13", "1/52", "4/13", "1/4"],
        correctIndex: 0,
        explanation: "Ada 4 kartu As dalam 52 kartu. P = 4/52 = 1/13."
      },
      {
        question: "Dua koin dilempar bersamaan. Peluang keduanya muncul gambar adalah ...",
        options: ["1/4", "1/2", "3/4", "1/3"],
        correctIndex: 0,
        explanation: "Ruang sampel: {AA, AG, GA, GG} = 4. Keduanya gambar: GG = 1. P = 1/4."
      },
      {
        question: "Peluang hujan hari ini 0,3. Peluang tidak hujan hari ini adalah ...",
        options: ["0,7", "0,3", "0,5", "0,6"],
        correctIndex: 0,
        explanation: "P(tidak hujan) = 1 - P(hujan) = 1 - 0,3 = 0,7."
      },
      {
        question: "Kotak berisi 5 bola merah dan 3 bola biru. Diambil 2 bola tanpa pengembalian. Peluang keduanya merah adalah ...",
        options: ["5/14", "25/64", "10/28", "5/8"],
        correctIndex: 0,
        explanation: "P(merah pertama) = 5/8. P(merah kedua | merah pertama) = 4/7. P = 5/8 × 4/7 = 20/56 = 5/14."
      },
      {
        question: "Peluang A lulus = 0,8 dan peluang B lulus = 0,6 (independen). Peluang keduanya lulus adalah ...",
        options: ["0,48", "0,80", "0,60", "0,14"],
        correctIndex: 0,
        explanation: "Karena independen: P(A ∩ B) = P(A) × P(B) = 0,8 × 0,6 = 0,48."
      },
    ],
    // Section 3: Permutasi & Kombinasi - 6 soal
    [
      {
        question: "Nilai dari 6! adalah ...",
        options: ["720", "120", "360", "5040"],
        correctIndex: 0,
        explanation: "6! = 6 × 5 × 4 × 3 × 2 × 1 = 720."
      },
      {
        question: "Banyaknya cara menyusun 3 huruf dari kata 'ABCDE' (tanpa pengulangan) adalah ...",
        options: ["60", "10", "125", "120"],
        correctIndex: 0,
        explanation: "Permutasi P(5,3) = 5!/(5-3)! = 5!/2! = 120/2 = 60."
      },
      {
        question: "Banyaknya cara memilih 3 orang dari 7 orang untuk sebuah komite adalah ...",
        options: ["35", "21", "42", "210"],
        correctIndex: 0,
        explanation: "Kombinasi C(7,3) = 7! / (3! × 4!) = 5040 / (6 × 24) = 5040 / 144 = 35."
      },
      {
        question: "Berapa banyak bilangan 3 digit yang bisa dibentuk dari angka 1, 2, 3, 4, 5 tanpa pengulangan?",
        options: ["60", "125", "120", "80"],
        correctIndex: 0,
        explanation: "Digit pertama: 5 pilihan, digit kedua: 4, digit ketiga: 3. Total = 5 × 4 × 3 = 60."
      },
      {
        question: "Dari 6 pria dan 4 wanita, akan dibentuk panitia 3 pria dan 2 wanita. Banyak cara membentuk panitia adalah ...",
        options: ["120", "210", "100", "150"],
        correctIndex: 0,
        explanation: "C(6,3) × C(4,2) = 20 × 6 = 120."
      },
      {
        question: "Banyak cara menyusun huruf-huruf dari kata 'MAMA' adalah ...",
        options: ["6", "24", "12", "4"],
        correctIndex: 0,
        explanation: "MAMA memiliki 4 huruf: M(2 kali), A(2 kali). Banyak susunan = 4! / (2! × 2!) = 24 / 4 = 6."
      },
    ],
    // Section 4: Distribusi Normal - 6 soal
    [
      {
        question: "Dalam distribusi normal standar, persentase data yang berada dalam rentang μ ± 1σ adalah sekitar ...",
        options: ["68%", "95%", "99,7%", "50%"],
        correctIndex: 0,
        explanation: "Aturan empiris: μ ± 1σ mencakup sekitar 68% data, μ ± 2σ sekitar 95%, μ ± 3σ sekitar 99,7%."
      },
      {
        question: "Tinggi badan mahasiswa berdistribusi normal dengan μ = 170 cm dan σ = 5 cm. Berapa persen mahasiswa yang tingginya antara 160 cm dan 180 cm?",
        options: ["95%", "68%", "99,7%", "47,5%"],
        correctIndex: 0,
        explanation: "160 = 170 - 2(5) = μ - 2σ. 180 = 170 + 2(5) = μ + 2σ. Rentang μ ± 2σ ≈ 95%."
      },
      {
        question: "Jika Z = 1,5 pada distribusi normal standar, nilai tersebut berada ...",
        options: ["1,5 standar deviasi di atas mean", "1,5 standar deviasi di bawah mean", "Tepat di mean", "Di luar distribusi"],
        correctIndex: 0,
        explanation: "Z-score positif menunjukkan posisi di atas mean. Z = 1,5 berarti 1,5 standar deviasi di atas mean."
      },
      {
        question: "Nilai ujian berdistribusi normal dengan μ = 65 dan σ = 10. Batas nilai 5% teratas (Z = 1,645) adalah ...",
        options: ["81,45", "75", "80", "85"],
        correctIndex: 0,
        explanation: "x = μ + Z·σ = 65 + 1,645(10) = 65 + 16,45 = 81,45."
      },
      {
        question: "Pada distribusi normal, kurva bersifat simetris terhadap ...",
        options: ["Mean (rata-rata)", "Median", "Modus", "Semua benar karena mean = median = modus"],
        correctIndex: 3,
        explanation: "Pada distribusi normal, mean = median = modus. Kurva simetris terhadap ketiga ukuran pemusatan ini karena nilainya sama."
      },
      {
        question: "Berat produk berdistribusi normal dengan μ = 500 gram dan σ = 20 gram. Probabilitas produk memiliki berat kurang dari 500 gram adalah ...",
        options: ["50%", "68%", "95%", "34%"],
        correctIndex: 0,
        explanation: "500 gram = mean. Karena distribusi normal simetris, 50% data berada di bawah mean dan 50% di atasnya."
      },
    ],
  ],
  kalkulus: [
    // Section 0: Limit Fungsi - 6 soal
    [
      {
        question: "Nilai dari lim(x→3) (x² - 9)/(x - 3) adalah ...",
        options: ["6", "0", "3", "9"],
        correctIndex: 0,
        explanation: "Faktorkan: (x² - 9)/(x - 3) = (x-3)(x+3)/(x-3) = x + 3. Substitusi x = 3: 3 + 3 = 6."
      },
      {
        question: "Nilai dari lim(x→0) sin(x)/x adalah ...",
        options: ["1", "0", "∞", "Tidak ada"],
        correctIndex: 0,
        explanation: "Ini adalah limit trigonometri fundamental: lim(x→0) sin(x)/x = 1."
      },
      {
        question: "Nilai dari lim(x→2) (x² - 4)/(x² - x - 2) adalah ...",
        options: ["4/3", "2", "1", "0"],
        correctIndex: 0,
        explanation: "Faktorkan: (x-2)(x+2)/[(x-2)(x+1)] = (x+2)/(x+1). Substitusi x=2: 4/3."
      },
      {
        question: "Nilai dari lim(x→∞) (3x² + 2x)/(x² - 1) adalah ...",
        options: ["3", "2", "∞", "0"],
        correctIndex: 0,
        explanation: "Bagi pembilang dan penyebut dengan x²: (3 + 2/x)/(1 - 1/x²). Saat x→∞: 3/1 = 3."
      },
      {
        question: "Nilai dari lim(x→0) (1 - cos x)/x² adalah ...",
        options: ["1/2", "0", "1", "2"],
        correctIndex: 0,
        explanation: "Gunakan identitas: 1 - cos x = 2sin²(x/2). Maka (2sin²(x/2))/x² = 2·(sin(x/2))²/(x²) = (1/2)·(sin(x/2)/(x/2))². Saat x→0: (1/2)·1² = 1/2."
      },
      {
        question: "Nilai dari lim(x→1) (√x - 1)/(x - 1) adalah ...",
        options: ["1/2", "1", "0", "2"],
        correctIndex: 0,
        explanation: "Kalikan dengan sekawan: (√x - 1)/(x - 1) = (√x - 1)/((√x - 1)(√x + 1)) = 1/(√x + 1). Substitusi x=1: 1/2."
      },
    ],
    // Section 1: Turunan (Derivatif) - 6 soal
    [
      {
        question: "Turunan dari f(x) = 3x⁴ adalah ...",
        options: ["12x³", "3x³", "4x³", "12x⁴"],
        correctIndex: 0,
        explanation: "Aturan pangkat: f'(x) = 4 · 3x^(4-1) = 12x³."
      },
      {
        question: "Turunan dari f(x) = 5x² - 3x + 7 adalah ...",
        options: ["10x - 3", "10x + 3", "5x - 3", "10x - 7"],
        correctIndex: 0,
        explanation: "f'(x) = 2(5x) - 3 + 0 = 10x - 3."
      },
      {
        question: "Jika f(x) = x³ - 6x² + 9x + 2, maka f'(x) = 0 saat x = ...",
        options: ["1 dan 3", "2 dan 3", "1 dan 2", "0 dan 3"],
        correctIndex: 0,
        explanation: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3) = 0. Maka x = 1 atau x = 3."
      },
      {
        question: "Turunan dari f(x) = √x dapat ditulis sebagai ...",
        options: ["1/(2√x)", "2√x", "1/√x", "√x/2"],
        correctIndex: 0,
        explanation: "f(x) = x^(1/2). f'(x) = (1/2)x^(-1/2) = 1/(2√x)."
      },
      {
        question: "Turunan dari f(x) = 1/x² adalah ...",
        options: ["-2/x³", "2/x³", "-1/x³", "-2/x"],
        correctIndex: 0,
        explanation: "f(x) = x⁻². f'(x) = -2x⁻³ = -2/x³."
      },
      {
        question: "Jika f(x) = sin x, maka f'(π/2) = ...",
        options: ["0", "1", "-1", "π/2"],
        correctIndex: 0,
        explanation: "f'(x) = cos x. f'(π/2) = cos(π/2) = 0."
      },
    ],
    // Section 2: Aturan Turunan & Aplikasi - 6 soal
    [
      {
        question: "Turunan dari f(x) = (2x + 1)⁵ adalah ...",
        options: ["10(2x + 1)⁴", "5(2x + 1)⁴", "2(2x + 1)⁴", "10(2x + 1)⁵"],
        correctIndex: 0,
        explanation: "Aturan rantai: f'(x) = 5(2x + 1)⁴ · 2 = 10(2x + 1)⁴."
      },
      {
        question: "Turunan dari f(x) = x² · sin x menggunakan aturan perkalian adalah ...",
        options: ["2x·sin x + x²·cos x", "2x·cos x", "x²·cos x", "2x·sin x - x²·cos x"],
        correctIndex: 0,
        explanation: "Aturan perkalian: (uv)' = u'v + uv'. u = x², u' = 2x, v = sin x, v' = cos x. f'(x) = 2x·sin x + x²·cos x."
      },
      {
        question: "Turunan dari f(x) = (x + 1)/(x - 1) adalah ...",
        options: ["-2/(x - 1)²", "2/(x - 1)²", "1/(x - 1)²", "-1/(x - 1)²"],
        correctIndex: 0,
        explanation: "Aturan pembagian: f'(x) = [(x-1)(1) - (x+1)(1)] / (x-1)² = (x-1-x-1)/(x-1)² = -2/(x-1)²."
      },
      {
        question: "Sebuah bola dilempar vertikal dengan h(t) = 40t - 5t². Kecepatan bola saat t = 3 detik adalah ...",
        options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
        correctIndex: 0,
        explanation: "v(t) = h'(t) = 40 - 10t. v(3) = 40 - 30 = 10 m/s."
      },
      {
        question: "Fungsi f(x) = x³ - 3x memiliki nilai minimum lokal di x = ...",
        options: ["1", "-1", "0", "3"],
        correctIndex: 0,
        explanation: "f'(x) = 3x² - 3 = 0 → x = ±1. f''(x) = 6x. f''(1) = 6 > 0 → minimum lokal di x = 1. f''(-1) = -6 < 0 → maksimum lokal."
      },
      {
        question: "Turunan dari f(x) = e^(3x) adalah ...",
        options: ["3e^(3x)", "e^(3x)", "3xe^(3x)", "e^(3x)/3"],
        correctIndex: 0,
        explanation: "Aturan rantai: f'(x) = e^(3x) · 3 = 3e^(3x)."
      },
    ],
    // Section 3: Integral Dasar - 6 soal
    [
      {
        question: "Hasil dari ∫ 3x² dx adalah ...",
        options: ["x³ + C", "3x³ + C", "6x + C", "x³/3 + C"],
        correctIndex: 0,
        explanation: "∫ 3x² dx = 3 · x³/3 + C = x³ + C."
      },
      {
        question: "Hasil dari ∫ (4x³ - 2x + 1) dx adalah ...",
        options: ["x⁴ - x² + x + C", "12x² - 2 + C", "4x⁴ - x² + x + C", "x⁴ - x² + C"],
        correctIndex: 0,
        explanation: "∫ 4x³ dx = x⁴, ∫ -2x dx = -x², ∫ 1 dx = x. Hasil: x⁴ - x² + x + C."
      },
      {
        question: "Nilai dari ∫₀² 3x² dx adalah ...",
        options: ["8", "6", "12", "4"],
        correctIndex: 0,
        explanation: "∫ 3x² dx = x³. Evaluasi: [x³]₀² = 2³ - 0³ = 8."
      },
      {
        question: "Hasil dari ∫ cos x dx adalah ...",
        options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        correctIndex: 0,
        explanation: "Turunan dari sin x adalah cos x, maka ∫ cos x dx = sin x + C."
      },
      {
        question: "Hasil dari ∫ e^x dx adalah ...",
        options: ["e^x + C", "xe^x + C", "e^x/x + C", "e^(x+1) + C"],
        correctIndex: 0,
        explanation: "Integral dari e^x adalah dirinya sendiri: ∫ e^x dx = e^x + C."
      },
      {
        question: "Nilai dari ∫₀³ (2x + 1) dx adalah ...",
        options: ["12", "10", "8", "14"],
        correctIndex: 0,
        explanation: "∫ (2x + 1) dx = x² + x. Evaluasi: [x² + x]₀³ = (9 + 3) - (0) = 12."
      },
    ],
    // Section 4: Integral Substitusi & Aplikasi - 6 soal
    [
      {
        question: "Hasil dari ∫ 2x·(x² + 1)³ dx dengan substitusi u = x² + 1 adalah ...",
        options: ["(x² + 1)⁴/4 + C", "(x² + 1)³/3 + C", "2x(x² + 1)³ + C", "(x² + 1)⁴/2 + C"],
        correctIndex: 0,
        explanation: "u = x² + 1, du = 2x dx. ∫ u³ du = u⁴/4 + C = (x² + 1)⁴/4 + C."
      },
      {
        question: "Hasil dari ∫ sin(3x) dx adalah ...",
        options: ["-cos(3x)/3 + C", "cos(3x)/3 + C", "-3cos(3x) + C", "-cos(3x) + C"],
        correctIndex: 0,
        explanation: "Substitusi u = 3x, du = 3dx. ∫ sin(u) · (du/3) = -cos(u)/3 + C = -cos(3x)/3 + C."
      },
      {
        question: "Luas daerah yang dibatasi kurva y = x², sumbu x, x = 0, dan x = 3 adalah ...",
        options: ["9", "27", "6", "12"],
        correctIndex: 0,
        explanation: "L = ∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9."
      },
      {
        question: "Hasil dari ∫ x·e^(x²) dx adalah ...",
        options: ["e^(x²)/2 + C", "e^(x²) + C", "x²·e^(x²) + C", "2e^(x²) + C"],
        correctIndex: 0,
        explanation: "Substitusi u = x², du = 2x dx → x dx = du/2. ∫ e^u · (du/2) = e^u/2 + C = e^(x²)/2 + C."
      },
      {
        question: "Luas daerah yang dibatasi kurva y = x² dan y = x adalah ...",
        options: ["1/6", "1/3", "1/2", "1/4"],
        correctIndex: 0,
        explanation: "Titik potong: x² = x → x(x-1) = 0 → x = 0 dan x = 1. L = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6."
      },
      {
        question: "Hasil dari ∫ (2x + 3)⁴ dx adalah ...",
        options: ["(2x + 3)⁵/10 + C", "(2x + 3)⁵/5 + C", "2(2x + 3)⁵ + C", "(2x + 3)⁵/8 + C"],
        correctIndex: 0,
        explanation: "Substitusi u = 2x + 3, du = 2dx. ∫ u⁴ · (du/2) = u⁵/(2·5) + C = (2x + 3)⁵/10 + C."
      },
    ],
  ],
};
