// Rich JSX content for each IELTS section – strategi mendalam + contoh interaktif

import { FormulaCard, ExampleBox, TipBox, StepList, ConceptGrid, RevealBox } from './mathContent.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// IELTS CONTENT SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

export const ieltsSections = {

  // ── LISTENING ──────────────────────────────────────────────────────────────
  listening: [
    {
      title: 'Format IELTS Listening',
      body: <>
        <TipBox type="info">
          <strong>IELTS Listening:</strong> 40 soal dalam 4 sections, durasi rekaman ~30 menit + 10 menit ekstra untuk transfer jawaban ke answer sheet. Rekaman diputar SATU KALI — tidak ada pengulangan.
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          IELTS Listening terdiri dari 4 sections yang semakin sulit. Setiap section berisi 10 soal.
        </p>

        <ConceptGrid items={[
          {
            title: 'Section 1 — Conversation Everyday',
            desc: 'Percakapan antara DUA orang dalam konteks kehidupan sehari-hari.',
            example: 'Contoh: booking hotel, mendaftar kursus, menanyakan informasi telepon',
          },
          {
            title: 'Section 2 — Monologue Everyday',
            desc: 'Satu orang berbicara dalam konteks kehidupan sehari-hari.',
            example: 'Contoh: informasi tur wisata, panduan fasilitas umum, pengumuman acara',
          },
          {
            title: 'Section 3 — Conversation Academic',
            desc: 'Diskusi antara 2–4 orang dalam konteks akademik/pendidikan.',
            example: 'Contoh: mahasiswa mendiskusikan tugas, sesi tutorial dengan dosen',
          },
          {
            title: 'Section 4 — Monologue Academic',
            desc: 'Kuliah atau ceramah akademik oleh satu pembicara. PALING SULIT — tidak ada jeda.',
            example: 'Contoh: kuliah tentang perubahan iklim, presentasi penelitian',
          },
        ]} />

        <FormulaCard color="blue">
          <p className="font-bold mb-2">Tipe Soal IELTS Listening:</p>
          <ul className="space-y-1 text-xs">
            <li>📝 <strong>Form / Table Completion</strong> — isi formulir atau tabel dengan data spesifik</li>
            <li>🔵 <strong>Multiple Choice</strong> — pilih A, B, atau C; atau pilih beberapa jawaban</li>
            <li>🗺️ <strong>Map / Diagram Labelling</strong> — beri label peta atau diagram</li>
            <li>🔗 <strong>Matching</strong> — cocokkan item dari dua daftar</li>
            <li>✏️ <strong>Note / Sentence Completion</strong> — lengkapi catatan atau kalimat</li>
          </ul>
        </FormulaCard>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Section</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Konteks</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Pembicara</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Kesulitan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['S1', 'Sehari-hari', '2 orang', '⭐'],
                ['S2', 'Sehari-hari', '1 orang (monolog)', '⭐⭐'],
                ['S3', 'Akademik', '2–4 orang', '⭐⭐⭐'],
                ['S4', 'Akademik', '1 orang (kuliah)', '⭐⭐⭐⭐'],
              ].map(([sec, ctx, speaker, diff]) => (
                <tr key={sec} className="hover:bg-gray-50/50 border-l-4 border-blue-300">
                  <td className="px-3 py-2 border-b border-gray-100 font-bold text-blue-700">{sec}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-700">{ctx}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-600">{speaker}</td>
                  <td className="px-3 py-2 border-b border-gray-100">{diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <TipBox type="warning">
          <strong>Tidak ada penalti jawaban salah!</strong> Jawab SEMUA soal — tebak jika tidak yakin. Kosong = pasti salah, tebakan = kemungkinan benar.
        </TipBox>
      </>,
    },

    {
      title: 'Strategi Sebelum & Selama Listening',
      body: <>
        <TipBox type="tip">
          <strong>Kunci sukses IELTS Listening:</strong> Waktu sebelum rekaman dimulai sama pentingnya dengan waktu saat mendengarkan. Manfaatkan setiap detik jeda.
        </TipBox>

        <p className="text-sm font-semibold text-gray-800 mb-2">Sebelum Rekaman (Pre-listening):</p>
        <StepList steps={[
          'Baca instruksi soal dengan cermat — perhatikan batas jumlah kata ("NO MORE THAN TWO WORDS")',
          'Underline kata kunci di setiap soal — proper nouns, angka, kata deskriptif',
          'Prediksi jenis jawaban: angka telepon? Nama orang? Kata benda? Kata sifat?',
          'Untuk Form Completion: prediksi logis (kolom "Date" → pasti tanggal; "Phone" → nomor)',
          'Untuk Map: orientasi diri dengan peta — kenali landmark yang sudah diberi label',
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Saat Mendengarkan (During):</p>
        <StepList steps={[
          'Tulis jawaban SEGERA saat mendengar — jangan tunda, rekaman tidak diulangi',
          'Jika melewatkan satu soal, SKIP dan lanjutkan ke soal berikutnya',
          'Perhatikan distraktor: rekaman sering menyebut opsi salah sebelum konfirmasi jawaban benar',
          'Perhatikan singular/plural: "a child" vs "children" — kesalahan kecil ini mengurangi nilai',
          'Jangan pernah biarkan soal kosong — tulis tebakan terbaik',
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">10 Menit Transfer (After):</p>
        <StepList steps={[
          'Salin jawaban ke answer sheet dengan tulisan jelas dan terbaca',
          'Periksa ejaan — terutama nama orang, tempat, dan istilah teknis',
          'Cek singular/plural dan tata bahasa dalam konteks kalimat',
          'Pastikan tidak melebihi batas kata yang ditentukan instruksi',
          'Isi SEMUA kotak — tidak boleh ada yang kosong',
        ]} />

        <TipBox type="warning">
          <strong>Jebakan Parafrase:</strong> Kata dalam rekaman JARANG persis sama dengan kata di soal. Rekaman: "a place to stay" → Soal: "accommodation". Latih sinonim dan ekspresi alternatif!
        </TipBox>

        <ExampleBox label="Contoh Distraktor">
          <p className="text-xs text-gray-700 mb-1">Pertanyaan: <span className="font-semibold">What day will the tour depart?</span></p>
          <p className="text-xs text-gray-600 italic mb-2">Rekaman: "We initially planned for Friday, then the guide suggested Saturday would work better, but given the weather forecast, we decided Sunday is the safest option."</p>
          <p className="text-xs text-emerald-700 font-semibold">✓ Jawaban: Sunday — bukan Friday atau Saturday yang disebutkan lebih dulu.</p>
          <p className="text-xs text-gray-500 mt-1">Kata kunci sinyal: "decided", "settled on", "going with" → konfirmasi akhir.</p>
        </ExampleBox>
      </>,
    },

    {
      title: 'Question Types & Teknik Masing-masing',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Setiap tipe soal IELTS Listening memiliki strategi khusus. Kenali ciri dan tekniknya agar tidak terkejut saat tes.
        </p>

        <ConceptGrid items={[
          {
            title: 'Form / Table Completion',
            desc: 'Isi formulir atau tabel. Jawaban biasanya: nama, alamat, tanggal, angka, kata benda spesifik.',
            example: 'Teknik: ikuti urutan soal, prediksi jenis data tiap kolom, catat ejaan nama',
          },
          {
            title: 'Multiple Choice',
            desc: 'Pilih satu atau beberapa jawaban. Semua opsi biasanya disebutkan — fokus pada kesimpulan akhir.',
            example: 'Teknik: eliminasi opsi salah, jangan pilih hanya karena kata sama dengan rekaman',
          },
          {
            title: 'Map / Diagram Labelling',
            desc: 'Beri label lokasi di peta atau bagian diagram. Membutuhkan pemahaman kata arah.',
            example: 'Teknik: pelajari peta sebelum rekaman, gambar rute saat mendengar, hafal kata arah',
          },
          {
            title: 'Matching',
            desc: 'Cocokkan item (misal: orang dengan pendapat, kegiatan dengan hari). Jawaban tidak selalu urut.',
            example: 'Teknik: baca semua opsi dulu, jangan commit jawaban sampai semua opsi dipertimbangkan',
          },
          {
            title: 'Note / Sentence Completion',
            desc: 'Isi catatan atau kalimat. Jawaban diambil persis dari rekaman.',
            example: 'Teknik: hitung kata dengan cermat, jawaban harus gramatikal dalam konteks kalimat',
          },
          {
            title: 'Summary Completion',
            desc: 'Isi ringkasan — bisa dari "word box" yang disediakan atau langsung dari rekaman.',
            example: 'Teknik: baca instruksi — apakah dari box atau bebas? Pahami alur logis ringkasan',
          },
        ]} />

        <FormulaCard color="emerald">
          <p className="font-bold mb-2">Kata Arah untuk Map Labelling:</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <span>↑ north / straight ahead</span>
            <span>↓ south / go back</span>
            <span>← west / turn left</span>
            <span>→ east / turn right</span>
            <span>↖ northwest / bear left</span>
            <span>↗ northeast / bear right</span>
            <span>next to / beside</span>
            <span>opposite / across from</span>
            <span>at the corner of</span>
            <span>between A and B</span>
            <span>beyond / past</span>
            <span>at the end of</span>
          </div>
        </FormulaCard>

        <TipBox type="tip">
          <strong>Batas Kata adalah Kritis:</strong> "NO MORE THAN THREE WORDS" berarti 1, 2, atau 3 kata. Artikel (a, the) dihitung sebagai kata. "NO MORE THAN TWO WORDS AND/OR A NUMBER" — angka bisa ditulis sebagai digit (25) atau kata (twenty-five).
        </TipBox>
      </>,
    },

    {
      title: 'Script Latihan: Section 1 (Conversation)',
      body: <>
        <TipBox type="info">
          <strong>Section 1 Practice:</strong> Baca script di bawah ini seperti mendengarkan rekaman sungguhan. Tutup jawaban, coba isi form, lalu cek dengan RevealBox.
        </TipBox>

        <FormulaCard color="blue">
          <p className="font-bold mb-1 text-sm">Konteks: Booking kelas olahraga di pusat komunitas</p>
          <p className="text-xs text-blue-700">Soal: Isi formulir pendaftaran. Gunakan TIDAK LEBIH DARI DUA KATA DAN/ATAU ANGKA.</p>
        </FormulaCard>

        <ExampleBox label="Script Percakapan — Section 1">
          <div className="space-y-3 text-xs">
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">Good morning, Riverside Community Centre. How can I help you?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">Hi, I'd like to register for one of your fitness classes, please.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">Of course! Can I take your full name to start?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">Yes, it's Priya Sharma. That's P-R-I-Y-A, Sharma, S-H-A-R-M-A.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">Got it. And which class are you interested in?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">The morning yoga class — I believe it runs on Tuesdays and Thursdays?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">That's right. It starts at 7:30 in the morning. May I have a contact number?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">Sure, it's 07845 231 906.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">And do you have any previous experience with yoga?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">I took a beginner's course about two years ago, so some basic experience. Would that be considered intermediate?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">I'd put you in the beginner-intermediate group then. The fee is £45 per month. How would you like to pay — card or bank transfer?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">Bank transfer, please. Oh, and is there parking available near the centre?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-blue-700 flex-shrink-0 w-8">A:</span>
              <p className="text-gray-700">Yes, there's a free car park just behind the building — enter from Station Road.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0 w-8">B:</span>
              <p className="text-gray-700">That's great, thank you so much!</p>
            </div>
          </div>
        </ExampleBox>

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-2">Soal Form Completion — coba jawab dulu, lalu reveal:</p>

        <RevealBox
          question="Q1. Full Name: Priya ________"
          answer="Sharma — Dieja: S-H-A-R-M-A. Nama belakang yang dieja perlahan adalah kunci Section 1. Ejaan yang salah = jawaban salah meski bunyi mirip."
          color="blue"
        />
        <RevealBox
          question="Q2. Class: ________ yoga (day/s)"
          answer="morning — Kelas disebut 'the morning yoga class'. 'Morning' adalah satu kata yang tepat dalam konteks formulir."
          color="blue"
        />
        <RevealBox
          question="Q3. Contact Number: ________"
          answer="07845 231 906 — Nomor telepon biasanya diucapkan perlahan dan jelas. Tulis digit dengan tepat, termasuk spasi/pengelompokan."
          color="blue"
        />
        <RevealBox
          question="Q4. Experience Level: ________"
          answer="beginner-intermediate — Perhatikan: B berkata punya pengalaman dasar, tapi STAFF yang memutuskan level 'beginner-intermediate'. Jawaban bukan dari apa yang peserta klaim, tapi dari keputusan staff."
          color="blue"
        />

        <TipBox type="success">
          <strong>Refleksi:</strong> Perhatikan bagaimana Q4 membutuhkan Anda mendengarkan KEPUTUSAN AKHIR, bukan klaim awal peserta. Ini adalah pola distraktor yang sangat umum di Section 1.
        </TipBox>
      </>,
    },
  ],

  // ── READING ────────────────────────────────────────────────────────────────
  reading: [
    {
      title: 'Format IELTS Reading & Band Score',
      body: <>
        <TipBox type="info">
          <strong>IELTS Reading:</strong> 3 passages, 40 soal, 60 menit TANPA waktu ekstra untuk transfer. Tulis jawaban langsung di answer sheet saat mengerjakan.
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          Ada dua versi IELTS Reading: <strong>Academic</strong> untuk universitas/pascasarjana, dan <strong>General Training</strong> untuk migrasi/kerja. Keduanya memiliki format berbeda.
        </p>

        <ConceptGrid items={[
          {
            title: 'Academic Reading',
            desc: '3 passages panjang (600–900 kata masing-masing) dari sumber otentik: jurnal, majalah ilmiah, buku non-fiksi.',
            example: 'Topik: sains, sejarah, budaya, teknologi, lingkungan — tidak membutuhkan pengetahuan khusus',
          },
          {
            title: 'General Training Reading',
            desc: 'Section 1: teks fungsional (iklan, brosur). Section 2: dokumen tempat kerja. Section 3: teks diskursif panjang.',
            example: 'Contoh: panduan keselamatan kerja, kebijakan perusahaan, artikel majalah umum',
          },
          {
            title: 'Waktu & Strategi',
            desc: '60 menit untuk 40 soal = rata-rata 1,5 menit per soal. Alokasikan ~20 menit per passage.',
            example: 'Tip: jangan habiskan >2 menit untuk satu soal — skip dan kembali jika ada waktu',
          },
          {
            title: 'Tingkat Kesulitan',
            desc: 'Passage 1 paling mudah, Passage 3 paling sulit. Kesulitan soal juga meningkat dalam satu passage.',
            example: 'Strategi: kerjakan soal yang mudah dulu dalam tiap passage untuk mengamankan poin',
          },
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2">Tabel Konversi Band Score (Academic Reading):</p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="text-center px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Band Score</th>
                <th className="text-center px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Benar (dari 40)</th>
                <th className="text-left px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['9.0', '40', 'Expert user', 'emerald'],
                ['8.5', '39', 'Very good user', 'emerald'],
                ['8.0', '37–38', 'Very good user', 'emerald'],
                ['7.5', '35–36', 'Good user', 'blue'],
                ['7.0', '30–32', 'Good user', 'blue'],
                ['6.5', '27–29', 'Competent user', 'blue'],
                ['6.0', '23–26', 'Competent user', 'violet'],
                ['5.5', '19–22', 'Modest user', 'violet'],
              ].map(([band, correct, desc, color]) => {
                const rowColor = { emerald: 'border-l-4 border-emerald-400', blue: 'border-l-4 border-blue-400', violet: 'border-l-4 border-violet-400' }[color]
                return (
                  <tr key={band} className={`hover:bg-gray-50/50 ${rowColor}`}>
                    <td className="px-3 py-2 border-b border-gray-100 font-bold text-center text-gray-900">{band}</td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center text-gray-700">{correct}</td>
                    <td className="px-3 py-2 border-b border-gray-100 text-gray-600">{desc}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <TipBox type="tip">
          <strong>Target Band 7.0:</strong> Butuh sekitar 30–32 jawaban benar dari 40. Ini berarti kamu boleh salah maksimal 8–10 soal. Fokus pada tipe soal yang kamu kuasai dulu untuk mengamankan poin.
        </TipBox>
      </>,
    },

    {
      title: 'Question Types Overview',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          IELTS Reading memiliki sekitar 10 tipe soal berbeda. Beberapa muncul di hampir setiap tes, beberapa lainnya lebih jarang. Kenali karakteristik dan strategi tiap tipe.
        </p>

        <ConceptGrid items={[
          {
            title: 'True / False / Not Given',
            desc: 'Apakah pernyataan sesuai (TRUE), bertentangan (FALSE), atau tidak ada (NOT GIVEN) dalam teks.',
            example: 'Untuk klaim faktual dari teks. Jangan gunakan pengetahuan luar!',
          },
          {
            title: 'Yes / No / Not Given',
            desc: 'Mirip T/F/NG tapi untuk OPINI atau KLAIM PENULIS, bukan fakta.',
            example: 'Yes = penulis setuju. No = penulis tidak setuju. NG = tidak disebutkan.',
          },
          {
            title: 'Matching Headings',
            desc: 'Cocokkan heading (judul) ke paragraf yang tepat. Extra headings adalah distraktor.',
            example: 'Baca kalimat pertama + terakhir tiap paragraf. Jangan baca semuanya.',
          },
          {
            title: 'Matching Information',
            desc: 'Temukan paragraf mana yang mengandung informasi tertentu.',
            example: 'Jawaban bisa dari paragraf yang sama. Scan teks berdasarkan kata kunci.',
          },
          {
            title: 'Sentence Completion',
            desc: 'Lengkapi kalimat dengan kata dari teks. Jawaban harus gramatikal.',
            example: 'Jawaban diambil persis dari teks — bukan parafrase. Hitung batas kata!',
          },
          {
            title: 'Short Answer Questions',
            desc: 'Jawab pertanyaan singkat dengan kata dari teks (biasanya 1–3 kata).',
            example: 'Scan dengan kata kunci soal, temukan bagian teks yang relevan.',
          },
          {
            title: 'Summary Completion',
            desc: 'Isi ringkasan — bisa dengan word box atau langsung dari teks.',
            example: 'Baca ringkasan dulu untuk pahami konteks, lalu cari di teks.',
          },
          {
            title: 'Multiple Choice',
            desc: 'Pilih jawaban benar dari 4 opsi (A/B/C/D) atau pilih beberapa jawaban.',
            example: 'Eliminasi opsi yang jelas salah. Baca teks terkait secara mendetail.',
          },
        ]} />

        <TipBox type="warning">
          <strong>Urutan Soal:</strong> Kecuali untuk Matching Headings dan Matching Information, jawaban untuk tipe soal lainnya biasanya mengikuti urutan paragraf dalam teks. Ini membantu navigasi dan pencarian jawaban.
        </TipBox>

        <ExampleBox label="Prioritas Berlatih">
          <p className="text-xs text-gray-700 mb-2">Berdasarkan frekuensi kemunculan di tes resmi:</p>
          <div className="space-y-1.5">
            {[
              ['Sangat Sering', 'True/False/NG, Matching Headings, Sentence Completion', 'bg-red-100 text-red-700'],
              ['Sering', 'Multiple Choice, Summary Completion, Matching Information', 'bg-amber-100 text-amber-700'],
              ['Kadang', 'Short Answer, Diagram Labelling, Yes/No/NG', 'bg-blue-100 text-blue-700'],
            ].map(([freq, types, cls]) => (
              <div key={freq} className="flex items-start gap-2">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${cls}`}>{freq}</span>
                <span className="text-xs text-gray-600">{types}</span>
              </div>
            ))}
          </div>
        </ExampleBox>
      </>,
    },

    {
      title: 'Strategi True / False / Not Given',
      body: <>
        <TipBox type="warning">
          <strong>True/False/Not Given adalah tipe soal PALING SULIT di IELTS Reading.</strong> Banyak peserta bingung antara FALSE dan NOT GIVEN. Pahami perbedaannya secara mendalam.
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          Ketiga kategori ini memiliki definisi yang sangat spesifik. Jangan bergantung pada "perasaan" — selalu kembali ke teks.
        </p>

        <FormulaCard color="emerald">
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="bg-green-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">TRUE</span>
              <p>Informasi dalam pernyataan <strong>dikonfirmasi secara eksplisit</strong> oleh teks — termasuk melalui parafrase. Teks dan pernyataan sejalan.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">FALSE</span>
              <p>Teks secara eksplisit <strong>bertentangan</strong> dengan pernyataan. Ada informasi di teks yang berlawanan dengan klaim soal.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="bg-gray-500 text-white px-1.5 py-0.5 rounded font-bold flex-shrink-0 text-[10px]">NOT GIVEN</span>
              <p>Topik soal <strong>tidak dibahas sama sekali</strong> dalam teks, ATAU teks tidak memberikan informasi yang cukup untuk konfirmasi atau penolakan.</p>
            </div>
          </div>
        </FormulaCard>

        <p className="text-sm font-semibold text-gray-800 mb-2">Jebakan Umum:</p>
        <ConceptGrid items={[
          {
            title: 'Pengetahuan Luar',
            desc: 'Jangan gunakan pengetahuan dunia nyata. Jawab HANYA berdasarkan apa yang ada dalam teks.',
            example: '"Vitamin C mencegah flu" mungkin benar di dunia nyata, tapi kalau teks tidak menyebutnya → NOT GIVEN',
          },
          {
            title: 'Kata Absolut',
            desc: 'Perhatikan kata absolut: "all", "never", "always", "only". Teks mungkin menggunakan "most" atau "usually".',
            example: 'Soal: "All companies adopted..." | Teks: "Most companies adopted..." → FALSE',
          },
          {
            title: 'NG vs FALSE',
            desc: 'NOT GIVEN: topik tidak ada di teks. FALSE: topik ada tapi bertentangan. Ini perbedaan paling kritis.',
            example: 'Soal: "Harga naik di musim panas." | Teks tidak membahas harga sama sekali → NOT GIVEN',
          },
          {
            title: 'Parafrase Menyesatkan',
            desc: 'Teks menggunakan kata yang mirip dengan soal tapi maknanya berbeda — bisa beralih dari TRUE ke FALSE.',
            example: 'Soal: "The experiment was successful." | Teks: "The experiment yielded unexpected results." → NOT GIVEN (belum tentu sukses)',
          },
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2">Pendekatan Praktis:</p>
        <StepList steps={[
          'Baca pernyataan soal — underline kata kunci dan kata absolut (all, never, most, etc.)',
          'Scan teks untuk menemukan bagian yang membahas topik soal',
          'Jika topik tidak ditemukan setelah scan 2 kali → kemungkinan NOT GIVEN',
          'Jika topik ditemukan: bandingkan pernyataan dengan teks — sama (TRUE) atau berlawanan (FALSE)?',
          'Jangan habiskan lebih dari 2 menit per soal T/F/NG — lanjutkan jika belum yakin',
        ]} />

        <RevealBox
          question='Teks: "While early studies suggested a link between screen time and poor sleep, more recent research indicates the relationship is far more complex and depends heavily on the type of content consumed." | Pernyataan: "Scientists have proven that screen time always causes sleep problems." | Jawaban?'
          answer='FALSE — Teks menyatakan hubungannya "far more complex" dan "depends on type of content", yang BERTENTANGAN dengan klaim "always causes sleep problems". Teks ada dan membahas topik ini, tapi berlawanan dengan pernyataan.'
          color="rose"
        />
        <RevealBox
          question='Dari teks yang sama. Pernyataan: "Children who use screens before bed typically require more sleep than adults." | Jawaban?'
          answer='NOT GIVEN — Teks tidak membahas perbandingan kebutuhan tidur antara anak-anak dan orang dewasa. Topik ini tidak ada sama sekali dalam teks, meskipun topik screen time ada.'
          color="rose"
        />
      </>,
    },

    {
      title: 'Matching Headings & Paragraph Strategy',
      body: <>
        <TipBox type="info">
          <strong>Matching Headings</strong> adalah salah satu tipe soal yang paling sering membingungkan karena membutuhkan pemahaman ide utama, bukan detail. Kunci: baca secara selektif, bukan mendetail.
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          Dalam Matching Headings, kamu diberikan daftar heading (biasanya 6–10) dan diminta mencocokkan heading ke masing-masing paragraf. Selalu ada extra headings sebagai distraktor.
        </p>

        <p className="text-sm font-semibold text-gray-800 mb-2">Strategi Langkah-demi-Langkah:</p>
        <StepList steps={[
          'Baca semua heading terlebih dahulu — pahami tema masing-masing secara umum',
          'Untuk tiap paragraf: baca HANYA kalimat pertama dan kalimat terakhir',
          'Identifikasi tema/ide utama paragraf dari dua kalimat tersebut',
          'Cocokkan dengan heading yang paling sesuai secara tematik — bukan yang memiliki kata sama',
          'Mulai dari paragraf yang paling jelas, lalu eliminasi heading yang sudah digunakan',
          'Untuk paragraf sulit, baca kalimat tengah sebagai tambahan konteks',
        ]} />

        <TipBox type="warning">
          <strong>Jangan Jatuh ke Jebakan Kata Sama:</strong> Heading dan paragraf jarang menggunakan kata persis sama. Jika heading menggunakan kata yang sama dengan kata menonjol di paragraf, justru bisa jadi distraktor. Fokus pada TEMA, bukan kata.
        </TipBox>

        <FormulaCard color="purple">
          <p className="font-bold mb-2 text-sm">Sinyal Ide Utama dalam Paragraf:</p>
          <ul className="space-y-1 text-xs">
            <li>📌 <strong>Topic sentence</strong> biasanya di awal paragraf — berisi klaim utama</li>
            <li>📌 <strong>Kalimat terakhir</strong> sering berisi kesimpulan atau transisi ke paragraf berikut</li>
            <li>📌 <strong>Kata transisi awal</strong>: "However", "Despite", "In contrast" → menandakan arah paragraf</li>
            <li>📌 <strong>Kata kunci berulang</strong> dalam satu paragraf menandakan topik utamanya</li>
          </ul>
        </FormulaCard>

        <p className="text-sm font-semibold text-gray-800 mb-2">Latihan — Coba cocokkan:</p>

        <ExampleBox label="Paragraf Contoh">
          <p className="text-xs text-gray-700 italic leading-relaxed">
            "Traditionally, urban planning prioritised the needs of motorists above all else. Wide roads, extensive parking facilities, and highway networks dominated city design throughout much of the twentieth century. Pedestrians and cyclists were largely relegated to narrow pathways at the margins of this car-centric infrastructure."
          </p>
        </ExampleBox>

        <RevealBox
          question='Dari tiga heading berikut, mana yang paling tepat? (A) The rise of sustainable transport solutions (B) Car-dominated city design in the 20th century (C) Arguments for reducing urban traffic'
          answer='(B) Car-dominated city design in the 20th century — Paragraf membahas dominasi kendaraan bermotor dalam perencanaan kota di abad ke-20. Heading A salah (tidak membahas solusi), Heading C salah (tidak ada argumen, hanya deskripsi historis).'
          color="purple"
        />

        <ExampleBox label="Paragraf Contoh Kedua">
          <p className="text-xs text-gray-700 italic leading-relaxed">
            "In recent years, however, a growing number of municipalities have begun to reclaim street space from private vehicles. Copenhagen and Amsterdam have long been celebrated as models of cycling culture, but newer converts such as Oslo, Paris, and Bogotá have demonstrated that transforming a car-dependent city is achievable within a relatively short timeframe."
          </p>
        </ExampleBox>

        <RevealBox
          question='Dari tiga heading berikut, mana yang paling tepat? (A) The rise of sustainable transport solutions (B) Car-dominated city design in the 20th century (C) Cities that have successfully reduced car dependency'
          answer='(C) Cities that have successfully reduced car dependency — Paragraf membahas kota-kota spesifik (Copenhagen, Amsterdam, Oslo, Paris, Bogotá) yang berhasil mengurangi ketergantungan pada kendaraan bermotor. Heading A terlalu umum (tidak spesifik tentang kota). Heading B sudah dipakai dan berlawanan dengan isi paragraf ini.'
          color="purple"
        />

        <TipBox type="success">
          <strong>Proses Eliminasi:</strong> Setelah yakin pada 2–3 paragraf pertama, eliminasi heading yang sudah digunakan. Semakin sedikit pilihan yang tersisa, semakin mudah mencocokkan paragraf yang lebih sulit.
        </TipBox>
      </>,
    },
  ],

  // ── WRITING ────────────────────────────────────────────────────────────────
  writing: [
    {
      title: 'Task 1 Overview: Graphs & Diagrams',
      body: <>
        <TipBox type="info">
          <strong>IELTS Writing Task 1:</strong> Minimum 150 kata, alokasikan 20 menit. Nilainya setara 1/3 dari Writing Band Score. Deskripsikan data — TIDAK perlu opini atau alasan.
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          Task 1 bisa muncul dalam berbagai format visual. Kenali karakteristik dan pendekatan untuk tiap jenis.
        </p>

        <ConceptGrid items={[
          {
            title: 'Line Graph',
            desc: 'Menunjukkan perubahan dari waktu ke waktu. Fokus: tren naik/turun, titik puncak/terendah, perbandingan garis.',
            example: 'Kunci: describe overall trend, then significant peaks and troughs',
          },
          {
            title: 'Bar Chart',
            desc: 'Membandingkan kuantitas antar kategori atau waktu. Fokus: nilai tertinggi/terendah, perbandingan.',
            example: 'Kunci: bandingkan kategori yang paling kontras, jangan sebutkan semua angka',
          },
          {
            title: 'Pie Chart',
            desc: 'Menunjukkan proporsi/persentase dari keseluruhan. Sering muncul berpasangan (dua pie chart).',
            example: 'Kunci: bandingkan proporsi terbesar dan terkecil, hitung perubahan jika ada dua chart',
          },
          {
            title: 'Table',
            desc: 'Data dalam baris dan kolom. Banyak angka — pilih yang paling menonjol untuk didiskusikan.',
            example: 'Kunci: jangan salin semua data — pilih tren umum dan nilai ekstrem saja',
          },
          {
            title: 'Process Diagram',
            desc: 'Langkah-langkah suatu proses (alami atau buatan). Tidak ada angka — fokus pada urutan.',
            example: 'Kunci: gunakan passive voice dan sequencing connectors (first, then, finally)',
          },
          {
            title: 'Map',
            desc: 'Dua peta (dua waktu berbeda) atau satu peta dengan fitur-fitur. Fokus: perubahan dan lokasi.',
            example: 'Kunci: bandingkan sebelum dan sesudah. Gunakan bahasa lokasi (to the north of, adjacent to)',
          },
        ]} />

        <FormulaCard color="blue">
          <p className="font-bold mb-2">Struktur Task 1 yang Ideal:</p>
          <div className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">P1</span>
              <p><strong>Introduction:</strong> Paraphrase judul/deskripsi grafik. Jangan salin verbatim. (~1–2 kalimat)</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">P2</span>
              <p><strong>Overview:</strong> Rangkum 2–3 tren/pola PALING menonjol. TANPA angka spesifik. Ini kunci Band 6+. (~2–3 kalimat)</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">P3</span>
              <p><strong>Body 1:</strong> Detail dan angka spesifik untuk tren/kelompok pertama. (~3–4 kalimat)</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">P4</span>
              <p><strong>Body 2:</strong> Detail dan angka spesifik untuk tren/kelompok kedua. (~3–4 kalimat)</p>
            </div>
          </div>
        </FormulaCard>

        <TipBox type="warning">
          <strong>Kesalahan Paling Umum di Task 1:</strong>
          <ul className="mt-1 space-y-0.5 text-xs list-disc list-inside">
            <li>Tidak ada paragraf overview → langsung turun Band Score</li>
            <li>Menyebutkan setiap angka dalam tabel → terlalu deskriptif, kurang analitis</li>
            <li>Menambahkan opini atau alasan ("This is because...") → tidak relevan untuk Task 1</li>
            <li>Menyalin judul grafik kata per kata sebagai introduksi</li>
          </ul>
        </TipBox>

        <ExampleBox label="Contoh Introduksi yang Baik vs Buruk">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold text-red-500 uppercase mb-1">BURUK (menyalin verbatim):</p>
              <p className="text-xs text-gray-600 italic">"The bar chart shows the number of tourists visiting five countries in 2022."</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">BAIK (paraphrase):</p>
              <p className="text-xs text-gray-700 italic">"The bar chart illustrates how many international visitors travelled to five different nations during 2022."</p>
            </div>
          </div>
        </ExampleBox>
      </>,
    },

    {
      title: 'Task 1: Language & Phrases',
      body: <>
        <TipBox type="tip">
          <strong>Lexical Resource di Task 1</strong> dinilai dari kemampuan menggunakan berbagai kata kerja, kata keterangan, dan frasa deskriptif — bukan dari penggunaan kata-kata yang "terdengar rumit".
        </TipBox>

        <p className="text-sm font-semibold text-gray-800 mb-2">Mendeskripsikan Tren (Kata Kerja + Kata Keterangan):</p>

        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Tren</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Kata Kerja (Verb)</th>
                <th className="text-left px-3 py-2 font-bold text-blue-900 border-b-2 border-blue-200">Kata Benda (Noun)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Naik', 'rose, increased, grew, climbed, surged, soared, jumped', 'a rise, an increase, growth, a surge, a jump'],
                ['Turun', 'fell, declined, dropped, decreased, dipped, plummeted, slipped', 'a fall, a decline, a drop, a decrease, a dip'],
                ['Stabil', 'remained stable, levelled off, plateaued, stayed constant, fluctuated slightly', 'stability, a plateau, little change'],
                ['Fluktuasi', 'fluctuated, varied, oscillated', 'fluctuation, variation'],
              ].map(([trend, verbs, nouns]) => (
                <tr key={trend} className="hover:bg-gray-50/50 border-l-4 border-blue-300">
                  <td className="px-3 py-2 border-b border-gray-100 font-bold text-blue-700">{trend}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-700">{verbs}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-gray-600">{nouns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FormulaCard color="emerald">
          <p className="font-bold mb-2">Kata Keterangan untuk Modifikasi Tren:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="font-semibold mb-1">Perubahan Besar:</p>
              <p>sharply, dramatically, significantly, considerably, substantially, steeply</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Perubahan Kecil:</p>
              <p>slightly, marginally, modestly, gradually, steadily, gently</p>
            </div>
          </div>
          <p className="text-xs mt-2 italic">Contoh: "Sales <strong>rose sharply</strong> in Q3, before <strong>declining gradually</strong> towards year-end."</p>
        </FormulaCard>

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Frasa untuk Perbandingan & Proporsi:</p>
        <ConceptGrid items={[
          {
            title: 'Perbandingan Langsung',
            desc: 'Bandingkan dua nilai atau kategori secara eksplisit.',
            example: '"X was significantly higher than Y." / "Compared to 2010, the figure doubled by 2020."',
          },
          {
            title: 'Proporsi & Persentase',
            desc: 'Deskripsikan bagian dari keseluruhan.',
            example: '"accounted for nearly half", "made up approximately a third", "represented the largest share"',
          },
          {
            title: 'Titik Ekstrem',
            desc: 'Sebutkan nilai tertinggi dan terendah.',
            example: '"reached a peak of 45% in 2015" / "hit a low of just 8% in 2000"',
          },
          {
            title: 'Perubahan Angka',
            desc: 'Deskripsikan perubahan secara kuantitatif.',
            example: '"increased by 20 percentage points" / "more than doubled from 15 to 32 million"',
          },
        ]} />

        <ExampleBox label="Contoh Kalimat Overview yang Kuat">
          <p className="text-xs text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-700">Overview (tanpa angka):</span> "Overall, it is clear that Country A consistently attracted the most visitors throughout the period, while Country E recorded the lowest figures. A general upward trend was observed across all five nations, though the rate of growth varied considerably."
          </p>
          <p className="text-xs text-gray-500 mt-2 italic">Catatan: Overview yang baik menyebutkan tren utama dan perbandingan paling mencolok — tanpa menyebut angka spesifik.</p>
        </ExampleBox>
      </>,
    },

    {
      title: 'Task 2: Essay Types & Structure',
      body: <>
        <TipBox type="info">
          <strong>IELTS Writing Task 2:</strong> Minimum 250 kata, alokasikan 40 menit. Nilainya setara 2/3 dari Writing Band Score — dua kali lebih penting dari Task 1. Baca soal dengan sangat cermat!
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          Ada 4 jenis soal utama di Task 2. Identifikasi jenisnya sebelum mulai menulis agar struktur esai tepat.
        </p>

        <ConceptGrid items={[
          {
            title: 'Opinion Essay',
            desc: '"Do you agree or disagree?" / "To what extent do you agree?" → Pilih SATU posisi, dukung konsisten.',
            example: 'Struktur: Intro (posisi jelas) → Body 1 (argumen 1) → Body 2 (argumen 2) → Kesimpulan (restate posisi)',
          },
          {
            title: 'Discussion Essay',
            desc: '"Discuss both views and give your own opinion." → Bahas KEDUA sisi, lalu berikan pendapat sendiri.',
            example: 'Struktur: Intro → Body 1 (sisi A) → Body 2 (sisi B + opini) → Kesimpulan',
          },
          {
            title: 'Problem-Solution Essay',
            desc: '"What are the problems caused by...? What solutions can you suggest?" → Identifikasi masalah DAN solusi.',
            example: 'Struktur: Intro → Body 1 (masalah-masalah) → Body 2 (solusi-solusi) → Kesimpulan',
          },
          {
            title: 'Two-Part Question',
            desc: '"What are the reasons for X? Is this a positive or negative development?" → Jawab KEDUA pertanyaan.',
            example: 'Struktur: Intro → Body 1 (jawab pertanyaan 1) → Body 2 (jawab pertanyaan 2) → Kesimpulan',
          },
        ]} />

        <FormulaCard color="purple">
          <p className="font-bold mb-2">Struktur PEEL untuk Body Paragraph:</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0 w-16 text-center">P — Point</span>
              <p>Nyatakan argumen/klaim utama paragraf ini secara jelas di kalimat pertama.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0 w-16 text-center">E — Evidence</span>
              <p>Berikan bukti, contoh, atau elaborasi yang mendukung klaim. Bisa fakta umum atau contoh hipotetis.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0 w-16 text-center">E — Explain</span>
              <p>Jelaskan MENGAPA bukti/contoh tersebut mendukung klaim dan relevan dengan pertanyaan.</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0 w-16 text-center">L — Link</span>
              <p>Hubungkan kembali ke pertanyaan/tesis. Bisa juga transisi ke paragraf berikutnya.</p>
            </div>
          </div>
        </FormulaCard>

        <ExampleBox label="Contoh Body Paragraph PEEL">
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-bold text-purple-600">Point:</span>
              <span className="text-gray-700 ml-1">One significant benefit of learning a foreign language at an early age is the enhanced cognitive development it promotes.</span>
            </div>
            <div>
              <span className="font-bold text-purple-600">Evidence:</span>
              <span className="text-gray-700 ml-1">Research suggests that bilingual children often demonstrate superior problem-solving abilities and greater mental flexibility compared to their monolingual peers.</span>
            </div>
            <div>
              <span className="font-bold text-purple-600">Explain:</span>
              <span className="text-gray-700 ml-1">This is because managing two language systems simultaneously exercises the brain in ways that strengthen executive function and attention control.</span>
            </div>
            <div>
              <span className="font-bold text-purple-600">Link:</span>
              <span className="text-gray-700 ml-1">Therefore, introducing foreign language education at primary school level appears to offer children lasting intellectual advantages.</span>
            </div>
          </div>
        </ExampleBox>

        <TipBox type="warning">
          <strong>Task Response adalah Kunci:</strong> Jika soal bertanya "to what extent", kamu HARUS menyatakan sejauh mana kamu setuju (sepenuhnya/sebagian). Jika soal bertanya DUA hal, jawab KEDUANYA. Gagal menjawab semua bagian soal langsung menurunkan skor Task Response ke Band 5.
        </TipBox>
      </>,
    },

    {
      title: 'Task 2: Band 7+ Writing Tips',
      body: <>
        <TipBox type="tip">
          <strong>Dari Band 6 ke Band 7+</strong> bukan tentang menulis lebih panjang atau menggunakan kata-kata yang lebih "mewah" — ini tentang konsistensi, ketepatan, dan kecanggihan dalam keempat kriteria penilaian.
        </TipBox>

        <p className="text-sm font-semibold text-gray-800 mb-2">4 Kriteria Penilaian Writing Task 2:</p>
        <ConceptGrid items={[
          {
            title: 'Task Response (25%)',
            desc: 'Apakah semua bagian soal dijawab? Apakah posisi jelas dan dipertahankan konsisten?',
            example: 'Band 7: addresses all parts clearly with relevant extended ideas',
          },
          {
            title: 'Coherence & Cohesion (25%)',
            desc: 'Apakah ide mengalir logis? Apakah connectors digunakan tepat dan bervariasi?',
            example: 'Band 7: uses a range of cohesive devices appropriately though some under/over-use',
          },
          {
            title: 'Lexical Resource (25%)',
            desc: 'Keragaman dan ketepatan kosakata. Hindari pengulangan dan bahasa informal.',
            example: 'Band 7: uses less common vocabulary with some awareness of style and collocation',
          },
          {
            title: 'Grammatical Range & Accuracy (25%)',
            desc: 'Variasi struktur kalimat dan ketepatan grammar. Kesalahan minor masih diterima.',
            example: 'Band 7: uses a variety of complex structures with frequent error-free sentences',
          },
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Cohesive Devices — Gunakan dengan Bervariasi:</p>
        <FormulaCard color="amber">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <div>
              <p className="font-semibold mb-1">Menambah informasi:</p>
              <p>Furthermore, Moreover, In addition, Additionally, Not only... but also</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Kontras/Berlawanan:</p>
              <p>However, Nevertheless, Despite this, On the other hand, In contrast, Nonetheless</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold mb-1">Sebab-akibat:</p>
              <p>As a result, Consequently, Therefore, This leads to, Hence, Thus</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold mb-1">Contoh/Ilustrasi:</p>
              <p>For instance, For example, To illustrate, Such as, A case in point is</p>
            </div>
          </div>
        </FormulaCard>

        <TipBox type="warning">
          <strong>Hindari Overuse Connectors:</strong> Memulai setiap kalimat dengan "Furthermore" atau "Moreover" justru mengurangi skor Coherence & Cohesion. Variasikan posisi connector dan gunakan juga subordinate clauses (Although, While, Since, Given that).
        </TipBox>

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Upgrade Lexical Resource:</p>

        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left px-3 py-2 font-bold text-amber-900 border-b-2 border-amber-200">Hindari (Informal/Repetitif)</th>
                <th className="text-left px-3 py-2 font-bold text-amber-900 border-b-2 border-amber-200">Gunakan (Akademik)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['a lot of people / many people', 'a significant proportion of the population / numerous individuals'],
                ['good / bad', 'beneficial, advantageous, detrimental, counterproductive'],
                ['big / small problem', 'a pressing concern, a critical challenge, a minor inconvenience'],
                ['kids / young people', 'children, adolescents, the younger generation'],
                ['I think / I believe (repetitif)', 'From my perspective, It is my contention that, I would argue that'],
                ['etc.', 'and so on → write out examples explicitly'],
              ].map(([avoid, use]) => (
                <tr key={avoid} className="hover:bg-gray-50/50 border-l-4 border-amber-300">
                  <td className="px-3 py-2 border-b border-gray-100 text-red-600 line-through">{avoid}</td>
                  <td className="px-3 py-2 border-b border-gray-100 text-emerald-700 font-medium">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RevealBox
          question='Apakah kalimat ini di Band 7? "There are a lot of reasons why people think that technology is both good and bad for society, and I think that the good things are more than the bad things."'
          answer='Tidak — ini Band 5. Masalah: (1) "a lot of reasons" → informal, (2) "good and bad" → terlalu umum, (3) "I think" muncul dua kali, (4) struktur kalimat sederhana, (5) tidak ada tesis yang jelas. Versi Band 7: "While technological advancement presents certain societal challenges, I would argue that its overall contribution to human progress outweighs the associated drawbacks."'
          color="amber"
        />

        <TipBox type="success">
          <strong>Tip Akhir:</strong> Alokasikan 3–5 menit terakhir untuk proofreading. Periksa: singular/plural agreement, tense consistency, artikel (a/an/the), dan spelling. Kesalahan sistematis (selalu salah di tipe yang sama) lebih merusak skor daripada kesalahan acak.
        </TipBox>
      </>,
    },
  ],

  // ── SPEAKING ───────────────────────────────────────────────────────────────
  speaking: [
    {
      title: 'Format IELTS Speaking: 3 Parts',
      body: <>
        <TipBox type="info">
          <strong>IELTS Speaking:</strong> 11–14 menit total, face-to-face dengan examiner, direkam. Bisa dilakukan pada hari yang sama dengan tes lain atau hari berbeda (dalam 7 hari sebelum/sesudah).
        </TipBox>

        <p className="text-sm text-gray-700 mb-3">
          IELTS Speaking terdiri dari 3 bagian yang menguji kemampuan berbahasa dalam konteks yang berbeda.
        </p>

        <ConceptGrid items={[
          {
            title: 'Part 1 — Introduction & Interview',
            desc: '4–5 menit. Pertanyaan familiar tentang kehidupan sehari-hari: hobi, pekerjaan, keluarga, tempat tinggal, rutinitas.',
            example: '"Do you enjoy cooking?" / "How often do you use public transport?" / "What do you like about your hometown?"',
          },
          {
            title: 'Part 2 — Individual Long Turn',
            desc: '3–4 menit. Cue card dengan topik spesifik. 1 menit persiapan dengan kertas dan pena. Berbicara 1–2 menit tanpa henti.',
            example: '"Describe a person who has influenced you greatly." (+ 3–4 poin panduan di kartu)',
          },
          {
            title: 'Part 3 — Two-way Discussion',
            desc: '4–5 menit. Diskusi lebih abstrak dan analitis terkait tema Part 2. Membutuhkan kemampuan berargumen dan memberikan opini bernuansa.',
            example: '"Do you think role models have a greater influence on young people today than in the past?"',
          },
          {
            title: '4 Kriteria Penilaian',
            desc: 'Masing-masing 25% dari total skor Speaking.',
            example: 'Fluency & Coherence | Lexical Resource | Grammatical Range & Accuracy | Pronunciation',
          },
        ]} />

        <FormulaCard color="blue">
          <p className="font-bold mb-2">Perbedaan Part 1, 2, dan 3:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-2 text-blue-900 pr-4">Aspek</th>
                  <th className="text-left pb-2 text-blue-900 pr-4">Part 1</th>
                  <th className="text-left pb-2 text-blue-900 pr-4">Part 2</th>
                  <th className="text-left pb-2 text-blue-900">Part 3</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="pr-4 py-1 font-semibold">Topik</td><td className="pr-4">Personal/familiar</td><td className="pr-4">Spesifik/personal</td><td>Abstrak/sosial</td></tr>
                <tr><td className="pr-4 py-1 font-semibold">Format</td><td className="pr-4">Q&A singkat</td><td className="pr-4">Monolog 1–2 menit</td><td>Diskusi dua arah</td></tr>
                <tr><td className="pr-4 py-1 font-semibold">Tingkat</td><td className="pr-4">Paling mudah</td><td className="pr-4">Menengah</td><td>Paling sulit</td></tr>
                <tr><td className="pr-4 py-1 font-semibold">Kunci</td><td className="pr-4">Extend jawaban</td><td className="pr-4">Isi waktu penuh</td><td>Opini berargumen</td></tr>
              </tbody>
            </table>
          </div>
        </FormulaCard>

        <TipBox type="tip">
          <strong>IELTS Speaking menilai BAHASA, bukan konten.</strong> Tidak ada jawaban "benar" atau "salah" secara faktual. Examiner menilai BAGAIMANA kamu berbicara, bukan APA yang kamu katakan. Jadi, boleh berbohong — yang penting gramatikal dan fasih!
        </TipBox>
      </>,
    },

    {
      title: 'Strategi Setiap Part',
      body: <>
        <TipBox type="info">
          <strong>Strategi berbeda untuk tiap Part:</strong> Part 1 butuh extensiveness, Part 2 butuh struktur dan stamina, Part 3 butuh depth dan nuance dalam berargumen.
        </TipBox>

        <p className="text-sm font-semibold text-gray-800 mb-2">Part 1 — Extend Every Answer:</p>
        <StepList steps={[
          'Jangan jawab hanya "Yes" atau "No" — selalu tambahkan alasan, contoh, atau detail',
          'Targetkan 2–4 kalimat per jawaban: jawaban langsung + alasan + contoh/detail spesifik',
          'Gunakan natural connectors: "...because...", "...for instance...", "...which means that..."',
          'Boleh mengalihkan jawaban ke pengalaman yang lebih mudah diceritakan secara natural',
          'Tidak perlu jawaban yang "sempurna" — keaslian dan kelancaran lebih penting dari kesempurnaan konten',
        ]} />

        <ExampleBox label="Part 1 — Extend jawaban">
          <p className="text-xs font-semibold text-gray-600 mb-2">Q: "Do you prefer reading books or watching films?"</p>
          <div className="space-y-2">
            <div>
              <p className="text-[10px] font-bold text-red-500">Band 5:</p>
              <p className="text-xs text-gray-600 italic">"I prefer reading books."</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald-600">Band 7+:</p>
              <p className="text-xs text-gray-700 italic">"I'd say I lean more towards reading, mainly because it allows me to engage my imagination in a way that films simply can't replicate. When I'm reading, I can picture the characters and settings entirely in my own mind. That said, I do enjoy watching a good film adaptation now and then — especially when I've already read the book and I'm curious to see how the director interpreted it."</p>
            </div>
          </div>
        </ExampleBox>

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Part 2 — Strategi Cue Card:</p>
        <StepList steps={[
          '1 menit persiapan: tulis kata kunci (bukan kalimat), tentukan alur cerita',
          'Cover SEMUA poin di cue card — examiner memperhatikan ini',
          'Susun alur yang mengalir: latar belakang → inti cerita → refleksi/dampak',
          'Gunakan detail spesifik: nama tempat, waktu, perasaan — membuat cerita terasa nyata dan natural',
          'Jika kehabisan ide, elaborasi perasaan/suasana: warna, aroma, suara, emosi yang dirasakan',
          'Tetap berbicara sampai examiner menghentikan — jangan berhenti sendiri sebelum 1,5 menit',
        ]} />

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Part 3 — OREO Method:</p>
        <FormulaCard color="purple">
          <div className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">O</span>
              <p><strong>Opinion:</strong> Nyatakan pendapat secara langsung. "I would argue that..." / "From my perspective..."</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">R</span>
              <p><strong>Reason:</strong> Jelaskan MENGAPA kamu berpendapat demikian. "This is mainly because..."</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">E</span>
              <p><strong>Example:</strong> Berikan contoh konkret atau hipotetis. "For instance, consider the case of..."</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-purple-600 text-white px-2 py-0.5 rounded font-bold flex-shrink-0">O</span>
              <p><strong>Opinion restate:</strong> Tutup dengan menegaskan kembali posisi. "So overall, I firmly believe..."</p>
            </div>
          </div>
        </FormulaCard>

        <TipBox type="warning">
          <strong>Filler yang Tepat vs Tidak Tepat:</strong>
          <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
            <div>
              <p className="font-semibold text-red-600">Hindari:</p>
              <p>"Um... er... uh..." (berkepanjangan)</p>
              <p>"I don't know."</p>
              <p>"Sorry, next question?"</p>
            </div>
            <div>
              <p className="font-semibold text-emerald-600">Gunakan:</p>
              <p>"That's an interesting question..."</p>
              <p>"Let me think about that..."</p>
              <p>"That's a complex issue — I suppose..."</p>
            </div>
          </div>
        </TipBox>
      </>,
    },

    {
      title: 'Contoh Cue Card & Response',
      body: <>
        <TipBox type="info">
          <strong>Part 2 Practice:</strong> Baca cue card, berikan diri sendiri 1 menit untuk mempersiapkan, lalu coba berbicara selama 2 menit. Kemudian bandingkan dengan contoh respons di bawah.
        </TipBox>

        <FormulaCard color="emerald">
          <p className="font-bold mb-2 text-sm">Sample Cue Card — Part 2:</p>
          <p className="font-semibold text-xs mb-2">Describe a book you have read that you found particularly interesting.</p>
          <p className="text-xs mb-1">You should say:</p>
          <ul className="text-xs space-y-0.5 list-disc list-inside ml-2">
            <li>what the book was about</li>
            <li>why you chose to read it</li>
            <li>what you found most interesting about it</li>
            <li>and explain how reading it affected you.</li>
          </ul>
        </FormulaCard>

        <ExampleBox label="Model Answer Outline (untuk 1 menit persiapan)">
          <div className="text-xs space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0">Buku:</span>
              <p>Sapiens by Yuval Noah Harari / any book you know well</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0">Tentang:</span>
              <p>History of humankind — dari Homo sapiens purba sampai revolusi modern</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0">Kenapa:</span>
              <p>Teman rekomendasikan + tertarik dengan sejarah manusia secara makro</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0">Menarik:</span>
              <p>Cara pengarang menjelaskan "imagined realities" — uang, agama, negara sebagai mitos bersama</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-emerald-700 flex-shrink-0">Dampak:</span>
              <p>Mengubah cara pandang tentang institusi sosial — lebih kritis dan reflektif</p>
            </div>
          </div>
        </ExampleBox>

        <ExampleBox label="Sample Response (Band 7+ phrases highlighted)">
          <p className="text-xs text-gray-700 leading-relaxed">
            "The book I'd like to talk about is <em>Sapiens</em> by Yuval Noah Harari — a sweeping history of humankind from our earliest ancestors to the modern era. I <span className="bg-yellow-100 px-0.5 rounded">came across</span> it after a close friend <span className="bg-yellow-100 px-0.5 rounded">raved about</span> it, and since I've always had a <span className="bg-yellow-100 px-0.5 rounded">fascination with</span> the big questions about human nature, I decided to give it a go.
            <br /><br />
            What I found most <span className="bg-yellow-100 px-0.5 rounded">captivating</span> was the author's argument that human civilisation is built on '<span className="bg-yellow-100 px-0.5 rounded">imagined realities</span>' — shared myths like money, religion, and nations that have no physical existence but <span className="bg-yellow-100 px-0.5 rounded">hold enormous power</span> over our lives. That concept <span className="bg-yellow-100 px-0.5 rounded">genuinely blew my mind</span>; it made me question things I had always <span className="bg-yellow-100 px-0.5 rounded">taken for granted</span>.
            <br /><br />
            Reading this book <span className="bg-yellow-100 px-0.5 rounded">profoundly changed</span> the way I look at social institutions. I became far more <span className="bg-yellow-100 px-0.5 rounded">reflective</span> about why societies organise themselves the way they do, and I started reading more widely in history and philosophy as a result. It's the kind of book that <span className="bg-yellow-100 px-0.5 rounded">stays with you long after</span> you've put it down."
          </p>
          <p className="text-[10px] text-gray-400 mt-2">Frasa yang dihighlight = contoh kosakata idiomatik dan kolokasi yang natural.</p>
        </ExampleBox>

        <p className="text-sm font-semibold text-gray-800 mb-2 mt-4">Part 3 — Discussion Questions & Model Phrases:</p>

        <RevealBox
          question='Part 3 Q: "Do you think reading habits have changed significantly in the digital age?" — Bagaimana memulai jawaban Band 7+?'
          answer={"\"That's a thought-provoking question. I'd say reading habits have transformed dramatically rather than declined. While people may read fewer novels cover-to-cover, the sheer volume of text consumed daily — through news, social media, and long-form articles — is arguably greater than ever before. The nature of reading has shifted from sustained, deep engagement with a single text to a more fragmented, hyper-linked form of information processing. Whether that's beneficial or not is a matter of debate.\""}
          color="emerald"
        />

        <RevealBox
          question='Part 3 Q: "Why do you think some governments invest in promoting reading among children?" — Contoh jawaban menggunakan OREO?'
          answer={"\"I would argue that governments see reading as foundational to a well-functioning society. [O] The primary reason is that literacy underpins virtually every other form of learning — a child who reads well is far better equipped to succeed across all academic subjects. [R] Consider countries like Finland, which consistently top global education rankings; part of their success is attributed to a strong culture of reading from an early age. [E] Consequently, investing in reading promotion is not merely about books — it's about building the cognitive infrastructure for lifelong learning and informed citizenship. [O restate]\""}
          color="emerald"
        />

        <FormulaCard color="purple">
          <p className="font-bold mb-2 text-xs">Band 7+ Vocabulary untuk Speaking — Kolokasi Berguna:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <span>have a profound impact on</span>
            <span>a double-edged sword</span>
            <span>it goes without saying that</span>
            <span>raise awareness of</span>
            <span>to a certain extent</span>
            <span>food for thought</span>
            <span>hit the nail on the head</span>
            <span>play a pivotal role in</span>
            <span>bridge the gap between</span>
            <span>take something for granted</span>
            <span>shed light on</span>
            <span>come at a cost</span>
          </div>
        </FormulaCard>

        <TipBox type="success">
          <strong>Latihan Rutin yang Efektif:</strong> Rekam diri sendiri menjawab soal Speaking selama 2 menit, lalu dengarkan ulang. Perhatikan: apakah ada jeda panjang? Apakah kata yang sama berulang? Apakah intonasi naik-turun? Self-evaluation adalah cara paling cepat untuk meningkatkan skor.
        </TipBox>
      </>,
    },
  ],
}
