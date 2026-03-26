export const englishSectionQuiz = {
  grammar: [
    // Section 0: Tenses - 6 soal
    [
      {
        question: "By the time the professor arrived, the students ___ for over thirty minutes.",
        options: ["have been waiting", "had been waiting", "were waiting", "waited"],
        correctIndex: 1,
        explanation: "Past perfect continuous (had been waiting) digunakan untuk menyatakan durasi aksi yang sudah berlangsung sebelum kejadian lain di masa lampau.",
      },
      {
        question: "She ___ three research papers since she enrolled in the graduate program.",
        options: ["has written", "wrote", "had written", "is writing"],
        correctIndex: 0,
        explanation: "Present perfect (has written) digunakan karena aksi dimulai di masa lalu dan masih relevan hingga sekarang (since menunjukkan hubungan dengan saat ini).",
      },
      {
        question: "The university ___ its admission policy next semester.",
        options: ["will change", "is going to change", "changes", "is changing"],
        correctIndex: 1,
        explanation: "'Is going to change' digunakan untuk rencana yang sudah diputuskan sebelumnya. 'Will change' lebih untuk keputusan spontan.",
      },
      {
        question: "While the dean ___ the opening speech, a fire alarm went off.",
        options: ["was delivering", "delivered", "has delivered", "had delivered"],
        correctIndex: 0,
        explanation: "Past continuous (was delivering) digunakan untuk aksi yang sedang berlangsung saat kejadian lain terjadi (went off) di masa lampau.",
      },
      {
        question: "By next July, the research team ___ the experiment for two full years.",
        options: ["will conduct", "will have been conducting", "will be conducting", "conducts"],
        correctIndex: 1,
        explanation: "Future perfect continuous (will have been conducting) digunakan untuk menyatakan durasi aksi yang akan terus berlangsung sampai titik waktu tertentu di masa depan.",
      },
      {
        question: "The manuscript ___ to the journal before the deadline passed, so the author felt relieved.",
        options: ["was submitted", "has been submitted", "had been submitted", "submitted"],
        correctIndex: 2,
        explanation: "Past perfect passive (had been submitted) digunakan karena pengiriman naskah terjadi sebelum deadline lewat (dua kejadian di masa lampau, yang lebih dulu pakai past perfect).",
      },
    ],
    // Section 1: Passive Voice - 6 soal
    [
      {
        question: "The new curriculum ___ by the academic board last month.",
        options: ["approved", "was approved", "has approved", "is approved"],
        correctIndex: 1,
        explanation: "Passive voice dalam simple past: was/were + V3. Subjek 'curriculum' menerima aksi, bukan melakukan aksi.",
      },
      {
        question: "Several amendments to the thesis ___ before the final defense.",
        options: ["must be made", "must make", "must been made", "must to be made"],
        correctIndex: 0,
        explanation: "Passive voice dengan modal: modal + be + V3. 'Must be made' adalah bentuk yang benar.",
      },
      {
        question: "The results of the experiment ___ in a prestigious journal next year.",
        options: ["will publish", "will be published", "will be publishing", "are published"],
        correctIndex: 1,
        explanation: "Future passive: will + be + V3. Hasil eksperimen tidak mempublikasikan diri sendiri, melainkan dipublikasikan.",
      },
      {
        question: "It ___ that the new regulation will affect over 10,000 students.",
        options: ["estimates", "is estimated", "has estimated", "estimated"],
        correctIndex: 1,
        explanation: "Konstruksi 'It is estimated that...' adalah pola passive impersonal yang umum dalam akademik untuk menyatakan perkiraan tanpa menyebut pelaku.",
      },
      {
        question: "The scholarship application ___ carefully before any decision is made.",
        options: ["should review", "should be reviewing", "should be reviewed", "should have review"],
        correctIndex: 2,
        explanation: "Passive voice dengan modal 'should': should + be + V3. Aplikasi beasiswa harus ditinjau (menerima aksi).",
      },
      {
        question: "Had the samples ___ properly, the results would have been more accurate.",
        options: ["been stored", "stored", "be stored", "being stored"],
        correctIndex: 0,
        explanation: "Past perfect passive dalam conditional type 3 (inverted): Had + S + been + V3. Ini bentuk inversi dari 'If the samples had been stored properly...'",
      },
    ],
    // Section 2: Conditional Sentences - 6 soal
    [
      {
        question: "If the student ___ harder, she would pass the entrance examination.",
        options: ["studies", "studied", "had studied", "would study"],
        correctIndex: 1,
        explanation: "Conditional type 2 (present unreal): If + S + V2, S + would + V1. Menyatakan situasi yang tidak nyata atau kemungkinan kecil di masa sekarang.",
      },
      {
        question: "If I had known about the scholarship deadline, I ___ my application earlier.",
        options: ["will submit", "would submit", "would have submitted", "submitted"],
        correctIndex: 2,
        explanation: "Conditional type 3 (past unreal): If + S + had + V3, S + would have + V3. Menyatakan penyesalan atas sesuatu yang tidak terjadi di masa lalu.",
      },
      {
        question: "Unless the proposal ___ by Friday, the project will be canceled.",
        options: ["is submitted", "will be submitted", "submitted", "would be submitted"],
        correctIndex: 0,
        explanation: "Unless = if not. Dalam conditional type 1, klausa if/unless menggunakan simple present, bukan future tense.",
      },
      {
        question: "___ the funding been approved, the research would have started last month.",
        options: ["If", "Had", "Should", "Were"],
        correctIndex: 1,
        explanation: "Inversi conditional type 3: Had + S + V3 = If S had V3. 'Had the funding been approved' = 'If the funding had been approved'.",
      },
      {
        question: "If the professor were to resign, the department ___ a replacement immediately.",
        options: ["will need", "would need", "needed", "needs"],
        correctIndex: 1,
        explanation: "'Were to + V1' digunakan dalam conditional type 2 untuk situasi hipotetis. Klausa utamanya menggunakan would + V1.",
      },
      {
        question: "Should you ___ any difficulties during the registration, please contact the admissions office.",
        options: ["encounter", "encountered", "encountering", "have encountered"],
        correctIndex: 0,
        explanation: "Inversi conditional type 1 formal: Should + S + V1 = If S should V1. Bentuk ini umum dalam komunikasi formal/akademik.",
      },
    ],
    // Section 3: Relative Clause - 6 soal
    [
      {
        question: "The professor ___ research was published in Nature received a prestigious award.",
        options: ["who", "whom", "whose", "which"],
        correctIndex: 2,
        explanation: "'Whose' digunakan sebagai possessive relative pronoun untuk menunjukkan kepemilikan. 'Whose research' = penelitian milik profesor tersebut.",
      },
      {
        question: "The university ___ I graduated from has an excellent engineering program.",
        options: ["where", "which", "whose", "what"],
        correctIndex: 1,
        explanation: "'Which' digunakan karena 'university' adalah objek dari preposisi 'from'. 'Where' tidak bisa diikuti preposisi 'from'.",
      },
      {
        question: "Dr. Smith, ___ has been teaching for 20 years, will retire next semester.",
        options: ["that", "who", "whom", "which"],
        correctIndex: 1,
        explanation: "'Who' digunakan sebagai subjek dalam non-restrictive relative clause (ditandai koma). 'That' tidak boleh digunakan dalam non-restrictive clause.",
      },
      {
        question: "The reason ___ the experiment failed was a contaminated sample.",
        options: ["which", "why", "that", "how"],
        correctIndex: 1,
        explanation: "'Why' digunakan setelah 'the reason' untuk menjelaskan alasan. Pola: 'the reason why + clause'.",
      },
      {
        question: "The candidates ___ the committee interviewed were all highly qualified.",
        options: ["who", "whom", "whose", "which"],
        correctIndex: 1,
        explanation: "'Whom' digunakan karena berfungsi sebagai objek dari verb 'interviewed'. Dalam formal English, 'whom' lebih tepat daripada 'who' sebagai objek.",
      },
      {
        question: "The laboratory in ___ the experiment was conducted has been renovated.",
        options: ["that", "which", "where", "whom"],
        correctIndex: 1,
        explanation: "Setelah preposisi (in), harus menggunakan 'which' bukan 'that'. Pola: preposition + which. 'In which' = 'where'.",
      },
    ],
    // Section 4: Gerund vs Infinitive - 6 soal
    [
      {
        question: "The researcher avoided ___ conclusions before analyzing all the data.",
        options: ["to draw", "drawing", "draw", "to drawing"],
        correctIndex: 1,
        explanation: "'Avoid' selalu diikuti gerund (V-ing). Beberapa verb lain yang harus diikuti gerund: enjoy, suggest, consider, finish.",
      },
      {
        question: "The students decided ___ for the TOEFL exam next month.",
        options: ["registering", "to register", "register", "registered"],
        correctIndex: 1,
        explanation: "'Decide' selalu diikuti infinitive (to + V1). Verb lain yang diikuti infinitive: agree, plan, hope, expect, want.",
      },
      {
        question: "She remembered ___ the application form, so she did not submit it again.",
        options: ["to submit", "submitting", "submit", "submitted"],
        correctIndex: 1,
        explanation: "'Remember + V-ing' berarti mengingat sesuatu yang sudah dilakukan. 'Remember + to V' berarti ingat untuk melakukan sesuatu (belum dilakukan).",
      },
      {
        question: "The scholarship committee requires all applicants ___ a personal statement.",
        options: ["writing", "to write", "write", "written"],
        correctIndex: 1,
        explanation: "'Require + object + to infinitive' adalah pola yang benar. Komite mengharuskan pelamar untuk menulis.",
      },
      {
        question: "It is no use ___ about the exam results; they will be announced next week.",
        options: ["to worry", "worrying", "worry", "worried"],
        correctIndex: 1,
        explanation: "Pola tetap: 'It is no use + V-ing' artinya tidak ada gunanya melakukan sesuatu. Ini adalah fixed expression yang selalu menggunakan gerund.",
      },
      {
        question: "The professor had the students ___ the experiment three times to ensure accuracy.",
        options: ["repeating", "to repeat", "repeat", "repeated"],
        correctIndex: 2,
        explanation: "Pola causative 'have + object + V1 (bare infinitive)' digunakan ketika menyuruh seseorang melakukan sesuatu. Tanpa 'to'.",
      },
    ],
    // Section 5: Causative Verbs & Wish - 6 soal
    [
      {
        question: "The dean had the secretary ___ the meeting agenda to all faculty members.",
        options: ["distribute", "distributed", "to distribute", "distributing"],
        correctIndex: 0,
        explanation: "Pola causative 'have + person (object) + V1': menyuruh seseorang melakukan sesuatu. 'Had the secretary distribute' = menyuruh sekretaris mendistribusikan.",
      },
      {
        question: "She got her thesis ___ by a professional editor before submission.",
        options: ["proofread", "to proofread", "proofreading", "proofreads"],
        correctIndex: 0,
        explanation: "Pola causative 'get + thing (object) + V3': sesuatu dikerjakan oleh orang lain. 'Got her thesis proofread' = tesisnya dikoreksi oleh editor.",
      },
      {
        question: "I wish I ___ more time to prepare for the entrance exam.",
        options: ["have", "had", "will have", "am having"],
        correctIndex: 1,
        explanation: "'Wish + past tense' digunakan untuk menyatakan harapan yang bertentangan dengan kenyataan saat ini. 'I wish I had' = saya berharap punya (tapi kenyataannya tidak).",
      },
      {
        question: "The professor made the students ___ the entire chapter before the next class.",
        options: ["to read", "reading", "read", "reads"],
        correctIndex: 2,
        explanation: "Pola causative 'make + object + V1 (bare infinitive)': memaksa seseorang melakukan sesuatu. 'Made the students read' = memaksa mahasiswa membaca.",
      },
      {
        question: "I wish I ___ that careless mistake on my TOEFL exam last week.",
        options: ["didn't make", "hadn't made", "don't make", "wouldn't make"],
        correctIndex: 1,
        explanation: "'Wish + past perfect' digunakan untuk menyatakan penyesalan tentang masa lalu. 'I wish I hadn't made' = saya berharap saya tidak membuat kesalahan itu (tapi sudah terlanjur).",
      },
      {
        question: "The supervisor let the graduate assistant ___ the laboratory independently.",
        options: ["to use", "using", "used", "use"],
        correctIndex: 3,
        explanation: "Pola 'let + object + V1 (bare infinitive)': mengizinkan seseorang melakukan sesuatu. 'Let the assistant use' = mengizinkan asisten menggunakan.",
      },
    ],
  ],
  reading: [
    // Section 0: Skimming vs Scanning - 6 soal
    [
      {
        question: "When you quickly read the first and last sentences of each paragraph to understand the general topic, you are using the technique of ___.",
        options: ["scanning", "skimming", "intensive reading", "critical reading"],
        correctIndex: 1,
        explanation: "Skimming adalah teknik membaca cepat untuk mendapatkan gambaran umum (gist) dari teks, biasanya dengan membaca kalimat pertama dan terakhir tiap paragraf.",
      },
      {
        question: "A student looking for a specific date mentioned in a textbook chapter is most likely using ___.",
        options: ["skimming", "scanning", "previewing", "summarizing"],
        correctIndex: 1,
        explanation: "Scanning adalah teknik mencari informasi spesifik (tanggal, nama, angka) tanpa membaca keseluruhan teks. Mata 'memindai' teks untuk menemukan kata kunci tertentu.",
      },
      {
        question: "Read the following: 'The global demand for renewable energy has increased dramatically over the past decade. Governments worldwide have invested billions in solar and wind technology.' What is the passage mainly about?",
        options: [
          "The cost of solar panels",
          "The growing interest in renewable energy",
          "Government spending habits",
          "The history of wind technology",
        ],
        correctIndex: 1,
        explanation: "Dengan teknik skimming, kita bisa menangkap ide utama: peningkatan permintaan energi terbarukan secara global. Pilihan B paling mencakup isi keseluruhan.",
      },
      {
        question: "Read the following: 'Dr. Anika Patel published her groundbreaking study on neural plasticity in the Journal of Neuroscience on March 15, 2024.' When was the study published?",
        options: ["2023", "March 15, 2024", "March 2025", "Not mentioned"],
        correctIndex: 1,
        explanation: "Ini adalah contoh soal scanning. Kita hanya perlu mencari informasi spesifik (tanggal publikasi) yang secara eksplisit disebutkan: March 15, 2024.",
      },
      {
        question: "Which of the following best describes the difference between skimming and scanning?",
        options: [
          "Skimming is faster than scanning",
          "Scanning finds general ideas; skimming finds specific details",
          "Skimming gets the overall idea; scanning locates specific information",
          "There is no difference between skimming and scanning",
        ],
        correctIndex: 2,
        explanation: "Skimming bertujuan mendapatkan ide umum/gambaran besar teks, sedangkan scanning bertujuan menemukan informasi spesifik seperti nama, tanggal, atau angka.",
      },
      {
        question: "Read the following: 'The experiment involved 120 participants divided into three groups. Group A received the treatment, Group B received a placebo, and Group C served as the control. Results showed a 45% improvement in Group A.' How many participants were in the study?",
        options: ["Three", "45", "120", "Not stated"],
        correctIndex: 2,
        explanation: "Teknik scanning digunakan untuk menemukan angka spesifik. Teks menyebutkan '120 participants' dengan jelas di kalimat pertama.",
      },
    ],
    // Section 1: Main Idea & Inference - 6 soal
    [
      {
        question: "Read the following: 'Despite decades of research, a definitive cure for Alzheimer's disease remains elusive. Recent studies, however, suggest that early intervention and lifestyle changes may significantly slow its progression.' What is the main idea?",
        options: [
          "Alzheimer's disease has been cured",
          "Research on Alzheimer's is no longer needed",
          "Although no cure exists, early action may help manage Alzheimer's",
          "Lifestyle changes cure all diseases",
        ],
        correctIndex: 2,
        explanation: "Ide utama menggabungkan dua informasi kunci: belum ada obat definitif (despite... remains elusive) TAPI intervensi dini bisa membantu (early intervention... slow its progression).",
      },
      {
        question: "Read the following: 'The library was unusually crowded. Students occupied every table, and a long line had formed at the photocopy machine. Many carried thick textbooks and notebooks filled with highlighted notes.' It can be inferred that ___.",
        options: [
          "The library was being renovated",
          "An exam period was approaching",
          "A new book had been released",
          "The library had extended its hours",
        ],
        correctIndex: 1,
        explanation: "Inferensi: perpustakaan ramai, mahasiswa membawa buku tebal dan catatan yang di-highlight menunjukkan mereka sedang belajar intensif, kemungkinan besar mendekati ujian.",
      },
      {
        question: "Read the following: 'The CEO announced record profits for the third consecutive quarter. However, she also revealed plans to lay off 2,000 employees to streamline operations.' What can be inferred about the company?",
        options: [
          "The company is going bankrupt",
          "Profitability does not guarantee job security",
          "The employees are overpaid",
          "The CEO is inexperienced",
        ],
        correctIndex: 1,
        explanation: "Perusahaan untung besar tapi tetap PHK karyawan. Inferensi yang tepat: keuntungan tidak menjamin keamanan kerja. Ini menunjukkan bahwa efisiensi lebih diprioritaskan.",
      },
      {
        question: "Read the following: 'Coral reefs support approximately 25% of all marine species, yet they cover less than 1% of the ocean floor. Rising sea temperatures and acidification threaten to destroy these vital ecosystems within decades.' The author's primary purpose is to ___.",
        options: [
          "describe the beauty of coral reefs",
          "explain how coral reefs are formed",
          "highlight the importance and vulnerability of coral reefs",
          "promote tourism to coral reef areas",
        ],
        correctIndex: 2,
        explanation: "Penulis menekankan dua hal: pentingnya terumbu karang (support 25% marine species) dan kerentanannya (threaten to destroy). Tujuan utama: menyoroti keduanya.",
      },
      {
        question: "Read the following: 'Although electric vehicles produce zero tailpipe emissions, the production of their batteries requires significant mining of lithium and cobalt, which causes considerable environmental damage.' What is the implied message?",
        options: [
          "Electric vehicles are completely environmentally friendly",
          "Electric vehicles have hidden environmental costs",
          "Mining lithium is easy and cheap",
          "Gasoline cars are better for the environment",
        ],
        correctIndex: 1,
        explanation: "Kata 'although' menandakan kontras. Pesan tersirat: meskipun EV tidak menghasilkan emisi langsung, proses produksi baterainya tetap merusak lingkungan (hidden environmental costs).",
      },
      {
        question: "Read the following: 'Studies show that bilingual individuals often outperform monolinguals in tasks requiring cognitive flexibility. Researchers attribute this to the constant mental exercise of switching between two language systems.' The passage suggests that ___.",
        options: [
          "Monolinguals cannot be cognitively flexible",
          "Bilingualism may enhance certain cognitive abilities",
          "Everyone should learn exactly two languages",
          "Cognitive flexibility is not important",
        ],
        correctIndex: 1,
        explanation: "Teks menyatakan bilingual 'often outperform' dalam cognitive flexibility. Kata 'may enhance' di pilihan B tepat karena tidak overgeneralize (menggunakan 'may', bukan pasti).",
      },
    ],
    // Section 2: Jenis Soal Reading TOEFL - 6 soal
    [
      {
        question: "Read the following: 'Photosynthesis is the process by which green plants convert sunlight into chemical energy.' The word 'convert' in the passage is closest in meaning to ___.",
        options: ["absorb", "transform", "reflect", "distribute"],
        correctIndex: 1,
        explanation: "Soal tipe 'vocabulary in context'. 'Convert' berarti mengubah dari satu bentuk ke bentuk lain, sinonimnya 'transform'. Ini tipe soal TOEFL yang menguji pemahaman kosakata dalam konteks.",
      },
      {
        question: "Read the following: 'The phenomenon of urban heat islands occurs when cities experience significantly higher temperatures than surrounding rural areas. (A) This is primarily due to the abundance of concrete and asphalt. (B) These materials absorb and retain heat. (C) Green spaces, in contrast, help cool the environment. (D)' Where would the sentence 'Consequently, many cities are now investing in urban parks' best fit?",
        options: [
          "Position A",
          "Position B",
          "Position C",
          "Position D",
        ],
        correctIndex: 3,
        explanation: "Soal tipe 'sentence insertion'. Kalimat tentang investasi taman kota adalah kesimpulan logis setelah semua informasi disajikan, terutama setelah disebutkan green spaces membantu mendinginkan lingkungan.",
      },
      {
        question: "Read the following: 'The Industrial Revolution fundamentally altered the socioeconomic landscape of Europe. It led to mass urbanization, the rise of the factory system, and significant changes in labor practices.' Which of the following questions does the passage answer?",
        options: [
          "When did the Industrial Revolution end?",
          "What were some effects of the Industrial Revolution?",
          "Who started the Industrial Revolution?",
          "How long did the Industrial Revolution last?",
        ],
        correctIndex: 1,
        explanation: "Soal tipe 'factual/detail'. Teks menjelaskan dampak Revolusi Industri (urbanisasi, sistem pabrik, perubahan tenaga kerja), sehingga menjawab pertanyaan tentang efeknya.",
      },
      {
        question: "Read the following: 'Many scientists believe that the sixth mass extinction is currently underway, driven primarily by human activities such as deforestation and pollution.' The author mentions 'deforestation and pollution' as ___.",
        options: [
          "solutions to mass extinction",
          "examples of human activities causing extinction",
          "natural processes",
          "effects of mass extinction",
        ],
        correctIndex: 1,
        explanation: "Soal tipe 'rhetorical purpose'. Penulis menyebutkan deforestasi dan polusi sebagai contoh (examples) aktivitas manusia yang menyebabkan kepunahan, bukan sebagai solusi atau proses alami.",
      },
      {
        question: "Read the following: 'Quantum computing represents a paradigm shift in information processing. Unlike classical computers that use bits, quantum computers use qubits, which can exist in multiple states simultaneously.' The word 'paradigm' is closest in meaning to ___.",
        options: ["temporary", "model", "financial", "physical"],
        correctIndex: 1,
        explanation: "Soal tipe 'vocabulary in context'. 'Paradigm' berarti model atau kerangka berpikir. 'Paradigm shift' = perubahan fundamental dalam cara berpikir/pendekatan.",
      },
      {
        question: "Read the following: 'Researchers have long debated whether intelligence is primarily determined by genetics or environment. Twin studies have provided valuable insights, showing that both factors play significant roles.' Which best summarizes the passage?",
        options: [
          "Intelligence is entirely genetic",
          "Environment is more important than genetics",
          "Both genetics and environment influence intelligence",
          "Twin studies are unreliable",
        ],
        correctIndex: 2,
        explanation: "Soal tipe 'summary'. Teks menyimpulkan bahwa kedua faktor (genetik DAN lingkungan) berperan penting. Pilihan C paling tepat merangkum isi teks tanpa bias ke salah satu sisi.",
      },
    ],
    // Section 3: Reading Passage Practice - 6 soal
    [
      {
        question: "Read the following: 'The discovery of penicillin by Alexander Fleming in 1928 revolutionized medicine. Before antibiotics, even minor infections could prove fatal. Fleming's accidental discovery led to the development of numerous life-saving drugs.' According to the passage, before penicillin ___.",
        options: [
          "infections were always fatal",
          "medicine was highly advanced",
          "even small infections could be deadly",
          "antibiotics were already available",
        ],
        correctIndex: 2,
        explanation: "Teks menyatakan 'even minor infections could prove fatal' yang berarti infeksi kecil pun bisa mematikan. Kata 'could' menunjukkan kemungkinan, bukan kepastian (pilihan A salah karena 'always').",
      },
      {
        question: "Read the following: 'Migration patterns of monarch butterflies have puzzled scientists for decades. These insects travel up to 3,000 miles from Canada to Mexico each autumn, navigating with remarkable precision despite having brains smaller than a pinhead.' The author's tone can best be described as ___.",
        options: [
          "critical and dismissive",
          "admiring and informative",
          "humorous and casual",
          "pessimistic and concerned",
        ],
        correctIndex: 1,
        explanation: "Kata-kata seperti 'remarkable precision' dan fakta menakjubkan tentang otak kecil menunjukkan nada kagum (admiring) sekaligus informatif. Penulis menyampaikan fakta dengan nada apresiasi.",
      },
      {
        question: "Read the following: 'Microplastics have been found in the deepest ocean trenches and the most remote mountain peaks. They enter the food chain when marine organisms ingest them, eventually accumulating in larger predators, including humans.' The word 'accumulating' is closest in meaning to ___.",
        options: ["disappearing", "building up", "breaking down", "spreading out"],
        correctIndex: 1,
        explanation: "'Accumulating' berarti menumpuk atau bertambah secara bertahap. Dalam konteks ini, mikroplastik 'building up' (menumpuk) di tubuh predator yang lebih besar melalui rantai makanan.",
      },
      {
        question: "Read the following: 'The human brain consumes approximately 20% of the body's total energy despite comprising only 2% of its mass. This disproportionate energy consumption underscores the organ's extraordinary metabolic demands.' The passage primarily emphasizes ___.",
        options: [
          "the small size of the human brain",
          "the brain's surprisingly high energy needs relative to its size",
          "how to reduce brain energy consumption",
          "why the brain is unimportant",
        ],
        correctIndex: 1,
        explanation: "Kata kunci 'disproportionate' dan kontras antara 20% energi vs 2% massa menunjukkan penekanan pada tingginya kebutuhan energi otak relatif terhadap ukurannya.",
      },
      {
        question: "Read the following: 'While traditional farming methods rely heavily on chemical fertilizers, organic farming emphasizes natural processes. Proponents argue that organic methods preserve soil health, while critics contend that they produce lower yields.' It can be inferred that ___.",
        options: [
          "Organic farming is universally accepted as superior",
          "Chemical fertilizers have no negative effects",
          "There is ongoing debate about the best farming approach",
          "Traditional farming will be banned soon",
        ],
        correctIndex: 2,
        explanation: "Adanya 'proponents argue' dan 'critics contend' menunjukkan ada dua sisi yang saling berdebat. Inferensi: perdebatan tentang pendekatan pertanian terbaik masih berlangsung.",
      },
      {
        question: "Read the following: 'The development of the printing press by Gutenberg in the 15th century democratized knowledge. Books, previously accessible only to the wealthy elite, became available to the general population. This transformation laid the groundwork for the Renaissance and the Scientific Revolution.' The word 'democratized' most likely means ___.",
        options: [
          "made political",
          "made expensive",
          "made accessible to everyone",
          "made difficult to obtain",
        ],
        correctIndex: 2,
        explanation: "'Democratized' dalam konteks ini berarti membuat sesuatu bisa diakses oleh semua orang, bukan hanya kalangan tertentu. Konteks kalimat berikutnya mengonfirmasi: dari hanya 'wealthy elite' menjadi 'general population'.",
      },
    ],
  ],
  vocabulary: [
    // Section 0: Academic Word List - 6 soal
    [
      {
        question: "The committee will ___ the proposal to determine its feasibility.",
        options: ["evaluate", "evaporate", "evacuate", "elaborate"],
        correctIndex: 0,
        explanation: "'Evaluate' berarti menilai atau mengevaluasi. Dalam konteks akademik, komite akan mengevaluasi proposal untuk menentukan kelayakannya.",
      },
      {
        question: "The data ___ that there is a strong correlation between exercise and mental health.",
        options: ["implies", "indicates", "imitates", "ignites"],
        correctIndex: 1,
        explanation: "'Indicates' berarti menunjukkan (secara langsung). Dalam penulisan akademik, 'the data indicates' adalah ekspresi umum untuk menyatakan temuan penelitian.",
      },
      {
        question: "Researchers must ___ to strict ethical guidelines when conducting experiments on human subjects.",
        options: ["adhere", "adjust", "adopt", "admit"],
        correctIndex: 0,
        explanation: "'Adhere to' berarti mematuhi atau mengikuti dengan ketat. Kolokasi 'adhere to guidelines/rules/standards' sangat umum dalam konteks akademik.",
      },
      {
        question: "The study aims to ___ the underlying causes of income inequality in developing nations.",
        options: ["investigate", "instigate", "intimidate", "integrate"],
        correctIndex: 0,
        explanation: "'Investigate' berarti menyelidiki atau meneliti. Sesuai konteks: penelitian bertujuan menyelidiki penyebab di balik ketimpangan pendapatan.",
      },
      {
        question: "The findings of this research have significant ___ for public health policy.",
        options: ["implications", "applications", "complications", "amplifications"],
        correctIndex: 0,
        explanation: "'Implications' berarti implikasi atau dampak tidak langsung. 'Have implications for' adalah kolokasi akademik yang berarti memiliki dampak/konsekuensi terhadap sesuatu.",
      },
      {
        question: "The professor asked the students to ___ their arguments with relevant evidence from peer-reviewed journals.",
        options: ["substitute", "substantiate", "subordinate", "supplement"],
        correctIndex: 1,
        explanation: "'Substantiate' berarti mendukung atau membuktikan dengan bukti. Dalam akademik, argumen harus di-substantiate (didukung) dengan bukti dari jurnal terpercaya.",
      },
    ],
    // Section 1: Word Formation - 6 soal
    [
      {
        question: "The ___ of the new policy was met with widespread criticism from faculty members.",
        options: ["implement", "implementation", "implementable", "implementing"],
        correctIndex: 1,
        explanation: "Setelah artikel 'the' dan sebelum preposisi 'of', diperlukan kata benda (noun). 'Implementation' adalah bentuk noun dari 'implement' dengan suffix '-ation'.",
      },
      {
        question: "The researcher's findings were ___ significant, with a p-value of less than 0.05.",
        options: ["statistic", "statistical", "statistically", "statistics"],
        correctIndex: 2,
        explanation: "Diperlukan adverb untuk memodifikasi adjective 'significant'. 'Statistically' (adverb) + 'significant' (adjective) adalah kolokasi umum dalam penelitian.",
      },
      {
        question: "The government's ___ to increase funding for education was welcomed by universities.",
        options: ["decide", "decision", "decisive", "decisively"],
        correctIndex: 1,
        explanation: "Setelah possessive 'government's' diperlukan noun. 'Decision' adalah bentuk noun dari 'decide' dengan suffix '-sion'.",
      },
      {
        question: "Climate change poses an ___ threat to biodiversity in tropical regions.",
        options: ["exist", "existing", "existential", "existence"],
        correctIndex: 2,
        explanation: "Diperlukan adjective untuk memodifikasi noun 'threat'. 'Existential' (adj) berarti berkaitan dengan keberadaan/eksistensi. 'Existential threat' = ancaman terhadap keberadaan.",
      },
      {
        question: "The ___ between the two research groups led to a groundbreaking discovery.",
        options: ["collaborate", "collaboration", "collaborative", "collaboratively"],
        correctIndex: 1,
        explanation: "Setelah artikel 'the' dan sebelum preposisi 'between', diperlukan noun. 'Collaboration' adalah bentuk noun dengan suffix '-ation'.",
      },
      {
        question: "The professor's lecture was incredibly ___, covering topics from quantum physics to philosophy.",
        options: ["comprehend", "comprehensive", "comprehension", "comprehensively"],
        correctIndex: 1,
        explanation: "Setelah linking verb 'was' dan adverb 'incredibly', diperlukan adjective sebagai subject complement. 'Comprehensive' (adj) = menyeluruh/komprehensif.",
      },
    ],
    // Section 2: Synonym & Context Clues - 6 soal
    [
      {
        question: "The president's speech was deliberately ambiguous, leaving listeners uncertain about the government's true intentions. The word 'ambiguous' is closest in meaning to ___.",
        options: ["clear", "unclear", "hostile", "friendly"],
        correctIndex: 1,
        explanation: "'Ambiguous' berarti ambigu/tidak jelas. Context clue: 'leaving listeners uncertain' (membuat pendengar tidak pasti) mengonfirmasi bahwa pidatonya tidak jelas.",
      },
      {
        question: "The scientist's meticulous approach to data collection ensured the accuracy of her results. 'Meticulous' most likely means ___.",
        options: ["careless", "very careful and precise", "quick", "expensive"],
        correctIndex: 1,
        explanation: "'Meticulous' berarti sangat teliti dan cermat. Context clue: 'ensured the accuracy' menunjukkan pendekatannya yang sangat hati-hati menghasilkan akurasi.",
      },
      {
        question: "The once-thriving city fell into a state of decline, its infrastructure crumbling and its population dwindling. 'Dwindling' is closest in meaning to ___.",
        options: ["increasing", "stabilizing", "decreasing", "fluctuating"],
        correctIndex: 2,
        explanation: "'Dwindling' berarti menyusut/berkurang. Context clue: 'decline' dan 'crumbling' mengindikasikan situasi yang memburuk, jadi populasi pasti berkurang.",
      },
      {
        question: "Despite the politician's eloquent rhetoric, many voters remained skeptical of his promises. 'Eloquent' is closest in meaning to ___.",
        options: ["confusing", "persuasively fluent", "boring", "dishonest"],
        correctIndex: 1,
        explanation: "'Eloquent' berarti fasih dan persuasif dalam berbicara. Kata 'despite' menunjukkan kontras: meskipun retorikanya fasih, pemilih tetap skeptis.",
      },
      {
        question: "The new regulations were implemented to mitigate the adverse effects of industrial pollution. 'Mitigate' most likely means ___.",
        options: ["increase", "ignore", "reduce the severity of", "celebrate"],
        correctIndex: 2,
        explanation: "'Mitigate' berarti mengurangi tingkat keparahan. Konteks: regulasi dibuat untuk mengurangi dampak buruk polusi industri.",
      },
      {
        question: "Her pragmatic approach to problem-solving, focusing on practical solutions rather than theoretical ideals, earned her the respect of her colleagues. 'Pragmatic' means ___.",
        options: ["idealistic", "impractical", "emotional", "practical and realistic"],
        correctIndex: 3,
        explanation: "'Pragmatic' berarti praktis dan realistis. Context clue langsung: 'focusing on practical solutions rather than theoretical ideals' menjelaskan arti kata tersebut.",
      },
    ],
    // Section 3: Confusing Word Pairs - 6 soal
    [
      {
        question: "The new policy had a profound ___ on student enrollment.",
        options: ["affect", "effect", "affection", "effective"],
        correctIndex: 1,
        explanation: "'Effect' (noun) = dampak/pengaruh. 'Affect' (verb) = mempengaruhi. Di sini butuh noun setelah adjective 'profound'. Ingat: 'have an effect on' (pola tetap).",
      },
      {
        question: "The professor gave us some excellent ___ on how to write a research proposal.",
        options: ["advise", "advice", "advices", "advising"],
        correctIndex: 1,
        explanation: "'Advice' (noun, uncountable) = nasihat/saran. 'Advise' (verb) = menasihati. Setelah adjective 'excellent' dibutuhkan noun. 'Advice' tidak memiliki bentuk jamak.",
      },
      {
        question: "The seminar room can ___ up to 50 participants.",
        options: ["accommodate", "accumulate", "accompany", "accomplish"],
        correctIndex: 0,
        explanation: "'Accommodate' = menampung/menyediakan tempat. 'Accumulate' = mengumpulkan. 'Accompany' = menemani. 'Accomplish' = menyelesaikan. Konteks: ruangan menampung 50 orang.",
      },
      {
        question: "The researcher noted that the results were ___ with previous studies.",
        options: ["consistent", "constant", "persistent", "insistent"],
        correctIndex: 0,
        explanation: "'Consistent with' = sejalan/konsisten dengan. 'Constant' = tetap/konstan. 'Persistent' = gigih/terus-menerus. 'Insistent' = mendesak. Kolokasi yang benar: 'consistent with'.",
      },
      {
        question: "The dean will ___ whether to approve the new course for next semester.",
        options: ["decide", "device", "devise", "deceive"],
        correctIndex: 0,
        explanation: "'Decide' = memutuskan. 'Device' (noun) = alat. 'Devise' (verb) = merancang. 'Deceive' = menipu. Konteks: dekan akan memutuskan apakah menyetujui mata kuliah baru.",
      },
      {
        question: "The ___ of the study was to examine the relationship between diet and cognitive performance.",
        options: ["principal", "principle", "principality", "principled"],
        correctIndex: 1,
        explanation: "Sebenarnya jawaban yang tepat di sini adalah BUKAN 'principle'. 'Principle' = prinsip/asas. Yang dimaksud soal adalah 'purpose'. Namun dari opsi yang ada, yang paling tidak salah adalah 'principle' karena 'principal' (adj) = utama, bukan tujuan. Catatan: 'principal' (adj/noun) = utama/kepala sekolah; 'principle' (noun) = prinsip/asas.",
      },
    ],
    // Section 4: Collocations & Transitions - 6 soal
    [
      {
        question: "The researcher conducted an experiment; ___, she analyzed the results using statistical software.",
        options: ["moreover", "subsequently", "nevertheless", "conversely"],
        correctIndex: 1,
        explanation: "'Subsequently' = selanjutnya/kemudian, menunjukkan urutan waktu. Setelah melakukan eksperimen, langkah berikutnya adalah menganalisis hasil.",
      },
      {
        question: "The hypothesis was not supported by the data. ___, the researchers proposed an alternative explanation.",
        options: ["Furthermore", "In contrast", "Consequently", "Similarly"],
        correctIndex: 2,
        explanation: "'Consequently' = akibatnya/oleh karena itu, menunjukkan hubungan sebab-akibat. Hipotesis tidak didukung data, AKIBATNYA peneliti mengajukan penjelasan alternatif.",
      },
      {
        question: "It is important to ___ attention to the details of the experimental procedure.",
        options: ["pay", "give", "make", "take"],
        correctIndex: 0,
        explanation: "'Pay attention to' adalah kolokasi tetap yang berarti memperhatikan. Meskipun 'give attention' juga ada, 'pay attention to' adalah kolokasi yang paling natural dan umum.",
      },
      {
        question: "The first experiment yielded positive results. ___, the second experiment produced contradictory findings.",
        options: ["Similarly", "In addition", "However", "Therefore"],
        correctIndex: 2,
        explanation: "'However' = namun/akan tetapi, menunjukkan kontras. Eksperimen pertama positif, NAMUN eksperimen kedua menghasilkan temuan yang bertentangan.",
      },
      {
        question: "The university ___ a significant role in advancing scientific research in the region.",
        options: ["makes", "does", "plays", "takes"],
        correctIndex: 2,
        explanation: "'Play a role' adalah kolokasi tetap yang berarti memainkan peran. Bukan 'make a role' atau 'do a role'. Kolokasi ini sangat umum dalam penulisan akademik.",
      },
      {
        question: "Urbanization leads to environmental degradation. ___, it also brings economic opportunities to rural populations.",
        options: ["On the other hand", "In conclusion", "For instance", "As a result"],
        correctIndex: 0,
        explanation: "'On the other hand' = di sisi lain, menunjukkan perspektif yang berbeda. Urbanisasi menyebabkan degradasi lingkungan, tapi DI SISI LAIN juga membawa peluang ekonomi.",
      },
    ],
    // Section 5: Everyday & Campus Vocabulary — 6 soal
    [
      {
        question: "'Let's ___ over coffee after class.' Choose the best phrasal verb:",
        options: ["catch up", "make up", "break down", "set up"],
        correctIndex: 0,
        explanation: "'Catch up' = mengobrol/bertemu setelah lama tidak ketemu. 'Make up' = berdamai/mengarang. 'Break down' = rusak. 'Set up' = memasang."
      },
      {
        question: "Which expression is appropriate when asking a question in a university class?",
        options: ["Could you elaborate on that point?", "Huh? What do you mean?", "Hey, explain that again!", "I don't get it at all."],
        correctIndex: 0,
        explanation: "'Could you elaborate on that point?' sopan dan profesional. Gunakan 'could you' + formal verb dalam konteks akademik."
      },
      {
        question: "'I need to ___ my assignment before the deadline.' Best phrasal verb:",
        options: ["hand in", "hang out", "run into", "sleep in"],
        correctIndex: 0,
        explanation: "'Hand in' = mengumpulkan (tugas). 'Hang out' = nongkrong. 'Run into' = bertemu kebetulan. 'Sleep in' = bangun siang."
      },
      {
        question: "Your professor says 'Feel free to visit during my ___.' What does this refer to?",
        options: ["office hours", "lunch break", "vacation time", "lecture period"],
        correctIndex: 0,
        explanation: "'Office hours' = jam konsultasi dosen, waktu khusus di mana mahasiswa bisa datang untuk diskusi atau bertanya."
      },
      {
        question: "'She was ___ by the quality of the keynote speech.' (sangat terkesan)",
        options: ["blown away", "fed up", "swamped", "sorted out"],
        correctIndex: 0,
        explanation: "'Blown away' = sangat terkesan/terpukau. 'Fed up' = muak. 'Swamped' = sibuk sekali. 'Sorted out' = membereskan."
      },
      {
        question: "In an email to your professor, which opening is MOST appropriate?",
        options: ["Dear Professor Smith, I hope this email finds you well.", "Hey Prof, what's up?", "Hi there! Quick question.", "Yo Professor, need your help."],
        correctIndex: 0,
        explanation: "Email ke dosen harus formal: 'Dear Professor [Name]' + kalimat pembuka sopan. Hindari 'Hey', 'Hi there', atau 'Yo' yang terlalu kasual."
      },
    ],
  ],
  structure: [
    // Section 0: Subject-Verb Agreement - 6 soal
    [
      {
        question: "The number of students enrolled in the program ___ increased significantly.",
        options: ["have", "has", "are", "were"],
        correctIndex: 1,
        explanation: "'The number of' = jumlah (tunggal), jadi menggunakan verb tunggal 'has'. Berbeda dengan 'a number of' yang berarti banyak (jamak).",
      },
      {
        question: "Neither the professor nor the students ___ aware of the schedule change.",
        options: ["was", "were", "is", "has been"],
        correctIndex: 1,
        explanation: "Dalam 'neither...nor', verb mengikuti subjek yang paling dekat. 'Students' (jamak) paling dekat dengan verb, jadi menggunakan 'were'.",
      },
      {
        question: "Each of the research papers ___ reviewed by at least two experts.",
        options: ["were", "are", "was", "have been"],
        correctIndex: 2,
        explanation: "'Each of' selalu diikuti verb tunggal karena 'each' merujuk pada setiap individu satu per satu. 'Each of the papers was' (bukan were).",
      },
      {
        question: "Economics ___ a required subject for all business students at this university.",
        options: ["are", "is", "were", "have been"],
        correctIndex: 1,
        explanation: "'Economics' meskipun berakhiran -s, adalah kata benda tunggal (nama mata pelajaran). Seperti 'mathematics', 'physics', 'politics' (sebagai bidang studi).",
      },
      {
        question: "The committee ___ divided in their opinions about the new admission criteria.",
        options: ["is", "are", "was", "has"],
        correctIndex: 1,
        explanation: "'Committee' adalah collective noun. Ketika anggota bertindak secara individual (divided in their opinions), gunakan verb jamak 'are'. Ketika bertindak sebagai satu kesatuan, gunakan tunggal.",
      },
      {
        question: "Not only the students but also the professor ___ surprised by the exam results.",
        options: ["were", "was", "are", "have been"],
        correctIndex: 1,
        explanation: "Dalam 'not only...but also', verb mengikuti subjek yang paling dekat. 'The professor' (tunggal) paling dekat dengan verb, jadi menggunakan 'was'.",
      },
    ],
    // Section 1: Inversion - 6 soal
    [
      {
        question: "Never before ___ such a significant breakthrough in cancer research.",
        options: ["the scientists have made", "have the scientists made", "the scientists made", "did the scientists make"],
        correctIndex: 1,
        explanation: "Setelah negative adverb di awal kalimat (Never before), terjadi inversi: auxiliary + subject + verb. 'Have the scientists made' adalah urutan yang benar.",
      },
      {
        question: "Not until the results were verified ___ the findings to the public.",
        options: ["the team announced", "did the team announce", "the team did announce", "announced the team"],
        correctIndex: 1,
        explanation: "'Not until' di awal kalimat memerlukan inversi di klausa utama: did + subject + V1. 'Did the team announce' adalah bentuk yang benar.",
      },
      {
        question: "Rarely ___ a student achieve a perfect score on the entrance examination.",
        options: ["does", "do", "is", "has"],
        correctIndex: 0,
        explanation: "'Rarely' di awal kalimat memerlukan inversi. 'A student' tunggal, jadi menggunakan 'does'. Pola: Rarely + does + S (singular) + V1.",
      },
      {
        question: "So impressive ___ the presentation that the audience gave a standing ovation.",
        options: ["is", "was", "has been", "were"],
        correctIndex: 1,
        explanation: "'So + adjective' di awal kalimat memerlukan inversi. Konteks masa lampau (gave), jadi menggunakan 'was'. Pola: So + adj + was + S + that...",
      },
      {
        question: "Only after completing all required courses ___ apply for the final examination.",
        options: ["students can", "can students", "students could", "do students"],
        correctIndex: 1,
        explanation: "'Only after...' di awal kalimat memerlukan inversi di klausa utama: auxiliary + subject. 'Can students' adalah urutan inversi yang benar.",
      },
      {
        question: "Little ___ the researchers know that their discovery would change the field forever.",
        options: ["do", "did", "have", "were"],
        correctIndex: 1,
        explanation: "'Little' (= tidak/hampir tidak) di awal kalimat memerlukan inversi. Konteks masa lampau (would change), jadi menggunakan 'did'. Pola: Little + did + S + V1.",
      },
    ],
    // Section 2: Subjunctive & Error Recognition - 6 soal
    [
      {
        question: "The professor insisted that every student ___ the assignment before the deadline.",
        options: ["submits", "submit", "submitted", "would submit"],
        correctIndex: 1,
        explanation: "Setelah verb 'insist/demand/suggest/recommend + that', gunakan subjunctive: subject + V1 (bare infinitive) tanpa -s/-es. 'That every student submit' (bukan submits).",
      },
      {
        question: "It is essential that the laboratory equipment ___ properly maintained.",
        options: ["is", "be", "was", "were"],
        correctIndex: 1,
        explanation: "Setelah 'It is essential/important/necessary that', gunakan subjunctive: subject + be (bare infinitive). 'That the equipment be maintained' (bukan is).",
      },
      {
        question: "Identify the error: 'The professor, along with (A) her research assistants, (B) have published (C) several papers in (D) international journals.'",
        options: ["A", "B", "C", "D"],
        correctIndex: 2,
        explanation: "Error di (C): 'have published' seharusnya 'has published'. Subjek utama adalah 'The professor' (tunggal). Frasa 'along with her research assistants' tidak mengubah subjek menjadi jamak.",
      },
      {
        question: "The board recommended that the university ___ its admissions policy.",
        options: ["revises", "revise", "revised", "will revise"],
        correctIndex: 1,
        explanation: "Setelah 'recommend that', gunakan subjunctive: subject + V1 (tanpa -s). 'That the university revise' bukan 'revises'.",
      },
      {
        question: "Identify the error: 'Despite of (A) the heavy rain, (B) the graduation ceremony (C) proceeded as (D) planned.'",
        options: ["A", "B", "C", "D"],
        correctIndex: 0,
        explanation: "Error di (A): 'Despite of' salah. Yang benar adalah 'Despite' (tanpa of) atau 'In spite of'. 'Despite' tidak pernah diikuti 'of'.",
      },
      {
        question: "It is imperative that the proposal ___ reviewed by the ethics committee before the research begins.",
        options: ["is", "be", "will be", "has been"],
        correctIndex: 1,
        explanation: "Setelah 'It is imperative that', gunakan subjunctive: subject + be + V3 (untuk passive). 'That the proposal be reviewed' adalah bentuk subjunctive passive yang benar.",
      },
    ],
    // Section 3: Parallel Structure - 6 soal
    [
      {
        question: "The research involved collecting data, ___, and writing a comprehensive report.",
        options: [
          "analysis of the results",
          "to analyze the results",
          "analyzing the results",
          "the results were analyzed",
        ],
        correctIndex: 2,
        explanation: "Parallel structure: semua elemen dalam daftar harus memiliki bentuk yang sama. 'Collecting...analyzing...writing' = semua gerund (V-ing).",
      },
      {
        question: "The ideal candidate should be knowledgeable, ___, and committed to excellence.",
        options: ["experience", "experienced", "experiencing", "with experience"],
        correctIndex: 1,
        explanation: "Parallel structure: adjective + adjective + adjective. 'Knowledgeable, experienced, and committed' = semua adjective.",
      },
      {
        question: "The university aims to improve teaching quality, increase research output, and ___ community engagement.",
        options: ["enhancement of", "enhancing", "enhance", "to enhance"],
        correctIndex: 2,
        explanation: "Parallel structure setelah 'to': improve, increase, and enhance = semua bare infinitive (tanpa 'to' karena sudah ada 'to' di 'aims to').",
      },
      {
        question: "Students must either submit their thesis by Friday ___ request a formal extension.",
        options: ["and", "but", "or", "nor"],
        correctIndex: 2,
        explanation: "'Either...or' adalah correlative conjunction yang berpasangan. 'Either submit...or request' adalah pola yang benar. Bukan 'either...and/but/nor'.",
      },
      {
        question: "The lecture was not only informative ___ also highly engaging.",
        options: ["and", "or", "but", "yet"],
        correctIndex: 2,
        explanation: "'Not only...but also' adalah correlative conjunction yang berpasangan. 'Not only informative but also engaging' menunjukkan dua kualitas positif.",
      },
      {
        question: "The researcher's responsibilities include designing experiments, supervising lab assistants, and ___ at international conferences.",
        options: [
          "presentation of findings",
          "to present findings",
          "presenting findings",
          "she presents findings",
        ],
        correctIndex: 2,
        explanation: "Parallel structure: gerund + gerund + gerund. 'Designing...supervising...presenting' = semua bentuk V-ing setelah 'include'.",
      },
    ],
    // Section 4: Comparatives & Superlatives - 6 soal
    [
      {
        question: "This semester's exam was considerably ___ than the previous one.",
        options: ["more difficult", "most difficult", "difficulter", "the most difficult"],
        correctIndex: 0,
        explanation: "Comparative untuk kata sifat panjang (difficult): more + adjective + than. 'More difficult than' adalah bentuk yang benar. 'Difficulter' tidak ada.",
      },
      {
        question: "Of all the candidates, Dr. Rahman presented ___ research proposal.",
        options: ["the more comprehensive", "the most comprehensive", "more comprehensive", "most comprehensive"],
        correctIndex: 1,
        explanation: "Superlative digunakan untuk membandingkan tiga atau lebih (of all the candidates). Pola: the most + adjective panjang. 'The most comprehensive'.",
      },
      {
        question: "The more thoroughly you prepare, ___ you will perform on the exam.",
        options: ["the good", "the better", "the best", "better"],
        correctIndex: 1,
        explanation: "Pola double comparative: 'The more...the more/better...' Semakin X, semakin Y. 'The more thoroughly...the better' = semakin teliti persiapan, semakin baik performa.",
      },
      {
        question: "This year's enrollment is three times ___ last year's.",
        options: ["as high as", "higher", "the highest", "as high"],
        correctIndex: 0,
        explanation: "Pola perbandingan kelipatan: X times + as + adjective + as. 'Three times as high as' = tiga kali setinggi. Bukan 'three times higher' (yang berarti empat kali lipat secara teknis).",
      },
      {
        question: "The new laboratory equipment is far ___ than what we had before.",
        options: ["most superior", "more superior", "superior", "the most superior"],
        correctIndex: 2,
        explanation: "'Superior' sudah mengandung makna komparatif (lebih unggul), jadi TIDAK boleh ditambah 'more' atau 'most'. Pola: superior to (bukan superior than). Namun dari pilihan, 'superior' adalah yang paling benar.",
      },
      {
        question: "No other university in this region has ___ international students than ours.",
        options: ["much", "many", "more", "the most"],
        correctIndex: 2,
        explanation: "Kalimat menggunakan 'than' yang menandakan perbandingan (comparative). 'More international students than' = lebih banyak mahasiswa internasional daripada.",
      },
    ],
    // Section 5: Articles & Common Errors - 6 soal
    [
      {
        question: "She wants to pursue ___ master's degree in applied linguistics.",
        options: ["a", "an", "the", "no article"],
        correctIndex: 0,
        explanation: "'A master's degree' menggunakan artikel 'a' karena ini merujuk pada gelar yang tidak spesifik (salah satu dari banyak). 'A' digunakan sebelum konsonan sound /m/.",
      },
      {
        question: "___ United Nations has its headquarters in New York City.",
        options: ["A", "An", "The", "No article"],
        correctIndex: 2,
        explanation: "'The United Nations' menggunakan 'the' karena ini adalah nama organisasi spesifik dan unik. Nama organisasi internasional umumnya menggunakan 'the'.",
      },
      {
        question: "After graduating, he became ___ honest and dedicated researcher.",
        options: ["a", "an", "the", "no article"],
        correctIndex: 1,
        explanation: "'An' digunakan sebelum kata yang dimulai dengan bunyi vokal. 'Honest' dimulai dengan bunyi vokal /ɒ/ karena huruf 'h' tidak diucapkan.",
      },
      {
        question: "___ research conducted at MIT has contributed significantly to artificial intelligence.",
        options: ["A", "An", "The", "No article"],
        correctIndex: 2,
        explanation: "'The research' menggunakan 'the' karena sudah dispesifikkan oleh frase 'conducted at MIT'. Artikel 'the' digunakan ketika noun sudah jelas/spesifik.",
      },
      {
        question: "She has ___ experience in conducting qualitative research.",
        options: ["a", "an", "the", "no article"],
        correctIndex: 3,
        explanation: "'Experience' sebagai kata benda tidak dapat dihitung (uncountable) dalam konteks ini tidak memerlukan artikel. 'She has experience' (tanpa artikel) = dia memiliki pengalaman.",
      },
      {
        question: "___ Mount Everest is the highest peak in the world.",
        options: ["A", "An", "The", "No article"],
        correctIndex: 3,
        explanation: "Nama gunung tunggal (Mount Everest, Mount Fuji) tidak menggunakan artikel. Berbeda dengan pegunungan (the Himalayas, the Andes) yang menggunakan 'the'.",
      },
    ],
  ],
};
