/**
 * Firestore Service Layer
 * Semua operasi baca/tulis ke Firebase Firestore ada di sini.
 * Jika Firebase belum dikonfigurasi, semua fungsi ini langsung return null/void.
 */
import { db, isFirebaseConfigured } from '../firebase'
import {
  doc, setDoc, collection, addDoc,
  getDocs, query, orderBy, limit, onSnapshot,
} from 'firebase/firestore'

// Encode email agar aman sebagai Firestore document ID (titik → koma)
const encodeEmail = (email) => email.replace(/\./g, ',')

// ─────────────────────────────────────────────
// USER SYNC
// ─────────────────────────────────────────────

/**
 * Tulis/update data user ke Firestore.
 * Dipanggil saat: register, login, update progress, save hasil latihan/tryout.
 */
export async function syncUserToFirestore(email, userData) {
  if (!isFirebaseConfigured || !db) return
  try {
    await setDoc(
      doc(db, 'users', encodeEmail(email)),
      {
        email,
        name: userData.name || '',
        target: userData.target || '',
        avatar: userData.avatar || '',
        isAdmin: userData.isAdmin || false,
        createdAt: userData.createdAt || new Date().toISOString(),
        lastActive: new Date().toISOString(),
        mathProgress: userData.progress?.mathProgress || 0,
        englishProgress: userData.progress?.englishProgress || 0,
        lastTryoutScore: userData.progress?.lastTryoutScore || 0,
        latihanCount: (userData.progress?.latihanHistory || []).length,
        tryoutCount: (userData.progress?.tryoutHistory || []).length,
        // Simpan riwayat terakhir (5 entry) untuk preview
        recentLatihan: (userData.progress?.latihanHistory || []).slice(0, 5),
        recentTryout: (userData.progress?.tryoutHistory || []).slice(0, 5),
      },
      { merge: true }
    )
  } catch (e) {
    console.warn('[GradPrep] Firestore user sync failed:', e.message)
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
      .filter(u => !u.isAdmin) // sembunyikan admin dari daftar user
  } catch (e) {
    console.warn('[GradPrep] Firestore getAllUsers failed:', e.message)
    return null
  }
}

/**
 * Real-time listener untuk user list (admin dashboard live update).
 * Return unsubscribe function.
 */
export function listenToUsers(callback) {
  if (!isFirebaseConfigured || !db) {
    callback(null)
    return () => {}
  }
  const q = query(collection(db, 'users'), orderBy('lastActive', 'desc'))
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
