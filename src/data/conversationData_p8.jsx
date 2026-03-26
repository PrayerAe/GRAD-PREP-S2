import { SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank, CulturalNote, PronunciationTip, ExpressionMeter } from './conversationData'

// Day 62: Road Trip Planning
const Day62Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky */}
    <rect width="200" height="90" fill="#ccfbf1" />
    {/* Ground */}
    <rect x="0" y="90" width="200" height="50" fill="#d4a96a" />
    {/* Road */}
    <rect x="0" y="95" width="200" height="30" fill="#4b5563" />
    {/* Road dashes */}
    <rect x="10" y="108" width="20" height="4" fill="#fbbf24" rx="1" />
    <rect x="50" y="108" width="20" height="4" fill="#fbbf24" rx="1" />
    <rect x="90" y="108" width="20" height="4" fill="#fbbf24" rx="1" />
    <rect x="130" y="108" width="20" height="4" fill="#fbbf24" rx="1" />
    <rect x="170" y="108" width="20" height="4" fill="#fbbf24" rx="1" />
    {/* Mountains */}
    <polygon points="20,90 55,40 90,90" fill="#5eead4" />
    <polygon points="50,90 90,30 130,90" fill="#14b8a6" />
    <polygon points="110,90 150,45 190,90" fill="#5eead4" />
    {/* Snow caps */}
    <polygon points="55,40 65,55 45,55" fill="white" />
    <polygon points="90,30 102,50 78,50" fill="white" />
    <polygon points="150,45 160,60 140,60" fill="white" />
    {/* Car */}
    <rect x="55" y="90" width="50" height="20" fill="#ef4444" rx="4" />
    <rect x="62" y="80" width="34" height="14" fill="#fca5a5" rx="3" />
    <rect x="65" y="82" width="12" height="9" fill="#bae6fd" rx="1" />
    <rect x="81" y="82" width="12" height="9" fill="#bae6fd" rx="1" />
    <circle cx="65" cy="110" r="7" fill="#1e293b" />
    <circle cx="65" cy="110" r="3" fill="#94a3b8" />
    <circle cx="95" cy="110" r="7" fill="#1e293b" />
    <circle cx="95" cy="110" r="3" fill="#94a3b8" />
    {/* Map */}
    <rect x="148" y="20" width="45" height="35" fill="#fef9c3" rx="3" stroke="#f59e0b" strokeWidth="1" />
    <path d="M155 28 Q165 35 175 30 Q185 25 190 40" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
    <circle cx="155" cy="28" r="2" fill="#ef4444" />
    <circle cx="190" cy="40" r="2" fill="#22c55e" />
    <text x="170" y="48" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">ROAD MAP</text>
    {/* Sun */}
    <circle cx="25" cy="22" r="12" fill="#fbbf24" />
    <line x1="25" y1="6" x2="25" y2="2" stroke="#f59e0b" strokeWidth="2" />
    <line x1="39" y1="22" x2="43" y2="22" stroke="#f59e0b" strokeWidth="2" />
    <line x1="35" y1="12" x2="38" y2="9" stroke="#f59e0b" strokeWidth="2" />
    <line x1="35" y1="32" x2="38" y2="35" stroke="#f59e0b" strokeWidth="2" />
    {/* Road sign */}
    <rect x="138" y="65" width="28" height="16" fill="#14b8a6" rx="2" />
    <text x="152" y="75" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">NEXT EXIT</text>
    <rect x="150" y="81" width="4" height="14" fill="#64748b" />
  </svg>
)

// Day 63: Pet Adoption
const Day63Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - shelter */}
    <rect width="200" height="140" fill="#fef3c7" />
    {/* Floor */}
    <rect x="0" y="110" width="200" height="30" fill="#fde68a" />
    {/* Shelter counter */}
    <rect x="100" y="75" width="90" height="35" fill="#92400e" rx="3" />
    <rect x="105" y="80" width="80" height="20" fill="#a16207" rx="2" />
    {/* Sign */}
    <rect x="110" y="55" width="70" height="16" fill="#f59e0b" rx="3" />
    <text x="145" y="66" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">PET ADOPTION</text>
    {/* Shelter staff */}
    <circle cx="158" cy="60" r="9" fill="#fde68a" />
    <rect x="150" y="69" width="16" height="22" fill="#0d9488" rx="2" />
    {/* Staff hair */}
    <ellipse cx="158" cy="53" rx="9" ry="5" fill="#92400e" />
    {/* Adopter */}
    <circle cx="55" cy="65" r="9" fill="#fca5a5" />
    <rect x="47" y="74" width="16" height="22" fill="#7c3aed" rx="2" />
    {/* Cage 1 - dog */}
    <rect x="5" y="55" width="35" height="45" fill="none" stroke="#64748b" strokeWidth="2" rx="2" />
    {/* Cage bars */}
    <line x1="14" y1="55" x2="14" y2="100" stroke="#64748b" strokeWidth="1.5" />
    <line x1="23" y1="55" x2="23" y2="100" stroke="#64748b" strokeWidth="1.5" />
    <line x1="32" y1="55" x2="32" y2="100" stroke="#64748b" strokeWidth="1.5" />
    {/* Dog in cage */}
    <circle cx="22" cy="80" r="7" fill="#d97706" />
    <ellipse cx="22" cy="89" rx="7" ry="5" fill="#d97706" />
    <ellipse cx="17" cy="77" rx="3" ry="4" fill="#b45309" />
    <ellipse cx="27" cy="77" rx="3" ry="4" fill="#b45309" />
    <ellipse cx="22" cy="83" rx="3" ry="2" fill="#f59e0b" />
    <circle cx="20" cy="79" r="1.5" fill="#1e293b" />
    <circle cx="24" cy="79" r="1.5" fill="#1e293b" />
    {/* Dog nose */}
    <ellipse cx="22" cy="83" rx="2" ry="1.5" fill="#92400e" />
    {/* Cage 2 - cat */}
    <rect x="5" y="5" width="35" height="45" fill="none" stroke="#64748b" strokeWidth="2" rx="2" />
    <line x1="14" y1="5" x2="14" y2="50" stroke="#64748b" strokeWidth="1.5" />
    <line x1="23" y1="5" x2="23" y2="50" stroke="#64748b" strokeWidth="1.5" />
    <line x1="32" y1="5" x2="32" y2="50" stroke="#64748b" strokeWidth="1.5" />
    {/* Cat in cage */}
    <circle cx="22" cy="28" r="7" fill="#a78bfa" />
    <polygon points="17,22 14,16 20,20" fill="#a78bfa" />
    <polygon points="27,22 30,16 24,20" fill="#a78bfa" />
    <circle cx="19" cy="27" r="1.5" fill="#1e293b" />
    <circle cx="25" cy="27" r="1.5" fill="#1e293b" />
    <ellipse cx="22" cy="31" rx="2" ry="1.5" fill="#ec4899" />
    <line x1="16" y1="31" x2="11" y2="30" stroke="#1e293b" strokeWidth="0.8" />
    <line x1="16" y1="33" x2="11" y2="34" stroke="#1e293b" strokeWidth="0.8" />
    <line x1="28" y1="31" x2="33" y2="30" stroke="#1e293b" strokeWidth="0.8" />
    <line x1="28" y1="33" x2="33" y2="34" stroke="#1e293b" strokeWidth="0.8" />
    {/* Heart speech bubble */}
    <rect x="60" y="48" width="38" height="16" fill="white" rx="6" stroke="#ec4899" strokeWidth="1" />
    <polygon points="63,64 60,70 70,64" fill="white" stroke="#ec4899" strokeWidth="1" />
    <text x="79" y="59" textAnchor="middle" fill="#ec4899" fontSize="6">I love dogs!</text>
    {/* Paw prints */}
    <circle cx="168" cy="108" r="2" fill="#d97706" />
    <circle cx="173" cy="105" r="2" fill="#d97706" />
    <circle cx="178" cy="108" r="2" fill="#d97706" />
    <ellipse cx="173" cy="113" rx="4" ry="3" fill="#d97706" />
    <circle cx="183" cy="118" r="2" fill="#d97706" />
    <circle cx="188" cy="115" r="2" fill="#d97706" />
    <circle cx="193" cy="118" r="2" fill="#d97706" />
    <ellipse cx="188" cy="123" rx="4" ry="3" fill="#d97706" />
  </svg>
)

// Day 64: Research Lab Meeting
const Day64Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - lab */}
    <rect width="200" height="140" fill="#ecfdf5" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#d1fae5" />
    {/* Lab bench */}
    <rect x="0" y="90" width="200" height="12" fill="#6b7280" rx="2" />
    {/* Lab equipment on bench */}
    {/* Flask 1 */}
    <rect x="8" y="70" width="10" height="22" fill="#a7f3d0" rx="1" />
    <rect x="6" y="85" width="14" height="8" fill="#34d399" rx="1" />
    <rect x="10" y="67" width="6" height="5" fill="#6b7280" rx="1" />
    {/* Bubbles in flask */}
    <circle cx="13" cy="78" r="1.5" fill="#10b981" opacity="0.7" />
    <circle cx="16" cy="82" r="1" fill="#10b981" opacity="0.7" />
    <circle cx="10" cy="80" r="1" fill="#10b981" opacity="0.7" />
    {/* Test tubes rack */}
    <rect x="28" y="68" width="22" height="24" fill="#e5e7eb" rx="1" />
    <rect x="31" y="66" width="4" height="20" fill="#6ee7b7" rx="2" />
    <rect x="37" y="66" width="4" height="22" fill="#fca5a5" rx="2" />
    <rect x="43" y="66" width="4" height="18" fill="#93c5fd" rx="2" />
    {/* Microscope */}
    <rect x="60" y="65" width="18" height="26" fill="#374151" rx="2" />
    <rect x="66" y="55" width="6" height="12" fill="#4b5563" rx="1" />
    <ellipse cx="69" cy="55" rx="5" ry="4" fill="#1e293b" />
    <circle cx="69" cy="55" r="2" fill="#60a5fa" />
    <rect x="56" y="89" width="26" height="4" fill="#374151" rx="1" />
    {/* Computer showing data */}
    <rect x="88" y="55" width="30" height="22" fill="#1e293b" rx="2" />
    <rect x="90" y="57" width="26" height="18" fill="#0f172a" rx="1" />
    {/* Data on screen */}
    <line x1="93" y1="70" x2="93" y2="62" stroke="#22c55e" strokeWidth="1" />
    <line x1="97" y1="70" x2="97" y2="65" stroke="#22c55e" strokeWidth="1" />
    <line x1="101" y1="70" x2="101" y2="60" stroke="#22c55e" strokeWidth="1" />
    <line x1="105" y1="70" x2="105" y2="63" stroke="#22c55e" strokeWidth="1" />
    <line x1="109" y1="70" x2="109" y2="59" stroke="#22c55e" strokeWidth="1" />
    <line x1="113" y1="70" x2="113" y2="64" stroke="#22c55e" strokeWidth="1" />
    <rect x="90" y="76" width="26" height="3" fill="#374151" rx="1" />
    {/* Whiteboard */}
    <rect x="130" y="15" width="65" height="60" fill="#f8fafc" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <text x="162" y="27" textAnchor="middle" fill="#1e3a8a" fontSize="6" fontWeight="bold">HYPOTHESIS</text>
    <line x1="135" y1="32" x2="191" y2="32" stroke="#94a3b8" strokeWidth="0.5" />
    <text x="162" y="42" textAnchor="middle" fill="#374151" fontSize="5">H₀: μ₁ = μ₂</text>
    <text x="162" y="52" textAnchor="middle" fill="#374151" fontSize="5">p-value: 0.024</text>
    <text x="162" y="62" textAnchor="middle" fill="#16a34a" fontSize="5" fontWeight="bold">REJECT H₀</text>
    {/* Lab coat researcher 1 */}
    <circle cx="25" cy="40" r="9" fill="#fde68a" />
    <rect x="17" y="49" width="16" height="24" fill="white" rx="2" />
    <rect x="20" y="50" width="10" height="5" fill="#d1fae5" />
    {/* Glasses */}
    <circle cx="22" cy="39" r="3" fill="none" stroke="#374151" strokeWidth="0.8" />
    <circle cx="28" cy="39" r="3" fill="none" stroke="#374151" strokeWidth="0.8" />
    <line x1="25" y1="39" x2="27" y2="39" stroke="#374151" strokeWidth="0.8" />
    {/* Lab coat researcher 2 */}
    <circle cx="110" cy="35" r="9" fill="#fca5a5" />
    <rect x="102" y="44" width="16" height="24" fill="white" rx="2" />
    <rect x="105" y="45" width="10" height="5" fill="#d1fae5" />
    {/* Hair */}
    <ellipse cx="110" cy="28" rx="9" ry="5" fill="#1e293b" />
  </svg>
)

// Day 65: Team Building Activity
const Day65Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - outdoor area */}
    <rect width="200" height="100" fill="#dbeafe" />
    {/* Ground */}
    <rect x="0" y="100" width="200" height="40" fill="#86efac" />
    {/* Grass texture */}
    <line x1="10" y1="108" x2="10" y2="103" stroke="#4ade80" strokeWidth="1" />
    <line x1="20" y1="106" x2="20" y2="101" stroke="#4ade80" strokeWidth="1" />
    <line x1="30" y1="109" x2="30" y2="104" stroke="#4ade80" strokeWidth="1" />
    <line x1="50" y1="107" x2="50" y2="102" stroke="#4ade80" strokeWidth="1" />
    <line x1="70" y1="108" x2="70" y2="103" stroke="#4ade80" strokeWidth="1" />
    <line x1="100" y1="106" x2="100" y2="101" stroke="#4ade80" strokeWidth="1" />
    <line x1="140" y1="109" x2="140" y2="104" stroke="#4ade80" strokeWidth="1" />
    <line x1="170" y1="107" x2="170" y2="102" stroke="#4ade80" strokeWidth="1" />
    <line x1="190" y1="108" x2="190" y2="103" stroke="#4ade80" strokeWidth="1" />
    {/* Cloud */}
    <ellipse cx="40" cy="18" rx="20" ry="12" fill="white" />
    <ellipse cx="25" cy="22" rx="13" ry="9" fill="white" />
    <ellipse cx="55" cy="22" rx="13" ry="9" fill="white" />
    {/* Sun */}
    <circle cx="170" cy="22" r="14" fill="#fbbf24" />
    {/* Obstacle course - hurdles */}
    <rect x="10" y="88" width="4" height="18" fill="#ef4444" rx="1" />
    <rect x="40" y="88" width="4" height="18" fill="#ef4444" rx="1" />
    <rect x="10" y="88" width="34" height="4" fill="#ef4444" rx="1" />
    {/* Rope bridge */}
    <line x1="85" y1="85" x2="120" y2="85" stroke="#92400e" strokeWidth="2" />
    <line x1="85" y1="95" x2="120" y2="95" stroke="#92400e" strokeWidth="2" />
    <line x1="90" y1="85" x2="90" y2="95" stroke="#a16207" strokeWidth="1.5" />
    <line x1="100" y1="85" x2="100" y2="95" stroke="#a16207" strokeWidth="1.5" />
    <line x1="110" y1="85" x2="110" y2="95" stroke="#a16207" strokeWidth="1.5" />
    <line x1="120" y1="85" x2="120" y2="95" stroke="#a16207" strokeWidth="1.5" />
    {/* Person 1 - jumping hurdle */}
    <circle cx="25" cy="68" r="8" fill="#fde68a" />
    <rect x="18" y="76" width="14" height="18" fill="#3b82f6" rx="2" />
    <line x1="18" y1="90" x2="12" y2="100" stroke="#3b82f6" strokeWidth="2" />
    <line x1="32" y1="90" x2="36" y2="98" stroke="#3b82f6" strokeWidth="2" />
    {/* Person 2 - on rope bridge */}
    <circle cx="102" cy="72" r="8" fill="#fca5a5" />
    <rect x="95" y="80" width="14" height="18" fill="#f59e0b" rx="2" />
    {/* Person 3 - cheering */}
    <circle cx="155" cy="75" r="8" fill="#a7f3d0" />
    <rect x="148" y="83" width="14" height="18" fill="#8b5cf6" rx="2" />
    {/* Arms raised */}
    <line x1="148" y1="87" x2="140" y2="78" stroke="#8b5cf6" strokeWidth="2" />
    <line x1="162" y1="87" x2="170" y2="78" stroke="#8b5cf6" strokeWidth="2" />
    {/* Banner */}
    <rect x="50" y="10" width="100" height="18" fill="#1d4ed8" rx="4" />
    <text x="100" y="22" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">TEAM CHALLENGE!</text>
  </svg>
)

// Day 66: Physical Therapy Session
const Day66Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - therapy room */}
    <rect width="200" height="140" fill="#f0fdfa" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#ccfbf1" />
    {/* Therapy table */}
    <rect x="40" y="80" width="100" height="15" fill="#0d9488" rx="3" />
    <rect x="42" y="95" width="8" height="20" fill="#0f766e" rx="1" />
    <rect x="130" y="95" width="8" height="20" fill="#0f766e" rx="1" />
    {/* Patient on table */}
    <circle cx="90" cy="68" r="9" fill="#fde68a" />
    <rect x="52" y="77" width="76" height="8" fill="#fde68a" rx="2" />
    {/* Patient arm raised */}
    <line x1="128" y1="77" x2="148" y2="68" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" />
    {/* Therapist */}
    <circle cx="160" cy="60" r="9" fill="#fca5a5" />
    <rect x="152" y="69" width="16" height="22" fill="#0d9488" rx="2" />
    {/* Therapist hair bun */}
    <circle cx="160" cy="53" r="5" fill="#92400e" />
    {/* Resistance bands */}
    <path d="M148 68 Q165 55 172 68" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    {/* Exercise equipment */}
    {/* Weights */}
    <rect x="5" y="95" width="18" height="10" fill="#374151" rx="2" />
    <rect x="5" y="95" width="4" height="10" fill="#6b7280" rx="2" />
    <rect x="19" y="95" width="4" height="10" fill="#6b7280" rx="2" />
    <text x="14" y="104" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">5kg</text>
    <rect x="5" y="107" width="18" height="10" fill="#374151" rx="2" />
    <rect x="5" y="107" width="4" height="10" fill="#6b7280" rx="2" />
    <rect x="19" y="107" width="4" height="10" fill="#6b7280" rx="2" />
    <text x="14" y="116" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">10kg</text>
    {/* Poster - body anatomy */}
    <rect x="155" y="10" width="40" height="60" fill="#fff7ed" rx="2" stroke="#fed7aa" strokeWidth="1" />
    <ellipse cx="175" cy="22" rx="8" ry="9" fill="#fde68a" />
    <rect x="169" y="31" width="12" height="18" fill="#fca5a5" rx="1" />
    <line x1="168" y1="33" x2="160" y2="44" stroke="#fca5a5" strokeWidth="2" />
    <line x1="181" y1="33" x2="189" y2="44" stroke="#fca5a5" strokeWidth="2" />
    <line x1="172" y1="49" x2="169" y2="64" stroke="#fca5a5" strokeWidth="2" />
    <line x1="178" y1="49" x2="181" y2="64" stroke="#fca5a5" strokeWidth="2" />
    <text x="175" y="73" textAnchor="middle" fill="#0d9488" fontSize="5" fontWeight="bold">ANATOMY</text>
    {/* Progress chart on wall */}
    <rect x="5" y="10" width="50" height="40" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <text x="30" y="20" textAnchor="middle" fill="#374151" fontSize="5" fontWeight="bold">PROGRESS</text>
    <line x1="10" y1="44" x2="10" y2="24" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="10" y1="44" x2="52" y2="44" stroke="#94a3b8" strokeWidth="0.8" />
    <polyline points="12,42 20,38 28,35 36,30 44,26 52,22" fill="none" stroke="#0d9488" strokeWidth="1.5" />
    {/* Clipboard */}
    <rect x="168" y="78" width="22" height="28" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <rect x="174" y="75" width="10" height="6" fill="#6b7280" rx="2" />
    <line x1="171" y1="85" x2="187" y2="85" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="171" y1="90" x2="187" y2="90" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="171" y1="95" x2="183" y2="95" stroke="#94a3b8" strokeWidth="0.5" />
  </svg>
)

// Day 67: Escape Room Adventure
const Day67Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Dark room background */}
    <rect width="200" height="140" fill="#1e1b4b" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#312e81" />
    {/* Spotlight effects */}
    <ellipse cx="100" cy="70" rx="60" ry="40" fill="#fef3c7" opacity="0.15" />
    {/* Puzzle lock on wall */}
    <rect x="75" y="20" width="50" height="55" fill="#292524" rx="4" stroke="#fbbf24" strokeWidth="2" />
    <circle cx="100" cy="52" r="18" fill="#44403c" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="100" cy="52" r="8" fill="#292524" />
    <rect x="96" y="42" width="8" height="14" fill="#fbbf24" rx="2" />
    {/* Lock numbers/symbols */}
    <text x="87" y="42" fill="#f59e0b" fontSize="8" fontWeight="bold">?</text>
    <text x="100" y="32" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">!</text>
    <text x="112" y="42" fill="#f59e0b" fontSize="8" fontWeight="bold">*</text>
    {/* Clue papers */}
    <rect x="10" y="70" width="30" height="22" fill="#fffbeb" rx="2" />
    <line x1="14" y1="76" x2="36" y2="76" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="14" y1="80" x2="36" y2="80" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="14" y1="84" x2="28" y2="84" stroke="#94a3b8" strokeWidth="0.8" />
    <text x="25" y="75" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">CLUE #1</text>
    <rect x="155" y="65" width="30" height="22" fill="#fffbeb" rx="2" />
    <line x1="159" y1="71" x2="181" y2="71" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="159" y1="75" x2="181" y2="75" stroke="#94a3b8" strokeWidth="0.8" />
    <line x1="159" y1="79" x2="173" y2="79" stroke="#94a3b8" strokeWidth="0.8" />
    <text x="170" y="70" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">CLUE #3</text>
    {/* Players */}
    {/* Player 1 */}
    <circle cx="45" cy="88" r="8" fill="#fde68a" />
    <rect x="37" y="96" width="14" height="18" fill="#ec4899" rx="2" />
    {/* Flashlight */}
    <rect x="37" y="93" width="12" height="5" fill="#f59e0b" rx="2" />
    <polygon points="49,91 55,86 55,98 49,96" fill="#fef3c7" opacity="0.7" />
    {/* Player 2 */}
    <circle cx="150" cy="90" r="8" fill="#a7f3d0" />
    <rect x="142" y="98" width="14" height="18" fill="#3b82f6" rx="2" />
    {/* Magnifying glass */}
    <circle cx="165" cy="95" r="5" fill="none" stroke="#fbbf24" strokeWidth="2" />
    <line x1="169" y1="99" x2="174" y2="104" stroke="#fbbf24" strokeWidth="2" />
    {/* Countdown timer */}
    <rect x="75" y="5" width="50" height="14" fill="#dc2626" rx="3" />
    <text x="100" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">⏱ 45:00</text>
    {/* Cobwebs */}
    <line x1="0" y1="0" x2="20" y2="20" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
    <line x1="0" y1="0" x2="15" y2="25" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
    <line x1="0" y1="0" x2="25" y2="15" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
    <line x1="200" y1="0" x2="180" y2="20" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
    <line x1="200" y1="0" x2="185" y2="25" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
    <line x1="200" y1="0" x2="175" y2="15" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.6" />
  </svg>
)

// Day 68: Filing Taxes
const Day68Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - home office */}
    <rect width="200" height="140" fill="#f1f5f9" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#e2e8f0" />
    {/* Desk */}
    <rect x="20" y="90" width="165" height="15" fill="#92400e" rx="2" />
    <rect x="22" y="105" width="8" height="20" fill="#78350f" rx="1" />
    <rect x="175" y="105" width="8" height="20" fill="#78350f" rx="1" />
    {/* Computer */}
    <rect x="75" y="55" width="55" height="38" fill="#1e293b" rx="3" />
    <rect x="78" y="58" width="49" height="32" fill="#0f172a" rx="2" />
    {/* Tax form on screen */}
    <rect x="80" y="60" width="22" height="28" fill="white" rx="1" />
    <text x="91" y="68" textAnchor="middle" fill="#1e3a8a" fontSize="5" fontWeight="bold">FORM 1040</text>
    <line x1="82" y1="72" x2="100" y2="72" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="82" y1="76" x2="100" y2="76" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="82" y1="80" x2="98" y2="80" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="82" y1="84" x2="100" y2="84" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Tax software on other part of screen */}
    <rect x="104" y="60" width="21" height="28" fill="#1e3a8a" rx="1" />
    <text x="114" y="70" textAnchor="middle" fill="#60a5fa" fontSize="4">TAX</text>
    <text x="114" y="76" textAnchor="middle" fill="#60a5fa" fontSize="4">SOFT</text>
    <text x="114" y="82" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">$2,340</text>
    <text x="114" y="86" textAnchor="middle" fill="#fbbf24" fontSize="4">REFUND</text>
    {/* Keyboard */}
    <rect x="72" y="93" width="62" height="8" fill="#334155" rx="2" />
    {/* Documents pile */}
    <rect x="22" y="70" width="40" height="22" fill="white" rx="1" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="25" y="66" width="40" height="22" fill="#fffbeb" rx="1" stroke="#fde68a" strokeWidth="1" />
    <rect x="28" y="62" width="40" height="22" fill="#fff7ed" rx="1" stroke="#fed7aa" strokeWidth="1" />
    <text x="48" y="75" textAnchor="middle" fill="#92400e" fontSize="5" fontWeight="bold">W-2 FORM</text>
    <line x1="32" y1="79" x2="64" y2="79" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="32" y1="82" x2="60" y2="82" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Calculator */}
    <rect x="148" y="65" width="28" height="30" fill="#374151" rx="3" />
    <rect x="150" y="67" width="24" height="10" fill="#6ee7b7" rx="1" />
    <text x="162" y="75" textAnchor="middle" fill="#1e293b" fontSize="5" fontWeight="bold">$45,280</text>
    <rect x="151" y="79" width="6" height="5" fill="#6b7280" rx="1" />
    <rect x="159" y="79" width="6" height="5" fill="#6b7280" rx="1" />
    <rect x="167" y="79" width="6" height="5" fill="#6b7280" rx="1" />
    <rect x="151" y="86" width="6" height="5" fill="#6b7280" rx="1" />
    <rect x="159" y="86" width="6" height="5" fill="#ef4444" rx="1" />
    <rect x="167" y="86" width="6" height="5" fill="#22c55e" rx="1" />
    {/* Person at desk */}
    <circle cx="100" cy="38" r="10" fill="#fde68a" />
    <rect x="90" y="48" width="20" height="22" fill="#475569" rx="2" />
    {/* Hair */}
    <ellipse cx="100" cy="30" rx="10" ry="6" fill="#1e293b" />
    {/* Stressed look */}
    <circle cx="96" cy="37" r="1.5" fill="#374151" />
    <circle cx="104" cy="37" r="1.5" fill="#374151" />
    <path d="M96 43 Q100 40 104 43" fill="none" stroke="#374151" strokeWidth="1" />
    {/* Calendar on wall */}
    <rect x="160" y="10" width="35" height="40" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <rect x="160" y="10" width="35" height="10" fill="#dc2626" rx="2" />
    <text x="177" y="18" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">APRIL</text>
    <text x="177" y="32" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">15</text>
    <text x="177" y="44" textAnchor="middle" fill="#dc2626" fontSize="5" fontWeight="bold">DEADLINE!</text>
    {/* Coffee mug */}
    <rect x="148" y="100" width="15" height="12" fill="#92400e" rx="2" />
    <path d="M163 103 Q168 103 168 107 Q168 111 163 111" fill="none" stroke="#92400e" strokeWidth="1.5" />
    <rect x="149" y="100" width="13" height="4" fill="#6f4e37" rx="1" />
  </svg>
)

// Day 69: Online Learning Platform
const Day69Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Background - student's room */}
    <rect width="200" height="140" fill="#eff6ff" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#dbeafe" />
    {/* Desk */}
    <rect x="10" y="95" width="120" height="10" fill="#92400e" rx="2" />
    <rect x="12" y="105" width="7" height="20" fill="#78350f" rx="1" />
    <rect x="111" y="105" width="7" height="20" fill="#78350f" rx="1" />
    {/* Main laptop/screen */}
    <rect x="25" y="55" width="80" height="45" fill="#1e293b" rx="3" />
    <rect x="28" y="58" width="74" height="39" fill="#0f172a" rx="2" />
    {/* Course interface on screen */}
    {/* Header bar */}
    <rect x="28" y="58" width="74" height="10" fill="#1d4ed8" rx="2" />
    <text x="65" y="65" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">EduLearn Pro</text>
    {/* Video lecture area */}
    <rect x="30" y="70" width="48" height="24" fill="#1e293b" rx="1" />
    <polygon points="48,78 48,86 58,82" fill="#22c55e" />
    {/* Progress bar */}
    <rect x="30" y="95" width="48" height="3" fill="#374151" rx="1" />
    <rect x="30" y="95" width="30" height="3" fill="#3b82f6" rx="1" />
    {/* Course list sidebar */}
    <rect x="80" y="70" width="20" height="27" fill="#1e3a8a" rx="1" />
    <rect x="82" y="73" width="16" height="3" fill="#60a5fa" rx="1" />
    <rect x="82" y="78" width="16" height="3" fill="#60a5fa" rx="1" />
    <rect x="82" y="83" width="16" height="3" fill="#22c55e" rx="1" />
    <rect x="82" y="88" width="16" height="3" fill="#6b7280" rx="1" />
    <rect x="82" y="93" width="10" height="3" fill="#6b7280" rx="1" />
    {/* Keyboard */}
    <rect x="22" y="100" width="88" height="8" fill="#334155" rx="2" />
    {/* Headphones on desk */}
    <path d="M130 75 Q145 60 160 75" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
    <rect x="126" y="75" width="8" height="12" fill="#374151" rx="3" />
    <rect x="156" y="75" width="8" height="12" fill="#374151" rx="3" />
    {/* Notebook */}
    <rect x="140" y="90" width="35" height="30" fill="#fef9c3" rx="2" stroke="#fde68a" strokeWidth="1" />
    <line x1="142" y1="98" x2="173" y2="98" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="142" y1="103" x2="173" y2="103" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="142" y1="108" x2="173" y2="108" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="142" y1="113" x2="165" y2="113" stroke="#94a3b8" strokeWidth="0.5" />
    <text x="157" y="97" textAnchor="middle" fill="#92400e" fontSize="4" fontWeight="bold">NOTES</text>
    {/* Student */}
    <circle cx="160" cy="50" r="9" fill="#fde68a" />
    <rect x="152" y="59" width="16" height="22" fill="#7c3aed" rx="2" />
    {/* Hair */}
    <ellipse cx="160" cy="43" rx="9" ry="5" fill="#92400e" />
    {/* Certificate on wall */}
    <rect x="5" y="10" width="55" height="38" fill="white" rx="3" stroke="#fbbf24" strokeWidth="2" />
    <text x="32" y="22" textAnchor="middle" fill="#1e3a8a" fontSize="5" fontWeight="bold">CERTIFICATE</text>
    <text x="32" y="30" textAnchor="middle" fill="#374151" fontSize="4">OF COMPLETION</text>
    <text x="32" y="38" textAnchor="middle" fill="#d97706" fontSize="5">★ ★ ★ ★ ★</text>
    <ellipse cx="32" cy="44" rx="12" ry="3" fill="#fef3c7" />
    <text x="32" y="46" textAnchor="middle" fill="#92400e" fontSize="3">YOUR NAME</text>
    {/* Achievements/badges */}
    <circle cx="150" cy="22" r="9" fill="#fbbf24" />
    <text x="150" y="26" textAnchor="middle" fill="white" fontSize="9">★</text>
    <circle cx="168" cy="22" r="9" fill="#22c55e" />
    <text x="168" y="26" textAnchor="middle" fill="white" fontSize="8">✓</text>
    <circle cx="186" cy="22" r="9" fill="#3b82f6" />
    <text x="186" y="26" textAnchor="middle" fill="white" fontSize="8">🏆</text>
  </svg>
)

// Day 70: Beach Vacation
const Day70Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky */}
    <rect width="200" height="80" fill="#7dd3fc" />
    {/* Ocean */}
    <rect x="0" y="75" width="200" height="35" fill="#0ea5e9" />
    {/* Ocean waves */}
    <path d="M0 82 Q25 75 50 82 Q75 89 100 82 Q125 75 150 82 Q175 89 200 82" fill="none" stroke="#38bdf8" strokeWidth="2" />
    <path d="M0 90 Q20 85 40 90 Q60 95 80 90 Q100 85 120 90 Q140 95 160 90 Q180 85 200 90" fill="none" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.8" />
    {/* Sand */}
    <rect x="0" y="105" width="200" height="35" fill="#fde68a" />
    {/* Sand texture */}
    <ellipse cx="30" cy="120" rx="20" ry="3" fill="#fbbf24" opacity="0.5" />
    <ellipse cx="80" cy="125" rx="15" ry="2" fill="#fbbf24" opacity="0.5" />
    <ellipse cx="150" cy="118" rx="18" ry="2.5" fill="#fbbf24" opacity="0.5" />
    {/* Sun */}
    <circle cx="170" cy="22" r="16" fill="#fbbf24" />
    <line x1="170" y1="2" x2="170" y2="0" stroke="#f59e0b" strokeWidth="2" />
    <line x1="190" y1="22" x2="195" y2="22" stroke="#f59e0b" strokeWidth="2" />
    <line x1="186" y1="8" x2="190" y2="5" stroke="#f59e0b" strokeWidth="2" />
    <line x1="186" y1="36" x2="190" y2="39" stroke="#f59e0b" strokeWidth="2" />
    {/* Beach umbrella */}
    <ellipse cx="80" cy="90" rx="35" ry="12" fill="#ef4444" />
    <ellipse cx="80" cy="90" rx="30" ry="10" fill="#f97316" />
    <line x1="80" y1="90" x2="80" y2="130" stroke="#92400e" strokeWidth="3" />
    {/* Umbrella stripes */}
    <path d="M50 88 L80 90 L80 90" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
    <path d="M110 88 L80 90" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
    <path d="M65 78 L80 90" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
    <path d="M95 78 L80 90" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
    {/* Beach towels */}
    <rect x="45" y="113" width="35" height="15" fill="#a78bfa" rx="2" />
    <rect x="85" y="113" width="35" height="15" fill="#34d399" rx="2" />
    {/* Person 1 - lying on towel */}
    <circle cx="62" cy="110" r="7" fill="#fde68a" />
    <rect x="50" y="113" width="24" height="8" fill="#fbbf24" rx="2" />
    {/* Sunglasses */}
    <rect x="58" y="109" width="9" height="4" fill="#1e293b" rx="1" />
    {/* Person 2 - waving */}
    <circle cx="102" cy="108" r="7" fill="#fca5a5" />
    <rect x="95" y="115" width="14" height="10" fill="#3b82f6" rx="2" />
    {/* Waving arm */}
    <line x1="95" y1="118" x2="85" y2="108" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round" />
    {/* Palm tree */}
    <rect x="5" y="78" width="6" height="40" fill="#92400e" rx="2" />
    <ellipse cx="8" cy="78" rx="18" ry="10" fill="#22c55e" />
    <ellipse cx="20" cy="75" rx="15" ry="8" fill="#16a34a" />
    <ellipse cx="0" cy="75" rx="14" ry="7" fill="#16a34a" />
    {/* Coconuts */}
    <circle cx="12" cy="80" r="4" fill="#92400e" />
    <circle cx="5" cy="82" r="3" fill="#78350f" />
    {/* Sand castle */}
    <rect x="155" y="107" width="30" height="20" fill="#d97706" rx="1" />
    <rect x="160" y="100" width="20" height="10" fill="#f59e0b" rx="1" />
    <rect x="165" y="95" width="10" height="8" fill="#d97706" rx="1" />
    <polygon points="165,95 175,95 170,88" fill="#ef4444" />
    {/* Seashells */}
    <ellipse cx="140" cy="128" rx="5" ry="3" fill="#fbbf24" />
    <ellipse cx="150" cy="132" rx="4" ry="2.5" fill="#fb923c" />
    <ellipse cx="130" cy="132" rx="4" ry="2.5" fill="#f9a8d4" />
  </svg>
)

export const conversationsPart8 = [
  {
    id: 62,
    day: 62,
    title: "Road Trip Planning",
    category: "Travel",
    difficulty: "Beginner",
    color: "teal",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Road Trip Planning" bg="from-teal-50 to-cyan-50">
          <Day62Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Maya", B: "Jake" }}
          situation="Two friends planning a road trip together at home"
          lines={[
            { speaker: "A", en: "I've been thinking about taking a road trip this summer. Are you interested?", id: "Aku lagi mikirin mau road trip musim panas ini. Kamu tertarik?" },
            { speaker: "B", en: "Definitely! Where do you want to go?", id: "Tentu saja! Kamu mau ke mana?" },
            { speaker: "A", en: "I was thinking we could drive up the coast. It's about six hours from here.", id: "Aku pikir kita bisa nyetir ke sepanjang pantai. Sekitar enam jam dari sini.", note: "'drive up the coast' = menyusuri jalur pantai" },
            { speaker: "B", en: "That sounds amazing! How many days should we plan for?", id: "Kedengarannya luar biasa! Berapa hari yang harus kita rencanakan?" },
            { speaker: "A", en: "I'd say at least five days so we can stop and explore along the way.", id: "Menurutku setidaknya lima hari agar kita bisa berhenti dan menjelajah di sepanjang jalan." },
            { speaker: "B", en: "Good idea. Should we book hotels in advance or just wing it?", id: "Ide bagus. Haruskah kita pesan hotel sebelumnya atau asal jalan saja?", note: "'wing it' = improvise tanpa rencana pasti" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Maya", B: "Jake" }}
          situation="Discussing logistics and packing for the trip"
          lines={[
            { speaker: "A", en: "I'll handle the navigation if you take care of the playlist.", id: "Aku akan urus navigasinya kalau kamu urus playlist-nya." },
            { speaker: "B", en: "Deal! I'll make a great mix. What should we pack for snacks?", id: "Deal! Aku akan buat mix yang bagus. Apa yang harus kita bawa untuk camilan?" },
            { speaker: "A", en: "Trail mix, chips, and plenty of water. Road trips can be long!", id: "Trail mix, keripik, dan banyak air. Road trip bisa panjang!" },
            { speaker: "B", en: "Don't forget sunscreen if we're stopping at the beach.", id: "Jangan lupa tabir surya kalau kita mampir ke pantai." },
            { speaker: "A", en: "Good call. Let's also download some podcasts in case there's no signal.", id: "Ide yang bagus. Mari kita unduh beberapa podcast juga jika tidak ada sinyal.", note: "'Good call' = saran yang bagus" },
            { speaker: "B", en: "Perfect plan! I can't wait. This is going to be an epic trip.", id: "Rencana sempurna! Aku tidak sabar. Ini akan jadi perjalanan yang luar biasa." },
          ]}
        />

        <KeyPhrasesCard
          title="Road Trip Vocabulary"
          color="emerald"
          phrases={[
            { phrase: "hit the road", meaning: "memulai perjalanan / berangkat" },
            { phrase: "make a pit stop", meaning: "berhenti sebentar (istirahat, isi bensin)" },
            { phrase: "scenic route", meaning: "rute pemandangan indah" },
            { phrase: "pull over", meaning: "menepi / berhenti di pinggir jalan" },
            { phrase: "road warrior", meaning: "orang yang sering bepergian jauh" },
            { phrase: "detour", meaning: "jalan memutar / jalan alternatif" },
          ]}
        />

        <FillInBlank
          sentence="We decided to take the _____ route along the mountains instead of the highway."
          blank="scenic"
          answer="scenic"
          hint="A route with beautiful views is called a _____ route."
        />

        <FillInBlank
          sentence="Let's _____ at the next gas station to fill up and use the restroom."
          blank="pull over"
          answer="pull over"
          hint="To stop the car at the side of the road is to _____ _____."
        />

        <CulturalNote
          note="Road trips are a deeply ingrained part of American and Australian culture. In the US, Route 66 is legendary among road trip enthusiasts. It is common to have a mix of planned stops and spontaneous detours. Many travelers keep a road trip journal or create scrapbooks to document their adventures."
        />

        <PronunciationTip
          tip="The word 'route' has two acceptable pronunciations in English: /ruːt/ (like 'root') is preferred in British English and parts of North America, while /raʊt/ (rhymes with 'out') is common in American English. Both are correct."
        />

        <ExpressionMeter
          expression="I can't wait!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 63,
    day: 63,
    title: "Pet Adoption",
    category: "Daily Life",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Pet Adoption Center" bg="from-amber-50 to-yellow-50">
          <Day63Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Sara", B: "Shelter Staff" }}
          situation="At an animal shelter, looking to adopt a pet"
          lines={[
            { speaker: "A", en: "Hi, I'd like to adopt a dog. Can you show me what's available?", id: "Halo, saya ingin mengadopsi anjing. Bisakah Anda menunjukkan yang tersedia?" },
            { speaker: "B", en: "Of course! We have several wonderful dogs looking for homes right now.", id: "Tentu saja! Kami punya beberapa anjing luar biasa yang sedang mencari rumah sekarang." },
            { speaker: "A", en: "I live in an apartment, so I need a dog that doesn't need too much space.", id: "Saya tinggal di apartemen, jadi saya butuh anjing yang tidak butuh terlalu banyak ruang." },
            { speaker: "B", en: "Then Biscuit would be a great fit! He's a small, calm beagle, about two years old.", id: "Kalau begitu Biscuit sangat cocok! Dia beagle kecil yang tenang, sekitar dua tahun.", note: "'a great fit' = sangat cocok" },
            { speaker: "A", en: "Oh, he's adorable! Is he good with kids?", id: "Oh, dia menggemaskan! Apakah dia baik dengan anak-anak?" },
            { speaker: "B", en: "Very gentle. He loves children and is already house-trained.", id: "Sangat lembut. Dia suka anak-anak dan sudah terlatih di dalam rumah." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Sara", B: "Shelter Staff" }}
          situation="Discussing the adoption process and paperwork"
          lines={[
            { speaker: "A", en: "What is the adoption process like? Is there a lot of paperwork?", id: "Bagaimana proses adopsinya? Apakah banyak dokumen?" },
            { speaker: "B", en: "It's straightforward. You fill out an application, and we do a quick home check.", id: "Cukup mudah. Anda mengisi formulir, dan kami melakukan pengecekan rumah singkat.", note: "'straightforward' = mudah, tidak rumit" },
            { speaker: "A", en: "How long does the approval usually take?", id: "Biasanya berapa lama persetujuan diberikan?" },
            { speaker: "B", en: "Usually two to three business days. The adoption fee is $75 and covers vaccinations and microchipping.", id: "Biasanya dua sampai tiga hari kerja. Biaya adopsi $75 sudah termasuk vaksinasi dan microchip." },
            { speaker: "A", en: "That's very reasonable. What should I bring on adoption day?", id: "Itu sangat terjangkau. Apa yang harus saya bawa pada hari adopsi?" },
            { speaker: "B", en: "Just a valid ID, proof of residence, and a leash. We'll also send you home with a starter kit.", id: "Cukup KTP, bukti tempat tinggal, dan tali anjing. Kami juga akan memberi Anda kit pemula." },
          ]}
        />

        <KeyPhrasesCard
          title="Pet Adoption Phrases"
          color="amber"
          phrases={[
            { phrase: "house-trained", meaning: "sudah terlatih buang air di tempat yang benar" },
            { phrase: "foster (a pet)", meaning: "merawat hewan sementara sebelum adopsi permanen" },
            { phrase: "adoption fee", meaning: "biaya adopsi hewan peliharaan" },
            { phrase: "spayed / neutered", meaning: "disterilkan (betina / jantan)" },
            { phrase: "microchipping", meaning: "pemasangan chip identifikasi pada hewan" },
            { phrase: "vet check", meaning: "pemeriksaan veteriner / dokter hewan" },
          ]}
        />

        <FillInBlank
          sentence="The dog is already _____, so you won't have to worry about accidents in the house."
          blank="house-trained"
          answer="house-trained"
          hint="A pet that knows where to go to the bathroom is called _____-trained."
        />

        <FillInBlank
          sentence="Before adoption, make sure your new pet has been _____ to prevent unwanted litters."
          blank="spayed"
          answer="spayed"
          hint="The surgical procedure to sterilize a female pet is called being _____."
        />

        <CulturalNote
          note="In many Western countries, adopting from shelters is strongly encouraged over buying from pet shops or breeders. Animal welfare organizations run campaigns with slogans like 'Adopt, Don't Shop.' Many shelters are non-profit organizations that rely on donations and volunteer work to care for abandoned animals."
        />

        <PronunciationTip
          tip="The word 'adopt' is pronounced /əˈdɒpt/ — stress is on the second syllable: a-DOPT. The related noun 'adoption' is /əˈdɒpʃən/. A common mistake is to stress the first syllable: AD-opt (incorrect)."
        />

        <ExpressionMeter
          expression="He's adorable!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 64,
    day: 64,
    title: "Research Lab Meeting",
    category: "Academic",
    difficulty: "Advanced",
    color: "emerald",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="University Research Laboratory" bg="from-emerald-50 to-green-50">
          <Day64Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Dr. Chen", B: "Alex (PhD student)" }}
          situation="Weekly lab meeting to discuss research progress"
          lines={[
            { speaker: "A", en: "Let's start with your latest findings on the protein synthesis pathway. What did the gel electrophoresis show?", id: "Mari mulai dengan temuan terbaru Anda tentang jalur sintesis protein. Apa yang ditunjukkan elektroforesis gel?" },
            { speaker: "B", en: "The results were quite compelling. We observed a significant upregulation of the target protein under hypoxic conditions.", id: "Hasilnya cukup meyakinkan. Kami mengamati regulasi naik yang signifikan dari protein target dalam kondisi hipoksia.", note: "'upregulation' = peningkatan ekspresi gen/protein" },
            { speaker: "A", en: "Interesting. Did you run the statistical analysis? What was the p-value?", id: "Menarik. Apakah Anda sudah menjalankan analisis statistik? Berapa nilai p-nya?" },
            { speaker: "B", en: "Yes. The p-value was 0.024, which falls below our significance threshold of 0.05. The effect size was also substantial.", id: "Ya. Nilai p-nya 0,024, yang berada di bawah ambang signifikansi 0,05 kami. Ukuran efeknya juga substansial." },
            { speaker: "A", en: "Good. However, we need to address the confounding variable of temperature fluctuation in the incubator.", id: "Bagus. Namun, kita perlu mengatasi variabel perancu fluktuasi suhu dalam inkubator." },
            { speaker: "B", en: "Agreed. I've already designed a controlled experiment to isolate that variable in the next trial.", id: "Setuju. Saya sudah merancang eksperimen terkontrol untuk mengisolasi variabel tersebut di uji coba berikutnya." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Dr. Chen", B: "Alex (PhD student)" }}
          situation="Discussing publication plans and next steps"
          lines={[
            { speaker: "A", en: "If the replication data holds, I think we have a strong case for submission to Nature Methods.", id: "Jika data replikasi kuat, saya pikir kita punya argumen yang kuat untuk diajukan ke Nature Methods." },
            { speaker: "B", en: "I share your optimism, but I want to make sure we have at least three independent replicates before we draft the manuscript.", id: "Saya sependapat, tapi saya ingin memastikan kita punya minimal tiga replikat independen sebelum menyusun manuskrip." },
            { speaker: "A", en: "Prudent approach. What's your timeline for completing the replication runs?", id: "Pendekatan yang bijaksana. Apa jadwal Anda untuk menyelesaikan uji replikasi?", note: "'prudent' = berhati-hati, bijaksana" },
            { speaker: "B", en: "I anticipate having all three completed by end of next month, assuming no equipment downtime.", id: "Saya perkirakan selesai semua tiga pada akhir bulan depan, asalkan tidak ada gangguan peralatan." },
            { speaker: "A", en: "Good. Also, consider reaching out to Dr. Patel's group for a collaborative validation from an independent lab.", id: "Bagus. Juga, pertimbangkan menghubungi grup Dr. Patel untuk validasi kolaboratif dari laboratorium independen." },
            { speaker: "B", en: "That's an excellent idea. Cross-validation would significantly strengthen our claims.", id: "Itu ide yang sangat bagus. Validasi silang akan memperkuat klaim kami secara signifikan." },
          ]}
        />

        <KeyPhrasesCard
          title="Academic Research Vocabulary"
          color="emerald"
          phrases={[
            { phrase: "confounding variable", meaning: "variabel perancu yang memengaruhi hasil penelitian" },
            { phrase: "replicate (v.)", meaning: "mereplikasi / mengulang eksperimen untuk memverifikasi" },
            { phrase: "p-value", meaning: "nilai probabilitas dalam uji statistik" },
            { phrase: "peer review", meaning: "tinjauan sejawat oleh peneliti lain" },
            { phrase: "hypothesis", meaning: "hipotesis yang akan diuji" },
            { phrase: "submit a manuscript", meaning: "mengajukan naskah ke jurnal ilmiah" },
          ]}
        />

        <FillInBlank
          sentence="Before we can publish, we need to control for the _____ variable that might be influencing our results."
          blank="confounding"
          answer="confounding"
          hint="A variable that secretly affects your results without you realizing it is called a _____ variable."
        />

        <FillInBlank
          sentence="The paper was sent for _____ review, where three independent experts evaluated its methodology and conclusions."
          blank="peer"
          answer="peer"
          hint="When other experts in the same field review your research, it's called _____ review."
        />

        <CulturalNote
          note="In academic research culture, lab meetings are a cornerstone of scientific progress. They typically occur weekly and serve multiple purposes: updating team members on progress, identifying problems, brainstorming solutions, and preparing for publication. In top research institutions, these meetings are conducted in English even in non-English-speaking countries."
        />

        <PronunciationTip
          tip="'Hypothesis' is pronounced /haɪˈpɒθɪsɪs/ — hy-POTH-e-sis. The plural 'hypotheses' is /haɪˈpɒθɪsiːz/ — hy-POTH-e-seez. Many non-native speakers mispronounce it as 'hi-po-THE-sis' (incorrect stress placement)."
        />

        <ExpressionMeter
          expression="That's an excellent idea."
          formalLevel={5}
          informalLevel={2}
        />
      </div>
    ),
  },

  {
    id: 65,
    day: 65,
    title: "Team Building Activity",
    category: "Professional",
    difficulty: "Intermediate",
    color: "blue",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Corporate Team Building" bg="from-blue-50 to-indigo-50">
          <Day65Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Manager (Lin)", B: "Employee (Tom)" }}
          situation="Before a team building event at a company retreat"
          lines={[
            { speaker: "A", en: "Tom, I hope you're looking forward to today's activities. We've planned an outdoor obstacle course.", id: "Tom, semoga kamu antusias dengan aktivitas hari ini. Kami sudah merencanakan rintangan outdoor." },
            { speaker: "B", en: "Honestly, I wasn't sure what to expect, but I'm actually pretty excited now that I see the setup.", id: "Jujurnya, aku tidak yakin apa yang diharapkan, tapi aku cukup antusias sekarang setelah melihat settingnya." },
            { speaker: "A", en: "The goal isn't to be the fastest — it's about collaboration and trusting your teammates.", id: "Tujuannya bukan untuk jadi yang tercepat — ini tentang kolaborasi dan mempercayai rekan timmu.", note: "'trusting your teammates' = mempercayai rekan satu tim" },
            { speaker: "B", en: "That makes sense. I think we sometimes forget that in the office. We're all working in silos.", id: "Itu masuk akal. Saya rasa kita kadang lupa itu di kantor. Kita semua bekerja sendiri-sendiri.", note: "'working in silos' = bekerja terisolasi, tidak berkolaborasi" },
            { speaker: "A", en: "Exactly. Today is a chance to break down those barriers and get to know each other better.", id: "Tepat sekali. Hari ini adalah kesempatan untuk menghancurkan hambatan itu dan saling mengenal lebih baik." },
            { speaker: "B", en: "I'm in. Which team am I on? I hope I get paired with someone from marketing.", id: "Aku siap. Aku di tim mana? Semoga aku berpasangan dengan seseorang dari marketing." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Manager (Lin)", B: "Employee (Tom)", C: "Facilitator" }}
          situation="During the debrief after the activity"
          lines={[
            { speaker: "C", en: "Great effort, everyone! Let's take a few minutes to reflect. What worked well for your team?", id: "Kerja bagus semua orang! Mari luangkan beberapa menit untuk merefleksikan. Apa yang berjalan baik di tim Anda?" },
            { speaker: "B", en: "We quickly established roles. Lin took the lead on strategy, and the rest of us focused on execution.", id: "Kami dengan cepat menentukan peran. Lin memimpin strategi, dan yang lainnya fokus pada eksekusi." },
            { speaker: "A", en: "And Tom was fantastic at keeping morale up when we hit a difficult section.", id: "Dan Tom luar biasa dalam menjaga semangat tim saat kami menghadapi bagian yang sulit." },
            { speaker: "C", en: "That's a great example of complementary strengths. What would you do differently next time?", id: "Itu contoh kekuatan yang saling melengkapi. Apa yang akan kamu lakukan berbeda lain kali?" },
            { speaker: "B", en: "We should have communicated our individual strengths earlier. That wasted some time at the start.", id: "Kami seharusnya mengkomunikasikan kekuatan individu lebih awal. Itu membuang waktu di awal." },
            { speaker: "A", en: "Good insight, Tom. That's something we can directly apply back in the office.", id: "Wawasan yang bagus, Tom. Itu sesuatu yang bisa langsung kita terapkan kembali di kantor." },
          ]}
        />

        <KeyPhrasesCard
          title="Team Building Expressions"
          color="indigo"
          phrases={[
            { phrase: "working in silos", meaning: "bekerja secara terisolasi tanpa berkolaborasi" },
            { phrase: "break down barriers", meaning: "menghilangkan hambatan komunikasi / kerja sama" },
            { phrase: "complementary strengths", meaning: "kekuatan yang saling melengkapi" },
            { phrase: "morale", meaning: "semangat / motivasi kelompok" },
            { phrase: "take the lead", meaning: "mengambil peran kepemimpinan" },
            { phrase: "debrief", meaning: "sesi evaluasi / diskusi setelah aktivitas" },
          ]}
        />

        <FillInBlank
          sentence="Our departments have been working in _____, which is why this team building event is so important."
          blank="silos"
          answer="silos"
          hint="When teams work independently without communicating, they are working in _____."
        />

        <FillInBlank
          sentence="The manager held a _____ after the training exercise to discuss what the team had learned."
          blank="debrief"
          answer="debrief"
          hint="A discussion session held after a training or activity to review what happened is called a _____."
        />

        <CulturalNote
          note="Team building events are common in corporate culture in the US, UK, and Australia. They range from simple icebreaker games to elaborate outdoor adventures. Companies invest in these activities to improve communication, build trust, and reduce staff turnover. It is considered professional to participate enthusiastically even if you find them awkward."
        />

        <PronunciationTip
          tip="'Colleagues' is pronounced /ˈkɒliːɡz/ — COL-eegz. The 'ue' at the end is silent and the 'gue' makes a /ɡ/ sound. Many learners mispronounce it as 'col-LEEG-ues' or add an extra syllable."
        />

        <ExpressionMeter
          expression="I'm in!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 66,
    day: 66,
    title: "Physical Therapy Session",
    category: "Health",
    difficulty: "Intermediate",
    color: "teal",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Physical Therapy Clinic" bg="from-teal-50 to-cyan-50">
          <Day66Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Patient (Ryan)", B: "Therapist (Dr. Park)" }}
          situation="First physical therapy session after a knee injury"
          lines={[
            { speaker: "A", en: "I hurt my knee during a soccer game last month. My doctor referred me to you.", id: "Saya cedera lutut saat pertandingan sepak bola bulan lalu. Dokter saya merujuk saya ke sini." },
            { speaker: "B", en: "Yes, I've reviewed your MRI. You have a partial tear in your ACL. The good news is we can rehab this without surgery.", id: "Ya, saya sudah meninjau MRI Anda. Anda punya robekan sebagian pada ACL. Kabar baiknya kita bisa rehabilitasi ini tanpa operasi.", note: "ACL = Anterior Cruciate Ligament, ligamen lutut" },
            { speaker: "A", en: "That's a relief. How long will recovery take?", id: "Itu lega sekali. Berapa lama pemulihan akan berlangsung?" },
            { speaker: "B", en: "Typically eight to twelve weeks with consistent therapy. You'll need to come in three times a week.", id: "Biasanya delapan hingga dua belas minggu dengan terapi yang konsisten. Anda perlu datang tiga kali seminggu." },
            { speaker: "A", en: "That's manageable. What will the exercises involve?", id: "Itu bisa dikelola. Latihan apa saja yang akan dilakukan?" },
            { speaker: "B", en: "We'll start with range-of-motion exercises to reduce stiffness, then move on to strengthening the surrounding muscles.", id: "Kita mulai dengan latihan rentang gerak untuk mengurangi kekakuan, lalu beralih ke penguatan otot di sekitarnya.", note: "'range-of-motion' = rentang gerakan sendi" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Patient (Ryan)", B: "Therapist (Dr. Park)" }}
          situation="During the exercise session"
          lines={[
            { speaker: "B", en: "Okay Ryan, I want you to slowly extend your leg and hold for five seconds. Tell me if you feel sharp pain.", id: "Oke Ryan, saya minta Anda perlahan meluruskan kaki dan tahan lima detik. Beritahu saya jika Anda merasakan nyeri tajam." },
            { speaker: "A", en: "I feel some tightness, but it's not sharp. More like a dull ache.", id: "Saya merasakan sedikit kekakuan, tapi tidak tajam. Lebih seperti nyeri tumpul." },
            { speaker: "B", en: "That's normal at this stage. A little discomfort is okay; pain is not. Always communicate the difference.", id: "Itu normal di tahap ini. Sedikit ketidaknyamanan tidak apa-apa; nyeri tidak. Selalu komunikasikan perbedaannya." },
            { speaker: "A", en: "Got it. Should I be doing any exercises at home between sessions?", id: "Mengerti. Haruskah saya melakukan latihan di rumah di antara sesi?" },
            { speaker: "B", en: "Yes, I'll give you a home exercise program. Consistency is key for a full recovery.", id: "Ya, saya akan berikan program latihan di rumah. Konsistensi adalah kunci untuk pemulihan penuh." },
            { speaker: "A", en: "Will I be able to play soccer again after this?", id: "Apakah saya bisa bermain sepak bola lagi setelah ini?" },
          ]}
        />

        <KeyPhrasesCard
          title="Physical Therapy Vocabulary"
          color="emerald"
          phrases={[
            { phrase: "range of motion", meaning: "rentang gerak sendi" },
            { phrase: "rehabilitation (rehab)", meaning: "proses pemulihan melalui terapi" },
            { phrase: "dull ache", meaning: "nyeri tumpul yang terus-menerus" },
            { phrase: "sharp pain", meaning: "nyeri tajam yang tiba-tiba" },
            { phrase: "referred to", meaning: "dirujuk ke (dokter/spesialis lain)" },
            { phrase: "home exercise program", meaning: "program latihan mandiri di rumah" },
          ]}
        />

        <FillInBlank
          sentence="The doctor _____ me to a physical therapist after my surgery."
          blank="referred"
          answer="referred"
          hint="When a doctor sends you to another specialist, they _____ you to that specialist."
        />

        <FillInBlank
          sentence="The exercises started with improving _____ of motion before moving on to strength training."
          blank="range"
          answer="range"
          hint="The full extent to which a joint can move is called the _____ of motion."
        />

        <CulturalNote
          note="In the US and many other countries, physical therapy (called 'physiotherapy' in the UK and Australia) requires a doctor's referral and is often covered by health insurance. Therapists are licensed professionals with advanced degrees. It is important to be honest about your pain levels during sessions — therapists use this feedback to adjust treatment safely."
        />

        <PronunciationTip
          tip="'Rehabilitation' is often shortened to 'rehab' in casual speech: /ˈriːhæb/. The full word is /ˌriːhəˈbɪlɪteɪʃən/. The stress is on the fourth syllable: re-ha-BIL-i-ta-tion. It is one of the longer medical words worth practicing."
        />

        <ExpressionMeter
          expression="That's a relief."
          formalLevel={3}
          informalLevel={4}
        />
      </div>
    ),
  },

  {
    id: 67,
    day: 67,
    title: "Escape Room Adventure",
    category: "Entertainment",
    difficulty: "Beginner",
    color: "pink",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Escape Room Challenge" bg="from-pink-50 to-rose-50">
          <Day67Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Mia", B: "Ethan" }}
          situation="Inside an escape room, trying to solve puzzles"
          lines={[
            { speaker: "A", en: "Okay, we have 45 minutes left. Let's focus! What clues do we have so far?", id: "Oke, kita punya 45 menit lagi. Fokus! Petunjuk apa yang sudah kita dapatkan sejauh ini?" },
            { speaker: "B", en: "I found this note behind the painting. It says 'the answer lies beneath the clock.'", id: "Aku menemukan catatan ini di balik lukisan. Tertulis 'jawabannya ada di bawah jam'." },
            { speaker: "A", en: "Oh! I saw a clock on the wall earlier. Let's check under it.", id: "Oh! Aku melihat jam di dinding tadi. Mari kita periksa di bawahnya.", note: "'Let's check' = Mari kita periksa" },
            { speaker: "B", en: "Wait — there's a small key taped to the back of the clock! This must open something.", id: "Tunggu — ada kunci kecil yang ditempel di belakang jam! Ini pasti membuka sesuatu." },
            { speaker: "A", en: "Try the lockbox in the corner! I couldn't open it earlier.", id: "Coba kotak kunci di sudut! Aku tidak bisa membukanya tadi." },
            { speaker: "B", en: "It fits! Inside there are three numbers — 7, 2, 4. Maybe that's the combination to the door lock!", id: "Pas! Di dalamnya ada tiga angka — 7, 2, 4. Mungkin itu kombinasi untuk kunci pintu!" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Mia", B: "Ethan" }}
          situation="Final minutes of the escape room challenge"
          lines={[
            { speaker: "A", en: "Try 7-2-4! No wait, maybe we need to reverse it. Try 4-2-7.", id: "Coba 7-2-4! Tidak, tunggu, mungkin kita perlu membaliknya. Coba 4-2-7." },
            { speaker: "B", en: "That didn't work either. What if the numbers stand for something else, like letters?", id: "Itu juga tidak berhasil. Bagaimana kalau angka-angka itu mewakili sesuatu yang lain, seperti huruf?" },
            { speaker: "A", en: "7 = G, 2 = B, 4 = D? That doesn't spell anything obvious.", id: "7 = G, 2 = B, 4 = D? Itu tidak mengeja sesuatu yang jelas." },
            { speaker: "B", en: "Wait — the original clue said 'beneath the clock'. What if the time on the clock is the hint? It shows 7:24!", id: "Tunggu — petunjuk aslinya bilang 'di bawah jam'. Bagaimana jika waktu pada jam adalah petunjuknya? Menunjukkan 7:24!" },
            { speaker: "A", en: "Oh my goodness, you're right! Try 7-2-4 on the main door keypad!", id: "Ya ampun, kamu benar! Coba 7-2-4 di keypad pintu utama!" },
            { speaker: "B", en: "IT OPENED! We did it! With six minutes to spare!", id: "TERBUKA! Kita berhasil! Dengan sisa enam menit!", note: "'with time to spare' = dengan sisa waktu" },
          ]}
        />

        <KeyPhrasesCard
          title="Escape Room & Game Expressions"
          color="rose"
          phrases={[
            { phrase: "crack a code", meaning: "memecahkan kode / menemukan jawaban tersembunyi" },
            { phrase: "red herring", meaning: "petunjuk palsu yang menyesatkan" },
            { phrase: "with time to spare", meaning: "masih ada sisa waktu" },
            { phrase: "think outside the box", meaning: "berpikir kreatif / di luar kebiasaan" },
            { phrase: "piece together", meaning: "menyatukan petunjuk-petunjuk" },
            { phrase: "stumped", meaning: "bingung / tidak tahu jawaban" },
          ]}
        />

        <FillInBlank
          sentence="We were completely _____ by the last puzzle until we noticed the hidden message on the mirror."
          blank="stumped"
          answer="stumped"
          hint="When you have no idea how to solve something, you are completely _____."
        />

        <FillInBlank
          sentence="The photo on the wall was just a _____ herring — it had nothing to do with the solution."
          blank="red"
          answer="red"
          hint="A misleading clue that sends you in the wrong direction is called a _____ herring."
        />

        <CulturalNote
          note="Escape rooms originated in Japan in the early 2000s and have spread worldwide as popular entertainment for groups. They are designed for 2–8 players and typically last 60 minutes. Themes range from mystery and horror to adventure and sci-fi. Many companies use escape rooms as team-building activities because they require communication and problem-solving under pressure."
        />

        <PronunciationTip
          tip="'Combination' is pronounced /ˌkɒmbɪˈneɪʃən/ — com-bi-NAY-shun. Stress is on the third syllable. When talking about a combination lock, native speakers often shorten 'combination' to just 'combo': /ˈkɒmbəʊ/ — COM-boh."
        />

        <ExpressionMeter
          expression="We did it!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 68,
    day: 68,
    title: "Filing Taxes",
    category: "Daily Life",
    difficulty: "Advanced",
    color: "slate",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Tax Filing Season" bg="from-slate-50 to-gray-50">
          <Day68Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Nina", B: "Tax Advisor (Mr. Davis)" }}
          situation="Meeting with a tax professional to file annual taxes"
          lines={[
            { speaker: "A", en: "Mr. Davis, this is my first year filing independently. I'm honestly quite overwhelmed.", id: "Pak Davis, ini pertama kali saya mengajukan pajak secara mandiri. Jujurly saya cukup kewalahan." },
            { speaker: "B", en: "That's completely understandable. The tax code can be complicated. Do you have your W-2 form and any 1099s?", id: "Itu sangat bisa dimengerti. Kode pajak bisa rumit. Apakah Anda punya formulir W-2 dan 1099?", note: "W-2 = formulir pendapatan dari majikan; 1099 = formulir pendapatan freelance/investasi" },
            { speaker: "A", en: "Yes, I have my W-2 from my employer, but I also did some freelance work. Will that complicate things?", id: "Ya, saya punya W-2 dari majikan saya, tapi saya juga melakukan freelance. Apakah itu mempersulit?" },
            { speaker: "B", en: "It means you'll also need to file a Schedule C for your self-employment income and potentially pay self-employment tax.", id: "Artinya Anda juga perlu mengajukan Schedule C untuk pendapatan wiraswasta dan mungkin membayar pajak wiraswasta.", note: "Schedule C = formulir untuk pendapatan bisnis/freelance" },
            { speaker: "A", en: "Should I have been making quarterly estimated payments throughout the year?", id: "Haruskah saya melakukan pembayaran estimasi triwulanan sepanjang tahun?" },
            { speaker: "B", en: "Ideally, yes. If your tax liability exceeds $1,000, you might face an underpayment penalty. Let's calculate what you owe first.", id: "Idealnya, ya. Jika kewajiban pajak Anda melebihi $1,000, Anda mungkin menghadapi denda kekurangan bayar. Mari kita hitung dulu yang Anda hutang." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Nina", B: "Tax Advisor (Mr. Davis)" }}
          situation="Discussing deductions and refund"
          lines={[
            { speaker: "B", en: "Good news — you're eligible for several deductions. Did you use part of your home exclusively for work?", id: "Kabar baik — Anda berhak mendapat beberapa potongan pajak. Apakah Anda menggunakan sebagian rumah secara eksklusif untuk bekerja?" },
            { speaker: "A", en: "Yes, I have a dedicated home office. Does that qualify for the home office deduction?", id: "Ya, saya punya kantor rumah khusus. Apakah itu memenuhi syarat untuk potongan kantor rumah?" },
            { speaker: "B", en: "Absolutely. You can deduct a proportional share of your rent and utilities based on the square footage.", id: "Tentu saja. Anda bisa memotong bagian proporsional dari sewa dan utilitas berdasarkan luas ruangan." },
            { speaker: "A", en: "I also paid for some professional development courses. Are those deductible?", id: "Saya juga membayar beberapa kursus pengembangan profesional. Apakah itu bisa dikurangkan?" },
            { speaker: "B", en: "Yes, if they are directly related to your current profession. Keep all receipts as documentation.", id: "Ya, jika berkaitan langsung dengan profesi Anda saat ini. Simpan semua kwitansi sebagai dokumentasi." },
            { speaker: "A", en: "After all these deductions, what does my refund look like?", id: "Setelah semua potongan ini, berapa besar pengembalian pajak saya?" },
          ]}
        />

        <KeyPhrasesCard
          title="Tax & Finance Terminology"
          color="indigo"
          phrases={[
            { phrase: "tax deduction", meaning: "pengurangan penghasilan kena pajak" },
            { phrase: "tax refund", meaning: "pengembalian kelebihan bayar pajak" },
            { phrase: "tax liability", meaning: "kewajiban / utang pajak" },
            { phrase: "file (taxes)", meaning: "mengajukan laporan pajak" },
            { phrase: "withholding", meaning: "pemotongan pajak langsung dari gaji" },
            { phrase: "audit", meaning: "pemeriksaan laporan pajak oleh otoritas pajak" },
          ]}
        />

        <FillInBlank
          sentence="She was entitled to a $1,200 tax _____ because she had overpaid throughout the year."
          blank="refund"
          answer="refund"
          hint="Money returned to you by the government when you've paid too much tax is called a tax _____."
        />

        <FillInBlank
          sentence="Working from home allowed him to claim a home office _____ on his taxes."
          blank="deduction"
          answer="deduction"
          hint="An expense you are allowed to subtract from your taxable income is called a _____."
        />

        <CulturalNote
          note="In the United States, the tax filing deadline is typically April 15th each year. The IRS (Internal Revenue Service) oversees tax collection. Unlike many countries where taxes are automatically calculated by the government, Americans are responsible for filing their own returns annually. Failure to file can result in significant penalties and interest charges."
        />

        <PronunciationTip
          tip="'Deductible' is pronounced /dɪˈdʌktɪbəl/ — de-DUC-ti-ble. Do not confuse it with 'deduction' /dɪˈdʌkʃən/ — de-DUC-tion. 'Deductible' as a noun also refers to the amount you pay out-of-pocket in insurance before coverage kicks in."
        />

        <ExpressionMeter
          expression="I'm honestly quite overwhelmed."
          formalLevel={3}
          informalLevel={3}
        />
      </div>
    ),
  },

  {
    id: 69,
    day: 69,
    title: "Online Learning Platform",
    category: "Academic",
    difficulty: "Intermediate",
    color: "emerald",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Online Learning & E-Learning" bg="from-emerald-50 to-teal-50">
          <Day69Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Student (Priya)", B: "Platform Support (Kevin)" }}
          situation="Live chat support on an online learning platform"
          lines={[
            { speaker: "A", en: "Hi, I signed up for the Data Science bootcamp, but I'm not sure where to start.", id: "Halo, saya mendaftar untuk bootcamp Data Science, tapi saya tidak tahu harus mulai dari mana." },
            { speaker: "B", en: "Welcome to EduLearn, Priya! The best place to start is the 'Learning Path' section — it guides you step by step.", id: "Selamat datang di EduLearn, Priya! Tempat terbaik untuk mulai adalah bagian 'Learning Path' — ini memandu Anda langkah demi langkah." },
            { speaker: "A", en: "I see it now. Should I complete the pre-assessment first, or can I skip it?", id: "Saya sudah menemukannya. Haruskah saya menyelesaikan pra-penilaian terlebih dahulu, atau bisa dilewati?" },
            { speaker: "B", en: "I'd strongly recommend taking it. It helps us personalize your learning path based on your current knowledge level.", id: "Saya sangat menyarankan mengambilnya. Ini membantu kami mempersonalisasi jalur belajar Anda berdasarkan tingkat pengetahuan Anda saat ini.", note: "'personalize' = menyesuaikan dengan kebutuhan individu" },
            { speaker: "A", en: "That makes sense. Also, are the video lectures downloadable for offline viewing?", id: "Itu masuk akal. Juga, apakah kuliah video bisa diunduh untuk ditonton offline?" },
            { speaker: "B", en: "Yes! Premium members can download up to 50 lectures. You can also adjust playback speed up to 2x.", id: "Ya! Anggota premium bisa mengunduh hingga 50 kuliah. Anda juga bisa menyesuaikan kecepatan pemutaran hingga 2x." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Student (Priya)", B: "Instructor (Dr. Wong)" }}
          situation="In a live Q&A session during an online course"
          lines={[
            { speaker: "A", en: "Dr. Wong, I'm struggling with the concept of overfitting in machine learning. Could you clarify?", id: "Dr. Wong, saya kesulitan dengan konsep overfitting dalam machine learning. Bisakah Anda mengklarifikasi?" },
            { speaker: "B", en: "Great question. Overfitting occurs when a model learns the training data too well, including its noise, and fails to generalize.", id: "Pertanyaan bagus. Overfitting terjadi ketika model mempelajari data pelatihan terlalu baik, termasuk noise-nya, dan gagal untuk digeneralisasi." },
            { speaker: "A", en: "So it performs well on training data but poorly on new data?", id: "Jadi performa bagus pada data pelatihan tapi buruk pada data baru?" },
            { speaker: "B", en: "Exactly. Think of it like a student who memorizes answers rather than understanding the concepts.", id: "Tepat sekali. Bayangkan seperti siswa yang menghafal jawaban daripada memahami konsepnya.", note: "Analogi yang bagus untuk menjelaskan konsep teknis" },
            { speaker: "A", en: "That's a great analogy! How do we prevent it?", id: "Itu analogi yang bagus! Bagaimana kita mencegahnya?" },
            { speaker: "B", en: "Techniques like cross-validation, regularization, and dropout help reduce overfitting. We cover all of these in Module 4.", id: "Teknik seperti cross-validation, regularisasi, dan dropout membantu mengurangi overfitting. Kita bahas semua ini di Modul 4." },
          ]}
        />

        <KeyPhrasesCard
          title="Online Learning Vocabulary"
          color="emerald"
          phrases={[
            { phrase: "learning path", meaning: "jalur belajar yang terstruktur" },
            { phrase: "pre-assessment", meaning: "penilaian awal untuk mengetahui level kemampuan" },
            { phrase: "cohort", meaning: "kelompok peserta yang mulai belajar bersama" },
            { phrase: "asynchronous learning", meaning: "belajar tidak langsung / tidak real-time" },
            { phrase: "certificate of completion", meaning: "sertifikat penyelesaian kursus" },
            { phrase: "feedback loop", meaning: "siklus umpan balik untuk perbaikan berkelanjutan" },
          ]}
        />

        <FillInBlank
          sentence="The instructor recommended completing the _____ before starting the course to gauge your existing knowledge."
          blank="pre-assessment"
          answer="pre-assessment"
          hint="A test taken at the beginning to measure your current level is called a _____-assessment."
        />

        <FillInBlank
          sentence="Our _____ of 300 students all started the program together in January and will graduate as a group."
          blank="cohort"
          answer="cohort"
          hint="A group of students who begin and complete a program together is called a _____."
        />

        <CulturalNote
          note="Online learning platforms like Coursera, edX, and Udemy have revolutionized education globally. Many universities now offer hybrid or fully online degrees that are recognized by employers worldwide. Certificates from well-known platforms are increasingly accepted in job applications, especially in technology fields. The COVID-19 pandemic dramatically accelerated global adoption of online education."
        />

        <PronunciationTip
          tip="'Module' is pronounced /ˈmɒdjuːl/ in British English — MOD-yool, and /ˈmɒdʒuːl/ in American English — MAH-jool. Both pronunciations are correct. In e-learning contexts, each section of a course is typically called a 'module' or 'unit.'"
        />

        <ExpressionMeter
          expression="That's a great analogy!"
          formalLevel={3}
          informalLevel={3}
        />
      </div>
    ),
  },

  {
    id: 70,
    day: 70,
    title: "Beach Vacation",
    category: "Travel",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Beach Vacation Fun" bg="from-amber-50 to-sky-50">
          <Day70Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Lena", B: "Carlos" }}
          situation="Two friends relaxing on the beach during vacation"
          lines={[
            { speaker: "A", en: "This is absolutely perfect. I can't believe we finally made it here!", id: "Ini benar-benar sempurna. Aku tidak percaya kita akhirnya sampai di sini!" },
            { speaker: "B", en: "I know, right? The water looks so clear. I'm going for a swim in a bit.", id: "Iya, bukan? Airnya terlihat sangat jernih. Aku akan berenang sebentar lagi." },
            { speaker: "A", en: "Don't forget to reapply sunscreen before you go in. You got burned last time, remember?", id: "Jangan lupa oleskan sunscreen lagi sebelum masuk air. Kamu kepanasan terakhir kali, ingat?", note: "'reapply' = mengoleskan kembali" },
            { speaker: "B", en: "Good point. I already bought SPF 50 this time. No excuses!", id: "Poin yang bagus. Aku sudah beli SPF 50 kali ini. Tidak ada alasan!" },
            { speaker: "A", en: "I also made reservations at that seafood restaurant on the pier for tonight.", id: "Aku juga sudah reservasi di restoran seafood di dermaga untuk malam ini." },
            { speaker: "B", en: "Amazing! I've been dreaming about fresh lobster all week.", id: "Luar biasa! Aku sudah memimpikan lobster segar sepanjang minggu ini." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Lena", B: "Carlos" }}
          situation="At the beach rental shop and water activities"
          lines={[
            { speaker: "A", en: "Should we rent a kayak or try paddleboarding? I've never done paddleboarding before.", id: "Haruskah kita menyewa kayak atau mencoba paddleboarding? Aku belum pernah paddleboarding sebelumnya." },
            { speaker: "B", en: "Let's do paddleboarding! It's easier than it looks. I'll show you the basics.", id: "Ayo paddleboarding! Lebih mudah dari yang terlihat. Aku akan tunjukkan dasarnya." },
            { speaker: "A", en: "Alright, but if I fall in the water, that's on you!", id: "Baiklah, tapi kalau aku jatuh ke air, itu salahmu!", note: "'that's on you' = itu tanggung jawabmu" },
            { speaker: "B", en: "Ha! Deal. The rental is $20 per hour per board. That's pretty reasonable.", id: "Ha! Deal. Sewa $20 per jam per papan. Itu cukup terjangkau." },
            { speaker: "A", en: "Let's book two hours then. That gives us enough time to explore the cove around the corner.", id: "Mari pesan dua jam kalau begitu. Itu cukup waktu untuk menjelajahi teluk di tikungan." },
            { speaker: "B", en: "Great idea. I heard the snorkeling around there is incredible too.", id: "Ide bagus. Aku dengar snorkeling di sekitar sana juga luar biasa." },
          ]}
        />

        <KeyPhrasesCard
          title="Beach & Vacation Vocabulary"
          color="amber"
          phrases={[
            { phrase: "hit the beach", meaning: "pergi ke pantai / mulai menikmati pantai" },
            { phrase: "catch some rays", meaning: "berjemur di bawah sinar matahari" },
            { phrase: "high / low tide", meaning: "air pasang / air surut" },
            { phrase: "cove", meaning: "teluk kecil / cekungan pantai" },
            { phrase: "reef", meaning: "terumbu karang" },
            { phrase: "shore break", meaning: "ombak yang pecah di tepi pantai" },
          ]}
        />

        <FillInBlank
          sentence="We waited for low _____ before walking out to the rock pools to see the sea creatures."
          blank="tide"
          answer="tide"
          hint="The level of the ocean rises and falls with the _____ — high _____ or low _____."
        />

        <FillInBlank
          sentence="The hidden _____ around the cliff was the perfect spot for swimming — calm and sheltered from the waves."
          blank="cove"
          answer="cove"
          hint="A small, sheltered bay along a coastline is called a _____."
        />

        <CulturalNote
          note="Beach vacations are popular worldwide, but beach culture varies by country. In Australia, beach safety is taken very seriously — always swim between the red and yellow flags, which indicate a patrolled area. In the US, many beaches have lifeguards on duty during the day. In many tropical countries, vendors walk the beach selling food, drinks, and souvenirs — this is a normal and accepted practice."
        />

        <PronunciationTip
          tip="'Sunscreen' is one word: /ˈsʌnskriːn/ — SUN-skreen. Some people say 'sun cream' (British English) or 'sunblock.' The SPF number (Sun Protection Factor) is read as individual letters: S-P-F fifty, not 'spiff.' Always stress the first syllable: SUN-screen."
        />

        <ExpressionMeter
          expression="This is absolutely perfect!"
          formalLevel={2}
          informalLevel={5}
        />
      </div>
    ),
  },
]
