export default function ProgressBar({ value = 0, color = 'bg-blue-600', label, showPercent = true }) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercent && <span className="text-sm font-semibold text-blue-800">{clamped}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
