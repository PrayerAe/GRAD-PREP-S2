// ═══════════════════════════════════════════════════════════════
// Coding Lab — SVG Visual Diagrams for Interactive Learning
// All diagrams are pure SVG/JSX, no external dependencies
// ═══════════════════════════════════════════════════════════════

// ── Reusable wrapper ─────────────────────────────────────────
export function DiagramWrapper({ title, children, bg = 'from-slate-50 to-blue-50' }) {
  return (
    <div className={`my-5 rounded-2xl border border-gray-200 overflow-hidden shadow-sm`}>
      {title && (
        <div className={`bg-gradient-to-r ${bg} px-4 py-2.5 border-b border-gray-200`}>
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <span className="w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-sm">🖼️</span>
            {title}
          </p>
        </div>
      )}
      <div className="p-4 bg-white flex justify-center overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 1: Python Fundamentals
// ═══════════════════════════════════════════════════════════════

export function PythonDataTypesTree() {
  return (
    <DiagramWrapper title="Hierarki Tipe Data Python" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 600 320" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Root */}
        <rect x="230" y="10" width="140" height="36" rx="18" fill="#059669" />
        <text x="300" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Python Object</text>

        {/* Lines from root */}
        <line x1="260" y1="46" x2="100" y2="80" stroke="#d1d5db" strokeWidth="2"/>
        <line x1="300" y1="46" x2="300" y2="80" stroke="#d1d5db" strokeWidth="2"/>
        <line x1="340" y1="46" x2="500" y2="80" stroke="#d1d5db" strokeWidth="2"/>

        {/* Numeric */}
        <rect x="30" y="80" width="140" height="32" rx="16" fill="#3b82f6"/>
        <text x="100" y="101" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Numeric</text>
        <line x1="60" y1="112" x2="40" y2="150" stroke="#93c5fd" strokeWidth="1.5"/>
        <line x1="100" y1="112" x2="100" y2="150" stroke="#93c5fd" strokeWidth="1.5"/>
        <line x1="140" y1="112" x2="160" y2="150" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="5" y="150" width="70" height="28" rx="8" fill="#dbeafe"/>
        <text x="40" y="169" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="600">int</text>
        <rect x="80" y="150" width="70" height="28" rx="8" fill="#dbeafe"/>
        <text x="115" y="169" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="600">float</text>
        <rect x="155" y="150" width="70" height="28" rx="8" fill="#dbeafe"/>
        <text x="190" y="169" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="600">complex</text>
        {/* Examples */}
        <text x="40" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">42</text>
        <text x="115" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">3.14</text>
        <text x="190" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">2+3j</text>

        {/* Sequence */}
        <rect x="230" y="80" width="140" height="32" rx="16" fill="#8b5cf6"/>
        <text x="300" y="101" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Sequence</text>
        <line x1="260" y1="112" x2="240" y2="150" stroke="#c4b5fd" strokeWidth="1.5"/>
        <line x1="300" y1="112" x2="300" y2="150" stroke="#c4b5fd" strokeWidth="1.5"/>
        <line x1="340" y1="112" x2="360" y2="150" stroke="#c4b5fd" strokeWidth="1.5"/>
        <rect x="205" y="150" width="70" height="28" rx="8" fill="#ede9fe"/>
        <text x="240" y="169" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="600">str</text>
        <rect x="280" y="150" width="70" height="28" rx="8" fill="#ede9fe"/>
        <text x="315" y="169" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="600">list</text>
        <rect x="355" y="150" width="70" height="28" rx="8" fill="#ede9fe"/>
        <text x="390" y="169" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="600">tuple</text>
        <text x="240" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">"hello"</text>
        <text x="315" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">[1,2,3]</text>
        <text x="390" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">(1,2)</text>

        {/* Mapping + Set + Bool */}
        <rect x="430" y="80" width="140" height="32" rx="16" fill="#f59e0b"/>
        <text x="500" y="101" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Others</text>
        <line x1="465" y1="112" x2="445" y2="150" stroke="#fcd34d" strokeWidth="1.5"/>
        <line x1="500" y1="112" x2="510" y2="150" stroke="#fcd34d" strokeWidth="1.5"/>
        <line x1="535" y1="112" x2="565" y2="150" stroke="#fcd34d" strokeWidth="1.5"/>
        <rect x="405" y="150" width="70" height="28" rx="8" fill="#fef3c7"/>
        <text x="440" y="169" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="600">dict</text>
        <rect x="480" y="150" width="70" height="28" rx="8" fill="#fef3c7"/>
        <text x="515" y="169" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="600">set</text>
        <rect x="540" y="150" width="55" height="28" rx="8" fill="#fef3c7"/>
        <text x="567" y="169" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="600">bool</text>
        <text x="440" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">{`{"a":1}`}</text>
        <text x="515" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">{`{1,2,3}`}</text>
        <text x="567" y="196" textAnchor="middle" fill="#6b7280" fontSize="9">True</text>

        {/* Mutable vs Immutable bar */}
        <rect x="30" y="230" width="260" height="28" rx="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
        <text x="160" y="249" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">✏️ Mutable: list, dict, set</text>
        <rect x="310" y="230" width="260" height="28" rx="8" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
        <text x="440" y="249" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">🔒 Immutable: int, float, str, tuple, bool</text>

        {/* Legend */}
        <rect x="130" y="275" width="340" height="36" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="300" y="298" textAnchor="middle" fill="#475569" fontSize="10">Semua tipe data Python adalah <tspan fontWeight="bold">object</tspan> — termasuk fungsi &amp; class!</text>
      </svg>
    </DiagramWrapper>
  )
}

export function ControlFlowDiagram() {
  return (
    <DiagramWrapper title="Alur Kontrol Python: If-Else & Loop" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 560 300" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* If-Else Flowchart */}
        <text x="140" y="18" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">If-Else</text>
        {/* Start */}
        <rect x="100" y="28" width="80" height="28" rx="14" fill="#6366f1"/>
        <text x="140" y="47" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">START</text>
        <line x1="140" y1="56" x2="140" y2="75" stroke="#a5b4fc" strokeWidth="2"/>
        {/* Diamond */}
        <polygon points="140,75 195,110 140,145 85,110" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="140" y="114" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">Kondisi?</text>
        {/* True */}
        <line x1="85" y1="110" x2="30" y2="110" stroke="#22c55e" strokeWidth="2"/>
        <text x="55" y="105" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">True</text>
        <rect x="0" y="96" width="60" height="28" rx="8" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
        <text x="30" y="115" textAnchor="middle" fill="#166534" fontSize="9">Blok If</text>
        {/* False */}
        <line x1="195" y1="110" x2="240" y2="110" stroke="#ef4444" strokeWidth="2"/>
        <text x="220" y="105" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">False</text>
        <rect x="240" y="96" width="60" height="28" rx="8" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
        <text x="270" y="115" textAnchor="middle" fill="#991b1b" fontSize="9">Blok Else</text>
        {/* Merge */}
        <line x1="30" y1="124" x2="30" y2="160" stroke="#d1d5db" strokeWidth="1.5"/>
        <line x1="270" y1="124" x2="270" y2="160" stroke="#d1d5db" strokeWidth="1.5"/>
        <line x1="30" y1="160" x2="270" y2="160" stroke="#d1d5db" strokeWidth="1.5"/>
        <line x1="140" y1="160" x2="140" y2="175" stroke="#d1d5db" strokeWidth="1.5"/>
        <rect x="105" y="175" width="70" height="24" rx="12" fill="#6366f1"/>
        <text x="140" y="192" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">LANJUT</text>

        {/* For Loop */}
        <text x="430" y="18" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">For Loop</text>
        <rect x="390" y="28" width="80" height="28" rx="14" fill="#059669"/>
        <text x="430" y="47" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">START</text>
        <line x1="430" y1="56" x2="430" y2="72" stroke="#6ee7b7" strokeWidth="2"/>
        {/* Init */}
        <rect x="385" y="72" width="90" height="24" rx="6" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1"/>
        <text x="430" y="88" textAnchor="middle" fill="#065f46" fontSize="9">i = 0</text>
        <line x1="430" y1="96" x2="430" y2="112" stroke="#6ee7b7" strokeWidth="2"/>
        {/* Check */}
        <polygon points="430,112 490,140 430,168 370,140" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="430" y="143" textAnchor="middle" fill="#78350f" fontSize="8" fontWeight="bold">i &lt; len?</text>
        {/* Body */}
        <line x1="370" y1="140" x2="320" y2="140" stroke="#22c55e" strokeWidth="2"/>
        <text x="343" y="135" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Ya</text>
        <rect x="295" y="126" width="55" height="28" rx="6" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
        <text x="322" y="144" textAnchor="middle" fill="#166534" fontSize="8">Body</text>
        {/* Increment & loop back */}
        <line x1="322" y1="154" x2="322" y2="180" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="297" y="180" width="50" height="20" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
        <text x="322" y="194" textAnchor="middle" fill="#166534" fontSize="8">i += 1</text>
        <line x1="322" y1="200" x2="322" y2="210" stroke="#6ee7b7" strokeWidth="1.5"/>
        <path d="M322,210 Q322,225 430,225 Q530,225 530,140 Q530,112 490,140" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="4,3"/>
        {/* Exit */}
        <line x1="490" y1="140" x2="540" y2="140" stroke="#ef4444" strokeWidth="2"/>
        <text x="518" y="135" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">No</text>
        <rect x="520" y="128" width="40" height="24" rx="12" fill="#6366f1"/>
        <text x="540" y="144" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">END</text>

        {/* Bottom comparison */}
        <rect x="20" y="225" width="250" height="65" rx="12" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1"/>
        <text x="145" y="244" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">for vs while</text>
        <text x="145" y="260" textAnchor="middle" fill="#475569" fontSize="9">for → iterasi koleksi (list, range)</text>
        <text x="145" y="276" textAnchor="middle" fill="#475569" fontSize="9">while → ulang selama kondisi True</text>

        <rect x="290" y="225" width="250" height="65" rx="12" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1"/>
        <text x="415" y="244" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">break &amp; continue</text>
        <text x="415" y="260" textAnchor="middle" fill="#475569" fontSize="9">break → keluar dari loop</text>
        <text x="415" y="276" textAnchor="middle" fill="#475569" fontSize="9">continue → skip ke iterasi berikutnya</text>
      </svg>
    </DiagramWrapper>
  )
}

export function OOPDiagram() {
  return (
    <DiagramWrapper title="OOP: Class, Inheritance & Encapsulation" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 540 300" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Parent Class */}
        <rect x="180" y="10" width="180" height="100" rx="12" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="180" y="10" width="180" height="30" rx="12" fill="#8b5cf6"/>
        <rect x="180" y="28" width="180" height="12" fill="#8b5cf6"/>
        <text x="270" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">class Animal</text>
        <text x="195" y="58" fill="#4c1d95" fontSize="9" fontFamily="monospace">self.name: str</text>
        <text x="195" y="72" fill="#4c1d95" fontSize="9" fontFamily="monospace">self.age: int</text>
        <line x1="195" y1="80" x2="345" y2="80" stroke="#c4b5fd" strokeWidth="0.5"/>
        <text x="195" y="95" fill="#6d28d9" fontSize="9" fontFamily="monospace">speak() → str</text>

        {/* Arrow down left */}
        <line x1="230" y1="110" x2="110" y2="150" stroke="#8b5cf6" strokeWidth="2"/>
        <polygon points="110,150 118,142 122,152" fill="#8b5cf6"/>
        {/* Arrow down right */}
        <line x1="310" y1="110" x2="430" y2="150" stroke="#8b5cf6" strokeWidth="2"/>
        <polygon points="430,150 422,142 418,152" fill="#8b5cf6"/>

        <text x="270" y="135" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">Inheritance ▼</text>

        {/* Child Class 1 */}
        <rect x="20" y="150" width="180" height="100" rx="12" fill="white" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="20" y="150" width="180" height="30" rx="12" fill="#3b82f6"/>
        <rect x="20" y="168" width="180" height="12" fill="#3b82f6"/>
        <text x="110" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">class Dog(Animal)</text>
        <text x="35" y="200" fill="#1e3a8a" fontSize="9" fontFamily="monospace">self.breed: str</text>
        <line x1="35" y1="210" x2="185" y2="210" stroke="#93c5fd" strokeWidth="0.5"/>
        <text x="35" y="225" fill="#2563eb" fontSize="9" fontFamily="monospace">speak() → "Woof!"</text>
        <text x="35" y="239" fill="#2563eb" fontSize="9" fontFamily="monospace">fetch() → ...</text>

        {/* Child Class 2 */}
        <rect x="340" y="150" width="180" height="100" rx="12" fill="white" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="340" y="150" width="180" height="30" rx="12" fill="#f59e0b"/>
        <rect x="340" y="168" width="180" height="12" fill="#f59e0b"/>
        <text x="430" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">class Cat(Animal)</text>
        <text x="355" y="200" fill="#78350f" fontSize="9" fontFamily="monospace">self.indoor: bool</text>
        <line x1="355" y1="210" x2="505" y2="210" stroke="#fcd34d" strokeWidth="0.5"/>
        <text x="355" y="225" fill="#b45309" fontSize="9" fontFamily="monospace">speak() → "Meow!"</text>
        <text x="355" y="239" fill="#b45309" fontSize="9" fontFamily="monospace">purr() → ...</text>

        {/* Encapsulation box */}
        <rect x="100" y="265" width="340" height="30" rx="10" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="270" y="284" textAnchor="middle" fill="#6d28d9" fontSize="10">
          <tspan fontWeight="bold">Polymorphism:</tspan> Dog.speak() ≠ Cat.speak() — method yang sama, behavior beda!
        </text>
      </svg>
    </DiagramWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 2: Data Libraries
// ═══════════════════════════════════════════════════════════════

export function NumpyArrayDiagram() {
  return (
    <DiagramWrapper title="NumPy: 1D vs 2D vs 3D Array" bg="from-blue-50 to-cyan-50">
      <svg viewBox="0 0 600 220" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* 1D Array */}
        <text x="95" y="20" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">1D Array (Vector)</text>
        <text x="95" y="35" textAnchor="middle" fill="#6b7280" fontSize="9">shape: (5,)</text>
        {[1,2,3,4,5].map((v,i) => (
          <g key={`1d-${i}`}>
            <rect x={20+i*38} y="42" width="34" height="34" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x={37+i*38} y="64" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">{v}</text>
          </g>
        ))}
        <text x="95" y="95" textAnchor="middle" fill="#9ca3af" fontSize="9">index: [0] [1] [2] [3] [4]</text>

        {/* 2D Array */}
        <text x="310" y="20" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">2D Array (Matrix)</text>
        <text x="310" y="35" textAnchor="middle" fill="#6b7280" fontSize="9">shape: (3, 3)</text>
        {[[1,2,3],[4,5,6],[7,8,9]].map((row,r) =>
          row.map((v,c) => (
            <g key={`2d-${r}-${c}`}>
              <rect x={240+c*38} y={42+r*36} width="34" height="32" rx="4" fill={r===1&&c===1 ? '#fef3c7' : '#ede9fe'} stroke={r===1&&c===1 ? '#f59e0b' : '#8b5cf6'} strokeWidth={r===1&&c===1 ? 2 : 1.5}/>
              <text x={257+c*38} y={63+r*36} textAnchor="middle" fill={r===1&&c===1 ? '#92400e' : '#5b21b6'} fontSize="12" fontWeight="bold">{v}</text>
            </g>
          ))
        )}
        <text x="370" y="80" fill="#f59e0b" fontSize="9" fontWeight="bold">← [1,1] = 5</text>
        <text x="310" y="162" textAnchor="middle" fill="#9ca3af" fontSize="9">row axis=0 ↓  col axis=1 →</text>

        {/* 3D Array */}
        <text x="510" y="20" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">3D Array (Tensor)</text>
        <text x="510" y="35" textAnchor="middle" fill="#6b7280" fontSize="9">shape: (2, 2, 3)</text>
        {/* Back layer */}
        {[[1,2,3],[4,5,6]].map((row,r) =>
          row.map((v,c) => (
            <g key={`3db-${r}-${c}`}>
              <rect x={460+c*30+8} y={48+r*30-8} width="26" height="26" rx="3" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1" opacity="0.6"/>
            </g>
          ))
        )}
        {/* Front layer */}
        {[[7,8,9],[10,11,12]].map((row,r) =>
          row.map((v,c) => (
            <g key={`3df-${r}-${c}`}>
              <rect x={460+c*30} y={48+r*30} width="26" height="26" rx="3" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5"/>
              <text x={473+c*30} y={66+r*30} textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">{v}</text>
            </g>
          ))
        )}
        <text x="510" y="140" textAnchor="middle" fill="#6b7280" fontSize="8">Dipakai untuk: gambar (H×W×C),</text>
        <text x="510" y="152" textAnchor="middle" fill="#6b7280" fontSize="8">batch data, video frames</text>

        {/* Bottom: Broadcasting */}
        <rect x="20" y="175" width="560" height="38" rx="12" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1"/>
        <text x="300" y="194" textAnchor="middle" fill="#0369a1" fontSize="10">
          <tspan fontWeight="bold">Broadcasting:</tspan> array (3,3) + scalar (1) → otomatis expand! Hindari Python loop, gunakan vectorized ops.
        </text>
        <text x="300" y="208" textAnchor="middle" fill="#6b7280" fontSize="9">np.mean(arr, axis=0) → per kolom | axis=1 → per baris | tanpa axis → semua elemen</text>
      </svg>
    </DiagramWrapper>
  )
}

export function PandasDiagram() {
  return (
    <DiagramWrapper title="Pandas: Series vs DataFrame" bg="from-blue-50 to-cyan-50">
      <svg viewBox="0 0 580 250" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Series */}
        <text x="100" y="20" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="bold">Series (1D)</text>
        <rect x="40" y="32" width="50" height="24" rx="4" fill="#e2e8f0"/>
        <text x="65" y="48" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">Index</text>
        <rect x="90" y="32" width="70" height="24" rx="4" fill="#bae6fd"/>
        <text x="125" y="48" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">Values</text>
        {['Budi','Ani','Cici'].map((n,i) => (
          <g key={`s-${i}`}>
            <rect x="40" y={60+i*26} width="50" height="22" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="65" y={75+i*26} textAnchor="middle" fill="#475569" fontSize="9">{i}</text>
            <rect x="90" y={60+i*26} width="70" height="22" rx="3" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1"/>
            <text x="125" y={75+i*26} textAnchor="middle" fill="#0c4a6e" fontSize="9" fontWeight="600">{n}</text>
          </g>
        ))}
        <text x="100" y="150" textAnchor="middle" fill="#94a3b8" fontSize="9">pd.Series(["Budi","Ani","Cici"])</text>

        {/* Arrow */}
        <text x="220" y="85" fill="#6b7280" fontSize="20">→</text>
        <text x="220" y="105" textAnchor="middle" fill="#6b7280" fontSize="9">Banyak Series</text>
        <text x="220" y="118" textAnchor="middle" fill="#6b7280" fontSize="9">= DataFrame</text>

        {/* DataFrame */}
        <text x="415" y="20" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">DataFrame (2D)</text>
        {/* Header */}
        <rect x="280" y="32" width="40" height="24" rx="4" fill="#e2e8f0"/>
        <rect x="320" y="32" width="70" height="24" rx="4" fill="#dbeafe"/>
        <text x="355" y="48" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">nama</text>
        <rect x="390" y="32" width="60" height="24" rx="4" fill="#dcfce7"/>
        <text x="420" y="48" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">umur</text>
        <rect x="450" y="32" width="70" height="24" rx="4" fill="#fef3c7"/>
        <text x="485" y="48" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">kota</text>
        {/* Rows */}
        {[['Budi','25','JKT'],['Ani','30','BDG'],['Cici','22','SBY']].map((row,r) => (
          <g key={`df-${r}`}>
            <rect x="280" y={60+r*26} width="40" height="22" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
            <text x="300" y={75+r*26} textAnchor="middle" fill="#475569" fontSize="9">{r}</text>
            <rect x="320" y={60+r*26} width="70" height="22" rx="3" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
            <text x="355" y={75+r*26} textAnchor="middle" fill="#1e3a8a" fontSize="9">{row[0]}</text>
            <rect x="390" y={60+r*26} width="60" height="22" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
            <text x="420" y={75+r*26} textAnchor="middle" fill="#166534" fontSize="9">{row[1]}</text>
            <rect x="450" y={60+r*26} width="70" height="22" rx="3" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1"/>
            <text x="485" y={75+r*26} textAnchor="middle" fill="#92400e" fontSize="9">{row[2]}</text>
          </g>
        ))}

        {/* Operations */}
        <rect x="20" y="170" width="540" height="70" rx="12" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="290" y="190" textAnchor="middle" fill="#6d28d9" fontSize="11" fontWeight="bold">Operasi DataFrame Penting</text>
        <text x="140" y="210" textAnchor="middle" fill="#475569" fontSize="9">df.head() — lihat 5 baris awal</text>
        <text x="140" y="225" textAnchor="middle" fill="#475569" fontSize="9">df.describe() — statistik ringkas</text>
        <text x="400" y="210" textAnchor="middle" fill="#475569" fontSize="9">df.groupby("kota").mean() — agregasi</text>
        <text x="400" y="225" textAnchor="middle" fill="#475569" fontSize="9">df[df["umur"] &gt; 25] — filter baris</text>
      </svg>
    </DiagramWrapper>
  )
}

export function DataCleaningPipeline() {
  return (
    <DiagramWrapper title="Pipeline Data Cleaning" bg="from-blue-50 to-cyan-50">
      <svg viewBox="0 0 600 160" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 0, label: 'Raw Data', icon: '📥', color: '#ef4444', bg: '#fee2e2', desc: 'CSV/JSON/SQL' },
          { x: 120, label: 'Missing Values', icon: '🔍', color: '#f59e0b', bg: '#fef3c7', desc: 'dropna/fillna' },
          { x: 240, label: 'Duplicates', icon: '🔄', color: '#8b5cf6', bg: '#ede9fe', desc: 'drop_duplicates' },
          { x: 360, label: 'Outliers', icon: '📊', color: '#3b82f6', bg: '#dbeafe', desc: 'IQR / Z-score' },
          { x: 480, label: 'Clean Data', icon: '✅', color: '#059669', bg: '#dcfce7', desc: 'Ready to analyze' },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x+10} y="20" width="100" height="80" rx="14" fill={step.bg} stroke={step.color} strokeWidth="2"/>
            <text x={step.x+60} y="48" textAnchor="middle" fontSize="20">{step.icon}</text>
            <text x={step.x+60} y="68" textAnchor="middle" fill={step.color} fontSize="10" fontWeight="bold">{step.label}</text>
            <text x={step.x+60} y="85" textAnchor="middle" fill="#6b7280" fontSize="8">{step.desc}</text>
            {i < 4 && (
              <polygon points={`${step.x+114},55 ${step.x+126},60 ${step.x+114},65`} fill={step.color}/>
            )}
          </g>
        ))}
        {/* Bottom tips */}
        <rect x="10" y="115" width="580" height="35" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="300" y="133" textAnchor="middle" fill="#475569" fontSize="9">
          <tspan fontWeight="bold">Best Practice:</tspan> Selalu cek df.info() dan df.describe() di awal → identifikasi tipe data, null count, distribusi
        </text>
        <text x="300" y="146" textAnchor="middle" fill="#6b7280" fontSize="8">Cleaning biasanya memakan 60-80% waktu Data Science project!</text>
      </svg>
    </DiagramWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 3: Machine Learning
// ═══════════════════════════════════════════════════════════════

export function MLPipelineDiagram() {
  return (
    <DiagramWrapper title="Machine Learning Pipeline" bg="from-indigo-50 to-violet-50">
      <svg viewBox="0 0 620 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 0, label: 'Data', icon: '📊', color: '#3b82f6', bg: '#dbeafe', items: ['Collect','Clean','Explore'] },
          { x: 105, label: 'Feature Eng', icon: '🔧', color: '#8b5cf6', bg: '#ede9fe', items: ['Select','Transform','Scale'] },
          { x: 210, label: 'Split', icon: '✂️', color: '#f59e0b', bg: '#fef3c7', items: ['Train 80%','Test 20%','Valid'] },
          { x: 315, label: 'Train', icon: '🧠', color: '#059669', bg: '#dcfce7', items: ['Fit model','Learn pattern','Optimize'] },
          { x: 420, label: 'Evaluate', icon: '📈', color: '#ef4444', bg: '#fee2e2', items: ['Accuracy','F1-Score','RMSE'] },
          { x: 525, label: 'Deploy', icon: '🚀', color: '#6366f1', bg: '#e0e7ff', items: ['API','Monitor','Retrain'] },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x+5} y="10" width="95" height="120" rx="14" fill={step.bg} stroke={step.color} strokeWidth="2"/>
            <text x={step.x+52} y="36" textAnchor="middle" fontSize="20">{step.icon}</text>
            <text x={step.x+52} y="54" textAnchor="middle" fill={step.color} fontSize="10" fontWeight="bold">{step.label}</text>
            {step.items.map((item, j) => (
              <text key={j} x={step.x+52} y={72+j*14} textAnchor="middle" fill="#6b7280" fontSize="8">{item}</text>
            ))}
            {i < 5 && (
              <polygon points={`${step.x+103},65 ${step.x+112},70 ${step.x+103},75`} fill={step.color}/>
            )}
          </g>
        ))}
        {/* Feedback loop */}
        <path d="M572,130 Q572,170 310,170 Q50,170 50,130" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,4"/>
        <text x="310" y="185" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">↺ Iterasi: tune, retrain, improve</text>
        <polygon points="50,134 46,126 54,126" fill="#94a3b8"/>
      </svg>
    </DiagramWrapper>
  )
}

export function TrainTestSplitDiagram() {
  return (
    <DiagramWrapper title="Train / Validation / Test Split" bg="from-indigo-50 to-violet-50">
      <svg viewBox="0 0 520 180" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Full dataset */}
        <text x="260" y="18" textAnchor="middle" fill="#1f2937" fontSize="12" fontWeight="bold">Dataset Lengkap (100%)</text>
        <rect x="20" y="28" width="480" height="30" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Train */}
        <rect x="20" y="75" width="290" height="40" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="165" y="100" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">Training Set (60%)</text>

        {/* Validation */}
        <rect x="320" y="75" width="90" height="40" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="365" y="100" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Valid (20%)</text>

        {/* Test */}
        <rect x="420" y="75" width="80" height="40" rx="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="460" y="100" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Test (20%)</text>

        {/* Arrows */}
        <line x1="165" y1="56" x2="165" y2="75" stroke="#22c55e" strokeWidth="2"/>
        <line x1="365" y1="56" x2="365" y2="75" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="460" y1="56" x2="460" y2="75" stroke="#ef4444" strokeWidth="2"/>

        {/* Labels */}
        <text x="165" y="135" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">Model belajar dari data ini</text>
        <text x="365" y="135" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Tune hyper-</text>
        <text x="365" y="147" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">parameter</text>
        <text x="460" y="135" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">Evaluasi akhir</text>
        <text x="460" y="147" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">(JANGAN sentuh!)</text>

        <rect x="60" y="158" width="400" height="20" rx="6" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1"/>
        <text x="260" y="172" textAnchor="middle" fill="#0369a1" fontSize="9">sklearn: train_test_split(X, y, test_size=0.2, random_state=42)</text>
      </svg>
    </DiagramWrapper>
  )
}

export function BiasVarianceDiagram() {
  return (
    <DiagramWrapper title="Bias vs Variance Tradeoff" bg="from-indigo-50 to-violet-50">
      <svg viewBox="0 0 560 220" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Underfitting */}
        <g>
          <text x="90" y="18" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">Underfitting</text>
          <text x="90" y="32" textAnchor="middle" fill="#6b7280" fontSize="9">High Bias, Low Variance</text>
          <rect x="20" y="40" width="140" height="100" rx="12" fill="#fff1f2" stroke="#fca5a5" strokeWidth="1.5"/>
          {/* Scattered dots with straight line */}
          {[[40,110],[55,85],[70,100],[85,70],[100,90],[115,60],[130,80],[140,55]].map(([x,y],i) => (
            <circle key={`u-${i}`} cx={x} cy={y} r="4" fill="#f87171" opacity="0.7"/>
          ))}
          <line x1="35" y1="115" x2="145" y2="50" stroke="#ef4444" strokeWidth="2"/>
          <text x="90" y="155" textAnchor="middle" fill="#dc2626" fontSize="9">Terlalu simpel</text>
        </g>

        {/* Just right */}
        <g>
          <text x="280" y="18" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">Just Right ✓</text>
          <text x="280" y="32" textAnchor="middle" fill="#6b7280" fontSize="9">Balanced Bias &amp; Variance</text>
          <rect x="210" y="40" width="140" height="100" rx="12" fill="#f0fdf4" stroke="#86efac" strokeWidth="2"/>
          {[[230,110],[245,90],[260,95],[275,70],[290,75],[305,60],[320,65],[335,50]].map(([x,y],i) => (
            <circle key={`g-${i}`} cx={x} cy={y} r="4" fill="#22c55e" opacity="0.7"/>
          ))}
          <path d="M225,112 Q260,85 280,78 Q300,70 320,58 Q340,48 340,48" fill="none" stroke="#16a34a" strokeWidth="2"/>
          <text x="280" y="155" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Generalisasi baik!</text>
        </g>

        {/* Overfitting */}
        <g>
          <text x="470" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontWeight="bold">Overfitting</text>
          <text x="470" y="32" textAnchor="middle" fill="#6b7280" fontSize="9">Low Bias, High Variance</text>
          <rect x="400" y="40" width="140" height="100" rx="12" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1.5"/>
          {[[420,110],[435,85],[450,100],[465,70],[480,90],[495,60],[510,80],[525,55]].map(([x,y],i) => (
            <circle key={`o-${i}`} cx={x} cy={y} r="4" fill="#8b5cf6" opacity="0.7"/>
          ))}
          <path d="M416,112 Q425,108 435,85 Q440,95 450,100 Q458,80 465,70 Q472,85 480,90 Q488,65 495,60 Q505,75 510,80 Q518,60 528,55" fill="none" stroke="#7c3aed" strokeWidth="2"/>
          <text x="470" y="155" textAnchor="middle" fill="#7c3aed" fontSize="9">Menghafal noise!</text>
        </g>

        {/* Bottom: solutions */}
        <rect x="20" y="172" width="165" height="42" rx="10" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
        <text x="102" y="188" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">Solusi Underfitting:</text>
        <text x="102" y="204" textAnchor="middle" fill="#6b7280" fontSize="8">Model lebih kompleks, tambah fitur</text>

        <rect x="198" y="172" width="165" height="42" rx="10" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
        <text x="280" y="188" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Sweet Spot:</text>
        <text x="280" y="204" textAnchor="middle" fill="#6b7280" fontSize="8">Cross-validation, hyperparameter tuning</text>

        <rect x="376" y="172" width="165" height="42" rx="10" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="458" y="188" textAnchor="middle" fill="#5b21b6" fontSize="9" fontWeight="bold">Solusi Overfitting:</text>
        <text x="458" y="204" textAnchor="middle" fill="#6b7280" fontSize="8">Regularisasi, lebih banyak data, dropout</text>
      </svg>
    </DiagramWrapper>
  )
}

export function DecisionTreeDiagram() {
  return (
    <DiagramWrapper title="Decision Tree: Cara Kerja" bg="from-indigo-50 to-violet-50">
      <svg viewBox="0 0 480 240" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Root */}
        <rect x="170" y="8" width="140" height="36" rx="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <text x="240" y="31" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">Umur &gt; 30?</text>

        {/* Left branch */}
        <line x1="200" y1="44" x2="100" y2="80" stroke="#22c55e" strokeWidth="2"/>
        <text x="140" y="65" fill="#16a34a" fontSize="9" fontWeight="bold">Ya</text>
        <rect x="30" y="80" width="140" height="36" rx="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <text x="100" y="103" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">Gaji &gt; 50k?</text>

        {/* Left-Left */}
        <line x1="65" y1="116" x2="40" y2="150" stroke="#22c55e" strokeWidth="2"/>
        <text x="42" y="138" fill="#16a34a" fontSize="8" fontWeight="bold">Ya</text>
        <rect x="5" y="150" width="70" height="32" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="40" y="170" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">✅ Approve</text>

        {/* Left-Right */}
        <line x1="135" y1="116" x2="155" y2="150" stroke="#ef4444" strokeWidth="2"/>
        <text x="155" y="138" fill="#ef4444" fontSize="8" fontWeight="bold">No</text>
        <rect x="120" y="150" width="70" height="32" rx="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <text x="155" y="170" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold">Credit?</text>
        <line x1="140" y1="182" x2="120" y2="205" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="90" y="205" width="55" height="24" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="117" y="221" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">✅ OK</text>
        <line x1="170" y1="182" x2="190" y2="205" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="165" y="205" width="55" height="24" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="192" y="221" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">❌ Deny</text>

        {/* Right branch */}
        <line x1="280" y1="44" x2="380" y2="80" stroke="#ef4444" strokeWidth="2"/>
        <text x="340" y="65" fill="#ef4444" fontSize="9" fontWeight="bold">Tidak</text>
        <rect x="310" y="80" width="140" height="36" rx="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
        <text x="380" y="103" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">Student?</text>

        {/* Right-Left */}
        <line x1="345" y1="116" x2="320" y2="150" stroke="#22c55e" strokeWidth="2"/>
        <text x="322" y="138" fill="#16a34a" fontSize="8" fontWeight="bold">Ya</text>
        <rect x="290" y="150" width="70" height="32" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="325" y="170" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">❌ Deny</text>

        {/* Right-Right */}
        <line x1="415" y1="116" x2="435" y2="150" stroke="#ef4444" strokeWidth="2"/>
        <text x="435" y="138" fill="#ef4444" fontSize="8" fontWeight="bold">No</text>
        <rect x="400" y="150" width="70" height="32" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="435" y="170" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">✅ Approve</text>
      </svg>
    </DiagramWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 4: ML Projects
// ═══════════════════════════════════════════════════════════════

export function MLProjectWorkflow() {
  return (
    <DiagramWrapper title="ML Project Workflow Step-by-Step" bg="from-amber-50 to-orange-50">
      <svg viewBox="0 0 600 170" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 0, icon: '🎯', label: 'Define', desc: 'Problem', color: '#6366f1' },
          { x: 100, icon: '📊', label: 'Collect', desc: 'Data', color: '#3b82f6' },
          { x: 200, icon: '🧹', label: 'Clean &', desc: 'EDA', color: '#8b5cf6' },
          { x: 300, icon: '🔧', label: 'Feature', desc: 'Eng', color: '#f59e0b' },
          { x: 400, icon: '🧠', label: 'Model', desc: 'Train', color: '#059669' },
          { x: 500, icon: '🚀', label: 'Deploy', desc: '& Monitor', color: '#ef4444' },
        ].map((s, i) => (
          <g key={s.label}>
            <circle cx={s.x+45} cy="55" r="35" fill="white" stroke={s.color} strokeWidth="2.5"/>
            <text x={s.x+45} y="48" textAnchor="middle" fontSize="18">{s.icon}</text>
            <text x={s.x+45} y="65" textAnchor="middle" fill={s.color} fontSize="8" fontWeight="bold">{s.label}</text>
            <text x={s.x+45} y="100" textAnchor="middle" fill="#6b7280" fontSize="9" fontWeight="600">{s.desc}</text>
            {i < 5 && (
              <line x1={s.x+82} y1="55" x2={s.x+110} y2="55" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)"/>
            )}
          </g>
        ))}
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#d1d5db"/>
          </marker>
        </defs>

        {/* Timeline bar */}
        <rect x="20" y="120" width="560" height="6" rx="3" fill="#e5e7eb"/>
        <rect x="20" y="120" width="100" height="6" rx="3" fill="#3b82f6"/>
        <rect x="120" y="120" width="200" height="6" rx="3" fill="#f59e0b"/>
        <rect x="320" y="120" width="130" height="6" rx="3" fill="#059669"/>
        <rect x="450" y="120" width="130" height="6" rx="3" fill="#ef4444"/>
        <text x="70" y="142" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">10%</text>
        <text x="220" y="142" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">60% waktu</text>
        <text x="385" y="142" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="bold">20%</text>
        <text x="515" y="142" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">10%</text>
        <text x="300" y="162" textAnchor="middle" fill="#9ca3af" fontSize="8">Data Cleaning &amp; Feature Engineering = mayoritas pekerjaan!</text>
      </svg>
    </DiagramWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 5: Deep Learning
// ═══════════════════════════════════════════════════════════════

export function NeuralNetworkDiagram() {
  return (
    <DiagramWrapper title="Arsitektur Neural Network (MLP)" bg="from-purple-50 to-fuchsia-50">
      <svg viewBox="0 0 520 260" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Connections - draw first so they're behind neurons */}
        {/* Input to Hidden1 */}
        {[0,1,2,3].map(i => [0,1,2,3,4].map(j => (
          <line key={`ih1-${i}-${j}`} x1="85" y1={55+i*50} x2="195" y2={35+j*45} stroke="#e2e8f0" strokeWidth="0.8"/>
        )))}
        {/* Hidden1 to Hidden2 */}
        {[0,1,2,3,4].map(i => [0,1,2,3].map(j => (
          <line key={`h1h2-${i}-${j}`} x1="225" y1={35+i*45} x2="335" y2={50+j*50} stroke="#e2e8f0" strokeWidth="0.8"/>
        )))}
        {/* Hidden2 to Output */}
        {[0,1,2,3].map(i => [0,1].map(j => (
          <line key={`h2o-${i}-${j}`} x1="365" y1={50+i*50} x2="445" y2={95+j*70} stroke="#e2e8f0" strokeWidth="0.8"/>
        )))}

        {/* Input Layer */}
        <text x="70" y="18" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Input</text>
        {['x₁','x₂','x₃','x₄'].map((label,i) => (
          <g key={`in-${i}`}>
            <circle cx="70" cy={55+i*50} r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="70" y={60+i*50} textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">{label}</text>
          </g>
        ))}

        {/* Hidden Layer 1 */}
        <text x="210" y="10" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">Hidden 1</text>
        {[0,1,2,3,4].map(i => (
          <g key={`h1-${i}`}>
            <circle cx="210" cy={35+i*45} r="16" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
            <text x="210" y={40+i*45} textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="bold">h{i+1}</text>
          </g>
        ))}

        {/* Hidden Layer 2 */}
        <text x="350" y="18" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">Hidden 2</text>
        {[0,1,2,3].map(i => (
          <g key={`h2-${i}`}>
            <circle cx="350" cy={50+i*50} r="16" fill="#faf5ff" stroke="#a855f7" strokeWidth="2"/>
            <text x="350" y={55+i*50} textAnchor="middle" fill="#7e22ce" fontSize="9" fontWeight="bold">h{i+1}</text>
          </g>
        ))}

        {/* Output Layer */}
        <text x="460" y="65" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">Output</text>
        {['ŷ₁','ŷ₂'].map((label,i) => (
          <g key={`out-${i}`}>
            <circle cx="460" cy={95+i*70} r="18" fill="#dcfce7" stroke="#059669" strokeWidth="2"/>
            <text x="460" y={100+i*70} textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold">{label}</text>
          </g>
        ))}

        {/* Labels */}
        <rect x="30" y="228" width="460" height="28" rx="8" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="260" y="246" textAnchor="middle" fill="#6d28d9" fontSize="9">
          Setiap koneksi = <tspan fontWeight="bold">weight (w)</tspan> · Setiap neuron = <tspan fontWeight="bold">Σ(w·x) + bias</tspan> → <tspan fontWeight="bold">activation(ReLU/Sigmoid)</tspan>
        </text>
      </svg>
    </DiagramWrapper>
  )
}

export function CNNDiagram() {
  return (
    <DiagramWrapper title="CNN: Convolutional Neural Network" bg="from-purple-50 to-fuchsia-50">
      <svg viewBox="0 0 600 200" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Input Image */}
        <rect x="10" y="40" width="70" height="70" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="45" y="72" textAnchor="middle" fontSize="20">🖼️</text>
        <text x="45" y="90" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">28×28×1</text>
        <text x="45" y="130" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Input</text>

        {/* Conv1 */}
        <polygon points="95,60 95,90 120,100 120,30" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <polygon points="120,30 120,100 150,90 150,20" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="122" y="65" textAnchor="middle" fill="#5b21b6" fontSize="8" fontWeight="bold">Conv</text>
        <text x="122" y="78" textAnchor="middle" fill="#7c3aed" fontSize="7">3×3</text>
        <text x="122" y="130" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="bold">Conv2D</text>
        <text x="122" y="142" textAnchor="middle" fill="#6b7280" fontSize="7">+ReLU</text>

        {/* Pool1 */}
        <rect x="165" y="35" width="40" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="185" y="60" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">Pool</text>
        <text x="185" y="75" textAnchor="middle" fill="#b45309" fontSize="7">2×2</text>
        <text x="185" y="130" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">MaxPool</text>

        {/* Conv2 */}
        <polygon points="220" y1="45" x2="220" y2="80" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <polygon points="220,50 220,85 245,95 245,15" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <polygon points="245,15 245,95 275,85 275,5" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="247" y="55" textAnchor="middle" fill="#5b21b6" fontSize="8" fontWeight="bold">Conv</text>
        <text x="247" y="68" textAnchor="middle" fill="#7c3aed" fontSize="7">3×3</text>
        <text x="247" y="130" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="bold">Conv2D</text>

        {/* Pool2 */}
        <rect x="290" y="30" width="35" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="307" y="55" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">Pool</text>
        <text x="307" y="130" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">MaxPool</text>

        {/* Flatten */}
        <rect x="340" y="25" width="15" height="70" rx="3" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
        <text x="347" y="130" textAnchor="middle" fill="#6366f1" fontSize="8" fontWeight="bold">Flatten</text>

        {/* Dense layers */}
        <rect x="375" y="35" width="55" height="50" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="402" y="58" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Dense</text>
        <text x="402" y="72" textAnchor="middle" fill="#22c55e" fontSize="7">128</text>
        <text x="402" y="130" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">FC Layer</text>

        {/* Output */}
        <rect x="450" y="40" width="55" height="40" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="477" y="58" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">Dense</text>
        <text x="477" y="72" textAnchor="middle" fill="#ef4444" fontSize="7">10</text>
        <text x="477" y="130" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Output</text>
        <text x="477" y="142" textAnchor="middle" fill="#6b7280" fontSize="7">Softmax</text>

        {/* Result */}
        <rect x="520" y="45" width="65" height="35" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"/>
        <text x="552" y="62" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Cat: 95%</text>
        <text x="552" y="74" textAnchor="middle" fill="#6b7280" fontSize="7">Dog: 3%</text>

        {/* Arrows between stages */}
        {[82,155,210,328,358,435,510].map(x => (
          <polygon key={`a-${x}`} points={`${x},60 ${x+8},65 ${x},70`} fill="#94a3b8"/>
        ))}

        {/* Bottom bar */}
        <rect x="10" y="160" width="575" height="32" rx="10" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="297" y="176" textAnchor="middle" fill="#6d28d9" fontSize="9">
          <tspan fontWeight="bold">Conv</tspan> → extract fitur lokal | <tspan fontWeight="bold">Pool</tspan> → kurangi dimensi | <tspan fontWeight="bold">Dense</tspan> → klasifikasi
        </text>
        <text x="297" y="189" textAnchor="middle" fill="#9ca3af" fontSize="8">Setiap Conv layer belajar filter: edges → textures → patterns → objects</text>
      </svg>
    </DiagramWrapper>
  )
}

export function RNNLSTMDiagram() {
  return (
    <DiagramWrapper title="RNN vs LSTM Cell" bg="from-purple-50 to-fuchsia-50">
      <svg viewBox="0 0 560 220" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* RNN side */}
        <text x="140" y="18" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Simple RNN</text>
        {/* RNN cells */}
        {['h₀','h₁','h₂','h₃'].map((label,i) => (
          <g key={`rnn-${i}`}>
            <rect x={30+i*70} y="30" width="50" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x={55+i*70} y="55" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">{label}</text>
            {/* Input arrow */}
            <line x1={55+i*70} y1="85" x2={55+i*70} y2="70" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x={55+i*70} y="96" textAnchor="middle" fill="#6b7280" fontSize="8">x{i}</text>
            {/* Right arrow */}
            {i < 3 && <line x1={80+i*70} y1="50" x2={100+i*70} y2="50" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowB)"/>}
          </g>
        ))}
        <text x="140" y="120" textAnchor="middle" fill="#ef4444" fontSize="9">⚠️ Masalah: vanishing gradient untuk sequence panjang</text>

        {/* LSTM side */}
        <text x="420" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">LSTM Cell</text>
        <rect x="320" y="30" width="200" height="130" rx="14" fill="#faf5ff" stroke="#8b5cf6" strokeWidth="2"/>

        {/* Gates */}
        <rect x="335" y="50" width="50" height="25" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1.5"/>
        <text x="360" y="67" textAnchor="middle" fill="#991b1b" fontSize="8" fontWeight="bold">Forget</text>

        <rect x="395" y="50" width="50" height="25" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="420" y="67" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Input</text>

        <rect x="455" y="50" width="50" height="25" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="480" y="67" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">Output</text>

        {/* Cell state */}
        <line x1="335" y1="95" x2="505" y2="95" stroke="#f59e0b" strokeWidth="3"/>
        <text x="420" y="90" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Cell State (memory highway)</text>

        {/* Hidden state */}
        <rect x="370" y="110" width="100" height="22" rx="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="420" y="125" textAnchor="middle" fill="#6d28d9" fontSize="8" fontWeight="bold">Hidden State</text>

        {/* Input/Output labels */}
        <text x="325" y="145" fill="#6b7280" fontSize="8">xₜ →</text>
        <text x="490" y="145" fill="#6b7280" fontSize="8">→ hₜ</text>

        {/* Bottom comparison */}
        <rect x="10" y="170" width="540" height="42" rx="10" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1"/>
        <text x="280" y="188" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="bold">LSTM vs RNN</text>
        <text x="280" y="204" textAnchor="middle" fill="#475569" fontSize="9">LSTM punya <tspan fontWeight="bold">3 gates + cell state</tspan> → bisa "ingat" informasi jangka panjang (100+ timesteps)</text>

        <defs>
          <marker id="arrowB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#3b82f6"/>
          </marker>
        </defs>
      </svg>
    </DiagramWrapper>
  )
}

export function TransferLearningDiagram() {
  return (
    <DiagramWrapper title="Transfer Learning: Fine-tuning Pre-trained Model" bg="from-purple-50 to-fuchsia-50">
      <svg viewBox="0 0 540 180" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* Pre-trained model */}
        <rect x="10" y="10" width="350" height="60" rx="12" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
        <text x="185" y="28" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">Pre-trained Model (e.g. ResNet, BERT)</text>
        <text x="185" y="45" textAnchor="middle" fill="#6b7280" fontSize="9">Sudah dilatih pada jutaan data (ImageNet / Wikipedia)</text>
        <text x="185" y="60" textAnchor="middle" fill="#818cf8" fontSize="8">🔒 Freeze layers ini (tidak diubah)</text>

        {/* Arrow */}
        <line x1="360" y1="40" x2="380" y2="40" stroke="#6366f1" strokeWidth="2"/>
        <polygon points="380,40 374,34 374,46" fill="#6366f1"/>

        {/* New head */}
        <rect x="382" y="10" width="148" height="60" rx="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="456" y="28" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">New Head</text>
        <text x="456" y="45" textAnchor="middle" fill="#22c55e" fontSize="9">Dense + Softmax</text>
        <text x="456" y="60" textAnchor="middle" fill="#059669" fontSize="8">🔓 Train layer ini saja!</text>

        {/* Benefits */}
        <rect x="10" y="85" width="520" height="85" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="270" y="105" textAnchor="middle" fill="#1f2937" fontSize="11" fontWeight="bold">Kenapa Transfer Learning?</text>
        <text x="140" y="125" textAnchor="middle" fill="#059669" fontSize="9">✅ Data sedikit? Tetap akurat!</text>
        <text x="140" y="142" textAnchor="middle" fill="#059669" fontSize="9">✅ Training 10-100× lebih cepat</text>
        <text x="400" y="125" textAnchor="middle" fill="#059669" fontSize="9">✅ Performa lebih baik</text>
        <text x="400" y="142" textAnchor="middle" fill="#059669" fontSize="9">✅ Bisa fine-tune per domain</text>
        <text x="270" y="162" textAnchor="middle" fill="#6b7280" fontSize="8">Model populer: ResNet50, VGG16, EfficientNet (vision) | BERT, GPT, T5 (NLP)</text>
      </svg>
    </DiagramWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 6: AI Tools & Modern AI
// ═══════════════════════════════════════════════════════════════

export function LLMPipelineDiagram() {
  return (
    <DiagramWrapper title="LLM API Pipeline: Prompt → Response" bg="from-rose-50 to-red-50">
      <svg viewBox="0 0 560 200" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* User */}
        <circle cx="50" cy="60" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="50" y="55" textAnchor="middle" fontSize="18">👤</text>
        <text x="50" y="72" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">User</text>

        {/* Arrow to prompt */}
        <line x1="78" y1="60" x2="110" y2="60" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowLLM)"/>

        {/* Prompt Template */}
        <rect x="110" y="30" width="100" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="160" y="50" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Prompt</text>
        <text x="160" y="65" textAnchor="middle" fill="#b45309" fontSize="8">System + User</text>
        <text x="160" y="78" textAnchor="middle" fill="#d97706" fontSize="7">+ Context/RAG</text>

        {/* Arrow to API */}
        <line x1="210" y1="60" x2="245" y2="60" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowLLM)"/>

        {/* API */}
        <rect x="245" y="20" width="100" height="80" rx="12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="295" y="42" textAnchor="middle" fill="#6d28d9" fontSize="10" fontWeight="bold">LLM API</text>
        <text x="295" y="58" textAnchor="middle" fontSize="14">🧠</text>
        <text x="295" y="78" textAnchor="middle" fill="#7c3aed" fontSize="7">GPT-4 / Claude</text>
        <text x="295" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7">Gemini / Llama</text>

        {/* Arrow to response */}
        <line x1="345" y1="60" x2="380" y2="60" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowLLM)"/>

        {/* Response */}
        <rect x="380" y="30" width="100" height="60" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="430" y="50" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Response</text>
        <text x="430" y="65" textAnchor="middle" fill="#22c55e" fontSize="8">JSON / Text</text>
        <text x="430" y="78" textAnchor="middle" fill="#6b7280" fontSize="7">+ token count</text>

        {/* Arrow back to user */}
        <line x1="480" y1="60" x2="520" y2="60" stroke="#22c55e" strokeWidth="2"/>
        <rect x="495" y="40" width="55" height="40" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5"/>
        <text x="522" y="58" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">App /</text>
        <text x="522" y="70" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">UI</text>

        {/* Bottom: cost structure */}
        <rect x="30" y="120" width="500" height="70" rx="12" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1"/>
        <text x="280" y="140" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="bold">API Pricing Model (Pay-per-token)</text>
        <text x="150" y="160" textAnchor="middle" fill="#475569" fontSize="9">Input tokens: teks yang dikirim</text>
        <text x="150" y="175" textAnchor="middle" fill="#475569" fontSize="9">Output tokens: teks yang dihasilkan</text>
        <text x="400" y="160" textAnchor="middle" fill="#475569" fontSize="9">Temperature: 0 = deterministik, 1 = kreatif</text>
        <text x="400" y="175" textAnchor="middle" fill="#475569" fontSize="9">Max tokens: batas panjang respons</text>

        <defs>
          <marker id="arrowLLM" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#6b7280"/>
          </marker>
        </defs>
      </svg>
    </DiagramWrapper>
  )
}

export function DockerDiagram() {
  return (
    <DiagramWrapper title="Docker: Container vs Virtual Machine" bg="from-rose-50 to-red-50">
      <svg viewBox="0 0 520 200" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
        {/* VM side */}
        <text x="130" y="18" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">Virtual Machine</text>
        <rect x="10" y="25" width="240" height="130" rx="12" fill="#fff1f2" stroke="#fca5a5" strokeWidth="1.5"/>
        {/* Hardware */}
        <rect x="20" y="130" width="220" height="20" rx="4" fill="#374151"/>
        <text x="130" y="144" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Hardware</text>
        {/* Hypervisor */}
        <rect x="20" y="108" width="220" height="22" rx="4" fill="#6366f1"/>
        <text x="130" y="123" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Hypervisor</text>
        {/* VMs */}
        {[0,1,2].map(i => (
          <g key={`vm-${i}`}>
            <rect x={25+i*75} y="35" width="68" height="70" rx="6" fill="white" stroke="#fca5a5" strokeWidth="1"/>
            <rect x={25+i*75} y="35" width="68" height="16" rx="6" fill="#fee2e2"/>
            <rect x={25+i*75} y="45" width="68" height="6" fill="#fee2e2"/>
            <text x={59+i*75} y="47" textAnchor="middle" fill="#991b1b" fontSize="7" fontWeight="bold">App {i+1}</text>
            <text x={59+i*75} y="64" textAnchor="middle" fill="#6b7280" fontSize="6">Bins/Libs</text>
            <rect x={30+i*75} y="70" width="58" height="16" rx="3" fill="#fef3c7"/>
            <text x={59+i*75} y="82" textAnchor="middle" fill="#92400e" fontSize="6" fontWeight="bold">Guest OS</text>
            <text x={59+i*75} y="98" textAnchor="middle" fill="#dc2626" fontSize="7">~GB each</text>
          </g>
        ))}

        {/* Docker side */}
        <text x="390" y="18" textAnchor="middle" fill="#0ea5e9" fontSize="12" fontWeight="bold">Docker Container</text>
        <rect x="270" y="25" width="240" height="130" rx="12" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1.5"/>
        {/* Hardware */}
        <rect x="280" y="130" width="220" height="20" rx="4" fill="#374151"/>
        <text x="390" y="144" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Hardware</text>
        {/* Host OS */}
        <rect x="280" y="108" width="220" height="22" rx="4" fill="#0ea5e9"/>
        <text x="390" y="123" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Host OS + Docker Engine</text>
        {/* Containers */}
        {[0,1,2].map(i => (
          <g key={`dc-${i}`}>
            <rect x={285+i*75} y="35" width="68" height="70" rx="6" fill="white" stroke="#7dd3fc" strokeWidth="1"/>
            <rect x={285+i*75} y="35" width="68" height="16" rx="6" fill="#e0f2fe"/>
            <rect x={285+i*75} y="45" width="68" height="6" fill="#e0f2fe"/>
            <text x={319+i*75} y="47" textAnchor="middle" fill="#0369a1" fontSize="7" fontWeight="bold">App {i+1}</text>
            <text x={319+i*75} y="64" textAnchor="middle" fill="#6b7280" fontSize="6">Bins/Libs</text>
            <text x={319+i*75} y="82" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="bold">~MB each</text>
            <text x={319+i*75} y="98" textAnchor="middle" fill="#22c55e" fontSize="7">⚡ Fast!</text>
          </g>
        ))}

        {/* Bottom comparison */}
        <rect x="10" y="165" width="500" height="30" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="260" y="184" textAnchor="middle" fill="#475569" fontSize="9">
          VM = full OS per app (<tspan fill="#ef4444" fontWeight="bold">berat, lambat</tspan>) | Docker = shared OS kernel (<tspan fill="#0ea5e9" fontWeight="bold">ringan, cepat, portable</tspan>)
        </text>
      </svg>
    </DiagramWrapper>
  )
}
