import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { recordPageVisit } from '../utils/analytics'

/**
 * Invisible component placed inside BrowserRouter.
 * Automatically tracks time spent on each page and updates lastActive.
 */
export default function PageTracker() {
  const location = useLocation()
  const { user, touchLastActive } = useAuth()
  const entryTimeRef = useRef(Date.now())
  const lastPathRef = useRef(location.pathname)
  const userRef = useRef(user?.email || null)

  // Keep userRef fresh & trigger touchLastActive when user becomes available
  useEffect(() => {
    const wasNull = !userRef.current
    userRef.current = user?.email || null
    // User just logged in or session restored → sync lastActive immediately
    if (wasNull && user?.email) touchLastActive()
  }, [user])

  // Track on route change
  useEffect(() => {
    const now = Date.now()
    const duration = Math.round((now - entryTimeRef.current) / 1000)

    recordPageVisit({
      path: lastPathRef.current,
      duration,
      userId: userRef.current,
    })

    // Update lastActive timestamp so Admin panel sees today's activity
    if (userRef.current) touchLastActive()

    // Reset for new page
    entryTimeRef.current = now
    lastPathRef.current = location.pathname
  }, [location.pathname])

  // Track on tab close / refresh
  useEffect(() => {
    const handleUnload = () => {
      const duration = Math.round((Date.now() - entryTimeRef.current) / 1000)
      recordPageVisit({
        path: lastPathRef.current,
        duration,
        userId: userRef.current,
      })
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [])

  return null
}
