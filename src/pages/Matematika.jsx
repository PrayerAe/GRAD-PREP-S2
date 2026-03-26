import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { mathChapterQuiz } from '../data/mathChapterQuiz'
import { mathSections, CheatSheet } from '../data/mathContent.jsx'
import { mathCheatsheets } from '../data/mathCheatsheets'
import { Menu, ArrowRight, Calculator, BarChart2, TrendingUp, BookOpen, ChevronLeft, ChevronRight, Sparkles, Award, List } from 'lucide-react'

const chapters = [
  {
    id: 'aljabar',
    icon: Calculator,
    gradient: 'from-blue-500 to-blue-700',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '1. Aljabar Dasar',
    shortTitle: 'Aljabar',
    subs: ['Operasi Bentuk Aljabar', 'Persamaan Linear', 'Sistem Persamaan', 'Pertidaksamaan', 'Logaritma', 'Barisan & Deret', 'Matriks Dasar'],
  },
  {
    id: 'logika',
    icon: BookOpen,
    gradient: 'from-purple-500 to-purple-700',
    lightBg: 'bg-purple-50',
    lightText: 'text-purple-700',
    title: '2. Logika & Penalaran',
    shortTitle: 'Logika',
    subs: ['Silogisme', 'Logika Proposisi', 'Pola Bilangan', 'Analogi Verbal', 'Penalaran Analitik'],
  },
  {
    id: 'statistika',
    icon: BarChart2,
    gradient: 'from-emerald-500 to-emerald-700',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    title: '3. Statistika Dasar',
    shortTitle: 'Statistika',
    subs: ['Mean, Median, Modus', 'Standar Deviasi & Z-Score', 'Probabilitas', 'Permutasi & Kombinasi', 'Distribusi Normal'],
  },
  {
    id: 'kalkulus',
    icon: TrendingUp,
    gradient: 'from-rose-500 to-rose-700',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-700',
    title: '4. Kalkulus Dasar',
    shortTitle: 'Kalkulus',
    subs: ['Limit Fungsi', 'Turunan (Derivatif)', 'Aturan Turunan & Aplikasi', 'Integral Dasar', 'Integral Substitusi & Aplikasi'],
  },
]

const chapterColors = { aljabar: 'blue', logika: 'purple', statistika: 'emerald', kalkulus: 'rose' }

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'blue'} />
      )}
    </div>
  )
}

export default function Matematika() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null) // null = all, 'quiz' = quiz only, number = specific section
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [subOpen, setSubOpen] = useState(true)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = mathSections[chapter.id] || []
  const cheatsheets = mathCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'blue'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 xl:ml-64">
        {/* Sticky wrapper: header + chapter nav */}
        <div className="sticky top-0 z-30">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
            <button className="xl:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => setMobileSidebar(true)}>
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
                  onClick={() => handleChapterChange(i)}
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
                  onClick={() => handleChapterChange(i)}
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
        </div>{/* end sticky wrapper */}

        {/* Content Area */}
        <div className="flex">
          {/* Sub-chapter sidebar - Desktop */}
          <aside className={`hidden lg:flex flex-col bg-white border-r border-gray-100 min-h-[calc(100vh-130px)] sticky top-[130px] self-start transition-all duration-300 overflow-hidden ${subOpen ? 'w-60' : 'w-10'}`}>
            <div className={`flex ${subOpen ? 'justify-between items-center px-3' : 'justify-center'} pt-3 pb-2 border-b border-gray-100 flex-shrink-0`}>
              {subOpen && <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sub-Bab</p>}
              <button onClick={() => setSubOpen(o => !o)} title={subOpen ? 'Sembunyikan sidebar' : 'Tampilkan sidebar'} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                {subOpen ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
              </button>
            </div>
            {subOpen && (
              <>
                <div className="p-3 space-y-1 overflow-y-auto flex-1">
                  <button onClick={() => { setActiveSub(null); window.scrollTo(0, 0) }} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${activeSub === null ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'}`}>
                    <div className={`w-5 h-5 rounded-full ${activeSub === null ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                      <List size={10} className={activeSub === null ? chapter.lightText : 'text-gray-400'} />
                    </div>
                    <span className="truncate text-xs">Semua Materi</span>
                  </button>
                  {chapter.subs.map((sub, si) => (
                    <button key={sub} onClick={() => { setActiveSub(si); window.scrollTo(0, 0) }} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${activeSub === si ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'}`}>
                      <div className={`w-5 h-5 rounded-full ${activeSub === si ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-[10px] font-bold ${chapter.lightText}`}>{si + 1}</span>
                      </div>
                      <span className="truncate text-xs">{sub}</span>
                    </button>
                  ))}
                  <button onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${activeSub === 'quiz' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <div className={`w-5 h-5 rounded-full ${activeSub === 'quiz' ? 'bg-white' : 'bg-amber-50'} flex items-center justify-center flex-shrink-0`}>
                      <Award size={10} className="text-amber-600" />
                    </div>
                    <span className="truncate text-xs">Kuis Bab</span>
                  </button>
                </div>
                <div className="mx-3 my-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={13} className="text-blue-600" />
                    <span className="text-xs font-bold text-blue-900">Progress Bab</span>
                  </div>
                  <div className="w-full h-1.5 bg-blue-200/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }} />
                  </div>
                  <p className="text-[10px] text-blue-600 mt-1.5 font-medium">Bab {activeChapter + 1} dari {chapters.length}</p>
                </div>
              </>
            )}
          </aside>

          {/* Main Content */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div>
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

              {/* Mobile Sub-chapter selector */}
              <div className="lg:hidden mb-4">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                  <button
                    onClick={() => { setActiveSub(null); window.scrollTo(0, 0) }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeSub === null ? `bg-gradient-to-r ${chapter.gradient} text-white shadow-sm` : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Semua
                  </button>
                  {chapter.subs.map((sub, si) => (
                    <button
                      key={sub}
                      onClick={() => { setActiveSub(si); window.scrollTo(0, 0) }}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeSub === si ? `bg-gradient-to-r ${chapter.gradient} text-white shadow-sm` : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                  <button
                    onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeSub === 'quiz' ? 'bg-amber-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Kuis
                  </button>
                </div>
              </div>

              {/* Rich Content Sections */}
              {activeSub !== 'quiz' && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 mb-6">
                  {activeSub === null
                    ? sections.map((section, idx) => (
                        <SectionCard key={idx} section={section} index={idx} cheatsheet={cheatsheets[idx]} color={color} />
                      ))
                    : sections[activeSub] && (
                        <SectionCard key={activeSub} section={sections[activeSub]} index={0} cheatsheet={cheatsheets[activeSub]} color={color} />
                      )
                  }
                </div>
              )}

              {/* Chapter Quiz */}
              {(activeSub === null || activeSub === 'quiz') && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
                <ChapterQuiz
                  key={chapter.id}
                  title={chapter.title}
                  questions={mathChapterQuiz[chapter.id] || []}
                  chapterId={`math-${chapter.id}`}
                  onQuizSubmit={saveQuizScore}
                />
              </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 gap-3">
                <button
                  disabled={activeChapter === 0}
                  onClick={() => { setActiveChapter(i => i - 1); setActiveSub(null); window.scrollTo(0, 0) }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">Bab Sebelumnya</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                {activeChapter < chapters.length - 1 ? (
                  <button
                    onClick={() => { setActiveChapter(i => i + 1); setActiveSub(null); window.scrollTo(0, 0) }}
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
