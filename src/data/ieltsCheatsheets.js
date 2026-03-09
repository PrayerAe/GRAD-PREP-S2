// Cheatsheet data per IELTS section – ringkasan cepat strategi kunci

export const ieltsCheatsheets = {
  listening: [
    // 0: Format & Strategi Umum
    {
      title: 'Format & Strategi Umum Listening',
      items: [
        { label: 'Struktur', value: '4 sections, 40 questions, 30 menit listening + 10 menit transfer jawaban' },
        { label: 'Section 1–2', value: 'Everyday context: S1 = percakapan (2 orang), S2 = monolog' },
        { label: 'Section 3–4', value: 'Academic context: S3 = diskusi (≤4 orang), S4 = kuliah/ceramah' },
        { label: 'Pre-listening', value: 'Baca soal dulu! Prediksi jenis jawaban (angka, nama, tanggal, kata sifat)' },
        { label: 'Saat Listening', value: 'Tulis jawaban langsung, jangan tunda. Jawab semua — tidak ada penalti' },
        { label: 'Transfer Jawaban', value: 'Cek ejaan, singular/plural, dan batasan kata saat transfer ke answer sheet' },
      ],
    },
    // 1: Form & Table Completion
    {
      title: 'Form & Table Completion',
      items: [
        { label: 'Batas Kata', value: 'Ikuti instruksi: "NO MORE THAN TWO WORDS AND/OR A NUMBER"' },
        { label: 'Jenis Jawaban', value: 'Biasanya: nama, alamat, tanggal, nomor telepon, kata benda spesifik' },
        { label: 'Perhatikan Urutan', value: 'Jawaban muncul secara berurutan dalam rekaman — jangan ketinggalan' },
        { label: 'Ejaan Kritis', value: 'Nama orang/tempat sering dieja perlahan dalam rekaman — dengarkan baik-baik' },
        { label: 'Parafrase', value: 'Kata dalam rekaman BERBEDA dengan kata di formulir — latih sinonim' },
        { label: 'Cek Grammar', value: 'Jawaban harus gramatikal dalam konteks kalimat/formulir' },
      ],
    },
    // 2: Multiple Choice & Matching
    {
      title: 'Multiple Choice & Matching',
      items: [
        { label: 'Eliminasi', value: 'Coret pilihan yang jelas salah atau bertentangan dengan rekaman' },
        { label: 'Jebakan Parafrase', value: 'Pembicara mungkin menyebut kata dari pilihan SALAH sebelum memberikan jawaban benar' },
        { label: 'Semua Pilihan', value: 'Dengarkan SELURUH rekaman bagian itu sebelum memilih jawaban' },
        { label: 'Matching Bukan Urutan', value: 'Untuk matching, jawaban di rekaman mungkin tidak urut sesuai soal' },
        { label: 'Distraktor', value: 'Rekaman sering menyebut beberapa pilihan — fokus pada kesimpulan akhir pembicara' },
        { label: 'Gunakan Konteks', value: 'Jika tidak yakin, gunakan logika/konteks dari seluruh rekaman untuk memilih' },
      ],
    },
    // 3: Map & Diagram Labelling
    {
      title: 'Map & Diagram Labelling',
      items: [
        { label: 'Orientasi Peta', value: 'Pelajari north/south/east/west, left/right, opposite, next to, between' },
        { label: 'Kata Arah', value: 'Turn left, go straight, pass the..., it is on your right, at the corner of...' },
        { label: 'Landmark', value: 'Perhatikan bangunan/objek yang sudah diberi label sebagai titik referensi' },
        { label: 'Ikuti Rute', value: 'Gambar panah pada peta saat mendengar — sangat membantu orientasi' },
        { label: 'Diagram', value: 'Untuk diagram proses/alat: pahami alur/bagian sebelum rekaman dimulai' },
        { label: 'Ejaan', value: 'Nama ruangan atau fitur sering dieja — siap catat dengan cepat' },
      ],
    },
  ],

  reading: [
    // 0: Format & Band Score
    {
      title: 'Format & Band Score Reading',
      items: [
        { label: 'Academic', value: '3 passages dari sumber otentik (majalah, jurnal, buku) — makin sulit tiap passage' },
        { label: 'General Training', value: '3 sections: iklan/daftar → teks kerja/pelatihan → teks umum panjang' },
        { label: 'Waktu', value: '60 menit, 40 soal — TIDAK ada waktu transfer. Tulis langsung di answer sheet' },
        { label: 'Band 7', value: '30–32 soal benar (dari 40)' },
        { label: 'Band 6.5', value: '27–29 soal benar' },
        { label: 'Strategi Waktu', value: 'Alokasikan ~20 menit per passage. Jangan habis waktu di satu soal sulit' },
      ],
    },
    // 1: True/False/Not Given
    {
      title: 'True / False / Not Given',
      items: [
        { label: 'TRUE', value: 'Informasi secara eksplisit DIKONFIRMASI oleh teks (termasuk parafrase)' },
        { label: 'FALSE', value: 'Teks secara eksplisit BERTENTANGAN dengan pernyataan' },
        { label: 'NOT GIVEN', value: 'Informasi TIDAK disebutkan sama sekali dalam teks — bukan True bukan False' },
        { label: 'Jebakan Utama', value: 'Jangan gunakan pengetahuan luar — hanya berdasarkan apa yang ADA dalam teks' },
        { label: 'NG vs False', value: 'NOT GIVEN = topik tidak ada. FALSE = topik ada, tapi berlawanan' },
        { label: 'Urutan', value: 'Pernyataan biasanya mengikuti urutan paragraf — bantu pencarian lokasi' },
      ],
    },
    // 2: Matching Headings & Sentence Completion
    {
      title: 'Matching Headings & Sentence Completion',
      items: [
        { label: 'Headings', value: 'Baca kalimat pertama DAN terakhir tiap paragraf untuk menangkap ide utama' },
        { label: 'Hindari Detail', value: 'Matching headings = cari tema besar paragraf, bukan detail kecil' },
        { label: 'Eliminasi Heading', value: 'Mulai dari paragraf yang paling jelas, lalu eliminasi heading yang sudah dipakai' },
        { label: 'Sentence Completion', value: 'Jawaban harus gramatikal dan biasanya berupa kata benda/frase dari teks' },
        { label: 'Scanning', value: 'Gunakan kata kunci dari soal untuk scan lokasi jawaban di teks dengan cepat' },
        { label: 'Batasan Kata', value: '"NO MORE THAN THREE WORDS" — jangan tambah kata, pastikan tata bahasa benar' },
      ],
    },
    // 3: Skimming & Scanning Strategy
    {
      title: 'Skimming & Scanning',
      items: [
        { label: 'Skimming', value: 'Baca judul, subheading, kalimat pertama tiap paragraf — dapat gambaran umum (2 menit)' },
        { label: 'Scanning', value: 'Gerakkan mata vertikal mencari kata kunci spesifik — tidak baca kata per kata' },
        { label: 'Kata Kunci Soal', value: 'Underline proper nouns, angka, tahun, nama — mudah di-scan di teks' },
        { label: 'Parafrase', value: 'Teks jarang mengulang kata di soal persis — latih sinonim & parafrase akademik' },
        { label: 'Jangan Panic NG', value: 'Jika tidak ditemukan setelah scan 2x → kemungkinan besar NOT GIVEN' },
        { label: 'Urutan Soal', value: 'Kecuali Matching Headings, kebanyakan soal mengikuti urutan teks' },
      ],
    },
  ],

  writing: [
    // 0: Task 1 Overview
    {
      title: 'Task 1 — Graphs & Diagrams',
      items: [
        { label: 'Waktu & Panjang', value: '20 menit, minimum 150 kata. Task 1 = 1/3 nilai Writing' },
        { label: 'TIDAK ada opini', value: 'Describe ONLY what you see — no opinions, no reasons, no speculation' },
        { label: 'Struktur', value: 'Introduction (paraphrase judul) → Overview (2 tren utama) → Body (detail angka)' },
        { label: 'Overview Wajib', value: 'Paragraf overview adalah kunci Band 6+ — rangkum tren/pola paling menonjol' },
        { label: 'Pilih Data', value: 'Tidak perlu sebut SEMUA angka — pilih yang paling signifikan dan bandingkan' },
        { label: 'Process/Map', value: 'Untuk diagram proses: gunakan passive voice. Untuk peta: bandingkan perubahan' },
      ],
    },
    // 1: Task 1 Language
    {
      title: 'Task 1 — Bahasa & Frase',
      items: [
        { label: 'Naik', value: 'rose, increased, grew, climbed, surged, went up, experienced a rise' },
        { label: 'Turun', value: 'fell, declined, dropped, decreased, dipped, went down, experienced a fall' },
        { label: 'Stabil', value: 'remained stable, levelled off, plateaued, stayed constant, showed little change' },
        { label: 'Perbandingan', value: 'higher/lower than, twice as much as, compared to, in contrast to, while' },
        { label: 'Proporsi', value: 'accounted for, made up, represented, the largest share was..., a quarter of...' },
        { label: 'Modifikasi Kata Kerja', value: 'rose sharply/gradually/significantly/slightly/dramatically/steadily' },
      ],
    },
    // 2: Task 2 Essay Types & Structure
    {
      title: 'Task 2 — Jenis Esai & Struktur',
      items: [
        { label: 'Waktu & Panjang', value: '40 menit, minimum 250 kata. Task 2 = 2/3 nilai Writing' },
        { label: 'Discussion Essay', value: '"Discuss both views" → Bahas keduanya secara seimbang + pendapat sendiri' },
        { label: 'Opinion Essay', value: '"Do you agree/disagree?" → Pilih satu posisi, dukung konsisten' },
        { label: 'Problem-Solution', value: 'Paragraf 1: masalah-masalah utama. Paragraf 2: solusi-solusi' },
        { label: 'Struktur PEEL', value: 'Point (klaim) → Evidence (bukti) → Explain (jelaskan) → Link (hubungkan ke tesis)' },
        { label: 'Baca Soal 2x', value: 'Pastikan menjawab SEMUA bagian soal — Task Achievement adalah kriteria paling kritis' },
      ],
    },
    // 3: Task 2 Band 7+ Tips
    {
      title: 'Task 2 — Tips Band 7+',
      items: [
        { label: 'Koherensi', value: 'Gunakan cohesive devices: However, Furthermore, In contrast, As a result, Nevertheless' },
        { label: 'Lexical Resource', value: 'Hindari pengulangan kata — gunakan sinonim akademik dan kolokasi tepat' },
        { label: 'Grammar Kompleks', value: 'Variasikan: kalimat kompleks, klausa relatif, kalimat kondisional, inversion' },
        { label: 'Hindari Bahasa Informal', value: 'Jangan: "a lot of" → "a significant number of". Jangan: "kids" → "children"' },
        { label: 'Introduksi Kuat', value: 'Paraphrase soal + thesis yang jelas. JANGAN salin kalimat soal kata per kata' },
        { label: 'Kesimpulan', value: 'Ringkas argumen utama + restate posisi. Jangan perkenalkan ide baru' },
      ],
    },
  ],

  speaking: [
    // 0: Format 3 Parts
    {
      title: 'Format IELTS Speaking: 3 Parts',
      items: [
        { label: 'Part 1', value: '4–5 menit — pertanyaan familiar: keluarga, hobi, pekerjaan, lingkungan' },
        { label: 'Part 2', value: '3–4 menit — Cue card: 1 menit persiapan, 2 menit berbicara tanpa henti' },
        { label: 'Part 3', value: '4–5 menit — diskusi abstrak, opini, isu sosial terkait topik Part 2' },
        { label: '4 Kriteria Penilaian', value: 'Fluency & Coherence | Lexical Resource | Grammatical Range & Accuracy | Pronunciation' },
        { label: 'Bukan Pengetahuan', value: 'IELTS Speaking menilai KEMAMPUAN BERBAHASA, bukan kebenaran fakta' },
        { label: 'Rekaman', value: 'Seluruh sesi direkam — berbicara dengan jelas dan volume cukup' },
      ],
    },
    // 1: Strategi Tiap Part
    {
      title: 'Strategi Setiap Part',
      items: [
        { label: 'Part 1: Extend', value: 'Jangan jawab "Yes/No" saja — tambah alasan, contoh, atau pengalaman (2–3 kalimat)' },
        { label: 'Part 2: Prep 1 Menit', value: 'Tulis poin (bukan kalimat penuh). Susun alur: past → present → future atau kronologis' },
        { label: 'Part 2: Terus Bicara', value: 'Jika kehabisan ide, elaborasi detail kecil (warna, suasana, perasaan, siapa yang bersama)' },
        { label: 'Part 3: OREO', value: 'Opinion (pendapat) → Reason (alasan) → Example (contoh) → Opinion (restate)' },
        { label: 'Jangan Diam Lama', value: 'Gunakan filler akademik: "That\'s an interesting question...", "Let me think about that..."' },
        { label: 'Koreksi Diri', value: 'Boleh self-correct: "I mean...", "What I\'m trying to say is..." — justru menunjukkan kontrol bahasa' },
      ],
    },
    // 2: Vocabulary & Pronunciation
    {
      title: 'Kosakata & Pronunciation Band 7+',
      items: [
        { label: 'Lexical Resource', value: 'Gunakan kolokasi alami: "make a decision", "take responsibility", "strong argument"' },
        { label: 'Hindari Pengulangan', value: 'Variasikan: "good" → beneficial, rewarding, fulfilling, worthwhile, valuable' },
        { label: 'Idiomatic Language', value: '"Hit the nail on the head", "a double-edged sword", "food for thought" — gunakan alami' },
        { label: 'Pronunciation', value: 'Kejelasan > Aksen — pastikan konsonan akhir jelas, intonasi naik-turun alami' },
        { label: 'Word Stress', value: 'reCORD (noun) vs reCORD (verb). PHOtograph vs phoTOgraphy vs photoGRAPHic' },
        { label: 'Connectors Lisan', value: '"Building on that...", "On the flip side...", "To elaborate on that..."' },
      ],
    },
  ],
}
