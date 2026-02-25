/**
 * Firebase Configuration
 * Hardcoded config — Firebase API key adalah client-side identifier, bukan secret.
 * Keamanan ditangani oleh Firestore Security Rules di Firebase Console.
 */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6uGR4TxH4-XRVVVjxH9I0ngULiTjQadg',
  authDomain: 'gradprep-s2.firebaseapp.com',
  projectId: 'gradprep-s2',
  storageBucket: 'gradprep-s2.firebasestorage.app',
  messagingSenderId: '81120998146',
  appId: '1:81120998146:web:97d658a88074be8cb7081b',
}

let app = null
let db = null
let initError = null

try {
  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
} catch (e) {
  initError = e.message
  console.error('[GradPrep] Firebase init FAILED:', e.message)
}

export const isFirebaseConfigured = !!db
export { db, initError }
