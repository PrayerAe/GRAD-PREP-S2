// Rich JSX content for each math chapter – dengan visual diagrams dan contoh interaktif
import { useState } from 'react'
import { mathSectionQuiz } from './mathSectionQuiz'

// ── Shared visual components ──────────────────────────────────────────────

export function FormulaCard({ children, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    rose: 'bg-rose-50 border-rose-200 text-rose-900',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
  }
  return (
    <div className={`border-2 rounded-xl px-5 py-4 my-4 font-mono text-sm ${colors[color]}`}>
      {children}
    </div>
  )
}

export function ExampleBox({ children, label = 'Contoh' }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{label}</p>
      {children}
    </div>
  )
}

export function TipBox({ children, type = 'tip' }) {
  const styles = {
    tip:     'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-300 text-amber-800',
    info:    'bg-violet-50 border-violet-200 text-violet-800',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  }
  const icons = { tip: '💡', warning: '⚠️', info: 'ℹ️', success: '✅' }
  return (
    <div className={`border rounded-xl px-4 py-3 my-4 flex items-start gap-3 text-sm ${styles[type]}`}>
      <span className="text-base flex-shrink-0 mt-0.5">{icons[type]}</span>
      <div>{children}</div>
    </div>
  )
}

export function StepList({ steps }) {
  return (
    <ol className="my-3 space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
            {i + 1}
          </span>
          <span className="text-gray-700 leading-relaxed pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  )
}

export function ConceptGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          {item.example && (
            <p className="font-mono text-xs text-blue-700 mt-2 bg-blue-50 px-2 py-1 rounded-lg">{item.example}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Cheatsheet component ────────────────────────────────────────────────────
export function CheatSheet({ title, items, color = 'blue' }) {
  const palettes = {
    blue:    { bg: 'bg-blue-50', border: 'border-blue-200', header: 'bg-blue-600', badge: 'bg-blue-100 text-blue-800', text: 'text-blue-900' },
    purple:  { bg: 'bg-purple-50', border: 'border-purple-200', header: 'bg-purple-600', badge: 'bg-purple-100 text-purple-800', text: 'text-purple-900' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', header: 'bg-emerald-600', badge: 'bg-emerald-100 text-emerald-800', text: 'text-emerald-900' },
    rose:    { bg: 'bg-rose-50', border: 'border-rose-200', header: 'bg-rose-600', badge: 'bg-rose-100 text-rose-800', text: 'text-rose-900' },
    amber:   { bg: 'bg-amber-50', border: 'border-amber-200', header: 'bg-amber-600', badge: 'bg-amber-100 text-amber-800', text: 'text-amber-900' },
    teal:    { bg: 'bg-teal-50', border: 'border-teal-200', header: 'bg-teal-600', badge: 'bg-teal-100 text-teal-800', text: 'text-teal-900' },
    violet:  { bg: 'bg-violet-50', border: 'border-violet-200', header: 'bg-violet-600', badge: 'bg-violet-100 text-violet-800', text: 'text-violet-900' },
  }
  const p = palettes[color] || palettes.blue
  return (
    <div className={`my-6 rounded-xl border-2 ${p.border} overflow-hidden`}>
      <div className={`${p.header} px-4 py-2.5 flex items-center gap-2`}>
        <span className="text-white text-sm">📋</span>
        <span className="text-white text-sm font-bold tracking-wide">CHEATSHEET</span>
        {title && <span className="text-white/70 text-xs ml-1">— {title}</span>}
      </div>
      <div className={`${p.bg} p-4`}>
        <div className="grid gap-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className={`flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${p.badge} mt-0.5`}>{i + 1}</span>
              <div className="min-w-0">
                {item.label && <span className={`font-bold text-xs ${p.text}`}>{item.label}: </span>}
                <span className="text-xs text-gray-700 leading-relaxed">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Interactive components ──────────────────────────────────────────────────

// RevealBox — klik untuk reveal jawaban/penjelasan
export function RevealBox({ question, answer, color = 'blue' }) {
  const [open, setOpen] = useState(false)
  const colors = {
    blue: { border: 'border-blue-200', bg: 'bg-blue-50', btn: 'bg-blue-600 hover:bg-blue-700', text: 'text-blue-800', light: 'bg-blue-100' },
    purple: { border: 'border-purple-200', bg: 'bg-purple-50', btn: 'bg-purple-600 hover:bg-purple-700', text: 'text-purple-800', light: 'bg-purple-100' },
    emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50', btn: 'bg-emerald-600 hover:bg-emerald-700', text: 'text-emerald-800', light: 'bg-emerald-100' },
    rose: { border: 'border-rose-200', bg: 'bg-rose-50', btn: 'bg-rose-600 hover:bg-rose-700', text: 'text-rose-800', light: 'bg-rose-100' },
    amber: { border: 'border-amber-200', bg: 'bg-amber-50', btn: 'bg-amber-600 hover:bg-amber-700', text: 'text-amber-800', light: 'bg-amber-100' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className={`my-4 border-2 ${c.border} rounded-xl overflow-hidden`}>
      <div className={`${c.bg} px-4 py-3`}>
        <p className={`text-sm font-semibold ${c.text}`}>{question}</p>
      </div>
      {!open ? (
        <div className="px-4 py-3 flex justify-center">
          <button onClick={() => setOpen(true)} className={`${c.btn} text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-1.5`}>
            <span>👆</span> Klik untuk lihat jawaban
          </button>
        </div>
      ) : (
        <div className={`px-4 py-3 border-t ${c.border} animate-fade-in-up`}>
          <div className="flex items-start gap-2">
            <span className={`flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${c.light} ${c.text} mt-0.5`}>✓</span>
            <div className="text-sm text-gray-700 leading-relaxed">{answer}</div>
          </div>
        </div>
      )}
    </div>
  )
}

// AccordionList — expandable/collapsible items
export function AccordionList({ items, color = 'blue' }) {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)
  const colors = {
    blue: { border: 'border-blue-100', active: 'bg-blue-50 text-blue-800', icon: 'text-blue-500' },
    purple: { border: 'border-purple-100', active: 'bg-purple-50 text-purple-800', icon: 'text-purple-500' },
    emerald: { border: 'border-emerald-100', active: 'bg-emerald-50 text-emerald-800', icon: 'text-emerald-500' },
    rose: { border: 'border-rose-100', active: 'bg-rose-50 text-rose-800', icon: 'text-rose-500' },
    amber: { border: 'border-amber-100', active: 'bg-amber-50 text-amber-800', icon: 'text-amber-500' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className="my-4 space-y-2">
      {items.map((item, i) => (
        <div key={i} className={`border ${c.border} rounded-xl overflow-hidden transition-all`}>
          <button onClick={() => toggle(i)} className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${openIdx === i ? c.active : 'hover:bg-gray-50'}`}>
            <span className={`flex-shrink-0 text-lg transition-transform duration-200 ${openIdx === i ? 'rotate-90' : ''} ${c.icon}`}>▶</span>
            <span className="text-sm font-semibold text-gray-800 flex-1">{item.title}</span>
            {openIdx === i && <span className="text-xs text-gray-400">tutup</span>}
          </button>
          {openIdx === i && (
            <div className="px-4 pb-4 pt-1 text-sm text-gray-700 leading-relaxed animate-fade-in-up">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// MiniQuiz — inline 1-soal quiz dalam materi
export function MiniQuiz({ question, options, correctIndex, explanation, color = 'blue' }) {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const letters = ['A', 'B', 'C', 'D']
  const isCorrect = selected === correctIndex
  const colors = {
    blue: { header: 'bg-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    purple: { header: 'bg-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    emerald: { header: 'bg-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    rose: { header: 'bg-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
    amber: { header: 'bg-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className={`my-5 border-2 ${c.border} rounded-xl overflow-hidden`}>
      <div className={`${c.header} px-4 py-2.5 flex items-center gap-2`}>
        <span className="text-white text-sm">🧠</span>
        <span className="text-white text-sm font-bold">Coba Jawab!</span>
      </div>
      <div className={`${c.bg} p-4`}>
        <p className="text-sm font-semibold text-gray-800 mb-3">{question}</p>
        <div className="space-y-2">
          {options.map((opt, i) => {
            let cls = 'flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-sm transition-all cursor-pointer '
            if (!submitted) {
              cls += selected === i ? 'border-blue-500 bg-white text-blue-900 font-medium shadow-sm' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
            } else {
              if (i === correctIndex) cls += 'border-green-400 bg-green-50 text-green-800 font-medium'
              else if (i === selected) cls += 'border-red-300 bg-red-50 text-red-700'
              else cls += 'border-gray-200 bg-gray-50 text-gray-400'
            }
            return (
              <button key={i} className={cls} disabled={submitted} onClick={() => setSelected(i)}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                  ${submitted && i === correctIndex ? 'bg-green-500 text-white' : ''}
                  ${submitted && i === selected && i !== correctIndex ? 'bg-red-400 text-white' : ''}
                  ${!submitted && selected === i ? 'bg-blue-600 text-white' : ''}
                  ${(!submitted && selected !== i) || (submitted && i !== correctIndex && i !== selected) ? 'bg-gray-100 text-gray-500' : ''}
                `}>{letters[i]}</span>
                <span>{opt}</span>
                {submitted && i === correctIndex && <span className="ml-auto text-green-500 text-xs">✓ Benar</span>}
                {submitted && i === selected && i !== correctIndex && <span className="ml-auto text-red-400 text-xs">✗ Salah</span>}
              </button>
            )
          })}
        </div>
        {!submitted ? (
          <button
            onClick={() => selected !== null && setSubmitted(true)}
            disabled={selected === null}
            className="mt-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm"
          >
            Cek Jawaban
          </button>
        ) : (
          <div className={`mt-3 p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className={`text-xs font-bold mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>
              {isCorrect ? '🎉 Benar!' : '💡 Penjelasan:'}
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">{explanation}</p>
            <button onClick={() => { setSelected(null); setSubmitted(false) }} className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-semibold">
              ↻ Coba lagi
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// TabCard — tabbed content, klik tab untuk ganti konten
export function TabCard({ tabs, color = 'blue' }) {
  const [active, setActive] = useState(0)
  const colors = {
    blue: { active: 'bg-blue-600 text-white shadow-sm', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    purple: { active: 'bg-purple-600 text-white shadow-sm', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    emerald: { active: 'bg-emerald-600 text-white shadow-sm', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    rose: { active: 'bg-rose-600 text-white shadow-sm', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
    amber: { active: 'bg-amber-600 text-white shadow-sm', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
  }
  const c = colors[color] || colors.blue
  return (
    <div className="my-4 border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex gap-1 p-2 bg-gray-50 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${active === i ? c.active : c.inactive}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-700 leading-relaxed">
        {tabs[active]?.content}
      </div>
    </div>
  )
}

// MatchGame — cocokkan pasangan (drag-free: klik kiri lalu klik kanan)
export function MatchGame({ pairs, color = 'blue' }) {
  const [selectedLeft, setSelectedLeft] = useState(null)
  const [matched, setMatched] = useState({}) // { leftIdx: rightIdx }
  const [wrong, setWrong] = useState(null)
  const [shuffledRight] = useState(() => {
    const arr = pairs.map((_, i) => i)
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]] }
    return arr
  })
  const allMatched = Object.keys(matched).length === pairs.length
  const colors = {
    blue: { header: 'bg-blue-600', border: 'border-blue-200', bg: 'bg-blue-50', sel: 'ring-2 ring-blue-500 bg-blue-100' },
    purple: { header: 'bg-purple-600', border: 'border-purple-200', bg: 'bg-purple-50', sel: 'ring-2 ring-purple-500 bg-purple-100' },
    emerald: { header: 'bg-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50', sel: 'ring-2 ring-emerald-500 bg-emerald-100' },
    rose: { header: 'bg-rose-600', border: 'border-rose-200', bg: 'bg-rose-50', sel: 'ring-2 ring-rose-500 bg-rose-100' },
    amber: { header: 'bg-amber-600', border: 'border-amber-200', bg: 'bg-amber-50', sel: 'ring-2 ring-amber-500 bg-amber-100' },
  }
  const c = colors[color] || colors.blue

  const handleRight = (rightIdx) => {
    if (selectedLeft === null) return
    if (shuffledRight[rightIdx] === selectedLeft) {
      setMatched(prev => ({ ...prev, [selectedLeft]: rightIdx }))
      setSelectedLeft(null)
      setWrong(null)
    } else {
      setWrong(rightIdx)
      setTimeout(() => setWrong(null), 600)
    }
  }

  const reset = () => { setSelectedLeft(null); setMatched({}); setWrong(null) }

  return (
    <div className={`my-5 border-2 ${c.border} rounded-xl overflow-hidden`}>
      <div className={`${c.header} px-4 py-2.5 flex items-center gap-2`}>
        <span className="text-white text-sm">🔗</span>
        <span className="text-white text-sm font-bold">Cocokkan Pasangan</span>
        <span className="text-white/60 text-xs ml-auto">{Object.keys(matched).length}/{pairs.length}</span>
      </div>
      <div className={`${c.bg} p-4`}>
        {!allMatched ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Soal</p>
              {pairs.map((pair, i) => {
                const isMatched = matched[i] !== undefined
                return (
                  <button key={i} disabled={isMatched}
                    onClick={() => setSelectedLeft(selectedLeft === i ? null : i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                      isMatched ? 'bg-green-50 border-green-300 text-green-700 cursor-default'
                      : selectedLeft === i ? c.sel
                      : 'bg-white border-gray-200 hover:border-blue-300 cursor-pointer'
                    }`}
                  >{isMatched && '✓ '}{pair.left}</button>
                )
              })}
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Jawaban</p>
              {shuffledRight.map((origIdx, i) => {
                const isMatched = Object.values(matched).includes(i)
                const isWrong = wrong === i
                return (
                  <button key={i} disabled={isMatched}
                    onClick={() => handleRight(i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                      isMatched ? 'bg-green-50 border-green-300 text-green-700 cursor-default'
                      : isWrong ? 'bg-red-50 border-red-300 text-red-700 animate-shake'
                      : 'bg-white border-gray-200 hover:border-blue-300 cursor-pointer'
                    }`}
                  >{isMatched && '✓ '}{pairs[origIdx].right}</button>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-sm font-bold text-green-700">Semua cocok! Kamu hebat!</p>
            <button onClick={reset} className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-semibold">↻ Main lagi</button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── QuizBank — bank soal per sub-bab dengan refresh ──────────────────────
function shuffleArr(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function QuizBank({ questions, color = 'blue' }) {
  const SHOW = Math.min(5, questions.length)
  const [pool, setPool] = useState(() => shuffleArr(questions).slice(0, SHOW))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const letters = ['A', 'B', 'C', 'D']

  const colors = {
    blue: { header: 'bg-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', bar: 'bg-blue-500', barBg: 'bg-blue-100' },
    purple: { header: 'bg-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', bar: 'bg-purple-500', barBg: 'bg-purple-100' },
    emerald: { header: 'bg-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'bg-emerald-500', barBg: 'bg-emerald-100' },
    rose: { header: 'bg-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', bar: 'bg-rose-500', barBg: 'bg-rose-100' },
    amber: { header: 'bg-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', bar: 'bg-amber-500', barBg: 'bg-amber-100' },
  }
  const c = colors[color] || colors.blue
  const current = pool[idx]
  const finished = idx >= SHOW
  const isCorrect = selected === current?.correctIndex
  const pct = Math.round(((idx + (submitted ? 1 : 0)) / SHOW) * 100)

  const check = () => {
    if (selected === null) return
    setSubmitted(true)
    if (selected === current.correctIndex) setScore(s => s + 1)
  }
  const next = () => { setIdx(i => i + 1); setSelected(null); setSubmitted(false) }
  const refresh = () => { setPool(shuffleArr(questions).slice(0, SHOW)); setIdx(0); setSelected(null); setSubmitted(false); setScore(0) }
  const retry = () => { setIdx(0); setSelected(null); setSubmitted(false); setScore(0) }

  if (finished) {
    const pctScore = Math.round((score / SHOW) * 100)
    const emoji = pctScore >= 80 ? '🎉' : pctScore >= 60 ? '👍' : '💪'
    return (
      <div className={`my-6 border-2 ${c.border} rounded-xl overflow-hidden`}>
        <div className={`${c.header} px-4 py-2.5 flex items-center gap-2`}>
          <span className="text-white text-sm">📝</span>
          <span className="text-white text-sm font-bold">Bank Soal</span>
          <span className="text-white/60 text-xs ml-auto">{questions.length} soal tersedia</span>
        </div>
        <div className={`${c.bg} p-5 text-center`}>
          <p className="text-3xl mb-2">{emoji}</p>
          <p className="text-lg font-bold text-gray-900">Skor: {score}/{SHOW}</p>
          <p className="text-sm text-gray-600 mb-1">{pctScore}% benar</p>
          <div className="flex gap-3 text-xs mb-4 justify-center">
            <span className="text-green-600 font-medium">✓ Benar: {score}</span>
            <span className="text-red-500 font-medium">✗ Salah: {SHOW - score}</span>
          </div>
          <div className="flex gap-2 justify-center">
            <button onClick={retry} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded-lg transition-all">↻ Ulangi</button>
            <button onClick={refresh} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all shadow-sm">🔄 Soal Baru</button>
          </div>
          <p className="text-[10px] text-gray-400 mt-3">Soal diambil acak dari {questions.length} bank soal. Klik "Soal Baru" untuk latihan lagi.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`my-6 border-2 ${c.border} rounded-xl overflow-hidden`}>
      <div className={`${c.header} px-4 py-2.5 flex items-center gap-2`}>
        <span className="text-white text-sm">📝</span>
        <span className="text-white text-sm font-bold">Bank Soal</span>
        <span className="text-white/60 text-xs ml-auto">Soal {idx + 1}/{SHOW}</span>
      </div>
      {/* Progress bar */}
      <div className={`h-1.5 ${c.barBg}`}>
        <div className={`h-full ${c.bar} transition-all duration-300`} style={{ width: `${pct}%` }} />
      </div>
      <div className={`${c.bg} p-4`}>
        <p className="text-sm font-semibold text-gray-800 mb-3 whitespace-pre-line">{current.question}</p>
        <div className="space-y-2">
          {current.options.map((opt, i) => {
            let cls = 'flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-sm transition-all cursor-pointer '
            if (!submitted) {
              cls += selected === i ? 'border-blue-500 bg-white text-blue-900 font-medium shadow-sm' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
            } else {
              if (i === current.correctIndex) cls += 'border-green-400 bg-green-50 text-green-800 font-medium'
              else if (i === selected) cls += 'border-red-300 bg-red-50 text-red-700'
              else cls += 'border-gray-200 bg-gray-50 text-gray-400'
            }
            return (
              <button key={i} className={cls} disabled={submitted} onClick={() => setSelected(i)}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                  ${submitted && i === current.correctIndex ? 'bg-green-500 text-white' : ''}
                  ${submitted && i === selected && i !== current.correctIndex ? 'bg-red-400 text-white' : ''}
                  ${!submitted && selected === i ? 'bg-blue-600 text-white' : ''}
                  ${(!submitted && selected !== i) || (submitted && i !== current.correctIndex && i !== selected) ? 'bg-gray-100 text-gray-500' : ''}
                `}>{letters[i]}</span>
                <span>{opt}</span>
                {submitted && i === current.correctIndex && <span className="ml-auto text-green-500 text-xs font-bold">✓</span>}
                {submitted && i === selected && i !== current.correctIndex && <span className="ml-auto text-red-400 text-xs font-bold">✗</span>}
              </button>
            )
          })}
        </div>
        {!submitted ? (
          <button onClick={check} disabled={selected === null} className="mt-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm">
            Cek Jawaban
          </button>
        ) : (
          <div className="mt-3">
            <div className={`p-3 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
              <p className={`text-xs font-bold mb-1 ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>
                {isCorrect ? '🎉 Benar!' : '💡 Penjelasan:'}
              </p>
              <p className="text-xs text-gray-700 leading-relaxed">{current.explanation}</p>
            </div>
            <button onClick={next} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm">
              {idx < SHOW - 1 ? 'Soal Berikutnya →' : 'Lihat Skor →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Number line SVG for inequalities
export function NumberLine({ solution, label }) {
  return (
    <div className="my-4">
      <p className="text-xs text-gray-500 mb-2 font-medium">{label}</p>
      <svg viewBox="0 0 320 60" className="w-full max-w-sm h-14">
        {/* axis */}
        <line x1="20" y1="30" x2="300" y2="30" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="298,26 310,30 298,34" fill="#94a3b8" />
        {/* ticks */}
        {[60, 100, 140, 180, 220, 260].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="25" x2={x} y2="35" stroke="#94a3b8" strokeWidth="1.5" />
            <text x={x} y="50" textAnchor="middle" fontSize="9" fill="#64748b">{i}</text>
          </g>
        ))}
        {/* solution region */}
        <line x1="180" y1="30" x2="290" y2="30" stroke="#2563eb" strokeWidth="4" />
        <circle cx="180" cy="30" r="6" fill="white" stroke="#2563eb" strokeWidth="2.5" />
        <text x="280" y="50" fontSize="9" fill="#2563eb" fontWeight="bold">∞</text>
        <text x="180" y="18" textAnchor="middle" fontSize="9" fill="#2563eb" fontWeight="bold">x = 4</text>
      </svg>
      <p className="text-xs text-blue-700 font-medium">{solution}</p>
    </div>
  )
}

// Balance scale SVG for equations
export function BalanceScale({ left, right }) {
  return (
    <div className="flex flex-col items-center my-5">
      <svg viewBox="0 0 240 130" className="w-48 h-28">
        {/* pivot */}
        <polygon points="120,50 113,90 127,90" fill="#94a3b8" />
        <rect x="108" y="90" width="24" height="8" rx="2" fill="#94a3b8" />
        {/* beam */}
        <rect x="30" y="47" width="180" height="6" rx="3" fill="#475569" />
        {/* left pan string */}
        <line x1="60" y1="53" x2="60" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="40" y1="80" x2="80" y2="80" stroke="#475569" strokeWidth="2.5" />
        {/* right pan string */}
        <line x1="180" y1="53" x2="180" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="160" y1="80" x2="200" y2="80" stroke="#475569" strokeWidth="2.5" />
        {/* left text */}
        <text x="60" y="76" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">{left}</text>
        {/* right text */}
        <text x="180" y="76" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">{right}</text>
        {/* equal sign */}
        <text x="120" y="115" textAnchor="middle" fontSize="11" fill="#10b981" fontWeight="bold">Setara ✓</text>
      </svg>
    </div>
  )
}

// Venn diagram for probability
export function VennDiagram() {
  return (
    <svg viewBox="0 0 280 130" className="w-full max-w-xs h-28 my-3">
      <ellipse cx="100" cy="65" rx="65" ry="45" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" fillOpacity="0.7" />
      <ellipse cx="180" cy="65" rx="65" ry="45" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" fillOpacity="0.7" />
      <text x="70" y="65" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="bold">A</text>
      <text x="210" y="65" textAnchor="middle" fontSize="11" fill="#be185d" fontWeight="bold">B</text>
      <text x="140" y="62" textAnchor="middle" fontSize="9" fill="#4b5563" fontWeight="bold">A∩B</text>
      <text x="15" y="20" fontSize="9" fill="#1d4ed8">P(A)</text>
      <text x="215" y="20" fontSize="9" fill="#be185d">P(B)</text>
    </svg>
  )
}

// Simple bar chart SVG for statistics
export function MeanMedianVisual({ data }) {
  const sorted = [...data].sort((a, b) => a - b)
  const mean = data.reduce((s, x) => s + x, 0) / data.length
  const n = sorted.length
  const median = n % 2 === 1 ? sorted[Math.floor(n / 2)] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2
  const max = Math.max(...data)
  const barW = 32
  const gap = 12
  const totalW = data.length * (barW + gap)

  return (
    <div className="my-4 overflow-x-auto">
      <svg viewBox={`0 0 ${totalW + 40} 120`} className="h-28 w-full max-w-sm">
        {data.map((v, i) => {
          const h = (v / max) * 70
          const x = 20 + i * (barW + gap)
          const isMed = sorted.indexOf(v) === Math.floor(n / 2) && n % 2 === 1
          return (
            <g key={i}>
              <rect x={x} y={80 - h} width={barW} height={h}
                fill={isMed ? '#8b5cf6' : '#3b82f6'}
                rx="4" />
              <text x={x + barW / 2} y="100" textAnchor="middle" fontSize="10" fill="#475569">{v}</text>
            </g>
          )
        })}
        {/* mean line */}
        <line x1="20" y1={80 - (mean / max) * 70} x2={totalW + 10} y2={80 - (mean / max) * 70}
          stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3" />
        <text x={totalW + 12} y={80 - (mean / max) * 70 + 4} fontSize="9" fill="#ef4444">x̄={mean}</text>
      </svg>
      <div className="flex gap-4 text-xs mt-1">
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded inline-block" /> Data biasa</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 bg-violet-500 rounded inline-block" /> Median</span>
        <span className="flex items-center gap-1"><span className="w-3 h-1 bg-red-500 inline-block" /> Mean</span>
      </div>
    </div>
  )
}

// Derivative tangent line SVG
export function DerivativeVisual() {
  return (
    <svg viewBox="0 0 260 140" className="w-full max-w-xs h-32 my-3">
      {/* axes */}
      <line x1="30" y1="10" x2="30" y2="125" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="20" y1="115" x2="250" y2="115" stroke="#94a3b8" strokeWidth="1.5" />
      <polygon points="30,8 26,18 34,18" fill="#94a3b8" />
      <polygon points="252,115 242,111 242,119" fill="#94a3b8" />
      <text x="240" y="128" fontSize="9" fill="#94a3b8">x</text>
      <text x="34" y="14" fontSize="9" fill="#94a3b8">y</text>
      {/* curve f(x) = x² scaled */}
      <path d="M40,110 Q80,85 110,70 Q140,55 170,40 Q195,28 220,18"
        fill="none" stroke="#3b82f6" strokeWidth="2.5" />
      {/* tangent at x=3 → point (170,40) */}
      <circle cx="170" cy="40" r="4" fill="#ef4444" />
      <line x1="130" y1="64" x2="210" y2="16" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="135" y="105" fontSize="9" fill="#3b82f6">f(x) = x²</text>
      <text x="135" y="80" fontSize="9" fill="#ef4444">Garis Tangen</text>
      <text x="155" y="35" fontSize="9" fill="#ef4444">(x₀, f(x₀))</text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER CONTENT — returns array of section JSX
// ─────────────────────────────────────────────────────────────────────────────

export const mathSections = {

  // ── 1. ALJABAR ─────────────────────────────────────────────────────────────
  aljabar: [
    {
      title: 'Operasi Bentuk Aljabar',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TPA/SIMAK UI/UM UGM):</strong> Aljabar muncul di hampir semua tes masuk S2. Fokus pada penyederhanaan bentuk aljabar, persamaan & pertidaksamaan linear-kuadrat, sistem persamaan, logaritma, matriks, dan barisan/deret. Level soal menuntut kecepatan dan ketelitian.
        </TipBox>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Aljabar menggunakan <strong>variabel</strong> (huruf) untuk mewakili bilangan yang belum diketahui.
          Kunci utamanya adalah memahami <em>suku sejenis</em>.
        </p>
        <ConceptGrid items={[
          { title: 'Suku Sejenis', desc: 'Variabel dan pangkat SAMA, bisa digabung.', example: '3x + 5x = 8x  ✓' },
          { title: 'Suku Tidak Sejenis', desc: 'Variabel BERBEDA, tidak bisa digabung.', example: '3x + 5y  (tetap)' },
          { title: 'Aturan Distributif', desc: 'a × (b + c) = ab + ac', example: '2(x + 4) = 2x + 8' },
          { title: 'Pemfaktoran', desc: 'Kebalikan distributif — cari faktor sekutu.', example: '2x + 8 = 2(x + 4)' },
        ]} />
        <TipBox type="tip">
          <strong>Trik cepat:</strong> Sebelum menggabungkan suku, tandai setiap variabel dengan warna berbeda.
          Semua yang warnanya sama boleh dijumlahkan.
        </TipBox>
        <MiniQuiz
          question="Sederhanakan: 3x² + 5x − 2x² + x"
          options={['x² + 6x', '5x² + 6x', 'x² + 4x', '3x² + 6x']}
          correctIndex={0}
          explanation="Kelompokkan suku sejenis: (3x² − 2x²) + (5x + x) = x² + 6x. Ingat, hanya suku dengan variabel DAN pangkat yang sama bisa digabung."
          color="blue"
        />
        <RevealBox
          question="Faktorkan: x² − 9"
          answer={<span>Ini adalah <strong>selisih kuadrat</strong>: x² − 9 = x² − 3² = <strong>(x + 3)(x − 3)</strong>. Rumus: a² − b² = (a+b)(a−b)</span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[0]} color="blue" />
      </>,
    },
    {
      title: 'Persamaan Linear',
      body: <>
        <p className="text-sm text-gray-700 mb-3">
          Persamaan linear memiliki pangkat tertinggi variabel = 1. Bayangkan sebagai <strong>timbangan</strong> —
          kedua sisi harus selalu seimbang.
        </p>
        <BalanceScale left="2x + 3" right="11" />
        <FormulaCard color="blue">
          <p className="font-bold mb-2">Bentuk umum:  ax + b = c</p>
          <p className="text-blue-700 text-xs">Langkah: pindahkan konstanta → bagi koefisien</p>
        </FormulaCard>
        <ExampleBox label="Penyelesaian Langkah-Demi-Langkah">
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-3">
              <span className="w-24 text-right text-gray-500">Diketahui:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">2x + 3 = 11</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-right text-gray-400 text-xs">−3 kedua sisi</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg">2x = 11 − 3 = 8</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-right text-gray-400 text-xs">÷2 kedua sisi</span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg font-bold">x = 4  ✓</span>
            </div>
          </div>
        </ExampleBox>
        <TipBox type="warning">
          <strong>Jangan lupa:</strong> Apapun yang kamu lakukan pada satu sisi, HARUS dilakukan juga pada sisi lain.
        </TipBox>
        <MiniQuiz
          question="Jika 5x − 7 = 18, berapa nilai x?"
          options={['3', '5', '11', '25']}
          correctIndex={1}
          explanation="5x − 7 = 18 → 5x = 18 + 7 = 25 → x = 25 ÷ 5 = 5"
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[1]} color="blue" />
      </>,
    },
    {
      title: 'Sistem Persamaan Linear',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Dua atau lebih persamaan yang harus dipenuhi <strong>secara bersamaan</strong>.
          Ada dua metode utama: Substitusi dan Eliminasi.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-3">🔄 Metode Substitusi</p>
            <div className="font-mono text-xs text-blue-800 space-y-1.5">
              <p>x + y = 7 &nbsp;&nbsp;...(1)</p>
              <p>x − y = 3 &nbsp;&nbsp;...(2)</p>
              <div className="border-t border-blue-200 my-2 pt-2">
                <p className="text-gray-500">Dari (2): x = 3 + y</p>
                <p className="text-gray-500">Substitusi ke (1):</p>
                <p className="text-gray-500">(3 + y) + y = 7</p>
                <p className="text-gray-500">2y = 4 → <strong className="text-blue-800">y = 2</strong></p>
                <p className="text-gray-500">x = 3 + 2 = <strong className="text-blue-800">5</strong></p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-900 text-sm mb-3">➕ Metode Eliminasi</p>
            <div className="font-mono text-xs text-purple-800 space-y-1.5">
              <p>x + y = 7 &nbsp;&nbsp;...(1)</p>
              <p>x − y = 3 &nbsp;&nbsp;...(2)</p>
              <div className="border-t border-purple-200 my-2 pt-2">
                <p className="text-gray-500">(1) + (2):</p>
                <p className="text-gray-500">2x = 10</p>
                <p><strong className="text-purple-800">x = 5</strong></p>
                <p className="text-gray-500">Substitusi: 5 + y = 7</p>
                <p><strong className="text-purple-800">y = 2</strong></p>
              </div>
            </div>
          </div>
        </div>
        <TipBox type="tip">
          <strong>Kapan pakai apa?</strong> Gunakan eliminasi jika koefisien variabel sudah sama atau mudah disamakan.
          Gunakan substitusi jika salah satu persamaan sudah berbentuk "x = ..." atau "y = ...".
        </TipBox>
        <MiniQuiz
          question="Jika 2x + y = 10 dan x − y = 2, berapa nilai x?"
          options={['3', '4', '5', '6']}
          correctIndex={1}
          explanation="Eliminasi: (2x + y) + (x − y) = 10 + 2 → 3x = 12 → x = 4. Lalu y = 10 − 2(4) = 2."
          color="blue"
        />
        <RevealBox
          question="Harga 2 buku dan 3 pensil = Rp16.000. Harga 1 buku dan 2 pensil = Rp9.000. Berapa harga 1 buku?"
          answer={<span>Misal buku = x, pensil = y. <br/>2x + 3y = 16.000 ...(1) <br/>x + 2y = 9.000 ...(2) <br/>Dari (2): x = 9.000 − 2y → substitusi ke (1): <br/>2(9.000 − 2y) + 3y = 16.000 → 18.000 − 4y + 3y = 16.000 → y = 2.000 <br/>x = 9.000 − 4.000 = <strong>Rp5.000</strong></span>}
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[2]} color="blue" />
      </>,
    },
    {
      title: 'Pertidaksamaan Linear',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Mirip persamaan, namun menggunakan tanda <strong>&lt;, &gt;, ≤, ≥</strong>.
          Solusinya berupa <em>himpunan bilangan</em>, bukan satu nilai tunggal.
        </p>
        <TipBox type="warning">
          <strong>Aturan penting:</strong> Jika dikalikan atau dibagi dengan bilangan <u>negatif</u>,
          tanda pertidaksamaan harus <strong>DIBALIK</strong>!
        </TipBox>
        <ExampleBox label="Contoh Penyelesaian">
          <div className="font-mono text-sm space-y-1.5">
            <p className="text-gray-800">2x + 3 &gt; 11</p>
            <p className="text-gray-500 text-xs pl-2">−3 kedua sisi:</p>
            <p className="text-gray-800 pl-4">2x &gt; 8</p>
            <p className="text-gray-500 text-xs pl-2">÷2 kedua sisi:</p>
            <p className="text-emerald-700 font-bold pl-4">x &gt; 4</p>
          </div>
        </ExampleBox>
        <NumberLine solution="Himpunan penyelesaian: x ∈ (4, ∞)" label="Visualisasi garis bilangan:" />
        <ExampleBox label="Contoh dengan Bilangan Negatif (Tanda Berbalik)">
          <div className="font-mono text-sm space-y-1.5">
            <p className="text-gray-800">−3x &gt; 12</p>
            <p className="text-gray-500 text-xs pl-2">÷(−3) → tanda BALIK:</p>
            <p className="text-rose-700 font-bold pl-4">x &lt; −4  ← tanda berubah!</p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Tentukan himpunan penyelesaian: 3x + 5 ≤ 20"
          options={['x ≤ 5', 'x ≥ 5', 'x ≤ 15', 'x ≥ 15']}
          correctIndex={0}
          explanation="3x + 5 ≤ 20 → 3x ≤ 15 → x ≤ 5. Karena dibagi bilangan positif (+3), tanda tetap."
          color="rose"
        />
        <RevealBox
          question="Jika −2x + 6 ≥ 10, berapa nilai terbesar x yang memenuhi?"
          answer={<span>−2x + 6 ≥ 10 → −2x ≥ 4 → x ≤ −2 (tanda BALIK karena ÷ negatif). <br/>Nilai terbesar x = <strong>−2</strong></span>}
          color="rose"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[3]} color="blue" />
      </>,
    },
    {
      title: 'Logaritma',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Logaritma adalah <strong>kebalikan dari perpangkatan</strong>. Jika a<sup>b</sup> = c, maka <sup>a</sup>log c = b.
        </p>
        <FormulaCard color="blue">
          <div className="space-y-2">
            <p><strong>Definisi:</strong> <sup>a</sup>log b = c &nbsp;⟺&nbsp; a<sup>c</sup> = b</p>
            <p className="text-xs text-blue-700">a = bilangan pokok (basis), b = numerus (harus positif), c = hasil</p>
          </div>
        </FormulaCard>
        <p className="text-sm font-semibold text-gray-800 mb-3 mt-4">Sifat-Sifat Logaritma (Wajib Hafal untuk TPA):</p>
        <div className="space-y-2 my-3">
          {[
            { name: 'Perkalian', formula: 'ᵃlog(m × n) = ᵃlog m + ᵃlog n', example: '²log 8 = ²log(4×2) = ²log 4 + ²log 2 = 2 + 1 = 3' },
            { name: 'Pembagian', formula: 'ᵃlog(m / n) = ᵃlog m − ᵃlog n', example: '²log(16/4) = ²log 16 − ²log 4 = 4 − 2 = 2' },
            { name: 'Pangkat', formula: 'ᵃlog mⁿ = n · ᵃlog m', example: '³log 81 = ³log 3⁴ = 4 · ³log 3 = 4 × 1 = 4' },
            { name: 'Ganti Basis', formula: 'ᵃlog b = ᶜlog b / ᶜlog a', example: '²log 5 = log 5 / log 2 ≈ 0.699/0.301 ≈ 2.32' },
            { name: 'Identitas', formula: 'ᵃlog a = 1 &nbsp;dan&nbsp; ᵃlog 1 = 0', example: '⁵log 5 = 1, ⁷log 1 = 0' },
          ].map(({ name, formula, example }) => (
            <div key={name} className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-900 bg-blue-200 px-2 py-0.5 rounded-lg">{name}</span>
              </div>
              <p className="font-mono text-sm text-blue-800" dangerouslySetInnerHTML={{__html: formula}} />
              <p className="text-xs text-gray-500 mt-1 font-mono">{example}</p>
            </div>
          ))}
        </div>
        <TipBox type="tip">
          <strong>Trik TPA:</strong> Hafalkan pangkat 2 (2,4,8,16,32,64,128,256,512,1024) dan pangkat 3 (3,9,27,81,243). Ini mempercepat perhitungan logaritma secara signifikan.
        </TipBox>
        <MiniQuiz
          question="Berapakah nilai ²log 32?"
          options={['4', '5', '6', '8']}
          correctIndex={1}
          explanation="²log 32 = ²log 2⁵ = 5 × ²log 2 = 5 × 1 = 5. Karena 2⁵ = 32."
          color="blue"
        />
        <RevealBox
          question="Sederhanakan: ³log 27 + ²log 8 − ⁵log 25"
          answer={<span>³log 27 = ³log 3³ = 3 <br/>²log 8 = ²log 2³ = 3 <br/>⁵log 25 = ⁵log 5² = 2 <br/>Jawaban: 3 + 3 − 2 = <strong>4</strong></span>}
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[4]} color="blue" />
      </>,
    },
    {
      title: 'Barisan & Deret',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Barisan = urutan bilangan dengan pola tertentu. Deret = jumlah dari barisan.
          Materi ini <strong>sangat sering muncul</strong> di TPA dan tes kuantitatif S2.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-3">Barisan Aritmatika</p>
            <p className="text-xs text-gray-600 mb-2">Selisih antar suku tetap (beda = b)</p>
            <div className="font-mono text-xs text-blue-800 space-y-1.5 bg-white rounded-lg p-3">
              <p><strong>Suku ke-n:</strong> Uₙ = a + (n−1)b</p>
              <p><strong>Jumlah n suku:</strong> Sₙ = n/2 × (2a + (n−1)b)</p>
              <p className="text-gray-500">atau Sₙ = n/2 × (U₁ + Uₙ)</p>
              <div className="border-t border-blue-100 my-2 pt-2">
                <p className="text-gray-500">Contoh: 3, 7, 11, 15, ...</p>
                <p className="text-gray-500">a = 3, b = 4</p>
                <p><strong>U₁₀</strong> = 3 + 9(4) = <strong className="text-blue-900">39</strong></p>
                <p><strong>S₁₀</strong> = 10/2 × (3+39) = <strong className="text-blue-900">210</strong></p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-900 text-sm mb-3">Barisan Geometri</p>
            <p className="text-xs text-gray-600 mb-2">Rasio antar suku tetap (rasio = r)</p>
            <div className="font-mono text-xs text-purple-800 space-y-1.5 bg-white rounded-lg p-3">
              <p><strong>Suku ke-n:</strong> Uₙ = a × r<sup>n−1</sup></p>
              <p><strong>Jumlah n suku:</strong> Sₙ = a(rⁿ − 1)/(r − 1)</p>
              <p className="text-gray-500">Deret tak hingga (|r| &lt; 1): S∞ = a/(1−r)</p>
              <div className="border-t border-purple-100 my-2 pt-2">
                <p className="text-gray-500">Contoh: 2, 6, 18, 54, ...</p>
                <p className="text-gray-500">a = 2, r = 3</p>
                <p><strong>U₆</strong> = 2 × 3⁵ = <strong className="text-purple-900">486</strong></p>
                <p><strong>S₆</strong> = 2(3⁶−1)/(3−1) = <strong className="text-purple-900">728</strong></p>
              </div>
            </div>
          </div>
        </div>
        <TipBox type="warning">
          <strong>Jebakan soal:</strong> Pastikan kamu membedakan <em>barisan</em> (suku ke-n) dan <em>deret</em> (jumlah n suku pertama). Soal sering meminta S₁₀ tapi dijawab U₁₀.
        </TipBox>
        <ExampleBox label="Soal Tipe TPA">
          <p className="text-sm text-gray-700 mb-2">Jumlah 3 suku pertama barisan geometri = 26. Suku pertama = 2 dan rasio = 3. Benar atau salah?</p>
          <div className="font-mono text-xs text-gray-600 space-y-1">
            <p>S₃ = 2(3³ − 1)/(3 − 1) = 2(27−1)/2 = 2(26)/2 = 26 ✓ <strong className="text-emerald-700">Benar!</strong></p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Barisan aritmatika: 5, 9, 13, 17, ... Berapa suku ke-20?"
          options={['77', '81', '85', '89']}
          correctIndex={1}
          explanation="a = 5, b = 4. U₂₀ = 5 + (20−1)×4 = 5 + 76 = 81."
          color="purple"
        />
        <RevealBox
          question="Jumlah deret tak hingga barisan geometri: 12, 6, 3, 1.5, ... = ?"
          answer={<span>a = 12, r = 6/12 = 0.5 (|r| &lt; 1 → konvergen). <br/>S∞ = a/(1−r) = 12/(1−0.5) = 12/0.5 = <strong>24</strong></span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[5]} color="blue" />
      </>,
    },
    {
      title: 'Matriks Dasar',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Matriks adalah susunan bilangan dalam baris dan kolom. Operasi matriks sering muncul di tes kuantitatif S2.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-2">Penjumlahan Matriks</p>
            <p className="text-xs text-gray-600 mb-2">Jumlahkan elemen yang bersesuaian (ukuran harus sama)</p>
            <div className="font-mono text-xs text-blue-800 bg-white rounded-lg p-3">
              <p>[1, 2] &nbsp;&nbsp; [5, 6] &nbsp;&nbsp; [6, 8]</p>
              <p>[3, 4] + [7, 8] = [10, 12]</p>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-900 text-sm mb-2">Perkalian Skalar</p>
            <p className="text-xs text-gray-600 mb-2">Kalikan setiap elemen dengan konstanta</p>
            <div className="font-mono text-xs text-purple-800 bg-white rounded-lg p-3">
              <p>3 × [2, 1] = [6, 3]</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;[4, 3] &nbsp;&nbsp;[12, 9]</p>
            </div>
          </div>
        </div>
        <FormulaCard color="rose">
          <div className="space-y-2">
            <p><strong>Determinan Matriks 2×2:</strong></p>
            <p>A = [a, b; c, d] → det(A) = ad − bc</p>
            <p className="text-xs text-rose-700">Contoh: A = [3, 2; 1, 4] → det = (3)(4) − (2)(1) = 12 − 2 = 10</p>
          </div>
        </FormulaCard>
        <FormulaCard color="emerald">
          <div className="space-y-2">
            <p><strong>Invers Matriks 2×2:</strong></p>
            <p>A⁻¹ = (1/det) × [d, −b; −c, a]</p>
            <p className="text-xs text-emerald-700">Invers ada hanya jika det(A) ≠ 0</p>
          </div>
        </FormulaCard>
        <ExampleBox label="Contoh Soal S2">
          <div className="font-mono text-sm space-y-1 text-gray-700">
            <p>A = [2, 1; 3, 4], det(A) = 8 − 3 = 5</p>
            <p>A⁻¹ = (1/5) × [4, −1; −3, 2]</p>
            <p className="text-emerald-700 font-bold">A⁻¹ = [4/5, −1/5; −3/5, 2/5]</p>
          </div>
        </ExampleBox>
        <TipBox type="tip">
          <strong>Untuk tes S2:</strong> Kuasai determinan 2×2 dan invers matriks. Soal matriks 3×3 jarang muncul di TPA, tapi sering di tes Teknik/Sains.
        </TipBox>
        <MiniQuiz
          question="Matriks A = [4, 3; 2, 1]. Berapa determinan A?"
          options={['-2', '2', '-1', '10']}
          correctIndex={0}
          explanation="det(A) = (4)(1) − (3)(2) = 4 − 6 = −2. Ingat rumus: ad − bc."
          color="rose"
        />
        <RevealBox
          question="Matriks B = [5, 2; 3, 1]. Tentukan B⁻¹ (invers matriks B)."
          answer={<span>det(B) = (5)(1) − (2)(3) = 5 − 6 = −1 <br/>B⁻¹ = (1/−1) × [1, −2; −3, 5] <br/>= <strong>[−1, 2; 3, −5]</strong> <br/>Verifikasi: B × B⁻¹ = I (matriks identitas) ✓</span>}
          color="emerald"
        />
        <QuizBank questions={mathSectionQuiz.aljabar[6]} color="blue" />
      </>,
    },
  ],

  // ── 2. LOGIKA ──────────────────────────────────────────────────────────────
  logika: [
    {
      title: 'Silogisme & Penalaran Deduktif',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TPA):</strong> Logika & Penalaran mendominasi TPA (Tes Potensi Akademik). Materi meliputi silogisme, modus ponens/tollens, negasi, kontraposisi, analogi verbal, pola bilangan, dan logika proposisi. Bobot sekitar 30-40% dari soal TPA.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Silogisme adalah pola penalaran dari hal umum ke khusus. Ada dua pola utama yang sering diujikan.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-3">Modus Ponens (p → q)</p>
            <div className="space-y-2">
              {[
                { label: 'Premis Mayor', text: 'Jika p maka q', color: 'bg-blue-100 text-blue-800' },
                { label: 'Premis Minor', text: 'p benar', color: 'bg-blue-100 text-blue-800' },
                { label: 'Kesimpulan', text: '∴ q benar ✓', color: 'bg-emerald-100 text-emerald-800 font-bold' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-gray-400 w-24 text-right">{r.label}:</span>
                  <span className={`px-2 py-1 rounded-lg font-mono ${r.color}`}>{r.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200 text-xs text-blue-700">
              <p><strong>Contoh:</strong> Semua mahasiswa lulus ujian.</p>
              <p>Andi adalah mahasiswa.</p>
              <p className="font-bold">∴ Andi lulus ujian.</p>
            </div>
          </div>
          <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
            <p className="font-bold text-rose-900 text-sm mb-3">Modus Tollens (~q → ~p)</p>
            <div className="space-y-2">
              {[
                { label: 'Premis Mayor', text: 'Jika p maka q', color: 'bg-rose-100 text-rose-800' },
                { label: 'Premis Minor', text: '~q (q salah)', color: 'bg-rose-100 text-rose-800' },
                { label: 'Kesimpulan', text: '∴ ~p (p salah)', color: 'bg-emerald-100 text-emerald-800 font-bold' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-gray-400 w-24 text-right">{r.label}:</span>
                  <span className={`px-2 py-1 rounded-lg font-mono ${r.color}`}>{r.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-rose-200 text-xs text-rose-700">
              <p><strong>Contoh:</strong> Jika hujan → jalanan basah.</p>
              <p>Jalanan <em>tidak</em> basah (~q).</p>
              <p className="font-bold">∴ Tidak hujan (~p).</p>
            </div>
          </div>
        </div>
        <MiniQuiz
          question={`Premis 1: Jika rajin belajar maka lulus ujian.\nPremis 2: Budi tidak lulus ujian.\nKesimpulan yang benar adalah...`}
          options={['Budi rajin belajar', 'Budi tidak rajin belajar', 'Budi lulus ujian', 'Tidak bisa disimpulkan']}
          correctIndex={1}
          explanation="Ini Modus Tollens: Jika p→q dan ~q, maka ~p. Budi tidak lulus ujian (~q), maka Budi tidak rajin belajar (~p)."
          color="purple"
        />
        <MatchGame pairs={[
          { left: 'Modus Ponens', right: 'p benar → q benar' },
          { left: 'Modus Tollens', right: '~q → ~p' },
          { left: 'Silogisme Hipotesis', right: 'p→q, q→r → p→r' },
          { left: 'Kontraposisi', right: 'p→q setara ~q→~p' },
        ]} color="purple" />
        <QuizBank questions={mathSectionQuiz.logika[0]} color="purple" />
      </>,
    },
    {
      title: 'Logika Proposisi',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Dari implikasi <strong>p → q</strong>, dapat dibentuk tiga turunan. Yang paling penting:
          implikasi <strong>ekuivalen</strong> dengan kontraposisinya.
        </p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-3 py-2.5 font-bold text-gray-700 border-b-2 border-gray-200">Nama</th>
                <th className="text-left px-3 py-2.5 font-bold text-gray-700 border-b-2 border-gray-200">Bentuk</th>
                <th className="text-left px-3 py-2.5 font-bold text-gray-700 border-b-2 border-gray-200">Ekuivalen dengan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Implikasi', 'p → q', 'Kontraposisi ✓'],
                ['Kontraposisi', '~q → ~p', 'Implikasi ✓'],
                ['Konvers', 'q → p', 'Invers'],
                ['Invers', '~p → ~q', 'Konvers'],
              ].map(([name, form, eq], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="px-3 py-2 border-b border-gray-100 font-medium text-gray-800">{name}</td>
                  <td className="px-3 py-2 border-b border-gray-100 font-mono text-blue-700">{form}</td>
                  <td className={`px-3 py-2 border-b border-gray-100 text-xs font-medium ${eq.includes('✓') ? 'text-emerald-600' : 'text-gray-500'}`}>{eq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm font-semibold text-gray-800 mt-4 mb-2">Tabel Nilai Kebenaran p → q:</p>
        <div className="grid grid-cols-3 gap-px bg-gray-200 rounded-xl overflow-hidden text-center text-sm my-3 max-w-xs">
          {['p', 'q', 'p → q'].map(h => (
            <div key={h} className="bg-gray-800 text-white py-2 font-bold text-xs">{h}</div>
          ))}
          {[['B', 'B', 'B', 'emerald'], ['B', 'S', 'S', 'rose'], ['S', 'B', 'B', 'emerald'], ['S', 'S', 'B', 'emerald']].map(([p, q, r, c], i) => (
            <>
              <div key={`p${i}`} className={`py-2 text-xs font-mono ${p === 'B' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-600'}`}>{p}</div>
              <div key={`q${i}`} className={`py-2 text-xs font-mono ${q === 'B' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-600'}`}>{q}</div>
              <div key={`r${i}`} className={`py-2 text-xs font-mono font-bold ${c === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>{r}</div>
            </>
          ))}
        </div>
        <TipBox type="warning">
          Implikasi hanya <strong>SALAH</strong> jika hipotesis BENAR dan konklusi SALAH (baris ke-2).
          Semua kombinasi lain bernilai BENAR.
        </TipBox>
        <ExampleBox label="Contoh Soal & Penyelesaian">
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Diketahui: "Jika Ali rajin belajar, maka Ali lulus ujian." Manakah yang setara (ekuivalen)?</p>
            <div className="grid grid-cols-1 gap-1.5 mb-2">
              {['a. Jika Ali lulus ujian, maka Ali rajin belajar (Konvers)', 'b. Jika Ali tidak rajin belajar, maka Ali tidak lulus (Invers)', 'c. Jika Ali tidak lulus ujian, maka Ali tidak rajin belajar (Kontraposisi) ✓', 'd. Tidak ada yang setara'].map((o, i) => (
                <span key={i} className={`text-xs px-3 py-1.5 rounded-lg ${o.includes('✓') ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-gray-100 text-gray-600'}`}>{o}</span>
              ))}
            </div>
            <p className="text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2">Implikasi p→q setara dengan kontraposisinya ~q→~p. Jadi "tidak lulus → tidak rajin" setara dengan "rajin → lulus".</p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Kontraposisi dari 'Jika hujan maka jalanan basah' adalah..."
          options={['Jika jalanan basah maka hujan', 'Jika tidak hujan maka jalanan tidak basah', 'Jika jalanan tidak basah maka tidak hujan', 'Jika hujan maka jalanan tidak basah']}
          correctIndex={2}
          explanation="Kontraposisi p→q adalah ~q→~p. 'Jika jalanan TIDAK basah (~q) maka TIDAK hujan (~p)'. Ingat: kontraposisi selalu MEMBALIK dan MENEGASIKAN."
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.logika[1]} color="purple" />
      </>,
    },
    {
      title: 'Penalaran Numerik (Pola Bilangan)',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Soal pola bilangan meminta kamu menemukan aturan (rumus) dari serangkaian angka.
        </p>
        <div className="space-y-4 my-4">
          {[
            { type: 'Aritmetika', desc: 'Selisih antar suku tetap (+d)', seq: [2, 5, 8, 11, '?'], rule: '+3', ans: 14, color: 'blue' },
            { type: 'Geometri', desc: 'Rasio antar suku tetap (×r)', seq: [2, 4, 8, 16, '?'], rule: '×2', ans: 32, color: 'purple' },
            { type: 'Fibonacci', desc: 'Suku = jumlah dua suku sebelumnya', seq: [1, 1, 2, 3, 5, '?'], rule: '+(n-2)+(n-1)', ans: 8, color: 'emerald' },
          ].map(({ type, desc, seq, rule, ans, color }) => {
            const bg = { blue: 'bg-blue-50 border-blue-200', purple: 'bg-purple-50 border-purple-200', emerald: 'bg-emerald-50 border-emerald-200' }[color]
            const txt = { blue: 'text-blue-700', purple: 'text-purple-700', emerald: 'text-emerald-700' }[color]
            return (
              <div key={type} className={`border rounded-xl p-4 ${bg}`}>
                <p className={`font-bold text-sm ${txt} mb-1`}>{type}</p>
                <p className="text-xs text-gray-500 mb-3">{desc}</p>
                <div className="flex items-center gap-1 flex-wrap">
                  {seq.map((n, i) => (
                    <span key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold ${n === '?' ? 'bg-amber-100 text-amber-700 border-2 border-dashed border-amber-400' : `bg-white ${txt} border border-gray-200`}`}>
                      {n}
                    </span>
                  ))}
                  <span className={`ml-2 text-xs ${txt} font-semibold`}>Aturan: {rule}</span>
                  <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg text-xs font-bold">
                    Jawaban: {ans}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <TipBox type="tip">
          <strong>Strategi TPA:</strong> Jika selisih pertama tidak tetap, coba hitung <em>selisih kedua</em> (selisih dari selisih).
          Pola kuadrat akan terlihat dengan cara ini.
        </TipBox>
        <ExampleBox label="Contoh Soal: Pola Selisih Kedua">
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Tentukan bilangan berikutnya: 1, 4, 9, 16, 25, ?</p>
            <div className="font-mono text-xs space-y-1 bg-blue-50 rounded-lg p-3">
              <p>Selisih pertama: 3, 5, 7, 9, ... (tidak tetap)</p>
              <p>Selisih kedua: 2, 2, 2 (tetap!) → Pola kuadrat</p>
              <p>Ternyata ini 1², 2², 3², 4², 5², ...</p>
              <p className="text-emerald-700 font-bold">Jawaban: 6² = 36</p>
            </div>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Tentukan bilangan berikutnya: 3, 6, 11, 18, 27, ?"
          options={['35', '36', '38', '40']}
          correctIndex={2}
          explanation="Selisih pertama: 3, 5, 7, 9 → Selisih kedua: 2, 2, 2 (tetap). Selisih berikutnya = 11, maka 27 + 11 = 38."
          color="emerald"
        />
        <QuizBank questions={mathSectionQuiz.logika[2]} color="purple" />
      </>,
    },
    {
      title: 'Analogi Verbal & Penalaran Analitik',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Analogi verbal menguji kemampuan menemukan <strong>hubungan antar kata/konsep</strong>.
          Ini merupakan 20-30% soal TPA.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-3">Jenis-Jenis Relasi Analogi:</p>
        <div className="space-y-2 my-3">
          {[
            { type: 'Sinonim/Antonim', pair: 'Besar : Kecil', logic: 'Berlawanan makna', more: 'Panas : Dingin, Gelap : Terang' },
            { type: 'Bagian : Keseluruhan', pair: 'Roda : Mobil', logic: 'X adalah bagian dari Y', more: 'Jari : Tangan, Halaman : Buku' },
            { type: 'Fungsi/Alat', pair: 'Pisau : Memotong', logic: 'X digunakan untuk Y', more: 'Pensil : Menulis, Kunci : Mengunci' },
            { type: 'Pelaku : Hasil', pair: 'Penulis : Buku', logic: 'X menghasilkan Y', more: 'Pelukis : Lukisan, Petani : Panen' },
            { type: 'Tempat/Habitat', pair: 'Ikan : Air', logic: 'X hidup/berada di Y', more: 'Siswa : Sekolah, Dokter : Rumah Sakit' },
            { type: 'Tingkatan', pair: 'Suka : Cinta', logic: 'X adalah versi lebih ringan dari Y', more: 'Hangat : Panas, Marah : Murka' },
            { type: 'Sebab : Akibat', pair: 'Api : Asap', logic: 'X menyebabkan Y', more: 'Hujan : Banjir, Rajin : Sukses' },
          ].map(({ type, pair, logic, more }) => (
            <div key={type} className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-1 rounded-lg whitespace-nowrap">{type}</span>
              <span className="font-mono text-sm text-gray-800 font-bold">{pair}</span>
              <span className="text-xs text-gray-500">({logic})</span>
              <span className="text-xs text-gray-400 italic ml-auto hidden sm:block">{more}</span>
            </div>
          ))}
        </div>
        <ExampleBox label="Contoh Soal TPA">
          <p className="text-sm font-semibold text-gray-800 mb-2">Penulis : Buku = Sutradara : ...</p>
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            {['a. Aktor', 'b. Film ✓', 'c. Kamera', 'd. Bioskop'].map((o, i) => (
              <span key={i} className={`text-xs px-3 py-1.5 rounded-lg font-mono ${o.includes('✓') ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-gray-100 text-gray-600'}`}>{o}</span>
            ))}
          </div>
          <p className="text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2">Relasi: Pelaku → Hasil karya. Penulis menghasilkan buku, sutradara menghasilkan film.</p>
        </ExampleBox>
        <TipBox type="tip">
          <strong>Strategi:</strong> Selalu identifikasi <em>jenis relasi</em> dari pasangan pertama sebelum memilih jawaban. Buat kalimat penghubung: "X digunakan untuk Y" → pasangan jawaban harus memiliki relasi yang PERSIS sama.
        </TipBox>
        <MiniQuiz
          question="Dokter : Stetoskop = Pelukis : ..."
          options={['Kanvas', 'Kuas', 'Lukisan', 'Galeri']}
          correctIndex={1}
          explanation="Relasi: Pelaku → Alat utama. Dokter menggunakan stetoskop sebagai alat. Pelukis menggunakan kuas sebagai alat. Bukan lukisan (itu hasil karya) atau kanvas (itu media)."
          color="blue"
        />
        <RevealBox
          question="Elang : Langit = Ikan : ?"
          answer={<span>Relasi: <strong>Makhluk : Habitat/Tempat hidup</strong>. <br/>Elang hidup di langit (terbang). Ikan hidup di <strong>air/laut</strong>. <br/>Jawaban: <strong>Air</strong> (bukan akuarium, karena elang di langit bukan di sangkar).</span>}
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.logika[3]} color="purple" />
      </>,
    },
    {
      title: 'Penalaran Analitik (Posisi & Urutan)',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Soal penalaran analitik memberi syarat-syarat lalu meminta kesimpulan logis.
          Sering muncul di TPA dalam bentuk soal <strong>urutan, posisi duduk, atau penjadwalan</strong>.
        </p>
        <ExampleBox label="Contoh Soal TPA">
          <div className="text-sm text-gray-700 space-y-2 mb-3">
            <p className="font-semibold">5 siswa (A, B, C, D, E) duduk dalam satu baris. Syarat:</p>
            <ul className="text-xs space-y-1 ml-4 list-disc text-gray-600">
              <li>A harus duduk di sebelah B</li>
              <li>C tidak boleh duduk di ujung</li>
              <li>D harus duduk di sebelah kiri E</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Strategi penyelesaian:</p>
          <StepList steps={[
            'Buat slot kosong: _ _ _ _ _',
            'Prioritas: Isi syarat yang paling membatasi dahulu (C tidak di ujung → C di posisi 2, 3, atau 4)',
            'AB harus bersebelahan → perlakukan sebagai satu blok [AB] atau [BA]',
            'D di kiri E → blok [D...E] dengan D lebih kiri',
            'Coba masukkan satu per satu dan eliminasi yang tidak memenuhi',
          ]} />
        </ExampleBox>
        <TipBox type="tip">
          <strong>Tips penalaran analitik:</strong> Selalu gambar/tulis sketsa posisi. Jangan coba mengerjakan di kepala saja. Gunakan tabel atau diagram sederhana.
        </TipBox>
        <TipBox type="warning">
          <strong>Jangan terjebak:</strong> Baca SEMUA syarat sebelum mulai menjawab. Sering kali syarat terakhir mengubah semua kemungkinan yang sudah kamu buat.
        </TipBox>
        <MiniQuiz
          question="A, B, C antri. A di depan B. C tidak di posisi terakhir. Urutan yang benar?"
          options={['B, A, C', 'A, C, B', 'C, A, B', 'A, B, C']}
          correctIndex={1}
          explanation="A di depan B → A...B. C tidak terakhir → C bukan posisi 3. Kemungkinan: A, C, B ✓ (A depan B, C di posisi 2 bukan terakhir)."
          color="purple"
        />
        <RevealBox
          question="4 orang (P, Q, R, S) duduk melingkar. P berhadapan dengan R. Q di sebelah kanan P. Siapa di sebelah kanan R?"
          answer={<span>Bayangkan lingkaran: P di atas, R di bawah (berhadapan). <br/>Q di kanan P → Q di kanan atas. <br/>S mengisi sisa → S di kiri atas. <br/>Searah jarum jam: P, Q, R, S. <br/>Di sebelah kanan R = <strong>S</strong></span>}
          color="emerald"
        />
        <QuizBank questions={mathSectionQuiz.logika[4]} color="purple" />
      </>,
    },
  ],

  // ── 3. STATISTIKA ──────────────────────────────────────────────────────────
  statistika: [
    {
      title: 'Mean, Median, dan Modus',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2:</strong> Statistika & Probabilitas sering muncul di TPA dan tes kuantitatif. Fokus pada mean/median/modus, simpangan baku, distribusi normal, probabilitas dasar, kombinasi & permutasi, serta interpretasi data (tabel, diagram). Soal biasanya menguji kemampuan analisis data cepat.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Tiga ukuran <strong>pemusatan data</strong> yang paling sering diujikan.
          Perhatikan data <code className="bg-gray-100 px-1 rounded text-xs">3, 7, 5, 9, 1, 4, 6</code> berikut:
        </p>
        <MeanMedianVisual data={[3, 7, 5, 9, 1, 4, 6]} />
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {[
            { name: 'Mean (Rata-rata)', formula: 'Σxᵢ / n', calc: '(1+3+4+5+6+7+9)/7', result: '= 5', color: 'rose', note: 'Garis merah putus-putus' },
            { name: 'Median (Tengah)', formula: 'Data ke-(n+1)/2', calc: 'Urutan: 1,3,4,5,6,7,9', result: 'Nilai ke-4 = 5', color: 'purple', note: 'Batang ungu' },
            { name: 'Modus (Terbanyak)', formula: 'Nilai paling sering', calc: '1,3,4,5,6,7,9', result: 'Tidak ada (semua 1×)', color: 'amber', note: 'Tidak selalu ada' },
          ].map(({ name, formula, calc, result, color, note }) => {
            const colors = { rose: 'bg-rose-50 border-rose-200 text-rose-700', purple: 'bg-purple-50 border-purple-200 text-purple-700', amber: 'bg-amber-50 border-amber-200 text-amber-700' }
            return (
              <div key={name} className={`border rounded-xl p-3 ${colors[color].split(' ').slice(0, 2).join(' ')}`}>
                <p className={`font-bold text-xs mb-1 ${colors[color].split(' ')[2]}`}>{name}</p>
                <p className="font-mono text-xs text-gray-600 bg-white rounded-lg px-2 py-1 my-1">{formula}</p>
                <p className="text-xs text-gray-500">{calc}</p>
                <p className={`font-bold text-sm mt-1 ${colors[color].split(' ')[2]}`}>{result}</p>
                <p className="text-[10px] text-gray-400 mt-1 italic">{note}</p>
              </div>
            )
          })}
        </div>
        <TipBox type="warning">
          <strong>Jebakan soal:</strong> Selalu <strong>urutkan data terlebih dahulu</strong> sebelum mencari median!
          Median data genap = rata-rata dua nilai tengah.
        </TipBox>
        <MiniQuiz
          question="Data: 2, 5, 8, 8, 12. Berapa mean, median, dan modusnya?"
          options={['Mean=7, Median=8, Modus=8', 'Mean=7, Median=5, Modus=8', 'Mean=8, Median=8, Modus=2', 'Mean=5, Median=7, Modus=8']}
          correctIndex={0}
          explanation="Mean = (2+5+8+8+12)/5 = 35/5 = 7. Median = nilai ke-3 (sudah urut) = 8. Modus = 8 (muncul 2 kali)."
          color="emerald"
        />
        <RevealBox
          question="Data: 3, 6, 7, 9, 11, 15. Berapa mediannya?"
          answer={<span>Data genap (n=6), median = rata-rata data ke-3 dan ke-4 = (7 + 9) / 2 = <strong>8</strong>. Ingat: untuk data genap, median selalu rata-rata 2 nilai tengah!</span>}
          color="emerald"
        />
        <QuizBank questions={mathSectionQuiz.statistika[0]} color="emerald" />
      </>,
    },
    {
      title: 'Standar Deviasi & Z-Score',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Standar deviasi (σ) mengukur seberapa <strong>tersebar</strong> data dari rata-ratanya.
          Z-score mengubah nilai ke skala standar.
        </p>
        <FormulaCard color="purple">
          <div className="space-y-2">
            <p><strong>Standar Deviasi:</strong>  σ = √[ Σ(xᵢ − x̄)² / n ]</p>
            <p><strong>Z-Score:</strong>  z = (x − μ) / σ</p>
          </div>
        </FormulaCard>
        <ExampleBox label="Contoh Z-Score">
          <div className="flex items-center gap-4 text-sm">
            <div className="space-y-1 font-mono text-xs">
              <p>μ = 70,  σ = 10</p>
              <p>Nilai kamu: x = 80</p>
              <p className="text-purple-700 font-bold">z = (80−70)/10 = <strong>+1.0</strong></p>
            </div>
            <div className="flex-1">
              <div className="bg-purple-50 rounded-xl p-3">
                <p className="text-xs text-purple-700 font-semibold">Artinya:</p>
                <p className="text-xs text-gray-600 mt-1">z = +1 → nilaimu <strong>1 standar deviasi di ATAS</strong> rata-rata kelas.</p>
                <p className="text-xs text-gray-500 mt-1">z = 0 → tepat di rata-rata | z = −1 → satu SD di bawah</p>
              </div>
            </div>
          </div>
        </ExampleBox>
        <TipBox type="tip">
          Z-score penting untuk <strong>membandingkan nilai dari populasi yang berbeda</strong>.
          Contoh: nilai 75 di kelas A (σ=5) lebih baik dari nilai 80 di kelas B (σ=20)?
        </TipBox>
        <ExampleBox label="Contoh Soal: Perbandingan Z-Score">
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-semibold">Andi dapat 85 di Matematika (μ=70, σ=10). Budi dapat 90 di Fisika (μ=80, σ=20). Siapa yang relatif lebih baik?</p>
            <div className="font-mono text-xs space-y-1 bg-purple-50 rounded-lg p-3">
              <p>Z-Andi = (85−70)/10 = <strong className="text-purple-700">+1.5</strong></p>
              <p>Z-Budi = (90−80)/20 = <strong className="text-purple-700">+0.5</strong></p>
              <p className="text-emerald-700 font-bold mt-2">Andi relatif lebih baik (z = 1.5 &gt; 0.5) meskipun nilainya lebih rendah!</p>
            </div>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Data: 4, 6, 8, 10, 12. Berapa standar deviasinya? (μ = 8)"
          options={['√6', '√8', '√10', '√12']}
          correctIndex={1}
          explanation="Σ(xᵢ−8)² = 16+4+0+4+16 = 40. SD = √(40/5) = √8 ≈ 2.83. Langkah: hitung selisih dari mean → kuadratkan → rata-ratakan → akarkan."
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.statistika[1]} color="emerald" />
      </>,
    },
    {
      title: 'Probabilitas',
      body: <>
        <p className="text-sm text-gray-700 mb-3">
          Probabilitas = ukuran seberapa mungkin suatu kejadian terjadi, bernilai antara 0 (mustahil) dan 1 (pasti).
        </p>
        <FormulaCard color="emerald">
          <p><strong>P(A)</strong> = Jumlah kejadian A / Total ruang sampel</p>
        </FormulaCard>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div>
            <VennDiagram />
            <p className="text-xs text-center text-gray-500 mt-1">Diagram Venn — A ∩ B adalah irisan</p>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="font-bold text-xs text-blue-800 mb-1">Saling Bebas (Independent)</p>
              <p className="font-mono text-xs text-blue-700">P(A ∩ B) = P(A) × P(B)</p>
              <p className="text-xs text-gray-500 mt-1">Contoh: 2 koin dilempar bersamaan</p>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-3">
              <p className="font-bold text-xs text-pink-800 mb-1">Saling Lepas (Mutually Exclusive)</p>
              <p className="font-mono text-xs text-pink-700">P(A ∪ B) = P(A) + P(B)</p>
              <p className="text-xs text-gray-500 mt-1">Tidak bisa terjadi bersamaan</p>
            </div>
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">
              <p className="font-bold text-xs text-violet-800 mb-1">Aturan Umum</p>
              <p className="font-mono text-xs text-violet-700">P(A∪B) = P(A)+P(B)−P(A∩B)</p>
            </div>
          </div>
        </div>
        <ExampleBox label="Soal Klasik">
          <p className="text-sm">Sebuah dadu dilempar sekali. P(angka genap) = ?</p>
          <p className="font-mono text-xs text-gray-600 mt-2">Ruang sampel: {'{1,2,3,4,5,6}'}</p>
          <p className="font-mono text-xs text-gray-600">Kejadian genap: {'{2,4,6}'} → 3 kejadian</p>
          <p className="font-mono text-sm text-emerald-700 font-bold mt-1">P(genap) = 3/6 = 1/2 = 50%</p>
        </ExampleBox>
        <MiniQuiz
          question="Dari kantong berisi 4 bola merah dan 6 bola putih, diambil 1 bola secara acak. P(merah) = ?"
          options={['1/4', '2/5', '3/5', '4/6']}
          correctIndex={1}
          explanation="Total bola = 4 + 6 = 10. P(merah) = 4/10 = 2/5 = 0.4 = 40%."
          color="emerald"
        />
        <RevealBox
          question="2 dadu dilempar bersamaan. Berapa peluang jumlah mata dadu = 7?"
          answer={<span>Ruang sampel = 6 × 6 = 36. <br/>Kejadian jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 kejadian. <br/>P(jumlah=7) = 6/36 = <strong>1/6 ≈ 16.7%</strong></span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.statistika[2]} color="emerald" />
      </>,
    },
    {
      title: 'Permutasi & Kombinasi',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Materi ini sering muncul di TPA dan tes kuantitatif S2. Kunci: tentukan apakah <strong>urutan penting</strong> atau tidak.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-2">Permutasi (Urutan PENTING)</p>
            <FormulaCard color="blue">
              <p><strong>P(n, r) = n! / (n−r)!</strong></p>
              <p className="text-xs text-blue-700 mt-1">Memilih r dari n objek, urutan berbeda = cara berbeda</p>
            </FormulaCard>
            <ExampleBox label="Contoh">
              <p className="text-xs text-gray-600">Berapa cara memilih ketua dan wakil dari 5 orang?</p>
              <p className="font-mono text-xs text-blue-700 mt-1">P(5,2) = 5!/(5−2)! = 5×4 = <strong>20 cara</strong></p>
              <p className="text-[10px] text-gray-400 mt-1">AB ≠ BA (ketua A wakil B ≠ ketua B wakil A)</p>
            </ExampleBox>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-900 text-sm mb-2">Kombinasi (Urutan TIDAK PENTING)</p>
            <FormulaCard color="purple">
              <p><strong>C(n, r) = n! / (r! × (n−r)!)</strong></p>
              <p className="text-xs text-purple-700 mt-1">Memilih r dari n objek, tanpa memperhatikan urutan</p>
            </FormulaCard>
            <ExampleBox label="Contoh">
              <p className="text-xs text-gray-600">Berapa cara memilih 3 anggota panitia dari 7 orang?</p>
              <p className="font-mono text-xs text-purple-700 mt-1">C(7,3) = 7!/(3!×4!) = 210/6 = <strong>35 cara</strong></p>
              <p className="text-[10px] text-gray-400 mt-1">ABC = BAC = CBA (kelompok sama)</p>
            </ExampleBox>
          </div>
        </div>
        <TipBox type="tip">
          <strong>Cara membedakan:</strong> Tanya pada diri sendiri — "Jika saya tukar posisi, apakah hasilnya berbeda?" Jika <strong>YA</strong> → Permutasi. Jika <strong>TIDAK</strong> → Kombinasi.
        </TipBox>
        <MiniQuiz
          question="Berapa cara menyusun huruf A, B, C, D dalam satu baris?"
          options={['12', '24', '16', '36']}
          correctIndex={1}
          explanation="Ini permutasi seluruh elemen. P(4,4) = 4! = 4 × 3 × 2 × 1 = 24 cara. Urutan ABCD ≠ DCBA, jadi permutasi."
          color="blue"
        />
        <RevealBox
          question="Dari 10 pemain, pelatih memilih 3 untuk menjadi tim inti. Berapa banyak cara?"
          answer={<span>Urutan tidak penting (tim {'{A,B,C}'} = tim {'{C,B,A}'}), jadi <strong>Kombinasi</strong>. <br/>C(10,3) = 10! / (3! × 7!) = (10×9×8) / (3×2×1) = 720/6 = <strong>120 cara</strong></span>}
          color="purple"
        />
        <ExampleBox label="Tabel Referensi Cepat Faktorial">
          <div className="grid grid-cols-5 gap-2 font-mono text-xs text-center">
            {[['1!', '1'], ['2!', '2'], ['3!', '6'], ['4!', '24'], ['5!', '120'], ['6!', '720'], ['7!', '5040'], ['8!', '40320'], ['9!', '362880'], ['10!', '3628800']].map(([f, v]) => (
              <div key={f} className="bg-gray-100 rounded-lg px-2 py-1">
                <p className="font-bold text-gray-800">{f}</p>
                <p className="text-gray-500 text-[10px]">{v}</p>
              </div>
            ))}
          </div>
        </ExampleBox>
        <QuizBank questions={mathSectionQuiz.statistika[3]} color="emerald" />
      </>,
    },
    {
      title: 'Distribusi Normal & Aturan Empiris',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Distribusi normal (kurva lonceng) adalah distribusi probabilitas yang paling penting dalam statistik.
          Hampir semua tes standar (TPA, TOEFL) menggunakan distribusi normal.
        </p>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-5 my-4">
          <p className="font-bold text-blue-900 text-sm mb-3 text-center">Aturan Empiris (68-95-99.7)</p>
          <div className="space-y-3">
            {[
              { range: 'μ ± 1σ', pct: '68%', desc: '68% data berada dalam 1 standar deviasi', color: 'bg-blue-100 border-blue-300 text-blue-800' },
              { range: 'μ ± 2σ', pct: '95%', desc: '95% data berada dalam 2 standar deviasi', color: 'bg-purple-100 border-purple-300 text-purple-800' },
              { range: 'μ ± 3σ', pct: '99.7%', desc: '99.7% data berada dalam 3 standar deviasi', color: 'bg-emerald-100 border-emerald-300 text-emerald-800' },
            ].map(({ range, pct, desc, color }) => (
              <div key={range} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${color}`}>
                <span className="font-mono font-bold text-lg">{pct}</span>
                <div>
                  <p className="font-mono text-xs font-bold">{range}</p>
                  <p className="text-xs opacity-80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ExampleBox label="Contoh Soal S2">
          <div className="text-sm text-gray-700 space-y-1">
            <p>Rata-rata skor TPA = 500, SD = 50.</p>
            <p className="font-semibold">Berapa persen peserta yang skor-nya antara 400 dan 600?</p>
            <div className="font-mono text-xs text-gray-600 mt-2 space-y-1">
              <p>400 = 500 − 2(50) = μ − 2σ</p>
              <p>600 = 500 + 2(50) = μ + 2σ</p>
              <p className="text-emerald-700 font-bold">Jawaban: 95% (aturan μ ± 2σ)</p>
            </div>
          </div>
        </ExampleBox>
        <TipBox type="tip">
          <strong>Hafal 3 angka ini:</strong> 68%, 95%, 99.7% — ini akan menjawab hampir semua soal distribusi normal di TPA.
        </TipBox>
        <MiniQuiz
          question="Rata-rata berat badan mahasiswa = 65 kg, SD = 5 kg. Berapa persen mahasiswa berbobot antara 60−70 kg?"
          options={['50%', '68%', '95%', '99.7%']}
          correctIndex={1}
          explanation="60 = 65 − 1(5) = μ − 1σ. 70 = 65 + 1(5) = μ + 1σ. Rentang μ ± 1σ → 68% (aturan empiris)."
          color="blue"
        />
        <RevealBox
          question="Skor TOEFL rata-rata = 500, SD = 50. Jika peserta 10.000 orang, berapa yang mendapat skor > 600?"
          answer={<span>600 = 500 + 2(50) = μ + 2σ. <br/>Aturan: 95% data ada di μ ± 2σ → 5% di luar rentang. <br/>Karena simetris, skor &gt; 600 = 5%/2 = <strong>2.5%</strong>. <br/>Dari 10.000 peserta: 10.000 × 2.5% = <strong>250 orang</strong></span>}
          color="purple"
        />
        <QuizBank questions={mathSectionQuiz.statistika[4]} color="emerald" />
      </>,
    },
  ],

  // ── 4. KALKULUS ────────────────────────────────────────────────────────────
  kalkulus: [
    {
      title: 'Limit Fungsi',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2:</strong> Kalkulus muncul di tes kuantitatif program S2 Sains, Teknik, dan Ekonomi. Fokus pada limit, turunan (diferensial), integral, aplikasi nilai maksimum/minimum, dan luas daerah. Soal biasanya level dasar-menengah tapi menuntut pemahaman konsep yang kuat.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Limit menggambarkan nilai yang <em>didekati</em> oleh fungsi ketika variabel mendekati suatu titik —
          bukan harus sama persis!
        </p>
        <FormulaCard color="rose">
          <p><strong>Notasi:</strong>  lim<sub>x→a</sub> f(x) = L</p>
          <p className="text-xs text-rose-700 mt-1">Dibaca: "Limit f(x) ketika x mendekati a, sama dengan L"</p>
        </FormulaCard>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="font-bold text-emerald-900 text-sm mb-2">✅ Metode 1: Substitusi Langsung</p>
            <p className="text-xs text-gray-600 mb-2">Masukkan nilai x = a langsung. Jika hasilnya valid, selesai.</p>
            <div className="font-mono text-xs space-y-1 text-emerald-800">
              <p>lim<sub>x→3</sub> (x² + 1)</p>
              <p>= 3² + 1</p>
              <p className="font-bold">= 10  ✓</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-2">🔧 Metode 2: Faktorisasi</p>
            <p className="text-xs text-gray-600 mb-2">Jika substitusi menghasilkan 0/0, faktorkan terlebih dahulu.</p>
            <div className="font-mono text-xs space-y-1 text-blue-800">
              <p>lim<sub>x→2</sub> (x²−4)/(x−2)</p>
              <p>= lim (x+2)(x−2)/(x−2)</p>
              <p>= lim (x+2)</p>
              <p className="font-bold">= 2+2 = 4  ✓</p>
            </div>
          </div>
        </div>
        <TipBox type="warning">
          Jika substitusi menghasilkan <strong>0/0</strong> (bentuk tak tentu), JANGAN menyerah!
          Coba faktorkan, rasionalkan, atau gunakan aturan L'Hôpital.
        </TipBox>
        <MiniQuiz
          question="Hitung lim(x→3) (x² − 9)/(x − 3)"
          options={['0', '3', '6', '9']}
          correctIndex={2}
          explanation="Substitusi langsung = 0/0 (tak tentu). Faktorkan: (x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3. Maka lim(x→3) = 3+3 = 6."
          color="rose"
        />
        <AccordionList items={[
          { title: '📌 Kapan pakai substitusi langsung?', content: <p className="text-sm">Substitusi langsung dipakai saat memasukkan nilai x tidak menghasilkan bentuk tak tentu (0/0 atau ∞/∞). Jika hasilnya angka biasa, itu jawabannya!</p> },
          { title: '📌 Kapan pakai faktorisasi?', content: <p className="text-sm">Faktorisasi dipakai saat substitusi menghasilkan 0/0. Faktorkan pembilang dan penyebut, lalu coret faktor (x−a) yang sama.</p> },
          { title: '📌 Kapan pakai L\'Hôpital?', content: <p className="text-sm">Aturan L'Hôpital dipakai saat substitusi tetap menghasilkan 0/0 atau ∞/∞ setelah dicoba faktorkan. Turunkan pembilang dan penyebut masing-masing, lalu evaluasi ulang.</p> },
        ]} color="rose" />
        <QuizBank questions={mathSectionQuiz.kalkulus[0]} color="rose" />
      </>,
    },
    {
      title: 'Turunan (Derivatif)',
      body: <>
        <p className="text-sm text-gray-700 mb-3">
          Turunan = <strong>laju perubahan</strong> fungsi. Secara geometri, turunan di suatu titik
          adalah <em>kemiringan garis singgung</em> kurva di titik tersebut.
        </p>
        <DerivativeVisual />
        <p className="text-xs text-center text-gray-500 mb-4">Garis merah = garis tangen di titik (x₀, f(x₀)) = f'(x₀)</p>
        <p className="text-sm font-semibold text-gray-800 mb-2">Rumus Dasar Turunan:</p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-rose-50">
                <th className="text-left px-3 py-2.5 font-bold text-rose-800 border-b-2 border-rose-200">f(x)</th>
                <th className="text-left px-3 py-2.5 font-bold text-rose-800 border-b-2 border-rose-200">f'(x)</th>
                <th className="text-left px-3 py-2.5 font-bold text-rose-800 border-b-2 border-rose-200">Contoh</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['xⁿ', 'n·xⁿ⁻¹', 'x³ → 3x²'],
                ['c (konstanta)', '0', '5 → 0'],
                ['sin x', 'cos x', 'sin x → cos x'],
                ['cos x', '−sin x', 'cos x → −sin x'],
                ['eˣ', 'eˣ', 'eˣ → eˣ'],
                ['ln x', '1/x', 'ln x → 1/x'],
              ].map(([f, fd, ex], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50/30'}>
                  <td className="px-3 py-2 font-mono text-gray-800 border-b border-gray-100">{f}</td>
                  <td className="px-3 py-2 font-mono text-rose-700 font-bold border-b border-gray-100">{fd}</td>
                  <td className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ExampleBox label="Contoh Langkah-demi-Langkah">
          <div className="text-sm space-y-2">
            <p className="text-gray-800 font-semibold">Tentukan f'(x) dari f(x) = 3x² + 2x − 5</p>
            <div className="font-mono text-xs space-y-1 bg-rose-50 rounded-lg p-3">
              <p className="text-gray-500">Suku 1: 3x² → turunkan: 2 × 3 × x¹ = 6x</p>
              <p className="text-gray-500">Suku 2: 2x → turunkan: 1 × 2 × x⁰ = 2</p>
              <p className="text-gray-500">Suku 3: −5 (konstanta) → turunkan: 0</p>
              <p className="text-rose-700 font-bold mt-1">f'(x) = 6x + 2</p>
            </div>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Jika f(x) = x⁴ − 3x² + 7, berapa f'(x)?"
          options={['4x³ − 3x', '4x³ − 6x', '4x⁴ − 6x²', 'x³ − 6x']}
          correctIndex={1}
          explanation="f'(x) = 4x³ − 6x. Penjelasan: x⁴ → 4x³, −3x² → −6x, 7 → 0. Ingat rumus: xⁿ → n·xⁿ⁻¹."
          color="rose"
        />
        <RevealBox
          question="Tentukan gradien garis singgung kurva y = x³ di titik x = 2."
          answer={<span>Gradien = turunan = y' = 3x². <br/>Di x = 2: y'(2) = 3(2²) = 3(4) = <strong>12</strong>. <br/>Artinya garis singgung di titik x = 2 memiliki kemiringan 12.</span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.kalkulus[1]} color="rose" />
      </>,
    },
    {
      title: 'Aturan Turunan & Aplikasi',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Untuk fungsi yang lebih kompleks, gunakan tiga aturan turunan berikut:
        </p>
        <div className="space-y-3 my-4">
          {[
            { name: 'Product Rule (Perkalian)', formula: '(fg)\' = f\'g + fg\'', ex: 'h = x²·sin x  →  h\' = 2x·sin x + x²·cos x', color: 'blue' },
            { name: 'Quotient Rule (Pembagian)', formula: '(f/g)\' = (f\'g − fg\') / g²', ex: 'h = x²/sin x  →  h\' = (2x·sin x − x²·cos x) / sin²x', color: 'purple' },
            { name: 'Chain Rule (Komposisi)', formula: 'd/dx[f(g(x))] = f\'(g(x))·g\'(x)', ex: 'h = (3x+1)⁴  →  h\' = 4(3x+1)³·3 = 12(3x+1)³', color: 'rose' },
          ].map(({ name, formula, ex, color }) => {
            const bg = { blue: 'bg-blue-50 border-blue-200', purple: 'bg-purple-50 border-purple-200', rose: 'bg-rose-50 border-rose-200' }[color]
            const txt = { blue: 'text-blue-900', purple: 'text-purple-900', rose: 'text-rose-900' }[color]
            const mono = { blue: 'text-blue-700', purple: 'text-purple-700', rose: 'text-rose-700' }[color]
            return (
              <div key={name} className={`border rounded-xl p-4 ${bg}`}>
                <p className={`font-bold text-sm mb-2 ${txt}`}>{name}</p>
                <p className={`font-mono text-sm ${mono} mb-2`}>{formula}</p>
                <p className="text-xs text-gray-500 font-mono bg-white rounded-lg px-3 py-1.5">{ex}</p>
              </div>
            )
          })}
        </div>
        <p className="text-sm font-semibold text-gray-800 mt-5 mb-2">Aplikasi: Mencari Nilai Ekstrim</p>
        <StepList steps={[
          'Cari turunan pertama: f\'(x)',
          'Set f\'(x) = 0 untuk menemukan titik kritis',
          'Cari turunan kedua: f\'\'(x)',
          'Jika f\'\'(x) < 0 → titik MAKSIMUM | f\'\'(x) > 0 → titik MINIMUM',
        ]} />
        <ExampleBox label="Contoh Nilai Maksimum">
          <div className="font-mono text-sm space-y-1 text-gray-700">
            <p>f(x) = −x² + 4x − 1</p>
            <p>f'(x) = −2x + 4 = 0  →  x = 2</p>
            <p>f(2) = −4 + 8 − 1 = <strong className="text-emerald-700">3</strong></p>
            <p>f''(2) = −2 &lt; 0  → <strong className="text-emerald-700">Maksimum ✓</strong></p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Turunan dari h(x) = (2x + 1)⁵ menggunakan chain rule adalah..."
          options={['5(2x+1)⁴', '10(2x+1)⁴', '5(2x+1)⁴ · 2x', '2(2x+1)⁵']}
          correctIndex={1}
          explanation="Chain rule: h'(x) = 5(2x+1)⁴ × (2x+1)' = 5(2x+1)⁴ × 2 = 10(2x+1)⁴. Jangan lupa kalikan turunan bagian dalam!"
          color="rose"
        />
        <RevealBox
          question="Sebuah perusahaan memproduksi x unit barang. Biaya: C(x) = x² − 8x + 20. Berapa unit untuk biaya minimum?"
          answer={<span>C'(x) = 2x − 8 = 0 → x = 4. <br/>C''(x) = 2 &gt; 0 → <strong>Minimum ✓</strong> <br/>Biaya minimum: C(4) = 16 − 32 + 20 = <strong>4</strong> <br/>Produksi 4 unit memberikan biaya paling rendah.</span>}
          color="emerald"
        />
        <QuizBank questions={mathSectionQuiz.kalkulus[2]} color="rose" />
      </>,
    },
    {
      title: 'Integral Dasar',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Integral adalah <strong>kebalikan dari turunan</strong> (anti-derivatif). Digunakan untuk menghitung luas daerah, volume, dan akumulasi.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-2">Rumus Integral Dasar:</p>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="text-left px-3 py-2.5 font-bold text-emerald-800 border-b-2 border-emerald-200">f(x)</th>
                <th className="text-left px-3 py-2.5 font-bold text-emerald-800 border-b-2 border-emerald-200">∫ f(x) dx</th>
                <th className="text-left px-3 py-2.5 font-bold text-emerald-800 border-b-2 border-emerald-200">Contoh</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['xⁿ', 'xⁿ⁺¹/(n+1) + C', '∫x³ dx = x⁴/4 + C'],
                ['k (konstanta)', 'kx + C', '∫5 dx = 5x + C'],
                ['1/x', 'ln|x| + C', '∫(1/x) dx = ln|x| + C'],
                ['eˣ', 'eˣ + C', '∫eˣ dx = eˣ + C'],
                ['sin x', '−cos x + C', '∫sin x dx = −cos x + C'],
                ['cos x', 'sin x + C', '∫cos x dx = sin x + C'],
              ].map(([f, integ, ex], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                  <td className="px-3 py-2 font-mono text-gray-800 border-b border-gray-100">{f}</td>
                  <td className="px-3 py-2 font-mono text-emerald-700 font-bold border-b border-gray-100">{integ}</td>
                  <td className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TipBox type="warning">
          <strong>Jangan lupa + C!</strong> Integral tak tentu selalu ditambah konstanta C. Integral tertentu (ada batas) tidak perlu C.
        </TipBox>
        <ExampleBox label="Integral Tertentu (Luas Daerah)">
          <div className="font-mono text-sm space-y-1 text-gray-700">
            <p>Luas di bawah f(x) = x² dari x = 0 sampai x = 3:</p>
            <p className="text-gray-500">∫₀³ x² dx = [x³/3]₀³</p>
            <p className="text-gray-500">= (3³/3) − (0³/3)</p>
            <p className="text-gray-500">= 27/3 − 0</p>
            <p className="text-emerald-700 font-bold">= 9 satuan luas</p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Hitung ∫ (4x³ + 6x) dx"
          options={['x⁴ + 3x² + C', '12x² + 6 + C', '4x⁴ + 6x² + C', 'x⁴ + 3x²']}
          correctIndex={0}
          explanation="∫4x³ dx = 4 × x⁴/4 = x⁴. ∫6x dx = 6 × x²/2 = 3x². Total: x⁴ + 3x² + C. Jangan lupa + C untuk integral tak tentu!"
          color="emerald"
        />
        <RevealBox
          question="Hitung luas daerah di bawah kurva y = 3x² dari x = 1 sampai x = 3."
          answer={<span>∫₁³ 3x² dx = [3 × x³/3]₁³ = [x³]₁³ <br/>= 3³ − 1³ = 27 − 1 = <strong>26 satuan luas</strong></span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.kalkulus[3]} color="rose" />
      </>,
    },
    {
      title: 'Integral Substitusi & Aplikasi',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Untuk integral yang lebih rumit, gunakan <strong>metode substitusi</strong> (substitusi-u).
        </p>
        <FormulaCard color="emerald">
          <div className="space-y-1">
            <p><strong>Metode Substitusi:</strong></p>
            <p>Jika ∫ f(g(x)) · g'(x) dx, maka misal u = g(x), du = g'(x) dx</p>
            <p>→ ∫ f(u) du (lebih sederhana)</p>
          </div>
        </FormulaCard>
        <ExampleBox label="Contoh Substitusi">
          <div className="font-mono text-sm space-y-1.5 text-gray-700">
            <p>∫ 2x · (x² + 1)³ dx</p>
            <p className="text-gray-500 text-xs">Misal u = x² + 1, du = 2x dx</p>
            <p className="text-gray-500">= ∫ u³ du</p>
            <p className="text-gray-500">= u⁴/4 + C</p>
            <p className="text-emerald-700 font-bold">= (x² + 1)⁴/4 + C</p>
          </div>
        </ExampleBox>
        <p className="text-sm font-semibold text-gray-800 mt-5 mb-3">Aplikasi Integral dalam Ujian S2:</p>
        <ConceptGrid items={[
          { title: 'Luas Daerah', desc: 'L = ∫ₐᵇ |f(x)| dx — hitung luas di bawah kurva', example: 'Luas antara y = x² dan sumbu-x' },
          { title: 'Luas Antara 2 Kurva', desc: 'L = ∫ₐᵇ |f(x) − g(x)| dx', example: 'Luas antara y = x² dan y = x' },
          { title: 'Volume Benda Putar', desc: 'V = π ∫ₐᵇ [f(x)]² dx (metode cakram)', example: 'Putar y = √x terhadap sumbu-x' },
          { title: 'Rata-rata Fungsi', desc: 'Rata-rata = (1/(b−a)) ∫ₐᵇ f(x) dx', example: 'Rata-rata suhu selama interval waktu' },
        ]} />
        <TipBox type="tip">
          <strong>Untuk tes S2:</strong> Kuasai integral dasar dan substitusi sederhana. Soal luas daerah (integral tertentu) paling sering muncul. Volume benda putar hanya untuk program S2 Teknik/Sains.
        </TipBox>
        <MiniQuiz
          question="Hitung ∫ 6x(x² + 3)² dx dengan substitusi u = x² + 3"
          options={['(x² + 3)³ + C', '2(x² + 3)³ + C', '3(x² + 3)² + C', '(x² + 3)² + C']}
          correctIndex={0}
          explanation="u = x² + 3, du = 2x dx → 6x dx = 3 du. ∫ 3u² du = 3 × u³/3 = u³ + C = (x² + 3)³ + C."
          color="emerald"
        />
        <RevealBox
          question="Hitung luas daerah antara kurva y = x² dan y = x (dari perpotongan x=0 sampai x=1)."
          answer={<span>Luas = ∫₀¹ |x − x²| dx = ∫₀¹ (x − x²) dx <br/>= [x²/2 − x³/3]₀¹ <br/>= (1/2 − 1/3) − (0) <br/>= 3/6 − 2/6 = <strong>1/6 satuan luas</strong></span>}
          color="blue"
        />
        <QuizBank questions={mathSectionQuiz.kalkulus[4]} color="rose" />
      </>,
    },
  ],
}
