import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  LayoutDashboard, BookOpen, BookMarked,
  PenLine, Target, User, GraduationCap, X, LogOut, ChevronRight, Shield,
  Headphones, Globe, Sparkles, Brain, Code2, MessageCircle
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: BookOpen, label: 'Matematika', to: '/materi/matematika' },
  { icon: BookMarked, label: 'Bahasa Inggris', to: '/materi/english' },
  { icon: Headphones, label: 'TOEFL', to: '/materi/toefl' },
  { icon: Globe, label: 'IELTS', to: '/materi/ielts' },
  { icon: Sparkles, label: 'Vocabulary', to: '/vocabulary' },
  { icon: MessageCircle, label: 'Daily Conversation', to: '/daily-conversation' },
  { icon: Brain, label: 'ML & AI', to: '/materi/ml' },
  { icon: Code2, label: 'Coding Lab', to: '/coding-lab' },
  { icon: PenLine, label: 'Latihan Soal', to: '/latihan/matematika' },
  { icon: Target, label: 'Tryout', to: '/tryout' },
]

export default function Sidebar({ mobileOpen, onClose }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, logout, isLoggedIn } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
    if (onClose) onClose()
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2.5" onClick={onClose}>
          <div className="bg-blue-800 text-white p-2 rounded-xl">
            <GraduationCap size={20} />
          </div>
          <span className="text-blue-900 font-heading font-bold text-lg">GradPrep</span>
        </Link>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      {/* User card */}
      {isLoggedIn && user && (
        <div className="mx-3 mt-4 mb-2 p-3 rounded-xl bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {user.avatar || user.name?.charAt(0) || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 font-semibold text-sm truncate">{user.name}</p>
              <p className="text-blue-600 text-xs truncate">{user.target || 'Lolos S2 2026'}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 space-y-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">Menu</p>
        {navItems.map(({ icon: Icon, label, to }) => {
          const isActive = pathname === to || (to === '/latihan/matematika' && pathname.startsWith('/latihan'))
            || (to === '/materi/toefl' && pathname === '/materi/toefl')
            || (to === '/materi/ielts' && pathname === '/materi/ielts')
          return (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/20'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-amber-400' : 'text-gray-400 group-hover:text-gray-600'} />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight size={14} className="text-white/50" />}
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-1">
        <Link
          to="/profile"
          onClick={onClose}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
            pathname === '/profile'
              ? 'bg-blue-800 text-white shadow-lg shadow-blue-800/20'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <User size={18} className={pathname === '/profile' ? 'text-amber-400' : 'text-gray-400'} />
          <span>Profil</span>
        </Link>

        {/* Admin link – hanya tampil untuk admin */}
        {user?.isAdmin && (
          <Link
            to="/admin"
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              pathname === '/admin'
                ? 'bg-indigo-700 text-white shadow-lg shadow-indigo-700/20'
                : 'text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700'
            }`}
          >
            <Shield size={18} className={pathname === '/admin' ? 'text-amber-400' : 'text-indigo-400'} />
            <span>Admin Panel</span>
          </Link>
        )}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
          >
            <LogOut size={18} />
            <span>Keluar</span>
          </button>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar — xl+ only (≥1280px) */}
      <aside className="hidden xl:flex flex-col w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile/Tablet overlay — shown below xl */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          <aside className="relative flex flex-col w-72 bg-white h-full z-10 shadow-2xl animate-slide-in-left">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  )
}
