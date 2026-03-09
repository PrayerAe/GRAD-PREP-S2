import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Pause, Square, RotateCcw, Eye, EyeOff, Volume2, CheckCircle,
  XCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Settings, AlertCircle
} from 'lucide-react'

/**
 * ListeningSimulator — simulasi listening dengan Web Speech API (TTS nyata)
 *
 * Props:
 *  - passages: array of { title, type, context, script, questions, tips }
 *    script item: { speaker, text, speakerIndex? }  OR  string
 *  - color: 'blue' | 'emerald' | 'violet' | 'amber' | 'cyan' | 'rose'
 */
export default function ListeningSimulator({ passages = [], color = 'blue' }) {
  const [passageIdx, setPassageIdx] = useState(0)
  const [mode, setMode] = useState('intro')       // intro | practice
  const [showScript, setShowScript] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [playbackDone, setPlaybackDone] = useState(false)
  const [curLine, setCurLine] = useState(-1)
  const [curWord, setCurWord] = useState(-1)       // word index within current line
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [expandedExpl, setExpandedExpl] = useState({})
  const [speed, setSpeed] = useState(0.88)
  const [voices, setVoices] = useState([])
  const [ttsSupported, setTtsSupported] = useState(true)
  const [showSettings, setShowSettings] = useState(false)

  const speedRef = useRef(0.88)
  const stoppedRef = useRef(false)
  const lineIdxRef = useRef(0)
  const scriptRef = useRef([])

  const passage = passages[passageIdx] || {}
  const { title = '', type = 'lecture', context = '', script = [], questions = [], tips = [] } = passage

  // ── TTS Init ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setTtsSupported(false)
      return
    }
    const load = () => setVoices(window.speechSynthesis.getVoices())
    load()
    window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', load)
      window.speechSynthesis.cancel()
    }
  }, [])

  useEffect(() => { speedRef.current = speed }, [speed])
  useEffect(() => { scriptRef.current = script }, [script])

  // Reset when switching passages
  useEffect(() => {
    handleStop()
    setAnswers({})
    setSubmitted(false)
    setExpandedExpl({})
    setMode('intro')
  }, [passageIdx])

  // ── Voice selection ────────────────────────────────────────────────────────
  const pickVoice = useCallback((speakerIdx = 0) => {
    const en = voices.filter(v => v.lang.startsWith('en'))
    if (!en.length) return null
    // Alternate voices for different speakers
    const femaleKeywords = ['female', 'woman', 'zira', 'samantha', 'victoria', 'karen', 'moira', 'veena', 'fiona']
    const maleKeywords = ['male', 'man', 'david', 'mark', 'daniel', 'alex', 'fred', 'tom', 'george', 'lee']
    if (speakerIdx % 2 === 0) {
      const female = en.find(v => femaleKeywords.some(k => v.name.toLowerCase().includes(k)))
      if (female) return female
    } else {
      const male = en.find(v => maleKeywords.some(k => v.name.toLowerCase().includes(k)))
      if (male) return male
    }
    return en[speakerIdx % en.length] || en[0]
  }, [voices])

  // ── Core speech engine ─────────────────────────────────────────────────────
  const speakLine = useCallback((idx) => {
    const lines = scriptRef.current
    if (stoppedRef.current || idx >= lines.length) {
      if (!stoppedRef.current) {
        setIsPlaying(false)
        setPlaybackDone(true)
        setCurLine(-1)
        setCurWord(-1)
      }
      return
    }

    const line = lines[idx]
    const text = typeof line === 'string' ? line : line.text
    const speakerIdx = typeof line === 'object' ? (line.speakerIndex ?? 0) : 0

    setCurLine(idx)
    setCurWord(-1)

    const utt = new SpeechSynthesisUtterance(text)
    utt.lang = 'en-US'
    utt.rate = speedRef.current
    utt.pitch = 1.0 + (speakerIdx % 2 === 0 ? 0.05 : -0.05)

    const voice = pickVoice(speakerIdx)
    if (voice) utt.voice = voice

    // Word boundary highlighting
    const words = text.split(/\s+/)
    utt.onboundary = (e) => {
      if (e.name !== 'word') return
      let cumLen = 0
      for (let i = 0; i < words.length; i++) {
        if (cumLen >= e.charIndex) { setCurWord(i); break }
        cumLen += words[i].length + 1
      }
    }

    utt.onend = () => {
      if (stoppedRef.current) return
      lineIdxRef.current = idx + 1
      const pause = type === 'conversation' ? 350 : 200
      setTimeout(() => speakLine(idx + 1), pause)
    }

    utt.onerror = (e) => {
      if (e.error === 'interrupted' || e.error === 'canceled') return
      lineIdxRef.current = idx + 1
      setTimeout(() => speakLine(idx + 1), 200)
    }

    window.speechSynthesis.speak(utt)
  }, [pickVoice, type])

  const handlePlay = useCallback(() => {
    if (!ttsSupported) return
    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPlaying(true)
      setIsPaused(false)
      return
    }
    stoppedRef.current = false
    window.speechSynthesis.cancel()
    setPlaybackDone(false)
    setIsPlaying(true)
    setIsPaused(false)
    lineIdxRef.current = 0
    setTimeout(() => speakLine(0), 100)
  }, [ttsSupported, isPaused, speakLine])

  const handlePause = () => {
    window.speechSynthesis.pause()
    setIsPlaying(false)
    setIsPaused(true)
  }

  const handleStop = () => {
    stoppedRef.current = true
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    setCurLine(-1)
    setCurWord(-1)
    setPlaybackDone(false)
  }

  const handleReplay = () => {
    stoppedRef.current = false
    setPlaybackDone(false)
    setIsPlaying(true)
    setIsPaused(false)
    window.speechSynthesis.cancel()
    setTimeout(() => speakLine(0), 100)
  }

  // ── Palette ────────────────────────────────────────────────────────────────
  const palette = {
    blue:    { grad: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800', btn: 'bg-blue-600 hover:bg-blue-700', pill: 'bg-blue-600', lineHL: 'bg-blue-50 border-l-2 border-blue-400' },
    emerald: { grad: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', btn: 'bg-emerald-600 hover:bg-emerald-700', pill: 'bg-emerald-600', lineHL: 'bg-emerald-50 border-l-2 border-emerald-400' },
    cyan:    { grad: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800', btn: 'bg-cyan-600 hover:bg-cyan-700', pill: 'bg-cyan-600', lineHL: 'bg-cyan-50 border-l-2 border-cyan-400' },
    violet:  { grad: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-800', btn: 'bg-violet-600 hover:bg-violet-700', pill: 'bg-violet-600', lineHL: 'bg-violet-50 border-l-2 border-violet-400' },
    amber:   { grad: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', btn: 'bg-amber-600 hover:bg-amber-700', pill: 'bg-amber-600', lineHL: 'bg-amber-50 border-l-2 border-amber-400' },
    rose:    { grad: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-800', btn: 'bg-rose-600 hover:bg-rose-700', pill: 'bg-rose-600', lineHL: 'bg-rose-50 border-l-2 border-rose-400' },
  }
  const p = palette[color] || palette.blue

  const typeLabels = { conversation: 'Percakapan', lecture: 'Academic Lecture', monologue: 'Monolog' }
  const typeIcons  = { conversation: '🗣️', lecture: '🎓', monologue: '📢' }
  const score = questions.filter(q => answers[q.id] === q.correctAnswer).length

  // Progress bar for playback
  const totalLines = script.length
  const progressPct = totalLines > 0 && curLine >= 0 ? Math.round(((curLine + 1) / totalLines) * 100) : (playbackDone ? 100 : 0)

  // ── Passage Selector ───────────────────────────────────────────────────────
  const PassageSelector = () => (
    passages.length > 1 && (
      <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
        {passages.map((ps, i) => (
          <button
            key={i}
            onClick={() => setPassageIdx(i)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              passageIdx === i ? `bg-gradient-to-r ${p.grad} text-white shadow-sm` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>{typeIcons[ps.type] || '🎧'}</span>
            <span>{ps.shortTitle || `Passage ${i + 1}`}</span>
          </button>
        ))}
      </div>
    )
  )

  // ── INTRO MODE ─────────────────────────────────────────────────────────────
  if (mode === 'intro') {
    return (
      <div className={`rounded-2xl border-2 ${p.border} overflow-hidden my-4`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${p.grad} p-5 text-white`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              {typeIcons[type] || '🎧'}
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{typeLabels[type]}</p>
              <h3 className="font-bold text-base sm:text-lg leading-tight">{title}</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2.5 py-1 bg-white/15 rounded-lg text-xs font-medium">{questions.length} Soal</span>
            <span className="px-2.5 py-1 bg-white/15 rounded-lg text-xs font-medium">{script.length} Baris Dialog</span>
            {!ttsSupported && <span className="px-2.5 py-1 bg-red-500/40 rounded-lg text-xs font-medium">⚠ TTS tidak didukung browser ini</span>}
          </div>
        </div>

        <div className="p-5 space-y-4">
          <PassageSelector />

          {/* Context */}
          <div className={`${p.bg} rounded-xl p-4 border ${p.border}`}>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Situasi / Context</p>
            <p className="text-sm text-gray-700 leading-relaxed">{context}</p>
          </div>

          {/* Tips */}
          {tips.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Strategi Sebelum Mendengar</p>
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className={`w-5 h-5 rounded-full ${p.pill} text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5`}>{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <button
              onClick={() => { setMode('practice'); setShowScript(true) }}
              disabled={!ttsSupported}
              className={`flex-1 flex items-center justify-center gap-2 ${p.btn} disabled:opacity-40 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all shadow-md`}
            >
              <Volume2 size={16} />
              Mulai dengan Script
            </button>
            <button
              onClick={() => { setMode('practice'); setShowScript(false) }}
              disabled={!ttsSupported}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 disabled:opacity-40 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all shadow-md"
            >
              <EyeOff size={16} />
              Mode Tantangan
            </button>
          </div>

          {!ttsSupported && (
            <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-3">
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
              Browser kamu tidak mendukung Web Speech API. Coba Chrome atau Edge untuk pengalaman suara penuh.
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── PRACTICE MODE ──────────────────────────────────────────────────────────
  return (
    <div className={`rounded-2xl border-2 ${p.border} overflow-hidden my-4`}>
      {/* Playback Controls Bar */}
      <div className={`bg-gradient-to-r ${p.grad} px-4 py-3`}>
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-white flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-bold truncate">{title}</p>
            {/* Progress bar */}
            <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
              <div className="bg-white h-1.5 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {!isPlaying && !isPaused && !playbackDone && (
              <button onClick={handlePlay}
                className="w-9 h-9 bg-white text-gray-800 hover:bg-gray-100 rounded-lg flex items-center justify-center font-bold transition-colors shadow-sm">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
            )}
            {isPlaying && (
              <button onClick={handlePause}
                className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
                <Pause size={15} />
              </button>
            )}
            {isPaused && (
              <button onClick={handlePlay}
                className="w-9 h-9 bg-white text-gray-800 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors shadow-sm">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
            )}
            {(isPlaying || isPaused) && (
              <button onClick={handleStop}
                className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
                <Square size={13} fill="white" />
              </button>
            )}
            {playbackDone && (
              <button onClick={handleReplay}
                className="flex items-center gap-1.5 h-9 px-3 bg-white text-gray-800 hover:bg-gray-100 rounded-lg text-xs font-semibold transition-colors shadow-sm">
                <RotateCcw size={12} /> Ulangi
              </button>
            )}
            {/* Toggle script */}
            <button onClick={() => setShowScript(s => !s)}
              title={showScript ? 'Sembunyikan script' : 'Tampilkan script'}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
              {showScript ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
            {/* Settings */}
            <button onClick={() => setShowSettings(s => !s)}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center text-white transition-colors">
              <Settings size={14} />
            </button>
          </div>
        </div>

        {/* Speed settings */}
        {showSettings && (
          <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-3 flex-wrap">
            <span className="text-white/80 text-xs font-medium">Kecepatan:</span>
            {[
              { label: '0.7× (Lambat)', val: 0.7 },
              { label: '0.85× (Normal)', val: 0.85 },
              { label: '1.0× (Asli)', val: 1.0 },
              { label: '1.2× (Cepat)', val: 1.2 },
            ].map(opt => (
              <button
                key={opt.val}
                onClick={() => { setSpeed(opt.val); speedRef.current = opt.val }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  Math.abs(speed - opt.val) < 0.01 ? 'bg-white text-gray-800 shadow-sm' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Script display */}
      {showScript ? (
        <div className="p-4 border-b border-gray-100 bg-white">
          {passages.length > 1 && (
            <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
              {passages.map((ps, i) => (
                <button key={i} onClick={() => setPassageIdx(i)}
                  className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    passageIdx === i ? `bg-gradient-to-r ${p.grad} text-white shadow-sm` : 'bg-gray-100 text-gray-600'
                  }`}>
                  {ps.shortTitle || `Passage ${i + 1}`}
                </button>
              ))}
            </div>
          )}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
            {script.map((line, li) => {
              const text = typeof line === 'string' ? line : line.text
              const speaker = typeof line === 'object' ? line.speaker : null
              const words = text.split(/\s+/)
              const isCurrentLine = li === curLine

              return (
                <div
                  key={li}
                  className={`flex gap-3 p-2 rounded-lg transition-all duration-200 ${isCurrentLine ? p.lineHL : ''}`}
                >
                  {speaker && (
                    <span className={`flex-shrink-0 text-[11px] font-bold ${isCurrentLine ? p.text : 'text-gray-400'} w-24 pt-0.5 leading-snug`}>
                      {speaker}:
                    </span>
                  )}
                  <p className="text-sm leading-relaxed flex-1 flex flex-wrap gap-x-1">
                    {words.map((word, wi) => (
                      <span
                        key={wi}
                        className={`transition-all duration-75 ${
                          isCurrentLine && wi === curWord
                            ? `${p.badge} rounded px-0.5 font-semibold`
                            : isCurrentLine
                            ? 'text-gray-800'
                            : 'text-gray-500'
                        }`}
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
      ) : (
        <div className={`${p.bg} py-8 flex flex-col items-center gap-2 border-b ${p.border}`}>
          <EyeOff size={26} className={p.text} />
          <p className="text-sm font-medium text-gray-600">Mode Tantangan — Script disembunyikan</p>
          {isPlaying && <p className={`text-xs ${p.text} font-medium animate-pulse`}>🔊 Sedang diputar...</p>}
          <button onClick={() => setShowScript(true)} className={`mt-1 text-xs ${p.text} underline`}>Tampilkan Script</button>
        </div>
      )}

      {/* Questions */}
      <div className="p-4 bg-gray-50">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Comprehension Questions</p>
        <div className="space-y-4">
          {questions.map((q, qi) => (
            <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <p className="text-sm font-semibold text-gray-800 mb-3">{qi + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[q.id] === oi
                  const isCorrect = q.correctAnswer === oi
                  let cls = 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  if (submitted) {
                    if (isCorrect) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                    else if (isSelected) cls = 'border-red-400 bg-red-50 text-red-800'
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
                      <span className="flex-1">{opt}</span>
                      {submitted && isCorrect && <CheckCircle size={14} className="text-emerald-600 flex-shrink-0" />}
                      {submitted && isSelected && !isCorrect && <XCircle size={14} className="text-red-500 flex-shrink-0" />}
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
                <div className={`mt-2 p-3 rounded-lg ${p.bg} text-xs text-gray-700 leading-relaxed border ${p.border}`}>
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
            className={`mt-4 w-full ${p.btn} disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 text-sm font-semibold transition-all shadow-md`}
          >
            Cek Jawaban ({Object.keys(answers).length}/{questions.length})
          </button>
        )}

        {submitted && (
          <div className={`mt-4 p-4 rounded-xl ${p.bg} border ${p.border} flex items-center justify-between`}>
            <div>
              <p className={`text-lg font-bold ${p.text}`}>{score}/{questions.length} Benar</p>
              <p className="text-xs text-gray-500">
                {score === questions.length ? '🎉 Sempurna!' : score >= Math.ceil(questions.length * 0.7) ? '👍 Bagus!' : '📚 Perlu lebih banyak latihan'}
              </p>
            </div>
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); setExpandedExpl({}) }}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 bg-white rounded-lg px-3 py-2 transition-colors"
            >
              <RotateCcw size={12} /> Ulangi
            </button>
          </div>
        )}
      </div>

      <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center justify-between">
        <button onClick={() => { handleStop(); setMode('intro') }} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← Kembali ke Intro
        </button>
        {passages.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPassageIdx(i => Math.max(0, i - 1))}
              disabled={passageIdx === 0}
              className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            <span className="text-xs text-gray-400">{passageIdx + 1}/{passages.length}</span>
            <button
              onClick={() => setPassageIdx(i => Math.min(passages.length - 1, i + 1))}
              disabled={passageIdx === passages.length - 1}
              className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

