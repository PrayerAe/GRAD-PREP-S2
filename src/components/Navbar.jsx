import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, GraduationCap, LogIn, User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const navigate = useNavigate()
  const { user, isLoggedIn, logout } = useAuth()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLogout = () => {
    logout()
    setDropOpen(false)
    navigate('/')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              scrolled ? 'bg-blue-800 text-white' : 'bg-white/15 backdrop-blur-sm text-white border border-white/20'
            }`}>
              <GraduationCap size={20} />
            </div>
            <span className={`font-heading font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}>GradPrep</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Home', to: '/' },
              { label: 'Materi', to: '/materi/matematika' },
              { label: 'Tryout', to: '/tryout' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="w-px h-6 bg-gray-300/30 mx-2" />

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                    scrolled
                      ? 'hover:bg-gray-100 text-gray-700'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {user?.avatar || user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm font-medium max-w-[100px] truncate">{user?.name}</span>
                  <ChevronDown size={14} className={`transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setDropOpen(false)} />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-scale-in">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      >
                        <User size={15} />
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        onClick={() => setDropOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      >
                        <User size={15} />
                        Profil
                      </Link>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut size={15} />
                          Keluar
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/login')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-blue-800 hover:bg-blue-50'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <LogIn size={15} />
                  Masuk
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Mulai Belajar
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            {[
              { label: 'Home', to: '/' },
              { label: 'Materi', to: '/materi/matematika' },
              { label: 'Tryout', to: '/tryout' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="block py-2.5 px-4 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-800 font-medium text-sm transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="border-t border-gray-100 pt-3 mt-3">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-sm font-bold">
                      {user?.avatar || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="block py-2.5 px-4 rounded-xl text-gray-700 hover:bg-blue-50 font-medium text-sm">Dashboard</Link>
                  <Link to="/profile" onClick={() => setOpen(false)} className="block py-2.5 px-4 rounded-xl text-gray-700 hover:bg-blue-50 font-medium text-sm">Profil</Link>
                  <button onClick={() => { handleLogout(); setOpen(false) }} className="w-full text-left py-2.5 px-4 rounded-xl text-red-600 hover:bg-red-50 font-medium text-sm">
                    Keluar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { navigate('/login'); setOpen(false) }}
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white font-semibold py-3 rounded-xl text-sm"
                >
                  Masuk / Daftar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
