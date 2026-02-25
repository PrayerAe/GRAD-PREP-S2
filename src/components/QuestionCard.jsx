import { CheckCircle, XCircle } from 'lucide-react'

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
}) {
  const letters = ['A', 'B', 'C', 'D']
  const progress = Math.round((questionNumber / totalQuestions) * 100)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-800 text-white text-sm font-bold flex items-center justify-center shadow-md">
              {questionNumber}
            </span>
            <span className="text-sm text-gray-400 font-medium">/ {totalQuestions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg font-medium">
              {question.topic}
            </span>
            {question.subtopic && (
              <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg font-medium hidden sm:inline">
                {question.subtopic}
              </span>
            )}
          </div>
        </div>

        {/* Question */}
        <p className="text-gray-800 font-medium text-[15px] leading-relaxed mb-5 whitespace-pre-line">
          {question.question}
        </p>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((opt, i) => {
            const isSelected = selectedAnswer === i
            const isCorrect = i === question.correctAnswer

            let containerCls = 'flex items-start gap-3 w-full px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-150 '

            if (!showResult) {
              containerCls += isSelected
                ? 'border-blue-700 bg-blue-50 shadow-md shadow-blue-100 cursor-pointer'
                : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50 text-gray-700 cursor-pointer'
            } else {
              if (isCorrect) containerCls += 'border-green-400 bg-green-50 cursor-default'
              else if (isSelected) containerCls += 'border-red-300 bg-red-50 cursor-default'
              else containerCls += 'border-gray-100 bg-gray-50/50 opacity-60 cursor-default'
            }

            const badgeCls = [
              'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all',
              !showResult && isSelected ? 'bg-blue-700 text-white shadow-md' : '',
              showResult && isCorrect ? 'bg-green-500 text-white' : '',
              showResult && isSelected && !isCorrect ? 'bg-red-400 text-white' : '',
              (!isSelected || (showResult && !isSelected)) && !(showResult && isCorrect) ? 'bg-gray-100 text-gray-500' : '',
            ].filter(Boolean).join(' ')

            return (
              <button
                key={i}
                className={containerCls}
                onClick={() => !showResult && onSelectAnswer && onSelectAnswer(i)}
                disabled={showResult}
              >
                <span className={badgeCls}>{letters[i]}</span>
                <span className={`text-sm leading-relaxed pt-0.5 flex-1 text-left ${
                  !showResult && isSelected ? 'text-blue-900 font-medium' : ''
                } ${showResult && isCorrect ? 'text-green-800 font-medium' : ''}
                  ${showResult && isSelected && !isCorrect ? 'text-red-700' : ''}
                `}>
                  {opt}
                </span>
                {showResult && isCorrect && <CheckCircle size={16} className="ml-1 flex-shrink-0 text-green-500 mt-0.5" />}
                {showResult && isSelected && !isCorrect && <XCircle size={16} className="ml-1 flex-shrink-0 text-red-400 mt-0.5" />}
              </button>
            )
          })}
        </div>

        {/* Explanation after result */}
        {showResult && (
          <div className="mt-5 p-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
            <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1.5">Penjelasan</p>
            <p className="text-sm text-amber-900 leading-relaxed">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}
