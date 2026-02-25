import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { mathChapterQuiz } from '../data/mathChapterQuiz'
import { Menu, ArrowRight, BookOpen, Calculator, BarChart2, TrendingUp, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react'

const chapters = [
  {
    id: 'aljabar',
    icon: Calculator,
    gradient: 'from-blue-500 to-blue-700',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    accent: 'blue',
    title: '1. Aljabar Dasar',
    shortTitle: 'Aljabar',
    subs: ['Operasi Bentuk Aljabar', 'Persamaan Linear', 'Sistem Persamaan', 'Pertidaksamaan'],
    content: `
## Operasi Bentuk Aljabar

Aljabar adalah cabang matematika yang menggunakan simbol (variabel) untuk mewakili bilangan yang belum diketahui.

**Suku-suku sejenis** adalah suku yang memiliki variabel dan pangkat yang sama.

Contoh: 3x + 5x = 8x ✓ (sejenis)
        3x + 5y ≠ ... (tidak sejenis, tidak bisa digabung)

**Aturan Distributif:**
a(b + c) = ab + ac

Contoh: 2(x + 4) = 2x + 8

---

## Persamaan Linear

Persamaan linear adalah persamaan dengan pangkat tertinggi variabel adalah 1.

**Bentuk umum:** ax + b = c

**Langkah penyelesaian:**
1. Pindahkan suku konstanta ke ruas kanan
2. Bagi kedua ruas dengan koefisien variabel

**Contoh:**
  2x + 3 = 11
  2x = 11 − 3
  2x = 8
  x = 4

**Latihan:**
Jika 3x − 5 = 10, nilai x = ?
→ 3x = 15 → x = 5 ✓

---

## Sistem Persamaan Linear

Dua atau lebih persamaan yang harus dipenuhi secara bersamaan.

**Metode Substitusi:**
  x + y = 7   ...(1)
  x − y = 3   ...(2)

Dari (2): x = 3 + y
Substitusi ke (1): (3 + y) + y = 7 → y = 2
Maka: x = 3 + 2 = 5

**Metode Eliminasi:**
Tambahkan persamaan (1) dan (2):
  2x = 10 → x = 5

---

## Pertidaksamaan

Mirip persamaan, tetapi menggunakan tanda <, >, ≤, ≥.

⚠️ Perhatian: Jika dikalikan/dibagi bilangan negatif, tanda BERBALIK.

**Contoh:**
  2x + 3 > 11
  2x > 8
  x > 4

Himpunan penyelesaian: x ∈ (4, ∞) atau {x | x > 4}
    `,
  },
  {
    id: 'logika',
    icon: BookOpen,
    gradient: 'from-purple-500 to-purple-700',
    lightBg: 'bg-purple-50',
    lightText: 'text-purple-700',
    accent: 'purple',
    title: '2. Logika & Penalaran',
    shortTitle: 'Logika',
    subs: ['Silogisme', 'Pernyataan Benar/Salah', 'Logika Proposisi', 'Penalaran Numerik'],
    content: `
## Silogisme

Silogisme adalah pola penalaran deduktif yang terdiri dari:
1. **Premis Mayor** (pernyataan umum)
2. **Premis Minor** (pernyataan khusus)
3. **Kesimpulan**

**Contoh (Modus Ponens):**
  Premis Mayor : Semua mahasiswa harus lulus ujian.
  Premis Minor : Andi adalah mahasiswa.
  Kesimpulan   : Andi harus lulus ujian.

**Modus Tollens:**
  Premis Mayor : Jika hujan, maka jalanan basah. (p → q)
  Premis Minor : Jalanan tidak basah. (~q)
  Kesimpulan   : Tidak hujan. (~p)

---

## Logika Proposisi

| Pernyataan | Simbol | Dibaca |
|------------|--------|--------|
| Implikasi  | p → q  | Jika p maka q |
| Kontraposisi | ~q → ~p | Jika tidak q maka tidak p |
| Invers     | ~p → ~q | Jika tidak p maka tidak q |
| Konvers    | q → p  | Jika q maka p |

**Yang ekuivalen:**
• p → q  ≡  ~q → ~p (kontraposisi)
• ~p → ~q ≡ q → p (konvers = invers satu sama lain)

**Nilai Kebenaran Implikasi (p → q):**
| p | q | p→q |
|---|---|-----|
| B | B |  B  |
| B | S |  S  |
| S | B |  B  |
| S | S |  B  |

→ Implikasi hanya SALAH bila hipotesis BENAR dan konklusi SALAH.

---

## Penalaran Numerik (Pola Bilangan)

**Aritmetika (selisih tetap):**  2, 5, 8, 11, ___ → +3 → 14

**Geometri (rasio tetap):**  2, 4, 8, 16, ___ → ×2 → 32

**Fibonacci:**  1, 1, 2, 3, 5, 8, ___ → 13 (setiap suku = dua suku sebelumnya)

**Tips TPA:** Perhatikan pola selisih pertama, lalu selisih kedua jika perlu.
    `,
  },
  {
    id: 'statistika',
    icon: BarChart2,
    gradient: 'from-emerald-500 to-emerald-700',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    accent: 'emerald',
    title: '3. Statistika Dasar',
    shortTitle: 'Statistika',
    subs: ['Mean', 'Median', 'Modus', 'Standar Deviasi', 'Probabilitas'],
    content: `
## Ukuran Pemusatan Data

### Mean (Rata-rata)
Mean = Σxᵢ / n

**Contoh:** Data: 10, 20, 30, 40, 50
Mean = (10+20+30+40+50) / 5 = 150 / 5 = 30

**Jika mean diketahui:**
Total = Mean × Banyak Data
Contoh: Mean 5 data = 20 → Total = 100

---

### Median (Nilai Tengah)
Urutkan data terlebih dahulu.

- Jika n **ganjil**: Median = data ke-(n+1)/2
- Jika n **genap**: Median = rata-rata data ke-n/2 dan ke-(n/2)+1

**Contoh:**
Data: 3, 7, 5, 9, 1, 4, 6
Diurutkan: 1, 3, 4, **5**, 6, 7, 9  → Median = 5

---

### Modus (Nilai Terbanyak)
Modus = nilai yang paling sering muncul.

Data: 2, 3, 3, 4, 5, 3, 6, 2  → Modus = 3 (muncul 3×)

---

## Standar Deviasi

Mengukur sebaran/penyimpangan data dari rata-rata.

σ = √[ Σ(xᵢ − x̄)² / n ]

**Z-score:** mengubah nilai ke skala standar
z = (x − μ) / σ

Contoh: μ=70, σ=10, x=80 → z = (80−70)/10 = 1

---

## Probabilitas

P(A) = Jumlah kejadian A / Total ruang sampel

**Contoh:**
• Dadu: P(genap) = 3/6 = 1/2
• Koin: P(gambar) = 1/2

**Kejadian Saling Bebas (Independent):**
P(A ∩ B) = P(A) × P(B)

**Kejadian Saling Lepas (Mutually Exclusive):**
P(A ∪ B) = P(A) + P(B)

**Aturan Penjumlahan Umum:**
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
    `,
  },
  {
    id: 'kalkulus',
    icon: TrendingUp,
    gradient: 'from-rose-500 to-rose-700',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-700',
    accent: 'rose',
    title: '4. Kalkulus Dasar',
    shortTitle: 'Kalkulus',
    subs: ['Limit', 'Turunan', 'Aturan Turunan', 'Aplikasi Turunan'],
    content: `
## Limit

Limit menggambarkan nilai fungsi ketika variabel mendekati suatu nilai.

Notasi: lim(x→a) f(x) = L

**Cara menghitung:**
1. **Substitusi langsung:** masukkan nilai a ke f(x)
2. **Faktorisasi:** jika substitusi menghasilkan 0/0

**Contoh:**
lim(x→2) (x² − 4)/(x − 2)
= lim (x+2)(x−2)/(x−2)
= lim (x+2)
= 2 + 2 = **4**

---

## Turunan (Derivatif)

Turunan = laju perubahan fungsi.

**Rumus dasar:**
| f(x)   | f'(x)    |
|--------|----------|
| xⁿ     | nxⁿ⁻¹   |
| c      | 0        |
| sin x  | cos x    |
| cos x  | −sin x   |
| eˣ     | eˣ       |
| ln x   | 1/x      |

**Contoh:**
f(x) = 3x² + 2x − 5
f'(x) = 6x + 2

---

## Aturan Turunan

**Aturan Perkalian (Product Rule):**
(fg)' = f'g + fg'

**Aturan Pembagian (Quotient Rule):**
(f/g)' = (f'g − fg') / g²

**Aturan Rantai (Chain Rule):**
d/dx [f(g(x))] = f'(g(x)) · g'(x)

**Contoh Chain Rule:**
h(x) = (3x + 1)⁴
h'(x) = 4(3x+1)³ · 3 = 12(3x+1)³

---

## Aplikasi Turunan: Nilai Ekstrim

Untuk mencari nilai maksimum/minimum:
1. Cari f'(x) = 0  → titik kritis
2. Uji f''(x): jika f''(x) < 0 → maksimum, jika > 0 → minimum

**Contoh:**
f(x) = −x² + 4x − 1
f'(x) = −2x + 4 = 0  → x = 2
f(2) = −4 + 8 − 1 = **3** (nilai maksimum)
f''(2) = −2 < 0 ✓ (memang maksimum)
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
            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
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
          <p key={i} className="text-sm text-blue-700 leading-relaxed pl-4 flex items-center gap-1.5">
            <ChevronRight size={12} className="text-blue-400 flex-shrink-0" />
            {line.replace('→ ', '')}
          </p>
        )
      } else if (line.startsWith('•')) {
        elements.push(
          <p key={i} className="text-sm text-gray-700 leading-relaxed pl-4 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            {line.replace('• ', '')}
          </p>
        )
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <p key={i} className="text-sm text-gray-700 leading-relaxed pl-4 flex items-start gap-2">
            <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              {line.match(/^(\d+)/)[1]}
            </span>
            <span>{line.replace(/^\d+\.\s/, '')}</span>
          </p>
        )
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />)
      } else if (line.match(/^\s{2,}/) || line.includes(' = ') || line.match(/[→×÷]/) || line.includes('✓')) {
        elements.push(
          <pre key={i} className="text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-gray-800 overflow-x-auto my-1">
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

export default function Matematika() {
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
              <Calculator size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi Matematika</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Bab · Persiapan TPA S2</p>
            </div>
            <button
              onClick={() => navigate('/latihan/matematika')}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
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

        {/* Chapter Navigation - Mobile (horizontal scroll) */}
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
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-900">Progress Bab</span>
              </div>
              <div className="w-full h-2 bg-blue-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-blue-600 mt-1.5 font-medium">Bab {activeChapter + 1} dari {chapters.length}</p>
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
                  questions={mathChapterQuiz[chapter.id] || []}
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
                    onClick={() => navigate('/latihan/matematika')}
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
                  onClick={() => navigate('/latihan/matematika')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
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
