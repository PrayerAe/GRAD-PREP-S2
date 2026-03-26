/**
 * Authentication Service via Firestore
 * Menggantikan Firebase Auth — langsung simpan/verifikasi credentials di Firestore.
 * Ini memungkinkan cross-device login tanpa perlu mengaktifkan Firebase Auth.
 */
import { db, isFirebaseConfigured } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

// Simple hash function (SHA-256 via SubtleCrypto)
async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + '_gradprep_salt_2026')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Encode email as Firestore doc ID
const encodeEmail = (email) => email.replace(/\./g, ',')

/**
 * Register user di Firestore (credentials collection).
 * Return: { ok: true } atau { ok: false, error: '...' }
 */
export async function registerInFirestore(email, password) {
  if (!isFirebaseConfigured || !db) {
    return { ok: false, error: 'Database belum siap. Coba lagi.' }
  }
  try {
    const docRef = doc(db, 'credentials', encodeEmail(email))
    const existing = await getDoc(docRef)
    if (existing.exists()) {
      return { ok: false, error: 'Email sudah terdaftar. Coba login.' }
    }
    const hashedPw = await hashPassword(password)
    await setDoc(docRef, {
      email,
      passwordHash: hashedPw,
      createdAt: new Date().toISOString(),
    })
    return { ok: true }
  } catch (e) {
    console.error('[GradPrep] Register in Firestore failed:', e.message)
    return { ok: false, error: 'Gagal mendaftar. Coba lagi.' }
  }
}

/**
 * Verify login credentials dari Firestore.
 * Return: { ok: true } atau { ok: false, error: '...' }
 */
export async function verifyLoginInFirestore(email, password) {
  if (!isFirebaseConfigured || !db) {
    return { ok: false, error: 'Database belum siap. Coba lagi.' }
  }
  try {
    const docRef = doc(db, 'credentials', encodeEmail(email))
    const snap = await getDoc(docRef)
    if (!snap.exists()) {
      return { ok: false, error: 'Email tidak ditemukan.' }
    }
    const data = snap.data()
    const hashedPw = await hashPassword(password)
    if (data.passwordHash !== hashedPw) {
      return { ok: false, error: 'Password salah.' }
    }
    return { ok: true }
  } catch (e) {
    console.error('[GradPrep] Login verify failed:', e.message)
    return { ok: false, error: 'Gagal login. Coba lagi.' }
  }
}

/**
 * Migrasi: simpan credentials user yang sudah ada di localStorage ke Firestore.
 * Dipanggil saat user login/register untuk memastikan credentials tersimpan di cloud.
 */
export async function ensureCredentialsInFirestore(email, password) {
  if (!isFirebaseConfigured || !db) return
  try {
    const docRef = doc(db, 'credentials', encodeEmail(email))
    const existing = await getDoc(docRef)
    if (!existing.exists()) {
      const hashedPw = await hashPassword(password)
      await setDoc(docRef, {
        email,
        passwordHash: hashedPw,
        createdAt: new Date().toISOString(),
      })
    }
  } catch (e) {
    console.warn('[GradPrep] Credential migration failed:', e.message)
  }
}
