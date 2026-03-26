// ═══════════════════════════════════════════════════════════════
// Daily English Conversation — Interactive Learning Content
// ═══════════════════════════════════════════════════════════════
import { useState } from 'react'

// ── Reusable Components ────────────────────────────────────────

export function SceneIllustration({ title, children, bg = 'from-blue-50 to-indigo-50' }) {
  return (
    <div className="my-4 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className={`bg-gradient-to-r ${bg} px-4 py-2.5 border-b border-gray-200`}>
        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">{title}</p>
      </div>
      <div className="p-3 bg-white flex justify-center overflow-x-auto">{children}</div>
    </div>
  )
}

export function ConversationCard({ speakers, lines, situation, title, dialog }) {
  const [showTranslation, setShowTranslation] = useState(false)
  const speakerColors = {
    A: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-500' },
    B: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', badge: 'bg-emerald-500' },
    C: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-500' },
  }
  // Support p10 dialog format: flatten dialog array into lines
  const colorKeys = ['A', 'B', 'C']
  let normalizedLines = lines
  let normalizedSpeakers = speakers
  if (dialog && !lines) {
    const speakerMap = {}
    let idx = 0
    normalizedLines = []
    dialog.forEach(d => {
      if (!speakerMap[d.speaker]) {
        speakerMap[d.speaker] = colorKeys[idx] || 'A'
        idx++
      }
      const key = speakerMap[d.speaker]
      if (d.lines) {
        d.lines.forEach(l => {
          normalizedLines.push({ speaker: key, en: l.text || l.en, id: l.translation || l.id, note: l.note })
        })
      }
    })
    normalizedSpeakers = {}
    Object.entries(speakerMap).forEach(([name, key]) => { normalizedSpeakers[key] = name })
  }
  const headerText = situation || title
  return (
    <div className="my-4 rounded-xl border border-gray-200 overflow-hidden">
      {headerText && (
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
          <p className="text-xs text-gray-600 italic">📍 {headerText}</p>
          <button onClick={() => setShowTranslation(!showTranslation)} className="text-[10px] px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold hover:bg-indigo-200 transition">
            {showTranslation ? 'Hide' : 'Show'} Translation
          </button>
        </div>
      )}
      <div className="p-3 space-y-2.5">
        {(normalizedLines || []).map((line, i) => {
          const s = speakerColors[line.speaker] || speakerColors.A
          return (
            <div key={i} className={`${s.bg} ${s.border} border rounded-xl px-3 py-2`}>
              <div className="flex items-start gap-2">
                <span className={`${s.badge} text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 mt-0.5`}>
                  {(normalizedSpeakers && normalizedSpeakers[line.speaker]) || line.speaker}
                </span>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${s.text}`}>{line.en}</p>
                  {showTranslation && line.id && (
                    <p className="text-xs text-gray-500 mt-0.5 italic">→ {line.id}</p>
                  )}
                  {line.note && (
                    <p className="text-[10px] text-amber-600 mt-1 bg-amber-50 px-2 py-0.5 rounded-full inline-block">💡 {line.note}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function KeyPhrasesCard({ title, phrases, color = 'indigo' }) {
  const colors = {
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', badge: 'bg-indigo-500' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', badge: 'bg-emerald-500' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-500' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', badge: 'bg-rose-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', badge: 'bg-purple-500' },
  }
  const c = colors[color] || colors.indigo
  return (
    <div className={`my-4 ${c.bg} ${c.border} border rounded-xl p-4`}>
      <h4 className={`font-bold text-sm ${c.text} mb-3 flex items-center gap-2`}>
        <span className={`${c.badge} text-white text-[10px] px-2 py-0.5 rounded-full`}>KEY</span>
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {phrases.map((p, i) => (
          <div key={i} className="bg-white rounded-lg px-3 py-2 border border-gray-100">
            <p className={`text-sm font-semibold ${c.text}`}>{p.en || p.phrase}</p>
            <p className="text-xs text-gray-500">{p.id || p.meaning}</p>
            {p.usage && <p className="text-[10px] text-gray-400 italic mt-0.5">e.g. "{p.usage}"</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function FillInBlank({ sentence, blank, options, answer, explanation }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="bg-gray-50 rounded-xl p-3 my-2 border border-gray-200">
      <p className="text-sm text-gray-700 mb-2">
        {sentence.split('___').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className={`inline-block px-2 py-0.5 rounded-lg font-bold text-sm mx-1 ${
                revealed ? (selected === answer ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800') : 'bg-yellow-100 text-yellow-800'
              }`}>
                {selected || '______'}
              </span>
            )}
          </span>
        ))}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {options.map(opt => (
          <button key={opt} onClick={() => { setSelected(opt); setRevealed(false) }}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition ${
              selected === opt ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-indigo-400'
            }`}>{opt}</button>
        ))}
      </div>
      {selected && !revealed && (
        <button onClick={() => setRevealed(true)} className="text-[10px] px-3 py-1 rounded-full bg-emerald-500 text-white font-bold">Check</button>
      )}
      {revealed && (
        <p className={`text-xs mt-1 ${selected === answer ? 'text-green-600' : 'text-red-600'}`}>
          {selected === answer ? '✅ Correct!' : `❌ Answer: "${answer}"`} {explanation && `— ${explanation}`}
        </p>
      )}
    </div>
  )
}

export function CulturalNote({ children, note }) {
  return (
    <div className="my-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3">
      <span className="text-xl flex-shrink-0">🌍</span>
      <div className="text-xs text-amber-800">{children || note}</div>
    </div>
  )
}

export function PronunciationTip({ word, ipa, tip }) {
  if (!word && tip) {
    return (
      <div className="my-3 bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 flex gap-3">
        <span className="text-xl flex-shrink-0">🗣️</span>
        <p className="text-xs text-purple-800">{tip}</p>
      </div>
    )
  }
  return (
    <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-lg px-3 py-1.5 my-1 mr-2">
      <span className="text-sm font-bold text-purple-800">{word}</span>
      <span className="text-xs text-purple-500 font-mono">/{ipa}/</span>
      {tip && <span className="text-[10px] text-purple-600">— {tip}</span>}
    </div>
  )
}

export function ExpressionMeter({ formal, informal, expressions }) {
  // Support p10 expressions format: [{text, level, label}]
  if (expressions && !formal) {
    return (
      <div className="my-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-gray-200 p-3">
        <p className="text-[10px] font-bold text-gray-600 mb-2">🎭 EXPRESSION FORMALITY</p>
        <div className="space-y-1.5">
          {expressions.map((e, i) => {
            const colors = [
              'text-blue-800 bg-blue-50 border-blue-200',
              'text-emerald-800 bg-emerald-50 border-emerald-200',
              'text-orange-800 bg-orange-50 border-orange-200',
            ]
            return (
              <div key={i} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 border ${colors[i] || colors[0]}`}>
                <span className="text-[9px] font-bold bg-white px-1.5 py-0.5 rounded-full">{e.label}</span>
                <p className="text-xs font-medium">"{e.text}"</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div className="my-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border border-gray-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">🎩 FORMAL</span>
        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">😎 INFORMAL</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          {(formal || []).map((f, i) => (
            <p key={i} className="text-xs text-blue-800 bg-white rounded-lg px-2 py-1.5 mb-1 border border-blue-100">"{f}"</p>
          ))}
        </div>
        <div>
          {(informal || []).map((f, i) => (
            <p key={i} className="text-xs text-orange-800 bg-white rounded-lg px-2 py-1.5 mb-1 border border-orange-100">"{f}"</p>
          ))}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations
// ═══════════════════════════════════════════════════════════════

function CoffeeShopScene() {
  return (
    <SceneIllustration title="☕ Scene: At the Coffee Shop" bg="from-amber-50 to-orange-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Counter */}
        <rect x="150" y="80" width="200" height="70" rx="8" fill="#92400e"/>
        <rect x="150" y="80" width="200" height="10" rx="4" fill="#78350f"/>
        {/* Menu board */}
        <rect x="190" y="15" width="120" height="55" rx="6" fill="#1e293b"/>
        <text x="250" y="35" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">MENU</text>
        <text x="250" y="48" textAnchor="middle" fill="#f8fafc" fontSize="6">Latte $4.50 | Mocha $5.00</text>
        <text x="250" y="58" textAnchor="middle" fill="#f8fafc" fontSize="6">Espresso $3.00 | Tea $3.50</text>
        {/* Coffee cups on counter */}
        <rect x="200" y="72" width="15" height="10" rx="2" fill="#f59e0b"/>
        <rect x="230" y="70" width="18" height="12" rx="2" fill="white" stroke="#d1d5db" strokeWidth="1"/>
        {/* Barista */}
        <circle cx="350" cy="55" r="16" fill="#fbbf24"/>
        <circle cx="345" cy="52" r="1.5" fill="#1e293b"/>
        <circle cx="355" cy="52" r="1.5" fill="#1e293b"/>
        <path d="M345 58 Q350 63, 355 58" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
        <rect x="338" y="71" width="24" height="30" rx="4" fill="#059669"/>
        <text x="350" y="90" textAnchor="middle" fill="white" fontSize="6">Staff</text>
        {/* Customer */}
        <circle cx="120" cy="90" r="16" fill="#60a5fa"/>
        <circle cx="115" cy="87" r="1.5" fill="#1e293b"/>
        <circle cx="125" cy="87" r="1.5" fill="#1e293b"/>
        <path d="M115 93 Q120 98, 125 93" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
        <rect x="108" y="106" width="24" height="30" rx="4" fill="#3b82f6"/>
        <text x="120" y="126" textAnchor="middle" fill="white" fontSize="6">You</text>
        {/* Speech bubbles */}
        <rect x="50" y="50" width="75" height="25" rx="10" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="87" y="66" textAnchor="middle" fill="#1e40af" fontSize="7">"Can I get a..."</text>
        <rect x="310" y="25" width="85" height="25" rx="10" fill="white" stroke="#86efac" strokeWidth="1"/>
        <text x="352" y="41" textAnchor="middle" fill="#166534" fontSize="7">"Sure! For here..."</text>
        {/* Floor */}
        <rect x="0" y="155" width="500" height="45" rx="0" fill="#f5f0e6"/>
        {/* Tables */}
        <circle cx="60" cy="170" r="20" fill="#d4a574" stroke="#92400e" strokeWidth="2"/>
        <circle cx="440" cy="170" r="20" fill="#d4a574" stroke="#92400e" strokeWidth="2"/>
      </svg>
    </SceneIllustration>
  )
}

function AirportScene() {
  return (
    <SceneIllustration title="✈️ Scene: At the Airport" bg="from-sky-50 to-blue-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="500" height="80" fill="#e0f2fe"/>
        {/* Plane */}
        <g transform="translate(350,30) scale(0.7)">
          <ellipse cx="0" cy="0" rx="40" ry="10" fill="#94a3b8"/>
          <polygon points="-35,-5 -55,-25 -25,-5" fill="#64748b"/>
          <polygon points="20,-3 30,-15 35,-3" fill="#64748b"/>
          <circle cx="-15" cy="-3" r="3" fill="#bae6fd"/>
          <circle cx="-5" cy="-3" r="3" fill="#bae6fd"/>
          <circle cx="5" cy="-3" r="3" fill="#bae6fd"/>
        </g>
        {/* Terminal building */}
        <rect x="0" y="80" width="500" height="70" fill="#e2e8f0"/>
        <rect x="50" y="85" width="400" height="55" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1"/>
        {/* Windows */}
        {[80,130,180,230,280,330,380].map(x => (
          <rect key={x} x={x} y="92" width="30" height="20" rx="3" fill="#bae6fd" stroke="#93c5fd" strokeWidth="1"/>
        ))}
        {/* Gate sign */}
        <rect x="200" y="118" width="100" height="18" rx="4" fill="#1e293b"/>
        <text x="250" y="131" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">GATE A12</text>
        {/* Floor */}
        <rect x="0" y="150" width="500" height="50" fill="#f1f5f9"/>
        {/* Traveler */}
        <circle cx="120" cy="140" r="14" fill="#f59e0b"/>
        <rect x="108" y="154" width="24" height="25" rx="4" fill="#1e293b"/>
        <rect x="95" y="165" width="16" height="20" rx="3" fill="#6366f1"/>
        <text x="103" y="180" textAnchor="middle" fill="white" fontSize="5">🧳</text>
        {/* Check-in counter person */}
        <rect x="300" y="130" width="60" height="25" rx="4" fill="#0891b2"/>
        <circle cx="330" cy="122" r="12" fill="#fbbf24"/>
        <text x="330" y="147" textAnchor="middle" fill="white" fontSize="6">Agent</text>
      </svg>
    </SceneIllustration>
  )
}

function RestaurantScene() {
  return (
    <SceneIllustration title="🍽️ Scene: At the Restaurant" bg="from-rose-50 to-pink-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Wall */}
        <rect x="0" y="0" width="500" height="110" fill="#fff1f2"/>
        {/* Picture frames */}
        <rect x="60" y="20" width="40" height="30" rx="3" fill="#fecdd3" stroke="#e11d48" strokeWidth="1"/>
        <rect x="400" y="20" width="40" height="30" rx="3" fill="#fecdd3" stroke="#e11d48" strokeWidth="1"/>
        {/* Lamp */}
        <line x1="250" y1="0" x2="250" y2="25" stroke="#d4d4d8" strokeWidth="2"/>
        <path d="M230,25 Q250,45 270,25" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
        {/* Table */}
        <rect x="130" y="100" width="240" height="12" rx="4" fill="#92400e"/>
        <rect x="160" y="112" width="8" height="40" fill="#78350f"/>
        <rect x="332" y="112" width="8" height="40" fill="#78350f"/>
        {/* Plates */}
        <ellipse cx="200" cy="96" rx="22" ry="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        <ellipse cx="300" cy="96" rx="22" ry="8" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        {/* Glasses */}
        <rect x="238" y="82" width="8" height="14" rx="2" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5"/>
        <rect x="254" y="82" width="8" height="14" rx="2" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5"/>
        {/* Customer left */}
        <circle cx="170" cy="75" r="14" fill="#a78bfa"/>
        <rect x="158" y="89" width="24" height="20" rx="4" fill="#7c3aed"/>
        {/* Customer right */}
        <circle cx="330" cy="75" r="14" fill="#fb923c"/>
        <rect x="318" y="89" width="24" height="20" rx="4" fill="#ea580c"/>
        {/* Waiter */}
        <circle cx="420" cy="80" r="12" fill="#fbbf24"/>
        <rect x="410" y="92" width="20" height="22" rx="3" fill="#1e293b"/>
        <text x="420" y="108" textAnchor="middle" fill="white" fontSize="5">Waiter</text>
        {/* Menu in hand */}
        <rect x="435" y="88" width="12" height="16" rx="2" fill="#fef3c7" stroke="#fcd34d" strokeWidth="0.5"/>
        {/* Floor */}
        <rect x="0" y="150" width="500" height="50" fill="#f5f0e6"/>
      </svg>
    </SceneIllustration>
  )
}

function UniversityScene() {
  return (
    <SceneIllustration title="🎓 Scene: At the University Campus" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="500" height="80" fill="#ecfdf5"/>
        {/* Sun */}
        <circle cx="420" cy="35" r="20" fill="#fcd34d"/>
        {/* Building */}
        <rect x="150" y="30" width="200" height="100" rx="4" fill="#e2e8f0"/>
        <rect x="220" y="20" width="60" height="15" rx="3" fill="#94a3b8"/>
        <text x="250" y="30" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">UNIVERSITY</text>
        {/* Windows */}
        {[170,210,250,290,320].map(x => (
          <rect key={x} x={x} y="45" width="20" height="25" rx="2" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="0.5"/>
        ))}
        {/* Door */}
        <rect x="230" y="90" width="40" height="40" rx="3" fill="#78350f"/>
        <circle cx="264" cy="112" r="2" fill="#fcd34d"/>
        {/* Grass */}
        <rect x="0" y="130" width="500" height="70" fill="#bbf7d0"/>
        {/* Path */}
        <rect x="220" y="130" width="60" height="70" fill="#d6d3d1"/>
        {/* Student 1 */}
        <circle cx="100" cy="140" r="14" fill="#60a5fa"/>
        <rect x="88" y="154" width="24" height="20" rx="4" fill="#2563eb"/>
        <rect x="80" y="160" width="12" height="15" rx="2" fill="#fcd34d"/>
        {/* Student 2 */}
        <circle cx="140" cy="145" r="14" fill="#f472b6"/>
        <rect x="128" y="159" width="24" height="20" rx="4" fill="#db2777"/>
        {/* Speech bubbles */}
        <rect x="55" y="115" width="70" height="22" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="90" y="130" textAnchor="middle" fill="#1e40af" fontSize="6">"Hi! Are you..."</text>
        {/* Tree */}
        <circle cx="400" cy="110" r="25" fill="#22c55e"/>
        <rect x="396" y="130" width="8" height="20" fill="#92400e"/>
        {/* Bench */}
        <rect x="370" y="155" width="60" height="8" rx="2" fill="#78350f"/>
        <rect x="375" y="163" width="6" height="12" fill="#78350f"/>
        <rect x="419" y="163" width="6" height="12" fill="#78350f"/>
      </svg>
    </SceneIllustration>
  )
}

function JobInterviewScene() {
  return (
    <SceneIllustration title="💼 Scene: Job Interview" bg="from-slate-50 to-gray-100">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Office wall */}
        <rect x="0" y="0" width="500" height="140" fill="#f8fafc"/>
        {/* Whiteboard */}
        <rect x="180" y="10" width="140" height="60" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
        <text x="250" y="35" textAnchor="middle" fill="#64748b" fontSize="7">Company Vision</text>
        <text x="250" y="50" textAnchor="middle" fill="#94a3b8" fontSize="6">Innovation • Growth</text>
        {/* Desk */}
        <rect x="100" y="110" width="300" height="15" rx="4" fill="#44403c"/>
        <rect x="130" y="125" width="10" height="30" fill="#292524"/>
        <rect x="360" y="125" width="10" height="30" fill="#292524"/>
        {/* Laptop */}
        <rect x="230" y="95" width="40" height="15" rx="2" fill="#1e293b"/>
        <rect x="225" y="108" width="50" height="3" rx="1" fill="#374151"/>
        {/* Documents */}
        <rect x="300" y="98" width="20" height="12" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
        <rect x="325" y="100" width="20" height="12" rx="1" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
        {/* Interviewer */}
        <circle cx="340" cy="80" r="16" fill="#fbbf24"/>
        <rect x="328" y="96" width="24" height="18" rx="3" fill="#1e293b"/>
        <text x="340" y="130" textAnchor="end" fill="#64748b" fontSize="6">Interviewer</text>
        {/* Candidate */}
        <circle cx="160" cy="82" r="16" fill="#60a5fa"/>
        <rect x="148" y="98" width="24" height="18" rx="3" fill="#2563eb"/>
        <text x="160" y="130" textAnchor="start" fill="#64748b" fontSize="6">You</text>
        {/* Floor */}
        <rect x="0" y="155" width="500" height="45" fill="#e7e5e4"/>
        {/* Plant */}
        <rect x="30" y="120" width="12" height="20" rx="3" fill="#78350f"/>
        <circle cx="36" cy="110" r="15" fill="#22c55e"/>
        <circle cx="28" cy="105" r="10" fill="#16a34a"/>
      </svg>
    </SceneIllustration>
  )
}

function DoctorScene() {
  return (
    <SceneIllustration title="🏥 Scene: At the Doctor's Office" bg="from-cyan-50 to-teal-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Wall */}
        <rect x="0" y="0" width="500" height="140" fill="#f0fdfa"/>
        {/* Cross sign */}
        <rect x="220" y="10" width="60" height="40" rx="6" fill="white" stroke="#14b8a6" strokeWidth="2"/>
        <rect x="240" y="18" width="20" height="6" rx="1" fill="#14b8a6"/>
        <rect x="247" y="15" width="6" height="20" rx="1" fill="#14b8a6"/>
        {/* Desk */}
        <rect x="200" y="100" width="180" height="12" rx="3" fill="#44403c"/>
        {/* Doctor */}
        <circle cx="340" cy="70" r="16" fill="#fbbf24"/>
        <rect x="328" y="86" width="24" height="22" rx="3" fill="white" stroke="#14b8a6" strokeWidth="1"/>
        <text x="340" y="100" textAnchor="middle" fill="#14b8a6" fontSize="5">Dr.</text>
        {/* Stethoscope */}
        <path d="M330 92 Q325 100, 335 105" fill="none" stroke="#475569" strokeWidth="1.5"/>
        {/* Patient */}
        <circle cx="160" cy="75" r="16" fill="#93c5fd"/>
        <rect x="148" y="91" width="24" height="22" rx="3" fill="#3b82f6"/>
        {/* Clipboard */}
        <rect x="360" y="90" width="18" height="12" rx="1" fill="#fef3c7" stroke="#fcd34d" strokeWidth="0.5"/>
        {/* Floor */}
        <rect x="0" y="140" width="500" height="60" fill="#e2e8f0"/>
        {/* Chair */}
        <rect x="140" y="115" width="40" height="8" rx="3" fill="#78350f"/>
        <rect x="140" y="108" width="5" height="30" fill="#78350f"/>
        <rect x="175" y="123" width="5" height="15" fill="#78350f"/>
      </svg>
    </SceneIllustration>
  )
}

function ShoppingScene() {
  return (
    <SceneIllustration title="🛍️ Scene: Shopping at the Mall" bg="from-pink-50 to-fuchsia-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Store front */}
        <rect x="80" y="10" width="340" height="120" fill="#fdf2f8"/>
        <rect x="80" y="10" width="340" height="25" rx="4" fill="#ec4899"/>
        <text x="250" y="27" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">FASHION STORE</text>
        {/* Shelves */}
        <rect x="100" y="50" width="80" height="8" fill="#d4a574"/>
        <rect x="100" y="80" width="80" height="8" fill="#d4a574"/>
        {/* Clothes on shelf */}
        <rect x="110" y="40" width="15" height="12" rx="2" fill="#60a5fa"/>
        <rect x="130" y="38" width="15" height="14" rx="2" fill="#f472b6"/>
        <rect x="150" y="40" width="15" height="12" rx="2" fill="#a78bfa"/>
        <rect x="110" y="68" width="15" height="14" rx="2" fill="#34d399"/>
        <rect x="130" y="70" width="15" height="12" rx="2" fill="#fbbf24"/>
        {/* Mirror */}
        <ellipse cx="320" cy="75" rx="25" ry="40" fill="#e0f2fe" stroke="#93c5fd" strokeWidth="1"/>
        {/* Cash register */}
        <rect x="370" y="85" width="35" height="25" rx="3" fill="#374151"/>
        <rect x="375" y="90" width="25" height="10" rx="2" fill="#4ade80"/>
        {/* Customer */}
        <circle cx="220" cy="80" r="16" fill="#f472b6"/>
        <rect x="208" y="96" width="24" height="22" rx="3" fill="#db2777"/>
        {/* Shopping bag */}
        <rect x="195" y="100" width="12" height="15" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
        {/* Shop assistant */}
        <circle cx="380" cy="70" r="14" fill="#fbbf24"/>
        <rect x="368" y="84" width="24" height="20" rx="3" fill="#1e293b"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="70" fill="#fce7f3"/>
        {/* Price tags */}
        <rect x="240" y="140" width="30" height="12" rx="4" fill="white" stroke="#ec4899" strokeWidth="0.5"/>
        <text x="255" y="149" textAnchor="middle" fill="#ec4899" fontSize="5">$29.99</text>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// CONVERSATION DATA
// ═══════════════════════════════════════════════════════════════

export const conversations = [
  // ─── Day 1: Coffee Shop ───────────────────────────────────
  {
    id: 'coffee-shop',
    day: 1,
    title: '☕ Ordering at a Coffee Shop',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div>
        <CoffeeShopScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Barista' }}
          situation="A busy coffee shop in the morning"
          lines={[
            { speaker: 'B', en: "Hi there! Welcome to Bean & Brew. What can I get for you?", id: "Hai! Selamat datang di Bean & Brew. Mau pesan apa?" },
            { speaker: 'A', en: "Hi! Could I get a large iced latte with oat milk, please?", id: "Hai! Bisa saya pesan iced latte besar dengan susu oat?", note: '"Could I get..." lebih sopan daripada "I want..."' },
            { speaker: 'B', en: "Sure thing! Would you like any flavoring with that?", id: "Tentu! Mau ditambah sirup rasa?", note: '"Sure thing" = cara casual bilang "tentu"' },
            { speaker: 'A', en: "Hmm, could I add a shot of vanilla, please?", id: "Hmm, bisa ditambah vanilla?" },
            { speaker: 'B', en: "Absolutely! That'll be $6.50. Is that for here or to go?", id: "Tentu! Totalnya $6.50. Untuk di sini atau dibawa?" },
            { speaker: 'A', en: "To go, please. Can I pay by card?", id: "Dibawa. Bisa bayar pakai kartu?" },
            { speaker: 'B', en: "Of course! Just tap right here. Your drink will be ready at the end of the counter.", id: "Tentu! Tap di sini ya. Minumannya akan siap di ujung counter." },
            { speaker: 'A', en: "Great, thank you so much!", id: "Baik, terima kasih banyak!" },
            { speaker: 'B', en: "You're welcome! Have a great day!", id: "Sama-sama! Semoga harinya menyenangkan!" },
          ]}
        />
        <KeyPhrasesCard title="Expressions for Ordering" color="amber" phrases={[
          { en: "Could I get...?", id: "Bisa saya pesan...?", usage: "Could I get a cappuccino?" },
          { en: "I'd like to have...", id: "Saya ingin...", usage: "I'd like to have a croissant" },
          { en: "For here or to go?", id: "Di sini atau dibawa?", usage: "" },
          { en: "Can I pay by card/cash?", id: "Bisa bayar kartu/tunai?", usage: "" },
          { en: "Make it a large, please", id: "Yang ukuran besar ya", usage: "" },
          { en: "Could I also add...?", id: "Bisa tambahkan juga...?", usage: "Could I also add a muffin?" },
        ]} />
        <ExpressionMeter
          formal={["I would like to order...", "May I have...?", "Could you please..."]}
          informal={["Can I get...?", "I'll have...", "Gimme a..."]}
        />
        <CulturalNote>
          <p className="font-bold mb-1">Tipping Culture 🇺🇸</p>
          <p>Di Amerika, biasanya ada tip jar di coffee shop. Tipping $1-2 atau 15-20% umum di restoran. Di UK/Australia, tipping tidak wajib tapi dihargai.</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice: Fill in the Blank</h4>
        <FillInBlank sentence="___  I get a medium iced coffee, please?" options={["Could","Want","Give","Do"]} answer="Could" explanation="'Could I get...' adalah cara sopan untuk memesan" />
        <FillInBlank sentence="Is that for here or ___ ?" options={["to go","away","take","leave"]} answer="to go" explanation="'For here or to go' adalah frasa standar di coffee shop/restoran" />
        <FillInBlank sentence="Your drink will be ready ___ the end of the counter." options={["at","in","on","by"]} answer="at" explanation="'At the end of' menunjukkan lokasi spesifik" />
      </div>
    ),
  },

  // ─── Day 2: At the Airport ───────────────────────────────
  {
    id: 'airport',
    day: 2,
    title: '✈️ At the Airport',
    category: 'Travel',
    difficulty: 'Intermediate',
    color: 'blue',
    body: (
      <div>
        <AirportScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Agent' }}
          situation="Check-in counter at the international terminal"
          lines={[
            { speaker: 'B', en: "Good morning! May I see your passport and booking confirmation?", id: "Selamat pagi! Boleh saya lihat paspor dan konfirmasi booking Anda?" },
            { speaker: 'A', en: "Sure, here you go. I'm on the 10:45 flight to Singapore.", id: "Tentu, ini. Saya penerbangan jam 10:45 ke Singapura.", note: '"Here you go" digunakan saat menyerahkan sesuatu' },
            { speaker: 'B', en: "Thank you. Would you prefer a window or an aisle seat?", id: "Terima kasih. Anda lebih suka kursi dekat jendela atau lorong?" },
            { speaker: 'A', en: "A window seat, if available. And could I sit near the front?", id: "Kursi jendela, kalau tersedia. Bisa di bagian depan?", note: '"If available" = sopan menunjukkan fleksibilitas' },
            { speaker: 'B', en: "Let me check... Yes, I can give you 12A. Do you have any checked luggage?", id: "Saya cek dulu... Ya, saya bisa kasih 12A. Apakah Anda punya bagasi?" },
            { speaker: 'A', en: "Yes, just one suitcase. And I have a carry-on bag.", id: "Ya, satu koper saja. Dan saya bawa tas kabin." },
            { speaker: 'B', en: "Please place your suitcase on the scale. It's 18 kilos — within the limit. Here's your boarding pass. Your gate is A12, boarding starts at 10:15.", id: "Silakan taruh koper di timbangan. 18 kilo — masih dalam batas. Ini boarding pass Anda. Gate A12, boarding mulai jam 10:15." },
            { speaker: 'A', en: "Thank you! Where's the security checkpoint?", id: "Terima kasih! Di mana pemeriksaan keamanannya?" },
            { speaker: 'B', en: "Just follow the signs to the right. Have a safe flight!", id: "Ikuti saja tanda ke kanan. Semoga penerbangannya aman!" },
          ]}
        />
        <KeyPhrasesCard title="Airport Vocabulary" color="indigo" phrases={[
          { en: "boarding pass", id: "kartu boarding", usage: "Here's your boarding pass" },
          { en: "checked luggage", id: "bagasi (masuk kargo)", usage: "Do you have any checked luggage?" },
          { en: "carry-on bag", id: "tas kabin (bawa sendiri)", usage: "One carry-on per passenger" },
          { en: "aisle / window seat", id: "kursi lorong / jendela", usage: "Window or aisle?" },
          { en: "security checkpoint", id: "pos pemeriksaan keamanan", usage: "" },
          { en: "departure gate", id: "gerbang keberangkatan", usage: "Gate A12 is on the left" },
          { en: "layover / connecting flight", id: "transit / penerbangan lanjutan", usage: "I have a 3-hour layover" },
          { en: "delayed / on time", id: "terlambat / tepat waktu", usage: "The flight is delayed by 30 minutes" },
        ]} />
        <PronunciationTip word="aisle" ipa="aɪl" tip="'s' is silent! Sounds like 'I'll'" />
        <PronunciationTip word="luggage" ipa="ˈlʌɡ.ɪdʒ" tip="Stress on first syllable" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Would you prefer a window or an ___ seat?" options={["aisle","isle","I'll","oil"]} answer="aisle" explanation="'Aisle' /aɪl/ = lorong. 'Isle' = pulau kecil. Beda ejaan!" />
        <FillInBlank sentence="Please place your suitcase on the ___." options={["scale","weight","measure","balance"]} answer="scale" explanation="'Scale' = timbangan. 'On the scale' = di atas timbangan" />
      </div>
    ),
  },

  // ─── Day 3: Restaurant ───────────────────────────────────
  {
    id: 'restaurant',
    day: 3,
    title: '🍽️ Dining at a Restaurant',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'rose',
    body: (
      <div>
        <RestaurantScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Waiter', C: 'Friend' }}
          situation="A cozy Italian restaurant on a Friday evening"
          lines={[
            { speaker: 'B', en: "Good evening! Welcome. Do you have a reservation?", id: "Selamat malam! Selamat datang. Apakah sudah reservasi?" },
            { speaker: 'A', en: "Yes, a table for two under the name 'Andi'.", id: "Ya, meja untuk dua orang atas nama 'Andi'." },
            { speaker: 'B', en: "Right this way, please. Here are your menus. Can I start you off with some drinks?", id: "Silakan lewat sini. Ini menunya. Mau mulai dengan minuman?" },
            { speaker: 'A', en: "I'll have a sparkling water, please.", id: "Saya mau air soda.", note: '"I\'ll have..." = cara umum memesan di restoran' },
            { speaker: 'C', en: "And I'll have an iced tea.", id: "Dan saya es teh." },
            { speaker: 'B', en: "Are you ready to order, or do you need a few more minutes?", id: "Sudah siap pesan, atau perlu beberapa menit lagi?", note: 'Waiter selalu tanya ini — jangan panik!' },
            { speaker: 'A', en: "I'd like the grilled salmon with a side salad, please.", id: "Saya mau salmon panggang dengan salad samping." },
            { speaker: 'C', en: "Could I get the mushroom risotto? And is the pasta gluten-free?", id: "Bisa saya pesan risotto jamur? Dan apakah pastanya bebas gluten?", note: 'Wajar menanyakan alergi/dietary restrictions' },
            { speaker: 'B', en: "The risotto is gluten-free, but the pasta isn't. I can check with the kitchen if you'd like.", id: "Risottonya bebas gluten, tapi pastanya tidak. Saya bisa tanyakan ke dapur kalau mau." },
            { speaker: 'A', en: "Could we also get the bill when you have a chance?", id: "Bisa minta bill juga nanti?", note: '"When you have a chance" = santai, tidak mendesak' },
          ]}
        />
        <KeyPhrasesCard title="Restaurant Expressions" color="rose" phrases={[
          { en: "A table for two, please", id: "Meja untuk dua, please" },
          { en: "Are you ready to order?", id: "Sudah siap pesan?" },
          { en: "I'll have the...", id: "Saya mau..." },
          { en: "What do you recommend?", id: "Apa yang direkomendasikan?" },
          { en: "Could we get the bill?", id: "Bisa minta bill?" },
          { en: "Is this dish spicy?", id: "Apakah ini pedas?" },
          { en: "with a side of...", id: "dengan tambahan..." },
          { en: "I'm allergic to...", id: "Saya alergi terhadap..." },
        ]} />
        <ExpressionMeter
          formal={["I would like the...", "May I request...", "When it's convenient..."]}
          informal={["I'll have the...", "Can I get...?", "Whenever you get a sec..."]}
        />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I'd like the grilled salmon with a ___ salad." options={["side","edge","beside","lateral"]} answer="side" explanation="'A side salad' = salad sebagai lauk/pendamping" />
        <FillInBlank sentence="Could we get the ___ when you have a chance?" options={["bill","cost","price","money"]} answer="bill" explanation="'The bill' = nota/tagihan di restoran. UK: 'bill', US: juga 'check'" />
      </div>
    ),
  },

  // ─── Day 4: University / Making Friends ────────────────────
  {
    id: 'university',
    day: 4,
    title: '🎓 Making Friends at University',
    category: 'Academic',
    difficulty: 'Beginner',
    color: 'emerald',
    body: (
      <div>
        <UniversityScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'New Friend' }}
          situation="First day of a master's program — waiting outside the lecture hall"
          lines={[
            { speaker: 'A', en: "Hey! Is this the Advanced Data Science class?", id: "Hey! Ini kelas Advanced Data Science bukan?", note: 'Mulai percakapan dengan pertanyaan ringan' },
            { speaker: 'B', en: "Yeah, it is! Are you a new student too? I'm Sarah, by the way.", id: "Iya! Kamu juga mahasiswa baru? Ngomong-ngomong, saya Sarah.", note: '"By the way" digunakan untuk memperkenalkan diri secara casual' },
            { speaker: 'A', en: "Nice to meet you, Sarah! I'm Andi. Yeah, I just started this semester. Where are you from?", id: "Senang bertemu, Sarah! Saya Andi. Ya, saya baru mulai semester ini. Kamu dari mana?" },
            { speaker: 'B', en: "I'm from Melbourne. How about you?", id: "Saya dari Melbourne. Kamu?" },
            { speaker: 'A', en: "I'm from Indonesia. I'm still getting used to everything here!", id: "Saya dari Indonesia. Masih beradaptasi dengan semuanya di sini!", note: '"Getting used to" = sedang beradaptasi' },
            { speaker: 'B', en: "Same here! It's a lot to take in. Have you found a good spot to study on campus?", id: "Sama! Banyak yang perlu dipelajari. Sudah menemukan tempat enak untuk belajar di kampus?" },
            { speaker: 'A', en: "Not yet. Do you have any recommendations?", id: "Belum. Ada rekomendasi?" },
            { speaker: 'B', en: "The library on the third floor is great — super quiet. We should grab a coffee after class if you're free!", id: "Perpustakaan lantai tiga bagus — sangat tenang. Kita ngopi setelah kelas yuk kalau kamu free!", note: '"We should grab a coffee" = ajakan casual yang umum di Western culture' },
            { speaker: 'A', en: "That sounds great! I'd love that.", id: "Kedengarannya bagus! Mau banget.", note: '"Sounds great" = response positif yang natural' },
          ]}
        />
        <KeyPhrasesCard title="Making Friends & Small Talk" color="emerald" phrases={[
          { en: "Nice to meet you!", id: "Senang bertemu!" },
          { en: "Where are you from?", id: "Dari mana asalnya?" },
          { en: "What's your major?", id: "Jurusan apa?" },
          { en: "I'm still getting used to...", id: "Masih beradaptasi dengan..." },
          { en: "We should hang out sometime!", id: "Kapan-kapan kita main yuk!" },
          { en: "That sounds great/awesome!", id: "Kedengarannya bagus!" },
          { en: "How are you finding...?", id: "Gimana menurutmu...?", usage: "How are you finding the course?" },
          { en: "Let's keep in touch!", id: "Tetap hubungan ya!" },
        ]} />
        <CulturalNote>
          <p className="font-bold mb-1">Western Small Talk 💬</p>
          <p>Orang Barat sering memulai percakapan dengan topik ringan: cuaca, kelas, weekend plans. "How's it going?" sering dijawab singkat "Good, thanks!" — bukan jawaban panjang. "We should hang out" kadang hanya basa-basi, bukan rencana pasti.</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I'm still getting ___ to the weather here." options={["used","use","using","usual"]} answer="used" explanation="'Getting used to' = proses beradaptasi. Selalu 'used to' (bukan 'use to') dalam konteks ini." />
        <FillInBlank sentence="That ___ great! I'd love to join." options={["sounds","hears","listens","rings"]} answer="sounds" explanation="'That sounds great!' adalah respons positif yang sangat umum." />
      </div>
    ),
  },

  // ─── Day 5: Job Interview ──────────────────────────────────
  {
    id: 'job-interview',
    day: 5,
    title: '💼 Job Interview',
    category: 'Professional',
    difficulty: 'Advanced',
    color: 'slate',
    body: (
      <div>
        <JobInterviewScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Interviewer' }}
          situation="Interview for a Data Analyst position at a tech company"
          lines={[
            { speaker: 'B', en: "Good morning! Thanks for coming in today. Please, have a seat.", id: "Selamat pagi! Terima kasih sudah datang. Silakan duduk.", note: '"Have a seat" lebih sopan dari "Sit down"' },
            { speaker: 'A', en: "Thank you. I'm excited to be here. I've been looking forward to this opportunity.", id: "Terima kasih. Saya sangat antusias. Saya sudah menantikan kesempatan ini.", note: '"I\'ve been looking forward to..." = sangat menantikan' },
            { speaker: 'B', en: "Let's start. Could you tell me a little about yourself and your background?", id: "Mari mulai. Bisa ceritakan sedikit tentang diri Anda dan latar belakang?" },
            { speaker: 'A', en: "Of course. I recently completed my Master's in Data Science, where I focused on machine learning and statistical analysis. Previously, I worked as a junior analyst for two years, handling data visualization and reporting.", id: "Tentu. Saya baru menyelesaikan S2 di Data Science, fokus di machine learning dan analisis statistik. Sebelumnya saya bekerja 2 tahun sebagai junior analyst, menangani visualisasi data dan pelaporan." },
            { speaker: 'B', en: "What would you say is your greatest strength?", id: "Apa yang Anda anggap kekuatan terbesar Anda?" },
            { speaker: 'A', en: "I'd say my ability to translate complex data into actionable insights. I'm also a strong communicator, which helps when presenting findings to non-technical stakeholders.", id: "Saya rasa kemampuan saya menerjemahkan data kompleks menjadi insight yang actionable. Saya juga komunikator yang baik, yang membantu saat presentasi ke stakeholder non-teknis.", note: '"I\'d say..." = cara humble menjawab tanpa terkesan sombong' },
            { speaker: 'B', en: "Where do you see yourself in five years?", id: "Di mana Anda melihat diri Anda dalam 5 tahun?" },
            { speaker: 'A', en: "I see myself growing into a senior data scientist role, potentially leading a small team. I'm passionate about mentoring and driving data-driven culture in organizations.", id: "Saya melihat diri saya berkembang ke peran senior data scientist, mungkin memimpin tim kecil. Saya passionate tentang mentoring dan mendorong budaya data-driven di organisasi." },
            { speaker: 'B', en: "Do you have any questions for us?", id: "Apakah Anda punya pertanyaan untuk kami?", note: 'SELALU siapkan pertanyaan — menunjukkan minat!' },
            { speaker: 'A', en: "Yes! Could you tell me more about the team structure and what a typical day looks like in this role?", id: "Ya! Bisa ceritakan lebih lanjut tentang struktur tim dan seperti apa hari biasa di posisi ini?" },
          ]}
        />
        <KeyPhrasesCard title="Interview Power Phrases" color="purple" phrases={[
          { en: "I've been looking forward to...", id: "Saya menantikan..." },
          { en: "I'd say my strength is...", id: "Saya rasa kekuatan saya..." },
          { en: "I'm passionate about...", id: "Saya sangat tertarik pada..." },
          { en: "In my previous role...", id: "Di posisi sebelumnya..." },
          { en: "I see myself growing into...", id: "Saya melihat diri saya berkembang ke..." },
          { en: "Could you tell me more about...?", id: "Bisa ceritakan lebih lanjut tentang...?" },
          { en: "I thrive in environments where...", id: "Saya berkembang baik di lingkungan yang..." },
          { en: "One of my key achievements was...", id: "Salah satu pencapaian utama saya..." },
        ]} />
        <ExpressionMeter
          formal={["I would be delighted to...", "I believe my expertise in...", "I am confident that..."]}
          informal={["I'd love to...", "I'm really good at...", "I'm pretty sure that..."]}
        />
        <CulturalNote>
          <p className="font-bold mb-1">Interview Tips 🎯</p>
          <p>Gunakan metode STAR (Situation, Task, Action, Result) untuk menjawab behavioral questions. Selalu akhiri dengan pertanyaan untuk interviewer — ini menunjukkan ketertarikan dan riset Anda. Jangan jawab "I don't have any questions" — itu red flag!</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Could you tell me more ___ the team structure?" options={["about","for","on","with"]} answer="about" explanation="'Tell me about' = ceritakan tentang. Preposisi 'about' setelah 'tell me'" />
        <FillInBlank sentence="I see ___ growing into a leadership role." options={["myself","me","I","mine"]} answer="myself" explanation="'See myself + gerund' = melihat diri sendiri di masa depan" />
      </div>
    ),
  },

  // ─── Day 6: Doctor's Office ────────────────────────────────
  {
    id: 'doctor',
    day: 6,
    title: '🏥 At the Doctor\'s Office',
    category: 'Health',
    difficulty: 'Intermediate',
    color: 'teal',
    body: (
      <div>
        <DoctorScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Doctor' }}
          situation="General practitioner's office — you've been feeling unwell"
          lines={[
            { speaker: 'B', en: "Hello! What brings you in today?", id: "Halo! Ada keluhan apa hari ini?", note: '"What brings you in?" = cara dokter bertanya keluhan' },
            { speaker: 'A', en: "Hi, Doctor. I've been having a sore throat and a headache for the past three days.", id: "Hai, Dokter. Saya sakit tenggorokan dan sakit kepala sudah 3 hari.", note: '"I\'ve been having..." = present perfect continuous untuk keluhan ongoing' },
            { speaker: 'B', en: "I see. Have you had any fever or chills?", id: "Saya paham. Apakah ada demam atau menggigil?" },
            { speaker: 'A', en: "I've had a mild fever, around 37.8. And I've been feeling quite tired lately.", id: "Saya demam ringan, sekitar 37.8. Dan akhir-akhir ini saya merasa sangat lelah." },
            { speaker: 'B', en: "Let me take a look at your throat. Open wide, please... It's quite red. I'm going to prescribe some antibiotics and a pain reliever.", id: "Saya periksa tenggorokan Anda. Buka lebar ya... Cukup merah. Saya akan resepkan antibiotik dan pereda nyeri." },
            { speaker: 'A', en: "Should I take them before or after meals?", id: "Haruskah saya minum sebelum atau sesudah makan?" },
            { speaker: 'B', en: "Take the antibiotic after meals, three times a day. And make sure to drink plenty of fluids and get some rest.", id: "Minum antibiotiknya setelah makan, tiga kali sehari. Dan pastikan banyak minum dan istirahat." },
            { speaker: 'A', en: "How long until I should feel better?", id: "Berapa lama sampai saya merasa baikan?" },
            { speaker: 'B', en: "You should start feeling better within 2-3 days. If the symptoms persist, come back and we'll run some tests.", id: "Anda seharusnya mulai membaik dalam 2-3 hari. Kalau gejalanya berlanjut, kembali dan kita akan lakukan beberapa tes." },
          ]}
        />
        <KeyPhrasesCard title="Health & Medical Vocabulary" color="emerald" phrases={[
          { en: "I've been having a...", id: "Saya mengalami...", usage: "I've been having headaches" },
          { en: "sore throat / headache / fever", id: "sakit tenggorokan / kepala / demam" },
          { en: "prescribe / prescription", id: "meresepkan / resep" },
          { en: "take medicine", id: "minum obat", usage: "Take it three times a day" },
          { en: "symptoms / side effects", id: "gejala / efek samping" },
          { en: "I'm allergic to...", id: "Saya alergi terhadap...", usage: "I'm allergic to penicillin" },
          { en: "before/after meals", id: "sebelum/sesudah makan" },
          { en: "over-the-counter medicine", id: "obat tanpa resep" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I've been ___ a sore throat for three days." options={["having","have","had","has"]} answer="having" explanation="'I've been having' = present perfect continuous, menunjukkan sesuatu yang berlangsung" />
        <FillInBlank sentence="If the symptoms ___, come back for more tests." options={["persist","insist","consist","exist"]} answer="persist" explanation="'Persist' = berlanjut/tidak berhenti. Pola: 'If symptoms persist, see a doctor'" />
      </div>
    ),
  },

  // ─── Day 7: Shopping ───────────────────────────────────────
  {
    id: 'shopping',
    day: 7,
    title: '🛍️ Shopping for Clothes',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'pink',
    body: (
      <div>
        <ShoppingScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Staff' }}
          situation="A clothing store — looking for a gift"
          lines={[
            { speaker: 'B', en: "Hi! Can I help you find anything today?", id: "Hai! Bisa saya bantu cari sesuatu hari ini?" },
            { speaker: 'A', en: "Yes, I'm looking for a jacket as a birthday gift for my friend.", id: "Ya, saya mencari jaket untuk hadiah ulang tahun teman." },
            { speaker: 'B', en: "Sure! What size are they? And do they have a preferred style — casual or more formal?", id: "Tentu! Ukuran berapa? Dan ada preferensi gaya — kasual atau lebih formal?" },
            { speaker: 'A', en: "They're a medium. Something casual, maybe in a dark color.", id: "Mereka ukuran M. Sesuatu yang kasual, mungkin warna gelap." },
            { speaker: 'B', en: "How about this one? It's a bestseller — and it's 30% off this week!", id: "Bagaimana yang ini? Ini bestseller — dan diskon 30% minggu ini!", note: '"30% off" = diskon 30%' },
            { speaker: 'A', en: "Oh, that looks nice! Do you have it in navy blue?", id: "Oh, bagus! Ada warna biru navy?" },
            { speaker: 'B', en: "Let me check in the back... Yes! Here it is. Would you like to try it on?", id: "Saya cek di belakang... Ya! Ini dia. Mau coba?", note: '"Try it on" = mencoba pakaian' },
            { speaker: 'A', en: "It's a gift, so I won't try it on. But can I return it if it doesn't fit?", id: "Ini hadiah, jadi tidak perlu dicoba. Tapi bisa dikembalikan kalau tidak pas?" },
            { speaker: 'B', en: "Absolutely! You have 30 days to return or exchange with the receipt.", id: "Tentu! Anda punya 30 hari untuk mengembalikan atau tukar dengan struk." },
            { speaker: 'A', en: "Perfect, I'll take it! Can you gift-wrap it?", id: "Sempurna, saya ambil! Bisa dibungkus kado?" },
          ]}
        />
        <KeyPhrasesCard title="Shopping Expressions" color="rose" phrases={[
          { en: "I'm looking for...", id: "Saya mencari..." },
          { en: "Do you have this in...?", id: "Ada yang ini dalam...?", usage: "Do you have this in a smaller size?" },
          { en: "Can I try this on?", id: "Bisa saya coba?" },
          { en: "It doesn't fit / It's too tight", id: "Tidak pas / Terlalu ketat" },
          { en: "Is this on sale?", id: "Apakah ini sedang diskon?" },
          { en: "I'll take it!", id: "Saya ambil!" },
          { en: "Can I return/exchange this?", id: "Bisa dikembalikan/ditukar?" },
          { en: "Do you offer gift wrapping?", id: "Apakah ada layanan bungkus kado?" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Do you have this ___ a smaller size?" options={["in","at","on","with"]} answer="in" explanation="'In a size/color' = menggunakan preposisi 'in' untuk ukuran dan warna" />
        <FillInBlank sentence="You can return it within 30 days with the ___." options={["receipt","recipe","receive","receptacle"]} answer="receipt" explanation="'Receipt' /rɪˈsiːt/ = struk/bukti pembelian. 'Recipe' = resep masakan — jangan tertukar!" />
      </div>
    ),
  },
]
