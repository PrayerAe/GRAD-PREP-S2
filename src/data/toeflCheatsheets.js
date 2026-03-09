// Cheatsheet data per TOEFL section – ringkasan strategi kunci tiap bagian

export const toeflCheatsheets = {
  reading: [
    {
      title: 'Jenis Pertanyaan TOEFL Reading',
      items: [
        { label: 'Factual Information', value: '"According to the passage..." — jawaban eksplisit di teks, scan kata kunci soal' },
        { label: 'Negative Factual', value: '"NOT true / NOT mentioned" — eliminasi 3 pilihan yang benar, sisanya adalah jawaban' },
        { label: 'Inference', value: '"It can be inferred..." — kesimpulan tersirat, harus didukung bukti teks' },
        { label: 'Vocabulary in Context', value: '"The word X is closest in meaning to..." — lihat konteks kalimat, bukan arti harfiah' },
        { label: 'Reference', value: '"The word it/they/these refers to..." — cari anteseden di kalimat sebelumnya' },
        { label: 'Sentence Simplification', value: 'Pilih kalimat yang mempertahankan ide UTAMA + hubungan logis yang sama' },
        { label: 'Insert Text', value: 'Sisipkan kalimat baru — cari kohesi: kata ganti (this/these), transisi (however/also)' },
        { label: 'Summary/Category', value: 'Pilih 3 ide utama yang mewakili passage — hindari detail kecil atau salah informasi' },
      ],
    },
    {
      title: 'Strategi Mengerjakan Passage',
      items: [
        { label: 'Urutan Ideal', value: 'Baca pertanyaan dulu → skim passage (paragraf 1 penuh + topic sentence tiap par) → jawab' },
        { label: 'Time Budget', value: '3-4 passage × 18-20 menit = total 54-72 menit. Jangan > 20 mnt per passage' },
        { label: 'Paragraf Pertama', value: 'Baca penuh — biasanya berisi thesis statement dan peta isi passage' },
        { label: 'Topic Sentence', value: 'Kalimat pertama tiap paragraf = inti. Sisanya adalah supporting details' },
        { label: 'Tandai Kata Kunci', value: 'Nama, tanggal, angka, istilah teknis, kata transisi (however, therefore)' },
        { label: 'Eliminasi Jawaban', value: 'Buang yang: terlalu ekstrem, tidak disebutkan teks, bertentangan dengan passage' },
      ],
    },
    {
      title: 'Strategi Kosakata dalam Konteks',
      items: [
        { label: 'Jangan Andalkan Hafalan', value: 'Kosakata TOEFL selalu diuji dalam konteks — arti bisa berbeda dari biasanya' },
        { label: 'Teknik Substitusi', value: 'Ganti kata yang ditanya dengan setiap pilihan — pilih yang paling cocok maknanya' },
        { label: 'Clue: Definisi', value: 'Kata dijelaskan langsung: "X, which means..." atau "X, or ..."' },
        { label: 'Clue: Kontras', value: 'Kata berlawanan: "unlike, however, but, although" → makna berlawanan' },
        { label: 'Clue: Contoh', value: '"such as, for example, including" → arti lebih umum dari contoh' },
        { label: 'Word Roots', value: 'Kenali prefix/suffix: bio- (hidup), -ology (ilmu), pre- (sebelum), -tion (nomina)' },
      ],
    },
    {
      title: 'Tips Manajemen Waktu Reading',
      items: [
        { label: 'Jangan Baca Ulang', value: 'Baca sekali dengan tujuan — scan ulang hanya saat perlu verifikasi jawaban' },
        { label: 'Skip & Return', value: 'Soal sulit? Tandai dan lanjutkan — jangan habiskan >2 menit per soal' },
        { label: 'Summary Soal Terakhir', value: 'Kerjakan soal detail dulu, soal summary/table terakhir (butuh gambaran menyeluruh)' },
        { label: 'Predict Before Read', value: 'Setelah skim, prediksi isi tiap paragraf sebelum membaca detail' },
        { label: 'Active Reading', value: 'Tulis catatan singkat: "par 1: definisi coral reef, par 2: ancaman"' },
      ],
    },
  ],

  listening: [
    {
      title: 'Struktur TOEFL Listening',
      items: [
        { label: 'Conversations', value: '2 percakapan × 5 soal = 10 soal. Setting: kampus (konsultasi dosen, administrasi)' },
        { label: 'Lectures', value: '3-4 kuliah × 6 soal = 18-24 soal. Topik akademik (sains, sejarah, seni, sosial)' },
        { label: 'Durasi Tiap Audio', value: 'Conversation: 3 menit. Lecture: 3-5 menit. Diputar SEKALI saja' },
        { label: 'Total Waktu', value: '41-57 menit untuk 28-39 soal. Soal muncul setelah audio selesai' },
        { label: 'Catatan Dibolehkan', value: 'Gunakan kertas buram untuk note-taking selama audio diputar' },
        { label: 'Foto Selama Audio', value: 'Layar menampilkan foto — pertanda subjek/konteks baru. Perhatikan!' },
      ],
    },
    {
      title: 'Jenis Soal Listening & Cara Jawab',
      items: [
        { label: 'Main Idea', value: '"What is mainly discussed?" — jawab berdasarkan topik keseluruhan, bukan detail' },
        { label: 'Detail', value: '"According to the professor..." — scan catatan untuk fakta spesifik' },
        { label: 'Function', value: '"Why does the man say X?" — cari tujuan/maksud pernyataan, bukan artinya' },
        { label: 'Attitude', value: '"How does the student feel about X?" — dengarkan intonasi, kata penilaian' },
        { label: 'Organization', value: '"How is the lecture organized?" — perhatikan struktur: kronologis/sebab-akibat' },
        { label: 'Inference', value: '"What can be inferred about X?" — kesimpulan logis dari yang diucapkan' },
        { label: 'Replay Question', value: 'Audio diputar ulang — fokus pada TUJUAN ucapan, bukan kata per kata' },
      ],
    },
    {
      title: 'Teknik Note-Taking Listening',
      items: [
        { label: 'Singkatan Umum', value: 'w/ = with, b/c = because, → = leads to, ∴ = therefore, eg = example, vs = versus' },
        { label: 'Catat Struktur', value: 'T: (topic), MP: (main point), Ex: (example), ! = penting, ? = perlu klarifikasi' },
        { label: 'Signal Words', value: 'First/second... = urutan | But/however = kontras | For example = akan ada contoh' },
        { label: 'Hindari Catat Semua', value: 'Hanya catat ide utama + detail kunci. Detail terlalu banyak = tertinggal audio' },
        { label: 'Dengarkan Penekanan', value: 'Volume naik / pengulangan = informasi penting. "This is KEY..." = pasti keluar soal' },
        { label: 'Awal Lecture Penting', value: 'Menit pertama lecture biasanya berisi topik dan main argument. Fokus penuh!' },
      ],
    },
    {
      title: 'Strategi Menghadapi Lecture Akademik',
      items: [
        { label: 'Kenali Topik Umum', value: 'Biologi, astronomi, sejarah seni, linguistik, psikologi, geologi, sosiologi' },
        { label: 'Profesor Sering Bertanya', value: 'Saat profesor bertanya di audio, itu signal bahwa poin itu penting!' },
        { label: 'Contoh = Pendukung Ide', value: 'Catat contoh singkat, tapi ingat ide UTAMA yang didukung contoh tersebut' },
        { label: 'Koreksi Diri Sendiri', value: 'Jika profesor berkata "actually, let me rephrase..." — dengarkan versi keduanya' },
        { label: 'Humor/Digression', value: 'Joke atau cerita sampingan — biasanya tidak disoal, tapi bisa disoal tujuannya' },
        { label: 'Konklusi Lecture', value: 'Bagian akhir sering berisi ringkasan atau aplikasi — note dengan tanda bintang' },
      ],
    },
  ],

  speaking: [
    {
      title: 'Overview 4 Task Speaking TOEFL iBT',
      items: [
        { label: 'Task 1 (Independent)', value: 'Pendapat pribadi tentang topik familiar. Prep: 15 detik. Speak: 45 detik' },
        { label: 'Task 2 (Campus Reading+Listen)', value: 'Baca pengumuman kampus, dengar opini mahasiswa. Prep: 30 dtk. Speak: 60 dtk' },
        { label: 'Task 3 (Academic Term+Listen)', value: 'Baca definisi konsep akademik, dengar kuliah/contoh. Prep: 30 dtk. Speak: 60 dtk' },
        { label: 'Task 4 (Academic Lecture)', value: 'Dengar kuliah (tanpa reading). Rangkum dengan kata sendiri. Prep: 20 dtk. Speak: 60 dtk' },
        { label: 'Scoring Criteria', value: 'Delivery (kefasihan, intonasi), Language Use (grammar, kosakata), Topic Development (kelengkapan)' },
        { label: 'Score Range', value: 'Setiap task dinilai 0-4 oleh AI + rater manusia. Total 0-30 poin' },
      ],
    },
    {
      title: 'Template Task 1 (Independent)',
      items: [
        { label: 'Kalimat 1 — Posisi', value: '"I personally believe/prefer that [posisi kamu]."' },
        { label: 'Kalimat 2 — Alasan 1', value: '"First and foremost, [alasan pertama]. For example, [contoh konkret]."' },
        { label: 'Kalimat 3 — Alasan 2', value: '"Additionally, [alasan kedua]. In my experience, [contoh personal]."' },
        { label: 'Kalimat 4 — Kesimpulan', value: '"Therefore, I strongly believe [ulangi posisi dengan kata berbeda]."' },
        { label: 'Target Word Count', value: '~120-130 kata dalam 45 detik = kecepatan ideal' },
        { label: 'Hindari', value: 'Jangan parafrase soal terlalu panjang, jangan diam > 2 detik, jangan bilang "I think... I think..."' },
      ],
    },
    {
      title: 'Delivery & Pronunciation Tips',
      items: [
        { label: 'Pace Ideal', value: 'Tidak terlalu cepat (sulit dipahami) / tidak terlalu lambat (kehabisan waktu konten)' },
        { label: 'Intonasi', value: 'Naikkan intonasi saat memperkenalkan poin baru, turunkan di akhir kalimat' },
        { label: 'Filler Strategy', value: 'Hindari "um, uh". Ganti dengan: "That\'s a great question...", "Let me think about that..."' },
        { label: 'Koneksi Kalimat', value: 'Pakai transisi: First... Second... Additionally... However... Therefore... In conclusion...' },
        { label: 'Konsonan Akhir', value: 'Pastikan kata berakhiran konsonan terdengar: "tes-T", "impac-T", "poin-T"' },
        { label: 'Latihan Rutin', value: 'Record diri sendiri 1 menit per hari. Dengarkan kembali — identifikasi kelemahan' },
      ],
    },
  ],

  writing: [
    {
      title: 'TOEFL Writing Task Overview',
      items: [
        { label: 'Task 1 — Integrated', value: 'Baca passage (3 menit), dengar lecture (~2 menit), tulis 150-225 kata dalam 20 menit' },
        { label: 'Task 1 — Hubungan', value: 'Lecture SELALU menyanggah (counter) atau meragukan poin-poin di reading passage' },
        { label: 'Task 2 — Independent', value: 'Tulis essay pendapat/argumentasi tentang topik umum. 300+ kata dalam 30 menit' },
        { label: 'Task 2 — Topik', value: 'Biasanya: agree/disagree, preference, advantage/disadvantage, solution to problem' },
        { label: 'Scoring', value: 'Skala 0-5 per task. Dinilai: pengembangan ide, koherensi, akurasi bahasa, kosakata akademik' },
        { label: 'Spelling & Grammar', value: 'Typo dan grammatical error mengurangi skor. Sisakan 2-3 menit untuk proofreading' },
      ],
    },
    {
      title: 'Integrated Writing — Template & Teknik',
      items: [
        { label: 'Paragraf Pembuka', value: '"The reading passage argues [X]. However, the lecture challenges/casts doubt on these points."' },
        { label: 'Body 1', value: '"First, while the reading claims [poin 1], the professor argues [counter 1]."' },
        { label: 'Body 2', value: '"Second, the reading states [poin 2], but the lecturer points out [counter 2]."' },
        { label: 'Body 3', value: '"Finally, the reading suggests [poin 3], yet the professor contends [counter 3]."' },
        { label: 'Hindari Opini Pribadi', value: 'Task 1 adalah ringkasan objektif — JANGAN tulis "I think" atau "In my opinion"' },
        { label: 'Kutip Lecture', value: 'Pakai: "The professor states that...", "According to the lecture...", "The speaker argues..."' },
      ],
    },
    {
      title: 'Independent Essay — Struktur & Strategi',
      items: [
        { label: 'Paragraf 1 — Intro', value: 'Hook sentence → parafrase topik → thesis statement (posisi jelas!)' },
        { label: 'Paragraf 2 — Body 1', value: 'Topic sentence → explanation → specific example → mini-conclusion' },
        { label: 'Paragraf 3 — Body 2', value: 'Topic sentence → explanation → specific example → mini-conclusion' },
        { label: 'Paragraf 4 — Concession (opsional)', value: 'Akui satu poin argumen lawan, tapi refute dengan alasan kuat' },
        { label: 'Paragraf 5 — Conclusion', value: 'Restate thesis (kata berbeda) → ringkas alasan → broader implication' },
        { label: 'PEEL Formula per Paragraf', value: 'Point → Explanation → Evidence/Example → Link back to thesis' },
      ],
    },
    {
      title: 'Kosakata & Transisi Akademik',
      items: [
        { label: 'Penambahan', value: 'Furthermore, Moreover, In addition, Additionally, Not only that' },
        { label: 'Kontras', value: 'However, Nevertheless, On the other hand, Conversely, Despite this' },
        { label: 'Sebab-Akibat', value: 'Therefore, Consequently, As a result, Thus, This leads to' },
        { label: 'Contoh', value: 'For instance, For example, To illustrate, This is evident in' },
        { label: 'Penekanan', value: 'In particular, Notably, It is worth noting that, Above all' },
        { label: 'Hindari', value: '"very, really, a lot, big, good/bad" → ganti: "significantly, considerably, substantial, beneficial/detrimental"' },
      ],
    },
  ],
}
