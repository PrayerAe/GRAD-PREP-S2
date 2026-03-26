import { SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank, CulturalNote, PronunciationTip, ExpressionMeter } from './conversationData'

// Day 53: Airport Security & Immigration
const Day53Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="200" height="140" fill="#e0f2fe" />
    {/* Floor */}
    <rect x="0" y="110" width="200" height="30" fill="#b0c4de" />
    {/* Security counter */}
    <rect x="60" y="70" width="80" height="40" fill="#0e7490" rx="4" />
    <rect x="65" y="75" width="70" height="20" fill="#06b6d4" rx="2" />
    {/* Computer on counter */}
    <rect x="100" y="60" width="22" height="15" fill="#1e293b" rx="2" />
    <rect x="103" y="62" width="16" height="10" fill="#38bdf8" />
    <rect x="108" y="75" width="6" height="3" fill="#334155" />
    {/* Officer */}
    <circle cx="130" cy="52" r="9" fill="#fcd34d" />
    <rect x="122" y="61" width="16" height="22" fill="#0e7490" rx="2" />
    {/* Officer hat */}
    <rect x="122" y="44" width="16" height="5" fill="#0e7490" rx="2" />
    <rect x="119" y="48" width="22" height="3" fill="#0e7490" rx="1" />
    {/* Traveler */}
    <circle cx="50" cy="52" r="9" fill="#fde68a" />
    <rect x="42" y="61" width="16" height="22" fill="#7c3aed" rx="2" />
    {/* Suitcase */}
    <rect x="30" y="90" width="18" height="14" fill="#7c3aed" rx="2" />
    <rect x="36" y="88" width="6" height="4" fill="#5b21b6" rx="1" />
    <line x1="30" y1="97" x2="48" y2="97" stroke="#5b21b6" strokeWidth="1" />
    {/* X-ray belt */}
    <rect x="0" y="95" width="55" height="8" fill="#64748b" rx="2" />
    <rect x="2" y="97" width="10" height="4" fill="#475569" />
    <rect x="15" y="97" width="10" height="4" fill="#475569" />
    {/* Passport */}
    <rect x="70" y="62" width="8" height="10" fill="#dc2626" rx="1" />
    {/* Sign overhead */}
    <rect x="30" y="15" width="140" height="22" fill="#0e7490" rx="4" />
    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="9" fontFamily="Arial" fontWeight="bold">IMMIGRATION CONTROL</text>
    {/* Rope barrier */}
    <line x1="20" y1="85" x2="60" y2="85" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
    <rect x="18" y="80" width="4" height="15" fill="#d97706" />
    <rect x="58" y="80" width="4" height="15" fill="#d97706" />
  </svg>
)

// Day 54: Babysitting / Childcare
const Day54Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - cozy room */}
    <rect width="200" height="140" fill="#fef9c3" />
    {/* Floor */}
    <rect x="0" y="105" width="200" height="35" fill="#fde68a" />
    {/* Wall decoration */}
    <circle cx="160" cy="30" r="12" fill="#fca5a5" />
    <text x="160" y="35" textAnchor="middle" fontSize="12">⭐</text>
    {/* Sofa */}
    <rect x="10" y="75" width="70" height="35" fill="#fb923c" rx="6" />
    <rect x="10" y="65" width="70" height="18" fill="#f97316" rx="4" />
    <rect x="10" y="65" width="12" height="45" fill="#ea580c" rx="4" />
    <rect x="68" y="65" width="12" height="45" fill="#ea580c" rx="4" />
    {/* Babysitter on sofa */}
    <circle cx="45" cy="57" r="9" fill="#fde68a" />
    <rect x="37" y="66" width="16" height="20" fill="#a78bfa" rx="2" />
    {/* Hair */}
    <ellipse cx="45" cy="50" rx="9" ry="6" fill="#92400e" />
    {/* Baby / toddler */}
    <circle cx="80" cy="90" r="7" fill="#fcd34d" />
    <rect x="74" y="97" width="12" height="12" fill="#86efac" rx="2" />
    {/* Toy blocks on floor */}
    <rect x="120" y="95" width="14" height="14" fill="#f87171" rx="2" />
    <text x="127" y="106" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A</text>
    <rect x="138" y="98" width="12" height="12" fill="#60a5fa" rx="2" />
    <text x="144" y="108" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">B</text>
    <rect x="154" y="96" width="13" height="13" fill="#4ade80" rx="2" />
    <text x="161" y="106" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">C</text>
    {/* Bookshelf */}
    <rect x="160" y="55" width="35" height="50" fill="#a16207" rx="2" />
    <rect x="163" y="58" width="8" height="14" fill="#ef4444" />
    <rect x="173" y="58" width="8" height="14" fill="#3b82f6" />
    <rect x="163" y="75" width="8" height="14" fill="#22c55e" />
    <rect x="173" y="75" width="8" height="14" fill="#f59e0b" />
    {/* Stuffed animal */}
    <circle cx="100" cy="93" r="6" fill="#c084fc" />
    <circle cx="97" cy="88" r="3" fill="#c084fc" />
    <circle cx="103" cy="88" r="3" fill="#c084fc" />
    {/* Window */}
    <rect x="0" y="20" width="50" height="40" fill="#bae6fd" rx="2" />
    <line x1="25" y1="20" x2="25" y2="60" stroke="#7dd3fc" strokeWidth="1" />
    <line x1="0" y1="40" x2="50" y2="40" stroke="#7dd3fc" strokeWidth="1" />
    {/* Sun outside */}
    <circle cx="15" cy="32" r="6" fill="#fbbf24" />
  </svg>
)

// Day 55: Thesis Defense / Dissertation
const Day55Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="200" height="140" fill="#ecfdf5" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#d1fae5" />
    {/* Presentation screen */}
    <rect x="50" y="10" width="100" height="65" fill="#1e3a8a" rx="4" />
    <rect x="54" y="14" width="92" height="57" fill="#eff6ff" rx="2" />
    {/* Chart on screen */}
    <line x1="62" y1="65" x2="62" y2="22" stroke="#94a3b8" strokeWidth="1" />
    <line x1="62" y1="65" x2="138" y2="65" stroke="#94a3b8" strokeWidth="1" />
    <rect x="68" y="50" width="8" height="15" fill="#3b82f6" />
    <rect x="80" y="40" width="8" height="25" fill="#10b981" />
    <rect x="92" y="32" width="8" height="33" fill="#f59e0b" />
    <rect x="104" y="42" width="8" height="23" fill="#ef4444" />
    <rect x="116" y="28" width="8" height="37" fill="#8b5cf6" />
    <text x="100" y="20" textAnchor="middle" fill="#1e3a8a" fontSize="6" fontWeight="bold">RESEARCH FINDINGS</text>
    {/* Presenter */}
    <circle cx="35" cy="85" r="9" fill="#fde68a" />
    <rect x="27" y="94" width="16" height="22" fill="#1e3a8a" rx="2" />
    {/* Pointer stick */}
    <line x1="43" y1="90" x2="55" y2="60" stroke="#64748b" strokeWidth="1.5" />
    {/* Committee panel - table */}
    <rect x="100" y="95" width="90" height="8" fill="#854d0e" rx="2" />
    {/* Committee members */}
    <circle cx="115" cy="86" r="7" fill="#fcd34d" />
    <rect x="109" y="93" width="12" height="15" fill="#374151" rx="1" />
    <circle cx="140" cy="84" r="7" fill="#fca5a5" />
    <rect x="134" y="91" width="12" height="15" fill="#374151" rx="1" />
    <circle cx="165" cy="86" r="7" fill="#a7f3d0" />
    <rect x="159" y="93" width="12" height="15" fill="#374151" rx="1" />
    {/* Name placards on table */}
    <rect x="108" y="96" width="16" height="5" fill="#e5e7eb" rx="1" />
    <rect x="133" y="96" width="16" height="5" fill="#e5e7eb" rx="1" />
    <rect x="158" y="96" width="16" height="5" fill="#e5e7eb" rx="1" />
    {/* Podium */}
    <rect x="22" y="103" width="28" height="12" fill="#92400e" rx="2" />
    <rect x="26" y="100" width="20" height="5" fill="#a16207" rx="1" />
    {/* Papers */}
    <rect x="28" y="101" width="14" height="10" fill="white" rx="1" />
    <line x1="30" y1="104" x2="40" y2="104" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="30" y1="107" x2="40" y2="107" stroke="#94a3b8" strokeWidth="0.5" />
  </svg>
)

// Day 56: Salary Negotiation
const Day56Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - office */}
    <rect width="200" height="140" fill="#f1f5f9" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#e2e8f0" />
    {/* Large window */}
    <rect x="130" y="10" width="65" height="80" fill="#bae6fd" rx="2" />
    <line x1="162" y1="10" x2="162" y2="90" stroke="#7dd3fc" strokeWidth="1" />
    <line x1="130" y1="50" x2="195" y2="50" stroke="#7dd3fc" strokeWidth="1" />
    {/* City skyline in window */}
    <rect x="133" y="55" width="10" height="35" fill="#475569" />
    <rect x="146" y="45" width="12" height="45" fill="#334155" />
    <rect x="161" y="60" width="8" height="30" fill="#475569" />
    <rect x="172" y="50" width="10" height="40" fill="#334155" />
    <rect x="185" y="58" width="8" height="32" fill="#475569" />
    {/* Conference table */}
    <rect x="30" y="75" width="120" height="40" fill="#92400e" rx="4" />
    <rect x="35" y="79" width="110" height="32" fill="#a16207" rx="2" />
    {/* Documents on table */}
    <rect x="70" y="82" width="22" height="15" fill="white" rx="1" />
    <line x1="73" y1="86" x2="89" y2="86" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="73" y1="89" x2="89" y2="89" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="73" y1="92" x2="83" y2="92" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Dollar sign doc */}
    <rect x="95" y="80" width="20" height="18" fill="#dcfce7" rx="1" />
    <text x="105" y="93" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">$</text>
    {/* Candidate side */}
    <circle cx="35" cy="60" r="9" fill="#fde68a" />
    <rect x="27" y="69" width="16" height="22" fill="#1e3a8a" rx="2" />
    {/* Tie */}
    <polygon points="35,70 33,76 35,85 37,76" fill="#dc2626" />
    {/* HR Manager */}
    <circle cx="155" cy="60" r="9" fill="#fca5a5" />
    <rect x="147" y="69" width="16" height="22" fill="#374151" rx="2" />
    {/* Glasses */}
    <circle cx="152" cy="59" r="3" fill="none" stroke="#374151" strokeWidth="1" />
    <circle cx="158" cy="59" r="3" fill="none" stroke="#374151" strokeWidth="1" />
    <line x1="155" y1="59" x2="157" y2="59" stroke="#374151" strokeWidth="1" />
    {/* Speech bubble */}
    <rect x="40" y="38" width="55" height="18" fill="white" rx="6" stroke="#3b82f6" strokeWidth="1" />
    <polygon points="45,56 40,62 52,56" fill="white" stroke="#3b82f6" strokeWidth="1" />
    <text x="67" y="51" textAnchor="middle" fill="#1e3a8a" fontSize="6">I expect $85K</text>
    {/* Laptop on table */}
    <rect x="110" y="68" width="24" height="15" fill="#1e293b" rx="2" />
    <rect x="112" y="70" width="20" height="11" fill="#38bdf8" rx="1" />
    <rect x="108" y="83" width="28" height="3" fill="#334155" rx="1" />
  </svg>
)

// Day 57: Eye Doctor / Optometrist
const Day57Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - exam room */}
    <rect width="200" height="140" fill="#f0fdfa" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#ccfbf1" />
    {/* Eye chart on wall */}
    <rect x="75" y="5" width="50" height="80" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <text x="100" y="18" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">E</text>
    <text x="100" y="29" textAnchor="middle" fill="#1e293b" fontSize="9">FP</text>
    <text x="100" y="38" textAnchor="middle" fill="#1e293b" fontSize="7">TOZ</text>
    <text x="100" y="46" textAnchor="middle" fill="#1e293b" fontSize="6">LPED</text>
    <text x="100" y="53" textAnchor="middle" fill="#1e293b" fontSize="5">PECFD</text>
    <text x="100" y="59" textAnchor="middle" fill="#1e293b" fontSize="4">EDFCZP</text>
    <text x="100" y="65" textAnchor="middle" fill="#1e293b" fontSize="3.5">FELOPZD</text>
    <text x="100" y="71" textAnchor="middle" fill="#1e293b" fontSize="3">DEFPOTEC</text>
    {/* Chart title */}
    <text x="100" y="82" textAnchor="middle" fill="#94a3b8" fontSize="4">SNELLEN CHART</text>
    {/* Exam chair */}
    <rect x="130" y="85" width="50" height="30" fill="#0d9488" rx="4" />
    <rect x="155" y="70" width="25" height="20" fill="#0d9488" rx="4" />
    <rect x="175" y="55" width="10" height="35" fill="#0f766e" rx="2" />
    {/* Patient in chair */}
    <circle cx="148" cy="74" r="8" fill="#fde68a" />
    <rect x="141" y="82" width="14" height="18" fill="#a78bfa" rx="2" />
    {/* Trial lens frame on patient */}
    <circle cx="144" cy="74" r="4" fill="none" stroke="#374151" strokeWidth="1.5" />
    <circle cx="152" cy="74" r="4" fill="none" stroke="#374151" strokeWidth="1.5" />
    <line x1="148" y1="74" x2="150" y2="74" stroke="#374151" strokeWidth="1.5" />
    {/* Doctor */}
    <circle cx="45" cy="72" r="9" fill="#fca5a5" />
    <rect x="37" y="81" width="16" height="25" fill="#0d9488" rx="2" />
    {/* White coat */}
    <rect x="36" y="80" width="18" height="26" fill="white" rx="2" />
    <rect x="37" y="81" width="16" height="25" fill="#e2e8f0" rx="1" opacity="0.5" />
    {/* Ophthalmoscope */}
    <line x1="53" y1="85" x2="70" y2="78" stroke="#374151" strokeWidth="2" />
    <circle cx="70" cy="78" r="4" fill="#fbbf24" />
    {/* Instrument table */}
    <rect x="0" y="90" width="30" height="5" fill="#b45309" rx="1" />
    <rect x="8" y="70" width="2" height="25" fill="#92400e" />
    {/* Lens tools on table */}
    <circle cx="5" cy="88" r="3" fill="none" stroke="#374151" strokeWidth="1" />
    <circle cx="12" cy="88" r="3" fill="none" stroke="#374151" strokeWidth="1" />
    <circle cx="20" cy="88" r="3" fill="none" stroke="#374151" strokeWidth="1" />
  </svg>
)

// Day 58: Camping Trip
const Day58Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky background */}
    <rect width="200" height="100" fill="#1e3a5f" />
    {/* Ground */}
    <rect x="0" y="100" width="200" height="40" fill="#166534" />
    {/* Stars */}
    <circle cx="20" cy="15" r="1.5" fill="white" />
    <circle cx="45" cy="8" r="1" fill="white" />
    <circle cx="70" cy="20" r="1.5" fill="white" />
    <circle cx="95" cy="10" r="1" fill="white" />
    <circle cx="120" cy="18" r="1.5" fill="white" />
    <circle cx="150" cy="7" r="1" fill="white" />
    <circle cx="175" cy="15" r="1.5" fill="white" />
    <circle cx="30" cy="35" r="1" fill="white" />
    <circle cx="160" cy="30" r="1" fill="white" />
    {/* Moon */}
    <circle cx="170" cy="20" r="10" fill="#fef9c3" />
    <circle cx="175" cy="16" r="8" fill="#1e3a5f" />
    {/* Mountains */}
    <polygon points="0,100 40,45 80,100" fill="#1a4731" />
    <polygon points="50,100 100,38 150,100" fill="#15803d" />
    <polygon points="120,100 165,50 200,100" fill="#1a4731" />
    {/* Tent */}
    <polygon points="70,100 100,60 130,100" fill="#dc2626" />
    <polygon points="75,100 100,63 125,100" fill="#ef4444" />
    <rect x="88" y="85" width="24" height="15" fill="#1e293b" />
    {/* Tent door */}
    <polygon points="95,100 100,85 105,100" fill="#7f1d1d" />
    {/* Campfire */}
    <ellipse cx="55" cy="101" rx="10" ry="4" fill="#92400e" />
    {/* Logs */}
    <line x1="48" y1="100" x2="62" y2="103" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    <line x1="62" y1="100" x2="48" y2="103" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    {/* Fire */}
    <ellipse cx="55" cy="96" rx="5" ry="7" fill="#f97316" />
    <ellipse cx="52" cy="96" rx="3" ry="5" fill="#fbbf24" />
    <ellipse cx="58" cy="97" rx="3" ry="4" fill="#ef4444" />
    <ellipse cx="55" cy="94" rx="2" ry="4" fill="#fef08a" />
    {/* Campers around fire */}
    <circle cx="38" cy="96" r="7" fill="#fde68a" />
    <rect x="31" y="104" width="14" height="10" fill="#1d4ed8" rx="1" />
    <circle cx="72" cy="96" r="7" fill="#fcd34d" />
    <rect x="65" y="104" width="14" height="10" fill="#dc2626" rx="1" />
    {/* Marshmallow sticks */}
    <line x1="44" y1="98" x2="55" y2="93" stroke="#92400e" strokeWidth="1" />
    <circle cx="55" cy="92" r="2" fill="white" />
    <line x1="66" y1="98" x2="55" y2="93" stroke="#92400e" strokeWidth="1" />
    {/* Trees */}
    <polygon points="155,100 165,72 175,100" fill="#14532d" />
    <polygon points="160,100 168,78 176,100" fill="#166534" />
    <rect x="163" y="100" width="4" height="10" fill="#92400e" />
    {/* Backpacks */}
    <rect x="135" y="90" width="12" height="15" fill="#7c3aed" rx="2" />
    <rect x="137" y="88" width="8" height="5" fill="#6d28d9" rx="1" />
  </svg>
)

// Day 59: Home Insurance Claim
const Day59Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky - stormy */}
    <rect width="200" height="90" fill="#64748b" />
    {/* Dark storm clouds */}
    <ellipse cx="50" cy="30" rx="35" ry="20" fill="#374151" />
    <ellipse cx="80" cy="25" rx="30" ry="18" fill="#1f2937" />
    <ellipse cx="130" cy="28" rx="40" ry="22" fill="#374151" />
    <ellipse cx="170" cy="22" rx="30" ry="15" fill="#1f2937" />
    {/* Lightning */}
    <polyline points="100,45 95,60 102,60 96,78" fill="none" stroke="#fbbf24" strokeWidth="2" />
    {/* Ground */}
    <rect x="0" y="90" width="200" height="50" fill="#16a34a" />
    {/* Damaged house */}
    {/* House body */}
    <rect x="40" y="65" width="100" height="65" fill="#f5f5f4" />
    {/* Damaged roof */}
    <polygon points="30,65 100,20 170,65" fill="#b91c1c" />
    {/* Roof damage - missing section */}
    <polygon points="110,35 140,52 145,35" fill="#64748b" />
    {/* Broken window */}
    <rect x="55" y="80" width="22" height="18" fill="#bae6fd" rx="1" />
    <line x1="55" y1="89" x2="77" y2="89" stroke="#94a3b8" strokeWidth="1" />
    <line x1="66" y1="80" x2="66" y2="98" stroke="#94a3b8" strokeWidth="1" />
    {/* Crack on window */}
    <line x1="66" y1="85" x2="72" y2="91" stroke="#374151" strokeWidth="1.5" />
    <line x1="72" y1="91" x2="76" y2="88" stroke="#374151" strokeWidth="1.5" />
    {/* Good window */}
    <rect x="103" y="80" width="22" height="18" fill="#bae6fd" rx="1" />
    <line x1="103" y1="89" x2="125" y2="89" stroke="#94a3b8" strokeWidth="1" />
    <line x1="114" y1="80" x2="114" y2="98" stroke="#94a3b8" strokeWidth="1" />
    {/* Door */}
    <rect x="78" y="100" width="24" height="30" fill="#92400e" rx="2" />
    <circle cx="98" cy="115" r="2" fill="#fbbf24" />
    {/* Fallen tree branch */}
    <line x1="155" y1="75" x2="110" y2="90" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
    <line x1="130" y1="83" x2="120" y2="75" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    {/* Insurance agent with clipboard */}
    <circle cx="172" cy="95" r="8" fill="#fde68a" />
    <rect x="165" y="103" width="14" height="20" fill="#1d4ed8" rx="2" />
    {/* Clipboard */}
    <rect x="176" y="100" width="14" height="18" fill="#f5f5f4" rx="1" stroke="#94a3b8" strokeWidth="1" />
    <rect x="181" y="98" width="4" height="4" fill="#374151" rx="1" />
    <line x1="178" y1="106" x2="188" y2="106" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="178" y1="109" x2="188" y2="109" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="178" y1="112" x2="185" y2="112" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Homeowner */}
    <circle cx="148" cy="95" r="8" fill="#fca5a5" />
    <rect x="141" y="103" width="14" height="20" fill="#7c3aed" rx="2" />
  </svg>
)

// Day 60: Language Exchange Meetup
const Day60Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - cafe */}
    <rect width="200" height="140" fill="#eff6ff" />
    {/* Floor */}
    <rect x="0" y="112" width="200" height="28" fill="#dbeafe" />
    {/* Cafe window */}
    <rect x="0" y="10" width="55" height="50" fill="#bae6fd" rx="2" />
    <line x1="27" y1="10" x2="27" y2="60" stroke="#7dd3fc" strokeWidth="1" />
    <line x1="0" y1="35" x2="55" y2="35" stroke="#7dd3fc" strokeWidth="1" />
    {/* Plants */}
    <ellipse cx="10" cy="30" rx="8" ry="10" fill="#22c55e" />
    <ellipse cx="18" cy="25" rx="7" ry="9" fill="#16a34a" />
    <rect x="12" y="55" width="4" height="10" fill="#92400e" />
    {/* Flags on wall */}
    <rect x="65" y="8" width="18" height="12" fill="#ef4444" rx="1" />
    <rect x="65" y="8" width="18" height="4" fill="#1e3a8a" />
    <rect x="65" y="16" width="18" height="4" fill="#ef4444" />
    <rect x="90" y="8" width="18" height="12" fill="#f59e0b" rx="1" />
    <circle cx="99" cy="14" r="4" fill="#ef4444" />
    <rect x="115" y="8" width="18" height="12" fill="#1e3a8a" rx="1" />
    <rect x="115" y="8" width="18" height="4" fill="white" />
    <rect x="115" y="16" width="18" height="4" fill="#ef4444" />
    <rect x="140" y="8" width="18" height="12" fill="#22c55e" rx="1" />
    <circle cx="149" cy="14" r="3" fill="#fbbf24" />
    {/* Round cafe table */}
    <ellipse cx="100" cy="98" rx="45" ry="12" fill="#92400e" />
    <ellipse cx="100" cy="95" rx="45" ry="12" fill="#a16207" />
    <rect x="95" y="107" width="10" height="15" fill="#78350f" />
    {/* Coffee cups on table */}
    <rect x="80" y="88" width="10" height="8" fill="white" rx="1" stroke="#94a3b8" strokeWidth="0.5" />
    <ellipse cx="85" cy="88" rx="5" ry="2" fill="#92400e" />
    <rect x="108" y="88" width="10" height="8" fill="white" rx="1" stroke="#94a3b8" strokeWidth="0.5" />
    <ellipse cx="113" cy="88" rx="5" ry="2" fill="#92400e" />
    {/* Person 1 - left */}
    <circle cx="55" cy="72" r="9" fill="#fde68a" />
    <rect x="47" y="81" width="16" height="22" fill="#3b82f6" rx="2" />
    {/* Speech bubble 1 */}
    <rect x="10" y="55" width="38" height="12" fill="white" rx="4" stroke="#3b82f6" strokeWidth="1" />
    <polygon points="30,67 26,73 34,67" fill="white" stroke="#3b82f6" strokeWidth="1" />
    <text x="29" y="64" textAnchor="middle" fill="#1e3a8a" fontSize="5">Bonjour!</text>
    {/* Person 2 - right */}
    <circle cx="145" cy="72" r="9" fill="#fca5a5" />
    <rect x="137" y="81" width="16" height="22" fill="#7c3aed" rx="2" />
    {/* Speech bubble 2 */}
    <rect x="150" y="52" width="42" height="12" fill="white" rx="4" stroke="#7c3aed" strokeWidth="1" />
    <polygon points="162,64 158,70 166,64" fill="white" stroke="#7c3aed" strokeWidth="1" />
    <text x="171" y="61" textAnchor="middle" fill="#5b21b6" fontSize="5">こんにちは!</text>
    {/* Person 3 - center back */}
    <circle cx="100" cy="65" r="8" fill="#a7f3d0" />
    <rect x="93" y="73" width="14" height="20" fill="#f97316" rx="2" />
    {/* Notebook */}
    <rect x="73" y="80" width="12" height="10" fill="#fef3c7" rx="1" stroke="#f59e0b" strokeWidth="0.5" />
    <line x1="75" y1="83" x2="83" y2="83" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="75" y1="86" x2="83" y2="86" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="75" y1="89" x2="80" y2="89" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Banner */}
    <rect x="55" y="22" width="90" height="16" fill="#1e3a8a" rx="3" />
    <text x="100" y="33" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">LANGUAGE EXCHANGE</text>
  </svg>
)

// Day 61: Food Truck Festival
const Day61Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky background */}
    <rect width="200" height="95" fill="#fef3c7" />
    {/* Ground */}
    <rect x="0" y="95" width="200" height="45" fill="#d97706" />
    {/* Pavement */}
    <rect x="0" y="105" width="200" height="35" fill="#e5e7eb" />
    {/* Sun */}
    <circle cx="175" cy="22" r="15" fill="#fbbf24" />
    <line x1="175" y1="3" x2="175" y2="0" stroke="#fbbf24" strokeWidth="2" />
    <line x1="193" y1="22" x2="197" y2="22" stroke="#fbbf24" strokeWidth="2" />
    <line x1="188" y1="9" x2="191" y2="6" stroke="#fbbf24" strokeWidth="2" />
    <line x1="188" y1="35" x2="191" y2="38" stroke="#fbbf24" strokeWidth="2" />
    {/* Food Truck 1 - Tacos */}
    <rect x="5" y="65" width="70" height="38" fill="#ef4444" rx="4" />
    <rect x="5" y="55" width="70" height="16" fill="#dc2626" rx="4" />
    {/* Truck wheels */}
    <circle cx="22" cy="103" r="8" fill="#1e293b" />
    <circle cx="22" cy="103" r="4" fill="#94a3b8" />
    <circle cx="58" cy="103" r="8" fill="#1e293b" />
    <circle cx="58" cy="103" r="4" fill="#94a3b8" />
    {/* Truck window/serving area */}
    <rect x="15" y="67" width="40" height="22" fill="#fef9c3" rx="2" />
    {/* Menu board */}
    <rect x="20" y="56" width="30" height="10" fill="#7f1d1d" rx="1" />
    <text x="35" y="64" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="bold">TACOS</text>
    {/* Taco illustration */}
    <ellipse cx="35" cy="75" rx="12" ry="8" fill="#fbbf24" />
    <ellipse cx="35" cy="75" rx="10" ry="5" fill="#fef9c3" />
    <rect x="26" y="72" width="18" height="6" fill="#16a34a" />
    <rect x="28" y="73" width="5" height="4" fill="#ef4444" />
    <rect x="34" y="73" width="5" height="4" fill="#f97316" />
    {/* Food Truck 2 - Burgers */}
    <rect x="85" y="62" width="70" height="38" fill="#3b82f6" rx="4" />
    <rect x="85" y="52" width="70" height="16" fill="#1d4ed8" rx="4" />
    {/* Truck wheels */}
    <circle cx="102" cy="100" r="8" fill="#1e293b" />
    <circle cx="102" cy="100" r="4" fill="#94a3b8" />
    <circle cx="138" cy="100" r="8" fill="#1e293b" />
    <circle cx="138" cy="100" r="4" fill="#94a3b8" />
    {/* Truck window */}
    <rect x="95" y="64" width="42" height="22" fill="#dbeafe" rx="2" />
    <rect x="100" y="53" width="32" height="10" fill="#1e3a8a" rx="1" />
    <text x="116" y="61" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="bold">BURGERS</text>
    {/* Burger illustration */}
    <ellipse cx="116" cy="71" rx="11" ry="5" fill="#f59e0b" />
    <ellipse cx="116" cy="73" rx="10" ry="3" fill="#16a34a" />
    <ellipse cx="116" cy="76" rx="10" ry="3" fill="#ef4444" />
    <ellipse cx="116" cy="79" rx="11" ry="5" fill="#f59e0b" />
    {/* Customers */}
    <circle cx="75" cy="84" r="7" fill="#fde68a" />
    <rect x="68" y="91" width="14" height="20" fill="#7c3aed" rx="2" />
    <circle cx="160" cy="82" r="7" fill="#fca5a5" />
    <rect x="153" y="89" width="14" height="20" fill="#10b981" rx="2" />
    {/* Festive banners */}
    <line x1="10" y1="15" x2="190" y2="15" stroke="#f59e0b" strokeWidth="1" />
    <polygon points="20,15 25,8 30,15" fill="#ef4444" />
    <polygon points="40,15 45,8 50,15" fill="#3b82f6" />
    <polygon points="60,15 65,8 70,15" fill="#22c55e" />
    <polygon points="80,15 85,8 90,15" fill="#f59e0b" />
    <polygon points="100,15 105,8 110,15" fill="#a855f7" />
    <polygon points="120,15 125,8 130,15" fill="#ef4444" />
    <polygon points="140,15 145,8 150,15" fill="#3b82f6" />
    <polygon points="160,15 165,8 170,15" fill="#22c55e" />
    {/* Sign */}
    <rect x="60" y="25" width="80" height="18" fill="#dc2626" rx="4" />
    <text x="100" y="37" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">FOOD TRUCK FEST</text>
  </svg>
)

export const conversationsPart7 = [
  {
    id: 53,
    day: 53,
    title: "Airport Security & Immigration",
    category: "Travel",
    difficulty: "Intermediate",
    color: "teal",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day53Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Immigration Officer", B: "Traveler" }}
          situation="A traveler arrives at immigration control and presents their documents"
          lines={[
            { speaker: "A", en: "Good afternoon. Passport and boarding pass, please.", id: "Selamat siang. Paspor dan boarding pass, tolong.", note: "Frasa pembuka standar petugas imigrasi" },
            { speaker: "B", en: "Here you go. I'm visiting for a conference.", id: "Ini dia. Saya berkunjung untuk konferensi." },
            { speaker: "A", en: "How long will you be staying in the country?", id: "Berapa lama Anda akan tinggal di negara ini?" },
            { speaker: "B", en: "About ten days. I have a return ticket for the 15th.", id: "Sekitar sepuluh hari. Saya punya tiket kembali tanggal 15.", note: "'Return ticket' = tiket pulang pergi" },
            { speaker: "A", en: "Where will you be staying? Do you have an address?", id: "Di mana Anda akan menginap? Apakah Anda punya alamat?" },
            { speaker: "B", en: "Yes, I'm at the Grand Hyatt downtown. I have a hotel reservation here.", id: "Ya, saya di Grand Hyatt pusat kota. Saya punya konfirmasi hotel di sini." }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Security Officer", B: "Traveler" }}
          situation="A traveler goes through the security checkpoint before boarding"
          lines={[
            { speaker: "A", en: "Please remove your belt, shoes, and any metal items before proceeding.", id: "Tolong lepas ikat pinggang, sepatu, dan benda logam sebelum melanjutkan.", note: "'Proceeding' = melanjutkan melewati pemeriksaan" },
            { speaker: "B", en: "Of course. Should I take my laptop out of the bag as well?", id: "Tentu. Apakah laptop juga harus dikeluarkan dari tas?" },
            { speaker: "A", en: "Yes, please place it in a separate bin. Any liquids over 100ml need to be checked.", id: "Ya, tolong taruh di wadah terpisah. Cairan lebih dari 100ml perlu diperiksa.", note: "'Bin' = wadah/tray di pos keamanan" },
            { speaker: "B", en: "I only have a small water bottle. Can I carry it through?", id: "Saya hanya punya botol air kecil. Boleh saya bawa?" },
            { speaker: "A", en: "Sorry, you'll need to discard it or finish it before you go through.", id: "Maaf, Anda perlu membuangnya atau menghabiskannya sebelum lewat.", note: "'Discard' = membuang" },
            { speaker: "B", en: "Understood. I'll just toss it. Thank you.", id: "Mengerti. Saya akan membuangnya saja. Terima kasih." }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "boarding pass", meaning: "Kartu boarding / tiket elektronik untuk naik pesawat" },
            { phrase: "return ticket", meaning: "Tiket pulang pergi" },
            { phrase: "hotel reservation", meaning: "Konfirmasi pemesanan hotel" },
            { phrase: "proceed through", meaning: "Melanjutkan melewati (pemeriksaan)" },
            { phrase: "separate bin", meaning: "Wadah/tray terpisah untuk barang di X-ray" },
            { phrase: "discard", meaning: "Membuang / melempar" }
          ]}
        />

        <FillInBlank
          sentence="Please place your laptop in a separate ___ before going through the scanner."
          options={["bin", "box", "bag", "tray"]}
          answer="bin"
          explanation="'Bin' adalah wadah/tray plastik yang digunakan di pos keamanan bandara untuk menaruh barang bawaan"
        />

        <FillInBlank
          sentence="I have a ___ ticket for the 15th, so I'll only be here for ten days."
          options={["return", "round", "back", "home"]}
          answer="return"
          explanation="'Return ticket' = tiket pulang pergi — kolokasi standar dalam konteks perjalanan"
        />

        <CulturalNote
          note="In many countries, immigration officers are trained to ask direct, specific questions. It is important to answer clearly and honestly. Always have your hotel address, return ticket, and itinerary ready. Nervousness or vague answers can sometimes result in secondary screening, even for innocent travelers."
        />

        <PronunciationTip
          tip="The word 'boarding' is pronounced 'BOHR-ding' — the 'oa' makes a long O sound. Many learners mispronounce it as 'boh-ar-ding'. Practice: 'I need my boarding pass.' Also, 'proceed' is pronounced 'proh-SEED', not 'proh-SEED-ed'."
        />

        <ExpressionMeter
          formal={["Here you are.", "I have a hotel reservation.", "I'm visiting for a conference."]}
          informal={["Here you go.", "I've booked a hotel.", "I'm here for a work thing."]}
        />
      </div>
    )
  },

  {
    id: 54,
    day: 54,
    title: "Babysitting / Childcare",
    category: "Daily Life",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day54Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Parent", B: "Babysitter" }}
          situation="A parent briefs the babysitter before heading out for the evening"
          lines={[
            { speaker: "A", en: "Hi Sarah! Thanks so much for coming on short notice.", id: "Hai Sarah! Terima kasih sudah datang dengan pemberitahuan singkat.", note: "'On short notice' = dengan pemberitahuan mendadak" },
            { speaker: "B", en: "No problem at all! How old is he now? He looks so big!", id: "Tidak masalah sama sekali! Dia sekarang umur berapa? Terlihat sudah besar!" },
            { speaker: "A", en: "He just turned two last week. He's in a climbing-everything phase right now.", id: "Baru ulang tahun ke-2 minggu lalu. Sekarang lagi fase suka memanjat semua hal.", note: "'-everything phase' = frasa informal untuk menggambarkan kebiasaan anak" },
            { speaker: "B", en: "Ha! Got it. I'll keep a close eye on him.", id: "Ha! Mengerti. Saya akan mengawasi dia dengan ketat.", note: "'Keep a close eye on' = mengawasi dengan ketat" },
            { speaker: "A", en: "His bedtime is at 7:30. There's dinner in the fridge — just heat it up.", id: "Jam tidurnya jam 7:30. Ada makan malam di kulkas — tinggal dipanaskan." },
            { speaker: "B", en: "Perfect. And where's his favourite toy? Sometimes it helps at bedtime.", id: "Oke. Dan di mana mainan favoritnya? Kadang membantu saat mau tidur." }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Babysitter", B: "Child" }}
          situation="The babysitter plays with the toddler after the parents have left"
          lines={[
            { speaker: "A", en: "Okay, buddy! What do you want to play with tonight?", id: "Oke, kawan kecil! Mau main apa malam ini?", note: "'Buddy' = panggilan akrab untuk anak kecil" },
            { speaker: "B", en: "Bwocks! I want bwocks!", id: "Bwock! Aku mau bwock! (balok)", note: "Anak kecil sering salah ucap — 'blocks' jadi 'bwocks'" },
            { speaker: "A", en: "Blocks it is! Let's build a really tall tower. Can you help me?", id: "Balok ya! Ayo bangun menara yang sangat tinggi. Bisa bantu aku?" },
            { speaker: "B", en: "Yeah! I build! You watch!", id: "Ya! Aku bangun! Kamu lihat!" },
            { speaker: "A", en: "You're such a good builder! Wow, look how tall that is!", id: "Kamu jago sekali membangun! Wah, lihat betapa tingginya!" },
            { speaker: "B", en: "[knocks it over] Boom! Hahaha!", id: "[menendang menara] Boom! Hahaha!" }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "on short notice", meaning: "Dengan pemberitahuan yang singkat / mendadak" },
            { phrase: "keep a close eye on", meaning: "Mengawasi dengan ketat" },
            { phrase: "bedtime", meaning: "Waktu tidur (anak)" },
            { phrase: "heat it up", meaning: "Memanaskan (makanan)" },
            { phrase: "climbing-everything phase", meaning: "Fase suka memanjat segala sesuatu" },
            { phrase: "buddy", meaning: "Panggilan akrab untuk anak kecil / teman" }
          ]}
        />

        <FillInBlank
          sentence="His ___ is at 7:30, so please make sure the lights are off by then."
          options={["bedtime", "sleeptime", "naptime", "resttime"]}
          answer="bedtime"
          explanation="'Bedtime' = waktu tidur anak — kolokasi yang paling umum dan natural"
        />

        <FillInBlank
          sentence="Thank you for coming ___ — I really needed help tonight."
          options={["on short notice", "in short time", "with short warning", "at short call"]}
          answer="on short notice"
          explanation="'On short notice' = idiom untuk menggambarkan situasi mendadak tanpa banyak persiapan"
        />

        <CulturalNote
          note="In Western countries, hiring a babysitter is a very common practice. Babysitters are often teenagers or young adults who charge an hourly rate. Parents typically leave a list of emergency contacts, medical notes, and house rules. It is polite for babysitters to ask about allergies, medication, and the child's routine before the parents leave."
        />

        <PronunciationTip
          tip="Young children often mispronounce words, which can be charming in conversations. 'Blocks' becomes 'bwocks', 'please' becomes 'pweese'. As a language learner, focus on adult speech patterns. Notice how the babysitter uses short, enthusiastic sentences with rising intonation to engage the child: 'Blocks it IS!' — stress falls on the last word."
        />

        <ExpressionMeter
          formal={["That is not a problem at all.", "I will keep a close watch on him.", "Certainly, I understand."]}
          informal={["No problem at all!", "I'll keep an eye on him.", "Got it!"]}
        />
      </div>
    )
  },

  {
    id: 55,
    day: 55,
    title: "Thesis Defense / Dissertation",
    category: "Academic",
    difficulty: "Advanced",
    color: "emerald",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day55Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Committee Chair", B: "Candidate" }}
          situation="A doctoral candidate presents their dissertation to a faculty committee"
          lines={[
            { speaker: "A", en: "Please begin by summarizing your research objectives and key findings.", id: "Tolong mulai dengan merangkum tujuan penelitian dan temuan utama Anda.", note: "Pertanyaan pembuka standar dalam sidang tesis" },
            { speaker: "B", en: "Thank you, Professor. My dissertation examines the correlation between early childhood bilingualism and executive function in adolescents.", id: "Terima kasih, Profesor. Disertasi saya meneliti korelasi antara bilingualisme masa kanak-kanak awal dan fungsi eksekutif pada remaja." },
            { speaker: "A", en: "And what methodology did you employ to isolate that variable?", id: "Dan metodologi apa yang Anda gunakan untuk mengisolasi variabel tersebut?", note: "'Employ' dalam konteks akademik = menggunakan/menerapkan" },
            { speaker: "B", en: "I used a longitudinal quasi-experimental design with matched control groups, tracking participants from age three through fifteen.", id: "Saya menggunakan desain eksperimen semu longitudinal dengan kelompok kontrol yang disesuaikan, melacak peserta dari usia tiga hingga lima belas tahun.", note: "'Longitudinal design' = desain penelitian jangka panjang" },
            { speaker: "A", en: "What steps did you take to address potential selection bias in your sample?", id: "Langkah apa yang Anda ambil untuk mengatasi potensi bias seleksi dalam sampel Anda?" },
            { speaker: "B", en: "Participants were stratified by socioeconomic status, parental education, and L1 typology to minimize confounding variables.", id: "Peserta distratifikasi berdasarkan status sosial ekonomi, pendidikan orang tua, dan tipologi L1 untuk meminimalkan variabel pengganggu.", note: "'Confounding variables' = variabel yang dapat mengganggu hasil" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Professor Lee", B: "Candidate" }}
          situation="A committee member challenges the candidate's interpretation of data"
          lines={[
            { speaker: "A", en: "I'd like to challenge your interpretation of the data in Chapter Four.", id: "Saya ingin menantang interpretasi Anda atas data di Bab Empat.", note: "Tantangan dari komite bukan serangan — ini tradisi akademis" },
            { speaker: "B", en: "Of course. I welcome the critique. Could you specify which aspect you find problematic?", id: "Tentu saja. Saya menyambut kritik tersebut. Bisakah Anda menyebutkan aspek mana yang Anda anggap bermasalah?", note: "'I welcome the critique' = respons profesional yang elegan" },
            { speaker: "A", en: "You claim a causal relationship, yet your design only permits correlational inference.", id: "Anda mengklaim hubungan kausal, namun desain Anda hanya memungkinkan inferensi korelasional." },
            { speaker: "B", en: "That is a valid concern. I should clarify — I intended to suggest a strong predictive correlation, not strict causality. The language in that section may have been imprecise.", id: "Itu kekhawatiran yang valid. Saya harus mengklarifikasi — saya bermaksud menyarankan korelasi prediktif yang kuat, bukan kausalitas ketat. Bahasanya di bagian itu mungkin tidak tepat.", note: "Mengakui ketidaktepatan adalah tanda kedewasaan intelektual" },
            { speaker: "A", en: "Good. That kind of intellectual honesty strengthens your work considerably.", id: "Bagus. Kejujuran intelektual seperti itu sangat memperkuat karya Anda." },
            { speaker: "B", en: "Thank you. I'll revise that section to reflect a more nuanced claim.", id: "Terima kasih. Saya akan merevisi bagian itu untuk mencerminkan klaim yang lebih bernuansa.", note: "'Nuanced' = halus dan mempertimbangkan kompleksitas" }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "longitudinal design", meaning: "Desain penelitian jangka panjang yang mengikuti subjek dari waktu ke waktu" },
            { phrase: "confounding variables", meaning: "Variabel pengganggu yang dapat mempengaruhi hasil penelitian" },
            { phrase: "correlational inference", meaning: "Kesimpulan berdasarkan korelasi, bukan sebab-akibat" },
            { phrase: "I welcome the critique", meaning: "Ungkapan profesional untuk menerima kritik dengan terbuka" },
            { phrase: "nuanced claim", meaning: "Pernyataan yang lebih halus dan kompleks" },
            { phrase: "selection bias", meaning: "Bias dalam pemilihan sampel penelitian" }
          ]}
        />

        <FillInBlank
          sentence="You need to acknowledge the ___ variables in your study that may have influenced the results."
          options={["confounding", "interfering", "disrupting", "disturbing"]}
          answer="confounding"
          explanation="'Confounding variables' = istilah statistik/metodologi untuk variabel yang dapat mendistorsi hubungan yang diteliti"
        />

        <FillInBlank
          sentence="My design only supports a ___ inference, not a direct causal claim."
          options={["correlational", "relational", "comparative", "statistical"]}
          answer="correlational"
          explanation="'Correlational inference' = kesimpulan yang hanya menunjukkan hubungan, bukan sebab-akibat"
        />

        <CulturalNote
          note="A thesis defense (also called a viva voce in the UK) is a formal oral examination where you defend your research to a panel of academic experts. Committee members are expected to ask challenging questions — this is not an attack but a rigorous academic tradition. Admitting limitations or imprecisions in your work, as shown in the dialogue above, is considered a sign of intellectual maturity, not weakness."
        />

        <PronunciationTip
          tip="Academic vocabulary requires precise pronunciation. 'Dissertation' = dis-er-TAY-shun (stress on TAY). 'Longitudinal' = lon-jih-TYOO-dih-nul. 'Correlational' = kor-eh-LAY-shun-ul. Practice these slowly and then at normal speed. In presentations, speak slightly more slowly than you would in casual conversation — clarity matters more than speed."
        />

        <ExpressionMeter
          formal={["I welcome the critique.", "That is a valid concern.", "I shall revise that section accordingly."]}
          informal={["Good point!", "Yeah, fair enough.", "I'll fix that part."]}
        />
      </div>
    )
  },

  {
    id: 56,
    day: 56,
    title: "Salary Negotiation",
    category: "Professional",
    difficulty: "Advanced",
    color: "slate",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day56Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "HR Manager", B: "Candidate" }}
          situation="A job candidate negotiates their salary offer with the HR manager"
          lines={[
            { speaker: "A", en: "We'd like to extend you a formal offer. The base salary we have in mind is $72,000 annually.", id: "Kami ingin memberikan penawaran resmi. Gaji pokok yang kami pikirkan adalah $72.000 per tahun.", note: "'Extend an offer' = memberikan penawaran kerja resmi" },
            { speaker: "B", en: "Thank you — I'm genuinely excited about this opportunity. Based on my research and six years of relevant experience, I was expecting something closer to $85,000.", id: "Terima kasih — saya benar-benar antusias dengan kesempatan ini. Berdasarkan riset dan enam tahun pengalaman relevan, saya mengharapkan sekitar $85.000.", note: "Selalu tunjukkan antusias sebelum bernegosiasi" },
            { speaker: "A", en: "I understand. Could you walk me through what benchmarks you referenced?", id: "Saya mengerti. Bisakah Anda jelaskan tolok ukur apa yang Anda referensikan?", note: "'Benchmarks' = tolok ukur standar industri" },
            { speaker: "B", en: "Certainly. Industry surveys from LinkedIn and Glassdoor show a median of $80K for this role in this city, and I bring specialized skills in machine learning that add direct value.", id: "Tentu. Survei industri dari LinkedIn dan Glassdoor menunjukkan median $80K untuk posisi ini di kota ini, dan saya membawa keahlian khusus dalam machine learning yang memberikan nilai langsung." },
            { speaker: "A", en: "That's fair. I can take this back to the team and see if we can move to $78,000 with a performance review at six months.", id: "Itu adil. Saya bisa membawa ini ke tim dan lihat apakah kami bisa naik ke $78.000 dengan tinjauan kinerja di enam bulan.", note: "'Performance review' = tinjauan kinerja berkala" },
            { speaker: "B", en: "I appreciate that. If we could also discuss the signing bonus and remote work flexibility, I think we can reach an agreement.", id: "Saya menghargai itu. Jika kita juga bisa mendiskusikan bonus masuk dan fleksibilitas kerja jarak jauh, saya rasa kita bisa mencapai kesepakatan." }
          ]}
        />

        <ConversationCard
          speakers={{ A: "HR Manager", B: "Candidate" }}
          situation="The negotiation continues to cover remote work and signing bonus details"
          lines={[
            { speaker: "A", en: "Regarding remote work — we typically allow two days per week from home. Would that suit you?", id: "Mengenai kerja jarak jauh — kami biasanya mengizinkan dua hari per minggu dari rumah. Apakah itu cocok untuk Anda?" },
            { speaker: "B", en: "That works for me. And for the signing bonus — is there any budget for that?", id: "Itu cocok untuk saya. Dan untuk bonus masuk — apakah ada anggaran untuk itu?", note: "'Signing bonus' = bonus saat penandatanganan kontrak" },
            { speaker: "A", en: "We can offer a one-time $3,000 signing bonus given the circumstances.", id: "Kami bisa menawarkan bonus masuk satu kali $3.000 mengingat keadaannya." },
            { speaker: "B", en: "That's very reasonable. I'd like to take 24 hours to review the full package before formally accepting.", id: "Itu sangat wajar. Saya ingin meluangkan 24 jam untuk meninjau paket lengkapnya sebelum menerima secara resmi.", note: "Meminta waktu 24 jam adalah taktik negosiasi yang profesional" },
            { speaker: "A", en: "Absolutely. I'll send the revised offer letter by end of day. We look forward to having you on board.", id: "Tentu saja. Saya akan mengirim surat penawaran yang direvisi sebelum akhir hari. Kami berharap bisa memiliki Anda di tim.", note: "'On board' = bergabung dengan perusahaan" },
            { speaker: "B", en: "Thank you for being so accommodating. I'll be in touch tomorrow morning.", id: "Terima kasih sudah sangat akomodatif. Saya akan menghubungi besok pagi." }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "extend a formal offer", meaning: "Memberikan penawaran kerja resmi" },
            { phrase: "benchmarks / industry survey", meaning: "Tolok ukur / survei industri untuk referensi gaji" },
            { phrase: "signing bonus", meaning: "Bonus yang diberikan saat penandatanganan kontrak kerja" },
            { phrase: "performance review", meaning: "Tinjauan kinerja karyawan secara berkala" },
            { phrase: "on board", meaning: "Bergabung dengan perusahaan / tim" },
            { phrase: "accommodating", meaning: "Mudah diajak bekerja sama / akomodatif" }
          ]}
        />

        <FillInBlank
          sentence="I'd like to take 24 hours to review the full ___ before formally accepting."
          options={["package", "offer", "deal", "contract"]}
          answer="package"
          explanation="'Full package' = keseluruhan paket kompensasi termasuk gaji, bonus, dan tunjangan"
        />

        <FillInBlank
          sentence="Based on industry ___, the median salary for this role is around $80,000."
          options={["benchmarks", "standards", "averages", "surveys"]}
          answer="benchmarks"
          explanation="'Benchmarks' = tolok ukur standar yang digunakan untuk membandingkan — lebih spesifik dari 'standards' atau 'averages'"
        />

        <CulturalNote
          note="In Western professional culture, salary negotiation is expected and respected — not considered rude or aggressive. Research shows that candidates who negotiate earn significantly more over their careers. Key tactics include: using market data (not personal need), expressing enthusiasm for the role, asking for 24 hours to consider the offer, and negotiating the full package (bonus, remote work, vacation) not just the base salary."
        />

        <PronunciationTip
          tip="In negotiations, tone of voice matters as much as words. Speak confidently and slowly. Avoid upspeak (raising your intonation at the end of statements as if asking a question) — it signals uncertainty. For example, 'I was expecting eighty-five thousand' should end with a falling intonation, not rising. Practice in front of a mirror to build confidence."
        />

        <ExpressionMeter
          formal={["I appreciate your flexibility.", "I would like to take time to review the offer.", "I look forward to reaching a mutually beneficial agreement."]}
          informal={["Thanks for working with me on this.", "Let me think it over.", "I think we can make this work."]}
        />
      </div>
    )
  },

  {
    id: 57,
    day: 57,
    title: "Eye Doctor / Optometrist",
    category: "Health",
    difficulty: "Intermediate",
    color: "teal",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day57Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Optometrist", B: "Patient" }}
          situation="A patient visits the eye doctor complaining of frequent headaches"
          lines={[
            { speaker: "A", en: "What brings you in today? Any specific concerns?", id: "Ada apa hari ini? Ada keluhan khusus?", note: "'What brings you in?' = pertanyaan pembuka standar dokter" },
            { speaker: "B", en: "I've been getting a lot of headaches lately, especially after staring at my computer for a long time.", id: "Saya sering sakit kepala belakangan ini, terutama setelah menatap komputer lama-lama." },
            { speaker: "A", en: "That sounds like it could be digital eye strain. How many hours a day do you spend looking at screens?", id: "Itu mungkin termasuk ketegangan mata digital. Berapa jam sehari Anda menatap layar?", note: "'Digital eye strain' = CVS (Computer Vision Syndrome)" },
            { speaker: "B", en: "Probably eight to ten hours. I work from home, so it's screens all day.", id: "Mungkin delapan sampai sepuluh jam. Saya kerja dari rumah, jadi layar sepanjang hari." },
            { speaker: "A", en: "I see. Let's do a full examination and check your prescription. When was your last eye exam?", id: "Saya mengerti. Mari kita lakukan pemeriksaan lengkap dan periksa resep Anda. Kapan terakhir kali Anda periksa mata?", note: "'Prescription' = ukuran lensa yang diresepkan" },
            { speaker: "B", en: "About three years ago. I was told I had very mild myopia.", id: "Sekitar tiga tahun lalu. Saya diberitahu menderita miopia ringan.", note: "'Myopia' = rabun jauh" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Optometrist", B: "Patient" }}
          situation="The optometrist shares the results of the eye exam and gives recommendations"
          lines={[
            { speaker: "A", en: "Your prescription has changed slightly. Your right eye is now -1.75 and your left is -1.50.", id: "Resep Anda sedikit berubah. Mata kanan sekarang -1.75 dan kiri -1.50." },
            { speaker: "B", en: "Does that mean my eyesight is getting worse?", id: "Apakah itu berarti penglihatan saya semakin buruk?" },
            { speaker: "A", en: "It's a modest change — nothing alarming. But I'd recommend updating your glasses or contact lenses.", id: "Perubahannya kecil — tidak mengkhawatirkan. Tapi saya sarankan perbarui kacamata atau lensa kontak Anda.", note: "'Nothing alarming' = tidak mengkhawatirkan" },
            { speaker: "B", en: "Would blue-light glasses help with my headaches?", id: "Apakah kacamata blue-light bisa membantu sakit kepala saya?", note: "'Blue-light glasses' = kacamata anti cahaya biru layar digital" },
            { speaker: "A", en: "They can help reduce eye fatigue. I'd also recommend the 20-20-20 rule — every 20 minutes, look at something 20 feet away for 20 seconds.", id: "Bisa membantu mengurangi kelelahan mata. Saya juga sarankan aturan 20-20-20 — setiap 20 menit, lihat sesuatu sejauh 20 kaki selama 20 detik.", note: "Aturan 20-20-20 adalah rekomendasi dokter mata yang terkenal" },
            { speaker: "B", en: "I've heard of that! I'll try to be more disciplined about it.", id: "Pernah dengar! Saya akan lebih disiplin menerapkannya." }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "digital eye strain", meaning: "Ketegangan mata akibat penggunaan layar digital berlebihan" },
            { phrase: "prescription", meaning: "Resep / ukuran lensa untuk kacamata atau kontak" },
            { phrase: "myopia", meaning: "Rabun jauh (miopia)" },
            { phrase: "blue-light glasses", meaning: "Kacamata anti cahaya biru dari layar digital" },
            { phrase: "the 20-20-20 rule", meaning: "Aturan istirahat mata: setiap 20 menit lihat sejauh 20 kaki selama 20 detik" },
            { phrase: "eye fatigue", meaning: "Kelelahan mata" }
          ]}
        />

        <FillInBlank
          sentence="I recommend following the 20-20-20 rule to reduce ___ eye strain."
          options={["digital", "screen", "computer", "visual"]}
          answer="digital"
          explanation="'Digital eye strain' adalah istilah medis resmi — lebih spesifik dari 'screen' atau 'computer' eye strain"
        />

        <FillInBlank
          sentence="Your ___ has changed since your last visit, so we need to update your lenses."
          options={["prescription", "diagnosis", "measurement", "vision"]}
          answer="prescription"
          explanation="'Prescription' = ukuran/resep lensa yang dikeluarkan dokter mata — kolokasi yang benar"
        />

        <CulturalNote
          note="Regular eye exams are recommended every one to two years for adults, even without symptoms. In many Western countries, vision insurance is separate from regular health insurance. Optometrists (who examine eyes and prescribe glasses) are different from ophthalmologists (medical doctors who can perform eye surgery). Always bring your current glasses or contact lens prescription to appointments."
        />

        <PronunciationTip
          tip="Medical terms at the eye doctor can be tricky. 'Myopia' = my-OH-pee-uh. 'Optometrist' = op-TOM-eh-trist (stress on TOM). 'Prescription' = preh-SKRIP-shun. A common error is saying 'opis-ko-pist' instead of 'op-TOM-eh-trist'. Practice by breaking the word into syllables: op - tom - e - trist."
        />

        <ExpressionMeter
          formal={["Nothing alarming has been detected.", "I would recommend updating your corrective lenses.", "The change is modest and not clinically significant."]}
          informal={["Nothing to worry about.", "You should get new glasses.", "It's only a small change."]}
        />
      </div>
    )
  },

  {
    id: 58,
    day: 58,
    title: "Camping Trip",
    category: "Entertainment",
    difficulty: "Beginner",
    color: "pink",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day58Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Jake", B: "Mia" }}
          situation="Two friends sit around a campfire on a clear night in the mountains"
          lines={[
            { speaker: "A", en: "This is the most peaceful spot I've ever camped at. Listen — no traffic, no noise!", id: "Ini tempat perkemahan paling damai yang pernah aku kunjungi. Dengarkan — tidak ada lalu lintas, tidak ada kebisingan!" },
            { speaker: "B", en: "I know! And the stars are incredible out here. I can see the Milky Way!", id: "Aku tahu! Dan bintangnya luar biasa di sini. Aku bisa melihat Bima Sakti!", note: "'Milky Way' = Bima Sakti, galaksi kita" },
            { speaker: "A", en: "Do you want to toast some marshmallows? I brought the good ones.", id: "Kamu mau panggang marshmallow? Aku bawa yang bagus.", note: "'Toast marshmallows' = memanggang marshmallow di atas api unggun" },
            { speaker: "B", en: "Yes please! Oh, be careful — don't get your stick too close to the fire.", id: "Mau dong! Oh, hati-hati — jangan terlalu dekatkan tongkatmu ke api." },
            { speaker: "A", en: "I like mine a little burnt, actually. It gets all gooey inside.", id: "Sebenarnya aku suka yang sedikit gosong. Jadi lengket di dalamnya.", note: "'Gooey' = lengket dan kenyal di dalam" },
            { speaker: "B", en: "Gross! I like mine golden brown. You're supposed to rotate it slowly.", id: "Menjijikkan! Aku suka yang kuning kecokelatan. Kamu harus memutarnya perlahan.", note: "'Gross!' = ekspresi informal untuk sesuatu yang menjijikkan" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Mia", B: "Jake" }}
          situation="The two friends set up their tent at the campsite before it gets dark"
          lines={[
            { speaker: "A", en: "Do you know how to set up the tent? I've never done it before.", id: "Kamu tahu cara mendirikan tenda? Aku belum pernah melakukannya sebelumnya." },
            { speaker: "B", en: "It's pretty easy once you get the hang of it. Start by laying out the groundsheet.", id: "Cukup mudah setelah kamu terbiasa. Mulailah dengan menghamparkan alas tanah.", note: "'Get the hang of it' = mulai terbiasa/menguasai sesuatu" },
            { speaker: "A", en: "What's a groundsheet?", id: "Apa itu alas tanah?" },
            { speaker: "B", en: "It's the waterproof mat that goes under the tent. It keeps moisture from coming up through the floor.", id: "Itu matras tahan air yang diletakkan di bawah tenda. Mencegah kelembaban naik melalui lantai.", note: "'Groundsheet' = alas tahan air di bawah tenda" },
            { speaker: "A", en: "Oh, smart! Okay, I've got it spread out. What's next?", id: "Oh, cerdas! Oke, sudah aku hamparkan. Apa selanjutnya?" },
            { speaker: "B", en: "Now we connect the poles and thread them through the tent fabric. Here, hold this end.", id: "Sekarang kita sambungkan tiang dan masukkan melalui kain tenda. Ayo, pegang ujung ini." }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "get the hang of it", meaning: "Mulai terbiasa / menguasai sesuatu" },
            { phrase: "groundsheet", meaning: "Alas tahan air di bawah tenda" },
            { phrase: "toast marshmallows", meaning: "Memanggang marshmallow di atas api" },
            { phrase: "gooey", meaning: "Lengket dan kenyal di dalam" },
            { phrase: "golden brown", meaning: "Kuning kecokelatan (warna matang sempurna)" },
            { phrase: "Milky Way", meaning: "Bima Sakti (galaksi kita, terlihat sebagai pita bintang)" }
          ]}
        />

        <FillInBlank
          sentence="Don't worry — setting up a tent is easy once you ___ the hang of it."
          options={["get", "have", "find", "learn"]}
          answer="get"
          explanation="'Get the hang of it' = phrasal verb yang berarti mulai terbiasa — hanya 'get' yang benar dalam idiom ini"
        />

        <FillInBlank
          sentence="Make sure you spread the ___ before you set up the tent so the floor stays dry."
          options={["groundsheet", "tarp", "mat", "cover"]}
          answer="groundsheet"
          explanation="'Groundsheet' adalah kata khusus untuk alas tahan air di bawah tenda — istilah paling tepat dalam konteks berkemah"
        />

        <CulturalNote
          note="Camping is a hugely popular outdoor activity in countries like the USA, Canada, Australia, and the UK. Many campsites (camping grounds) require advance booking, especially in summer. The 'Leave No Trace' principle is widely respected — campers are expected to carry out all their rubbish and leave the environment exactly as they found it. Building campfires is only allowed in designated fire pits."
        />

        <PronunciationTip
          tip="The word 'gooey' is a fun informal word meaning sticky and soft — it's pronounced 'GOO-ee'. Notice the onomatopoeic quality of many camping and food words: 'crunch', 'sizzle', 'gooey', 'crispy'. These are descriptive words that mimic the sounds or textures they describe. They are very common in casual English conversation about food."
        />

        <ExpressionMeter
          formal={["That is rather unpleasant.", "I prefer mine cooked to a golden brown.", "I have not attempted this before."]}
          informal={["Gross!", "I like mine golden brown.", "I've never done it before."]}
        />
      </div>
    )
  },

  {
    id: 59,
    day: 59,
    title: "Home Insurance Claim",
    category: "Daily Life",
    difficulty: "Advanced",
    color: "rose",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day59Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Insurance Agent", B: "Homeowner" }}
          situation="An insurance agent arrives to assess storm damage to a home"
          lines={[
            { speaker: "A", en: "Good morning. I'm here to conduct the damage assessment following last night's storm. Are you the policyholder?", id: "Selamat pagi. Saya di sini untuk melakukan penilaian kerusakan menyusul badai tadi malam. Apakah Anda pemegang polis?", note: "'Policyholder' = pemegang polis asuransi" },
            { speaker: "B", en: "Yes, that's me. The damage is significant — a large branch came through the roof and we also lost power for twelve hours.", id: "Ya, saya. Kerusakannya signifikan — cabang besar menembus atap dan kami juga kehilangan listrik selama dua belas jam." },
            { speaker: "A", en: "I can see that. Have you documented the damage with photographs before anything was moved or covered?", id: "Saya melihat itu. Apakah Anda sudah mendokumentasikan kerusakan dengan foto sebelum ada yang dipindahkan atau ditutup?", note: "Dokumentasi foto sangat penting dalam proses klaim" },
            { speaker: "B", en: "Yes, I took extensive photos and videos right after the storm passed. I also have receipts for the emergency tarpaulin I had to purchase.", id: "Ya, saya mengambil banyak foto dan video tepat setelah badai berlalu. Saya juga punya kuitansi untuk terpal darurat yang harus saya beli.", note: "'Tarpaulin' = terpal tahan air — sering disingkat 'tarp'" },
            { speaker: "A", en: "Excellent. That's exactly the kind of documentation we need. What other areas sustained damage?", id: "Bagus sekali. Itulah jenis dokumentasi yang kami butuhkan. Area lain mana yang mengalami kerusakan?" },
            { speaker: "B", en: "There's water intrusion in the attic and two bedrooms. The hardwood floors are warped and one window frame is cracked.", id: "Ada intrusi air di loteng dan dua kamar tidur. Lantai kayu keras bergelombang dan satu kusen jendela retak.", note: "'Water intrusion' = masuknya air ke dalam struktur bangunan" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Insurance Agent", B: "Homeowner" }}
          situation="The agent explains coverage details and next steps for processing the claim"
          lines={[
            { speaker: "A", en: "Based on my inspection, this appears to fall under your storm damage coverage. However, I'll need to cross-reference with your policy terms regarding water intrusion.", id: "Berdasarkan inspeksi saya, ini tampaknya termasuk dalam cakupan kerusakan badai Anda. Namun, saya perlu merujuk silang dengan ketentuan polis Anda mengenai intrusi air." },
            { speaker: "B", en: "My understanding is that storm-related water damage is covered, but gradual leaks are not. This was definitely storm-related.", id: "Pemahaman saya, kerusakan air terkait badai ditanggung, tetapi kebocoran bertahap tidak. Ini jelas terkait badai." },
            { speaker: "A", en: "That is generally correct. We'll also need two independent contractor estimates before we can finalise the claim amount.", id: "Itu umumnya benar. Kami juga membutuhkan dua estimasi kontraktor independen sebelum kami dapat menyelesaikan jumlah klaim.", note: "'Finalise the claim' = menyelesaikan proses klaim" },
            { speaker: "B", en: "Should I get those, or does the insurance company arrange them?", id: "Apakah saya yang mencari, atau perusahaan asuransi yang mengaturnya?" },
            { speaker: "A", en: "You can choose your own licensed contractors. Just ensure they provide itemised quotes covering all damage categories.", id: "Anda bisa memilih kontraktor berizin sendiri. Pastikan mereka memberikan penawaran terperinci yang mencakup semua kategori kerusakan.", note: "'Itemised quote' = penawaran harga yang dirinci per item" },
            { speaker: "B", en: "Understood. What is the typical timeline for processing a claim like this?", id: "Mengerti. Berapa lama biasanya proses klaim seperti ini?" }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "policyholder", meaning: "Pemegang polis asuransi" },
            { phrase: "damage assessment", meaning: "Penilaian / penaksiran kerusakan" },
            { phrase: "tarpaulin / tarp", meaning: "Terpal / kain penutup tahan air" },
            { phrase: "water intrusion", meaning: "Masuknya air ke dalam struktur bangunan" },
            { phrase: "itemised quote", meaning: "Penawaran harga yang dirinci per item" },
            { phrase: "finalise the claim", meaning: "Menyelesaikan / menutup proses klaim" }
          ]}
        />

        <FillInBlank
          sentence="As the ___, you are entitled to file a claim for all storm-related structural damage."
          options={["policyholder", "homeowner", "claimant", "insured"]}
          answer="policyholder"
          explanation="'Policyholder' adalah istilah resmi asuransi untuk orang yang namanya tercantum dalam polis — paling tepat dalam konteks formal ini"
        />

        <FillInBlank
          sentence="Please ensure the contractors provide ___ quotes so we can see every cost item separately."
          options={["itemised", "detailed", "complete", "specific"]}
          answer="itemised"
          explanation="'Itemised quote' = penawaran yang mencantumkan setiap item biaya secara terpisah — istilah teknis asuransi/kontrak"
        />

        <CulturalNote
          note="When filing a home insurance claim, documentation is everything. Photograph damage from multiple angles immediately — before cleanup begins. Keep all receipts for emergency repairs (like tarps or temporary fixes). Insurance policies often distinguish between 'sudden damage' (usually covered) and 'gradual damage' (often not covered). In the US and UK, you typically have a deductible or excess — an amount you pay out of pocket before coverage kicks in."
        />

        <PronunciationTip
          tip="'Tarpaulin' is a formal word often shortened to 'tarp' in casual speech — pronounced 'TARP-oh-lin'. Similarly, 'policyholder' = 'POL-ih-see-hold-er'. In formal or legal conversations like insurance claims, avoid contractions (say 'I have' not 'I've') to sound more precise and professional. Slow, clear speech also helps prevent misunderstandings when discussing important details."
        />

        <ExpressionMeter
          formal={["That is generally correct.", "I will need to cross-reference with the policy terms.", "You are entitled to file a claim."]}
          informal={["That's basically right.", "I'll check against your policy.", "You can make a claim for that."]}
        />
      </div>
    )
  },

  {
    id: 60,
    day: 60,
    title: "Language Exchange Meetup",
    category: "Academic",
    difficulty: "Intermediate",
    color: "blue",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day60Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Yumi", B: "David" }}
          situation="Two language learners meet at a language exchange event in a cafe"
          lines={[
            { speaker: "A", en: "Hi! Are you here for the language exchange? I'm Yumi. I'm learning English.", id: "Hai! Kamu di sini untuk pertukaran bahasa? Saya Yumi. Saya sedang belajar bahasa Inggris." },
            { speaker: "B", en: "Yes! I'm David. I've been trying to learn Japanese for about two years now. It's tough!", id: "Ya! Saya David. Saya sudah mencoba belajar bahasa Jepang selama sekitar dua tahun. Susah!" },
            { speaker: "A", en: "Oh, Japanese is difficult for English speakers. Which part is hardest for you?", id: "Oh, bahasa Jepang memang sulit untuk penutur bahasa Inggris. Bagian mana yang paling sulit bagimu?" },
            { speaker: "B", en: "Honestly, the writing systems. Hiragana I've got down, but kanji is overwhelming. There are thousands of characters!", id: "Jujur, sistem tulisannya. Hiragana sudah kukuasai, tapi kanji sangat membingungkan. Ada ribuan karakter!", note: "'I've got it down' = sudah menguasai sesuatu" },
            { speaker: "A", en: "I understand! For me, English grammar is confusing — especially tenses. Japanese has only two tenses!", id: "Aku mengerti! Bagiku, tata bahasa Inggris membingungkan — terutama tenses. Bahasa Jepang hanya punya dua tenses!" },
            { speaker: "B", en: "Really? That actually sounds easier. Maybe we can help each other — I'll explain English tenses if you explain kanji radicals.", id: "Benarkah? Itu kedengarannya lebih mudah. Mungkin kita bisa saling membantu — aku akan jelaskan tenses Inggris kalau kamu jelaskan radikal kanji.", note: "'Kanji radicals' = komponen dasar pembentuk karakter kanji" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Yumi", B: "David" }}
          situation="The two partners practice correcting each other's sentences"
          lines={[
            { speaker: "A", en: "Okay, let me try. Yesterday I go to the store. Is that correct?", id: "Oke, coba aku. Kemarin saya pergi ke toko. Apakah itu benar?" },
            { speaker: "B", en: "Almost! It should be 'Yesterday I went to the store.' We use past simple for completed actions.", id: "Hampir! Seharusnya 'Yesterday I went to the store.' Kita gunakan past simple untuk tindakan yang sudah selesai.", note: "'Past simple' = bentuk lampau sederhana" },
            { speaker: "A", en: "Went. So 'go' changes to 'went'? That's an irregular verb, right?", id: "Went. Jadi 'go' berubah menjadi 'went'? Itu kata kerja tidak beraturan, kan?", note: "'Irregular verb' = kata kerja tidak beraturan" },
            { speaker: "B", en: "Exactly! English has lots of irregular verbs. But the good news is you just have to memorise them — there's no pattern.", id: "Tepat! Bahasa Inggris punya banyak kata kerja tidak beraturan. Tapi kabar baiknya kamu hanya perlu menghafalnya — tidak ada polanya." },
            { speaker: "A", en: "That's bad news, not good news! Okay, now you try Japanese. Say 'I ate sushi yesterday.'", id: "Itu kabar buruk, bukan kabar baik! Oke, sekarang kamu coba bahasa Jepang. Katakan 'Saya makan sushi kemarin.'" },
            { speaker: "B", en: "Umm... Kinoo... sushi o... tabemashita?", id: "Mmm... Kinoo... sushi o... tabemashita? (Kemarin... sushi... saya makan?)" }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "language exchange", meaning: "Pertukaran bahasa antara dua orang penutur berbeda bahasa" },
            { phrase: "I've got it down", meaning: "Sudah menguasai sesuatu" },
            { phrase: "overwhelming", meaning: "Sangat banyak / membebani sehingga sulit dihadapi" },
            { phrase: "irregular verb", meaning: "Kata kerja tidak beraturan (tidak mengikuti pola standar)" },
            { phrase: "kanji radicals", meaning: "Komponen dasar pembentuk karakter kanji Jepang" },
            { phrase: "past simple", meaning: "Bentuk lampau sederhana dalam tata bahasa Inggris" }
          ]}
        />

        <FillInBlank
          sentence="Don't worry — after a few months of practice, you'll have the basics ___."
          options={["down", "mastered", "learned", "done"]}
          answer="down"
          explanation="'Have it down' = idiom yang berarti sudah menguasai — 'I've got it down' adalah ekspresi paling umum"
        />

        <FillInBlank
          sentence="English has many ___ verbs like 'go/went', 'eat/ate', and 'see/saw' that don't follow a regular pattern."
          options={["irregular", "abnormal", "unusual", "special"]}
          answer="irregular"
          explanation="'Irregular verbs' = istilah gramatikal resmi untuk kata kerja yang tidak mengikuti pola penambahan -ed"
        />

        <CulturalNote
          note="Language exchange meetups are popular in major cities worldwide and can also be found online (apps like Tandem, HelloTalk, or iTalki). The typical format is to spend 30 minutes speaking in one language, then 30 minutes in the other. It is considered good etiquette to gently correct your partner's mistakes rather than ignoring them — this is why they came! Be patient, encouraging, and celebrate small wins."
        />

        <PronunciationTip
          tip="When learning a new language's pronunciation, focus on sounds that don't exist in your native language. For Japanese learners of English, the 'th' sound (as in 'the', 'this', 'that') is often very difficult — it requires placing your tongue between your teeth. Practice: 'this', 'that', 'there', 'three', 'through'. Go slowly at first. Your mouth muscles need training, just like going to the gym."
        />

        <ExpressionMeter
          formal={["I have been studying Japanese for approximately two years.", "Could you clarify which grammatical structure is correct?", "I would appreciate a gentle correction."]}
          informal={["I've been learning Japanese for two years.", "Is that right?", "I've got it down now!"]}
        />
      </div>
    )
  },

  {
    id: 61,
    day: 61,
    title: "Food Truck Festival",
    category: "Entertainment",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <Day61Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Customer", B: "Vendor" }}
          situation="A customer approaches a taco food truck at a street food festival"
          lines={[
            { speaker: "A", en: "Oh wow, everything looks amazing! What do you recommend?", id: "Wah, semuanya terlihat luar biasa! Apa yang kamu rekomendasikan?" },
            { speaker: "B", en: "Our best-seller is the pulled pork taco. But if you like spicy, go for the chipotle chicken.", id: "Best-seller kami adalah taco daging babi suwir. Tapi kalau kamu suka pedas, pilih chipotle chicken.", note: "'Best-seller' = produk yang paling banyak terjual" },
            { speaker: "A", en: "I love spicy food! How spicy is it, on a scale of one to ten?", id: "Aku suka makanan pedas! Seberapa pedas, dari skala satu sampai sepuluh?" },
            { speaker: "B", en: "Honestly? About a seven. It has a real kick to it, but not face-melting hot.", id: "Jujur? Sekitar tujuh. Ada tendangan panas yang nyata, tapi tidak sampai membakar wajah.", note: "'A real kick to it' = ada sensasi pedas yang terasa kuat" },
            { speaker: "A", en: "Perfect — I'll take two chipotle chicken tacos and a limeade, please.", id: "Sempurna — aku pesan dua taco chipotle chicken dan satu limeade.", note: "'Limeade' = minuman segar dari perasan jeruk nipis dan air gula" },
            { speaker: "B", en: "Coming right up! That'll be $14 even. Do you want extra cilantro and salsa on top?", id: "Segera siap! Totalnya $14 pas. Mau tambahan cilantro dan salsa di atasnya?", note: "'Coming right up!' = respons vendor bahwa pesanan segera disiapkan" }
          ]}
        />

        <ConversationCard
          speakers={{ A: "Amy", B: "Ben" }}
          situation="Two friends explore a large food truck festival together and plan their strategy"
          lines={[
            { speaker: "A", en: "There are so many trucks — I don't even know where to start!", id: "Ada begitu banyak truk — aku bahkan tidak tahu harus mulai dari mana!" },
            { speaker: "B", en: "Strategy: we do one lap first, then decide. That way we don't fill up on the first thing we see.", id: "Strateginya: kita jalan satu putaran dulu, baru memutuskan. Jadi kita tidak kenyang pada hal pertama yang kita lihat.", note: "'Do one lap' = berjalan mengelilingi seluruh area sekali" },
            { speaker: "A", en: "Smart! Oh, look — there's a crepe truck over there. I could smell it from the entrance!", id: "Cerdas! Oh, lihat — ada truk crepe di sana. Aku bisa mencium baunya dari pintu masuk!" },
            { speaker: "B", en: "And there's a Korean BBQ one! Okay, this lap is going to be very dangerous for my diet.", id: "Dan ada yang Korean BBQ! Oke, putaran ini akan sangat berbahaya untuk dietku." },
            { speaker: "A", en: "Diet? At a food festival? Come on! What are you getting?", id: "Diet? Di festival makanan? Ayolah! Kamu mau pesan apa?" },
            { speaker: "B", en: "Everything. I'm getting everything. Let's start with the Korean BBQ bao buns.", id: "Semuanya. Aku mau pesan segalanya. Ayo mulai dari Korean BBQ bao buns." }
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "best-seller", meaning: "Produk yang paling banyak terjual" },
            { phrase: "a real kick to it", meaning: "Ada sensasi pedas atau rasa kuat yang terasa" },
            { phrase: "Coming right up!", meaning: "Segera disiapkan! (respons vendor ke pelanggan)" },
            { phrase: "do one lap", meaning: "Berjalan mengelilingi seluruh area sekali dulu" },
            { phrase: "fill up on", meaning: "Kenyang / terlalu banyak makan sesuatu" },
            { phrase: "limeade", meaning: "Minuman segar dari perasan jeruk nipis dan air gula" }
          ]}
        />

        <FillInBlank
          sentence="Let's do one ___ first before we order — there might be something better around the corner."
          options={["lap", "round", "loop", "tour"]}
          answer="lap"
          explanation="'Do one lap' = berjalan satu putaran penuh mengelilingi area — idiom umum di festival atau pameran"
        />

        <FillInBlank
          sentence="Don't ___ up on the free samples — save room for the main dishes!"
          options={["fill", "eat", "stuff", "load"]}
          answer="fill"
          explanation="'Fill up on' = phrasal verb yang berarti makan terlalu banyak sesuatu hingga kenyang sebelum makan yang lain"
        />

        <CulturalNote
          note="Food truck festivals have become enormously popular in North America, Australia, and Europe. They typically feature 20 to 100 trucks serving everything from gourmet burgers to ethnic cuisines. Most festivals are free to enter, with payment per item. It is common to share dishes with friends and try a little from many trucks rather than eating a full meal from one. Check-in at nearby seating areas is casual and social — strangers often share picnic tables."
        />

        <PronunciationTip
          tip="Food words can be tricky to pronounce. 'Chipotle' is commonly mispronounced — it is 'chih-POHT-lay' (the E is pronounced, not silent). 'Cilantro' = 'sih-LAN-troh'. 'Limeade' = 'LIME-ayd'. Notice how American English food culture has borrowed many Spanish and Asian words. Learning their correct pronunciations will help you sound natural when ordering at food trucks and restaurants."
        />

        <ExpressionMeter
          formal={["I would like to place an order, please.", "Could you describe the spice level?", "I will have two of those, thank you."]}
          informal={["Coming right up!", "It has a real kick to it.", "I'll take two, please!"]}
        />
      </div>
    )
  }
]
