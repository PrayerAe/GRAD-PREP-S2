/**
 * Firestore Service Layer
 * Semua operasi baca/tulis ke Firebase Firestore ada di sini.
 * Jika Firebase belum dikonfigurasi, semua fungsi ini langsung return null/void.
 */
import { db, isFirebaseConfigured } from '../firebase'
import {
  doc, getDoc, setDoc, deleteDoc, collection, addDoc,
  getDocs, query, orderBy, limit, onSnapshot,
} from 'firebase/firestore'

// Encode email agar aman sebagai Firestore document ID (titik → koma)
const encodeEmail = (email) => email.replace(/\./g, ',')

// ─────────────────────────────────────────────
// USER SYNC
// ─────────────────────────────────────────────

/**
 * Tulis/update data user ke Firestore.
 * Menyimpan struktur nested `progress` agar kompatibel dengan Admin panel.
 */
export async function syncUserToFirestore(email, userData) {
  if (!isFirebaseConfigured || !db) {
    console.error('[GradPrep] Firebase NOT configured — sync skipped for:', email)
    return false
  }
  try {
    const now = new Date().toISOString()
    const latihanHistory = userData.progress?.latihanHistory || []
    const tryoutHistory = userData.progress?.tryoutHistory || []
    await setDoc(
      doc(db, 'users', encodeEmail(email)),
      {
        email,
        name: userData.name || '',
        target: userData.target || '',
        avatar: userData.avatar || '',
        isAdmin: userData.isAdmin || false,
        createdAt: userData.createdAt || now,
        // Top-level lastActive untuk ordering query
        lastActive: now,
        // Nested progress object — Admin.jsx membaca u.progress.*
        progress: {
          lastActive: now,
          mathProgress: userData.progress?.mathProgress || 0,
          englishProgress: userData.progress?.englishProgress || 0,
          lastTryoutScore: userData.progress?.lastTryoutScore || 0,
          latihanHistory: latihanHistory.slice(0, 20),
          tryoutHistory: tryoutHistory.slice(0, 20),
          completedChapters: userData.progress?.completedChapters || { math: [], english: [] },
          chapterQuizScores: userData.progress?.chapterQuizScores || {},
          streak: userData.progress?.streak || 0,
          totalStudyTime: userData.progress?.totalStudyTime || 0,
        },
        // Flat summary fields untuk query/filter mudah
        mathProgress: userData.progress?.mathProgress || 0,
        englishProgress: userData.progress?.englishProgress || 0,
        lastTryoutScore: userData.progress?.lastTryoutScore || 0,
        latihanCount: latihanHistory.length,
        tryoutCount: tryoutHistory.length,
      },
      { merge: true }
    )
    return true
  } catch (e) {
    console.error('[GradPrep] Firestore user sync FAILED:', email, e.message)
    return false
  }
}

/**
 * Hapus user dari Firestore (admin only).
 */
export async function deleteUserFromFirestore(email) {
  if (!isFirebaseConfigured || !db) return
  try {
    await deleteDoc(doc(db, 'users', encodeEmail(email)))
  } catch (e) {
    console.warn('[GradPrep] Firestore delete user failed:', e.message)
  }
}

/**
 * Ambil semua user dari Firestore (admin only).
 * Return null jika Firebase tidak dikonfigurasi.
 */
export async function getAllUsersFromFirestore() {
  if (!isFirebaseConfigured || !db) return null
  try {
    const snapshot = await getDocs(
      query(collection(db, 'users'), orderBy('lastActive', 'desc'))
    )
    return snapshot.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(u => !u.isAdmin)
  } catch (e) {
    console.warn('[GradPrep] Firestore getAllUsers failed:', e.message)
    return null
  }
}

/**
 * Real-time listener untuk user list (admin dashboard live update).
 * Langsung getDocs dulu agar data muncul cepat, lalu onSnapshot untuk real-time.
 * Return unsubscribe function.
 */
export function listenToUsers(callback) {
  if (!isFirebaseConfigured || !db) {
    callback(null)
    return () => {}
  }
  const q = query(collection(db, 'users'), orderBy('lastActive', 'desc'))

  // Ambil data awal secara cepat (tanpa menunggu WebSocket)
  getDocs(q)
    .then((snapshot) => {
      const users = snapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(u => !u.isAdmin)
      callback(users)
    })
    .catch(() => {})

  // Set up real-time listener (WebSocket — update otomatis setelahnya)
  return onSnapshot(q, (snapshot) => {
    const users = snapshot.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(u => !u.isAdmin)
    callback(users)
  }, (e) => {
    console.warn('[GradPrep] Firestore users listener error:', e.message)
    callback(null)
  })
}

// ─────────────────────────────────────────────
// PAGE ANALYTICS SYNC
// ─────────────────────────────────────────────

/**
 * Tulis satu page visit event ke Firestore.
 * Dipanggil dari recordPageVisit() di analytics.js.
 */
export async function syncPageVisitToFirestore(visitData) {
  if (!isFirebaseConfigured || !db) return
  try {
    await addDoc(collection(db, 'pageVisits'), {
      ...visitData,
      serverTimestamp: new Date().toISOString(),
    })
  } catch (e) {
    console.warn('[GradPrep] Firestore analytics sync failed:', e.message)
  }
}

/**
 * Ambil page visits dari Firestore (admin only).
 * Return null jika Firebase tidak dikonfigurasi.
 */
export async function getPageVisitsFromFirestore(limitCount = 200) {
  if (!isFirebaseConfigured || !db) return null
  try {
    const q = query(
      collection(db, 'pageVisits'),
      orderBy('serverTimestamp', 'desc'),
      limit(limitCount)
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
  } catch (e) {
    console.warn('[GradPrep] Firestore getPageVisits failed:', e.message)
    return null
  }
}

/**
 * Real-time listener untuk page visits (admin dashboard live update).
 */
export function listenToPageVisits(callback, limitCount = 200) {
  if (!isFirebaseConfigured || !db) {
    callback(null)
    return () => {}
  }
  const q = query(
    collection(db, 'pageVisits'),
    orderBy('serverTimestamp', 'desc'),
    limit(limitCount)
  )
  return onSnapshot(q, (snapshot) => {
    const visits = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    callback(visits)
  }, (e) => {
    console.warn('[GradPrep] Firestore pageVisits listener error:', e.message)
    callback(null)
  })
}

// ─────────────────────────────────────────────
// FORCE LOGOUT (SESSION INVALIDATION)
// ─────────────────────────────────────────────

/**
 * Admin: set timestamp force logout global.
 * Semua user yang session-nya lebih lama dari timestamp ini akan auto-logout.
 */
export async function setForceLogoutTimestamp() {
  if (!isFirebaseConfigured || !db) return
  try {
    await setDoc(
      doc(db, 'config', 'global'),
      { forceLogoutAt: new Date().toISOString() },
      { merge: true }
    )
  } catch (e) {
    console.warn('[GradPrep] Force logout set failed:', e.message)
  }
}

/**
 * Cek timestamp force logout dari Firestore.
 * Return ISO string atau null jika belum pernah di-set.
 */
export async function getForceLogoutTimestamp() {
  if (!isFirebaseConfigured || !db) return null
  try {
    const snap = await getDoc(doc(db, 'config', 'global'))
    return snap.exists() ? (snap.data().forceLogoutAt || null) : null
  } catch {
    return null
  }
}
