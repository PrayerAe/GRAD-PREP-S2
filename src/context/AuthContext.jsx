import { createContext, useContext, useState, useEffect } from 'react'
import { syncUserToFirestore, deleteUserFromFirestore, getForceLogoutTimestamp } from '../services/firestore'

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
  if (session) localStorage.setItem(STORAGE_KEYS.session, JSON.stringify({ ...session, loggedInAt: new Date().toISOString() }))
  else localStorage.removeItem(STORAGE_KEYS.session)
}

// ---- Retry + pending sync queue ----
const PENDING_SYNC_KEY = 'gradprep_pending_sync'

async function syncWithRetry(email, userData, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const ok = await syncUserToFirestore(email, userData)
    if (ok) return true
    // Tunggu sebelum retry (2s, 4s, 6s)
    if (i < retries - 1) await new Promise(r => setTimeout(r, 2000 * (i + 1)))
  }
  // Semua retry gagal → simpan ke pending queue
  try {
    const pending = JSON.parse(localStorage.getItem(PENDING_SYNC_KEY) || '[]')
    if (!pending.includes(email)) {
      pending.push(email)
      localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify(pending))
    }
  } catch {}
  return false
}

function processPendingSync() {
  try {
    const pending = JSON.parse(localStorage.getItem(PENDING_SYNC_KEY) || '[]')
    if (pending.length === 0) return
    const users = loadUsers()
    const remaining = []
    pending.forEach(email => {
      const userData = users[email]
      if (userData && !userData.isAdmin) {
        syncUserToFirestore(email, userData).then(ok => {
          if (!ok) remaining.push(email)
          localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify(remaining))
        })
      }
    })
    // Langsung kosongkan — sisa gagal akan diisi ulang oleh callback di atas
    localStorage.setItem(PENDING_SYNC_KEY, JSON.stringify([]))
  } catch {}
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
    const users = seedAdminAccount(loadUsers())
    const session = loadSession()

    const restoreSession = (email, userData) => {
      setUser({ ...userData, email })
      if (!userData.isAdmin) {
        userData.progress.lastActive = new Date().toISOString()
        users[email] = userData
        saveUsers(users)
        syncWithRetry(email, userData)
      }
    }

    // Process pending sync queue dari session sebelumnya yang gagal
    processPendingSync()

    // Restore session langsung dari localStorage (tidak tunggu Firestore → app cepat)
    const userData = users[session?.email]
    if (session && userData) restoreSession(session.email, userData)
    setLoading(false)

    if (!session) return

    // Cek force logout di background (non-blocking)
    getForceLogoutTimestamp()
      .then((forceLogoutAt) => {
        if (forceLogoutAt && (!session.loggedInAt || session.loggedInAt < forceLogoutAt)) {
          saveSession(null)
          setUser(null)
        }
      })
      .catch(() => {})
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
    // Sync to Firestore with retry (cross-device)
    syncWithRetry(email, newUser)
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
    // Sync to Firestore with retry (cross-device)
    syncWithRetry(email, userData)
    return { ok: true, isAdmin: !!userData.isAdmin }
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
    if (!userData.isAdmin) syncWithRetry(user.email, userData)
  }

  const updateProgress = (updates) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    Object.assign(userData.progress, updates, { lastActive: new Date().toISOString() })
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
    if (!userData.isAdmin) syncWithRetry(user.email, userData)
  }

  const saveQuizScore = (quizId, score, total) => {
    if (!user) return
    const users = loadUsers()
    const userData = users[user.email]
    userData.progress.chapterQuizScores[quizId] = { score, total, date: new Date().toISOString() }
    users[user.email] = userData
    saveUsers(users)
    setUser({ ...userData, email: user.email })
    if (!userData.isAdmin) syncWithRetry(user.email, userData)
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
    syncWithRetry(user.email, userData)
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
    syncWithRetry(user.email, userData)
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
    syncWithRetry(user.email, userData)
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
    deleteUserFromFirestore(email)
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
