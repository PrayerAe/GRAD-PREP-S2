import { useState, useEffect, useRef } from 'react'
import { Play, Pause, RotateCcw, Eye, EyeOff, Volume2, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react'

/**
 * ListeningSimulator — komponen simulasi latihan listening
 * Menampilkan script teks yang terungkap kata per kata seperti membaca sambil mendengar,
 * dilengkapi soal comprehension dan strategi tips.
 *
 * Props:
 *  - title: string
 *  - type: 'conversation' | 'lecture' | 'monologue'
 *  - context: string (setting/konteks situasi)
 *  - script: array of { speaker, text } or just string lines for monologue
 *  - questions: array of { id, question, options, correctAnswer, explanation }
 *  - tips: array of strings
 *  - color: tailwind color name (emerald | blue | violet | amber)
 */
export default function ListeningSimulator({ title, type = 'lecture', context, script = [], questions = [], tips = [], color = 'blue' }) {
  const [mode, setMode] = useState('intro') // intro | practice | review
  const [showScript, setShowScript] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [expandedExpl, setExpandedExpl] = useState({})
  const intervalRef = useRef(null)

  const palette = {
    blue:    { grad: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800', btn: 'bg-blue-600 hover:bg-blue-700', light: 'bg-blue-600' },
    emerald: { grad: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', btn: 'bg-emerald-600 hover:bg-emerald-700', light: 'bg-emerald-600' },
    violet:  { grad: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-800', btn: 'bg-violet-600 hover:bg-violet-700', light: 'bg-violet-600' },
    amber:   { grad: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700', light: 'bg-amber-600' },
  }
  const p = palette[color] || palette.blue

  // Build flat word list from script
  const allWords = script.flatMap((line, li) =>
    (typeof line === 'string' ? line : line.text).split(' ').map((w, wi) => ({ word: w, lineIndex: li, wordPos: wi }))
  )
  const totalWords = allWords.length

  // Simulate "audio playback" by progressively revealing words
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setWordIndex(prev => {
          if (prev >= totalWords - 1) {
            setIsPlaying(false)
            clearInterval(intervalRef.current)
            return prev
          }
          return prev + 1
        })
      }, 180) // ~180ms per word
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, totalWords])

  const handlePlay = () => {
    if (wordIndex >= totalWords - 1) {
      setWordIndex(0)
    }
    setIsPlaying(true)
    setShowScript(true)
  }
  const handleReset = () => {
    setIsPlaying(false)
    setWordIndex(0)
  }

  const score = questions.length > 0 ? questions.filter(q => answers[q.id] === q.correctAnswer).length : 0

  const typeLabels = { conversation: 'Percakapan', lecture: 'Lecture Akademik', monologue: 'Monolog' }
  const typeIcons = { conversation: '🗣️', lecture: '🎓', monologue: '📢' }

  if (mode === 'intro') {
    return (
      <div className={`rounded-2xl border-2 ${p.border} overflow-hidden my-6`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${p.grad} p-5 text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">
              {typeIcons[type]}
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-widest">{typeLabels[type]}</p>
              <h3 className="font-bold text-lg">{title}</h3>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <span className="px-2.5 py-1 bg-white/15 rounded-lg text-xs font-medium">{questions.length} Soal</span>
            <span className="px-2.5 py-1 bg-white/15 rounded-lg text-xs font-medium">{totalWords} Kata</span>
            <span className="px-2.5 py-1 bg-white/15 rounded-lg text-xs font-medium">~{Math.ceil(totalWords * 0.18 / 60)} Menit</span>
          </div>
        </div>

        {/* Context */}
        <div className={`${p.bg} px-5 py-4 border-b ${p.border}`}>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Konteks / Setting</p>
          <p className="text-sm text-gray-700">{context}</p>
        </div>

        {/* Tips */}
        {tips.length > 0 && (
          <div className="px-5 py-4 border-b border-gray-100">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Strategi Sebelum Mendengar</p>
            <ul className="space-y-2">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className={`w-5 h-5 rounded-full ${p.light} text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5`}>{i + 1}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="px-5 py-4 bg-gray-50 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => { setMode('practice'); setShowScript(true); setWordIndex(0) }}
            className={`flex-1 flex items-center justify-center gap-2 ${p.btn} text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all shadow-md`}
          >
            <Volume2 size={16} />
            Mulai Latihan (Lihat Script)
          </button>
          <button
            onClick={() => { setMode('practice'); setShowScript(false); setWordIndex(0) }}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all shadow-md"
          >
            <EyeOff size={16} />
            Mode Tantangan (Tanpa Script)
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'practice') {
    // Figure out which words are "revealed" based on wordIndex
    const revealedByLine = {}
    allWords.slice(0, wordIndex + 1).forEach(({ lineIndex, wordPos }) => {
      if (!revealedByLine[lineIndex]) revealedByLine[lineIndex] = 0
      revealedByLine[lineIndex] = Math.max(revealedByLine[lineIndex], wordPos + 1)
    })

    return (
      <div className={`rounded-2xl border-2 ${p.border} overflow-hidden my-6`}>
        {/* Playback bar */}
        <div className={`bg-gradient-to-r ${p.grad} px-5 py-3 flex items-center gap-3`}>
          <Volume2 size={18} className="text-white" />
          <div className="flex-1">
            <p className="text-white text-sm font-bold">{title}</p>
            <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
              <div
                className="bg-white rounded-full h-1.5 transition-all duration-200"
                style={{ width: `${totalWords > 0 ? (wordIndex / (totalWords - 1)) * 100 : 0}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handlePlay} disabled={isPlaying}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors disabled:opacity-40">
              <Play size={14} />
            </button>
            <button onClick={() => setIsPlaying(false)} disabled={!isPlaying}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors disabled:opacity-40">
              <Pause size={14} />
            </button>
            <button onClick={handleReset}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
              <RotateCcw size={14} />
            </button>
            <button onClick={() => { setWordIndex(totalWords - 1); setIsPlaying(false) }}
              className="px-3 h-8 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-colors">
              Show All
            </button>
          </div>
          <button onClick={() => setShowScript(s => !s)}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
            {showScript ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>

        {/* Script panel */}
        {showScript && (
          <div className="p-5 border-b border-gray-100 bg-white">
            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {script.map((line, li) => {
                const lineText = typeof line === 'string' ? line : line.text
                const speaker = typeof line === 'string' ? null : line.speaker
                const words = lineText.split(' ')
                const revealedCount = revealedByLine[li] || 0

                return (
                  <div key={li} className="flex gap-3">
                    {speaker && (
                      <span className={`flex-shrink-0 text-xs font-bold ${p.text} w-20 pt-0.5`}>{speaker}:</span>
                    )}
                    <p className="text-sm text-gray-700 leading-relaxed flex-1 flex flex-wrap gap-x-1">
                      {words.map((word, wi) => (
                        <span
                          key={wi}
                          className={`transition-all duration-100 ${wi < revealedCount ? 'opacity-100' : 'opacity-0 select-none'}`}
                        >
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {!showScript && (
          <div className={`${p.bg} py-8 flex flex-col items-center gap-2 border-b ${p.border}`}>
            <EyeOff size={28} className={p.text} />
            <p className="text-sm font-medium text-gray-600">Mode Tantangan: Script disembunyikan</p>
            <button onClick={() => setShowScript(true)} className={`mt-1 text-xs ${p.text} underline`}>Tampilkan Script</button>
          </div>
        )}

        {/* Questions */}
        <div className="p-5 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Comprehension Questions</p>
            {!submitted && (
              <button
                onClick={() => setMode('review')}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
              >
                Lihat tanpa menjawab →
              </button>
            )}
          </div>
          <div className="space-y-5">
            {questions.map((q, qi) => (
              <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-800 mb-3">{qi + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const isSelected = answers[q.id] === oi
                    const isCorrect = q.correctAnswer === oi
                    let cls = 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    if (submitted) {
                      if (isCorrect) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                      else if (isSelected && !isCorrect) cls = 'border-red-400 bg-red-50 text-red-800'
                    } else if (isSelected) {
                      cls = `border-2 ${p.border} ${p.bg} ${p.text} font-medium`
                    }
                    return (
                      <button
                        key={oi}
                        disabled={submitted}
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: oi }))}
                        className={`w-full text-left text-sm px-3 py-2.5 rounded-lg border transition-all flex items-center gap-2 ${cls}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        {opt}
                        {submitted && isCorrect && <CheckCircle size={14} className="text-emerald-600 ml-auto flex-shrink-0" />}
                        {submitted && isSelected && !isCorrect && <XCircle size={14} className="text-red-500 ml-auto flex-shrink-0" />}
                      </button>
                    )
                  })}
                </div>
                {submitted && (
                  <button
                    onClick={() => setExpandedExpl(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                    className={`mt-3 flex items-center gap-1 text-xs ${p.text} font-medium`}
                  >
                    Penjelasan {expandedExpl[q.id] ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                )}
                {submitted && expandedExpl[q.id] && (
                  <div className={`mt-2 p-3 rounded-lg ${p.bg} text-xs text-gray-700 leading-relaxed`}>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!submitted && questions.length > 0 && (
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length < questions.length}
              className={`mt-5 w-full ${p.btn} disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 text-sm font-semibold transition-all shadow-md`}
            >
              Cek Jawaban ({Object.keys(answers).length}/{questions.length} dijawab)
            </button>
          )}

          {submitted && (
            <div className={`mt-5 p-4 rounded-xl ${p.bg} border ${p.border} flex items-center justify-between`}>
              <div>
                <p className={`text-lg font-bold ${p.text}`}>{score}/{questions.length} Benar</p>
                <p className="text-xs text-gray-500">
                  {score === questions.length ? '🎉 Sempurna!' : score >= questions.length * 0.7 ? '👍 Bagus!' : '📚 Perlu latihan lebih'}
                </p>
              </div>
              <button
                onClick={() => { setAnswers({}); setSubmitted(false); setWordIndex(0); setExpandedExpl({}) }}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg px-3 py-2 transition-colors"
              >
                <RotateCcw size={13} /> Ulangi
              </button>
            </div>
          )}
        </div>

        <div className="px-5 py-3 bg-white border-t border-gray-100 flex justify-between">
          <button onClick={() => setMode('intro')} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Kembali
          </button>
        </div>
      </div>
    )
  }

  return null
}
