import { SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank, CulturalNote, PronunciationTip, ExpressionMeter } from './conversationData'

// ═══════════════════════════════════════════════════════════════
// SVG Scene Illustrations — Days 71-79
// ═══════════════════════════════════════════════════════════════

// Day 71: Farmer's Market
const Day71Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky background */}
    <rect width="200" height="140" fill="#fffbeb" />
    {/* Ground */}
    <rect x="0" y="110" width="200" height="30" fill="#fde68a" />
    {/* Market tent 1 */}
    <polygon points="10,60 60,30 110,60" fill="#ef4444" />
    <rect x="10" y="60" width="100" height="40" fill="#fca5a5" />
    {/* Tent stripe */}
    <polygon points="10,60 35,45 35,60" fill="#dc2626" />
    <polygon points="60,30 85,45 85,60 60,60" fill="#dc2626" />
    <polygon points="110,60 85,45 85,60" fill="#dc2626" />
    {/* Market tent 2 */}
    <polygon points="110,60 155,32 200,60" fill="#22c55e" />
    <rect x="110" y="60" width="90" height="40" fill="#86efac" />
    <polygon points="110,60 132,46 132,60" fill="#16a34a" />
    <polygon points="155,32 178,46 178,60 155,60" fill="#16a34a" />
    <polygon points="200,60 178,46 178,60" fill="#16a34a" />
    {/* Produce on table - tent 1 */}
    <rect x="15" y="78" width="95" height="8" fill="#92400e" rx="1" />
    {/* Tomatoes */}
    <circle cx="25" cy="75" r="5" fill="#dc2626" />
    <circle cx="37" cy="75" r="5" fill="#ef4444" />
    <circle cx="49" cy="75" r="5" fill="#dc2626" />
    {/* Carrots */}
    <polygon points="62,70 66,80 58,80" fill="#f97316" />
    <polygon points="74,70 78,80 70,80" fill="#f97316" />
    {/* Lettuce */}
    <ellipse cx="92" cy="74" rx="8" ry="5" fill="#4ade80" />
    {/* Produce on table - tent 2 */}
    <rect x="115" y="78" width="80" height="8" fill="#92400e" rx="1" />
    {/* Apples */}
    <circle cx="126" cy="74" r="5" fill="#dc2626" />
    <circle cx="138" cy="74" r="5" fill="#22c55e" />
    <circle cx="150" cy="74" r="5" fill="#fbbf24" />
    {/* Corn */}
    <rect x="163" y="67" width="6" height="14" fill="#fbbf24" rx="2" />
    <rect x="172" y="67" width="6" height="14" fill="#fbbf24" rx="2" />
    {/* Customer */}
    <circle cx="75" cy="48" r="8" fill="#fde68a" />
    <rect x="67" y="56" width="14" height="18" fill="#3b82f6" rx="2" />
    {/* Basket */}
    <path d="M68 65 Q75 60 82 65" fill="none" stroke="#92400e" strokeWidth="2" />
    <rect x="68" y="65" width="14" height="10" fill="#fcd34d" rx="2" />
    {/* Vendor */}
    <circle cx="155" cy="45" r="8" fill="#fca5a5" />
    <rect x="147" y="53" width="14" height="18" fill="#16a34a" rx="2" />
    {/* Apron */}
    <rect x="149" y="57" width="10" height="12" fill="#4ade80" rx="1" />
    {/* Sign */}
    <rect x="55" y="5" width="90" height="18" fill="#f59e0b" rx="4" />
    <text x="100" y="17" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">FARMER'S MARKET</text>
    {/* Price tags */}
    <rect x="18" y="85" width="22" height="8" fill="white" rx="1" stroke="#f59e0b" strokeWidth="0.5" />
    <text x="29" y="91" textAnchor="middle" fill="#92400e" fontSize="4">$1.50/lb</text>
    <rect x="118" y="85" width="22" height="8" fill="white" rx="1" stroke="#f59e0b" strokeWidth="0.5" />
    <text x="129" y="91" textAnchor="middle" fill="#92400e" fontSize="4">$2.00/lb</text>
  </svg>
)

// Day 72: Cruise Ship Experience
const Day72Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Ocean sky */}
    <rect width="200" height="80" fill="#0ea5e9" />
    {/* Clouds */}
    <ellipse cx="35" cy="18" rx="18" ry="10" fill="white" opacity="0.9" />
    <ellipse cx="22" cy="22" rx="12" ry="8" fill="white" opacity="0.9" />
    <ellipse cx="48" cy="22" rx="12" ry="8" fill="white" opacity="0.9" />
    <ellipse cx="160" cy="15" rx="22" ry="10" fill="white" opacity="0.8" />
    <ellipse cx="145" cy="19" rx="14" ry="8" fill="white" opacity="0.8" />
    {/* Ocean */}
    <rect x="0" y="75" width="200" height="65" fill="#0369a1" />
    <path d="M0 82 Q25 76 50 82 Q75 88 100 82 Q125 76 150 82 Q175 88 200 82" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
    <path d="M0 92 Q30 87 60 92 Q90 97 120 92 Q150 87 180 92 Q190 88 200 92" fill="none" stroke="#7dd3fc" strokeWidth="1" opacity="0.7" />
    {/* Cruise ship hull */}
    <rect x="30" y="55" width="140" height="45" fill="white" rx="4" />
    <rect x="25" y="88" width="150" height="15" fill="#1e3a8a" rx="3" />
    <path d="M25 95 Q100 100 175 95" fill="#1e3a8a" />
    {/* Ship decks */}
    <rect x="40" y="40" width="120" height="18" fill="#f0f9ff" rx="3" />
    <rect x="55" y="28" width="90" height="15" fill="#e0f2fe" rx="3" />
    <rect x="75" y="18" width="50" height="12" fill="#bae6fd" rx="3" />
    {/* Funnel/chimney */}
    <rect x="92" y="8" width="16" height="14" fill="#dc2626" rx="3" />
    <rect x="95" y="5" width="10" height="6" fill="#374151" rx="1" />
    {/* Smoke */}
    <circle cx="100" cy="2" r="3" fill="#9ca3af" opacity="0.6" />
    <circle cx="105" cy="-1" r="2" fill="#9ca3af" opacity="0.4" />
    {/* Portholes on hull */}
    <circle cx="55" cy="73" r="5" fill="#bae6fd" stroke="white" strokeWidth="1" />
    <circle cx="75" cy="73" r="5" fill="#bae6fd" stroke="white" strokeWidth="1" />
    <circle cx="95" cy="73" r="5" fill="#fef3c7" stroke="white" strokeWidth="1" />
    <circle cx="115" cy="73" r="5" fill="#bae6fd" stroke="white" strokeWidth="1" />
    <circle cx="135" cy="73" r="5" fill="#fef3c7" stroke="white" strokeWidth="1" />
    {/* Windows on decks */}
    <rect x="52" y="44" width="8" height="6" fill="#7dd3fc" rx="1" />
    <rect x="65" y="44" width="8" height="6" fill="#7dd3fc" rx="1" />
    <rect x="78" y="44" width="8" height="6" fill="#fef3c7" rx="1" />
    <rect x="91" y="44" width="8" height="6" fill="#7dd3fc" rx="1" />
    <rect x="104" y="44" width="8" height="6" fill="#fef3c7" rx="1" />
    <rect x="117" y="44" width="8" height="6" fill="#7dd3fc" rx="1" />
    <rect x="130" y="44" width="8" height="6" fill="#7dd3fc" rx="1" />
    {/* Anchor */}
    <circle cx="175" cy="100" r="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="175" y1="94" x2="175" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
    <line x1="170" y1="110" x2="180" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
    {/* Passengers on deck */}
    <circle cx="70" cy="37" r="4" fill="#fde68a" />
    <rect x="66" y="41" width="8" height="8" fill="#ec4899" rx="1" />
    <circle cx="100" cy="37" r="4" fill="#fca5a5" />
    <rect x="96" y="41" width="8" height="8" fill="#3b82f6" rx="1" />
    <circle cx="130" cy="37" r="4" fill="#a7f3d0" />
    <rect x="126" y="41" width="8" height="8" fill="#f59e0b" rx="1" />
    {/* Flag */}
    <line x1="100" y1="8" x2="100" y2="0" stroke="#374151" strokeWidth="1" />
    <polygon points="100,0 115,4 100,8" fill="#dc2626" />
  </svg>
)

// Day 73: Academic Conference
const Day73Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Conference hall background */}
    <rect width="200" height="140" fill="#f0f9ff" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#e0f2fe" />
    {/* Stage */}
    <rect x="20" y="85" width="160" height="30" fill="#1e3a8a" rx="3" />
    <rect x="25" y="90" width="150" height="20" fill="#1d4ed8" rx="2" />
    {/* Podium */}
    <rect x="85" y="75" width="30" height="20" fill="#374151" rx="2" />
    <rect x="82" y="72" width="36" height="6" fill="#4b5563" rx="1" />
    {/* Microphone */}
    <line x1="100" y1="72" x2="100" y2="65" stroke="#1e293b" strokeWidth="1.5" />
    <ellipse cx="100" cy="63" rx="3" ry="4" fill="#374151" />
    {/* Presenter */}
    <circle cx="100" cy="58" r="8" fill="#fde68a" />
    <rect x="92" y="66" width="16" height="18" fill="#1e3a8a" rx="2" />
    {/* Presenter hair */}
    <ellipse cx="100" cy="51" rx="8" ry="5" fill="#1e293b" />
    {/* Presentation screen/banner */}
    <rect x="30" y="15" width="140" height="55" fill="white" rx="3" stroke="#93c5fd" strokeWidth="1.5" />
    <rect x="30" y="15" width="140" height="14" fill="#1e3a8a" rx="3" />
    <text x="100" y="25" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">INTERNATIONAL SYMPOSIUM 2026</text>
    {/* Presentation content */}
    <text x="100" y="40" textAnchor="middle" fill="#1e3a8a" fontSize="5" fontWeight="bold">Research Findings</text>
    {/* Bar chart on screen */}
    <rect x="50" y="60" width="8" height="20" fill="#3b82f6" rx="1" />
    <rect x="62" y="52" width="8" height="28" fill="#60a5fa" rx="1" />
    <rect x="74" y="55" width="8" height="25" fill="#3b82f6" rx="1" />
    <rect x="86" y="45" width="8" height="35" fill="#1d4ed8" rx="1" />
    <line x1="48" y1="80" x2="115" y2="80" stroke="#94a3b8" strokeWidth="0.8" />
    {/* Graph axis */}
    <line x1="48" y1="42" x2="48" y2="80" stroke="#94a3b8" strokeWidth="0.8" />
    {/* Conclusion text */}
    <rect x="120" y="42" width="43" height="38" fill="#eff6ff" rx="2" />
    <text x="141" y="52" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">KEY FINDINGS</text>
    <line x1="123" y1="55" x2="160" y2="55" stroke="#bfdbfe" strokeWidth="0.5" />
    <line x1="123" y1="60" x2="157" y2="60" stroke="#bfdbfe" strokeWidth="0.5" />
    <line x1="123" y1="65" x2="158" y2="65" stroke="#bfdbfe" strokeWidth="0.5" />
    <line x1="123" y1="70" x2="153" y2="70" stroke="#bfdbfe" strokeWidth="0.5" />
    {/* Audience rows */}
    {[105, 112, 119].map((y, row) => (
      [30, 52, 74, 96, 118, 140, 162].map((x, col) => (
        <circle key={`${row}-${col}`} cx={x} cy={y} r="4" fill={["#fde68a","#fca5a5","#a7f3d0","#c4b5fd","#93c5fd","#fde68a","#fca5a5"][col]} />
      ))
    ))}
    {/* Name badges */}
    <rect x="27" y="107" width="10" height="6" fill="#3b82f6" rx="1" />
    <rect x="49" y="107" width="10" height="6" fill="#3b82f6" rx="1" />
    <rect x="71" y="107" width="10" height="6" fill="#3b82f6" rx="1" />
  </svg>
)

// Day 74: Performance Review
const Day74Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Office background */}
    <rect width="200" height="140" fill="#f8fafc" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#e2e8f0" />
    {/* Window */}
    <rect x="130" y="10" width="60" height="60" fill="#bae6fd" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <line x1="160" y1="10" x2="160" y2="70" stroke="#94a3b8" strokeWidth="1" />
    <line x1="130" y1="40" x2="190" y2="40" stroke="#94a3b8" strokeWidth="1" />
    {/* Building outside window */}
    <rect x="135" y="20" width="20" height="50" fill="#475569" opacity="0.4" />
    <rect x="160" y="30" width="22" height="40" fill="#64748b" opacity="0.4" />
    {/* Conference table */}
    <rect x="30" y="80" width="140" height="25" fill="#78350f" rx="4" />
    <rect x="33" y="83" width="134" height="19" fill="#92400e" rx="3" />
    {/* Documents on table */}
    <rect x="40" y="75" width="30" height="22" fill="white" rx="1" stroke="#e2e8f0" strokeWidth="1" />
    <text x="55" y="83" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">PERFORMANCE</text>
    <text x="55" y="88" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">REVIEW 2026</text>
    <line x1="43" y1="91" x2="67" y2="91" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="43" y1="94" x2="65" y2="94" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Star rating */}
    <text x="55" y="86" textAnchor="middle" fill="#f59e0b" fontSize="6">★★★★☆</text>
    {/* KPI chart */}
    <rect x="78" y="73" width="38" height="25" fill="#eff6ff" rx="2" stroke="#93c5fd" strokeWidth="0.8" />
    <text x="97" y="80" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">KPI SCORE</text>
    <text x="97" y="90" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">92%</text>
    {/* Laptop */}
    <rect x="125" y="68" width="38" height="28" fill="#1e293b" rx="2" />
    <rect x="127" y="70" width="34" height="22" fill="#0f172a" rx="1" />
    <rect x="129" y="72" width="30" height="18" fill="#1e3a8a" rx="1" />
    <text x="144" y="78" textAnchor="middle" fill="#60a5fa" fontSize="4">HR SYSTEM</text>
    <line x1="132" y1="82" x2="156" y2="82" stroke="#3b82f6" strokeWidth="0.6" />
    <line x1="132" y1="85" x2="152" y2="85" stroke="#3b82f6" strokeWidth="0.6" />
    <line x1="132" y1="88" x2="154" y2="88" stroke="#3b82f6" strokeWidth="0.6" />
    {/* Manager */}
    <circle cx="50" cy="52" r="10" fill="#fde68a" />
    <rect x="40" y="62" width="20" height="24" fill="#1e3a8a" rx="2" />
    {/* Manager tie */}
    <polygon points="50,64 47,68 50,80 53,68" fill="#dc2626" />
    {/* Glasses */}
    <circle cx="46" cy="51" r="4" fill="none" stroke="#374151" strokeWidth="0.8" />
    <circle cx="54" cy="51" r="4" fill="none" stroke="#374151" strokeWidth="0.8" />
    <line x1="50" y1="51" x2="52" y2="51" stroke="#374151" strokeWidth="0.8" />
    {/* Employee */}
    <circle cx="150" cy="52" r="10" fill="#fca5a5" />
    <rect x="140" y="62" width="20" height="24" fill="#475569" rx="2" />
    {/* Employee hair */}
    <ellipse cx="150" cy="44" rx="10" ry="6" fill="#92400e" />
    {/* Speech bubble */}
    <rect x="60" y="35" width="55" height="18" fill="white" rx="4" stroke="#3b82f6" strokeWidth="0.8" />
    <polygon points="68,53 64,60 72,53" fill="white" stroke="#3b82f6" strokeWidth="0.8" />
    <text x="87" y="45" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">Let's review your</text>
    <text x="87" y="50" textAnchor="middle" fill="#1e3a8a" fontSize="4" fontWeight="bold">goals this year.</text>
  </svg>
)

// Day 75: Allergy Testing
const Day75Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Clinic background */}
    <rect width="200" height="140" fill="#fff1f2" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#ffe4e6" />
    {/* Exam table */}
    <rect x="30" y="82" width="90" height="12" fill="#0d9488" rx="3" />
    <rect x="35" y="94" width="10" height="22" fill="#0f766e" rx="1" />
    <rect x="105" y="94" width="10" height="22" fill="#0f766e" rx="1" />
    {/* Paper on table */}
    <rect x="32" y="79" width="86" height="4" fill="white" rx="1" />
    {/* Allergy test panel on wall */}
    <rect x="135" y="15" width="58" height="80" fill="white" rx="3" stroke="#fda4af" strokeWidth="1" />
    <text x="164" y="27" textAnchor="middle" fill="#be123c" fontSize="6" fontWeight="bold">ALLERGY PANEL</text>
    <line x1="138" y1="30" x2="190" y2="30" stroke="#fda4af" strokeWidth="0.5" />
    {/* Test items */}
    {[
      { y: 38, label: "Pollen", color: "#fbbf24", result: "+" },
      { y: 48, label: "Dust", color: "#94a3b8", result: "-" },
      { y: 58, label: "Peanuts", color: "#d97706", result: "+" },
      { y: 68, label: "Cat Hair", color: "#f97316", result: "+" },
      { y: 78, label: "Shellfish", color: "#06b6d4", result: "-" },
      { y: 88, label: "Gluten", color: "#fcd34d", result: "-" },
    ].map(({ y, label, color, result }) => (
      <g key={y}>
        <circle cx="145" cy={y} r="4" fill={color} />
        <text x="155" y={y + 3} fill="#374151" fontSize="5">{label}</text>
        <text x="185" y={y + 3} textAnchor="middle" fill={result === "+" ? "#dc2626" : "#16a34a"} fontSize="6" fontWeight="bold">{result}</text>
      </g>
    ))}
    {/* Doctor */}
    <circle cx="105" cy="48" r="10" fill="#fde68a" />
    <rect x="95" y="58" width="20" height="24" fill="white" rx="2" />
    {/* Stethoscope */}
    <path d="M105 62 Q115 65 118 72" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="118" cy="74" r="3" fill="#374151" />
    {/* Clipboard */}
    <rect x="85" y="55" width="18" height="24" fill="#fef3c7" rx="2" stroke="#fcd34d" strokeWidth="0.8" />
    <rect x="90" y="53" width="8" height="4" fill="#fcd34d" rx="1" />
    <line x1="88" y1="62" x2="101" y2="62" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="88" y1="66" x2="101" y2="66" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="88" y1="70" x2="99" y2="70" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Patient on table */}
    <circle cx="65" cy="72" r="10" fill="#fca5a5" />
    <rect x="55" y="78" width="20" height="24" fill="#e0e7ff" rx="2" />
    {/* Patient hair */}
    <ellipse cx="65" cy="64" rx="10" ry="5" fill="#92400e" />
    {/* Arm with test marks */}
    <rect x="35" y="80" width="32" height="8" fill="#fca5a5" rx="3" />
    <circle cx="42" cy="84" r="2" fill="#dc2626" />
    <circle cx="50" cy="84" r="2" fill="#dc2626" />
    <circle cx="58" cy="84" r="2" fill="#fbbf24" />
    {/* Red reaction circle */}
    <circle cx="42" cy="84" r="5" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
    <circle cx="50" cy="84" r="5" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
    {/* Medical cross on wall */}
    <rect x="8" y="20" width="20" height="8" fill="#dc2626" rx="1" />
    <rect x="14" y="14" width="8" height="20" fill="#dc2626" rx="1" />
  </svg>
)

// Day 76: Board Game Night
const Day76Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Cozy living room background */}
    <rect width="200" height="140" fill="#fdf4ff" />
    {/* Floor */}
    <rect x="0" y="110" width="200" height="30" fill="#f3e8ff" />
    {/* Round table */}
    <ellipse cx="100" cy="90" rx="70" ry="28" fill="#92400e" />
    <ellipse cx="100" cy="88" rx="67" ry="25" fill="#a16207" />
    {/* Board game on table */}
    <rect x="55" y="70" width="90" height="38" fill="#fef3c7" rx="3" />
    {/* Game board grid */}
    {[60, 70, 80, 90, 100, 110, 120, 130, 140].map(x => (
      <line key={`v-${x}`} x1={x} y1="70" x2={x} y2="108" stroke="#fcd34d" strokeWidth="0.5" />
    ))}
    {[75, 80, 85, 90, 95, 100, 105].map(y => (
      <line key={`h-${y}`} x1="55" y1={y} x2="145" y2={y} stroke="#fcd34d" strokeWidth="0.5" />
    ))}
    {/* Game pieces */}
    <circle cx="75" cy="82" r="4" fill="#dc2626" />
    <circle cx="100" cy="78" r="4" fill="#3b82f6" />
    <circle cx="125" cy="90" r="4" fill="#22c55e" />
    <circle cx="88" cy="96" r="4" fill="#f59e0b" />
    {/* Dice */}
    <rect x="148" y="72" width="15" height="15" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <circle cx="152" cy="76" r="1.5" fill="#374151" />
    <circle cx="159" cy="82" r="1.5" fill="#374151" />
    <circle cx="159" cy="76" r="1.5" fill="#374151" />
    <rect x="35" y="75" width="15" height="15" fill="white" rx="2" stroke="#94a3b8" strokeWidth="1" />
    <circle cx="42" cy="82" r="1.5" fill="#374151" />
    <circle cx="38" cy="79" r="1.5" fill="#374151" />
    <circle cx="46" cy="79" r="1.5" fill="#374151" />
    <circle cx="38" cy="85" r="1.5" fill="#374151" />
    <circle cx="46" cy="85" r="1.5" fill="#374151" />
    {/* Card deck */}
    <rect x="57" y="63" width="18" height="10" fill="#1e3a8a" rx="1" />
    <rect x="59" y="61" width="18" height="10" fill="#1d4ed8" rx="1" />
    <rect x="61" y="59" width="18" height="10" fill="#3b82f6" rx="1" />
    {/* Players around table */}
    {/* Player 1 - top left */}
    <circle cx="50" cy="52" r="9" fill="#fde68a" />
    <rect x="42" y="61" width="16" height="20" fill="#ef4444" rx="2" />
    {/* Player 2 - top right */}
    <circle cx="150" cy="52" r="9" fill="#fca5a5" />
    <rect x="142" y="61" width="16" height="20" fill="#8b5cf6" rx="2" />
    {/* Player 3 - bottom left */}
    <circle cx="42" cy="108" r="9" fill="#a7f3d0" />
    <rect x="34" y="117" width="16" height="20" fill="#f59e0b" rx="2" />
    {/* Player 4 - bottom right */}
    <circle cx="158" cy="108" r="9" fill="#c4b5fd" />
    <rect x="150" y="117" width="16" height="20" fill="#22c55e" rx="2" />
    {/* Speech bubble */}
    <rect x="160" y="35" width="38" height="16" fill="white" rx="4" stroke="#ec4899" strokeWidth="0.8" />
    <polygon points="163,51 160,57 170,51" fill="white" stroke="#ec4899" strokeWidth="0.8" />
    <text x="179" y="46" textAnchor="middle" fill="#be185d" fontSize="5">It's your turn!</text>
    {/* Snacks */}
    <rect x="88" y="12" width="24" height="20" fill="#fef3c7" rx="3" stroke="#fcd34d" strokeWidth="1" />
    <text x="100" y="25" textAnchor="middle" fill="#92400e" fontSize="6">🍿</text>
    {/* Lamp */}
    <line x1="10" y1="10" x2="10" y2="60" stroke="#92400e" strokeWidth="2" />
    <polygon points="0,10 20,10 15,25 5,25" fill="#fbbf24" />
    <ellipse cx="10" cy="25" rx="10" ry="4" fill="#fde68a" opacity="0.6" />
  </svg>
)

// Day 77: Garage Sale
const Day77Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Sky */}
    <rect width="200" height="90" fill="#e0f2fe" />
    {/* Grass */}
    <rect x="0" y="90" width="200" height="50" fill="#86efac" />
    {/* Garage door */}
    <rect x="5" y="20" width="90" height="75" fill="#e5e7eb" rx="2" />
    <rect x="8" y="23" width="84" height="8" fill="#d1d5db" />
    <rect x="8" y="33" width="84" height="8" fill="#d1d5db" />
    <rect x="8" y="43" width="84" height="8" fill="#d1d5db" />
    <rect x="8" y="53" width="84" height="8" fill="#d1d5db" />
    <rect x="8" y="63" width="84" height="8" fill="#d1d5db" />
    <rect x="8" y="73" width="84" height="8" fill="#d1d5db" />
    {/* Driveway */}
    <rect x="10" y="90" width="85" height="50" fill="#d1d5db" />
    {/* Tables for sale items */}
    <rect x="105" y="75" width="85" height="8" fill="#92400e" rx="1" />
    <rect x="108" y="83" width="6" height="20" fill="#78350f" rx="1" />
    <rect x="176" y="83" width="6" height="20" fill="#78350f" rx="1" />
    {/* Items on table */}
    {/* Lamp */}
    <rect x="110" y="62" width="3" height="15" fill="#374151" />
    <polygon points="106,62 120,62 117,70 109,70" fill="#fbbf24" />
    {/* Books */}
    <rect x="120" y="65" width="6" height="11" fill="#dc2626" rx="0.5" />
    <rect x="127" y="66" width="6" height="10" fill="#3b82f6" rx="0.5" />
    <rect x="134" y="64" width="6" height="12" fill="#22c55e" rx="0.5" />
    {/* Clock */}
    <circle cx="148" cy="70" r="7" fill="white" stroke="#374151" strokeWidth="1.5" />
    <line x1="148" y1="63" x2="148" y2="67" stroke="#374151" strokeWidth="1" />
    <line x1="155" y1="70" x2="152" y2="70" stroke="#374151" strokeWidth="1" />
    <line x1="148" y1="70" x2="148" y2="73" stroke="#374151" strokeWidth="1" />
    {/* Toy */}
    <rect x="159" y="64" width="14" height="12" fill="#a855f7" rx="2" />
    <circle cx="163" cy="67" r="2" fill="#fbbf24" />
    <circle cx="169" cy="67" r="2" fill="#fbbf24" />
    {/* Price tags hanging */}
    <line x1="113" y1="65" x2="113" y2="60" stroke="#94a3b8" strokeWidth="0.5" />
    <rect x="109" y="56" width="10" height="6" fill="#fef3c7" rx="1" stroke="#fcd34d" strokeWidth="0.5" />
    <text x="114" y="61" textAnchor="middle" fill="#92400e" fontSize="4">$5</text>
    <line x1="148" y1="63" x2="155" y2="55" stroke="#94a3b8" strokeWidth="0.5" />
    <rect x="151" y="51" width="12" height="6" fill="#fef3c7" rx="1" stroke="#fcd34d" strokeWidth="0.5" />
    <text x="157" y="56" textAnchor="middle" fill="#92400e" fontSize="4">$3</text>
    {/* Seller */}
    <circle cx="50" cy="55" r="9" fill="#fde68a" />
    <rect x="42" y="64" width="16" height="20" fill="#f59e0b" rx="2" />
    {/* Apron */}
    <rect x="44" y="67" width="12" height="15" fill="#fbbf24" rx="1" />
    {/* Buyer */}
    <circle cx="155" cy="50" r="9" fill="#fca5a5" />
    <rect x="147" y="59" width="16" height="20" fill="#6366f1" rx="2" />
    {/* GARAGE SALE sign */}
    <rect x="15" y="5" width="75" height="14" fill="#ef4444" rx="3" />
    <text x="52" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">GARAGE SALE!</text>
    {/* Items on ground */}
    <rect x="15" y="96" width="20" height="18" fill="#6b7280" rx="1" />
    <circle cx="25" cy="105" r="5" fill="#9ca3af" />
    <rect x="42" y="100" width="18" height="10" fill="#fbbf24" rx="1" />
    <rect x="65" y="98" width="16" height="14" fill="#ec4899" rx="2" />
    {/* Sun */}
    <circle cx="180" cy="18" r="12" fill="#fbbf24" />
    <line x1="180" y1="2" x2="180" y2="-2" stroke="#f59e0b" strokeWidth="2" />
    <line x1="194" y1="18" x2="198" y2="18" stroke="#f59e0b" strokeWidth="2" />
    <line x1="190" y1="8" x2="193" y2="5" stroke="#f59e0b" strokeWidth="2" />
  </svg>
)

// Day 78: Study Abroad Orientation
const Day78Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* University hall background */}
    <rect width="200" height="140" fill="#eff6ff" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#dbeafe" />
    {/* World map banner */}
    <rect x="20" y="8" width="160" height="45" fill="white" rx="3" stroke="#93c5fd" strokeWidth="1.5" />
    <rect x="20" y="8" width="160" height="12" fill="#1e3a8a" rx="3" />
    <text x="100" y="17" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">STUDY ABROAD ORIENTATION</text>
    {/* Simplified world map */}
    <ellipse cx="55" cy="32" rx="18" ry="12" fill="#22c55e" opacity="0.7" />
    <ellipse cx="83" cy="28" rx="14" ry="10" fill="#22c55e" opacity="0.7" />
    <ellipse cx="106" cy="30" rx="20" ry="14" fill="#22c55e" opacity="0.7" />
    <ellipse cx="138" cy="28" rx="12" ry="10" fill="#22c55e" opacity="0.7" />
    <ellipse cx="162" cy="32" rx="16" ry="11" fill="#22c55e" opacity="0.7" />
    <rect x="22" y="20" width="156" height="33" fill="#bfdbfe" opacity="0.3" rx="1" />
    {/* Location pins */}
    <circle cx="55" cy="30" r="3" fill="#dc2626" />
    <line x1="55" y1="27" x2="55" y2="20" stroke="#dc2626" strokeWidth="1" />
    <circle cx="106" cy="28" r="3" fill="#f59e0b" />
    <line x1="106" y1="25" x2="106" y2="18" stroke="#f59e0b" strokeWidth="1" />
    <circle cx="162" cy="30" r="3" fill="#3b82f6" />
    <line x1="162" y1="27" x2="162" y2="20" stroke="#3b82f6" strokeWidth="1" />
    {/* Presenter / Advisor */}
    <circle cx="100" cy="72" r="10" fill="#fde68a" />
    <rect x="90" y="82" width="20" height="24" fill="#1e3a8a" rx="2" />
    {/* Presentation pointer */}
    <line x1="110" y1="80" x2="120" y2="55" stroke="#374151" strokeWidth="1.5" />
    <circle cx="120" cy="54" r="2" fill="#374151" />
    {/* Students in seats */}
    {/* Row 1 */}
    <circle cx="28" cy="100" r="7" fill="#fca5a5" />
    <rect x="21" y="107" width="14" height="15" fill="#7c3aed" rx="2" />
    <circle cx="55" cy="97" r="7" fill="#a7f3d0" />
    <rect x="48" y="104" width="14" height="15" fill="#f59e0b" rx="2" />
    <circle cx="145" cy="97" r="7" fill="#c4b5fd" />
    <rect x="138" y="104" width="14" height="15" fill="#3b82f6" rx="2" />
    <circle cx="172" cy="100" r="7" fill="#fde68a" />
    <rect x="165" y="107" width="14" height="15" fill="#ec4899" rx="2" />
    {/* Name tags */}
    <rect x="22" y="109" width="14" height="6" fill="#3b82f6" rx="1" />
    <rect x="49" y="106" width="14" height="6" fill="#3b82f6" rx="1" />
    <rect x="139" y="106" width="14" height="6" fill="#3b82f6" rx="1" />
    <rect x="166" y="109" width="14" height="6" fill="#3b82f6" rx="1" />
    {/* Flags of different countries */}
    {/* US flag */}
    <rect x="30" y="60" width="16" height="10" fill="#dc2626" rx="1" />
    <rect x="30" y="62" width="16" height="2" fill="white" />
    <rect x="30" y="66" width="16" height="2" fill="white" />
    <rect x="30" y="60" width="7" height="6" fill="#1e3a8a" />
    <line x1="30" y1="55" x2="30" y2="70" stroke="#374151" strokeWidth="1" />
    {/* UK flag */}
    <rect x="52" y="58" width="16" height="10" fill="#1e3a8a" rx="1" />
    <line x1="52" y1="58" x2="68" y2="68" stroke="white" strokeWidth="1.5" />
    <line x1="68" y1="58" x2="52" y2="68" stroke="white" strokeWidth="1.5" />
    <line x1="60" y1="58" x2="60" y2="68" stroke="white" strokeWidth="2" />
    <line x1="52" y1="63" x2="68" y2="63" stroke="white" strokeWidth="2" />
    <line x1="52" y1="58" x2="68" y2="68" stroke="#dc2626" strokeWidth="1" />
    <line x1="68" y1="58" x2="52" y2="68" stroke="#dc2626" strokeWidth="1" />
    <line x1="52" y1="53" x2="52" y2="68" stroke="#374151" strokeWidth="1" />
    {/* Pamphlets */}
    <rect x="150" y="60" width="15" height="20" fill="#fef3c7" rx="1" stroke="#fcd34d" strokeWidth="0.8" />
    <text x="157" y="68" textAnchor="middle" fill="#92400e" fontSize="4" fontWeight="bold">INFO</text>
    <text x="157" y="74" textAnchor="middle" fill="#92400e" fontSize="4">PACK</text>
  </svg>
)

// Day 79: Karaoke Night
const Day79Scene = () => (
  <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    {/* Dark bar / karaoke room */}
    <rect width="200" height="140" fill="#1e1b4b" />
    {/* Floor */}
    <rect x="0" y="115" width="200" height="25" fill="#312e81" />
    {/* Stage spotlight */}
    <polygon points="60,0 140,0 130,90 70,90" fill="#fef3c7" opacity="0.08" />
    <ellipse cx="100" cy="85" rx="45" ry="12" fill="#fef9c3" opacity="0.15" />
    {/* Disco ball */}
    <circle cx="100" cy="12" r="10" fill="#e2e8f0" />
    {/* Disco sparkles */}
    <line x1="100" y1="22" x2="100" y2="30" stroke="#fbbf24" strokeWidth="1" opacity="0.8" />
    <line x1="90" y1="18" x2="84" y2="25" stroke="#ec4899" strokeWidth="1" opacity="0.8" />
    <line x1="110" y1="18" x2="116" y2="25" stroke="#60a5fa" strokeWidth="1" opacity="0.8" />
    <line x1="85" y1="12" x2="77" y2="12" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
    <line x1="115" y1="12" x2="123" y2="12" stroke="#f97316" strokeWidth="1" opacity="0.8" />
    {/* Disco ball grid lines */}
    <line x1="90" y1="12" x2="110" y2="12" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="91" y1="8" x2="109" y2="8" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="91" y1="16" x2="109" y2="16" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="100" y1="2" x2="100" y2="22" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="93" y1="3" x2="93" y2="21" stroke="#94a3b8" strokeWidth="0.5" />
    <line x1="107" y1="3" x2="107" y2="21" stroke="#94a3b8" strokeWidth="0.5" />
    {/* Karaoke screen */}
    <rect x="30" y="20" width="140" height="55" fill="#0f172a" rx="4" stroke="#4f46e5" strokeWidth="2" />
    <rect x="33" y="23" width="134" height="49" fill="#1e1b4b" rx="2" />
    {/* Lyrics on screen */}
    <text x="100" y="42" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">🎵 Don't Stop</text>
    <text x="100" y="55" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">Believin' 🎵</text>
    {/* Highlighted word */}
    <rect x="45" y="60" width="38" height="9" fill="#4f46e5" rx="2" opacity="0.8" />
    <text x="64" y="67" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Hold on to the</text>
    <text x="100" y="67" textAnchor="middle" fill="#94a3b8" fontSize="6">feelin'</text>
    {/* Microphone holder */}
    <rect x="93" y="75" width="14" height="25" fill="#374151" rx="3" />
    <rect x="90" y="95" width="20" height="5" fill="#4b5563" rx="2" />
    {/* Singer */}
    <circle cx="75" cy="60" r="10" fill="#fde68a" />
    <rect x="65" y="70" width="20" height="24" fill="#ec4899" rx="2" />
    {/* Singer hair */}
    <ellipse cx="75" cy="52" rx="10" ry="6" fill="#1e293b" />
    {/* Microphone in hand */}
    <rect x="82" y="68" width="5" height="14" fill="#374151" rx="2" />
    <ellipse cx="84" cy="67" rx="3" ry="4" fill="#4b5563" />
    {/* Music notes floating */}
    <text x="30" y="48" fill="#ec4899" fontSize="12" opacity="0.8">♪</text>
    <text x="155" y="40" fill="#60a5fa" fontSize="10" opacity="0.8">♫</text>
    <text x="20" y="70" fill="#22c55e" fontSize="8" opacity="0.6">♩</text>
    <text x="168" y="65" fill="#fbbf24" fontSize="11" opacity="0.7">♪</text>
    {/* Audience */}
    <circle cx="28" cy="100" r="8" fill="#fca5a5" />
    <rect x="20" y="108" width="16" height="20" fill="#7c3aed" rx="2" />
    <circle cx="52" cy="98" r="8" fill="#a7f3d0" />
    <rect x="44" y="106" width="16" height="20" fill="#f59e0b" rx="2" />
    <circle cx="148" cy="98" r="8" fill="#c4b5fd" />
    <rect x="140" y="106" width="16" height="20" fill="#3b82f6" rx="2" />
    <circle cx="172" cy="100" r="8" fill="#fde68a" />
    <rect x="164" y="108" width="16" height="20" fill="#ef4444" rx="2" />
    {/* Arms raised for audience */}
    <line x1="20" y1="112" x2="14" y2="103" stroke="#7c3aed" strokeWidth="2" />
    <line x1="36" y1="112" x2="42" y2="103" stroke="#7c3aed" strokeWidth="2" />
    <line x1="44" y1="110" x2="38" y2="101" stroke="#f59e0b" strokeWidth="2" />
    <line x1="60" y1="110" x2="66" y2="101" stroke="#f59e0b" strokeWidth="2" />
    {/* Song book / tablet */}
    <rect x="125" y="85" width="22" height="16" fill="#1e293b" rx="2" />
    <rect x="127" y="87" width="18" height="12" fill="#0f172a" rx="1" />
    <text x="136" y="96" textAnchor="middle" fill="#60a5fa" fontSize="4">SONG LIST</text>
    {/* Colorful lights */}
    <circle cx="15" cy="15" r="5" fill="#ec4899" opacity="0.7" />
    <circle cx="185" cy="15" r="5" fill="#3b82f6" opacity="0.7" />
    <circle cx="15" cy="35" r="4" fill="#22c55e" opacity="0.6" />
    <circle cx="185" cy="35" r="4" fill="#f59e0b" opacity="0.6" />
  </svg>
)

// ═══════════════════════════════════════════════════════════════
// Export — Days 71-79
// ═══════════════════════════════════════════════════════════════

export const conversationsPart9 = [
  {
    id: 71,
    day: 71,
    title: "Farmer's Market",
    category: "Daily Life",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Farmer's Market" bg="from-amber-50 to-yellow-50">
          <Day71Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Customer", B: "Vendor" }}
          situation="At a local farmer's market on a Saturday morning"
          lines={[
            { speaker: "A", en: "Good morning! These tomatoes look so fresh. Are they locally grown?", id: "Selamat pagi! Tomat-tomat ini terlihat sangat segar. Apakah ditanam secara lokal?" },
            { speaker: "B", en: "Yes! Everything here is from my farm, just twenty miles from town. Picked this morning.", id: "Ya! Semuanya dari pertanian saya, hanya dua puluh mil dari kota. Dipetik pagi ini.", note: "'picked this morning' = baru dipetik pagi ini" },
            { speaker: "A", en: "Wonderful. How much are they per pound?", id: "Luar biasa. Berapa harganya per pon?" },
            { speaker: "B", en: "One fifty a pound. But if you buy three pounds, I'll give you a deal — four dollars.", id: "Satu setengah dolar per pon. Tapi kalau beli tiga pon, saya kasih harga khusus — empat dolar.", note: "'give you a deal' = memberi harga spesial" },
            { speaker: "A", en: "That sounds great! I'll take three pounds of tomatoes. Do you also have herbs?", id: "Kedengarannya bagus! Saya ambil tiga pon tomat. Apakah Anda juga punya rempah-rempah?" },
            { speaker: "B", en: "Of course! Basil, rosemary, and mint — all freshly cut this morning.", id: "Tentu saja! Basil, rosemary, dan mint — semua baru dipotong pagi ini." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Customer", B: "Vendor" }}
          situation="Asking about organic produce and payment"
          lines={[
            { speaker: "A", en: "Are your vegetables organic? I try to buy organic whenever I can.", id: "Apakah sayuran Anda organik? Saya berusaha membeli organik setiap kali bisa." },
            { speaker: "B", en: "Most of them are pesticide-free, though we're not officially certified organic yet.", id: "Sebagian besar bebas pestisida, meskipun kami belum tersertifikasi organik secara resmi.", note: "'pesticide-free' = bebas pestisida" },
            { speaker: "A", en: "I appreciate the honesty. I'll take a bunch of basil too. What do I owe you?", id: "Saya menghargai kejujurannya. Saya ambil satu ikat basil juga. Berapa total yang harus saya bayar?" },
            { speaker: "B", en: "That'll be five fifty altogether. Do you have cash, or would you prefer to pay by card?", id: "Totalnya lima dolar lima puluh sen. Ada uang tunai, atau lebih suka bayar pakai kartu?" },
            { speaker: "A", en: "I have cash, actually. Here's six dollars — keep the change.", id: "Saya punya uang tunai sebenarnya. Ini enam dolar — ambil kembaliannya." },
            { speaker: "B", en: "Thank you so much! Come back next week — we'll have fresh corn and peaches.", id: "Terima kasih banyak! Kembali minggu depan ya — kami akan punya jagung segar dan persik." },
          ]}
        />

        <KeyPhrasesCard
          title="Farmer's Market Vocabulary"
          color="amber"
          phrases={[
            { phrase: "locally grown", meaning: "ditanam secara lokal di sekitar daerah tersebut" },
            { phrase: "in season", meaning: "sedang musimnya / tersedia saat ini" },
            { phrase: "organic / pesticide-free", meaning: "organik / bebas pestisida" },
            { phrase: "a bunch of", meaning: "satu ikat (sayuran, bunga, dll)" },
            { phrase: "per pound / per kilo", meaning: "per pon / per kilo — satuan berat" },
            { phrase: "keep the change", meaning: "ambil kembaliannya (tidak perlu dikembalikan)" },
          ]}
        />

        <FillInBlank
          sentence="These strawberries are _____ right now, so they're at their sweetest and cheapest."
          options={["in season", "on sale", "very fresh", "organic"]}
          answer="in season"
          explanation="'In season' means the produce is currently at its peak growing time, making it tastiest and most affordable."
        />

        <FillInBlank
          sentence="I'd like to buy _____ of fresh cilantro to use in my cooking tonight."
          options={["a bunch", "a pile", "a box", "a row"]}
          answer="a bunch"
          explanation="'A bunch' is the standard way to count herbs and leafy vegetables tied together, such as cilantro, parsley, or basil."
        />

        <CulturalNote
          note="Farmer's markets are very popular in the US, UK, and Australia, especially on weekend mornings. Shoppers enjoy talking directly with the farmers who grew the food. Bargaining is not as common as in Asian markets — prices are usually fixed, though vendors may offer discounts on larger quantities or near closing time."
        />

        <PronunciationTip
          tip="The word 'produce' changes pronunciation depending on how it is used. As a noun (vegetables and fruit), it is pronounced /ˈproʊduːs/ — stress on the first syllable: PRO-duce. As a verb (to make or create), it is /prəˈduːs/ — stress on the second syllable: pro-DUCE."
        />

        <ExpressionMeter
          expression="Keep the change!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 72,
    day: 72,
    title: "Cruise Ship Experience",
    category: "Travel",
    difficulty: "Intermediate",
    color: "teal",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Cruise Ship Experience" bg="from-teal-50 to-cyan-50">
          <Day72Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Passenger", B: "Cruise Staff" }}
          situation="A passenger speaking with cruise staff on the first day at sea"
          lines={[
            { speaker: "A", en: "Excuse me, this is my first cruise ever. Can you tell me how everything works on board?", id: "Permisi, ini adalah cruise pertama saya. Bisakah Anda menjelaskan bagaimana cara kerja segalanya di atas kapal?" },
            { speaker: "B", en: "Welcome aboard! I'm happy to help. Your all-inclusive package covers meals, entertainment, and most onboard activities.", id: "Selamat datang di kapal! Saya senang membantu. Paket all-inclusive Anda mencakup makanan, hiburan, dan sebagian besar aktivitas di kapal.", note: "'Welcome aboard' = ucapan selamat datang di kapal/pesawat" },
            { speaker: "A", en: "Great! What about shore excursions? Are those included?", id: "Bagus! Bagaimana dengan tur darat? Apakah itu termasuk?" },
            { speaker: "B", en: "Shore excursions are sold separately. You can book them at the excursion desk on Deck 5.", id: "Tur darat dijual terpisah. Anda bisa memesannya di meja ekskursi di Dek 5.", note: "'shore excursion' = wisata darat dari kapal" },
            { speaker: "A", en: "I see. And what time does the ship leave each port?", id: "Saya mengerti. Dan jam berapa kapal berangkat dari setiap pelabuhan?" },
            { speaker: "B", en: "All aboard is usually one hour before departure. Missing the ship is something we want to avoid at all costs!", id: "Semua penumpang harus naik biasanya satu jam sebelum keberangkatan. Ketinggalan kapal adalah sesuatu yang ingin kita hindari!" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Passenger", B: "Passenger (fellow traveler)" }}
          situation="Two passengers chatting by the pool deck"
          lines={[
            { speaker: "A", en: "The view from the upper deck is absolutely stunning! Have you done many cruises before?", id: "Pemandangan dari dek atas sangat menakjubkan! Apakah Anda sudah sering naik cruise sebelumnya?" },
            { speaker: "B", en: "This is my fourth one. The Mediterranean route is my favorite — so many ports to explore.", id: "Ini yang keempat bagi saya. Rute Mediterania adalah favorit saya — begitu banyak pelabuhan untuk dijelajahi." },
            { speaker: "A", en: "Any tips for a first-timer? I don't want to get seasick.", id: "Ada tips untuk pemula seperti saya? Saya tidak ingin mabuk laut." },
            { speaker: "B", en: "Stay toward the middle of the ship and keep your eyes on the horizon. Ginger candy also helps a lot!", id: "Tetaplah di bagian tengah kapal dan fokus ke cakrawala. Permen jahe juga sangat membantu!", note: "'seasick' = mabuk laut" },
            { speaker: "A", en: "Good to know. I heard the formal dinner tonight is really elegant.", id: "Bagus untuk diketahui. Saya dengar makan malam formal malam ini sangat elegan." },
            { speaker: "B", en: "It is! Don't miss it. And don't forget to try the midnight buffet — it's legendary on this ship.", id: "Betul! Jangan lewatkan. Dan jangan lupa coba buffet tengah malam — itu sudah terkenal di kapal ini." },
          ]}
        />

        <KeyPhrasesCard
          title="Cruise Ship Vocabulary"
          color="teal"
          phrases={[
            { phrase: "all-inclusive", meaning: "termasuk segalanya dalam satu harga paket" },
            { phrase: "shore excursion", meaning: "tur atau perjalanan darat selama berhenti di pelabuhan" },
            { phrase: "all aboard", meaning: "semua penumpang harus naik kapal — pengumuman keberangkatan" },
            { phrase: "port of call", meaning: "pelabuhan singgah selama perjalanan" },
            { phrase: "sea legs", meaning: "kemampuan berjalan stabil di kapal yang bergerak" },
            { phrase: "starboard / port side", meaning: "sisi kanan kapal / sisi kiri kapal" },
          ]}
        />

        <FillInBlank
          sentence="The ship will make three ports of _____ during our seven-day voyage across the Caribbean."
          options={["call", "stop", "visit", "entry"]}
          answer="call"
          explanation="'Port of call' is the fixed nautical term for a port where a ship stops temporarily during a journey."
        />

        <FillInBlank
          sentence="Please be back on the ship by 4 PM. Missing the _____ means you'll have to find your own way to the next port."
          options={["departure", "all aboard", "schedule", "launch"]}
          answer="departure"
          explanation="'Missing the departure' means the ship leaves without you. Crew announcements use 'all aboard' as a warning before this happens."
        />

        <CulturalNote
          note="Cruise ships are like floating cities, with restaurants, theaters, gyms, and casinos. Passengers are assigned to dining seatings and often share tables with strangers, which is considered a social opportunity. Tipping cruise staff is customary and is often automatically added to your bill as a 'gratuity charge'."
        />

        <PronunciationTip
          tip="The word 'cruise' is pronounced /kruːz/ — it rhymes with 'news' and 'shoes'. Do not confuse it with 'crews' which has the same pronunciation but means the workers on a ship. Context makes the meaning clear."
        />

        <ExpressionMeter
          expression="Don't miss it!"
          formalLevel={2}
          informalLevel={4}
        />
      </div>
    ),
  },

  {
    id: 73,
    day: 73,
    title: "Academic Conference",
    category: "Academic",
    difficulty: "Advanced",
    color: "emerald",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Academic Conference" bg="from-emerald-50 to-green-50">
          <Day73Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Dr. Patel", B: "Dr. Yamamoto" }}
          situation="Two academics networking during a coffee break at an international symposium"
          lines={[
            { speaker: "A", en: "Your keynote address this morning was genuinely thought-provoking. The framework you proposed for interdisciplinary collaboration is quite novel.", id: "Pidato utama Anda pagi ini benar-benar membuat berpikir. Kerangka yang Anda usulkan untuk kolaborasi antardisiplin sangat baru.", note: "'keynote address' = pidato utama di konferensi" },
            { speaker: "B", en: "Thank you, that's very generous. I appreciate the feedback. Your work on cognitive load theory was cited several times in the morning sessions.", id: "Terima kasih, Anda terlalu baik. Saya menghargai masukan tersebut. Karya Anda tentang teori beban kognitif dikutip beberapa kali dalam sesi pagi." },
            { speaker: "A", en: "I noticed that too. I was hoping our research areas might have some meaningful overlap — particularly around adaptive learning environments.", id: "Saya juga memperhatikannya. Saya berharap area penelitian kita mungkin memiliki tumpang tindih yang berarti — terutama seputar lingkungan belajar adaptif." },
            { speaker: "B", en: "Absolutely. I've been looking for a collaborator to co-author a meta-analysis on that exact topic. Would you be open to discussing it further?", id: "Tentu saja. Saya mencari kolaborator untuk menulis meta-analisis bersama tentang topik itulah. Apakah Anda terbuka untuk mendiskusikannya lebih lanjut?", note: "'meta-analysis' = analisis komprehensif dari berbagai studi" },
            { speaker: "A", en: "I'd be very interested. Perhaps we could schedule a call after the conference wraps up?", id: "Saya sangat tertarik. Mungkin kita bisa menjadwalkan panggilan setelah konferensi selesai?" },
            { speaker: "B", en: "Perfect. Let me give you my card. I'm also presenting a poster session tomorrow afternoon on our latest dataset.", id: "Sempurna. Izinkan saya memberikan kartu nama saya. Saya juga akan mempresentasikan sesi poster besok sore tentang dataset terbaru kami." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Presenter", B: "Attendee" }}
          situation="Q&A session following a research presentation"
          lines={[
            { speaker: "A", en: "Thank you for your attention. I'd now like to open the floor for questions.", id: "Terima kasih atas perhatian Anda. Sekarang saya ingin membuka sesi tanya jawab.", note: "'open the floor' = mempersilakan audiens bertanya" },
            { speaker: "B", en: "Thank you for a fascinating presentation. I have a methodological question — how did you control for selection bias in your sampling procedure?", id: "Terima kasih atas presentasi yang menarik. Saya punya pertanyaan metodologis — bagaimana Anda mengontrol bias seleksi dalam prosedur pengambilan sampel Anda?" },
            { speaker: "A", en: "That's an excellent point. We employed stratified random sampling and ran propensity score matching to mitigate that particular confound.", id: "Itu poin yang sangat bagus. Kami menggunakan stratified random sampling dan menjalankan propensity score matching untuk mengurangi confound tersebut." },
            { speaker: "B", en: "Understood. And do you foresee any limitations in generalizing these findings to non-WEIRD populations?", id: "Mengerti. Dan apakah Anda memperkirakan ada keterbatasan dalam menggeneralisasi temuan ini ke populasi non-WEIRD?", note: "'WEIRD' = Western, Educated, Industrialized, Rich, Democratic" },
            { speaker: "A", en: "Absolutely — and we explicitly acknowledge that as a limitation in our paper. Cross-cultural replication is the obvious next step.", id: "Tentu saja — dan kami secara eksplisit mengakuinya sebagai keterbatasan dalam makalah kami. Replikasi lintas budaya adalah langkah selanjutnya yang jelas." },
            { speaker: "B", en: "Thank you for the candid response. I look forward to the full publication.", id: "Terima kasih atas jawaban yang jujur. Saya nantikan publikasi lengkapnya." },
          ]}
        />

        <KeyPhrasesCard
          title="Academic Conference Expressions"
          color="emerald"
          phrases={[
            { phrase: "keynote address", meaning: "pidato utama yang membuka konferensi" },
            { phrase: "open the floor", meaning: "mempersilakan audiens untuk bertanya atau berkomentar" },
            { phrase: "call for papers", meaning: "undangan untuk mengirimkan makalah penelitian" },
            { phrase: "peer-reviewed", meaning: "telah ditinjau oleh pakar sejawat sebelum diterbitkan" },
            { phrase: "co-author", meaning: "penulis bersama dalam sebuah karya ilmiah" },
            { phrase: "findings suggest", meaning: "temuan menunjukkan — frasa akademis standar" },
          ]}
        />

        <FillInBlank
          sentence="The journal only accepts manuscripts that have undergone rigorous _____ review by at least two independent experts."
          options={["peer", "blind", "open", "internal"]}
          answer="peer"
          explanation="'Peer review' is the standard academic quality-control process where other experts in the field evaluate a manuscript before it is published."
        />

        <FillInBlank
          sentence="Dr. Lee will _____ the floor for questions after her twenty-minute presentation concludes."
          options={["open", "start", "begin", "allow"]}
          answer="open"
          explanation="'Open the floor' is a fixed academic expression meaning to invite the audience to ask questions or make comments."
        />

        <CulturalNote
          note="Academic conferences follow strict protocols. Presenters are expected to cite sources, acknowledge limitations, and respond to criticism professionally. Networking during coffee breaks and poster sessions is considered just as important as the formal presentations. Business cards (or digital equivalents) are commonly exchanged among researchers."
        />

        <PronunciationTip
          tip="The word 'methodology' is often mispronounced. The correct pronunciation is /ˌmeθəˈdɒlədʒi/ — meth-uh-DOL-uh-jee. Stress falls on the third syllable. The adjective 'methodological' shifts the stress: meth-uh-duh-LOJ-i-kul."
        />

        <ExpressionMeter
          expression="That's an excellent point."
          formalLevel={5}
          informalLevel={2}
        />
      </div>
    ),
  },

  {
    id: 74,
    day: 74,
    title: "Performance Review",
    category: "Professional",
    difficulty: "Advanced",
    color: "slate",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Annual Performance Review" bg="from-slate-50 to-gray-50">
          <Day74Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Manager", B: "Employee" }}
          situation="Annual performance review meeting in a manager's office"
          lines={[
            { speaker: "A", en: "Thanks for coming in, Jordan. Let's start by reviewing your KPIs from this past year. Overall, you've exceeded your targets in three out of five categories.", id: "Terima kasih sudah datang, Jordan. Mari kita mulai dengan meninjau KPI Anda dari tahun ini. Secara keseluruhan, Anda melampaui target di tiga dari lima kategori.", note: "'KPI' = Key Performance Indicator" },
            { speaker: "B", en: "Thank you. I'm proud of the progress on the client retention initiative — we managed to reduce churn by eighteen percent.", id: "Terima kasih. Saya bangga dengan kemajuan dalam inisiatif retensi klien — kami berhasil mengurangi tingkat kehilangan pelanggan sebesar delapan belas persen.", note: "'churn' = tingkat pelanggan yang berhenti berlangganan" },
            { speaker: "A", en: "Exactly, and that's reflected in your score. However, there is an area where we feel there is room for growth — cross-functional collaboration.", id: "Tepat, dan itu tercermin dalam skor Anda. Namun, ada satu area yang kami rasa masih ada ruang untuk berkembang — kolaborasi lintas fungsi." },
            { speaker: "B", en: "I appreciate that feedback. I'll be honest — I struggled to align priorities with the product team during Q2. Could we set some structured touchpoints going forward?", id: "Saya menghargai masukan tersebut. Jujur saja — saya kesulitan menyelaraskan prioritas dengan tim produk di Q2. Bisakah kita mengatur beberapa titik pertemuan terstruktur ke depannya?", note: "'touchpoint' = momen komunikasi atau pertemuan terjadwal" },
            { speaker: "A", en: "That's a proactive suggestion and exactly the kind of ownership we value here. We'll build that into your development plan.", id: "Itu saran yang proaktif dan persis jenis kepemilikan yang kami hargai di sini. Kami akan memasukkan itu ke dalam rencana pengembangan Anda." },
            { speaker: "B", en: "I also wanted to raise the possibility of taking on a team lead role in the coming quarter, if there's an opportunity.", id: "Saya juga ingin mengangkat kemungkinan mengambil peran team lead di kuartal mendatang, jika ada kesempatan." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Manager", B: "Employee" }}
          situation="Discussing compensation, promotion, and goals for the next year"
          lines={[
            { speaker: "A", en: "Your interest in leadership is noted and frankly, it's something we've been considering as well. We'd like to put you on a leadership track.", id: "Minat Anda pada kepemimpinan dicatat dan sejujurnya, itu adalah sesuatu yang juga sudah kami pertimbangkan. Kami ingin menempatkan Anda di jalur kepemimpinan." },
            { speaker: "B", en: "That's fantastic news. Does that come with any changes in compensation or scope?", id: "Itu kabar yang luar biasa. Apakah ada perubahan dalam kompensasi atau ruang lingkup pekerjaan?" },
            { speaker: "A", en: "We're proposing a seven percent merit increase, effective next month, along with expanded responsibilities in Q1.", id: "Kami mengusulkan kenaikan prestasi tujuh persen, berlaku bulan depan, bersama dengan perluasan tanggung jawab di Q1.", note: "'merit increase' = kenaikan gaji berdasarkan kinerja" },
            { speaker: "B", en: "I'm very pleased to hear that. I want to make sure I deliver results that justify the investment in my development.", id: "Saya sangat senang mendengar itu. Saya ingin memastikan saya memberikan hasil yang membenarkan investasi dalam pengembangan saya." },
            { speaker: "A", en: "That's the right mindset. Let's set three SMART goals for the next cycle and revisit them at your mid-year check-in.", id: "Itu pola pikir yang tepat. Mari kita tetapkan tiga tujuan SMART untuk siklus berikutnya dan tinjau kembali pada check-in pertengahan tahun Anda.", note: "'SMART goals' = Specific, Measurable, Achievable, Relevant, Time-bound" },
            { speaker: "B", en: "Sounds like a solid plan. I'll draft a preliminary list and share it with you by end of week.", id: "Kedengarannya seperti rencana yang solid. Saya akan menyusun daftar awal dan berbagi dengan Anda sebelum akhir minggu." },
          ]}
        />

        <KeyPhrasesCard
          title="Performance Review Vocabulary"
          color="slate"
          phrases={[
            { phrase: "exceed / meet / fall short of targets", meaning: "melampaui / memenuhi / tidak mencapai target" },
            { phrase: "room for growth / improvement", meaning: "ada ruang untuk berkembang — cara sopan menyebut kelemahan" },
            { phrase: "merit increase", meaning: "kenaikan gaji berdasarkan kinerja" },
            { phrase: "development plan", meaning: "rencana pengembangan profesional karyawan" },
            { phrase: "take ownership", meaning: "mengambil tanggung jawab penuh atas pekerjaan" },
            { phrase: "SMART goals", meaning: "tujuan yang Spesifik, Terukur, Dapat dicapai, Relevan, dan Terikat waktu" },
          ]}
        />

        <FillInBlank
          sentence="Your performance this year has been outstanding — you have consistently _____ your quarterly sales targets by at least fifteen percent."
          options={["exceeded", "passed", "beaten", "topped"]}
          answer="exceeded"
          explanation="'Exceeded targets' is the standard professional phrase meaning you performed above expectations. 'Exceeded' is always preferred over informal alternatives in formal reviews."
        />

        <FillInBlank
          sentence="We appreciate your initiative, but there is still some _____ for improvement in your written communication skills."
          options={["room", "space", "chance", "place"]}
          answer="room"
          explanation="'Room for improvement' is a fixed professional idiom used to politely indicate that something needs to get better, without being bluntly critical."
        />

        <CulturalNote
          note="In most Western corporate cultures, annual performance reviews are formal and documented. Employees are expected to self-assess before the meeting and come prepared to discuss achievements and goals. It is acceptable — and even encouraged — to advocate for yourself professionally, including asking about promotions and salary increases during these reviews."
        />

        <PronunciationTip
          tip="The word 'compensation' is often stressed incorrectly. The correct stress is on the third syllable: com-pen-SAY-shun /ˌkɒmpənˈseɪʃən/. Similarly, 'performance' is stressed on the second syllable: per-FOR-mance /pəˈfɔːrməns/."
        />

        <ExpressionMeter
          expression="There is room for improvement."
          formalLevel={5}
          informalLevel={1}
        />
      </div>
    ),
  },

  {
    id: 75,
    day: 75,
    title: "Allergy Testing",
    category: "Health",
    difficulty: "Intermediate",
    color: "rose",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Allergy Testing Clinic" bg="from-rose-50 to-pink-50">
          <Day75Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Patient", B: "Doctor" }}
          situation="At an allergy clinic for a first allergy test appointment"
          lines={[
            { speaker: "A", en: "Dr. Morgan, I've been experiencing runny nose, itchy eyes, and sneezing almost every morning. My GP suggested I get allergy tested.", id: "Dr. Morgan, saya mengalami pilek, mata gatal, dan bersin hampir setiap pagi. Dokter umum saya menyarankan saya untuk tes alergi.", note: "'GP' = General Practitioner / dokter umum" },
            { speaker: "B", en: "Good that you came in. These symptoms sound like allergic rhinitis. Has anything changed recently — new pet, new home, different diet?", id: "Bagus Anda datang. Gejala-gejala ini terdengar seperti rhinitis alergi. Apakah ada sesuatu yang berubah baru-baru ini — hewan peliharaan baru, rumah baru, pola makan berbeda?" },
            { speaker: "A", en: "We did move into a new house two months ago, and my neighbor has two cats that sometimes come inside.", id: "Kami memang pindah ke rumah baru dua bulan lalu, dan tetangga saya punya dua kucing yang kadang masuk ke dalam." },
            { speaker: "B", en: "That's a useful lead. I'd like to run a skin prick test today to identify your specific triggers.", id: "Itu petunjuk yang berguna. Saya ingin melakukan tes tusukan kulit hari ini untuk mengidentifikasi pemicu spesifik Anda.", note: "'skin prick test' = tes tusukan kulit untuk alergi" },
            { speaker: "A", en: "Will it hurt? I'm a bit nervous about needles.", id: "Apakah itu sakit? Saya sedikit gugup dengan jarum." },
            { speaker: "B", en: "It's quite mild — more like a light scratch. We test about fifteen common allergens at once and read the results in fifteen to twenty minutes.", id: "Ini cukup ringan — lebih seperti goresan ringan. Kami menguji sekitar lima belas alergen umum sekaligus dan membaca hasilnya dalam lima belas hingga dua puluh menit." },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Patient", B: "Doctor" }}
          situation="Reviewing allergy test results and discussing treatment options"
          lines={[
            { speaker: "A", en: "So what do the results show?", id: "Jadi apa yang ditunjukkan hasilnya?" },
            { speaker: "B", en: "You've tested positive for dust mites, cat dander, and tree pollen. These are all very manageable. You're negative for food allergens, which is good news.", id: "Anda positif untuk tungau debu, bulu/kotoran kucing, dan serbuk sari pohon. Semua ini sangat dapat ditangani. Anda negatif untuk alergen makanan, itu kabar baik.", note: "'dander' = serpihan kulit atau bulu hewan yang memicu alergi" },
            { speaker: "A", en: "So that explains the morning symptoms! What are my treatment options?", id: "Jadi itu menjelaskan gejala pagi hari! Apa pilihan pengobatan saya?" },
            { speaker: "B", en: "I'll prescribe a daily antihistamine and a nasal corticosteroid spray. For the long term, immunotherapy — or allergy shots — could reduce your sensitivity significantly.", id: "Saya akan meresepkan antihistamin harian dan semprotan kortikosteroid nasal. Untuk jangka panjang, imunoterapi — atau suntikan alergi — dapat mengurangi sensitivitas Anda secara signifikan.", note: "'immunotherapy' = terapi untuk mengurangi respons alergi secara bertahap" },
            { speaker: "A", en: "And are there lifestyle changes I should make?", id: "Dan apakah ada perubahan gaya hidup yang harus saya lakukan?" },
            { speaker: "B", en: "Yes — use allergen-proof mattress covers, vacuum frequently with a HEPA filter, and try to limit your exposure to the neighbor's cats.", id: "Ya — gunakan penutup kasur anti-alergen, sering vacuuming dengan filter HEPA, dan coba batasi paparan Anda terhadap kucing tetangga." },
          ]}
        />

        <KeyPhrasesCard
          title="Allergy & Medical Vocabulary"
          color="rose"
          phrases={[
            { phrase: "allergic reaction", meaning: "reaksi alergi tubuh terhadap zat tertentu" },
            { phrase: "trigger / allergen", meaning: "pemicu alergi / zat yang menyebabkan reaksi alergi" },
            { phrase: "skin prick test", meaning: "tes tusukan kulit untuk mengidentifikasi alergi" },
            { phrase: "antihistamine", meaning: "obat untuk mengurangi reaksi alergi" },
            { phrase: "immunotherapy", meaning: "terapi desensitisasi untuk mengurangi alergi jangka panjang" },
            { phrase: "test positive / negative for", meaning: "hasil tes menunjukkan adanya / tidak adanya suatu kondisi" },
          ]}
        />

        <FillInBlank
          sentence="The doctor confirmed that I tested _____ for peanut allergy, which means I must avoid all peanut-containing foods."
          options={["positive", "negative", "clear", "true"]}
          answer="positive"
          explanation="'Test positive for' means the test detected the condition. In allergy testing, a positive result means the allergen caused a reaction on your skin."
        />

        <FillInBlank
          sentence="Taking a daily _____ can help control sneezing and itchy eyes caused by seasonal pollen allergies."
          options={["antihistamine", "antibiotic", "antiviral", "antifungal"]}
          answer="antihistamine"
          explanation="An 'antihistamine' blocks histamine, the chemical your body releases during an allergic reaction, reducing symptoms like sneezing, itching, and watery eyes."
        />

        <CulturalNote
          note="Allergies are extremely common in industrialized countries — roughly one in five people in the US and UK have some form of allergic condition. Food allergy labeling on products is legally required in many countries. It is considered polite and important to inform hosts or restaurants about severe allergies before eating, especially for life-threatening ones like nut allergies."
        />

        <PronunciationTip
          tip="The word 'allergy' is pronounced /ˈælərdʒi/ — AL-er-jee. The adjective 'allergic' shifts the stress: /əˈlɜːrdʒɪk/ — a-LER-jik. A common mistake is to say 'AL-er-jik' (incorrect). Practice: 'I have an AL-er-jee. I am a-LER-jik to dust.'"
        />

        <ExpressionMeter
          expression="That's good news!"
          formalLevel={2}
          informalLevel={4}
        />
      </div>
    ),
  },

  {
    id: 76,
    day: 76,
    title: "Board Game Night",
    category: "Entertainment",
    difficulty: "Beginner",
    color: "pink",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Board Game Night" bg="from-pink-50 to-fuchsia-50">
          <Day76Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Sam", B: "Lily" }}
          situation="Friends gathered for a board game night at home"
          lines={[
            { speaker: "A", en: "Okay everyone, I bought a new game last week. It's called Settlers of Catan. Has anyone played it before?", id: "Oke semua orang, saya membeli permainan baru minggu lalu. Namanya Settlers of Catan. Apakah ada yang pernah memainkannya?" },
            { speaker: "B", en: "I have! It's so much fun. You build roads and settlements and try to collect resources to win.", id: "Saya pernah! Sangat menyenangkan. Anda membangun jalan dan permukiman dan mencoba mengumpulkan sumber daya untuk menang." },
            { speaker: "A", en: "Exactly! It can get competitive, but it's all in good fun. Let me explain the rules first.", id: "Tepat! Bisa jadi kompetitif, tapi semuanya menyenangkan. Izinkan saya menjelaskan aturannya terlebih dahulu.", note: "'all in good fun' = tidak serius, hanya untuk bersenang-senang" },
            { speaker: "B", en: "Wait, how long does a game usually take? I have to leave by ten.", id: "Tunggu, biasanya berapa lama satu permainan? Saya harus pergi sebelum jam sepuluh." },
            { speaker: "A", en: "About ninety minutes with four players. We should be fine.", id: "Sekitar sembilan puluh menit dengan empat pemain. Kita pasti cukup waktu." },
            { speaker: "B", en: "Perfect! Who's going first? Let's roll the dice to decide!", id: "Sempurna! Siapa yang pertama? Mari kita lempar dadu untuk memutuskan!" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Sam", B: "Lily" }}
          situation="During the game, trading resources and making deals"
          lines={[
            { speaker: "A", en: "I'll trade you two wood cards for one ore. I'm so close to building a city!", id: "Saya akan tukar dua kartu kayu dengan satu bijih besi. Saya sangat dekat untuk membangun kota!" },
            { speaker: "B", en: "Hmm, that's not a great deal for me. How about two wood and one wheat for one ore?", id: "Hmm, itu tidak terlalu menguntungkan bagi saya. Bagaimana dua kayu dan satu gandum untuk satu bijih?" },
            { speaker: "A", en: "You drive a hard bargain! Fine, deal. Now watch me build the longest road.", id: "Anda menawar dengan keras! Oke, deal. Sekarang lihat saya membangun jalan terpanjang.", note: "'drive a hard bargain' = menegosiasikan dengan keras untuk mendapatkan yang terbaik" },
            { speaker: "B", en: "Don't get too confident — I'm only two points away from winning!", id: "Jangan terlalu percaya diri — saya hanya dua poin lagi untuk menang!" },
            { speaker: "A", en: "This game is so intense. I love it! Should we play another round after this?", id: "Permainan ini sangat seru. Saya suka! Apakah kita harus main satu putaran lagi setelah ini?" },
            { speaker: "B", en: "Absolutely! But first, let me win this one. It's my turn — come on, dice!", id: "Tentu saja! Tapi pertama, biarkan saya menang yang ini. Giliran saya — ayo, dadu!" },
          ]}
        />

        <KeyPhrasesCard
          title="Board Game Expressions"
          color="pink"
          phrases={[
            { phrase: "It's your turn", meaning: "giliran kamu sekarang" },
            { phrase: "roll the dice", meaning: "melempar dadu" },
            { phrase: "make a move", meaning: "melakukan langkah / giliran dalam permainan" },
            { phrase: "deal!", meaning: "setuju! / oke! — menerima suatu penawaran" },
            { phrase: "drive a hard bargain", meaning: "bernegosiasi dengan keras / tidak mudah menyerah" },
            { phrase: "all in good fun", meaning: "tidak serius, semuanya untuk bersenang-senang" },
          ]}
        />

        <FillInBlank
          sentence="Okay, I'll trade you my two sheep cards for your one brick card. Do we have a _____?"
          options={["deal", "trade", "swap", "pact"]}
          answer="deal"
          explanation="'Deal!' is used to confirm agreement to an offer or trade. It is very common in both game negotiations and real-life informal agreements."
        />

        <FillInBlank
          sentence="Don't just sit there — it's your _____ to roll the dice and move your piece!"
          options={["turn", "time", "chance", "move"]}
          answer="turn"
          explanation="'It's your turn' is the standard phrase to tell someone it is now their moment to play. 'Turn' refers to each player's opportunity to act in sequence."
        />

        <CulturalNote
          note="Board game nights are a popular social activity in English-speaking countries, especially among young adults who enjoy alternatives to screen-based entertainment. Games like Catan, Ticket to Ride, and Pandemic have become mainstream. It is common to provide snacks and drinks during game nights, and games are often played competitively but with a friendly spirit."
        />

        <PronunciationTip
          tip="The word 'competitive' is often mispronounced. The correct version is /kəmˈpetɪtɪv/ — com-PET-i-tiv. Five syllables with stress on the second. A very common error is adding an extra syllable: com-pe-TI-tive (four syllables only in standard speech)."
        />

        <ExpressionMeter
          expression="You drive a hard bargain!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 77,
    day: 77,
    title: "Garage Sale",
    category: "Daily Life",
    difficulty: "Beginner",
    color: "amber",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Neighborhood Garage Sale" bg="from-amber-50 to-orange-50">
          <Day77Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Buyer", B: "Seller" }}
          situation="At a neighborhood garage sale on a weekend morning"
          lines={[
            { speaker: "A", en: "Hi there! Is this clock for sale? How much are you asking for it?", id: "Halo! Apakah jam ini dijual? Berapa Anda menawarkan harganya?" },
            { speaker: "B", en: "Yes! That's a vintage wall clock — I'm asking fifteen dollars for it. It works perfectly.", id: "Ya! Itu jam dinding antik — saya meminta lima belas dolar untuk itu. Masih berfungsi sempurna." },
            { speaker: "A", en: "That's a little steep for me. Would you take ten?", id: "Itu agak mahal bagi saya. Maukah Anda menerima sepuluh?", note: "'steep' = mahal / harga terlalu tinggi untuk nilainya" },
            { speaker: "B", en: "How about twelve? It's a solid antique and hard to find.", id: "Bagaimana dua belas? Ini antik berkualitas dan susah ditemukan." },
            { speaker: "A", en: "Deal! And what about these books? Are they priced to go?", id: "Deal! Dan bagaimana dengan buku-buku ini? Apakah harganya murah?", note: "'priced to go' = harga rendah agar cepat terjual" },
            { speaker: "B", en: "One dollar each, or five for five dollars. Take your pick!", id: "Satu dolar masing-masing, atau lima untuk lima dolar. Pilih saja!" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Buyer", B: "Seller" }}
          situation="Continuing to browse and asking about more items"
          lines={[
            { speaker: "A", en: "I'll take all five books then. Oh, what's in that box over there?", id: "Saya ambil semua lima buku kalau begitu. Oh, apa yang ada di dalam kotak itu?" },
            { speaker: "B", en: "That's a box of kitchen stuff — plates, cups, mixing bowls. Everything in the box is just two dollars.", id: "Itu kotak berisi barang-barang dapur — piring, gelas, mangkuk. Semua yang ada di dalam kotak hanya dua dolar." },
            { speaker: "A", en: "Two dollars for the whole box? That's a steal! I'll take it.", id: "Dua dolar untuk seluruh kotak? Itu murah sekali! Saya ambil.", note: "'that's a steal' = harganya sangat murah, hampir seperti mencuri" },
            { speaker: "B", en: "Great! So that's twelve for the clock, five for the books, and two for the box — total nineteen dollars.", id: "Bagus! Jadi dua belas untuk jam, lima untuk buku, dan dua untuk kotak — total sembilan belas dolar." },
            { speaker: "A", en: "I only have a twenty. Do you have change?", id: "Saya hanya punya dua puluh. Apakah Anda punya kembalian?" },
            { speaker: "B", en: "Absolutely. Here's your dollar change. Thanks for stopping by — come back anytime!", id: "Tentu saja. Ini satu dolar kembalian Anda. Terima kasih sudah mampir — datang lagi kapan saja!" },
          ]}
        />

        <KeyPhrasesCard
          title="Garage Sale Vocabulary"
          color="amber"
          phrases={[
            { phrase: "that's a steal", meaning: "harganya sangat murah / mendapat barang bagus dengan harga rendah" },
            { phrase: "steep / pricey", meaning: "mahal — harga lebih tinggi dari yang diharapkan" },
            { phrase: "priced to go", meaning: "dihargai murah agar cepat terjual" },
            { phrase: "make an offer", meaning: "ajukan harga yang Anda mau bayar" },
            { phrase: "as-is", meaning: "dijual apa adanya, tanpa garansi atau perbaikan" },
            { phrase: "take your pick", meaning: "pilih sesukamu — bebas memilih" },
          ]}
        />

        <FillInBlank
          sentence="This sofa is only twenty dollars — it's practically a _____! It's barely been used."
          options={["steal", "deal", "bargain", "gift"]}
          answer="steal"
          explanation="'It's a steal' means the item is so cheap it feels like you are almost getting it for free. While 'bargain' is also correct, 'steal' is the stronger and more common expression in casual speech."
        />

        <FillInBlank
          sentence="Everything on this table is sold _____ — no returns, no refunds, and no warranties."
          options={["as-is", "for sale", "at cost", "on discount"]}
          answer="as-is"
          explanation="'As-is' means the item is sold in its current condition with no changes, repairs, or guarantees. It is a key term at garage sales and second-hand shops."
        />

        <CulturalNote
          note="Garage sales (also called 'yard sales' or 'tag sales' in the US) are a common way for families to sell unwanted items from their home. They are usually held on weekends, advertised with signs around the neighborhood, and are considered a fun social activity. Bargaining is expected and accepted. Prices are usually written on sticker tags attached to each item."
        />

        <PronunciationTip
          tip="The word 'garage' has different pronunciations depending on the country. In American English it is /ɡəˈrɑːdʒ/ — guh-RAHJ, with stress on the second syllable. In British English it is often /ˈɡærɪdʒ/ — GAR-ij, with stress on the first syllable. Both are correct in their respective varieties."
        />

        <ExpressionMeter
          expression="That's a steal!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },

  {
    id: 78,
    day: 78,
    title: "Study Abroad Orientation",
    category: "Academic",
    difficulty: "Intermediate",
    color: "blue",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Study Abroad Orientation" bg="from-blue-50 to-indigo-50">
          <Day78Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Advisor", B: "Student" }}
          situation="International student orientation session at a university abroad"
          lines={[
            { speaker: "A", en: "Welcome, everyone! I'm your study abroad coordinator. Today's orientation will cover housing, course registration, visa requirements, and cultural adaptation.", id: "Selamat datang semua! Saya koordinator studi luar negeri Anda. Orientasi hari ini akan mencakup perumahan, pendaftaran mata kuliah, persyaratan visa, dan adaptasi budaya." },
            { speaker: "B", en: "Excuse me — I received my housing assignment, but I'm sharing with three other students. Is it possible to request a single room?", id: "Permisi — saya menerima penugasan tempat tinggal, tapi saya berbagi dengan tiga mahasiswa lain. Apakah mungkin meminta kamar sendiri?" },
            { speaker: "A", en: "Single rooms are available but at an additional cost. You can submit a housing change request through the student portal within the first week.", id: "Kamar single tersedia tetapi dengan biaya tambahan. Anda dapat mengajukan permintaan perubahan tempat tinggal melalui portal mahasiswa dalam minggu pertama." },
            { speaker: "B", en: "Thank you. Also, my home university requires me to complete twelve credit hours here. Can I take courses from different departments?", id: "Terima kasih. Juga, universitas asal saya mengharuskan saya menyelesaikan dua belas jam kredit di sini. Bisakah saya mengambil mata kuliah dari departemen yang berbeda?" },
            { speaker: "A", en: "Absolutely! As a visiting student, you have access to most courses across faculties, subject to prerequisites and enrollment caps.", id: "Tentu saja! Sebagai mahasiswa tamu, Anda memiliki akses ke sebagian besar mata kuliah di semua fakultas, tergantung prasyarat dan kapasitas pendaftaran.", note: "'enrollment cap' = batas maksimal mahasiswa yang bisa mendaftar" },
            { speaker: "B", en: "That's great. One more question — are there any cultural norms I should be aware of to avoid accidentally offending anyone?", id: "Bagus sekali. Satu pertanyaan lagi — apakah ada norma budaya yang harus saya perhatikan agar tidak menyinggung siapapun?" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Student 1", B: "Student 2" }}
          situation="Two international students talking during the orientation break"
          lines={[
            { speaker: "A", en: "Where are you from? I'm Maya, from Indonesia.", id: "Anda dari mana? Saya Maya, dari Indonesia." },
            { speaker: "B", en: "Nice to meet you, Maya! I'm Carlos from Brazil. This is my first time this far from home — it's a bit overwhelming.", id: "Senang bertemu denganmu, Maya! Saya Carlos dari Brasil. Ini pertama kali saya sejauh ini dari rumah — agak mengoverwhelming.", note: "'overwhelming' = terasa terlalu banyak / sulit ditangani sekaligus" },
            { speaker: "A", en: "I know the feeling! But I think it will get easier once we settle in. Have you sorted out a local SIM card yet?", id: "Saya tahu perasaan itu! Tapi saya pikir akan lebih mudah begitu kita terbiasa. Apakah Anda sudah mengurus SIM card lokal?" },
            { speaker: "B", en: "Not yet. Any recommendations? I need a data plan that doesn't cost a fortune.", id: "Belum. Ada rekomendasi? Saya butuh paket data yang tidak terlalu mahal.", note: "'cost a fortune' = sangat mahal" },
            { speaker: "A", en: "There's a phone shop near campus that has a great prepaid plan — I saw the flyer at orientation. About twenty dollars a month for unlimited data.", id: "Ada toko ponsel dekat kampus yang memiliki paket prabayar yang bagus — saya lihat brosurnya di orientasi. Sekitar dua puluh dolar sebulan untuk data tidak terbatas." },
            { speaker: "B", en: "That sounds perfect. Do you want to go check it out together after orientation ends?", id: "Kedengarannya sempurna. Apakah Anda ingin pergi melihatnya bersama setelah orientasi selesai?" },
          ]}
        />

        <KeyPhrasesCard
          title="Study Abroad Vocabulary"
          color="blue"
          phrases={[
            { phrase: "credit hours / credit transfer", meaning: "jam kredit / pengakuan mata kuliah dari universitas lain" },
            { phrase: "visiting student", meaning: "mahasiswa tamu dari universitas lain" },
            { phrase: "enrollment cap", meaning: "batas maksimal mahasiswa yang bisa mendaftar dalam satu kelas" },
            { phrase: "culture shock", meaning: "guncangan budaya saat beradaptasi di negara asing" },
            { phrase: "settle in", meaning: "mulai merasa nyaman di tempat baru" },
            { phrase: "prerequisite", meaning: "mata kuliah atau syarat yang harus dipenuhi sebelum mengambil kelas tertentu" },
          ]}
        />

        <FillInBlank
          sentence="Most students experience some degree of culture _____ during their first weeks in a foreign country."
          options={["shock", "clash", "gap", "stress"]}
          answer="shock"
          explanation="'Culture shock' is the fixed term for the feeling of disorientation, anxiety, or confusion that people experience when immersed in a new and unfamiliar culture."
        />

        <FillInBlank
          sentence="It usually takes about a month to fully _____ in and start feeling comfortable in your new university environment."
          options={["settle", "adapt", "adjust", "fit"]}
          answer="settle"
          explanation="'Settle in' is a phrasal verb meaning to become comfortable and established in a new place or situation. It is commonly used when talking about moving to a new home, school, or country."
        />

        <CulturalNote
          note="Studying abroad is considered a significant personal and professional development opportunity in many cultures. Universities often require international students to attend orientation sessions that cover practical matters (banking, transportation, housing) and cultural guidance. It is common to form friendships with people from many countries during these programs, creating lifelong international networks."
        />

        <PronunciationTip
          tip="The word 'orientation' is pronounced /ˌɔːriənˈteɪʃən/ — or-ee-en-TAY-shun. It has five syllables with stress on the fourth. A common error is reducing it to four syllables: or-en-TAY-shun. Make sure all five syllables are clearly articulated, especially in formal academic contexts."
        />

        <ExpressionMeter
          expression="It's a bit overwhelming."
          formalLevel={2}
          informalLevel={4}
        />
      </div>
    ),
  },

  {
    id: 79,
    day: 79,
    title: "Karaoke Night",
    category: "Entertainment",
    difficulty: "Beginner",
    color: "pink",
    body: (
      <div className="space-y-6">
        <SceneIllustration title="Karaoke Night" bg="from-pink-50 to-purple-50">
          <Day79Scene />
        </SceneIllustration>

        <ConversationCard
          speakers={{ A: "Mia", B: "Tom" }}
          situation="Friends at a karaoke bar deciding what to sing"
          lines={[
            { speaker: "A", en: "Tom, it's your turn! You promised you'd sing tonight — no backing out now!", id: "Tom, giliran kamu! Kamu berjanji akan menyanyi malam ini — tidak boleh mundur sekarang!", note: "'back out' = membatalkan janji / mengundurkan diri" },
            { speaker: "B", en: "I know, I know! I'm just looking through the song list. There are so many choices. Do you have a good one for beginners?", id: "Aku tahu, aku tahu! Aku hanya sedang melihat daftar lagu. Ada begitu banyak pilihan. Apakah kamu punya yang bagus untuk pemula?" },
            { speaker: "A", en: "Go with something classic and easy — like 'Don't Stop Believin'' or 'Sweet Caroline'. Everyone knows the words!", id: "Pilih sesuatu yang klasik dan mudah — seperti 'Don't Stop Believin'' atau 'Sweet Caroline'. Semua orang hafal liriknya!" },
            { speaker: "B", en: "Ooh, 'Sweet Caroline' is perfect. The crowd always sings along for that one!", id: "Oh, 'Sweet Caroline' sempurna. Penonton selalu ikut menyanyi untuk lagu itu!" },
            { speaker: "A", en: "Exactly! You don't even have to be a great singer — karaoke is all about having fun, not perfection.", id: "Tepat! Kamu tidak harus menjadi penyanyi yang hebat — karaoke itu semua tentang bersenang-senang, bukan kesempurnaan." },
            { speaker: "B", en: "Okay, I'm putting in the request now. Wish me luck — or better yet, come up and sing with me!", id: "Oke, saya mengajukan permintaan sekarang. Doakan saya berhasil — atau lebih baik, naik dan menyanyi bersamaku!" },
          ]}
        />

        <ConversationCard
          speakers={{ A: "Mia", B: "Tom" }}
          situation="After the performance, talking about the experience"
          lines={[
            { speaker: "A", en: "Tom, that was amazing! You absolutely nailed it! Everyone was singing along.", id: "Tom, itu luar biasa! Kamu benar-benar berhasil! Semua orang ikut menyanyi.", note: "'nailed it' = melakukan sesuatu dengan sangat baik" },
            { speaker: "B", en: "Ha! I was so nervous at first, but once the music started, I just got into it. My heart was pounding!", id: "Ha! Aku sangat gugup pada awalnya, tapi begitu musik mulai, aku langsung menikmatinya. Jantungku berdegup kencang!" },
            { speaker: "A", en: "Stage fright is totally normal. But you owned the stage! Did you enjoy it?", id: "Demam panggung itu sangat normal. Tapi kamu menguasai panggung! Apakah kamu menikmatinya?", note: "'owned the stage' = tampil percaya diri dan memukau di atas panggung" },
            { speaker: "B", en: "Honestly? It was a blast. I haven't laughed that much in ages. We should do this every month!", id: "Jujur saja? Itu sangat menyenangkan. Aku tidak tertawa sebanyak itu dalam waktu lama. Kita harus melakukan ini setiap bulan!" },
            { speaker: "A", en: "I'm so glad you didn't back out! You're a natural performer.", id: "Aku sangat senang kamu tidak mengundurkan diri! Kamu adalah performer alami." },
            { speaker: "B", en: "Don't go that far! But seriously — who's next? Let's get more people up there!", id: "Jangan terlalu jauh! Tapi serius — siapa berikutnya? Ayo ajak lebih banyak orang naik ke sana!" },
          ]}
        />

        <KeyPhrasesCard
          title="Karaoke Night Expressions"
          color="pink"
          phrases={[
            { phrase: "nail it", meaning: "melakukan sesuatu dengan sangat baik / berhasil sempurna" },
            { phrase: "back out", meaning: "membatalkan / mengundurkan diri dari janji" },
            { phrase: "stage fright", meaning: "demam panggung / rasa takut tampil di depan orang" },
            { phrase: "own the stage", meaning: "tampil dengan percaya diri dan memukau audiens" },
            { phrase: "a blast", meaning: "sangat menyenangkan / pengalaman yang luar biasa" },
            { phrase: "sing along", meaning: "ikut menyanyi bersama / mengikuti lagu yang dimainkan" },
          ]}
        />

        <FillInBlank
          sentence="Don't be shy — just get up there and _____ along! You know all the words to this song."
          options={["sing", "hum", "shout", "play"]}
          answer="sing"
          explanation="'Sing along' means to join in singing with a song that is already playing. It is always 'sing along', not 'hum along' or other substitutions, in this context."
        />

        <FillInBlank
          sentence="She was terrified before going on stage, but once the music started, she completely _____ her stage fright."
          options={["overcame", "forgot", "ignored", "lost"]}
          answer="overcame"
          explanation="'Overcame stage fright' means successfully dealing with and getting past the fear of performing. 'Overcome' is the correct verb — overcome, overcame, overcome."
        />

        <CulturalNote
          note="Karaoke originated in Japan in the 1970s and has become a global entertainment phenomenon. In East Asian countries, private karaoke rooms (KTV) where groups rent a room for themselves are popular. In Western countries, karaoke is more commonly done in public bars with a shared stage. It is considered a very social activity — the goal is fun and laughter, not vocal perfection."
        />

        <PronunciationTip
          tip="The word 'karaoke' comes from Japanese and is often mispronounced in English. The correct English pronunciation is /ˌkæriˈoʊki/ — kar-ee-OH-kee (four syllables). Many English speakers say 'KAR-ee-oh-kee' which is acceptable, but avoid saying 'kuh-RAH-oh-kee' or reducing it to three syllables."
        />

        <ExpressionMeter
          expression="It was a blast!"
          formalLevel={1}
          informalLevel={5}
        />
      </div>
    ),
  },
]
