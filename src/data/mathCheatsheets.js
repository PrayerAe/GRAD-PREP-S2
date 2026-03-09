// Cheatsheet data per math chapter – ringkasan cepat tiap sub-bab

export const mathCheatsheets = {
  aljabar: [
    // 0: Operasi Bentuk Aljabar
    {
      title: 'Operasi Aljabar',
      items: [
        { label: 'Distributif', value: 'a(b + c) = ab + ac' },
        { label: 'FOIL', value: '(a+b)(c+d) = ac + ad + bc + bd' },
        { label: 'Kuadrat Sempurna', value: '(a+b)² = a² + 2ab + b²' },
        { label: 'Selisih Kuadrat', value: 'a² − b² = (a+b)(a−b)' },
        { label: 'Pangkat', value: 'aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ' },
        { label: 'Pecahan', value: 'a/b ± c/d = (ad ± bc) / bd — samakan penyebut dulu!' },
      ],
    },
    // 1: Persamaan Linear
    {
      title: 'Persamaan Linear',
      items: [
        { label: 'Bentuk Umum', value: 'ax + b = c → x = (c − b) / a' },
        { label: 'Aturan Emas', value: 'Apa yang dilakukan di kiri, lakukan juga di kanan' },
        { label: 'Pindah Ruas', value: '+ jadi −, × jadi ÷ (dan sebaliknya)' },
        { label: 'Pecahan', value: 'Kalikan seluruh persamaan dengan KPK penyebut' },
        { label: 'Cek Jawaban', value: 'Selalu substitusi x kembali ke persamaan awal' },
      ],
    },
    // 2: Sistem Persamaan Linear
    {
      title: 'Sistem Persamaan Linear',
      items: [
        { label: 'Eliminasi', value: 'Samakan koefisien salah satu variabel, lalu kurangi/tambah' },
        { label: 'Substitusi', value: 'Nyatakan satu variabel, substitusi ke persamaan lain' },
        { label: 'Cramer (2×2)', value: 'x = Dx/D, y = Dy/D dengan D = a₁b₂ − a₂b₁' },
        { label: 'Tanpa Solusi', value: 'Garis sejajar → a₁/a₂ = b₁/b₂ ≠ c₁/c₂' },
        { label: 'Tips TPA', value: 'Cari variabel yang koefisiennya sudah sama/kelipatan' },
      ],
    },
    // 3: Pertidaksamaan
    {
      title: 'Pertidaksamaan',
      items: [
        { label: 'Kali/Bagi Negatif', value: 'Tanda pertidaksamaan TERBALIK! (< jadi >, ≤ jadi ≥)' },
        { label: 'Notasi Interval', value: '(a,b) = terbuka, [a,b] = tertutup, campuran = [a,b)' },
        { label: 'Kuadrat', value: 'ax² + bx + c > 0 → faktorkan, uji tanda per interval' },
        { label: 'Garis Bilangan', value: 'Tandai akar, uji tanda di setiap interval' },
        { label: 'Nilai Mutlak', value: '|x| < a → −a < x < a, |x| > a → x < −a atau x > a' },
      ],
    },
    // 4: Logaritma
    {
      title: 'Logaritma',
      items: [
        { label: 'Definisi', value: 'ᵃlog b = c ↔ aᶜ = b' },
        { label: 'Perkalian', value: 'log(ab) = log a + log b' },
        { label: 'Pembagian', value: 'log(a/b) = log a − log b' },
        { label: 'Pangkat', value: 'log(aⁿ) = n · log a' },
        { label: 'Ganti Basis', value: 'ᵃlog b = log b / log a' },
        { label: 'Invers', value: 'ᵃlog aⁿ = n dan a^(ᵃlog b) = b' },
      ],
    },
    // 5: Barisan & Deret
    {
      title: 'Barisan & Deret',
      items: [
        { label: 'Aritmatika Uₙ', value: 'Uₙ = a + (n−1)d, d = beda tetap' },
        { label: 'Deret Aritmatika', value: 'Sₙ = n/2 × (2a + (n−1)d) = n/2 × (U₁ + Uₙ)' },
        { label: 'Geometri Uₙ', value: 'Uₙ = a · rⁿ⁻¹, r = rasio tetap' },
        { label: 'Deret Geometri', value: 'Sₙ = a(rⁿ − 1)/(r − 1), |r|<1: S∞ = a/(1−r)' },
        { label: 'Tips Cepat', value: 'Cari pola: selisih tetap = aritmatika, rasio tetap = geometri' },
      ],
    },
    // 6: Matriks Dasar
    {
      title: 'Matriks Dasar',
      items: [
        { label: 'Penjumlahan', value: 'Hanya untuk matriks berordo sama, elemen per elemen' },
        { label: 'Perkalian Skalar', value: 'k × [a b; c d] = [ka kb; kc kd]' },
        { label: 'Perkalian Matriks', value: 'Baris × Kolom, ordo m×n dikali n×p = m×p' },
        { label: 'Determinan 2×2', value: 'det = ad − bc untuk [a b; c d]' },
        { label: 'Invers 2×2', value: 'A⁻¹ = (1/det) × [d −b; −c a]' },
        { label: 'Syarat Invers', value: 'det ≠ 0, jika det = 0 → matriks singular (tak punya invers)' },
      ],
    },
  ],

  logika: [
    // 0: Silogisme & Penalaran Deduktif
    {
      title: 'Silogisme',
      items: [
        { label: 'Struktur', value: 'Premis Mayor + Premis Minor → Kesimpulan' },
        { label: 'Modus Ponens', value: 'Jika P→Q dan P benar, maka Q benar' },
        { label: 'Modus Tollens', value: 'Jika P→Q dan Q salah, maka P salah' },
        { label: 'Silogisme Hipotesis', value: 'P→Q, Q→R, maka P→R (rantai)' },
        { label: 'Jebakan TPA', value: '"Semua A adalah B" ≠ "Semua B adalah A"' },
      ],
    },
    // 1: Logika Proposisi
    {
      title: 'Logika Proposisi',
      items: [
        { label: 'Konjungsi (∧)', value: 'P DAN Q — benar hanya jika keduanya benar' },
        { label: 'Disjungsi (∨)', value: 'P ATAU Q — salah hanya jika keduanya salah' },
        { label: 'Implikasi (→)', value: 'JIKA P MAKA Q — salah hanya jika P benar tapi Q salah' },
        { label: 'Negasi Implikasi', value: '~(P→Q) = P ∧ ~Q' },
        { label: 'Kontraposisi', value: 'P→Q setara ~Q→~P (selalu benar bersama)' },
        { label: 'De Morgan', value: '~(P∧Q) = ~P∨~Q, ~(P∨Q) = ~P∧~Q' },
      ],
    },
    // 2: Pola Bilangan
    {
      title: 'Pola Bilangan',
      items: [
        { label: 'Selisih Tetap', value: 'Aritmatika: cari beda (d) antar suku' },
        { label: 'Rasio Tetap', value: 'Geometri: cari rasio (r) antar suku' },
        { label: 'Selisih Bertingkat', value: 'Hitung selisih level 1, 2, dst. sampai tetap' },
        { label: 'Fibonacci-like', value: 'Uₙ = Uₙ₋₁ + Uₙ₋₂ (jumlah 2 suku sebelumnya)' },
        { label: 'Pola Ganjil/Genap', value: 'Cek posisi ganjil dan genap terpisah' },
        { label: 'Tips', value: 'Selalu cek minimal 3 selisih sebelum yakin polanya' },
      ],
    },
    // 3: Analogi Verbal & Penalaran Analitik
    {
      title: 'Analogi & Penalaran',
      items: [
        { label: 'Sinonim', value: 'A:B = C:D → hubungan makna sama/mirip' },
        { label: 'Antonim', value: 'Hubungan berlawanan (besar:kecil = tinggi:rendah)' },
        { label: 'Bagian-Keseluruhan', value: 'Jari:tangan = daun:pohon' },
        { label: 'Fungsi/Alat', value: 'Pena:menulis = pisau:memotong' },
        { label: 'Sebab-Akibat', value: 'Api:panas = es:dingin' },
        { label: 'Urutan/Tingkat', value: 'Detik:menit = menit:jam' },
        { label: 'Strategi', value: 'Temukan hubungan A-B, lalu cari pasangan C-D yang persis sama' },
      ],
    },
    // 4: Penalaran Analitik (Posisi & Urutan)
    {
      title: 'Penalaran Posisi & Urutan',
      items: [
        { label: 'Buat Tabel', value: 'Gambar tabel/slot posisi untuk setiap petunjuk' },
        { label: 'Petunjuk Pasti', value: 'Isi posisi yang pasti dulu (misal: "A di posisi 3")' },
        { label: 'Eliminasi', value: 'Coret kemungkinan yang bertentangan dengan petunjuk' },
        { label: '"Di antara"', value: 'A di antara B dan C → B_A_C atau C_A_B' },
        { label: '"Bersebelahan"', value: 'A dan B bersebelahan → AB atau BA' },
        { label: 'Cek Silang', value: 'Setelah mengisi, verifikasi semua petunjuk terpenuhi' },
      ],
    },
  ],

  statistika: [
    // 0: Mean, Median, Modus
    {
      title: 'Mean, Median, Modus',
      items: [
        { label: 'Mean (Rata-rata)', value: 'Jumlah semua data ÷ banyak data' },
        { label: 'Median', value: 'Nilai tengah setelah data diurutkan' },
        { label: 'Median Genap', value: 'Rata-rata 2 nilai tengah: (Uₙ/₂ + Uₙ/₂₊₁) / 2' },
        { label: 'Modus', value: 'Nilai yang paling sering muncul (bisa lebih dari satu)' },
        { label: 'Skewness', value: 'Mean > Median > Modus → skew kanan (positif)' },
        { label: 'Tips TPA', value: 'Data ditambah/dikurang konstanta k → mean ± k, median ± k' },
      ],
    },
    // 1: Standar Deviasi & Z-Score
    {
      title: 'Standar Deviasi & Z-Score',
      items: [
        { label: 'Varians', value: 'σ² = Σ(xᵢ − x̄)² / n' },
        { label: 'Standar Deviasi', value: 'σ = √varians — ukuran sebaran data' },
        { label: 'Z-Score', value: 'z = (x − μ) / σ — posisi data relatif terhadap mean' },
        { label: 'z = 0', value: 'Tepat di mean' },
        { label: 'z positif', value: 'Di atas mean' },
        { label: 'z negatif', value: 'Di bawah mean' },
        { label: 'Tips', value: 'σ kecil → data seragam, σ besar → data menyebar' },
      ],
    },
    // 2: Probabilitas
    {
      title: 'Probabilitas',
      items: [
        { label: 'Rumus Dasar', value: 'P(A) = kejadian menguntungkan / total kejadian' },
        { label: 'Komplemen', value: 'P(A\') = 1 − P(A)' },
        { label: 'Gabungan', value: 'P(A∪B) = P(A) + P(B) − P(A∩B)' },
        { label: 'Saling Lepas', value: 'P(A∩B) = 0 → P(A∪B) = P(A) + P(B)' },
        { label: 'Independen', value: 'P(A∩B) = P(A) × P(B)' },
        { label: 'Kondisional', value: 'P(A|B) = P(A∩B) / P(B)' },
      ],
    },
    // 3: Permutasi & Kombinasi
    {
      title: 'Permutasi & Kombinasi',
      items: [
        { label: 'Faktorial', value: 'n! = n × (n−1) × ... × 2 × 1, 0! = 1' },
        { label: 'Permutasi', value: 'P(n,r) = n! / (n−r)! — urutan PENTING' },
        { label: 'Kombinasi', value: 'C(n,r) = n! / (r!(n−r)!) — urutan TIDAK penting' },
        { label: 'Kapan Permutasi?', value: 'Susunan, ranking, kode, password' },
        { label: 'Kapan Kombinasi?', value: 'Memilih tim, panitia, kelompok' },
        { label: 'Pintasan', value: 'C(n,r) = C(n, n−r) → pilih yang lebih kecil' },
      ],
    },
    // 4: Distribusi Normal
    {
      title: 'Distribusi Normal',
      items: [
        { label: 'Bentuk Kurva', value: 'Lonceng simetris, puncak di μ (mean)' },
        { label: '68-95-99.7', value: '68% dalam ±1σ, 95% dalam ±2σ, 99.7% dalam ±3σ' },
        { label: 'μ ± 1σ', value: '≈ 68% data' },
        { label: 'μ ± 2σ', value: '≈ 95% data' },
        { label: 'μ ± 3σ', value: '≈ 99.7% data' },
        { label: 'Standar Normal', value: 'μ = 0, σ = 1, gunakan tabel z' },
      ],
    },
  ],

  kalkulus: [
    // 0: Limit Fungsi
    {
      title: 'Limit Fungsi',
      items: [
        { label: 'Substitusi', value: 'Coba masukkan x langsung dulu' },
        { label: 'Bentuk 0/0', value: 'Faktorkan pembilang dan penyebut, coret faktor (x−a)' },
        { label: 'Kali Sekawan', value: 'Untuk bentuk akar: kalikan (√a+√b)/(√a+√b)' },
        { label: 'Limit ∞', value: 'Bagi pembilang & penyebut dengan pangkat tertinggi' },
        { label: 'L\'Hôpital', value: 'Jika 0/0 atau ∞/∞, turunkan atas dan bawah' },
        { label: 'Limit Trigonometri', value: 'lim(sin x/x) = 1, lim(tan x/x) = 1 saat x→0' },
      ],
    },
    // 1: Turunan (Derivatif)
    {
      title: 'Turunan',
      items: [
        { label: 'Konstanta', value: 'f(x) = c → f\'(x) = 0' },
        { label: 'Power Rule', value: 'f(x) = xⁿ → f\'(x) = nxⁿ⁻¹' },
        { label: 'Konstanta ×', value: 'f(x) = c·g(x) → f\'(x) = c·g\'(x)' },
        { label: 'Penjumlahan', value: '(f ± g)\' = f\' ± g\'' },
        { label: 'Perkalian', value: '(fg)\' = f\'g + fg\'' },
        { label: 'Pembagian', value: '(f/g)\' = (f\'g − fg\') / g²' },
      ],
    },
    // 2: Aturan Turunan & Aplikasi
    {
      title: 'Aturan Turunan & Aplikasi',
      items: [
        { label: 'Chain Rule', value: 'f(g(x))\' = f\'(g(x)) · g\'(x) — turunan luar × turunan dalam' },
        { label: 'Titik Stasioner', value: 'f\'(x) = 0 → kandidat max/min' },
        { label: 'Uji Turunan Kedua', value: 'f\'\'(x) > 0 → minimum, f\'\'(x) < 0 → maksimum' },
        { label: 'Naik/Turun', value: 'f\'(x) > 0 → naik, f\'(x) < 0 → turun' },
        { label: 'Gradien Garis Singgung', value: 'm = f\'(a) pada titik x = a' },
        { label: 'Persamaan Garis Singgung', value: 'y − f(a) = f\'(a)(x − a)' },
      ],
    },
    // 3: Integral Dasar
    {
      title: 'Integral Dasar',
      items: [
        { label: 'Power Rule', value: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1' },
        { label: 'Konstanta', value: '∫k dx = kx + C' },
        { label: '∫1/x dx', value: 'ln|x| + C' },
        { label: '∫eˣ dx', value: 'eˣ + C' },
        { label: '∫sin x dx', value: '−cos x + C' },
        { label: '∫cos x dx', value: 'sin x + C' },
        { label: 'Integral Tentu', value: '∫ₐᵇ f(x)dx = F(b) − F(a)' },
      ],
    },
    // 4: Integral Substitusi & Aplikasi
    {
      title: 'Integral Substitusi & Aplikasi',
      items: [
        { label: 'Langkah Substitusi', value: 'Pilih u = bagian dalam, hitung du, ganti semua x ke u' },
        { label: 'Kapan Substitusi?', value: 'Ada fungsi komposit: f(g(x)) · g\'(x)' },
        { label: 'Luas di Bawah Kurva', value: 'L = ∫ₐᵇ f(x) dx (positif di atas sumbu x)' },
        { label: 'Luas Antara 2 Kurva', value: 'L = ∫ₐᵇ |f(x) − g(x)| dx' },
        { label: 'Jangan Lupa', value: 'Kembalikan u ke x untuk integral tak tentu!' },
        { label: 'Cek', value: 'Turunkan hasil integral → harus kembali ke f(x)' },
      ],
    },
  ],
}
