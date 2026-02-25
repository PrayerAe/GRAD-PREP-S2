import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import {
  BookOpen, PenLine, Target, CheckCircle, ArrowRight, Mail,
  Sparkles, Clock, TrendingUp, GraduationCap, Star, Zap, Shield
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    gradient: 'from-blue-500 to-blue-700',
    title: 'Materi Lengkap & Terstruktur',
    desc: 'Matematika & Bahasa Inggris sesuai kisi-kisi tes masuk S2. Dilengkapi kuis per bab.',
  },
  {
    icon: PenLine,
    gradient: 'from-amber-500 to-orange-600',
    title: 'Soal Ujian Nasional',
    desc: 'Soal TPA & TOEFL berbasis ujian nasional masuk S2. Pembahasan detail setiap soal.',
  },
  {
    icon: Target,
    gradient: 'from-green-500 to-emerald-600',
    title: 'Simulasi Tryout CBT',
    desc: 'Tryout 80 soal dalam 90 menit seperti ujian nyata. Analisis skor & rekomendasi otomatis.',
  },
  {
    icon: Shield,
    gradient: 'from-purple-500 to-violet-600',
    title: 'Progress Tersimpan',
    desc: 'Login untuk simpan semua progress, riwayat skor, dan analisis kelemahan belajarmu.',
  },
]

const stats = [
  { value: '160+', label: 'Soal Latihan', icon: PenLine },
  { value: '60', label: 'Soal TPA & TOEFL', icon: Zap },
  { value: '8', label: 'Bab Materi', icon: BookOpen },
  { value: '90', label: 'Menit Tryout', icon: Clock },
]

const testimonials = [
  { name: 'Rina A.', univ: 'Lolos UI 2025', text: 'GradPrep membantu saya berlatih TPA dan TOEFL secara terstruktur. Sangat efektif!', color: 'from-blue-500 to-blue-700' },
  { name: 'Budi S.', univ: 'Lolos ITB 2025', text: 'Fitur tryout dan analisis skornya sangat membantu saya tahu kelemahan saya.', color: 'from-green-500 to-emerald-600' },
  { name: 'Dita W.', univ: 'Lolos UGM 2025', text: 'Desainnya enak, soalnya relevan dengan tes S2 sungguhan. Recommended!', color: 'from-amber-500 to-orange-600' },
]

export default function Landing() {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const handleCTA = () => navigate(isLoggedIn ? '/dashboard' : '/login')

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-15%] right-[-15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-[-20%] left-[-15%] w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-amber-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-[40%] left-[30%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-indigo-400/8 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-up text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8">
                <Sparkles size={14} className="text-amber-400" />
                <span className="text-xs sm:text-sm font-medium text-blue-100">Platform Persiapan S2 #1</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6">
                Raih Mimpi
                <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mt-1 sm:mt-2">
                  S2 Impianmu
                </span>
              </h1>

              <p className="text-blue-200 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto lg:mx-0">
                Materi terstruktur, soal TPA & TOEFL dari ujian nasional, dan simulasi tryout CBT.
                Belajar cerdas, raih skor tertinggi.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleCTA}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  {isLoggedIn ? 'Buka Dashboard' : 'Mulai Gratis'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/materi/matematika')}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base"
                >
                  <BookOpen size={18} />
                  Lihat Materi
                </button>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {['R', 'B', 'D', 'A'].map((initial, i) => (
                    <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-blue-900 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">
                      {initial}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-amber-400" fill="#FBBF24" />
                    ))}
                  </div>
                  <p className="text-blue-300 text-[10px] sm:text-xs mt-0.5">Dipercaya 500+ pelajar</p>
                </div>
              </div>
            </div>

            {/* Hero visual - desktop only */}
            <div className="hidden lg:block animate-fade-in-up stagger-2">
              <div className="relative">
                <div className="glass-card p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">P</div>
                    <div>
                      <div className="text-white font-semibold">Prayer</div>
                      <div className="text-blue-300 text-sm flex items-center gap-1">
                        <GraduationCap size={12} />
                        Target: Lolos S2 2026
                      </div>
                    </div>
                    <div className="ml-auto px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-semibold">Active</div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-200">Matematika</span>
                        <span className="text-amber-400 font-bold">75%</span>
                      </div>
                      <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-400 to-amber-300 h-3 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-200">Bahasa Inggris</span>
                        <span className="text-green-400 font-bold">62%</span>
                      </div>
                      <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full" style={{ width: '62%' }} />
                      </div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200 text-sm">Skor Tryout Terakhir</span>
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-heading font-bold text-white">620</span>
                          <span className="text-blue-300 text-sm">/ 800</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp size={14} className="text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">+100 dari tryout sebelumnya</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-2 animate-float">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center"><CheckCircle size={16} className="text-green-600" /></div>
                  <div><p className="text-xs font-bold text-gray-900">Grade A</p><p className="text-[10px] text-gray-500">TPA Score</p></div>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-2 animate-float-delayed">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><Star size={16} className="text-amber-600" /></div>
                  <div><p className="text-xs font-bold text-gray-900">TOEFL 550</p><p className="text-[10px] text-gray-500">Target tercapai!</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-10 sm:h-16">
          <svg className="absolute bottom-0 w-full h-10 sm:h-16" viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 32L48 28C96 24 192 16 288 18C384 20 480 32 576 36C672 40 768 36 864 30C960 24 1056 16 1152 18C1248 20 1344 32 1392 38L1440 44V64H0V32Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-1 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2 group-hover:bg-blue-100 transition-colors">
                    <Icon size={16} className="text-blue-700" />
                  </div>
                  <div className="text-xl sm:text-3xl font-heading font-bold text-blue-900">{value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Sparkles size={14} />
            Fitur Unggulan
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-lg px-2">
            Persiapan tes S2 yang lengkap, terstruktur, dan efektif dalam satu platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map(({ icon: Icon, gradient, title, desc }) => (
            <div key={title} className="group card border border-gray-100 hover:border-blue-200">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why GradPrep */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-14 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[-10%] right-[-5%] w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-amber-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-blue-200 mb-4 sm:mb-6">
                <Zap size={14} className="text-amber-400" />
                Kenapa GradPrep?
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Dirancang Khusus untuk
                <span className="text-amber-400"> Lolos S2</span>
              </h2>
              <p className="text-blue-200 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                GradPrep bukan sekadar bank soal. Ini adalah sistem belajar yang memahami kebutuhanmu.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Soal TPA & TOEFL dari ujian nasional S2',
                  'Latihan soal dengan pembahasan lengkap',
                  'Simulasi tryout CBT 90 menit',
                  'Analisis kelemahan & rekomendasi personal',
                  'Progress & riwayat skor tersimpan otomatis',
                  'Akses bebas, desain modern & mudah digunakan',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-amber-400" />
                    </div>
                    <span className="text-blue-100 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {testimonials.map(({ name, univ, text, color }) => (
                <div key={name} className="bg-white/8 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10 hover:bg-white/12 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0`}>
                      {name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-xs sm:text-sm">{name}</p>
                      <p className="text-blue-300 text-[10px] sm:text-xs">{univ}</p>
                    </div>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-amber-400" fill="#FBBF24" />)}
                    </div>
                  </div>
                  <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">"{text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24">
        <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-white/20">
              <GraduationCap size={24} className="text-amber-400 sm:w-8 sm:h-8" />
            </div>
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Siap Raih S2 Impianmu?</h2>
            <p className="text-blue-200 mb-6 sm:mb-8 max-w-lg mx-auto text-xs sm:text-lg px-2">
              Bergabung sekarang dan mulai perjalanan menuju kampus impianmu. Gratis dan langsung bisa digunakan.
            </p>
            <button
              onClick={handleCTA}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:-translate-y-0.5"
            >
              {isLoggedIn ? 'Buka Dashboard' : 'Mulai Belajar Gratis'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-blue-800 text-white p-1.5 rounded-xl"><GraduationCap size={16} /></div>
              <span className="text-white font-heading font-bold text-sm">GradPrep</span>
              <span className="text-gray-600 hidden sm:inline mx-1">|</span>
              <span className="text-xs hidden sm:inline">Persiapan Tes Masuk S2</span>
            </div>
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <span>&copy; 2026 GradPrep</span>
              <a href="mailto:gradprep@email.com" className="flex items-center gap-1 hover:text-white transition-colors">
                <Mail size={12} />
                <span className="hidden sm:inline">gradprep@email.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
