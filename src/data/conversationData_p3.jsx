// ═══════════════════════════════════════════════════════════════
// Daily English Conversation Part 3 — Even More Scenarios
// ═══════════════════════════════════════════════════════════════
import {
  SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank,
  CulturalNote, PronunciationTip, ExpressionMeter
} from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scenes
// ═══════════════════════════════════════════════════════════════

function PostOfficeScene() {
  return (
    <SceneIllustration title="📦 Scene: At the Post Office" bg="from-yellow-50 to-amber-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="120" fill="#fffbeb"/>
        <rect x="200" y="5" width="100" height="20" rx="4" fill="#d97706"/>
        <text x="250" y="19" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">POST OFFICE</text>
        <rect x="120" y="70" width="260" height="35" rx="5" fill="#78350f"/>
        <rect x="120" y="70" width="260" height="6" rx="3" fill="#92400e"/>
        <rect x="380" y="50" width="30" height="20" rx="3" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
        <text x="395" y="63" textAnchor="middle" fill="#92400e" fontSize="6">STAMPS</text>
        <rect x="150" y="58" width="20" height="14" rx="2" fill="#d4a574"/>
        <rect x="180" y="55" width="25" height="18" rx="2" fill="#a3a3a3"/>
        <circle cx="350" cy="52" r="12" fill="#fbbf24"/>
        <rect x="340" y="64" width="20" height="14" rx="3" fill="#1e293b"/>
        <circle cx="170" cy="90" r="14" fill="#60a5fa"/>
        <rect x="158" y="104" width="24" height="16" rx="3" fill="#2563eb"/>
        <rect x="140" y="100" width="16" height="20" rx="3" fill="#d4a574" stroke="#92400e" strokeWidth="0.5"/>
        <rect x="0" y="120" width="500" height="60" fill="#fef3c7"/>
      </svg>
    </SceneIllustration>
  )
}

function PharmacyScene() {
  return (
    <SceneIllustration title="💊 Scene: At the Pharmacy" bg="from-green-50 to-emerald-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="120" fill="#f0fdf4"/>
        <rect x="180" y="5" width="140" height="22" rx="4" fill="#059669"/>
        <text x="250" y="20" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">💊 PHARMACY</text>
        {[50,130,210,290,370].map(x => (
          <g key={x}>
            <rect x={x} y="35" width="60" height="60" rx="3" fill="white" stroke="#d1fae5" strokeWidth="1"/>
            {[0,1,2].map(r => (
              <g key={r}><rect x={x+4+r*18} y={40} width="14" height="18" rx="2" fill={['#fca5a5','#93c5fd','#86efac'][r]}/></g>
            ))}
            {[0,1,2].map(r => (
              <g key={`b${r}`}><rect x={x+4+r*18} y={62} width="14" height="18" rx="2" fill={['#fde68a','#c4b5fd','#fdba74'][r]}/></g>
            ))}
          </g>
        ))}
        <rect x="150" y="95" width="200" height="20" rx="4" fill="#44403c"/>
        <circle cx="350" cy="78" r="12" fill="#fbbf24"/>
        <rect x="340" y="90" width="20" height="12" rx="2" fill="white"/>
        <circle cx="170" cy="90" r="14" fill="#60a5fa"/>
        <rect x="158" y="104" width="24" height="14" rx="3" fill="#2563eb"/>
        <rect x="0" y="120" width="500" height="60" fill="#ecfdf5"/>
      </svg>
    </SceneIllustration>
  )
}

function PartyScene() {
  return (
    <SceneIllustration title="🎉 Scene: At a House Party" bg="from-pink-50 to-fuchsia-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="120" fill="#fdf2f8"/>
        {[80,160,250,340,420].map((x,i) => (
          <g key={i}>
            <line x1={x} y1="0" x2={x} y2="15" stroke={['#f472b6','#a78bfa','#34d399','#fbbf24','#60a5fa'][i]} strokeWidth="1.5"/>
            <polygon points={`${x-8},15 ${x},5 ${x+8},15`} fill={['#f472b6','#a78bfa','#34d399','#fbbf24','#60a5fa'][i]}/>
          </g>
        ))}
        <text x="250" y="35" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">🎵 🎉 🎈</text>
        <rect x="200" y="80" width="100" height="30" rx="4" fill="#78350f"/>
        {[210,230,250,270].map(x => <rect key={x} x={x} y="74" width="10" height="8" rx="2" fill={x%20===0?'#ef4444':'#fbbf24'}/>)}
        {[[100,70,'#60a5fa'],[160,75,'#f472b6'],[300,72,'#a78bfa'],[380,68,'#34d399'],[440,75,'#fbbf24']].map(([x,y,c],i) => (
          <g key={i}><circle cx={x} cy={y} r="12" fill={c}/><rect x={x-8} y={y+12} width="16" height="14" rx="3" fill={c} opacity="0.7"/></g>
        ))}
        <rect x="0" y="115" width="500" height="65" fill="#fce7f3"/>
      </svg>
    </SceneIllustration>
  )
}

function TaxiScene() {
  return (
    <SceneIllustration title="🚕 Scene: Taking a Taxi / Rideshare" bg="from-yellow-50 to-amber-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="80" fill="#fef9c3"/>
        <circle cx="420" cy="30" r="22" fill="#fcd34d"/>
        <rect x="0" y="80" width="500" height="30" fill="#94a3b8"/>
        <line x1="0" y1="95" x2="500" y2="95" stroke="white" strokeWidth="2" strokeDasharray="20,12"/>
        <rect x="0" y="110" width="500" height="70" fill="#d6d3d1"/>
        <g transform="translate(150,50)">
          <rect x="0" y="10" width="140" height="45" rx="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
          <rect x="10" y="0" width="120" height="20" rx="5" fill="#fde68a"/>
          <rect x="20" y="3" width="35" height="14" rx="3" fill="#bae6fd"/>
          <rect x="85" y="3" width="35" height="14" rx="3" fill="#bae6fd"/>
          <circle cx="25" cy="58" r="10" fill="#1e293b"/><circle cx="25" cy="58" r="4" fill="#6b7280"/>
          <circle cx="115" cy="58" r="10" fill="#1e293b"/><circle cx="115" cy="58" r="4" fill="#6b7280"/>
          <rect x="50" y="0" width="40" height="8" rx="2" fill="#f59e0b"/>
          <text x="70" y="7" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">TAXI</text>
        </g>
        <circle cx="110" cy="70" r="14" fill="#60a5fa"/>
        <rect x="98" y="84" width="24" height="16" rx="3" fill="#2563eb"/>
        <rect x="88" y="86" width="12" height="18" rx="2" fill="#6366f1"/>
      </svg>
    </SceneIllustration>
  )
}

function PresentationScene() {
  return (
    <SceneIllustration title="📊 Scene: Giving a Presentation" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="130" fill="#eef2ff"/>
        <rect x="140" y="10" width="220" height="70" rx="5" fill="white" stroke="#c7d2fe" strokeWidth="2"/>
        <rect x="155" y="20" width="50" height="30" rx="3" fill="#818cf8"/>
        <rect x="215" y="20" width="50" height="20" rx="3" fill="#a5b4fc"/>
        <rect x="275" y="20" width="50" height="40" rx="3" fill="#6366f1"/>
        <text x="250" y="68" textAnchor="middle" fill="#4338ca" fontSize="7">Q1 2026 Results</text>
        <circle cx="250" cy="110" r="16" fill="#60a5fa"/>
        <rect x="238" y="126" width="24" height="14" rx="3" fill="#2563eb"/>
        <line x1="250" y1="100" x2="250" y2="82" stroke="#a5b4fc" strokeWidth="1" strokeDasharray="3"/>
        {[[100,120],[150,125],[350,122],[400,118]].map(([x,y],i) => (
          <g key={i}><circle cx={x} cy={y} r="10" fill={['#f59e0b','#22c55e','#ec4899','#8b5cf6'][i]}/></g>
        ))}
        <rect x="0" y="140" width="500" height="40" fill="#e0e7ff"/>
      </svg>
    </SceneIllustration>
  )
}

function NeighborScene() {
  return (
    <SceneIllustration title="🏡 Scene: Meeting Your Neighbor" bg="from-lime-50 to-green-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="70" fill="#ecfdf5"/>
        <circle cx="430" cy="30" r="18" fill="#fcd34d"/>
        <g>{/* House 1 */}
          <rect x="40" y="40" width="100" height="70" rx="3" fill="#fef3c7"/>
          <polygon points="40,40 90,10 140,40" fill="#ef4444"/>
          <rect x="75" y="75" width="25" height="35" fill="#78350f"/>
          <rect x="50" y="55" width="20" height="18" rx="2" fill="#bae6fd"/>
          <rect x="110" y="55" width="20" height="18" rx="2" fill="#bae6fd"/>
        </g>
        <g>{/* House 2 */}
          <rect x="300" y="40" width="100" height="70" rx="3" fill="#dbeafe"/>
          <polygon points="300,40 350,10 400,40" fill="#3b82f6"/>
          <rect x="335" y="75" width="25" height="35" fill="#78350f"/>
          <rect x="310" y="55" width="20" height="18" rx="2" fill="#fef3c7"/>
          <rect x="370" y="55" width="20" height="18" rx="2" fill="#fef3c7"/>
        </g>
        <rect x="140" y="95" width="160" height="5" rx="2" fill="#a3a3a3"/>
        <rect x="0" y="110" width="500" height="70" fill="#bbf7d0"/>
        <circle cx="190" cy="100" r="14" fill="#60a5fa"/>
        <rect x="178" y="114" width="24" height="16" rx="3" fill="#2563eb"/>
        <circle cx="260" cy="98" r="14" fill="#f59e0b"/>
        <rect x="248" y="112" width="24" height="16" rx="3" fill="#d97706"/>
      </svg>
    </SceneIllustration>
  )
}

function EmergencyScene() {
  return (
    <SceneIllustration title="🚨 Scene: Emergency Situation" bg="from-red-50 to-rose-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="100" fill="#fef2f2"/>
        <g transform="translate(180,20)">
          <rect x="0" y="20" width="140" height="50" rx="8" fill="white" stroke="#ef4444" strokeWidth="2"/>
          <rect x="5" y="10" width="130" height="18" rx="5" fill="#fecaca"/>
          <rect x="50" y="0" width="40" height="12" rx="3" fill="#ef4444"/>
          <text x="70" y="9" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">🚑</text>
          <circle cx="20" cy="73" r="9" fill="#1e293b"/>
          <circle cx="120" cy="73" r="9" fill="#1e293b"/>
          <rect x="15" y="25" width="30" height="20" rx="3" fill="#bae6fd"/>
          <rect x="95" y="25" width="30" height="20" rx="3" fill="#bae6fd"/>
          <rect x="55" y="30" width="30" height="15" rx="2" fill="#ef4444"/>
          <text x="70" y="41" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">+</text>
        </g>
        <circle cx="100" cy="60" r="16" fill="#60a5fa"/>
        <rect x="88" y="76" width="24" height="18" rx="3" fill="#2563eb"/>
        <rect x="60" y="35" width="55" height="22" rx="8" fill="white" stroke="#fca5a5" strokeWidth="1"/>
        <text x="87" y="49" textAnchor="middle" fill="#dc2626" fontSize="6">"Help! Please..."</text>
        <rect x="0" y="100" width="500" height="80" fill="#fce7f3"/>
      </svg>
    </SceneIllustration>
  )
}

function WeatherScene() {
  return (
    <SceneIllustration title="⛅ Scene: Talking About Weather" bg="from-sky-50 to-blue-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="100" fill="#e0f2fe"/>
        <circle cx="120" cy="35" r="25" fill="#fcd34d"/>
        <circle cx="280" cy="30" r="20" fill="white"/><circle cx="300" cy="25" r="18" fill="white"/><circle cx="265" cy="28" r="15" fill="white"/>
        <circle cx="400" cy="35" r="18" fill="#94a3b8"/><circle cx="418" cy="30" r="15" fill="#94a3b8"/><circle cx="385" cy="32" r="12" fill="#94a3b8"/>
        {[405,415,395].map((x,i) => <line key={i} x1={x} y1="50" x2={x-3} y2="65" stroke="#60a5fa" strokeWidth="1.5"/>)}
        <rect x="0" y="100" width="500" height="80" fill="#bbf7d0"/>
        <circle cx="180" cy="110" r="14" fill="#60a5fa"/>
        <rect x="168" y="124" width="24" height="16" rx="3" fill="#2563eb"/>
        <circle cx="280" cy="112" r="14" fill="#f59e0b"/>
        <rect x="268" y="126" width="24" height="16" rx="3" fill="#d97706"/>
        <rect x="130" y="90" width="80" height="18" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="170" y="102" textAnchor="middle" fill="#1e40af" fontSize="6">"Lovely weather!"</text>
      </svg>
    </SceneIllustration>
  )
}

function RoommatScene() {
  return (
    <SceneIllustration title="🏠 Scene: Living with a Roommate" bg="from-violet-50 to-purple-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md">
        <rect x="0" y="0" width="500" height="120" fill="#f5f3ff"/>
        <rect x="50" y="30" width="180" height="70" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
        <text x="140" y="50" textAnchor="middle" fill="#1e40af" fontSize="7" fontWeight="bold">KITCHEN</text>
        <rect x="70" y="55" width="30" height="35" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1"/>
        <rect x="110" y="60" width="40" height="10" rx="2" fill="#94a3b8"/>
        <rect x="160" y="55" width="50" height="35" rx="3" fill="#44403c"/>
        <rect x="300" y="30" width="150" height="70" rx="4" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1"/>
        <text x="375" y="50" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">LIVING ROOM</text>
        <rect x="320" y="60" width="60" height="30" rx="4" fill="#a78bfa"/>
        <rect x="400" y="65" width="30" height="25" rx="3" fill="#1e293b"/>
        <circle cx="160" cy="115" r="14" fill="#60a5fa"/>
        <rect x="148" y="129" width="24" height="14" rx="3" fill="#2563eb"/>
        <circle cx="340" cy="115" r="14" fill="#f472b6"/>
        <rect x="328" y="129" width="24" height="14" rx="3" fill="#db2777"/>
        <rect x="0" y="120" width="500" height="60" fill="#ede9fe"/>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// CONVERSATION DATA PART 3
// ═══════════════════════════════════════════════════════════════

export const conversationsPart3 = [
  // ─── Day 17: Post Office ────────────────────────────────
  {
    id: 'post-office', day: 17, title: '📦 Sending a Package at the Post Office', category: 'Daily Life', difficulty: 'Intermediate', color: 'amber',
    body: (
      <div>
        <PostOfficeScene />
        <ConversationCard speakers={{ A: 'You', B: 'Clerk' }} situation="Sending a package to Indonesia"
          lines={[
            { speaker: 'A', en: "Hi, I'd like to send this package to Indonesia.", id: "Hai, saya mau kirim paket ini ke Indonesia." },
            { speaker: 'B', en: "Sure! Let me weigh it first. It's 2.3 kilos. Would you like standard or express shipping?", id: "Tentu! Saya timbang dulu. 2,3 kilo. Mau pengiriman standar atau express?" },
            { speaker: 'A', en: "How long does each option take?", id: "Berapa lama masing-masing opsi?" },
            { speaker: 'B', en: "Standard is 10-14 business days for $18. Express is 3-5 business days for $45.", id: "Standar 10-14 hari kerja $18. Express 3-5 hari kerja $45.", note: '"Business days" = hari kerja (tidak termasuk weekend)' },
            { speaker: 'A', en: "I'll go with standard. Does it come with tracking?", id: "Saya pilih standar. Apakah ada tracking?", note: '"Come with" = termasuk/disertai' },
            { speaker: 'B', en: "Yes, you'll get a tracking number. Do you need insurance? It covers up to $200 in case of damage or loss.", id: "Ya, Anda akan dapat nomor tracking. Perlu asuransi? Menanggung sampai $200 jika rusak atau hilang." },
            { speaker: 'A', en: "Yes, please add insurance. Also, do I need to fill out a customs form?", id: "Ya, tolong tambahkan asuransi. Juga, apakah saya perlu isi formulir bea cukai?" },
            { speaker: 'B', en: "Yes, here's the form. Just declare the contents and their value. No liquids or batteries, right?", id: "Ya, ini formulirnya. Deklarasikan isi dan nilainya. Tidak ada cairan atau baterai, kan?" },
            { speaker: 'A', en: "No, just some books and clothes. Here you go.", id: "Tidak, hanya buku dan pakaian. Ini." },
            { speaker: 'B', en: "Perfect. Your total is $22.50 with insurance. Here's your receipt and tracking number.", id: "Sempurna. Total $22,50 dengan asuransi. Ini struk dan nomor tracking Anda." },
          ]} />
        <KeyPhrasesCard title="Post Office Vocabulary" color="amber" phrases={[
          { en: "I'd like to send this to...", id: "Saya mau kirim ini ke..." },
          { en: "standard / express shipping", id: "pengiriman standar / express" },
          { en: "tracking number", id: "nomor resi/tracking" },
          { en: "customs form / declaration", id: "formulir bea cukai" },
          { en: "How long will it take?", id: "Berapa lama akan sampai?" },
          { en: "fragile / handle with care", id: "rapuh / tangani dengan hati-hati" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Does the package come ___ tracking?" options={["with","by","in","of"]} answer="with" explanation="'Come with' = disertai/termasuk" />
        <FillInBlank sentence="Standard shipping takes 10-14 ___ days." options={["business","work","office","week"]} answer="business" explanation="'Business days' = hari kerja (Senin-Jumat)" />
      </div>
    ),
  },

  // ─── Day 18: Pharmacy ──────────────────────────────────
  {
    id: 'pharmacy', day: 18, title: '💊 At the Pharmacy', category: 'Health', difficulty: 'Intermediate', color: 'emerald',
    body: (
      <div>
        <PharmacyScene />
        <ConversationCard speakers={{ A: 'You', B: 'Pharmacist' }} situation="Buying medicine for a cold"
          lines={[
            { speaker: 'A', en: "Hi, I've had a terrible cold for two days. Could you recommend something?", id: "Hai, saya flu parah sudah dua hari. Bisa rekomendasikan sesuatu?" },
            { speaker: 'B', en: "I'm sorry to hear that. What are your symptoms? Runny nose, cough, sore throat?", id: "Maaf mendengarnya. Apa saja gejalanya? Pilek, batuk, sakit tenggorokan?" },
            { speaker: 'A', en: "All of the above, plus a mild headache and some body aches.", id: "Semua di atas, ditambah sakit kepala ringan dan pegal-pegal.", note: '"All of the above" = semuanya yang disebutkan' },
            { speaker: 'B', en: "I'd suggest this multi-symptom cold relief. It covers cough, congestion, and pain. Take two tablets every six hours.", id: "Saya sarankan obat flu multi-gejala ini. Mengatasi batuk, hidung tersumbat, dan nyeri. Minum dua tablet setiap enam jam." },
            { speaker: 'A', en: "Are there any side effects I should know about?", id: "Ada efek samping yang harus saya ketahui?", note: '"Side effects" = efek samping obat' },
            { speaker: 'B', en: "It may cause drowsiness, so avoid driving. Also, don't take it with alcohol. Are you on any other medication?", id: "Mungkin menyebabkan kantuk, jadi hindari mengemudi. Juga, jangan dikonsumsi dengan alkohol. Apakah Anda sedang minum obat lain?" },
            { speaker: 'A', en: "No, I'm not. And could I also get some throat lozenges and vitamin C?", id: "Tidak. Dan bisa juga saya beli pelega tenggorokan dan vitamin C?" },
            { speaker: 'B', en: "Of course! These honey-lemon lozenges are our best seller. Get well soon!", id: "Tentu! Pelega madu-lemon ini best seller kami. Semoga cepat sembuh!" },
          ]} />
        <KeyPhrasesCard title="Pharmacy & Medicine Words" color="emerald" phrases={[
          { en: "over-the-counter (OTC)", id: "obat bebas (tanpa resep)" },
          { en: "prescription medication", id: "obat resep" },
          { en: "side effects", id: "efek samping" },
          { en: "dosage / take two tablets", id: "dosis / minum dua tablet" },
          { en: "drowsiness / drowsy", id: "kantuk / mengantuk" },
          { en: "Are you allergic to anything?", id: "Apakah Anda alergi sesuatu?" },
        ]} />
        <PronunciationTip word="pharmacy" ipa="ˈfɑːr.mə.si" tip="F sound, not PH like 'phone'" />
        <PronunciationTip word="drowsiness" ipa="ˈdraʊ.zi.nəs" tip="DROW-zee-ness" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Are there any side ___ I should know about?" options={["effects","affects","results","causes"]} answer="effects" explanation="'Side effects' = efek samping. 'Effect' (noun) vs 'affect' (verb)" />
        <FillInBlank sentence="It may cause ___, so avoid driving." options={["drowsiness","tiredness","sleepy","sleeping"]} answer="drowsiness" explanation="'Drowsiness' = noun (kantuk). 'Drowsy' = adjective (mengantuk)" />
      </div>
    ),
  },

  // ─── Day 19: House Party ────────────────────────────────
  {
    id: 'party', day: 19, title: '🎉 At a House Party', category: 'Entertainment', difficulty: 'Beginner', color: 'pink',
    body: (
      <div>
        <PartyScene />
        <ConversationCard speakers={{ A: 'You', B: 'Host', C: 'New Person' }} situation="A welcome party for new international students"
          lines={[
            { speaker: 'B', en: "Hey, you made it! Come on in! Grab a drink and make yourself at home.", id: "Hey, kamu datang! Masuk saja! Ambil minum dan anggap saja rumah sendiri.", note: '"Make yourself at home" = silakan santai seperti di rumah sendiri' },
            { speaker: 'A', en: "Thanks for having me! This place looks great. You've really gone all out!", id: "Makasih sudah undang! Tempatnya keren. Kamu benar-benar serius persiapannya!", note: '"Gone all out" = melakukan sesuatu dengan sangat maksimal' },
            { speaker: 'B', en: "Thanks! Let me introduce you to some people. This is Maya — she's from Brazil.", id: "Makasih! Saya perkenalkan ke beberapa orang. Ini Maya — dia dari Brazil." },
            { speaker: 'C', en: "Hi! Nice to meet you! So, what are you studying?", id: "Hai! Senang bertemu! Jadi, kamu kuliah apa?" },
            { speaker: 'A', en: "Nice to meet you too! I'm doing my Master's in Computer Science. How about you?", id: "Senang bertemu juga! Saya ambil Master Ilmu Komputer. Kamu?", note: '"I\'m doing my Master\'s in..." = cara bilang jurusan S2' },
            { speaker: 'C', en: "I'm in the MBA program. How are you finding the city so far?", id: "Saya di program MBA. Gimana menurutmu kota ini sejauh ini?", note: '"How are you finding...?" = bagaimana kesan/pendapatmu tentang...?' },
            { speaker: 'A', en: "It's been great! Still getting used to the cold weather though. It never gets this cold back home.", id: "Bagus! Masih beradaptasi dengan cuaca dingin sih. Di rumah tidak pernah sedingin ini." },
            { speaker: 'C', en: "Ha! Same here. We should check out that new ramen place downtown. A bunch of us are going this weekend.", id: "Ha! Sama! Kita harus coba tempat ramen baru di pusat kota. Beberapa dari kami mau pergi weekend ini." },
            { speaker: 'A', en: "Count me in! That sounds awesome.", id: "Ikut dong! Kedengarannya keren.", note: '"Count me in" = saya ikut!' },
          ]} />
        <KeyPhrasesCard title="Party & Social Expressions" color="rose" phrases={[
          { en: "Thanks for having me!", id: "Makasih sudah undang!" },
          { en: "Make yourself at home", id: "Anggap rumah sendiri" },
          { en: "You've gone all out!", id: "Kamu all out banget!" },
          { en: "Count me in!", id: "Saya ikut!" },
          { en: "How are you finding...?", id: "Gimana menurutmu...?" },
          { en: "A bunch of us are going", id: "Beberapa dari kami mau pergi" },
        ]} />
        <ExpressionMeter
          formal={["It's a pleasure to be here.", "I appreciate the invitation.", "I would be delighted to join."]}
          informal={["Thanks for having me!", "Glad I could make it!", "Count me in!"]}
        />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="___ me in! That sounds awesome." options={["Count","Put","Add","Take"]} answer="Count" explanation="'Count me in' = sertakan saya / saya ikut" />
        <FillInBlank sentence="How are you ___ the city so far?" options={["finding","seeing","looking","thinking"]} answer="finding" explanation="'How are you finding...?' = bagaimana kesan/pengalamanmu dengan...?" />
      </div>
    ),
  },

  // ─── Day 20: Taking a Taxi ──────────────────────────────
  {
    id: 'taxi', day: 20, title: '🚕 Taking a Taxi / Rideshare', category: 'Travel', difficulty: 'Beginner', color: 'amber',
    body: (
      <div>
        <TaxiScene />
        <ConversationCard speakers={{ A: 'You', B: 'Driver' }} situation="Getting a taxi from the train station"
          lines={[
            { speaker: 'A', en: "Hi! Could you take me to the Hilton Hotel on Park Avenue?", id: "Hai! Bisa antar saya ke Hotel Hilton di Park Avenue?" },
            { speaker: 'B', en: "Sure, hop in! Do you have a preferred route, or should I take the fastest one?", id: "Tentu, naik saja! Ada rute yang diprefer, atau saya ambil yang tercepat?", note: '"Hop in" = masuk/naik (casual)' },
            { speaker: 'A', en: "The fastest route is fine. Roughly how long will it take?", id: "Rute tercepat saja. Kira-kira berapa lama?" },
            { speaker: 'B', en: "About 20 minutes, depending on traffic. It's a bit busy this time of day.", id: "Sekitar 20 menit, tergantung lalu lintas. Agak ramai jam segini." },
            { speaker: 'A', en: "No problem. Could you turn up the AC a bit? It's quite warm.", id: "Tidak masalah. Bisa naikkan AC sedikit? Agak panas.", note: '"Turn up" = besarkan. "Turn down" = kecilkan' },
            { speaker: 'B', en: "Of course! We're almost there. It'll be on the left side.", id: "Tentu! Kita hampir sampai. Hotel di sisi kiri." },
            { speaker: 'A', en: "Could you drop me off right at the entrance? How much do I owe you?", id: "Bisa turunkan saya tepat di pintu masuk? Berapa yang harus saya bayar?", note: '"Drop me off" = turunkan saya (dari kendaraan)' },
            { speaker: 'B', en: "That'll be $24.50. Cash or card?", id: "Totalnya $24,50. Tunai atau kartu?" },
            { speaker: 'A', en: "Card, please. Keep the change as a tip. Thanks for the ride!", id: "Kartu. Simpan kembaliannya sebagai tip. Makasih tumpangannya!" },
          ]} />
        <KeyPhrasesCard title="Taxi & Transport Phrases" color="amber" phrases={[
          { en: "Could you take me to...?", id: "Bisa antar saya ke...?" },
          { en: "How long will it take?", id: "Berapa lama akan sampai?" },
          { en: "Drop me off at...", id: "Turunkan saya di..." },
          { en: "Keep the change", id: "Simpan kembaliannya" },
          { en: "Could you pull over here?", id: "Bisa berhenti di sini?" },
          { en: "Is there a meter?", id: "Apakah pakai argo?" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Could you ___ me off at the hotel entrance?" options={["drop","put","take","leave"]} answer="drop" explanation="'Drop off' = menurunkan penumpang" />
        <FillInBlank sentence="Could you turn ___ the AC? It's warm." options={["up","on","in","over"]} answer="up" explanation="'Turn up' = menambah/membesarkan. 'Turn down' = mengecilkan" />
      </div>
    ),
  },

  // ─── Day 21: Giving a Presentation ──────────────────────
  {
    id: 'presentation', day: 21, title: '📊 Giving a Presentation', category: 'Academic', difficulty: 'Advanced', color: 'blue',
    body: (
      <div>
        <PresentationScene />
        <ConversationCard speakers={{ A: 'You', B: 'Professor', C: 'Audience' }} situation="Presenting your thesis research to classmates and professors"
          lines={[
            { speaker: 'A', en: "Good morning, everyone. Thank you for being here. Today, I'll be presenting my research on predictive analytics in healthcare.", id: "Selamat pagi semuanya. Terima kasih sudah hadir. Hari ini saya akan mempresentasikan riset tentang predictive analytics di bidang kesehatan." },
            { speaker: 'A', en: "I've divided my presentation into three parts: first, the problem statement; second, the methodology; and third, the key findings.", id: "Saya bagi presentasi ke tiga bagian: pertama, pernyataan masalah; kedua, metodologi; dan ketiga, temuan utama.", note: '"I\'ve divided...into three parts" = struktur pembukaan yang sangat baik' },
            { speaker: 'A', en: "As you can see from this graph, patient readmission rates dropped by 23% when the model was applied.", id: "Seperti yang bisa dilihat dari grafik ini, tingkat readmisi pasien turun 23% saat model diterapkan.", note: '"As you can see from..." = mengarahkan perhatian ke visual' },
            { speaker: 'A', en: "To sum up, our model demonstrates that early intervention based on predictive signals can significantly reduce costs.", id: "Sebagai ringkasan, model kami menunjukkan bahwa intervensi dini berdasarkan sinyal prediktif dapat mengurangi biaya secara signifikan." },
            { speaker: 'A', en: "I'd be happy to take any questions now.", id: "Saya dengan senang hati menerima pertanyaan.", note: '"I\'d be happy to take questions" = cara formal membuka sesi tanya jawab' },
            { speaker: 'C', en: "Could you elaborate on the dataset you used? How large was the sample?", id: "Bisa jelaskan lebih detail tentang dataset yang digunakan? Berapa besar sampelnya?", note: '"Elaborate on" = jelaskan lebih rinci' },
            { speaker: 'A', en: "Great question. We used a dataset of 50,000 patient records spanning five years from three hospitals.", id: "Pertanyaan bagus. Kami menggunakan dataset 50.000 rekam pasien selama lima tahun dari tiga rumah sakit." },
            { speaker: 'B', en: "Excellent work, Andi. The methodology is solid. I'd suggest exploring cross-validation in your next iteration.", id: "Kerja bagus, Andi. Metodologinya solid. Saya sarankan eksplorasi cross-validation di iterasi berikutnya." },
            { speaker: 'A', en: "Thank you, Professor. That's a valuable suggestion. I'll definitely incorporate that.", id: "Terima kasih, Profesor. Itu saran yang berharga. Saya pasti akan mengikutinya." },
          ]} />
        <KeyPhrasesCard title="Presentation Phrases" color="indigo" phrases={[
          { en: "I've divided my presentation into...", id: "Saya bagi presentasi menjadi..." },
          { en: "As you can see from this graph...", id: "Seperti yang terlihat dari grafik ini..." },
          { en: "To sum up / In conclusion", id: "Sebagai ringkasan / Kesimpulannya" },
          { en: "I'd be happy to take questions", id: "Dengan senang hati saya terima pertanyaan" },
          { en: "Great question!", id: "Pertanyaan bagus!" },
          { en: "Could you elaborate on...?", id: "Bisa jelaskan lebih rinci...?" },
          { en: "Moving on to the next slide...", id: "Beralih ke slide berikutnya..." },
          { en: "Let me draw your attention to...", id: "Perhatikan ini..." },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I've ___ my presentation into three parts." options={["divided","split","cut","broke"]} answer="divided" explanation="'Divided into' = membagi menjadi — paling formal untuk presentasi" />
        <FillInBlank sentence="Could you ___ on how you collected the data?" options={["elaborate","explain","describe","tell"]} answer="elaborate" explanation="'Elaborate on' = menjelaskan lebih rinci/detail" />
      </div>
    ),
  },

  // ─── Day 22: Meeting Neighbor ───────────────────────────
  {
    id: 'neighbor', day: 22, title: '🏡 Meeting Your Neighbor', category: 'Daily Life', difficulty: 'Beginner', color: 'emerald',
    body: (
      <div>
        <NeighborScene />
        <ConversationCard speakers={{ A: 'You', B: 'Neighbor' }} situation="You just moved in and bump into your neighbor"
          lines={[
            { speaker: 'B', en: "Oh, hi! You must be the new neighbor. I'm David — I live next door.", id: "Oh, hai! Pasti kamu tetangga baru. Saya David — tinggal di sebelah.", note: '"You must be..." = pasti kamu... (asumsi sopan)' },
            { speaker: 'A', en: "Yes! I just moved in yesterday. I'm Andi. Nice to meet you, David!", id: "Ya! Saya baru pindah kemarin. Saya Andi. Senang bertemu, David!" },
            { speaker: 'B', en: "Welcome to the neighborhood! If you need anything, don't hesitate to knock on my door.", id: "Selamat datang di lingkungan ini! Kalau butuh apa-apa, jangan ragu ketuk pintu saya.", note: '"Don\'t hesitate to..." = jangan ragu untuk...' },
            { speaker: 'A', en: "That's so kind of you! Actually, could I ask — is there a good grocery store nearby?", id: "Baik sekali! Sebenarnya, boleh tanya — ada toko kelontong bagus di dekat sini?" },
            { speaker: 'B', en: "There's a great one about a five-minute walk from here. I'll show you sometime. Oh, and just a heads up — trash collection is on Tuesdays and Fridays.", id: "Ada yang bagus sekitar 5 menit jalan dari sini. Kapan-kapan saya tunjukkan. Oh, dan sekadar info — pengambilan sampah hari Selasa dan Jumat.", note: '"Heads up" = informasi/peringatan penting' },
            { speaker: 'A', en: "Good to know! Thanks for the heads up. Is the neighborhood pretty quiet?", id: "Bagus untuk diketahui! Terima kasih infonya. Apakah lingkungannya cukup tenang?" },
            { speaker: 'B', en: "Yeah, it's very peaceful. Most people here are families and students. We sometimes have barbecues in the summer — you'll have to come!", id: "Ya, sangat damai. Kebanyakan orang di sini keluarga dan mahasiswa. Kadang kami BBQ di musim panas — kamu harus datang!" },
            { speaker: 'A', en: "I'd love that! Thanks for being so welcoming.", id: "Mau banget! Makasih sudah ramah sekali." },
          ]} />
        <KeyPhrasesCard title="Neighbor & Community Phrases" color="emerald" phrases={[
          { en: "You must be the new...", id: "Pasti kamu yang baru..." },
          { en: "Welcome to the neighborhood!", id: "Selamat datang di lingkungan!" },
          { en: "Don't hesitate to...", id: "Jangan ragu untuk..." },
          { en: "Just a heads up...", id: "Sekadar info/peringatan..." },
          { en: "Good to know!", id: "Bagus untuk diketahui!" },
          { en: "Is there a... nearby?", id: "Apakah ada... di dekat sini?" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Don't ___ to ask if you need anything." options={["hesitate","doubt","worry","afraid"]} answer="hesitate" explanation="'Don't hesitate to...' = jangan ragu untuk... (sopan dan ramah)" />
        <FillInBlank sentence="Just a heads ___ — the parking rules changed." options={["up","on","out","off"]} answer="up" explanation="'Heads up' = peringatan/informasi penting yang perlu diketahui" />
      </div>
    ),
  },

  // ─── Day 23: Emergency ──────────────────────────────────
  {
    id: 'emergency', day: 23, title: '🚨 Emergency Situations', category: 'Health', difficulty: 'Advanced', color: 'rose',
    body: (
      <div>
        <EmergencyScene />
        <ConversationCard speakers={{ A: 'You', B: 'Operator' }} situation="Calling 911 (or local emergency number) after witnessing an accident"
          lines={[
            { speaker: 'B', en: "911, what's your emergency?", id: "911, apa keadaan darurat Anda?" },
            { speaker: 'A', en: "There's been a car accident on the corner of Main Street and Oak Avenue! Someone is injured.", id: "Ada kecelakaan mobil di perempatan Main Street dan Oak Avenue! Seseorang terluka.", note: '"There\'s been a..." = baru saja terjadi sesuatu' },
            { speaker: 'B', en: "Stay calm. How many people are injured? Are they conscious?", id: "Tetap tenang. Berapa orang yang terluka? Apakah mereka sadar?" },
            { speaker: 'A', en: "One person. They're conscious but bleeding from their forehead. They can't move their leg.", id: "Satu orang. Mereka sadar tapi berdarah dari dahi. Tidak bisa menggerakkan kaki." },
            { speaker: 'B', en: "I'm dispatching an ambulance right now. Don't move the injured person. Can you stay on the line until help arrives?", id: "Saya kirim ambulans sekarang. Jangan pindahkan orang yang terluka. Bisa tetap di telepon sampai bantuan datang?", note: '"Stay on the line" = tetap di telepon (jangan putus)' },
            { speaker: 'A', en: "Yes, I'll stay. Should I do anything in the meantime?", id: "Ya, saya tetap. Haruskah saya lakukan sesuatu sementara menunggu?" },
            { speaker: 'B', en: "If they're bleeding, apply pressure with a clean cloth. Keep them warm and talking. Help is on the way — about 5 minutes out.", id: "Kalau berdarah, tekan dengan kain bersih. Buat mereka tetap hangat dan bicara. Bantuan sedang dalam perjalanan — sekitar 5 menit lagi." },
            { speaker: 'A', en: "Okay, I can hear the sirens now. Thank you!", id: "Oke, saya sudah dengar sirine. Terima kasih!" },
          ]} />
        <KeyPhrasesCard title="Emergency Vocabulary" color="rose" phrases={[
          { en: "There's been an accident", id: "Ada kecelakaan" },
          { en: "Someone is injured/hurt", id: "Seseorang terluka" },
          { en: "They're conscious/unconscious", id: "Mereka sadar/tidak sadar" },
          { en: "Stay on the line", id: "Tetap di telepon" },
          { en: "Help is on the way", id: "Bantuan sedang dalam perjalanan" },
          { en: "Call an ambulance!", id: "Panggil ambulans!" },
          { en: "Apply pressure to the wound", id: "Tekan lukanya" },
          { en: "I need to report...", id: "Saya perlu melaporkan..." },
        ]} />
        <CulturalNote>
          <p className="font-bold mb-1">Emergency Numbers 🌍</p>
          <p>USA/Canada: 911 | UK: 999 | EU: 112 | Australia: 000 | Indonesia: 112/118/119. Hafalkan nomor darurat negara yang Anda kunjungi. Operator bisa berbicara banyak bahasa — sebutkan bahasa Anda jika perlu.</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="There's ___ a car accident on Main Street." options={["been","had","was","got"]} answer="been" explanation="'There's been...' (there has been) = present perfect untuk kejadian baru terjadi" />
        <FillInBlank sentence="Can you stay on the ___ until help arrives?" options={["line","phone","call","wire"]} answer="line" explanation="'Stay on the line' = tetap di telepon, jangan putus sambungan" />
      </div>
    ),
  },

  // ─── Day 24: Weather Small Talk ─────────────────────────
  {
    id: 'weather', day: 24, title: '⛅ Weather & Small Talk', category: 'Daily Life', difficulty: 'Beginner', color: 'blue',
    body: (
      <div>
        <WeatherScene />
        <ConversationCard speakers={{ A: 'You', B: 'Colleague' }} situation="Waiting for the elevator at work on a Monday morning"
          lines={[
            { speaker: 'B', en: "Morning! Crazy weather we're having, isn't it?", id: "Pagi! Cuaca gila ya, kan?", note: 'Cuaca = topik small talk #1 di Barat!' },
            { speaker: 'A', en: "I know, right? It was sunny yesterday and now it's pouring!", id: "Iya kan? Kemarin cerah, sekarang hujan deras!", note: '"Pouring" = hujan deras. "It\'s pouring" = sangat umum' },
            { speaker: 'B', en: "Welcome to spring! At least it's supposed to clear up by the afternoon.", id: "Selamat datang di musim semi! Setidaknya katanya cerah lagi sore nanti.", note: '"Clear up" = cuaca membaik/cerah lagi' },
            { speaker: 'A', en: "Fingers crossed! I didn't bring an umbrella today.", id: "Semoga! Saya tidak bawa payung hari ini.", note: '"Fingers crossed" = semoga/harapannya...' },
            { speaker: 'B', en: "Ha! Neither did I. So, how was your weekend? Do anything fun?", id: "Ha! Saya juga tidak. Jadi, gimana weekendnya? Ngapain seru?", note: 'Transisi natural dari cuaca ke weekend — small talk klasik' },
            { speaker: 'A', en: "It was pretty chill. I checked out that new Thai place on 5th Street. The pad thai was incredible.", id: "Santai saja. Saya coba restoran Thai baru di 5th Street. Pad thai-nya luar biasa." },
            { speaker: 'B', en: "Oh, I've been meaning to try that! Is it worth the hype?", id: "Oh, saya udah lama mau coba itu! Worth the hype nggak?", note: '"I\'ve been meaning to..." = sudah lama berniat...' },
            { speaker: 'A', en: "Definitely! You should go. The portions are huge too.", id: "Pasti! Kamu harus pergi. Porsinya besar juga." },
          ]} />
        <KeyPhrasesCard title="Small Talk Essentials" color="indigo" phrases={[
          { en: "Crazy weather, isn't it?", id: "Cuaca gila ya?" },
          { en: "It's pouring / It's freezing", id: "Hujan deras / Sangat dingin" },
          { en: "Fingers crossed!", id: "Semoga!" },
          { en: "How was your weekend?", id: "Gimana weekendnya?" },
          { en: "I've been meaning to...", id: "Sudah lama berniat..." },
          { en: "Is it worth the hype?", id: "Sesuai dengan hype-nya?" },
          { en: "Not too bad, can't complain", id: "Lumayan, tidak bisa keluhan" },
          { en: "Same old, same old", id: "Biasa-biasa saja" },
        ]} />
        <ExpressionMeter
          formal={["The weather is quite unpredictable lately.", "I trust you had a pleasant weekend?", "I've heard good things about that restaurant."]}
          informal={["Crazy weather, huh?", "Good weekend?", "That place is supposed to be amazing!"]}
        />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="It's supposed to ___ up by the afternoon." options={["clear","clean","open","light"]} answer="clear" explanation="'Clear up' = cuaca membaik/cerah. Juga bisa berarti 'menjadi jelas'" />
        <FillInBlank sentence="I've been ___ to try that restaurant for weeks." options={["meaning","wanting","thinking","planning"]} answer="meaning" explanation="'I've been meaning to...' = sudah lama berniat tapi belum sempat" />
      </div>
    ),
  },

  // ─── Day 25: Roommate ───────────────────────────────────
  {
    id: 'roommate', day: 25, title: '🏠 Living with a Roommate', category: 'Daily Life', difficulty: 'Intermediate', color: 'slate',
    body: (
      <div>
        <RoommatScene />
        <ConversationCard speakers={{ A: 'You', B: 'Roommate' }} situation="Discussing household chores and rules"
          lines={[
            { speaker: 'A', en: "Hey, do you have a minute? I think we should figure out a cleaning schedule.", id: "Hey, ada waktu sebentar? Saya rasa kita perlu buat jadwal kebersihan.", note: '"Do you have a minute?" = pembuka sopan untuk diskusi' },
            { speaker: 'B', en: "Good idea! The kitchen's been a bit messy lately. How about we take turns?", id: "Ide bagus! Dapur agak berantakan akhir-akhir ini. Gimana kalau kita gantian?", note: '"Take turns" = bergantian' },
            { speaker: 'A', en: "Sounds fair. I can handle the kitchen on Mondays and Wednesdays. Could you do Tuesdays and Thursdays?", id: "Kedengarannya adil. Saya bisa tangani dapur Senin dan Rabu. Kamu bisa Selasa dan Kamis?" },
            { speaker: 'B', en: "Works for me! What about the bathroom? That's the one I always put off.", id: "Cocok! Gimana dengan kamar mandi? Itu yang selalu saya tunda.", note: '"Put off" = menunda' },
            { speaker: 'A', en: "Same! Let's just alternate weeks for the bathroom. And maybe we can split the grocery bill?", id: "Sama! Kita gantian mingguan saja untuk kamar mandi. Dan mungkin kita bisa bagi tagihan belanja?", note: '"Split the bill" = bagi rata tagihan' },
            { speaker: 'B', en: "Sure! Should we also set some ground rules? Like, quiet hours after 10 PM?", id: "Tentu! Haruskah kita juga buat aturan dasar? Seperti, jam tenang setelah jam 10 malam?", note: '"Ground rules" = aturan dasar yang disepakati bersama' },
            { speaker: 'A', en: "Absolutely. And if either of us has guests over, we should give each other a heads up beforehand.", id: "Tentu. Dan kalau salah satu dari kita ada tamu, kita harus kasih tahu sebelumnya." },
            { speaker: 'B', en: "Agreed! This is going to work out great. Thanks for bringing it up.", id: "Setuju! Ini pasti akan berjalan lancar. Makasih sudah membahas ini.", note: '"Bring it up" = mengangkat/memulai topik pembicaraan' },
          ]} />
        <KeyPhrasesCard title="Roommate & Household Phrases" color="purple" phrases={[
          { en: "take turns", id: "bergantian" },
          { en: "split the bill / go Dutch", id: "bagi rata / bayar sendiri-sendiri" },
          { en: "ground rules", id: "aturan dasar" },
          { en: "put off (a task)", id: "menunda (tugas)" },
          { en: "bring it up", id: "mengangkat topik" },
          { en: "give a heads up", id: "memberi tahu sebelumnya" },
          { en: "keep it down / quiet hours", id: "pelankan / jam tenang" },
          { en: "It's your turn to...", id: "Giliranmu untuk..." },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="How about we take ___ cleaning the kitchen?" options={["turns","times","roles","parts"]} answer="turns" explanation="'Take turns' = bergantian melakukan sesuatu" />
        <FillInBlank sentence="Let's set some ground ___ for living together." options={["rules","laws","terms","lines"]} answer="rules" explanation="'Ground rules' = aturan dasar yang disepakati" />
        <FillInBlank sentence="Thanks for bringing it ___." options={["up","on","in","out"]} answer="up" explanation="'Bring up' = mengangkat/memulai topik pembicaraan" />
      </div>
    ),
  },
]
