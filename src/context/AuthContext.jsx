import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEYS = {
  users: 'gradprep_users',
  session: 'gradprep_session',
}

// ---- Admin credentials (hardcoded, no backend needed) ----
const ADMIN_EMAIL = 'admin@gradprep.id'
const ADMIN_PASSWORD = 'Admin@2026'

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || {}
  } catch { return {} }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.session))
  } catch { return null }
}

function saveSession(session) {
  if (session) localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session))
  else localStorage.removeItem(STORAGE_KEYS.session)
}

function createDefaultProgress() {
  return {
    mathProgress: 0,
    englishProgress: 0,
    completedChapters: { math: [], english: [] },
    chapterQuizScores: {},
    latihanHistory: [],
    tryoutHistory: [],
    lastTryoutScore: 0,
    totalStudyTime: 0,
    streak: 0,
    lastActive: new Date().toISOString(),
  }
}

function seedAdminAccount(users) {
  if (!users[ADMIN_EMAIL]) {
    users[ADMIN_EMAIL] = {
      name: 'Administrator',
      password: ADMIN_PASSWORD,
      target: 'Admin Panel',
      avatar: '⚙',
      isAdmin: true,
      createdAt: new Date().toISOString(),
      progress: createDefaultProgress(),
    }
    saveUsers(users)
  }
  return users
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ensure admin account always exists
    const users = seedAdminAccount(loadUsers())

    const session = loadSession()
    if (session) {
      const userData = users[session.email]
      if (userData) {
        setUser({ ...userData, email: session.email })
      }
    }
    setLoading(false)
  }, [])

  const register = (name, email, password) => {
    if (email === ADMIN_EMAIL) return { ok: false, error: 'Email ini tidak dapat didaftarkan.' }
    const users = loadUsers()
    if (users[email]) return { ok: false, error: 'Email sudah terdaftar' }

    const newUser = {
      name,
      password,
      target: 'Lolos S2 2026',
      avatar: name.charAt(0).toUpperCase(),
      isAdmin: false,
      createdAt: new Date().toISOString(),
      progress: createDefaultProgress(),
    }
    users[email] = newUser
    saveUsers(users)
    saveSession({ email })
    setUser({ ...newUser, email })
    return { ok: true }
  }

  const login = (email, password) => {
    const users = loadUsers()
    const userData = users[email]
    if (!userData) return { ok: false, error: 'Email tidak ditemukan' }
    if (userData.password !== password) return { ok: false, error: 'Password salah' }

    userData.progress.lastActive = new Date().toISOString()
    users[email] = userData
    saveUsers(users)
    saveSession({ email })
    setUser({ ...userData, email })
    return { ok: true }
  }

  const logout = () => {
    saveSession(null)
    setUser(null)
  }

  const updateProfile = (updates) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    Object.assign(userData, updates)
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  const updateProgress = (updates) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    Object.assign(userData.progress, updates, { lastActive: new Date().toISOString() })
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  const saveQuizScore = (quizId, score, total) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    userData.progress.chapterQuizScores[quizId] = { score, total, date: new Date().toISOString() }
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  const saveLatihanResult = (subject, score, total, topicBreakdown) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    const entry = {
      subject, score, total,
      percent: Math.round((score / total) * 100),
      topicBreakdown,
      date: new Date().toISOString(),
    }
    userData.progress.latihanHistory = [entry, ...(userData.progress.latihanHistory || [])].slice(0, 20)

    const pct = entry.percent
    if (subject === 'matematika') userData.progress.mathProgress = Math.max(userData.progress.mathProgress, pct)
    else if (subject === 'english') userData.progress.englishProgress = Math.max(userData.progress.englishProgress, pct)

    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  const saveTryoutResult = (scaledScore, mathScore, mathTotal, engScore, engTotal) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    const entry = {
      scaledScore, mathScore, mathTotal, engScore, engTotal,
      mathPercent: Math.round((mathScore / mathTotal) * 100),
      engPercent: Math.round((engScore / engTotal) * 100),
      date: new Date().toISOString(),
    }
    userData.progress.tryoutHistory = [entry, ...(userData.progress.tryoutHistory || [])].slice(0, 20)
    userData.progress.lastTryoutScore = scaledScore
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  const markChapterComplete = (subject, chapterId) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    const key = subject === 'matematika' ? 'math' : 'english'
    if (!userData.progress.completedChapters[key].includes(chapterId)) {
      userData.progress.completedChapters[key].push(chapterId)
    }
    const totalChapters = 4
    const completed = userData.progress.completedChapters[key].length
    if (key === 'math') userData.progress.mathProgress = Math.max(userData.progress.mathProgress, Math.round((completed / totalChapters) * 100))
    else userData.progress.englishProgress = Math.max(userData.progress.englishProgress, Math.round((completed / totalChapters) * 100))

    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
  }

  // ---- Admin-only functions ----

  const getAllUsers = () => {
    const users = loadUsers()
    return Object.entries(users)
      .filter(([email]) => email !== ADMIN_EMAIL)
      .map(([email, data]) => ({ email, ...data }))
  }

  const deleteUser = (email) => {
    if (!user?.isAdmin || email === ADMIN_EMAIL) return
    const users = loadUsers()
    delete users[email]
    saveUsers(users)
  }

  return (
    <AuthContext.Provider value={{
      user, loading,
      register, login, logout,
      updateProfile, updateProgress, saveQuizScore,
      saveLatihanResult, saveTryoutResult, markChapterComplete,
      getAllUsers, deleteUser,
      isLoggedIn: !!user,
      isAdmin: !!user?.isAdmin,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
