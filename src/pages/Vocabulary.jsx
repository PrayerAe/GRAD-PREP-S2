import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import {
  Menu, BookOpen, RotateCcw, ChevronLeft, ChevronRight,
  Volume2, CheckCircle, XCircle, List, Layers, GraduationCap,
  Search, Star, StarOff, Trophy, Target, Shuffle
} from 'lucide-react'
import { vocabularyWords, categories, categoryColorMap, levelColorMap } from '../data/vocabularyData'

// ── Flashcard component ──────────────────────────────────────────────────────
function Flashcard({ word, onKnow, onLearn, showBack, setShowBack }) {
  const cc = categoryColorMap[word.category] || categoryColorMap.academic
  const lc = levelColorMap[word.level] || levelColorMap.B2

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Card */}
      <div
        className="w-full max-w-xl cursor-pointer select-none"
        style={{ perspective: '1200px' }}
        onClick={() => setShowBack(b => !b)}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: showBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: showBack ? '420px' : '220px',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-8 gap-4"
            style={{ backfaceVisibility: 'hidden', minHeight: '220px' }}
          >
            <div className="flex gap-2 flex-wrap justify-center">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${cc.bg} ${cc.text}`}>
                {word.category.toUpperCase()}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${lc.bg} ${lc.text}`}>
                {word.level}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 text-center">{word.word}</h2>
            <p className="text-gray-400 text-lg font-mono">{word.phonetic}</p>
            <span className="text-sm text-gray-400 italic">{word.type}</span>
            <p className="text-gray-400 text-sm mt-2">Ketuk untuk lihat arti →</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col p-6 gap-3 overflow-y-auto"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', minHeight: '420px' }}
          >
            <div className="flex gap-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${cc.bg} ${cc.text}`}>
                {word.category.toUpperCase()}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${lc.bg} ${lc.text}`}>
                {word.level}
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">{word.word}</h2>
              <p className="text-gray-400 text-sm font-mono">{word.phonetic} · {word.type}</p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-3">
              <p className="text-sm font-semibold text-indigo-800 mb-1">Definisi (EN)</p>
              <p className="text-gray-800 text-sm">{word.definition}</p>
              <p className="text-indigo-600 text-sm mt-1">{word.definitionId}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Contoh Kalimat</p>
              {word.examples.map((ex, i) => (
                <p key={i} className="text-sm text-gray-700 mb-1">• {ex}</p>
              ))}
            </div>

            {word.usage && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                <p className="text-xs font-semibold text-amber-700 mb-1">Tips Penggunaan</p>
                <p className="text-sm text-amber-900">{word.usage}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {word.synonyms.length > 0 && (
                <div className="bg-green-50 rounded-xl p-2">
                  <p className="text-xs font-semibold text-green-700 mb-1">Sinonim</p>
                  <p className="text-xs text-green-800">{word.synonyms.join(', ')}</p>
                </div>
              )}
              {word.antonyms.length > 0 && (
                <div className="bg-red-50 rounded-xl p-2">
                  <p className="text-xs font-semibold text-red-700 mb-1">Antonim</p>
                  <p className="text-xs text-red-800">{word.antonyms.join(', ')}</p>
                </div>
              )}
            </div>

            {word.collocations.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Kolokasi Umum</p>
                <div className="flex flex-wrap gap-1">
                  {word.collocations.map((c, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      {showBack && (
        <div className="flex gap-3 w-full max-w-xl">
          <button
            onClick={() => { setShowBack(false); onLearn() }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors border border-red-200"
          >
            <XCircle size={18} /> Perlu Belajar Lagi
          </button>
          <button
            onClick={() => { setShowBack(false); onKnow() }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors border border-green-200"
          >
            <CheckCircle size={18} /> Sudah Tahu!
          </button>
        </div>
      )}
    </div>
  )
}

// ── Word detail card (browse mode) ──────────────────────────────────────────
function WordCard({ word, starred, onToggleStar }) {
  const [expanded, setExpanded] = useState(false)
  const cc = categoryColorMap[word.category] || categoryColorMap.academic
  const lc = levelColorMap[word.level] || levelColorMap.B2

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
      onClick={() => setExpanded(e => !e)}
    >
      <div className="flex items-start gap-3 p-4">
        <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${cc.bg}`}>
          <span className={`text-lg font-bold ${cc.text}`}>{word.word[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-900">{word.word}</span>
            <span className="text-gray-400 text-sm font-mono">{word.phonetic}</span>
            <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${lc.bg} ${lc.text}`}>{word.level}</span>
            <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${cc.bg} ${cc.text}`}>{word.category}</span>
          </div>
          <p className="text-sm text-gray-600 mt-0.5 italic">{word.type}</p>
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">{word.definitionId}</p>
        </div>
        <button
          className="flex-shrink-0 p-1"
          onClick={e => { e.stopPropagation(); onToggleStar(word.id) }}
        >
          {starred ? (
            <Star size={18} className="text-amber-400 fill-amber-400" />
          ) : (
            <StarOff size={18} className="text-gray-300 hover:text-amber-400 transition-colors" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-3">
          <div className="bg-indigo-50 rounded-xl p-3">
            <p className="text-xs font-semibold text-indigo-700 mb-1">English Definition</p>
            <p className="text-sm text-gray-800">{word.definition}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Contoh Kalimat</p>
            {word.examples.map((ex, i) => (
              <p key={i} className="text-sm text-gray-700 mb-1">• {ex}</p>
            ))}
          </div>
          {word.usage && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-700 mb-1">Tips Penggunaan</p>
              <p className="text-sm text-amber-900">{word.usage}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {word.synonyms.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-green-700 mb-1">Sinonim</p>
                <p className="text-xs text-gray-600">{word.synonyms.join(', ')}</p>
              </div>
            )}
            {word.antonyms.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-red-700 mb-1">Antonim</p>
                <p className="text-xs text-gray-600">{word.antonyms.join(', ')}</p>
              </div>
            )}
          </div>
          {word.collocations.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Kolokasi</p>
              <div className="flex flex-wrap gap-1">
                {word.collocations.map((c, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Quiz mode ────────────────────────────────────────────────────────────────
function QuizMode({ words, onExit }) {
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // Build 10 MC questions from word pool
    const pool = [...words].sort(() => Math.random() - 0.5).slice(0, Math.min(10, words.length))
    const qs = pool.map(w => {
      const distractors = words
        .filter(x => x.id !== w.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(x => x.definitionId)
      const options = [...distractors, w.definitionId].sort(() => Math.random() - 0.5)
      return { word: w, answer: w.definitionId, options }
    })
    setQuestions(qs)
  }, [words])

  if (questions.length === 0) return <div className="text-center py-16 text-gray-400">Memuat soal...</div>

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <Trophy size={40} className="text-white" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Quiz Selesai!</h2>
          <p className="text-gray-500 mt-1">Skor kamu: <span className="font-bold text-indigo-600">{score}/{questions.length}</span> ({pct}%)</p>
        </div>
        <div className={`text-lg font-semibold px-4 py-2 rounded-xl ${pct >= 80 ? 'bg-green-100 text-green-700' : pct >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
          {pct >= 80 ? 'Luar biasa! Keep it up!' : pct >= 60 ? 'Cukup baik, terus berlatih!' : 'Tetap semangat, ulangi lagi!'}
        </div>
        <div className="flex gap-3">
          <button onClick={onExit} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            Kembali
          </button>
          <button
            onClick={() => { setQIdx(0); setSelected(null); setScore(0); setDone(false) }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <RotateCcw size={16} /> Ulangi Quiz
          </button>
        </div>
      </div>
    )
  }

  const q = questions[qIdx]
  const progress = ((qIdx) / questions.length) * 100

  const handleSelect = (opt) => {
    if (selected !== null) return
    setSelected(opt)
    if (opt === q.answer) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (qIdx + 1 >= questions.length) {
      setDone(true)
    } else {
      setQIdx(i => i + 1)
      setSelected(null)
    }
  }

  return (
    <div className="max-w-xl mx-auto space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Soal {qIdx + 1} / {questions.length}</span>
        <span className="font-semibold text-indigo-600">Skor: {score}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-indigo-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <p className="text-xs text-gray-400 uppercase mb-2">Pilih arti yang benar untuk:</p>
        <h2 className="text-3xl font-bold text-gray-900">{q.word.word}</h2>
        <p className="text-gray-400 font-mono mt-1">{q.word.phonetic} · {q.word.type}</p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = opt === q.answer
          const isSelected = opt === selected
          let cls = 'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 '
          if (selected === null) {
            cls += 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-800'
          } else if (isCorrect) {
            cls += 'bg-green-50 border-green-400 text-green-800'
          } else if (isSelected && !isCorrect) {
            cls += 'bg-red-50 border-red-400 text-red-800'
          } else {
            cls += 'bg-white border-gray-200 text-gray-400 opacity-60'
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)}>
              <span className="font-bold mr-2 text-gray-400">{String.fromCharCode(65 + i)}.</span>
              {opt}
              {selected !== null && isCorrect && <CheckCircle size={16} className="inline ml-2 text-green-600" />}
              {isSelected && !isCorrect && <XCircle size={16} className="inline ml-2 text-red-500" />}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className="space-y-2">
          <div className={`rounded-xl p-3 text-sm ${selected === q.answer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {selected === q.answer ? '✓ Benar!' : `✗ Kurang tepat. Jawaban: "${q.answer}"`}
            <br />
            <span className="text-xs mt-1 block opacity-80">{q.word.usage}</span>
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            {qIdx + 1 >= questions.length ? 'Lihat Hasil' : 'Soal Berikutnya →'}
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function Vocabulary() {
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [mode, setMode] = useState('browse') // 'browse' | 'flashcard' | 'quiz'
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [starred, setStarred] = useState(() => {
    try { return JSON.parse(localStorage.getItem('vocab_starred') || '[]') } catch { return [] }
  })
  const [onlyStarred, setOnlyStarred] = useState(false)

  // Flashcard state
  const [cardIdx, setCardIdx] = useState(0)
  const [showBack, setShowBack] = useState(false)
  const [known, setKnown] = useState([])
  const [fcDone, setFcDone] = useState(false)
  const [shuffled, setShuffled] = useState(false)

  const navigate = useNavigate()

  // Filtered word list
  const filtered = vocabularyWords.filter(w => {
    const catOk = activeCategory === 'all' || w.category === activeCategory
    const starOk = !onlyStarred || starred.includes(w.id)
    const q = search.toLowerCase()
    const searchOk = !q || w.word.toLowerCase().includes(q) || w.definitionId.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q)
    return catOk && starOk && searchOk
  })

  // Flashcard deck
  const [deck, setDeck] = useState([])
  useEffect(() => {
    const d = [...filtered]
    if (shuffled) d.sort(() => Math.random() - 0.5)
    setDeck(d)
    setCardIdx(0)
    setShowBack(false)
    setKnown([])
    setFcDone(false)
  }, [activeCategory, onlyStarred, shuffled, search])

  const toggleStar = useCallback((id) => {
    setStarred(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      localStorage.setItem('vocab_starred', JSON.stringify(next))
      return next
    })
  }, [])

  const handleKnow = () => {
    setKnown(k => [...k, deck[cardIdx].id])
    if (cardIdx + 1 >= deck.length) setFcDone(true)
    else setCardIdx(i => i + 1)
  }

  const handleLearn = () => {
    if (cardIdx + 1 >= deck.length) setFcDone(true)
    else setCardIdx(i => i + 1)
  }

  const resetFlashcard = () => {
    setCardIdx(0)
    setShowBack(false)
    setKnown([])
    setFcDone(false)
  }

  const cc = categoryColorMap[activeCategory] || { solid: 'bg-indigo-600' }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <div className="flex-1 xl:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center gap-3 px-4 py-3">
            <button onClick={() => setMobileSidebar(true)} className="xl:hidden p-2 rounded-xl hover:bg-gray-100">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 flex-1">
              <div className="bg-indigo-600 text-white p-2 rounded-xl">
                <BookOpen size={18} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-gray-900 text-base leading-tight">Vocabulary Builder</h1>
                <p className="text-xs text-gray-400">{vocabularyWords.length} kata · 5 kategori</p>
              </div>
            </div>

            {/* Mode switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              {[
                { id: 'browse', icon: List, label: 'Browse' },
                { id: 'flashcard', icon: Layers, label: 'Flashcard' },
                { id: 'quiz', icon: Target, label: 'Quiz' },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setMode(id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    mode === id ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 max-w-4xl mx-auto w-full">

          {/* Category filter + search */}
          <div className="mb-5 space-y-3">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map(cat => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>

            {mode === 'browse' && (
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari kata..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                </div>
                <button
                  onClick={() => setOnlyStarred(v => !v)}
                  className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    onlyStarred ? 'bg-amber-50 border-amber-300 text-amber-700' : 'bg-white border-gray-200 text-gray-500 hover:border-amber-300'
                  }`}
                >
                  <Star size={15} className={onlyStarred ? 'fill-amber-400 text-amber-400' : ''} />
                  <span className="hidden sm:inline">Bintang</span>
                </button>
              </div>
            )}
          </div>

          {/* ─── BROWSE MODE ─────────────────────────────────────────────────── */}
          {mode === 'browse' && (
            <div className="space-y-2">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">Tidak ada kata yang ditemukan.</div>
              ) : (
                <>
                  <p className="text-xs text-gray-400 mb-3">{filtered.length} kata ditemukan</p>
                  {filtered.map(w => (
                    <WordCard key={w.id} word={w} starred={starred.includes(w.id)} onToggleStar={toggleStar} />
                  ))}
                </>
              )}
            </div>
          )}

          {/* ─── FLASHCARD MODE ──────────────────────────────────────────────── */}
          {mode === 'flashcard' && (
            <div>
              {deck.length === 0 ? (
                <div className="text-center py-16 text-gray-400">Tidak ada kata yang tersedia.</div>
              ) : fcDone ? (
                <div className="flex flex-col items-center gap-6 py-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
                    <GraduationCap size={36} className="text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Flashcard Selesai!</h2>
                    <p className="text-gray-500 mt-1">
                      <span className="text-green-600 font-bold">{known.length}</span> sudah tahu ·{' '}
                      <span className="text-red-500 font-bold">{deck.length - known.length}</span> perlu diulang
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={resetFlashcard}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                      <RotateCcw size={16} /> Ulangi
                    </button>
                    <button
                      onClick={() => setMode('quiz')}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                      <Target size={16} /> Mulai Quiz
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Progress bar */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{cardIdx + 1} / {deck.length}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShuffled(s => !s)}
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg border transition-all ${shuffled ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-gray-200 text-gray-500'}`}
                      >
                        <Shuffle size={12} /> Acak
                      </button>
                      <span className="text-green-600 font-semibold">{known.length} ✓</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                    <div
                      className="bg-indigo-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(cardIdx / deck.length) * 100}%` }}
                    />
                  </div>

                  <Flashcard
                    word={deck[cardIdx]}
                    showBack={showBack}
                    setShowBack={setShowBack}
                    onKnow={handleKnow}
                    onLearn={handleLearn}
                  />

                  {/* Nav buttons */}
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => { setCardIdx(i => Math.max(0, i - 1)); setShowBack(false) }}
                      disabled={cardIdx === 0}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 text-sm"
                    >
                      <ChevronLeft size={16} /> Sebelumnya
                    </button>
                    <button
                      onClick={() => { setShowBack(false); handleLearn() }}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm"
                    >
                      Lewati <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ─── QUIZ MODE ───────────────────────────────────────────────────── */}
          {mode === 'quiz' && (
            filtered.length < 4 ? (
              <div className="text-center py-16 text-gray-400">
                Butuh minimal 4 kata untuk mulai quiz. Ubah filter kategori.
              </div>
            ) : (
              <QuizMode words={filtered} onExit={() => setMode('browse')} />
            )
          )}

        </main>
      </div>
    </div>
  )
}
