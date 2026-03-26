// Rich JSX content for each English chapter – dengan visual diagrams dan contoh

import { FormulaCard, ExampleBox, TipBox, StepList, ConceptGrid, RevealBox, AccordionList, MiniQuiz, TabCard, MatchGame, QuizBank } from './mathContent.jsx'
import { englishSectionQuiz } from './englishSectionQuiz'

// ── English-specific visual components ───────────────────────────────────────

export function TenseTimeline() {
  const tenses = [
    { pos: 5, label: 'Past Perfect', sub: 'had + V3', color: '#6d28d9' },
    { pos: 22, label: 'Simple Past', sub: 'V2', color: '#7c3aed' },
    { pos: 38, label: 'Past Cont.', sub: 'was/were+Ving', color: '#8b5cf6' },
    { pos: 55, label: 'Simple\nPresent', sub: 'V1(s/es)', color: '#10b981' },
    { pos: 68, label: 'Present\nPerf.', sub: 'have/has+V3', color: '#059669' },
    { pos: 80, label: 'Simple\nFuture', sub: 'will+V1', color: '#2563eb' },
    { pos: 93, label: 'Future\nPerf.', sub: 'will have+V3', color: '#1d4ed8' },
  ]
  return (
    <div className="my-5 overflow-x-auto">
      <svg viewBox="0 0 420 100" className="w-full min-w-[340px] h-24">
        {/* background regions */}
        <rect x="0" y="0" width="140" height="100" fill="#f5f3ff" rx="4" />
        <rect x="140" y="0" width="70" height="100" fill="#ecfdf5" rx="0" />
        <rect x="210" y="0" width="210" height="100" fill="#eff6ff" rx="4" />
        {/* labels */}
        <text x="70" y="10" textAnchor="middle" fontSize="8" fill="#7c3aed" fontWeight="bold">PAST</text>
        <text x="175" y="10" textAnchor="middle" fontSize="8" fill="#059669" fontWeight="bold">PRESENT</text>
        <text x="315" y="10" textAnchor="middle" fontSize="8" fill="#2563eb" fontWeight="bold">FUTURE</text>
        {/* timeline axis */}
        <line x1="10" y1="55" x2="410" y2="55" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="408,51 418,55 408,59" fill="#94a3b8" />
        <text x="412" y="68" fontSize="7" fill="#94a3b8">Zeit</text>
        {/* NOW marker */}
        <line x1="210" y1="35" x2="210" y2="75" stroke="#10b981" strokeWidth="2" strokeDasharray="3,2" />
        <text x="210" y="32" textAnchor="middle" fontSize="7" fill="#059669" fontWeight="bold">NOW</text>
        {/* tense dots */}
        {tenses.map(({ pos, label, sub, color }) => {
          const x = (pos / 100) * 400 + 10
          const lines = label.split('\n')
          return (
            <g key={label}>
              <circle cx={x} cy="55" r="5" fill={color} />
              {lines.map((l, i) => (
                <text key={i} x={x} y={72 + i * 9} textAnchor="middle" fontSize="6.5" fill={color} fontWeight="bold">{l}</text>
              ))}
              <text x={x} y={pos < 50 ? 45 : 44} textAnchor="middle" fontSize="5.5" fill="#6b7280">{sub}</text>
            </g>
          )
        })}
      </svg>
      <p className="text-xs text-center text-gray-500 mt-1">Garis hijau = sekarang (present moment)</p>
    </div>
  )
}

export function SentenceDiagram({ sentence, parts }) {
  const colors = { S: '#3b82f6', V: '#ef4444', O: '#10b981', C: '#f59e0b', M: '#8b5cf6' }
  const bgColors = { S: 'bg-blue-100', V: 'bg-red-100', O: 'bg-emerald-100', C: 'bg-amber-100', M: 'bg-violet-100' }
  const textColors = { S: 'text-blue-800', V: 'text-red-800', O: 'text-emerald-800', C: 'text-amber-800', M: 'text-violet-800' }
  const labels = { S: 'Subject', V: 'Verb', O: 'Object', C: 'Complement', M: 'Modifier' }

  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {parts.map(({ word, type }, i) => (
          <div key={i} className="text-center">
            <span className={`inline-block px-2.5 py-1.5 rounded-lg text-sm font-semibold ${bgColors[type]} ${textColors[type]}`}>
              {word}
            </span>
            <p className={`text-[9px] mt-0.5 font-bold ${textColors[type]}`}>{type}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(labels).map(([k, v]) => (
          <span key={k} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${bgColors[k]} ${textColors[k]}`}>
            {k} = {v}
          </span>
        ))}
      </div>
    </div>
  )
}

export function WordFamilyTree({ root, forms }) {
  return (
    <div className="my-4 p-4 bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200 rounded-2xl">
      <div className="text-center mb-4">
        <span className="inline-block px-5 py-2 bg-violet-600 text-white font-bold rounded-xl text-sm shadow-md">
          {root}
        </span>
        <p className="text-xs text-violet-600 mt-1">Kata dasar (Root Word)</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {forms.map(({ type, word, meaning }) => (
          <div key={type} className="bg-white rounded-xl p-3 border border-violet-100 text-center shadow-sm">
            <p className="text-[9px] font-bold text-violet-500 uppercase tracking-wider mb-1">{type}</p>
            <p className="font-bold text-gray-900 text-sm">{word}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">{meaning}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ConditionalDiagram() {
  const types = [
    { num: 0, name: 'Type 0', condition: 'If + Simple Present', result: 'Simple Present', use: 'Fakta umum / hukum alam', example: 'If water reaches 100°C, it boils.', color: 'emerald' },
    { num: 1, name: 'Type 1', condition: 'If + Simple Present', result: 'will + V1', use: 'Kemungkinan nyata (masa depan)', example: 'If I study hard, I will pass.', color: 'blue' },
    { num: 2, name: 'Type 2', condition: 'If + Simple Past (were)', result: 'would + V1', use: 'Kondisi tidak nyata (sekarang)', example: 'If I were rich, I would travel.', color: 'violet' },
    { num: 3, name: 'Type 3', condition: 'If + Past Perfect', result: 'would have + V3', use: 'Kondisi tidak nyata (masa lalu)', example: 'If I had studied, I would have passed.', color: 'rose' },
  ]
  const colorMap = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', title: 'text-emerald-900', badge: 'bg-emerald-600', light: 'bg-emerald-100 text-emerald-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-900', badge: 'bg-blue-600', light: 'bg-blue-100 text-blue-700' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', title: 'text-violet-900', badge: 'bg-violet-600', light: 'bg-violet-100 text-violet-700' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', title: 'text-rose-900', badge: 'bg-rose-600', light: 'bg-rose-100 text-rose-700' },
  }
  return (
    <div className="space-y-3 my-4">
      {types.map(({ num, name, condition, result, use, example, color }) => {
        const c = colorMap[color]
        return (
          <div key={num} className={`border rounded-2xl p-4 ${c.bg} ${c.border}`}>
            <div className="flex items-start gap-3">
              <span className={`${c.badge} text-white text-xs font-bold px-2.5 py-1 rounded-xl flex-shrink-0 mt-0.5`}>{name}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm ${c.title} mb-1`}>{use}</p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono my-1">
                  <span className={`px-2 py-0.5 rounded-lg ${c.light}`}>{condition}</span>
                  <span className="text-gray-400">,</span>
                  <span className={`px-2 py-0.5 rounded-lg ${c.light}`}>{result}</span>
                </div>
                <p className="text-xs text-gray-600 italic mt-1.5">"{example}"</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function SkimmingVsScanning() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 my-4">
      {[
        {
          title: 'SKIMMING',
          icon: '🏄',
          desc: 'Membaca cepat untuk gambaran UMUM',
          when: 'Sebelum baca soal — pahami topik & struktur',
          steps: ['Baca judul & sub-judul', 'Baca kalimat pertama tiap paragraf', 'Baca kalimat terakhir teks', 'Tandai kata transisi'],
          color: 'blue',
        },
        {
          title: 'SCANNING',
          icon: '🔍',
          desc: 'Mencari informasi SPESIFIK dengan cepat',
          when: 'Saat soal tanya fakta spesifik (tanggal, nama, angka)',
          steps: ['Ketahui dulu apa yang dicari', 'Gerakkan mata vertikal (bukan baca)', 'Cari kata kunci persis atau sinonimnya', 'Stop saat menemukan target'],
          color: 'violet',
        },
      ].map(({ title, icon, desc, when, steps, color }) => {
        const bg = color === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-violet-50 border-violet-200'
        const titleColor = color === 'blue' ? 'text-blue-900 bg-blue-600' : 'text-violet-900 bg-violet-600'
        const stepColor = color === 'blue' ? 'bg-blue-600' : 'bg-violet-600'
        const noteColor = color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
        return (
          <div key={title} className={`border rounded-2xl p-4 ${bg}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`${titleColor.split(' ')[1]} text-white text-xs font-bold px-3 py-1 rounded-xl`}>{title}</span>
              <span className="text-lg">{icon}</span>
            </div>
            <p className={`font-semibold text-sm ${titleColor.split(' ')[0]} mb-1`}>{desc}</p>
            <p className={`text-[10px] px-2 py-1 rounded-lg ${noteColor} mb-3`}>📌 {when}</p>
            <ol className="space-y-1.5">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className={`w-4 h-4 ${stepColor} text-white rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5`}>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )
      })}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export const englishSections = {

  // ── 1. GRAMMAR ─────────────────────────────────────────────────────────────
  grammar: [
    {
      title: 'Tenses — Garis Waktu Visual',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TOEFL/EPT/SIMAK UI):</strong> Grammar adalah komponen utama Structure & Written Expression di TOEFL ITP dan EPT. Fokus pada tenses, conditional sentences, passive voice, subject-verb agreement, relative clauses, dan subjunctive mood. Soal level S2 biasanya menguji pemahaman grammar dalam konteks akademik.
        </TipBox>
        <p className="text-sm text-gray-700 mb-3">
          Tense menunjukkan <strong>waktu</strong> terjadinya suatu tindakan.
          Lihat posisi setiap tense pada garis waktu berikut:
        </p>
        <TenseTimeline />
        <div className="overflow-x-auto my-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="text-left px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Tense</th>
                <th className="text-left px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Formula</th>
                <th className="text-left px-3 py-2 font-bold text-emerald-900 border-b-2 border-emerald-200">Contoh Kalimat</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Simple Present', 'S + V1(s/es)', 'She studies every day.', 'emerald'],
                ['Present Continuous', 'S + am/is/are + V-ing', 'She is studying now.', 'emerald'],
                ['Present Perfect', 'S + have/has + V3', 'She has finished the task.', 'emerald'],
                ['Simple Past', 'S + V2', 'She studied yesterday.', 'violet'],
                ['Past Continuous', 'S + was/were + V-ing', 'She was studying when I called.', 'violet'],
                ['Past Perfect', 'S + had + V3', 'She had studied before the exam.', 'violet'],
                ['Simple Future', 'S + will + V1', 'She will study tomorrow.', 'blue'],
                ['Future Perfect', 'S + will have + V3', 'She will have studied by noon.', 'blue'],
              ].map(([tense, formula, example, color]) => {
                const rowColor = { emerald: 'border-l-4 border-emerald-400', violet: 'border-l-4 border-violet-400', blue: 'border-l-4 border-blue-400' }[color]
                return (
                  <tr key={tense} className={`hover:bg-gray-50/50 ${rowColor}`}>
                    <td className="px-3 py-2 border-b border-gray-100 font-semibold text-gray-800">{tense}</td>
                    <td className="px-3 py-2 border-b border-gray-100 font-mono text-blue-700">{formula}</td>
                    <td className="px-3 py-2 border-b border-gray-100 text-gray-600 italic">{example}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <TipBox type="tip">
          <strong>Signal words:</strong> "yesterday/ago" → Simple Past | "now/currently" → Continuous |
          "already/just/ever/never" → Perfect | "tomorrow/next" → Future
        </TipBox>
        <MiniQuiz
          question='Pilih tense yang tepat: "She ___ in Jakarta since 2020."'
          options={['lives', 'lived', 'has lived', 'is living']}
          correctIndex={2}
          explanation='"Since 2020" adalah signal word untuk Present Perfect. Aksi dimulai di masa lalu dan masih berlanjut sekarang → has lived.'
          color="emerald"
        />
        <MatchGame pairs={[
          { left: 'yesterday', right: 'Simple Past' },
          { left: 'every day', right: 'Simple Present' },
          { left: 'since 2020', right: 'Present Perfect' },
          { left: 'right now', right: 'Present Continuous' },
          { left: 'tomorrow', right: 'Simple Future' },
        ]} color="emerald" />
        <QuizBank questions={englishSectionQuiz.grammar[0]} color="blue" />
      </>,
    },
    {
      title: 'Passive Voice',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Passive voice digunakan ketika <strong>objek lebih penting</strong> dari pelaku tindakan,
          atau pelaku tidak diketahui.
        </p>
        <FormulaCard color="emerald">
          <p><strong>Formula:</strong>  S + to be (sesuai tense) + V3 + (by agent)</p>
          <p className="text-xs text-emerald-700 mt-1">To be: am/is/are (present) · was/were (past) · will be (future) · has/have been (perfect)</p>
        </FormulaCard>
        <p className="text-sm font-semibold text-gray-800 mb-3">Transformasi Active → Passive:</p>
        <div className="space-y-2 my-3">
          {[
            { active: 'She writes the report.', passive: 'The report is written (by her).', tense: 'Simple Present' },
            { active: 'They completed the project.', passive: 'The project was completed (by them).', tense: 'Simple Past' },
            { active: 'He will submit the form.', passive: 'The form will be submitted (by him).', tense: 'Simple Future' },
            { active: 'They have approved the plan.', passive: 'The plan has been approved (by them).', tense: 'Present Perfect' },
          ].map(({ active, passive, tense }) => (
            <div key={tense} className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{tense}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="text-xs text-gray-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-lg">
                  <span className="text-[9px] font-bold text-blue-500 block mb-0.5">ACTIVE</span>
                  {active}
                </span>
                <span className="text-gray-400 font-bold text-sm hidden sm:block">→</span>
                <span className="text-xs text-gray-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-lg">
                  <span className="text-[9px] font-bold text-emerald-500 block mb-0.5">PASSIVE</span>
                  {passive}
                </span>
              </div>
            </div>
          ))}
        </div>
        <TipBox type="tip">
          <strong>Langkah transformasi:</strong> (1) Pindahkan object jadi subject → (2) Tambahkan to be sesuai tense → (3) Ubah verb ke V3 → (4) Opsional: tambah "by + agent"
        </TipBox>
        <MiniQuiz
          question='Ubah ke passive: "The teacher explains the lesson."'
          options={[
            'The lesson is explained by the teacher.',
            'The lesson was explained by the teacher.',
            'The lesson has been explained by the teacher.',
            'The lesson will be explained by the teacher.',
          ]}
          correctIndex={0}
          explanation='"explains" = Simple Present → to be "is" + V3 "explained". The lesson is explained by the teacher.'
          color="emerald"
        />
        <RevealBox
          question='Ubah ke passive: "They have completed the project."'
          answer={<span>Present Perfect Passive: <strong>The project has been completed (by them).</strong> Formula: has/have + been + V3.</span>}
          color="emerald"
        />
        <QuizBank questions={englishSectionQuiz.grammar[1]} color="blue" />
      </>,
    },
    {
      title: 'Conditional Sentences',
      body: <>
        <p className="text-sm text-gray-700 mb-3">
          Ada 4 tipe conditional. Yang membedakan: <strong>seberapa nyata kondisinya</strong>.
        </p>
        <ConditionalDiagram />
        <TipBox type="warning">
          <strong>Type 2 — jebakan paling sering:</strong> Gunakan <code className="bg-amber-100 px-1 rounded text-xs">were</code> untuk
          SEMUA subjek (I, he, she, it). Bukan "was"! <br />
          ✅ "If I <strong>were</strong> you..." &nbsp;&nbsp; ❌ "If I was you..."
        </TipBox>
        <MiniQuiz
          question='Lengkapi: "If I ___ more money, I would buy a car."'
          options={['have', 'had', 'has', 'will have']}
          correctIndex={1}
          explanation='Type 2 Conditional (unreal present): If + Simple Past (had), would + V1. "If I had more money, I would buy a car."'
          color="emerald"
        />
        <TabCard tabs={[
          { label: 'Type 0', content: <div className="space-y-1"><p className="font-semibold text-sm">Fakta Umum</p><p className="text-sm">If + present, present</p><p className="text-sm text-gray-500 italic">"If you heat water, it boils."</p></div> },
          { label: 'Type 1', content: <div className="space-y-1"><p className="font-semibold text-sm">Kemungkinan Nyata</p><p className="text-sm">If + present, will + V1</p><p className="text-sm text-gray-500 italic">"If it rains, I will stay home."</p></div> },
          { label: 'Type 2', content: <div className="space-y-1"><p className="font-semibold text-sm">Tidak Nyata Sekarang</p><p className="text-sm">If + past, would + V1</p><p className="text-sm text-gray-500 italic">"If I were rich, I would travel."</p></div> },
          { label: 'Type 3', content: <div className="space-y-1"><p className="font-semibold text-sm">Penyesalan Masa Lalu</p><p className="text-sm">If + had V3, would have V3</p><p className="text-sm text-gray-500 italic">"If I had studied, I would have passed."</p></div> },
        ]} color="emerald" />
        <QuizBank questions={englishSectionQuiz.grammar[2]} color="blue" />
      </>,
    },
    {
      title: 'Relative Clause',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Relative clause memberikan informasi tambahan tentang kata benda menggunakan
          <strong> kata penghubung relatif</strong>.
        </p>
        <SentenceDiagram
          sentence=""
          parts={[
            { word: 'The student', type: 'S' },
            { word: 'who', type: 'M' },
            { word: 'studies hard', type: 'M' },
            { word: 'will succeed', type: 'V' },
          ]}
        />
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2.5 font-bold text-blue-900 border-b-2 border-blue-200">Kata Hubung</th>
                <th className="text-left px-3 py-2.5 font-bold text-blue-900 border-b-2 border-blue-200">Digunakan Untuk</th>
                <th className="text-left px-3 py-2.5 font-bold text-blue-900 border-b-2 border-blue-200">Contoh</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['who', 'Orang (subjek)', 'The girl who called is my sister.'],
                ['whom', 'Orang (objek)', 'The man whom I met was kind.'],
                ['which', 'Benda / hewan', 'The book which I bought is great.'],
                ['that', 'Orang / benda (defining)', 'The car that I want is expensive.'],
                ['whose', 'Kepemilikan', 'The boy whose bag is red is Tom.'],
                ['where', 'Tempat', 'The city where I was born is Paris.'],
                ['when', 'Waktu', 'The year when she graduated was 2020.'],
              ].map(([kw, use, ex], i) => (
                <tr key={kw} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                  <td className="px-3 py-2 font-mono text-blue-700 font-bold border-b border-gray-100">{kw}</td>
                  <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{use}</td>
                  <td className="px-3 py-2 text-gray-500 text-xs italic border-b border-gray-100">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ExampleBox label="Contoh Soal & Penyelesaian">
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-semibold">"The professor _____ lectures are very popular is retiring next year."</p>
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {['a. who', 'b. whose ✓', 'c. which', 'd. whom'].map((o, i) => (
                <span key={i} className={`text-xs px-3 py-1.5 rounded-lg ${o.includes('✓') ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-gray-100 text-gray-600'}`}>{o}</span>
              ))}
            </div>
            <p className="text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2">"Whose" digunakan untuk kepemilikan. "lectures" milik "professor" → whose lectures.</p>
          </div>
        </ExampleBox>
        <MiniQuiz
          question="Lengkapi: 'The city _____ I was born is very beautiful.'"
          options={['who', 'which', 'where', 'whom']}
          correctIndex={2}
          explanation="'The city' = tempat → gunakan 'where'. 'Where' digunakan untuk menjelaskan lokasi/tempat. 'The city where I was born...'"
          color="blue"
        />
        <RevealBox
          question="Apa perbedaan 'who' dan 'whom'?"
          answer={<span><strong>Who</strong> = untuk subjek (pelaku). <strong>Whom</strong> = untuk objek (yang dikenai). <br/>Trik: ganti dengan he/she → who, ganti dengan him/her → whom. <br/>"The man who called me" (he called me). <br/>"The man whom I called" (I called him).</span>}
          color="purple"
        />
        <QuizBank questions={englishSectionQuiz.grammar[3]} color="blue" />
      </>,
    },
    {
      title: 'Gerund vs Infinitive',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Salah satu jebakan paling sering di TOEFL Structure. Beberapa verb diikuti <strong>gerund (V-ing)</strong>,
          beberapa diikuti <strong>infinitive (to + V1)</strong>, dan beberapa bisa keduanya.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-3">Verbs + Gerund (V-ing)</p>
            <div className="space-y-1.5 text-xs">
              {['enjoy', 'avoid', 'consider', 'suggest', 'mind', 'practice', 'finish', 'deny', 'admit', 'imagine', 'risk', 'keep'].map(v => (
                <span key={v} className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded-lg font-mono mr-1 mb-1">{v}</span>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              <p className="text-xs text-emerald-700 font-mono">✅ She enjoys <strong>reading</strong> novels.</p>
              <p className="text-xs text-rose-600 font-mono">❌ She enjoys to read novels.</p>
            </div>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
            <p className="font-bold text-purple-900 text-sm mb-3">Verbs + Infinitive (to + V1)</p>
            <div className="space-y-1.5 text-xs">
              {['want', 'need', 'decide', 'plan', 'hope', 'expect', 'agree', 'refuse', 'promise', 'offer', 'learn', 'afford'].map(v => (
                <span key={v} className="inline-block bg-purple-100 text-purple-800 px-2 py-0.5 rounded-lg font-mono mr-1 mb-1">{v}</span>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              <p className="text-xs text-emerald-700 font-mono">✅ She decided <strong>to study</strong> abroad.</p>
              <p className="text-xs text-rose-600 font-mono">❌ She decided studying abroad.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
          <p className="font-bold text-amber-900 text-sm mb-2">Verbs + Both (Makna Berbeda!)</p>
          <div className="space-y-2">
            {[
              { verb: 'remember', ger: 'I remember locking the door. (ingat sudah melakukannya)', inf: 'I remembered to lock the door. (ingat untuk melakukannya)' },
              { verb: 'stop', ger: 'He stopped smoking. (berhenti merokok)', inf: 'He stopped to smoke. (berhenti untuk merokok)' },
              { verb: 'try', ger: 'Try pressing the button. (coba tekan — eksperimen)', inf: 'Try to press the button. (usahakan menekan — berusaha)' },
            ].map(({ verb, ger, inf }) => (
              <div key={verb} className="bg-white rounded-lg p-3 border border-amber-100">
                <p className="text-xs font-bold text-amber-800 mb-1">{verb}</p>
                <p className="text-xs text-blue-700 font-mono">+ V-ing: {ger}</p>
                <p className="text-xs text-purple-700 font-mono">+ to V1: {inf}</p>
              </div>
            ))}
          </div>
        </div>
        <TipBox type="tip">
          <strong>Preposition + selalu Gerund:</strong> interested <em>in learning</em>, good <em>at solving</em>, instead <em>of waiting</em>, accustomed <em>to working</em>. Setelah preposisi (in, at, of, to sebagai preposisi), selalu V-ing.
        </TipBox>
        <MiniQuiz
          question="Pilih yang BENAR:"
          options={[
            'She enjoys to read books.',
            'He decided studying abroad.',
            'They avoid making mistakes.',
            'I want swimming today.',
          ]}
          correctIndex={2}
          explanation="'Avoid' selalu diikuti gerund (V-ing). avoid making ✓. 'Enjoy' juga + V-ing (bukan to read). 'Decide' + to V1. 'Want' + to V1."
          color="blue"
        />
        <RevealBox
          question="'I stopped smoking' vs 'I stopped to smoke' — apa bedanya?"
          answer={<span><strong>Stopped smoking</strong> = berhenti merokok (quit the habit). <br/><strong>Stopped to smoke</strong> = berhenti (aktivitas lain) untuk merokok (pause in order to smoke). <br/>Makna sangat berbeda! Stop + V-ing = berhenti melakukan itu. Stop + to V1 = berhenti untuk melakukan itu.</span>}
          color="purple"
        />
        <QuizBank questions={englishSectionQuiz.grammar[4]} color="blue" />
      </>,
    },
    {
      title: 'Causative Verbs & Wish/If Only',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Dua topik grammar yang sering muncul di TOEFL dan EPT untuk level S2.
        </p>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 my-4">
          <p className="font-bold text-blue-900 text-sm mb-3">Causative Verbs (Membuat/Menyuruh)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="text-left px-3 py-2 font-bold text-blue-900">Verb</th>
                  <th className="text-left px-3 py-2 font-bold text-blue-900">Formula</th>
                  <th className="text-left px-3 py-2 font-bold text-blue-900">Contoh</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['make', 'make + O + V1 (tanpa to)', 'She made him apologize.'],
                  ['let', 'let + O + V1 (tanpa to)', 'Let me help you.'],
                  ['have', 'have + O + V1 / V3', 'I had the mechanic fix my car.'],
                  ['get', 'get + O + to V1 / V3', 'I got him to sign the contract.'],
                ].map(([v, f, ex], i) => (
                  <tr key={v} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                    <td className="px-3 py-2 font-bold text-blue-700 border-b border-blue-100">{v}</td>
                    <td className="px-3 py-2 font-mono text-gray-700 border-b border-blue-100">{f}</td>
                    <td className="px-3 py-2 text-gray-500 italic border-b border-blue-100">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <TipBox type="warning">
            <strong>Jebakan:</strong> "make" dan "let" diikuti V1 <strong>tanpa "to"</strong>! Tapi "get" diikuti "to V1".
          </TipBox>
        </div>
        <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-4 my-4">
          <p className="font-bold text-violet-900 text-sm mb-3">Wish & If Only (Penyesalan/Keinginan)</p>
          <div className="space-y-2">
            {[
              { time: 'Sekarang (Present)', formula: 'wish + S + V2 / were', example: 'I wish I were taller. (Andai saya lebih tinggi)', note: 'Gunakan "were" untuk semua subjek' },
              { time: 'Masa Lalu (Past)', formula: 'wish + S + had + V3', example: 'I wish I had studied harder. (Andai dulu saya belajar lebih giat)', note: 'Menyesali sesuatu yang sudah terjadi' },
              { time: 'Masa Depan', formula: 'wish + S + would + V1', example: 'I wish it would stop raining. (Semoga hujan berhenti)', note: 'Untuk harapan/keluhan tentang masa depan' },
            ].map(({ time, formula, example, note }) => (
              <div key={time} className="bg-white rounded-xl p-3 border border-violet-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-violet-500 bg-violet-100 px-2 py-0.5 rounded-lg">{time}</span>
                </div>
                <p className="font-mono text-xs text-violet-800">{formula}</p>
                <p className="text-xs text-gray-600 italic mt-1">"{example}"</p>
                <p className="text-[10px] text-gray-400 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
        <MiniQuiz
          question="Pilih yang BENAR: 'The teacher _____ the students rewrite the essay.'"
          options={['made', 'got', 'let to', 'had to']}
          correctIndex={0}
          explanation="'Make' + O + V1 (tanpa to). 'Made the students rewrite' ✓. 'Got' butuh 'to': got them to rewrite. 'Let' + V1 tanpa 'to': let them rewrite."
          color="blue"
        />
        <RevealBox
          question="Apa perbedaan 'I wish I were' dan 'I wish I had been'?"
          answer={<span><strong>I wish I were rich</strong> = Andai sekarang saya kaya (kenyataan: saya TIDAK kaya sekarang). → Present unreal. <br/><strong>I wish I had been rich</strong> = Andai dulu saya kaya (kenyataan: dulu saya TIDAK kaya). → Past unreal/penyesalan. <br/>Were = sekarang, Had been = masa lalu.</span>}
          color="violet"
        />
        <QuizBank questions={englishSectionQuiz.grammar[5]} color="blue" />
      </>,
    },
  ],

  // ── 2. READING ─────────────────────────────────────────────────────────────
  reading: [
    {
      title: 'Strategi Reading: Skimming vs Scanning',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TOEFL Reading):</strong> Reading Comprehension menguji kemampuan memahami teks akademik. Soal meliputi main idea, inference, vocabulary in context, reference, dan factual detail. Teks biasanya dari topik sains, sosial, atau sejarah. Kecepatan baca sangat penting — target 12-14 menit per passage.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Dua teknik membaca yang berbeda tujuan. Ketahui kapan menggunakan masing-masing.
        </p>
        <SkimmingVsScanning />
        <TipBox type="tip">
          <strong>Urutan ideal saat tes:</strong> ① Skim teks (10 detik per paragraf) → ② Baca soal →
          ③ Scan teks untuk jawaban spesifik → ④ Jawab. Jangan baca keseluruhan teks dari awal!
        </TipBox>
        <MiniQuiz color="blue"
          question="Kamu mencari tanggal lahir penulis dalam sebuah biografi panjang. Teknik yang tepat adalah..."
          options={['Skimming', 'Scanning', 'Close reading', 'Speed reading']}
          correctIndex={1}
          explanation="Mencari info spesifik (tanggal lahir) = SCANNING. Gerakkan mata mencari angka/tahun, bukan membaca tiap kata. Skimming = untuk gambaran umum."
        />
        <MatchGame color="blue" pairs={[
          { left: 'Skimming', right: 'Baca cepat untuk gambaran umum' },
          { left: 'Scanning', right: 'Cari info spesifik (nama, angka)' },
          { left: 'Main Idea', right: 'Biasanya di kalimat pertama' },
          { left: 'Inference', right: 'Kesimpulan yang tidak tersurat' },
        ]} />
        <QuizBank questions={englishSectionQuiz.reading[0]} color="emerald" />
      </>,
    },
    {
      title: 'Main Idea & Inference',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Dua jenis soal yang paling sering muncul di TOEFL-like reading.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-2">📌 Main Idea (Gagasan Utama)</p>
            <p className="text-xs text-gray-600 mb-3">Inti dari seluruh paragraf — biasanya di kalimat pertama.</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">1</span>
                <span>Baca kalimat pertama setiap paragraf</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">2</span>
                <span>Pilih yang paling <em>umum</em> (mendukung semua kalimat lain)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">3</span>
                <span>Hindari jawaban yang terlalu spesifik/detail</span>
              </div>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
            <p className="font-bold text-violet-900 text-sm mb-2">🔎 Inference (Kesimpulan Tersirat)</p>
            <p className="text-xs text-gray-600 mb-3">Informasi yang tidak tersurat — harus disimpulkan dari konteks.</p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-violet-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">1</span>
                <span>Cari kata "suggests", "implies", "can be inferred"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-violet-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">2</span>
                <span>Jawaban harus <em>logis berdasarkan teks</em>, bukan asumsi</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 bg-violet-600 text-white rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5">3</span>
                <span>Hindari jawaban yang "over-infer" (terlalu berlebihan)</span>
              </div>
            </div>
          </div>
        </div>
        <ExampleBox label="Contoh Soal Inference">
          <p className="text-xs text-gray-600 italic mb-2">"After failing twice, Maria spent the next month reviewing her weakest areas before attempting the exam again."</p>
          <p className="text-sm font-semibold text-gray-800">Q: What can be inferred about Maria?</p>
          <div className="mt-2 space-y-1">
            {['a. She gave up after failing.', 'b. She is determined to improve and succeed. ✓', 'c. She will definitely pass next time.', 'd. She failed because of bad luck.'].map((opt, i) => (
              <p key={i} className={`text-xs px-3 py-1 rounded-lg ${opt.includes('✓') ? 'bg-emerald-100 text-emerald-800 font-semibold' : 'text-gray-500'}`}>{opt}</p>
            ))}
          </div>
          <p className="text-xs text-emerald-700 mt-2">✅ (b) benar karena teks menunjukkan usaha aktif, bukan kepastian sukses (c terlalu berlebihan).</p>
        </ExampleBox>
        <MiniQuiz color="blue"
          question="Teks: 'Despite the heavy rain, the team continued their outdoor experiment.' — Apa yang bisa disimpulkan (inferred)?"
          options={[
            'Tim tidak suka hujan',
            'Eksperimen tersebut sangat penting bagi tim',
            'Tim pasti berhasil',
            'Hujan tidak pernah mengganggu eksperimen',
          ]}
          correctIndex={1}
          explanation="'Despite heavy rain...continued' menunjukkan eksperimen sangat penting sehingga mereka tetap melanjutkan. Ini inference — tidak tersurat, tapi logis."
        />
        <RevealBox color="violet"
          question="Apa perbedaan 'Main Idea' dan 'Detail' dalam soal reading?"
          answer="Main Idea = gagasan utama yang mencakup seluruh paragraf (umum). Detail = fakta spesifik yang mendukung gagasan utama (khusus). Jika jawaban terlalu spesifik, itu bukan main idea."
        />
        <QuizBank questions={englishSectionQuiz.reading[1]} color="emerald" />
      </>,
    },
    {
      title: 'Jenis Soal Reading TOEFL',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          6 jenis soal yang wajib dikuasai:
        </p>
        <ConceptGrid items={[
          { title: '1. Main Idea', desc: 'What is the main topic of the passage?', example: 'Cari tema paling umum' },
          { title: '2. Detail / Fact', desc: 'According to paragraph X, ...?', example: 'Scan fakta spesifik di paragraf tersebut' },
          { title: '3. Vocabulary', desc: '"Diminish" in line 5 means...?', example: 'Cari makna dari konteks kalimat' },
          { title: '4. Inference', desc: 'It can be inferred that...?', example: 'Simpulkan logis dari teks' },
          { title: '5. Reference', desc: '"They" in line 8 refers to...?', example: 'Lacak pronoun ke antecedent-nya' },
          { title: '6. Sentence Insertion', desc: 'Where would this sentence best fit?', example: 'Cari koherensi alur argumen' },
        ]} />
        <TipBox type="info">
          <strong>Untuk soal vocabulary:</strong> Jangan langsung tebak dari hafalanmu!
          Selalu baca konteks kalimatnya terlebih dahulu — kata bisa punya makna berbeda dalam konteks berbeda.
        </TipBox>
        <MiniQuiz color="blue"
          question="Soal ini bertipe apa? — 'The word &quot;profound&quot; in paragraph 3 is closest in meaning to...'"
          options={['Main Idea', 'Inference', 'Vocabulary in Context', 'Reference']}
          correctIndex={2}
          explanation="Kata kunci: 'the word ... is closest in meaning to' → ini soal Vocabulary in Context. Cari makna dari konteks kalimat, bukan hafalan."
        />
        <QuizBank questions={englishSectionQuiz.reading[2]} color="emerald" />
      </>,
    },
    {
      title: 'Latihan: Reading Passage TOEFL-like',
      body: <>
        <p className="text-sm text-gray-700 mb-3">
          Berikut contoh passage akademik dengan soal-soal seperti di TOEFL. Praktek baca cepat dan jawab pertanyaan.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">READING PASSAGE</p>
          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            <p>
              <strong>[1]</strong> The concept of neuroplasticity has fundamentally changed our understanding of the brain.
              Previously, scientists believed that the brain's structure was essentially fixed after childhood.
              However, research over the past three decades has demonstrated that the brain continues to form
              new neural pathways and adapt throughout a person's lifetime.
            </p>
            <p>
              <strong>[2]</strong> Neuroplasticity occurs at multiple levels, from cellular changes to large-scale cortical
              remapping. When we learn a new skill, such as playing a musical instrument, the brain regions
              associated with that activity physically expand. London taxi drivers, for instance, have been found
              to have larger hippocampi — the brain region associated with spatial memory — compared to bus drivers
              who follow fixed routes.
            </p>
            <p>
              <strong>[3]</strong> The implications for education and rehabilitation are profound. Stroke patients who were
              once considered beyond recovery have regained functions through intensive, targeted therapy that
              exploits neuroplasticity. Similarly, educational approaches that emphasize active learning and
              repetition can literally reshape the brain to enhance cognitive abilities.
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3">Latihan Soal:</p>
        <div className="space-y-4">
          {[
            {
              q: '1. What is the main topic of the passage?',
              opts: ['London taxi drivers', 'How the brain changes and adapts throughout life', 'Why education is important', 'The fixed structure of the brain'],
              ans: 1,
              type: 'Main Idea',
              tip: 'Main idea = tema paling umum yang mencakup seluruh paragraf.'
            },
            {
              q: '2. The word "demonstrated" in paragraph 1 is closest in meaning to...',
              opts: ['suggested', 'shown', 'denied', 'imagined'],
              ans: 1,
              type: 'Vocabulary',
              tip: '"Demonstrated" = menunjukkan/membuktikan = "shown" dalam konteks riset.'
            },
            {
              q: '3. Why does the author mention London taxi drivers?',
              opts: ['To show they are smarter than bus drivers', 'To give an example of how the brain adapts to specific demands', 'To argue that driving is good for the brain', 'To prove that all professions affect the brain equally'],
              ans: 1,
              type: 'Purpose',
              tip: 'Taxi driver = contoh konkret neuroplasticity (otak beradaptasi sesuai kebutuhan).'
            },
            {
              q: '4. It can be inferred from paragraph 3 that...',
              opts: ['All stroke patients fully recover', 'The brain cannot be changed after injury', 'Targeted therapy can help the brain create new pathways', 'Education has no effect on the brain'],
              ans: 2,
              type: 'Inference',
              tip: '"Exploits neuroplasticity" = memanfaatkan kemampuan otak membentuk jalur baru.'
            },
          ].map(({ q, opts, ans, type, tip }, qi) => (
            <div key={qi} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded-lg">{type}</span>
                <p className="text-sm font-semibold text-gray-800">{q}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
                {opts.map((o, oi) => (
                  <span key={oi} className={`text-xs px-3 py-1.5 rounded-lg ${oi === ans ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-gray-100 text-gray-600'}`}>
                    {String.fromCharCode(97 + oi)}. {o} {oi === ans ? '✓' : ''}
                  </span>
                ))}
              </div>
              <p className="text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2">{tip}</p>
            </div>
          ))}
        </div>
        <QuizBank questions={englishSectionQuiz.reading[3]} color="emerald" />
      </>,
    },
  ],

  // ── 3. VOCABULARY ──────────────────────────────────────────────────────────
  vocabulary: [
    {
      title: 'Academic Word List (AWL)',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TOEFL/EPT):</strong> Vocabulary muncul di semua bagian tes — Reading (vocabulary in context), Structure (pilihan kata), dan Listening. Fokus pada Academic Word List (AWL), prefixes/suffixes, synonyms/antonyms, dan collocations. Kosakata akademik level graduate sangat penting.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Kata akademik yang paling sering muncul dalam tes dan teks ilmiah.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-violet-50">
                <th className="text-left px-3 py-2.5 font-bold text-violet-900 border-b-2 border-violet-200">Kata</th>
                <th className="text-left px-3 py-2.5 font-bold text-violet-900 border-b-2 border-violet-200">Arti</th>
                <th className="text-left px-3 py-2.5 font-bold text-violet-900 border-b-2 border-violet-200">Contoh Penggunaan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['analyze', 'menganalisis', 'Researchers analyzed the data carefully.'],
                ['assess', 'menilai/mengevaluasi', 'The committee will assess your application.'],
                ['demonstrate', 'menunjukkan/membuktikan', 'Results demonstrate a clear trend.'],
                ['establish', 'menetapkan/mendirikan', 'The study established a new baseline.'],
                ['implement', 'melaksanakan/menerapkan', 'The policy was implemented last year.'],
                ['indicate', 'mengindikasikan', 'Studies indicate that exercise is beneficial.'],
                ['investigate', 'menyelidiki/meneliti', 'Scientists investigated the phenomenon.'],
                ['evaluate', 'mengevaluasi', 'Experts evaluated the new curriculum.'],
              ].map(([w, m, ex], i) => (
                <tr key={w} className={i % 2 === 0 ? 'bg-white' : 'bg-violet-50/30'}>
                  <td className="px-3 py-2 font-bold text-violet-700 border-b border-gray-100">{w}</td>
                  <td className="px-3 py-2 text-gray-700 border-b border-gray-100">{m}</td>
                  <td className="px-3 py-2 text-gray-500 text-xs italic border-b border-gray-100">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MiniQuiz color="violet"
          question="Lengkapi: 'The researchers _____ the effects of climate change on marine life.' (pilih kata akademik yang tepat)"
          options={['looked at', 'investigated', 'saw', 'checked out']}
          correctIndex={1}
          explanation="Dalam konteks akademik, 'investigated' (menyelidiki) lebih tepat daripada bahasa informal seperti 'looked at' atau 'checked out'. Gunakan kata akademik saat menulis/membaca teks ilmiah."
        />
        <MatchGame color="violet" pairs={[
          { left: 'analyze', right: 'menganalisis' },
          { left: 'demonstrate', right: 'menunjukkan' },
          { left: 'implement', right: 'menerapkan' },
          { left: 'investigate', right: 'menyelidiki' },
          { left: 'evaluate', right: 'mengevaluasi' },
        ]} />
        <RevealBox color="blue"
          question="Apa perbedaan 'assess' dan 'evaluate'?"
          answer="Keduanya mirip (menilai), tapi: 'Assess' = menilai/mengukur kondisi saat ini (assess the damage). 'Evaluate' = menilai kualitas/efektivitas secara menyeluruh (evaluate the program). Dalam tes, keduanya sering saling menggantikan."
        />
        <QuizBank questions={englishSectionQuiz.vocabulary[0]} color="purple" />
      </>,
    },
    {
      title: 'Word Formation — Keluarga Kata',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Dari satu kata dasar, bisa dibentuk beberapa kelas kata. Memahami ini membantu menjawab soal word form.
        </p>
        <WordFamilyTree
          root="analyze"
          forms={[
            { type: 'Verb', word: 'analyze', meaning: 'menganalisis' },
            { type: 'Noun', word: 'analysis', meaning: 'analisis' },
            { type: 'Adjective', word: 'analytical', meaning: 'analitis' },
            { type: 'Adverb', word: 'analytically', meaning: 'secara analitis' },
          ]}
        />
        <WordFamilyTree
          root="develop"
          forms={[
            { type: 'Verb', word: 'develop', meaning: 'mengembangkan' },
            { type: 'Noun', word: 'development', meaning: 'perkembangan' },
            { type: 'Adjective', word: 'developed', meaning: 'maju/berkembang' },
            { type: 'Adverb', word: 'developmentally', meaning: 'secara perkembangan' },
          ]}
        />
        <p className="text-sm font-semibold text-gray-800 mt-4 mb-2">Prefix & Suffix Umum:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-2">Prefix (Awalan)</p>
            {[['un-', 'tidak', 'unclear, unable'], ['re-', 'kembali/lagi', 'review, reconsider'], ['pre-', 'sebelum', 'preview, predict'], ['mis-', 'salah', 'misunderstand'], ['inter-', 'antar', 'international'], ['over-', 'berlebihan', 'overestimate']].map(([p, m, ex]) => (
              <div key={p} className="flex items-baseline gap-2 text-xs mb-1">
                <span className="font-mono font-bold text-blue-700 w-12">{p}</span>
                <span className="text-gray-500 w-16">{m}</span>
                <span className="text-gray-400 italic">{ex}</span>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2">Suffix (Akhiran)</p>
            {[['-tion/-sion', 'Noun', 'information'], ['-ly', 'Adverb', 'clearly'], ['-ful', 'Adjective', 'helpful'], ['-ize/-ise', 'Verb', 'modernize'], ['-ment', 'Noun', 'development'], ['-ness', 'Noun', 'awareness']].map(([s, pos, ex]) => (
              <div key={s} className="flex items-baseline gap-2 text-xs mb-1">
                <span className="font-mono font-bold text-emerald-700 w-16">{s}</span>
                <span className="text-gray-500 w-14">{pos}</span>
                <span className="text-gray-400 italic">{ex}</span>
              </div>
            ))}
          </div>
        </div>
        <MiniQuiz color="emerald"
          question="Pilih bentuk kata yang tepat: 'The _____ of the new policy was announced yesterday.' (implement)"
          options={['implement', 'implementation', 'implementing', 'implemented']}
          correctIndex={1}
          explanation="Setelah 'The' dan sebelum 'of' dibutuhkan NOUN. 'Implementation' adalah bentuk noun dari 'implement'. Suffix '-tion' menandakan noun."
        />
        <RevealBox color="blue"
          question="Apa bentuk Noun, Adjective, dan Adverb dari kata 'create'?"
          answer="Noun: creation / creativity | Adjective: creative | Adverb: creatively. Suffix -tion → noun, -ive → adjective, -ly → adverb."
        />
        <QuizBank questions={englishSectionQuiz.vocabulary[1]} color="purple" />
      </>,
    },
    {
      title: 'Synonym, Antonym & Context Clues',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Soal vocabulary sering meminta sinonim. Pelajari kelompok sinonim akademik penting:
        </p>
        <div className="space-y-2 my-3">
          {[
            { word: 'significant', syns: ['important', 'crucial', 'vital', 'substantial'], color: 'blue' },
            { word: 'demonstrate', syns: ['show', 'reveal', 'indicate', 'illustrate'], color: 'emerald' },
            { word: 'decrease', syns: ['diminish', 'reduce', 'decline', 'drop'], color: 'rose' },
            { word: 'complex', syns: ['intricate', 'sophisticated', 'elaborate', 'complicated'], color: 'violet' },
          ].map(({ word, syns, color }) => {
            const bg = { blue: 'bg-blue-50 border-blue-200', emerald: 'bg-emerald-50 border-emerald-200', rose: 'bg-rose-50 border-rose-200', violet: 'bg-violet-50 border-violet-200' }[color]
            const txt = { blue: 'text-blue-700', emerald: 'text-emerald-700', rose: 'text-rose-700', violet: 'text-violet-700' }[color]
            const badge = { blue: 'bg-blue-100 text-blue-800', emerald: 'bg-emerald-100 text-emerald-800', rose: 'bg-rose-100 text-rose-800', violet: 'bg-violet-100 text-violet-800' }[color]
            return (
              <div key={word} className={`border rounded-xl px-4 py-3 ${bg} flex flex-wrap items-center gap-2`}>
                <span className={`font-bold text-sm ${txt} w-28`}>{word}</span>
                <span className="text-gray-400 text-xs">=</span>
                {syns.map(s => <span key={s} className={`text-xs px-2 py-0.5 rounded-lg font-medium ${badge}`}>{s}</span>)}
              </div>
            )
          })}
        </div>
        <TipBox type="info">
          <strong>Context Clues:</strong> Jika tidak tahu arti kata, cari petunjuk di kalimat sebelum/sesudahnya.
          Kata seperti "however", "in contrast" → makna berlawanan |
          "therefore", "thus" → makna mendukung/kesimpulan.
        </TipBox>
        <MiniQuiz color="violet"
          question="'The experiment yielded significant results; the data was substantial.' — 'Substantial' paling dekat artinya dengan..."
          options={['tiny', 'considerable', 'uncertain', 'temporary']}
          correctIndex={1}
          explanation="Context clue: 'significant results' → 'substantial' bermakna serupa = considerable (cukup besar/banyak). Keduanya sinonim."
        />
        <RevealBox color="emerald"
          question="Cari context clue: 'Although the initial results were promising, subsequent experiments yielded DISMAL outcomes.' — Apa arti 'dismal'?"
          answer={<span>Context clue: 'Although...promising' menunjukkan pertentangan (contrast). <br/>Jika awal 'promising' (menjanjikan), maka 'dismal' = kebalikannya → <strong>mengecewakan/buruk/suram</strong>. <br/>Kata 'Although' adalah signal word contrast!</span>}
        />
        <QuizBank questions={englishSectionQuiz.vocabulary[2]} color="purple" />
      </>,
    },
    {
      title: 'Confusing Word Pairs',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Pasangan kata yang sering membingungkan di TOEFL. Banyak soal Written Expression menguji hal ini.
        </p>
        <div className="space-y-2 my-3">
          {[
            { a: 'affect (verb)', b: 'effect (noun)', example: 'The rain affects our plan. / The effect of rain is flooding.', tip: 'Affect = verb (mempengaruhi), Effect = noun (dampak)' },
            { a: 'principal (utama/kepsek)', b: 'principle (prinsip)', example: 'The principal reason is cost. / Moral principles guide us.', tip: 'PrinciPAL = orang (PAL=teman) atau utama, PrinciPLE = aturan/konsep' },
            { a: 'complement (pelengkap)', b: 'compliment (pujian)', example: 'Wine complements cheese. / She paid him a compliment.', tip: 'CompleEment = melEngkapi, CompiIment = puJIan' },
            { a: 'discrete (terpisah)', b: 'discreet (hati-hati)', example: 'Three discrete categories. / Please be discreet about this.', tip: 'DiscrETE = sEparaTE, DiscrEET = bijaksana/rahasia' },
            { a: 'precede (mendahului)', b: 'proceed (melanjutkan)', example: 'A precedes B. / Please proceed to the next step.', tip: 'Precede = sebelum, Proceed = maju terus' },
            { a: 'adapt (menyesuaikan)', b: 'adopt (mengadopsi)', example: 'Species adapt to their environment. / They adopted a new policy.', tip: 'Adapt = berubah sesuai, Adopt = mengambil/menerima sesuatu yang baru' },
            { a: 'imply (menyiratkan)', b: 'infer (menyimpulkan)', example: 'The author implies a bias. / We can infer from the data.', tip: 'Pembicara implies (menyampaikan tersirat), pendengar infers (menyimpulkan)' },
            { a: 'rise (naik sendiri)', b: 'raise (menaikkan)', example: 'Prices rise. / They raised the price.', tip: 'Rise = intransitif (tanpa objek), Raise = transitif (butuh objek)' },
          ].map(({ a, b, example, tip }) => (
            <div key={a} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-lg font-mono">{a}</span>
                <span className="text-xs text-gray-400">vs</span>
                <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded-lg font-mono">{b}</span>
              </div>
              <p className="text-xs text-gray-600 italic">{example}</p>
              <p className="text-[10px] text-amber-700 mt-1">Trick: {tip}</p>
            </div>
          ))}
        </div>
        <MiniQuiz color="blue"
          question="Pilih kata yang tepat: 'The new regulation had a significant _____ on the economy.' (affect/effect)"
          options={['affect', 'effect', 'affecting', 'effecting']}
          correctIndex={1}
          explanation="Setelah article 'a' + adjective 'significant' dibutuhkan NOUN. 'Effect' = noun (dampak). 'Affect' = verb (mempengaruhi)."
        />
        <MatchGame color="purple" pairs={[
          { left: 'affect (verb)', right: 'mempengaruhi' },
          { left: 'effect (noun)', right: 'dampak/akibat' },
          { left: 'principal', right: 'utama / kepala sekolah' },
          { left: 'principle', right: 'prinsip / aturan' },
        ]} />
        <QuizBank questions={englishSectionQuiz.vocabulary[3]} color="purple" />
      </>,
    },
    {
      title: 'Academic Collocations & Transition Words',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          <strong>Collocations</strong> adalah pasangan kata yang sering digunakan bersama dalam konteks akademik.
          <strong> Transition words</strong> menghubungkan ide antar kalimat — sangat penting untuk Reading dan Writing.
        </p>
        <p className="text-sm font-semibold text-gray-800 mb-3">Academic Collocations Penting:</p>
        <div className="grid sm:grid-cols-2 gap-2 my-3">
          {[
            ['conduct', 'research / a study / an experiment'],
            ['carry out', 'an investigation / a survey / a task'],
            ['draw', 'a conclusion / attention / a comparison'],
            ['pose', 'a question / a threat / a challenge'],
            ['yield', 'results / data / benefits'],
            ['shed light on', 'an issue / a problem / a phenomenon'],
            ['take into account', 'factors / variables / circumstances'],
            ['bear in mind', 'considerations / implications / limitations'],
          ].map(([verb, nouns]) => (
            <div key={verb} className="bg-violet-50 border border-violet-200 rounded-lg px-3 py-2 flex items-baseline gap-2">
              <span className="text-xs font-bold text-violet-800 font-mono whitespace-nowrap">{verb}</span>
              <span className="text-xs text-gray-600">{nouns}</span>
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3 mt-5">Transition Words (Signal Words):</p>
        <div className="space-y-2 my-3">
          {[
            { cat: 'Penambahan', words: 'furthermore, moreover, in addition, additionally, likewise', color: 'blue' },
            { cat: 'Pertentangan', words: 'however, nevertheless, on the other hand, in contrast, although, despite', color: 'rose' },
            { cat: 'Sebab-Akibat', words: 'therefore, consequently, as a result, thus, hence, due to', color: 'emerald' },
            { cat: 'Contoh', words: 'for instance, for example, such as, namely, specifically', color: 'amber' },
            { cat: 'Kesimpulan', words: 'in conclusion, to summarize, overall, in summary, ultimately', color: 'purple' },
          ].map(({ cat, words, color }) => {
            const bg = { blue: 'bg-blue-50 border-blue-200', rose: 'bg-rose-50 border-rose-200', emerald: 'bg-emerald-50 border-emerald-200', amber: 'bg-amber-50 border-amber-200', purple: 'bg-purple-50 border-purple-200' }[color]
            const txt = { blue: 'text-blue-800', rose: 'text-rose-800', emerald: 'text-emerald-800', amber: 'text-amber-800', purple: 'text-purple-800' }[color]
            return (
              <div key={cat} className={`border rounded-xl px-4 py-2.5 ${bg}`}>
                <span className={`text-xs font-bold ${txt}`}>{cat}: </span>
                <span className="text-xs text-gray-600 font-mono">{words}</span>
              </div>
            )
          })}
        </div>
        <TipBox type="tip">
          <strong>Untuk TOEFL Reading:</strong> Transition words adalah kunci untuk memahami hubungan antar kalimat dan paragraf. Saat menemukan "however" → ide berbeda/berlawanan dengan kalimat sebelumnya. "Therefore" → kesimpulan dari yang sebelumnya.
        </TipBox>
        <MiniQuiz color="amber"
          question="Pilih transition word yang tepat: 'The experiment failed. _____, the team decided to try a different approach.'"
          options={['Furthermore', 'Nevertheless', 'For instance', 'Likewise']}
          correctIndex={1}
          explanation="'Nevertheless' = meskipun demikian. Kalimat pertama negatif (failed), kalimat kedua menunjukkan tindakan berlawanan (try again). Butuh kata penghubung pertentangan."
        />
        <MatchGame color="violet" pairs={[
          { left: 'conduct', right: 'research / a study' },
          { left: 'draw', right: 'a conclusion / attention' },
          { left: 'pose', right: 'a question / a threat' },
          { left: 'yield', right: 'results / benefits' },
          { left: 'shed light on', right: 'a problem / phenomenon' },
        ]} />
        <QuizBank questions={englishSectionQuiz.vocabulary[4]} color="purple" />
      </>,
    },
    {
      title: 'Everyday & Campus Vocabulary',
      body: <>
        <TipBox type="info">
          <strong>Kenapa penting?</strong> Selain vocab akademik, kamu juga perlu menguasai kata-kata yang dipakai dalam percakapan sehari-hari dan di lingkungan kampus S2. TOEFL Listening & Speaking juga menguji vocabulary ini!
        </TipBox>

        {/* ── Everyday Conversation ── */}
        <p className="text-sm font-bold text-gray-900 mt-5 mb-2 flex items-center gap-2">
          <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs">💬</span>
          Percakapan Sehari-hari (Daily Conversation)
        </p>
        <p className="text-xs text-gray-500 mb-3">Kata-kata yang sering muncul dalam obrolan informal, belanja, restoran, travel, dll.</p>

        <div className="space-y-2 my-3">
          {[
            { cat: 'Sapaan & Basa-basi', icon: '👋', words: [
              ['How\'s it going?', 'Apa kabar? (santai)', 'Hey, how\'s it going? — Not bad, thanks!'],
              ['What\'s up?', 'Ada apa? / Apa kabar?', 'What\'s up? — Not much, just chilling.'],
              ['Long time no see!', 'Lama tidak bertemu!', 'Hey! Long time no see! How have you been?'],
              ['catch up', 'ngobrol setelah lama', 'Let\'s catch up over coffee sometime.'],
              ['hang out', 'jalan-jalan / nongkrong', 'Do you wanna hang out this weekend?'],
              ['run into', 'bertemu secara kebetulan', 'I ran into my old friend at the mall.'],
              ['get along with', 'akur / cocok dengan', 'She gets along with everyone in class.'],
              ['Nice to meet you', 'Senang berkenalan', 'Hi, I\'m Yosua. Nice to meet you!'],
              ['Take care!', 'Jaga diri! (pamit)', 'See you tomorrow. Take care!'],
              ['Keep in touch', 'Tetap berhubungan', 'I\'m moving next week. Let\'s keep in touch!'],
              ['It was nice talking to you', 'Senang ngobrol denganmu', 'Gotta go. It was nice talking to you!'],
              ['How have you been?', 'Bagaimana kabarmu akhir-akhir ini?', 'Hey, how have you been? I haven\'t seen you in ages.'],
            ]},
            { cat: 'Opini & Persetujuan', icon: '🤝', words: [
              ['I\'m all for it', 'Saya sangat setuju', 'A study group? I\'m all for it!'],
              ['That makes sense', 'Itu masuk akal', 'Oh, that makes sense now.'],
              ['I couldn\'t agree more', 'Sangat setuju', 'I couldn\'t agree more with your point.'],
              ['No way!', 'Tidak mungkin! (kaget)', 'You got an A+? No way!'],
              ['I\'m not sure about that', 'Saya kurang yakin', 'Hmm, I\'m not sure about that approach.'],
              ['Fair enough', 'Cukup adil / oke deh', 'Fair enough, let\'s try your idea first.'],
              ['I see your point', 'Saya paham maksudmu', 'I see your point, but I think there\'s another way.'],
              ['That\'s debatable', 'Itu bisa diperdebatkan', 'That\'s debatable — not everyone agrees.'],
              ['I beg to differ', 'Saya tidak sependapat (sopan)', 'With all due respect, I beg to differ.'],
              ['Absolutely!', 'Tentu saja!', 'Should we start early? Absolutely!'],
              ['I\'m on the fence', 'Saya masih ragu', 'I\'m on the fence about which elective to take.'],
              ['You\'ve got a point', 'Kamu ada benarnya', 'You\'ve got a point. Let me reconsider.'],
            ]},
            { cat: 'Perasaan & Reaksi', icon: '😊', words: [
              ['I\'m swamped', 'Saya sangat sibuk', 'Can\'t go out, I\'m swamped with work.'],
              ['I\'m relieved', 'Saya lega', 'I\'m so relieved the exam is over.'],
              ['That\'s a bummer', 'Sayang sekali', 'Class is cancelled? That\'s a bummer.'],
              ['I\'m looking forward to', 'Saya menantikan', 'I\'m looking forward to the seminar.'],
              ['fed up with', 'muak / bosan dengan', 'I\'m fed up with this traffic.'],
              ['blown away', 'sangat terkesan', 'I was blown away by her presentation.'],
              ['stressed out', 'sangat stres', 'I\'m so stressed out about the deadline.'],
              ['pumped / excited', 'bersemangat', 'I\'m pumped for the field trip tomorrow!'],
              ['burned out', 'kelelahan (mental)', 'After finals week, I\'m completely burned out.'],
              ['freaking out', 'panik', 'I\'m freaking out — I lost my USB with my thesis!'],
              ['on cloud nine', 'sangat bahagia', 'She was on cloud nine after getting accepted.'],
              ['under the weather', 'kurang sehat', 'I\'m feeling a bit under the weather today.'],
              ['overwhelmed', 'kewalahan', 'I feel overwhelmed with all these assignments.'],
              ['grateful', 'bersyukur / berterima kasih', 'I\'m grateful for your help with the project.'],
            ]},
            { cat: 'Aktivitas Sehari-hari', icon: '🏃', words: [
              ['grab a bite', 'makan sebentar', 'Let\'s grab a bite before class.'],
              ['work out', 'olahraga / berolahraga', 'I work out at the gym three times a week.'],
              ['sleep in', 'bangun siang / tidur lebih lama', 'I usually sleep in on Sundays.'],
              ['figure out', 'mencari tahu / memecahkan', 'I need to figure out this math problem.'],
              ['sort out', 'membereskan / menyelesaikan', 'Let me sort out my schedule first.'],
              ['pick up', 'menjemput / mengambil', 'Can you pick up the notes from the office?'],
              ['drop off', 'mengantar / menurunkan', 'I\'ll drop off the books at the library.'],
              ['look into', 'menyelidiki / memeriksa', 'I\'ll look into the issue and get back to you.'],
              ['come across', 'menemukan secara kebetulan', 'I came across an interesting article online.'],
              ['put off', 'menunda', 'Stop putting off your homework!'],
              ['give up', 'menyerah', 'Don\'t give up — you\'re almost done!'],
              ['keep up with', 'mengikuti / tidak ketinggalan', 'It\'s hard to keep up with the readings.'],
              ['run out of', 'kehabisan', 'We\'re running out of time for the project.'],
              ['get rid of', 'membuang / menyingkirkan', 'I need to get rid of these old notes.'],
            ]},
            { cat: 'Belanja & Restoran', icon: '🛒', words: [
              ['How much is this?', 'Berapa harganya?', 'Excuse me, how much is this textbook?'],
              ['Do you have this in...?', 'Ada yang ukuran...?', 'Do you have this in a smaller size?'],
              ['I\'d like to order...', 'Saya ingin pesan...', 'I\'d like to order a latte, please.'],
              ['Can I get the bill?', 'Minta bonnya?', 'Excuse me, can I get the bill, please?'],
              ['It\'s on me', 'Saya yang traktir', 'Don\'t worry, lunch is on me today.'],
              ['split the bill', 'patungan', 'Let\'s split the bill evenly.'],
              ['bargain / deal', 'tawar / penawaran bagus', 'I got a great deal on this laptop!'],
              ['sold out', 'habis terjual', 'Sorry, that item is sold out.'],
              ['on sale / discount', 'sedang diskon', 'These books are on sale — 50% off!'],
              ['refund', 'pengembalian uang', 'Can I get a refund for this?'],
            ]},
            { cat: 'Transportasi & Arah', icon: '🚌', words: [
              ['How do I get to...?', 'Bagaimana caranya ke...?', 'Excuse me, how do I get to the library?'],
              ['It\'s within walking distance', 'Bisa jalan kaki', 'The café is within walking distance.'],
              ['Take the bus / subway', 'Naik bus / kereta bawah tanah', 'Take the subway to Central Station.'],
              ['turn left / right', 'belok kiri / kanan', 'Turn right at the traffic light.'],
              ['straight ahead', 'lurus ke depan', 'Go straight ahead for two blocks.'],
              ['across from', 'di seberang', 'The bookstore is across from the bank.'],
              ['commute', 'perjalanan harian (rumah-kampus)', 'My commute takes about 30 minutes.'],
              ['carpool', 'nebeng / berbagi kendaraan', 'We carpool to campus to save money.'],
              ['get off at', 'turun di', 'Get off at the third stop.'],
              ['running late', 'terlambat', 'Sorry, I\'m running late — be there in 10!'],
            ]},
            { cat: 'Telepon & Pesan', icon: '📱', words: [
              ['give (someone) a call', 'menelepon seseorang', 'Give me a call when you arrive.'],
              ['text / message', 'kirim pesan', 'Just text me the address.'],
              ['get back to (someone)', 'menghubungi kembali', 'I\'ll get back to you after the meeting.'],
              ['leave a message', 'tinggalkan pesan', 'He\'s not here. Can I leave a message?'],
              ['hang up', 'menutup telepon', 'Don\'t hang up — I need to tell you something.'],
              ['break up (signal)', 'sinyal putus-putus', 'You\'re breaking up, can you hear me?'],
              ['on the phone', 'sedang menelepon', 'She\'s on the phone right now.'],
              ['ASAP (as soon as possible)', 'sesegera mungkin', 'Please reply ASAP, it\'s urgent.'],
            ]},
            { cat: 'Cuaca & Waktu', icon: '🌤️', words: [
              ['What\'s the weather like?', 'Bagaimana cuacanya?', 'What\'s the weather like in your city?'],
              ['It\'s pouring / raining heavily', 'Hujan deras', 'Don\'t go out — it\'s pouring!'],
              ['chilly / freezing', 'dingin / sangat dingin', 'It\'s really chilly this morning.'],
              ['humid / muggy', 'lembap / pengap', 'It\'s so humid today, I can barely breathe.'],
              ['on time / in time', 'tepat waktu / masih sempat', 'The bus arrived on time for once.'],
              ['ahead of schedule', 'lebih cepat dari jadwal', 'We finished the project ahead of schedule.'],
              ['behind schedule', 'terlambat dari jadwal', 'The construction is behind schedule.'],
              ['sooner or later', 'cepat atau lambat', 'You\'ll have to face it sooner or later.'],
            ]},
          ].map(({ cat, icon, words }) => (
            <div key={cat} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-blue-50 px-4 py-2 flex items-center gap-2 border-b border-blue-100">
                <span>{icon}</span>
                <span className="text-xs font-bold text-blue-900">{cat}</span>
              </div>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <tbody>
                      {words.map(([phrase, meaning, example], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="px-2 py-1.5 font-bold text-blue-700 whitespace-nowrap border-b border-gray-50">{phrase}</td>
                          <td className="px-2 py-1.5 text-gray-700 border-b border-gray-50">{meaning}</td>
                          <td className="px-2 py-1.5 text-gray-400 italic border-b border-gray-50">{example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Campus & Classroom Vocabulary ── */}
        <p className="text-sm font-bold text-gray-900 mt-6 mb-2 flex items-center gap-2">
          <span className="w-7 h-7 bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs">🎓</span>
          Percakapan di Lingkungan Kampus (Campus Talk)
        </p>
        <p className="text-xs text-gray-500 mb-3">Kata-kata yang biasa digunakan di ruang kuliah, diskusi kelas, konsultasi dosen, dan kehidupan kampus S2.</p>

        <div className="space-y-2 my-3">
          {[
            { cat: 'Di Ruang Kuliah', icon: '📚', words: [
              ['take notes', 'mencatat', 'Make sure to take notes during the lecture.'],
              ['pay attention', 'memperhatikan', 'Please pay attention to this important concept.'],
              ['raise a question', 'mengajukan pertanyaan', 'I\'d like to raise a question about the methodology.'],
              ['hand in / submit', 'mengumpulkan (tugas)', 'Please hand in your assignments by Friday.'],
              ['drop a course', 'membatalkan mata kuliah', 'I had to drop the course because of schedule conflicts.'],
              ['audit a class', 'mengikuti kelas tanpa kredit', 'You can audit the class if you\'re interested.'],
              ['make up (a class/exam)', 'mengganti (kelas/ujian)', 'Can I make up the exam I missed?'],
              ['fall behind', 'tertinggal', 'Don\'t fall behind on the readings.'],
              ['catch up on', 'mengejar ketertinggalan', 'I need to catch up on last week\'s lectures.'],
              ['attendance / roll call', 'kehadiran / absen', 'Attendance counts for 10% of your grade.'],
              ['syllabus', 'silabus / rencana kuliah', 'Check the syllabus for the reading list.'],
              ['assignment / homework', 'tugas', 'The assignment is due next Monday.'],
              ['midterm / final exam', 'ujian tengah / akhir semester', 'The midterm covers chapters 1 through 6.'],
              ['pop quiz', 'kuis mendadak', 'The professor gave us a pop quiz today!'],
              ['grade / mark / score', 'nilai', 'What grade did you get on the paper?'],
              ['extra credit', 'nilai tambahan', 'You can do extra credit to boost your grade.'],
              ['elective / required course', 'pilihan / wajib', 'I\'m taking two electives this semester.'],
              ['lecture / seminar / tutorial', 'kuliah / seminar / tutorial', 'We have a two-hour lecture on Tuesdays.'],
            ]},
            { cat: 'Diskusi & Presentasi', icon: '🗣️', words: [
              ['I\'d like to add to that', 'Saya ingin menambahkan', 'Great point. I\'d like to add to that...'],
              ['That\'s a valid point', 'Itu poin yang valid', 'That\'s a valid point, but I think...'],
              ['Could you elaborate?', 'Bisa jelaskan lebih lanjut?', 'Interesting idea. Could you elaborate on that?'],
              ['To sum up / In summary', 'Untuk merangkum', 'To sum up, our findings suggest...'],
              ['In my view / opinion', 'Menurut pendapat saya', 'In my view, this approach is more effective.'],
              ['Let me clarify', 'Izinkan saya memperjelas', 'Let me clarify what I meant by that.'],
              ['build on (an idea)', 'mengembangkan (ide)', 'I want to build on what she just said.'],
              ['back up (a claim)', 'mendukung (argumen)', 'Can you back up that claim with evidence?'],
              ['raise a concern', 'menyampaikan kekhawatiran', 'I\'d like to raise a concern about the timeline.'],
              ['agree to disagree', 'sepakat untuk tidak sepakat', 'Let\'s just agree to disagree on this one.'],
              ['play devil\'s advocate', 'sengaja mengambil posisi lawan', 'Let me play devil\'s advocate here...'],
              ['That brings up a good point', 'Itu memunculkan poin bagus', 'That brings up a good point about ethics.'],
              ['go off on a tangent', 'menyimpang dari topik', 'Sorry, I went off on a tangent. Back to the topic...'],
              ['break it down', 'menjelaskan secara rinci', 'Can you break it down step by step?'],
              ['wrap up', 'menutup / mengakhiri', 'Let\'s wrap up the discussion here.'],
              ['take turns', 'bergiliran', 'Let\'s take turns presenting our findings.'],
            ]},
            { cat: 'Konsultasi dengan Dosen', icon: '👨‍🏫', words: [
              ['office hours', 'jam konsultasi dosen', 'I\'ll visit during office hours to discuss my thesis.'],
              ['advisor / supervisor', 'dosen pembimbing', 'Have you talked to your advisor about your topic?'],
              ['feedback', 'umpan balik / masukan', 'Could I get your feedback on my draft?'],
              ['deadline extension', 'perpanjangan batas waktu', 'May I request a deadline extension?'],
              ['go over', 'membahas / meninjau', 'Let\'s go over the results together.'],
              ['touch base', 'menghubungi singkat', 'I\'ll touch base with my professor next week.'],
              ['revise / revision', 'merevisi / revisi', 'I need to revise my literature review.'],
              ['outline', 'kerangka / garis besar', 'Please submit an outline before the full draft.'],
              ['proofread', 'mengoreksi / memeriksa tulisan', 'Could you proofread my abstract?'],
              ['draft / first draft', 'draf / draf pertama', 'Submit your first draft by next week.'],
              ['make an appointment', 'membuat janji', 'I\'d like to make an appointment with Prof. Lee.'],
              ['recommendation letter', 'surat rekomendasi', 'Could you write a recommendation letter for me?'],
              ['I was wondering if...', 'Saya ingin bertanya apakah...', 'I was wondering if I could change my topic?'],
              ['follow up on', 'menindaklanjuti', 'I\'m following up on our conversation last week.'],
            ]},
            { cat: 'Kehidupan Kampus S2', icon: '🏫', words: [
              ['scholarship / fellowship', 'beasiswa', 'She received a full scholarship for her master\'s.'],
              ['thesis / dissertation', 'tesis / disertasi', 'I\'m working on my thesis proposal.'],
              ['peer review', 'telaah sejawat', 'Your paper will go through a peer review process.'],
              ['GPA (Grade Point Average)', 'IPK', 'You need a minimum GPA of 3.5 to graduate.'],
              ['prerequisite', 'prasyarat', 'Statistics is a prerequisite for this course.'],
              ['curriculum vitae (CV)', 'riwayat hidup akademik', 'Update your CV before applying.'],
              ['symposium / colloquium', 'seminar akademik', 'I\'m presenting at a symposium next month.'],
              ['peer / cohort', 'rekan sesama / angkatan', 'My cohort is very supportive and collaborative.'],
              ['dean / department head', 'dekan / ketua jurusan', 'The dean announced new policies today.'],
              ['registrar\'s office', 'bagian administrasi akademik', 'Go to the registrar\'s office for your transcript.'],
              ['transcript', 'transkrip nilai', 'I need an official transcript for my application.'],
              ['credits / credit hours', 'SKS', 'This course is worth 3 credits.'],
              ['academic probation', 'masa percobaan akademik', 'Students with low GPA may be put on academic probation.'],
              ['commencement / graduation', 'wisuda', 'Commencement is scheduled for June 15th.'],
              ['teaching assistant (TA)', 'asisten dosen', 'The TA will lead the discussion section.'],
              ['research assistant (RA)', 'asisten peneliti', 'I\'m working as an RA in the biology lab.'],
            ]},
            { cat: 'Penulisan Akademik', icon: '✍️', words: [
              ['abstract', 'abstrak / ringkasan', 'Write a 200-word abstract for your paper.'],
              ['literature review', 'tinjauan pustaka', 'The literature review covers recent studies.'],
              ['methodology', 'metodologi', 'Explain your methodology in detail.'],
              ['findings / results', 'temuan / hasil', 'Our findings support the hypothesis.'],
              ['cite / citation', 'mengutip / kutipan', 'Make sure to cite your sources properly.'],
              ['bibliography / references', 'daftar pustaka', 'Add all references to the bibliography.'],
              ['plagiarism', 'plagiarisme / menjiplak', 'Plagiarism can lead to expulsion.'],
              ['paraphrase', 'memparafrase', 'Paraphrase the original text in your own words.'],
              ['peer-reviewed journal', 'jurnal terakreditasi', 'Only use peer-reviewed journal articles.'],
              ['hypothesis', 'hipotesis', 'State your hypothesis clearly.'],
              ['variable (independent/dependent)', 'variabel (bebas/terikat)', 'Identify the independent variable in your study.'],
              ['conclusion', 'kesimpulan', 'Summarize your key findings in the conclusion.'],
              ['appendix', 'lampiran', 'The raw data is in the appendix.'],
              ['footnote / endnote', 'catatan kaki', 'Add a footnote to explain this term.'],
            ]},
            { cat: 'Perpustakaan & Riset', icon: '📖', words: [
              ['check out (a book)', 'meminjam (buku)', 'I checked out three books from the library.'],
              ['due date / overdue', 'tanggal jatuh tempo / terlambat', 'The book is overdue — you\'ll have to pay a fine.'],
              ['renew', 'memperpanjang pinjaman', 'Can I renew this book for another week?'],
              ['database', 'basis data', 'Search the database for relevant articles.'],
              ['keyword search', 'pencarian kata kunci', 'Try a keyword search using different terms.'],
              ['primary source', 'sumber primer', 'Use primary sources for your historical analysis.'],
              ['secondary source', 'sumber sekunder', 'Secondary sources provide analysis of primary data.'],
              ['interlibrary loan', 'peminjaman antar perpustakaan', 'Request it through interlibrary loan.'],
              ['reference desk', 'meja referensi', 'Ask at the reference desk for help finding articles.'],
              ['stacks / shelves', 'rak buku', 'The book should be in the stacks on the third floor.'],
            ]},
          ].map(({ cat, icon, words }) => (
            <div key={cat} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-purple-50 px-4 py-2 flex items-center gap-2 border-b border-purple-100">
                <span>{icon}</span>
                <span className="text-xs font-bold text-purple-900">{cat}</span>
              </div>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <tbody>
                      {words.map(([phrase, meaning, example], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="px-2 py-1.5 font-bold text-purple-700 whitespace-nowrap border-b border-gray-50">{phrase}</td>
                          <td className="px-2 py-1.5 text-gray-700 border-b border-gray-50">{meaning}</td>
                          <td className="px-2 py-1.5 text-gray-400 italic border-b border-gray-50">{example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Useful Phrases ── */}
        <p className="text-sm font-bold text-gray-900 mt-6 mb-2 flex items-center gap-2">
          <span className="w-7 h-7 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-xs">✨</span>
          Frasa Berguna untuk Berbagai Situasi
        </p>

        <TabCard color="emerald" tabs={[
          { label: '☕ Small Talk', content: (
            <div className="space-y-1.5 text-xs">
              {[
                ['Nice weather today, isn\'t it?', 'Cuacanya bagus hari ini, ya?'],
                ['Have you been to the new café near campus?', 'Sudah pernah ke kafe baru dekat kampus?'],
                ['What are you up to this weekend?', 'Ada rencana apa akhir pekan ini?'],
                ['I heard the professor is really strict.', 'Kudengar dosennya ketat banget.'],
                ['Are you taking any electives this semester?', 'Kamu ambil mata kuliah pilihan semester ini?'],
                ['How do you like the program so far?', 'Gimana menurutmu program ini sejauh ini?'],
                ['Where are you from originally?', 'Asalnya dari mana?'],
                ['What brought you to this program?', 'Apa yang membuatmu ambil program ini?'],
                ['Have you started working on your thesis yet?', 'Sudah mulai kerjakan tesis?'],
                ['This campus is huge — I keep getting lost!', 'Kampusnya besar — saya sering tersesat!'],
              ].map(([en, id], i) => (
                <div key={i} className="flex gap-2 py-1 border-b border-gray-100 last:border-0">
                  <span className="text-emerald-700 font-medium flex-1">{en}</span>
                  <span className="text-gray-400 flex-1">{id}</span>
                </div>
              ))}
            </div>
          )},
          { label: '🙋 Asking in Class', content: (
            <div className="space-y-1.5 text-xs">
              {[
                ['Excuse me, could you repeat that?', 'Maaf, bisa diulangi?'],
                ['I\'m sorry, I didn\'t quite catch that.', 'Maaf, saya kurang dengar tadi.'],
                ['Could you explain that in simpler terms?', 'Bisa dijelaskan lebih sederhana?'],
                ['What exactly do you mean by...?', 'Apa tepatnya yang dimaksud dengan...?'],
                ['How does this relate to what we discussed last week?', 'Bagaimana ini berhubungan dengan diskusi minggu lalu?'],
                ['Is this going to be on the exam?', 'Apakah ini akan keluar di ujian?'],
                ['Could you give us an example?', 'Bisa berikan contoh?'],
                ['I have a follow-up question...', 'Saya punya pertanyaan lanjutan...'],
                ['Just to clarify, do you mean that...?', 'Untuk klarifikasi, maksudnya apakah...?'],
                ['What are the key takeaways from today?', 'Apa poin-poin utama hari ini?'],
              ].map(([en, id], i) => (
                <div key={i} className="flex gap-2 py-1 border-b border-gray-100 last:border-0">
                  <span className="text-emerald-700 font-medium flex-1">{en}</span>
                  <span className="text-gray-400 flex-1">{id}</span>
                </div>
              ))}
            </div>
          )},
          { label: '📧 Email ke Dosen', content: (
            <div className="space-y-1.5 text-xs">
              {[
                ['Dear Professor [Name],', 'Kepada Profesor [Nama],'],
                ['I hope this email finds you well.', 'Semoga email ini sampai dalam keadaan baik.'],
                ['I am writing to inquire about...', 'Saya menulis untuk menanyakan tentang...'],
                ['I would appreciate your guidance on...', 'Saya sangat mengharapkan bimbingan Anda terkait...'],
                ['Would it be possible to schedule a meeting?', 'Apakah mungkin untuk menjadwalkan pertemuan?'],
                ['I apologize for the late submission.', 'Saya mohon maaf atas keterlambatan pengumpulan.'],
                ['Please find attached my draft/assignment.', 'Terlampir draf/tugas saya.'],
                ['I look forward to hearing from you.', 'Saya menantikan balasan Anda.'],
                ['Thank you for your time and consideration.', 'Terima kasih atas waktu dan pertimbangannya.'],
                ['Best regards, / Sincerely,', 'Salam hormat,'],
              ].map(([en, id], i) => (
                <div key={i} className="flex gap-2 py-1 border-b border-gray-100 last:border-0">
                  <span className="text-emerald-700 font-medium flex-1">{en}</span>
                  <span className="text-gray-400 flex-1">{id}</span>
                </div>
              ))}
            </div>
          )},
          { label: '🤝 Kerja Kelompok', content: (
            <div className="space-y-1.5 text-xs">
              {[
                ['Let\'s divide the work.', 'Ayo bagi tugasnya.'],
                ['Who wants to take the lead on this?', 'Siapa yang mau jadi penanggung jawab ini?'],
                ['I\'ll handle the data analysis part.', 'Saya yang urus bagian analisis data.'],
                ['When is our next meeting?', 'Kapan pertemuan kita selanjutnya?'],
                ['Can we set a deadline for each section?', 'Bisa kita buat deadline per bagian?'],
                ['Let me share my screen.', 'Izinkan saya share layar.'],
                ['Does anyone have questions or concerns?', 'Ada yang punya pertanyaan atau kekhawatiran?'],
                ['Let\'s brainstorm some ideas first.', 'Ayo brainstorming ide dulu.'],
                ['Can someone take minutes?', 'Ada yang bisa mencatat notulensi?'],
                ['I think we\'re on the right track.', 'Menurut saya kita sudah di jalur yang benar.'],
                ['Let\'s stay focused on the main topic.', 'Mari tetap fokus pada topik utama.'],
                ['Should we schedule a follow-up meeting?', 'Perlu jadwalkan pertemuan lanjutan?'],
              ].map(([en, id], i) => (
                <div key={i} className="flex gap-2 py-1 border-b border-gray-100 last:border-0">
                  <span className="text-emerald-700 font-medium flex-1">{en}</span>
                  <span className="text-gray-400 flex-1">{id}</span>
                </div>
              ))}
            </div>
          )},
          { label: '🎤 Presentasi', content: (
            <div className="space-y-1.5 text-xs">
              {[
                ['Good morning, today I\'ll be presenting...', 'Selamat pagi, hari ini saya akan mempresentasikan...'],
                ['Let me start by giving an overview.', 'Izinkan saya mulai dengan gambaran umum.'],
                ['As you can see from this chart...', 'Seperti yang bisa dilihat dari grafik ini...'],
                ['Moving on to the next point...', 'Beralih ke poin berikutnya...'],
                ['I\'d like to draw your attention to...', 'Saya ingin menarik perhatian Anda ke...'],
                ['This graph illustrates that...', 'Grafik ini menggambarkan bahwa...'],
                ['To conclude, our research shows...', 'Sebagai penutup, penelitian kami menunjukkan...'],
                ['Are there any questions?', 'Ada pertanyaan?'],
                ['That\'s a great question. Let me address that.', 'Pertanyaan bagus. Izinkan saya menjawab.'],
                ['Thank you for your attention.', 'Terima kasih atas perhatiannya.'],
              ].map(([en, id], i) => (
                <div key={i} className="flex gap-2 py-1 border-b border-gray-100 last:border-0">
                  <span className="text-emerald-700 font-medium flex-1">{en}</span>
                  <span className="text-gray-400 flex-1">{id}</span>
                </div>
              ))}
            </div>
          )},
        ]} />

        <TipBox type="tip">
          <strong>Tips percakapan natural:</strong> Jangan terlalu formal di situasi santai. Gunakan phrasal verbs (hang out, figure out, catch up) saat bicara dengan teman. Saat di kelas atau email ke dosen, gunakan bahasa yang lebih formal (I would like to, Could you please, I would appreciate).
        </TipBox>

        <MiniQuiz color="blue"
          question="Mana ungkapan yang PALING TEPAT saat ingin bertanya di kelas?"
          options={['Hey, what does that mean?', 'Could you elaborate on that point, please?', 'I don\'t get it, explain again.', 'Huh? Say that again.']}
          correctIndex={1}
          explanation="Di kelas (situasi semi-formal), gunakan bahasa sopan: 'Could you elaborate...' lebih tepat daripada 'Hey' atau 'Huh?' yang terlalu kasual."
        />

        <MiniQuiz color="purple"
          question="'I need to ___ my thesis outline before meeting my advisor.' Pilih phrasal verb yang tepat:"
          options={['go over', 'hang out', 'sleep in', 'catch up']}
          correctIndex={0}
          explanation="'Go over' = meninjau/membahas kembali. Cocok untuk konteks akademik. 'Hang out' = nongkrong, 'sleep in' = bangun siang, 'catch up' = mengobrol setelah lama."
        />

        <MatchGame color="blue" pairs={[
          { left: 'grab a bite', right: 'makan sebentar' },
          { left: 'office hours', right: 'jam konsultasi dosen' },
          { left: 'fall behind', right: 'tertinggal' },
          { left: 'peer review', right: 'telaah sejawat' },
          { left: 'figure out', right: 'mencari tahu' },
        ]} />

        <RevealBox color="purple"
          question="Apa perbedaan 'thesis' dan 'dissertation'?"
          answer="Di sistem Amerika: Thesis = untuk S2 (Master's), Dissertation = untuk S3 (Doctoral). Di sistem British: sebaliknya! Thesis = S3, Dissertation = S2. Dalam TOEFL, keduanya merujuk pada karya tulis ilmiah akhir."
        />

        <RevealBox color="emerald"
          question="Bagaimana memulai small talk dengan mahasiswa baru di kampus?"
          answer={<span>Mulai dengan topik yang <strong>relatable</strong>: <br/>• <em>"Hi, are you new to the program too?"</em> <br/>• <em>"Which lab/department are you in?"</em> <br/>• <em>"How are you finding the city so far?"</em> <br/>Hindari topik sensitif (politik, agama, gaji). Topik aman: cuaca, kelas, kampus, makanan, hobi.</span>}
        />

        <QuizBank questions={englishSectionQuiz.vocabulary[5]} color="purple" />
      </>,
    },
  ],

  // ── 4. STRUCTURE ───────────────────────────────────────────────────────────
  structure: [
    {
      title: 'Subject-Verb Agreement',
      body: <>
        <TipBox type="info">
          <strong>Scope Ujian Masuk S2 (TOEFL Structure):</strong> Written Expression & Structure menguji pemahaman tata bahasa formal. Fokus pada subject-verb agreement, parallel structure, inversions, subjunctive, dan dangling modifiers. Bagian ini paling mudah meningkatkan skor jika dikuasai — targetkan benar 80%+.
        </TipBox>
        <p className="text-sm text-gray-700 mb-4">
          Kesesuaian antara subjek dan predikat — salah satu sumber kesalahan terbanyak.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-4">
            <p className="font-bold text-emerald-900 text-sm mb-3">Subjek Tunggal → V + s/es</p>
            <div className="space-y-2 text-sm">
              <SentenceDiagram sentence="" parts={[{ word: 'She', type: 'S' }, { word: 'studies', type: 'V' }, { word: 'every day.', type: 'O' }]} />
            </div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
            <p className="font-bold text-blue-900 text-sm mb-3">Subjek Jamak → V1 (tanpa s)</p>
            <div className="space-y-2 text-sm">
              <SentenceDiagram sentence="" parts={[{ word: 'They', type: 'S' }, { word: 'study', type: 'V' }, { word: 'every day.', type: 'O' }]} />
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3">Aturan Khusus yang Sering Diujikan:</p>
        <div className="space-y-2">
          {[
            { rule: 'Neither...nor / Either...or', note: 'Verb mengikuti subjek TERDEKAT', correct: 'Neither the teacher nor the students were present.', wrong: '✗ Neither the teacher nor the students was present.', color: 'blue' },
            { rule: 'Each / Everyone / Someone / Nobody', note: 'Selalu singular', correct: 'Everyone is invited. ✓', wrong: '✗ Everyone are invited.', color: 'emerald' },
            { rule: 'Collective Noun', note: 'American: singular | British: bisa plural', correct: 'The committee has decided. (AmE)', wrong: 'The committee have decided. (BrE)', color: 'violet' },
          ].map(({ rule, note, correct, wrong, color }) => {
            const bg = { blue: 'bg-blue-50 border-blue-200', emerald: 'bg-emerald-50 border-emerald-200', violet: 'bg-violet-50 border-violet-200' }[color]
            const txt = { blue: 'text-blue-900', emerald: 'text-emerald-900', violet: 'text-violet-900' }[color]
            return (
              <div key={rule} className={`border rounded-xl p-3 ${bg}`}>
                <p className={`font-bold text-xs mb-1 ${txt}`}>{rule}</p>
                <p className="text-[10px] text-gray-500 mb-2">{note}</p>
                <p className="text-xs text-emerald-700 font-mono">✅ {correct}</p>
                <p className="text-xs text-rose-600 font-mono">{wrong}</p>
              </div>
            )
          })}
        </div>
        <MiniQuiz color="emerald"
          question="Pilih verb yang tepat: 'The number of students in this class _____ increasing every year.'"
          options={['are', 'is', 'were', 'have been']}
          correctIndex={1}
          explanation="'The number of...' = subjek tunggal → 'is'. Berbeda dengan 'A number of students ARE...' (= banyak, plural). Ini jebakan klasik TOEFL!"
        />
        <RevealBox color="blue"
          question="Apa perbedaan 'The number of' vs 'A number of'?"
          answer="'The number of students IS 50' → singular (jumlahnya). 'A number of students ARE absent' → plural (banyak siswa). Kata kunci: THE number = singular, A number = plural."
        />
        <QuizBank questions={englishSectionQuiz.structure[0]} color="rose" />
      </>,
    },
    {
      title: 'Inversion & TOEFL Structure',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Inversion terjadi ketika urutan S-V dibalik, biasanya setelah ekspresi negatif di awal kalimat.
        </p>
        <FormulaCard color="blue">
          <p><strong>Normal:</strong> She had hardly arrived.</p>
          <p className="mt-1"><strong>Inversion:</strong> Hardly had she arrived...</p>
          <p className="text-xs text-blue-700 mt-1">↑ Auxiliary (had) berpindah ke depan subjek</p>
        </FormulaCard>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-3 py-2.5 font-bold text-blue-900 border-b-2 border-blue-200">Ekspresi Negatif</th>
                <th className="text-left px-3 py-2.5 font-bold text-blue-900 border-b-2 border-blue-200">Contoh Kalimat</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Hardly', 'Hardly had he left when it rained.'],
                ['Never', 'Never have I seen such beauty.'],
                ['Seldom', 'Seldom does she arrive late.'],
                ['No sooner...than', 'No sooner had I sat down than the phone rang.'],
                ['Not only...but also', 'Not only did she win, but she also broke the record.'],
              ].map(([ex, sent], i) => (
                <tr key={ex} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                  <td className="px-3 py-2 font-bold text-blue-700 border-b border-gray-100 text-xs">{ex}</td>
                  <td className="px-3 py-2 text-gray-600 text-xs italic border-b border-gray-100">{sent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm font-semibold text-gray-800 mt-4 mb-3">Contoh Soal TOEFL Structure:</p>
        <div className="space-y-3">
          {[
            { q: 'Hardly ____ arrived when the meeting started.', opts: ['he had', 'had he', 'he has', 'has he'], ans: 1, explanation: 'Inversion setelah "Hardly" → auxiliary (had) di depan subjek (he).' },
            { q: '____ studying hard, she failed the exam.', opts: ['Although', 'Despite', 'However', 'Because'], ans: 1, explanation: '"Despite" diikuti noun/gerund phrase (studying hard), bukan klausa.' },
            { q: 'He suggested that she ____ harder.', opts: ['studies', 'studying', 'study', 'to study'], ans: 2, explanation: 'Setelah "suggest" + that → subjunctive: V1 tanpa s (study).' },
          ].map(({ q, opts, ans, explanation }, qi) => (
            <div key={qi} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-800 mb-3">Soal {qi + 1}: {q}</p>
              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {opts.map((o, oi) => (
                  <span key={oi} className={`text-xs px-3 py-1.5 rounded-lg font-mono ${oi === ans ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-gray-100 text-gray-600'}`}>
                    {String.fromCharCode(97 + oi)}. {o} {oi === ans ? '✓' : ''}
                  </span>
                ))}
              </div>
              <p className="text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2">💡 {explanation}</p>
            </div>
          ))}
        </div>
        <MiniQuiz color="blue"
          question="Lengkapi: 'Never _____ such a beautiful sunset.'"
          options={['I have seen', 'have I seen', 'I seen', 'I did see']}
          correctIndex={1}
          explanation="Setelah 'Never' di awal kalimat → INVERSION wajib. Auxiliary (have) pindah ke depan subjek (I). Never + have I seen."
        />
        <AccordionList color="blue" items={[
          { title: 'Kapan inversion terjadi?', content: 'Inversion terjadi saat ekspresi negatif ditempatkan di AWAL kalimat: Never, Hardly, Seldom, No sooner, Not only, Rarely, Little, Only after/when/by.' },
          { title: 'Bagaimana cara membentuk inversion?', content: 'Pindahkan auxiliary verb (has, have, had, do, does, did, will, can, dll.) ke DEPAN subjek. Contoh: Normal: She has never seen → Inversion: Never has she seen.' },
          { title: 'Apakah semua kalimat negatif harus di-invert?', content: 'TIDAK. Inversion hanya terjadi jika ekspresi negatif ada di AWAL kalimat. "She has never seen it" (normal, tidak di awal) vs "Never has she seen it" (inversion, di awal).' },
        ]} />
        <QuizBank questions={englishSectionQuiz.structure[1]} color="rose" />
      </>,
    },
    {
      title: 'Subjunctive & Error Recognition',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Subjunctive digunakan setelah kata kerja yang menyatakan saran, permintaan, atau keharusan.
        </p>
        <FormulaCard color="emerald">
          <p><strong>Formula:</strong>  Verb of suggestion + that + S + <u>V1</u> (tanpa s, tanpa to be)</p>
          <p className="text-emerald-700 text-xs mt-1">Verbs: suggest, recommend, insist, demand, require, request, propose</p>
        </FormulaCard>
        <div className="space-y-2 my-3">
          {[
            { correct: 'He suggested that she study harder.', wrong: 'He suggested that she studies harder.', note: '"Studies" harus jadi "study" (subjunctive)' },
            { correct: 'The committee requires that each applicant submit a portfolio.', wrong: 'The committee requires that each applicant submits a portfolio.', note: '"Submits" harus jadi "submit"' },
            { correct: 'She insisted that he be present.', wrong: 'She insisted that he is present.', note: '"Is" harus jadi "be" (subjunctive to be)' },
          ].map(({ correct, wrong, note }) => (
            <div key={correct} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <p className="text-xs text-emerald-700 font-mono">✅ {correct}</p>
              <p className="text-xs text-rose-600 font-mono">❌ {wrong}</p>
              <p className="text-[10px] text-gray-400 mt-1">Penjelasan: {note}</p>
            </div>
          ))}
        </div>
        <TipBox type="warning">
          <strong>Kesalahan umum Error Recognition:</strong>
          <ul className="mt-1 space-y-0.5 text-xs">
            <li>• Subject-verb agreement (each, everyone → singular)</li>
            <li>• Penggunaan article (a, an, the)</li>
            <li>• Paralelisme (parallel structure)</li>
            <li>• Who vs whom (subjek vs objek)</li>
            <li>• Dangling modifier</li>
          </ul>
        </TipBox>
        <MiniQuiz color="emerald"
          question="Pilih yang benar: 'The doctor recommended that she _____ more water.'"
          options={['drinks', 'drink', 'drinking', 'drank']}
          correctIndex={1}
          explanation="Setelah 'recommend/suggest/insist + that' → SUBJUNCTIVE: gunakan V1 tanpa s. 'Drink' (bukan 'drinks'). Ini berlaku untuk semua subjek!"
        />
        <RevealBox color="blue"
          question="Temukan kesalahan: 'Running down the street, the rain started to fall heavily.'"
          answer={<span>Ini <strong>Dangling Modifier</strong>! "Running down the street" seolah-olah menjelaskan "the rain" (hujan berlari?). <br/>Perbaikan: <strong>"Running down the street, I noticed the rain started to fall heavily."</strong> <br/>Modifier harus jelas merujuk ke subjek kalimat.</span>}
        />
        <QuizBank questions={englishSectionQuiz.structure[2]} color="rose" />
      </>,
    },
    {
      title: 'Parallel Structure',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Parallel structure berarti elemen-elemen yang setara dalam kalimat harus memiliki <strong>bentuk grammar yang sama</strong>.
          Ini salah satu topik paling sering di TOEFL Written Expression.
        </p>
        <FormulaCard color="blue">
          <div className="space-y-2">
            <p><strong>Prinsip:</strong> Jika A, B, dan C sejajar → harus bentuk sama</p>
            <p className="text-xs text-blue-700">Noun + Noun + Noun | V-ing + V-ing + V-ing | to V + to V + to V</p>
          </div>
        </FormulaCard>
        <div className="space-y-2 my-4">
          {[
            { wrong: 'She likes reading, to swim, and cook.', correct: 'She likes reading, swimming, and cooking.', note: 'Semua V-ing (gerund)' },
            { wrong: 'The study was comprehensive, detailed, and has accuracy.', correct: 'The study was comprehensive, detailed, and accurate.', note: 'Semua adjective' },
            { wrong: 'Students should not only study hard but also having good rest.', correct: 'Students should not only study hard but also have good rest.', note: 'Not only...but also → V1 + V1' },
            { wrong: 'The professor is famous for his research, teaching, and because he publishes a lot.', correct: 'The professor is famous for his research, teaching, and publications.', note: 'Semua noun setelah preposisi "for"' },
          ].map(({ wrong, correct, note }, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <p className="text-xs text-rose-600 font-mono">❌ {wrong}</p>
              <p className="text-xs text-emerald-700 font-mono mt-1">✅ {correct}</p>
              <p className="text-[10px] text-gray-400 mt-1">{note}</p>
            </div>
          ))}
        </div>
        <TipBox type="tip">
          <strong>Kata penghubung pemicu parallelism:</strong> and, or, but, not only...but also, either...or, neither...nor, both...and, whether...or. Setiap kali melihat kata-kata ini, cek apakah elemen di kiri dan kanan memiliki bentuk yang sama.
        </TipBox>
        <MiniQuiz color="blue"
          question="Temukan kesalahan: 'The researcher is known for conducting experiments, analyzing data, and she publishes papers.'"
          options={[
            'conducting → to conduct',
            'analyzing → to analyze',
            'she publishes papers → publishing papers',
            'Tidak ada kesalahan',
          ]}
          correctIndex={2}
          explanation="Setelah 'for' + gerund series: conducting, analyzing, dan... → harus 'publishing' (bukan 'she publishes'). Semua elemen parallel harus bentuk yang sama (V-ing)."
        />
        <RevealBox color="emerald"
          question="Perbaiki: 'The manager plans to hire new staff, training them, and evaluating their performance.'"
          answer={<span>Setelah 'plans to' → semua harus infinitive (to V1): <br/><strong>"The manager plans to hire new staff, train them, and evaluate their performance."</strong> <br/>Atau semua gerund: "The manager plans on hiring, training, and evaluating..." <br/>Kunci: pilih satu bentuk, konsisten!</span>}
        />
        <QuizBank questions={englishSectionQuiz.structure[3]} color="rose" />
      </>,
    },
    {
      title: 'Comparatives & Superlatives',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Perbandingan dalam bahasa Inggris sering diuji di TOEFL Structure dan Written Expression.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                <th className="text-left px-3 py-2.5 font-bold text-emerald-900 border-b-2 border-emerald-200">Tipe</th>
                <th className="text-left px-3 py-2.5 font-bold text-emerald-900 border-b-2 border-emerald-200">Formula</th>
                <th className="text-left px-3 py-2.5 font-bold text-emerald-900 border-b-2 border-emerald-200">Contoh</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 suku kata', '-er / -est', 'tall → taller → tallest'],
                ['2+ suku kata', 'more / most', 'beautiful → more beautiful → most beautiful'],
                ['Irregular', 'berubah total', 'good → better → best | bad → worse → worst'],
                ['as...as', 'sama dengan', 'She is as tall as her brother.'],
                ['less...than', 'kurang dari', 'This is less expensive than that.'],
                ['the more...the more', 'semakin...semakin', 'The more you practice, the better you get.'],
              ].map(([type, formula, ex], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'}>
                  <td className="px-3 py-2 font-semibold text-gray-800 border-b border-gray-100">{type}</td>
                  <td className="px-3 py-2 font-mono text-emerald-700 border-b border-gray-100">{formula}</td>
                  <td className="px-3 py-2 text-gray-500 italic border-b border-gray-100">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3">Kesalahan Umum TOEFL:</p>
        <div className="space-y-2 my-3">
          {[
            { wrong: 'She is more taller than him.', correct: 'She is taller than him.', note: 'Jangan double comparative (more + -er)' },
            { wrong: 'This is the most best option.', correct: 'This is the best option.', note: 'Jangan double superlative (most + -est/best)' },
            { wrong: 'He runs more faster than me.', correct: 'He runs faster than me.', note: 'Fast = 1 suku kata → faster, bukan more faster' },
            { wrong: 'My score is as high than yours.', correct: 'My score is as high as yours.', note: 'as...as (bukan as...than)' },
          ].map(({ wrong, correct, note }, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <p className="text-xs text-rose-600 font-mono">❌ {wrong}</p>
              <p className="text-xs text-emerald-700 font-mono mt-1">✅ {correct}</p>
              <p className="text-[10px] text-gray-400 mt-1">{note}</p>
            </div>
          ))}
        </div>
        <TipBox type="tip">
          <strong>Double comparative trap:</strong> TOEFL sering menyisipkan "more" di depan kata yang sudah -er (more better, more easier). Ini SELALU salah. Pilih salah satu: "more" ATAU "-er", tidak keduanya.
        </TipBox>
        <MiniQuiz color="emerald"
          question="Pilih yang BENAR:"
          options={[
            'This problem is more easier than the last one.',
            'She is the most smartest student in class.',
            'The more you study, the better you perform.',
            'He runs more faster than his brother.',
          ]}
          correctIndex={2}
          explanation="'The more...the better' adalah pola comparative yang benar. Opsi lain salah karena double comparative: 'more easier' (cukup 'easier'), 'most smartest' (cukup 'smartest'), 'more faster' (cukup 'faster')."
        />
        <RevealBox color="blue"
          question="Kapan menggunakan 'less' vs 'fewer'?"
          answer={<span><strong>Fewer</strong> = untuk benda yang bisa dihitung (countable): fewer books, fewer students, fewer problems. <br/><strong>Less</strong> = untuk yang tidak bisa dihitung (uncountable): less water, less time, less information. <br/>Trik: "fewer" = bisa dihitung satu-satu, "less" = tidak bisa dihitung satu-satu.</span>}
        />
        <QuizBank questions={englishSectionQuiz.structure[4]} color="rose" />
      </>,
    },
    {
      title: 'Articles & Common TOEFL Errors',
      body: <>
        <p className="text-sm text-gray-700 mb-4">
          Penggunaan <strong>a, an, the</strong> dan kesalahan umum lainnya yang sering muncul di Written Expression.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 my-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="font-bold text-blue-900 text-xs mb-2">a / an</p>
            <p className="text-xs text-gray-600 mb-1">Untuk benda tak tentu (pertama kali disebut)</p>
            <p className="text-xs text-gray-500 italic">I saw <strong>a</strong> dog. She is <strong>an</strong> engineer.</p>
            <p className="text-[10px] text-blue-600 mt-1">an → sebelum bunyi vokal (an hour, an MBA)</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="font-bold text-emerald-900 text-xs mb-2">the</p>
            <p className="text-xs text-gray-600 mb-1">Untuk benda spesifik / sudah diketahui</p>
            <p className="text-xs text-gray-500 italic"><strong>The</strong> dog I saw was big. <strong>The</strong> sun rises in the east.</p>
            <p className="text-[10px] text-emerald-600 mt-1">Unik, sudah disebut, atau dimodifikasi</p>
          </div>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
            <p className="font-bold text-rose-900 text-xs mb-2">Tanpa Article (Ø)</p>
            <p className="text-xs text-gray-600 mb-1">Untuk konsep umum / uncountable</p>
            <p className="text-xs text-gray-500 italic"><strong>Ø</strong> Water is essential. <strong>Ø</strong> Education matters.</p>
            <p className="text-[10px] text-rose-600 mt-1">Nama negara, bahasa, olahraga (umum)</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3">Top 10 TOEFL Written Expression Errors:</p>
        <div className="space-y-1.5">
          {[
            'Subject-Verb Agreement: "Everyone have → has"',
            'Parallel Structure: "reading, writing, and to speak → reading, writing, and speaking"',
            'Word Form: "She speaks beautiful → beautifully"',
            'Double Negative: "She cannot hardly → She can hardly"',
            'Pronoun Reference: "The team submitted his → their report"',
            'Dangling Modifier: "Walking to school, the rain started → While I was walking..."',
            'Comparative: "more better → better"',
            'Article Misuse: "The happiness is → Happiness is (general)"',
            'Tense Consistency: "He went and buys → He went and bought"',
            'Preposition: "She is interested at → interested in"',
          ].map((err, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="w-5 h-5 bg-rose-600 text-white rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-gray-700">{err}</span>
            </div>
          ))}
        </div>
        <TipBox type="success">
          <strong>Strategi Error Recognition:</strong> Baca kalimat per bagian — identifikasi S-V-O dulu. Cek: (1) S-V agreement, (2) Tense, (3) Word form, (4) Parallelism, (5) Preposition. 80% soal ada di 5 kategori ini.
        </TipBox>
        <MiniQuiz color="rose"
          question="Temukan kesalahan: 'The happiness is essential for a healthy life.'"
          options={[
            'happiness → happy',
            'The happiness → Happiness (hapus article)',
            'is → are',
            'healthy → healthily',
          ]}
          correctIndex={1}
          explanation="'Happiness' di sini bermakna umum (konsep), jadi tidak butuh article 'the'. Gunakan article 'the' hanya untuk hal spesifik. General concept → tanpa article."
        />
        <TabCard color="blue" tabs={[
          { label: 'S-V Agreement', content: 'Cek: subjek singular → verb +s. Everyone IS, The number of IS, A number of ARE. Hati-hati prepositional phrase yang memisahkan S dan V.' },
          { label: 'Word Form', content: 'Cek posisi kata: setelah article/adj → NOUN, setelah verb → ADVERB, sebelum noun → ADJECTIVE. Suffix menentukan: -tion (N), -ly (Adv), -ful (Adj).' },
          { label: 'Parallelism', content: 'Setelah and/or/but/not only...but also → bentuk grammar harus SAMA. V-ing + V-ing + V-ing, bukan V-ing + to V + noun.' },
          { label: 'Preposition', content: 'Hafal: interested IN, depend ON, consist OF, contribute TO, result IN/FROM, responsible FOR. TOEFL sering mengganti preposisi yang benar.' },
        ]} />
        <QuizBank questions={englishSectionQuiz.structure[5]} color="rose" />
      </>,
    },
  ],
}
