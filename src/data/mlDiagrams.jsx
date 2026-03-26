// ═══════════════════════════════════════════════════════════════
// ML & AI Section — SVG Visual Diagrams for Interactive Learning
// All diagrams are pure SVG/JSX, no external dependencies
// ═══════════════════════════════════════════════════════════════

function DWrapper({ title, children, bg = 'from-slate-50 to-blue-50' }) {
  return (
    <div className="my-5 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
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
// CHAPTER 1: Python for Data Science
// ═══════════════════════════════════════════════════════════════

export function NumpyBroadcastingDiagram() {
  return (
    <DWrapper title="NumPy Broadcasting — Cara Array Beda Shape Beroperasi" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 640 300" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="320" y="22" textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">Broadcasting: (3,1) + (1,4) → (3,4)</text>

        {/* Array A (3,1) */}
        <text x="60" y="55" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">A (3×1)</text>
        {[1,2,3].map((v,i) => (
          <g key={`a${i}`}>
            <rect x="30" y={65+i*35} width="60" height="30" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="60" y={85+i*35} textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">{v}</text>
          </g>
        ))}

        {/* Arrow → broadcast */}
        <text x="145" y="105" textAnchor="middle" fill="#6b7280" fontSize="20">→</text>
        <text x="145" y="125" textAnchor="middle" fill="#9ca3af" fontSize="8">broadcast</text>

        {/* Array A broadcasted (3,4) */}
        <text x="260" y="55" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">A broadcasted</text>
        {[1,2,3].map((v,i) => (
          <g key={`ab${i}`}>
            {[0,1,2,3].map(j => (
              <g key={`ab${i}${j}`}>
                <rect x={170+j*46} y={65+i*35} width="42" height="30" rx="5" fill="#d1fae5" stroke="#059669" strokeWidth="1" strokeDasharray="4"/>
                <text x={191+j*46} y={85+i*35} textAnchor="middle" fill="#065f46" fontSize="11">{v}</text>
              </g>
            ))}
          </g>
        ))}

        {/* Plus sign */}
        <text x="410" y="115" fill="#f59e0b" fontSize="28" fontWeight="bold">+</text>

        {/* Array B (1,4) */}
        <text x="520" y="55" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">B (1×4)</text>
        {[10,20,30,40].map((v,j) => (
          <g key={`b${j}`}>
            <rect x={432+j*46} y="65" width="42" height="30" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
            <text x={453+j*46} y="85" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold">{v}</text>
          </g>
        ))}

        {/* Arrow ↓ broadcast */}
        <text x="520" y="117" textAnchor="middle" fill="#6b7280" fontSize="16">↓ broadcast</text>

        {/* Result = */}
        <text x="320" y="195" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">Hasil: (3×4)</text>
        {[[11,21,31,41],[12,22,32,42],[13,23,33,43]].map((row,i) => (
          <g key={`r${i}`}>
            {row.map((v,j) => (
              <g key={`r${i}${j}`}>
                <rect x={182+j*52} y={205+i*32} width="48" height="28" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
                <text x={206+j*52} y={224+i*32} textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">{v}</text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </DWrapper>
  )
}

export function PandasAnatomyDiagram() {
  return (
    <DWrapper title="Anatomi Pandas DataFrame" bg="from-orange-50 to-amber-50">
      <svg viewBox="0 0 580 320" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Column headers */}
        <rect x="90" y="30" width="480" height="30" rx="8" fill="#f59e0b"/>
        <text x="330" y="20" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">← Columns (axis=1) →</text>
        {['Index','Nama','Usia','Kota','Gaji'].map((h,i) => (
          <text key={h} x={130+i*100} y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{h}</text>
        ))}

        {/* Rows */}
        {[
          ['0','Andi','25','Jakarta','8M'],
          ['1','Budi','30','Bandung','12M'],
          ['2','Citra','28','Surabaya','10M'],
          ['3','Dewi','35','Medan','15M'],
        ].map((row,i) => (
          <g key={`row${i}`}>
            <rect x="90" y={65+i*35} width="480" height="32" rx="0" fill={i%2===0?'#fff7ed':'white'} stroke="#fed7aa" strokeWidth="0.5"/>
            <rect x="90" y={65+i*35} width="80" height="32" fill="#fef3c7"/>
            {row.map((cell,j) => (
              <text key={`c${j}`} x={130+j*100} y={86+i*35} textAnchor="middle" fill={j===0?'#92400e':'#374151'} fontSize="11" fontWeight={j===0?'bold':'normal'}>{cell}</text>
            ))}
          </g>
        ))}

        {/* Labels */}
        <text x="55" y="85" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold" transform="rotate(-90,55,120)">← Index (axis=0) →</text>

        {/* Annotations */}
        <line x1="130" y1="210" x2="130" y2="240" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="60" y="240" width="140" height="24" rx="12" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"/>
        <text x="130" y="256" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">df.index → RangeIndex</text>

        <line x1="330" y1="30" x2="330" y2="15" stroke="#059669" strokeWidth="1.5"/>

        <line x1="430" y1="210" x2="430" y2="240" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="350" y="240" width="160" height="24" rx="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1"/>
        <text x="430" y="256" textAnchor="middle" fill="#5b21b6" fontSize="9" fontWeight="bold">df['Gaji'] → Series</text>

        {/* Bottom info */}
        <rect x="90" y="280" width="480" height="30" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
        <text x="330" y="300" textAnchor="middle" fill="#166534" fontSize="10">df.shape = (4, 5) | df.dtypes: object, int64, object, int64 | df.describe() → stats</text>
      </svg>
    </DWrapper>
  )
}

export function SklearnPipelineDiagram() {
  return (
    <DWrapper title="Scikit-learn Pipeline Flow" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 700 180" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Pipeline steps */}
        {[
          { x: 10, label: 'Raw Data', sub: 'X_train', color: '#ef4444', bg: '#fef2f2' },
          { x: 130, label: 'Imputer', sub: 'fill NaN', color: '#f59e0b', bg: '#fffbeb' },
          { x: 250, label: 'Scaler', sub: 'StandardScaler', color: '#3b82f6', bg: '#eff6ff' },
          { x: 370, label: 'Selector', sub: 'SelectKBest', color: '#8b5cf6', bg: '#f5f3ff' },
          { x: 490, label: 'Model', sub: 'RandomForest', color: '#059669', bg: '#f0fdf4' },
          { x: 610, label: 'Prediction', sub: 'ŷ', color: '#dc2626', bg: '#fef2f2' },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x} y="50" width="110" height="70" rx="14" fill={step.bg} stroke={step.color} strokeWidth="2"/>
            <text x={step.x+55} y="78" textAnchor="middle" fill={step.color} fontSize="12" fontWeight="bold">{step.label}</text>
            <text x={step.x+55} y="100" textAnchor="middle" fill="#6b7280" fontSize="9">{step.sub}</text>
            {i < 5 && <path d={`M${step.x+113} 85 L${step.x+127} 85`} stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrowGray)"/>}
          </g>
        ))}
        <defs>
          <marker id="arrowGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af"/>
          </marker>
        </defs>
        {/* fit/transform labels */}
        <text x="190" y="42" textAnchor="middle" fill="#d97706" fontSize="9">.fit_transform()</text>
        <text x="310" y="42" textAnchor="middle" fill="#2563eb" fontSize="9">.fit_transform()</text>
        <text x="430" y="42" textAnchor="middle" fill="#7c3aed" fontSize="9">.fit_transform()</text>
        <text x="550" y="42" textAnchor="middle" fill="#047857" fontSize="9">.fit() / .predict()</text>

        {/* Bottom pipeline code */}
        <rect x="100" y="140" width="500" height="28" rx="8" fill="#1e293b"/>
        <text x="350" y="159" textAnchor="middle" fill="#4ade80" fontSize="10" fontFamily="monospace">Pipeline([('imp',Imputer()),('scl',Scaler()),('sel',KBest()),('rf',RF())])</text>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 2: ML Algorithms
// ═══════════════════════════════════════════════════════════════

export function LinearRegressionDiagram() {
  return (
    <DWrapper title="Linear Regression — Cara Kerja Gradient Descent" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 640 280" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Left: scatter + line */}
        <text x="150" y="20" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Best Fit Line</text>
        <rect x="30" y="30" width="240" height="200" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        {/* Axes */}
        <line x1="60" y1="210" x2="250" y2="210" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="60" y1="210" x2="60" y2="45" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="155" y="228" textAnchor="middle" fill="#64748b" fontSize="9">x (fitur)</text>
        <text x="42" y="130" textAnchor="middle" fill="#64748b" fontSize="9" transform="rotate(-90,42,130)">y (target)</text>

        {/* Data points */}
        {[[75,185],[90,170],[105,155],[120,160],[135,135],[150,130],[165,120],[180,105],[195,100],[210,80],[225,75],[110,180],[140,145],[160,140],[200,90]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#3b82f6" opacity="0.7"/>
        ))}

        {/* Best fit line */}
        <line x1="65" y1="200" x2="240" y2="60" stroke="#ef4444" strokeWidth="2.5"/>
        <text x="235" y="55" fill="#ef4444" fontSize="9" fontWeight="bold">ŷ = β₀ + β₁x</text>

        {/* Residual lines */}
        {[[105,155,148],[135,135,124],[165,120,100],[195,100,76]].map(([x,y,yhat],i) => (
          <line key={`res${i}`} x1={x} y1={y} x2={x} y2={yhat} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3"/>
        ))}
        <text x="200" y="145" fill="#f59e0b" fontSize="8">residuals</text>

        {/* Right: Gradient Descent */}
        <text x="470" y="20" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">Gradient Descent</text>
        <rect x="340" y="30" width="270" height="200" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>

        {/* Loss curve */}
        <line x1="370" y1="210" x2="590" y2="210" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="370" y1="210" x2="370" y2="45" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="480" y="228" textAnchor="middle" fill="#64748b" fontSize="9">β (parameter)</text>
        <text x="355" y="130" textAnchor="middle" fill="#64748b" fontSize="9" transform="rotate(-90,355,130)">J(β) Loss</text>

        {/* Parabola / loss curve */}
        <path d="M 380 65 Q 420 50, 440 80 Q 460 110, 480 180 Q 490 205, 500 205 Q 510 205, 520 180 Q 540 110, 560 80 Q 580 55, 590 55" fill="none" stroke="#8b5cf6" strokeWidth="2.5"/>

        {/* GD steps */}
        <circle cx="400" cy="60" r="5" fill="#ef4444"/>
        <path d="M 405 63 L 430 85" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowRed)"/>
        <circle cx="435" cy="88" r="4" fill="#f59e0b"/>
        <path d="M 438 92 L 460 140" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowRed)"/>
        <circle cx="465" cy="150" r="4" fill="#22c55e"/>
        <path d="M 470 155 L 490 190" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowRed)"/>
        <circle cx="500" cy="205" r="6" fill="#059669" stroke="white" strokeWidth="2"/>
        <text x="500" y="195" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold">minimum</text>

        <text x="415" y="52" fill="#ef4444" fontSize="8">step 1</text>
        <text x="445" y="82" fill="#f59e0b" fontSize="8">step 2</text>
        <text x="475" y="145" fill="#22c55e" fontSize="8">step 3</text>

        <defs>
          <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>

        {/* Formula at bottom */}
        <rect x="100" y="248" width="440" height="26" rx="8" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1"/>
        <text x="320" y="266" textAnchor="middle" fill="#4338ca" fontSize="10" fontFamily="monospace">β := β - α · ∂J/∂β   |   α = learning rate   |   Repeat until converge</text>
      </svg>
    </DWrapper>
  )
}

export function DecisionTreeVisualDiagram() {
  return (
    <DWrapper title="Decision Tree — Cara Model Membuat Keputusan" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 600 340" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Root node */}
        <rect x="210" y="10" width="180" height="45" rx="10" fill="#059669" stroke="#047857" strokeWidth="2"/>
        <text x="300" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Gaji {'>'} 10M?</text>
        <text x="300" y="45" textAnchor="middle" fill="#bbf7d0" fontSize="8">Gini=0.50 | n=1000</text>

        {/* Lines from root */}
        <line x1="260" y1="55" x2="150" y2="90" stroke="#059669" strokeWidth="2"/>
        <line x1="340" y1="55" x2="450" y2="90" stroke="#059669" strokeWidth="2"/>
        <text x="195" y="70" fill="#22c55e" fontSize="10" fontWeight="bold">Ya</text>
        <text x="395" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">Tidak</text>

        {/* Level 2 - Left */}
        <rect x="60" y="90" width="180" height="45" rx="10" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
        <text x="150" y="110" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Usia {'>'} 30?</text>
        <text x="150" y="125" textAnchor="middle" fill="#bfdbfe" fontSize="8">Gini=0.38 | n=600</text>

        {/* Level 2 - Right */}
        <rect x="360" y="90" width="180" height="45" rx="10" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
        <text x="450" y="110" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Pendidikan = S2?</text>
        <text x="450" y="125" textAnchor="middle" fill="#bfdbfe" fontSize="8">Gini=0.44 | n=400</text>

        {/* Lines level 2-3 */}
        <line x1="110" y1="135" x2="70" y2="175" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="190" y1="135" x2="230" y2="175" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="410" y1="135" x2="370" y2="175" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="490" y1="135" x2="530" y2="175" stroke="#3b82f6" strokeWidth="1.5"/>

        {/* Leaf nodes */}
        {[
          { x: 10, y: 175, label: '✅ Approved', pct: '92%', n: 450, color: '#16a34a', bg: '#f0fdf4' },
          { x: 170, y: 175, label: '⚠️ Review', pct: '65%', n: 150, color: '#f59e0b', bg: '#fffbeb' },
          { x: 310, y: 175, label: '✅ Approved', pct: '78%', n: 120, color: '#16a34a', bg: '#f0fdf4' },
          { x: 470, y: 175, label: '❌ Rejected', pct: '85%', n: 280, color: '#dc2626', bg: '#fef2f2' },
        ].map((leaf,i) => (
          <g key={`leaf${i}`}>
            <rect x={leaf.x} y={leaf.y} width="120" height="42" rx="10" fill={leaf.bg} stroke={leaf.color} strokeWidth="2"/>
            <text x={leaf.x+60} y={leaf.y+18} textAnchor="middle" fill={leaf.color} fontSize="10" fontWeight="bold">{leaf.label}</text>
            <text x={leaf.x+60} y={leaf.y+33} textAnchor="middle" fill="#6b7280" fontSize="8">conf={leaf.pct} | n={leaf.n}</text>
          </g>
        ))}

        {/* Info box */}
        <rect x="30" y="240" width="540" height="90" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="300" y="260" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">Bagaimana Tree Memilih Split?</text>
        <text x="300" y="280" textAnchor="middle" fill="#475569" fontSize="9">Gini Impurity: G = 1 - Σ pᵢ² | Information Gain: IG = H(parent) - Σ(nⱼ/n)H(childⱼ)</text>
        <text x="300" y="298" textAnchor="middle" fill="#475569" fontSize="9">Entropy: H = -Σ pᵢ log₂(pᵢ) | Pilih fitur & threshold yang memaksimalkan IG</text>
        <text x="300" y="316" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold">Random Forest = Ensemble dari banyak trees + bagging + random feature subset</text>
      </svg>
    </DWrapper>
  )
}

export function EnsembleDiagram() {
  return (
    <DWrapper title="Ensemble Methods — Bagging vs Boosting vs Stacking" bg="from-purple-50 to-violet-50">
      <svg viewBox="0 0 680 320" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Bagging */}
        <text x="110" y="20" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">Bagging</text>
        <rect x="60" y="30" width="100" height="25" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1"/>
        <text x="110" y="47" textAnchor="middle" fill="#1e40af" fontSize="9">Full Dataset</text>
        {/* Bootstrap samples */}
        {[0,1,2].map(i => (
          <g key={`bag${i}`}>
            <line x1="110" y1="55" x2={60+i*50} y2="75" stroke="#93c5fd" strokeWidth="1"/>
            <rect x={35+i*50} y="75" width="50" height="20" rx="5" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
            <text x={60+i*50} y="89" textAnchor="middle" fill="#3b82f6" fontSize="7">Sample {i+1}</text>
            <rect x={35+i*50} y="100" width="50" height="22" rx="5" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1"/>
            <text x={60+i*50} y="115" textAnchor="middle" fill="#16a34a" fontSize="7">Tree {i+1}</text>
          </g>
        ))}
        {/* Vote */}
        {[0,1,2].map(i => <line key={`bv${i}`} x1={60+i*50} y1="122" x2="110" y2="150" stroke="#22c55e" strokeWidth="1"/>)}
        <rect x="70" y="150" width="80" height="24" rx="8" fill="#059669"/>
        <text x="110" y="166" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Majority Vote</text>
        <text x="110" y="195" textAnchor="middle" fill="#6b7280" fontSize="8">Parallel training</text>
        <text x="110" y="208" textAnchor="middle" fill="#6b7280" fontSize="8">Reduces variance</text>

        {/* Boosting */}
        <text x="350" y="20" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">Boosting</text>
        {[
          { x: 260, label: 'Weak 1', sub: 'all equal' },
          { x: 340, label: 'Weak 2', sub: 'focus errors' },
          { x: 420, label: 'Weak 3', sub: 'focus errors' },
        ].map((m, i) => (
          <g key={`boost${i}`}>
            <rect x={m.x} y="35" width="70" height="35" rx="8" fill={i===0?'#fef2f2':i===1?'#fff7ed':'#fefce8'} stroke="#ef4444" strokeWidth="1.5"/>
            <text x={m.x+35} y="52" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">{m.label}</text>
            <text x={m.x+35} y="64" textAnchor="middle" fill="#9ca3af" fontSize="7">{m.sub}</text>
            {i < 2 && <path d={`M${m.x+73} 52 L${m.x+87} 52`} stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowR)"/>}
          </g>
        ))}
        <text x="350" y="88" textAnchor="middle" fill="#ef4444" fontSize="8">Sequential: each fixes previous errors</text>

        {/* Weighted sum */}
        <rect x="290" y="100" width="120" height="25" rx="8" fill="#dc2626"/>
        <text x="350" y="117" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Σ αᵢ · hᵢ(x)</text>
        <text x="350" y="145" textAnchor="middle" fill="#6b7280" fontSize="8">Sequential training</text>
        <text x="350" y="158" textAnchor="middle" fill="#6b7280" fontSize="8">Reduces bias</text>

        {/* Stacking */}
        <text x="580" y="20" textAnchor="middle" fill="#0891b2" fontSize="12" fontWeight="bold">Stacking</text>
        {['SVM','RF','XGB'].map((m, i) => (
          <g key={`stack${i}`}>
            <rect x={520+i*0} y={35+i*30} width="60" height="24" rx="6" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1.5"/>
            <text x={550+i*0} y={51+i*30} textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="bold">{m}</text>
            <line x1="580" y1={47+i*30} x2="610" y2={47+i*30+20-i*10} stroke="#06b6d4" strokeWidth="1"/>
          </g>
        ))}
        {/* Meta learner */}
        <rect x="610" y="55" width="60" height="35" rx="8" fill="#0891b2"/>
        <text x="640" y="70" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Meta</text>
        <text x="640" y="82" textAnchor="middle" fill="#cffafe" fontSize="7">Learner</text>
        <text x="580" y="140" textAnchor="middle" fill="#6b7280" fontSize="8">Uses predictions as</text>
        <text x="580" y="153" textAnchor="middle" fill="#6b7280" fontSize="8">features for meta-model</text>

        <defs>
          <marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>

        {/* Comparison table */}
        <rect x="30" y="225" width="620" height="85" rx="10" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>
        <text x="340" y="245" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">Perbandingan</text>
        {[
          ['Bagging','Random Forest','↓ Variance','Parallel','~Same Bias'],
          ['Boosting','XGBoost/LightGBM','↓ Bias','Sequential','Risk Overfit'],
          ['Stacking','Blend Models','↓ Both','2-Level','Best Accuracy'],
        ].map((row,i) => (
          <g key={`cmp${i}`}>
            {row.map((cell,j) => (
              <text key={`cmp${i}${j}`} x={95+j*130} y={265+i*14} textAnchor="middle" fill={j===0?'#5b21b6':'#6b7280'} fontSize="9" fontWeight={j===0?'bold':'normal'}>{cell}</text>
            ))}
          </g>
        ))}
      </svg>
    </DWrapper>
  )
}

export function SVMDiagram() {
  return (
    <DWrapper title="SVM — Support Vectors & Maximum Margin" bg="from-red-50 to-orange-50">
      <svg viewBox="0 0 550 280" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Axes */}
        <rect x="30" y="20" width="280" height="240" rx="8" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1"/>
        <line x1="50" y1="240" x2="290" y2="240" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="50" y1="240" x2="50" y2="30" stroke="#94a3b8" strokeWidth="1"/>

        {/* Class A - blue circles */}
        {[[80,60],[90,90],[100,50],[110,110],[120,80],[95,130],[130,100],[80,100]].map(([x,y],i) => (
          <circle key={`a${i}`} cx={x} cy={y} r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5"/>
        ))}

        {/* Class B - red triangles */}
        {[[200,150],[210,180],[220,160],[230,200],[240,170],[250,210],[215,220],[195,190]].map(([x,y],i) => (
          <polygon key={`b${i}`} points={`${x},${y-6} ${x-6},${y+5} ${x+6},${y+5}`} fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5"/>
        ))}

        {/* Decision boundary */}
        <line x1="60" y1="200" x2="270" y2="40" stroke="#1e293b" strokeWidth="2.5"/>

        {/* Margin lines */}
        <line x1="80" y1="210" x2="260" y2="55" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5"/>
        <line x1="40" y1="190" x2="280" y2="25" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5"/>

        {/* Margin double arrow */}
        <line x1="155" y1="102" x2="182" y2="120" stroke="#f59e0b" strokeWidth="2"/>
        <text x="175" y="95" fill="#f59e0b" fontSize="9" fontWeight="bold">margin</text>

        {/* Support vectors - highlighted */}
        <circle cx="130" cy="100" r="6" fill="#3b82f6" stroke="#f59e0b" strokeWidth="3"/>
        <circle cx="110" cy="110" r="6" fill="#3b82f6" stroke="#f59e0b" strokeWidth="3"/>
        <circle cx="200" cy="150" r="3" fill="none" stroke="#f59e0b" strokeWidth="3"/>
        <polygon points="200,144 194,155 206,155" fill="#ef4444" stroke="#f59e0b" strokeWidth="3"/>

        {/* Right panel - Kernel Trick */}
        <text x="430" y="35" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">Kernel Trick</text>

        {/* Linear (2D) */}
        <text x="400" y="58" textAnchor="middle" fill="#6b7280" fontSize="9">Non-linearly separable (2D)</text>
        <rect x="350" y="65" width="100" height="60" rx="8" fill="#faf5ff" stroke="#c4b5fd" strokeWidth="1"/>
        {[[370,85],[375,95],[385,80],[390,100],[380,105],[395,88]].map(([x,y],i) => (
          <circle key={`k1a${i}`} cx={x} cy={y} r="3" fill="#3b82f6"/>
        ))}
        {[[410,75],[420,90],[415,105],[425,85],[430,110],[405,115]].map(([x,y],i) => (
          <circle key={`k1b${i}`} cx={x} cy={y} r="3" fill="#ef4444"/>
        ))}

        <text x="510" y="95" fill="#7c3aed" fontSize="16" fontWeight="bold">→</text>
        <text x="510" y="110" fill="#9ca3af" fontSize="7">φ(x)</text>

        {/* Higher dim (separable) */}
        <text x="400" y="148" textAnchor="middle" fill="#6b7280" fontSize="9">Linearly separable (higher dim)</text>
        <rect x="350" y="155" width="100" height="60" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
        {[[365,175],[375,185],[370,195],[385,180],[380,190]].map(([x,y],i) => (
          <circle key={`k2a${i}`} cx={x} cy={y} r="3" fill="#3b82f6"/>
        ))}
        {[[410,170],[420,165],[425,175],[430,185],[415,195]].map(([x,y],i) => (
          <circle key={`k2b${i}`} cx={x} cy={y} r="3" fill="#ef4444"/>
        ))}
        <line x1="395" y1="160" x2="395" y2="210" stroke="#1e293b" strokeWidth="2"/>

        {/* Kernel types */}
        <rect x="340" y="230" width="200" height="40" rx="8" fill="#1e293b"/>
        <text x="440" y="248" textAnchor="middle" fill="#a5b4fc" fontSize="8">Linear: K(x,y) = xᵀy</text>
        <text x="440" y="262" textAnchor="middle" fill="#86efac" fontSize="8">RBF: K(x,y) = exp(-γ||x-y||²)</text>

        {/* Legend */}
        <circle cx="60" cy="265" r="5" fill="#3b82f6"/>
        <text x="75" y="268" fill="#374151" fontSize="9">Class A</text>
        <polygon points="120,260 114,271 126,271" fill="#ef4444"/>
        <text x="140" y="268" fill="#374151" fontSize="9">Class B</text>
        <circle cx="195" cy="265" r="5" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <text x="225" y="268" fill="#374151" fontSize="9">Support Vectors</text>
      </svg>
    </DWrapper>
  )
}

export function KMeansClusteringDiagram() {
  return (
    <DWrapper title="K-Means Clustering — Iterasi Step by Step" bg="from-cyan-50 to-teal-50">
      <svg viewBox="0 0 700 220" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* 3 steps */}
        {[
          { x: 0, title: 'Step 1: Init Centroids', centroids: [[60,60],[120,150]], points: [[40,50],[55,70],[70,45],[80,80],[100,130],[110,160],[130,140],[140,170]], colors: ['#94a3b8','#94a3b8','#94a3b8','#94a3b8','#94a3b8','#94a3b8','#94a3b8','#94a3b8'] },
          { x: 240, title: 'Step 2: Assign Points', centroids: [[60,60],[120,150]], points: [[40,50],[55,70],[70,45],[80,80],[100,130],[110,160],[130,140],[140,170]], colors: ['#3b82f6','#3b82f6','#3b82f6','#3b82f6','#ef4444','#ef4444','#ef4444','#ef4444'] },
          { x: 480, title: 'Step 3: Update Centroids', centroids: [[61,61],[120,150]], points: [[40,50],[55,70],[70,45],[80,80],[100,130],[110,160],[130,140],[140,170]], colors: ['#3b82f6','#3b82f6','#3b82f6','#3b82f6','#ef4444','#ef4444','#ef4444','#ef4444'] },
        ].map((step, si) => (
          <g key={`step${si}`}>
            <text x={step.x+90} y="18" textAnchor="middle" fill="#0d9488" fontSize="10" fontWeight="bold">{step.title}</text>
            <rect x={step.x+10} y="25" width="170" height="160" rx="8" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1"/>

            {/* Points */}
            {step.points.map(([px,py], pi) => (
              <circle key={`p${si}${pi}`} cx={step.x+px+10} cy={py} r="4" fill={step.colors[pi]} opacity="0.8"/>
            ))}

            {/* Centroids */}
            {step.centroids.map(([cx,cy], ci) => (
              <g key={`c${si}${ci}`}>
                <line x1={step.x+cx+10-6} y1={cy-6} x2={step.x+cx+10+6} y2={cy+6} stroke={ci===0?'#1d4ed8':'#b91c1c'} strokeWidth="3"/>
                <line x1={step.x+cx+10+6} y1={cy-6} x2={step.x+cx+10-6} y2={cy+6} stroke={ci===0?'#1d4ed8':'#b91c1c'} strokeWidth="3"/>
              </g>
            ))}

            {/* Arrow between steps */}
            {si < 2 && (
              <g>
                <line x1={step.x+185} y1="105" x2={step.x+240} y2="105" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowTeal)"/>
                <text x={step.x+212} y="100" textAnchor="middle" fill="#14b8a6" fontSize="8">repeat</text>
              </g>
            )}
          </g>
        ))}

        <defs>
          <marker id="arrowTeal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#14b8a6"/>
          </marker>
        </defs>

        {/* Bottom */}
        <rect x="50" y="195" width="600" height="22" rx="6" fill="#0d9488"/>
        <text x="350" y="210" textAnchor="middle" fill="white" fontSize="9">Repeat until centroids tidak berubah | Objective: minimize Σᵢ ||xᵢ - μ_c||² (inertia) | Pilih K via Elbow/Silhouette</text>
      </svg>
    </DWrapper>
  )
}

export function ConfusionMatrixDiagram() {
  return (
    <DWrapper title="Confusion Matrix & Evaluation Metrics" bg="from-amber-50 to-yellow-50">
      <svg viewBox="0 0 640 300" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Matrix */}
        <text x="160" y="20" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">Confusion Matrix</text>
        <text x="160" y="38" textAnchor="middle" fill="#6b7280" fontSize="9">Predicted →</text>
        <text x="35" y="120" textAnchor="middle" fill="#6b7280" fontSize="9" transform="rotate(-90,35,120)">Actual →</text>

        {/* Headers */}
        <text x="130" y="55" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">Positive</text>
        <text x="210" y="55" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">Negative</text>
        <text x="55" y="95" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">Pos</text>
        <text x="55" y="155" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">Neg</text>

        {/* TP */}
        <rect x="80" y="65" width="90" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
        <text x="125" y="88" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">TP = 85</text>
        <text x="125" y="105" textAnchor="middle" fill="#16a34a" fontSize="8">True Positive</text>

        {/* FN */}
        <rect x="175" y="65" width="90" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
        <text x="220" y="88" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="bold">FN = 15</text>
        <text x="220" y="105" textAnchor="middle" fill="#ca8a04" fontSize="8">False Negative</text>

        {/* FP */}
        <rect x="80" y="120" width="90" height="50" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
        <text x="125" y="143" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">FP = 10</text>
        <text x="125" y="160" textAnchor="middle" fill="#dc2626" fontSize="8">False Positive</text>

        {/* TN */}
        <rect x="175" y="120" width="90" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
        <text x="220" y="143" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">TN = 90</text>
        <text x="220" y="160" textAnchor="middle" fill="#16a34a" fontSize="8">True Negative</text>

        {/* Metrics on right */}
        <text x="460" y="20" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Metrics</text>

        {[
          { y: 45, label: 'Accuracy', formula: '(TP+TN)/(TP+TN+FP+FN)', value: '87.5%', color: '#3b82f6' },
          { y: 85, label: 'Precision', formula: 'TP/(TP+FP)', value: '89.5%', color: '#8b5cf6' },
          { y: 125, label: 'Recall', formula: 'TP/(TP+FN)', value: '85.0%', color: '#059669' },
          { y: 165, label: 'F1-Score', formula: '2·P·R/(P+R)', value: '87.2%', color: '#f59e0b' },
        ].map((m) => (
          <g key={m.label}>
            <rect x="330" y={m.y} width="260" height="32" rx="8" fill="#f8fafc" stroke={m.color} strokeWidth="1.5"/>
            <text x="395" y={m.y+15} textAnchor="middle" fill={m.color} fontSize="10" fontWeight="bold">{m.label}</text>
            <text x="495" y={m.y+15} textAnchor="middle" fill="#6b7280" fontSize="8">{m.formula}</text>
            <text x="570" y={m.y+15} textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">= {m.value}</text>
            <text x="395" y={m.y+27} textAnchor="middle" fill="#9ca3af" fontSize="7">
              {m.label==='Precision'?'Dari yg diprediksi +, berapa yg benar?':
               m.label==='Recall'?'Dari yg actual +, berapa yg terdeteksi?':
               m.label==='F1-Score'?'Harmonic mean Precision & Recall':'Overall correctness'}
            </text>
          </g>
        ))}

        {/* ROC AUC */}
        <text x="160" y="195" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">ROC Curve</text>
        <rect x="60" y="200" width="200" height="95" rx="8" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>
        <line x1="80" y1="285" x2="240" y2="285" stroke="#a78bfa" strokeWidth="1"/>
        <line x1="80" y1="285" x2="80" y2="210" stroke="#a78bfa" strokeWidth="1"/>
        <text x="160" y="297" textAnchor="middle" fill="#7c3aed" fontSize="7">FPR</text>
        <text x="68" y="250" textAnchor="middle" fill="#7c3aed" fontSize="7" transform="rotate(-90,68,250)">TPR</text>
        {/* ROC curve */}
        <path d="M 80 285 Q 90 250, 110 230 Q 140 215, 180 212 L 240 210" fill="none" stroke="#7c3aed" strokeWidth="2"/>
        {/* Random */}
        <line x1="80" y1="285" x2="240" y2="210" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4"/>
        <text x="200" y="255" fill="#7c3aed" fontSize="8" fontWeight="bold">AUC=0.93</text>
        <text x="180" y="270" fill="#d1d5db" fontSize="7">random=0.5</text>

        {/* When to use which */}
        <rect x="310" y="215" width="290" height="75" rx="10" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1"/>
        <text x="455" y="235" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">Kapan pakai metric mana?</text>
        <text x="455" y="252" textAnchor="middle" fill="#78350f" fontSize="8">Imbalanced data → F1 / AUC-ROC (bukan Accuracy!)</text>
        <text x="455" y="265" textAnchor="middle" fill="#78350f" fontSize="8">Medical (miss = bahaya) → Recall tinggi</text>
        <text x="455" y="278" textAnchor="middle" fill="#78350f" fontSize="8">Spam (FP = gangguan) → Precision tinggi</text>
      </svg>
    </DWrapper>
  )
}

export function RegularizationDiagram() {
  return (
    <DWrapper title="Regularization — L1 (Lasso) vs L2 (Ridge)" bg="from-indigo-50 to-purple-50">
      <svg viewBox="0 0 600 240" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* L1 */}
        <text x="140" y="18" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">L1 (Lasso): ||w||₁</text>
        <rect x="40" y="25" width="200" height="160" rx="8" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>
        {/* Diamond constraint */}
        <polygon points="140,55 190,105 140,155 90,105" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
        {/* Contour ellipses */}
        <ellipse cx="180" cy="70" rx="55" ry="35" fill="none" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="3" transform="rotate(30,180,70)"/>
        <ellipse cx="180" cy="70" rx="40" ry="25" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3" transform="rotate(30,180,70)"/>
        {/* Intersection point on axis */}
        <circle cx="140" cy="55" r="5" fill="#ef4444" stroke="white" strokeWidth="2"/>
        <text x="155" y="45" fill="#ef4444" fontSize="8" fontWeight="bold">w₂=0!</text>
        <text x="140" y="195" textAnchor="middle" fill="#6b7280" fontSize="8">Corner → sparse (w=0)</text>
        <text x="140" y="208" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="bold">Feature Selection!</text>

        {/* L2 */}
        <text x="440" y="18" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="bold">L2 (Ridge): ||w||²</text>
        <rect x="340" y="25" width="200" height="160" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1"/>
        {/* Circle constraint */}
        <circle cx="440" cy="105" r="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        {/* Contour ellipses */}
        <ellipse cx="480" cy="70" rx="55" ry="35" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3" transform="rotate(30,480,70)"/>
        <ellipse cx="480" cy="70" rx="40" ry="25" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3" transform="rotate(30,480,70)"/>
        {/* Intersection - not on axis */}
        <circle cx="468" cy="60" r="5" fill="#ef4444" stroke="white" strokeWidth="2"/>
        <text x="475" y="52" fill="#ef4444" fontSize="8" fontWeight="bold">w₁≈w₂≈small</text>
        <text x="440" y="195" textAnchor="middle" fill="#6b7280" fontSize="8">Smooth → all weights small</text>
        <text x="440" y="208" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="bold">Shrinks, never zero</text>

        {/* Bottom formula */}
        <rect x="50" y="218" width="500" height="18" rx="6" fill="#1e293b"/>
        <text x="300" y="231" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">L1: J = MSE + λΣ|wⱼ|    |    L2: J = MSE + λΣwⱼ²    |    Elastic Net: λ₁L1 + λ₂L2</text>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 2b: Advanced ML
// ═══════════════════════════════════════════════════════════════

export function PCADiagram() {
  return (
    <DWrapper title="PCA — Dimensionality Reduction Visual" bg="from-violet-50 to-purple-50">
      <svg viewBox="0 0 640 230" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* 2D data */}
        <text x="140" y="18" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="bold">Original 2D Data</text>
        <rect x="20" y="25" width="240" height="180" rx="8" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>

        {/* Scattered points in elongated cloud */}
        {[[60,150],[80,140],[90,130],[100,120],[110,115],[120,105],[130,100],[140,90],[150,85],[160,80],[170,70],[180,65],[190,55],[140,110],[120,130],[100,140],[160,60],[130,120],[150,100],[110,135]].map(([x,y],i) => (
          <circle key={`pca${i}`} cx={x} cy={y} r="4" fill="#8b5cf6" opacity="0.6"/>
        ))}

        {/* PC1 arrow */}
        <line x1="60" y1="160" x2="200" y2="50" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowG)"/>
        <text x="195" y="42" fill="#059669" fontSize="10" fontWeight="bold">PC1 (85%)</text>

        {/* PC2 arrow */}
        <line x1="130" y1="70" x2="90" y2="120" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRd)"/>
        <text x="65" y="68" fill="#ef4444" fontSize="9">PC2 (15%)</text>

        {/* Arrow → */}
        <text x="290" y="115" fill="#6b7280" fontSize="22">→</text>
        <text x="290" y="135" textAnchor="middle" fill="#9ca3af" fontSize="8">project</text>

        {/* 1D projection */}
        <text x="460" y="18" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">Projected to PC1 (1D)</text>
        <rect x="320" y="25" width="280" height="180" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>

        <line x1="340" y1="120" x2="580" y2="120" stroke="#059669" strokeWidth="2"/>
        {[350,365,375,385,395,410,420,435,445,455,470,480,495,425,385,370,505,410,460,380].map((x,i) => (
          <circle key={`proj${i}`} cx={x} cy="120" r="5" fill="#22c55e" opacity="0.7"/>
        ))}
        <text x="460" y="150" textAnchor="middle" fill="#6b7280" fontSize="9">PC1 axis — 85% variansi preserved!</text>

        {/* Scree plot */}
        <text x="460" y="170" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="bold">Scree Plot (explained variance)</text>
        <rect x="380" y="175" width="30" height="25" fill="#8b5cf6" rx="3"/>
        <rect x="420" y="190" width="30" height="10" fill="#c4b5fd" rx="3"/>
        <text x="395" y="195" textAnchor="middle" fill="white" fontSize="7">85%</text>
        <text x="435" y="197" textAnchor="middle" fill="#7c3aed" fontSize="7">15%</text>
        <text x="395" y="210" textAnchor="middle" fill="#6b7280" fontSize="7">PC1</text>
        <text x="435" y="210" textAnchor="middle" fill="#6b7280" fontSize="7">PC2</text>

        <defs>
          <marker id="arrowG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
          </marker>
          <marker id="arrowRd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

export function BiasVarianceDiagram() {
  return (
    <DWrapper title="Bias-Variance Tradeoff — Underfitting vs Overfitting" bg="from-orange-50 to-red-50">
      <svg viewBox="0 0 700 250" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* 3 panels */}
        {[
          { x: 0, title: 'Underfitting', sub: 'High Bias', color: '#ef4444', curve: 'M 30 140 L 200 80', bg: '#fef2f2' },
          { x: 240, title: 'Good Fit', sub: 'Balanced', color: '#059669', curve: 'M 30 150 Q 80 130, 100 90 Q 120 70, 150 60 Q 180 70, 200 55', bg: '#f0fdf4' },
          { x: 480, title: 'Overfitting', sub: 'High Variance', color: '#7c3aed', curve: 'M 30 145 Q 50 50, 70 130 Q 90 40, 110 100 Q 130 35, 150 80 Q 170 30, 190 60 Q 200 50, 200 55', bg: '#faf5ff' },
        ].map((panel, pi) => (
          <g key={`panel${pi}`}>
            <text x={panel.x+115} y="18" textAnchor="middle" fill={panel.color} fontSize="11" fontWeight="bold">{panel.title}</text>
            <text x={panel.x+115} y="32" textAnchor="middle" fill="#9ca3af" fontSize="8">{panel.sub}</text>
            <rect x={panel.x+10} y="38" width="210" height="140" rx="8" fill={panel.bg} stroke="#e5e7eb" strokeWidth="1"/>

            {/* Data points */}
            {[[40,145],[60,130],[80,110],[95,95],[110,90],[130,75],[150,65],[170,60],[190,55],[55,140],[75,120],[105,100],[125,85],[145,70],[165,65],[185,58]].map(([px,py],i) => (
              <circle key={`dp${pi}${i}`} cx={panel.x+px} cy={py+5} r="3" fill={panel.color} opacity="0.4"/>
            ))}

            {/* Curve */}
            <path d={panel.curve.split(' ').map((token, ti) => {
              if (token === 'M' || token === 'L' || token === 'Q') return token
              const num = parseFloat(token)
              if (isNaN(num)) return token
              return ti % 2 === 1 ? num + panel.x : num
            }).join(' ')} fill="none" stroke={panel.color} strokeWidth="2.5"/>
          </g>
        ))}

        {/* Learning curves at bottom */}
        <rect x="50" y="195" width="600" height="48" rx="10" fill="#1e293b"/>
        <text x="350" y="213" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">Diagnosis dari Learning Curve</text>
        <text x="170" y="232" textAnchor="middle" fill="#fca5a5" fontSize="8">Underfitting: train↑ val↑ → model lebih complex</text>
        <text x="430" y="232" textAnchor="middle" fill="#c4b5fd" fontSize="8">Overfitting: train↓↓ val↑ → regularisasi / more data</text>
        <text x="350" y="232" fill="#86efac" fontSize="8">|</text>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 3: Deep Learning
// ═══════════════════════════════════════════════════════════════

export function ActivationFunctionsDiagram() {
  return (
    <DWrapper title="Activation Functions — Bentuk & Behavior" bg="from-pink-50 to-rose-50">
      <svg viewBox="0 0 700 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 0, name: 'Sigmoid', formula: '1/(1+e⁻ˣ)', range: '[0, 1]', color: '#ef4444',
            path: 'M 10 155 Q 30 155, 50 150 Q 70 140, 85 110 Q 95 80, 105 60 Q 115 45, 130 40 Q 150 35, 165 35' },
          { x: 180, name: 'Tanh', formula: '(eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)', range: '[-1, 1]', color: '#3b82f6',
            path: 'M 10 160 Q 30 158, 50 150 Q 70 130, 85 95 Q 100 60, 115 45 Q 130 35, 150 32 Q 160 30, 165 30' },
          { x: 360, name: 'ReLU', formula: 'max(0, x)', range: '[0, ∞)', color: '#059669',
            path: 'M 10 95 L 85 95 L 165 30' },
          { x: 530, name: 'Leaky ReLU', formula: 'max(αx, x)', range: '(-∞, ∞)', color: '#8b5cf6',
            path: 'M 10 110 L 85 95 L 165 30' },
        ].map((fn) => (
          <g key={fn.name}>
            <text x={fn.x+88} y="16" textAnchor="middle" fill={fn.color} fontSize="10" fontWeight="bold">{fn.name}</text>
            <rect x={fn.x+5} y="22" width="165" height="130" rx="8" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1"/>
            {/* Axes */}
            <line x1={fn.x+10} y1="95" x2={fn.x+170} y2="95" stroke="#d1d5db" strokeWidth="0.5"/>
            <line x1={fn.x+88} y1="25" x2={fn.x+88} y2="150" stroke="#d1d5db" strokeWidth="0.5"/>
            {/* Curve */}
            <path d={fn.path.replace(/(\d+)(?= )/g, (m) => parseInt(m) + fn.x)} fill="none" stroke={fn.color} strokeWidth="2.5"/>
            {/* Labels */}
            <text x={fn.x+88} y="170" textAnchor="middle" fill="#6b7280" fontSize="7">{fn.formula}</text>
            <text x={fn.x+88} y="182" textAnchor="middle" fill="#9ca3af" fontSize="7">Range: {fn.range}</text>
          </g>
        ))}

        <rect x="50" y="190" width="600" height="8" rx="4" fill="#f3f4f6"/>
        <text x="350" y="196" textAnchor="middle" fill="#6b7280" fontSize="6">ReLU paling populer (hidden layers) | Sigmoid untuk output binary | Softmax untuk output multi-class</text>
      </svg>
    </DWrapper>
  )
}

export function BackpropDiagram() {
  return (
    <DWrapper title="Backpropagation — Forward & Backward Pass" bg="from-amber-50 to-orange-50">
      <svg viewBox="0 0 650 260" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Network layers */}
        <text x="325" y="18" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="bold">Forward Pass → Compute Loss → Backward Pass (Chain Rule)</text>

        {/* Input */}
        {[60,100,140].map((y,i) => (
          <g key={`in${i}`}>
            <circle cx="60" cy={y} r="16" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="60" y={y+4} textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">x{i+1}</text>
          </g>
        ))}
        <text x="60" y="175" textAnchor="middle" fill="#3b82f6" fontSize="9">Input</text>

        {/* Hidden 1 */}
        {[50,90,130,170].map((y,i) => (
          <g key={`h1${i}`}>
            <circle cx="200" cy={y} r="16" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
            <text x="200" y={y+4} textAnchor="middle" fill="#166534" fontSize="8">h{i+1}</text>
          </g>
        ))}
        <text x="200" y="200" textAnchor="middle" fill="#22c55e" fontSize="9">Hidden</text>

        {/* Connections input→hidden */}
        {[60,100,140].map((y1,i) =>
          [50,90,130,170].map((y2,j) => (
            <line key={`c1${i}${j}`} x1="76" y1={y1} x2="184" y2={y2} stroke="#e5e7eb" strokeWidth="0.5"/>
          ))
        )}

        {/* Output */}
        {[80,130].map((y,i) => (
          <g key={`out${i}`}>
            <circle cx="340" cy={y} r="16" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
            <text x="340" y={y+4} textAnchor="middle" fill="#92400e" fontSize="8">ŷ{i+1}</text>
          </g>
        ))}
        <text x="340" y="170" textAnchor="middle" fill="#f59e0b" fontSize="9">Output</text>

        {/* Connections hidden→output */}
        {[50,90,130,170].map((y1,i) =>
          [80,130].map((y2,j) => (
            <line key={`c2${i}${j}`} x1="216" y1={y1} x2="324" y2={y2} stroke="#e5e7eb" strokeWidth="0.5"/>
          ))
        )}

        {/* Loss */}
        <rect x="400" y="85" width="80" height="40" rx="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="2"/>
        <text x="440" y="103" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Loss</text>
        <text x="440" y="117" textAnchor="middle" fill="#fecaca" fontSize="7">J(θ)</text>
        <line x1="356" y1="100" x2="398" y2="105" stroke="#ef4444" strokeWidth="1.5"/>

        {/* Forward arrow (top) */}
        <path d="M 80 30 L 430 30" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBl)" strokeDasharray="6"/>
        <text x="255" y="25" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">→ Forward Pass: z=Wx+b, a=f(z)</text>

        {/* Backward arrow (bottom) */}
        <path d="M 430 220 L 80 220" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed2)" strokeDasharray="6"/>
        <text x="255" y="215" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">← Backward Pass: ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w</text>

        {/* Chain rule box */}
        <rect x="480" y="40" width="160" height="100" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1"/>
        <text x="560" y="58" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">Chain Rule</text>
        <text x="560" y="78" textAnchor="middle" fill="#b91c1c" fontSize="8" fontFamily="monospace">∂L/∂w₁ = ∂L/∂ŷ</text>
        <text x="560" y="93" textAnchor="middle" fill="#b91c1c" fontSize="8" fontFamily="monospace">        · ∂ŷ/∂h</text>
        <text x="560" y="108" textAnchor="middle" fill="#b91c1c" fontSize="8" fontFamily="monospace">        · ∂h/∂z</text>
        <text x="560" y="123" textAnchor="middle" fill="#b91c1c" fontSize="8" fontFamily="monospace">        · ∂z/∂w₁</text>

        {/* Update rule */}
        <rect x="480" y="150" width="160" height="35" rx="8" fill="#059669"/>
        <text x="560" y="165" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Weight Update</text>
        <text x="560" y="178" textAnchor="middle" fill="#bbf7d0" fontSize="8">w := w - α · ∂L/∂w</text>

        <defs>
          <marker id="arrowBl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
          </marker>
          <marker id="arrowRed2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

export function CNNArchDiagram() {
  return (
    <DWrapper title="CNN Architecture — Dari Input Gambar ke Klasifikasi" bg="from-sky-50 to-blue-50">
      <svg viewBox="0 0 720 220" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Input image */}
        <rect x="10" y="50" width="70" height="70" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="45" y="82" textAnchor="middle" fill="#1e40af" fontSize="8">🖼️</text>
        <text x="45" y="95" textAnchor="middle" fill="#1e40af" fontSize="7">224×224×3</text>
        <text x="45" y="135" textAnchor="middle" fill="#3b82f6" fontSize="8">Input</text>

        {/* Conv1 + ReLU */}
        <rect x="100" y="35" width="55" height="100" rx="5" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="127" y="60" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="bold">Conv2D</text>
        <text x="127" y="75" textAnchor="middle" fill="#16a34a" fontSize="6">3×3, 32</text>
        <text x="127" y="90" textAnchor="middle" fill="#16a34a" fontSize="6">+ ReLU</text>
        <text x="127" y="105" textAnchor="middle" fill="#16a34a" fontSize="6">+ BN</text>
        <line x1="82" y1="85" x2="98" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Pool1 */}
        <rect x="165" y="45" width="40" height="80" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="185" y="75" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">Max</text>
        <text x="185" y="90" textAnchor="middle" fill="#92400e" fontSize="7">Pool</text>
        <text x="185" y="105" textAnchor="middle" fill="#b45309" fontSize="6">2×2</text>
        <line x1="157" y1="85" x2="163" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Conv2 */}
        <rect x="215" y="40" width="55" height="90" rx="5" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="242" y="60" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="bold">Conv2D</text>
        <text x="242" y="75" textAnchor="middle" fill="#16a34a" fontSize="6">3×3, 64</text>
        <text x="242" y="90" textAnchor="middle" fill="#16a34a" fontSize="6">+ ReLU</text>
        <text x="242" y="105" textAnchor="middle" fill="#16a34a" fontSize="6">+ BN</text>
        <line x1="207" y1="85" x2="213" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Pool2 */}
        <rect x="280" y="50" width="40" height="70" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="300" y="80" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">Max</text>
        <text x="300" y="93" textAnchor="middle" fill="#92400e" fontSize="7">Pool</text>
        <line x1="272" y1="85" x2="278" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Conv3 */}
        <rect x="330" y="45" width="55" height="80" rx="5" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="357" y="65" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="bold">Conv2D</text>
        <text x="357" y="80" textAnchor="middle" fill="#16a34a" fontSize="6">3×3, 128</text>
        <text x="357" y="95" textAnchor="middle" fill="#16a34a" fontSize="6">+ ReLU</text>
        <line x1="322" y1="85" x2="328" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Flatten */}
        <rect x="400" y="60" width="40" height="50" rx="5" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="420" y="82" textAnchor="middle" fill="#6d28d9" fontSize="6" fontWeight="bold">Flatten</text>
        <text x="420" y="95" textAnchor="middle" fill="#8b5cf6" fontSize="6">→1D</text>
        <line x1="387" y1="85" x2="398" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Dense */}
        <rect x="455" y="55" width="55" height="60" rx="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
        <text x="482" y="75" textAnchor="middle" fill="#9d174d" fontSize="7" fontWeight="bold">Dense</text>
        <text x="482" y="90" textAnchor="middle" fill="#db2777" fontSize="6">256+ReLU</text>
        <text x="482" y="103" textAnchor="middle" fill="#db2777" fontSize="6">+Dropout</text>
        <line x1="442" y1="85" x2="453" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Output */}
        <rect x="525" y="60" width="55" height="50" rx="5" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="552" y="80" textAnchor="middle" fill="#991b1b" fontSize="7" fontWeight="bold">Dense</text>
        <text x="552" y="93" textAnchor="middle" fill="#ef4444" fontSize="6">10+Softmax</text>
        <line x1="512" y1="85" x2="523" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Output classes */}
        <text x="600" y="78" fill="#059669" fontSize="8">🐱 Cat: 0.92</text>
        <text x="600" y="92" fill="#6b7280" fontSize="8">🐶 Dog: 0.05</text>
        <text x="600" y="106" fill="#6b7280" fontSize="8">🐦 Bird: 0.03</text>
        <line x1="582" y1="85" x2="595" y2="85" stroke="#94a3b8" strokeWidth="1.5"/>

        {/* Feature extraction vs classification labels */}
        <rect x="100" y="150" width="285" height="20" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
        <text x="242" y="164" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">← Feature Extraction (Conv + Pool) →</text>

        <rect x="455" y="150" width="125" height="20" rx="8" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1"/>
        <text x="517" y="164" textAnchor="middle" fill="#9d174d" fontSize="8" fontWeight="bold">← Classification →</text>

        {/* Convolution operation detail */}
        <rect x="100" y="180" width="580" height="32" rx="8" fill="#1e293b"/>
        <text x="390" y="195" textAnchor="middle" fill="#93c5fd" fontSize="8">Conv: slide filter over image → dot product → feature map</text>
        <text x="390" y="207" textAnchor="middle" fill="#86efac" fontSize="8">Pooling: downsample (2×2 → take max) → reduce spatial size → prevent overfitting</text>
      </svg>
    </DWrapper>
  )
}

export function LSTMCellDiagram() {
  return (
    <DWrapper title="LSTM Cell — Gate Mechanism Detail" bg="from-indigo-50 to-blue-50">
      <svg viewBox="0 0 620 300" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Cell boundary */}
        <rect x="100" y="30" width="400" height="200" rx="16" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8"/>
        <text x="300" y="22" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">LSTM Cell</text>

        {/* Cell state line (top highway) */}
        <line x1="50" y1="60" x2="560" y2="60" stroke="#059669" strokeWidth="3"/>
        <text x="300" y="50" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold">Cell State (cₜ) — "Highway" of memory</text>

        {/* Forget gate */}
        <circle cx="180" cy="130" r="22" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="180" y="134" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">σ</text>
        <text x="180" y="165" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Forget</text>
        <text x="180" y="177" textAnchor="middle" fill="#ef4444" fontSize="7">Gate (fₜ)</text>
        {/* Forget → cell state */}
        <line x1="180" y1="108" x2="180" y2="65" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="195" y="80" fill="#ef4444" fontSize="8">×</text>
        <circle cx="180" cy="60" r="8" fill="white" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="180" y="64" textAnchor="middle" fill="#ef4444" fontSize="10">×</text>

        {/* Input gate */}
        <circle cx="280" cy="130" r="22" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="280" y="134" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">σ</text>
        <text x="280" y="165" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Input</text>
        <text x="280" y="177" textAnchor="middle" fill="#22c55e" fontSize="7">Gate (iₜ)</text>

        {/* Candidate */}
        <circle cx="330" cy="130" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="330" y="134" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">tanh</text>
        <text x="330" y="165" textAnchor="middle" fill="#f59e0b" fontSize="7">Candidate (c̃ₜ)</text>

        {/* Input × candidate → cell state */}
        <circle cx="310" cy="60" r="8" fill="white" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="310" y="64" textAnchor="middle" fill="#22c55e" fontSize="10">+</text>
        <line x1="300" y1="108" x2="310" y2="68" stroke="#22c55e" strokeWidth="1.5"/>

        {/* Output gate */}
        <circle cx="420" cy="130" r="22" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="420" y="134" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">σ</text>
        <text x="420" y="165" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">Output</text>
        <text x="420" y="177" textAnchor="middle" fill="#3b82f6" fontSize="7">Gate (oₜ)</text>

        {/* tanh on cell state → multiply with output gate */}
        <circle cx="450" cy="60" r="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="450" y="64" textAnchor="middle" fill="#92400e" fontSize="8">tanh</text>
        <line x1="450" y1="72" x2="450" y2="100" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="442" y1="130" x2="450" y2="105" stroke="#3b82f6" strokeWidth="1.5"/>

        {/* Inputs */}
        <rect x="10" y="115" width="70" height="30" rx="8" fill="#8b5cf6"/>
        <text x="45" y="134" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">hₜ₋₁, xₜ</text>
        <line x1="82" y1="130" x2="158" y2="130" stroke="#8b5cf6" strokeWidth="1.5"/>

        {/* Output */}
        <rect x="520" y="85" width="70" height="30" rx="8" fill="#059669"/>
        <text x="555" y="104" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">hₜ</text>
        <line x1="462" y1="100" x2="518" y2="100" stroke="#059669" strokeWidth="1.5"/>

        {/* Gate descriptions */}
        <rect x="30" y="245" width="560" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="130" y="262" textAnchor="middle" fill="#ef4444" fontSize="8">🚪 Forget: info lama yg dihapus</text>
        <text x="310" y="262" textAnchor="middle" fill="#22c55e" fontSize="8">📥 Input: info baru yg disimpan</text>
        <text x="480" y="262" textAnchor="middle" fill="#3b82f6" fontSize="8">📤 Output: info yg dikeluarkan</text>
        <text x="310" y="282" textAnchor="middle" fill="#6b7280" fontSize="8">σ = sigmoid (0-1 filter) | tanh = candidate values (-1 to 1) | × = elementwise multiply</text>
      </svg>
    </DWrapper>
  )
}

export function AttentionMechDiagram() {
  return (
    <DWrapper title="Attention Mechanism — Query, Key, Value" bg="from-purple-50 to-fuchsia-50">
      <svg viewBox="0 0 650 280" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        <text x="325" y="18" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">Scaled Dot-Product Attention</text>

        {/* Input tokens */}
        {['The','cat','sat','on','mat'].map((word,i) => (
          <g key={word}>
            <rect x={60+i*110} y="30" width="80" height="24" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
            <text x={100+i*110} y="46" textAnchor="middle" fill="#5b21b6" fontSize="10" fontWeight="bold">{word}</text>
          </g>
        ))}

        {/* Q, K, V arrows */}
        <text x="100" y="72" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Q</text>
        <text x="210" y="72" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">K</text>
        <text x="320" y="72" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="bold">V</text>

        {/* Attention weight matrix */}
        <text x="160" y="95" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">Attention Weights (softmax(QKᵀ/√dₖ))</text>

        {/* Heatmap */}
        {['The','cat','sat','on','mat'].map((w1,i) => (
          <g key={`row${i}`}>
            <text x="48" y={120+i*28} textAnchor="end" fill="#6b7280" fontSize="8">{w1}</text>
            {[
              [0.1,0.05,0.05,0.05,0.75],
              [0.05,0.7,0.1,0.05,0.1],
              [0.05,0.15,0.6,0.1,0.1],
              [0.05,0.05,0.1,0.7,0.1],
              [0.3,0.05,0.05,0.1,0.5],
            ][i].map((v,j) => {
              const opacity = Math.min(v * 1.3, 1)
              return (
                <g key={`cell${i}${j}`}>
                  <rect x={55+j*55} y={107+i*28} width="50" height="24" rx="4" fill={`rgba(139,92,246,${opacity})`}/>
                  <text x={80+j*55} y={123+i*28} textAnchor="middle" fill={opacity>0.4?'white':'#6b7280'} fontSize="8">{v.toFixed(2)}</text>
                </g>
              )
            })}
          </g>
        ))}
        {/* Column headers */}
        {['The','cat','sat','on','mat'].map((w,j) => (
          <text key={`ch${j}`} x={80+j*55} y={103} textAnchor="middle" fill="#6b7280" fontSize="7">{w}</text>
        ))}

        {/* Right side - formula */}
        <rect x="350" y="105" width="280" height="160" rx="12" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1"/>
        <text x="490" y="125" textAnchor="middle" fill="#5b21b6" fontSize="11" fontWeight="bold">Cara Kerja</text>

        <text x="370" y="148" fill="#ef4444" fontSize="9" fontWeight="bold">1.</text>
        <text x="385" y="148" fill="#374151" fontSize="9">Q·Kᵀ → similarity scores</text>

        <text x="370" y="170" fill="#3b82f6" fontSize="9" fontWeight="bold">2.</text>
        <text x="385" y="170" fill="#374151" fontSize="9">÷ √dₖ → scale (prevent large values)</text>

        <text x="370" y="192" fill="#059669" fontSize="9" fontWeight="bold">3.</text>
        <text x="385" y="192" fill="#374151" fontSize="9">Softmax → probability distribution</text>

        <text x="370" y="214" fill="#f59e0b" fontSize="9" fontWeight="bold">4.</text>
        <text x="385" y="214" fill="#374151" fontSize="9">× V → weighted sum of values</text>

        <rect x="370" y="228" width="240" height="25" rx="6" fill="#1e293b"/>
        <text x="490" y="245" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="monospace">Attn(Q,K,V) = softmax(QKᵀ/√dₖ)V</text>

        {/* Bottom note */}
        <rect x="50" y="270" width="550" height="8" rx="4"/>
        <text x="325" y="276" textAnchor="middle" fill="#6b7280" fontSize="6">Multi-Head: h heads belajar aspek berbeda (syntax, semantics, position) → concat → linear projection</text>
      </svg>
    </DWrapper>
  )
}

export function TransformerArchDiagram() {
  return (
    <DWrapper title="Transformer Architecture — Encoder-Decoder" bg="from-fuchsia-50 to-pink-50">
      <svg viewBox="0 0 580 380" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
        {/* Encoder */}
        <rect x="30" y="40" width="220" height="280" rx="16" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
        <text x="140" y="30" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="bold">Encoder (×N)</text>

        {/* Encoder layers */}
        {[
          { y: 55, label: 'Input Embedding', sub: '+ Positional Encoding', color: '#8b5cf6', bg: '#ede9fe' },
          { y: 110, label: 'Multi-Head', sub: 'Self-Attention', color: '#f59e0b', bg: '#fef3c7' },
          { y: 160, label: 'Add & Norm', sub: 'Residual Connection', color: '#6b7280', bg: '#f3f4f6' },
          { y: 200, label: 'Feed-Forward', sub: 'Network (FFN)', color: '#059669', bg: '#dcfce7' },
          { y: 250, label: 'Add & Norm', sub: 'Residual Connection', color: '#6b7280', bg: '#f3f4f6' },
        ].map((layer) => (
          <g key={`enc${layer.y}`}>
            <rect x="50" y={layer.y} width="180" height="38" rx="8" fill={layer.bg} stroke={layer.color} strokeWidth="1.5"/>
            <text x="140" y={layer.y+17} textAnchor="middle" fill={layer.color} fontSize="9" fontWeight="bold">{layer.label}</text>
            <text x="140" y={layer.y+30} textAnchor="middle" fill="#9ca3af" fontSize="7">{layer.sub}</text>
          </g>
        ))}

        {/* Nx bracket */}
        <rect x="235" y="105" width="8" height="190" rx="4" fill="#93c5fd"/>
        <text x="248" y="200" fill="#3b82f6" fontSize="9" fontWeight="bold">×N</text>

        {/* Decoder */}
        <rect x="310" y="40" width="240" height="300" rx="16" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/>
        <text x="430" y="30" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="bold">Decoder (×N)</text>

        {[
          { y: 55, label: 'Output Embedding', sub: '+ Positional Encoding', color: '#8b5cf6', bg: '#ede9fe' },
          { y: 110, label: 'Masked Multi-Head', sub: 'Self-Attention', color: '#ef4444', bg: '#fee2e2' },
          { y: 155, label: 'Add & Norm', sub: '', color: '#6b7280', bg: '#f3f4f6' },
          { y: 190, label: 'Cross-Attention', sub: 'Q=decoder, K,V=encoder', color: '#f59e0b', bg: '#fef3c7' },
          { y: 235, label: 'Add & Norm', sub: '', color: '#6b7280', bg: '#f3f4f6' },
          { y: 265, label: 'Feed-Forward', sub: 'Network', color: '#059669', bg: '#dcfce7' },
          { y: 305, label: 'Linear + Softmax', sub: '→ Output Probabilities', color: '#dc2626', bg: '#fef2f2' },
        ].map((layer) => (
          <g key={`dec${layer.y}`}>
            <rect x="325" y={layer.y} width="210" height={layer.sub?'38':'28'} rx="8" fill={layer.bg} stroke={layer.color} strokeWidth="1.5"/>
            <text x="430" y={layer.y+15} textAnchor="middle" fill={layer.color} fontSize="9" fontWeight="bold">{layer.label}</text>
            {layer.sub && <text x="430" y={layer.y+28} textAnchor="middle" fill="#9ca3af" fontSize="7">{layer.sub}</text>}
          </g>
        ))}

        {/* Cross attention arrow from encoder */}
        <path d="M 248 200 L 290 200 L 290 209 L 323 209" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowAmber)" strokeDasharray="5"/>
        <text x="280" y="195" fill="#f59e0b" fontSize="7">K, V</text>

        <defs>
          <marker id="arrowAmber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
        </defs>

        {/* Bottom models */}
        <rect x="30" y="355" width="520" height="20" rx="6" fill="#1e293b"/>
        <text x="290" y="369" textAnchor="middle" fill="#a5b4fc" fontSize="8">BERT = Encoder only | GPT = Decoder only | T5/BART = Encoder-Decoder | dₘₒ꜁ₑₗ=512/768, h=8/12, N=6/12</text>
      </svg>
    </DWrapper>
  )
}

export function GANDiagram() {
  return (
    <DWrapper title="GAN — Generator vs Discriminator" bg="from-emerald-50 to-teal-50">
      <svg viewBox="0 0 620 220" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Noise input */}
        <rect x="10" y="70" width="70" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"/>
        <text x="45" y="88" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">Noise z</text>
        <text x="45" y="100" textAnchor="middle" fill="#6366f1" fontSize="7">~ N(0,1)</text>

        {/* Generator */}
        <rect x="110" y="50" width="120" height="80" rx="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
        <text x="170" y="75" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">Generator</text>
        <text x="170" y="90" textAnchor="middle" fill="#16a34a" fontSize="8">G(z)</text>
        <text x="170" y="105" textAnchor="middle" fill="#22c55e" fontSize="7">"Pemalsu"</text>
        <text x="170" y="120" textAnchor="middle" fill="#22c55e" fontSize="7">buat gambar palsu</text>
        <line x1="82" y1="90" x2="108" y2="90" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrowInd)"/>

        {/* Fake image */}
        <rect x="260" y="55" width="60" height="50" rx="5" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="290" y="78" textAnchor="middle" fontSize="16">🎨</text>
        <text x="290" y="95" textAnchor="middle" fill="#166534" fontSize="7">Fake</text>
        <line x1="232" y1="90" x2="258" y2="82" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowGr)"/>

        {/* Real images */}
        <rect x="260" y="120" width="60" height="50" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="290" y="143" textAnchor="middle" fontSize="16">📸</text>
        <text x="290" y="160" textAnchor="middle" fill="#1e40af" fontSize="7">Real</text>

        {/* Discriminator */}
        <rect x="360" y="60" width="120" height="80" rx="12" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
        <text x="420" y="85" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Discriminator</text>
        <text x="420" y="100" textAnchor="middle" fill="#dc2626" fontSize="8">D(x)</text>
        <text x="420" y="115" textAnchor="middle" fill="#ef4444" fontSize="7">"Detektif"</text>
        <text x="420" y="130" textAnchor="middle" fill="#ef4444" fontSize="7">real vs fake?</text>
        <line x1="322" y1="80" x2="358" y2="90" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="322" y1="145" x2="358" y2="110" stroke="#3b82f6" strokeWidth="1.5"/>

        {/* Output */}
        <rect x="510" y="75" width="90" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="555" y="95" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Real? Fake?</text>
        <text x="555" y="112" textAnchor="middle" fill="#f59e0b" fontSize="8">P(real) = 0.3</text>
        <line x1="482" y1="100" x2="508" y2="100" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowAm2)"/>

        {/* Feedback loops */}
        <path d="M 555 127 L 555 190 L 170 190 L 170 135" stroke="#059669" strokeWidth="2" strokeDasharray="6" markerEnd="url(#arrowGr)"/>
        <text x="360" y="185" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="bold">G belajar: buat D lebih sering salah</text>

        <path d="M 420 142 L 420 210 L 555 210 L 555 127" stroke="#ef4444" strokeWidth="2" strokeDasharray="6"/>
        <text x="490" y="207" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">D belajar: lebih akurat deteksi fake</text>

        {/* Objective */}
        <rect x="100" y="12" width="420" height="22" rx="6" fill="#1e293b"/>
        <text x="310" y="27" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">min_G max_D  E[log D(x)] + E[log(1 - D(G(z)))]  → Nash Equilibrium</text>

        <defs>
          <marker id="arrowGr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e"/>
          </marker>
          <marker id="arrowInd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1"/>
          </marker>
          <marker id="arrowAm2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 3b: Advanced Deep Learning
// ═══════════════════════════════════════════════════════════════

export function DiffusionModelDiagram() {
  return (
    <DWrapper title="Diffusion Models — Forward & Reverse Process" bg="from-cyan-50 to-sky-50">
      <svg viewBox="0 0 680 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        <text x="340" y="18" textAnchor="middle" fill="#0891b2" fontSize="11" fontWeight="bold">Denoising Diffusion Probabilistic Model (DDPM)</text>

        {/* Forward process (top) */}
        {[
          { x: 20, label: 'x₀', sub: 'Clean', emoji: '🖼️', noise: 0 },
          { x: 155, label: 'x₁', sub: '', emoji: '', noise: 0.2 },
          { x: 290, label: 'xₜ', sub: '', emoji: '', noise: 0.5 },
          { x: 425, label: 'x_{T-1}', sub: '', emoji: '', noise: 0.8 },
          { x: 560, label: 'x_T', sub: 'Pure Noise', emoji: '🌫️', noise: 1 },
        ].map((step, i) => (
          <g key={`fwd${i}`}>
            <rect x={step.x} y="35" width="95" height="55" rx="10" fill={`rgba(${Math.round(step.noise*200)},${Math.round(step.noise*200)},${Math.round(step.noise*200)},0.2)`} stroke="#0891b2" strokeWidth="1.5"/>
            {/* Noise fill level */}
            <rect x={step.x+2} y={35+55*(1-step.noise)} width="91" height={55*step.noise-2} rx="8" fill={`rgba(156,163,175,${step.noise*0.5})`}/>
            <text x={step.x+47} y="58" textAnchor="middle" fill="#0c4a6e" fontSize="10" fontWeight="bold">{step.label}</text>
            {step.emoji && <text x={step.x+47} y="78" textAnchor="middle" fontSize="14">{step.emoji}</text>}
            {step.sub && <text x={step.x+47} y="100" textAnchor="middle" fill="#6b7280" fontSize="7">{step.sub}</text>}
            {i < 4 && (
              <g>
                <line x1={step.x+98} y1="55" x2={step.x+152} y2="55" stroke="#0891b2" strokeWidth="1.5" markerEnd="url(#arrowCy)"/>
                <text x={step.x+125} y="50" textAnchor="middle" fill="#0891b2" fontSize="7">+noise</text>
              </g>
            )}
          </g>
        ))}

        {/* Forward label */}
        <text x="340" y="110" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="bold">→ Forward Process q(xₜ|xₜ₋₁): gradually add Gaussian noise →</text>

        {/* Reverse process (bottom) */}
        <text x="340" y="135" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="bold">← Reverse Process pθ(xₜ₋₁|xₜ): neural network learns to denoise ←</text>

        {[0,1,2,3].map(i => (
          <g key={`rev${i}`}>
            <line x1={560-i*135+2} y1="145" x2={560-i*135-55} y2="145" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrowPu)"/>
            <rect x={560-i*135-90} y="148" width="50" height="22" rx="6" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1"/>
            <text x={560-i*135-65} y="163" textAnchor="middle" fill="#6d28d9" fontSize="7" fontWeight="bold">U-Net</text>
          </g>
        ))}

        {/* Bottom explanation */}
        <rect x="40" y="178" width="600" height="18" rx="6" fill="#1e293b"/>
        <text x="340" y="191" textAnchor="middle" fill="#67e8f9" fontSize="8">Training: predict noise εθ(xₜ,t) | Loss: ||ε - εθ(xₜ,t)||² | Sampling: iteratively denoise from x_T ~ N(0,I)</text>

        <defs>
          <marker id="arrowCy" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0891b2"/>
          </marker>
          <marker id="arrowPu" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

export function GNNDiagram() {
  return (
    <DWrapper title="Graph Neural Network — Message Passing" bg="from-rose-50 to-pink-50">
      <svg viewBox="0 0 620 230" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        <text x="155" y="18" textAnchor="middle" fill="#e11d48" fontSize="11" fontWeight="bold">Input Graph</text>

        {/* Graph structure */}
        {/* Edges */}
        <line x1="80" y1="80" x2="160" y2="50" stroke="#fda4af" strokeWidth="2"/>
        <line x1="80" y1="80" x2="80" y2="150" stroke="#fda4af" strokeWidth="2"/>
        <line x1="160" y1="50" x2="240" y2="80" stroke="#fda4af" strokeWidth="2"/>
        <line x1="240" y1="80" x2="240" y2="150" stroke="#fda4af" strokeWidth="2"/>
        <line x1="80" y1="150" x2="160" y2="180" stroke="#fda4af" strokeWidth="2"/>
        <line x1="240" y1="150" x2="160" y2="180" stroke="#fda4af" strokeWidth="2"/>
        <line x1="160" y1="50" x2="160" y2="180" stroke="#fda4af" strokeWidth="1" strokeDasharray="4"/>

        {/* Nodes */}
        {[
          { cx: 80, cy: 80, label: 'A', color: '#3b82f6' },
          { cx: 160, cy: 50, label: 'B', color: '#22c55e' },
          { cx: 240, cy: 80, label: 'C', color: '#f59e0b' },
          { cx: 80, cy: 150, label: 'D', color: '#8b5cf6' },
          { cx: 240, cy: 150, label: 'E', color: '#ef4444' },
          { cx: 160, cy: 180, label: 'F', color: '#06b6d4' },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.cx} cy={node.cy} r="18" fill={node.color} stroke="white" strokeWidth="2"/>
            <text x={node.cx} y={node.cy+4} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{node.label}</text>
          </g>
        ))}

        {/* Arrow */}
        <text x="310" y="115" fill="#e11d48" fontSize="22" fontWeight="bold">→</text>
        <text x="310" y="135" textAnchor="middle" fill="#9ca3af" fontSize="7">message</text>
        <text x="310" y="145" textAnchor="middle" fill="#9ca3af" fontSize="7">passing</text>

        {/* Message passing detail */}
        <text x="480" y="18" textAnchor="middle" fill="#e11d48" fontSize="11" fontWeight="bold">Update Node B (1 layer)</text>

        {/* Central node B */}
        <circle cx="480" cy="110" r="24" fill="#22c55e" stroke="#16a34a" strokeWidth="3"/>
        <text x="480" y="114" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">B</text>

        {/* Neighbor messages */}
        {[
          { cx: 390, cy: 60, label: 'A', color: '#3b82f6' },
          { cx: 480, cy: 40, label: 'C', color: '#f59e0b' },
          { cx: 570, cy: 60, label: 'F', color: '#06b6d4' },
        ].map((n) => (
          <g key={`msg${n.label}`}>
            <circle cx={n.cx} cy={n.cy} r="14" fill={n.color} opacity="0.7"/>
            <text x={n.cx} y={n.cy+4} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{n.label}</text>
            <line x1={n.cx+(n.cx<480?12:n.cx>480?-12:0)} y1={n.cy+10} x2={480+(n.cx<480?-20:n.cx>480?20:0)} y2={n.cy<80?95:95} stroke={n.color} strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrowPink)"/>
          </g>
        ))}
        <text x="480" y="155" textAnchor="middle" fill="#374151" fontSize="8">h_B' = σ(W·AGG(h_A, h_C, h_F) + b)</text>

        {/* GNN variants */}
        <rect x="340" y="170" width="270" height="52" rx="10" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1"/>
        <text x="475" y="187" textAnchor="middle" fill="#9f1239" fontSize="9" fontWeight="bold">Variants</text>
        <text x="475" y="202" textAnchor="middle" fill="#6b7280" fontSize="8">GCN: mean aggregation | GAT: attention-weighted</text>
        <text x="475" y="215" textAnchor="middle" fill="#6b7280" fontSize="8">GraphSAGE: sample neighbors | GIN: sum (most expressive)</text>

        <defs>
          <marker id="arrowPink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#e11d48"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 4: NLP
// ═══════════════════════════════════════════════════════════════

export function WordEmbeddingDiagram() {
  return (
    <DWrapper title="Word Embeddings — Words as Vectors in Space" bg="from-indigo-50 to-blue-50">
      <svg viewBox="0 0 640 240" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* 2D projection of embedding space */}
        <text x="180" y="18" textAnchor="middle" fill="#4338ca" fontSize="11" fontWeight="bold">Word Vector Space (2D projection)</text>
        <rect x="20" y="25" width="320" height="195" rx="8" fill="#eef2ff" stroke="#c7d2fe" strokeWidth="1"/>

        {/* Word clusters */}
        {/* Royalty cluster */}
        {[
          { x: 80, y: 60, word: 'king', color: '#3b82f6' },
          { x: 120, y: 80, word: 'queen', color: '#ec4899' },
          { x: 60, y: 90, word: 'prince', color: '#3b82f6' },
          { x: 100, y: 105, word: 'princess', color: '#ec4899' },
        ].map((w) => (
          <g key={w.word}>
            <circle cx={w.x} cy={w.y} r="4" fill={w.color}/>
            <text x={w.x+8} y={w.y+4} fill={w.color} fontSize="8" fontWeight="bold">{w.word}</text>
          </g>
        ))}

        {/* Animal cluster */}
        {[
          { x: 220, y: 150, word: 'cat', color: '#f59e0b' },
          { x: 250, y: 170, word: 'dog', color: '#f59e0b' },
          { x: 200, y: 175, word: 'puppy', color: '#f59e0b' },
          { x: 270, y: 155, word: 'kitten', color: '#f59e0b' },
        ].map((w) => (
          <g key={w.word}>
            <circle cx={w.x} cy={w.y} r="4" fill={w.color}/>
            <text x={w.x+8} y={w.y+4} fill={w.color} fontSize="8" fontWeight="bold">{w.word}</text>
          </g>
        ))}

        {/* Country cluster */}
        {[
          { x: 260, y: 55, word: 'Paris', color: '#059669' },
          { x: 280, y: 75, word: 'France', color: '#059669' },
          { x: 290, y: 50, word: 'Berlin', color: '#059669' },
          { x: 310, y: 70, word: 'Germany', color: '#059669' },
        ].map((w) => (
          <g key={w.word}>
            <circle cx={w.x} cy={w.y} r="4" fill={w.color}/>
            <text x={w.x+8} y={w.y+4} fill={w.color} fontSize="8" fontWeight="bold">{w.word}</text>
          </g>
        ))}

        {/* Analogy arrow: king - man + woman = queen */}
        <line x1="80" y1="60" x2="120" y2="80" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrowAnalogy)"/>

        {/* Right side - explanation */}
        <rect x="360" y="25" width="270" height="195" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
        <text x="495" y="48" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Word2Vec: Analogy</text>

        <rect x="380" y="55" width="230" height="30" rx="6" fill="#1e293b"/>
        <text x="495" y="74" textAnchor="middle" fill="#86efac" fontSize="9" fontFamily="monospace">king - man + woman ≈ queen</text>

        <text x="495" y="105" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">Embedding Methods</text>

        {[
          { name: 'Word2Vec', desc: 'CBOW / Skip-gram', y: 120 },
          { name: 'GloVe', desc: 'Global co-occurrence matrix', y: 140 },
          { name: 'FastText', desc: 'Sub-word ngrams', y: 160 },
          { name: 'BERT', desc: 'Contextual embeddings', y: 180 },
        ].map((m) => (
          <g key={m.name}>
            <text x="410" y={m.y} fill="#4338ca" fontSize="9" fontWeight="bold">{m.name}</text>
            <text x="470" y={m.y} fill="#6b7280" fontSize="8">— {m.desc}</text>
          </g>
        ))}

        <rect x="380" y="195" width="230" height="18" rx="4" fill="#eef2ff"/>
        <text x="495" y="208" textAnchor="middle" fill="#4338ca" fontSize="7">Embedding dim: 100-300 (Word2Vec) | 768 (BERT) | 1536 (GPT-4)</text>

        <defs>
          <marker id="arrowAnalogy" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

export function RAGDiagram() {
  return (
    <DWrapper title="RAG — Retrieval-Augmented Generation Pipeline" bg="from-amber-50 to-orange-50">
      <svg viewBox="0 0 700 220" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* User query */}
        <rect x="10" y="30" width="90" height="40" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
        <text x="55" y="48" textAnchor="middle" fill="#1e40af" fontSize="9" fontWeight="bold">User</text>
        <text x="55" y="62" textAnchor="middle" fill="#3b82f6" fontSize="7">Query</text>

        {/* Embed */}
        <rect x="120" y="30" width="80" height="40" rx="8" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="160" y="48" textAnchor="middle" fill="#6d28d9" fontSize="8" fontWeight="bold">Embed</text>
        <text x="160" y="60" textAnchor="middle" fill="#8b5cf6" fontSize="7">→ vector</text>
        <line x1="102" y1="50" x2="118" y2="50" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>

        {/* Vector DB */}
        <rect x="220" y="15" width="100" height="70" rx="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
        <text x="270" y="38" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Vector DB</text>
        <text x="270" y="52" textAnchor="middle" fill="#f59e0b" fontSize="7">Pinecone</text>
        <text x="270" y="64" textAnchor="middle" fill="#f59e0b" fontSize="7">FAISS/Chroma</text>
        <text x="270" y="76" textAnchor="middle" fill="#b45309" fontSize="7">similarity search</text>
        <line x1="202" y1="50" x2="218" y2="50" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>

        {/* Retrieved docs */}
        <rect x="340" y="20" width="100" height="60" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="390" y="40" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="bold">Top-K Docs</text>
        {[0,1,2].map(i => (
          <rect key={`doc${i}`} x={350+i*28} y="48" width="24" height="22" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
        ))}
        <text x="390" y="62" textAnchor="middle" fill="#22c55e" fontSize="6">📄 📄 📄</text>
        <line x1="322" y1="50" x2="338" y2="50" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>

        {/* Prompt construction */}
        <rect x="460" y="10" width="110" height="80" rx="10" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
        <text x="515" y="30" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">Prompt</text>
        <text x="515" y="45" textAnchor="middle" fill="#6366f1" fontSize="7">Context: [docs]</text>
        <text x="515" y="57" textAnchor="middle" fill="#6366f1" fontSize="7">Query: [user Q]</text>
        <text x="515" y="69" textAnchor="middle" fill="#6366f1" fontSize="7">Instructions</text>
        <text x="515" y="81" textAnchor="middle" fill="#4338ca" fontSize="7">"Answer based on"</text>
        <line x1="442" y1="50" x2="458" y2="50" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>

        {/* LLM */}
        <rect x="590" y="20" width="90" height="60" rx="12" fill="#059669"/>
        <text x="635" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">LLM</text>
        <text x="635" y="60" textAnchor="middle" fill="#bbf7d0" fontSize="7">GPT/Claude</text>
        <text x="635" y="72" textAnchor="middle" fill="#bbf7d0" fontSize="7">Generate answer</text>
        <line x1="572" y1="50" x2="588" y2="50" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>

        {/* Document ingestion pipeline (bottom) */}
        <text x="350" y="115" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">Document Ingestion Pipeline (offline)</text>

        {[
          { x: 30, label: 'Documents', sub: 'PDF, Web, DB', color: '#6b7280' },
          { x: 160, label: 'Chunking', sub: '512 tokens', color: '#f59e0b' },
          { x: 290, label: 'Embedding', sub: 'ada-002/e5', color: '#8b5cf6' },
          { x: 420, label: 'Index', sub: '→ Vector DB', color: '#059669' },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x} y="125" width="110" height="38" rx="8" fill="#f8fafc" stroke={step.color} strokeWidth="1.5"/>
            <text x={step.x+55} y="142" textAnchor="middle" fill={step.color} fontSize="8" fontWeight="bold">{step.label}</text>
            <text x={step.x+55} y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">{step.sub}</text>
            {i < 3 && <line x1={step.x+113} y1="144" x2={step.x+157} y2="144" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#arrowG2)"/>}
          </g>
        ))}

        {/* Benefits */}
        <rect x="30" y="175" width="640" height="38" rx="10" fill="#1e293b"/>
        <text x="350" y="192" textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="bold">Keuntungan RAG vs Fine-tuning</text>
        <text x="350" y="207" textAnchor="middle" fill="#86efac" fontSize="8">✅ Up-to-date knowledge | ✅ Cited sources | ✅ No retraining | ✅ Domain-specific | ✅ Reduce hallucination</text>

        <defs>
          <marker id="arrowG2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

// ═══════════════════════════════════════════════════════════════
// CHAPTER 5: Data Science Workflow
// ═══════════════════════════════════════════════════════════════

export function FeatureEngineeringDiagram() {
  return (
    <DWrapper title="Feature Engineering — Tipe Transformasi" bg="from-teal-50 to-green-50">
      <svg viewBox="0 0 640 250" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {/* Center: Raw Features */}
        <circle cx="320" cy="50" r="35" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
        <text x="320" y="48" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Raw</text>
        <text x="320" y="60" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Features</text>

        {/* Branches */}
        {[
          { x: 40, y: 120, title: 'Numeric', items: ['StandardScaler','MinMaxScaler','Log Transform','Binning'], color: '#3b82f6', bg: '#dbeafe' },
          { x: 180, y: 120, title: 'Categorical', items: ['OneHotEncoding','LabelEncoding','TargetEncoding','WoE'], color: '#8b5cf6', bg: '#ede9fe' },
          { x: 340, y: 120, title: 'Text', items: ['TF-IDF','Word2Vec','BERT embed','Ngrams'], color: '#059669', bg: '#dcfce7' },
          { x: 490, y: 120, title: 'DateTime', items: ['Hour/Day/Month','Is_Weekend','Lag features','Rolling stats'], color: '#ef4444', bg: '#fee2e2' },
        ].map((branch) => (
          <g key={branch.title}>
            <line x1="320" y1="85" x2={branch.x+60} y2="118" stroke={branch.color} strokeWidth="1.5"/>
            <rect x={branch.x} y={branch.y} width="130" height="100" rx="10" fill={branch.bg} stroke={branch.color} strokeWidth="1.5"/>
            <text x={branch.x+65} y={branch.y+18} textAnchor="middle" fill={branch.color} fontSize="10" fontWeight="bold">{branch.title}</text>
            {branch.items.map((item, i) => (
              <text key={item} x={branch.x+65} y={branch.y+35+i*16} textAnchor="middle" fill="#374151" fontSize="8">• {item}</text>
            ))}
          </g>
        ))}

        {/* Bottom tip */}
        <rect x="80" y="232" width="480" height="16" rx="4" fill="#059669"/>
        <text x="320" y="244" textAnchor="middle" fill="white" fontSize="8">Golden Rule: Feature Engineering sering lebih penting dari model selection!</text>
      </svg>
    </DWrapper>
  )
}

export function MLOpsPipelineDiagram() {
  return (
    <DWrapper title="MLOps — End-to-End ML Production Pipeline" bg="from-slate-50 to-gray-100">
      <svg viewBox="0 0 700 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        {[
          { x: 5, label: 'Data', sub: 'Collection', icon: '📊', color: '#3b82f6' },
          { x: 105, label: 'Feature', sub: 'Store', icon: '⚙️', color: '#8b5cf6' },
          { x: 205, label: 'Training', sub: 'Pipeline', icon: '🏋️', color: '#059669' },
          { x: 305, label: 'Experiment', sub: 'Tracking', icon: '📝', color: '#f59e0b' },
          { x: 405, label: 'Model', sub: 'Registry', icon: '📦', color: '#ef4444' },
          { x: 505, label: 'Deploy', sub: 'Serving', icon: '🚀', color: '#0891b2' },
          { x: 605, label: 'Monitor', sub: 'Drift', icon: '📡', color: '#e11d48' },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x} y="30" width="90" height="70" rx="12" fill="white" stroke={step.color} strokeWidth="2"/>
            <text x={step.x+45} y="52" textAnchor="middle" fontSize="16">{step.icon}</text>
            <text x={step.x+45} y="72" textAnchor="middle" fill={step.color} fontSize="9" fontWeight="bold">{step.label}</text>
            <text x={step.x+45} y="85" textAnchor="middle" fill="#9ca3af" fontSize="7">{step.sub}</text>
            {i < 6 && <line x1={step.x+93} y1="65" x2={step.x+102} y2="65" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrowMLOps)"/>}
          </g>
        ))}

        {/* Feedback loop */}
        <path d="M 650 102 L 650 130 L 50 130 L 50 102" stroke="#e11d48" strokeWidth="2" strokeDasharray="6" markerEnd="url(#arrowMLOps2)"/>
        <text x="350" y="145" textAnchor="middle" fill="#e11d48" fontSize="9" fontWeight="bold">← Retrain if drift detected / performance degraded →</text>

        {/* Tools row */}
        <rect x="30" y="160" width="640" height="32" rx="8" fill="#1e293b"/>
        <text x="350" y="175" textAnchor="middle" fill="#f8fafc" fontSize="8" fontWeight="bold">Tools:</text>
        <text x="350" y="187" textAnchor="middle" fill="#86efac" fontSize="7">DVC | Feast | Kubeflow | MLflow | BentoML/Seldon | Evidently/WhyLogs | GitHub Actions CI/CD</text>

        <defs>
          <marker id="arrowMLOps" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#d1d5db"/>
          </marker>
          <marker id="arrowMLOps2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#e11d48"/>
          </marker>
        </defs>
      </svg>
    </DWrapper>
  )
}

export function SHAPDiagram() {
  return (
    <DWrapper title="SHAP — Model Interpretability Visual" bg="from-yellow-50 to-orange-50">
      <svg viewBox="0 0 620 200" className="w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
        <text x="310" y="18" textAnchor="middle" fill="#92400e" fontSize="11" fontWeight="bold">SHAP Waterfall — Mengapa Model Predict "High Risk"?</text>

        {/* Base value */}
        <rect x="30" y="35" width="100" height="25" rx="6" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1"/>
        <text x="80" y="52" textAnchor="middle" fill="#6b7280" fontSize="9">Base: 0.35</text>

        {/* SHAP bars */}
        {[
          { label: 'Income = Low', value: '+0.18', width: 90, color: '#ef4444', dir: 'pos' },
          { label: 'Age = 22', value: '+0.12', width: 60, color: '#ef4444', dir: 'pos' },
          { label: 'History = Good', value: '-0.08', width: 40, color: '#3b82f6', dir: 'neg' },
          { label: 'Debt = High', value: '+0.15', width: 75, color: '#ef4444', dir: 'pos' },
          { label: 'Employment = 5yr', value: '-0.05', width: 25, color: '#3b82f6', dir: 'neg' },
        ].map((feat, i) => {
          const y = 70 + i * 24
          return (
            <g key={feat.label}>
              <text x="160" y={y+14} textAnchor="end" fill="#374151" fontSize="8">{feat.label}</text>
              <rect x={feat.dir==='pos'?170:170-feat.width} y={y} width={feat.width} height="18" rx="4" fill={feat.color} opacity="0.8"/>
              <text x={feat.dir==='pos'?170+feat.width+5:170-feat.width-5} y={y+13} textAnchor={feat.dir==='pos'?'start':'end'} fill={feat.color} fontSize="8" fontWeight="bold">{feat.value}</text>
            </g>
          )
        })}

        {/* Final prediction */}
        <rect x="30" y="195" width="130" height="25" rx="6" fill="#ef4444"/>
        <text x="95" y="212" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Prediction: 0.67 (High Risk)</text>

        {/* Right side - explanation */}
        <rect x="330" y="35" width="270" height="155" rx="12" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1"/>
        <text x="465" y="55" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">SHAP Interpretasi</text>

        <text x="350" y="78" fill="#ef4444" fontSize="9">🔴 Merah = push prediction NAIK</text>
        <text x="350" y="98" fill="#3b82f6" fontSize="9">🔵 Biru = push prediction TURUN</text>
        <text x="350" y="118" fill="#374151" fontSize="9">📊 Panjang bar = magnitude pengaruh</text>

        <text x="465" y="145" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Biggest Drivers:</text>
        <text x="465" y="162" textAnchor="middle" fill="#374151" fontSize="8">1. Income rendah (+0.18)</text>
        <text x="465" y="177" textAnchor="middle" fill="#374151" fontSize="8">2. Debt tinggi (+0.15)</text>
      </svg>
    </DWrapper>
  )
}
