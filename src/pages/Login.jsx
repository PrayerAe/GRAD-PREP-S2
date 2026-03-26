import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { GraduationCap, Mail, Lock, User, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function Login() {
  const [tab, setTab] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login, register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (tab === 'login') {
        const res = await login(email, password)
        if (!res.ok) { setError(res.error); setLoading(false); return }
        setLoading(false)
        navigate(res.isAdmin ? '/admin' : '/dashboard')
        return
      } else {
        if (!name.trim()) { setError('Nama wajib diisi'); setLoading(false); return }
        if (password.length < 6) { setError('Password minimal 6 karakter'); setLoading(false); return }
        const res = await register(name.trim(), email, password)
        if (!res.ok) { setError(res.error); setLoading(false); return }
      }
      setLoading(false)
      navigate('/dashboard')
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-indigo-400/8 rounded-full blur-2xl animate-float-slow" />
      </div>

      {/* Left - Branding (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative z-10 p-12">
        <div className="max-w-md text-white">
          <Link to="/" className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <GraduationCap size={28} className="text-amber-400" />
            </div>
            <span className="font-heading text-3xl font-bold">GradPrep</span>
          </Link>

          <h1 className="font-heading text-4xl font-bold leading-tight mb-6">
            Persiapkan Dirimu
            <span className="block text-amber-400 mt-1">Lolos S2 Impian</span>
          </h1>

          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Akses materi terstruktur, latihan soal TPA & TOEFL, dan simulasi tryout. Semua progress tersimpan otomatis.
          </p>

          <div className="space-y-4">
            {[
              ['80+ soal latihan berbasis ujian nasional', 'bg-blue-500/20'],
              ['Simulasi tryout CBT 90 menit', 'bg-amber-500/20'],
              ['Progress & riwayat skor tersimpan', 'bg-green-500/20'],
              ['Analisis kelemahan & rekomendasi belajar', 'bg-purple-500/20'],
            ].map(([text, bg]) => (
              <div key={text} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${bg} backdrop-blur-sm border border-white/10`}>
                <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                <span className="text-sm text-blue-100">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center relative z-10 p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="flex lg:hidden items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <GraduationCap size={22} className="text-amber-400" />
            </div>
            <span className="font-heading text-2xl font-bold text-white">GradPrep</span>
          </Link>

          {/* Card */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl">
            {/* Tab switcher */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
              <button
                onClick={() => { setTab('login'); setError('') }}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  tab === 'login' ? 'bg-white text-blue-900 shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Masuk
              </button>
              <button
                onClick={() => { setTab('register'); setError('') }}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  tab === 'register' ? 'bg-white text-blue-900 shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Daftar Baru
              </button>
            </div>

            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-1">
              {tab === 'login' ? 'Selamat Datang!' : 'Buat Akun Baru'}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {tab === 'login' ? 'Masuk untuk melanjutkan belajar' : 'Mulai perjalanan S2 kamu sekarang'}
            </p>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 mb-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-shake">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-sm transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="email@contoh.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-sm transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder="Masukkan password"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-sm transition-all bg-gray-50 focus:bg-white"
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 mt-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {tab === 'login' ? 'Masuk' : 'Daftar Sekarang'}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-gray-500 hover:text-blue-700 transition-colors">
                ← Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
