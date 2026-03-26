// ═══════════════════════════════════════════════════════════════
// Daily English Conversation Part 6 — Day 44–52
// ═══════════════════════════════════════════════════════════════
import {
  SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank,
  CulturalNote, PronunciationTip, ExpressionMeter
} from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations
// ═══════════════════════════════════════════════════════════════

function VolunteeringScene() {
  return (
    <SceneIllustration title="🤝 Scene: Volunteering at a Community Event" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky/outdoor background */}
        <rect x="0" y="0" width="500" height="200" fill="#eff6ff"/>
        {/* Ground */}
        <rect x="0" y="155" width="500" height="45" fill="#bbf7d0"/>
        {/* Banner */}
        <rect x="80" y="12" width="340" height="32" rx="6" fill="#1e3a8a"/>
        <text x="250" y="33" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">COMMUNITY CLEAN-UP DAY 🌿</text>
        <line x1="80" y1="12" x2="80" y2="0" stroke="#1e40af" strokeWidth="2"/>
        <line x1="420" y1="12" x2="420" y2="0" stroke="#1e40af" strokeWidth="2"/>
        {/* Info table */}
        <rect x="180" y="90" width="140" height="55" rx="4" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="180" y="90" width="140" height="14" rx="4" fill="#3b82f6"/>
        <text x="250" y="101" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">VOLUNTEER CHECK-IN</text>
        <rect x="188" y="110" width="60" height="7" rx="2" fill="#dbeafe"/>
        <rect x="188" y="120" width="80" height="7" rx="2" fill="#dbeafe"/>
        <rect x="188" y="130" width="50" height="7" rx="2" fill="#dbeafe"/>
        {/* Clipboard */}
        <rect x="260" y="107" width="50" height="35" rx="3" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="278" y="103" width="14" height="7" rx="2" fill="#64748b"/>
        <rect x="265" y="112" width="38" height="2" fill="#fbbf24"/>
        <rect x="265" y="117" width="30" height="2" fill="#fde68a"/>
        <rect x="265" y="122" width="34" height="2" fill="#fde68a"/>
        {/* Volunteer 1 */}
        <circle cx="100" cy="110" r="17" fill="#60a5fa"/>
        <rect x="87" y="127" width="26" height="20" rx="4" fill="#2563eb"/>
        <rect x="90" y="119" width="20" height="8" rx="2" fill="#fef9c3"/>
        <text x="100" y="126" textAnchor="middle" fill="#92400e" fontSize="4.5">VOLUNTEER</text>
        {/* Volunteer 2 */}
        <circle cx="155" cy="108" r="17" fill="#f472b6"/>
        <rect x="142" y="125" width="26" height="20" rx="4" fill="#db2777"/>
        <rect x="145" y="117" width="20" height="8" rx="2" fill="#fef9c3"/>
        <text x="155" y="124" textAnchor="middle" fill="#92400e" fontSize="4.5">VOLUNTEER</text>
        {/* Coordinator */}
        <circle cx="390" cy="105" r="17" fill="#34d399"/>
        <rect x="377" y="122" width="26" height="20" rx="4" fill="#059669"/>
        <rect x="380" y="113" width="20" height="8" rx="2" fill="white"/>
        <text x="390" y="120" textAnchor="middle" fill="#064e3b" fontSize="4.5">COORD.</text>
        {/* Trees */}
        <circle cx="40" cy="120" r="25" fill="#4ade80"/>
        <rect x="36" y="140" width="8" height="18" fill="#92400e"/>
        <circle cx="460" cy="118" r="22" fill="#22c55e"/>
        <rect x="456" y="136" width="8" height="18" fill="#92400e"/>
        {/* Trash bags */}
        <ellipse cx="340" cy="158" rx="15" ry="12" fill="#1e3a8a"/>
        <ellipse cx="370" cy="160" rx="13" ry="10" fill="#1e40af"/>
        <path d="M340 146 Q340 140 340 140" fill="none" stroke="#93c5fd" strokeWidth="1.5"/>
        {/* Speech bubble */}
        <rect x="105" y="85" width="120" height="16" rx="7" fill="white" stroke="#60a5fa" strokeWidth="1"/>
        <text x="165" y="96" textAnchor="middle" fill="#1e3a8a" fontSize="5.5">"Where do I sign in?"</text>
      </svg>
    </SceneIllustration>
  )
}

function NoisyNeighborScene() {
  return (
    <SceneIllustration title="🏢 Scene: Dealing with a Noisy Neighbor" bg="from-slate-50 to-gray-100">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Building exterior */}
        <rect x="0" y="0" width="500" height="200" fill="#f1f5f9"/>
        {/* Apartment building */}
        <rect x="100" y="20" width="300" height="170" rx="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2"/>
        {/* Floor dividers */}
        <rect x="100" y="90" width="300" height="4" fill="#94a3b8"/>
        {/* Windows top floor */}
        <rect x="125" y="35" width="55" height="45" rx="3" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="125" y="35" width="55" height="5" fill="#93c5fd"/>
        <rect x="320" y="35" width="55" height="45" rx="3" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1.5"/>
        <rect x="320" y="35" width="55" height="5" fill="#fbbf24"/>
        {/* Music notes from top window */}
        <text x="195" y="50" fill="#f59e0b" fontSize="14" fontWeight="bold">♪</text>
        <text x="210" y="42" fill="#f59e0b" fontSize="10">♫</text>
        <text x="225" y="52" fill="#f59e0b" fontSize="12" fontWeight="bold">♪</text>
        {/* Speaker icon in top window */}
        <text x="335" y="68" fontSize="20">🔊</text>
        {/* Person in top window (noisy neighbor) */}
        <circle cx="152" cy="58" r="12" fill="#f472b6"/>
        {/* Windows bottom floor */}
        <rect x="125" y="105" width="55" height="45" rx="3" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="125" y="105" width="55" height="5" fill="#6ee7b7"/>
        <rect x="320" y="105" width="55" height="45" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="320" y="105" width="55" height="5" fill="#93c5fd"/>
        {/* Person looking annoyed in bottom window */}
        <circle cx="152" cy="125" r="12" fill="#fbbf24"/>
        <circle cx="148" cy="123" r="1.5" fill="#1e293b"/>
        <circle cx="156" cy="123" r="1.5" fill="#1e293b"/>
        <path d="M148 132 Q152 128 156 132" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
        {/* Door at bottom */}
        <rect x="218" y="140" width="64" height="50" rx="3" fill="#64748b"/>
        <circle cx="275" cy="167" r="3" fill="#fbbf24"/>
        {/* Person at door */}
        <circle cx="390" cy="130" r="14" fill="#fbbf24"/>
        <rect x="377" y="144" width="26" height="20" rx="4" fill="#475569"/>
        {/* Zzz sleep bubble */}
        <text x="320" y="125" fill="#60a5fa" fontSize="11" fontWeight="bold">Zzz</text>
        {/* Knocked door icon */}
        <text x="60" y="115" fontSize="22">🚪</text>
        <text x="55" y="145" fontSize="12">👊</text>
      </svg>
    </SceneIllustration>
  )
}

function ArtGalleryScene() {
  return (
    <SceneIllustration title="🎨 Scene: Art Gallery Opening" bg="from-pink-50 to-fuchsia-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Gallery interior */}
        <rect x="0" y="0" width="500" height="200" fill="#fdf4ff"/>
        {/* Floor */}
        <rect x="0" y="160" width="500" height="40" fill="#f3e8ff"/>
        {/* Ceiling spotlights */}
        {[70, 160, 250, 340, 430].map((x, i) => (
          <g key={i}>
            <rect x={x-6} y="0" width="12" height="8" rx="2" fill="#a855f7"/>
            <polygon points={`${x-14},8 ${x+14},8 ${x+8},30 ${x-8},30`} fill="#fef9c3" opacity="0.4"/>
          </g>
        ))}
        {/* White walls */}
        <rect x="0" y="0" width="500" height="162" fill="#fdf4ff"/>
        {/* Artwork 1 */}
        <rect x="30" y="30" width="80" height="100" rx="2" fill="white" stroke="#e879f9" strokeWidth="2"/>
        <rect x="35" y="35" width="70" height="90" fill="#fce7f3"/>
        <circle cx="70" cy="65" r="22" fill="#f0abfc"/>
        <circle cx="55" cy="85" r="15" fill="#e879f9"/>
        <circle cx="85" cy="90" r="12" fill="#a855f7"/>
        <rect x="30" y="135" width="80" height="6" rx="1" fill="#d8b4fe"/>
        {/* Artwork 2 - Abstract */}
        <rect x="195" y="20" width="110" height="120" rx="2" fill="white" stroke="#e879f9" strokeWidth="2"/>
        <rect x="200" y="25" width="100" height="110" fill="#fdf4ff"/>
        <rect x="200" y="25" width="35" height="110" fill="#f0abfc"/>
        <rect x="235" y="25" width="30" height="55" fill="#c084fc"/>
        <rect x="265" y="70" width="35" height="65" fill="#a855f7"/>
        <rect x="235" y="80" width="30" height="55" fill="#e879f9"/>
        <rect x="195" y="145" width="110" height="6" rx="1" fill="#d8b4fe"/>
        {/* Artwork 3 */}
        <rect x="385" y="30" width="90" height="100" rx="2" fill="white" stroke="#e879f9" strokeWidth="2"/>
        <rect x="390" y="35" width="80" height="90" fill="#fce7f3"/>
        <rect x="390" y="35" width="80" height="45" fill="#fdf4ff"/>
        <circle cx="430" cy="95" r="18" fill="#f472b6"/>
        <polygon points="390,80 430,35 470,80" fill="#c084fc"/>
        <rect x="385" y="135" width="90" height="6" rx="1" fill="#d8b4fe"/>
        {/* Champagne glasses */}
        <path d="M142 140 Q148 128 154 140" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1"/>
        <line x1="148" y1="140" x2="148" y2="155" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="144" y="153" width="8" height="3" rx="1" fill="#6ee7b7"/>
        <path d="M162 138 Q168 126 174 138" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/>
        <line x1="168" y1="138" x2="168" y2="153" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="164" y="151" width="8" height="3" rx="1" fill="#93c5fd"/>
        {/* Visitors */}
        <circle cx="148" cy="118" r="14" fill="#f472b6"/>
        <rect x="136" y="132" width="24" height="20" rx="4" fill="#a855f7"/>
        <circle cx="175" cy="115" r="14" fill="#fbbf24"/>
        <rect x="163" y="129" width="24" height="20" rx="4" fill="#f59e0b"/>
        {/* Speech bubble */}
        <rect x="155" y="96" width="120" height="16" rx="7" fill="white" stroke="#e879f9" strokeWidth="1"/>
        <text x="215" y="107" textAnchor="middle" fill="#86198f" fontSize="5.5">"The composition is stunning!"</text>
      </svg>
    </SceneIllustration>
  )
}

function VisaScene() {
  return (
    <SceneIllustration title="🛂 Scene: Applying for a Visa" bg="from-teal-50 to-cyan-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Embassy interior */}
        <rect x="0" y="0" width="500" height="200" fill="#f0fdfa"/>
        {/* Floor */}
        <rect x="0" y="162" width="500" height="38" fill="#ccfbf1"/>
        {/* Embassy sign */}
        <rect x="130" y="8" width="240" height="25" rx="4" fill="#0f766e"/>
        <text x="250" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">EMBASSY — VISA SERVICES</text>
        {/* Counter/window */}
        <rect x="140" y="80" width="220" height="75" rx="4" fill="#99f6e4" stroke="#2dd4bf" strokeWidth="1.5"/>
        <rect x="140" y="80" width="220" height="14" rx="4" fill="#0d9488"/>
        <text x="250" y="91" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold">WINDOW 3 — STUDENT VISA</text>
        {/* Glass partition */}
        <rect x="140" y="110" width="220" height="3" fill="#a5f3fc"/>
        {/* Documents on counter */}
        <rect x="155" y="96" width="45" height="55" rx="2" fill="white" stroke="#5eead4" strokeWidth="1"/>
        <rect x="158" y="99" width="39" height="5" fill="#0d9488"/>
        <rect x="158" y="107" width="28" height="2" fill="#ccfbf1"/>
        <rect x="158" y="112" width="32" height="2" fill="#ccfbf1"/>
        <rect x="158" y="117" width="24" height="2" fill="#ccfbf1"/>
        <rect x="158" y="122" width="30" height="2" fill="#ccfbf1"/>
        <rect x="158" y="127" width="35" height="2" fill="#ccfbf1"/>
        {/* Passport */}
        <rect x="210" y="98" width="35" height="48" rx="3" fill="#1e3a8a"/>
        <rect x="213" y="101" width="29" height="39" rx="2" fill="#dbeafe"/>
        <circle cx="227" cy="112" r="7" fill="#93c5fd"/>
        <rect x="216" y="122" width="22" height="2" fill="#93c5fd"/>
        <rect x="216" y="127" width="18" height="2" fill="#93c5fd"/>
        <rect x="216" y="132" width="20" height="2" fill="#93c5fd"/>
        <text x="227" y="145" textAnchor="middle" fill="#1e3a8a" fontSize="4.5" fontWeight="bold">PASSPORT</text>
        {/* Stamp */}
        <circle cx="310" cy="115" r="18" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2"/>
        <text x="310" y="112" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">VISA</text>
        <text x="310" y="121" textAnchor="middle" fill="#ef4444" fontSize="5">APPROVED</text>
        {/* Officer */}
        <circle cx="395" cy="100" r="16" fill="#34d399"/>
        <rect x="382" y="116" width="26" height="20" rx="4" fill="#059669"/>
        <rect x="385" y="107" width="20" height="8" rx="2" fill="#0d9488"/>
        <text x="395" y="114" textAnchor="middle" fill="white" fontSize="4">OFFICER</text>
        {/* Applicant */}
        <circle cx="80" cy="110" r="16" fill="#fbbf24"/>
        <rect x="67" y="126" width="26" height="20" rx="4" fill="#f59e0b"/>
        {/* Queue number */}
        <rect x="55" y="92" width="28" height="14" rx="3" fill="white" stroke="#5eead4" strokeWidth="1"/>
        <text x="69" y="102" textAnchor="middle" fill="#0f766e" fontSize="7" fontWeight="bold">A-47</text>
        {/* Waiting chairs */}
        {[20, 55].map((x, i) => (
          <g key={i}>
            <rect x={x} y="155" width="28" height="8" rx="2" fill="#a5f3fc"/>
            <rect x={x+3} y="163" width="7" height="6" rx="1" fill="#67e8f9"/>
            <rect x={x+18} y="163" width="7" height="6" rx="1" fill="#67e8f9"/>
          </g>
        ))}
      </svg>
    </SceneIllustration>
  )
}

function TherapyScene() {
  return (
    <SceneIllustration title="🛋️ Scene: Therapy / Counseling Session" bg="from-emerald-50 to-green-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Warm office background */}
        <rect x="0" y="0" width="500" height="200" fill="#f0fdf4"/>
        {/* Floor */}
        <rect x="0" y="162" width="500" height="38" fill="#dcfce7"/>
        {/* Bookshelf */}
        <rect x="390" y="10" width="100" height="150" rx="3" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        {[25,50,75,100,125].map((y, i) => (
          <rect key={i} x="395" y={y} width="90" height="2.5" fill="#6ee7b7"/>
        ))}
        {[[395,12,12,12,'#f87171'],[408,12,10,12,'#fbbf24'],[419,12,14,12,'#60a5fa'],[434,12,9,12,'#a78bfa'],[444,12,16,12,'#34d399'],[461,12,12,12,'#fb923c'],
          [395,28,14,20,'#6ee7b7'],[410,28,10,20,'#f472b6'],[421,28,12,20,'#fbbf24'],[434,28,14,20,'#60a5fa'],[449,28,10,20,'#f87171'],
          [395,53,10,20,'#a78bfa'],[406,53,14,20,'#fbbf24'],[421,53,9,20,'#34d399'],[431,53,15,20,'#f87171'],[447,53,12,20,'#3b82f6'],
        ].map(([x,y,w,h,fill],i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="1.5" fill={fill}/>
        ))}
        {/* Plant */}
        <rect x="30" y="140" width="12" height="22" rx="2" fill="#92400e"/>
        <ellipse cx="36" cy="132" rx="18" ry="16" fill="#4ade80"/>
        <ellipse cx="28" cy="138" rx="12" ry="10" fill="#22c55e"/>
        <ellipse cx="46" cy="137" rx="11" ry="9" fill="#16a34a"/>
        {/* Therapy couch */}
        <rect x="120" y="125" width="200" height="30" rx="8" fill="#86efac" stroke="#4ade80" strokeWidth="1.5"/>
        <rect x="120" y="125" width="200" height="12" rx="8" fill="#4ade80"/>
        <rect x="108" y="120" width="22" height="40" rx="5" fill="#22c55e"/>
        {/* Client on couch */}
        <circle cx="230" cy="112" r="15" fill="#fbbf24"/>
        <rect x="150" y="118" width="120" height="14" rx="7" fill="#86efac"/>
        {/* Therapist chair */}
        <rect x="350" y="115" width="40" height="45" rx="5" fill="#059669"/>
        <rect x="355" y="110" width="30" height="10" rx="3" fill="#047857"/>
        {/* Therapist */}
        <circle cx="370" cy="95" r="15" fill="#60a5fa"/>
        <rect x="357" y="110" width="26" height="20" rx="4" fill="#2563eb"/>
        {/* Notepad */}
        <rect x="350" y="130" width="28" height="22" rx="3" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="353" y="133" width="22" height="2" fill="#fbbf24"/>
        <rect x="353" y="138" width="18" height="2" fill="#fde68a"/>
        <rect x="353" y="143" width="20" height="2" fill="#fde68a"/>
        {/* Ambient lamp */}
        <rect x="60" y="80" width="6" height="55" fill="#92400e"/>
        <polygon points="38,78 88,78 75,55 51,55" fill="#fbbf24"/>
        <ellipse cx="63" cy="80" rx="15" ry="5" fill="#fef9c3" opacity="0.5"/>
        {/* Window with curtains */}
        <rect x="178" y="10" width="100" height="65" rx="3" fill="#a7f3d0"/>
        <rect x="178" y="10" width="20" height="65" fill="#4ade80" opacity="0.7"/>
        <rect x="258" y="10" width="20" height="65" fill="#4ade80" opacity="0.7"/>
        <rect x="178" y="10" width="100" height="8" fill="#059669"/>
        {/* Speech bubble */}
        <rect x="130" y="85" width="130" height="18" rx="8" fill="white" stroke="#4ade80" strokeWidth="1"/>
        <text x="195" y="97" textAnchor="middle" fill="#065f46" fontSize="5.5">"How have you been feeling?"</text>
      </svg>
    </SceneIllustration>
  )
}

function PlumberScene() {
  return (
    <SceneIllustration title="🔧 Scene: Home Repair / Calling a Plumber" bg="from-amber-50 to-yellow-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Bathroom/kitchen background */}
        <rect x="0" y="0" width="500" height="200" fill="#fffbeb"/>
        {/* Floor tiles */}
        {[0,50,100,150,200,250,300,350,400,450].map((x, i) => (
          <rect key={i} x={x} y="158" width="50" height="42" fill={i%2===0 ? '#fef9c3' : '#fef3c7'} stroke="#fde68a" strokeWidth="0.5"/>
        ))}
        {/* Wall tiles */}
        {[0,40,80,120,160,200,240,280,320,360,400,440].map((x, i) => (
          [0,30,60,90,120].map((y, j) => (
            <rect key={`${i}-${j}`} x={x} y={y} width="40" height="30" fill={(i+j)%2===0 ? '#fffbeb' : '#fef9c3'} stroke="#fde68a" strokeWidth="0.4"/>
          ))
        ))}
        {/* Sink */}
        <rect x="170" y="85" width="100" height="60" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
        <ellipse cx="220" cy="120" rx="32" ry="18" fill="white" stroke="#94a3b8" strokeWidth="1"/>
        <ellipse cx="220" cy="122" rx="10" ry="7" fill="#bfdbfe"/>
        {/* Faucet */}
        <rect x="214" y="88" width="12" height="20" rx="3" fill="#94a3b8"/>
        <rect x="207" y="88" width="26" height="6" rx="2" fill="#cbd5e1"/>
        {/* Water dripping/leaking */}
        <ellipse cx="220" cy="145" rx="8" ry="3" fill="#93c5fd"/>
        {[0,1,2,3,4].map(i => (
          <ellipse key={i} cx={210 + i*5} cy={152 + (i%2)*4} rx="3" ry="2" fill="#60a5fa" opacity={0.7 - i*0.1}/>
        ))}
        <path d="M220 108 Q220 125 222 140" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3,2"/>
        {/* Flooded floor puddle */}
        <ellipse cx="220" cy="170" rx="70" ry="12" fill="#bfdbfe" opacity="0.6"/>
        {/* Plumber */}
        <circle cx="360" cy="95" r="17" fill="#f59e0b"/>
        <rect x="347" y="112" width="26" height="22" rx="4" fill="#1e293b"/>
        {/* Tool belt */}
        <rect x="345" y="120" width="30" height="6" rx="2" fill="#78350f"/>
        <rect x="348" y="119" width="6" height="8" rx="1" fill="#fbbf24"/>
        <rect x="356" y="119" width="6" height="8" rx="1" fill="#ef4444"/>
        <rect x="364" y="119" width="6" height="8" rx="1" fill="#3b82f6"/>
        {/* Wrench */}
        <rect x="373" y="105" width="22" height="5" rx="2" fill="#6b7280" transform="rotate(-35 373 105)"/>
        <circle cx="386" cy="97" r="5" fill="none" stroke="#6b7280" strokeWidth="2"/>
        {/* Toolbox */}
        <rect x="400" y="140" width="60" height="30" rx="4" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5"/>
        <rect x="400" y="140" width="60" height="8" rx="4" fill="#d97706"/>
        <rect x="422" y="134" width="16" height="8" rx="3" fill="#92400e"/>
        {/* Homeowner */}
        <circle cx="100" cy="110" r="17" fill="#f472b6"/>
        <rect x="87" y="127" width="26" height="22" rx="4" fill="#db2777"/>
        {/* Phone */}
        <rect x="62" y="108" width="16" height="22" rx="3" fill="#1e293b"/>
        <rect x="64" y="111" width="12" height="14" rx="1" fill="#60a5fa"/>
        {/* Speech bubble */}
        <rect x="110" y="88" width="130" height="16" rx="7" fill="white" stroke="#fbbf24" strokeWidth="1"/>
        <text x="175" y="99" textAnchor="middle" fill="#92400e" fontSize="5.5">"The pipe is leaking badly!"</text>
      </svg>
    </SceneIllustration>
  )
}

function GraduationScene() {
  return (
    <SceneIllustration title="🎓 Scene: Graduation Ceremony" bg="from-rose-50 to-pink-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky / outdoor venue */}
        <rect x="0" y="0" width="500" height="200" fill="#fff1f2"/>
        {/* Stage */}
        <rect x="0" y="130" width="500" height="70" fill="#fecdd3"/>
        <rect x="0" y="128" width="500" height="6" fill="#fb7185"/>
        {/* Podium */}
        <rect x="220" y="95" width="60" height="40" rx="3" fill="#e11d48"/>
        <rect x="210" y="92" width="80" height="8" rx="2" fill="#be123c"/>
        <text x="250" y="115" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">CLASS OF 2026</text>
        {/* Mic */}
        <rect x="247" y="82" width="6" height="10" fill="#9ca3af"/>
        <circle cx="250" cy="80" r="6" fill="#6b7280"/>
        {/* Banners */}
        <rect x="50" y="10" width="100" height="40" rx="4" fill="#be123c"/>
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">CONGRATULATIONS</text>
        <text x="100" y="42" textAnchor="middle" fill="#fda4af" fontSize="6">GRADUATES 2026</text>
        <rect x="350" y="10" width="100" height="40" rx="4" fill="#be123c"/>
        <text x="400" y="28" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">EXCELLENCE</text>
        <text x="400" y="40" textAnchor="middle" fill="#fda4af" fontSize="6">& ACHIEVEMENT</text>
        {/* Graduates row */}
        {[
          [60, '#fbbf24'], [115, '#60a5fa'], [170, '#f472b6'],
          [330, '#34d399'], [385, '#a78bfa'], [440, '#f87171']
        ].map(([x, fill], i) => (
          <g key={i}>
            <circle cx={x} cy={108} r="14" fill={fill}/>
            <rect x={x-13} y={122} width="26" height="18" rx="4" fill="#be123c"/>
            {/* Cap */}
            <rect x={x-12} y={96} width="24" height="4" fill="#1e293b"/>
            <polygon points={`${x-14},96 ${x+14},96 ${x},88`} fill="#1e293b"/>
            <line x1={x+10} y1="88" x2={x+18} y2="100" stroke="#fbbf24" strokeWidth="1.5"/>
            <circle cx={x+18} cy="101" r="2" fill="#fbbf24"/>
          </g>
        ))}
        {/* Speaker at podium */}
        <circle cx="250" cy="80" r="0"/>
        {/* Balloons */}
        {[[30,'#f87171'],[45,'#fbbf24'],[460,'#60a5fa'],[475,'#a78bfa']].map(([x,fill],i) => (
          <g key={i}>
            <ellipse cx={x} cy="40" rx="12" ry="14" fill={fill} opacity="0.85"/>
            <line x1={x} y1="54" x2={x+3} y2="80" stroke={fill} strokeWidth="1.2"/>
          </g>
        ))}
        {/* Confetti */}
        {[[80,20,'#fbbf24'],[140,15,'#f472b6'],[200,25,'#60a5fa'],[300,18,'#34d399'],[360,22,'#f87171'],[420,14,'#a78bfa'],
          [90,35,'#fb923c'],[165,30,'#4ade80'],[250,10,'#f472b6'],[310,32,'#fbbf24']].map(([x,y,fill],i) => (
          <rect key={i} x={x} y={y} width="6" height="6" rx="1" fill={fill} transform={`rotate(${i*30} ${x+3} ${y+3})`}/>
        ))}
        {/* Speech bubble */}
        <rect x="155" y="62" width="130" height="18" rx="8" fill="white" stroke="#fb7185" strokeWidth="1"/>
        <text x="220" y="74" textAnchor="middle" fill="#be123c" fontSize="5.5">"I'm so proud of our class!"</text>
      </svg>
    </SceneIllustration>
  )
}

function NewJobScene() {
  return (
    <SceneIllustration title="💼 Scene: Starting a New Job" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Office background */}
        <rect x="0" y="0" width="500" height="200" fill="#eff6ff"/>
        {/* Floor */}
        <rect x="0" y="160" width="500" height="40" fill="#dbeafe"/>
        {/* Office ceiling lights */}
        {[80, 200, 320, 440].map((x, i) => (
          <g key={i}>
            <rect x={x-20} y="0" width="40" height="6" rx="2" fill="#93c5fd"/>
            <rect x={x-18} y="6" width="36" height="4" fill="#bfdbfe" opacity="0.8"/>
          </g>
        ))}
        {/* Desks */}
        <rect x="50" y="105" width="130" height="50" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="50" y="105" width="130" height="10" rx="4" fill="#93c5fd"/>
        {/* Computer on desk 1 */}
        <rect x="80" y="75" width="70" height="32" rx="3" fill="#1e293b"/>
        <rect x="83" y="78" width="64" height="26" rx="2" fill="#0ea5e9"/>
        <rect x="108" y="107" width="20" height="4" rx="1" fill="#334155"/>
        <rect x="100" y="111" width="36" height="3" rx="1" fill="#475569"/>
        {/* Text on screen */}
        <rect x="87" y="82" width="40" height="3" fill="white" opacity="0.7"/>
        <rect x="87" y="88" width="32" height="3" fill="white" opacity="0.5"/>
        <rect x="87" y="94" width="36" height="3" fill="white" opacity="0.5"/>
        {/* Desk 2 */}
        <rect x="320" y="105" width="130" height="50" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="320" y="105" width="130" height="10" rx="4" fill="#93c5fd"/>
        <rect x="350" y="75" width="70" height="32" rx="3" fill="#1e293b"/>
        <rect x="353" y="78" width="64" height="26" rx="2" fill="#6366f1"/>
        <rect x="378" y="107" width="20" height="4" rx="1" fill="#334155"/>
        <rect x="370" y="111" width="36" height="3" rx="1" fill="#475569"/>
        {/* New employee */}
        <circle cx="115" cy="88" r="0"/>
        <circle cx="130" cy="68" r="16" fill="#fbbf24"/>
        <rect x="117" y="84" width="26" height="22" rx="4" fill="#1e3a8a"/>
        {/* Name badge */}
        <rect x="120" y="87" width="22" height="14" rx="2" fill="white" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="122" y="89" width="18" height="2.5" fill="#1e3a8a"/>
        <rect x="122" y="93" width="12" height="2" fill="#93c5fd"/>
        <text x="131" y="99" textAnchor="middle" fill="#1e3a8a" fontSize="3.5">NEW</text>
        {/* Mentor */}
        <circle cx="385" cy="68" r="16" fill="#60a5fa"/>
        <rect x="372" y="84" width="26" height="22" rx="4" fill="#1e3a8a"/>
        <rect x="375" y="87" width="22" height="14" rx="2" fill="white" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="377" y="89" width="18" height="2.5" fill="#1e3a8a"/>
        <rect x="377" y="93" width="14" height="2" fill="#fbbf24"/>
        <text x="386" y="99" textAnchor="middle" fill="#1e3a8a" fontSize="3.5">MENTOR</text>
        {/* HR Manager center */}
        <circle cx="250" cy="78" r="17" fill="#34d399"/>
        <rect x="237" y="95" width="26" height="22" rx="4" fill="#059669"/>
        <rect x="240" y="99" width="20" height="12" rx="2" fill="white" stroke="#059669" strokeWidth="1"/>
        <text x="250" y="109" textAnchor="middle" fill="#065f46" fontSize="3.5">HR MGR</text>
        {/* Welcome sign */}
        <rect x="165" y="15" width="170" height="28" rx="5" fill="#1e3a8a"/>
        <text x="250" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">WELCOME TO THE TEAM!</text>
        <text x="250" y="37" textAnchor="middle" fill="#93c5fd" fontSize="5.5">Onboarding Day 1</text>
        {/* Speech bubble */}
        <rect x="152" y="55" width="120" height="16" rx="7" fill="white" stroke="#60a5fa" strokeWidth="1"/>
        <text x="212" y="66" textAnchor="middle" fill="#1e3a8a" fontSize="5.5">"Let me show you around!"</text>
      </svg>
    </SceneIllustration>
  )
}

function BirthdayPartyScene() {
  return (
    <SceneIllustration title="🎂 Scene: Planning a Birthday Party" bg="from-pink-50 to-fuchsia-50">
      <svg viewBox="0 0 500 200" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Party room */}
        <rect x="0" y="0" width="500" height="200" fill="#fdf4ff"/>
        {/* Floor */}
        <rect x="0" y="162" width="500" height="38" fill="#f3e8ff"/>
        {/* Bunting / banners */}
        <path d="M20 15 Q125 40 250 15 Q375 40 480 15" fill="none" stroke="#e879f9" strokeWidth="2"/>
        {[20,65,110,155,200,245,290,335,380,425,470].map((x, i) => (
          <polygon key={i} points={`${x},15 ${x+15},15 ${x+7.5},32`} fill={['#f87171','#fbbf24','#4ade80','#60a5fa','#f472b6','#a78bfa','#fb923c','#34d399','#f87171','#fbbf24','#60a5fa'][i]}/>
        ))}
        {/* Birthday cake */}
        <rect x="195" y="105" width="110" height="50" rx="6" fill="#fda4af" stroke="#fb7185" strokeWidth="1.5"/>
        <rect x="195" y="105" width="110" height="16" rx="6" fill="#f9a8d4"/>
        <rect x="195" y="117" width="110" height="8" fill="#fda4af"/>
        {/* Frosting drips */}
        {[210,230,255,280,300].map((x, i) => (
          <path key={i} d={`M${x} 105 Q${x+4} 118 ${x+3} 121`} fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        ))}
        {/* Cake decorations */}
        <text x="250" y="142" textAnchor="middle" fontSize="12">🎂</text>
        {/* Candles */}
        {[215,230,245,260,275,290,305].map((x, i) => (
          <g key={i}>
            <rect x={x-3} y="91" width="6" height="14" rx="2" fill={['#f87171','#fbbf24','#4ade80','#60a5fa','#f472b6','#a78bfa','#fb923c'][i]}/>
            <ellipse cx={x} cy="90" rx="3" ry="2" fill="#fef9c3"/>
            <path d={`M${x} 86 Q${x+2} 82 ${x} 79`} fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
          </g>
        ))}
        {/* Balloons */}
        {[[40,'#f87171'],[60,'#fbbf24'],[80,'#4ade80'],[420,'#60a5fa'],[440,'#f472b6'],[460,'#a78bfa']].map(([x,fill],i) => (
          <g key={i}>
            <ellipse cx={x} cy={40 + (i%2)*10} rx="14" ry="17" fill={fill} opacity="0.85"/>
            <line x1={x} y1={57 + (i%2)*10} x2={x - 5 + i*2} y2="90" stroke={fill} strokeWidth="1.2"/>
          </g>
        ))}
        {/* Gift boxes */}
        <rect x="60" y="130" width="45" height="35" rx="3" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="60" y="130" width="45" height="12" rx="3" fill="#3b82f6"/>
        <rect x="80" y="128" width="6" height="4" rx="1" fill="#fbbf24"/>
        <rect x="76" y="130" width="14" height="35" fill="#fbbf24" opacity="0.5"/>
        <rect x="60" y="144" width="45" height="3" fill="#fbbf24" opacity="0.5"/>
        <rect x="380" y="128" width="50" height="37" rx="3" fill="#f472b6" stroke="#db2777" strokeWidth="1.5"/>
        <rect x="380" y="128" width="50" height="13" rx="3" fill="#db2777"/>
        <rect x="402" y="126" width="6" height="4" rx="1" fill="#fbbf24"/>
        <rect x="397" y="128" width="16" height="37" fill="#fbbf24" opacity="0.5"/>
        {/* Friends planning */}
        <circle cx="140" cy="118" r="16" fill="#fbbf24"/>
        <rect x="127" y="134" width="26" height="20" rx="4" fill="#f59e0b"/>
        <circle cx="358" cy="118" r="16" fill="#60a5fa"/>
        <rect x="345" y="134" width="26" height="20" rx="4" fill="#2563eb"/>
        {/* Notepad/phone */}
        <rect x="155" y="108" width="18" height="24" rx="3" fill="#1e293b"/>
        <rect x="157" y="111" width="14" height="16" rx="1" fill="#f9a8d4"/>
        {/* Speech bubble */}
        <rect x="148" y="92" width="130" height="16" rx="7" fill="white" stroke="#e879f9" strokeWidth="1"/>
        <text x="213" y="103" textAnchor="middle" fill="#86198f" fontSize="5.5">"How many guests should we invite?"</text>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// Conversations Part 6
// ═══════════════════════════════════════════════════════════════

export const conversationsPart6 = [
  // ─────────────────────────────────────────────────────────────
  // Day 44 — Volunteering at a Community Event
  // ─────────────────────────────────────────────────────────────
  {
    id: 44,
    day: 44,
    title: 'Volunteering at a Community Event',
    category: 'Professional',
    difficulty: 'Intermediate',
    color: 'blue',
    body: (
      <>
        <VolunteeringScene />

        <ConversationCard
          speakers={{ A: 'Maya', B: 'Coordinator' }}
          situation="Maya arrives at the community clean-up event and approaches the registration table."
          lines={[
            { speaker: 'A', en: "Hi! I signed up online to volunteer today. My name is Maya Sari.", id: "Halo! Saya daftar online untuk jadi sukarelawan hari ini. Nama saya Maya Sari." },
            { speaker: 'B', en: "Welcome, Maya! Let me check you off the list. Here's your volunteer badge and a T-shirt.", id: "Selamat datang, Maya! Izinkan saya mencentang namamu di daftar. Ini badge dan kaos sukarelawanmu.", note: "check off = mencoret dari daftar" },
            { speaker: 'A', en: "Thank you! Where should I head first? I'm not sure what my role is.", id: "Terima kasih! Saya harus pergi ke mana dulu? Saya belum tahu peran saya." },
            { speaker: 'B', en: "You're assigned to the litter pick-up team in Sector B. We'll pair you with an experienced volunteer.", id: "Kamu ditempatkan di tim pengumpul sampah di Sektor B. Kami akan memasangkanmu dengan sukarelawan berpengalaman." },
            { speaker: 'A', en: "That sounds great. Is there a briefing before we get started?", id: "Kedengarannya bagus. Apakah ada pengarahan sebelum kita mulai?", note: "briefing = pengarahan singkat" },
            { speaker: 'B', en: "Yes, we gather at the main tent at 8:30. Grab some coffee and the team leader will walk you through everything.", id: "Ya, kita berkumpul di tenda utama pukul 8:30. Ambil kopi dulu, dan ketua tim akan menjelaskan semuanya." },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Maya', B: 'Team Leader' }}
          situation="Maya joins her team and talks with the team leader, David."
          lines={[
            { speaker: 'B', en: "Good morning, everyone! Today we're tackling the riverbank. It's hard work but very rewarding.", id: "Selamat pagi semua! Hari ini kita akan membersihkan tepi sungai. Ini pekerjaan berat tapi sangat memuaskan.", note: "tackling = menangani/menghadapi" },
            { speaker: 'A', en: "Hi, I'm Maya. This is actually my first time volunteering at an event this size.", id: "Halo, saya Maya. Ini sebenarnya pertama kali saya jadi sukarelawan di acara sebesar ini." },
            { speaker: 'B', en: "No worries at all! Just follow the safety guidelines and let me know if you need anything.", id: "Tidak perlu khawatir sama sekali! Ikuti panduan keselamatan dan beritahu saya jika kamu butuh apa pun." },
            { speaker: 'A', en: "Will do. I'm happy to take on any tasks that need extra hands.", id: "Siap. Saya senang mengambil tugas apa pun yang membutuhkan bantuan tambahan.", note: "take on = mengambil alih/mengerjakan" },
            { speaker: 'B', en: "Perfect attitude! We really appreciate volunteers who show initiative. Welcome aboard!", id: "Sikap yang sempurna! Kami sangat menghargai sukarelawan yang menunjukkan inisiatif. Selamat bergabung!", note: "welcome aboard = selamat bergabung" },
          ]}
        />

        <KeyPhrasesCard
          title="Volunteering & Community Service Phrases"
          color="indigo"
          phrases={[
            { en: "I signed up online", id: "Saya mendaftar secara online", usage: "I signed up online last week." },
            { en: "What's my role / assignment?", id: "Apa peran/tugas saya?" },
            { en: "I'm happy to take on any task", id: "Saya senang mengambil tugas apa pun", usage: "I'm happy to take on any task that's needed." },
            { en: "Show initiative", id: "Menunjukkan inisiatif", usage: "Good volunteers always show initiative." },
            { en: "Welcome aboard!", id: "Selamat bergabung!", usage: "Welcome aboard, everyone!" },
            { en: "Walk someone through something", id: "Menjelaskan sesuatu step by step", usage: "Let me walk you through the process." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="The coordinator will ___ you ___ the orientation before the event starts."
          blank="walk / through"
          options={['walk / through', 'take / over', 'sign / up', 'check / off']}
          answer="walk / through"
          explanation="'Walk someone through something' means to explain step by step."
        />
        <FillInBlank
          sentence="She really ___ by arriving early and helping set up the equipment."
          blank="showed initiative"
          options={['showed initiative', 'signed up online', 'took a break', 'checked off']}
          answer="showed initiative"
          explanation="'Showed initiative' means she acted proactively without being asked."
        />

        <CulturalNote>
          <strong>Volunteering culture in English-speaking countries:</strong> In the US, UK, and Australia, volunteering is highly respected and often listed on resumes. Community events commonly require pre-registration. Saying "welcome aboard" is a warm, inclusive phrase borrowed from nautical/aviation language, used whenever someone joins a group or team.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="volunteer" ipa="ˌvɒl.ənˈtɪər" tip="Stress on the last syllable: vol-un-TEER" />
          <PronunciationTip word="initiative" ipa="ɪˈnɪʃ.ə.tɪv" tip="i-NISH-uh-tiv — 4 syllables" />
        </div>

        <ExpressionMeter
          formal={[
            "I would like to volunteer for this event.",
            "I am assigned to the litter collection team.",
            "Could you brief me on the responsibilities?",
          ]}
          informal={[
            "I signed up to help out today!",
            "I'm on the clean-up crew.",
            "What do I need to do?",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 45 — Dealing with a Noisy Neighbor
  // ─────────────────────────────────────────────────────────────
  {
    id: 45,
    day: 45,
    title: 'Dealing with a Noisy Neighbor',
    category: 'Daily Life',
    difficulty: 'Intermediate',
    color: 'slate',
    body: (
      <>
        <NoisyNeighborScene />

        <ConversationCard
          speakers={{ A: 'Kevin', B: 'Neighbor' }}
          situation="Kevin knocks on his upstairs neighbor's door late at night to address the noise."
          lines={[
            { speaker: 'A', en: "Hi, I'm Kevin from apartment 4B, right below you. I hate to bother you, but the music is really loud.", id: "Halo, saya Kevin dari apartemen 4B, tepat di bawah Anda. Saya tidak ingin mengganggu, tapi musiknya sangat keras.", note: "I hate to bother you = saya tidak ingin mengganggu" },
            { speaker: 'B', en: "Oh wow, I'm so sorry! I completely lost track of time. Is it that bad downstairs?", id: "Oh astaga, maaf sekali! Saya benar-benar tidak sadar waktu. Apakah seperas itu kedengarannya di bawah?", note: "lost track of time = tidak sadar waktu berlalu" },
            { speaker: 'A', en: "Yeah, the bass is coming straight through the ceiling. I have work early tomorrow.", id: "Ya, bassnya terdengar langsung menembus langit-langit. Saya ada kerja pagi besok." },
            { speaker: 'B', en: "I totally get it. I'll turn it down right away. I should've been more considerate.", id: "Saya sepenuhnya mengerti. Saya akan langsung mengecilkan volumenya. Saya seharusnya lebih mempertimbangkan orang lain.", note: "considerate = penuh pertimbangan/perhatian" },
            { speaker: 'A', en: "I appreciate that. No hard feelings, I just need to sleep!", id: "Saya menghargai itu. Tidak ada rasa tersinggung, saya cuma perlu tidur!" },
            { speaker: 'B', en: "Absolutely. If it ever bothers you again, just knock. Better than me getting a complaint from management.", id: "Tentu saja. Kalau lain kali mengganggu, ketuk saja. Lebih baik daripada saya dapat komplain dari manajemen." },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Kevin', B: 'Building Manager' }}
          situation="The noise problem persists. Kevin contacts the building manager."
          lines={[
            { speaker: 'A', en: "Good morning. I'd like to report an ongoing noise issue with apartment 5B.", id: "Selamat pagi. Saya ingin melaporkan masalah kebisingan yang terus berlanjut dari apartemen 5B.", note: "ongoing = yang terus berlangsung" },
            { speaker: 'B', en: "I understand. How long has this been going on, and have you spoken to the tenant directly?", id: "Saya mengerti. Sudah berapa lama ini terjadi, dan apakah Anda sudah berbicara langsung dengan penghuninya?" },
            { speaker: 'A', en: "It's been about two weeks. I've talked to them twice, but the problem keeps coming back.", id: "Sudah sekitar dua minggu. Saya sudah berbicara dua kali, tapi masalahnya terus berulang." },
            { speaker: 'B', en: "I'll send them a formal noise warning today. If it continues, we can escalate to a lease violation.", id: "Saya akan mengirimkan peringatan kebisingan resmi hari ini. Jika berlanjut, kita bisa eskalasikan ke pelanggaran kontrak sewa.", note: "escalate = eskalasikan/tingkatkan" },
            { speaker: 'A', en: "Thank you. I really don't want to cause trouble, but I'm at my wit's end.", id: "Terima kasih. Saya tidak ingin membuat masalah, tapi saya sudah kehabisan akal.", note: "at my wit's end = sudah tidak tahu harus apa lagi" },
          ]}
        />

        <KeyPhrasesCard
          title="Neighbor Dispute & Conflict Resolution Phrases"
          color="indigo"
          phrases={[
            { en: "I hate to bother you, but...", id: "Saya tidak ingin mengganggu, tapi..." },
            { en: "I lost track of time", id: "Saya tidak sadar waktu berlalu" },
            { en: "No hard feelings", id: "Tidak ada rasa tersinggung", usage: "No hard feelings, okay?" },
            { en: "I'm at my wit's end", id: "Saya sudah kehabisan akal/cara" },
            { en: "Ongoing issue", id: "Masalah yang terus berlanjut" },
            { en: "Escalate the matter", id: "Meningkatkan/mengeskalasi masalah", usage: "We may need to escalate this." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="I ___ to bother you, but your music has been very loud for the past hour."
          blank="hate"
          options={['hate', 'like', 'want', 'need']}
          answer="hate"
          explanation="'I hate to bother you' is a polite way to introduce a complaint."
        />
        <FillInBlank
          sentence="If the problem continues, the manager may ___ the matter to a formal complaint."
          blank="escalate"
          options={['escalate', 'celebrate', 'delegate', 'tolerate']}
          answer="escalate"
          explanation="'Escalate' means to raise the seriousness of an issue to a higher level."
        />

        <CulturalNote>
          <strong>Noise etiquette in Western apartments:</strong> In many Western countries, quiet hours are typically between 10 PM–8 AM. Tenants are generally expected to resolve disputes directly before involving management. Sending a polite, face-to-face request before escalating is considered respectful and often more effective than filing an immediate complaint.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="considerate" ipa="kənˈsɪd.ər.ət" tip="con-SID-er-ut — stress on second syllable" />
          <PronunciationTip word="escalate" ipa="ˈes.kə.leɪt" tip="ES-kuh-layt — stress on first syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "I would like to formally report a noise disturbance.",
            "I have attempted to resolve this directly with the tenant.",
            "I request that appropriate action be taken.",
          ]}
          informal={[
            "Your music is way too loud!",
            "Can you keep it down? I'm trying to sleep.",
            "I've talked to them but nothing's changed.",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 46 — At an Art Gallery Opening
  // ─────────────────────────────────────────────────────────────
  {
    id: 46,
    day: 46,
    title: 'At an Art Gallery Opening',
    category: 'Entertainment',
    difficulty: 'Advanced',
    color: 'pink',
    body: (
      <>
        <ArtGalleryScene />

        <ConversationCard
          speakers={{ A: 'Lena', B: 'Artist' }}
          situation="Lena, an art enthusiast, speaks with the artist, Marco, at his gallery opening."
          lines={[
            { speaker: 'A', en: "Congratulations on the opening, Marco. The collection is absolutely breathtaking.", id: "Selamat atas pembukaan pamerannya, Marco. Koleksinya benar-benar menakjubkan.", note: "breathtaking = memukau/menakjubkan" },
            { speaker: 'B', en: "Thank you so much, Lena. It took me three years to complete this series. I'm glad it resonates with people.", id: "Terima kasih banyak, Lena. Butuh tiga tahun untuk menyelesaikan seri ini. Senang rasanya bisa beresonansi dengan orang-orang.", note: "resonates = beresonansi/menyentuh hati" },
            { speaker: 'A', en: "The tension between light and shadow in the third piece — it's deeply evocative. What was your inspiration?", id: "Ketegangan antara cahaya dan bayangan di karya ketiga itu — sangat membangkitkan perasaan. Apa inspirasimu?", note: "evocative = membangkitkan perasaan/emosi" },
            { speaker: 'B', en: "I was grappling with the idea of duality — how opposing forces don't cancel each other out, but coexist.", id: "Saya sedang bergulat dengan ide dualitas — bagaimana kekuatan yang berlawanan tidak saling meniadakan, melainkan hidup berdampingan.", note: "grappling with = bergulat dengan" },
            { speaker: 'A', en: "That philosophical undercurrent really elevates the work beyond mere aesthetics.", id: "Arus bawah filosofis itu benar-benar mengangkat karya ini melampaui estetika semata.", note: "undercurrent = arus bawah/tema tersembunyi" },
            { speaker: 'B', en: "Precisely. I wanted viewers to sit with the discomfort rather than seek immediate resolution.", id: "Tepat sekali. Saya ingin penonton duduk bersama ketidaknyamanan itu daripada mencari resolusi segera." },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Lena', B: 'Gallery Curator' }}
          situation="Lena discusses the exhibition with the gallery curator."
          lines={[
            { speaker: 'B', en: "What do you make of Marco's shift from his earlier figurative work to this abstract series?", id: "Apa pendapatmu tentang pergeseran Marco dari karya figuratif sebelumnya ke seri abstrak ini?", note: "what do you make of = apa pendapatmu tentang" },
            { speaker: 'A', en: "I think it signals a maturation — a willingness to trade accessibility for depth. Though I miss the narrative clarity of his portraits.", id: "Saya pikir ini menandakan kedewasaan — kesediaan untuk mengorbankan keterbacaan demi kedalaman. Meski saya merindukan kejelasan naratif potret-potretnya." },
            { speaker: 'B', en: "That's a nuanced read. Some critics argue the abstraction alienates casual viewers.", id: "Itu pembacaan yang bernuansa. Beberapa kritikus berpendapat abstraksi itu mengasingkan penonton awam.", note: "alienates = mengasingkan/membuat tidak nyaman" },
            { speaker: 'A', en: "Perhaps, but great art isn't obligated to be immediately accessible. It can demand something from the viewer.", id: "Mungkin, tapi seni yang hebat tidak berkewajiban untuk langsung bisa diakses. Ia bisa menuntut sesuatu dari penonton." },
            { speaker: 'B', en: "Well said. That's exactly the conversation Marco hoped this show would ignite.", id: "Tepat sekali. Itulah percakapan yang diharapkan Marco akan tersulut oleh pameran ini.", note: "ignite = menyulut/memicu" },
          ]}
        />

        <KeyPhrasesCard
          title="Art & Aesthetic Discussion Phrases"
          color="rose"
          phrases={[
            { en: "Breathtaking / stunning", id: "Menakjubkan / memukau", usage: "The composition is absolutely stunning." },
            { en: "Evocative", id: "Membangkitkan emosi/perasaan", usage: "This piece is deeply evocative." },
            { en: "Grappling with an idea", id: "Bergulat dengan sebuah ide" },
            { en: "Philosophical undercurrent", id: "Arus/tema filosofis tersembunyi" },
            { en: "What do you make of...?", id: "Apa pendapatmu tentang...?", usage: "What do you make of this new direction?" },
            { en: "Nuanced", id: "Bernuansa/memiliki lapisan makna", usage: "That's a very nuanced interpretation." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="The painting is deeply ___, bringing up memories I didn't know I had."
          blank="evocative"
          options={['evocative', 'provocative', 'communicative', 'decorative']}
          answer="evocative"
          explanation="'Evocative' means something that brings strong images, memories, or feelings to mind."
        />
        <FillInBlank
          sentence="___ read of the artwork — you clearly understand the artist's deeper intentions."
          blank="Nuanced"
          options={['Nuanced', 'Narrow', 'Simple', 'Literal']}
          answer="Nuanced"
          explanation="'Nuanced' means showing subtle distinctions; it's a compliment for thoughtful analysis."
        />

        <CulturalNote>
          <strong>Gallery opening etiquette:</strong> Art gallery openings (vernissages) are social events where the artist is usually present. It is considered polite to engage the artist in conversation about their work. Compliments should feel genuine and specific — vague praise like "it's nice" can seem dismissive. Champagne or wine is commonly served, and dress code is typically smart-casual to formal.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="evocative" ipa="ɪˈvɒk.ə.tɪv" tip="i-VOK-uh-tiv — stress on second syllable" />
          <PronunciationTip word="nuanced" ipa="ˈnjuːɑːnst" tip="NYOO-ahnst — the 'nu' sounds like 'new'" />
        </div>

        <ExpressionMeter
          formal={[
            "The compositional tension is remarkably executed.",
            "One might argue the abstraction demands intellectual engagement.",
            "The philosophical undercurrent elevates the work considerably.",
          ]}
          informal={[
            "I love how dark and moody it feels.",
            "I can't stop staring at this one — what's it about?",
            "The colors are incredible!",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 47 — Applying for a Visa
  // ─────────────────────────────────────────────────────────────
  {
    id: 47,
    day: 47,
    title: 'Applying for a Visa',
    category: 'Travel',
    difficulty: 'Advanced',
    color: 'teal',
    body: (
      <>
        <VisaScene />

        <ConversationCard
          speakers={{ A: 'Applicant', B: 'Visa Officer' }}
          situation="An applicant attends a visa interview at the embassy for a student visa."
          lines={[
            { speaker: 'B', en: "Good morning. Please take a seat. I'll be reviewing your application for a student visa. Can you state your full name and purpose of travel?", id: "Selamat pagi. Silakan duduk. Saya akan meninjau aplikasi visa pelajar Anda. Bisakah Anda menyebutkan nama lengkap dan tujuan perjalanan?" },
            { speaker: 'A', en: "Good morning. My name is Rizal Hidayat. I've been accepted to a Master's program in Computer Science at the University of Edinburgh, starting September.", id: "Selamat pagi. Nama saya Rizal Hidayat. Saya diterima di program Master Ilmu Komputer di Universitas Edinburgh, mulai September.", note: "I've been accepted to = saya diterima di" },
            { speaker: 'B', en: "I see. Can you provide your letter of acceptance, proof of financial means, and accommodation details?", id: "Saya mengerti. Bisakah Anda memberikan surat penerimaan, bukti kemampuan finansial, dan rincian akomodasi?" },
            { speaker: 'A', en: "Yes, I have all the required documentation here — acceptance letter, bank statements for the past six months, and my university housing confirmation.", id: "Ya, saya membawa semua dokumen yang diperlukan — surat penerimaan, laporan bank enam bulan terakhir, dan konfirmasi asrama universitas.", note: "documentation = dokumen-dokumen" },
            { speaker: 'B', en: "Good. Do you intend to work during your studies?", id: "Bagus. Apakah Anda bermaksud bekerja selama masa studi?" },
            { speaker: 'A', en: "I understand student visas permit up to 20 hours of part-time work per week during term time, and I may take advantage of that, but my primary purpose is academic study.", id: "Saya mengerti bahwa visa pelajar mengizinkan hingga 20 jam kerja paruh waktu per minggu selama masa kuliah, dan saya mungkin akan memanfaatkan itu, namun tujuan utama saya adalah studi akademis.", note: "take advantage of = memanfaatkan" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Applicant', B: 'Visa Officer' }}
          situation="The visa interview continues with more detailed questions."
          lines={[
            { speaker: 'B', en: "What are your ties to your home country? Why should we believe you'll return after your studies?", id: "Apa keterikatan Anda dengan negara asal? Mengapa kami harus percaya Anda akan kembali setelah studi?", note: "ties = keterikatan/hubungan" },
            { speaker: 'A', en: "I have strong family ties — my parents and siblings are here. I also have a job offer awaiting me at a tech company in Jakarta, contingent on completing my degree.", id: "Saya memiliki keterikatan keluarga yang kuat — orang tua dan saudara saya ada di sini. Saya juga memiliki tawaran pekerjaan yang menunggu di perusahaan teknologi di Jakarta, bergantung pada penyelesaian gelar saya.", note: "contingent on = bergantung pada" },
            { speaker: 'B', en: "That's helpful. I do have a concern about your English proficiency score. It's slightly below the program's requirement.", id: "Itu sangat membantu. Saya memiliki satu kekhawatiran tentang skor kemampuan bahasa Inggris Anda. Sedikit di bawah persyaratan program." },
            { speaker: 'A', en: "I understand the concern. However, the university has issued a conditional offer acknowledging the score and has placed me in a pre-sessional English course.", id: "Saya mengerti kekhawatiran itu. Namun, universitas telah mengeluarkan penawaran bersyarat yang mengakui skor tersebut dan menempatkan saya di kursus bahasa Inggris pra-sesi.", note: "pre-sessional = program persiapan sebelum semester" },
            { speaker: 'B', en: "All right. Your application appears to be in order. You should receive a decision within ten working days.", id: "Baiklah. Aplikasi Anda tampaknya sudah lengkap. Anda seharusnya menerima keputusan dalam sepuluh hari kerja.", note: "in order = lengkap/sesuai aturan" },
          ]}
        />

        <KeyPhrasesCard
          title="Visa Application & Official Interview Phrases"
          color="emerald"
          phrases={[
            { en: "I've been accepted to a program", id: "Saya diterima di suatu program" },
            { en: "Proof of financial means", id: "Bukti kemampuan finansial" },
            { en: "Ties to your home country", id: "Keterikatan dengan negara asal" },
            { en: "Contingent on completing my degree", id: "Bergantung pada penyelesaian gelar saya" },
            { en: "Your application is in order", id: "Aplikasi Anda sudah lengkap/sesuai ketentuan" },
            { en: "Within ten working days", id: "Dalam sepuluh hari kerja", usage: "You'll get a response within five working days." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="The job offer is ___ on him finishing his degree successfully."
          blank="contingent"
          options={['contingent', 'dependent', 'reliant', 'insistent']}
          answer="contingent"
          explanation="'Contingent on' is a formal way to say 'depending on a specific condition being met'."
        />
        <FillInBlank
          sentence="The officer confirmed that all submitted documents were ___."
          blank="in order"
          options={['in order', 'in time', 'in place', 'in line']}
          answer="in order"
          explanation="'In order' means everything is correct, complete, and satisfactory."
        />

        <CulturalNote>
          <strong>Visa interview tips:</strong> Embassy interviews are formal settings. Use polite, formal English and avoid slang. Always bring original documents plus copies. Answer questions directly and concisely — interviewers appreciate clarity. Demonstrating "strong ties" to your home country (family, job offer, property) significantly strengthens a student or visitor visa application.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="documentation" ipa="ˌdɒk.jʊ.menˈteɪ.ʃən" tip="dok-yoo-men-TAY-shun — stress on 4th syllable" />
          <PronunciationTip word="contingent" ipa="kənˈtɪn.dʒənt" tip="con-TIN-jent — stress on second syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "I have been duly accepted to the aforementioned academic institution.",
            "I can provide comprehensive documentation of my financial standing.",
            "My strong familial ties preclude any intention of overstaying.",
          ]}
          informal={[
            "I got into a Master's program in Edinburgh!",
            "I've got all my papers right here.",
            "My whole family is back home, so I'll definitely go back.",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 48 — Therapy / Counseling Session
  // ─────────────────────────────────────────────────────────────
  {
    id: 48,
    day: 48,
    title: 'Therapy / Counseling Session',
    category: 'Health',
    difficulty: 'Advanced',
    color: 'emerald',
    body: (
      <>
        <TherapyScene />

        <ConversationCard
          speakers={{ A: 'Patient', B: 'Therapist' }}
          situation="A first therapy session. The therapist helps the patient open up about their concerns."
          lines={[
            { speaker: 'B', en: "Welcome, I'm Dr. Chen. Everything discussed here is completely confidential. So, what brings you in today?", id: "Selamat datang, saya Dr. Chen. Semua yang dibahas di sini sepenuhnya rahasia. Jadi, apa yang membawa Anda ke sini hari ini?", note: "confidential = rahasia/terjaga kerahasiaannya" },
            { speaker: 'A', en: "I've been struggling with anxiety for a while. It's gotten to the point where it's affecting my work and relationships.", id: "Saya sudah berjuang dengan kecemasan untuk beberapa waktu. Sudah sampai pada titik di mana itu mempengaruhi pekerjaan dan hubungan saya.", note: "gotten to the point = sudah sampai pada titik" },
            { speaker: 'B', en: "Thank you for sharing that. Can you describe what anxiety looks like for you day-to-day?", id: "Terima kasih sudah berbagi. Bisakah Anda menggambarkan seperti apa kecemasan itu bagi Anda sehari-hari?" },
            { speaker: 'A', en: "I have this constant feeling of dread — like something bad is about to happen even when everything is fine. I also have trouble sleeping.", id: "Saya memiliki perasaan takut yang terus-menerus — seolah sesuatu yang buruk akan terjadi bahkan ketika segalanya baik-baik saja. Saya juga sulit tidur.", note: "dread = ketakutan/rasa ngeri yang dalam" },
            { speaker: 'B', en: "That sounds exhausting to carry. How long have you been experiencing this?", id: "Kedengarannya sangat melelahkan untuk ditanggung. Sudah berapa lama Anda mengalami ini?", note: "exhausting to carry = melelahkan untuk ditanggung" },
            { speaker: 'A', en: "Honestly, years. But I kept dismissing it, thinking I just needed to push through.", id: "Jujur saja, bertahun-tahun. Tapi saya terus mengabaikannya, berpikir saya hanya perlu bertahan.", note: "push through = bertahan/terus berjuang" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Patient', B: 'Therapist' }}
          situation="Later in the session, discussing coping strategies and next steps."
          lines={[
            { speaker: 'B', en: "One thing I want to explore is whether the anxiety is tied to specific triggers or if it's more generalized.", id: "Satu hal yang ingin saya jelajahi adalah apakah kecemasan itu terkait dengan pemicu tertentu atau lebih bersifat umum.", note: "triggers = pemicu" },
            { speaker: 'A', en: "Mostly generalized, I think. But presentations at work definitely amplify it significantly.", id: "Kebanyakan bersifat umum, saya pikir. Tapi presentasi di tempat kerja pasti sangat memperkuatnya.", note: "amplify = memperkuat/memperparah" },
            { speaker: 'B', en: "That's a useful distinction. We might work on cognitive reframing techniques to challenge the catastrophic thinking.", id: "Itu perbedaan yang berguna. Kita mungkin akan mengerjakan teknik reframing kognitif untuk menantang pemikiran katastrofik.", note: "cognitive reframing = membingkai ulang cara berpikir" },
            { speaker: 'A', en: "I've heard of CBT. Is that what you'd recommend?", id: "Saya pernah mendengar tentang CBT. Apakah itu yang akan Anda rekomendasikan?", note: "CBT = Cognitive Behavioral Therapy" },
            { speaker: 'B', en: "It's one strong option, yes. But let's take it one session at a time. You've shown a lot of courage by coming today.", id: "Itu salah satu pilihan yang kuat, ya. Tapi mari kita ambil satu sesi dalam satu waktu. Anda sudah menunjukkan banyak keberanian dengan datang hari ini.", note: "one session at a time = satu sesi demi satu sesi" },
          ]}
        />

        <KeyPhrasesCard
          title="Mental Health & Counseling Phrases"
          color="emerald"
          phrases={[
            { en: "What brings you in today?", id: "Apa yang membawa Anda ke sini hari ini?", usage: "Common therapist opener." },
            { en: "Struggling with anxiety / depression", id: "Berjuang dengan kecemasan / depresi" },
            { en: "Gotten to the point where...", id: "Sudah sampai pada titik di mana..." },
            { en: "Triggers", id: "Pemicu (emosi/kondisi)", usage: "Identify your emotional triggers." },
            { en: "Push through", id: "Bertahan/terus berjuang melewati sesuatu" },
            { en: "One [step/day/session] at a time", id: "Satu langkah/hari/sesi dalam satu waktu", usage: "Take it one day at a time." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="His fear of failure was the main ___ for his panic attacks before exams."
          blank="trigger"
          options={['trigger', 'reason', 'factor', 'cause']}
          answer="trigger"
          explanation="In mental health contexts, 'trigger' specifically refers to something that sets off an emotional reaction."
        />
        <FillInBlank
          sentence="Don't try to solve everything at once. Just take it one ___ at a time."
          blank="step"
          options={['step', 'jump', 'leap', 'move']}
          answer="step"
          explanation="'One step at a time' is a common encouragement to proceed slowly and steadily."
        />

        <CulturalNote>
          <strong>Mental health culture in the West:</strong> Therapy is widely normalized and encouraged in many Western countries. Saying "I see a therapist" carries no stigma and is often viewed positively. CBT (Cognitive Behavioral Therapy) is one of the most evidence-based approaches. The phrase "what brings you in today?" is a standard, open-ended opener therapists use to let patients set the agenda.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="anxiety" ipa="æŋˈzaɪ.ə.ti" tip="ang-ZY-uh-tee — stress on second syllable" />
          <PronunciationTip word="catastrophic" ipa="ˌkæt.əˈstrɒf.ɪk" tip="kat-uh-STROFF-ik — stress on third syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "I have been experiencing generalized anxiety disorder symptoms.",
            "I would like to explore cognitive-behavioral therapeutic approaches.",
            "I find that high-pressure situations significantly amplify my distress.",
          ]}
          informal={[
            "I've been really anxious lately and it's getting out of hand.",
            "I can't sleep and my brain won't stop worrying.",
            "Work stuff really sets me off.",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 49 — Home Repair / Calling a Plumber
  // ─────────────────────────────────────────────────────────────
  {
    id: 49,
    day: 49,
    title: 'Home Repair / Calling a Plumber',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <>
        <PlumberScene />

        <ConversationCard
          speakers={{ A: 'Homeowner', B: 'Plumber' }}
          situation="Sarah calls a plumber after discovering a leaking pipe under the kitchen sink."
          lines={[
            { speaker: 'A', en: "Hello, I need a plumber as soon as possible. My kitchen pipe is leaking and there's water on the floor.", id: "Halo, saya butuh tukang ledeng secepatnya. Pipa dapur saya bocor dan ada air di lantai.", note: "leaking = bocor" },
            { speaker: 'B', en: "I can come this afternoon around 2 PM. Can you tell me more about the problem?", id: "Saya bisa datang sore ini sekitar pukul 2. Bisakah Anda ceritakan lebih lanjut tentang masalahnya?" },
            { speaker: 'A', en: "The pipe under the sink is dripping. I turned off the water supply, but I don't know how to fix it.", id: "Pipanya menetes di bawah wastafel. Saya sudah mematikan pasokan air, tapi saya tidak tahu cara memperbaikinya.", note: "dripping = menetes" },
            { speaker: 'B', en: "Good thinking turning off the water! That helps prevent more damage. I'll bring my tools and spare parts.", id: "Bagus sekali mematikan airnya! Itu membantu mencegah kerusakan lebih lanjut. Saya akan membawa alat dan suku cadang.", note: "spare parts = suku cadang" },
            { speaker: 'A', en: "How much will it cost approximately?", id: "Kira-kira berapa biayanya?" },
            { speaker: 'B', en: "It depends on the damage. A simple pipe repair is usually around $80–120. I'll give you an exact quote when I see it.", id: "Tergantung kerusakannya. Perbaikan pipa sederhana biasanya sekitar $80–120. Saya akan memberikan perkiraan harga pasti setelah melihatnya.", note: "quote = perkiraan harga/penawaran" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Homeowner', B: 'Plumber' }}
          situation="The plumber arrives and inspects the problem."
          lines={[
            { speaker: 'B', en: "Hi, I'm Tom from QuickFix Plumbing. Let me take a look at the issue.", id: "Halo, saya Tom dari QuickFix Plumbing. Izinkan saya melihat masalahnya." },
            { speaker: 'A', en: "Thanks for coming so quickly! It's right here under the sink. The joint seems to be cracked.", id: "Terima kasih sudah datang begitu cepat! Di sini, di bawah wastafel. Sambungannya sepertinya retak.", note: "joint = sambungan pipa" },
            { speaker: 'B', en: "Ah yes, I can see it. The connector has worn out. I can replace it right now — it's a straightforward fix.", id: "Ah ya, saya bisa melihatnya. Konektor ini sudah aus. Saya bisa menggantinya sekarang — ini perbaikan yang mudah.", note: "worn out = sudah aus/habis" },
            { speaker: 'A', en: "That's a relief! How long will it take?", id: "Lega sekali mendengarnya! Butuh berapa lama?" },
            { speaker: 'B', en: "About 30 minutes. I'll also check your other pipes while I'm here to make sure everything is okay.", id: "Sekitar 30 menit. Saya juga akan memeriksa pipa-pipa lainnya selagi saya di sini untuk memastikan semuanya baik-baik saja." },
            { speaker: 'A', en: "That would be great. I really appreciate it!", id: "Itu bagus sekali. Saya sangat menghargainya!", note: "I appreciate it = saya menghargainya" },
          ]}
        />

        <KeyPhrasesCard
          title="Home Repair Phrases"
          color="amber"
          phrases={[
            { en: "It's leaking / dripping", id: "Bocor / menetes", usage: "The tap is leaking." },
            { en: "Turn off the water supply", id: "Matikan pasokan air", usage: "Turn off the water supply first." },
            { en: "Spare parts", id: "Suku cadang" },
            { en: "Give me a quote", id: "Beri saya perkiraan harga", usage: "Can you give me a quote first?" },
            { en: "Worn out", id: "Sudah aus/habis", usage: "The pipe connector is worn out." },
            { en: "Straightforward fix", id: "Perbaikan yang mudah/sederhana", usage: "It's a straightforward fix, don't worry." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="Please ___ the water supply before I start repairing the pipe."
          blank="turn off"
          options={['turn off', 'switch on', 'pull out', 'push down']}
          answer="turn off"
          explanation="'Turn off the water supply' means to close the valve to stop water flow."
        />
        <FillInBlank
          sentence="Can you give me a ___ before you start the repair work?"
          blank="quote"
          options={['quote', 'note', 'list', 'bill']}
          answer="quote"
          explanation="A 'quote' (or estimate) is the price a tradesperson tells you before starting work."
        />

        <CulturalNote>
          <strong>Calling a tradesperson in English:</strong> When calling a plumber, electrician, or repairperson in English-speaking countries, it's polite to clearly describe the problem first, then ask for availability and a rough cost estimate. Always ask for a "quote" before work begins. Tipping tradespeople is less common than in restaurants, but appreciated for exceptional service.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="plumber" ipa="ˈplʌm.ər" tip="PLUM-er — the 'b' is silent!" />
          <PronunciationTip word="quote" ipa="kwəʊt" tip="KWOHT — rhymes with 'note'" />
        </div>

        <ExpressionMeter
          formal={[
            "I would like to request a plumbing repair service at my residence.",
            "Could you provide an itemized estimate for the repair?",
            "Please inspect all related infrastructure while you are on site.",
          ]}
          informal={[
            "My sink is leaking everywhere — can you come today?",
            "How much is this going to cost me roughly?",
            "How long will it take to fix?",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 50 — Graduation Ceremony
  // ─────────────────────────────────────────────────────────────
  {
    id: 50,
    day: 50,
    title: 'Graduation Ceremony',
    category: 'Academic',
    difficulty: 'Intermediate',
    color: 'rose',
    body: (
      <>
        <GraduationScene />

        <ConversationCard
          speakers={{ A: 'Amir', B: 'Friend' }}
          situation="Amir and his friend Priya celebrate at the graduation ceremony."
          lines={[
            { speaker: 'B', en: "Amir! We actually did it! I can't believe graduation day is finally here.", id: "Amir! Kita benar-benar melakukannya! Saya tidak percaya hari wisuda akhirnya tiba.", note: "we did it = kita berhasil" },
            { speaker: 'A', en: "I know, right? Four years of hard work and it all comes down to today. I'm nervous and excited at the same time.", id: "Aku tahu, kan? Empat tahun kerja keras dan semuanya bermuara pada hari ini. Saya gugup sekaligus bersemangat.", note: "comes down to = bermuara pada/akhirnya menjadi" },
            { speaker: 'B', en: "Are your parents here? Mine flew in from Surabaya last night — they wouldn't miss it for the world.", id: "Orang tuamu ke sini? Orang tuaku terbang dari Surabaya semalam — mereka tidak akan melewatkan ini apapun yang terjadi.", note: "wouldn't miss it for the world = tidak akan melewatkan dalam keadaan apapun" },
            { speaker: 'A', en: "My whole family came! Mom cried as soon as she saw me in the graduation gown.", id: "Keluargaku semua datang! Ibu langsung menangis begitu melihatku dengan toga wisuda.", note: "graduation gown = toga wisuda" },
            { speaker: 'B', en: "That's so sweet. When they call your name on stage, make sure you smile for the photos!", id: "Itu sangat mengharukan. Ketika mereka memanggil namamu di atas panggung, pastikan kamu tersenyum untuk foto!" },
            { speaker: 'A', en: "I will! And honestly, I couldn't have made it without your help during finals week.", id: "Pasti! Dan sungguh, aku tidak akan berhasil tanpa bantuanmu selama minggu ujian akhir.", note: "I couldn't have made it = aku tidak akan bisa berhasil" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Graduate', B: 'Professor' }}
          situation="A graduate thanks their professor after receiving their diploma."
          lines={[
            { speaker: 'A', en: "Professor Williams, thank you so much for everything over these four years. Your classes changed the way I think.", id: "Professor Williams, terima kasih banyak atas segalanya selama empat tahun ini. Kelas-kelas Anda mengubah cara saya berpikir.", note: "changed the way I think = mengubah cara saya berpikir" },
            { speaker: 'B', en: "It's been my pleasure, Amir. You've grown tremendously. Do you have plans for after graduation?", id: "Itu adalah kesenangan saya, Amir. Kamu telah berkembang pesat. Apakah kamu punya rencana setelah wisuda?", note: "grown tremendously = berkembang dengan sangat pesat" },
            { speaker: 'A', en: "I've been accepted to a graduate program in Singapore. I start in August.", id: "Saya diterima di program pascasarjana di Singapura. Saya mulai pada bulan Agustus." },
            { speaker: 'B', en: "Wonderful! That's a top program. You'll do brilliantly. Keep in touch and let me know how you're getting on.", id: "Luar biasa! Itu program terbaik. Kamu akan tampil dengan cemerlang. Tetap berhubungan dan beri tahu saya bagaimana perkembanganmu.", note: "keep in touch = tetap berhubungan" },
            { speaker: 'A', en: "I will, Professor. Thank you again — this means more than you know.", id: "Saya akan lakukan, Professor. Terima kasih kembali — ini berarti lebih dari yang Anda ketahui." },
          ]}
        />

        <KeyPhrasesCard
          title="Graduation & Achievement Phrases"
          color="rose"
          phrases={[
            { en: "We (finally) did it!", id: "Kita (akhirnya) berhasil!", usage: "We did it — we graduated!" },
            { en: "It all comes down to today", id: "Semuanya bermuara pada hari ini" },
            { en: "Wouldn't miss it for the world", id: "Tidak akan melewatkan dalam keadaan apapun" },
            { en: "I couldn't have made it without you", id: "Aku tidak akan bisa berhasil tanpamu" },
            { en: "Keep in touch", id: "Tetap berhubungan", usage: "Please keep in touch after you leave!" },
            { en: "Let me know how you're getting on", id: "Beritahu saya bagaimana perkembanganmu" },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="I ___ have passed without your help during exam week."
          blank="couldn't"
          options={["couldn't", "wouldn't", "shouldn't", "mustn't"]}
          answer="couldn't"
          explanation="'I couldn't have made it' = I would not have been able to succeed. It expresses deep gratitude."
        />
        <FillInBlank
          sentence="My parents flew from overseas — they ___ miss my graduation for the world."
          blank="wouldn't"
          options={["wouldn't", "couldn't", "shouldn't", "didn't"]}
          answer="wouldn't"
          explanation="'Wouldn't miss it for the world' is an idiom meaning they'd never choose to miss it."
        />

        <CulturalNote>
          <strong>Graduation ceremony culture:</strong> In Western universities, graduation (also called "commencement" in the US) is a major milestone. Graduates typically wear academic gowns and caps ("mortarboards"). It is common for graduates to thank professors personally. Families travel long distances to attend. Photos are taken throughout — both formal (on stage) and casual (with family). After the ceremony, dinners and celebrations with family are traditional.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="commencement" ipa="kəˈmens.mənt" tip="co-MENS-ment — means beginning, used for graduation in the US" />
          <PronunciationTip word="tremendously" ipa="trɪˈmen.dəs.li" tip="tre-MEN-dus-lee — stress on second syllable" />
        </div>

        <ExpressionMeter
          formal={[
            "I am deeply grateful for your mentorship throughout my studies.",
            "This milestone would not have been achievable without your guidance.",
            "I look forward to maintaining professional correspondence.",
          ]}
          informal={[
            "We finally did it! I can't believe it's over!",
            "I couldn't have gotten through this without you.",
            "Stay in touch, okay? Let's not lose touch!",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 51 — Starting a New Job
  // ─────────────────────────────────────────────────────────────
  {
    id: 51,
    day: 51,
    title: 'Starting a New Job',
    category: 'Professional',
    difficulty: 'Intermediate',
    color: 'blue',
    body: (
      <>
        <NewJobScene />

        <ConversationCard
          speakers={{ A: 'New Employee', B: 'HR Manager' }}
          situation="Daniel starts his first day at a tech company and meets the HR manager."
          lines={[
            { speaker: 'B', en: "Good morning, Daniel! Welcome to Nexora Tech. We're really glad to have you on board.", id: "Selamat pagi, Daniel! Selamat datang di Nexora Tech. Kami sangat senang memilikimmu di tim kami.", note: "on board = telah bergabung dengan tim" },
            { speaker: 'A', en: "Thank you! I'm really excited to be here. I've been looking forward to this day.", id: "Terima kasih! Saya sangat bersemangat berada di sini. Saya sudah menantikan hari ini." },
            { speaker: 'B', en: "We have your workstation set up in the development team area. Let me give you a quick tour of the office first.", id: "Stasiun kerja Anda sudah disiapkan di area tim pengembang. Izinkan saya memberikan tur singkat kantor terlebih dahulu.", note: "workstation = meja/stasiun kerja" },
            { speaker: 'A', en: "That would be great! I'd also love to know who I'll be working most closely with.", id: "Itu bagus sekali! Saya juga ingin tahu dengan siapa saya akan bekerja paling erat." },
            { speaker: 'B', en: "You'll be reporting to Sam, the senior developer. He'll be your main point of contact this week.", id: "Anda akan melapor kepada Sam, pengembang senior. Dia akan menjadi kontak utama Anda minggu ini.", note: "reporting to = melapor kepada" },
            { speaker: 'A', en: "Understood. Is there anything I should know before the team briefing this morning?", id: "Mengerti. Apakah ada hal yang perlu saya ketahui sebelum briefing tim pagi ini?" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'New Employee', B: 'Colleague' }}
          situation="Daniel gets acquainted with his colleague, Sam, who will mentor him."
          lines={[
            { speaker: 'B', en: "Hey Daniel, I'm Sam — good to meet you! Don't worry, the first week is mostly just getting your feet wet.", id: "Hei Daniel, saya Sam — senang bertemu denganmu! Jangan khawatir, minggu pertama sebagian besar hanya untuk membiasakan diri.", note: "getting your feet wet = mulai terbiasa/beradaptasi" },
            { speaker: 'A', en: "Good to meet you too! I'm a bit nervous, to be honest. There's so much to take in.", id: "Senang bertemu denganmu juga! Saya agak gugup, jujur saja. Ada begitu banyak yang harus diserap.", note: "take in = menyerap/memahami" },
            { speaker: 'B', en: "That's totally normal. Just ask questions whenever you're unsure — there are no stupid questions here.", id: "Itu sangat normal. Tanyakan saja kapanpun kamu tidak yakin — tidak ada pertanyaan bodoh di sini.", note: "no stupid questions = tidak ada pertanyaan bodoh" },
            { speaker: 'A', en: "I appreciate that. What's the best way to stay up to speed with the team's progress?", id: "Saya menghargai itu. Apa cara terbaik untuk tetap mengikuti perkembangan tim?", note: "stay up to speed = tetap mengikuti perkembangan" },
            { speaker: 'B', en: "We use Slack for day-to-day communication and have a stand-up meeting every morning at 9. Jump in whenever you're comfortable.", id: "Kami menggunakan Slack untuk komunikasi harian dan ada rapat stand-up setiap pagi pukul 9. Bergabunglah kapanpun kamu merasa siap.", note: "stand-up meeting = rapat singkat berdiri" },
            { speaker: 'A', en: "Perfect. I'll make sure to check in daily and contribute as soon as I get up to speed.", id: "Sempurna. Saya akan memastikan untuk check in setiap hari dan berkontribusi begitu saya sudah mengejar ketertinggalan." },
          ]}
        />

        <KeyPhrasesCard
          title="Starting a New Job Phrases"
          color="indigo"
          phrases={[
            { en: "Welcome on board!", id: "Selamat bergabung!", usage: "We're so glad to have you on board." },
            { en: "Reporting to [someone]", id: "Melapor kepada seseorang", usage: "You'll be reporting to the team lead." },
            { en: "Getting your feet wet", id: "Mulai membiasakan diri/beradaptasi" },
            { en: "Take in / absorb", id: "Menyerap/memahami", usage: "There's a lot to take in on day one." },
            { en: "Stay up to speed", id: "Tetap mengikuti perkembangan", usage: "How do I stay up to speed on projects?" },
            { en: "Point of contact", id: "Kontak/orang yang bisa dihubungi", usage: "Sam is your main point of contact." },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="Don't worry — the first few weeks are just about ___ your feet wet."
          blank="getting"
          options={['getting', 'making', 'having', 'putting']}
          answer="getting"
          explanation="'Getting your feet wet' means starting to get used to something new."
        />
        <FillInBlank
          sentence="I'll be ___ to the marketing director, so she is my main supervisor."
          blank="reporting"
          options={['reporting', 'listening', 'talking', 'referring']}
          answer="reporting"
          explanation="'Reporting to someone' means they are your direct supervisor in the workplace."
        />

        <CulturalNote>
          <strong>First-day workplace etiquette:</strong> In many Western workplaces, the first day involves introductions, office tours, and paperwork. It's considered polite to arrive slightly early. Colleagues often go out of their way to be welcoming. Asking questions is encouraged — saying "there are no stupid questions" is a common reassurance. Stand-up meetings (brief daily syncs) are especially common in tech and agile work environments.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="colleague" ipa="ˈkɒl.iːɡ" tip="KOL-eeg — NOT col-LEEG; stress on first syllable" />
          <PronunciationTip word="onboarding" ipa="ˈɒn.bɔː.dɪŋ" tip="ON-bor-ding — workplace term for orientation process" />
        </div>

        <ExpressionMeter
          formal={[
            "I am pleased to be joining the organization.",
            "To whom will I be reporting directly?",
            "I look forward to contributing to the team's objectives.",
          ]}
          informal={[
            "Super excited to be here!",
            "Who's my boss exactly?",
            "I can't wait to get stuck in!",
          ]}
        />
      </>
    ),
  },

  // ─────────────────────────────────────────────────────────────
  // Day 52 — Planning a Birthday Party
  // ─────────────────────────────────────────────────────────────
  {
    id: 52,
    day: 52,
    title: 'Planning a Birthday Party',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'pink',
    body: (
      <>
        <BirthdayPartyScene />

        <ConversationCard
          speakers={{ A: 'Nadia', B: 'Friend' }}
          situation="Nadia and her friend Leo are planning a surprise birthday party for their mutual friend Cinta."
          lines={[
            { speaker: 'A', en: "Leo, Cinta's birthday is next Saturday. We should throw her a surprise party!", id: "Leo, ulang tahun Cinta hari Sabtu depan. Kita harus mengadakan pesta kejutan untuknya!", note: "throw a party = mengadakan pesta" },
            { speaker: 'B', en: "Great idea! I love it. How many guests should we invite?", id: "Ide yang bagus! Aku suka. Berapa banyak tamu yang harus kita undang?" },
            { speaker: 'A', en: "Maybe 15 to 20 close friends. We should keep it small and cozy.", id: "Mungkin 15 hingga 20 teman dekat. Kita harus menjaganya kecil dan nyaman.", note: "cozy = nyaman dan hangat" },
            { speaker: 'B', en: "Agreed. Where should we have it? My apartment has a big living room.", id: "Setuju. Di mana sebaiknya kita mengadakannya? Apartemenku punya ruang tamu yang besar." },
            { speaker: 'A', en: "Perfect! Your place sounds great. Can you handle the decorations while I take care of the cake?", id: "Sempurna! Tempatmu terdengar bagus. Bisakah kamu urus dekorasinya sementara aku urus kuenya?", note: "take care of = mengurus/menangani" },
            { speaker: 'B', en: "Sure! I'll get balloons and a banner. What flavor cake does she like?", id: "Tentu! Aku akan beli balon dan spanduk. Rasa kue apa yang dia sukai?" },
          ]}
        />

        <ConversationCard
          speakers={{ A: 'Nadia', B: 'Bakery Staff' }}
          situation="Nadia goes to the bakery to order a birthday cake."
          lines={[
            { speaker: 'A', en: "Hi! I'd like to order a birthday cake for next Saturday, please.", id: "Halo! Saya ingin memesan kue ulang tahun untuk hari Sabtu depan, tolong." },
            { speaker: 'B', en: "Of course! What size do you need — small, medium, or large?", id: "Tentu saja! Ukuran berapa yang Anda butuhkan — kecil, sedang, atau besar?" },
            { speaker: 'A', en: "Medium should be fine. There'll be about 20 people. I'd like chocolate flavor with cream cheese frosting.", id: "Sedang sudah cukup. Akan ada sekitar 20 orang. Saya ingin rasa cokelat dengan frosting krim keju.", note: "frosting = lapisan krim di atas kue" },
            { speaker: 'B', en: "Great choice! Would you like a message written on the cake?", id: "Pilihan yang bagus! Apakah Anda ingin ada tulisan di atas kue?" },
            { speaker: 'A', en: "Yes please — 'Happy Birthday, Cinta! 🎉' Can you also add some pink flowers on top?", id: "Ya, tolong — 'Selamat Ulang Tahun, Cinta! 🎉' Bisakah juga menambahkan beberapa bunga merah muda di atasnya?" },
            { speaker: 'B', en: "Absolutely! That'll be ready by Friday afternoon. The total is $45. Can I take your name and phone number?", id: "Tentu saja! Itu akan siap pada Jumat sore. Totalnya $45. Bolehkah saya minta nama dan nomor telepon Anda?" },
          ]}
        />

        <KeyPhrasesCard
          title="Party Planning Phrases"
          color="rose"
          phrases={[
            { en: "Throw a party", id: "Mengadakan pesta", usage: "Let's throw her a surprise party!" },
            { en: "Keep it small and cozy", id: "Menjaganya kecil dan nyaman" },
            { en: "Take care of something", id: "Mengurus/menangani sesuatu", usage: "I'll take care of the food." },
            { en: "Handle the decorations", id: "Mengurus dekorasi", usage: "Can you handle the decorations?" },
            { en: "There'll be about [number] people", id: "Akan ada sekitar [jumlah] orang" },
            { en: "A message written on the cake", id: "Tulisan di atas kue", usage: "What message do you want on the cake?" },
          ]}
        />

        <h4 className="font-bold text-sm text-gray-700 mt-4 mb-2">Fill in the Blank</h4>
        <FillInBlank
          sentence="Can you ___ the decorations while I go pick up the cake?"
          blank="handle"
          options={['handle', 'carry', 'hold', 'fix']}
          answer="handle"
          explanation="'Handle' means to take responsibility for managing or doing something."
        />
        <FillInBlank
          sentence="Let's ___ her a surprise party — she'll love it!"
          blank="throw"
          options={['throw', 'make', 'do', 'give']}
          answer="throw"
          explanation="'Throw a party' is the natural English phrase for organizing/hosting a party."
        />

        <CulturalNote>
          <strong>Birthday party culture:</strong> In Western countries, surprise parties are a popular way to celebrate friends. It's common to split tasks among friends (one person handles the cake, another the decorations, etc.). Custom cakes with personalized messages are widely available at bakeries. Party guests typically bring a wrapped gift. "RSVP" (from French: Répondez s'il vous plaît) on an invitation means you should let the host know whether you're attending.
        </CulturalNote>

        <div className="flex flex-wrap gap-2 my-2">
          <PronunciationTip word="surprise" ipa="səˈpraɪz" tip="sur-PRIZE — stress on second syllable, not SUR-prize" />
          <PronunciationTip word="frosting" ipa="ˈfrɒs.tɪŋ" tip="FROS-ting — the sweet coating on top of a cake (American English); British English says 'icing'" />
        </div>

        <ExpressionMeter
          formal={[
            "We would like to organize a birthday celebration for our colleague.",
            "Could you accommodate a custom order for this coming Saturday?",
            "I would appreciate it if the message were written in elegant script.",
          ]}
          informal={[
            "Let's throw Cinta a surprise party!",
            "I'll grab the cake, you do the balloons!",
            "Can you write 'Happy Birthday' on it in pink?",
          ]}
        />
      </>
    ),
  },
]
