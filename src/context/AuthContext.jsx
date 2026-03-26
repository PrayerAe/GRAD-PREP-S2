import { createContext, useContext, useState, useEffect, useRef } from 'react'
import {
  syncUserToFirestore,
  deleteUserFromFirestore,
  getUserFromFirestore,
  getForceLogoutTimestamp,
} from '../services/firestore'
import {
  registerInFirestore,
  verifyLoginInFirestore,
  ensureCredentialsInFirestore,
} from '../services/authService'

const AuthContext = createContext(null)

const STORAGE_KEYS = {
  users: 'gradprep_users',
  session: 'gradprep_session',
}

// ---- Admin credentials (hardcoded) ----
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
    if (i < retries - 1) await new Promise(r => setTimeout(r, 2000 * (i + 1)))
  }
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

    processPendingSync()

    // Restore session dari localStorage (cepat, tanpa tunggu network)
    if (session?.email) {
      const userData = users[session.email]
      if (userData) {
        setUser({ ...userData, email: session.email })
        if (!userData.isAdmin) {
          userData.progress.lastActive = new Date().toISOString()
          users[session.email] = userData
          saveUsers(users)
          syncWithRetry(session.email, userData)
        }
      }
    }
    setLoading(false)

    // Cek force logout di background
    if (session) {
      getForceLogoutTimestamp()
        .then((forceLogoutAt) => {
          if (forceLogoutAt && (!session.loggedInAt || session.loggedInAt < forceLogoutAt)) {
            saveSession(null)
            setUser(null)
          }
        })
        .catch(() => {})
    }
  }, [])

  const register = async (name, email, password) => {
    if (email === ADMIN_EMAIL) return { ok: false, error: 'Email ini tidak dapat didaftarkan.' }
    const users = loadUsers()
    if (users[email]) return { ok: false, error: 'Email sudah terdaftar' }

    // 1. Daftarkan credentials ke Firestore (cross-device)
    const authResult = await registerInFirestore(email, password)
    if (!authResult.ok) return authResult

    // 2. Simpan data user ke localStorage + Firestore
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
    syncWithRetry(email, newUser)
    return { ok: true }
  }

  const login = async (email, password) => {
    // Admin login — tetap lokal (hardcoded)
    if (email === ADMIN_EMAIL) {
      const users = loadUsers()
      const adminData = users[ADMIN_EMAIL]
      if (!adminData || password !== ADMIN_PASSWORD) {
        return { ok: false, error: 'Password admin salah' }
      }
      saveSession({ email })
      setUser({ ...adminData, email })
      return { ok: true, isAdmin: true }
    }

    // Cek localStorage dulu (device ini pernah login sebelumnya)
    let users = loadUsers()
    let userData = users[email]

    if (userData && userData.password === password) {
      // Login lokal berhasil — sync credentials ke Firestore di background
      userData.progress.lastActive = new Date().toISOString()
      users[email] = userData
      saveUsers(users)
      saveSession({ email })
      setUser({ ...userData, email })
      syncWithRetry(email, userData)
      ensureCredentialsInFirestore(email, password)
      return { ok: true, isAdmin: false }
    }

    // Tidak ada di localStorage ATAU password beda → verifikasi di Firestore (cross-device)
    const authResult = await verifyLoginInFirestore(email, password)
    if (!authResult.ok) return authResult

    // Login Firestore berhasil — ambil data user dari Firestore
    if (!userData) {
      const firestoreData = await getUserFromFirestore(email)
      if (firestoreData) {
        userData = {
          name: firestoreData.name || '',
          password,
          target: firestoreData.target || 'Lolos S2 2026',
          avatar: firestoreData.avatar || firestoreData.name?.charAt(0)?.toUpperCase() || 'U',
          isAdmin: false,
          createdAt: firestoreData.createdAt || new Date().toISOString(),
          progress: firestoreData.progress || createDefaultProgress(),
        }
      } else {
        // Credentials ada tapi data user belum — buat baru
        userData = {
          name: email.split('@')[0],
          password,
          target: 'Lolos S2 2026',
          avatar: email.charAt(0).toUpperCase(),
          isAdmin: false,
          createdAt: new Date().toISOString(),
          progress: createDefaultProgress(),
        }
        syncWithRetry(email, userData)
      }
    } else {
      // User ada di localStorage tapi password lama — update password lokal
      userData.password = password
    }

    userData.progress.lastActive = new Date().toISOString()
    users[email] = userData
    saveUsers(users)
    saveSession({ email })
    setUser({ ...userData, email })
    syncWithRetry(email, userData)
    return { ok: true, isAdmin: false }
  }

  const logout = () => {
    saveSession(null)
    setUser(null)
  }

  // Throttled lastActive update
  const lastSyncRef = useRef(0)
  const touchLastActive = () => {
    if (!user || user.isAdmin) return
    const users = loadUsers()
    const userData = users[user.email]
    if (!userData) return
    const now = new Date().toISOString()
    userData.progress.lastActive = now
    users[user.email] = userData
    saveUsers(users)
    const nowMs = Date.now()
    if (nowMs - lastSyncRef.current > 60000) {
      lastSyncRef.current = nowMs
      syncWithRetry(user.email, userData)
    }
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
    const now = new Date().toISOString()
    const existing = userData.progress.chapterQuizScores[quizId]
    const history = existing?.history || []
    history.push({ score, total, date: now })
    userData.progress.chapterQuizScores[quizId] = {
      score, total, date: now,
      attempts: (existing?.attempts || 0) + 1,
      bestScore: Math.max(score, existing?.bestScore || 0),
      history: history.slice(-10),
    }
    userData.progress.lastActive = now
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
    userData.progress.lastActive = new Date().toISOString()

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
    userData.progress.lastActive = new Date().toISOString()
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
    userData.progress.lastActive = new Date().toISOString()

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
      updateProfile, updateProgress, touchLastActive, saveQuizScore,
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
