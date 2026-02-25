import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAnalyticsSummary, formatDuration } from '../utils/analytics'
import { isFirebaseConfigured } from '../firebase'
import { listenToUsers, listenToPageVisits } from '../services/firestore'
import {
  Users, Activity, Clock, Monitor, Smartphone, Tablet,
  BarChart2, Globe, Search, LogOut, RefreshCw, Trash2,
  TrendingUp, Target, BookOpen, ChevronDown, ChevronUp,
  Shield, Eye, Calendar, Menu, X, Award, Wifi, WifiOff
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts'

const COLORS = ['#1E3A8A', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

const DEVICE_ICONS = {
  Mobile: Smartphone,
  Tablet: Tablet,
  Desktop: Monitor,
}

function StatCard({ icon: Icon, label, value, sub, color = 'blue', trend }) {
  const colorMap = {
    blue: 'from-blue-500 to-blue-700',
    green: 'from-emerald-500 to-emerald-700',
    amber: 'from-amber-500 to-orange-600',
    purple: 'from-violet-500 to-purple-700',
    rose: 'from-rose-500 to-red-700',
  }
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-lg flex-shrink-0`}>
        <Icon size={22} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500 font-medium truncate">{label}</p>
        <p className="text-2xl font-heading font-bold text-gray-900 leading-tight">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      {trend !== undefined && (
        <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${trend >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
          {trend >= 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
  )
}

function SectionTitle({ icon: Icon, title, sub }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
        <Icon size={18} className="text-blue-700" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-gray-900 text-base">{title}</h3>
        {sub && <p className="text-xs text-gray-400">{sub}</p>}
      </div>
    </div>
  )
}

export default function Admin() {
  const { getAllUsers, deleteUser, logout, user } = useAuth()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('lastActive')
  const [sortDir, setSortDir] = useState('desc')
  const [refreshKey, setRefreshKey] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [confirmDelete, setConfirmDelete] = useState(null)
  const [mobileSidebar, setMobileSidebar] = useState(false)

  // Firestore real-time state
  const [firestoreUsers, setFirestoreUsers] = useState(null)   // null = belum dimuat
  const [firestoreVisits, setFirestoreVisits] = useState(null) // null = belum dimuat
  const [liveConnected, setLiveConnected] = useState(false)

  // Local fallback
  const localAnalytics = useMemo(() => getAnalyticsSummary(), [refreshKey])
  const localUsers = useMemo(() => getAllUsers(), [refreshKey])

  // Subscribe Firestore real-time listeners jika Firebase terkonfigurasi
  useEffect(() => {
    if (!isFirebaseConfigured) return

    const unsubUsers = listenToUsers((users) => {
      setFirestoreUsers(users)
      setLiveConnected(users !== null)
    })
    const unsubVisits = listenToPageVisits((visits) => {
      setFirestoreVisits(visits)
    }, 500)

    return () => {
      unsubUsers()
      unsubVisits()
    }
  }, [])

  // Gunakan data Firestore jika tersedia, fallback ke localStorage
  const allUsers = firestoreUsers !== null ? firestoreUsers : localUsers
  const allVisits = firestoreVisits !== null ? firestoreVisits : localAnalytics.recentVisits

  // Hitung ulang analytics summary dari data Firestore
  const analytics = useMemo(() => {
    if (firestoreVisits === null) return localAnalytics
    // Build summary dari Firestore visits
    const visits = firestoreVisits
    const deviceMap = {}, browserMap = {}, osMap = {}, pageMap = {}
    let totalDuration = 0
    const today = new Date().toDateString()
    let todaySessions = 0

    visits.forEach(v => {
      deviceMap[v.device] = (deviceMap[v.device] || 0) + 1
      browserMap[v.browser] = (browserMap[v.browser] || 0) + 1
      if (v.os) osMap[v.os] = (osMap[v.os] || 0) + 1
      totalDuration += v.duration || 0
      if (!pageMap[v.label]) pageMap[v.label] = { visits: 0, totalDuration: 0 }
      pageMap[v.label].visits += 1
      pageMap[v.label].totalDuration += v.duration || 0
      if (new Date(v.date || v.serverTimestamp).toDateString() === today) todaySessions++
    })

    return {
      totalVisits: visits.length,
      todaySessions,
      avgDuration: visits.length ? Math.round(totalDuration / visits.length) : 0,
      deviceStats: Object.entries(deviceMap).map(([name, value]) => ({ name, value })),
      browserStats: Object.entries(browserMap).map(([name, value]) => ({ name, value })),
      osStats: Object.entries(osMap).map(([name, value]) => ({ name, value })),
      pageStats: Object.entries(pageMap)
        .map(([name, d]) => ({ name, visits: d.visits, avgDuration: Math.round(d.totalDuration / d.visits) }))
        .sort((a, b) => b.visits - a.visits),
      recentVisits: visits.slice(0, 100),
    }
  }, [firestoreVisits, localAnalytics])

  const handleRefresh = () => setRefreshKey(k => k + 1)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleDelete = (email) => {
    deleteUser(email)
    setConfirmDelete(null)
    handleRefresh()
  }

  // Filter & sort users
  const filteredUsers = useMemo(() => {
    let list = allUsers.filter(u =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
    )
    list.sort((a, b) => {
      let valA, valB
      if (sortBy === 'name') { valA = a.name; valB = b.name }
      else if (sortBy === 'email') { valA = a.email; valB = b.email }
      else if (sortBy === 'lastActive') { valA = a.progress?.lastActive || ''; valB = b.progress?.lastActive || '' }
      else if (sortBy === 'tryout') { valA = a.progress?.lastTryoutScore || 0; valB = b.progress?.lastTryoutScore || 0 }
      else if (sortBy === 'createdAt') { valA = a.createdAt || ''; valB = b.createdAt || '' }
      if (sortDir === 'asc') return valA > valB ? 1 : -1
      return valA < valB ? 1 : -1
    })
    return list
  }, [allUsers, search, sortBy, sortDir])

  const toggleSort = (col) => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortBy(col); setSortDir('desc') }
  }

  // Compute user-level stats
  const userStats = useMemo(() => {
    const total = allUsers.length
    const today = new Date().toDateString()
    const activeToday = allUsers.filter(u => u.progress?.lastActive && new Date(u.progress.lastActive).toDateString() === today).length
    const allTryouts = allUsers.flatMap(u => u.progress?.tryoutHistory || [])
    const avgTryout = allTryouts.length
      ? Math.round(allTryouts.reduce((s, t) => s + (t.scaledScore || 0), 0) / allTryouts.length)
      : 0
    const totalLatihan = allUsers.reduce((s, u) => s + (u.progress?.latihanHistory?.length || 0), 0)
    const totalTryout = allUsers.reduce((s, u) => s + (u.progress?.tryoutHistory?.length || 0), 0)
    return { total, activeToday, avgTryout, totalLatihan, totalTryout }
  }, [allUsers])

  // Score distribution
  const scoreDistribution = useMemo(() => {
    const bins = [
      { range: '0-200', count: 0 },
      { range: '200-400', count: 0 },
      { range: '400-500', count: 0 },
      { range: '500-600', count: 0 },
      { range: '600-700', count: 0 },
      { range: '700-800', count: 0 },
    ]
    allUsers.forEach(u => {
      const score = u.progress?.lastTryoutScore || 0
      if (score === 0) return
      if (score < 200) bins[0].count++
      else if (score < 400) bins[1].count++
      else if (score < 500) bins[2].count++
      else if (score < 600) bins[3].count++
      else if (score < 700) bins[4].count++
      else bins[5].count++
    })
    return bins
  }, [allUsers])

  // Registration timeline (last 14 days)
  const regTimeline = useMemo(() => {
    const days = []
    for (let i = 13; i >= 0; i--) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const label = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
      const ds = d.toDateString()
      const count = allUsers.filter(u => u.createdAt && new Date(u.createdAt).toDateString() === ds).length
      days.push({ label, count })
    }
    return days
  }, [allUsers])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'analytics', label: 'Analytics', icon: Activity },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'sessions', label: 'Sessions', icon: Clock },
  ]

  const NavContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-2 rounded-xl shadow-lg">
            <Shield size={18} />
          </div>
          <div>
            <span className="text-blue-900 font-heading font-bold text-base">Admin Panel</span>
            <p className="text-[10px] text-gray-400">GradPrep</p>
          </div>
        </div>
        <button onClick={() => setMobileSidebar(false)} className="lg:hidden text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100">
          <X size={18} />
        </button>
      </div>

      {/* Admin info */}
      <div className="mx-3 mt-4 mb-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shadow-md">
            ⚙
          </div>
          <div className="min-w-0">
            <p className="text-gray-900 font-semibold text-sm truncate">{user?.name}</p>
            <p className="text-blue-600 text-xs">Administrator</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setActiveTab(id); setMobileSidebar(false) }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/20'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon size={17} className={activeTab === id ? 'text-amber-400' : 'text-gray-400'} />
            {label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-1">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all"
        >
          <Eye size={17} className="text-gray-400" />
          Lihat Situs
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut size={17} />
          Keluar
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 z-40">
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileSidebar && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileSidebar(false)} />
          <aside className="relative flex flex-col w-72 bg-white h-full z-10 shadow-2xl">
            <NavContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100" onClick={() => setMobileSidebar(true)}>
              <Menu size={20} />
            </button>
            <div className="flex-1">
              <h1 className="font-heading font-bold text-xl text-gray-900 capitalize">{activeTab === 'overview' ? 'Overview' : activeTab === 'analytics' ? 'Page Analytics' : activeTab === 'users' ? 'User Management' : 'Session Log'}</h1>
              <p className="text-xs text-gray-400">Last updated: {new Date().toLocaleString('id-ID')}</p>
            </div>
            {/* Firebase status badge */}
            {isFirebaseConfigured ? (
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${liveConnected ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                {liveConnected ? <Wifi size={13} /> : <WifiOff size={13} />}
                {liveConnected ? 'Live (Cross-device)' : 'Connecting...'}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-orange-50 text-orange-700">
                <WifiOff size={13} />
                Lokal Only
              </div>
            )}
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-colors"
            >
              <RefreshCw size={14} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">

          {/* ===== OVERVIEW TAB ===== */}
          {activeTab === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Users} label="Total User" value={userStats.total} sub="Terdaftar" color="blue" />
                <StatCard icon={Activity} label="Aktif Hari Ini" value={userStats.activeToday} sub={`dari ${userStats.total} user`} color="green" />
                <StatCard icon={Target} label="Rata-rata Tryout" value={userStats.avgTryout || '—'} sub="Scaled score /800" color="amber" />
                <StatCard icon={Clock} label="Page Views" value={analytics.totalVisits} sub={`${analytics.todaySessions} hari ini`} color="purple" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={BookOpen} label="Total Latihan" value={userStats.totalLatihan} sub="Sesi latihan soal" color="blue" />
                <StatCard icon={Award} label="Total Tryout" value={userStats.totalTryout} sub="Simulasi tryout" color="rose" />
                <StatCard icon={Globe} label="Avg. Durasi/Halaman" value={formatDuration(analytics.avgDuration)} sub="Rata-rata waktu" color="green" />
                <StatCard icon={Monitor} label="Device Dominan" value={analytics.deviceStats[0]?.name || '—'} sub={`${analytics.deviceStats[0]?.value || 0} sesi`} color="amber" />
              </div>

              {/* Registration Timeline */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle icon={TrendingUp} title="Registrasi User (14 Hari Terakhir)" sub="Jumlah user baru per hari" />
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={regTimeline} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                      <defs>
                        <linearGradient id="regGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="count" name="Registrasi" stroke="#1E3A8A" fill="url(#regGrad)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Score Distribution */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <SectionTitle icon={Award} title="Distribusi Skor Tryout" sub="Berdasarkan skor terakhir user" />
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={scoreDistribution} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="range" tick={{ fontSize: 10 }} />
                        <YAxis allowDecimals={false} tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Bar dataKey="count" name="User" fill="#1E3A8A" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Device Distribution */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <SectionTitle icon={Monitor} title="Distribusi Device" sub="Dari semua sesi tercatat" />
                  {analytics.deviceStats.length > 0 ? (
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={analytics.deviceStats} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" nameKey="name" paddingAngle={3}>
                            {analytics.deviceStats.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                          </Pie>
                          <Legend iconSize={10} formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
                          <Tooltip formatter={(v, n) => [`${v} sesi`, n]} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center text-gray-400 text-sm">
                      Belum ada data sesi
                    </div>
                  )}
                </div>
              </div>

              {/* Top Users */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle icon={Award} title="Top Performer (Skor Tryout Tertinggi)" />
                <div className="space-y-3">
                  {[...allUsers]
                    .filter(u => u.progress?.lastTryoutScore > 0)
                    .sort((a, b) => (b.progress?.lastTryoutScore || 0) - (a.progress?.lastTryoutScore || 0))
                    .slice(0, 5)
                    .map((u, i) => (
                      <div key={u.email} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                          i === 0 ? 'bg-amber-400 text-white' : i === 1 ? 'bg-gray-300 text-gray-700' : i === 2 ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {i + 1}
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                          {u.avatar || u.name?.charAt(0) || '?'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900 truncate">{u.name}</p>
                          <p className="text-xs text-gray-400 truncate">{u.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-800">{u.progress.lastTryoutScore}</p>
                          <p className="text-[10px] text-gray-400">/800</p>
                        </div>
                      </div>
                    ))}
                  {allUsers.filter(u => u.progress?.lastTryoutScore > 0).length === 0 && (
                    <p className="text-center text-sm text-gray-400 py-6">Belum ada user yang mengikuti tryout</p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* ===== ANALYTICS TAB ===== */}
          {activeTab === 'analytics' && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Activity} label="Total Page Views" value={analytics.totalVisits} color="blue" />
                <StatCard icon={Clock} label="Avg. Durasi/Page" value={formatDuration(analytics.avgDuration)} color="green" />
                <StatCard icon={Calendar} label="Sesi Hari Ini" value={analytics.todaySessions} color="amber" />
                <StatCard icon={Globe} label="Browser Dominan" value={analytics.browserStats[0]?.name || '—'} color="purple" />
              </div>

              {/* Page Visit Duration Chart */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle icon={Clock} title="Rata-rata Waktu per Halaman" sub="Dalam detik" />
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analytics.pageStats.slice(0, 8)} margin={{ top: 5, right: 10, bottom: 50, left: -10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" tick={{ fontSize: 9 }} angle={-30} textAnchor="end" interval={0} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip formatter={(v) => [`${v}s`, 'Rata-rata durasi']} />
                      <Bar dataKey="avgDuration" name="Durasi (s)" fill="#1E3A8A" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Browser & OS Distribution */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <SectionTitle icon={Globe} title="Browser Distribution" />
                  {analytics.browserStats.length > 0 ? (
                    <div className="h-52">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={analytics.browserStats} cx="50%" cy="50%" outerRadius={75} dataKey="value" nameKey="name" paddingAngle={3}>
                            {analytics.browserStats.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                          </Pie>
                          <Legend iconSize={10} formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <div className="h-52 flex items-center justify-center text-sm text-gray-400">Belum ada data</div>
                  )}
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <SectionTitle icon={Monitor} title="OS Distribution" />
                  {analytics.osStats.length > 0 ? (
                    <div className="h-52">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={analytics.osStats} cx="50%" cy="50%" outerRadius={75} dataKey="value" nameKey="name" paddingAngle={3}>
                            {analytics.osStats.map((_, i) => <Cell key={i} fill={COLORS[(i + 2) % COLORS.length]} />)}
                          </Pie>
                          <Legend iconSize={10} formatter={(v) => <span className="text-xs text-gray-600">{v}</span>} />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  ) : (
                    <div className="h-52 flex items-center justify-center text-sm text-gray-400">Belum ada data</div>
                  )}
                </div>
              </div>

              {/* Page Stats Table */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle icon={BarChart2} title="Statistik per Halaman" sub={`${analytics.pageStats.length} halaman terlacak`} />
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wide">Halaman</th>
                        <th className="text-right py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wide">Kunjungan</th>
                        <th className="text-right py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wide">Avg. Waktu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.pageStats.length > 0 ? analytics.pageStats.map((p, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-gray-800">{p.name}</td>
                          <td className="py-3 px-4 text-right">
                            <span className="inline-flex items-center justify-center min-w-[2.5rem] px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                              {p.visits}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right text-gray-600">{formatDuration(p.avgDuration)}</td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={3} className="py-10 text-center text-gray-400">
                            Belum ada data sesi. Data akan muncul saat user mulai browsing.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ===== USERS TAB ===== */}
          {activeTab === 'users' && (
            <>
              {/* Search */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cari nama atau email..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users size={14} />
                  <span>{filteredUsers.length} user ditemukan</span>
                </div>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        {[
                          { label: 'User', col: 'name' },
                          { label: 'Email', col: 'email' },
                          { label: 'Bergabung', col: 'createdAt' },
                          { label: 'Terakhir Aktif', col: 'lastActive' },
                          { label: 'Tryout', col: 'tryout' },
                          { label: 'Latihan', col: null },
                          { label: 'Math %', col: null },
                          { label: 'Eng %', col: null },
                          { label: '', col: null },
                        ].map(({ label, col }, i) => (
                          <th
                            key={i}
                            onClick={() => col && toggleSort(col)}
                            className={`text-left py-3 px-4 text-xs font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap ${col ? 'cursor-pointer hover:text-gray-700' : ''}`}
                          >
                            <span className="flex items-center gap-1">
                              {label}
                              {col && sortBy === col && (sortDir === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="py-16 text-center text-gray-400">
                            {allUsers.length === 0 ? 'Belum ada user terdaftar.' : 'Tidak ada user yang cocok dengan pencarian.'}
                          </td>
                        </tr>
                      ) : filteredUsers.map(u => (
                        <tr key={u.email} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm">
                                {u.avatar || u.name?.charAt(0) || '?'}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 truncate max-w-[120px]">{u.name}</p>
                                <p className="text-[10px] text-gray-400 truncate max-w-[120px]">{u.target || '—'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-gray-500 text-xs max-w-[160px] truncate">{u.email}</td>
                          <td className="py-3.5 px-4 text-gray-500 text-xs whitespace-nowrap">
                            {u.createdAt ? new Date(u.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: '2-digit' }) : '—'}
                          </td>
                          <td className="py-3.5 px-4 text-gray-500 text-xs whitespace-nowrap">
                            {u.progress?.lastActive ? formatTimeAgo(u.progress.lastActive) : '—'}
                          </td>
                          <td className="py-3.5 px-4">
                            {u.progress?.lastTryoutScore > 0 ? (
                              <span className="font-bold text-blue-800">{u.progress.lastTryoutScore}<span className="text-gray-400 font-normal text-[10px]">/800</span></span>
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">{u.progress?.latihanHistory?.length || 0}x</td>
                          <td className="py-3.5 px-4">
                            <ProgressPill value={u.progress?.mathProgress || 0} color="blue" />
                          </td>
                          <td className="py-3.5 px-4">
                            <ProgressPill value={u.progress?.englishProgress || 0} color="emerald" />
                          </td>
                          <td className="py-3.5 px-4">
                            <button
                              onClick={() => setConfirmDelete(u.email)}
                              className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Delete Confirm Modal */}
              {confirmDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setConfirmDelete(null)} />
                  <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Trash2 size={24} className="text-red-500" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-center text-gray-900 mb-2">Hapus User?</h3>
                    <p className="text-sm text-gray-500 text-center mb-1">Akun berikut akan dihapus permanen:</p>
                    <p className="text-sm font-semibold text-center text-gray-800 bg-gray-50 py-2 px-4 rounded-xl mb-5">{confirmDelete}</p>
                    <div className="flex gap-3">
                      <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50">Batal</button>
                      <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600">Hapus</button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ===== SESSIONS TAB ===== */}
          {activeTab === 'sessions' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Activity} label="Total Sesi" value={analytics.totalVisits} color="blue" />
                <StatCard icon={Clock} label="Avg. Durasi" value={formatDuration(analytics.avgDuration)} color="green" />
                <StatCard icon={Calendar} label="Sesi Hari Ini" value={analytics.todaySessions} color="amber" />
                <StatCard icon={Monitor} label="Device Mobile" value={analytics.deviceStats.find(d => d.name === 'Mobile')?.value || 0} sub="sesi dari mobile" color="purple" />
              </div>

              {/* Recent Sessions Log */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <SectionTitle icon={Clock} title="Log Sesi Terbaru" sub={`${allVisits.length} sesi${isFirebaseConfigured && liveConnected ? ' (semua device)' : ' (device ini)'}`} />
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-gray-100">
                      <tr>
                        {['Halaman', 'Durasi', 'Device', 'Browser', 'OS', 'User', 'Waktu'].map(h => (
                          <th key={h} className="text-left py-3 px-3 text-xs font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {allVisits.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-16 text-center text-gray-400">
                            Belum ada data sesi. Navigasi halaman akan mulai merekam.
                          </td>
                        </tr>
                      ) : allVisits.map((v, i) => {
                        const DevIcon = DEVICE_ICONS[v.device] || Monitor
                        return (
                          <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="py-3 px-3">
                              <span className="font-medium text-gray-800">{v.label}</span>
                            </td>
                            <td className="py-3 px-3">
                              <span className={`font-semibold ${v.duration > 120 ? 'text-green-600' : v.duration > 30 ? 'text-amber-600' : 'text-gray-500'}`}>
                                {formatDuration(v.duration)}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-1.5">
                                <DevIcon size={13} className="text-gray-400" />
                                <span className="text-gray-600">{v.device}</span>
                              </div>
                            </td>
                            <td className="py-3 px-3 text-gray-600">{v.browser}</td>
                            <td className="py-3 px-3 text-gray-600">{v.os}</td>
                            <td className="py-3 px-3">
                              {v.userId ? (
                                <span className="text-blue-700 text-xs font-medium truncate max-w-[120px] block">{v.userId}</span>
                              ) : (
                                <span className="text-gray-300 text-xs">Guest</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-gray-400 text-xs whitespace-nowrap">
                              {new Date(v.date).toLocaleString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function ProgressPill({ value, color }) {
  const colors = {
    blue: 'bg-blue-600',
    emerald: 'bg-emerald-500',
  }
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${colors[color]} rounded-full`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-gray-600 font-medium">{value}%</span>
    </div>
  )
}

function formatTimeAgo(dateStr) {
  if (!dateStr) return '—'
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Baru saja'
  if (mins < 60) return `${mins}m lalu`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}j lalu`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}h lalu`
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
}
