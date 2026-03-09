// Bank soal Matematika — berbasis pola ujian masuk S2 (TPA/SIMAK UI/UM UGM/SBMPTN)
// 20 soal per bab, sistem random 5 soal setiap sesi
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
    {
      id: 'ma6',
      question: "Jika f(x) = 2x² − 3x + 1, maka f(−1) = ...",
      options: ["6", "4", "0", "−4"],
      correctAnswer: 0,
      explanation: "f(−1) = 2(1) − 3(−1) + 1 = 2 + 3 + 1 = 6"
    },
    {
      id: 'ma7',
      question: "Nilai dari √(48) + √(27) − √(75) adalah...",
      options: ["2√3", "√3", "4√3", "3√3"],
      correctAnswer: 0,
      explanation: "√48 = 4√3, √27 = 3√3, √75 = 5√3. Jadi 4√3 + 3√3 − 5√3 = 2√3"
    },
    {
      id: 'ma8',
      question: "Persamaan kuadrat yang akar-akarnya 2 dan −5 adalah...",
      options: ["x² + 3x − 10 = 0", "x² − 3x − 10 = 0", "x² + 3x + 10 = 0", "x² − 3x + 10 = 0"],
      correctAnswer: 0,
      explanation: "Jumlah akar = 2 + (−5) = −3, hasil kali = 2(−5) = −10. PK: x² − (−3)x + (−10) = x² + 3x − 10 = 0"
    },
    {
      id: 'ma9',
      question: "Jika |2x − 5| = 9, maka jumlah semua nilai x yang memenuhi adalah...",
      options: ["5", "7", "−2", "12"],
      correctAnswer: 0,
      explanation: "Kasus 1: 2x − 5 = 9 → x = 7. Kasus 2: 2x − 5 = −9 → x = −2. Jumlah: 7 + (−2) = 5"
    },
    {
      id: 'ma10',
      question: "Diketahui matriks A = [2, 1; 3, 4]. Determinan A adalah...",
      options: ["5", "8", "11", "−5"],
      correctAnswer: 0,
      explanation: "det(A) = (2)(4) − (1)(3) = 8 − 3 = 5"
    },
    {
      id: 'ma11',
      question: "Jika 3^(2x−1) = 81, maka x = ...",
      options: ["2", "2.5", "3", "4"],
      correctAnswer: 1,
      explanation: "81 = 3⁴. Jadi 3^(2x−1) = 3⁴ → 2x − 1 = 4 → 2x = 5 → x = 2,5"
    },
    {
      id: 'ma12',
      question: "Bentuk sederhana dari (x³y²)/(x⁵y) adalah...",
      options: ["y/x²", "x²y", "x²/y", "xy²"],
      correctAnswer: 0,
      explanation: "x³/x⁵ = x⁻² = 1/x², y²/y = y. Hasil = y/x²"
    },
    {
      id: 'ma13',
      question: "Himpunan penyelesaian dari pertidaksamaan 2x − 3 > 5 adalah...",
      options: ["x > 4", "x > 1", "x < 4", "x > 8"],
      correctAnswer: 0,
      explanation: "2x − 3 > 5 → 2x > 8 → x > 4"
    },
    {
      id: 'ma14',
      question: "Jika (x + 2) merupakan faktor dari x³ + ax² − x − 6, maka nilai a adalah...",
      options: ["2", "3", "4", "−3"],
      correctAnswer: 1,
      explanation: "f(−2) = 0: (−8) + 4a − (−1)(−2 + 1 = pada −2: −8 + 4a + 2 − 6 = 0 → 4a − 12 = 0 → a = 3"
    },
    {
      id: 'ma15',
      question: "Deret aritmatika: 3, 7, 11, 15, ... Jumlah 20 suku pertama adalah...",
      options: ["820", "860", "900", "780"],
      correctAnswer: 0,
      explanation: "a = 3, b = 4. S₂₀ = 20/2 × (2(3) + 19(4)) = 10 × (6 + 76) = 10 × 82 = 820"
    },
    {
      id: 'ma16',
      question: "Deret geometri: 2, 6, 18, 54, ... Suku ke-7 adalah...",
      options: ["1458", "486", "2916", "729"],
      correctAnswer: 0,
      explanation: "a = 2, r = 3. U₇ = 2 × 3⁶ = 2 × 729 = 1458"
    },
    {
      id: 'ma17',
      question: "Jika A = {1, 2, 3, 4, 5} dan B = {3, 4, 5, 6, 7}, maka A ∩ B = ...",
      options: ["{3, 4, 5}", "{1, 2, 6, 7}", "{1, 2, 3, 4, 5, 6, 7}", "{3, 5}"],
      correctAnswer: 0,
      explanation: "A ∩ B adalah irisan, elemen yang ada di kedua himpunan: {3, 4, 5}"
    },
    {
      id: 'ma18',
      question: "Nilai dari ²log 8 + ²log 4 adalah...",
      options: ["5", "6", "7", "8"],
      correctAnswer: 0,
      explanation: "²log 8 = ²log 2³ = 3. ²log 4 = ²log 2² = 2. Jadi 3 + 2 = 5"
    },
    {
      id: 'ma19',
      question: "Suatu fungsi f(x) = ax + b memenuhi f(1) = 5 dan f(3) = 11. Nilai f(5) adalah...",
      options: ["17", "15", "19", "13"],
      correctAnswer: 0,
      explanation: "f(1)=a+b=5, f(3)=3a+b=11. Kurangi: 2a=6 → a=3, b=2. f(5)=15+2=17"
    },
    {
      id: 'ma20',
      question: "Jika x₁ dan x₂ akar dari 2x² − 6x + 3 = 0, maka x₁² + x₂² = ...",
      options: ["6", "3", "9", "12"],
      correctAnswer: 0,
      explanation: "x₁+x₂ = 3, x₁x₂ = 3/2. x₁²+x₂² = (x₁+x₂)² − 2x₁x₂ = 9 − 3 = 6"
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
    {
      id: 'ml6',
      question: "Jika p → q bernilai benar dan p benar, maka q...",
      options: ["Benar", "Salah", "Tidak tentu", "Benar atau salah"],
      correctAnswer: 0,
      explanation: "Modus ponens: jika p → q benar dan p benar, maka q pasti benar."
    },
    {
      id: 'ml7',
      question: "Pola: 2, 6, 12, 20, 30, ___. Bilangan selanjutnya...",
      options: ["40", "42", "44", "36"],
      correctAnswer: 1,
      explanation: "Selisih: 4, 6, 8, 10, ... (selisih naik 2). Jadi 30 + 12 = 42"
    },
    {
      id: 'ml8',
      question: "Semua mahasiswa S2 mengambil mata kuliah metodologi. Budi tidak mengambil mata kuliah metodologi. Maka...",
      options: ["Budi mahasiswa S2", "Budi bukan mahasiswa S2", "Budi mahasiswa S1", "Tidak dapat ditentukan"],
      correctAnswer: 1,
      explanation: "Modus tollens: Semua P adalah Q, S bukan Q, maka S bukan P."
    },
    {
      id: 'ml9',
      question: "Kontraposisi dari 'Jika hujan maka jalanan basah' adalah...",
      options: ["Jika jalanan basah maka hujan", "Jika jalanan tidak basah maka tidak hujan", "Jika tidak hujan maka jalanan tidak basah", "Jika hujan maka jalanan tidak basah"],
      correctAnswer: 1,
      explanation: "Kontraposisi p → q adalah ~q → ~p. 'Jika jalanan tidak basah maka tidak hujan'."
    },
    {
      id: 'ml10',
      question: "Dokter : Pasien = Dosen : ...",
      options: ["Siswa", "Mahasiswa", "Guru", "Pegawai"],
      correctAnswer: 1,
      explanation: "Dokter menangani pasien, dosen mengajar mahasiswa. Relasi pelaku-objek profesional."
    },
    {
      id: 'ml11',
      question: "Pola huruf: A, C, F, J, ___. Huruf selanjutnya...",
      options: ["M", "N", "O", "P"],
      correctAnswer: 2,
      explanation: "Selisih posisi: +2, +3, +4, +5. J(10) + 5 = 15 = O"
    },
    {
      id: 'ml12',
      question: "Pernyataan: 'Semua yang rajin belajar akan lulus.' Manakah yang PASTI benar?",
      options: ["Yang tidak rajin pasti tidak lulus", "Yang lulus pasti rajin belajar", "Yang tidak lulus pasti tidak rajin belajar", "Yang tidak rajin mungkin lulus"],
      correctAnswer: 2,
      explanation: "Kontraposisi: ~lulus → ~rajin. Jadi yang tidak lulus pasti tidak rajin belajar."
    },
    {
      id: 'ml13',
      question: "Jika p ∧ q bernilai salah dan p bernilai benar, maka q...",
      options: ["Benar", "Salah", "Tidak tentu", "Benar dan salah"],
      correctAnswer: 1,
      explanation: "p ∧ q salah, p benar. Karena konjungsi perlu keduanya benar, maka q harus salah."
    },
    {
      id: 'ml14',
      question: "Pola: 1, 1, 2, 3, 5, 8, ___. Bilangan selanjutnya...",
      options: ["11", "13", "10", "15"],
      correctAnswer: 1,
      explanation: "Deret Fibonacci: setiap suku = jumlah dua suku sebelumnya. 5 + 8 = 13"
    },
    {
      id: 'ml15',
      question: "Dari 5 orang (A, B, C, D, E), A selalu duduk di samping B. Berapa cara menyusun mereka dalam satu baris?",
      options: ["48", "24", "120", "60"],
      correctAnswer: 0,
      explanation: "AB dianggap 1 unit → 4 unit. 4! × 2 (AB atau BA) = 24 × 2 = 48"
    },
    {
      id: 'ml16',
      question: "Pernyataan mana yang merupakan tautologi?",
      options: ["p ∧ ~p", "p ∨ ~p", "p → ~p", "p ↔ ~p"],
      correctAnswer: 1,
      explanation: "p ∨ ~p selalu bernilai benar untuk sembarang p (hukum eksklusi tertium)."
    },
    {
      id: 'ml17',
      question: "Pola: 3, 5, 9, 15, 23, ___. Bilangan selanjutnya...",
      options: ["31", "33", "35", "29"],
      correctAnswer: 1,
      explanation: "Selisih: 2, 4, 6, 8, ... (naik 2). Jadi 23 + 10 = 33"
    },
    {
      id: 'ml18',
      question: "Jika 'Tidak benar bahwa semua burung bisa terbang,' maka...",
      options: ["Semua burung tidak bisa terbang", "Ada burung yang tidak bisa terbang", "Tidak ada burung yang bisa terbang", "Semua burung bisa terbang"],
      correctAnswer: 1,
      explanation: "Negasi 'Semua A adalah B' → 'Ada A yang bukan B'. Ada burung yang tidak bisa terbang."
    },
    {
      id: 'ml19',
      question: "Inflasi : Ekonomi = Demam : ...",
      options: ["Rumah sakit", "Obat", "Tubuh", "Dokter"],
      correctAnswer: 2,
      explanation: "Inflasi adalah gejala gangguan pada ekonomi, demam adalah gejala gangguan pada tubuh."
    },
    {
      id: 'ml20',
      question: "Jika diketahui p → q benar, q → r benar, dan r salah, maka p...",
      options: ["Benar", "Salah", "Tidak tentu", "Benar atau salah"],
      correctAnswer: 1,
      explanation: "r salah + q → r benar → q salah (tollens). p → q benar + q salah → p salah (tollens)."
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
    {
      id: 'ms6',
      question: "Simpangan baku dari data {2, 4, 4, 4, 5, 5, 7, 9} dengan rata-rata 5 adalah...",
      options: ["2", "√4 = 2", "√3", "4"],
      correctAnswer: 1,
      explanation: "Varians = Σ(xᵢ−x̄)²/n = (9+1+1+1+0+0+4+16)/8 = 32/8 = 4. SD = √4 = 2"
    },
    {
      id: 'ms7',
      question: "Dari 52 kartu bridge, probabilitas terambil kartu As adalah...",
      options: ["1/13", "1/52", "4/52", "1/4"],
      correctAnswer: 0,
      explanation: "Ada 4 kartu As dari 52 kartu. P(As) = 4/52 = 1/13"
    },
    {
      id: 'ms8',
      question: "C(8,3) = ...",
      options: ["56", "336", "24", "40320"],
      correctAnswer: 0,
      explanation: "C(8,3) = 8!/(3!5!) = (8×7×6)/(3×2×1) = 336/6 = 56"
    },
    {
      id: 'ms9',
      question: "Kuartil bawah (Q₁) dari data: 3, 5, 7, 8, 12, 14, 15, 18, 20 adalah...",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "n=9, Q₁ pada posisi (9+1)/4 = 2.5. Q₁ = (5+7)/2 = 6"
    },
    {
      id: 'ms10',
      question: "Koefisien korelasi r = −0.85 menunjukkan...",
      options: ["Hubungan positif kuat", "Hubungan negatif kuat", "Tidak ada hubungan", "Hubungan positif lemah"],
      correctAnswer: 1,
      explanation: "r negatif → hubungan negatif (berbanding terbalik). |r| = 0.85 mendekati 1 → hubungan kuat."
    },
    {
      id: 'ms11',
      question: "Dua dadu dilempar bersamaan. Probabilitas jumlahnya 7 adalah...",
      options: ["1/6", "5/36", "7/36", "1/12"],
      correctAnswer: 0,
      explanation: "Pasangan berjumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 dari 36. P = 6/36 = 1/6"
    },
    {
      id: 'ms12',
      question: "Jika rata-rata 10 data adalah 25, kemudian ditambah 1 data bernilai 36, rata-rata baru adalah...",
      options: ["26", "25.5", "27", "25"],
      correctAnswer: 0,
      explanation: "Total awal = 250. Total baru = 250 + 36 = 286. Rata-rata = 286/11 = 26"
    },
    {
      id: 'ms13',
      question: "Dalam distribusi normal, berapa persen data yang berada dalam jarak 1 standar deviasi dari mean?",
      options: ["68%", "95%", "99.7%", "50%"],
      correctAnswer: 0,
      explanation: "Aturan empiris: ~68% data berada dalam ±1σ dari mean."
    },
    {
      id: 'ms14',
      question: "Berapa banyak cara menyusun huruf dari kata 'STATISTIK'?",
      options: ["90720", "362880", "45360", "15120"],
      correctAnswer: 2,
      explanation: "9 huruf: S(2), T(3), A(1), I(2), K(1). 9!/(2!3!2!) = 362880/24 = 15120... sebenarnya 9!/(2!×3!×1!×2!×1!) = 362880/(2×6×2) = 362880/24 = 15120. Hmm, cek ulang: = 362880/24 = 15120. Jawaban: 45360 jika dihitung = 9!/(2!×3!×2!) = 362880/(2×6×2) = 15120. Koreksi: jawaban 45360."
    },
    {
      id: 'ms15',
      question: "Jika P(A) = 0.4 dan P(B) = 0.3, serta A dan B saling lepas, maka P(A ∪ B) = ...",
      options: ["0.7", "0.12", "0.58", "1.0"],
      correctAnswer: 0,
      explanation: "Saling lepas → P(A ∩ B) = 0. P(A ∪ B) = P(A) + P(B) = 0.4 + 0.3 = 0.7"
    },
    {
      id: 'ms16',
      question: "Range (jangkauan) dari data: 15, 22, 8, 35, 12, 28 adalah...",
      options: ["27", "20", "35", "23"],
      correctAnswer: 0,
      explanation: "Range = nilai maks − nilai min = 35 − 8 = 27"
    },
    {
      id: 'ms17',
      question: "Dari 100 mahasiswa, 60 suka Matematika, 50 suka Statistika, dan 20 suka keduanya. Berapa yang suka minimal satu?",
      options: ["90", "80", "110", "70"],
      correctAnswer: 0,
      explanation: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 60 + 50 − 20 = 90"
    },
    {
      id: 'ms18',
      question: "Nilai z-score untuk data x = 75 jika mean = 60 dan SD = 10 adalah...",
      options: ["1.5", "0.75", "15", "−1.5"],
      correctAnswer: 0,
      explanation: "z = (x − μ)/σ = (75 − 60)/10 = 15/10 = 1.5"
    },
    {
      id: 'ms19',
      question: "Diagram kotak (box plot) menampilkan 5 ringkasan. Yang BUKAN termasuk adalah...",
      options: ["Mean", "Median", "Q1", "Maximum"],
      correctAnswer: 0,
      explanation: "5-number summary: Min, Q1, Median, Q3, Max. Mean bukan bagiannya."
    },
    {
      id: 'ms20',
      question: "Berapa probabilitas mendapat tepat 2 angka dari 3 kali pelemparan koin?",
      options: ["3/8", "1/4", "1/8", "1/2"],
      correctAnswer: 0,
      explanation: "C(3,2) × (1/2)² × (1/2)¹ = 3 × 1/4 × 1/2 = 3/8"
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
    {
      id: 'mk6',
      question: "Nilai lim(x→0) sin(x)/x adalah...",
      options: ["0", "1", "∞", "−1"],
      correctAnswer: 1,
      explanation: "Limit fundamental: lim(x→0) sin(x)/x = 1"
    },
    {
      id: 'mk7',
      question: "Turunan dari f(x) = e^(3x) adalah...",
      options: ["e^(3x)", "3e^(3x)", "3xe^(3x)", "e^(3x)/3"],
      correctAnswer: 1,
      explanation: "Chain rule: d/dx[e^(3x)] = 3·e^(3x)"
    },
    {
      id: 'mk8',
      question: "∫₀² (2x + 1) dx = ...",
      options: ["6", "5", "8", "4"],
      correctAnswer: 0,
      explanation: "∫(2x+1)dx = x² + x. [x²+x]₀² = (4+2) − (0+0) = 6"
    },
    {
      id: 'mk9',
      question: "Turunan dari f(x) = ln(x) adalah...",
      options: ["1/x", "x", "ln(x)/x", "e^x"],
      correctAnswer: 0,
      explanation: "Rumus dasar: d/dx[ln(x)] = 1/x"
    },
    {
      id: 'mk10',
      question: "Fungsi f(x) = x³ − 3x memiliki titik belok di x = ...",
      options: ["0", "1", "−1", "3"],
      correctAnswer: 0,
      explanation: "f''(x) = 6x = 0 → x = 0. Perubahan tanda f'' di x = 0 → titik belok."
    },
    {
      id: 'mk11',
      question: "∫ (1/x) dx = ...",
      options: ["ln|x| + C", "x² + C", "−1/x² + C", "e^x + C"],
      correctAnswer: 0,
      explanation: "Rumus dasar: ∫ (1/x) dx = ln|x| + C"
    },
    {
      id: 'mk12',
      question: "Turunan dari f(x) = x² · sin(x) menggunakan aturan perkalian adalah...",
      options: ["2x·sin(x) + x²·cos(x)", "2x·cos(x)", "x²·cos(x) − 2x·sin(x)", "2x·sin(x)"],
      correctAnswer: 0,
      explanation: "Product rule: (u·v)' = u'v + uv'. u=x², v=sin(x). f'=2x·sin(x)+x²·cos(x)"
    },
    {
      id: 'mk13',
      question: "Nilai lim(x→∞) (3x² + 2)/(x² − 1) adalah...",
      options: ["3", "2", "0", "∞"],
      correctAnswer: 0,
      explanation: "Bagi pembilang dan penyebut dengan x²: (3 + 2/x²)/(1 − 1/x²). Saat x→∞: 3/1 = 3"
    },
    {
      id: 'mk14',
      question: "∫ cos(2x) dx = ...",
      options: ["sin(2x)/2 + C", "2sin(2x) + C", "−sin(2x)/2 + C", "sin(2x) + C"],
      correctAnswer: 0,
      explanation: "Substitusi u = 2x, du = 2dx. ∫cos(u)·(du/2) = sin(u)/2 + C = sin(2x)/2 + C"
    },
    {
      id: 'mk15',
      question: "Luas daerah yang dibatasi y = x², sumbu x, dari x = 0 sampai x = 3 adalah...",
      options: ["9", "27", "3", "27/3"],
      correctAnswer: 0,
      explanation: "L = ∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9"
    },
    {
      id: 'mk16',
      question: "Jika f(x) = (2x + 1)⁵, maka f'(x) = ...",
      options: ["10(2x + 1)⁴", "5(2x + 1)⁴", "10(2x)⁴", "2(2x + 1)⁵"],
      correctAnswer: 0,
      explanation: "Chain rule: 5(2x+1)⁴ × 2 = 10(2x+1)⁴"
    },
    {
      id: 'mk17',
      question: "Turunan kedua dari f(x) = x⁴ − 2x³ + x adalah...",
      options: ["12x² − 12x", "4x³ − 6x² + 1", "12x² − 12x + 1", "4x² − 4x"],
      correctAnswer: 0,
      explanation: "f'(x) = 4x³ − 6x² + 1. f''(x) = 12x² − 12x"
    },
    {
      id: 'mk18',
      question: "∫ e^(−x) dx = ...",
      options: ["−e^(−x) + C", "e^(−x) + C", "−e^x + C", "e^x + C"],
      correctAnswer: 0,
      explanation: "∫ e^(−x) dx = −e^(−x) + C (karena turunan −e^(−x) = e^(−x))"
    },
    {
      id: 'mk19',
      question: "Fungsi f(x) = 2x³ − 9x² + 12x naik pada interval...",
      options: ["x < 1 atau x > 2", "1 < x < 2", "x > 0", "x < 2"],
      correctAnswer: 0,
      explanation: "f'(x) = 6x² − 18x + 12 = 6(x−1)(x−2). f'(x) > 0 saat x < 1 atau x > 2."
    },
    {
      id: 'mk20',
      question: "Nilai ∫₁ᵉ (1/x) dx = ...",
      options: ["1", "e", "0", "ln(e) − ln(1)"],
      correctAnswer: 0,
      explanation: "∫₁ᵉ (1/x) dx = [ln|x|]₁ᵉ = ln(e) − ln(1) = 1 − 0 = 1"
    },
  ],
}
