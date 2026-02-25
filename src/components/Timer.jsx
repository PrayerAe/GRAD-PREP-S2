import { useState, useEffect, useCallback } from 'react'
import { Clock } from 'lucide-react'

export default function Timer({ initialSeconds = 5400, onTimeUp }) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [running, setRunning] = useState(true)

  const formatTime = useCallback((secs) => {
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = secs % 60
    if (h > 0) {
      return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }, [])

  useEffect(() => {
    if (!running) return
    if (seconds <= 0) {
      onTimeUp?.()
      return
    }
    const id = setTimeout(() => setSeconds(s => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds, running, onTimeUp])

  const isWarning = seconds <= 300  // last 5 minutes
  const isDanger = seconds <= 60    // last 1 minute

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg
      ${isDanger ? 'bg-red-100 text-red-700 animate-pulse' : isWarning ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-800'}`}>
      <Clock size={20} />
      <span>{formatTime(seconds)}</span>
    </div>
  )
}
