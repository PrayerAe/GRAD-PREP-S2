import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import QuestionCard from '../components/QuestionCard'
import Timer from '../components/Timer'
import ScoreCard, { getGrade } from '../components/ScoreCard'
import { mathQuestions } from '../data/mathQuestions'
import { englishQuestions } from '../data/englishQuestions'
import {
  Menu, Target, Clock, CheckCircle, XCircle,
  BarChart2, RotateCcw, BookOpen, BookMarked, AlertCircle, Award, Sparkles
} from 'lucide-react'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts'

const allQuestions = [
  ...mathQuestions.map(q => ({ ...q, subject: 'Matematika' })),
  ...englishQuestions.map(q => ({ ...q, subject: 'English', id: q.id + 100 })),
]

const TRYOUT_SECONDS = 90 * 60

export default function Tryout() {
  const navigate = useNavigate()
  const { saveTryoutResult } = useAuth()
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [phase, setPhase] = useState('intro')
  const [answers, setAnswers] = useState({})
  const [current, setCurrent] = useState(0)
  const [timeUp, setTimeUp] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleTimeUp = useCallback(() => {
    setTimeUp(true)
    setPhase('result')
  }, [])

  const handleSubmit = () => {
    const unanswered = allQuestions.length - Object.keys(answers).length
    if (unanswered > 0) {
      if (!window.confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin submit tryout?`)) return
    }
    setPhase('result')
  }

  const mathQs = allQuestions.filter(q => q.subject === 'Matematika')
  const engQs = allQuestions.filter(q => q.subject === 'English')

  const mathScore = mathQs.filter(q => {
    const i = allQuestions.indexOf(q)
    return answers[i] === q.correctAnswer
  }).length
  const engScore = engQs.filter(q => {
    const i = allQuestions.indexOf(q)
    return answers[i] === q.correctAnswer
  }).length
  const totalScore = mathScore + engScore
  const totalPercent = Math.round((totalScore / allQuestions.length) * 100)
  const mathPercent = Math.round((mathScore / mathQs.length) * 100)
  const engPercent = Math.round((engScore / engQs.length) * 100)
  const scaledScore = Math.round((totalScore / allQuestions.length) * 800)

  // Save result
  useEffect(() => {
    if (phase === 'result' && !saved) {
      saveTryoutResult(scaledScore, mathScore, mathQs.length, engScore, engQs.length)
      setSaved(true)
    }
  }, [phase, saved])

  const getRecommendation = () => {
    const recs = []
    if (mathPercent < 70) recs.push({ icon: BookOpen, subject: 'Matematika', msg: `Perlu latihan lebih pada topik yang lemah. Ulangi bab Aljabar dan Kalkulus.`, color: 'text-blue-800 bg-blue-50' })
    if (engPercent < 70) recs.push({ icon: BookMarked, subject: 'Bahasa Inggris', msg: `Tingkatkan kemampuan grammar dan vocabulary. Fokus pada Structure & Written Expression.`, color: 'text-green-800 bg-green-50' })
    if (recs.length === 0) recs.push({ icon: CheckCircle, subject: 'Semua Topik', msg: 'Performa sangat baik! Pertahankan dan tingkatkan terus.', color: 'text-purple-800 bg-purple-50' })
    return recs
  }

  const radarData = [
    { subject: 'Aljabar', score: mathPercent > 0 ? Math.min(100, mathPercent + 10) : 0 },
    { subject: 'Logika', score: mathPercent > 0 ? Math.max(0, mathPercent - 5) : 0 },
    { subject: 'Statistika', score: mathPercent },
    { subject: 'Kalkulus', score: mathPercent > 0 ? Math.max(0, mathPercent - 10) : 0 },
    { subject: 'Grammar', score: engPercent > 0 ? Math.min(100, engPercent + 5) : 0 },
    { subject: 'Reading', score: engPercent },
    { subject: 'Vocabulary', score: engPercent > 0 ? Math.max(0, engPercent - 8) : 0 },
    { subject: 'Structure', score: engPercent > 0 ? Math.max(0, engPercent - 12) : 0 },
  ]

  const barData = [
    { name: 'Matematika', score: mathScore, total: mathQs.length, pct: mathPercent },
    { name: 'English', score: engScore, total: engQs.length, pct: engPercent },
  ]

  // Intro page
  if (phase === 'intro') {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
        <main className="flex-1 lg:ml-64">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
            <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
              <Menu size={22} />
            </button>
            <h1 className="font-heading font-bold text-xl text-gray-900">Simulasi Tryout CBT</h1>
          </header>

          <div className="px-4 sm:px-8 py-8 max-w-2xl mx-auto">
            <div className="card border border-gray-100 text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl shadow-amber-500/20">
                <Target size={40} className="text-white" />
              </div>
              <h2 className="font-heading font-bold text-3xl text-gray-900 mb-2">Tryout Simulasi S2</h2>
              <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                Simulasikan kondisi ujian nyata dengan {allQuestions.length} soal dan waktu 90 menit. Analisis hasil lengkap tersedia setelah selesai.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[
                { val: allQuestions.length, label: 'Total Soal', color: 'text-blue-800' },
                { val: '90', label: 'Menit Waktu', color: 'text-blue-800' },
                { val: '800', label: 'Skor Maksimal', color: 'text-blue-800' },
              ].map(({ val, label, color }) => (
                <div key={label} className="card border border-gray-100 text-center py-4">
                  <div className={`text-2xl font-bold ${color}`}>{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="card border border-gray-100 mb-8 space-y-3">
              <h3 className="font-semibold text-gray-900 mb-4">Informasi Tryout</h3>
              {[
                ['📊', `${mathQs.length} soal Matematika (Aljabar, Logika, Statistika, Kalkulus)`],
                ['📚', `${engQs.length} soal Bahasa Inggris (Grammar, Reading, Vocabulary, Structure)`],
                ['⏱️', 'Timer berjalan otomatis, soal disubmit saat waktu habis'],
                ['📈', 'Analisis skor dan rekomendasi belajar tersedia di akhir'],
                ['💾', 'Hasil tryout tersimpan otomatis di profil kamu'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-lg flex-shrink-0">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Setelah tryout dimulai, timer tidak dapat dijeda. Pastikan kamu sudah siap sebelum memulai.
              </p>
            </div>

            <button onClick={() => setPhase('exam')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-2xl text-base font-bold shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Mulai Tryout Sekarang
            </button>
          </div>
        </main>
      </div>
    )
  }

  // Exam phase
  if (phase === 'exam') {
    const currentSubject = allQuestions[current].subject
    const subjectColor = currentSubject === 'Matematika' ? 'text-blue-700 bg-blue-50' : 'text-green-700 bg-green-50'

    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
        <main className="flex-1 lg:ml-64">
          <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-3 flex items-center gap-3 sticky top-0 z-30">
            <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
              <Menu size={20} />
            </button>
            <div className="flex-1">
              <h1 className="font-heading font-bold text-lg text-gray-900">Tryout Simulasi</h1>
              <div className="flex items-center gap-3 mt-0.5">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${subjectColor}`}>{currentSubject}</span>
                <span className="text-xs text-gray-400">{Object.keys(answers).length}/{allQuestions.length} dijawab</span>
              </div>
            </div>
            <Timer initialSeconds={TRYOUT_SECONDS} onTimeUp={handleTimeUp} />
          </header>

          <div className="flex max-w-6xl mx-auto">
            <aside className="hidden lg:block w-56 p-4 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
              <div className="mb-3">
                <p className="text-xs font-semibold text-blue-800 mb-1.5">Matematika (1–{mathQs.length})</p>
                <div className="grid grid-cols-5 gap-1">
                  {allQuestions.slice(0, mathQs.length).map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                      className={`w-9 h-9 rounded-lg text-xs font-semibold transition-colors
                        ${current === i ? 'bg-blue-800 text-white shadow-md' : ''}
                        ${answers[i] !== undefined && current !== i ? 'bg-blue-100 text-blue-800' : ''}
                        ${answers[i] === undefined && current !== i ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : ''}
                      `}>{i + 1}</button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs font-semibold text-green-700 mb-1.5">English ({mathQs.length + 1}–{allQuestions.length})</p>
                <div className="grid grid-cols-5 gap-1">
                  {allQuestions.slice(mathQs.length).map((_, i) => {
                    const idx = i + mathQs.length
                    return (
                      <button key={idx} onClick={() => setCurrent(idx)}
                        className={`w-9 h-9 rounded-lg text-xs font-semibold transition-colors
                          ${current === idx ? 'bg-green-700 text-white shadow-md' : ''}
                          ${answers[idx] !== undefined && current !== idx ? 'bg-green-100 text-green-800' : ''}
                          ${answers[idx] === undefined && current !== idx ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : ''}
                        `}>{idx + 1}</button>
                    )
                  })}
                </div>
              </div>
              <button onClick={handleSubmit} className="mt-4 w-full btn-accent text-sm py-2.5">Submit Tryout</button>
            </aside>

            <div className="flex-1 px-4 sm:px-6 py-6">
              <QuestionCard
                question={allQuestions[current]}
                questionNumber={current + 1}
                totalQuestions={allQuestions.length}
                selectedAnswer={answers[current]}
                onSelectAnswer={(ans) => setAnswers(prev => ({ ...prev, [current]: ans }))}
              />
              <div className="flex items-center justify-between mt-6">
                <button disabled={current === 0} onClick={() => setCurrent(i => i - 1)}
                  className="btn-secondary text-sm disabled:opacity-40 disabled:cursor-not-allowed">← Sebelumnya</button>
                {current === allQuestions.length - 1 ? (
                  <button onClick={handleSubmit} className="btn-accent text-sm">Submit Tryout</button>
                ) : (
                  <button onClick={() => setCurrent(i => i + 1)} className="btn-primary text-sm">Berikutnya →</button>
                )}
              </div>
              <div className="lg:hidden mt-6">
                <button onClick={handleSubmit} className="w-full btn-accent text-sm">
                  Submit Tryout ({Object.keys(answers).length}/{allQuestions.length} dijawab)
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Grade info
  const overallGrade = getGrade(totalPercent)
  const mathGrade = getGrade(mathPercent)
  const engGrade = getGrade(engPercent)

  // Result phase
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />
      <main className="flex-1 lg:ml-64">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
            <Menu size={22} />
          </button>
          <Award size={20} className="text-amber-500" />
          <h1 className="font-heading font-bold text-xl text-gray-900">Hasil Tryout</h1>
        </header>

        <div className="px-4 sm:px-8 py-8 max-w-4xl mx-auto space-y-8">
          {timeUp && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-700 animate-shake">
              <Clock size={20} />
              <span className="font-medium text-sm">Waktu habis! Tryout disubmit otomatis.</span>
            </div>
          )}

          {/* Main score */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white rounded-3xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl" />

            <div className="relative text-center mb-6">
              <p className="text-blue-200 text-sm font-medium mb-1">Skor Tryout</p>
              <div className="text-8xl font-heading font-bold text-amber-400 animate-scale-in">{scaledScore}</div>
              <p className="text-blue-200 text-sm mt-1">dari 800 poin</p>
              <div className="mt-4 inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-6 py-3 border border-white/20">
                <span className="text-3xl">{overallGrade.icon}</span>
                <div className="text-left">
                  <div className="text-2xl font-heading font-bold text-amber-400">Grade {overallGrade.grade}</div>
                  <div className="text-sm text-blue-200">{overallGrade.label} — {totalPercent}% akurasi</div>
                </div>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-6">
              {[
                { icon: BookOpen, label: 'Matematika', score: mathScore, total: mathQs.length, pct: mathPercent, grade: mathGrade },
                { icon: BookMarked, label: 'Bahasa Inggris', score: engScore, total: engQs.length, pct: engPercent, grade: engGrade },
              ].map(({ icon: Icon, label, score: s, total: t, pct, grade: g }) => (
                <div key={label} className="text-center p-4 bg-white/8 rounded-xl border border-white/10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={16} className="text-blue-200" />
                    <span className="text-blue-200 text-sm">{label}</span>
                  </div>
                  <div className="text-3xl font-bold">{s}<span className="text-blue-300 text-lg">/{t}</span></div>
                  <div className="text-sm text-blue-300 mt-0.5">Nilai: {pct}</div>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold bg-white/15 text-amber-300">
                    Grade {g.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Score Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <ScoreCard score={totalScore} total={allQuestions.length} title="Total Keseluruhan" />
            <ScoreCard score={mathScore} total={mathQs.length} title="Matematika" />
            <ScoreCard score={engScore} total={engQs.length} title="Bahasa Inggris" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { val: totalScore, label: 'Benar', color: 'text-green-600' },
              { val: Object.keys(answers).length - totalScore, label: 'Salah', color: 'text-red-500' },
              { val: allQuestions.length - Object.keys(answers).length, label: 'Kosong', color: 'text-gray-400' },
              { val: `${totalPercent}%`, label: 'Akurasi', color: 'text-blue-700' },
            ].map(({ val, label, color }) => (
              <div key={label} className="card border border-gray-100 text-center py-3">
                <div className={`text-2xl font-bold ${color}`}>{val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <BarChart2 size={18} className="text-blue-800" />
                Analisis per Topik
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                    <Radar name="Skor" dataKey="score" stroke="#1E3A8A" fill="#1E3A8A" fillOpacity={0.3} />
                    <Tooltip formatter={(v) => `${v}%`} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Perbandingan Skor</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, Math.max(mathQs.length, engQs.length)]} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(v, n) => [`${v} soal benar`, n]} />
                    <Bar dataKey="score" name="Benar" radius={[8, 8, 0, 0]}>
                      <Cell fill="#1E3A8A" />
                      <Cell fill="#16a34a" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="card border border-gray-100">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Rekomendasi Belajar</h3>
            <div className="space-y-3">
              {getRecommendation().map(({ icon: Icon, subject, msg, color }) => (
                <div key={subject} className={`flex items-start gap-3 p-4 rounded-xl ${color}`}>
                  <Icon size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-0.5">{subject}</p>
                    <p className="text-sm leading-relaxed opacity-90">{msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setShowReview(!showReview)} className="btn-primary flex-1 text-sm">
              {showReview ? 'Sembunyikan' : 'Lihat'} Pembahasan
            </button>
            <button onClick={() => { setAnswers({}); setCurrent(0); setPhase('intro'); setTimeUp(false); setShowReview(false); setSaved(false) }}
              className="btn-secondary flex items-center gap-2 text-sm">
              <RotateCcw size={15} /> Tryout Ulang
            </button>
            <button onClick={() => navigate('/dashboard')} className="btn-secondary text-sm">Dashboard</button>
          </div>

          {/* Review */}
          {showReview && (
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-gray-900">Pembahasan Lengkap</h3>
              {allQuestions.map((q, i) => (
                <div key={q.id}>
                  <div className="flex items-center gap-2 mb-2">
                    {answers[i] === q.correctAnswer
                      ? <CheckCircle size={16} className="text-green-500" />
                      : <XCircle size={16} className="text-red-400" />}
                    <span className="text-xs font-medium text-gray-500">Soal {i + 1} · {q.subject} · {q.topic}</span>
                  </div>
                  <QuestionCard question={q} questionNumber={i + 1} totalQuestions={allQuestions.length} selectedAnswer={answers[i] ?? -1} showResult={true} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
