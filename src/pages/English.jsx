import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { englishChapterQuiz } from '../data/englishChapterQuiz'
import { Menu, ArrowRight, BookMarked, BookOpen, MessageSquare, Layers, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const chapters = [
  {
    id: 'grammar',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    title: '1. Grammar Review',
    shortTitle: 'Grammar',
    subs: ['Tenses Lengkap', 'Passive Voice', 'Conditional Sentence', 'Relative Clause'],
    content: `
## Tenses Lengkap

Tense menunjukkan waktu terjadinya suatu tindakan atau keadaan.

### Present Tenses
| Tense | Formula | Contoh |
|-------|---------|--------|
| Simple Present | S + V1(s/es) | She studies every day. |
| Present Continuous | S + am/is/are + V-ing | She is studying now. |
| Present Perfect | S + have/has + V3 | She has finished the task. |
| Present Perfect Cont. | S + have/has been + V-ing | She has been studying for 3 hours. |

### Past Tenses
| Tense | Formula | Contoh |
|-------|---------|--------|
| Simple Past | S + V2 | She studied yesterday. |
| Past Continuous | S + was/were + V-ing | She was studying when I called. |
| Past Perfect | S + had + V3 | She had studied before the exam. |

### Future Tenses
| Tense | Formula | Contoh |
|-------|---------|--------|
| Simple Future | S + will + V1 | She will study tomorrow. |
| Future Perfect | S + will have + V3 | She will have studied by noon. |

---

## Passive Voice

**Formula:** S + to be (sesuai tense) + V3 + (by agent)

### Transformasi Active → Passive

| Active | Passive |
|--------|---------|
| She writes the report. (Simple Present) | The report is written (by her). |
| They completed the project. (Simple Past) | The project was completed (by them). |
| He will submit the form. (Future) | The form will be submitted (by him). |
| They have approved the plan. (Present Perfect) | The plan has been approved (by them). |

**Contoh Kalimat:**
  Active  : A famous author wrote the book.
  Passive : The book was written by a famous author.

---

## Conditional Sentences

### Type 0 – General Truth (Fakta Umum)
  If + Simple Present, Simple Present
  If water reaches 100°C, it boils.

### Type 1 – Real Condition (Kemungkinan Nyata)
  If + Simple Present, will + V1
  If I study hard, I will pass the exam.

### Type 2 – Unreal Present (Kondisi Tidak Nyata Sekarang)
  If + Simple Past (were for all), would + V1
  If I were you, I would apply for that scholarship.
  ⚠️ Gunakan 'were' untuk semua subjek (I, he, she, it)

### Type 3 – Unreal Past (Kondisi Tidak Nyata Masa Lalu)
  If + Past Perfect, would have + V3
  If I had studied harder, I would have passed.

---

## Relative Clause

Klausa yang memberi informasi tambahan tentang kata benda.

| Kata Hubung | Digunakan Untuk |
|-------------|-----------------|
| who / whom  | Orang (subjek/objek) |
| which       | Benda / hewan |
| that        | Orang / benda (defining) |
| whose       | Kepemilikan |
| where       | Tempat |
| when        | Waktu |

**Contoh:**
  The student who studies hard will succeed.
  (who = subjek, merujuk ke 'student')

  She's the woman whom I met yesterday.
  (whom = objek dari klausa relatif)

  This is the city where I was born.
    `,
  },
  {
    id: 'reading',
    icon: BookMarked,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '2. Reading Comprehension',
    shortTitle: 'Reading',
    subs: ['Skimming', 'Scanning', 'Main Idea', 'Inference'],
    content: `
## Strategi Reading Comprehension

### Skimming – Membaca Cepat untuk Gambaran Umum
Baca judul, sub-judul, kalimat pertama dan terakhir setiap paragraf.

**Gunakan ketika:** ingin mengetahui topik dan struktur bacaan sebelum menjawab soal.

**Tips:**
→ Fokus pada kata kunci (noun, verb utama)
→ Abaikan detail kecil saat skimming
→ Tandai transisi (however, therefore, in addition)

---

### Scanning – Mencari Informasi Spesifik
Gerakkan mata dengan cepat mencari kata/angka/nama tertentu.

**Gunakan ketika:** soal menanyakan fakta spesifik (tanggal, nama, angka).

**Tips:**
→ Ketahui terlebih dahulu apa yang dicari
→ Cari kata kunci yang persis atau sinonimnya
→ Soal TOEFL reading sering menggunakan paraphrase

---

### Identifying Main Idea (Gagasan Utama)
Main idea = inti dari seluruh paragraf/teks.

**Ciri-ciri kalimat utama (topic sentence):**
• Biasanya di awal paragraf
• Pernyataan yang paling umum
• Didukung oleh kalimat-kalimat lain

**Contoh:**
Paragraf: "Climate change is one of the most pressing issues of our time. Rising temperatures, melting ice caps, and extreme weather events are becoming more frequent..."

Main idea: Climate change is a serious global problem.

---

### Inference – Menarik Kesimpulan Tersirat
Inference = informasi yang tidak langsung tersurat, harus disimpulkan.

**Strategi:**
1. Baca konteks secara keseluruhan
2. Perhatikan kata-kata seperti: "suggests", "implies", "can be inferred"
3. Pilih jawaban yang logis berdasarkan teks, bukan asumsi pribadi

**Contoh Soal:**
Text: "Maria spent the next month reviewing her weakest areas..."
Question: What can be inferred about Maria?
Answer: She is determined to improve and succeed.

---

## Jenis Soal Reading TOEFL-like

1. **Main Idea** – What is the main topic of the passage?
2. **Detail** – According to paragraph 2, ...?
3. **Vocabulary** – The word "diminish" in line 5 is closest in meaning to...?
4. **Inference** – It can be inferred from the passage that...?
5. **Reference** – The word "they" in line 8 refers to...?
6. **Sentence Insertion** – Where would the following sentence best fit?
    `,
  },
  {
    id: 'vocabulary',
    icon: MessageSquare,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. Vocabulary Building',
    shortTitle: 'Vocabulary',
    subs: ['Academic Words', 'Synonym & Antonym', 'Word Formation', 'Context Clues'],
    content: `
## Academic Word List (AWL)

Kata-kata akademik yang sering muncul dalam teks ilmiah dan tes.

### Kata Kerja Akademik Penting
| Kata | Arti | Contoh Kalimat |
|------|------|----------------|
| analyze | menganalisis | Researchers analyzed the data carefully. |
| assess | menilai | The committee will assess your application. |
| demonstrate | menunjukkan | The results demonstrate a clear trend. |
| indicate | mengindikasikan | Studies indicate that exercise is beneficial. |
| establish | menetapkan | The study established a new baseline. |
| evaluate | mengevaluasi | Experts evaluated the new curriculum. |
| implement | mengimplementasikan | The policy was implemented last year. |
| investigate | menyelidiki | Scientists investigated the phenomenon. |

---

## Synonym & Antonym Penting

### Sinonim (Kata Bersinonim)
| Kata | Sinonim |
|------|---------|
| analyze | examine, study, investigate |
| difficult | challenging, complex, demanding |
| important | significant, crucial, vital |
| increase | rise, grow, expand, escalate |
| decrease | diminish, reduce, decline, drop |
| show | demonstrate, indicate, reveal |
| use | utilize, employ, apply |

### Antonim (Kata Berlawanan)
| Kata | Antonim |
|------|---------|
| ambiguous | clear, unambiguous, definite |
| complex | simple, straightforward |
| expand | contract, shrink, reduce |
| temporary | permanent, lasting |
| abstract | concrete, tangible |

---

## Word Formation (Pembentukan Kata)

### Prefix (Awalan) Umum
| Prefix | Makna | Contoh |
|--------|-------|--------|
| un- | tidak | unclear, unable |
| re- | lagi/kembali | review, reconsider |
| pre- | sebelum | preview, predict |
| mis- | salah | misunderstand |
| inter- | antar | international |
| over- | berlebihan | overestimate |

### Suffix (Akhiran) Umum
| Suffix | Kelas Kata | Contoh |
|--------|-----------|--------|
| -tion / -sion | Noun | analysis → analyzation |
| -ly | Adverb | clear → clearly |
| -ful | Adjective | help → helpful |
| -ize / -ise | Verb | modern → modernize |
| -ment | Noun | develop → development |
| -ness | Noun | aware → awareness |

---

## Vocabulary Penting untuk TPA/S2
**ubiquitous** = ada di mana-mana | **hypothesize** = berhipotesis
**elucidate** = menjelaskan dengan jelas | **subsequent** = berikutnya
**preliminary** = pendahuluan/awal | **comprehensive** = menyeluruh
**adequate** = memadai | **enhance** = meningkatkan/memperbaiki
**facilitate** = memfasilitasi | **derive** = menurunkan/berasal dari
    `,
  },
  {
    id: 'structure',
    icon: Layers,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-700',
    title: '4. Structure & Written Expression',
    shortTitle: 'Structure',
    subs: ['Subject-Verb Agreement', 'TOEFL Structure', 'Error Recognition', 'Sentence Completion'],
    content: `
## Subject-Verb Agreement (Kesesuaian Subjek-Predikat)

Subjek tunggal → kata kerja tunggal (V1 + s/es)
Subjek jamak → kata kerja jamak (V1 tanpa s)

### Aturan Khusus

**Neither...nor / Either...or:**
Verb mengikuti subjek yang terdekat.
  Neither the teacher nor the students **were** present.
  Either the manager or the staff members **are** responsible.

**Collective Nouns (dalam British vs American English):**
  American: The committee **has** made a decision. (singular)
  British:  The committee **have** made a decision. (plural)

**Indefinite Pronouns:**
  Everyone, someone, nobody, each → singular
  Everyone **is** invited. ✓

---

## TOEFL-like Structure: Sentence Completion

**Contoh Soal 1:**
  Hardly ____ arrived when the meeting started.
  a. he had    b. had he    c. he has    d. has he
  Jawaban: **b. had he** (Inversion setelah Hardly)

**Contoh Soal 2:**
  It was she who ____ the research.
  a. conducted    b. conducting    c. conducts    d. had conduct
  Jawaban: **a. conducted** (Cleft sentence – past simple)

**Contoh Soal 3:**
  ____ studying hard, she failed the exam.
  a. Although    b. Despite    c. However    d. Because
  Jawaban: **b. Despite** (diikuti noun/gerund phrase)

---

## Error Recognition (Menemukan Kesalahan)

Identifikasi bagian yang salah secara gramatikal.

**Contoh:**
  "Each of the students have submitted their assignment."
   Kesalahan: "have" → harus "has" (each = singular)
   Benar: "Each of the students **has** submitted..."

**Kesalahan Umum yang Diujikan:**
1. Subject-verb agreement
2. Penggunaan article (a, an, the)
3. Urutan kata sifat
4. Paralelisme (parallel structure)
5. Dangling modifier
6. Penggunaan who vs whom vs which

---

## Inversion (Inversi)

Inversi terjadi setelah ekspresi negatif di awal kalimat.

| Ekspresi | Contoh |
|----------|--------|
| Hardly | Hardly had he left when it rained. |
| Never | Never have I seen such beauty. |
| Seldom | Seldom does she arrive late. |
| No sooner...than | No sooner had I sat down than the phone rang. |
| Not only...but also | Not only did she win, but she also broke the record. |

---

## Subjunctive Mood

Digunakan setelah verbs of suggestion/recommendation/requirement.

**Verbs yang diikuti subjunctive:**
insist, suggest, recommend, propose, demand, request, require

**Formula:** Verb + that + S + V1 (tanpa s, tanpa to be)

  He suggested that she **study** harder.  ✓
  The committee requires that each applicant **submit** a portfolio.  ✓
  She insisted that he **be** present at the meeting.  ✓
    `,
  },
]

// Simple markdown table renderer
function renderTable(lines) {
  const rows = lines.filter(l => l.trim().startsWith('|') && !l.trim().match(/^\|[\s-|]+\|$/))
  if (rows.length === 0) return null
  const parse = row => row.split('|').filter(c => c.trim()).map(c => c.trim())
  const header = parse(rows[0])
  const body = rows.slice(1).map(parse)

  return (
    <div className="overflow-x-auto my-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i} className="text-left px-3 py-2.5 bg-gray-50 border-b-2 border-gray-200 font-semibold text-gray-700 first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="hover:bg-gray-50/50 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 border-b border-gray-100 text-gray-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderContent(content) {
  const sections = content.trim().split('\n---\n')
  return sections.map((section, idx) => {
    const lines = section.trim().split('\n')
    const elements = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // Collect table lines
      if (line.trim().startsWith('|')) {
        const tableLines = []
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i])
          i++
        }
        elements.push(<div key={`table-${i}`}>{renderTable(tableLines)}</div>)
        continue
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="font-heading font-bold text-xl text-gray-900 mb-3 mt-2 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="font-heading font-semibold text-base text-gray-800 mb-2 mt-5">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-semibold text-gray-800 mt-3 mb-1 text-sm">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      } else if (line.startsWith('**') && line.includes(':**')) {
        const parts = line.split(':**')
        elements.push(
          <p key={i} className="text-sm mt-3 mb-1">
            <span className="font-semibold text-gray-800">{parts[0].replace(/\*\*/g, '')}:</span>
            <span className="text-gray-600">{parts.slice(1).join(':**')}</span>
          </p>
        )
      } else if (line.startsWith('⚠️')) {
        elements.push(
          <div key={i} className="flex items-start gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl my-3 text-sm text-amber-800">
            <span className="text-base mt-0.5">⚠️</span>
            <span>{line.replace('⚠️ ', '')}</span>
          </div>
        )
      } else if (line.startsWith('→')) {
        elements.push(
          <p key={i} className="text-sm text-emerald-700 leading-relaxed pl-4 flex items-center gap-1.5">
            <ChevronRight size={12} className="text-emerald-400 flex-shrink-0" />
            {line.replace('→ ', '')}
          </p>
        )
      } else if (line.startsWith('•')) {
        elements.push(
          <p key={i} className="text-sm text-gray-700 leading-relaxed pl-4 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
            {line.replace('• ', '')}
          </p>
        )
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <p key={i} className="text-sm text-gray-700 leading-relaxed pl-4 flex items-start gap-2">
            <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              {line.match(/^(\d+)/)[1]}
            </span>
            <span>{line.replace(/^\d+\.\s/, '')}</span>
          </p>
        )
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />)
      } else if (line.match(/^\s{2,}/) || line.includes(' = ') || line.includes('✓')) {
        elements.push(
          <pre key={i} className="text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-gray-800 overflow-x-auto my-1 whitespace-pre-wrap">
            {line.trimStart()}
          </pre>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <p key={i} className="text-sm text-gray-700 leading-relaxed pl-4 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
            {line.replace('- ', '')}
          </p>
        )
      } else {
        elements.push(<p key={i} className="text-gray-700 leading-relaxed text-sm">{line}</p>)
      }
      i++
    }

    return (
      <div key={idx} className={idx > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}>
        {elements}
      </div>
    )
  })
}

export default function English() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 lg:ml-64">
        {/* Modern Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => setMobileSidebar(true)}>
              <Menu size={20} />
            </button>
            <div className={`w-10 h-10 bg-gradient-to-br ${chapter.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
              <BookMarked size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi Bahasa Inggris</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Bab · TOEFL-like & Grammar</p>
            </div>
            <button
              onClick={() => navigate('/latihan/english')}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Latihan Soal <ArrowRight size={14} />
            </button>
          </div>
        </header>

        {/* Chapter Navigation - Desktop */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
            {chapters.map((ch, i) => {
              const ChIcon = ch.icon
              const isActive = activeChapter === i
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${ch.gradient} text-white shadow-md`
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <ChIcon size={15} />
                  <span className="hidden lg:inline">{ch.title}</span>
                  <span className="lg:hidden">{ch.shortTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chapter Navigation - Mobile */}
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
            {chapters.map((ch, i) => {
              const ChIcon = ch.icon
              const isActive = activeChapter === i
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(i)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${ch.gradient} text-white shadow-md`
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChIcon size={13} />
                  {ch.shortTitle}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex">
          {/* Sub-chapter sidebar - Desktop */}
          <aside className="hidden lg:block w-60 bg-white border-r border-gray-100 min-h-[calc(100vh-130px)] sticky top-[130px] self-start">
            <div className="p-4 space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-3">Sub-Bab</p>
              {chapter.subs.map((sub, si) => (
                <div
                  key={sub}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-default"
                >
                  <div className={`w-5 h-5 rounded-full ${chapter.lightBg} flex items-center justify-center`}>
                    <span className={`text-[10px] font-bold ${chapter.lightText}`}>{si + 1}</span>
                  </div>
                  <span className="truncate">{sub}</span>
                </div>
              ))}
            </div>

            {/* Chapter progress card */}
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-emerald-600" />
                <span className="text-xs font-bold text-emerald-900">Progress Bab</span>
              </div>
              <div className="w-full h-2 bg-emerald-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-emerald-600 mt-1.5 font-medium">Bab {activeChapter + 1} dari {chapters.length}</p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="max-w-3xl mx-auto">
              {/* Chapter Hero Card */}
              <div className={`bg-gradient-to-r ${chapter.gradient} rounded-2xl p-5 sm:p-6 mb-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg sm:text-xl">{chapter.title}</h2>
                      <p className="text-white/70 text-xs sm:text-sm">{chapter.subs.length} sub-bab materi</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {chapter.subs.map(sub => (
                      <span key={sub} className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-lg text-xs font-medium text-white/90">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 mb-6">
                {renderContent(chapter.content)}
              </div>

              {/* Chapter Quiz */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
                <ChapterQuiz
                  key={chapter.id}
                  title={chapter.title}
                  questions={englishChapterQuiz[chapter.id] || []}
                />
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 gap-3">
                <button
                  disabled={activeChapter === 0}
                  onClick={() => { setActiveChapter(i => i - 1); window.scrollTo(0, 0) }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">Bab Sebelumnya</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                {activeChapter < chapters.length - 1 ? (
                  <button
                    onClick={() => { setActiveChapter(i => i + 1); window.scrollTo(0, 0) }}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${chapters[activeChapter + 1].gradient} shadow-md hover:shadow-lg transition-all`}
                  >
                    <span className="hidden sm:inline">Bab Berikutnya</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/latihan/english')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Mulai Latihan Soal
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              {/* Mobile Latihan CTA */}
              <div className="sm:hidden mt-4">
                <button
                  onClick={() => navigate('/latihan/english')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Latihan Soal <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
