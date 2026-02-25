import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react'

export function getGrade(percent) {
  if (percent >= 90) return { grade: 'A', label: 'Sangat Baik', color: 'text-green-700', bg: 'bg-green-50 border-green-200', icon: '🏆' }
  if (percent >= 80) return { grade: 'B', label: 'Baik', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200', icon: '⭐' }
  if (percent >= 70) return { grade: 'C', label: 'Cukup', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', icon: '👍' }
  if (percent >= 60) return { grade: 'D', label: 'Kurang', color: 'text-orange-700', bg: 'bg-orange-50 border-orange-200', icon: '📖' }
  return { grade: 'E', label: 'Sangat Kurang', color: 'text-red-700', bg: 'bg-red-50 border-red-200', icon: '📚' }
}

export function getScoreColor(percent) {
  if (percent >= 80) return 'text-green-600'
  if (percent >= 60) return 'text-amber-600'
  return 'text-red-500'
}

export default function ScoreCard({ score, total, title, showGrade = true }) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0
  const { grade, label, color, bg, icon } = getGrade(percent)

  return (
    <div className={`rounded-2xl border p-6 text-center ${bg}`}>
      {title && <p className="text-sm font-medium text-gray-500 mb-3">{title}</p>}

      {/* Score */}
      <div className="mb-2">
        <span className={`text-5xl font-heading font-bold ${color}`}>{score}</span>
        <span className="text-xl text-gray-400">/{total}</span>
      </div>

      {/* Percentage */}
      <div className={`text-lg font-semibold ${color} mb-3`}>
        {percent}%
      </div>

      {/* Grade badge */}
      {showGrade && (
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">{icon}</span>
          <div>
            <span className={`text-3xl font-heading font-bold ${color}`}>{grade}</span>
            <p className={`text-sm font-medium ${color}`}>{label}</p>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div className="mt-4 w-full bg-white/60 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${
            percent >= 80 ? 'bg-green-500' : percent >= 60 ? 'bg-amber-400' : 'bg-red-400'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
