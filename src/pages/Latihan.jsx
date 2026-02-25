import { useState, useCallback, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import QuestionCard from '../components/QuestionCard'
import Timer from '../components/Timer'
import ScoreCard, { getGrade } from '../components/ScoreCard'
import { mathQuestions } from '../data/mathQuestions'
import { englishQuestions } from '../data/englishQuestions'
import { tpaQuestions } from '../data/tpaQuestions'
import { toeflQuestions } from '../data/toeflQuestions'
import { Menu, CheckCircle, XCircle, BarChart2, RotateCcw, ArrowLeft, Award } from 'lucide-react'

const TIMER_SECONDS = 30 * 60

const subjectConfig = {
  matematika: { questions: mathQuestions, label: 'Matematika', icon: '📐' },
  english: { questions: englishQuestions, label: 'Bahasa Inggris', icon: '📚' },
  tpa: { questions: tpaQuestions, label: 'TPA', icon: '🧠' },
  toefl: { questions: toeflQuestions, label: 'TOEFL', icon: '🌐' },
}

export default function Latihan() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const { saveLatihanResult } = useAuth()
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [timeUp, setTimeUp] = useState(false)
  const [bookmarks, setBookmarks] = useState(new Set())
  const [saved, setSaved] = useState(false)

  const config = subjectConfig[subject] || subjectConfig.matematika
  const questions = config.questions
  const label = config.label

  const handleTimeUp = useCallback(() => {
    setTimeUp(true)
    setSubmitted(true)
  }, [])

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      const unanswered = questions.length - Object.keys(answers).length
      if (!window.confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin submit?`)) return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setCurrent(0)
    setSubmitted(false)
    setTimeUp(false)
    setShowReview(false)
    setBookmarks(new Set())
    setSaved(false)
  }

  const score = questions.filter((q, i) => answers[i] === q.correctAnswer).length
  const percent = Math.round((score / questions.length) * 100)

  const toggleBookmark = (i) => {
    setBookmarks(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const topicBreakdown = [...new Set(questions.map(q => q.topic))].map(topic => {
    const topicQs = questions.filter(q => q.topic === topic)
    const topicScore = topicQs.filter(q => {
      const idx = questions.indexOf(q)
      return answers[idx] === q.correctAnswer
    }).length
    const pct = Math.round((topicScore / topicQs.length) * 100)
    const gradeInfo = getGrade(pct)
    return { topic, topicQs, topicScore, pct, gradeInfo }
  })

  const nilaiAkhir = Math.round((score / questions.length) * 100)
  const gradeInfo = getGrade(nilaiAkhir)

  // Save result on submit
  useEffect(() => {
    if (submitted && !saved) {
      const breakdown = topicBreakdown.map(t => ({ topic: t.topic, score: t.topicScore, total: t.topicQs.length }))
      saveLatihanResult(subject, score, questions.length, breakdown)
      setSaved(true)
    }
  }, [submitted, saved])

  // Results page
  if (submitted) {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
        <main className="flex-1 lg:ml-64">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
            <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
              <Menu size={22} />
            </button>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-amber-500" />
              <h1 className="font-heading font-bold text-xl text-gray-900">Hasil Latihan – {label}</h1>
            </div>
          </header>

          <div className="px-4 sm:px-8 py-8 max-w-3xl mx-auto">
            {timeUp && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 animate-shake">
                <XCircle size={20} />
                <span className="font-medium text-sm">Waktu habis! Soal disubmit otomatis.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <ScoreCard score={score} total={questions.length} title={`Skor ${label}`} />
              <div className={`rounded-2xl border-2 p-6 text-center ${gradeInfo.bg}`}>
                <p className="text-sm font-medium text-gray-500 mb-3">Nilai Akhir</p>
                <div className={`text-7xl font-heading font-bold ${gradeInfo.color}`}>{nilaiAkhir}</div>
                <p className="text-sm text-gray-500 mt-1">dari 100</p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-2xl">{gradeInfo.icon}</span>
                  <span className={`text-xl font-heading font-bold ${gradeInfo.color}`}>Grade {gradeInfo.grade}</span>
                </div>
                <p className={`text-sm font-semibold ${gradeInfo.color} mt-1`}>{gradeInfo.label}</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-8">
              {[
                { val: score, label: 'Benar', color: 'text-green-600' },
                { val: Object.keys(answers).length - score, label: 'Salah', color: 'text-red-500' },
                { val: questions.length - Object.keys(answers).length, label: 'Kosong', color: 'text-gray-400' },
                { val: `${percent}%`, label: 'Akurasi', color: 'text-blue-700' },
              ].map(({ val, label: l, color }) => (
                <div key={l} className="card border border-gray-100 text-center py-3">
                  <div className={`text-2xl font-bold ${color}`}>{val}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            <div className="card border border-gray-100 mb-6">
              <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-blue-800" />
                Nilai per Topik
              </h3>
              <div className="space-y-4">
                {topicBreakdown.map(({ topic, topicScore, topicQs, pct, gradeInfo: tg }) => (
                  <div key={topic} className={`p-3 rounded-xl border ${tg.bg}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{tg.icon}</span>
                        <span className="font-medium text-gray-800 text-sm">{topic}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{topicScore}/{topicQs.length}</span>
                        <span className={`text-sm font-bold ${tg.color}`}>{pct} / 100</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tg.color} bg-white/60`}>{tg.grade}</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/60 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all duration-500 ${pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-amber-400' : 'bg-red-400'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => setShowReview(!showReview)} className="btn-primary flex-1">
                {showReview ? 'Sembunyikan' : 'Review'} Pembahasan
              </button>
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2">
                <RotateCcw size={16} /> Ulangi
              </button>
              <button onClick={() => navigate('/dashboard')} className="btn-secondary">Dashboard</button>
            </div>

            {showReview && (
              <div className="mt-8 space-y-6">
                <h3 className="font-heading font-bold text-xl text-gray-900">Pembahasan Soal</h3>
                {questions.map((q, i) => (
                  <div key={q.id}>
                    <div className="flex items-center gap-2 mb-2">
                      {answers[i] === q.correctAnswer
                        ? <CheckCircle size={18} className="text-green-500" />
                        : <XCircle size={18} className="text-red-400" />}
                      <span className="text-sm font-medium text-gray-500">Soal {i + 1}</span>
                    </div>
                    <QuestionCard question={q} questionNumber={i + 1} totalQuestions={questions.length} selectedAnswer={answers[i] ?? -1} showResult={true} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
      <main className="flex-1 lg:ml-64">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
            <Menu size={22} />
          </button>
          <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <div className="flex-1">
            <h1 className="font-heading font-bold text-lg text-gray-900">Latihan – {label}</h1>
            <p className="text-xs text-gray-500">{questions.length} soal · 30 menit</p>
          </div>
          <Timer initialSeconds={TIMER_SECONDS} onTimeUp={handleTimeUp} />
        </header>

        {/* Subject selector tabs */}
        <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-2">
          <div className="flex gap-2 overflow-x-auto max-w-6xl mx-auto">
            {Object.entries(subjectConfig).map(([key, cfg]) => (
              <button
                key={key}
                onClick={() => { if (key !== subject) { handleReset(); navigate(`/latihan/${key}`) } }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  key === subject ? 'bg-blue-800 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{cfg.icon}</span>
                {cfg.label}
                <span className="text-[10px] opacity-70">({cfg.questions.length})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-0 max-w-6xl mx-auto">
          <aside className="hidden lg:block w-52 p-4 sticky top-[121px] h-[calc(100vh-121px)] overflow-y-auto">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Navigasi Soal</p>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-200
                    ${current === i ? 'bg-blue-800 text-white ring-2 ring-blue-300 shadow-md' : ''}
                    ${answers[i] !== undefined && current !== i ? 'bg-green-100 text-green-800 border border-green-200' : ''}
                    ${bookmarks.has(i) ? 'ring-2 ring-amber-400' : ''}
                    ${answers[i] === undefined && current !== i ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : ''}
                  `}>{i + 1}</button>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-gray-500">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-blue-800 inline-block" />Aktif</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-green-100 border border-green-300 inline-block" />Dijawab</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-gray-100 border inline-block" />Belum</div>
            </div>
            <button onClick={handleSubmit} className="mt-6 w-full btn-accent text-sm">Submit</button>
          </aside>

          <div className="flex-1 px-4 sm:px-6 py-6">
            <QuestionCard
              question={questions[current]}
              questionNumber={current + 1}
              totalQuestions={questions.length}
              selectedAnswer={answers[current]}
              onSelectAnswer={(ans) => setAnswers(prev => ({ ...prev, [current]: ans }))}
            />

            <div className="flex items-center justify-between mt-6">
              <button disabled={current === 0} onClick={() => setCurrent(i => i - 1)}
                className="btn-secondary text-sm disabled:opacity-40 disabled:cursor-not-allowed">← Sebelumnya</button>

              <div className="flex items-center gap-2">
                <button onClick={() => toggleBookmark(current)}
                  className={`p-2.5 rounded-xl border-2 text-sm transition-colors ${bookmarks.has(current) ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:border-amber-300'}`}>
                  {bookmarks.has(current) ? '🔖' : '☆'}
                </button>
                <span className="text-sm text-gray-500 font-medium">{Object.keys(answers).length}/{questions.length}</span>
              </div>

              {current === questions.length - 1 ? (
                <button onClick={handleSubmit} className="btn-accent text-sm">Submit Jawaban</button>
              ) : (
                <button onClick={() => setCurrent(i => i + 1)} className="btn-primary text-sm">Berikutnya →</button>
              )}
            </div>

            <div className="lg:hidden mt-6 card border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Navigasi Soal</p>
              <div className="flex flex-wrap gap-2">
                {questions.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`w-9 h-9 rounded-lg text-xs font-semibold transition-colors
                      ${current === i ? 'bg-blue-800 text-white' : ''}
                      ${answers[i] !== undefined && current !== i ? 'bg-green-100 text-green-800' : ''}
                      ${answers[i] === undefined && current !== i ? 'bg-gray-100 text-gray-600' : ''}
                    `}>{i + 1}</button>
                ))}
              </div>
              <button onClick={handleSubmit} className="mt-4 w-full btn-accent text-sm">Submit Jawaban</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
