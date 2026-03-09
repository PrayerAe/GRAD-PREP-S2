import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { ieltsChapterQuiz } from '../data/ieltsChapterQuiz'
import { ieltsSections } from '../data/ieltsContent.jsx'
import { CheatSheet } from '../data/mathContent.jsx'
import { ieltsCheatsheets } from '../data/ieltsCheatsheets'
import ListeningSimulator from '../components/ListeningSimulator'
import {
  Menu, ArrowRight, BookMarked, BookOpen, Headphones, Mic, PenLine,
  ChevronLeft, ChevronRight, Sparkles, Award, List
} from 'lucide-react'

const chapters = [
  {
    id: 'listening',
    icon: Headphones,
    gradient: 'from-cyan-500 to-teal-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-700',
    title: '1. IELTS Listening',
    shortTitle: 'Listening',
    subs: ['Format & Struktur', 'Strategi Listening', 'Question Types', 'Simulasi Section 1'],
  },
  {
    id: 'reading',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '2. IELTS Reading',
    shortTitle: 'Reading',
    subs: ['Format & Band Score', 'Question Types', 'True/False/Not Given', 'Matching Headings'],
  },
  {
    id: 'writing',
    icon: PenLine,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. IELTS Writing',
    shortTitle: 'Writing',
    subs: ['Task 1: Graphs & Diagrams', 'Task 1: Language & Phrases', 'Task 2: Essay Types', 'Task 2: Band 7+ Tips'],
  },
  {
    id: 'speaking',
    icon: Mic,
    gradient: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-700',
    title: '4. IELTS Speaking',
    shortTitle: 'Speaking',
    subs: ['Format 3 Part', 'Strategi Setiap Part', 'Contoh Cue Card & Response'],
  },
]

const chapterColors = { listening: 'teal', reading: 'blue', writing: 'violet', speaking: 'rose' }

// Listening simulator data for IELTS Section 1 (everyday conversation)
const ieltsListeningData = {
  title: 'IELTS Listening: Section 1 — Apartment Inquiry',
  type: 'conversation',
  color: 'emerald',
  context: 'A student (Tom) is calling a rental agency to inquire about an available apartment. This is a typical IELTS Section 1 conversation — everyday dialogue in a social or service context. Listen for specific details like names, numbers, dates, and addresses.',
  tips: [
    'Baca form/tabel sebelum mendengar — ketahui tipe informasi yang dicari (nama? tanggal? harga?).',
    'Perhatikan bahwa jawaban mungkin dieja atau diulang — catat ejaan dengan benar.',
    'Waspadai distractor: speaker sering menyebutkan satu angka lalu mengoreksinya. Tulis yang terakhir.',
    'Jawaban form completion biasanya maksimal 3 kata atau angka — jangan tulis lebih panjang dari yang diminta.',
    'Singular vs plural penting! Jika soal meminta "number of rooms", pastikan jawaban sesuai.',
  ],
  script: [
    { speaker: 'Agent (Sandra)', text: 'Good morning, Sunrise Rentals, Sandra speaking. How can I help you?' },
    { speaker: 'Tom', text: 'Hi, good morning. My name\'s Tom Hargreaves — H-A-R-G-R-E-A-V-E-S. I\'m calling about a two-bedroom apartment I saw advertised on your website.' },
    { speaker: 'Agent (Sandra)', text: 'Of course, Mr. Hargreaves. Which listing were you interested in? We have a couple of two-bedroom properties available right now.' },
    { speaker: 'Tom', text: 'It was the one on 14 Maple Street. The monthly rent was listed as 950 pounds. Is that still available?' },
    { speaker: 'Agent (Sandra)', text: 'Let me check... yes, that one is still available. The rent is actually 975 pounds per month — the price was recently updated, so sorry for any confusion with the website.' },
    { speaker: 'Tom', text: 'Oh, I see. That\'s fine. And when would it be available to move in?' },
    { speaker: 'Agent (Sandra)', text: 'It\'s available from the first of March. The current tenant leaves on the 28th of February, so you could move in the very next day.' },
    { speaker: 'Tom', text: 'That works perfectly for me. Could you tell me — is parking included in the rent?' },
    { speaker: 'Agent (Sandra)', text: 'Yes, there\'s one parking space included in the rent. If you need a second space, there\'s an additional charge of 40 pounds per month.' },
    { speaker: 'Tom', text: 'One space is enough, thank you. I\'d also like to know — is it a furnished apartment?' },
    { speaker: 'Agent (Sandra)', text: 'It comes partially furnished — there\'s a fridge, washing machine, and sofa, but no beds or wardrobes. The kitchen is fully equipped.' },
    { speaker: 'Tom', text: 'That sounds good. What\'s the process for viewing? I\'d like to come and see it.' },
    { speaker: 'Agent (Sandra)', text: 'Absolutely. Could I take your contact number? I\'ll arrange a viewing for this week.' },
    { speaker: 'Tom', text: 'Of course — my mobile is 07821 349 612.' },
    { speaker: 'Agent (Sandra)', text: 'Great, 07821 349 612. I\'ll call you back within the hour to confirm a time. Thank you for calling, Mr. Hargreaves.' },
  ],
  questions: [
    {
      id: 'il_s1',
      question: 'What is the correct spelling of the caller\'s surname?',
      options: ['HARGREEVE', 'HARGREAVES', 'HARGRAEVES', 'HARGRIEVES'],
      correctAnswer: 1,
      explanation: 'Tom spells his name out loud: "H-A-R-G-R-E-A-V-E-S" — Hargreaves. The other options have incorrect spellings.',
    },
    {
      id: 'il_s2',
      question: 'What is the actual monthly rent for the apartment?',
      options: ['£900', '£950', '£975', '£1,000'],
      correctAnswer: 2,
      explanation: 'The agent corrects the price: "The rent is actually 975 pounds per month — the price was recently updated." The website showed £950, but that was outdated. This is a classic IELTS distractor.',
    },
    {
      id: 'il_s3',
      question: 'When is the apartment available to move in?',
      options: ['28th February', '1st March', '2nd March', '14th March'],
      correctAnswer: 1,
      explanation: 'The agent says: "It\'s available from the first of March." The 28th February is when the current tenant leaves, not when it becomes available.',
    },
    {
      id: 'il_s4',
      question: 'What does the apartment NOT include in its partial furnishing?',
      options: ['Washing machine', 'Kitchen equipment', 'Sofa', 'Beds and wardrobes'],
      correctAnswer: 3,
      explanation: 'The agent states the apartment includes a fridge, washing machine, and sofa, and the kitchen is fully equipped — but explicitly says "no beds or wardrobes." So beds and wardrobes are NOT included.',
    },
  ],
}

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-cyan-500 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'teal'} />
      )}
    </div>
  )
}

export default function IELTS() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = ieltsSections[chapter.id] || []
  const cheatsheets = ieltsCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'teal'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

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
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi IELTS</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Section · Listening, Reading, Writing, Speaking</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs px-3 py-1.5 bg-cyan-50 text-cyan-600 rounded-lg font-semibold">Academic Band</span>
              <button
                onClick={() => navigate('/latihan/ielts')}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
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
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-cyan-600" />
                <span className="text-xs font-bold text-cyan-900">Progress Section</span>
              </div>
              <div className="w-full h-2 bg-cyan-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-cyan-600 mt-1.5 font-medium">Section {activeChapter + 1} dari {chapters.length}</p>
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
                        <div className="w-1.5 h-6 bg-cyan-500 rounded-full flex-shrink-0" />
                        Simulasi Listening Interaktif — Section 1
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">Tekan Play untuk simulasi — kata muncul bertahap seperti audio asli IELTS.</p>
                      <ListeningSimulator {...ieltsListeningData} />
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
                    questions={ieltsChapterQuiz[chapter.id] || []}
                    chapterId={`ielts-${chapter.id}`}
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
                    onClick={() => navigate('/tryout')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Ikuti Tryout
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <div className="sm:hidden mt-4">
                <button
                  onClick={() => navigate('/latihan/ielts')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Latihan Soal IELTS <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
