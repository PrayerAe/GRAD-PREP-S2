import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import { getGrade } from '../components/ScoreCard'
import {
  Menu, User, Mail, Target, Calendar, Save,
  BookOpen, ClipboardList, Trophy, BarChart3,
  FileText, History, Award, ChevronDown, ChevronUp,
} from 'lucide-react'

function formatDate(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function GradeBadge({ percent }) {
  const { grade, label, color, bg, icon } = getGrade(percent)
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${bg} ${color}`}>
      <span>{icon}</span> {grade} &middot; {label}
    </span>
  )
}

function StatCard({ icon: Icon, iconColor, label, value, sub }) {
  return (
    <div className="card flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xl sm:text-2xl font-heading font-bold text-gray-900">{value}</p>
        <p className="text-[10px] sm:text-xs text-gray-500 truncate">{label}</p>
        {sub && <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}

function EmptyState({ icon: Icon, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
      <Icon size={40} strokeWidth={1.5} className="mb-3" />
      <p className="text-sm">{message}</p>
    </div>
  )
}

export default function Profile() {
  const { user, updateProfile } = useAuth()
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [editName, setEditName] = useState(user?.name || '')
  const [editTarget, setEditTarget] = useState(user?.target || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showAllLatihan, setShowAllLatihan] = useState(false)
  const [showAllTryout, setShowAllTryout] = useState(false)

  if (!user) return null

  const progress = user.progress || {}
  const latihanHistory = progress.latihanHistory || []
  const tryoutHistory = progress.tryoutHistory || []
  const chapterQuizScores = progress.chapterQuizScores || {}

  // Stats
  const totalLatihan = latihanHistory.length
  const totalTryout = tryoutHistory.length
  const highestTryout = tryoutHistory.length > 0
    ? Math.max(...tryoutHistory.map(t => t.scaledScore || 0))
    : 0
  const avgLatihan = latihanHistory.length > 0
    ? Math.round(latihanHistory.reduce((sum, l) => sum + (l.percent || 0), 0) / latihanHistory.length)
    : 0

  const handleSave = () => {
    setSaving(true)
    updateProfile({
      name: editName.trim() || user.name,
      target: editTarget.trim() || user.target,
      avatar: (editName.trim() || user.name).charAt(0).toUpperCase(),
    })
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }, 400)
  }

  const visibleLatihan = showAllLatihan ? latihanHistory : latihanHistory.slice(0, 5)
  const visibleTryout = showAllTryout ? tryoutHistory : tryoutHistory.slice(0, 5)
  const quizEntries = Object.entries(chapterQuizScores)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 xl:ml-64">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 sm:px-8 py-4 flex items-center gap-4 sticky top-0 z-30">
          <button
            className="xl:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileSidebar(true)}
          >
            <Menu size={22} />
          </button>
          <div>
            <h1 className="font-heading font-bold text-xl text-gray-900">Profil & Riwayat</h1>
            <p className="text-sm text-gray-500">Lihat profil dan histori belajarmu</p>
          </div>
        </header>

        <div className="px-4 sm:px-8 py-8 space-y-8">

          {/* Profile Card */}
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white text-3xl font-heading font-bold shadow-lg flex-shrink-0">
                {user.avatar || user.name?.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-heading font-bold text-2xl text-gray-900">{user.name}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
                    <Mail size={14} /> {user.email}
                  </span>
                  <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
                    <Target size={14} className="text-amber-500" /> {user.target}
                  </span>
                  <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
                    <Calendar size={14} /> Member sejak {formatDate(user.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Profile */}
          <div className="card">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <User size={18} className="text-blue-800" />
              Edit Profil
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="Nama kamu"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Target</label>
                <input
                  type="text"
                  value={editTarget}
                  onChange={(e) => setEditTarget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="Target kamu"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button onClick={handleSave} disabled={saving} className="btn-primary inline-flex items-center gap-2 text-sm">
                <Save size={16} />
                {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
              {saved && (
                <span className="text-sm text-green-600 font-medium animate-pulse">
                  Berhasil disimpan!
                </span>
              )}
            </div>
          </div>

          {/* Stats Overview */}
          <div>
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-800" />
              Statistik Belajar
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={BookOpen}
                iconColor="bg-blue-600"
                label="Total Latihan Done"
                value={totalLatihan}
              />
              <StatCard
                icon={ClipboardList}
                iconColor="bg-amber-500"
                label="Total Tryout Done"
                value={totalTryout}
              />
              <StatCard
                icon={Trophy}
                iconColor="bg-green-600"
                label="Skor Tertinggi Tryout"
                value={highestTryout}
                sub="dari 800"
              />
              <StatCard
                icon={Award}
                iconColor="bg-purple-600"
                label="Rata-rata Skor Latihan"
                value={`${avgLatihan}%`}
              />
            </div>
          </div>

          {/* Latihan History */}
          <div className="card">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <History size={18} className="text-blue-800" />
              Riwayat Latihan
            </h3>

            {latihanHistory.length === 0 ? (
              <EmptyState icon={BookOpen} message="Belum ada riwayat latihan. Yuk mulai latihan!" />
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Tanggal</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Mata Pelajaran</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Skor</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleLatihan.map((entry, i) => {
                        const percent = entry.percent || (entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0)
                        return (
                          <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-4 text-gray-600">{formatDate(entry.date)}</td>
                            <td className="py-3 px-4">
                              <span className="font-medium text-gray-900 capitalize">{entry.subject}</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="font-semibold text-gray-900">{entry.score}/{entry.total}</span>
                              <span className="text-gray-400 ml-1">({percent}%)</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <GradeBadge percent={percent} />
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="sm:hidden space-y-3">
                  {visibleLatihan.map((entry, i) => {
                    const percent = entry.percent || (entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0)
                    return (
                      <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">{formatDate(entry.date)}</span>
                          <GradeBadge percent={percent} />
                        </div>
                        <p className="font-semibold text-gray-900 capitalize">{entry.subject}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Skor: <span className="font-semibold">{entry.score}/{entry.total}</span> ({percent}%)
                        </p>
                      </div>
                    )
                  })}
                </div>

                {latihanHistory.length > 5 && (
                  <button
                    onClick={() => setShowAllLatihan(!showAllLatihan)}
                    className="mt-4 btn-secondary text-sm inline-flex items-center gap-1.5 mx-auto"
                  >
                    {showAllLatihan ? (
                      <><ChevronUp size={14} /> Tampilkan Lebih Sedikit</>
                    ) : (
                      <><ChevronDown size={14} /> Tampilkan Semua ({latihanHistory.length})</>
                    )}
                  </button>
                )}
              </>
            )}
          </div>

          {/* Tryout History */}
          <div className="card">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Target size={18} className="text-amber-600" />
              Riwayat Tryout
            </h3>

            {tryoutHistory.length === 0 ? (
              <EmptyState icon={ClipboardList} message="Belum ada riwayat tryout. Coba ikuti tryout pertamamu!" />
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Tanggal</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Skor Total</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Matematika</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">English</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleTryout.map((entry, i) => {
                        const overallPercent = entry.mathTotal && entry.engTotal
                          ? Math.round(((entry.mathScore + entry.engScore) / (entry.mathTotal + entry.engTotal)) * 100)
                          : Math.round((entry.scaledScore / 800) * 100)
                        return (
                          <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-4 text-gray-600">{formatDate(entry.date)}</td>
                            <td className="py-3 px-4 text-center">
                              <span className="font-bold text-lg text-blue-800">{entry.scaledScore}</span>
                              <span className="text-gray-400 text-xs"> /800</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="font-semibold text-gray-900">{entry.mathScore}/{entry.mathTotal}</span>
                              <span className="text-gray-400 ml-1 text-xs">({entry.mathPercent}%)</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="font-semibold text-gray-900">{entry.engScore}/{entry.engTotal}</span>
                              <span className="text-gray-400 ml-1 text-xs">({entry.engPercent}%)</span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <GradeBadge percent={overallPercent} />
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="sm:hidden space-y-3">
                  {visibleTryout.map((entry, i) => {
                    const overallPercent = entry.mathTotal && entry.engTotal
                      ? Math.round(((entry.mathScore + entry.engScore) / (entry.mathTotal + entry.engTotal)) * 100)
                      : Math.round((entry.scaledScore / 800) * 100)
                    return (
                      <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">{formatDate(entry.date)}</span>
                          <GradeBadge percent={overallPercent} />
                        </div>
                        <p className="font-bold text-xl text-blue-800">{entry.scaledScore} <span className="text-sm text-gray-400 font-normal">/800</span></p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-600">
                          <span>Math: <span className="font-semibold">{entry.mathScore}/{entry.mathTotal}</span></span>
                          <span>Eng: <span className="font-semibold">{entry.engScore}/{entry.engTotal}</span></span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {tryoutHistory.length > 5 && (
                  <button
                    onClick={() => setShowAllTryout(!showAllTryout)}
                    className="mt-4 btn-secondary text-sm inline-flex items-center gap-1.5 mx-auto"
                  >
                    {showAllTryout ? (
                      <><ChevronUp size={14} /> Tampilkan Lebih Sedikit</>
                    ) : (
                      <><ChevronDown size={14} /> Tampilkan Semua ({tryoutHistory.length})</>
                    )}
                  </button>
                )}
              </>
            )}
          </div>

          {/* Chapter Quiz Scores */}
          <div className="card">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <FileText size={18} className="text-green-700" />
              Skor Kuis Bab
            </h3>

            {quizEntries.length === 0 ? (
              <EmptyState icon={FileText} message="Belum ada skor kuis bab. Selesaikan materi dan coba kuisnya!" />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quizEntries.map(([quizId, data]) => {
                  const percent = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0
                  const { grade, color, bg } = getGrade(percent)
                  return (
                    <div key={quizId} className={`rounded-xl border p-4 ${bg}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm capitalize">
                          {quizId.replace(/-/g, ' ').replace(/_/g, ' ')}
                        </h4>
                        <span className={`text-lg font-heading font-bold ${color}`}>{grade}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Skor: <span className="font-semibold">{data.score}/{data.total}</span> ({percent}%)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{formatDate(data.date)}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}
