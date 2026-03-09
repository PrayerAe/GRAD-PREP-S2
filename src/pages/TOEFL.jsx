import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { toeflChapterQuiz } from '../data/toeflChapterQuiz'
import { toeflSections } from '../data/toeflContent.jsx'
import { CheatSheet } from '../data/mathContent.jsx'
import { toeflCheatsheets } from '../data/toeflCheatsheets'
import ListeningSimulator from '../components/ListeningSimulator'
import {
  Menu, ArrowRight, BookMarked, BookOpen, Headphones, Mic, PenLine,
  ChevronLeft, ChevronRight, Sparkles, Award, List
} from 'lucide-react'

const chapters = [
  {
    id: 'reading',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '1. TOEFL Reading',
    shortTitle: 'Reading',
    subs: ['Jenis Passage & Strategi', 'Question Types', 'Time Management', 'Latihan Passage'],
  },
  {
    id: 'listening',
    icon: Headphones,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    title: '2. TOEFL Listening',
    shortTitle: 'Listening',
    subs: ['Struktur Listening', 'Note-Taking Efektif', 'Jenis Soal & Strategi', 'Simulasi Lecture'],
  },
  {
    id: 'speaking',
    icon: Mic,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. TOEFL Speaking',
    shortTitle: 'Speaking',
    subs: ['4 Task Overview', 'Template & Strategi', 'Contoh Response & Tips'],
  },
  {
    id: 'writing',
    icon: PenLine,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-700',
    title: '4. TOEFL Writing',
    shortTitle: 'Writing',
    subs: ['Overview & Scoring', 'Integrated Writing', 'Independent Essay'],
  },
]

const chapterColors = { reading: 'blue', listening: 'emerald', speaking: 'violet', writing: 'amber' }

// Listening simulator data for TOEFL
const toeflListeningData = {
  title: 'Academic Lecture: Epigenetics',
  type: 'lecture',
  color: 'emerald',
  context: 'A biology professor is giving a lecture to undergraduate students about epigenetics — how gene expression can change without altering the DNA sequence itself.',
  tips: [
    'Baca soal terlebih dahulu sebelum "mendengar" untuk tahu apa yang perlu diperhatikan.',
    'Dengarkan sinyal organisasi: "First...", "However...", "The key point is..." untuk menandai ide penting.',
    'Catat istilah teknis dan definisinya — soal sering menguji definisi dari terminologi baru.',
    'Perhatikan contoh dan analogi karena sering menjadi dasar soal inference.',
  ],
  script: [
    { speaker: 'Professor', text: 'Alright, let\'s begin today\'s lecture. We\'re going to talk about a fascinating area of biology called epigenetics. Now, epigenetics literally means "above genetics," and it studies how gene expression — that is, whether a gene is turned on or off — can be modified without any change to the actual DNA sequence.' },
    { speaker: 'Professor', text: 'Think of your DNA as a set of instructions — like a recipe book. Epigenetics determines which recipes get cooked and which ones stay closed. The DNA itself doesn\'t change, but the way it\'s read does. This is a crucial distinction.' },
    { speaker: 'Professor', text: 'One of the main mechanisms of epigenetics is DNA methylation. This involves the attachment of a methyl group — a small chemical group — to specific parts of the DNA. When a gene is heavily methylated, it tends to be silenced, or turned off. When methylation is removed, the gene can be expressed again.' },
    { speaker: 'Professor', text: 'Here\'s what makes epigenetics particularly interesting: these epigenetic changes can be influenced by environmental factors. Diet, stress, exposure to pollutants — all of these can alter how genes are expressed. And in some cases, these changes can be passed on to the next generation. This is called transgenerational epigenetic inheritance.' },
    { speaker: 'Professor', text: 'For example, studies of famine survivors in the Netherlands — known as the Dutch Hunger Winter of 1944 — showed that children and even grandchildren of people who experienced severe starvation showed different metabolic patterns, apparently due to epigenetic changes triggered by nutritional stress.' },
    { speaker: 'Professor', text: 'This has significant implications for medicine. Epigenetic modifications are now being studied as potential targets for cancer therapy because many cancers involve abnormal patterns of gene silencing or activation. So understanding epigenetics isn\'t just academic — it has real clinical relevance.' },
  ],
  questions: [
    {
      id: 'tl1',
      question: 'What is the main topic of the lecture?',
      options: [
        'How DNA mutations cause cancer',
        'How gene expression can change without altering the DNA sequence',
        'The structure of chromosomes in human cells',
        'How to use genetic engineering to treat diseases',
      ],
      correctAnswer: 1,
      explanation: 'The professor explicitly states: "epigenetics... studies how gene expression can be modified without any change to the actual DNA sequence." The lecture focuses on this concept throughout.',
    },
    {
      id: 'tl2',
      question: 'According to the professor, what does DNA methylation do to a gene?',
      options: [
        'It changes the DNA sequence permanently',
        'It copies the gene to a new location',
        'It tends to silence or turn off the gene',
        'It accelerates the gene\'s replication rate',
      ],
      correctAnswer: 2,
      explanation: 'The professor states: "When a gene is heavily methylated, it tends to be silenced, or turned off." This is the direct effect of DNA methylation described in the lecture.',
    },
    {
      id: 'tl3',
      question: 'Why does the professor mention the Dutch Hunger Winter of 1944?',
      options: [
        'To describe the history of World War II in Europe',
        'To give an example of how epigenetic changes can be inherited across generations',
        'To explain why famine is caused by poor nutrition',
        'To introduce a new theory about DNA methylation in children',
      ],
      correctAnswer: 1,
      explanation: 'The Dutch Hunger Winter example is used to illustrate "transgenerational epigenetic inheritance" — that epigenetic changes triggered by environmental stress can be passed to children and grandchildren.',
    },
    {
      id: 'tl4',
      question: 'What analogy does the professor use to explain the relationship between DNA and epigenetics?',
      options: [
        'A computer program and its software updates',
        'A recipe book and which recipes get cooked',
        'A library and how books are organized',
        'A blueprint and the construction process',
      ],
      correctAnswer: 1,
      explanation: 'The professor says: "Think of your DNA as a set of instructions — like a recipe book. Epigenetics determines which recipes get cooked and which ones stay closed."',
    },
  ],
}

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-blue-500 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'blue'} />
      )}
    </div>
  )
}

export default function TOEFL() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = toeflSections[chapter.id] || []
  const cheatsheets = toeflCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'blue'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

  // Show listening simulator in the listening chapter
  const isListeningChapter = chapter.id === 'listening'

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
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi TOEFL</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Section · Reading, Listening, Speaking, Writing</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-semibold">iBT Format</span>
              <button
                onClick={() => navigate('/latihan/toefl')}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Latihan Soal <ArrowRight size={14} />
              </button>
            </div>
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
              <button
                onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeSub === 'quiz' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${activeSub === 'quiz' ? 'bg-white' : 'bg-amber-50'} flex items-center justify-center flex-shrink-0`}>
                  <Award size={10} className="text-amber-600" />
                </div>
                <span className="truncate text-xs">Kuis Section</span>
              </button>
            </div>
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-900">Progress Section</span>
              </div>
              <div className="w-full h-2 bg-blue-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-blue-600 mt-1.5 font-medium">Section {activeChapter + 1} dari {chapters.length}</p>
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

                  {/* Listening Simulator — tampil di chapter Listening */}
                  {isListeningChapter && (activeSub === null || activeSub === 3) && (
                    <div className={`${activeSub === null ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
                      <h2 className="font-heading font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-emerald-500 rounded-full flex-shrink-0" />
                        Simulasi Listening Interaktif
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">Tekan Play untuk memulai simulasi — kata-kata terungkap secara bertahap seperti audio asli.</p>
                      <ListeningSimulator {...toeflListeningData} />
                    </div>
                  )}
                </div>
              )}

              {/* Chapter Quiz */}
              {(activeSub === null || activeSub === 'quiz') && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
                  <ChapterQuiz
                    key={chapter.id}
                    title={chapter.title}
                    questions={toeflChapterQuiz[chapter.id] || []}
                    chapterId={`toefl-${chapter.id}`}
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
                  <span className="hidden sm:inline">Section Sebelumnya</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                {activeChapter < chapters.length - 1 ? (
                  <button
                    onClick={() => { setActiveChapter(i => i + 1); setActiveSub(null); window.scrollTo(0, 0) }}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${chapters[activeChapter + 1].gradient} shadow-md hover:shadow-lg transition-all`}
                  >
                    <span className="hidden sm:inline">Section Berikutnya</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/materi/ielts')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Lanjut ke IELTS
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <div className="sm:hidden mt-4">
                <button
                  onClick={() => navigate('/latihan/toefl')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Latihan Soal TOEFL <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
