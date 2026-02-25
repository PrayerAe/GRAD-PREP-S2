/**
 * Firebase Configuration
 * Isi nilai dari: https://console.firebase.google.com
 * Project Settings → General → Your apps → Web app → SDK setup
 *
 * Letakkan di file .env.local:
 *   VITE_FIREBASE_API_KEY=xxx
 *   VITE_FIREBASE_AUTH_DOMAIN=xxx
 *   VITE_FIREBASE_PROJECT_ID=xxx
 *   VITE_FIREBASE_STORAGE_BUCKET=xxx
 *   VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
 *   VITE_FIREBASE_APP_ID=xxx
 */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID

export const isFirebaseConfigured = !!projectId

let db = null

if (isFirebaseConfigured) {
  try {
    const app = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    })
    db = getFirestore(app)
  } catch (e) {
    console.warn('[GradPrep] Firebase init failed:', e.message)
  }
}

export { db }
