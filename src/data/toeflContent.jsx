// Rich JSX content for each TOEFL section – dengan visual diagrams dan contoh interaktif

import { FormulaCard, ExampleBox, TipBox, StepList, ConceptGrid, RevealBox } from './mathContent.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// TOEFL SECTION CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export const toeflSections = {

  // ── READING ─────────────────────────────────────────────────────────────────
  reading: [
    {
      title: 'Jenis Passage & Strategi Membaca',
      body: <>
        <TipBox type="info">
          <strong>TOEFL iBT Reading:</strong> 3–4 academic passages (700–750 kata per passage) dari buku teks universitas. Topik mencakup natural science, social science, dan humanities. Total waktu 54–72 menit. Setiap passage memiliki 10 soal.
        </TipBox>

        <p className="text-sm text-gray-700 mb-4">
          Passage TOEFL adalah teks akademik setara textbook S1–S2. Tidak perlu memahami setiap kata — yang penting adalah memahami <strong>struktur argumen</strong> dan <strong>posisi penulis</strong>.
        </p>

        <ConceptGrid items={[
          { title: 'Natural Science', desc: 'Biologi, geologi, astronomi, lingkungan, fisika. Contoh: "Coral Reef Ecosystems", "Formation of Black Holes"', example: 'Scientific process, cause-effect, classification' },
          { title: 'Social Science', desc: 'Sosiologi, psikologi, ekonomi, linguistik, antropologi. Contoh: "Language Acquisition", "Economic Migration"', example: 'Research findings, theories, debates' },
          { title: 'Humanities', desc: 'Sejarah, seni, sastra, arkeologi, filsafat. Contoh: "The Renaissance Period", "Cave Art of Lascaux"', example: 'Chronological, descriptive, analytical' },
          { title: 'Teknologi & Inovasi', desc: 'Rekayasa, komputer, kedokteran, pertanian. Contoh: "CRISPR Gene Editing", "Urban Infrastructure"', example: 'Problem-solution, comparison, process' },
        ]} />

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Strategi Membaca 3 Fase</h3>

        <StepList steps={[
          'PREVIEW (30–60 detik): Baca judul, kalimat pertama setiap paragraf, dan kalimat terakhir teks. Tujuan: peta isi dan prediksi argumen utama.',
          'BACA SOAL DULU: Sebelum membaca penuh, baca semua 10 pertanyaan. Tandai kata kunci. Kamu tahu apa yang dicari sebelum membaca.',
          'BACA AKTIF dengan fokus: Baca paragraf 1 secara penuh (biasanya berisi thesis). Untuk paragraf 2–N: baca topic sentence + scan detail yang relevan dengan soal.',
          'JAWAB dengan verifikasi: Scan teks untuk menemukan bukti jawaban. Jangan jawab dari ingatan saja — selalu verifikasi ke passage.',
        ]} />

        <TipBox type="tip">
          <strong>Skimming vs Scanning:</strong><br />
          <strong>Skimming</strong> = membaca cepat untuk gambaran umum (siapa, apa, mengapa). Gunakan saat pertama kali memahami passage.<br />
          <strong>Scanning</strong> = gerakan mata vertikal mencari kata kunci spesifik (nama, tanggal, angka). Gunakan saat menjawab soal detail.
        </TipBox>

        <ExampleBox label="Contoh Skimming Passage Efektif">
          <p className="text-xs text-gray-700 leading-relaxed mb-2">
            Passage berjudul <em>"The Decline of Megafauna"</em> — dalam 30 detik kamu bisa tahu:
          </p>
          <ul className="text-xs text-gray-700 space-y-1.5">
            <li className="flex items-start gap-2"><span className="text-blue-500 font-bold flex-shrink-0">P1:</span> "Large animals disappeared at end of Pleistocene epoch" → <strong>Topik: kepunahan hewan besar</strong></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 font-bold flex-shrink-0">P2:</span> "Climate change theory suggests..." → <strong>Teori 1: perubahan iklim</strong></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 font-bold flex-shrink-0">P3:</span> "Human hunting hypothesis proposes..." → <strong>Teori 2: perburuan manusia</strong></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 font-bold flex-shrink-0">P4:</span> "Most scholars now believe a combination..." → <strong>Kesimpulan: keduanya berkontribusi</strong></li>
          </ul>
          <p className="text-xs text-blue-700 mt-2 font-semibold">Dengan peta ini, kamu bisa menjawab soal Main Idea, Purpose, dan Organization tanpa membaca ulang!</p>
        </ExampleBox>

        <TipBox type="warning">
          <strong>Hindari:</strong> Membaca kata per kata dari awal sampai akhir sebelum melihat soal. Ini membuang waktu dan kamu akan lupa detail saat menjawab.
        </TipBox>
      </>,
    },

    {
      title: 'Question Types & Teknik Menjawab',
      body: <>
        <TipBox type="info">
          <strong>8 Jenis Soal TOEFL Reading:</strong> Setiap passage memiliki campuran tipe soal yang berbeda. Kenali jenisnya agar kamu tahu teknik yang tepat untuk setiap soal.
        </TipBox>

        <ConceptGrid items={[
          { title: 'Factual Information', desc: '"According to the passage..." — jawaban tertulis eksplisit di teks. Scan kata kunci soal ke passage.', example: 'According to paragraph 2, coral reefs...' },
          { title: 'Negative Factual', desc: '"NOT mentioned / NOT true" — eliminasi 3 jawaban yang ada di teks. Sisa = jawaban.', example: 'All of the following are mentioned EXCEPT...' },
          { title: 'Inference', desc: '"It can be inferred / implied that..." — kesimpulan logis dari teks. Tidak tertulis langsung.', example: 'The author implies that scientists...' },
          { title: 'Vocabulary in Context', desc: '"The word X is closest in meaning to..." — substitusi tiap pilihan ke kalimat asli.', example: 'The word "ubiquitous" most nearly means...' },
          { title: 'Reference', desc: '"The word it/they/these refers to..." — cari anteseden di kalimat sebelumnya.', example: 'The pronoun "they" in line 14 refers to...' },
          { title: 'Sentence Simplification', desc: 'Pilih parafrase yang mempertahankan IDE UTAMA + hubungan logis yang sama.', example: 'Which sentence best expresses the essential information...?' },
          { title: 'Insert Text', desc: 'Sisipkan kalimat baru — cari kohesi: kata ganti, kata transisi, urutan logis.', example: '[■] Where would the sentence best fit?' },
          { title: 'Prose Summary', desc: 'Pilih 3 dari 6 kalimat yang mewakili MAIN IDEAS. Hindari detail minor.', example: 'An introductory sentence is provided. Complete the summary...' },
        ]} />

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-2">Teknik untuk Soal Insert Text (■)</h3>
        <StepList steps={[
          'Baca kalimat baru yang akan disisipkan dengan cermat.',
          'Identifikasi kata kunci kohesif: kata ganti (this/these/they), kata transisi (however/furthermore), atau konsep yang mengacu ke sesuatu sebelumnya.',
          'Baca kalimat SEBELUM setiap tanda ■ — pastikan kalimat baru mengalir secara logis dari kalimat tersebut.',
          'Sisipkan kalimat di semua 4 posisi secara mental — pilih yang paling koheren dan tidak menciptakan lompatan logika.',
        ]} />

        <ExampleBox label="Contoh Vocabulary in Context">
          <p className="text-xs text-gray-600 mb-2">Kalimat: <em>"The dodo, once <strong>ubiquitous</strong> across Mauritius, was hunted to extinction within decades of European contact."</em></p>
          <p className="text-xs text-gray-700 mb-1"><strong>Soal:</strong> The word "ubiquitous" is closest in meaning to:</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {['A. endangered', 'B. widespread', 'C. colorful', 'D. solitary'].map((opt, i) => (
              <div key={i} className={`text-xs px-2 py-1.5 rounded-lg border ${i === 1 ? 'bg-emerald-100 border-emerald-300 font-bold text-emerald-800' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                {opt} {i === 1 && '✓'}
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-700 mt-2"><strong>Teknik:</strong> Konteks "once... across Mauritius" + "hunted to extinction" → burung ini DULU sangat banyak/tersebar. Substitusi "widespread" = masuk akal. Jawaban: B.</p>
        </ExampleBox>

        <TipBox type="success">
          <strong>Strategi Eliminasi Universal:</strong> Buang pilihan yang (1) bertentangan dengan passage, (2) terlalu ekstrem ("always/never" tanpa dukungan teks), (3) benar secara umum tapi tidak disebutkan di passage, (4) hanya mengulang kata-kata teks tanpa makna yang tepat.
        </TipBox>
      </>,
    },

    {
      title: 'TOEFL Reading Time Management',
      body: <>
        <TipBox type="info">
          <strong>Alokasi Waktu TOEFL Reading:</strong> 54 menit untuk 3 passage (18 menit/passage) atau 72 menit untuk 4 passage (18 menit/passage). Setiap passage memiliki 10 soal.
        </TipBox>

        <FormulaCard color="blue">
          <p className="font-bold text-blue-900 mb-2">Formula Waktu Per Passage (18 menit)</p>
          <div className="space-y-1.5 text-blue-800">
            <p>📖 <strong>Baca + Skim Passage:</strong> 3–4 menit</p>
            <p>❓ <strong>Baca semua soal:</strong> 1 menit</p>
            <p>✍️ <strong>Jawab 8 soal reguler:</strong> 10 menit (1.25 mnt/soal)</p>
            <p>📊 <strong>Prose Summary / Table:</strong> 2–3 menit</p>
            <p>🔍 <strong>Review soal ragu:</strong> sisa waktu</p>
          </div>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Strategi Pacing yang Efektif</h3>

        <StepList steps={[
          'Set mental timer: Setelah 6 menit per passage, kamu harus sudah selesai membaca dan mulai menjawab soal.',
          'Jangan terjebak per soal: Jika soal memakan waktu > 2 menit, tandai dan lanjutkan. Kembali setelah semua soal lain selesai.',
          'Prioritaskan soal Factual dan Vocabulary terlebih dahulu — biasanya paling cepat. Simpan Prose Summary untuk terakhir.',
          'Gunakan process of elimination di setiap soal untuk mempercepat — buang 2 pilihan salah dulu, baru bandingkan 2 sisanya.',
          'Sisakan 5 menit di akhir sesi untuk review soal yang ditandai dan isi jawaban yang belum dijawab.',
        ]} />

        <ExampleBox label="Jadwal Pacing Realistis — 3 Passage (54 menit)">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Momen</th>
                  <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Target</th>
                  <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Status Ideal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Menit 0–18', 'Passage 1 selesai', '10/10 soal terjawab'],
                  ['Menit 18–36', 'Passage 2 selesai', '20/20 soal terjawab'],
                  ['Menit 36–54', 'Passage 3 selesai', '30/30 soal terjawab'],
                  ['Buffer 5 mnt', 'Review soal ragu', 'Semua terisi, tidak ada blank'],
                ].map(([momen, target, status], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-blue-700">{momen}</td>
                    <td className="px-3 py-2 text-gray-800">{target}</td>
                    <td className="px-3 py-2 text-emerald-700">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExampleBox>

        <TipBox type="warning">
          <strong>Jangan Tinggalkan Soal Kosong!</strong> TOEFL tidak mengurangi nilai untuk jawaban salah. Selalu isi setiap soal — bahkan tebakan acak memberikan 25% peluang benar. Review sebelum waktu habis adalah keharusan.
        </TipBox>

        <TipBox type="tip">
          <strong>Latihan Timed Reading:</strong> Biasakan latihan dengan timer ketat. Baca artikel ilmiah dari Scientific American, National Geographic, atau The Atlantic selama 20 menit, lalu jawab pertanyaan sendiri. Ini membangun "reading stamina" yang dibutuhkan untuk 3-4 passage berturut-turut.
        </TipBox>
      </>,
    },

    {
      title: 'Latihan Passage Pendek',
      body: <>
        <TipBox type="info">
          <strong>Latihan Membaca Akademik:</strong> Baca passage berikut, lalu jawab tiga pertanyaan comprehension. Klik "Lihat Jawaban" untuk memeriksa pemahaman kamu.
        </TipBox>

        <div className="my-4 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Academic Passage — Natural Science</p>
          <h4 className="font-bold text-gray-900 text-sm mb-3">The Role of Mycorrhizal Networks in Forest Ecosystems</h4>
          <div className="text-sm text-gray-800 leading-relaxed space-y-3">
            <p>
              Beneath the forest floor lies an intricate biological network that many researchers have compared to the internet: the mycorrhizal network. Formed by symbiotic associations between fungi and plant roots, this system enables trees to exchange nutrients, water, and even chemical distress signals across vast distances. Rather than existing as isolated individuals competing for resources, trees within a mycorrhizal network function as cooperative members of a larger community.
            </p>
            <p>
              The relationship is mutually beneficial. Fungi, which lack the capacity for photosynthesis, receive carbon-rich sugars from tree roots. In exchange, the fungal threads — known as hyphae — dramatically extend the root system's reach, absorbing phosphorus, nitrogen, and water from soil pockets that roots alone could not access. Studies have shown that up to 90% of land plant species form some type of mycorrhizal association, suggesting this partnership is foundational rather than exceptional in terrestrial ecosystems.
            </p>
            <p>
              Perhaps most remarkably, mature "mother trees" — large, established trees at the center of these networks — have been observed directing disproportionately large flows of carbon and nutrients toward younger seedlings of the same species. This behavior, sometimes described as <em>kin recognition</em>, implies a degree of biological selectivity that challenges earlier assumptions about the purely competitive nature of plant communities. However, scientists remain cautious, noting that what appears as intentional nurturing may simply reflect the physical architecture of the network rather than any directed behavior.
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold text-gray-800 mb-3">Comprehension Questions — Klik untuk reveal jawaban:</p>

        <RevealBox
          color="blue"
          question='Q1 (Main Idea): What is the primary purpose of this passage?'
          answer='The passage primarily describes the nature and function of mycorrhizal networks in forest ecosystems — explaining how they enable cooperation between trees and fungi, facilitate nutrient exchange, and challenge previous assumptions about plant competition. Answer in TOEFL format: (B) "To describe how mycorrhizal networks enable resource sharing and challenge competitive models of plant life."'
        />

        <RevealBox
          color="emerald"
          question='Q2 (Inference): Based on the passage, what can be inferred about forests without mycorrhizal networks?'
          answer='The passage states that up to 90% of land plants form mycorrhizal associations, calling it "foundational rather than exceptional." The passage also emphasizes how networks allow trees to access nutrients they "could not access" alone. We can infer that forests without mycorrhizal networks would likely have reduced nutrient uptake, poorer seedling survival, and less cooperative resource distribution — suggesting significantly lower ecosystem productivity and resilience.'
        />

        <RevealBox
          color="purple"
          question='Q3 (Vocabulary in Context): In paragraph 3, the word "disproportionately" most nearly means:'
          answer='"Disproportionately" means to a degree that is larger than what would be expected based on a proportional or equal distribution. In context: mother trees send MORE carbon and nutrients to seedlings than their relative size or position would predict. Closest TOEFL option: (C) "to an unexpectedly large degree." This is distinct from "unfairly" (which implies wrongness) or "moderately" (too mild).'
        />

        <TipBox type="success">
          <strong>Self-Assessment:</strong> Apakah kamu menjawab dengan benar tanpa melihat jawaban lebih dulu? Jika ya, berarti kamu sudah menguasai teknik main idea, inference, dan vocabulary in context. Jika tidak, kembali baca paragraf terkait dan identifikasi bukti teksnya.
        </TipBox>
      </>,
    },
  ],

  // ── LISTENING ────────────────────────────────────────────────────────────────
  listening: [
    {
      title: 'Struktur TOEFL Listening',
      body: <>
        <TipBox type="info">
          <strong>TOEFL iBT Listening:</strong> 2 bagian — Conversations (percakapan kampus) dan Lectures (kuliah akademik). Total waktu 41–57 menit untuk 28–39 soal. Setiap audio diputar SATU KALI.
        </TipBox>

        <FormulaCard color="emerald">
          <p className="font-bold text-emerald-900 mb-3">Struktur Listening Section</p>
          <div className="space-y-2 text-emerald-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0">Conversation</span>
              <span>2 conversations × 5 soal = <strong>10 soal</strong> | Durasi: ~3 menit/audio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-teal-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0">Lecture</span>
              <span>3–4 lectures × 6 soal = <strong>18–24 soal</strong> | Durasi: 3–5 menit/audio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-gray-500 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0">Total</span>
              <span>~28–39 soal dalam 41–57 menit (termasuk waktu baca soal)</span>
            </div>
          </div>
        </FormulaCard>

        <ConceptGrid items={[
          { title: 'Conversation: Setting Kampus', desc: 'Student–professor di kantor dosen, student–staff di perpustakaan/registrar/fasilitas kampus. Biasanya ada satu masalah dan solusinya.', example: 'Setting: Library — student needs research help' },
          { title: 'Lecture: Topik Akademik', desc: 'Profesor menjelaskan konsep atau proses dari berbagai bidang ilmu. Kadang ada pertanyaan dari mahasiswa dalam kuliah.', example: 'Topics: plate tectonics, baroque music, behaviorism' },
          { title: 'Jenis Soal Conversation', desc: 'Main idea percakapan, detail spesifik, attitude/feeling pembicara, function of utterance, inference tentang situasi.', example: 'Why does the student visit the professor?' },
          { title: 'Jenis Soal Lecture', desc: 'Main idea kuliah, detail faktual, organizasi isi, koneksi antar konsep, attitude profesor, replay question.', example: 'How does the professor organize the lecture?' },
        ]} />

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Tipe Soal Listening — Deskripsi & Strategi</h3>

        <div className="space-y-2 my-4">
          {[
            { type: 'Main Idea', signal: '"What is mainly discussed?"', strategy: 'Jawab berdasarkan topik keseluruhan audio, bukan satu detail.', color: 'bg-blue-50 border-blue-200' },
            { type: 'Detail', signal: '"According to the professor/student..."', strategy: 'Scan catatanmu untuk fakta spesifik yang cocok.', color: 'bg-violet-50 border-violet-200' },
            { type: 'Function', signal: '"Why does the man say X?"', strategy: 'Fokus pada TUJUAN ucapan, bukan arti harfiahnya.', color: 'bg-amber-50 border-amber-200' },
            { type: 'Attitude', signal: '"How does the student feel about X?"', strategy: 'Perhatikan intonasi, pilihan kata evaluatif, dan konteks respons.', color: 'bg-rose-50 border-rose-200' },
            { type: 'Organization', signal: '"How is the lecture organized?"', strategy: 'Perhatikan pola: kronologis, masalah-solusi, klasifikasi, perbandingan.', color: 'bg-emerald-50 border-emerald-200' },
            { type: 'Inference', signal: '"What can be inferred about X?"', strategy: 'Kesimpulan logis yang didukung audio — tidak perlu disebutkan eksplisit.', color: 'bg-teal-50 border-teal-200' },
          ].map(({ type, signal, strategy, color }, i) => (
            <div key={i} className={`border rounded-xl p-3 ${color}`}>
              <div className="flex items-start gap-3">
                <span className="bg-gray-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg flex-shrink-0 mt-0.5">{type}</span>
                <div>
                  <p className="text-xs font-mono text-gray-600 mb-0.5">{signal}</p>
                  <p className="text-xs text-gray-700">{strategy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <TipBox type="tip">
          <strong>Note-taking dibolehkan!</strong> Gunakan kertas buram selama audio diputar. Catatan yang terstruktur sangat membantu menjawab soal detail dan organization setelah audio selesai.
        </TipBox>
      </>,
    },

    {
      title: 'Teknik Note-Taking Efektif',
      body: <>
        <TipBox type="info">
          <strong>Prinsip Dasar:</strong> Note-taking yang efektif bukan menulis semua kata — melainkan merekam struktur ide secara cepat sehingga kamu bisa merekontruksi isi audio saat menjawab soal.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Sistem Simbol & Singkatan Standar</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
          {[
            { sym: '→', mean: 'mengarah ke / menyebabkan' },
            { sym: '≠', mean: 'berbeda dari / bukan' },
            { sym: '∴', mean: 'oleh karena itu' },
            { sym: '∵', mean: 'karena / disebabkan oleh' },
            { sym: '↑', mean: 'meningkat / lebih banyak' },
            { sym: '↓', mean: 'menurun / lebih sedikit' },
            { sym: 'w/', mean: 'with (dengan)' },
            { sym: 'b/c', mean: 'because (karena)' },
            { sym: 'eg:', mean: 'example (contoh)' },
            { sym: 'vs', mean: 'versus / dibandingkan' },
            { sym: 'def:', mean: 'definition (definisi)' },
            { sym: 'imp!', mean: 'important (penting!)' },
            { sym: 'MP:', mean: 'main point (inti)' },
            { sym: 'Q:', mean: 'question from student' },
            { sym: '★', mean: 'sangat penting / akan keluar soal' },
          ].map(({ sym, mean }, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
              <span className="font-mono font-bold text-blue-700 text-sm w-8 flex-shrink-0">{sym}</span>
              <span className="text-xs text-gray-600">{mean}</span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Metode Cornell untuk Listening</h3>

        <ExampleBox label="Contoh Format Catatan Cornell — Lecture">
          <div className="border border-gray-300 rounded-xl overflow-hidden text-xs">
            <div className="bg-gray-100 px-3 py-2 font-bold text-gray-700 border-b border-gray-300">
              TOPIC: Island Biogeography | Prof: Dr. Harris | Date: —
            </div>
            <div className="flex">
              <div className="border-r border-gray-300 p-3 w-1/3 bg-blue-50">
                <p className="font-bold text-blue-800 text-[10px] mb-2">KATA KUNCI / SOAL</p>
                <p className="text-blue-700">Apa itu island biogeography?</p>
                <br />
                <p className="text-blue-700">2 faktor utama?</p>
                <br />
                <p className="text-blue-700">Contoh: MacArthur & Wilson</p>
              </div>
              <div className="p-3 w-2/3">
                <p className="font-bold text-gray-700 text-[10px] mb-2">CATATAN UTAMA</p>
                <p className="text-gray-700">Def: studi keragaman spesies di pulau terisolasi</p>
                <p className="text-gray-500 mt-1">MP1: ukuran pulau ↑ → species ↑ b/c lebih banyak habitat</p>
                <p className="text-gray-500">MP2: jarak dari mainland ↑ → immigration rate ↓</p>
                <p className="text-gray-500">eg: Galapagos — isolation → unique species</p>
                <p className="text-rose-600 mt-1">★ Equilibrium theory: immigration = extinction rate</p>
              </div>
            </div>
            <div className="bg-emerald-50 px-3 py-2 border-t border-gray-300">
              <p className="font-bold text-emerald-800 text-[10px] mb-1">RINGKASAN:</p>
              <p className="text-emerald-700">Island size & mainland distance → determine species diversity. Equilibrium when immigration = extinction.</p>
            </div>
          </div>
        </ExampleBox>

        <StepList steps={[
          'Tulis TOPIK di bagian atas sebelum audio mulai (biasanya ditampilkan di layar).',
          'Saat mendengar, tulis MP: untuk setiap main point baru. Gunakan indentasi untuk sub-detail.',
          'Tandai ★ setiap kali profesor berkata "this is important," "remember," atau mengulangi poin.',
          'Catat Q: setiap kali mahasiswa bertanya — dan jawaban profesor biasanya menjadi soal.',
          'Saat audio selesai, baca catatanmu cepat sebelum soal muncul. Ini refresh memory kamu.',
        ]} />

        <TipBox type="warning">
          <strong>Jangan menulis terlalu banyak!</strong> Jika kamu fokus menulis, kamu akan melewatkan audio. Target: tangkap 40-50% konten (ide utama + detail kritis). Detail yang hilang bisa dikompensasi dengan pilihan ganda yang kamu eliminasi.
        </TipBox>
      </>,
    },

    {
      title: 'Jenis Soal Listening & Strategi',
      body: <>
        <TipBox type="info">
          <strong>6 Jenis Soal Listening TOEFL iBT:</strong> Main Idea, Detail, Function, Attitude, Organization, dan Inference. Setiap jenis membutuhkan pendekatan yang berbeda.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Strategi Per Jenis Soal</h3>

        <StepList steps={[
          'MAIN IDEA: Jawab berdasarkan apa yang dibahas SECARA KESELURUHAN. Hindari pilihan yang terlalu spesifik atau hanya mencakup satu bagian audio.',
          'DETAIL: Scan catatan untuk fakta yang dicari. Jika tidak ada di catatan, ingat-ingat posisi informasi dalam audio (awal/tengah/akhir) lalu eliminasi.',
          'FUNCTION (Why does the speaker say X?): Fokus pada TUJUAN, bukan arti kata-kata. "Well, that\'s one way to look at it" = partially disagrees.',
          'ATTITUDE: Perhatikan pilihan kata evaluatif (excited, concerned, skeptical) dan intonasi. Hindari pilihan ekstrem kecuali teks sangat mendukungnya.',
          'ORGANIZATION: Identifikasi pola: chronological → sequential, problem-solution, compare/contrast, classification. Perhatikan signal words di awal setiap segmen.',
          'INFERENCE: Jawaban harus didukung logika dari audio — tidak perlu disebutkan eksplisit, tapi harus reasonable berdasarkan yang dikatakan.',
        ]} />

        <ExampleBox label="Contoh Soal Function — Analisis">
          <div className="space-y-3 text-xs">
            <div className="bg-gray-100 rounded-xl p-3">
              <p className="font-bold text-gray-700 mb-1">Script audio:</p>
              <p className="italic text-gray-600">"Student: I was thinking the results showed that photosynthesis doesn't need light. Professor: Well... that's an interesting interpretation. Let's look more carefully at what the data actually tells us."</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
              <p className="font-bold text-amber-800 mb-1">Soal: Why does the professor say "that's an interesting interpretation"?</p>
              <div className="space-y-1 mt-2">
                {[
                  { opt: 'A. To praise the student for a correct observation', wrong: true },
                  { opt: 'B. To diplomatically indicate the student\'s conclusion is incorrect', wrong: false },
                  { opt: 'C. To ask the student to elaborate on the interpretation', wrong: true },
                  { opt: 'D. To agree that photosynthesis does not require light', wrong: true },
                ].map(({ opt, wrong }, i) => (
                  <p key={i} className={`px-2 py-1 rounded-lg ${!wrong ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-gray-600'}`}>
                    {opt} {!wrong && '✓ BENAR'}
                  </p>
                ))}
              </div>
              <p className="text-amber-700 mt-2"><strong>Analisis:</strong> "That's an interesting interpretation" + "Let's look more carefully" = profesor TIDAK setuju tapi bersikap sopan. Ini adalah polite correction — ciri khas function soal TOEFL.</p>
            </div>
          </div>
        </ExampleBox>

        <ConceptGrid items={[
          { title: 'Signal: Penting!', desc: '"This is crucial...", "Pay attention to...", "Remember that...", "The key point here is..." — selalu tandai di catatan.', example: '★ Tandai poin ini' },
          { title: 'Signal: Transisi', desc: '"Now, let\'s turn to...", "Moving on to...", "This brings us to..." — ganti halaman catatan atau buat divisi baru.', example: 'MP baru dimulai' },
          { title: 'Signal: Contoh', desc: '"For example...", "To illustrate...", "Consider the case of..." — catat contoh singkat + konsep yang diilustrasikan.', example: 'eg: Galapagos → isolation' },
          { title: 'Signal: Kontras', desc: '"However...", "On the other hand...", "But actually...", "Contrary to..." — poin baru berlawanan dengan sebelumnya.', example: 'Hipotesis lama ≠ bukti baru' },
        ]} />

        <TipBox type="tip">
          <strong>Replay Questions:</strong> Saat audio diputar ulang (tanda headphone di layar), fokus pada TUJUAN ucapan dan KONTEKS percakapannya. Jangan tergoda memilih jawaban yang hanya mengulang kata-kata yang kamu dengar — raters menguji pemahaman pragmatik, bukan pemahaman literal.
        </TipBox>
      </>,
    },

    {
      title: 'Script Latihan: Academic Lecture',
      body: <>
        <TipBox type="info">
          <strong>Latihan Script Lecture:</strong> Baca script berikut seolah kamu mendengarnya. Tulis catatan singkat, lalu jawab 4 pertanyaan comprehension. Script ini setara kesulitan TOEFL iBT sesungguhnya.
        </TipBox>

        <div className="my-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-xl">LECTURE SCRIPT</span>
            <span className="text-xs text-slate-500">Biology 201 — Lecture 14: Epigenetics</span>
          </div>

          <div className="text-sm text-gray-800 leading-relaxed space-y-3">
            <p>
              <span className="font-semibold text-slate-600">[Professor]:</span> Okay, so last week we covered the basics of DNA structure and how genes encode proteins. Today I want to push that further and talk about something that's really been transforming our understanding of heredity in the last two decades: epigenetics. Now, when most people hear the word "heredity," they think of DNA sequences — the actual letters of the genetic code. But epigenetics deals with something different. It's about changes in gene expression that do <em>not</em> involve changes to the DNA sequence itself. So the code stays the same, but which genes get turned "on" or "off" can vary. Does that distinction make sense?
            </p>
            <p>
              <span className="font-semibold text-slate-600">[Student]:</span> So, like... the same DNA can produce different outcomes?
            </p>
            <p>
              <span className="font-semibold text-slate-600">[Professor]:</span> Exactly! And that's what makes it so fascinating. Think about identical twins — they share virtually 100% of their DNA. But as they age, they can develop very different health profiles. One might develop heart disease, the other doesn't. Epigenetics helps explain why. Environmental factors — things like diet, stress, even exposure to toxins — can attach chemical "tags" to DNA. The two most studied mechanisms are <strong>DNA methylation</strong>, where a methyl group attaches to the DNA and typically silences a gene, and <strong>histone modification</strong>, where proteins around which DNA is wrapped get chemically altered, affecting how tightly the DNA is coiled. Tightly coiled DNA is generally less accessible and therefore less expressed.
            </p>
            <p>
              <span className="font-semibold text-slate-600">[Professor]:</span> Now, here's the part that really shook up biology — and this is key, so make sure you have this: some epigenetic changes can be <em>heritable</em>. Not through changes to the DNA sequence, but through these chemical tags being passed to offspring. This challenges the classical view that only DNA mutations drive evolutionary inheritance. A famous example is the Dutch Hunger Winter of 1944, when Nazi occupation caused severe famine in the Netherlands. Children born during this period, and remarkably even their children, showed elevated rates of obesity and metabolic disorders — despite having normal DNA sequences. The epigenetic changes induced by prenatal starvation appear to have persisted across generations.
            </p>
            <p>
              <span className="font-semibold text-slate-600">[Professor]:</span> So, to summarize: epigenetics = heritable changes in gene expression without DNA sequence changes. Two key mechanisms: methylation and histone modification. And critically, environmental factors can induce changes that may pass to future generations. This has enormous implications for medicine, nutrition, and even how we think about evolution. We'll go deeper into the clinical applications next week.
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold text-gray-800 mb-3">Comprehension Questions — gunakan catatan kamu:</p>

        <RevealBox
          color="blue"
          question='Q1 (Main Idea): What is the lecture mainly about?'
          answer='The lecture is mainly about epigenetics — a field of biology that studies heritable changes in gene expression that occur without altering the DNA sequence itself. The professor explains the definition, two key mechanisms (DNA methylation and histone modification), and provides evidence that environmental factors can induce epigenetic changes that persist across generations.'
        />

        <RevealBox
          color="emerald"
          question='Q2 (Detail): According to the professor, what are the two main mechanisms of epigenetic change?'
          answer='The professor identifies two key mechanisms: (1) DNA methylation — where a methyl group chemically attaches to DNA and typically silences the affected gene; and (2) Histone modification — where proteins called histones, around which DNA is wrapped, are chemically altered, changing how tightly the DNA coils. Tightly coiled DNA is less accessible and therefore less expressed.'
        />

        <RevealBox
          color="amber"
          question='Q3 (Inference): Why does the professor use identical twins as an example?'
          answer='The professor uses identical twins to illustrate that organisms with identical DNA sequences can develop very different health outcomes. Since twins share ~100% of their DNA, differences in their health profiles (e.g., one developing heart disease, the other not) cannot be explained by genetic differences — this supports the argument that gene expression, not just the DNA code itself, is a crucial determinant of biological outcomes. The twin example is used to motivate the need for epigenetics as an explanatory framework.'
        />

        <RevealBox
          color="rose"
          question='Q4 (Function): Why does the professor say "this is key, so make sure you have this" before mentioning heritable epigenetic changes?'
          answer='This is an explicit importance marker — the professor is signaling that the concept of heritable epigenetic changes is particularly significant and should be noted carefully. In TOEFL Listening, such phrases are reliable indicators that the information immediately following will appear in test questions. The professor is drawing attention to the fact that epigenetic changes can be passed to offspring, which was a paradigm-shifting discovery in biology.'
        />

        <TipBox type="success">
          <strong>Cek catatan kamu:</strong> Apakah kamu menangkap: (1) definisi epigenetics, (2) dua mekanisme utama, (3) contoh Dutch Hunger Winter, dan (4) implikasi terhadap teori evolusi? Jika iya, kamu sudah menggunakan note-taking yang efektif!
        </TipBox>
      </>,
    },
  ],

  // ── SPEAKING ────────────────────────────────────────────────────────────────
  speaking: [
    {
      title: '4 Task TOEFL Speaking Overview',
      body: <>
        <TipBox type="info">
          <strong>TOEFL iBT Speaking:</strong> 4 tasks dalam ~17 menit. Jawaban direkam dan dinilai oleh AI scorer + human rater. Setiap task dinilai 0–4; skor dikonversi ke skala 0–30.
        </TipBox>

        <FormulaCard color="purple">
          <p className="font-bold text-purple-900 mb-3">Struktur 4 Task Speaking</p>
          <div className="space-y-2 text-purple-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0 text-[10px]">Task 1</span>
              <span><strong>Independent Opinion</strong> — Prep 15 dtk | Speak 45 dtk | Topik familiar sehari-hari</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-violet-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0 text-[10px]">Task 2</span>
              <span><strong>Campus Reading + Listen</strong> — Prep 30 dtk | Speak 60 dtk | Baca pengumuman, dengar opini</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0 text-[10px]">Task 3</span>
              <span><strong>Academic Reading + Listen</strong> — Prep 30 dtk | Speak 60 dtk | Baca konsep, dengar contoh</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-blue-700 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0 text-[10px]">Task 4</span>
              <span><strong>Academic Lecture</strong> — Prep 20 dtk | Speak 60 dtk | Dengar kuliah, rangkum</span>
            </div>
          </div>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Tiga Kriteria Scoring</h3>

        <ConceptGrid items={[
          { title: 'Delivery (Cara Bicara)', desc: 'Kejelasan ucapan, kecepatan bicara, intonasi, dan ritme. Hindari filler panjang (umm/uhh). Berbicara dengan percaya diri dan pace yang stabil.', example: 'Clear speech, natural pacing, minimal hesitation' },
          { title: 'Language Use (Penggunaan Bahasa)', desc: 'Akurasi tata bahasa, variasi struktur kalimat, dan kekayaan kosakata. Gunakan mix antara simple dan complex structures.', example: 'Varied grammar, academic vocabulary, accurate usage' },
          { title: 'Topic Development (Pengembangan Ide)', desc: 'Kelengkapan, koherensi, dan kejelasan ide. Jawaban harus memiliki posisi yang jelas + alasan spesifik + contoh konkret.', example: 'Clear position → 2 reasons → specific examples' },
        ]} />

        <ExampleBox label="Perbedaan Independent vs Integrated Tasks">
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3">
              <p className="font-bold text-purple-800 mb-2">Independent (Task 1)</p>
              <ul className="text-purple-700 space-y-1">
                <li>✓ Topik: preferensi, opini pribadi, keputusan</li>
                <li>✓ Konten dari pengalaman/pengetahuan kamu</li>
                <li>✓ Bebas berpendapat — tidak ada "jawaban benar"</li>
                <li>✓ Contoh boleh fiktif atau personal</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-blue-800 mb-2">Integrated (Task 2, 3, 4)</p>
              <ul className="text-blue-700 space-y-1">
                <li>✓ Konten HARUS dari reading/listening yang diberikan</li>
                <li>✓ Tugas: rangkum dan hubungkan informasi</li>
                <li>✓ JANGAN tambahkan opini pribadi</li>
                <li>✓ Akurasi faktual sangat dihargai</li>
              </ul>
            </div>
          </div>
        </ExampleBox>

        <TipBox type="tip">
          <strong>Persiapan Waktu 15–30 Detik:</strong> Jangan coba tulis seluruh response. Tulis hanya: (1) posisi/poin utama kamu, (2) 2 kata kunci untuk alasan, (3) 1 contoh singkat per alasan. Struktur di kepala lebih penting dari skrip lengkap.
        </TipBox>
      </>,
    },

    {
      title: 'Template & Strategi Setiap Task',
      body: <>
        <TipBox type="info">
          <strong>Template adalah kerangka, bukan skrip!</strong> Hafalkan strukturnya, bukan kata per katanya. Raters dapat mendeteksi response yang terdengar dihafal — isi dengan ide genuine dan contoh spesifik.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Task 1 — Independent Opinion Template</h3>

        <FormulaCard color="purple">
          <div className="space-y-2 text-purple-800 text-xs font-mono">
            <p><strong>S1 (Posisi):</strong> "I personally prefer/believe that [posisi kamu]."</p>
            <p><strong>S2 (Alasan 1):</strong> "First and foremost, [alasan 1]. For example/instance, [contoh konkret]."</p>
            <p><strong>S3 (Alasan 2):</strong> "Additionally/Furthermore, [alasan 2]. In my experience, [contoh atau elaborasi]."</p>
            <p><strong>S4 (Kesimpulan):</strong> "Therefore, I strongly believe [restate posisi dengan kata berbeda]."</p>
          </div>
          <p className="text-purple-600 text-[10px] mt-3">Target: ~120–130 kata dalam 45 detik</p>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Task 2 — Campus Reading + Listening Template</h3>

        <FormulaCard color="blue">
          <div className="space-y-2 text-blue-800 text-xs font-mono">
            <p><strong>S1 (Bacaan):</strong> "The announcement states that [ringkasan kebijakan/perubahan kampus]."</p>
            <p><strong>S2 (Posisi org):</strong> "The [man/woman] [supports/opposes] this plan."</p>
            <p><strong>S3 (Alasan 1):</strong> "First, [he/she] argues that [alasan 1 dari listening]."</p>
            <p><strong>S4 (Alasan 2):</strong> "Second, [he/she] points out that [alasan 2 dari listening]."</p>
            <p><strong>S5 (Opsional):</strong> "[He/She] believes this will [dampak yang disebutkan]."</p>
          </div>
          <p className="text-blue-600 text-[10px] mt-3">JANGAN tambahkan pendapatmu sendiri di Task 2!</p>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Task 3 & 4 — Academic Integrated Template</h3>

        <FormulaCard color="emerald">
          <div className="space-y-2 text-emerald-800 text-xs font-mono">
            <p><strong>S1 (Konsep):</strong> "The reading/lecture discusses [konsep akademik] which refers to [definisi singkat]."</p>
            <p><strong>S2 (Contoh utama):</strong> "The professor illustrates this with [nama contoh/eksperimen]."</p>
            <p><strong>S3 (Penjelasan):</strong> "In this example, [jelaskan bagaimana contoh mengilustrasikan konsep]."</p>
            <p><strong>S4 (Koneksi):</strong> "This demonstrates that [hubungan contoh dengan konsep yang didefinisikan]."</p>
          </div>
          <p className="text-emerald-600 text-[10px] mt-3">Task 4: tidak ada reading — rangkum lecture saja.</p>
        </FormulaCard>

        <TipBox type="warning">
          <strong>Kesalahan Umum yang Harus Dihindari:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>✗ Mengulangi soal/prompt terlalu panjang sebelum menjawab</li>
            <li>✗ Diam lebih dari 2–3 detik di tengah respons</li>
            <li>✗ Menyebutkan "umm", "like", "you know" berulang kali</li>
            <li>✗ Hanya menyebutkan poin tanpa elaborasi atau contoh</li>
            <li>✗ Berbicara terlalu cepat hingga tidak dapat dimengerti</li>
          </ul>
        </TipBox>
      </>,
    },

    {
      title: 'Contoh Response & Tips Delivery',
      body: <>
        <TipBox type="info">
          <strong>Belajar dari Contoh:</strong> Analisis respons berikut untuk memahami apa yang membuat jawaban TOEFL Speaking mendapat skor tinggi.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Contoh Respons Task 1 — Skor Tinggi</h3>

        <div className="my-4 p-4 bg-purple-50 border border-purple-200 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">TASK 1 PROMPT</span>
            <span className="text-xs text-purple-700">Do you prefer studying in a library or at home? Why?</span>
          </div>
          <div className="bg-white rounded-xl p-3 border border-purple-100">
            <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-2">Sample Response (Score 4/4)</p>
            <p className="text-sm text-gray-800 leading-relaxed italic">
              "I personally prefer studying in a library rather than at home. First and foremost, a library environment significantly reduces distractions. At home, I'm constantly tempted by my phone, television, and family members who might interrupt my concentration. In a library, the social expectation of silence creates a natural focus that I genuinely find helpful. Additionally, being surrounded by other people who are studying motivates me to stay on task. In my experience, I tend to procrastinate far less in a library setting — seeing others work diligently around me creates a kind of positive peer pressure. Therefore, I strongly believe that the structured, distraction-free atmosphere of a library makes it the superior study environment for me personally."
            </p>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="bg-purple-100 rounded-xl p-2 text-center">
              <p className="font-bold text-purple-800">Delivery</p>
              <p className="text-purple-600 text-[10px] mt-0.5">Clear, measured pace, no long fillers</p>
            </div>
            <div className="bg-violet-100 rounded-xl p-2 text-center">
              <p className="font-bold text-violet-800">Language</p>
              <p className="text-violet-600 text-[10px] mt-0.5">Varied structures, academic vocab</p>
            </div>
            <div className="bg-indigo-100 rounded-xl p-2 text-center">
              <p className="font-bold text-indigo-800">Development</p>
              <p className="text-indigo-600 text-[10px] mt-0.5">2 reasons + examples + conclusion</p>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Contoh Respons Task 2 — Integrated</h3>

        <div className="my-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">TASK 2 CONTEXT</span>
            <span className="text-xs text-blue-700">University plans to eliminate on-campus printing. Male student opposes.</span>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">Sample Response (Score 4/4)</p>
            <p className="text-sm text-gray-800 leading-relaxed italic">
              "The university has announced that it will be closing all on-campus printing facilities to cut costs and promote digital learning. However, the man in the conversation strongly opposes this decision. First, he argues that many students, particularly those from lower-income backgrounds, rely on campus printers because they cannot afford personal printers or printing services off-campus. He is concerned this policy will create an unfair disadvantage for these students. Second, he points out that some professors still require physical submissions for certain assignments and exams, meaning that eliminating printing would put students in an impossible position. He believes the university should explore other cost-cutting measures instead of removing a service that students genuinely depend on."
            </p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Tips Delivery & Pronunciation</h3>

        <StepList steps={[
          'Pace: Bicara pada kecepatan 130–150 kata per menit. Terlalu cepat = tidak jelas. Terlalu lambat = konten tidak cukup.',
          'Intonasi: Naikkan pitch saat memperkenalkan poin baru ("First..."), turunkan di akhir kalimat pernyataan.',
          'Penekanan kata: Tekankan kata kunci dalam kalimat: "The MAIN reason I prefer libraries is FOCUS."',
          'Ganti filler: Ubah "umm" menjadi jeda singkat (1 detik) atau frasa transisi: "That is to say...", "To be more specific..."',
          'Konsonan akhir: Pastikan bunyi konsonan di akhir kata terdengar: "impac-T", "poin-T", "tes-T". Ini meningkatkan kejelasan signifikan.',
          'Rekam diri sendiri: Latih satu task per hari, dengarkan rekaman, identifikasi 2 area yang perlu diperbaiki.',
        ]} />

        <TipBox type="success">
          <strong>Target Harian:</strong> Latih minimal 1 Task 1 dan 1 Task Integrated setiap hari. Gunakan topik dari bank soal TOEFL Official Guide. Setelah 30 hari latihan konsisten, delivery dan confidence akan meningkat drastis.
        </TipBox>
      </>,
    },
  ],

  // ── WRITING ─────────────────────────────────────────────────────────────────
  writing: [
    {
      title: 'TOEFL Writing Overview & Scoring',
      body: <>
        <TipBox type="info">
          <strong>TOEFL iBT Writing:</strong> 2 tasks dalam 50 menit total. Task 1 Integrated (20 menit) dan Task 2 Independent (30 menit). Setiap task dinilai 0–5; rata-rata keduanya dikonversi ke skala 0–30.
        </TipBox>

        <FormulaCard color="blue">
          <p className="font-bold text-blue-900 mb-3">Dua Task TOEFL Writing</p>
          <div className="space-y-3 text-blue-800 text-xs">
            <div className="border-l-4 border-blue-400 pl-3">
              <p className="font-bold">Task 1 — Integrated Writing</p>
              <p>Baca passage (3 menit, 230–300 kata) → Dengar lecture (~2 menit) → Tulis 150–225 kata dalam 20 menit</p>
              <p className="text-blue-600 mt-0.5">Lecture selalu MENYANGGAH 3 poin utama dari reading</p>
            </div>
            <div className="border-l-4 border-violet-400 pl-3">
              <p className="font-bold text-violet-800">Task 2 — Independent Writing</p>
              <p className="text-violet-700">Tulis essay argumentasi tentang topik umum. Target 400–500 kata dalam 30 menit</p>
              <p className="text-violet-600 mt-0.5">Topik: agree/disagree, preference, advantage/disadvantage</p>
            </div>
          </div>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Rubrik Penilaian 0–5</h3>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Skor</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Deskripsi</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Karakteristik Utama</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['5', 'Excellent', 'Pengembangan ide lengkap, organisasi koheren, grammar & vocab akurat dan bervariasi', 'border-emerald-400'],
                ['4', 'Good', 'Ide dikembangkan dengan baik, minor errors grammar/vocab tidak mengganggu komunikasi', 'border-blue-400'],
                ['3', 'Fair', 'Konten memadai tapi ada kelemahan di organisasi, grammar, atau pengembangan ide', 'border-amber-400'],
                ['2', 'Limited', 'Ide terbatas atau tidak relevan, error grammar signifikan, organisasi kurang jelas', 'border-orange-400'],
                ['1', 'Poor', 'Hampir tidak ada konten yang relevan, error sangat banyak, komunikasi terganggu', 'border-red-400'],
              ].map(([score, level, desc, border], i) => (
                <tr key={i} className={`hover:bg-gray-50/50 border-l-4 ${border}`}>
                  <td className="px-3 py-2 border-b border-gray-100 font-bold text-gray-800 text-center">{score}</td>
                  <td className="px-3 py-2 border-b border-gray-100 font-semibold text-gray-700">{level}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ConceptGrid items={[
          { title: 'Content & Development', desc: 'Seberapa lengkap dan relevan ide-ide kamu dikembangkan. Kualitas > kuantitas kata.', example: 'Specific examples, clear reasoning' },
          { title: 'Organization & Coherence', desc: 'Alur logis antar kalimat dan paragraf. Transisi yang tepat dan struktur yang jelas.', example: 'Introduction → Body → Conclusion' },
          { title: 'Language Use', desc: 'Akurasi grammar, variasi struktur kalimat, dan kekayaan kosakata akademik.', example: 'Complex sentences, academic vocab' },
          { title: 'Mechanics', desc: 'Ejaan, tanda baca, dan kapitalisasi. Kesalahan kecil ditoleransi; kesalahan masif mengurangi skor.', example: 'Proofread di 3 menit terakhir' },
        ]} />

        <TipBox type="tip">
          <strong>Alokasi 50 Menit:</strong> Task 1 mendapat 20 menit (termasuk 3 menit membaca passage). Task 2 mendapat 30 menit. Selalu sisakan 2–3 menit di akhir setiap task untuk proofreading. Jangan tukar alokasi waktu ini!
        </TipBox>
      </>,
    },

    {
      title: 'Integrated Writing: Teknik & Template',
      body: <>
        <TipBox type="info">
          <strong>Kunci Task 1:</strong> Lecture SELALU menentang reading. Tugasmu adalah menjelaskan bagaimana setiap poin lecture melemahkan/menyanggah poin yang bersesuaian di reading. JANGAN tambahkan opini pribadi.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Memahami Hubungan Reading–Lecture</h3>

        <ExampleBox label="Pola Umum Reading vs Lecture">
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-3">
              <span className="bg-amber-500 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0">Reading</span>
              <span className="text-gray-700">Mengklaim: "Theory X is well-supported by evidence A, B, and C."</span>
            </div>
            <div className="flex items-center gap-3 pl-4">
              <span className="text-gray-400 font-bold text-lg">↕</span>
              <span className="text-gray-500 italic text-[11px]">Lecture selalu berlawanan dengan reading</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg font-bold flex-shrink-0">Lecture</span>
              <span className="text-gray-700">Menyanggah: "Evidence A has been refuted by... / Evidence B is actually caused by... / Evidence C only applies when..."</span>
            </div>
          </div>
        </ExampleBox>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Template Integrated Writing (3 Body Paragraphs)</h3>

        <FormulaCard color="blue">
          <div className="space-y-2.5 text-blue-800 text-xs">
            <div className="border-l-2 border-blue-300 pl-2">
              <p className="font-bold">INTRO:</p>
              <p className="font-mono">"The reading passage presents [X] arguments supporting [topic]. However, the lecturer challenges each of these points, arguing that [general counter-claim]."</p>
            </div>
            <div className="border-l-2 border-blue-300 pl-2">
              <p className="font-bold">BODY 1:</p>
              <p className="font-mono">"First, while the reading claims that [poin reading 1], the professor argues that [counter-lecture 1]. According to the lecturer, [detail/evidence dari lecture]."</p>
            </div>
            <div className="border-l-2 border-blue-300 pl-2">
              <p className="font-bold">BODY 2:</p>
              <p className="font-mono">"Second, the reading states that [poin reading 2]. However, the lecturer points out that [counter-lecture 2]. The professor explains that [detail tambahan]."</p>
            </div>
            <div className="border-l-2 border-blue-300 pl-2">
              <p className="font-bold">BODY 3:</p>
              <p className="font-mono">"Finally, while the reading suggests that [poin reading 3], the professor contends that [counter-lecture 3]. [He/She] provides [evidence/example] to support this point."</p>
            </div>
          </div>
        </FormulaCard>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Cara Efektif Note-Taking Saat Lecture (Task 1)</h3>

        <StepList steps={[
          'Saat membaca passage: tandai 3 poin utama (P1, P2, P3). Kamu punya 3 menit — fokus, jangan baca semua detail.',
          'Saat mendengar lecture: buat kolom paralel. Setiap poin lecture yang menyanggah P1, P2, P3 — catat secepat mungkin.',
          'Setelah lecture: cocokkan catatanmu. Pastikan kamu punya counter-argument dari lecture untuk setiap poin reading.',
          'Gunakan frase attribution: "The professor argues...", "According to the lecture...", "The lecturer states...", "The speaker contends..."',
          'JANGAN copy-paste dari reading — parafrase. Namun kamu BOLEH mengulang istilah teknis persis dari reading/lecture.',
        ]} />

        <ExampleBox label="Contoh Kalimat Body Paragraph yang Kuat">
          <div className="space-y-2 text-xs">
            <div className="bg-red-50 border border-red-200 rounded-xl p-2">
              <p className="font-bold text-red-700 mb-1">✗ Lemah (tanpa koneksi):</p>
              <p className="text-gray-700 italic">"The reading says climate change is caused by humans. The professor talks about climate change too."</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2">
              <p className="font-bold text-emerald-700 mb-1">✓ Kuat (hubungan eksplisit + detail):</p>
              <p className="text-gray-700 italic">"While the reading argues that human-produced CO2 is the primary driver of modern climate change, the professor challenges this by pointing out that historical climate records show periods of similar warming that predate industrial activity, suggesting natural cycles may play a larger role than the reading acknowledges."</p>
            </div>
          </div>
        </ExampleBox>

        <TipBox type="warning">
          <strong>Jangan melakukan ini di Task 1:</strong> Menyatakan pendapat pribadi ("I think the lecturer is more convincing"), menyalin kalimat langsung dari reading tanpa parafrase, atau hanya merangkum reading tanpa memasukkan isi lecture sama sekali.
        </TipBox>
      </>,
    },

    {
      title: 'Independent Writing: Essay Strategy',
      body: <>
        <TipBox type="info">
          <strong>Task 2 Target:</strong> 400–500 kata dalam 30 menit. Essay argumentasi 4–5 paragraf dengan posisi yang jelas, argumen yang didukung contoh spesifik, dan bahasa akademik yang bervariasi.
        </TipBox>

        <h3 className="font-bold text-gray-900 text-sm mb-3">Struktur 5-Paragraf TOEFL Task 2</h3>

        <div className="space-y-3 my-4">
          {[
            {
              num: '¶1', name: 'Introduction', color: 'bg-blue-50 border-blue-200',
              steps: ['Hook sentence: fakta mengejutkan, pertanyaan retoris, atau pernyataan kontras', 'Parafrase topik prompt dengan kata-katamu sendiri', 'Thesis statement: nyatakan posisimu dengan jelas dan tegas'],
              badge: 'bg-blue-600',
            },
            {
              num: '¶2', name: 'Body Paragraph 1', color: 'bg-violet-50 border-violet-200',
              steps: ['Topic sentence: alasan utama pertama mendukung thesismu', 'Explanation: jelaskan MENGAPA alasan ini relevan (2–3 kalimat)', 'Evidence/Example: contoh spesifik — nama, angka, kejadian nyata, atau skenario hipotetis yang meyakinkan', 'Link: hubungkan kembali ke thesis'],
              badge: 'bg-violet-600',
            },
            {
              num: '¶3', name: 'Body Paragraph 2', color: 'bg-violet-50 border-violet-200',
              steps: ['Topic sentence: alasan utama kedua (berbeda dari ¶2)', 'Explanation + Evidence: struktur sama dengan ¶2', 'Gunakan transisi yang berbeda: "Furthermore...", "A second compelling reason..."', 'Link: kaitkan kembali ke thesis'],
              badge: 'bg-violet-600',
            },
            {
              num: '¶4', name: 'Concession (Opsional tapi Kuat)', color: 'bg-amber-50 border-amber-200',
              steps: ['Akui satu kekuatan argumen lawan: "Admittedly, some might argue that..."', 'Refute dengan argumen yang lebih kuat: "However, this overlooks the fact that..."', 'Paragraf ini menunjukkan critical thinking dan meningkatkan skor'],
              badge: 'bg-amber-600',
            },
            {
              num: '¶5', name: 'Conclusion', color: 'bg-emerald-50 border-emerald-200',
              steps: ['Restate thesis menggunakan kata-kata berbeda', 'Ringkas 2 alasan utama secara singkat', 'Broader implication: mengapa topik ini penting secara umum'],
              badge: 'bg-emerald-600',
            },
          ].map(({ num, name, color, steps, badge }, i) => (
            <div key={i} className={`border rounded-2xl p-4 ${color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`${badge} text-white text-xs font-bold px-2.5 py-1 rounded-xl`}>{num}</span>
                <span className="font-bold text-gray-900 text-sm">{name}</span>
              </div>
              <ul className="space-y-1.5">
                {steps.map((s, j) => (
                  <li key={j} className="text-xs text-gray-700 flex items-start gap-2">
                    <span className="text-gray-400 flex-shrink-0">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Formula PEEL per Body Paragraph</h3>

        <FormulaCard color="emerald">
          <div className="space-y-2 text-emerald-800 text-xs">
            <p><strong>P — Point:</strong> Topic sentence yang menyatakan satu main reason mendukung thesis kamu</p>
            <p><strong>E — Explanation:</strong> Jelaskan logika di balik poin kamu (Why is this true? Why does this matter?)</p>
            <p><strong>E — Evidence/Example:</strong> Contoh spesifik, statistik, studi kasus, atau pengalaman yang dapat dipertahankan</p>
            <p><strong>L — Link:</strong> Kalimat penutup yang menghubungkan poin kembali ke thesis utama essay</p>
          </div>
          <p className="text-emerald-600 text-[10px] mt-3">Target per body paragraph: 100–120 kata, 4–6 kalimat</p>
        </FormulaCard>

        <ExampleBox label="Contoh Thesis Statement yang Kuat vs Lemah">
          <div className="space-y-3 text-xs">
            <div>
              <p className="font-bold text-red-700 mb-1">✗ Lemah — vague, tidak ada posisi:</p>
              <p className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-gray-700 italic">"There are many different opinions about whether students should study independently or in groups."</p>
            </div>
            <div>
              <p className="font-bold text-red-700 mb-1">✗ Lemah — mengumumkan, tidak berargumen:</p>
              <p className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-gray-700 italic">"In this essay, I will write about the advantages and disadvantages of studying alone."</p>
            </div>
            <div>
              <p className="font-bold text-emerald-700 mb-1">✓ Kuat — posisi jelas + preview alasan:</p>
              <p className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-gray-700 italic">"Although group study offers social benefits, independent study is ultimately more effective because it enables deeper focus and develops the self-discipline essential for academic success."</p>
            </div>
          </div>
        </ExampleBox>

        <h3 className="font-bold text-gray-900 text-sm mt-5 mb-3">Transisi Akademik Wajib Hafal</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4">
          {[
            { cat: 'Tambah', words: 'Furthermore, Moreover, Additionally, In addition' },
            { cat: 'Kontras', words: 'However, Nevertheless, On the other hand, Conversely' },
            { cat: 'Sebab', words: 'Because, Since, As a result of, Due to' },
            { cat: 'Akibat', words: 'Therefore, Consequently, Thus, Hence' },
            { cat: 'Contoh', words: 'For instance, For example, To illustrate, Specifically' },
            { cat: 'Kesimpulan', words: 'In conclusion, To summarize, In sum, Ultimately' },
          ].map(({ cat, words }, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
              <p className="font-bold text-xs text-gray-800 mb-1">{cat}</p>
              <p className="text-[10px] text-blue-700 font-mono leading-relaxed">{words}</p>
            </div>
          ))}
        </div>

        <TipBox type="success">
          <strong>Latihan 30-Hari Task 2:</strong> Pilih satu prompt dari TOEFL Official Practice setiap hari. Tulis outline dalam 3 menit, essay dalam 25 menit, proofreading dalam 2 menit. Setelah selesai, bandingkan dengan sample essay skor 5. Identifikasi satu perbedaan utama dan perbaiki esok harinya.
        </TipBox>

        <RevealBox
          color="blue"
          question='Cek Pemahaman: Dalam Task 2, apakah kamu boleh menggunakan contoh fiktif (yang tidak benar-benar terjadi)?'
          answer='Ya, boleh! TOEFL tidak memverifikasi kebenaran faktual contoh yang kamu berikan. Yang dinilai adalah seberapa meyakinkan dan relevan contoh tersebut mendukung argumenmu. Contoh hipotetis seperti "Imagine a student who..." atau "Consider a scenario in which..." sepenuhnya acceptable. Namun, contoh yang spesifik dan detail (dengan nama, angka, atau konteks yang jelas) biasanya lebih meyakinkan daripada contoh yang sangat umum dan abstrak.'
        />
      </>,
    },
  ],
}
