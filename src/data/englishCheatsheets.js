// Cheatsheet data per English chapter – ringkasan cepat tiap sub-bab

export const englishCheatsheets = {
  grammar: [
    // 0: Tenses
    {
      title: 'Tenses',
      items: [
        { label: 'Simple Present', value: 'V1(s/es) — kebiasaan, fakta. Signal: always, every day' },
        { label: 'Simple Past', value: 'V2 — kejadian lampau selesai. Signal: yesterday, last week' },
        { label: 'Present Perfect', value: 'have/has + V3 — lampau relevan sekarang. Signal: since, for, already' },
        { label: 'Past Perfect', value: 'had + V3 — sebelum kejadian lampau lain. Signal: before, after, by the time' },
        { label: 'Future', value: 'will + V1 — prediksi/keputusan spontan' },
        { label: 'Continuous', value: 'be + Ving — sedang berlangsung pada waktu tertentu' },
        { label: 'Tips TOEFL', value: 'Perhatikan signal words untuk menentukan tense yang tepat' },
      ],
    },
    // 1: Passive Voice
    {
      title: 'Passive Voice',
      items: [
        { label: 'Formula', value: 'Subject + to be + V3 (+ by agent)' },
        { label: 'Simple Present', value: 'is/am/are + V3' },
        { label: 'Simple Past', value: 'was/were + V3' },
        { label: 'Present Perfect', value: 'has/have been + V3' },
        { label: 'Modal', value: 'modal + be + V3 (can be done, must be finished)' },
        { label: 'Kapan Passive?', value: 'Pelaku tidak penting, tidak diketahui, atau fokus pada objek' },
      ],
    },
    // 2: Conditional Sentences
    {
      title: 'Conditional Sentences',
      items: [
        { label: 'Type 0 (Fact)', value: 'If + present, present — fakta umum/sains' },
        { label: 'Type 1 (Real)', value: 'If + present, will + V1 — kemungkinan nyata di masa depan' },
        { label: 'Type 2 (Unreal Now)', value: 'If + past, would + V1 — tidak nyata sekarang' },
        { label: 'Type 3 (Unreal Past)', value: 'If + had V3, would have V3 — penyesalan masa lalu' },
        { label: 'Were', value: 'Type 2: gunakan "were" untuk semua subjek (If I were...)' },
        { label: 'Mixed', value: 'Bisa campur Type 2 & 3: If + had V3, would + V1' },
      ],
    },
    // 3: Relative Clause
    {
      title: 'Relative Clause',
      items: [
        { label: 'Who', value: 'Untuk orang (subject): The man who called...' },
        { label: 'Whom', value: 'Untuk orang (object): The person whom I met...' },
        { label: 'Which', value: 'Untuk benda/hewan: The book which I read...' },
        { label: 'That', value: 'Untuk orang & benda (restrictive only)' },
        { label: 'Whose', value: 'Kepemilikan: The student whose grade improved...' },
        { label: 'Where/When', value: 'Tempat/waktu: The city where I live / The day when we met' },
        { label: 'Non-restrictive', value: 'Pakai koma: My sister, who is a doctor, lives in Jakarta' },
      ],
    },
    // 4: Gerund vs Infinitive
    {
      title: 'Gerund vs Infinitive',
      items: [
        { label: 'Gerund (Ving)', value: 'Setelah: enjoy, avoid, mind, suggest, finish, consider, deny' },
        { label: 'Infinitive (to V)', value: 'Setelah: want, need, decide, plan, hope, agree, refuse' },
        { label: 'Keduanya Sama', value: 'like, love, hate, begin, start, continue (arti sama)' },
        { label: 'Beda Makna: stop', value: 'stop Ving = berhenti, stop to V = berhenti untuk...' },
        { label: 'Beda Makna: remember', value: 'remember Ving = ingat sudah, remember to V = ingat akan' },
        { label: 'Setelah Preposisi', value: 'Selalu gerund: interested in learning, good at cooking' },
      ],
    },
    // 5: Causative Verbs & Wish
    {
      title: 'Causative & Wish',
      items: [
        { label: 'Make + O + V1', value: 'Memaksa: She made him apologize' },
        { label: 'Let + O + V1', value: 'Mengizinkan: Let me go' },
        { label: 'Have + O + V1', value: 'Meminta: I had him fix the car' },
        { label: 'Have + O + V3', value: 'Menyuruh (passive): I had my car fixed' },
        { label: 'Get + O + to V', value: 'Membujuk: I got him to help me' },
        { label: 'Wish + Past', value: 'Harapan sekarang: I wish I were taller' },
        { label: 'Wish + Had V3', value: 'Penyesalan: I wish I had studied harder' },
      ],
    },
  ],

  reading: [
    // 0: Skimming & Scanning
    {
      title: 'Skimming & Scanning',
      items: [
        { label: 'Skimming', value: 'Baca cepat untuk ide utama — judul, kalimat pertama tiap paragraf' },
        { label: 'Scanning', value: 'Cari info spesifik — nama, angka, kata kunci' },
        { label: 'Kapan Skim?', value: 'Pertanyaan main idea, purpose, tone' },
        { label: 'Kapan Scan?', value: 'Pertanyaan detail, according to, the author mentions' },
        { label: 'Urutan Baca', value: 'Baca soal dulu → skim passage → scan jawaban' },
        { label: 'Jangan', value: 'Jangan baca kata per kata — buang waktu!' },
      ],
    },
    // 1: Main Idea & Inference
    {
      title: 'Main Idea & Inference',
      items: [
        { label: 'Main Idea', value: 'Biasa di kalimat pertama paragraf (topic sentence)' },
        { label: 'Signal Main Idea', value: '"What is the passage mainly about?" / "The best title..."' },
        { label: 'Inference', value: 'Kesimpulan yang TERSIRAT, bukan tertulis langsung' },
        { label: 'Signal Inference', value: '"It can be inferred..." / "The author implies..."' },
        { label: 'Bukti', value: 'Jawaban inference harus didukung bukti dari teks' },
        { label: 'Eliminasi', value: 'Buang jawaban terlalu spesifik/luas/tidak disebutkan' },
      ],
    },
    // 2: Jenis Soal TOEFL
    {
      title: 'Jenis Soal Reading TOEFL',
      items: [
        { label: 'Factual', value: '"According to..." — jawaban eksplisit di teks' },
        { label: 'Negative Factual', value: '"NOT mentioned / NOT true" — eliminasi 3 yang benar' },
        { label: 'Vocabulary', value: '"The word X is closest in meaning to..." — lihat konteks' },
        { label: 'Reference', value: '"The word it/they refers to..." — cari anteseden di kalimat sebelumnya' },
        { label: 'Purpose', value: '"Why does the author mention..." — fungsi dalam argumen' },
        { label: 'Insert', value: 'Sisipkan kalimat — cari kohesi (this, however, also)' },
      ],
    },
    // 3: Latihan Reading Passage
    {
      title: 'Strategi Mengerjakan Passage',
      items: [
        { label: 'Waktu', value: '±20 menit per passage (3-4 passage dalam TOEFL)' },
        { label: 'Baca Soal Dulu', value: 'Tahu apa yang dicari sebelum baca passage' },
        { label: 'Paragraf Pertama', value: 'Baca penuh — biasanya berisi thesis/main idea' },
        { label: 'Topic Sentence', value: 'Kalimat pertama tiap paragraf = inti paragraf' },
        { label: 'Kata Kunci', value: 'Garis bawahi nama, tahun, istilah teknis' },
        { label: 'Jangan Tebak', value: 'Setiap jawaban harus bisa dibuktikan dari teks' },
      ],
    },
  ],

  vocabulary: [
    // 0: Academic Word List
    {
      title: 'Academic Word List',
      items: [
        { label: 'Analyze', value: 'Menganalisis — analysis (n), analytical (adj)' },
        { label: 'Significant', value: 'Penting/bermakna — significance (n), significantly (adv)' },
        { label: 'Constitute', value: 'Membentuk/menyusun — constitution (n), constitutional (adj)' },
        { label: 'Derive', value: 'Memperoleh/berasal — derivation (n), derivative (adj)' },
        { label: 'Establish', value: 'Mendirikan/menetapkan — establishment (n)' },
        { label: 'Tips', value: 'Hafalkan kata + seluruh keluarga katanya (noun, verb, adj, adv)' },
      ],
    },
    // 1: Word Formation
    {
      title: 'Word Formation',
      items: [
        { label: 'Prefix: un-, in-, dis-', value: 'Negasi → unable, incorrect, disagree' },
        { label: 'Prefix: re-, pre-, over-', value: 'Ulang/sebelum/berlebih → rebuild, preview, overcome' },
        { label: 'Suffix Noun', value: '-tion, -ment, -ness, -ity → action, movement, happiness, ability' },
        { label: 'Suffix Adjective', value: '-ful, -less, -able, -ous → helpful, careless, readable, famous' },
        { label: 'Suffix Verb', value: '-ize, -ify, -en → modernize, simplify, strengthen' },
        { label: 'Suffix Adverb', value: '-ly → quickly, carefully, significantly' },
      ],
    },
    // 2: Synonym & Context Clues
    {
      title: 'Synonym & Context Clues',
      items: [
        { label: 'Definisi', value: 'Kata dijelaskan langsung: "X, which means..."' },
        { label: 'Contoh', value: 'Diperjelas dengan contoh: "such as", "for example"' },
        { label: 'Kontras', value: 'Berlawanan: "unlike", "however", "but", "although"' },
        { label: 'Restatement', value: 'Diulang dengan kata lain: "in other words", "that is"' },
        { label: 'Inference', value: 'Simpulkan dari konteks kalimat keseluruhan' },
        { label: 'Strategi', value: 'Ganti kata yang ditanya dengan pilihan jawaban — mana yang cocok?' },
      ],
    },
    // 3: Confusing Word Pairs
    {
      title: 'Confusing Word Pairs',
      items: [
        { label: 'Affect vs Effect', value: 'Affect = verb (mempengaruhi), Effect = noun (efek/dampak)' },
        { label: 'Accept vs Except', value: 'Accept = menerima, Except = kecuali' },
        { label: 'Principle vs Principal', value: 'Principle = prinsip, Principal = kepala sekolah/utama' },
        { label: 'Complement vs Compliment', value: 'Complement = melengkapi, Compliment = pujian' },
        { label: 'Emigrate vs Immigrate', value: 'Emigrate = keluar negeri, Immigrate = masuk negeri' },
        { label: 'Advice vs Advise', value: 'Advice = noun (saran), Advise = verb (menasihati)' },
      ],
    },
    // 4: Academic Collocations & Transitions
    {
      title: 'Collocations & Transitions',
      items: [
        { label: 'Conduct research', value: 'BUKAN do research (formal/academic)' },
        { label: 'Draw a conclusion', value: 'BUKAN take a conclusion' },
        { label: 'Pose a threat', value: 'BUKAN give a threat' },
        { label: 'Addition', value: 'Furthermore, Moreover, In addition, Additionally' },
        { label: 'Contrast', value: 'However, Nevertheless, On the other hand, Conversely' },
        { label: 'Cause-Effect', value: 'Therefore, Consequently, As a result, Thus' },
        { label: 'Conclusion', value: 'In conclusion, To sum up, Overall, In summary' },
      ],
    },
  ],

  structure: [
    // 0: Subject-Verb Agreement
    {
      title: 'Subject-Verb Agreement',
      items: [
        { label: 'Singular', value: 'He/She/It + V(s/es): She writes, The cat runs' },
        { label: 'Plural', value: 'They/We/I/You + V1: They write, We run' },
        { label: 'Prepositional Phrase', value: 'Abaikan phrase: "The box OF books IS heavy"' },
        { label: 'Each/Every', value: 'Selalu singular: Each student IS, Every person HAS' },
        { label: 'Neither...nor', value: 'Verb ikut subjek terdekat: Neither he nor they ARE' },
        { label: 'Uncountable', value: 'Selalu singular: Information IS, News IS, Advice IS' },
      ],
    },
    // 1: Inversion & TOEFL Structure
    {
      title: 'Inversion',
      items: [
        { label: 'Negative Adverb', value: 'Never HAVE I seen... / Seldom DOES he arrive...' },
        { label: 'Not only...but also', value: 'Not only DID she win, but she also broke the record' },
        { label: 'Only + Adverb', value: 'Only after he left DID I realize...' },
        { label: 'No sooner...than', value: 'No sooner HAD I arrived THAN it started raining' },
        { label: 'Hardly...when', value: 'Hardly HAD she finished WHEN the bell rang' },
        { label: 'Pola', value: 'Negative word + Auxiliary + Subject + Main Verb' },
      ],
    },
    // 2: Subjunctive & Error Recognition
    {
      title: 'Subjunctive & Error Recognition',
      items: [
        { label: 'Subjunctive Formula', value: 'Verb setelah suggest/demand/insist: + (that) S + V1 (tanpa to/s)' },
        { label: 'Contoh', value: 'I suggest that he STUDY (bukan studies/studied)' },
        { label: 'It is important that', value: '...she BE on time (bukan is)' },
        { label: 'Error: Double Subject', value: '"My father he..." → hapus "he"' },
        { label: 'Error: Wrong Form', value: '"She is interest..." → interested (V3 untuk perasaan)' },
        { label: 'Error: Missing Verb', value: 'Setiap clause HARUS punya verb!' },
      ],
    },
    // 3: Parallel Structure
    {
      title: 'Parallel Structure',
      items: [
        { label: 'Aturan', value: 'Item dalam daftar harus bentuk gramatikal sama' },
        { label: 'Benar', value: 'She likes reading, writing, AND swimming (Ving, Ving, Ving)' },
        { label: 'Salah', value: 'She likes reading, to write, AND swim ✗' },
        { label: 'Not only...but also', value: 'Keduanya harus paralel: Not only smart but also diligent' },
        { label: 'Both...and', value: 'Both...and, Either...or, Neither...nor → paralel!' },
        { label: 'Signal TOEFL', value: 'Cari kata and, or, but, not only, both → cek paralel' },
      ],
    },
    // 4: Comparatives & Superlatives
    {
      title: 'Comparatives & Superlatives',
      items: [
        { label: '1 suku kata', value: '-er / -est: tall → taller → tallest' },
        { label: '2+ suku kata', value: 'more / most: beautiful → more beautiful → most beautiful' },
        { label: 'Irregular', value: 'good-better-best, bad-worse-worst, far-farther-farthest' },
        { label: 'As...as', value: 'She is AS tall AS her brother (perbandingan setara)' },
        { label: 'The more...the more', value: 'The more you practice, the better you become' },
        { label: 'Error Umum', value: '"more better" ✗ → "better" ✓ (jangan double comparative)' },
      ],
    },
    // 5: Articles & Common TOEFL Errors
    {
      title: 'Articles & Common Errors',
      items: [
        { label: 'A/An', value: 'Tak tentu, singular: a book, an apple (bunyi vokal = an)' },
        { label: 'The', value: 'Sudah diketahui/spesifik: the sun, the book I bought' },
        { label: 'No Article', value: 'Plural umum & uncountable: Cats are cute, Water is important' },
        { label: 'The + Unique', value: 'the earth, the internet, the government, the environment' },
        { label: 'Error: Another vs Other', value: 'Another + singular, Other + plural: another book, other books' },
        { label: 'Top Error', value: '"Informations" ✗ — information is uncountable!' },
      ],
    },
  ],
}
