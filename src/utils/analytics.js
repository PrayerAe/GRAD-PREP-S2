/**
 * GradPrep Analytics Utility
 * Tracks page visits, session duration, device & browser info
 * Stored in localStorage under 'gradprep_analytics'
 */

export const ANALYTICS_KEY = 'gradprep_analytics'

// --- Device & Browser Detection ---

export function getDeviceType() {
  const ua = navigator.userAgent
  if (/Mobi|Android|iPhone|iPod/i.test(ua)) return 'Mobile'
  if (/iPad|Tablet/i.test(ua)) return 'Tablet'
  if (window.innerWidth < 768) return 'Mobile'
  if (window.innerWidth < 1024) return 'Tablet'
  return 'Desktop'
}

export function getBrowser() {
  const ua = navigator.userAgent
  if (ua.includes('Edg')) return 'Edge'
  if (ua.includes('OPR') || ua.includes('Opera')) return 'Opera'
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Safari')) return 'Safari'
  return 'Other'
}

export function getOS() {
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'Windows'
  if (/Mac OS X/i.test(ua)) return 'macOS'
  if (/Android/i.test(ua)) return 'Android'
  if (/iPhone|iPad/i.test(ua)) return 'iOS'
  if (/Linux/i.test(ua)) return 'Linux'
  return 'Other'
}

// --- Page Name Mapping ---

export function getPageLabel(path) {
  if (path === '/') return 'Landing'
  if (path === '/dashboard') return 'Dashboard'
  if (path === '/materi/matematika') return 'Materi Matematika'
  if (path === '/materi/english') return 'Materi Bahasa Inggris'
  if (path.startsWith('/latihan')) return `Latihan (${path.split('/').pop()})`
  if (path === '/tryout') return 'Tryout Simulasi'
  if (path === '/profile') return 'Profil'
  if (path === '/login') return 'Login'
  if (path === '/admin') return 'Admin Panel'
  return path
}

// --- Load / Save ---

export function loadAnalytics() {
  try {
    const raw = localStorage.getItem(ANALYTICS_KEY)
    return raw ? JSON.parse(raw) : createEmptyAnalytics()
  } catch {
    return createEmptyAnalytics()
  }
}

function createEmptyAnalytics() {
  return {
    pageVisits: [],        // array of visit objects
    createdAt: new Date().toISOString(),
  }
}

function saveAnalytics(data) {
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data))
  } catch {/* storage full – ignore */ }
}

// --- Record a page visit ---

export function recordPageVisit({ path, duration, userId }) {
  if (duration < 2) return // skip bounces under 2 seconds
  const analytics = loadAnalytics()
  const visit = {
    path,
    label: getPageLabel(path),
    duration,               // seconds
    device: getDeviceType(),
    browser: getBrowser(),
    os: getOS(),
    date: new Date().toISOString(),
    userId: userId || null,
  }
  // Keep last 1000 visits
  analytics.pageVisits = [visit, ...(analytics.pageVisits || [])].slice(0, 1000)
  saveAnalytics(analytics)
}

// --- Aggregate helpers (used by Admin panel) ---

export function getAnalyticsSummary() {
  const { pageVisits = [] } = loadAnalytics()

  // Device distribution
  const deviceMap = {}
  const browserMap = {}
  const osMap = {}
  const pageMap = {}
  let totalDuration = 0
  const today = new Date().toDateString()
  let todaySessions = 0

  pageVisits.forEach(v => {
    deviceMap[v.device] = (deviceMap[v.device] || 0) + 1
    browserMap[v.browser] = (browserMap[v.browser] || 0) + 1
    osMap[v.os] = (osMap[v.os] || 0) + 1
    totalDuration += v.duration || 0

    if (!pageMap[v.label]) pageMap[v.label] = { visits: 0, totalDuration: 0 }
    pageMap[v.label].visits += 1
    pageMap[v.label].totalDuration += v.duration || 0

    if (new Date(v.date).toDateString() === today) todaySessions++
  })

  const deviceStats = Object.entries(deviceMap).map(([name, value]) => ({ name, value }))
  const browserStats = Object.entries(browserMap).map(([name, value]) => ({ name, value }))
  const osStats = Object.entries(osMap).map(([name, value]) => ({ name, value }))
  const pageStats = Object.entries(pageMap)
    .map(([name, d]) => ({ name, visits: d.visits, avgDuration: Math.round(d.totalDuration / d.visits) }))
    .sort((a, b) => b.visits - a.visits)

  return {
    totalVisits: pageVisits.length,
    todaySessions,
    avgDuration: pageVisits.length ? Math.round(totalDuration / pageVisits.length) : 0,
    deviceStats,
    browserStats,
    osStats,
    pageStats,
    recentVisits: pageVisits.slice(0, 50),
  }
}

export function formatDuration(seconds) {
  if (!seconds) return '0s'
  if (seconds < 60) return `${seconds}s`
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}
