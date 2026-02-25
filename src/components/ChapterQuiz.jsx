import { useState } from 'react'
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react'
import { getGrade } from './ScoreCard'

export default function ChapterQuiz({ title, questions }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const letters = ['A', 'B', 'C', 'D']
  const answered = Object.keys(answers).length
  const score = questions.filter((q, i) => answers[i] === q.correctAnswer).length
  const percent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const gradeInfo = getGrade(percent)

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="mt-8 border-t-2 border-dashed border-blue-200 pt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
          <Award size={20} className="text-amber-700" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-gray-900">Kuis: {title}</h3>
          <p className="text-xs text-gray-500">{questions.length} soal · Uji pemahamanmu</p>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {questions.map((q, qIdx) => (
          <div key={q.id} className={`p-5 rounded-xl border-2 transition-all ${
            submitted
              ? answers[qIdx] === q.correctAnswer
                ? 'border-green-300 bg-green-50/50'
                : answers[qIdx] !== undefined
                  ? 'border-red-300 bg-red-50/50'
                  : 'border-gray-200 bg-gray-50'
              : 'border-gray-200 bg-white'
          }`}>
            {/* Question header */}
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-800 text-white flex items-center justify-center text-xs font-bold">
                {qIdx + 1}
              </span>
              <p className="text-sm font-medium text-gray-800 leading-relaxed whitespace-pre-line">{q.question}</p>
            </div>

            {/* Options */}
            <div className="grid gap-2 ml-10">
              {q.options.map((opt, oIdx) => {
                const selected = answers[qIdx] === oIdx
                const correct = oIdx === q.correctAnswer

                let cls = 'flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-sm transition-all cursor-pointer '

                if (!submitted) {
                  cls += selected
                    ? 'border-blue-500 bg-blue-50 text-blue-900 font-medium'
                    : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/30'
                } else {
                  if (correct) cls += 'border-green-400 bg-green-50 text-green-800 font-medium'
                  else if (selected) cls += 'border-red-300 bg-red-50 text-red-700'
                  else cls += 'border-gray-200 text-gray-400'
                }

                return (
                  <button
                    key={oIdx}
                    className={cls}
                    disabled={submitted}
                    onClick={() => setAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                      ${selected && !submitted ? 'bg-blue-600 text-white' : ''}
                      ${submitted && correct ? 'bg-green-500 text-white' : ''}
                      ${submitted && selected && !correct ? 'bg-red-400 text-white' : ''}
                      ${!selected || (!submitted && !selected) ? 'bg-gray-100 text-gray-500' : ''}
                    `}>
                      {letters[oIdx]}
                    </span>
                    <span>{opt}</span>
                    {submitted && correct && <CheckCircle size={15} className="ml-auto text-green-500" />}
                    {submitted && selected && !correct && <XCircle size={15} className="ml-auto text-red-400" />}
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {submitted && (
              <div className="ml-10 mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs font-semibold text-amber-800 mb-0.5">Penjelasan:</p>
                <p className="text-xs text-amber-900 leading-relaxed">{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit / Score */}
      <div className="mt-6">
        {!submitted ? (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{answered}/{questions.length} dijawab</span>
            <button
              onClick={() => setSubmitted(true)}
              disabled={answered === 0}
              className="btn-accent text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Cek Jawaban
            </button>
          </div>
        ) : (
          <div className={`rounded-xl border-2 p-5 ${gradeInfo.bg}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{gradeInfo.icon}</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-heading font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
                    <span className={`text-sm font-semibold ${gradeInfo.color}`}>{gradeInfo.label}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Skor: <strong>{score}/{questions.length}</strong> ({percent}% benar)
                  </p>
                </div>
              </div>
              <button onClick={handleReset} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-800 transition-colors">
                <RotateCcw size={14} />
                Ulangi
              </button>
            </div>

            {/* Mini breakdown */}
            <div className="mt-3 flex gap-4 text-sm">
              <span className="text-green-600 font-medium">✓ Benar: {score}</span>
              <span className="text-red-500 font-medium">✗ Salah: {questions.length - score}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
