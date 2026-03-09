import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { englishChapterQuiz } from '../data/englishChapterQuiz'
import { englishSections } from '../data/englishContent.jsx'
import { CheatSheet } from '../data/mathContent.jsx'
import { englishCheatsheets } from '../data/englishCheatsheets'
import { Menu, ArrowRight, BookMarked, BookOpen, MessageSquare, Layers, ChevronLeft, ChevronRight, Sparkles, Award, List } from 'lucide-react'

const chapters = [
  {
    id: 'grammar',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    title: '1. Grammar Review',
    shortTitle: 'Grammar',
    subs: ['Tenses Lengkap', 'Passive Voice', 'Conditional Sentence', 'Relative Clause', 'Gerund vs Infinitive', 'Causative & Wish'],
  },
  {
    id: 'reading',
    icon: BookMarked,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '2. Reading Comprehension',
    shortTitle: 'Reading',
    subs: ['Skimming & Scanning', 'Main Idea & Inference', 'Jenis Soal TOEFL', 'Latihan Reading Passage'],
  },
  {
    id: 'vocabulary',
    icon: MessageSquare,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. Vocabulary Building',
    shortTitle: 'Vocabulary',
    subs: ['Academic Word List', 'Word Formation', 'Synonym & Context Clues', 'Confusing Word Pairs', 'Collocations & Transitions'],
  },
  {
    id: 'structure',
    icon: Layers,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-700',
    title: '4. Structure & Written Expression',
    shortTitle: 'Structure',
    subs: ['Subject-Verb Agreement', 'Inversion & TOEFL Structure', 'Subjunctive & Error Recognition', 'Parallel Structure', 'Comparatives & Superlatives', 'Articles & Common Errors'],
  },
]

const chapterColors = { grammar: 'emerald', reading: 'blue', vocabulary: 'violet', structure: 'amber' }

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-emerald-500 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'emerald'} />
      )}
    </div>
  )
}

export default function English() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null) // null = all, 'quiz' = quiz only, number = specific section
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = englishSections[chapter.id] || []
  const cheatsheets = englishCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'emerald'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 lg:ml-64">
        {/* Header */}
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

        {/* Content Area */}
        <div className="flex">
          {/* Sub-chapter sidebar - Desktop */}
          <aside className="hidden lg:block w-60 bg-white border-r border-gray-100 min-h-[calc(100vh-130px)] sticky top-[130px] self-start">
            <div className="p-4 space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-3">Sub-Bab</p>
              {/* Semua Materi */}
              <button
                onClick={() => { setActiveSub(null); window.scrollTo(0, 0) }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeSub === null ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${activeSub === null ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                  <List size={10} className={activeSub === null ? chapter.lightText : 'text-gray-400'} />
                </div>
                <span className="truncate text-xs">Semua Materi</span>
              </button>
              {chapter.subs.map((sub, si) => (
                <button
                  key={sub}
                  onClick={() => { setActiveSub(si); window.scrollTo(0, 0) }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    activeSub === si ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full ${activeSub === si ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-[10px] font-bold ${chapter.lightText}`}>{si + 1}</span>
                  </div>
                  <span className="truncate text-xs">{sub}</span>
                </button>
              ))}
              {/* Kuis */}
              <button
                onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeSub === 'quiz' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${activeSub === 'quiz' ? 'bg-white' : 'bg-amber-50'} flex items-center justify-center flex-shrink-0`}>
                  <Award size={10} className="text-amber-600" />
                </div>
                <span className="truncate text-xs">Kuis Bab</span>
              </button>
            </div>
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
                  questions={englishChapterQuiz[chapter.id] || []}
                  chapterId={`eng-${chapter.id}`}
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
                    onClick={() => navigate('/latihan/english')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Mulai Latihan Soal
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

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
