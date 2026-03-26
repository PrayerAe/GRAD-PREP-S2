// ═══════════════════════════════════════════════════════════════
// Daily English Conversation Part 4 — Day 26–34
// ═══════════════════════════════════════════════════════════════
import {
  SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank,
  CulturalNote, PronunciationTip, ExpressionMeter
} from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations
// ═══════════════════════════════════════════════════════════════

function JobFairScene() {
  return (
    <SceneIllustration title="💼 Scene: At a Career Expo / Job Fair" bg="from-blue-50 to-indigo-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Background hall */}
        <rect x="0" y="0" width="500" height="130" fill="#eff6ff"/>
        {/* Ceiling banner */}
        <rect x="100" y="2" width="300" height="18" rx="4" fill="#1e3a8a"/>
        <text x="250" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CAREER EXPO 2026</text>
        {/* Booth 1 */}
        <rect x="30" y="30" width="110" height="80" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="30" y="30" width="110" height="18" rx="4" fill="#3b82f6"/>
        <text x="85" y="42" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">TECH CORP</text>
        <rect x="45" y="55" width="80" height="12" rx="2" fill="#bfdbfe"/>
        <rect x="45" y="72" width="60" height="12" rx="2" fill="#bfdbfe"/>
        <rect x="45" y="89" width="70" height="12" rx="2" fill="#bfdbfe"/>
        {/* Booth 2 */}
        <rect x="195" y="30" width="110" height="80" rx="4" fill="white" stroke="#10b981" strokeWidth="2"/>
        <rect x="195" y="30" width="110" height="18" rx="4" fill="#10b981"/>
        <text x="250" y="42" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">GLOBAL FINANCE</text>
        <rect x="210" y="55" width="80" height="12" rx="2" fill="#a7f3d0"/>
        <rect x="210" y="72" width="55" height="12" rx="2" fill="#a7f3d0"/>
        <rect x="210" y="89" width="65" height="12" rx="2" fill="#a7f3d0"/>
        {/* Booth 3 */}
        <rect x="360" y="30" width="110" height="80" rx="4" fill="white" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="360" y="30" width="110" height="18" rx="4" fill="#f59e0b"/>
        <text x="415" y="42" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">MEDIA GROUP</text>
        <rect x="375" y="55" width="80" height="12" rx="2" fill="#fde68a"/>
        <rect x="375" y="72" width="60" height="12" rx="2" fill="#fde68a"/>
        <rect x="375" y="89" width="70" height="12" rx="2" fill="#fde68a"/>
        {/* Recruiter at booth 1 */}
        <circle cx="140" cy="65" r="11" fill="#fbbf24"/>
        <rect x="130" y="76" width="20" height="14" rx="3" fill="#1e3a8a"/>
        {/* Job seeker */}
        <circle cx="165" cy="70" r="11" fill="#60a5fa"/>
        <rect x="155" y="81" width="20" height="14" rx="3" fill="#2563eb"/>
        {/* Résumé paper */}
        <rect x="158" y="90" width="14" height="18" rx="2" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <line x1="161" y1="94" x2="169" y2="94" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="161" y1="97" x2="167" y2="97" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="161" y1="100" x2="169" y2="100" stroke="#93c5fd" strokeWidth="0.8"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="50" fill="#dbeafe"/>
        {/* Walking people */}
        <circle cx="300" cy="115" r="10" fill="#a78bfa"/>
        <rect x="292" y="125" width="16" height="14" rx="3" fill="#7c3aed"/>
        <circle cx="340" cy="118" r="10" fill="#f472b6"/>
        <rect x="332" y="128" width="16" height="14" rx="3" fill="#db2777"/>
      </svg>
    </SceneIllustration>
  )
}

function MuseumScene() {
  return (
    <SceneIllustration title="🏛️ Scene: Visiting a Museum" bg="from-amber-50 to-yellow-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Museum hall background */}
        <rect x="0" y="0" width="500" height="130" fill="#fffbeb"/>
        {/* Arch ceiling */}
        <path d="M50 80 Q250 0 450 80" fill="none" stroke="#fcd34d" strokeWidth="3"/>
        {/* Columns */}
        <rect x="70" y="40" width="16" height="90" rx="4" fill="#e5e7eb"/>
        <ellipse cx="78" cy="40" rx="12" ry="5" fill="#d1d5db"/>
        <rect x="414" y="40" width="16" height="90" rx="4" fill="#e5e7eb"/>
        <ellipse cx="422" cy="40" rx="12" ry="5" fill="#d1d5db"/>
        {/* Painting frame 1 */}
        <rect x="110" y="25" width="80" height="60" rx="3" fill="#92400e" stroke="#78350f" strokeWidth="2"/>
        <rect x="116" y="30" width="68" height="50" rx="2" fill="#fef3c7"/>
        <ellipse cx="150" cy="55" rx="22" ry="18" fill="#86efac" opacity="0.8"/>
        <circle cx="150" cy="50" rx="10" fill="#4ade80"/>
        <text x="150" y="80" textAnchor="middle" fill="#78350f" fontSize="5">Landscape I</text>
        {/* Painting frame 2 */}
        <rect x="240" y="20" width="90" height="70" rx="3" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2"/>
        <rect x="246" y="26" width="78" height="58" rx="2" fill="#dbeafe"/>
        <path d="M260 80 Q285 30 310 55 Q295 70 260 80" fill="#60a5fa" opacity="0.7"/>
        <circle cx="295" cy="38" r="12" fill="#fcd34d"/>
        <text x="285" y="93" textAnchor="middle" fill="#1e3a8a" fontSize="5">The Blue Sea</text>
        {/* Painting frame 3 */}
        <rect x="380" y="28" width="75" height="58" rx="3" fill="#7c3aed" stroke="#6d28d9" strokeWidth="2"/>
        <rect x="386" y="33" width="63" height="48" rx="2" fill="#f5f3ff"/>
        <rect x="395" y="45" width="15" height="30" rx="2" fill="#c4b5fd"/>
        <rect x="415" y="38" width="15" height="37" rx="2" fill="#a78bfa"/>
        <text x="418" y="90" textAnchor="middle" fill="#6d28d9" fontSize="5">Abstract III</text>
        {/* Tour guide */}
        <circle cx="200" cy="105" r="12" fill="#f59e0b"/>
        <rect x="190" y="117" width="20" height="13" rx="3" fill="#d97706"/>
        <rect x="203" y="108" width="8" height="12" rx="1" fill="#fef3c7"/>
        {/* Visitor */}
        <circle cx="230" cy="107" r="12" fill="#60a5fa"/>
        <rect x="220" y="119" width="20" height="13" rx="3" fill="#2563eb"/>
        {/* Speech bubble */}
        <rect x="105" y="98" width="75" height="18" rx="8" fill="white" stroke="#fcd34d" strokeWidth="1"/>
        <text x="143" y="110" textAnchor="middle" fill="#92400e" fontSize="6">"Dating from 1890..."</text>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="50" fill="#fef3c7"/>
        <line x1="0" y1="130" x2="500" y2="130" stroke="#fcd34d" strokeWidth="1.5"/>
      </svg>
    </SceneIllustration>
  )
}

function MechanicScene() {
  return (
    <SceneIllustration title="🔧 Scene: At the Car Mechanic" bg="from-slate-50 to-gray-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Garage background */}
        <rect x="0" y="0" width="500" height="130" fill="#f1f5f9"/>
        {/* Garage door top */}
        <rect x="0" y="0" width="500" height="15" fill="#334155"/>
        {/* Garage door lines */}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="15" stroke="#475569" strokeWidth="0.8"/>
        ))}
        {/* Car body */}
        <rect x="100" y="75" width="240" height="45" rx="8" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
        <rect x="130" y="55" width="170" height="25" rx="6" fill="#fca5a5"/>
        {/* Windows */}
        <rect x="140" y="58" width="60" height="20" rx="3" fill="#bae6fd" opacity="0.8"/>
        <rect x="215" y="58" width="60" height="20" rx="3" fill="#bae6fd" opacity="0.8"/>
        {/* Wheels */}
        <circle cx="155" cy="122" r="18" fill="#1e293b"/>
        <circle cx="155" cy="122" r="8" fill="#64748b"/>
        <circle cx="310" cy="122" r="18" fill="#1e293b"/>
        <circle cx="310" cy="122" r="8" fill="#64748b"/>
        {/* Hood open */}
        <rect x="100" y="60" width="70" height="18" rx="3" fill="#fca5a5" stroke="#dc2626" strokeWidth="1"/>
        <line x1="135" y1="62" x2="120" y2="45" stroke="#64748b" strokeWidth="1.5"/>
        {/* Engine parts */}
        <rect x="108" y="78" width="55" height="18" rx="2" fill="#374151"/>
        <rect x="115" y="80" width="12" height="8" rx="1" fill="#6b7280"/>
        <rect x="132" y="80" width="12" height="8" rx="1" fill="#f59e0b"/>
        {/* Mechanic */}
        <circle cx="95" cy="75" r="12" fill="#92400e"/>
        <rect x="83" y="87" width="22" height="18" rx="3" fill="#1e293b"/>
        <rect x="74" y="90" width="12" height="8" rx="2" fill="#374151"/>
        {/* Tool */}
        <rect x="68" y="88" width="20" height="4" rx="2" fill="#9ca3af"/>
        {/* Customer */}
        <circle cx="385" cy="80" r="12" fill="#60a5fa"/>
        <rect x="373" y="92" width="22" height="18" rx="3" fill="#2563eb"/>
        {/* Speech bubble */}
        <rect x="340" y="55" width="120" height="22" rx="8" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <text x="400" y="69" textAnchor="middle" fill="#1e40af" fontSize="6">"What's the diagnosis?"</text>
        {/* Oil drip */}
        <circle cx="175" cy="140" r="3" fill="#374151" opacity="0.5"/>
        <circle cx="185" cy="145" r="2" fill="#374151" opacity="0.4"/>
        {/* Floor */}
        <rect x="0" y="140" width="500" height="40" fill="#cbd5e1"/>
        <line x1="0" y1="140" x2="500" y2="140" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    </SceneIllustration>
  )
}

function FoodDeliveryScene() {
  return (
    <SceneIllustration title="🛵 Scene: Ordering Food Delivery" bg="from-orange-50 to-amber-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect x="0" y="0" width="500" height="130" fill="#fff7ed"/>
        {/* Phone screen in hand */}
        <rect x="30" y="20" width="130" height="100" rx="10" fill="#1e293b" stroke="#0f172a" strokeWidth="2"/>
        <rect x="36" y="28" width="118" height="85" rx="6" fill="white"/>
        {/* App header */}
        <rect x="36" y="28" width="118" height="16" rx="6" fill="#f97316"/>
        <text x="95" y="39" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">FoodRush 🛵</text>
        {/* Menu items on phone */}
        <rect x="40" y="48" width="110" height="14" rx="3" fill="#fff7ed"/>
        <circle cx="50" cy="55" r="5" fill="#f97316"/>
        <text x="70" y="58" fill="#1e293b" fontSize="5">Nasi Goreng Special</text>
        <text x="128" y="58" textAnchor="end" fill="#f97316" fontSize="5">$8.99</text>
        <rect x="40" y="65" width="110" height="14" rx="3" fill="#fff7ed"/>
        <circle cx="50" cy="72" r="5" fill="#ef4444"/>
        <text x="70" y="75" fill="#1e293b" fontSize="5">Beef Rendang Bowl</text>
        <text x="128" y="75" textAnchor="end" fill="#f97316" fontSize="5">$12.50</text>
        <rect x="40" y="82" width="110" height="14" rx="3" fill="#fef9c3"/>
        <circle cx="50" cy="89" r="5" fill="#eab308"/>
        <text x="70" y="92" fill="#1e293b" fontSize="5">Mie Ayam Combo</text>
        <text x="128" y="92" textAnchor="end" fill="#f97316" fontSize="5">$9.75</text>
        {/* Order button */}
        <rect x="46" y="100" width="98" height="10" rx="4" fill="#f97316"/>
        <text x="95" y="108" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">PLACE ORDER</text>
        {/* Delivery scooter */}
        <g transform="translate(220, 50)">
          <rect x="20" y="30" width="90" height="30" rx="6" fill="#f97316" stroke="#ea580c" strokeWidth="1.5"/>
          <rect x="60" y="18" width="45" height="18" rx="4" fill="#fed7aa"/>
          <circle cx="35" cy="62" r="12" fill="#1e293b"/>
          <circle cx="35" cy="62" r="5" fill="#6b7280"/>
          <circle cx="95" cy="62" r="12" fill="#1e293b"/>
          <circle cx="95" cy="62" r="5" fill="#6b7280"/>
          {/* Delivery box */}
          <rect x="25" y="14" width="30" height="22" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
          <text x="40" y="28" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">ORDER</text>
          {/* Rider head */}
          <circle cx="80" cy="12" r="10" fill="#fbbf24"/>
          <rect x="70" y="6" width="20" height="8" rx="2" fill="#1e293b"/>
        </g>
        {/* House */}
        <rect x="380" y="50" width="90" height="70" rx="4" fill="#fef3c7"/>
        <polygon points="380,50 425,20 470,50" fill="#ef4444"/>
        <rect x="408" y="80" width="22" height="40" fill="#92400e"/>
        <rect x="385" y="58" width="18" height="15" rx="2" fill="#bae6fd"/>
        <rect x="448" y="58" width="18" height="15" rx="2" fill="#bae6fd"/>
        {/* Person at door */}
        <circle cx="419" cy="72" r="10" fill="#60a5fa"/>
        <rect x="410" y="82" width="18" height="14" rx="3" fill="#2563eb"/>
        {/* Road */}
        <rect x="0" y="130" width="500" height="50" fill="#e2e8f0"/>
        <line x1="0" y1="150" x2="500" y2="150" stroke="white" strokeWidth="2" strokeDasharray="20,15"/>
      </svg>
    </SceneIllustration>
  )
}

function DentistScene() {
  return (
    <SceneIllustration title="🦷 Scene: At the Dentist" bg="from-teal-50 to-cyan-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Clinic background */}
        <rect x="0" y="0" width="500" height="130" fill="#f0fdfa"/>
        {/* Sign */}
        <rect x="175" y="5" width="150" height="20" rx="4" fill="#0d9488"/>
        <text x="250" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">🦷 DENTAL CLINIC</text>
        {/* Dental chair */}
        <rect x="160" y="70" width="180" height="50" rx="8" fill="#ccfbf1" stroke="#99f6e4" strokeWidth="2"/>
        <rect x="150" y="85" width="20" height="30" rx="4" fill="#99f6e4"/>
        <rect x="330" y="85" width="20" height="30" rx="4" fill="#99f6e4"/>
        <rect x="165" y="60" width="60" height="30" rx="6" fill="#e0f2fe"/>
        {/* Headrest / patient head */}
        <circle cx="200" cy="72" r="14" fill="#fbbf24"/>
        <circle cx="195" cy="70" r="2" fill="#1e293b"/>
        <circle cx="205" cy="70" r="2" fill="#1e293b"/>
        <path d="M195 78 Q200 82 205 78" fill="none" stroke="#92400e" strokeWidth="1.5"/>
        {/* Patient body on chair */}
        <rect x="195" y="86" width="100" height="30" rx="6" fill="#fef3c7"/>
        {/* Dental lamp */}
        <line x1="380" y1="10" x2="320" y2="65" stroke="#94a3b8" strokeWidth="3"/>
        <circle cx="312" cy="70" r="14" fill="#fcd34d" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="312" cy="70" r="8" fill="white" opacity="0.9"/>
        {/* Dentist */}
        <circle cx="330" cy="65" r="13" fill="#10b981"/>
        <rect x="318" y="78" width="24" height="20" rx="3" fill="#059669"/>
        {/* Dentist mask */}
        <rect x="322" y="68" width="16" height="8" rx="3" fill="white" stroke="#d1d5db" strokeWidth="0.5"/>
        {/* Tool tray */}
        <rect x="380" y="90" width="80" height="15" rx="4" fill="#e2e8f0"/>
        <rect x="385" y="92" width="5" height="10" rx="1" fill="#94a3b8"/>
        <rect x="395" y="92" width="3" height="10" rx="1" fill="#94a3b8"/>
        <rect x="402" y="92" width="6" height="10" rx="1" fill="#94a3b8"/>
        <rect x="412" y="92" width="4" height="10" rx="1" fill="#94a3b8"/>
        {/* X-ray on wall */}
        <rect x="30" y="30" width="80" height="60" rx="4" fill="#1e293b"/>
        <rect x="36" y="36" width="68" height="48" rx="2" fill="#0f172a"/>
        <ellipse cx="70" cy="60" rx="20" ry="25" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="58" y="70" width="24" height="12" rx="2" fill="#475569" opacity="0.7"/>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="50" fill="#ccfbf1"/>
        <line x1="0" y1="130" x2="500" y2="130" stroke="#99f6e4" strokeWidth="1"/>
      </svg>
    </SceneIllustration>
  )
}

function PublicTransportScene() {
  return (
    <SceneIllustration title="🚇 Scene: On Public Transportation" bg="from-slate-50 to-blue-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Subway tunnel */}
        <rect x="0" y="0" width="500" height="130" fill="#1e293b"/>
        {/* Train body */}
        <rect x="20" y="25" width="460" height="90" rx="10" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
        {/* Train top stripe */}
        <rect x="20" y="25" width="460" height="12" rx="10" fill="#60a5fa"/>
        {/* Windows */}
        {[50, 140, 230, 320, 410].map(x => (
          <rect key={x} x={x} y="38" width="65" height="35" rx="5" fill="#bae6fd" stroke="#93c5fd" strokeWidth="1"/>
        ))}
        {/* Door */}
        <rect x="225" y="38" width="50" height="65" rx="4" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1.5"/>
        <line x1="250" y1="38" x2="250" y2="103" stroke="#93c5fd" strokeWidth="0.8"/>
        {/* People inside windows */}
        <circle cx="82" cy="51" r="8" fill="#fbbf24"/>
        <circle cx="170" cy="51" r="8" fill="#f472b6"/>
        <circle cx="262" cy="51" r="8" fill="#a78bfa"/>
        <circle cx="353" cy="51" r="8" fill="#34d399"/>
        <circle cx="443" cy="51" r="8" fill="#fb923c"/>
        {/* Train wheels */}
        {[70, 170, 280, 380].map(x => (
          <g key={x}>
            <circle cx={x} cy="120" r="12" fill="#374151"/>
            <circle cx={x} cy="120" r="5" fill="#64748b"/>
          </g>
        ))}
        {/* Rail */}
        <rect x="0" y="132" width="500" height="5" rx="2" fill="#475569"/>
        {/* Platform */}
        <rect x="0" y="137" width="500" height="43" fill="#334155"/>
        {/* Platform edge yellow line */}
        <line x1="0" y1="138" x2="500" y2="138" stroke="#fcd34d" strokeWidth="3"/>
        {/* Waiting people on platform */}
        <circle cx="80" cy="155" r="10" fill="#60a5fa"/>
        <rect x="70" y="165" width="18" height="14" rx="3" fill="#2563eb"/>
        <circle cx="115" cy="152" r="10" fill="#f59e0b"/>
        <rect x="105" y="162" width="18" height="14" rx="3" fill="#d97706"/>
        {/* Map on wall */}
        <rect x="380" y="140" width="100" height="35" rx="3" fill="#1e40af"/>
        <rect x="385" y="145" width="90" height="25" rx="2" fill="#dbeafe"/>
        <line x1="390" y1="150" x2="465" y2="150" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="420" y1="145" x2="420" y2="168" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="420" cy="155" r="3" fill="#ef4444"/>
        <text x="435" y="160" fill="#1e3a8a" fontSize="4">YOU</text>
      </svg>
    </SceneIllustration>
  )
}

function ParentTeacherScene() {
  return (
    <SceneIllustration title="👨‍👩‍👧 Scene: Parent-Teacher Conference" bg="from-emerald-50 to-green-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Classroom background */}
        <rect x="0" y="0" width="500" height="130" fill="#f0fdf4"/>
        {/* Whiteboard */}
        <rect x="120" y="8" width="260" height="60" rx="5" fill="white" stroke="#86efac" strokeWidth="2"/>
        <text x="250" y="25" textAnchor="middle" fill="#4ade80" fontSize="7">Student Progress Report</text>
        {/* Graph on board */}
        <line x1="140" y1="58" x2="140" y2="32" stroke="#16a34a" strokeWidth="1.5"/>
        <line x1="140" y1="58" x2="350" y2="58" stroke="#16a34a" strokeWidth="1.5"/>
        <polyline points="155,52 185,45 215,48 245,38 275,40 305,32 335,35" fill="none" stroke="#4ade80" strokeWidth="2"/>
        {[155,185,215,245,275,305,335].map((x, i) => (
          <circle key={i} cx={x} cy={[52,45,48,38,40,32,35][i]} r="2.5" fill="#16a34a"/>
        ))}
        {/* Desk */}
        <rect x="150" y="90" width="200" height="30" rx="5" fill="#6b7280" stroke="#4b5563" strokeWidth="1.5"/>
        <rect x="150" y="90" width="200" height="6" rx="3" fill="#4b5563"/>
        {/* Report papers */}
        <rect x="195" y="82" width="50" height="12" rx="2" fill="white" stroke="#d1fae5" strokeWidth="1"/>
        <line x1="200" y1="86" x2="240" y2="86" stroke="#86efac" strokeWidth="0.8"/>
        <line x1="200" y1="89" x2="235" y2="89" stroke="#86efac" strokeWidth="0.8"/>
        {/* Teacher */}
        <circle cx="250" cy="72" r="13" fill="#f59e0b"/>
        <rect x="238" y="85" width="24" height="15" rx="3" fill="#d97706"/>
        {/* Parent 1 */}
        <circle cx="155" cy="95" r="12" fill="#60a5fa"/>
        <rect x="143" y="107" width="22" height="14" rx="3" fill="#2563eb"/>
        {/* Parent 2 */}
        <circle cx="345" cy="95" r="12" fill="#f472b6"/>
        <rect x="333" y="107" width="22" height="14" rx="3" fill="#db2777"/>
        {/* Grade card */}
        <rect x="262" y="82" width="40" height="12" rx="2" fill="#fef9c3" stroke="#fcd34d" strokeWidth="1"/>
        <text x="282" y="91" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">GPA: 3.85</text>
        {/* School name plate */}
        <rect x="170" y="0" width="160" height="10" rx="3" fill="#15803d"/>
        <text x="250" y="8" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">WESTBROOK ACADEMY</text>
        {/* Floor */}
        <rect x="0" y="130" width="500" height="50" fill="#dcfce7"/>
        {/* Bookshelf */}
        <rect x="20" y="50" width="80" height="70" rx="3" fill="#78350f"/>
        {[26,38,50,62,74,86,98].map((x, i) => (
          <rect key={i} x={x} y="55" width="10" height="55" rx="1" fill={['#ef4444','#3b82f6','#10b981','#f59e0b','#8b5cf6','#ec4899','#06b6d4'][i]}/>
        ))}
        <rect x="400" y="60" width="80" height="65" rx="3" fill="#78350f"/>
        {[406,418,430,442,454,466].map((x, i) => (
          <rect key={i} x={x} y="65" width="10" height="52" rx="1" fill={['#fcd34d','#a3e635','#67e8f9','#fb923c','#c084fc','#f9a8d4'][i]}/>
        ))}
      </svg>
    </SceneIllustration>
  )
}

function WeddingScene() {
  return (
    <SceneIllustration title="💍 Scene: At a Wedding / Formal Event" bg="from-rose-50 to-pink-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Event hall */}
        <rect x="0" y="0" width="500" height="130" fill="#fff1f2"/>
        {/* Flower arch */}
        <path d="M180 130 Q180 20 250 15 Q320 20 320 130" fill="none" stroke="#f9a8d4" strokeWidth="4"/>
        {/* Flowers on arch */}
        {[[180,130],[182,105],[188,82],[198,62],[213,45],[228,32],[250,20],[272,32],[287,45],[302,62],[312,82],[318,105],[320,130]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill={['#f9a8d4','#fb7185','#fda4af','#f9a8d4','#fecdd3','#fda4af','#f9a8d4','#fda4af','#fecdd3','#f9a8d4','#fb7185','#fda4af','#f9a8d4'][i]}/>
        ))}
        {/* Altar */}
        <rect x="215" y="100" width="70" height="30" rx="4" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.5"/>
        {/* Bride */}
        <circle cx="228" cy="90" r="12" fill="#fbbf24"/>
        <rect x="216" y="102" width="24" height="28" rx="3" fill="white"/>
        <rect x="210" y="112" width="12" height="8" rx="2" fill="white"/>
        <rect x="230" y="112" width="12" height="8" rx="2" fill="white"/>
        {/* Veil */}
        <path d="M216 88 Q228 75 240 88" fill="none" stroke="white" strokeWidth="2"/>
        {/* Groom */}
        <circle cx="272" cy="90" r="12" fill="#f59e0b"/>
        <rect x="260" y="102" width="24" height="28" rx="3" fill="#1e293b"/>
        {/* Flower bouquet */}
        <circle cx="228" cy="115" r="6" fill="#fda4af"/>
        <circle cx="235" cy="112" r="5" fill="#fb7185"/>
        <circle cx="222" cy="112" r="5" fill="#fecdd3"/>
        {/* Guests sitting */}
        {[[60,105,'#60a5fa'],[90,108,'#a78bfa'],[410,105,'#34d399'],[440,108,'#fbbf24']].map(([x,y,c],i) => (
          <g key={i}><circle cx={x} cy={y} r="10" fill={c}/><rect x={x-8} y={y+10} width="16" height="15" rx="3" fill={c} opacity="0.7"/></g>
        ))}
        {/* Aisle */}
        <rect x="230" y="115" width="40" height="5" rx="2" fill="#fce7f3"/>
        <rect x="0" y="130" width="500" height="50" fill="#fce7f3"/>
        {/* Ribbons / decorations */}
        <line x1="0" y1="5" x2="500" y2="5" stroke="#f9a8d4" strokeWidth="3"/>
        {[50,120,200,300,380,450].map(x => (
          <g key={x}>
            <line x1={x} y1="0" x2={x} y2="20" stroke="#fda4af" strokeWidth="1.5"/>
            <circle cx={x} cy="22" r="4" fill="#fb7185"/>
          </g>
        ))}
        {/* Chandelier */}
        <line x1="250" y1="0" x2="250" y2="15" stroke="#fcd34d" strokeWidth="1.5"/>
        <ellipse cx="250" cy="20" rx="18" ry="8" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1"/>
        {[235,245,255,265].map(x => (
          <line key={x} x1={x} y1="24" x2={x-2} y2="32" stroke="#fcd34d" strokeWidth="0.8"/>
        ))}
      </svg>
    </SceneIllustration>
  )
}

function MovingCityScene() {
  return (
    <SceneIllustration title="🚚 Scene: Moving to a New City" bg="from-emerald-50 to-teal-50">
      <svg viewBox="0 0 500 180" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="500" height="100" fill="#ecfdf5"/>
        {/* City skyline */}
        <rect x="350" y="30" width="50" height="70" rx="2" fill="#6ee7b7"/>
        <rect x="355" y="20" width="40" height="15" rx="2" fill="#34d399"/>
        <rect x="370" y="10" width="10" height="12" rx="1" fill="#10b981"/>
        <rect x="410" y="45" width="60" height="55" rx="2" fill="#a7f3d0"/>
        <rect x="420" y="35" width="40" height="12" rx="2" fill="#6ee7b7"/>
        <rect x="460" y="55" width="40" height="45" rx="2" fill="#6ee7b7"/>
        {/* Apartment window grids */}
        {[355,370,385].map(x => (
          <g key={x}>{[40,55,70].map(y => <rect key={y} x={x} y={y} width="10" height="8" rx="1" fill={y===55?"#fcd34d":"#bfdbfe"}/>)}</g>
        ))}
        {/* Moving truck */}
        <rect x="40" y="65" width="200" height="55" rx="6" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
        <rect x="40" y="65" width="60" height="55" rx="6" fill="#fbbf24"/>
        <rect x="48" y="72" width="44" height="30" rx="4" fill="#bae6fd"/>
        <rect x="200" y="72" width="35" height="45" rx="3" fill="#fde68a"/>
        {/* Boxes in truck */}
        <rect x="210" y="82" width="18" height="18" rx="2" fill="#92400e"/>
        <rect x="210" y="76" width="18" height="8" rx="1" fill="#78350f"/>
        <rect x="228" y="85" width="14" height="15" rx="2" fill="#b45309"/>
        <line x1="205" y1="88" x2="240" y2="88" stroke="#92400e" strokeWidth="0.5"/>
        {/* Wheels */}
        <circle cx="90" cy="122" r="16" fill="#1e293b"/>
        <circle cx="90" cy="122" r="6" fill="#64748b"/>
        <circle cx="200" cy="122" r="16" fill="#1e293b"/>
        <circle cx="200" cy="122" r="6" fill="#64748b"/>
        <circle cx="230" cy="122" r="14" fill="#1e293b"/>
        <circle cx="230" cy="122" r="5" fill="#64748b"/>
        {/* Moving sign */}
        <rect x="60" y="48" width="70" height="18" rx="4" fill="#10b981"/>
        <text x="95" y="60" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">SWIFT MOVERS</text>
        {/* Person standing with map */}
        <circle cx="305" cy="82" r="13" fill="#60a5fa"/>
        <rect x="292" y="95" width="24" height="20" rx="3" fill="#2563eb"/>
        {/* Map in hand */}
        <rect x="310" y="88" width="20" height="16" rx="2" fill="white" stroke="#93c5fd" strokeWidth="1"/>
        <line x1="313" y1="92" x2="327" y2="92" stroke="#3b82f6" strokeWidth="0.8"/>
        <line x1="313" y1="96" x2="325" y2="96" stroke="#3b82f6" strokeWidth="0.8"/>
        <circle cx="318" cy="100" r="2" fill="#ef4444"/>
        {/* New neighbor waving */}
        <circle cx="345" cy="80" r="12" fill="#f472b6"/>
        <rect x="334" y="92" width="22" height="18" rx="3" fill="#db2777"/>
        {/* Waving arm */}
        <line x1="334" y1="88" x2="322" y2="76" stroke="#f472b6" strokeWidth="3"/>
        {/* Road */}
        <rect x="0" y="138" width="500" height="42" fill="#cbd5e1"/>
        <line x1="0" y1="138" x2="500" y2="138" stroke="#94a3b8" strokeWidth="2"/>
        <line x1="0" y1="158" x2="500" y2="158" stroke="white" strokeWidth="2" strokeDasharray="25,18"/>
        {/* Boxes on sidewalk */}
        <rect x="275" y="115" width="18" height="18" rx="2" fill="#92400e"/>
        <rect x="296" y="118" width="15" height="15" rx="2" fill="#b45309"/>
        <rect x="314" y="112" width="20" height="20" rx="2" fill="#78350f"/>
        <line x1="270" y1="121" x2="295" y2="121" stroke="#92400e" strokeWidth="0.5"/>
      </svg>
    </SceneIllustration>
  )
}

// ═══════════════════════════════════════════════════════════════
// Conversations Part 4
// ═══════════════════════════════════════════════════════════════

export const conversationsPart4 = [

  // ─── Day 26: At a Job Fair / Career Expo ────────────────────
  {
    id: 26,
    day: 26,
    title: '💼 At a Career Expo / Job Fair',
    category: 'Professional',
    difficulty: 'Intermediate',
    color: 'blue',
    body: (
      <div>
        <JobFairScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Recruiter' }}
          situation="Approaching a company booth at a career expo"
          lines={[
            { speaker: 'A', en: "Hi! I'm really interested in the software engineering positions at Tech Corp. Do you have a moment?", id: "Hai! Saya sangat tertarik dengan posisi software engineer di Tech Corp. Ada waktu sebentar?", note: '"Do you have a moment?" = cara sopan memulai percakapan profesional' },
            { speaker: 'B', en: "Absolutely! I'm Sarah, the campus recruiter. Tell me about yourself — what's your background?", id: "Tentu! Saya Sarah, rekruter kampus. Ceritakan tentang diri Anda — apa latar belakang Anda?" },
            { speaker: 'A', en: "I'm finishing up my Master's in Computer Science at State University. I specialize in machine learning and have two years of internship experience at a fintech startup.", id: "Saya sedang menyelesaikan S2 Ilmu Komputer di State University. Spesialisasi saya machine learning, dan punya dua tahun pengalaman magang di startup fintech.", note: '"Finishing up" = sedang menyelesaikan (informal tapi profesional)' },
            { speaker: 'B', en: "That's a great combination. We're looking for people with exactly that skill set. Are you open to relocation?", id: "Kombinasi yang bagus. Kami mencari orang dengan keahlian persis seperti itu. Apakah Anda bersedia relokasi?" },
            { speaker: 'A', en: "Yes, I'm open to relocating anywhere in the country. Could you tell me a bit about the team culture and career growth opportunities?", id: "Ya, saya bersedia pindah ke mana pun di negara ini. Bisakah Anda ceritakan sedikit tentang budaya tim dan peluang pengembangan karier?", note: 'Tanya balik = menunjukkan minat serius' },
            { speaker: 'B', en: "We have a very collaborative environment. Most engineers move into senior roles within two to three years. We also fund external certifications and conferences.", id: "Kami punya lingkungan yang sangat kolaboratif. Sebagian besar engineer naik ke posisi senior dalam dua hingga tiga tahun. Kami juga mendanai sertifikasi eksternal dan konferensi." },
            { speaker: 'A', en: "That sounds fantastic. I'd love to follow up formally. Could I leave you my résumé and connect on LinkedIn?", id: "Kedengarannya luar biasa. Saya ingin menindaklanjuti secara resmi. Boleh saya tinggalkan résumé dan terhubung di LinkedIn?", note: '"Follow up formally" = menindaklanjuti secara resmi' },
            { speaker: 'B', en: "Of course! We'll be in touch within two weeks after the expo. Good luck today!", id: "Tentu! Kami akan menghubungi dalam dua minggu setelah expo. Semoga sukses hari ini!" },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Peer' }}
          situation="Chatting with another job seeker at the expo"
          lines={[
            { speaker: 'B', en: "Hey, did you just come from the Tech Corp booth? How was it?", id: "Hei, baru dari booth Tech Corp? Gimana?" },
            { speaker: 'A', en: "Really positive! The recruiter was super approachable. Which companies are you targeting?", id: "Sangat positif! Rekruternya sangat mudah didekati. Perusahaan apa yang kamu incar?", note: '"Targeting" = mengincar (dalam konteks karier)' },
            { speaker: 'B', en: "I'm mainly looking at the consulting firms — McKinsey and Deloitte have booths on the other side. I'm an MBA student.", id: "Saya terutama lihat perusahaan konsultan — McKinsey dan Deloitte ada booth di sisi lain. Saya mahasiswa MBA." },
            { speaker: 'A', en: "Nice! Good luck! Maybe swap contact info? It's always useful to network, even with other candidates.", id: "Bagus! Semoga sukses! Mungkin tukar info kontak? Selalu berguna untuk networking, bahkan dengan sesama kandidat.", note: '"Swap contact info" = tukar informasi kontak' },
          ]}
        />
        <KeyPhrasesCard title="Career Expo Key Phrases" color="indigo" phrases={[
          { en: "Do you have a moment?", id: "Ada waktu sebentar?" },
          { en: "I specialize in...", id: "Spesialisasi saya di bidang..." },
          { en: "Open to relocation", id: "Bersedia relokasi" },
          { en: "Career growth opportunities", id: "Peluang pengembangan karier" },
          { en: "I'd love to follow up formally", id: "Saya ingin menindaklanjuti secara resmi" },
          { en: "We'll be in touch", id: "Kami akan menghubungi Anda" },
        ]} />
        <CulturalNote>
          <strong>Networking at Job Fairs:</strong> In Western professional culture, it is completely normal — even expected — to approach recruiters with a firm handshake and a 30-second "elevator pitch" about yourself. Always bring printed copies of your résumé and a business card if you have one. Connecting on LinkedIn the same day shows initiative and keeps you on the recruiter's radar.
        </CulturalNote>
        <PronunciationTip word="résumé" ipa="ˈrɛz.ə.meɪ" tip="REH-zoo-may — all three syllables, accent on first" />
        <PronunciationTip word="collaborate" ipa="kəˈlæb.ə.reɪt" tip="stress on second syllable: co-LAB-o-rate" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="I ___ in machine learning and data engineering."
          options={["specialize", "major", "focus", "concentrate"]}
          answer="specialize"
          explanation="'Specialize in' = spesialisasi di bidang — ungkapan standar dalam konteks profesional"
        />
        <FillInBlank
          sentence="I'd love to ___ formally after the expo."
          options={["follow up", "catch up", "keep up", "look up"]}
          answer="follow up"
          explanation="'Follow up' = menindaklanjuti — phrasal verb penting dalam dunia kerja"
        />
        <ExpressionMeter
          formal={["I am interested in exploring opportunities at your organization.", "Could you elaborate on the career development pathway?", "I would appreciate the opportunity to submit my application formally."]}
          informal={["Are you guys hiring?", "What's the vibe like at the company?", "Can I leave you my résumé?"]}
        />
      </div>
    ),
  },

  // ─── Day 27: Visiting a Museum ──────────────────────────────
  {
    id: 27,
    day: 27,
    title: '🏛️ Visiting a Museum',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div>
        <MuseumScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Tour Guide' }}
          situation="Joining a guided tour at the city art museum"
          lines={[
            { speaker: 'B', en: "Welcome to the Metropolitan Museum! Today's tour covers our Impressionist collection and the Ancient World gallery. Please stay with the group.", id: "Selamat datang di Metropolitan Museum! Tur hari ini mencakup koleksi Impresionis dan galeri Dunia Kuno. Harap tetap bersama kelompok.", note: '"Covers" = mencakup, membahas' },
            { speaker: 'A', en: "Excuse me, is photography allowed inside the galleries?", id: "Permisi, apakah fotografi diizinkan di dalam galeri?" },
            { speaker: 'B', en: "Yes, personal photography is permitted as long as you don't use flash and don't block other visitors. However, no tripods, please.", id: "Ya, fotografi pribadi diizinkan selama tidak menggunakan flash dan tidak menghalangi pengunjung lain. Namun, tidak boleh menggunakan tripod.", note: '"As long as" = selama, asalkan' },
            { speaker: 'A', en: "Got it. What's the story behind this large painting? It looks like a battle scene.", id: "Mengerti. Apa cerita di balik lukisan besar ini? Kelihatannya seperti adegan pertempuran.", note: '"What\'s the story behind...?" = cara bertanya tentang latar belakang sesuatu' },
            { speaker: 'B', en: "Great eye! This is 'The Battle of Austerlitz,' dating from 1810. It depicts Napoleon's most celebrated military victory. Notice how the artist used light to guide your eye toward the center.", id: "Pengamatan yang bagus! Ini adalah 'Pertempuran Austerlitz,' berasal dari tahun 1810. Menggambarkan kemenangan militer Napoleon yang paling terkenal. Perhatikan bagaimana seniman menggunakan cahaya untuk mengarahkan mata Anda ke tengah.", note: '"Dating from" = berasal dari (tahun tertentu)' },
            { speaker: 'A', en: "Fascinating! How long did it take to paint something like this?", id: "Menakjubkan! Berapa lama untuk melukis sesuatu seperti ini?" },
            { speaker: 'B', en: "Large-scale works like this typically took months or even years. The artist employed a team of assistants for the background details.", id: "Karya berskala besar seperti ini biasanya membutuhkan waktu berbulan-bulan atau bahkan bertahun-tahun. Seniman mempekerjakan tim asisten untuk detail latar belakang.", note: '"Employed" di sini artinya "mempekerjakan," bukan "bekerja"' },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Visitor' }}
          situation="Chatting with a fellow visitor in the gift shop"
          lines={[
            { speaker: 'B', en: "That Impressionist wing was incredible, wasn't it? The Monet series blew me away.", id: "Sayap Impresionis itu luar biasa, bukan? Seri Monet membuat saya terkagum-kagum.", note: '"Blow me away" = membuat terkagum-kagum, sangat terkesan' },
            { speaker: 'A', en: "Absolutely. I didn't expect the scale of the water lily paintings. They were so immersive!", id: "Tentu saja. Saya tidak menyangka skala lukisan teratai itu. Sangat memukau!", note: '"Immersive" = sangat menyerap perhatian, terasa nyata' },
            { speaker: 'B', en: "Are you picking up anything from the gift shop?", id: "Apakah Anda membeli sesuatu dari toko suvenir?" },
            { speaker: 'A', en: "Maybe a print of the Monet. It would look amazing in my apartment. Do you come here often?", id: "Mungkin cetakan Monet. Akan terlihat indah di apartemen saya. Apakah Anda sering ke sini?" },
          ]}
        />
        <KeyPhrasesCard title="Museum & Art Phrases" color="amber" phrases={[
          { en: "Is photography allowed?", id: "Apakah fotografi diizinkan?" },
          { en: "What's the story behind...?", id: "Apa cerita di balik...?" },
          { en: "Dating from / dating back to...", id: "Berasal dari (tahun)..." },
          { en: "It blew me away", id: "Itu membuat saya terkagum-kagum" },
          { en: "Immersive experience", id: "Pengalaman yang sangat memukau" },
          { en: "Great eye!", id: "Pengamatan yang bagus!" },
        ]} />
        <CulturalNote>
          <strong>Museum Etiquette:</strong> In most Western museums, speaking in a quiet, respectful tone is expected. Many museums offer free admission on certain days — always check the website first. Audio guides (usually available via a phone app) are a great way to learn at your own pace without joining a group tour.
        </CulturalNote>
        <PronunciationTip word="Impressionist" ipa="ɪmˈprɛʃ.ən.ɪst" tip="im-PRESH-on-ist — stress on second syllable" />
        <PronunciationTip word="immersive" ipa="ɪˈmɜː.sɪv" tip="i-MER-siv — stress on 'mer'" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="This sculpture is ___ from the 3rd century BC."
          options={["dating", "coming", "originating", "starting"]}
          answer="dating"
          explanation="'Dating from' = berasal dari — phrase standar untuk mendeskripsikan usia objek bersejarah"
        />
        <FillInBlank
          sentence="The Monet series completely ___ me away."
          options={["blew", "took", "swept", "moved"]}
          answer="blew"
          explanation="'Blow away' = membuat sangat terkesan — 'blew' adalah bentuk lampau dari 'blow'"
        />
        <ExpressionMeter
          formal={["Could you elaborate on the historical context of this piece?", "I found the exhibition most enlightening.", "May I inquire about the provenance of this artifact?"]}
          informal={["What's the story behind this?", "That totally blew me away!", "Is it okay to take photos here?"]}
        />
      </div>
    ),
  },

  // ─── Day 28: Car Trouble / Mechanic ─────────────────────────
  {
    id: 28,
    day: 28,
    title: '🔧 Car Trouble at the Mechanic',
    category: 'Daily Life',
    difficulty: 'Intermediate',
    color: 'slate',
    body: (
      <div>
        <MechanicScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Mechanic' }}
          situation="Your car broke down and you've brought it to an auto repair shop"
          lines={[
            { speaker: 'A', en: "Hi, I called earlier about my car. It's been making a loud grinding noise whenever I brake, and the steering wheel shakes at high speed.", id: "Hei, saya tadi telepon soal mobil saya. Ada suara gesekan keras setiap kali saya mengerem, dan setir bergetar di kecepatan tinggi.", note: '"Grinding noise" = suara gesekan/decitan yang keras' },
            { speaker: 'B', en: "I see. How long has it been doing this? And has the brake warning light come on?", id: "Saya mengerti. Sudah berapa lama seperti ini? Apakah lampu peringatan rem menyala?", note: '"Come on" di sini = menyala (lampu)' },
            { speaker: 'A', en: "About two weeks. The light flickered once last Thursday but hasn't come on since.", id: "Sekitar dua minggu. Lampu berkedip sekali Kamis lalu tapi belum menyala lagi sejak saat itu.", note: '"Flickered" = berkedip sebentar' },
            { speaker: 'B', en: "Okay. Let me put it on the lift and take a look. It sounds like worn brake pads — could also be the rotors. Give me about 30 minutes.", id: "Baik. Saya angkat mobilnya dan periksa. Kedengarannya seperti kampas rem yang aus — mungkin juga rotornya. Tunggu sekitar 30 menit.", note: '"Put it on the lift" = angkat kendaraan dengan alat lift di bengkel' },
            { speaker: 'A', en: "Sure. Could you give me a ballpark estimate before you start any work?", id: "Baik. Bisa berikan perkiraan harga dulu sebelum mulai mengerjakan?", note: '"Ballpark estimate" = perkiraan kasar (bukan angka pasti)' },
            { speaker: 'B', en: "Roughly $200 to $350, depending on whether the rotors need replacing too. I'll give you a full written quote after the inspection.", id: "Kira-kira $200 hingga $350, tergantung apakah rotor juga perlu diganti. Saya akan beri penawaran tertulis lengkap setelah inspeksi.", note: '"Written quote" = penawaran harga tertulis — selalu minta ini!' },
            { speaker: 'A', en: "That sounds reasonable. Please don't do any work without calling me first if it goes over $300.", id: "Kedengarannya wajar. Tolong jangan kerjakan apa pun tanpa menghubungi saya dulu jika lebih dari $300.", note: 'Penting: selalu tetapkan batas harga sebelum meninggalkan bengkel' },
            { speaker: 'B', en: "Absolutely, I'll call you before proceeding with anything beyond the brake job. You can wait in the lounge.", id: "Tentu, saya akan telepon sebelum mengerjakan apa pun di luar pekerjaan rem. Anda bisa menunggu di ruang tunggu." },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Mechanic' }}
          situation="After the inspection — reviewing the findings"
          lines={[
            { speaker: 'B', en: "Okay, so the front brake pads are completely worn down to metal. The rotors are scratched but still within spec, so we don't need to replace those. Total will be $185.", id: "Baik, jadi kampas rem depan sudah aus sampai logam. Rotor tergores tapi masih dalam spesifikasi, jadi tidak perlu diganti. Total $185.", note: '"Within spec" = masih dalam batas spesifikasi yang aman' },
            { speaker: 'A', en: "Great, that's less than I expected. How long will the repair take?", id: "Bagus, lebih murah dari yang saya perkirakan. Berapa lama perbaikannya?" },
            { speaker: 'B', en: "About an hour. Your car will be ready by 3 PM. We also noticed your wiper blades are cracked — that's an easy add-on if you want.", id: "Sekitar satu jam. Mobil Anda siap pukul 3 sore. Kami juga melihat wiper Anda retak — mudah ditambahkan jika mau." },
            { speaker: 'A', en: "How much are the wipers?", id: "Berapa harga wiper-nya?" },
            { speaker: 'B', en: "Just $25 for the pair, including installation.", id: "Hanya $25 untuk sepasang, termasuk pemasangan." },
            { speaker: 'A', en: "Alright, go ahead and add those too. Thanks for the thorough check!", id: "Baik, tambahkan juga. Terima kasih atas pemeriksaan yang menyeluruh!", note: '"Go ahead and..." = silakan lanjutkan / tolong lakukan juga' },
          ]}
        />
        <KeyPhrasesCard title="Auto Repair Shop Phrases" color="indigo" phrases={[
          { en: "It's making a grinding / knocking noise", id: "Ada suara gesekan / ketukan" },
          { en: "Could you give me a ballpark estimate?", id: "Bisa berikan perkiraan kasarnya?" },
          { en: "A written quote / work order", id: "Penawaran/order tertulis" },
          { en: "Don't proceed without calling me", id: "Jangan lanjutkan tanpa menghubungi saya" },
          { en: "Within spec / still good", id: "Masih dalam batas spesifikasi" },
          { en: "Go ahead and add that", id: "Silakan tambahkan itu" },
        ]} />
        <CulturalNote>
          <strong>Consumer Rights at Repair Shops:</strong> In the US, most states legally require mechanics to give you a written estimate before starting work and to get your authorization before exceeding that amount. Always ask for the old parts back to verify they were actually replaced. It is also perfectly fine to get a second opinion at another shop.
        </CulturalNote>
        <PronunciationTip word="estimate" ipa="ˈɛs.tɪ.mɪt" tip="As a noun: ES-ti-mit. As a verb: ES-ti-mayt" />
        <PronunciationTip word="inspection" ipa="ɪnˈspɛk.ʃən" tip="in-SPEK-shun — stress on second syllable" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="Could you give me a ___ estimate before starting the work?"
          options={["ballpark", "roundabout", "rough", "loose"]}
          answer="ballpark"
          explanation="'Ballpark estimate' adalah idiom bahasa Inggris yang berarti perkiraan kasar — sangat umum digunakan"
        />
        <FillInBlank
          sentence="Please don't ___ with the repair until I approve the cost."
          options={["proceed", "continue", "advance", "go"]}
          answer="proceed"
          explanation="'Proceed with' = melanjutkan dengan — lebih formal dari 'continue with'"
        />
        <ExpressionMeter
          formal={["I would like a comprehensive written estimate prior to any work commencing.", "Please do not exceed the quoted amount without prior authorization.", "Could you provide documentation of all parts replaced?"]}
          informal={["How much is this gonna cost?", "Don't do anything until you call me!", "Can I get a receipt for the old parts?"]}
        />
      </div>
    ),
  },

  // ─── Day 29: Ordering Food Delivery ─────────────────────────
  {
    id: 29,
    day: 29,
    title: '🛵 Ordering Food Delivery',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div>
        <FoodDeliveryScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Restaurant Staff' }}
          situation="Calling a restaurant to place a delivery order"
          lines={[
            { speaker: 'B', en: "Thank you for calling Spice Garden. This is Lily speaking. How can I help you?", id: "Terima kasih telah menghubungi Spice Garden. Saya Lily. Ada yang bisa saya bantu?", note: 'Salam pembuka telepon restoran yang khas' },
            { speaker: 'A', en: "Hi, I'd like to place a delivery order, please.", id: "Hei, saya ingin pesan untuk dikirim." },
            { speaker: 'B', en: "Sure! May I have your name and delivery address?", id: "Tentu! Boleh saya minta nama dan alamat pengiriman Anda?" },
            { speaker: 'A', en: "It's Andi, and the address is 42 Maple Street, Apartment 3B.", id: "Nama saya Andi, alamatnya 42 Maple Street, Apartemen 3B." },
            { speaker: 'B', en: "Got it. What would you like to order?", id: "Baik. Apa yang ingin Anda pesan?" },
            { speaker: 'A', en: "I'd like one order of the chicken tikka masala, one garlic naan, and a mango lassi. Oh, and can I request no onions in the tikka masala?", id: "Saya mau satu porsi chicken tikka masala, satu garlic naan, dan satu mango lassi. Oh, dan bisa saya minta tanpa bawang di tikka masala?", note: '"Can I request...?" = cara sopan meminta perubahan pesanan' },
            { speaker: 'B', en: "Absolutely, no onions — noted! Is there anything else? We also have a special today: a free dessert with orders over $30.", id: "Tentu, tanpa bawang — dicatat! Ada lagi? Kami juga punya spesial hari ini: dessert gratis untuk pembelian di atas $30." },
            { speaker: 'A', en: "Oh, what's the dessert?", id: "Oh, dessert apa?" },
            { speaker: 'B', en: "Gulab jamun — Indian milk dumplings in syrup. It's very popular!", id: "Gulab jamun — dumpling susu India dalam sirup. Sangat populer!" },
            { speaker: 'A', en: "That sounds delicious! I'll take that. What's the estimated delivery time?", id: "Kedengarannya enak! Saya ambil itu. Berapa estimasi waktu pengirimannya?", note: '"Estimated delivery time" = estimasi waktu pengiriman' },
            { speaker: 'B', en: "About 35 to 45 minutes. Will you be paying by card on delivery or online now?", id: "Sekitar 35 hingga 45 menit. Apakah Anda akan membayar dengan kartu saat pengiriman atau online sekarang?" },
            { speaker: 'A', en: "I'll pay online now. Thanks so much!", id: "Saya bayar online sekarang. Terima kasih banyak!" },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Delivery Driver' }}
          situation="Receiving the delivery at the door"
          lines={[
            { speaker: 'B', en: "Hi! Delivery from Spice Garden for Andi?", id: "Hei! Pengiriman dari Spice Garden untuk Andi?" },
            { speaker: 'A', en: "Yes, that's me! Thank you so much.", id: "Ya, itu saya! Terima kasih banyak." },
            { speaker: 'B', en: "Here you go! Everything is in the bag. Have a great evening!", id: "Ini dia! Semua ada di dalam tas. Selamat menikmati malam Anda!" },
            { speaker: 'A', en: "Wait — I think there might be an item missing. I ordered a mango lassi but I only see the food.", id: "Tunggu — sepertinya ada item yang kurang. Saya pesan mango lassi tapi saya hanya lihat makanannya.", note: 'Sopan tapi tegas saat ada yang kurang' },
            { speaker: 'B', en: "Let me check… You're right, I'm so sorry! I'll call the restaurant right away and get it sorted out.", id: "Saya periksa… Anda benar, maaf sekali! Saya langsung hubungi restoran dan selesaikan ini.", note: '"Get it sorted out" = menyelesaikan/membereskan masalah' },
          ]}
        />
        <KeyPhrasesCard title="Food Delivery Phrases" color="amber" phrases={[
          { en: "I'd like to place a delivery order", id: "Saya ingin pesan untuk dikirim" },
          { en: "Can I request no...?", id: "Bisa saya minta tanpa...?" },
          { en: "Estimated delivery time", id: "Estimasi waktu pengiriman" },
          { en: "There might be an item missing", id: "Sepertinya ada item yang kurang" },
          { en: "Get it sorted out", id: "Membereskan / menyelesaikan masalah" },
          { en: "Pay on delivery / pay online", id: "Bayar saat pengiriman / bayar online" },
        ]} />
        <CulturalNote>
          <strong>Tipping Delivery Drivers:</strong> In the US, tipping delivery drivers is standard practice — typically 15–20% of the order total. When ordering through apps like DoorDash or Uber Eats, you can set the tip digitally. Tipping in cash when the driver arrives is also appreciated and ensures they receive 100% of the tip.
        </CulturalNote>
        <PronunciationTip word="delivery" ipa="dɪˈlɪv.ər.i" tip="de-LIV-er-ee — four syllables, stress on second" />
        <PronunciationTip word="estimated" ipa="ˈɛs.tɪ.meɪ.tɪd" tip="ES-ti-may-tid — stress on first syllable" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="I'd like to ___ a delivery order for two people."
          options={["place", "make", "put", "set"]}
          answer="place"
          explanation="'Place an order' = memesan — collocasi yang paling natural dalam bahasa Inggris"
        />
        <FillInBlank
          sentence="Can I ___ no garlic in the pasta?"
          options={["request", "ask", "demand", "require"]}
          answer="request"
          explanation="'Request' = meminta secara sopan — lebih formal dari 'ask' tapi tidak sekeras 'demand'"
        />
        <ExpressionMeter
          formal={["I would like to place a delivery order, please.", "Could you note my dietary requirements?", "What is the estimated time of arrival for the order?"]}
          informal={["Can I get delivery?", "Can you skip the onions?", "How long's it gonna take?"]}
        />
      </div>
    ),
  },

  // ─── Day 30: At the Dentist ─────────────────────────────────
  {
    id: 30,
    day: 30,
    title: '🦷 At the Dentist',
    category: 'Health',
    difficulty: 'Intermediate',
    color: 'teal',
    body: (
      <div>
        <DentistScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Receptionist', C: 'Dentist' }}
          situation="Your first visit to a new dentist's office"
          lines={[
            { speaker: 'B', en: "Good morning! Do you have an appointment?", id: "Selamat pagi! Apakah Anda memiliki janji temu?" },
            { speaker: 'A', en: "Yes, I'm Andi Santoso. I have a 10 o'clock appointment with Dr. Lee.", id: "Ya, saya Andi Santoso. Saya punya janji jam 10 dengan Dr. Lee." },
            { speaker: 'B', en: "Perfect! Could you fill out this new patient form? It covers your medical history and any medications you're taking.", id: "Sempurna! Bisakah Anda mengisi formulir pasien baru ini? Ini mencakup riwayat medis dan obat yang sedang Anda konsumsi.", note: '"Fill out a form" = mengisi formulir' },
            { speaker: 'A', en: "Of course. Just to mention — I have a mild phobia of dental work. I tend to get anxious.", id: "Tentu. Hanya ingin memberi tahu — saya sedikit takut dengan perawatan gigi. Saya cenderung cemas.", note: '"Tend to" = cenderung' },
            { speaker: 'B', en: "That's completely understandable. Please let Dr. Lee know, and she can take extra care to keep you comfortable.", id: "Itu sangat bisa dimengerti. Tolong beri tahu Dr. Lee, dan dia bisa lebih berhati-hati agar Anda tetap nyaman." },
            { speaker: 'C', en: "Hi Andi, I'm Dr. Lee. So what brings you in today? Any specific concerns?", id: "Hai Andi, saya Dr. Lee. Jadi apa yang membawa Anda ke sini hari ini? Ada kekhawatiran khusus?", note: '"What brings you in?" = apa yang membawa Anda ke sini? (informal tapi sopan)' },
            { speaker: 'A', en: "I've been having a throbbing pain in my upper left molar for about a week. It gets worse when I eat something cold or sweet.", id: "Saya merasakan nyeri berdenyut di geraham kiri atas selama sekitar seminggu. Semakin parah saat makan sesuatu yang dingin atau manis.", note: '"Throbbing pain" = nyeri berdenyut-denyut' },
            { speaker: 'C', en: "I see. Let me take a look and get some X-rays done. Open wide for me, please.", id: "Saya mengerti. Biarkan saya periksa dan ambil foto rontgen. Tolong buka lebar ya.", note: '"Open wide" = buka mulut lebar-lebar' },
            { speaker: 'C', en: "The X-ray shows a small cavity that's reached the pulp. I'd recommend a root canal to save the tooth, or extraction if you prefer.", id: "Foto rontgen menunjukkan gigi berlubang kecil yang sudah mencapai pulpa. Saya sarankan perawatan saluran akar untuk menyelamatkan gigi, atau pencabutan jika Anda lebih suka.", note: '"Root canal" = perawatan saluran akar gigi' },
            { speaker: 'A', en: "What's the difference in cost and recovery time?", id: "Apa perbedaan biaya dan waktu pemulihan?" },
            { speaker: 'C', en: "Root canal is about $900 and you'll be sore for a few days. Extraction is $250 but you'd need an implant later if you want to replace it — which costs more overall.", id: "Saluran akar sekitar $900 dan Anda akan terasa sakit beberapa hari. Pencabutan $250 tapi Anda perlu implan nanti jika ingin menggantinya — yang secara keseluruhan lebih mahal." },
            { speaker: 'A', en: "I'll go with the root canal. Can we schedule it for later this week?", id: "Saya pilih saluran akar. Bisa dijadwalkan akhir minggu ini?", note: '"I\'ll go with" = saya pilih (informal tapi umum)' },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', C: 'Dentist' }}
          situation="During the procedure"
          lines={[
            { speaker: 'C', en: "I'm going to apply some numbing gel first, then give you a local anesthetic. You'll feel a small pinch.", id: "Saya akan oleskan gel mati rasa dulu, lalu beri Anda anestesi lokal. Anda akan merasakan sedikit cubitan.", note: '"Numbing gel" = gel mati rasa. "Local anesthetic" = bius lokal' },
            { speaker: 'A', en: "Mm-hmm. (raises hand) — Wait, I can still feel something!", id: "Mm-hmm. (mengangkat tangan) — Tunggu, saya masih merasakan sesuatu!", note: 'Angkat tangan = sinyal universal "berhenti" saat di kursi gigi' },
            { speaker: 'C', en: "Okay, I'll give you a little more anesthetic. Just breathe slowly. You're doing great!", id: "Baik, saya beri anestesi sedikit lagi. Bernapaslah perlahan. Anda melakukannya dengan baik!" },
            { speaker: 'A', en: "Thank you for being patient with me.", id: "Terima kasih sudah sabar dengan saya." },
            { speaker: 'C', en: "Of course! We're almost done. Rinse for me, please.", id: "Tentu! Kita hampir selesai. Kumur-kumur ya." },
          ]}
        />
        <KeyPhrasesCard title="Dental Visit Phrases" color="emerald" phrases={[
          { en: "I have a throbbing pain in my...", id: "Saya merasakan nyeri berdenyut di..." },
          { en: "It gets worse with cold / sweet food", id: "Semakin parah dengan makanan dingin/manis" },
          { en: "Open wide / Rinse please", id: "Buka lebar / Kumur-kumur" },
          { en: "Root canal / extraction / filling", id: "Saluran akar / pencabutan / tambal gigi" },
          { en: "Local anesthetic / numbing", id: "Anestesi lokal / mati rasa" },
          { en: "I'll go with the...", id: "Saya pilih yang..." },
        ]} />
        <CulturalNote>
          <strong>Dental Insurance in the US:</strong> Dental care in the US can be expensive without insurance. Many dental schools offer quality treatment at significantly reduced rates. Always ask for a treatment plan in writing before agreeing to procedures, and check whether your insurance covers the specific treatment code (CDT code) listed on the plan.
        </CulturalNote>
        <PronunciationTip word="anesthetic" ipa="ˌæn.ɪsˈθɛt.ɪk" tip="an-is-THET-ik — stress on third syllable" />
        <PronunciationTip word="cavity" ipa="ˈkæv.ɪ.ti" tip="KAV-i-tee — three syllables, stress on first" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="The pain gets ___ when I eat something cold."
          options={["worse", "worst", "more bad", "harder"]}
          answer="worse"
          explanation="'Worse' adalah comparative dari 'bad'. 'Worst' adalah superlative. 'More bad' tidak benar dalam bahasa Inggris."
        />
        <FillInBlank
          sentence="Could you ___ out this new patient form?"
          options={["fill", "write", "complete", "do"]}
          answer="fill"
          explanation="'Fill out a form' = mengisi formulir — phrasal verb yang sangat umum"
        />
        <ExpressionMeter
          formal={["I am experiencing acute dental pain in the upper left quadrant.", "Could you outline the treatment options and associated costs?", "I would prefer to proceed with the more conservative treatment."]}
          informal={["My tooth is killing me!", "How much is this gonna cost?", "I'll go with the root canal."]}
        />
      </div>
    ),
  },

  // ─── Day 31: Public Transportation ──────────────────────────
  {
    id: 31,
    day: 31,
    title: '🚇 Navigating Public Transportation',
    category: 'Travel',
    difficulty: 'Beginner',
    color: 'blue',
    body: (
      <div>
        <PublicTransportScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Commuter' }}
          situation="At a subway station, trying to figure out the right train"
          lines={[
            { speaker: 'A', en: "Excuse me, I'm trying to get to Grand Central Station. Am I on the right platform?", id: "Permisi, saya ingin ke Grand Central Station. Apakah saya di platform yang benar?", note: '"Am I on the right platform?" = pertanyaan yang sangat berguna saat naik transportasi umum' },
            { speaker: 'B', en: "Grand Central? No, you want the uptown 6 train, not this one. This is the downtown 4 going to Brooklyn.", id: "Grand Central? Tidak, Anda perlu kereta 6 ke uptown, bukan yang ini. Ini adalah kereta 4 ke downtown menuju Brooklyn.", note: '"Uptown" = ke utara/pusat kota. "Downtown" = ke selatan/pusat kota (bergantung kota)' },
            { speaker: 'A', en: "Oh! Do I need to go back through the turnstile or can I just switch platforms here?", id: "Oh! Apakah saya perlu kembali melalui turnstile atau bisa langsung pindah platform di sini?", note: '"Turnstile" = pintu putar di stasiun kereta' },
            { speaker: 'B', en: "You can switch platforms without going through the turnstile. Go up the stairs, cross the bridge, and head down to the other side. Follow the signs for the 6 train.", id: "Anda bisa pindah platform tanpa melalui turnstile. Naik tangga, seberangi jembatan, dan turun ke sisi lain. Ikuti tanda untuk kereta 6." },
            { speaker: 'A', en: "Got it, thank you! How many stops is it to Grand Central?", id: "Mengerti, terima kasih! Berapa halte ke Grand Central?" },
            { speaker: 'B', en: "Just two stops. You can't miss it — it's a major hub.", id: "Hanya dua halte. Anda tidak akan melewatkannya — itu adalah hub utama.", note: '"You can\'t miss it" = Anda pasti menemukannya, tidak mungkin terlewat' },
            { speaker: 'A', en: "Perfect. One more thing — is there a 24-hour service or does the subway stop running at some point?", id: "Sempurna. Satu hal lagi — apakah ada layanan 24 jam atau kereta berhenti beroperasi pada suatu saat?" },
            { speaker: 'B', en: "The NYC subway runs 24 hours, 7 days a week — though it's less frequent late at night.", id: "Kereta bawah tanah NYC beroperasi 24 jam, 7 hari seminggu — meskipun frekuensinya lebih jarang larut malam." },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Bus Driver' }}
          situation="Boarding a city bus with a question"
          lines={[
            { speaker: 'A', en: "Hi! Does this bus go to the downtown library?", id: "Hei! Apakah bus ini menuju perpustakaan pusat kota?" },
            { speaker: 'B', en: "No, this is the Route 12. You want the Route 7 — it stops about a block from the library.", id: "Tidak, ini Rute 12. Anda perlu Rute 7 — berhenti sekitar satu blok dari perpustakaan.", note: '"A block" = satu blok (jarak satu persimpangan jalan)' },
            { speaker: 'A', en: "Where do I catch the Route 7?", id: "Di mana saya bisa naik Rute 7?" },
            { speaker: 'B', en: "Right across the street — the stop with the blue shelter. It comes every 12 minutes.", id: "Tepat di seberang jalan — halte dengan pelindung biru. Datang setiap 12 menit." },
            { speaker: 'A', en: "Thank you so much. Oh, does this bus take contactless payment?", id: "Terima kasih banyak. Oh, apakah bus ini menerima pembayaran contactless?" },
            { speaker: 'B', en: "Yes! Tap your card or phone on the reader when you board.", id: "Ya! Tempelkan kartu atau ponsel Anda ke pembaca saat naik.", note: '"Tap" = menempelkan kartu/ponsel ke alat pembaca (contactless)' },
          ]}
        />
        <KeyPhrasesCard title="Public Transport Phrases" color="indigo" phrases={[
          { en: "Am I on the right platform / bus?", id: "Apakah saya di platform / bus yang benar?" },
          { en: "How many stops to...?", id: "Berapa halte ke...?" },
          { en: "Where do I catch the...?", id: "Di mana saya naik...?" },
          { en: "You can't miss it", id: "Anda pasti menemukannya" },
          { en: "Tap your card / phone", id: "Tempelkan kartu / ponsel Anda" },
          { en: "It runs every ___ minutes", id: "Datang setiap ___ menit" },
        ]} />
        <CulturalNote>
          <strong>Transit Cards &amp; Apps:</strong> Most major US cities have rechargeable transit cards (e.g., MetroCard in NYC, CharlieCard in Boston, Clipper in San Francisco). Google Maps and Apple Maps both have excellent real-time public transit directions. Many cities now accept contactless bank card payments directly, so you may not even need a dedicated transit card.
        </CulturalNote>
        <PronunciationTip word="platform" ipa="ˈplæt.fɔːrm" tip="PLAT-form — flat 'a' as in 'cat'" />
        <PronunciationTip word="turnstile" ipa="ˈtɜːrn.staɪl" tip="TURN-stile — like 'turn' + 'style'" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="Excuse me, am I on the right ___ for the uptown train?"
          options={["platform", "track", "lane", "stand"]}
          answer="platform"
          explanation="'Platform' = peron — area di mana penumpang menunggu kereta"
        />
        <FillInBlank
          sentence="The bus ___ every 15 minutes during rush hour."
          options={["runs", "goes", "comes", "travels"]}
          answer="runs"
          explanation="'The bus runs' = bus beroperasi/berjalan — 'runs' paling natural untuk transportasi umum"
        />
        <ExpressionMeter
          formal={["Could you direct me to the correct platform for the uptown service?", "What is the frequency of service on this route?", "Does this service accept contactless payment?"]}
          informal={["Is this the right train?", "How many stops til Grand Central?", "Can I tap my card here?"]}
        />
      </div>
    ),
  },

  // ─── Day 32: Parent-Teacher Conference ──────────────────────
  {
    id: 32,
    day: 32,
    title: '👨‍👩‍👧 Parent-Teacher Conference',
    category: 'Academic',
    difficulty: 'Advanced',
    color: 'emerald',
    body: (
      <div>
        <ParentTeacherScene />
        <ConversationCard
          speakers={{ A: 'Parent', B: 'Teacher' }}
          situation="A scheduled parent-teacher conference about a student's progress"
          lines={[
            { speaker: 'B', en: "Mr. and Mrs. Santoso, thank you for coming in. I've been looking forward to connecting with you about Dara's progress this semester.", id: "Bapak dan Ibu Santoso, terima kasih sudah datang. Saya sudah ingin berbicara dengan Anda tentang kemajuan Dara semester ini.", note: '"Looking forward to connecting" = sangat formal, menunjukkan niat baik' },
            { speaker: 'A', en: "Of course, thank you for having us. We're eager to hear how she's been doing.", id: "Tentu, terima kasih sudah mengundang kami. Kami sangat ingin mendengar bagaimana perkembangannya." },
            { speaker: 'B', en: "Overall, Dara is performing very well. Her GPA is 3.85, which places her in the top 10% of the class. She's particularly strong in mathematics and science.", id: "Secara keseluruhan, Dara berkinerja sangat baik. IPK-nya 3,85, yang menempatkannya di 10% teratas kelas. Dia sangat kuat dalam matematika dan sains." },
            { speaker: 'A', en: "That's wonderful to hear. Are there any areas where she could improve?", id: "Itu sangat menyenangkan untuk didengar. Apakah ada bidang yang bisa dia tingkatkan?", note: 'Pertanyaan yang bagus — menunjukkan Anda terlibat dan proaktif' },
            { speaker: 'B', en: "Yes, we've noticed that she's hesitant to participate verbally in class discussions. She has great ideas when she writes, but holding back in group settings is limiting her leadership potential.", id: "Ya, kami memperhatikan bahwa dia ragu-ragu untuk berpartisipasi secara verbal dalam diskusi kelas. Dia punya ide-ide bagus saat menulis, tetapi menahan diri dalam setting kelompok membatasi potensi kepemimpinannya.", note: '"Holding back" = menahan diri' },
            { speaker: 'A', en: "I think she's a bit shy. Is there anything we can encourage at home to help with that?", id: "Saya pikir dia agak pemalu. Apakah ada yang bisa kami dorong di rumah untuk membantu hal itu?" },
            { speaker: 'B', en: "Absolutely. Encouraging her to express her opinions at the dinner table, join a debate club, or even practice presenting to family members can build real confidence over time.", id: "Tentu. Mendorongnya untuk mengungkapkan pendapatnya di meja makan, bergabung dengan klub debat, atau bahkan berlatih presentasi di depan anggota keluarga dapat membangun kepercayaan diri yang nyata seiring waktu." },
            { speaker: 'A', en: "That's very practical advice, thank you. Is her homework submission rate on track?", id: "Saran yang sangat praktis, terima kasih. Apakah tingkat pengumpulan PR-nya tepat waktu?", note: '"On track" = sesuai jadwal/rencana' },
            { speaker: 'B', en: "Excellent question. Dara submits 97% of assignments on time — only two late submissions this semester, both with valid reasons. She's very responsible.", id: "Pertanyaan yang bagus. Dara mengumpulkan 97% tugas tepat waktu — hanya dua keterlambatan semester ini, keduanya dengan alasan yang valid. Dia sangat bertanggung jawab." },
            { speaker: 'A', en: "We're very proud of her. Is there anything specific we should watch out for in the second half of the year?", id: "Kami sangat bangga padanya. Apakah ada yang harus kami perhatikan secara khusus di paruh kedua tahun ini?" },
            { speaker: 'B', en: "The semester project in April is a major component — it counts for 30% of her final grade. Making sure she starts early and doesn't procrastinate will be key.", id: "Proyek semester di bulan April adalah komponen utama — berkontribusi 30% dari nilai akhirnya. Memastikan dia mulai lebih awal dan tidak menunda-nunda akan sangat penting.", note: '"Procrastinate" = menunda-nunda pekerjaan' },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'Parent', B: 'Teacher' }}
          situation="Discussing additional support options"
          lines={[
            { speaker: 'A', en: "Does the school offer any tutoring or enrichment programs that might help her?", id: "Apakah sekolah menawarkan program les atau pengayaan yang bisa membantu dia?" },
            { speaker: 'B', en: "Yes, we have peer tutoring on Tuesdays and Thursdays. For a student at Dara's level, I'd actually recommend the Advanced Academic Track — she's eligible based on her test scores.", id: "Ya, kami memiliki peer tutoring setiap Selasa dan Kamis. Untuk siswa di level Dara, saya sebenarnya merekomendasikan Advanced Academic Track — dia memenuhi syarat berdasarkan nilai tesnya.", note: '"Eligible" = memenuhi syarat / berhak' },
            { speaker: 'A', en: "We'll definitely look into that. Thank you so much for your time and for the thorough feedback, Ms. Parker.", id: "Kami pasti akan mempertimbangkannya. Terima kasih banyak atas waktu dan umpan balik yang menyeluruh, Bu Parker." },
            { speaker: 'B', en: "My pleasure! Feel free to email me anytime if you have questions. Dara is a real joy to teach.", id: "Dengan senang hati! Jangan ragu untuk mengirim email kapan saja jika ada pertanyaan. Dara sangat menyenangkan untuk diajarkan." },
          ]}
        />
        <KeyPhrasesCard title="Parent-Teacher Conference Phrases" color="emerald" phrases={[
          { en: "She's performing very well / on track", id: "Dia berkinerja sangat baik / sesuai jalur" },
          { en: "Hesitant to participate verbally", id: "Ragu-ragu berpartisipasi secara verbal" },
          { en: "Building confidence over time", id: "Membangun kepercayaan diri seiring waktu" },
          { en: "She's eligible for / qualified for...", id: "Dia memenuhi syarat untuk..." },
          { en: "Don't procrastinate / start early", id: "Jangan menunda / mulai lebih awal" },
          { en: "Feel free to email me anytime", id: "Jangan ragu email saya kapan saja" },
        ]} />
        <CulturalNote>
          <strong>Parent-Teacher Conferences in the US:</strong> These are typically held twice a year — once in autumn and once in spring. They usually last 10–20 minutes per family and are scheduled by appointment. Parents are expected to actively participate and ask questions. Bring a list of your concerns beforehand. Teachers appreciate parents who are engaged but respectful of the scheduled time.
        </CulturalNote>
        <PronunciationTip word="procrastinate" ipa="prəˈkræs.tɪ.neɪt" tip="pro-KRAS-ti-nayt — stress on second syllable" />
        <PronunciationTip word="eligible" ipa="ˈɛl.ɪ.dʒɪ.bəl" tip="EL-i-ji-bul — stress on first syllable" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="She tends to ___ back in group discussions even though her ideas are excellent."
          options={["hold", "pull", "keep", "step"]}
          answer="hold"
          explanation="'Hold back' = menahan diri, tidak mau berpartisipasi — phrasal verb yang penting"
        />
        <FillInBlank
          sentence="The semester project ___ for 30% of the final grade."
          options={["counts", "accounts", "stands", "adds"]}
          answer="counts"
          explanation="'Count for X%' = berkontribusi X% dari total nilai — sangat umum dalam konteks akademik"
        />
        <ExpressionMeter
          formal={["Could you elaborate on the areas where further academic development is recommended?", "We appreciate your comprehensive assessment of our daughter's progress.", "What benchmarks should we monitor leading up to the semester project?"]}
          informal={["How is she doing overall?", "Is there anything we should work on at home?", "She's a bit shy — any tips?"]}
        />
      </div>
    ),
  },

  // ─── Day 33: Wedding / Formal Event ─────────────────────────
  {
    id: 33,
    day: 33,
    title: '💍 At a Wedding / Formal Event',
    category: 'Entertainment',
    difficulty: 'Intermediate',
    color: 'rose',
    body: (
      <div>
        <WeddingScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'Guest', C: 'Host' }}
          situation="Attending a colleague's wedding reception"
          lines={[
            { speaker: 'C', en: "Andi! I'm so glad you could make it! You look wonderful!", id: "Andi! Saya sangat senang kamu bisa hadir! Kamu terlihat luar biasa!", note: '"Make it" = berhasil hadir / datang' },
            { speaker: 'A', en: "Congratulations, David! You and Sarah look absolutely radiant. The venue is stunning — did you choose it yourselves?", id: "Selamat, David! Kamu dan Sarah terlihat sangat bersinar. Tempatnya memukau — apakah kalian memilihnya sendiri?", note: '"Radiant" = bersinar, tampak bahagia — kata yang tepat untuk pernikahan' },
            { speaker: 'C', en: "Sarah fell in love with it the moment she walked in! Please make yourself comfortable and enjoy the cocktail hour. Dinner starts at 7.", id: "Sarah langsung jatuh cinta saat pertama kali masuk! Silakan santai dan nikmati cocktail hour. Makan malam mulai jam 7.", note: '"Cocktail hour" = jam sebelum makan malam resmi, saat tamu minum dan berkenalan' },
            { speaker: 'A', en: "Thank you! We brought a small gift — I hope you enjoy it. Wishing you both a lifetime of happiness.", id: "Terima kasih! Kami membawa hadiah kecil — semoga kalian menyukainya. Semoga kalian berdua bahagia seumur hidup.", note: '"A lifetime of happiness" = ucapan pernikahan yang sangat umum' },
            { speaker: 'B', en: "Hi! Are you a friend of the bride or the groom?", id: "Hai! Apakah Anda teman mempelai wanita atau pria?", note: '"Bride" = mempelai wanita. "Groom" = mempelai pria' },
            { speaker: 'A', en: "I'm a colleague of David's from work. We've been on the same team for three years. And you?", id: "Saya rekan kerja David. Kami satu tim selama tiga tahun. Anda?" },
            { speaker: 'B', en: "I'm Sarah's cousin, visiting from Melbourne, Australia. It's my first time in the States!", id: "Saya sepupu Sarah, datang dari Melbourne, Australia. Ini pertama kali saya di Amerika!" },
            { speaker: 'A', en: "Oh, welcome! What do you think of the city so far?", id: "Oh, selamat datang! Bagaimana pendapat Anda tentang kota ini sejauh ini?" },
            { speaker: 'B', en: "It's incredible — so much energy! The skyline at night is breathtaking.", id: "Luar biasa — sangat dinamis! Pemandangan langit malam sangat menakjubkan.", note: '"Breathtaking" = sangat indah sampai membuat tertegun' },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Guest' }}
          situation="During the wedding speeches and dinner"
          lines={[
            { speaker: 'B', en: "The best man's speech was hilarious! I was in stitches the whole time.", id: "Pidato best man-nya sangat lucu! Saya tertawa terbahak-bahak sepanjang waktu.", note: '"In stitches" = tertawa sangat keras (idiom)' },
            { speaker: 'A', en: "I know! And the maid of honor's speech was so heartfelt — I nearly teared up.", id: "Saya tahu! Dan pidato pengiring pengantin wanita sangat tulus — saya hampir menangis.", note: '"Maid of honor" = pengiring pengantin wanita utama. "Teared up" = hampir menangis haru' },
            { speaker: 'B', en: "These two are such a great couple. Shall we raise a toast? To David and Sarah!", id: "Pasangan yang luar biasa. Ayo kita angkat gelas? Untuk David dan Sarah!", note: '"Raise a toast" = mengangkat gelas untuk memberikan ucapan selamat' },
            { speaker: 'A', en: "To David and Sarah — may your love grow stronger every year!", id: "Untuk David dan Sarah — semoga cinta kalian semakin kuat setiap tahunnya!" },
            { speaker: 'B', en: "Are you staying for the dancing later? The DJ playlist looks amazing.", id: "Apakah Anda tetap untuk menari nanti? Playlist DJ-nya terlihat luar biasa." },
            { speaker: 'A', en: "Absolutely! I wouldn't miss the first dance. It's the best part of any wedding, I think.", id: "Tentu! Saya tidak akan melewatkan tari pertama. Itu bagian terbaik dari setiap pernikahan, menurut saya.", note: '"First dance" = tarian pertama pengantin — tradisi pernikahan Barat' },
          ]}
        />
        <KeyPhrasesCard title="Wedding & Formal Event Phrases" color="rose" phrases={[
          { en: "Congratulations! You look radiant!", id: "Selamat! Anda terlihat sangat bersinar!" },
          { en: "Bride / Groom / Best man / Maid of honor", id: "Mempelai wanita/pria / pengiring pria/wanita utama" },
          { en: "Shall we raise a toast?", id: "Ayo kita angkat gelas?" },
          { en: "In stitches / Teared up", id: "Tertawa terbahak / hampir menangis haru" },
          { en: "A lifetime of happiness", id: "Kebahagiaan seumur hidup" },
          { en: "Breathtaking / Stunning venue", id: "Tempat yang menakjubkan" },
        ]} />
        <CulturalNote>
          <strong>Wedding Customs in Western Culture:</strong> Western weddings typically include a ceremony (religious or civil), followed by a cocktail hour and a dinner reception. Guests are expected to RSVP in advance. A wedding gift (often from a registry the couple has created) is customary. The best man and maid of honor traditionally give speeches. Formal attire is usually specified on the invitation — "black tie" means tuxedo/evening gown; "cocktail attire" means smart semi-formal.
        </CulturalNote>
        <PronunciationTip word="congratulations" ipa="kənˌɡrætʃ.uˈleɪ.ʃənz" tip="con-GRATCH-yoo-LAY-shunz — stress on 4th syllable" />
        <PronunciationTip word="breathtaking" ipa="ˈbrɛθ.teɪ.kɪŋ" tip="BRETH-tay-king — 'breath' + 'taking'" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="I'm so glad you could ___ it to the wedding!"
          options={["make", "come", "get", "arrive"]}
          answer="make"
          explanation="'Make it' = berhasil hadir — phrasal verb yang sangat umum untuk menghadiri suatu acara"
        />
        <FillInBlank
          sentence="The best man's speech was so funny — I was in ___!"
          options={["stitches", "tears", "pieces", "knots"]}
          answer="stitches"
          explanation="'In stitches' = tertawa terbahak-bahak — idiom yang sangat populer dalam bahasa Inggris percakapan"
        />
        <ExpressionMeter
          formal={["Congratulations on your nuptials. The ceremony was truly beautiful.", "I extend my warmest wishes for your life together.", "Shall we raise a toast to the happy couple?"]}
          informal={["Congrats! You guys look amazing!", "That speech was hilarious — I was dying!", "Are you staying for the party after?"]}
        />
      </div>
    ),
  },

  // ─── Day 34: Moving to a New City ───────────────────────────
  {
    id: 34,
    day: 34,
    title: '🚚 Moving to a New City',
    category: 'Daily Life',
    difficulty: 'Intermediate',
    color: 'emerald',
    body: (
      <div>
        <MovingCityScene />
        <ConversationCard
          speakers={{ A: 'You', B: 'New Neighbor' }}
          situation="Moving boxes into your new apartment when your neighbor comes by"
          lines={[
            { speaker: 'B', en: "Hey! Welcome to the building! I'm Priya — I live right next door in 4B.", id: "Hei! Selamat datang di gedung ini! Saya Priya — saya tinggal tepat di sebelah di 4B.", note: '"Right next door" = tepat di sebelah' },
            { speaker: 'A', en: "Oh hi! I'm Andi. So nice to meet you! Sorry for all the noise with the boxes — we're almost done.", id: "Oh hei! Saya Andi. Senang bertemu! Maaf atas keramaian dengan kotak-kotak ini — kami hampir selesai.", note: 'Sopan untuk minta maaf atas gangguan saat pindahan' },
            { speaker: 'B', en: "No worries at all! Moving is always a bit chaotic. Did you come from far?", id: "Tidak masalah sama sekali! Pindahan selalu sedikit kacau. Anda datang dari jauh?" },
            { speaker: 'A', en: "From Seattle, actually. I just started a new job at a tech firm downtown. Still getting my bearings around the city.", id: "Dari Seattle, sebenarnya. Saya baru saja mulai pekerjaan baru di perusahaan teknologi di pusat kota. Masih berusaha memahami kota ini.", note: '"Getting my bearings" = berusaha memahami situasi/lokasi baru' },
            { speaker: 'B', en: "Oh, that's exciting! Seattle is beautiful — quite a change coming here. What neighborhood do you want to explore first?", id: "Oh, itu menarik! Seattle indah — cukup berbeda datang ke sini. Lingkungan apa yang ingin Anda jelajahi pertama?" },
            { speaker: 'A', en: "Honestly, I have no idea where to start. Do you have any local recommendations? Good coffee shop, grocery store, that kind of thing?", id: "Jujur saja, saya tidak tahu harus mulai dari mana. Apakah Anda punya rekomendasi lokal? Kedai kopi yang bagus, toko kelontong, dan sejenisnya?", note: '"That kind of thing" = dan sejenisnya (informal)' },
            { speaker: 'B', en: "Absolutely! There's a great independent coffee shop called Blossom on Oak Street — two blocks east. For groceries, Trader Joe's is the cheapest nearby. And if you need anything in a pinch, there's a 24-hour corner store on the ground floor of our building.", id: "Tentu! Ada kedai kopi independen yang bagus bernama Blossom di Oak Street — dua blok ke timur. Untuk kebutuhan sehari-hari, Trader Joe's yang terdekat paling murah. Dan jika butuh sesuatu mendesak, ada toko serba ada 24 jam di lantai dasar gedung kita.", note: '"In a pinch" = dalam keadaan mendesak/darurat' },
            { speaker: 'A', en: "This is so helpful, thank you! I've been stressing about settling in, but it already feels a bit more manageable.", id: "Ini sangat membantu, terima kasih! Saya sudah stres tentang menyesuaikan diri, tapi sekarang sudah terasa sedikit lebih terkelola.", note: '"Settling in" = proses menyesuaikan diri di tempat baru' },
            { speaker: 'B', en: "It gets easier, I promise! I moved here from Mumbai two years ago and now it feels like home. If you ever need anything, just knock!", id: "Akan semakin mudah, saya janji! Saya pindah ke sini dari Mumbai dua tahun lalu dan sekarang terasa seperti rumah. Jika Anda butuh apa pun, ketuk saja pintunya!" },
          ]}
        />
        <ConversationCard
          speakers={{ A: 'You', B: 'Building Manager' }}
          situation="Introducing yourself to the building manager on move-in day"
          lines={[
            { speaker: 'A', en: "Hi, are you the building manager? I'm moving into Apartment 4A today.", id: "Hei, apakah Anda manajer gedung? Saya pindah ke Apartemen 4A hari ini." },
            { speaker: 'B', en: "Yes! Welcome! I'm Tom. Here are your two sets of keys — one for the apartment and one for the mailbox. The laundry room is in the basement, and there's a package room next to it.", id: "Ya! Selamat datang! Saya Tom. Ini dua set kunci Anda — satu untuk apartemen dan satu untuk kotak surat. Ruang laundry ada di basement, dan ada ruang paket di sebelahnya.", note: '"Package room" = ruang penyimpanan paket kiriman' },
            { speaker: 'A', en: "Perfect. Is there a parking spot included in the lease?", id: "Sempurna. Apakah ada tempat parkir yang termasuk dalam sewa?", note: '"Included in the lease" = termasuk dalam kontrak sewa' },
            { speaker: 'B', en: "Parking is not included — it's $120 per month extra. There's also street parking available free after 6 PM on weekdays.", id: "Parkir tidak termasuk — $120 per bulan tambahan. Ada juga parkir jalan gratis setelah pukul 6 sore pada hari kerja." },
            { speaker: 'A', en: "Good to know. How do I report a maintenance issue if something breaks?", id: "Bagus untuk diketahui. Bagaimana cara melaporkan masalah pemeliharaan jika ada yang rusak?", note: '"Maintenance issue" = masalah perbaikan/pemeliharaan' },
            { speaker: 'B', en: "Use the BuildingLink app — just log in with your unit number and email. Most requests are addressed within 48 hours.", id: "Gunakan aplikasi BuildingLink — masuk dengan nomor unit dan email Anda. Sebagian besar permintaan ditangani dalam 48 jam." },
            { speaker: 'A', en: "Great. One last thing — what's the policy on guests staying overnight?", id: "Bagus. Satu hal lagi — apa kebijakan tentang tamu yang menginap?" },
            { speaker: 'B', en: "Guests can stay up to two weeks. Anything longer needs to be cleared with management. It's all in the tenant handbook I'll email you.", id: "Tamu dapat menginap hingga dua minggu. Lebih lama dari itu harus diklarifikasi dengan manajemen. Semua ada di buku panduan penyewa yang akan saya email.", note: '"Cleared with management" = mendapat persetujuan dari manajemen' },
          ]}
        />
        <KeyPhrasesCard title="Moving & New Home Phrases" color="emerald" phrases={[
          { en: "Still getting my bearings", id: "Masih berusaha memahami situasi baru" },
          { en: "Settling in / Getting settled", id: "Proses menyesuaikan diri di tempat baru" },
          { en: "In a pinch / In an emergency", id: "Dalam keadaan mendesak" },
          { en: "Included in the lease", id: "Termasuk dalam kontrak sewa" },
          { en: "Report a maintenance issue", id: "Melaporkan masalah pemeliharaan" },
          { en: "Cleared with management", id: "Mendapat persetujuan manajemen" },
        ]} />
        <CulturalNote>
          <strong>Moving Culture in the US:</strong> When moving into a new apartment, always document the condition of the unit with photos on move-in day and email them to your landlord. This protects your security deposit when you eventually move out. It is also customary (though not required) to introduce yourself to immediate neighbors — building a good relationship makes daily life much smoother.
        </CulturalNote>
        <PronunciationTip word="bearings" ipa="ˈbɛər.ɪŋz" tip="BAIR-ingz — rhymes with 'airings'" />
        <PronunciationTip word="maintenance" ipa="ˈmeɪn.tɪ.nəns" tip="MAYN-ti-nuns — three syllables, stress on first" />
        <h4 className="font-bold text-sm text-gray-800 mt-4 mb-2">🧩 Practice</h4>
        <FillInBlank
          sentence="I just moved here and I'm still getting my ___ in the city."
          options={["bearings", "footing", "balance", "start"]}
          answer="bearings"
          explanation="'Getting my bearings' = berusaha memahami dan beradaptasi dengan lingkungan baru — idiom yang sangat umum"
        />
        <FillInBlank
          sentence="Is parking ___ in the monthly rent, or is it extra?"
          options={["included", "covered", "contained", "added"]}
          answer="included"
          explanation="'Included in the rent/lease' = sudah termasuk dalam biaya sewa — collocasi yang sangat penting saat sewa apartemen"
        />
        <ExpressionMeter
          formal={["I would like to report a maintenance issue regarding the heating unit in my apartment.", "Could you clarify the guest policy as outlined in the tenancy agreement?", "I would appreciate a written confirmation of the parking arrangement."]}
          informal={["I just moved in — any tips for the neighborhood?", "Is parking included or do I pay extra?", "Who do I call if something breaks?"]}
        />
      </div>
    ),
  },

]
