// ═══════════════════════════════════════════════════════════════
// Daily English Conversation Part 2 — More Scenarios
// ═══════════════════════════════════════════════════════════════
import {
  SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank,
  CulturalNote, PronunciationTip, ExpressionMeter
} from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations
// ═══════════════════════════════════════════════════════════════

function PhoneCallScene() {
  return (
    <SceneIllustration title="📞 Scene: Phone Call / Video Meeting" bg="from-violet-50 to-purple-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Desk */}
        <rect x="80" y="110" width="340" height="12" rx="4" fill="#78350f"/>
        {/* Laptop */}
        <rect x="180" y="50" width="140" height="60" rx="6" fill="#1e293b"/>
        <rect x="186" y="55" width="128" height="50" rx="3" fill="#312e81"/>
        {/* Video call screen */}
        <rect x="192" y="60" width="55" height="40" rx="2" fill="#4338ca"/>
        <circle cx="219" cy="73" r="8" fill="#fbbf24"/>
        <rect x="211" y="84" width="16" height="10" rx="3" fill="#818cf8"/>
        <rect x="253" y="60" width="55" height="40" rx="2" fill="#059669"/>
        <circle cx="280" cy="73" r="8" fill="#60a5fa"/>
        <rect x="272" y="84" width="16" height="10" rx="3" fill="#34d399"/>
        {/* Laptop base */}
        <rect x="170" y="110" width="160" height="6" rx="2" fill="#374151"/>
        {/* Coffee */}
        <rect x="120" y="95" width="18" height="16" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1"/>
        <path d="M138 100 Q145 103 138 108" fill="none" stroke="#d1d5db" strokeWidth="1"/>
        {/* Notepad */}
        <rect x="360" y="92" width="30" height="18" rx="2" fill="#fef3c7" stroke="#fcd34d" strokeWidth="0.5"/>
        <line x1="365" y1="97" x2="385" y2="97" stroke="#fcd34d" strokeWidth="0.5"/>
        <line x1="365" y1="101" x2="382" y2="101" stroke="#fcd34d" strokeWidth="0.5"/>
        <line x1="365" y1="105" x2="378" y2="105" stroke="#fcd34d" strokeWidth="0.5"/>
        {/* Person */}
        <circle cx="250" cy="145" r="18" fill="#a78bfa"/>
        <rect x="236" y="163" width="28" height="25" rx="4" fill="#7c3aed"/>
        {/* Speech indicators */}
        <circle cx="155" cy="75" r="3" fill="#4ade80"/>
        <circle cx="155" cy="85" r="2" fill="#4ade80" opacity="0.6"/>
        <circle cx="155" cy="93" r="1.5" fill="#4ade80" opacity="0.3"/>
        {/* Floor */}
        <rect x="0" y="155" width="500" height="45" fill="#f5f3ff"/>
      </svg>
    </SceneIllustration>
  )
}

function BankScene() {
  return (
    <SceneIllustration title="🏦 Scene: At the Bank" bg="from-emerald-50 to-teal-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Building */}
        <rect x="100" y="10" width="300" height="120" fill="#f0fdf4"/>
        {/* Columns */}
        {[130,200,300,370].map(x => (
          <rect key={x} x={x} y="20" width="15" height="100" rx="3" fill="#d1d5db"/>
        ))}
        {/* Sign */}
        <rect x="190" y="12" width="120" height="22" rx="4" fill="#059669"/>
        <text x="250" y="27" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">NATIONAL BANK</text>
        {/* Counter */}
        <rect x="150" y="90" width="200" height="30" rx="4" fill="#44403c"/>
        {/* Glass partition */}
        <rect x="155" y="55" width="190" height="35" rx="0" fill="#bae6fd" opacity="0.3" stroke="#7dd3fc" strokeWidth="0.5"/>
        {/* Teller */}
        <circle cx="300" cy="68" r="12" fill="#fbbf24"/>
        <rect x="290" y="80" width="20" height="15" rx="3" fill="#059669"/>
        {/* Customer */}
        <circle cx="200" cy="105" r="14" fill="#60a5fa"/>
        <rect x="188" y="119" width="24" height="22" rx="3" fill="#2563eb"/>
        {/* ATM */}
        <rect x="420" y="60" width="40" height="55" rx="4" fill="#374151"/>
        <rect x="426" y="66" width="28" height="18" rx="2" fill="#4ade80"/>
        <rect x="430" y="90" width="20" height="4" rx="1" fill="#9ca3af"/>
        {/* Floor */}
        <rect x="0" y="140" width="500" height="60" fill="#e2e8f0"/>
        {/* Queue line */}
        <rect x="160" y="150" width="2" height="30" fill="#fcd34d"/>
        <rect x="210" y="150" width="2" height="30" fill="#fcd34d"/>
        <line x1="161" y1="165" x2="211" y2="165" stroke="#fcd34d" strokeWidth="1.5"/>
      </svg>
    </SceneIllustration>
  )
}

function HotelScene() {
  return (
    <SceneIllustration title="🏨 Scene: Hotel Check-in" bg="from-amber-50 to-yellow-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Lobby wall */}
        <rect x="0" y="0" width="500" height="130" fill="#fffbeb"/>
        {/* Chandelier */}
        <line x1="250" y1="0" x2="250" y2="20" stroke="#fcd34d" strokeWidth="2"/>
        <circle cx="250" cy="28" r="12" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="238" cy="22" r="5" fill="#fde68a"/>
        <circle cx="262" cy="22" r="5" fill="#fde68a"/>
        {/* Front desk */}
        <rect x="150" y="80" width="200" height="40" rx="6" fill="#78350f"/>
        <rect x="150" y="80" width="200" height="8" rx="4" fill="#92400e"/>
        {/* Hotel sign */}
        <rect x="190" y="10" width="120" height="22" rx="4" fill="#1e293b"/>
        <text x="250" y="25" textAnchor="middle" fill="#fcd34d" fontSize="8" fontWeight="bold">★★★★ GRAND HOTEL</text>
        {/* Computer on desk */}
        <rect x="280" y="68" width="25" height="15" rx="2" fill="#1e293b"/>
        <rect x="287" y="83" width="11" height="3" rx="1" fill="#374151"/>
        {/* Key cards */}
        <rect x="200" y="72" width="12" height="8" rx="1" fill="#fcd34d"/>
        <rect x="215" y="72" width="12" height="8" rx="1" fill="#fcd34d"/>
        {/* Receptionist */}
        <circle cx="320" cy="60" r="14" fill="#fbbf24"/>
        <rect x="308" y="74" width="24" height="18" rx="3" fill="#1e293b"/>
        {/* Guest */}
        <circle cx="170" cy="72" r="16" fill="#60a5fa"/>
        <rect x="158" y="88" width="24" height="22" rx="3" fill="#2563eb"/>
        {/* Suitcase */}
        <rect x="135" y="95" width="18" height="22" rx="3" fill="#ef4444"/>
        <rect x="140" y="92" width="8" height="3" rx="1" fill="#b91c1c"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="70" fill="#fef3c7"/>
        {/* Plants */}
        <rect x="50" y="100" width="10" height="18" rx="2" fill="#78350f"/>
        <circle cx="55" cy="92" r="14" fill="#22c55e"/>
        <rect x="440" y="100" width="10" height="18" rx="2" fill="#78350f"/>
        <circle cx="445" cy="92" r="14" fill="#22c55e"/>
      </svg>
    </SceneIllustration>
  )
}

function DirectionsScene() {
  return (
    <SceneIllustration title="🗺️ Scene: Asking for Directions" bg="from-sky-50 to-cyan-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="500" height="90" fill="#e0f2fe"/>
        {/* Buildings */}
        <rect x="30" y="30" width="60" height="80" rx="3" fill="#cbd5e1"/>
        {[35,50,65,80].map(x => <rect key={x} x={x} y="40" width="8" height="8" rx="1" fill="#bae6fd"/>)}
        {[35,50,65,80].map(x => <rect key={`b${x}`} x={x} y="55" width="8" height="8" rx="1" fill="#bae6fd"/>)}
        <rect x="120" y="45" width="50" height="65" rx="3" fill="#d1d5db"/>
        <rect x="350" y="20" width="70" height="90" rx="3" fill="#a5b4fc"/>
        <rect x="430" y="40" width="50" height="70" rx="3" fill="#c4b5fd"/>
        {/* Street sign */}
        <rect x="230" y="30" width="5" height="55" fill="#6b7280"/>
        <rect x="210" y="25" width="50" height="15" rx="3" fill="#22c55e"/>
        <text x="235" y="36" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Main St.</text>
        {/* Road */}
        <rect x="0" y="110" width="500" height="50" fill="#94a3b8"/>
        <line x1="0" y1="135" x2="500" y2="135" stroke="#fcd34d" strokeWidth="2" strokeDasharray="15,10"/>
        {/* Sidewalk */}
        <rect x="0" y="90" width="500" height="20" fill="#e5e7eb"/>
        <rect x="0" y="160" width="500" height="40" fill="#e5e7eb"/>
        {/* Person asking */}
        <circle cx="200" cy="80" r="14" fill="#60a5fa"/>
        <rect x="188" y="94" width="24" height="16" rx="3" fill="#2563eb"/>
        {/* Local person */}
        <circle cx="280" cy="78" r="14" fill="#f59e0b"/>
        <rect x="268" y="92" width="24" height="16" rx="3" fill="#d97706"/>
        {/* Pointing gesture */}
        <line x1="292" y1="95" x2="340" y2="80" stroke="#d97706" strokeWidth="2" markerEnd="url(#arrDir)"/>
        {/* Speech bubble */}
        <rect x="140" y="55" width="70" height="22" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="175" y="69" textAnchor="middle" fill="#1e40af" fontSize="6">"Excuse me..."</text>
        <defs>
          <marker id="arrDir" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/>
          </marker>
        </defs>
      </svg>
    </SceneIllustration>
  )
}

function GymScene() {
  return (
    <SceneIllustration title="🏋️ Scene: At the Gym" bg="from-red-50 to-orange-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Wall */}
        <rect x="0" y="0" width="500" height="130" fill="#fef2f2"/>
        {/* Mirror */}
        <rect x="150" y="10" width="200" height="70" rx="4" fill="#e0f2fe" stroke="#93c5fd" strokeWidth="1"/>
        {/* Dumbbells rack */}
        <rect x="30" y="50" width="60" height="50" rx="3" fill="#44403c"/>
        {[35,50,65,80].map((x,i) => (
          <g key={`db${i}`}>
            <circle cx={x} cy="60" r="5" fill="#6b7280"/>
            <rect x={x-2} y="57" width="4" height="6" rx="1" fill="#9ca3af"/>
          </g>
        ))}
        {/* Treadmill */}
        <rect x="390" y="60" width="60" height="50" rx="4" fill="#374151"/>
        <rect x="395" y="65" width="50" height="25" rx="2" fill="#1e293b"/>
        <circle cx="405" cy="102" r="6" fill="#4b5563"/>
        <circle cx="435" cy="102" r="6" fill="#4b5563"/>
        {/* Person 1 */}
        <circle cx="200" cy="80" r="14" fill="#ef4444"/>
        <rect x="188" y="94" width="24" height="20" rx="3" fill="#dc2626"/>
        {/* Person 2 */}
        <circle cx="280" cy="82" r="14" fill="#3b82f6"/>
        <rect x="268" y="96" width="24" height="20" rx="3" fill="#2563eb"/>
        {/* Water bottle */}
        <rect x="240" y="100" width="8" height="14" rx="2" fill="#06b6d4" stroke="#0891b2" strokeWidth="0.5"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="70" fill="#f5f5f4"/>
        {/* Yoga mat */}
        <rect x="120" y="140" width="80" height="8" rx="3" fill="#a78bfa"/>
      </svg>
    </SceneIllustration>
  )
}

function LibraryScene() {
  return (
    <SceneIllustration title="📚 Scene: At the Library" bg="from-indigo-50 to-blue-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Wall */}
        <rect x="0" y="0" width="500" height="130" fill="#eef2ff"/>
        {/* Bookshelves */}
        {[20,90].map(x => (
          <g key={`shelf${x}`}>
            <rect x={x} y="10" width="60" height="95" rx="3" fill="#92400e"/>
            {[0,1,2,3].map(row => (
              <g key={`row${row}`}>
                <rect x={x+2} y={15+row*22} width="56" height="18" rx="1" fill="#78350f"/>
                {[0,1,2,3,4].map(b => (
                  <rect key={`book${b}`} x={x+4+b*11} y={16+row*22} width="9" height="16" rx="1" fill={['#ef4444','#3b82f6','#22c55e','#f59e0b','#8b5cf6'][b]}/>
                ))}
              </g>
            ))}
          </g>
        ))}
        {/* Study area sign */}
        <rect x="200" y="8" width="100" height="18" rx="4" fill="#4338ca"/>
        <text x="250" y="20" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">QUIET ZONE 🤫</text>
        {/* Study table */}
        <rect x="180" y="90" width="160" height="10" rx="3" fill="#d4a574"/>
        <rect x="195" y="100" width="6" height="25" fill="#92400e"/>
        <rect x="325" y="100" width="6" height="25" fill="#92400e"/>
        {/* Student 1 with laptop */}
        <circle cx="220" cy="68" r="12" fill="#60a5fa"/>
        <rect x="210" y="80" width="20" height="14" rx="3" fill="#2563eb"/>
        <rect x="210" y="82" width="25" height="10" rx="2" fill="#1e293b"/>
        {/* Student 2 with books */}
        <circle cx="310" cy="68" r="12" fill="#f472b6"/>
        <rect x="300" y="80" width="20" height="14" rx="3" fill="#db2777"/>
        <rect x="300" y="82" width="15" height="10" rx="1" fill="#fef3c7"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="70" fill="#f1f5f9"/>
        {/* Librarian desk */}
        <rect x="380" y="80" width="80" height="30" rx="4" fill="#44403c"/>
        <circle cx="420" cy="65" r="10" fill="#fbbf24"/>
        <rect x="412" y="75" width="16" height="12" rx="2" fill="#4338ca"/>
      </svg>
    </SceneIllustration>
  )
}

function SupermarketScene() {
  return (
    <SceneIllustration title="🛒 Scene: At the Supermarket" bg="from-green-50 to-lime-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Store interior */}
        <rect x="0" y="0" width="500" height="130" fill="#f0fdf4"/>
        {/* Shelves */}
        {[30,130,230].map((x,i) => (
          <g key={`aisle${i}`}>
            <rect x={x} y="20" width="80" height="80" rx="3" fill="#e2e8f0"/>
            {[0,1,2].map(row => (
              <rect key={`r${row}`} x={x+2} y={24+row*26} width="76" height="22" rx="2" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="0.5"/>
            ))}
            {/* Products */}
            {[0,1,2,3,4,5].map(p => (
              <rect key={`p${p}`} x={x+4+p*12} y={26} width="10" height="18" rx="2" fill={['#ef4444','#f59e0b','#22c55e','#3b82f6','#ec4899','#8b5cf6'][p]}/>
            ))}
          </g>
        ))}
        {/* Aisle sign */}
        <rect x="55" y="5" width="30" height="12" rx="3" fill="#22c55e"/>
        <text x="70" y="14" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Aisle 1</text>
        {/* Shopping cart */}
        <g transform="translate(360,70)">
          <rect x="0" y="0" width="35" height="25" rx="3" fill="none" stroke="#6b7280" strokeWidth="2"/>
          <line x1="-5" y1="25" x2="0" y2="15" stroke="#6b7280" strokeWidth="2"/>
          <circle cx="5" cy="30" r="4" fill="#9ca3af"/>
          <circle cx="30" cy="30" r="4" fill="#9ca3af"/>
          {/* Items in cart */}
          <rect x="4" y="4" width="10" height="8" rx="1" fill="#ef4444"/>
          <rect x="16" y="6" width="10" height="8" rx="1" fill="#22c55e"/>
        </g>
        {/* Shopper */}
        <circle cx="350" cy="62" r="14" fill="#60a5fa"/>
        <rect x="338" y="76" width="24" height="18" rx="3" fill="#2563eb"/>
        {/* Cashier */}
        <rect x="420" y="60" width="60" height="40" rx="4" fill="#44403c"/>
        <circle cx="450" cy="50" r="10" fill="#fbbf24"/>
        <rect x="442" y="60" width="16" height="12" rx="2" fill="#059669"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="70" fill="#ecfdf5"/>
      </svg>
    </SceneIllustration>
  )
}

function MovieScene() {
  return (
    <SceneIllustration title="🎬 Scene: At the Movies" bg="from-slate-100 to-gray-200">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Screen */}
        <rect x="50" y="10" width="400" height="70" rx="6" fill="#1e293b"/>
        <rect x="60" y="15" width="380" height="60" rx="4" fill="#0f172a"/>
        <text x="250" y="48" textAnchor="middle" fill="#475569" fontSize="10">🎬 NOW SHOWING</text>
        {/* Seats */}
        {[0,1,2].map(row => (
          <g key={`seatrow${row}`}>
            {[0,1,2,3,4,5,6,7].map(col => (
              <rect key={`seat${col}`} x={80+col*45} y={95+row*28} width="35" height="22" rx="5"
                fill={row===1 && (col===3||col===4) ? '#ef4444' : '#475569'}
                stroke={row===1 && (col===3||col===4) ? '#b91c1c' : '#374151'} strokeWidth="1"/>
            ))}
          </g>
        ))}
        {/* People in seats */}
        <circle cx="232" cy="112" r="8" fill="#60a5fa"/>
        <circle cx="277" cy="112" r="8" fill="#f472b6"/>
        {/* Popcorn */}
        <rect x="248" y="106" width="10" height="12" rx="2" fill="#fcd34d" stroke="#f59e0b" strokeWidth="0.5"/>
      </svg>
    </SceneIllustration>
  )
}

function RentingScene() {
  return (
    <SceneIllustration title="🏠 Scene: Renting an Apartment" bg="from-teal-50 to-cyan-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="500" height="70" fill="#ecfeff"/>
        {/* Apartment building */}
        <rect x="150" y="20" width="200" height="110" rx="4" fill="#e2e8f0"/>
        {/* Windows */}
        {[0,1,2,3].map(row => (
          [170,210,250,290,320].map(x => (
            <rect key={`w${row}${x}`} x={x} y={28+row*24} width="18" height="16" rx="2" fill={Math.random()>0.5 ? '#fef3c7' : '#bae6fd'} stroke="#94a3b8" strokeWidth="0.5"/>
          ))
        ))}
        {/* Door */}
        <rect x="232" y="100" width="36" height="30" rx="3" fill="#78350f"/>
        <circle cx="260" cy="118" r="2" fill="#fcd34d"/>
        {/* FOR RENT sign */}
        <rect x="180" y="8" width="70" height="16" rx="4" fill="#ef4444"/>
        <text x="215" y="19" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">FOR RENT</text>
        {/* Landlord */}
        <circle cx="380" cy="100" r="14" fill="#fbbf24"/>
        <rect x="368" y="114" width="24" height="18" rx="3" fill="#1e293b"/>
        {/* Prospective tenant */}
        <circle cx="120" cy="100" r="14" fill="#60a5fa"/>
        <rect x="108" y="114" width="24" height="18" rx="3" fill="#2563eb"/>
        {/* Key being shown */}
        <circle cx="350" cy="110" r="6" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="356" y="108" width="10" height="4" rx="1" fill="#f59e0b"/>
        {/* Ground */}
        <rect x="0" y="130" width="500" height="70" fill="#d1fae5"/>
        {/* Fence */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <rect key={`f${i}`} x={10+i*50} y="130" width="4" height="20" fill="#d4a574"/>
        ))}
        <rect x="0" y="148" width="500" height="3" fill="#d4a574"/>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// CONVERSATION DATA PART 2
// ═══════════════════════════════════════════════════════════════

export const conversationsPart2 = [
  // ─── Day 8: Phone/Video Call ─────────────────────────────
  {
    id: 'phone-call',
    day: 8,
    title: '📞 Business Phone Call & Video Meeting',
    category: 'Professional',
    difficulty: 'Advanced',
    color: 'slate',
    body: (
      <div>
        <PhoneCallScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Colleague' }}
          situation="A Zoom meeting to discuss a project deadline"
          lines={[
            { speaker: 'B', en: "Hi, Andi! Can you hear me okay? Let me just share my screen.", id: "Hai, Andi! Suaraku terdengar jelas? Saya share screen dulu ya.", note: '"Can you hear me?" — pembuka wajib di video call!' },
            { speaker: 'A', en: "Yeah, loud and clear! Thanks for setting this up.", id: "Ya, jelas! Terima kasih sudah atur meeting ini.", note: '"Loud and clear" = ekspresi untuk bilang suara jelas' },
            { speaker: 'B', en: "No problem. So, I wanted to touch base on the project timeline. Are we still on track for the Friday deadline?", id: "Tidak masalah. Jadi, saya mau bahas timeline proyek. Apakah kita masih on track untuk deadline Jumat?", note: '"Touch base" = membahas/update singkat' },
            { speaker: 'A', en: "For the most part, yes. However, I've run into a small issue with the data pipeline. I might need an extra day.", id: "Sebagian besar ya. Tapi saya mengalami masalah kecil dengan data pipeline. Mungkin butuh satu hari tambahan.", note: '"Run into" = menghadapi masalah (phrasal verb)' },
            { speaker: 'B', en: "I see. Could you walk me through what's happening?", id: "Saya paham. Bisa jelaskan apa yang terjadi?", note: '"Walk me through" = jelaskan step by step' },
            { speaker: 'A', en: "Sure. Basically, the API response format changed, so I need to update the parsing logic. It shouldn't take more than a day.", id: "Tentu. Intinya, format response API berubah, jadi saya perlu update logika parsing. Seharusnya tidak lebih dari sehari." },
            { speaker: 'B', en: "Got it. Let's push the deadline to Monday to be safe. I'll loop in the manager. Can you send a brief status update via email?", id: "Mengerti. Mari geser deadline ke Senin supaya aman. Saya akan informasikan ke manager. Bisa kirim update status singkat via email?", note: '"Loop in" = mengikutsertakan seseorang dalam informasi' },
            { speaker: 'A', en: "Absolutely, I'll send it over by end of day. Anything else we need to cover?", id: "Tentu, saya kirim sebelum akhir hari. Ada hal lain yang perlu dibahas?" },
            { speaker: 'B', en: "That's it for now. Let's reconnect on Thursday. Thanks, Andi!", id: "Itu saja untuk sekarang. Kita ngobrol lagi Kamis ya. Terima kasih, Andi!" },
          ]}
        />
        <KeyPhrasesCard title="Business Meeting Expressions" color="purple" phrases={[
          { en: "Let me share my screen", id: "Saya share layar ya" },
          { en: "Can you hear me okay?", id: "Suara saya terdengar jelas?" },
          { en: "I wanted to touch base on...", id: "Saya mau bahas tentang..." },
          { en: "Could you walk me through...?", id: "Bisa jelaskan step by step...?" },
          { en: "I've run into an issue", id: "Saya mengalami masalah" },
          { en: "Let's loop in [person]", id: "Mari informasikan ke [orang]" },
          { en: "I'll send it over by EOD", id: "Saya kirim sebelum akhir hari" },
          { en: "Let's reconnect on...", id: "Kita sambung lagi di hari..." },
          { en: "Are we still on track?", id: "Apakah masih sesuai rencana?" },
          { en: "Anything else to cover?", id: "Ada hal lain yang perlu dibahas?" },
        ]} />
        <ExpressionMeter
          formal={["I'd like to discuss...", "Could we schedule a follow-up?", "I'll circle back on this."]}
          informal={["Wanna talk about...?", "Let's catch up later.", "I'll get back to you on that."]}
        />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I wanted to ___ base on the project timeline." options={["touch","reach","hit","grab"]} answer="touch" explanation="'Touch base' = idiom bisnis untuk update/diskusi singkat" />
        <FillInBlank sentence="Could you ___ me through the process?" options={["walk","run","drive","move"]} answer="walk" explanation="'Walk me through' = jelaskan langkah demi langkah" />
        <FillInBlank sentence="I've ___ into a small issue with the code." options={["run","walked","come","fell"]} answer="run" explanation="'Run into' = menghadapi/bertemu secara tidak terduga" />
      </div>
    ),
  },

  // ─── Day 9: Hotel Check-in ──────────────────────────────
  {
    id: 'hotel',
    day: 9,
    title: '🏨 Hotel Check-in & Requests',
    category: 'Travel',
    difficulty: 'Intermediate',
    color: 'amber',
    body: (
      <div>
        <HotelScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Receptionist' }}
          situation="Arriving at a hotel after a long flight"
          lines={[
            { speaker: 'B', en: "Good evening! Welcome to the Grand Hotel. Do you have a reservation?", id: "Selamat malam! Selamat datang di Grand Hotel. Apakah sudah ada reservasi?" },
            { speaker: 'A', en: "Yes, I have a booking under the name Andi Pratama. I booked a standard room for three nights.", id: "Ya, saya booking atas nama Andi Pratama. Saya pesan kamar standar untuk tiga malam." },
            { speaker: 'B', en: "Let me pull that up... Yes, I see it. A standard room from March 20th to March 23rd. May I see your ID, please?", id: "Saya cari dulu... Ya, ketemu. Kamar standar dari 20 Maret sampai 23 Maret. Boleh lihat identitas Anda?" },
            { speaker: 'A', en: "Here's my passport. By the way, is it possible to upgrade to a room with a city view?", id: "Ini paspor saya. Ngomong-ngomong, bisa upgrade ke kamar dengan pemandangan kota?", note: '"Is it possible to..." = cara sopan minta sesuatu ekstra' },
            { speaker: 'B', en: "Let me check availability... You're in luck! We have a deluxe room available for an extra $30 per night. It has a beautiful skyline view.", id: "Saya cek ketersediaan... Beruntung! Ada kamar deluxe tersedia dengan tambahan $30 per malam. Pemandangan skyline yang indah." },
            { speaker: 'A', en: "That sounds worth it. I'll take the upgrade! What time is breakfast served?", id: "Kedengarannya worth it. Saya ambil upgrade-nya! Jam berapa sarapan?", note: '"Worth it" = sepadan dengan harganya' },
            { speaker: 'B', en: "Breakfast is from 6:30 to 10 AM in the restaurant on the second floor. Wi-Fi password is on the key card sleeve. Is there anything else I can help with?", id: "Sarapan dari jam 6:30 sampai 10 pagi di restoran lantai dua. Password Wi-Fi ada di sarung kartu kunci. Ada lagi yang bisa saya bantu?" },
            { speaker: 'A', en: "Could I get a wake-up call at 7 AM? And is there a gym in the hotel?", id: "Bisa minta wake-up call jam 7 pagi? Dan apakah ada gym di hotel?" },
            { speaker: 'B', en: "Absolutely! I'll set that up. The gym is on the 5th floor, open 24/7. Here are your key cards — your room is 1208. The elevator is to your left. Enjoy your stay!", id: "Tentu! Saya atur. Gym di lantai 5, buka 24 jam. Ini kartu kunci Anda — kamar 1208. Lift di sebelah kiri Anda. Selamat menikmati!" },
          ]}
        />
        <KeyPhrasesCard title="Hotel Vocabulary" color="amber" phrases={[
          { en: "I have a booking/reservation under...", id: "Saya ada booking atas nama..." },
          { en: "Is it possible to upgrade?", id: "Bisa upgrade?" },
          { en: "What time is checkout?", id: "Jam berapa checkout?" },
          { en: "Could I get a wake-up call?", id: "Bisa minta wake-up call?" },
          { en: "Is breakfast included?", id: "Sarapan termasuk?" },
          { en: "Could I have extra towels?", id: "Bisa minta handuk tambahan?" },
          { en: "The AC isn't working", id: "AC-nya tidak berfungsi" },
          { en: "I'd like to extend my stay", id: "Saya ingin perpanjang menginap" },
        ]} />
        <CulturalNote>
          <p className="font-bold mb-1">Hotel Etiquette 🏨</p>
          <p>Di hotel internasional, biasanya ada deposit saat check-in (hold di kartu kredit). Housekeeping biasanya datang siang hari — letakkan tanda "Do Not Disturb" kalau tidak mau diganggu. Tip untuk bellboy: $1-2 per tas.</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I have a reservation ___ the name Andi Pratama." options={["under","below","by","with"]} answer="under" explanation="'Under the name' = atas nama. Selalu pakai 'under' untuk reservasi" />
        <FillInBlank sentence="Is it ___ to get a late checkout?" options={["possible","able","can","maybe"]} answer="possible" explanation="'Is it possible to...' = cara sopan minta sesuatu" />
      </div>
    ),
  },

  // ─── Day 10: Asking for Directions ──────────────────────
  {
    id: 'directions',
    day: 10,
    title: '🗺️ Asking for Directions',
    category: 'Travel',
    difficulty: 'Beginner',
    color: 'blue',
    body: (
      <div>
        <DirectionsScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Local' }}
          situation="You're lost in a new city looking for a museum"
          lines={[
            { speaker: 'A', en: "Excuse me, could you help me? I'm trying to find the National Museum.", id: "Permisi, bisa bantu saya? Saya mencari Museum Nasional.", note: '"Excuse me" = pembuka standar saat bertanya ke orang asing' },
            { speaker: 'B', en: "Sure! The museum is about a 10-minute walk from here. Go straight down this road for two blocks.", id: "Tentu! Museum sekitar 10 menit jalan kaki dari sini. Jalan lurus di jalan ini dua blok." },
            { speaker: 'A', en: "Okay, straight for two blocks. Then what?", id: "Oke, lurus dua blok. Terus bagaimana?" },
            { speaker: 'B', en: "Then turn left at the traffic lights. You'll see a park on your right — the museum is right across from it.", id: "Lalu belok kiri di lampu merah. Anda akan lihat taman di sebelah kanan — museumnya tepat di seberangnya.", note: '"Right across from" = tepat di seberang' },
            { speaker: 'A', en: "Turn left at the lights, park on the right, museum across from it. Got it!", id: "Belok kiri di lampu, taman di kanan, museum di seberangnya. Mengerti!" },
            { speaker: 'B', en: "You can't miss it — it's a big white building with columns. If you pass a church, you've gone too far.", id: "Tidak mungkin terlewat — gedung putih besar dengan pilar. Kalau Anda melewati gereja, berarti sudah kelewatan.", note: '"You can\'t miss it" = pasti ketemu/tidak mungkin terlewat' },
            { speaker: 'A', en: "Thank you so much! You've been really helpful.", id: "Terima kasih banyak! Anda sangat membantu." },
            { speaker: 'B', en: "No worries! Enjoy the museum!", id: "Sama-sama! Selamat menikmati museumnya!" },
          ]}
        />
        <KeyPhrasesCard title="Direction Words & Phrases" color="indigo" phrases={[
          { en: "Go straight / Keep going", id: "Jalan lurus / Terus jalan" },
          { en: "Turn left / Turn right", id: "Belok kiri / Belok kanan" },
          { en: "It's on your left/right", id: "Ada di sebelah kiri/kanan Anda" },
          { en: "across from / opposite", id: "di seberang" },
          { en: "next to / beside", id: "di samping" },
          { en: "at the intersection / traffic lights", id: "di persimpangan / lampu merah" },
          { en: "You can't miss it", id: "Pasti ketemu (tidak mungkin terlewat)" },
          { en: "Is it within walking distance?", id: "Apakah bisa dijangkau jalan kaki?" },
        ]} />
        <PronunciationTip word="straight" ipa="streɪt" tip="8 letters but sounds like 'str-ATE'" />
        <PronunciationTip word="across" ipa="əˈkrɒs" tip="Stress on second syllable: a-CROSS" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Turn left ___ the traffic lights." options={["at","in","on","to"]} answer="at" explanation="'At the traffic lights/intersection' — 'at' untuk titik spesifik" />
        <FillInBlank sentence="The museum is right ___ from the park." options={["across","through","over","between"]} answer="across" explanation="'Across from' = di seberang" />
        <FillInBlank sentence="If you pass the church, you've gone too ___." options={["far","long","much","away"]} answer="far" explanation="'Gone too far' = sudah melewati tujuan" />
      </div>
    ),
  },

  // ─── Day 11: At the Bank ────────────────────────────────
  {
    id: 'bank',
    day: 11,
    title: '🏦 At the Bank',
    category: 'Daily Life',
    difficulty: 'Intermediate',
    color: 'emerald',
    body: (
      <div>
        <BankScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Teller' }}
          situation="Opening a new bank account as an international student"
          lines={[
            { speaker: 'A', en: "Hi, I'd like to open a savings account. I'm an international student.", id: "Hai, saya ingin buka rekening tabungan. Saya mahasiswa internasional." },
            { speaker: 'B', en: "Welcome! We'd be happy to help. Do you have your passport and proof of enrollment?", id: "Selamat datang! Kami senang membantu. Apakah Anda punya paspor dan bukti pendaftaran kuliah?" },
            { speaker: 'A', en: "Yes, I have both right here. What types of accounts do you offer?", id: "Ya, keduanya ada di sini. Jenis rekening apa saja yang tersedia?" },
            { speaker: 'B', en: "We have a basic savings account with no monthly fee for students, and a checking account with a debit card. Most students go with both.", id: "Kami punya tabungan dasar tanpa biaya bulanan untuk mahasiswa, dan rekening giro dengan kartu debit. Kebanyakan mahasiswa ambil keduanya.", note: '"Checking account" (US) = "Current account" (UK)' },
            { speaker: 'A', en: "I'll go with both, then. Is there a minimum deposit?", id: "Saya ambil keduanya kalau begitu. Apakah ada setoran minimum?" },
            { speaker: 'B', en: "Just $25 for the savings account. Would you also like to set up online banking and mobile payments?", id: "Hanya $25 untuk tabungan. Apakah Anda juga mau daftarkan online banking dan pembayaran mobile?" },
            { speaker: 'A', en: "Yes, please! And can I transfer money internationally from this account?", id: "Ya, tolong! Dan bisa transfer uang internasional dari rekening ini?" },
            { speaker: 'B', en: "Absolutely. International wire transfers are available through online banking. There's a $15 fee per transaction. Let me get the paperwork started.", id: "Tentu. Transfer internasional tersedia melalui online banking. Ada biaya $15 per transaksi. Saya siapkan dokumennya." },
          ]}
        />
        <KeyPhrasesCard title="Banking Vocabulary" color="emerald" phrases={[
          { en: "savings account / checking account", id: "rekening tabungan / rekening giro" },
          { en: "minimum deposit", id: "setoran minimum" },
          { en: "withdraw / withdrawal", id: "menarik uang / penarikan" },
          { en: "transfer / wire transfer", id: "transfer / transfer internasional" },
          { en: "balance / statement", id: "saldo / rekening koran" },
          { en: "monthly fee / interest rate", id: "biaya bulanan / suku bunga" },
          { en: "debit card / credit card", id: "kartu debit / kartu kredit" },
          { en: "set up online banking", id: "daftarkan online banking" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I'd like to ___ a savings account, please." options={["open","make","create","start"]} answer="open" explanation="'Open an account' = buka rekening (kolokasi yang benar)" />
        <FillInBlank sentence="Is there a minimum ___?" options={["deposit","payment","money","fund"]} answer="deposit" explanation="'Minimum deposit' = setoran minimal yang diperlukan" />
      </div>
    ),
  },

  // ─── Day 12: At the Gym ─────────────────────────────────
  {
    id: 'gym',
    day: 12,
    title: '🏋️ Working Out at the Gym',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'rose',
    body: (
      <div>
        <GymScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Gym Buddy' }}
          situation="Meeting someone at the gym during a workout session"
          lines={[
            { speaker: 'B', en: "Hey! Are you using this bench?", id: "Hey! Kamu pakai bench ini?" },
            { speaker: 'A', en: "No, go ahead! I just finished my set. I'm Andi, by the way.", id: "Tidak, silakan! Saya baru selesai satu set. Ngomong-ngomong, saya Andi.", note: '"Go ahead" = silakan (sangat umum digunakan)' },
            { speaker: 'B', en: "Thanks! I'm Jake. Do you come here often?", id: "Terima kasih! Saya Jake. Sering datang ke sini?" },
            { speaker: 'A', en: "Yeah, I try to work out three or four times a week. How about you?", id: "Ya, saya coba latihan tiga atau empat kali seminggu. Kamu?", note: '"Work out" = berolahraga/latihan di gym' },
            { speaker: 'B', en: "Same here. I'm doing a push-pull-legs split. What's your routine?", id: "Sama. Saya pakai program push-pull-legs. Rutinitas kamu apa?" },
            { speaker: 'A', en: "I'm focusing on upper body today — chest and shoulders. Could you spot me on the bench press?", id: "Hari ini fokus upper body — dada dan bahu. Bisa bantu spot saya di bench press?", note: '"Spot me" = bantu jaga keselamatan saat angkat beban' },
            { speaker: 'B', en: "Sure thing! How much are you pressing?", id: "Tentu! Berapa kamu angkat?" },
            { speaker: 'A', en: "I'm going for 60 kilos today. Just three reps.", id: "Hari ini mau coba 60 kilo. Tiga repetisi saja." },
            { speaker: 'B', en: "Nice! Let's do this. I'll be right behind you.", id: "Mantap! Ayo. Saya di belakang kamu." },
          ]}
        />
        <KeyPhrasesCard title="Gym & Fitness Expressions" color="rose" phrases={[
          { en: "Are you using this?", id: "Kamu pakai ini?" },
          { en: "Go ahead!", id: "Silakan!" },
          { en: "Could you spot me?", id: "Bisa bantu spot saya?" },
          { en: "How many sets/reps?", id: "Berapa set/repetisi?" },
          { en: "I'm warming up / cooling down", id: "Saya pemanasan / pendinginan" },
          { en: "Do you mind if I work in?", id: "Boleh saya ikut pakai bergantian?" },
          { en: "What's your routine/split?", id: "Program latihan kamu apa?" },
          { en: "I need to stretch first", id: "Saya perlu stretching dulu" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Could you ___ me on the bench press?" options={["spot","watch","help","see"]} answer="spot" explanation="'Spot' = istilah gym untuk bantu jaga keselamatan saat angkat beban" />
        <FillInBlank sentence="I try to work ___ four times a week." options={["out","up","in","off"]} answer="out" explanation="'Work out' = berolahraga. 'Work in' = ikut pakai alat bergantian" />
      </div>
    ),
  },

  // ─── Day 13: Library ────────────────────────────────────
  {
    id: 'library',
    day: 13,
    title: '📚 Studying at the Library',
    category: 'Academic',
    difficulty: 'Beginner',
    color: 'blue',
    body: (
      <div>
        <LibraryScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Classmate' }}
          situation="Studying for midterms at the university library"
          lines={[
            { speaker: 'A', en: "Hey, is this seat taken?", id: "Hey, kursi ini ada yang pakai?", note: '"Is this seat taken?" = cara sopan tanya sebelum duduk' },
            { speaker: 'B', en: "No, feel free! Are you studying for the statistics midterm too?", id: "Tidak, silakan! Kamu juga belajar untuk ujian tengah semester statistik?" },
            { speaker: 'A', en: "Yeah, I've been going over the probability chapter, but I'm stuck on Bayes' theorem.", id: "Ya, saya sudah mengulang bab probabilitas, tapi stuck di Bayes' theorem.", note: '"Going over" = meninjau ulang materi' },
            { speaker: 'B', en: "That one's tricky. Do you want to go over it together? Sometimes it helps to explain it to someone.", id: "Yang itu memang tricky. Mau kita bahas bareng? Kadang menjelaskan ke orang lain membantu." },
            { speaker: 'A', en: "That would be great! Also, do you know if there's a study group for this class?", id: "Itu bagus sekali! Juga, kamu tahu ada kelompok belajar untuk kelas ini?" },
            { speaker: 'B', en: "Actually, yeah. A few of us meet every Wednesday at the study lounge. You're welcome to join!", id: "Sebenarnya, ada. Beberapa dari kami bertemu setiap Rabu di study lounge. Kamu boleh ikut!", note: '"You\'re welcome to join" = ajakan yang sopan dan ramah' },
            { speaker: 'A', en: "I'd love to! What time do you usually meet?", id: "Mau banget! Biasanya jam berapa?" },
            { speaker: 'B', en: "Around 4 PM. We usually study for about two hours. Oh, by the way — you might want to borrow this textbook. It has great practice problems.", id: "Sekitar jam 4 sore. Biasanya belajar sekitar dua jam. Oh, ngomong-ngomong — mungkin kamu mau pinjam buku ini. Soal latihannya bagus." },
          ]}
        />
        <KeyPhrasesCard title="Academic & Library Expressions" color="indigo" phrases={[
          { en: "Is this seat taken?", id: "Kursi ini ada yang pakai?" },
          { en: "I'm stuck on...", id: "Saya stuck/bingung di..." },
          { en: "going over / reviewing", id: "meninjau ulang" },
          { en: "Do you want to study together?", id: "Mau belajar bareng?" },
          { en: "You're welcome to join!", id: "Boleh ikut!" },
          { en: "Could I borrow...?", id: "Boleh saya pinjam...?" },
          { en: "When is it due back?", id: "Kapan harus dikembalikan?" },
          { en: "I need to renew this book", id: "Saya perlu perpanjang buku ini" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="I've been going ___ the probability chapter all morning." options={["over","through","on","in"]} answer="over" explanation="'Going over' = meninjau/mengulang materi. 'Going through' juga bisa dipakai" />
        <FillInBlank sentence="Is this seat ___?" options={["taken","occupied","used","busy"]} answer="taken" explanation="'Is this seat taken?' = frasa paling umum untuk tanya apakah kursi kosong" />
      </div>
    ),
  },

  // ─── Day 14: Supermarket ────────────────────────────────
  {
    id: 'supermarket',
    day: 14,
    title: '🛒 Grocery Shopping',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'emerald',
    body: (
      <div>
        <SupermarketScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Staff' }}
          situation="Looking for specific items at the supermarket"
          lines={[
            { speaker: 'A', en: "Excuse me, could you tell me where the dairy section is?", id: "Permisi, bisa tahu di mana bagian produk susu?" },
            { speaker: 'B', en: "Sure! It's in aisle 3, all the way at the back of the store.", id: "Tentu! Di lorong 3, di bagian paling belakang toko.", note: '"All the way at the back" = paling ujung belakang' },
            { speaker: 'A', en: "Thanks! And do you carry almond milk?", id: "Terima kasih! Dan apakah Anda jual susu almond?", note: '"Do you carry...?" = apakah tersedia produk ini?' },
            { speaker: 'B', en: "Yes, we do! It's next to the regular milk. We have a few brands — Oatly and Alpro are the most popular.", id: "Ya! Ada di sebelah susu biasa. Kami punya beberapa merek — Oatly dan Alpro paling populer." },
            { speaker: 'A', en: "Perfect. Oh, I'm also looking for sriracha sauce. Which aisle would that be?", id: "Sempurna. Oh, saya juga cari saus sriracha. Di lorong mana ya?" },
            { speaker: 'B', en: "That would be in the international food aisle — aisle 7. Look for the Asian section.", id: "Itu di lorong makanan internasional — lorong 7. Cari bagian Asia." },
            { speaker: 'A', en: "Great! One more thing — are the avocados ripe? The last batch I got was still hard.", id: "Bagus! Satu lagi — apakah alpukatnya sudah matang? Yang terakhir saya beli masih keras.", note: '"Ripe" = matang (buah). Opposite: "unripe"' },
            { speaker: 'B', en: "We just got a fresh shipment today. They should be perfectly ripe. The organic ones are on sale too — buy one, get one free!", id: "Kami baru dapat kiriman segar hari ini. Seharusnya sudah matang sempurna. Yang organik juga sedang promo — beli satu gratis satu!" },
            { speaker: 'A', en: "Oh nice, I'll grab some! Thanks for your help.", id: "Oh bagus, saya ambil! Terima kasih bantuannya." },
          ]}
        />
        <KeyPhrasesCard title="Supermarket Vocabulary" color="emerald" phrases={[
          { en: "Where is the ___ section/aisle?", id: "Di mana bagian/lorong ___?" },
          { en: "Do you carry...?", id: "Apakah Anda jual...?" },
          { en: "Is this on sale?", id: "Apakah ini sedang diskon?" },
          { en: "buy one, get one free (BOGO)", id: "beli satu gratis satu" },
          { en: "ripe / fresh / organic", id: "matang / segar / organik" },
          { en: "best before / expiry date", id: "tanggal kadaluarsa" },
          { en: "paper or plastic? (bag)", id: "tas kertas atau plastik?" },
          { en: "Do you have a loyalty card?", id: "Punya kartu member?" },
        ]} />
        <PronunciationTip word="aisle" ipa="aɪl" tip="Silent 's' — sounds like 'I'll'" />
        <PronunciationTip word="receipt" ipa="rɪˈsiːt" tip="Silent 'p' — sounds like 'ree-SEET'" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Do you ___ almond milk?" options={["carry","bring","have","sell"]} answer="carry" explanation="'Do you carry...?' = apakah toko ini menjual/menyediakan produk tertentu" />
        <FillInBlank sentence="The avocados should be perfectly ___ by now." options={["ripe","mature","ready","done"]} answer="ripe" explanation="'Ripe' = matang (untuk buah). 'Mature' lebih untuk manusia/keju" />
      </div>
    ),
  },

  // ─── Day 15: Movies ─────────────────────────────────────
  {
    id: 'movies',
    day: 15,
    title: '🎬 Going to the Movies',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'slate',
    body: (
      <div>
        <MovieScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Friend', C: 'Cashier' }}
          situation="Buying tickets and snacks at the cinema"
          lines={[
            { speaker: 'A', en: "What do you feel like watching tonight?", id: "Mau nonton apa malam ini?", note: '"What do you feel like...?" = tanya preferensi secara casual' },
            { speaker: 'B', en: "How about that new sci-fi film? It's gotten great reviews.", id: "Gimana kalau film sci-fi baru itu? Reviewnya bagus banget.", note: '"It\'s gotten great reviews" = mendapat ulasan bagus' },
            { speaker: 'A', en: "Sounds good to me! Let's get tickets for the 8 o'clock showing.", id: "Boleh tuh! Ayo beli tiket yang tayang jam 8." },
            { speaker: 'C', en: "Hi! What movie and showtime?", id: "Hai! Film apa dan jam berapa?" },
            { speaker: 'A', en: "Two tickets for Interstellar at 8 PM, please.", id: "Dua tiket untuk Interstellar jam 8 malam." },
            { speaker: 'C', en: "Would you like standard or IMAX? IMAX is an extra $5.", id: "Mau standar atau IMAX? IMAX tambahan $5." },
            { speaker: 'B', en: "Let's splurge and go for IMAX! It's worth it for a sci-fi movie.", id: "Ayo royal pilih IMAX! Worth it untuk film sci-fi.", note: '"Splurge" = mengeluarkan uang lebih untuk sesuatu yang mewah' },
            { speaker: 'C', en: "Great! That's $32 total. Screen 5, on your right. Would you like to add any snacks?", id: "Bagus! Total $32. Layar 5, di sebelah kanan. Mau tambah snack?" },
            { speaker: 'A', en: "Yeah, a large popcorn and two drinks, please.", id: "Ya, popcorn besar dan dua minuman." },
            { speaker: 'B', en: "Let's find good seats. I prefer the middle rows — not too close, not too far.", id: "Ayo cari tempat duduk enak. Saya suka baris tengah — tidak terlalu dekat, tidak terlalu jauh." },
          ]}
        />
        <KeyPhrasesCard title="Movies & Entertainment Phrases" color="indigo" phrases={[
          { en: "What do you feel like watching?", id: "Mau nonton apa?" },
          { en: "It's gotten great reviews", id: "Review-nya bagus banget" },
          { en: "What showtime works for you?", id: "Jam tayang mana yang cocok?" },
          { en: "Let's splurge!", id: "Ayo royal/boros dikit!" },
          { en: "No spoilers!", id: "Jangan kasih spoiler!" },
          { en: "It was a must-watch!", id: "Wajib nonton!" },
          { en: "The plot twist was amazing", id: "Plot twist-nya luar biasa" },
          { en: "I give it 8 out of 10", id: "Saya kasih nilai 8 dari 10" },
        ]} />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="What do you ___ like watching tonight?" options={["feel","think","want","look"]} answer="feel" explanation="'Feel like + gerund' = ingin/mau melakukan sesuatu" />
        <FillInBlank sentence="The movie has ___ great reviews from critics." options={["gotten","took","made","gave"]} answer="gotten" explanation="'Gotten reviews' = mendapat ulasan. US English: 'gotten', UK: 'got'" />
      </div>
    ),
  },

  // ─── Day 16: Renting Apartment ──────────────────────────
  {
    id: 'renting',
    day: 16,
    title: '🏠 Renting an Apartment',
    category: 'Daily Life',
    difficulty: 'Advanced',
    color: 'teal',
    body: (
      <div>
        <RentingScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Landlord' }}
          situation="Viewing an apartment for rent near the university"
          lines={[
            { speaker: 'A', en: "Hi! I'm here to see the apartment listed online. The one-bedroom for $850 a month?", id: "Hai! Saya datang untuk lihat apartemen yang diiklankan online. Yang satu kamar $850 per bulan?" },
            { speaker: 'B', en: "Yes, come on in! Let me show you around. This is the living area — it's about 45 square meters.", id: "Ya, silakan masuk! Saya ajak keliling. Ini area ruang tamu — sekitar 45 meter persegi.", note: '"Show you around" = mengajak keliling/tur' },
            { speaker: 'A', en: "It's quite spacious! Is the rent inclusive of utilities?", id: "Cukup luas! Apakah sewanya termasuk utilitas?", note: '"Utilities" = listrik, air, gas' },
            { speaker: 'B', en: "Water is included, but electricity and internet are separate. Most tenants pay around $80 for those combined.", id: "Air termasuk, tapi listrik dan internet terpisah. Kebanyakan penyewa bayar sekitar $80 untuk keduanya." },
            { speaker: 'A', en: "That's reasonable. What about the lease terms? I'd need a one-year lease starting next month.", id: "Masuk akal. Bagaimana syarat sewanya? Saya butuh kontrak satu tahun mulai bulan depan." },
            { speaker: 'B', en: "The minimum lease is one year with a two-month security deposit, refundable when you move out. We also require the first month's rent upfront.", id: "Kontrak minimum satu tahun dengan deposit keamanan dua bulan, dikembalikan saat pindah. Kami juga minta bayar sewa bulan pertama di muka." },
            { speaker: 'A', en: "Is it pet-friendly? I have a small cat.", id: "Boleh bawa hewan peliharaan? Saya punya kucing kecil." },
            { speaker: 'B', en: "Cats are fine! There's a $200 pet deposit though. Would you like to go ahead with the application?", id: "Kucing boleh! Tapi ada deposit hewan $200. Mau lanjut dengan aplikasinya?", note: '"Go ahead with" = melanjutkan/memproses' },
            { speaker: 'A', en: "Yes, I'd like to! This place is exactly what I'm looking for. When could I move in?", id: "Ya, saya mau! Tempat ini persis yang saya cari. Kapan saya bisa pindah masuk?" },
          ]}
        />
        <KeyPhrasesCard title="Renting Vocabulary" color="emerald" phrases={[
          { en: "lease / lease agreement", id: "kontrak sewa" },
          { en: "security deposit", id: "deposit keamanan / uang jaminan" },
          { en: "utilities (water, electricity, gas)", id: "utilitas (air, listrik, gas)" },
          { en: "rent is inclusive of...", id: "sewa termasuk..." },
          { en: "pet-friendly / no pets allowed", id: "boleh hewan / tidak boleh hewan" },
          { en: "move in / move out", id: "pindah masuk / pindah keluar" },
          { en: "furnished / unfurnished", id: "berperabot / tanpa perabot" },
          { en: "landlord / tenant", id: "pemilik / penyewa" },
          { en: "first month's rent upfront", id: "sewa bulan pertama di muka" },
          { en: "Is this negotiable?", id: "Bisa nego?" },
        ]} />
        <CulturalNote>
          <p className="font-bold mb-1">Renting Abroad Tips 🏠</p>
          <p>Di banyak negara Barat, background check dan credit check umum dilakukan sebelum menyewa. Sebagai mahasiswa internasional, Anda mungkin diminta guarantor (penjamin). Selalu baca lease agreement dengan teliti sebelum tanda tangan — perhatikan break clause dan notice period.</p>
        </CulturalNote>
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank sentence="Is the rent ___ of utilities?" options={["inclusive","including","included","include"]} answer="inclusive" explanation="'Inclusive of' = termasuk. 'The rent is inclusive of water'" />
        <FillInBlank sentence="We require a two-month security ___." options={["deposit","payment","fee","charge"]} answer="deposit" explanation="'Security deposit' = uang jaminan yang dikembalikan saat pindah keluar" />
        <FillInBlank sentence="When could I ___ in?" options={["move","come","go","get"]} answer="move" explanation="'Move in' = pindah masuk ke tempat baru. 'Move out' = pindah keluar" />
      </div>
    ),
  },
]
