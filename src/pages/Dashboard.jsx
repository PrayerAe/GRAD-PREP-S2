import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ProgressBar from '../components/ProgressBar'
import { getGrade } from '../components/ScoreCard'
import {
  Menu, BookOpen, BookMarked, Target, TrendingUp, Clock,
  Star, ArrowRight, Award, PenLine, Zap, Calendar, Headphones, Globe, Sparkles, Brain
} from 'lucide-react'
import {
  RadialBarChart, RadialBar, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [mobileSidebar, setMobileSidebar] = useState(false)

  const progress = user?.progress || {}
  const mathProgress = progress.mathProgress || 0
  const englishProgress = progress.englishProgress || 0
  const lastTryoutScore = progress.lastTryoutScore || 0
  const latihanCount = (progress.latihanHistory || []).length
  const tryoutCount = (progress.tryoutHistory || []).length

  const radialData = [
    { name: 'Matematika', value: mathProgress, fill: '#1E3A8A' },
    { name: 'Bahasa Inggris', value: englishProgress, fill: '#F59E0B' },
  ]

  // Build tryout chart from real history
  const tryoutHistory = (progress.tryoutHistory || []).slice(0, 5).reverse().map((entry, i) => ({
    label: `Tryout ${i + 1}`,
    total: entry.scaledScore || 0,
  }))
  // Add placeholder if no history
  if (tryoutHistory.length === 0) {
    tryoutHistory.push({ label: 'Belum ada', total: 0 })
  }

  // Recent activity from real data
  const recentActivity = []
  const latihanHist = progress.latihanHistory || []
  const tryoutHist = progress.tryoutHistory || []

  latihanHist.slice(0, 2).forEach(entry => {
    recentActivity.push({
      icon: PenLine,
      label: `Latihan ${entry.subject === 'matematika' ? 'Matematika' : 'Bahasa Inggris'} — Skor ${entry.percent}%`,
      time: formatTimeAgo(entry.date),
      color: 'text-blue-600 bg-blue-50',
    })
  })
  tryoutHist.slice(0, 2).forEach(entry => {
    recentActivity.push({
      icon: Target,
      label: `Tryout Simulasi — Skor ${entry.scaledScore}/800`,
      time: formatTimeAgo(entry.date),
      color: 'text-amber-600 bg-amber-50',
    })
  })

  if (recentActivity.length === 0) {
    recentActivity.push({
      icon: BookOpen,
      label: 'Mulai belajar dan aktivitasmu akan muncul di sini',
      time: 'Sekarang',
      color: 'text-gray-500 bg-gray-50',
    })
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 xl:ml-64">
        {/* Top bar */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
            <Menu size={22} />
          </button>
          <div className="flex-1">
            <h1 className="font-heading font-bold text-xl text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Pantau kemajuan belajarmu</p>
          </div>
          <button onClick={() => navigate('/profile')} className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-sm font-bold shadow-md hover:shadow-lg transition-shadow">
            {user?.avatar || user?.name?.charAt(0) || 'U'}
          </button>
        </header>

        <div className="px-4 sm:px-8 py-8 space-y-8 max-w-6xl mx-auto">
          {/* Welcome banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium mb-1 flex items-center gap-1.5">
                  Selamat datang kembali <span className="text-lg">👋</span>
                </p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl">{user?.name || 'User'}</h2>
                <p className="text-blue-200 mt-2 flex items-center gap-1.5">
                  <Star size={14} className="text-amber-400" fill="#F59E0B" />
                  {user?.target || 'Lolos S2 2026'}
                </p>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-sm text-blue-200 mb-1">Skor Tryout Terakhir</div>
                <div className="text-5xl font-heading font-bold text-amber-400">{lastTryoutScore}</div>
                <div className="text-xs text-blue-300 mt-1">dari 800</div>
              </div>
            </div>

            {/* Quick stats in banner */}
            <div className="relative grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-white">{latihanCount}</div>
                <div className="text-[10px] sm:text-xs text-blue-300">Latihan Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-white">{tryoutCount}</div>
                <div className="text-[10px] sm:text-xs text-blue-300">Tryout Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-amber-400">{Math.round((mathProgress + englishProgress) / 2)}%</div>
                <div className="text-[10px] sm:text-xs text-blue-300">Rata-rata</div>
              </div>
            </div>
          </div>

          {/* Progress Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="progress-cards">
            {/* Math progress */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Matematika</h3>
                  <p className="text-xs text-gray-500">4 Bab · 16 Sub-bab</p>
                </div>
              </div>
              <ProgressBar value={mathProgress} color="bg-blue-700" />
              <button
                onClick={() => navigate('/materi/matematika')}
                className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-blue-800 font-semibold hover:bg-blue-50 py-2 rounded-xl transition-colors"
              >
                Lanjutkan Belajar <ArrowRight size={14} />
              </button>
            </div>

            {/* English progress */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <BookMarked size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bahasa Inggris</h3>
                  <p className="text-xs text-gray-500">4 Bab · 12 Sub-bab</p>
                </div>
              </div>
              <ProgressBar value={englishProgress} color="bg-green-600" />
              <button
                onClick={() => navigate('/materi/english')}
                className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-green-700 font-semibold hover:bg-green-50 py-2 rounded-xl transition-colors"
              >
                Lanjutkan Belajar <ArrowRight size={14} />
              </button>
            </div>

            {/* TOEFL card */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Headphones size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">TOEFL</h3>
                  <p className="text-xs text-gray-500">4 Section · Reading, Listening, Speaking, Writing</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3 bg-indigo-50 rounded-lg px-3 py-2">iBT Format · Target Score 80+</div>
              <button
                onClick={() => navigate('/materi/toefl')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-sm text-indigo-700 font-semibold hover:bg-indigo-50 py-2 rounded-xl transition-colors"
              >
                Mulai Belajar TOEFL <ArrowRight size={14} />
              </button>
            </div>

            {/* IELTS card */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Globe size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">IELTS</h3>
                  <p className="text-xs text-gray-500">4 Section · Listening, Reading, Writing, Speaking</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3 bg-cyan-50 rounded-lg px-3 py-2">Academic · Target Band 6.5+</div>
              <button
                onClick={() => navigate('/materi/ielts')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-sm text-cyan-700 font-semibold hover:bg-cyan-50 py-2 rounded-xl transition-colors"
              >
                Mulai Belajar IELTS <ArrowRight size={14} />
              </button>
            </div>

            {/* ML & AI card */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Brain size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">ML & AI</h3>
                  <p className="text-xs text-gray-500">5 Bab · Python · ML · Deep Learning · NLP</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3 bg-purple-50 rounded-lg px-3 py-2">CNN · LSTM · Transformers · BERT · GPT</div>
              <button
                onClick={() => navigate('/materi/ml')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-sm text-purple-700 font-semibold hover:bg-purple-50 py-2 rounded-xl transition-colors"
              >
                Mulai Belajar ML & AI <ArrowRight size={14} />
              </button>
            </div>

            {/* Vocabulary card */}
            <div className="card border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vocabulary Builder</h3>
                  <p className="text-xs text-gray-500">50 kata · Flashcard & Quiz</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3 bg-indigo-50 rounded-lg px-3 py-2">Academic · TOEFL · IELTS · Business</div>
              <button
                onClick={() => navigate('/vocabulary')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-sm text-indigo-700 font-semibold hover:bg-indigo-50 py-2 rounded-xl transition-colors"
              >
                Belajar Kosakata <ArrowRight size={14} />
              </button>
            </div>

            {/* Tryout card */}
            <div className="card border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Target size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tryout</h3>
                  <p className="text-xs text-gray-500">80 Soal · 90 Menit</p>
                </div>
              </div>
              <div className="text-center py-3">
                <span className="text-4xl font-heading font-bold text-amber-700">{lastTryoutScore}</span>
                <span className="text-gray-500 text-sm"> / 800</span>
                {lastTryoutScore > 0 && (() => {
                  const tg = getGrade(Math.round(lastTryoutScore / 8))
                  return (
                    <div className="mt-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tg.color} ${tg.bg}`}>
                        Grade {tg.grade}
                      </span>
                    </div>
                  )
                })()}
              </div>
              <button
                onClick={() => navigate('/tryout')}
                className="mt-2 w-full btn-accent text-sm"
              >
                Ikuti Tryout Baru
              </button>
            </div>
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Radial chart */}
            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp size={18} className="text-blue-800" />
                Progress Keseluruhan
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="80%" data={radialData} startAngle={90} endAngle={-270}>
                    <RadialBar dataKey="value" cornerRadius={8} />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right"
                      formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                    />
                    <Tooltip formatter={(v) => `${v}%`} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar chart tryout history */}
            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Target size={18} className="text-amber-600" />
                Riwayat Skor Tryout
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={tryoutHistory} margin={{ top: 5, right: 10, bottom: 5, left: -15 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 800]} tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="total" fill="#1E3A8A" radius={[6, 6, 0, 0]} name="Total Skor" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Quick access + Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Quick Access */}
            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-amber-500" />
                Akses Cepat
              </h3>
              <div className="space-y-3">
                {[
                  { onClick: () => navigate('/materi/matematika'), icon: BookOpen, iconColor: 'text-blue-700', bg: 'bg-blue-50 hover:bg-blue-100', title: 'Lanjutkan Matematika', sub: '4 Bab tersedia' },
                  { onClick: () => navigate('/materi/english'), icon: BookMarked, iconColor: 'text-green-700', bg: 'bg-green-50 hover:bg-green-100', title: 'Lanjutkan Bahasa Inggris', sub: '4 Bab tersedia' },
                  { onClick: () => navigate('/materi/toefl'), icon: Headphones, iconColor: 'text-indigo-700', bg: 'bg-indigo-50 hover:bg-indigo-100', title: 'Belajar TOEFL', sub: 'Reading · Listening · Speaking · Writing' },
                  { onClick: () => navigate('/materi/ielts'), icon: Globe, iconColor: 'text-cyan-700', bg: 'bg-cyan-50 hover:bg-cyan-100', title: 'Belajar IELTS', sub: 'Listening · Reading · Writing · Speaking' },
                  { onClick: () => navigate('/vocabulary'), icon: Sparkles, iconColor: 'text-indigo-700', bg: 'bg-indigo-50 hover:bg-indigo-100', title: 'Vocabulary Builder', sub: '50 kata · Flashcard & Quiz' },
                  { onClick: () => navigate('/materi/ml'), icon: Brain, iconColor: 'text-purple-700', bg: 'bg-purple-50 hover:bg-purple-100', title: 'ML & AI', sub: 'Python · ML · Deep Learning · NLP' },
                  { onClick: () => navigate('/latihan/matematika'), icon: PenLine, iconColor: 'text-purple-700', bg: 'bg-purple-50 hover:bg-purple-100', title: 'Latihan Soal', sub: 'Matematika & English' },
                  { onClick: () => navigate('/tryout'), icon: Target, iconColor: 'text-amber-700', bg: 'bg-amber-50 hover:bg-amber-100', title: 'Ikuti Tryout', sub: '80 soal · 90 menit' },
                ].map(({ onClick, icon: Icon, iconColor, bg, title, sub }) => (
                  <button key={title} onClick={onClick} className={`w-full flex items-center gap-3 p-4 rounded-xl ${bg} transition-colors text-left group`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg.split(' ')[0]} ${iconColor}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{title}</div>
                      <div className="text-xs text-gray-500">{sub}</div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card border border-gray-100">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-gray-500" />
                Aktivitas Terakhir
              </h3>
              <div className="space-y-4">
                {recentActivity.slice(0, 5).map(({ icon: Icon, label, time, color }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">{label}</p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <Calendar size={10} />
                        {time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function formatTimeAgo(dateStr) {
  if (!dateStr) return 'Baru saja'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Baru saja'
  if (mins < 60) return `${mins} menit lalu`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} jam lalu`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days} hari lalu`
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}
