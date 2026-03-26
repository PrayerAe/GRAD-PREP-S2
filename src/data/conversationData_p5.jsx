// ═══════════════════════════════════════════════════════════════
// Daily English Conversation Part 5 — Day 35–43
// ═══════════════════════════════════════════════════════════════
import {
  SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank,
  CulturalNote, PronunciationTip, ExpressionMeter
} from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations
// ═══════════════════════════════════════════════════════════════

function BookingFlightScene() {
  return (
    <SceneIllustration title="✈️ Scene: Booking a Flight Online" bg="from-teal-50 to-cyan-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky background */}
        <rect x="0" y="0" width="500" height="200" fill="#e0f7fa"/>
        {/* Clouds */}
        <ellipse cx="80" cy="30" rx="35" ry="14" fill="white" opacity="0.85"/>
        <ellipse cx="105" cy="24" rx="22" ry="13" fill="white" opacity="0.85"/>
        <ellipse cx="400" cy="45" rx="40" ry="15" fill="white" opacity="0.8"/>
        <ellipse cx="430" cy="38" rx="24" ry="14" fill="white" opacity="0.8"/>
        {/* Airplane */}
        <g transform="translate(180,55) rotate(-10)">
          <ellipse cx="60" cy="12" rx="55" ry="11" fill="#0e7490"/>
          <path d="M20 12 L0 26 L10 26 L30 18 Z" fill="#0891b2"/>
          <path d="M100 12 L115 4 L110 2 L95 10 Z" fill="#0891b2"/>
          <path d="M40 23 L30 35 L38 35 L50 23 Z" fill="#0891b2"/>
          <rect x="25" y="7" width="10" height="8" rx="2" fill="#67e8f9"/>
          <rect x="38" y="7" width="10" height="8" rx="2" fill="#67e8f9"/>
          <rect x="51" y="7" width="10" height="8" rx="2" fill="#67e8f9"/>
        </g>
        {/* Laptop screen */}
        <rect x="110" y="100" width="280" height="75" rx="6" fill="#1e293b"/>
        <rect x="115" y="105" width="270" height="65" rx="4" fill="#f0fdfa"/>
        {/* Browser header */}
        <rect x="115" y="105" width="270" height="12" rx="4" fill="#ccfbf1"/>
        <circle cx="125" cy="111" r="3" fill="#f87171"/>
        <circle cx="134" cy="111" r="3" fill="#fbbf24"/>
        <circle cx="143" cy="111" r="3" fill="#4ade80"/>
        <rect x="155" y="107" width="140" height="8" rx="3" fill="white"/>
        <text x="225" y="113" textAnchor="middle" fill="#0e7490" fontSize="5">booking.flights.com</text>
        {/* Flight booking form */}
        <rect x="120" y="120" width="115" height="8" rx="2" fill="#99f6e4"/>
        <text x="128" y="126" fill="#0f766e" fontSize="5.5" fontWeight="bold">From: Jakarta (CGK)</text>
        <rect x="120" y="131" width="115" height="8" rx="2" fill="#99f6e4"/>
        <text x="128" y="137" fill="#0f766e" fontSize="5.5" fontWeight="bold">To: London (LHR)</text>
        <rect x="120" y="142" width="55" height="8" rx="2" fill="#a5f3fc"/>
        <text x="128" y="148" fill="#0e7490" fontSize="5">Depart: Apr 10</text>
        <rect x="179" y="142" width="55" height="8" rx="2" fill="#a5f3fc"/>
        <text x="187" y="148" fill="#0e7490" fontSize="5">Return: Apr 24</text>
        {/* Search button */}
        <rect x="248" y="120" width="130" height="38" rx="4" fill="#0d9488"/>
        <text x="313" y="143" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SEARCH FLIGHTS</text>
        {/* Laptop base */}
        <rect x="95" y="175" width="310" height="8" rx="3" fill="#334155"/>
        <rect x="175" y="183" width="150" height="4" rx="2" fill="#475569"/>
        {/* Person */}
        <circle cx="60" cy="130" r="18" fill="#fbbf24"/>
        <rect x="45" y="148" width="30" height="22" rx="5" fill="#0e7490"/>
        {/* Finger pointing */}
        <line x1="75" y1="138" x2="108" y2="145" stroke="#fbbf24" strokeWidth="3"/>
        <circle cx="108" cy="145" r="4" fill="#fbbf24"/>
      </svg>
    </SceneIllustration>
  )
}

function LaundryScene() {
  return (
    <SceneIllustration title="🧺 Scene: At the Laundromat" bg="from-amber-50 to-yellow-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Room background */}
        <rect x="0" y="0" width="500" height="200" fill="#fffbeb"/>
        {/* Tiled floor */}
        {[0,50,100,150,200,250,300,350,400,450].map((x, i) => (
          <rect key={i} x={x} y="160" width="50" height="40" fill={i % 2 === 0 ? '#fef9c3' : '#fef3c7'} stroke="#fde68a" strokeWidth="0.5"/>
        ))}
        {/* Back wall */}
        <rect x="0" y="0" width="500" height="165" fill="#fffbeb"/>
        {/* Row of washing machines */}
        {[30, 110, 190, 270, 350].map((x, i) => (
          <g key={i}>
            <rect x={x} y="80" width="70" height="80" rx="5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5"/>
            <rect x={x} y="80" width="70" height="18" rx="5" fill="#94a3b8"/>
            <circle cx={x+35} cy="130" r="24" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="2"/>
            <circle cx={x+35} cy="130" r="18" fill={i === 1 ? '#60a5fa' : '#dbeafe'} stroke="#93c5fd" strokeWidth="1"/>
            {i === 1 && <circle cx={x+35} cy="130" r="12" fill="#3b82f6" opacity="0.5"/>}
            <rect x={x+8} y="85" width="12" height="4" rx="2" fill="#fbbf24"/>
            <circle cx={x+28} cy="87" r="3" fill="#f87171"/>
            <circle cx={x+35} cy="87" r="3" fill="#4ade80"/>
            <circle cx={x+42} cy="87" r="3" fill="#60a5fa"/>
          </g>
        ))}
        {/* Laundry basket */}
        <rect x="430" y="130" width="50" height="35" rx="4" fill="#fde68a" stroke="#fbbf24" strokeWidth="1.5"/>
        <path d="M430 130 Q455 120 480 130" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        {/* Clothes in basket */}
        <path d="M435 125 Q448 118 455 122" fill="#f87171" stroke="none"/>
        <path d="M450 122 Q462 115 470 120" fill="#60a5fa" stroke="none"/>
        {/* Person A */}
        <circle cx="82" cy="62" r="16" fill="#fbbf24"/>
        <rect x="69" y="78" width="26" height="18" rx="4" fill="#f59e0b"/>
        <rect x="72" y="90" width="8" height="22" rx="2" fill="#fde68a"/>
        <rect x="82" y="90" width="8" height="22" rx="2" fill="#fde68a"/>
        {/* Person B */}
        <circle cx="415" cy="62" r="16" fill="#f472b6"/>
        <rect x="402" y="78" width="26" height="18" rx="4" fill="#ec4899"/>
        <rect x="405" y="90" width="8" height="22" rx="2" fill="#fbcfe8"/>
        <rect x="415" y="90" width="8" height="22" rx="2" fill="#fbcfe8"/>
        {/* Speech bubble */}
        <rect x="90" y="45" width="100" height="18" rx="8" fill="white" stroke="#fbbf24" strokeWidth="1"/>
        <text x="140" y="57" textAnchor="middle" fill="#92400e" fontSize="6">"Is this machine free?"</text>
        <polygon points="97,63 90,63 97,58" fill="white"/>
      </svg>
    </SceneIllustration>
  )
}

function WorkshopScene() {
  return (
    <SceneIllustration title="🎓 Scene: At a Workshop / Seminar" bg="from-emerald-50 to-green-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Room */}
        <rect x="0" y="0" width="500" height="200" fill="#ecfdf5"/>
        {/* Stage / presentation area */}
        <rect x="0" y="120" width="500" height="80" fill="#d1fae5"/>
        <rect x="0" y="120" width="500" height="5" fill="#6ee7b7"/>
        {/* Large screen / projector */}
        <rect x="150" y="10" width="200" height="100" rx="5" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2"/>
        <rect x="155" y="15" width="190" height="90" rx="3" fill="#dbeafe"/>
        {/* Slide content */}
        <rect x="165" y="22" width="170" height="10" rx="2" fill="#1e3a8a"/>
        <text x="250" y="30" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">AI IN EDUCATION 2026</text>
        <rect x="165" y="36" width="100" height="6" rx="2" fill="#93c5fd"/>
        <rect x="165" y="45" width="120" height="6" rx="2" fill="#93c5fd"/>
        <rect x="165" y="54" width="80" height="6" rx="2" fill="#93c5fd"/>
        <rect x="270" y="36" width="55" height="55" rx="3" fill="#bfdbfe"/>
        <circle cx="297" cy="58" r="20" fill="#3b82f6" opacity="0.6"/>
        <text x="297" y="62" textAnchor="middle" fill="white" fontSize="9">AI</text>
        <text x="297" y="100" textAnchor="middle" fill="#1e3a8a" fontSize="4.5">Fig. 1 — Neural Net</text>
        {/* Presenter */}
        <circle cx="100" cy="85" r="16" fill="#f59e0b"/>
        <rect x="87" y="101" width="26" height="20" rx="4" fill="#0d9488"/>
        {/* Pointer stick */}
        <line x1="113" y1="92" x2="150" y2="75" stroke="#374151" strokeWidth="2"/>
        <circle cx="150" cy="75" r="3" fill="#ef4444"/>
        {/* Audience seats */}
        {[40, 90, 140, 210, 260, 310, 360, 410].map((x, i) => (
          <g key={i}>
            <rect x={x} y="128" width="36" height="24" rx="4" fill="#a7f3d0" stroke="#6ee7b7" strokeWidth="1"/>
            <circle cx={x+18} cy="119" r="11" fill={['#fbbf24','#f472b6','#60a5fa','#a78bfa','#fbbf24','#34d399','#f87171','#60a5fa'][i]}/>
          </g>
        ))}
        {/* Podium */}
        <rect x="65" y="110" width="50" height="30" rx="3" fill="#374151"/>
        <rect x="60" y="108" width="60" height="8" rx="2" fill="#4b5563"/>
        {/* Mic on podium */}
        <rect x="87" y="100" width="4" height="8" fill="#9ca3af"/>
        <circle cx="89" cy="98" r="5" fill="#6b7280"/>
      </svg>
    </SceneIllustration>
  )
}

function ComplaintScene() {
  return (
    <SceneIllustration title="🛒 Scene: Complaining About a Product" bg="from-rose-50 to-pink-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Store interior */}
        <rect x="0" y="0" width="500" height="200" fill="#fff1f2"/>
        {/* Counter */}
        <rect x="150" y="100" width="230" height="70" rx="5" fill="#fda4af" stroke="#fb7185" strokeWidth="1.5"/>
        <rect x="150" y="100" width="230" height="12" rx="5" fill="#fb7185"/>
        <text x="265" y="110" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">CUSTOMER SERVICE</text>
        {/* Shelves background */}
        <rect x="0" y="10" width="140" height="160" fill="#ffe4e6"/>
        <rect x="10" y="30" width="120" height="5" fill="#fda4af"/>
        <rect x="10" y="65" width="120" height="5" fill="#fda4af"/>
        <rect x="10" y="100" width="120" height="5" fill="#fda4af"/>
        {/* Products on shelf */}
        {[15,35,55,75,95].map((x,i) => (
          <rect key={i} x={x} y={35} width="18" height="28" rx="2" fill={['#fca5a5','#fdba74','#a5b4fc','#86efac','#f9a8d4'][i]}/>
        ))}
        {[15,35,55,75,95].map((x,i) => (
          <rect key={i} x={x} y={70} width="18" height="28" rx="2" fill={['#a5b4fc','#86efac','#fca5a5','#fdba74','#f9a8d4'][i]}/>
        ))}
        {/* Broken/damaged product box */}
        <rect x="265" y="115" width="40" height="40" rx="3" fill="white" stroke="#f43f5e" strokeWidth="1.5"/>
        <path d="M265 115 L305 155 M305 115 L265 155" stroke="#f43f5e" strokeWidth="1.5" opacity="0.4"/>
        <text x="285" y="138" textAnchor="middle" fill="#f43f5e" fontSize="10">✕</text>
        <text x="285" y="162" textAnchor="middle" fill="#9f1239" fontSize="5">DEFECTIVE</text>
        {/* Customer — upset */}
        <circle cx="100" cy="95" r="17" fill="#fbbf24"/>
        <rect x="87" y="112" width="26" height="20" rx="4" fill="#f43f5e"/>
        {/* Eyebrows angled (angry) */}
        <line x1="91" y1="88" x2="99" y2="92" stroke="#92400e" strokeWidth="1.5"/>
        <line x1="101" y1="92" x2="109" y2="88" stroke="#92400e" strokeWidth="1.5"/>
        {/* Receipt in hand */}
        <rect x="108" y="104" width="18" height="26" rx="2" fill="white" stroke="#fda4af" strokeWidth="1"/>
        <line x1="111" y1="108" x2="123" y2="108" stroke="#fda4af" strokeWidth="0.8"/>
        <line x1="111" y1="112" x2="120" y2="112" stroke="#fda4af" strokeWidth="0.8"/>
        <line x1="111" y1="116" x2="123" y2="116" stroke="#fda4af" strokeWidth="0.8"/>
        {/* Service rep */}
        <circle cx="370" cy="88" r="17" fill="#f472b6"/>
        <rect x="357" y="105" width="26" height="20" rx="4" fill="#db2777"/>
        {/* Headset */}
        <path d="M355 85 Q355 75 370 75 Q385 75 385 85" fill="none" stroke="#9d174d" strokeWidth="2.5"/>
        <rect x="352" y="84" width="6" height="8" rx="2" fill="#9d174d"/>
        <rect x="382" y="84" width="6" height="8" rx="2" fill="#9d174d"/>
        {/* Speech bubble from customer */}
        <rect x="118" y="72" width="120" height="18" rx="8" fill="white" stroke="#f43f5e" strokeWidth="1"/>
        <text x="178" y="84" textAnchor="middle" fill="#9f1239" fontSize="6">"I want a full refund, please."</text>
      </svg>
    </SceneIllustration>
  )
}

function VetScene() {
  return (
    <SceneIllustration title="🐾 Scene: At the Veterinary Clinic" bg="from-teal-50 to-cyan-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Clinic background */}
        <rect x="0" y="0" width="500" height="200" fill="#f0fdfa"/>
        {/* Examination table */}
        <rect x="150" y="100" width="220" height="20" rx="6" fill="#5eead4" stroke="#2dd4bf" strokeWidth="1.5"/>
        <rect x="175" y="120" width="15" height="55" rx="4" fill="#0d9488"/>
        <rect x="335" y="120" width="15" height="55" rx="4" fill="#0d9488"/>
        {/* Cat on table */}
        <ellipse cx="270" cy="95" rx="30" ry="16" fill="#fbbf24"/>
        <circle cx="270" cy="80" r="14" fill="#fbbf24"/>
        {/* Cat ears */}
        <polygon points="258,70 262,55 268,70" fill="#fbbf24"/>
        <polygon points="272,70 278,55 282,70" fill="#fbbf24"/>
        <polygon points="259,70 263,59 267,70" fill="#fda4af"/>
        <polygon points="273,70 277,59 281,70" fill="#fda4af"/>
        {/* Cat face */}
        <circle cx="264" cy="80" r="2.5" fill="#1e293b"/>
        <circle cx="276" cy="80" r="2.5" fill="#1e293b"/>
        <path d="M268 84 Q270 87 272 84" fill="none" stroke="#1e293b" strokeWidth="1.2"/>
        {/* Cat tail */}
        <path d="M300 95 Q320 80 330 90 Q340 100 325 105" fill="none" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"/>
        {/* Vet */}
        <circle cx="90" cy="85" r="17" fill="#f472b6"/>
        <rect x="77" y="102" width="26" height="22" rx="4" fill="white"/>
        {/* Stethoscope */}
        <path d="M93 108 Q105 105 110 100 Q120 95 125 105 Q130 115 120 120" fill="none" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="120" cy="121" r="5" fill="#7c3aed"/>
        {/* Cross on lab coat */}
        <rect x="82" y="108" width="8" height="2" fill="#f43f5e"/>
        <rect x="85" y="105" width="2" height="8" fill="#f43f5e"/>
        {/* Pet owner */}
        <circle cx="415" cy="85" r="17" fill="#60a5fa"/>
        <rect x="402" y="102" width="26" height="22" rx="4" fill="#2563eb"/>
        {/* Worried face */}
        <path d="M408 96 Q415 93 422 96" fill="none" stroke="#1e3a8a" strokeWidth="1.5"/>
        {/* Wall decorations */}
        <rect x="10" y="20" width="120" height="80" rx="5" fill="white" stroke="#99f6e4" strokeWidth="1.5"/>
        <text x="70" y="40" textAnchor="middle" fill="#0f766e" fontSize="7" fontWeight="bold">HAPPY PAWS</text>
        <text x="70" y="52" textAnchor="middle" fill="#0f766e" fontSize="6">Veterinary Clinic</text>
        <circle cx="70" cy="70" r="18" fill="#ccfbf1"/>
        <text x="70" y="75" textAnchor="middle" fontSize="18">🐾</text>
        {/* Posters */}
        <rect x="375" y="20" width="90" height="55" rx="4" fill="#fef9c3" stroke="#fde68a" strokeWidth="1.5"/>
        <text x="420" y="38" textAnchor="middle" fill="#78350f" fontSize="6" fontWeight="bold">Pet Vaccination</text>
        <text x="420" y="50" textAnchor="middle" fill="#78350f" fontSize="5">Schedule 2026</text>
        <text x="420" y="65" textAnchor="middle" fontSize="16">💉</text>
      </svg>
    </SceneIllustration>
  )
}

function RentCarScene() {
  return (
    <SceneIllustration title="🚗 Scene: Renting a Car" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect x="0" y="0" width="500" height="200" fill="#eff6ff"/>
        {/* Road */}
        <rect x="0" y="150" width="500" height="50" fill="#475569"/>
        <rect x="0" y="168" width="500" height="4" fill="#fbbf24" opacity="0.7"/>
        {[0,60,120,180,240,300,360,420].map((x,i) => (
          <rect key={i} x={x} y="192" width="45" height="4" fill="#fbbf24" opacity="0.5"/>
        ))}
        {/* Car rental building */}
        <rect x="0" y="40" width="160" height="112" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="0" y="40" width="160" height="20" fill="#1e3a8a"/>
        <text x="80" y="53" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">🚗 CAR RENTAL</text>
        <rect x="15" y="75" width="50" height="40" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <rect x="70" y="75" width="50" height="40" rx="3" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="40" y="100" textAnchor="middle" fill="#1e3a8a" fontSize="6">Economy</text>
        <text x="40" y="108" textAnchor="middle" fill="#1e3a8a" fontSize="6">$35/day</text>
        <text x="95" y="100" textAnchor="middle" fill="#1e3a8a" fontSize="6">SUV</text>
        <text x="95" y="108" textAnchor="middle" fill="#1e3a8a" fontSize="6">$75/day</text>
        <rect x="55" y="125" width="50" height="27" rx="3" fill="#bfdbfe"/>
        {/* Rental car */}
        <g transform="translate(200, 100)">
          <rect x="0" y="22" width="160" height="44" rx="8" fill="#3b82f6"/>
          <path d="M25 22 Q35 0 65 0 L120 0 Q140 0 150 22 Z" fill="#60a5fa"/>
          <rect x="35" y="5" width="40" height="15" rx="3" fill="#bfdbfe" opacity="0.9"/>
          <rect x="80" y="5" width="40" height="15" rx="3" fill="#bfdbfe" opacity="0.9"/>
          <circle cx="30" cy="66" r="16" fill="#1e293b"/>
          <circle cx="30" cy="66" r="10" fill="#64748b"/>
          <circle cx="30" cy="66" r="4" fill="#cbd5e1"/>
          <circle cx="130" cy="66" r="16" fill="#1e293b"/>
          <circle cx="130" cy="66" r="10" fill="#64748b"/>
          <circle cx="130" cy="66" r="4" fill="#cbd5e1"/>
          <rect x="0" y="30" width="8" height="10" rx="2" fill="#fbbf24"/>
          <rect x="152" y="30" width="8" height="10" rx="2" fill="#f87171"/>
        </g>
        {/* Agent at counter */}
        <circle cx="430" cy="110" r="17" fill="#34d399"/>
        <rect x="417" y="127" width="26" height="20" rx="4" fill="#059669"/>
        {/* Customer */}
        <circle cx="375" cy="108" r="17" fill="#fbbf24"/>
        <rect x="362" y="125" width="26" height="20" rx="4" fill="#f59e0b"/>
        {/* Keys icon */}
        <circle cx="415" cy="120" r="6" fill="#fde68a" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="419" y="119" width="10" height="3" rx="1" fill="#fbbf24"/>
        <rect x="426" y="117" width="3" height="3" rx="0.5" fill="#fbbf24"/>
        <rect x="426" y="122" width="3" height="3" rx="0.5" fill="#fbbf24"/>
      </svg>
    </SceneIllustration>
  )
}

function StudyGroupScene() {
  return (
    <SceneIllustration title="📚 Scene: Study Group Session" bg="from-emerald-50 to-teal-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Library / room background */}
        <rect x="0" y="0" width="500" height="200" fill="#ecfdf5"/>
        {/* Bookshelf on left */}
        <rect x="0" y="10" width="90" height="150" rx="4" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        {[20,40,60,80,100,120].map((y,i) => (
          <rect key={i} x="5" y={y} width="80" height="3" fill="#6ee7b7"/>
        ))}
        {/* Books */}
        {[
          [8,23,14,15,'#f87171'],[23,23,10,15,'#fbbf24'],[34,23,12,15,'#60a5fa'],[47,23,8,15,'#a78bfa'],[56,23,16,15,'#34d399'],
          [8,43,12,15,'#fb923c'],[21,43,14,15,'#818cf8'],[36,43,10,15,'#f472b6'],[47,43,16,15,'#4ade80'],
          [8,63,10,15,'#60a5fa'],[19,63,14,15,'#fbbf24'],[34,63,12,15,'#f87171'],[47,63,8,15,'#a78bfa'],
        ].map(([x,y,w,h,fill],i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="1.5" fill={fill}/>
        ))}
        {/* Round study table */}
        <ellipse cx="285" cy="135" rx="130" ry="45" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="2"/>
        <ellipse cx="285" cy="130" rx="120" ry="38" fill="#a7f3d0" stroke="#34d399" strokeWidth="1.5"/>
        {/* Books & notes on table */}
        <rect x="235" y="115" width="40" height="28" rx="3" fill="white" stroke="#6ee7b7" strokeWidth="1"/>
        <rect x="238" y="118" width="34" height="3" fill="#34d399"/>
        <rect x="238" y="124" width="28" height="2" fill="#d1fae5"/>
        <rect x="238" y="129" width="30" height="2" fill="#d1fae5"/>
        <rect x="238" y="134" width="25" height="2" fill="#d1fae5"/>
        <rect x="285" y="112" width="35" height="30" rx="3" fill="#fef3c7" stroke="#fde68a" strokeWidth="1"/>
        <rect x="288" y="115" width="29" height="2" fill="#fbbf24"/>
        <rect x="288" y="120" width="22" height="2" fill="#fde68a"/>
        <rect x="288" y="125" width="26" height="2" fill="#fde68a"/>
        <rect x="288" y="130" width="18" height="2" fill="#fde68a"/>
        {/* Laptop on table */}
        <rect x="190" y="118" width="38" height="26" rx="3" fill="#334155"/>
        <rect x="192" y="120" width="34" height="22" rx="2" fill="#0ea5e9"/>
        <text x="209" y="133" textAnchor="middle" fill="white" fontSize="7">💻</text>
        {/* Students around table */}
        <circle cx="285" cy="85" r="16" fill="#fbbf24"/>
        <rect x="272" y="101" width="26" height="18" rx="4" fill="#f59e0b"/>
        <circle cx="175" cy="115" r="16" fill="#60a5fa"/>
        <rect x="162" y="131" width="26" height="18" rx="4" fill="#2563eb"/>
        <circle cx="395" cy="115" r="16" fill="#f472b6"/>
        <rect x="382" y="131" width="26" height="18" rx="4" fill="#db2777"/>
        <circle cx="195" cy="168" r="16" fill="#a78bfa"/>
        <rect x="182" y="184" width="26" height="18" rx="4" fill="#7c3aed"/>
        <circle cx="375" cy="168" r="16" fill="#34d399"/>
        <rect x="362" y="184" width="26" height="18" rx="4" fill="#059669"/>
        {/* Speech bubble */}
        <rect x="300" y="68" width="110" height="18" rx="8" fill="white" stroke="#fbbf24" strokeWidth="1"/>
        <text x="355" y="80" textAnchor="middle" fill="#92400e" fontSize="6">"Can you explain this part?"</text>
      </svg>
    </SceneIllustration>
  )
}

function NetworkingScene() {
  return (
    <SceneIllustration title="🤝 Scene: Networking Event / Mixer" bg="from-slate-50 to-gray-100">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant venue background */}
        <rect x="0" y="0" width="500" height="200" fill="#f8fafc"/>
        {/* Decorative ceiling lights */}
        {[70,150,230,310,390].map((x,i) => (
          <g key={i}>
            <line x1={x} y1="0" x2={x} y2="18" stroke="#cbd5e1" strokeWidth="1.5"/>
            <circle cx={x} cy="20" r="7" fill="#fbbf24" opacity="0.85"/>
            <circle cx={x} cy="20" r="4" fill="#fef9c3"/>
            <ellipse cx={x} cy="30" rx="12" ry="5" fill="#fef9c3" opacity="0.3"/>
          </g>
        ))}
        {/* Cocktail table 1 */}
        <rect x="65" y="95" width="4" height="65" rx="2" fill="#64748b"/>
        <ellipse cx="67" cy="95" rx="28" ry="8" fill="#94a3b8"/>
        <ellipse cx="67" cy="93" rx="27" ry="7" fill="#e2e8f0"/>
        {/* Wine glass on table 1 */}
        <path d="M58 85 Q67 75 76 85" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
        <line x1="67" y1="85" x2="67" y2="92" stroke="#93c5fd" strokeWidth="1.5"/>
        {/* Cocktail table 2 */}
        <rect x="248" y="95" width="4" height="65" rx="2" fill="#64748b"/>
        <ellipse cx="250" cy="95" rx="28" ry="8" fill="#94a3b8"/>
        <ellipse cx="250" cy="93" rx="27" ry="7" fill="#e2e8f0"/>
        <path d="M241 85 Q250 74 259 85" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1"/>
        <line x1="250" y1="85" x2="250" y2="92" stroke="#6ee7b7" strokeWidth="1.5"/>
        {/* Cocktail table 3 */}
        <rect x="428" y="95" width="4" height="65" rx="2" fill="#64748b"/>
        <ellipse cx="430" cy="95" rx="28" ry="8" fill="#94a3b8"/>
        <ellipse cx="430" cy="93" rx="27" ry="7" fill="#e2e8f0"/>
        <path d="M421 85 Q430 74 439 85" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1"/>
        <line x1="430" y1="85" x2="430" y2="92" stroke="#f9a8d4" strokeWidth="1.5"/>
        {/* Professionals networking */}
        {/* Group 1 near table 1 */}
        <circle cx="95" cy="100" r="14" fill="#1e3a8a"/>
        <rect x="83" y="114" width="24" height="18" rx="4" fill="#1e40af"/>
        <rect x="86" y="102" width="6" height="8" rx="1" fill="#bfdbfe"/>
        <circle cx="130" cy="103" r="14" fill="#fbbf24"/>
        <rect x="118" y="117" width="24" height="18" rx="4" fill="#f59e0b"/>
        {/* Business card exchange */}
        <rect x="108" y="115" width="20" height="13" rx="2" fill="white" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="110" y="117" width="16" height="2" fill="#3b82f6"/>
        <rect x="110" y="121" width="10" height="1.5" fill="#93c5fd"/>
        {/* Group 2 near table 2 */}
        <circle cx="210" cy="100" r="14" fill="#f472b6"/>
        <rect x="198" y="114" width="24" height="18" rx="4" fill="#db2777"/>
        <circle cx="280" cy="98" r="14" fill="#34d399"/>
        <rect x="268" y="112" width="24" height="18" rx="4" fill="#059669"/>
        <circle cx="315" cy="102" r="14" fill="#a78bfa"/>
        <rect x="303" y="116" width="24" height="18" rx="4" fill="#7c3aed"/>
        {/* Speech bubble */}
        <rect x="215" y="80" width="100" height="16" rx="7" fill="white" stroke="#94a3b8" strokeWidth="1"/>
        <text x="265" y="91" textAnchor="middle" fill="#374151" fontSize="5.5">"What do you do here?"</text>
        {/* Group 3 near table 3 */}
        <circle cx="390" cy="100" r="14" fill="#fb923c"/>
        <rect x="378" y="114" width="24" height="18" rx="4" fill="#ea580c"/>
        <circle cx="455" cy="100" r="14" fill="#60a5fa"/>
        <rect x="443" y="114" width="24" height="18" rx="4" fill="#2563eb"/>
        {/* Name tags */}
        <rect x="381" y="108" width="14" height="8" rx="1" fill="white" stroke="#fbbf24" strokeWidth="0.8"/>
        <rect x="383" y="110" width="10" height="1.5" fill="#f59e0b"/>
        <rect x="446" y="108" width="14" height="8" rx="1" fill="white" stroke="#93c5fd" strokeWidth="0.8"/>
        <rect x="448" y="110" width="10" height="1.5" fill="#3b82f6"/>
      </svg>
    </SceneIllustration>
  )
}

function CookingClassScene() {
  return (
    <SceneIllustration title="👩‍🍳 Scene: Cooking Class" bg="from-pink-50 to-rose-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Kitchen background */}
        <rect x="0" y="0" width="500" height="200" fill="#fff1f2"/>
        {/* Kitchen tiles on wall */}
        {[0,40,80,120,160,200,240,280,320,360,400,440,480].map((x,i) => (
          [0,25,50,75].map((y,j) => (
            <rect key={`${i}-${j}`} x={x} y={y} width="40" height="25" fill={(i+j)%2===0 ? '#ffe4e6' : '#fecdd3'} stroke="#fda4af" strokeWidth="0.5"/>
          ))
        ))}
        {/* Kitchen counter */}
        <rect x="0" y="110" width="500" height="90" fill="#fda4af"/>
        <rect x="0" y="108" width="500" height="12" rx="2" fill="#fb7185"/>
        {/* Stove */}
        <rect x="180" y="75" width="140" height="36" rx="5" fill="#374151" stroke="#1f2937" strokeWidth="1.5"/>
        <circle cx="210" cy="93" r="14" fill="#1f2937"/>
        <circle cx="210" cy="93" r="10" fill="#4b5563"/>
        <circle cx="210" cy="93" r="4" fill="#6b7280"/>
        <circle cx="270" cy="93" r="14" fill="#1f2937"/>
        <circle cx="270" cy="93" r="10" fill="#4b5563"/>
        <circle cx="270" cy="93" r="4" fill="#6b7280"/>
        {/* Pot on stove */}
        <ellipse cx="270" cy="80" rx="20" ry="7" fill="#ef4444"/>
        <rect x="250" y="73" width="40" height="22" rx="4" fill="#dc2626"/>
        <ellipse cx="270" cy="73" rx="20" ry="7" fill="#f87171"/>
        {/* Steam */}
        <path d="M262 65 Q264 58 262 52" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2"/>
        <path d="M270 63 Q272 56 270 50" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2"/>
        <path d="M278 65 Q280 58 278 52" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3,2"/>
        {/* Ingredients on counter */}
        <ellipse cx="60" cy="115" rx="22" ry="8" fill="#86efac"/>
        <rect x="38" y="100" width="44" height="16" rx="3" fill="#4ade80"/>
        <text x="60" y="112" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">HERBS</text>
        <ellipse cx="120" cy="113" rx="16" ry="16" fill="#fbbf24"/>
        <text x="120" y="118" textAnchor="middle" fontSize="16">🧅</text>
        <rect x="360" y="100" width="30" height="18" rx="3" fill="#dbeafe"/>
        <text x="375" y="113" textAnchor="middle" fill="#1e3a8a" fontSize="6">SALT</text>
        <rect x="400" y="98" width="28" height="20" rx="3" fill="#fef3c7"/>
        <text x="414" y="112" textAnchor="middle" fill="#92400e" fontSize="5.5">SUGAR</text>
        <ellipse cx="448" cy="114" rx="18" ry="9" fill="#fca5a5"/>
        <text x="448" y="118" textAnchor="middle" fontSize="16">🍅</text>
        {/* Chef instructor */}
        <circle cx="90" cy="82" r="17" fill="#f472b6"/>
        <rect x="77" y="99" width="26" height="20" rx="4" fill="white"/>
        {/* Chef hat */}
        <ellipse cx="90" cy="68" rx="14" ry="5" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        <rect x="78" y="55" width="24" height="14" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        {/* Apron */}
        <rect x="80" y="99" width="20" height="20" rx="2" fill="#fda4af"/>
        {/* Ladle */}
        <line x1="107" y1="96" x2="175" y2="85" stroke="#374151" strokeWidth="2"/>
        <circle cx="175" cy="85" r="7" fill="#dc2626" stroke="#374151" strokeWidth="1"/>
        {/* Students */}
        <circle cx="375" cy="88" r="15" fill="#60a5fa"/>
        <rect x="362" y="103" width="26" height="18" rx="4" fill="white"/>
        <rect x="364" y="103" width="22" height="18" rx="2" fill="#bfdbfe"/>
        {/* Student chef hat */}
        <ellipse cx="375" cy="75" rx="12" ry="4" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        <rect x="365" y="65" width="20" height="11" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        <circle cx="440" cy="86" r="15" fill="#fbbf24"/>
        <rect x="427" y="101" width="26" height="18" rx="4" fill="white"/>
        <rect x="429" y="101" width="22" height="18" rx="2" fill="#fef3c7"/>
        <ellipse cx="440" cy="74" rx="12" ry="4" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        <rect x="430" y="63" width="20" height="12" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
        {/* Recipe card */}
        <rect x="160" y="120" width="80" height="50" rx="4" fill="white" stroke="#fda4af" strokeWidth="1"/>
        <text x="200" y="132" textAnchor="middle" fill="#9f1239" fontSize="6" fontWeight="bold">Today's Recipe</text>
        <rect x="165" y="135" width="70" height="2" fill="#fda4af"/>
        <rect x="165" y="140" width="60" height="2" fill="#fecdd3"/>
        <rect x="165" y="145" width="65" height="2" fill="#fecdd3"/>
        <rect x="165" y="150" width="55" height="2" fill="#fecdd3"/>
        <rect x="165" y="155" width="60" height="2" fill="#fecdd3"/>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// Conversation Data — Part 5
// ═══════════════════════════════════════════════════════════════

export const conversationsPart5 = [
  // ─────────────────────────────────────────────
  // Day 35 — Booking a Flight Online
  // ─────────────────────────────────────────────
  {
    id: 35,
    day: 35,
    title: 'Booking a Flight Online',
    category: 'Travel',
    difficulty: 'Intermediate',
    color: 'teal',
    body: (
      <div className="space-y-4">
        <BookingFlightScene />

        <ConversationCard
          situation="Lisa is on a live chat with an airline support agent while booking a flight."
          speakers={{ A: 'Lisa', B: 'Agent' }}
          lines={[
            { speaker: 'A', en: "Hi, I'd like to book a round-trip flight from Jakarta to London for two passengers.", id: 'Halo, saya ingin memesan tiket pulang-pergi dari Jakarta ke London untuk dua penumpang.', note: 'round-trip = pergi-pulang' },
            { speaker: 'B', en: "Sure! What are your preferred travel dates and which cabin class — economy, business, or first?", id: 'Tentu! Tanggal perjalanan yang Anda inginkan apa, dan kelas kabin mana — ekonomi, bisnis, atau pertama?' },
            { speaker: 'A', en: "We'd like to depart on April 10th and return on April 24th. Economy class, please.", id: 'Kami ingin berangkat tanggal 10 April dan kembali tanggal 24 April. Kelas ekonomi, ya.' },
            { speaker: 'B', en: "I found a great deal — Qatar Airways, one stopover in Doha, total $820 per person. Shall I hold this fare?", id: 'Saya menemukan penawaran bagus — Qatar Airways, satu transit di Doha, total $820 per orang. Apakah saya tahan harga ini?' },
            { speaker: 'A', en: "Yes, please. Does the ticket include checked baggage?", id: 'Ya, tolong. Apakah tiket sudah termasuk bagasi tercatat?' },
            { speaker: 'B', en: "It includes one 23 kg checked bag each. Would you like to add a meal preference or seat selection?", id: 'Sudah termasuk satu bagasi 23 kg per orang. Apakah Anda ingin menambah preferensi makanan atau pilihan kursi?' },
            { speaker: 'A', en: "I'd like window seats if available. And one passenger needs a vegetarian meal.", id: 'Saya ingin kursi di dekat jendela jika tersedia. Dan satu penumpang memerlukan makanan vegetarian.', note: 'Requests on booking page' },
            { speaker: 'B', en: "Noted! I've added that. Please proceed to payment to confirm your booking. Your reservation code is TK2409.", id: 'Dicatat! Sudah saya tambahkan. Silakan lanjutkan ke pembayaran untuk mengonfirmasi pemesanan. Kode reservasi Anda adalah TK2409.' },
          ]}
        />

        <ConversationCard
          situation="Lisa calls the airline the next day to ask about check-in."
          speakers={{ A: 'Lisa', B: 'Agent' }}
          lines={[
            { speaker: 'A', en: "Hello, I booked a flight yesterday. My reservation code is TK2409. I wanted to ask about online check-in.", id: 'Halo, saya memesan tiket kemarin. Kode reservasi saya TK2409. Saya ingin bertanya tentang check-in online.' },
            { speaker: 'B', en: "Of course! Online check-in opens 48 hours before departure and closes 90 minutes before the flight.", id: 'Tentu saja! Check-in online dibuka 48 jam sebelum keberangkatan dan ditutup 90 menit sebelum penerbangan.' },
            { speaker: 'A', en: "Great. And should we arrive at the airport early since we have checked luggage?", id: 'Bagus. Dan apakah kami harus tiba di bandara lebih awal karena kami memiliki bagasi tercatat?' },
            { speaker: 'B', en: "Yes, we recommend arriving at least 3 hours before an international flight to drop off luggage and clear security.", id: 'Ya, kami menyarankan Anda tiba setidaknya 3 jam sebelum penerbangan internasional untuk menitipkan bagasi dan melalui pemeriksaan keamanan.' },
          ]}
        />

        <KeyPhrasesCard
          title="Flight Booking Phrases"
          color="emerald"
          phrases={[
            { en: 'round-trip / return ticket', id: 'tiket pulang-pergi', usage: 'I need a round-trip to Paris.' },
            { en: 'one-way ticket', id: 'tiket satu arah', usage: 'A one-way ticket to Bali, please.' },
            { en: 'stopover / layover', id: 'transit / singgah', usage: 'There\'s a 2-hour layover in Dubai.' },
            { en: 'checked baggage', id: 'bagasi tercatat', usage: 'Does this fare include checked baggage?' },
            { en: 'cabin class', id: 'kelas kabin (ekonomi/bisnis)', usage: 'Economy class is fine.' },
            { en: 'to hold a fare', id: 'menahan/mengunci harga tiket', usage: 'Can you hold this fare for 24 hours?' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="We'd like to ___ on May 5th and return on May 15th."
            options={['depart', 'leave off', 'check in', 'fly away']}
            answer="depart"
            explanation="'Depart' is the correct verb for leaving on a scheduled flight."
          />
          <FillInBlank
            sentence="Does this ticket include ___ baggage, or do I have to pay extra?"
            options={['carried', 'checked', 'stored', 'loaded']}
            answer="checked"
            explanation="'Checked baggage' refers to luggage handed to the airline at check-in."
          />
        </div>

        <CulturalNote>
          <strong>Booking Tips:</strong> Many airlines offer the cheapest fares on Tuesdays and Wednesdays. Booking 6–8 weeks in advance often yields the best prices. Always screenshot or save your booking confirmation code — you'll need it for online check-in. In the US/UK, a "round-trip" is the standard term; Australians and Brits often say "return ticket."
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="itinerary" ipa="aɪˈtɪn.ər.er.i" tip="5 syllables — eye-TIN-er-air-ee" />
          <PronunciationTip word="departure" ipa="dɪˈpɑːr.tʃər" tip="stress on 2nd syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "I would like to reserve two seats on flight QR007.",
            "Could you confirm the baggage allowance for this fare?",
            "I'd appreciate it if you could hold this reservation."
          ]}
          informal={[
            "Can I book two tickets on that flight?",
            "How much luggage can we bring?",
            "Lock in that price for me, please!"
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 36 — At a Laundromat
  // ─────────────────────────────────────────────
  {
    id: 36,
    day: 36,
    title: 'At a Laundromat',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div className="space-y-4">
        <LaundryScene />

        <ConversationCard
          situation="Tom visits a laundromat for the first time and asks a regular customer for help."
          speakers={{ A: 'Tom', B: 'Maya' }}
          lines={[
            { speaker: 'A', en: "Excuse me, is this machine free? I'm not sure which one to use.", id: 'Permisi, apakah mesin ini bebas dipakai? Saya tidak yakin mesin mana yang harus saya gunakan.', note: 'Asking for guidance, not just machine availability' },
            { speaker: 'B', en: "Yes, that one's free! You'll want to sort your clothes first — whites separate from colors.", id: 'Ya, mesin itu bebas! Sebaiknya pilah pakaian Anda dulu — putih dipisahkan dari yang berwarna.' },
            { speaker: 'A', en: "Oh, good tip. How much detergent should I use?", id: 'Oh, saran yang bagus. Berapa banyak deterjen yang harus saya gunakan?' },
            { speaker: 'B', en: "Just one cap for a regular load. If your clothes are really dirty, use two.", id: 'Cukup satu tutup botol untuk muatan biasa. Jika pakaian Anda sangat kotor, gunakan dua.' },
            { speaker: 'A', en: "Got it. Do I need coins, or does it take a card?", id: 'Mengerti. Apakah perlu koin, atau bisa pakai kartu?', note: '"Got it" = informal for "I understand"' },
            { speaker: 'B', en: "This laundromat takes both — there's a coin machine near the door and a card reader on each washer.", id: 'Laundromat ini menerima keduanya — ada mesin koin di dekat pintu dan pembaca kartu di setiap mesin cuci.' },
            { speaker: 'A', en: "Perfect. How long does a wash cycle take?", id: 'Bagus. Berapa lama satu siklus cuci?' },
            { speaker: 'B', en: "About 35 minutes. Then you can move it to a dryer. Dryers usually take 40 to 50 minutes.", id: 'Sekitar 35 menit. Lalu Anda bisa memindahkannya ke pengering. Pengering biasanya memakan waktu 40 hingga 50 menit.' },
          ]}
        />

        <ConversationCard
          situation="Tom's laundry is done but he can't find his socks — he asks the attendant."
          speakers={{ A: 'Tom', B: 'Attendant' }}
          lines={[
            { speaker: 'A', en: "Hi, I finished my wash but I think I'm missing a few socks. Is there a lost and found?", id: 'Halo, cucian saya sudah selesai tapi sepertinya ada beberapa kaus kaki yang hilang. Apakah ada kotak barang temuan?' },
            { speaker: 'B', en: "Yes! Check the shelf above the dryers. People often leave single socks behind.", id: 'Ada! Periksa rak di atas pengering. Orang sering meninggalkan kaus kaki tunggal.' },
            { speaker: 'A', en: "Found them! Thanks. Oh — and how do I remove this stain from my shirt before I wash it?", id: 'Ketemu! Terima kasih. Oh — dan bagaimana cara menghilangkan noda dari baju saya sebelum dicuci?' },
            { speaker: 'B', en: "Rub a little stain remover on it and let it sit for 5 minutes before putting it in the machine.", id: 'Gosokkan sedikit penghilang noda dan biarkan selama 5 menit sebelum dimasukkan ke mesin.' },
          ]}
        />

        <KeyPhrasesCard
          title="Laundromat Vocabulary"
          color="amber"
          phrases={[
            { en: 'to sort laundry', id: 'memilah pakaian', usage: 'Sort darks and lights before washing.' },
            { en: 'wash cycle', id: 'siklus pencucian', usage: 'The wash cycle is 35 minutes.' },
            { en: 'spin cycle', id: 'siklus peras / putar', usage: 'The spin cycle removes excess water.' },
            { en: 'fabric softener', id: 'pelembut pakaian', usage: 'Add fabric softener to the dispenser.' },
            { en: 'stain remover', id: 'penghilang noda', usage: 'Apply stain remover before washing.' },
            { en: 'delicate cycle', id: 'siklus lembut (untuk pakaian halus)', usage: 'Use the delicate cycle for silk.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="You should ___ your clothes — put whites in one pile and colors in another."
            options={['sort', 'fold', 'hang', 'spin']}
            answer="sort"
            explanation="'Sort' means to separate items into different groups before washing."
          />
          <FillInBlank
            sentence="The dryer takes about 50 minutes. After that, your clothes should be completely ___."
            options={['wet', 'dry', 'spun', 'washed']}
            answer="dry"
            explanation="The purpose of the dryer is to make clothes completely dry."
          />
        </div>

        <CulturalNote>
          <strong>Laundromat Etiquette:</strong> In the US and UK, it's considered rude to touch other people's laundry. If a machine finishes and the owner hasn't come back, it's acceptable to move laundry to a nearby surface after a reasonable wait (10–15 min). Always clean the lint trap after using a dryer — it's expected. Bring your own detergent, as vending machine detergent is usually overpriced.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="laundromat" ipa="ˈlɔːn.drə.mæt" tip="stress on LAW-ndro-mat" />
          <PronunciationTip word="detergent" ipa="dɪˈtɜːr.dʒənt" tip="stress on 2nd syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "Excuse me, is this machine currently in use?",
            "Could you advise me on the appropriate wash setting?"
          ]}
          informal={[
            "Is this machine taken?",
            "What setting should I use for jeans?"
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 37 — Attending a Workshop / Seminar
  // ─────────────────────────────────────────────
  {
    id: 37,
    day: 37,
    title: 'Attending a Workshop / Seminar',
    category: 'Academic',
    difficulty: 'Advanced',
    color: 'emerald',
    body: (
      <div className="space-y-4">
        <WorkshopScene />

        <ConversationCard
          situation="During a Q&A at an AI in Education seminar, a participant challenges the speaker."
          speakers={{ A: 'Participant', B: 'Speaker Dr. Chen' }}
          lines={[
            { speaker: 'A', en: "Thank you for that insightful presentation. I'd like to raise a counterpoint, if I may.", id: 'Terima kasih atas presentasi yang penuh wawasan ini. Saya ingin mengajukan argumen tandingan, jika diperbolehkan.', note: '"If I may" = sopan, meminta izin' },
            { speaker: 'B', en: "Of course — please go ahead.", id: 'Tentu saja — silakan.' },
            { speaker: 'A', en: "You argue that AI can personalize learning at scale, but isn't there a risk of creating filter bubbles that limit students' exposure to diverse perspectives?", id: 'Anda berargumen bahwa AI dapat mempersonalisasi pembelajaran secara massal, tetapi bukankah ada risiko terciptanya gelembung filter yang membatasi paparan siswa terhadap perspektif yang beragam?' },
            { speaker: 'B', en: "That's an astute observation. The literature does flag this as a concern. Responsible AI design must include deliberate exposure to contradictory viewpoints.", id: 'Itu pengamatan yang tajam. Literatur memang menandai ini sebagai kekhawatiran. Desain AI yang bertanggung jawab harus mencakup paparan yang disengaja terhadap sudut pandang yang bertentangan.' },
            { speaker: 'A', en: "Could you elaborate on what 'deliberate exposure' looks like in practice? Are there any case studies you can point to?", id: 'Bisakah Anda menjelaskan lebih lanjut seperti apa \'paparan yang disengaja\' itu dalam praktiknya? Apakah ada studi kasus yang bisa Anda tunjuk?' },
            { speaker: 'B', en: "Excellent question. The Khan Academy pilot in 2024 randomized challenge content specifically to disrupt algorithmic comfort zones. I'd recommend the paper by Nguyen et al. for a detailed breakdown.", id: 'Pertanyaan yang sangat baik. Uji coba Khan Academy pada tahun 2024 mengacak konten tantangan khusus untuk mengganggu zona nyaman algoritmik. Saya merekomendasikan makalah oleh Nguyen et al. untuk rincian yang lebih mendalam.' },
          ]}
        />

        <ConversationCard
          situation="During the coffee break, two academics discuss the workshop content."
          speakers={{ A: 'Rina', B: 'David' }}
          lines={[
            { speaker: 'A', en: "The keynote was compelling, but I felt the methodological framework was somewhat underdeveloped.", id: 'Pidato utama memang menarik, tetapi menurut saya kerangka metodologisnya agak kurang berkembang.', note: '"underdeveloped" = kurang dikembangkan' },
            { speaker: 'B', en: "I'd partially agree. She glossed over the ethical implications of data collection from minors, which is a significant gap.", id: 'Saya sebagian setuju. Dia melewatkan implikasi etis pengumpulan data dari anak-anak, yang merupakan celah yang signifikan.' },
            { speaker: 'A', en: "Precisely. The workshop handout cites three studies, two of which are over a decade old. The field has evolved considerably.", id: 'Tepat sekali. Handout workshop mengutip tiga studi, dua di antaranya sudah lebih dari satu dekade. Bidang ini telah berkembang pesat.' },
            { speaker: 'B', en: "Still, her longitudinal data on engagement metrics was genuinely novel. Worth citing in our literature review, I think.", id: 'Meski begitu, data longitudinalnya tentang metrik keterlibatan memang benar-benar baru. Layak dikutip dalam tinjauan pustaka kita, menurut saya.' },
          ]}
        />

        <KeyPhrasesCard
          title="Academic Seminar Language"
          color="emerald"
          phrases={[
            { en: 'to raise a counterpoint', id: 'mengajukan argumen tandingan', usage: 'I\'d like to raise a counterpoint regarding your methodology.' },
            { en: 'to elaborate on', id: 'menjelaskan lebih lanjut tentang', usage: 'Could you elaborate on that finding?' },
            { en: 'to gloss over', id: 'melewatkan / mengabaikan secara sepintas', usage: 'The speaker glossed over the limitations.' },
            { en: 'astute observation', id: 'pengamatan yang tajam / cermat', usage: 'That\'s an astute observation, Professor.' },
            { en: 'longitudinal data', id: 'data longitudinal (jangka panjang)', usage: 'The longitudinal data spans 10 years.' },
            { en: 'methodological framework', id: 'kerangka metodologis', usage: 'The framework needs further refinement.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="Could you ___ on the ethical implications of your research design?"
            options={['elaborate', 'speak over', 'clarify away', 'point out']}
            answer="elaborate"
            explanation="'Elaborate on' means to explain something in more detail."
          />
          <FillInBlank
            sentence="That is an ___ observation — you've identified a gap in the existing literature."
            options={['astute', 'average', 'obvious', 'informal']}
            answer="astute"
            explanation="'Astute' means having or showing an ability to accurately assess situations — clever and perceptive."
          />
        </div>

        <CulturalNote>
          <strong>Academic Conference Culture:</strong> In English-speaking academic settings, it is perfectly normal — even expected — to respectfully challenge a speaker's claims during Q&A. Preface your challenge politely ("That's a compelling argument, however...") to maintain professional tone. Always cite sources when disputing findings. Asking "Could you point me to the paper?" is standard and not considered rude.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="methodology" ipa="ˌmeθ.əˈdɒl.ə.dʒi" tip="stress on 3rd syllable: me-thod-OL-o-gy" />
          <PronunciationTip word="longitudinal" ipa="ˌlɒŋ.ɡɪˈtjuː.dɪ.nəl" tip="lon-gi-TU-di-nal" />
        </div>

        <ExpressionMeter
          formal={[
            "I would like to respectfully challenge the assertion that...",
            "Could you elaborate on the theoretical underpinnings of your framework?",
            "The literature would suggest a more nuanced interpretation."
          ]}
          informal={[
            "Wait, but doesn't that contradict what the last speaker said?",
            "Can you explain that in simpler terms?",
            "I'm not totally convinced — what's your evidence for that?"
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 38 — Complaining About a Product
  // ─────────────────────────────────────────────
  {
    id: 38,
    day: 38,
    title: 'Complaining About a Product',
    category: 'Daily Life',
    difficulty: 'Intermediate',
    color: 'rose',
    body: (
      <div className="space-y-4">
        <ComplaintScene />

        <ConversationCard
          situation="Sarah goes to a store to complain about a blender she bought last week."
          speakers={{ A: 'Sarah', B: 'Staff' }}
          lines={[
            { speaker: 'A', en: "Hi, I bought this blender here a week ago and it stopped working after the third use.", id: 'Halo, saya membeli blender ini di sini seminggu yang lalu dan berhenti bekerja setelah penggunaan ketiga.', note: 'Be specific: when, how long, and what happened' },
            { speaker: 'B', en: "I'm sorry to hear that. Do you have your receipt?", id: 'Sayang sekali mendengarnya. Apakah Anda memiliki struk pembelian?' },
            { speaker: 'A', en: "Yes, here it is. The motor just stopped spinning. I followed all the instructions in the manual.", id: 'Ya, ini dia. Motornya tiba-tiba berhenti berputar. Saya mengikuti semua instruksi dalam panduan.' },
            { speaker: 'B', en: "Let me take a look. Have you tried resetting it by holding the power button for 5 seconds?", id: 'Biarkan saya lihat. Apakah Anda sudah mencoba menyetel ulang dengan menahan tombol daya selama 5 detik?' },
            { speaker: 'A', en: "Yes, I've already tried that. It doesn't respond at all. I'd like a replacement or a full refund.", id: 'Ya, saya sudah mencobanya. Tidak ada respons sama sekali. Saya ingin penggantian atau pengembalian dana penuh.', note: 'State what resolution you want' },
            { speaker: 'B', en: "Completely understandable. Since it's within the 30-day return window, I can offer you an exchange or a store credit.", id: 'Sangat bisa dimaklumi. Karena masih dalam jangka waktu pengembalian 30 hari, saya bisa menawarkan penukaran atau kredit toko.' },
            { speaker: 'A', en: "I'd prefer a full refund to my credit card rather than store credit, if that's possible.", id: 'Saya lebih suka pengembalian dana penuh ke kartu kredit saya daripada kredit toko, jika memungkinkan.' },
            { speaker: 'B', en: "Let me check with my manager. We'll make sure this gets resolved for you today.", id: 'Biarkan saya cek dengan manajer saya. Kami akan memastikan ini diselesaikan untuk Anda hari ini.' },
          ]}
        />

        <ConversationCard
          situation="Sarah then leaves an online review about her experience."
          speakers={{ A: 'Sarah (Review)', B: 'Store Manager (Reply)' }}
          lines={[
            { speaker: 'A', en: "The blender broke after 3 uses, which was very disappointing for a $120 product. However, the staff handled my complaint professionally and I received a full refund. 3/5 stars.", id: 'Blendernya rusak setelah 3 kali digunakan, sangat mengecewakan untuk produk seharga $120. Namun, staf menangani keluhan saya secara profesional dan saya menerima pengembalian dana penuh. 3/5 bintang.', note: 'Balanced reviews are more trustworthy' },
            { speaker: 'B', en: "Thank you for your honest feedback, Sarah. We're sorry the product didn't meet your expectations. We've forwarded your report to the manufacturer and hope to serve you better in the future.", id: 'Terima kasih atas umpan balik jujur Anda, Sarah. Kami minta maaf produk tidak memenuhi harapan Anda. Kami telah meneruskan laporan Anda ke produsen dan berharap dapat melayani Anda lebih baik di masa mendatang.' },
          ]}
        />

        <KeyPhrasesCard
          title="Complaint & Resolution Phrases"
          color="rose"
          phrases={[
            { en: "I'd like to make a complaint about...", id: 'Saya ingin mengajukan keluhan tentang...', usage: "I'd like to make a complaint about this defective item." },
            { en: 'within the return window', id: 'dalam periode pengembalian', usage: 'It\'s still within the 30-day return window.' },
            { en: 'store credit', id: 'kredit toko', usage: 'They offered me store credit instead of cash.' },
            { en: 'to escalate the issue', id: 'meningkatkan/eskalasi masalah', usage: 'I need to escalate this to a manager.' },
            { en: 'a full refund', id: 'pengembalian dana penuh', usage: 'I am entitled to a full refund.' },
            { en: 'defective / faulty', id: 'cacat / rusak (pabrik)', usage: 'The item appears to be defective.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="I bought this laptop two weeks ago and it's already ___ — the screen flickers every few minutes."
            options={['faulty', 'sold out', 'discounted', 'upgraded']}
            answer="faulty"
            explanation="'Faulty' means not working correctly due to a defect."
          />
          <FillInBlank
            sentence="Since the product is still ___ the return window, you are eligible for a full refund."
            options={['within', 'outside', 'beyond', 'across']}
            answer="within"
            explanation="'Within the return window' means the return deadline has not yet passed."
          />
        </div>

        <CulturalNote>
          <strong>Consumer Rights in the UK/US:</strong> In the UK, the Consumer Rights Act 2015 entitles buyers to a full refund within 30 days if a product is faulty. In the US, return policies vary by retailer. Always keep your receipt and packaging. When complaining, stay calm and factual — emotional outbursts rarely speed up resolution. Asking politely for a manager is acceptable and often effective.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="receipt" ipa="rɪˈsiːt" tip="the 'p' is silent — ri-SEET" />
          <PronunciationTip word="eligible" ipa="ˈel.ɪ.dʒɪ.bəl" tip="stress on 1st syllable: EL-i-ji-bul" />
        </div>

        <ExpressionMeter
          formal={[
            "I wish to formally lodge a complaint regarding a defective product.",
            "I am requesting a full refund pursuant to your return policy.",
            "I would appreciate it if this matter could be resolved promptly."
          ]}
          informal={[
            "This thing broke after three days — I want my money back.",
            "Can I swap it for a new one?",
            "I need to speak to whoever's in charge here."
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 39 — At the Vet with Your Pet
  // ─────────────────────────────────────────────
  {
    id: 39,
    day: 39,
    title: 'At the Vet with Your Pet',
    category: 'Health',
    difficulty: 'Intermediate',
    color: 'teal',
    body: (
      <div className="space-y-4">
        <VetScene />

        <ConversationCard
          situation="James brings his cat Mochi to the vet because she hasn't been eating well."
          speakers={{ A: 'James', B: 'Dr. Park (Vet)' }}
          lines={[
            { speaker: 'A', en: "Hi Dr. Park, thank you for seeing us. Mochi hasn't been eating well for the past three days.", id: 'Halo Dr. Park, terima kasih sudah menemui kami. Mochi tidak makan dengan baik selama tiga hari terakhir.', note: 'Always state duration of symptoms' },
            { speaker: 'B', en: "Let's take a look. How old is Mochi, and is she up to date on her vaccinations?", id: 'Mari kita periksa. Berapa umur Mochi, dan apakah vaksinasinya sudah diperbarui?' },
            { speaker: 'A', en: "She's four years old. She got her last shots about a year ago. She's also been drinking more water than usual.", id: 'Dia berumur empat tahun. Vaksinasi terakhirnya sekitar setahun yang lalu. Dia juga minum air lebih banyak dari biasanya.' },
            { speaker: 'B', en: "Increased thirst combined with reduced appetite can sometimes indicate kidney issues or diabetes. I'll run a blood panel to be sure.", id: 'Rasa haus yang meningkat dikombinasikan dengan nafsu makan yang berkurang terkadang bisa mengindikasikan masalah ginjal atau diabetes. Saya akan melakukan panel darah untuk memastikannya.', note: 'blood panel = tes darah lengkap' },
            { speaker: 'A', en: "Should I be worried? Is there anything I can do at home in the meantime?", id: 'Haruskah saya khawatir? Apakah ada yang bisa saya lakukan di rumah sementara itu?' },
            { speaker: 'B', en: "Try offering wet food instead of dry — it's more palatable and adds hydration. And monitor her litter box use. I'll call you with the test results within 24 hours.", id: 'Coba tawarkan makanan basah daripada kering — lebih enak dan menambah hidrasi. Dan pantau penggunaan kotak pasirnya. Saya akan menghubungi Anda dengan hasil tes dalam 24 jam.' },
            { speaker: 'A', en: "Thank you. Is it okay to give her the vitamin supplement I bought online?", id: 'Terima kasih. Apakah boleh memberikannya suplemen vitamin yang saya beli secara online?' },
            { speaker: 'B', en: "Hold off on that until we get the blood results — some supplements can actually interfere with kidney function tests.", id: 'Tunda dulu sampai kita mendapat hasil darah — beberapa suplemen sebenarnya dapat mengganggu tes fungsi ginjal.' },
          ]}
        />

        <ConversationCard
          situation="Dr. Park calls James the next day with results."
          speakers={{ A: 'Dr. Park', B: 'James' }}
          lines={[
            { speaker: 'A', en: "Hi James, I have Mochi's test results. The good news is her kidneys look fine. Her glucose levels are slightly elevated though.", id: 'Halo James, saya memiliki hasil tes Mochi. Kabar baiknya ginjalnya terlihat baik. Namun kadar glukosanya sedikit meningkat.' },
            { speaker: 'B', en: "Does that mean she might be diabetic?", id: 'Apakah itu berarti dia mungkin menderita diabetes?' },
            { speaker: 'A', en: "Possibly early-stage. I'd like to put her on a low-carb prescription diet first and retest in four weeks before considering insulin.", id: 'Mungkin stadium awal. Saya ingin menempatkannya pada diet resep rendah karbohidrat terlebih dahulu dan melakukan tes ulang dalam empat minggu sebelum mempertimbangkan insulin.' },
            { speaker: 'B', en: "That sounds manageable. I'll come in to pick up the prescription food. Thank you so much, Dr. Park.", id: 'Kedengarannya bisa ditangani. Saya akan datang untuk mengambil makanan resep. Terima kasih banyak, Dr. Park.' },
          ]}
        />

        <KeyPhrasesCard
          title="Vet Visit Vocabulary"
          color="emerald"
          phrases={[
            { en: 'up to date on vaccinations', id: 'vaksinasi sudah diperbarui', usage: 'Is your dog up to date on all vaccinations?' },
            { en: 'blood panel / blood work', id: 'panel darah / tes darah', usage: 'We\'ll run a blood panel to check for issues.' },
            { en: 'symptoms', id: 'gejala', usage: 'What symptoms have you noticed?' },
            { en: 'prescription diet', id: 'diet berdasarkan resep dokter', usage: 'She needs a prescription low-protein diet.' },
            { en: 'glucose levels', id: 'kadar glukosa', usage: 'Her glucose levels are slightly elevated.' },
            { en: 'to monitor', id: 'memantau', usage: 'Monitor his water intake at home.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="My dog hasn't been eating for two days. I think he's showing ___ of an illness."
            options={['symptoms', 'signals', 'labels', 'stages']}
            answer="symptoms"
            explanation="'Symptoms' refers to signs or indications that an animal (or person) is unwell."
          />
          <FillInBlank
            sentence="We should ___ her water and food intake over the next few days to track any changes."
            options={['monitor', 'record on', 'inspect', 'track around']}
            answer="monitor"
            explanation="'Monitor' means to observe and check something over a period of time."
          />
        </div>

        <CulturalNote>
          <strong>Pet Care Culture:</strong> In Western countries, pets are often considered family members, and veterinary care can be expensive. Many owners purchase pet insurance to cover unexpected costs. It's common to refer to a pet with "he" or "she" rather than "it." Vets may ask about a pet's diet, exercise, and environment — answering these thoroughly helps diagnosis.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="veterinarian" ipa="ˌvet.ər.ɪˈneər.i.ən" tip="vet-er-i-NAIR-ee-un (7 syllables)" />
          <PronunciationTip word="glucose" ipa="ˈɡluː.koʊs" tip="GLOO-kose" />
        </div>

        <ExpressionMeter
          formal={[
            "Mochi has been exhibiting reduced appetite over the past 72 hours.",
            "I'd like to know the prognosis and the recommended course of treatment.",
            "Could you elaborate on the potential underlying causes?"
          ]}
          informal={[
            "She's barely touched her food for three days.",
            "Is she going to be okay?",
            "What do I do if she gets worse tonight?"
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 40 — Renting a Car
  // ─────────────────────────────────────────────
  {
    id: 40,
    day: 40,
    title: 'Renting a Car',
    category: 'Travel',
    difficulty: 'Intermediate',
    color: 'blue',
    body: (
      <div className="space-y-4">
        <RentCarScene />

        <ConversationCard
          situation="Kevin arrives at a car rental counter at the airport."
          speakers={{ A: 'Kevin', B: 'Agent' }}
          lines={[
            { speaker: 'A', en: "Hi, I have a reservation under the name Kevin Hartley. I booked a mid-size sedan for five days.", id: 'Halo, saya memiliki reservasi atas nama Kevin Hartley. Saya memesan sedan berukuran sedang selama lima hari.', note: '"Under the name" = standard for reservations' },
            { speaker: 'B', en: "Let me pull that up. Can I see your driver's license and credit card, please?", id: 'Biarkan saya cek. Boleh saya lihat SIM dan kartu kredit Anda?' },
            { speaker: 'A', en: "Sure. Here you go. Is there any additional insurance I should know about?", id: 'Tentu. Ini dia. Apakah ada asuransi tambahan yang perlu saya ketahui?' },
            { speaker: 'B', en: "Good question! We offer a Collision Damage Waiver for $18 a day. It waives your financial responsibility if the car is damaged.", id: 'Pertanyaan bagus! Kami menawarkan Jaminan Kerusakan Tabrakan seharga $18 per hari. Ini membebaskan tanggung jawab keuangan Anda jika mobil rusak.' },
            { speaker: 'A', en: "Does my credit card cover rental insurance? I believe it does.", id: 'Apakah kartu kredit saya menanggung asuransi rental? Saya rasa iya.', note: 'Many credit cards include CDW — always check!' },
            { speaker: 'B', en: "Many do, but you'd need to confirm with your card provider. If it does, you can decline our CDW and save money.", id: 'Banyak yang melakukannya, tetapi Anda perlu mengonfirmasi dengan penyedia kartu Anda. Jika ya, Anda dapat menolak CDW kami dan menghemat uang.' },
            { speaker: 'A', en: "I'll decline the CDW then. Does the car come with a full tank? And what's the fuel policy?", id: 'Kalau begitu saya tolak CDW-nya. Apakah mobil datang dengan tangki penuh? Dan apa kebijakan bahan bakarnya?' },
            { speaker: 'B', en: "Full-to-full policy — you pick it up full and return it full. If you bring it back empty, we charge a refueling fee of $40.", id: 'Kebijakan penuh-ke-penuh — Anda mengambilnya dalam keadaan penuh dan mengembalikannya dalam keadaan penuh. Jika Anda membawanya kembali kosong, kami mengenakan biaya pengisian bahan bakar sebesar $40.' },
          ]}
        />

        <ConversationCard
          situation="Kevin returns the car after 5 days."
          speakers={{ A: 'Kevin', B: 'Agent' }}
          lines={[
            { speaker: 'A', en: "Hi, I'm returning this car. Reservation under Hartley. I've filled the tank up.", id: 'Halo, saya mengembalikan mobil ini. Reservasi atas nama Hartley. Saya sudah mengisi tangkinya.' },
            { speaker: 'B', en: "Thanks! Let me do a quick walkthrough. Oh, there's a small scratch on the rear bumper — was that there when you picked it up?", id: 'Terima kasih! Biarkan saya lakukan pemeriksaan singkat. Oh, ada goresan kecil di bumper belakang — apakah itu ada saat Anda mengambilnya?' },
            { speaker: 'A', en: "Actually, yes — I noticed it and marked it on the condition report at pickup. Here's the copy I kept.", id: 'Sebenarnya, ya — saya memperhatikannya dan menandainya di laporan kondisi saat pengambilan. Ini salinan yang saya simpan.', note: 'Always document pre-existing damage!' },
            { speaker: 'B', en: "Perfect — that matches our record. You're all set. Your receipt will be emailed within the hour.", id: 'Sempurna — itu cocok dengan catatan kami. Semuanya beres. Struk Anda akan dikirim lewat email dalam waktu satu jam.' },
          ]}
        />

        <KeyPhrasesCard
          title="Car Rental Vocabulary"
          color="indigo"
          phrases={[
            { en: 'Collision Damage Waiver (CDW)', id: 'Jaminan Kerusakan Tabrakan', usage: 'Do you want to add the CDW?' },
            { en: 'full-to-full fuel policy', id: 'kebijakan bahan bakar penuh-ke-penuh', usage: 'Return it with a full tank.' },
            { en: 'condition report', id: 'laporan kondisi kendaraan', usage: 'Mark any damage on the condition report.' },
            { en: 'to decline (insurance)', id: 'menolak (asuransi)', usage: 'I\'d like to decline the extra coverage.' },
            { en: 'mid-size / compact', id: 'sedan sedang / kompak', usage: 'A compact car is cheaper to rent.' },
            { en: 'refueling fee', id: 'biaya pengisian bahan bakar', usage: 'Return it full to avoid the refueling fee.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="I'd like to ___ the extra insurance — my credit card already covers rental damage."
            options={['decline', 'cancel out', 'forfeit', 'remove it']}
            answer="decline"
            explanation="'Decline' means to politely refuse an offer."
          />
          <FillInBlank
            sentence="Please mark any scratches or dents on the ___ report before you drive off."
            options={['condition', 'rental', 'damage list', 'insurance']}
            answer="condition"
            explanation="A 'condition report' documents the pre-existing state of the vehicle at pickup."
          />
        </div>

        <CulturalNote>
          <strong>Car Rental Tips:</strong> Always take photos/videos of the car before and after rental — this is your best protection against fraudulent damage claims. In the US, a credit card (not debit) is almost always required for rental; debit cards are often declined or require a large deposit. Check your credit card benefits — many Visa and MasterCard Platinum cards include complimentary CDW coverage.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="insurance" ipa="ɪnˈʃʊər.əns" tip="stress on 2nd syllable: in-SHUR-ance" />
          <PronunciationTip word="collision" ipa="kəˈlɪʒ.ən" tip="kuh-LIZ-hun" />
        </div>

        <ExpressionMeter
          formal={[
            "I have a reservation under the name Hartley for a mid-size vehicle.",
            "I would like to waive the additional coverage on this booking.",
            "Could you clarify the fuel return policy, please?"
          ]}
          informal={[
            "I booked a car here — last name Hartley.",
            "Do I need the extra insurance or can I skip it?",
            "So I just fill it up before I bring it back, right?"
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 41 — Study Group Session
  // ─────────────────────────────────────────────
  {
    id: 41,
    day: 41,
    title: 'Study Group Session',
    category: 'Academic',
    difficulty: 'Beginner',
    color: 'emerald',
    body: (
      <div className="space-y-4">
        <StudyGroupScene />

        <ConversationCard
          situation="Four students meet in the library to review for their biology exam."
          speakers={{ A: 'Nadia', B: 'Sam', C: 'Ryu' }}
          lines={[
            { speaker: 'A', en: "Okay everyone, let's start with Chapter 6 — cell division. Can someone explain mitosis?", id: 'Oke semua, mari mulai dengan Bab 6 — pembelahan sel. Apakah ada yang bisa menjelaskan mitosis?', note: 'Starting a study session with a clear agenda' },
            { speaker: 'B', en: "Sure! Mitosis is when one cell divides into two identical cells. It has four stages: prophase, metaphase, anaphase, and telophase.", id: 'Tentu! Mitosis adalah ketika satu sel membelah menjadi dua sel yang identik. Ia memiliki empat tahap: profase, metafase, anafase, dan telofase.' },
            { speaker: 'C', en: "Wait, I got confused with meiosis. What's the difference again?", id: 'Tunggu, saya bingung dengan meiosis. Apa perbedaannya lagi?', note: '"Wait" = soft way to pause and ask for clarification' },
            { speaker: 'A', en: "Meiosis produces four cells with half the chromosomes — it's used for sexual reproduction. Mitosis makes two identical cells for growth.", id: 'Meiosis menghasilkan empat sel dengan setengah kromosom — digunakan untuk reproduksi seksual. Mitosis menghasilkan dua sel identik untuk pertumbuhan.' },
            { speaker: 'B', en: "Exactly. A good way to remember: MEiosis = MEaning reproduction. The ME helps you remember it's for making eggs and sperm.", id: 'Tepat. Cara mudah mengingatnya: MEiosis = MEreproduksi. Huruf ME membantu Anda ingat ini untuk membuat sel telur dan sperma.', note: 'Memory tricks (mnemonics) are very useful!' },
            { speaker: 'C', en: "Oh, that's a great mnemonic! Can we make some flashcards for the key terms? I always learn better with them.", id: 'Oh, itu mnemonic yang bagus! Bisakah kita membuat beberapa kartu kilat untuk istilah-istilah kunci? Saya selalu lebih baik belajar dengannya.' },
            { speaker: 'A', en: "Good idea. Ryu, do you want to quiz us on the diagrams from the textbook?", id: 'Ide bagus. Ryu, apakah kamu mau kuis kita tentang diagram dari buku teks?' },
          ]}
        />

        <ConversationCard
          situation="The group takes a break and talks about exam strategy."
          speakers={{ A: 'Nadia', B: 'Sam' }}
          lines={[
            { speaker: 'A', en: "Are you nervous about the exam? I always blank out when I see the multiple choice questions.", id: 'Apakah kamu gugup tentang ujian? Saya selalu blank saat melihat pertanyaan pilihan ganda.', note: '"blank out" = to suddenly forget everything' },
            { speaker: 'B', en: "Try the process of elimination. Cross out answers you know are wrong and you narrow it down fast.", id: 'Coba eliminasi proses. Coret jawaban yang kamu tahu salah dan kamu akan cepat mempersempitnya.' },
            { speaker: 'A', en: "That's a good tip. Also, I heard the professor always includes one trick question — so read everything carefully.", id: 'Itu tips yang bagus. Juga, saya dengar profesor selalu menyertakan satu pertanyaan jebakan — jadi baca semuanya dengan hati-hati.' },
            { speaker: 'B', en: "True. Okay, break's over — let's tackle Chapter 7 next. That one's about genetics and it's supposedly the hardest part.", id: 'Benar. Oke, istirahat selesai — mari kita kerjakan Bab 7 berikutnya. Itu tentang genetika dan katanya bagian yang paling sulit.' },
          ]}
        />

        <KeyPhrasesCard
          title="Study Group Expressions"
          color="emerald"
          phrases={[
            { en: 'to blank out', id: 'tiba-tiba lupa semuanya', usage: 'I always blank out during multiple choice exams.' },
            { en: 'process of elimination', id: 'proses eliminasi', usage: 'Use process of elimination to narrow down answers.' },
            { en: 'mnemonic', id: 'mnemonik / alat bantu ingat', usage: 'Do you have a mnemonic for this formula?' },
            { en: 'to quiz someone', id: 'menguji seseorang dengan pertanyaan', usage: 'Can you quiz me on the vocab list?' },
            { en: 'to go over', id: 'membahas / meninjau', usage: 'Let\'s go over Chapter 5 one more time.' },
            { en: 'to tackle (a topic)', id: 'mengerjakan / mengatasi (topik)', usage: 'Let\'s tackle the hardest chapter first.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="I always ___ out during exams and forget things I studied the night before."
            options={['blank', 'black', 'fade', 'burn']}
            answer="blank"
            explanation="'Blank out' means to suddenly forget everything, especially under pressure."
          />
          <FillInBlank
            sentence="Let's ___ Chapter 4 one more time before the test tomorrow."
            options={['go over', 'get through', 'look past', 'flip back']}
            answer="go over"
            explanation="'Go over' means to review or examine something again."
          />
        </div>

        <CulturalNote>
          <strong>Study Group Culture:</strong> Study groups are popular in universities worldwide. In English-speaking countries, it's normal to argue about answers respectfully — saying "Actually, I think you might be wrong — the textbook says..." is acceptable. Assign roles to each member (note-taker, quiz master, timer) to keep sessions productive. Apps like Anki and Quizlet are commonly used for digital flashcards.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="mnemonic" ipa="nɪˈmɒn.ɪk" tip="the 'mn' starts with a silent 'm' — ni-MON-ik" />
          <PronunciationTip word="chromosome" ipa="ˈkroʊ.mə.soʊm" tip="KRO-muh-some" />
        </div>

        <ExpressionMeter
          formal={[
            "Could you clarify the distinction between mitosis and meiosis?",
            "I suggest we allocate 20 minutes per chapter.",
            "Perhaps we should review the diagrams from the textbook."
          ]}
          informal={[
            "Wait, which one is which again?",
            "Let's just do 20 minutes per chapter — sound good?",
            "I have no idea what this diagram means."
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 42 — Networking Event / Mixer
  // ─────────────────────────────────────────────
  {
    id: 42,
    day: 42,
    title: 'Networking Event / Mixer',
    category: 'Professional',
    difficulty: 'Advanced',
    color: 'slate',
    body: (
      <div className="space-y-4">
        <NetworkingScene />

        <ConversationCard
          situation="At a professional mixer event, two attendees introduce themselves near the bar."
          speakers={{ A: 'Diana', B: 'Marcus' }}
          lines={[
            { speaker: 'A', en: "Hi, I don't think we've met. I'm Diana — I work in UX research at Vantage Tech.", id: 'Halo, sepertinya kita belum pernah bertemu. Saya Diana — saya bekerja di riset UX di Vantage Tech.', note: '"I don\'t think we\'ve met" = polite opener' },
            { speaker: 'B', en: "Marcus — good to meet you, Diana. I'm a product strategist, currently consulting for a few fintech startups in Southeast Asia.", id: 'Marcus — senang bertemu Anda, Diana. Saya seorang ahli strategi produk, saat ini berkonsultasi untuk beberapa startup fintech di Asia Tenggara.' },
            { speaker: 'A', en: "Interesting — there's a lot of overlap between UX research and product strategy. How do you approach user-centricity in the fintech space?", id: 'Menarik — ada banyak tumpang tindih antara riset UX dan strategi produk. Bagaimana Anda mendekati pendekatan berpusat pada pengguna di ruang fintech?', note: 'Use industry vocabulary to signal expertise' },
            { speaker: 'B', en: "That's the central tension in fintech — balancing regulatory constraints with intuitive design. Most of our friction points come from compliance requirements, not UX failures.", id: 'Itulah ketegangan utama di fintech — menyeimbangkan kendala peraturan dengan desain yang intuitif. Sebagian besar titik gesekan kami berasal dari persyaratan kepatuhan, bukan kegagalan UX.' },
            { speaker: 'A', en: "That aligns with what we're seeing too. We actually published a whitepaper on trust signals in digital banking last quarter — I can send it over if you're interested.", id: 'Itu selaras dengan apa yang kami lihat juga. Kami sebenarnya menerbitkan whitepaper tentang sinyal kepercayaan dalam perbankan digital kuartal lalu — saya bisa kirimkan jika Anda tertarik.', note: 'Offering value = strong networking tactic' },
            { speaker: 'B', en: "Absolutely — I'd appreciate that. I'll give you my card. And are you presenting anything at this event?", id: 'Tentu saja — saya akan senang. Saya akan memberi Anda kartu saya. Dan apakah Anda mempresentasikan sesuatu di acara ini?' },
            { speaker: 'A', en: "I'm on a panel tomorrow morning discussing AI ethics in user research. You'd be welcome to attend if it fits your schedule.", id: 'Saya akan ada di panel diskusi besok pagi tentang etika AI dalam riset pengguna. Anda dipersilakan hadir jika sesuai dengan jadwal Anda.' },
            { speaker: 'B', en: "I'll make it work. This has been one of the more substantive conversations I've had all evening.", id: 'Saya akan usahakan. Ini adalah salah satu percakapan paling bermakna yang saya miliki sepanjang malam ini.' },
          ]}
        />

        <ConversationCard
          situation="Diana follows up via LinkedIn two days after the event."
          speakers={{ A: 'Diana', B: 'Marcus' }}
          lines={[
            { speaker: 'A', en: "Hi Marcus, it was great connecting at the mixer. I've attached the whitepaper I mentioned. Looking forward to staying in touch.", id: 'Halo Marcus, senang terhubung di acara mixer. Saya sudah melampirkan whitepaper yang saya sebutkan. Menantikan untuk tetap terhubung.', note: 'Professional follow-up within 48 hours is best practice' },
            { speaker: 'B', en: "Diana, thanks for sending this over — I've already skimmed the trust signals section and it's directly applicable to a project I'm scoping. Coffee catch-up sometime next week?", id: 'Diana, terima kasih sudah mengirimkan ini — saya sudah membaca sekilas bagian sinyal kepercayaan dan sangat relevan untuk proyek yang sedang saya rencanakan. Ngopi santai kapan-kapan minggu depan?' },
            { speaker: 'A', en: "I'd love that — shoot me a time that works for you and we can set something up.", id: 'Saya mau — kirimkan waktu yang cocok untuk Anda dan kita bisa atur sesuatu.' },
          ]}
        />

        <KeyPhrasesCard
          title="Professional Networking Phrases"
          color="indigo"
          phrases={[
            { en: "I don't think we've met — I'm...", id: 'Sepertinya kita belum pernah bertemu — saya...', usage: 'Standard, confident opener at events.' },
            { en: 'to align with', id: 'selaras dengan / cocok dengan', usage: 'That aligns with our current research.' },
            { en: 'friction points', id: 'titik gesekan / hambatan', usage: 'We need to reduce friction points for users.' },
            { en: 'to scope a project', id: 'merencanakan ruang lingkup proyek', usage: 'We\'re currently scoping a new product.' },
            { en: 'substantive conversation', id: 'percakapan yang bermakna / berisi', usage: 'That was a very substantive discussion.' },
            { en: 'to stay in touch', id: 'tetap terhubung', usage: 'Let\'s stay in touch after the event.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="That ___ with our current findings — we noticed the same trend in our latest report."
            options={['aligns', 'compares', 'clashes', 'maps']}
            answer="aligns"
            explanation="'Aligns with' means to correspond or agree with something."
          />
          <FillInBlank
            sentence="I'd love to set up a coffee ___ sometime next week to discuss this further."
            options={['catch-up', 'link', 'meetup', 'session']}
            answer="catch-up"
            explanation="A 'coffee catch-up' is an informal professional meeting over coffee."
          />
        </div>

        <CulturalNote>
          <strong>Networking Etiquette:</strong> The 48-hour rule: follow up within two days of meeting someone, while the conversation is fresh. Personalize your follow-up — reference something specific you discussed. In professional settings, avoid controversial topics (politics, religion, salary) on first meeting. Business cards are still exchanged at formal events; LinkedIn connections are the digital equivalent. "What do you do?" is a standard opener in Western professional culture.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="substantive" ipa="ˈsʌb.stən.tɪv" tip="SUB-stan-tiv (not sub-STAN-tive)" />
          <PronunciationTip word="regulatory" ipa="ˈreɡ.jʊ.lə.tər.i" tip="REG-yuh-luh-tor-ee" />
        </div>

        <ExpressionMeter
          formal={[
            "I believe there is significant synergy between our respective areas of focus.",
            "I would welcome the opportunity to continue this conversation at your convenience.",
            "Please feel free to reach out should you wish to collaborate further."
          ]}
          informal={[
            "We're basically working on the same stuff from different angles!",
            "We should definitely grab coffee and keep talking.",
            "Shoot me a message anytime — always happy to connect."
          ]}
        />
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Day 43 — Cooking Class
  // ─────────────────────────────────────────────
  {
    id: 43,
    day: 43,
    title: 'Cooking Class',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'pink',
    body: (
      <div className="space-y-4">
        <CookingClassScene />

        <ConversationCard
          situation="Chef Ana leads a beginner cooking class at a community kitchen."
          speakers={{ A: 'Chef Ana', B: 'Leo (student)', C: 'Priya (student)' }}
          lines={[
            { speaker: 'A', en: "Welcome, everyone! Today we're making a classic tomato pasta sauce from scratch. Who's chopped onions before?", id: 'Selamat datang semua! Hari ini kita membuat saus pasta tomat klasik dari awal. Siapa yang pernah mencacah bawang sebelumnya?', note: '"From scratch" = from raw ingredients, not a package' },
            { speaker: 'B', en: "I have, but I always end up crying! Is there a trick to avoid that?", id: 'Saya pernah, tapi selalu berakhir menangis! Apakah ada trik untuk menghindarinya?' },
            { speaker: 'A', en: "Great question! Chill the onion in the freezer for 10 minutes first. Cold onions release less of the irritating gas.", id: 'Pertanyaan bagus! Dinginkan bawang di freezer selama 10 menit terlebih dahulu. Bawang dingin melepaskan lebih sedikit gas yang menyebabkan iritasi.' },
            { speaker: 'C', en: "How finely should we chop them? Like, really tiny or medium pieces?", id: 'Seberapa halus kita harus mencacahnya? Maksudnya, sangat kecil atau potongan sedang?' },
            { speaker: 'A', en: "For this sauce, medium dice is perfect — about the size of a pea. Too fine and they'll disappear; too big and you'll notice the texture.", id: 'Untuk saus ini, potong dadu sedang sudah sempurna — sekitar sebesar biji kacang polong. Terlalu halus akan hilang; terlalu besar dan Anda akan merasakan teksturnya.', note: 'medium dice = potongan dadu sedang (~6mm)' },
            { speaker: 'B', en: "How long do we sauté the onions before adding the garlic?", id: 'Berapa lama kita menumis bawang sebelum menambahkan bawang putih?' },
            { speaker: 'A', en: "About 5 minutes on medium heat until they're translucent and soft. Then add garlic — but only for 60 seconds, or it'll burn and taste bitter.", id: 'Sekitar 5 menit dengan api sedang hingga bening dan lembut. Lalu tambahkan bawang putih — tapi hanya selama 60 detik, atau akan gosong dan terasa pahit.', note: 'Garlic burns fast — common beginner mistake!' },
            { speaker: 'C', en: "This smells amazing already! Do we add the tomatoes now?", id: 'Aromanya sudah luar biasa! Apakah kita tambahkan tomatnya sekarang?' },
            { speaker: 'A', en: "Yes! Pour in the crushed tomatoes, add a pinch of sugar to balance the acidity, and let it simmer on low for 20 minutes.", id: 'Ya! Tuangkan tomat yang dihancurkan, tambahkan sejumput gula untuk menyeimbangkan keasamannya, dan biarkan mendidih dengan api kecil selama 20 menit.' },
          ]}
        />

        <ConversationCard
          situation="The class tastes the finished sauce and discusses the result."
          speakers={{ A: 'Leo', B: 'Chef Ana', C: 'Priya' }}
          lines={[
            { speaker: 'A', en: "Wow, I can't believe I made this! It's so much better than the sauce from a jar.", id: 'Wow, tidak percaya saya bisa membuat ini! Jauh lebih enak dari saus dari toples.', note: '"From a jar" = sauce from a store-bought container' },
            { speaker: 'C', en: "Mine turned out a bit too salty though. What went wrong?", id: 'Punya saya agak terlalu asin. Apa yang salah?' },
            { speaker: 'B', en: "Did you add salt before or after tasting? Always season at the end and taste as you go.", id: 'Apakah Anda menambahkan garam sebelum atau sesudah mencicipi? Selalu beri bumbu di akhir dan cicip sambil memasak.' },
            { speaker: 'C', en: "I added it at the beginning. I'll remember that next time — taste as you go!", id: 'Saya menambahkannya di awal. Saya akan ingat itu lain kali — cicip sambil memasak!' },
            { speaker: 'A', en: "Can this sauce be stored? I want to make a big batch for the week.", id: 'Bisakah saus ini disimpan? Saya ingin membuat banyak untuk seminggu.' },
            { speaker: 'B', en: "Absolutely. It keeps in the fridge for 5 days or the freezer for 3 months. Let it cool completely before you put it in containers.", id: 'Tentu saja. Bisa bertahan di kulkas selama 5 hari atau freezer selama 3 bulan. Biarkan dingin sepenuhnya sebelum dimasukkan ke wadah.' },
          ]}
        />

        <KeyPhrasesCard
          title="Cooking Class Vocabulary"
          color="rose"
          phrases={[
            { en: 'from scratch', id: 'dari bahan mentah (bukan instan)', usage: 'I made this bread completely from scratch.' },
            { en: 'to sauté', id: 'menumis / menggoreng sebentar dengan minyak sedikit', usage: 'Sauté the onions until translucent.' },
            { en: 'medium dice', id: 'potongan dadu sedang (~6mm)', usage: 'Cut the carrots into a medium dice.' },
            { en: 'to simmer', id: 'mendidih dengan api kecil', usage: 'Let the soup simmer for 30 minutes.' },
            { en: 'a pinch of', id: 'sejumput (bahan)', usage: 'Add a pinch of salt.' },
            { en: 'season to taste', id: 'beri bumbu sesuai selera', usage: 'Season the dish to taste before serving.' },
          ]}
        />

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Fill in the Blank</p>
          <FillInBlank
            sentence="Let the sauce ___ on low heat for 20 minutes to develop the flavor."
            options={['simmer', 'boil hard', 'steam', 'fry']}
            answer="simmer"
            explanation="'Simmer' means to cook gently on low heat, just below boiling point."
          />
          <FillInBlank
            sentence="This recipe is made completely ___ — no pre-made mixes or canned sauce."
            options={['from scratch', 'by hand', 'from zero', 'off-menu']}
            answer="from scratch"
            explanation="'From scratch' means made entirely from raw ingredients, not using pre-made products."
          />
        </div>

        <CulturalNote>
          <strong>Cooking Culture:</strong> In English-speaking countries, cooking classes range from professional culinary schools to fun casual community workshops. Terms like "mise en place" (French: everything in its place — prepping all ingredients before cooking) are commonly used in English kitchens. The phrase "taste as you go" is a fundamental cooking philosophy — dishes are adjusted throughout, not just at the end.
        </CulturalNote>

        <div className="flex flex-wrap gap-2">
          <PronunciationTip word="sauté" ipa="sɔːˈteɪ" tip="saw-TAY — French origin, common in English cooking" />
          <PronunciationTip word="translucent" ipa="trænsˈluːsənt" tip="trans-LOO-sent (onions look see-through when done)" />
        </div>

        <ExpressionMeter
          formal={[
            "Please ensure the onions are diced to a uniform medium size.",
            "The sauce should be reduced to the appropriate consistency before seasoning.",
            "Allow the aromatics to sweat in the pan before introducing the tomatoes."
          ]}
          informal={[
            "Chop the onions not too big, not too small — somewhere in the middle!",
            "Keep stirring so it doesn't stick to the bottom.",
            "Just keep tasting it until it tastes good to you!"
          ]}
        />
      </div>
    ),
  },
]
