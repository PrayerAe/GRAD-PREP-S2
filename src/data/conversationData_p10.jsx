import { SceneIllustration, ConversationCard, KeyPhrasesCard, FillInBlank, CulturalNote, PronunciationTip, ExpressionMeter } from './conversationData';

export const conversationsPart10 = [
  // ─── Day 80: Dog Park ───────────────────────────────────────────────────────
  {
    id: 80,
    day: 80,
    title: 'Dog Park',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Sky */}
            <rect width="200" height="140" fill="#FEF9C3" />
            {/* Ground / grass */}
            <ellipse cx="100" cy="120" rx="95" ry="22" fill="#86EFAC" />
            <rect x="5" y="118" width="190" height="22" fill="#86EFAC" />
            {/* Fence posts */}
            {[20, 50, 80, 110, 140, 170].map((x, i) => (
              <rect key={i} x={x} y="88" width="5" height="32" rx="2" fill="#A16207" />
            ))}
            {/* Fence rail */}
            <rect x="20" y="94" width="155" height="5" rx="2" fill="#CA8A04" />
            <rect x="20" y="104" width="155" height="5" rx="2" fill="#CA8A04" />
            {/* Dog 1 (golden) */}
            <ellipse cx="75" cy="115" rx="14" ry="8" fill="#FBBF24" />
            <circle cx="87" cy="110" r="7" fill="#FBBF24" />
            <ellipse cx="92" cy="108" rx="4" ry="3" fill="#FCD34D" />
            {/* Dog 1 ear */}
            <ellipse cx="84" cy="106" rx="3" ry="5" fill="#F59E0B" transform="rotate(-20 84 106)" />
            {/* Dog 1 tail */}
            <path d="M61 112 Q55 105 60 100" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Dog 1 legs */}
            <rect x="68" y="120" width="4" height="8" rx="2" fill="#FBBF24" />
            <rect x="76" y="120" width="4" height="8" rx="2" fill="#FBBF24" />
            {/* Dog 2 (dark) */}
            <ellipse cx="130" cy="116" rx="13" ry="7" fill="#78350F" />
            <circle cx="141" cy="112" r="6" fill="#78350F" />
            <ellipse cx="146" cy="110" rx="3" ry="2.5" fill="#92400E" />
            <ellipse cx="138" cy="108" rx="2.5" ry="4" fill="#92400E" transform="rotate(-15 138 108)" />
            {/* Dog 2 legs */}
            <rect x="123" y="121" width="4" height="7" rx="2" fill="#78350F" />
            <rect x="131" y="121" width="4" height="7" rx="2" fill="#78350F" />
            {/* Ball */}
            <circle cx="105" cy="118" r="5" fill="#EF4444" />
            <path d="M101 115 Q105 113 109 115" stroke="#fff" strokeWidth="1" fill="none" />
            {/* People */}
            {/* Person 1 */}
            <circle cx="55" cy="80" r="8" fill="#FDE68A" />
            <rect x="49" y="88" width="12" height="20" rx="3" fill="#3B82F6" />
            <rect x="46" y="89" width="4" height="14" rx="2" fill="#3B82F6" />
            <rect x="61" y="89" width="4" height="14" rx="2" fill="#3B82F6" />
            {/* Person 2 */}
            <circle cx="150" cy="80" r="8" fill="#FECACA" />
            <rect x="144" y="88" width="12" height="20" rx="3" fill="#EC4899" />
            <rect x="141" y="89" width="4" height="14" rx="2" fill="#EC4899" />
            <rect x="156" y="89" width="4" height="14" rx="2" fill="#EC4899" />
            {/* Speech bubble */}
            <rect x="58" y="62" width="50" height="18" rx="6" fill="white" stroke="#FCD34D" strokeWidth="1.5" />
            <polygon points="65,80 70,80 67,86" fill="white" stroke="#FCD34D" strokeWidth="1" />
            <text x="83" y="75" textAnchor="middle" fontSize="7" fill="#92400E">So cute!</text>
            {/* Sun */}
            <circle cx="175" cy="20" r="12" fill="#FDE68A" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={175 + 14 * Math.cos(rad)}
                  y1={20 + 14 * Math.sin(rad)}
                  x2={175 + 18 * Math.cos(rad)}
                  y2={20 + 18 * Math.sin(rad)}
                  stroke="#FDE68A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="At the Dog Park – Part 1"
          dialog={[
            {
              speaker: 'Sarah',
              lines: [
                { text: "Oh, what a beautiful dog! What's his name?", translation: 'Wah, anjingnya cantik sekali! Siapa namanya?' },
                { text: "He looks so friendly.", translation: 'Dia kelihatan sangat ramah.' },
              ],
            },
            {
              speaker: 'Tom',
              lines: [
                { text: "Thanks! His name is Biscuit. He loves meeting new people.", translation: 'Terima kasih! Namanya Biscuit. Dia suka bertemu orang baru.' },
                { text: "Can he say hello to your dog?", translation: 'Boleh dia menyapa anjing kamu?' },
              ],
            },
            {
              speaker: 'Sarah',
              lines: [
                { text: "Of course! Her name is Luna. She's very playful.", translation: 'Tentu saja! Namanya Luna. Dia sangat suka bermain.' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="At the Dog Park – Part 2"
          dialog={[
            {
              speaker: 'Tom',
              lines: [
                { text: "How long have you been coming to this park?", translation: 'Sudah berapa lama kamu datang ke taman ini?' },
                { text: "I just moved to the neighborhood last week.", translation: 'Saya baru pindah ke lingkungan ini minggu lalu.' },
              ],
            },
            {
              speaker: 'Sarah',
              lines: [
                { text: "Oh, welcome! I come here every morning.", translation: 'Oh, selamat datang! Saya ke sini setiap pagi.' },
                { text: "The dogs here are all very well-behaved.", translation: 'Anjing-anjing di sini semuanya sangat sopan.' },
              ],
            },
            {
              speaker: 'Tom',
              lines: [
                { text: "That's great to hear. Biscuit needs a lot of exercise!", translation: 'Senang mendengarnya. Biscuit butuh banyak olahraga!' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "What's his/her name?", meaning: 'Siapa namanya? (untuk hewan)' },
            { phrase: "He/She looks so ___.", meaning: 'Dia kelihatan sangat ___.' },
            { phrase: "Can he/she say hello to ___?", meaning: 'Boleh dia menyapa ___?' },
            { phrase: "She's very playful.", meaning: 'Dia sangat suka bermain.' },
            { phrase: "I just moved to ___.", meaning: 'Saya baru pindah ke ___.' },
            { phrase: "Needs a lot of exercise.", meaning: 'Butuh banyak olahraga.' },
          ]}
        />

        <FillInBlank
          sentence="My dog ___ a lot of attention every day."
          options={["needs", "need", "needing", "needed"]}
          answer="needs"
          explanation="Gunakan 'needs' karena subjeknya adalah 'My dog' (orang ketiga tunggal, present tense)."
        />

        <FillInBlank
          sentence="I ___ here every morning to let my dog run."
          options={["come", "comes", "coming", "came"]}
          answer="come"
          explanation="Gunakan 'come' karena subjeknya adalah 'I' (orang pertama, present tense)."
        />

        <CulturalNote
          note="Di Amerika dan banyak negara Barat, dog park adalah fasilitas umum di mana pemilik anjing dapat melepas anjingnya tanpa tali. Pemilik anjing sering memulai percakapan dengan bertanya nama anjing lawan bicara sebelum nama orangnya — ini adalah kebiasaan sosial yang lazim di komunitas pecinta anjing."
        />

        <PronunciationTip
          tip="Kata 'playful' diucapkan /ˈpleɪfəl/. Perhatikan dua suku kata: PLAY-ful. Jangan menambahkan suku kata ekstra menjadi 'play-ful-el'. Kata 'well-behaved' diucapkan /ˌwel bɪˈheɪvd/ dengan penekanan pada suku kata kedua dari 'behaved'."
        />

        <ExpressionMeter
          expressions={[
            { text: "He looks friendly.", level: 1, label: 'Formal' },
            { text: "He seems really nice!", level: 2, label: 'Neutral' },
            { text: "Oh wow, he's so sweet!", level: 3, label: 'Casual' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 81: Train Travel ────────────────────────────────────────────────────
  {
    id: 81,
    day: 81,
    title: 'Train Travel',
    category: 'Travel',
    difficulty: 'Intermediate',
    color: 'teal',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Background sky */}
            <rect width="200" height="140" fill="#E0F2FE" />
            {/* Platform floor */}
            <rect x="0" y="100" width="200" height="40" fill="#CBD5E1" />
            {/* Platform edge line */}
            <rect x="0" y="100" width="200" height="4" fill="#F59E0B" />
            {/* Train body */}
            <rect x="10" y="55" width="180" height="50" rx="8" fill="#0F766E" />
            {/* Train windows */}
            {[25, 65, 105, 145].map((x, i) => (
              <rect key={i} x={x} y="63" width="28" height="22" rx="4" fill="#BAE6FD" stroke="#0D9488" strokeWidth="1.5" />
            ))}
            {/* Train door */}
            <rect x="87" y="68" width="26" height="37" rx="3" fill="#0D9488" stroke="#0F766E" strokeWidth="1.5" />
            <circle cx="100" cy="86" r="2" fill="#F59E0B" />
            {/* Train front details */}
            <rect x="10" y="95" width="180" height="8" rx="2" fill="#0D9488" />
            {/* Train wheels */}
            {[30, 70, 110, 155].map((x, i) => (
              <ellipse key={i} cx={x} cy="108" rx="10" ry="7" fill="#374151" />
            ))}
            {[30, 70, 110, 155].map((x, i) => (
              <ellipse key={i} cx={x} cy="108" rx="5" ry="3.5" fill="#6B7280" />
            ))}
            {/* Track rails */}
            <rect x="0" y="113" width="200" height="3" rx="1" fill="#94A3B8" />
            <rect x="0" y="120" width="200" height="3" rx="1" fill="#94A3B8" />
            {/* Track ties */}
            {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((x, i) => (
              <rect key={i} x={x - 5} y="112" width="10" height="13" rx="1" fill="#78716C" />
            ))}
            {/* People on platform */}
            {/* Person 1 with luggage */}
            <circle cx="40" cy="85" r="7" fill="#FDE68A" />
            <rect x="34" y="92" width="12" height="16" rx="3" fill="#1D4ED8" />
            {/* Suitcase */}
            <rect x="50" y="95" width="10" height="13" rx="2" fill="#7C3AED" />
            <rect x="53" y="93" width="4" height="3" rx="1" fill="#6D28D9" />
            {/* Person 2 */}
            <circle cx="165" cy="85" r="7" fill="#FECACA" />
            <rect x="159" y="92" width="12" height="16" rx="3" fill="#DB2777" />
            {/* Speech bubble */}
            <rect x="60" y="68" width="70" height="16" rx="5" fill="white" stroke="#0D9488" strokeWidth="1.5" />
            <polygon points="68,84 74,84 71,90" fill="white" stroke="#0D9488" strokeWidth="1" />
            <text x="95" y="79" textAnchor="middle" fontSize="6.5" fill="#0F766E">Which platform?</text>
            {/* Departure board */}
            <rect x="130" y="45" width="60" height="30" rx="4" fill="#1E293B" />
            <text x="160" y="58" textAnchor="middle" fontSize="6" fill="#34D399">DEPARTURES</text>
            <text x="160" y="68" textAnchor="middle" fontSize="6" fill="white">London 08:45</text>
            <text x="160" y="76" textAnchor="middle" fontSize="6" fill="#FCD34D">ON TIME</text>
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Train Station – Asking for Help"
          dialog={[
            {
              speaker: 'Marcus',
              lines: [
                { text: "Excuse me, could you tell me which platform the London train departs from?", translation: 'Permisi, bisakah Anda memberi tahu saya kereta London berangkat dari peron mana?' },
                { text: "I can't seem to find it on the board.", translation: 'Saya tidak bisa menemukannya di papan informasi.' },
              ],
            },
            {
              speaker: 'Station Staff',
              lines: [
                { text: "Certainly. The 08:45 to London departs from Platform 3.", translation: 'Tentu. Kereta jam 08:45 ke London berangkat dari Peron 3.' },
                { text: "You'll need to go through the ticket barrier and turn left.", translation: 'Anda harus melewati pintu tiket lalu belok kiri.' },
              ],
            },
            {
              speaker: 'Marcus',
              lines: [
                { text: "Thank you. Is there still time to grab a coffee before it leaves?", translation: 'Terima kasih. Apakah masih ada waktu untuk membeli kopi sebelum berangkat?' },
              ],
            },
            {
              speaker: 'Station Staff',
              lines: [
                { text: "You have about fifteen minutes, so you should be fine.", translation: 'Anda punya sekitar lima belas menit, jadi seharusnya cukup.' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="On the Train – Finding a Seat"
          dialog={[
            {
              speaker: 'Marcus',
              lines: [
                { text: "Excuse me, is this seat taken?", translation: 'Permisi, apakah kursi ini sudah ditempati?' },
                { text: "My ticket says Seat 24C but someone's sitting there.", translation: 'Tiket saya tertulis Kursi 24C tapi ada orang yang duduk di sana.' },
              ],
            },
            {
              speaker: 'Passenger',
              lines: [
                { text: "Oh, I'm so sorry! I must have sat in the wrong seat.", translation: 'Oh, maaf sekali! Saya pasti duduk di kursi yang salah.' },
                { text: "Let me check my ticket. Ah yes, I'm in 24D — just one seat over.", translation: 'Biarkan saya cek tiket saya. Ah ya, saya di 24D — hanya satu kursi sebelahnya.' },
              ],
            },
            {
              speaker: 'Marcus',
              lines: [
                { text: "No worries at all! It happens to everyone.", translation: 'Tidak apa-apa sama sekali! Itu terjadi pada semua orang.' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "Which platform does ___ depart from?", meaning: 'Kereta ___ berangkat dari peron mana?' },
            { phrase: "You'll need to go through ___.", meaning: 'Anda harus melewati ___.' },
            { phrase: "Is this seat taken?", meaning: 'Apakah kursi ini sudah ditempati?' },
            { phrase: "I must have + past participle.", meaning: 'Saya pasti telah ___ (kesalahan tidak disengaja).' },
            { phrase: "No worries at all!", meaning: 'Tidak apa-apa sama sekali!' },
            { phrase: "You should be fine.", meaning: 'Seharusnya tidak ada masalah.' },
          ]}
        />

        <FillInBlank
          sentence="I can't seem ___ the platform on the departure board."
          options={["to find", "finding", "find", "found"]}
          answer="to find"
          explanation="Setelah frasa 'can't seem', gunakan infinitif 'to find'. 'Seem' diikuti oleh 'to + verb'."
        />

        <FillInBlank
          sentence="You ___ about ten minutes before the train leaves."
          options={["have", "has", "are having", "had"]}
          answer="have"
          explanation="Gunakan 'have' karena subjeknya adalah 'You' dan kalimat ini merujuk pada waktu yang tersedia sekarang (present tense)."
        />

        <CulturalNote
          note="Di Inggris dan banyak negara Eropa, kursi kereta sering kali memiliki nomor reservasi. Jika seseorang duduk di kursi Anda, sangat wajar untuk menyebutkannya dengan sopan. Frasa 'Is this seat taken?' adalah cara paling umum dan sopan untuk menanyakan hal ini. Menggunakan kata 'Excuse me' di awal kalimat sangat penting untuk menunjukkan kesopanan."
        />

        <PronunciationTip
          tip="Kata 'departs' diucapkan /dɪˈpɑːrts/ — perhatikan penekanan pada suku kata kedua: de-PARTS. Kata 'platform' diucapkan /ˈplætfɔːrm/ dengan penekanan pada suku kata pertama: PLAT-form. Jangan mengucapkan 'p' di awal 'platform' terlalu keras — ucapkan dengan tenang."
        />

        <ExpressionMeter
          expressions={[
            { text: "I require assistance locating Platform 3.", level: 1, label: 'Very Formal' },
            { text: "Could you tell me where Platform 3 is?", level: 2, label: 'Polite' },
            { text: "Where's Platform 3?", level: 3, label: 'Casual' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 82: Office Hours with Professor ─────────────────────────────────────
  {
    id: 82,
    day: 82,
    title: 'Office Hours with Professor',
    category: 'Academic',
    difficulty: 'Intermediate',
    color: 'emerald',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Room background */}
            <rect width="200" height="140" fill="#F0FDF4" />
            {/* Wall */}
            <rect x="0" y="0" width="200" height="85" fill="#DCFCE7" />
            {/* Floor */}
            <rect x="0" y="85" width="200" height="55" fill="#BBF7D0" />
            {/* Bookshelf */}
            <rect x="5" y="10" width="50" height="75" rx="3" fill="#78350F" />
            {/* Shelf boards */}
            {[28, 46, 64].map((y, i) => (
              <rect key={i} x="5" y={y} width="50" height="3" fill="#92400E" />
            ))}
            {/* Books */}
            {[
              { x: 8, y: 13, w: 6, h: 14, fill: '#EF4444' },
              { x: 15, y: 13, w: 5, h: 14, fill: '#3B82F6' },
              { x: 21, y: 15, w: 7, h: 12, fill: '#F59E0B' },
              { x: 29, y: 13, w: 5, h: 14, fill: '#10B981' },
              { x: 35, y: 14, w: 6, h: 13, fill: '#8B5CF6' },
              { x: 42, y: 13, w: 6, h: 14, fill: '#EC4899' },
              { x: 8, y: 31, w: 7, h: 14, fill: '#0EA5E9' },
              { x: 16, y: 31, w: 5, h: 14, fill: '#84CC16' },
              { x: 22, y: 33, w: 6, h: 12, fill: '#F97316' },
              { x: 29, y: 31, w: 5, h: 14, fill: '#6366F1' },
              { x: 35, y: 31, w: 6, h: 14, fill: '#14B8A6' },
              { x: 42, y: 31, w: 6, h: 14, fill: '#F43F5E' },
            ].map((b, i) => (
              <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="1" fill={b.fill} />
            ))}
            {/* Desk */}
            <rect x="65" y="80" width="130" height="10" rx="3" fill="#92400E" />
            <rect x="70" y="90" width="8" height="35" rx="2" fill="#78350F" />
            <rect x="182" y="90" width="8" height="35" rx="2" fill="#78350F" />
            {/* Computer on desk */}
            <rect x="95" y="55" width="50" height="30" rx="3" fill="#1E293B" />
            <rect x="98" y="57" width="44" height="25" rx="2" fill="#0EA5E9" />
            <rect x="115" y="85" width="16" height="5" rx="1" fill="#334155" />
            <rect x="108" y="90" width="30" height="3" rx="1" fill="#475569" />
            {/* Papers on desk */}
            <rect x="155" y="72" width="30" height="20" rx="2" fill="white" stroke="#D1FAE5" strokeWidth="1" transform="rotate(-5 155 72)" />
            <rect x="158" y="75" width="25" height="15" rx="1" fill="white" stroke="#D1FAE5" strokeWidth="1" />
            {/* Pen */}
            <rect x="152" y="78" width="2" height="15" rx="1" fill="#1D4ED8" transform="rotate(10 152 78)" />
            {/* Professor (sitting) */}
            <circle cx="130" cy="60" r="10" fill="#FBBF24" />
            {/* Glasses */}
            <ellipse cx="126" cy="59" rx="4" ry="3" fill="none" stroke="#374151" strokeWidth="1.5" />
            <ellipse cx="134" cy="59" rx="4" ry="3" fill="none" stroke="#374151" strokeWidth="1.5" />
            <line x1="130" y1="59" x2="130" y2="59" stroke="#374151" strokeWidth="1.5" />
            {/* Professor body */}
            <rect x="122" y="70" width="16" height="20" rx="3" fill="#065F46" />
            {/* Student (standing) */}
            <circle cx="170" cy="55" r="8" fill="#FECACA" />
            <rect x="164" y="63" width="12" height="18" rx="3" fill="#2563EB" />
            {/* Backpack */}
            <rect x="175" y="65" width="8" height="12" rx="2" fill="#F59E0B" />
            {/* Speech bubble from student */}
            <rect x="130" y="30" width="65" height="20" rx="5" fill="white" stroke="#10B981" strokeWidth="1.5" />
            <polygon points="168,50 175,50 172,56" fill="white" stroke="#10B981" strokeWidth="1" />
            <text x="162" y="40" textAnchor="middle" fontSize="6" fill="#065F46">I have a question</text>
            <text x="162" y="48" textAnchor="middle" fontSize="6" fill="#065F46">about the essay.</text>
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Office Hours – Discussing an Essay"
          dialog={[
            {
              speaker: 'Student (Nina)',
              lines: [
                { text: "Good afternoon, Professor Chen. Do you have a few minutes? I had some questions about my essay draft.", translation: 'Selamat siang, Profesor Chen. Apakah Anda punya beberapa menit? Saya punya beberapa pertanyaan tentang draf esai saya.' },
              ],
            },
            {
              speaker: 'Professor Chen',
              lines: [
                { text: "Of course, come on in. I saw you submitted your draft last night.", translation: 'Tentu, silakan masuk. Saya melihat kamu mengumpulkan draf semalam.' },
                { text: "I haven't had a chance to read it thoroughly yet, but what's on your mind?", translation: 'Saya belum sempat membacanya secara menyeluruh, tapi apa yang ingin kamu tanyakan?' },
              ],
            },
            {
              speaker: 'Nina',
              lines: [
                { text: "I'm struggling with my thesis statement. I feel like it's too broad.", translation: 'Saya kesulitan dengan pernyataan tesis saya. Rasanya terlalu luas.' },
                { text: "Could you give me some guidance on how to narrow it down?", translation: 'Bisakah Anda memberi saya bimbingan tentang cara mempersempitnya?' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Office Hours – Getting Feedback"
          dialog={[
            {
              speaker: 'Professor Chen',
              lines: [
                { text: "That's a great instinct to recognize. Let me see your draft.", translation: 'Itu naluri yang bagus untuk dikenali. Biarkan saya lihat draf kamu.' },
                { text: "Your thesis is trying to cover too many variables at once. Try focusing on just one relationship.", translation: 'Tesis kamu mencoba mencakup terlalu banyak variabel sekaligus. Coba fokus hanya pada satu hubungan.' },
              ],
            },
            {
              speaker: 'Nina',
              lines: [
                { text: "So instead of arguing about climate change broadly, I should focus on a specific region or policy?", translation: 'Jadi alih-alih berargumen tentang perubahan iklim secara luas, saya harus fokus pada wilayah atau kebijakan tertentu?' },
              ],
            },
            {
              speaker: 'Professor Chen',
              lines: [
                { text: "Exactly. That'll make your argument much more defensible.", translation: 'Tepat sekali. Itu akan membuat argumen kamu jauh lebih bisa dipertahankan.' },
                { text: "Revise your thesis and email me a new version by Friday.", translation: 'Revisi tesis kamu dan kirimkan versi baru ke saya via email sebelum Jumat.' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "Do you have a few minutes?", meaning: 'Apakah Anda punya beberapa menit?' },
            { phrase: "I'm struggling with ___.", meaning: 'Saya kesulitan dengan ___.' },
            { phrase: "Could you give me some guidance on ___?", meaning: 'Bisakah Anda memberi saya bimbingan tentang ___?' },
            { phrase: "That's a great instinct to recognize.", meaning: 'Itu naluri yang bagus untuk dikenali.' },
            { phrase: "My argument is too broad.", meaning: 'Argumen saya terlalu luas.' },
            { phrase: "Much more defensible.", meaning: 'Jauh lebih bisa dipertahankan.' },
          ]}
        />

        <FillInBlank
          sentence="I'm struggling ___ the conclusion of my essay."
          options={["with", "about", "for", "on"]}
          answer="with"
          explanation="Frasa yang benar adalah 'struggle with something'. 'With' digunakan untuk menunjukkan sesuatu yang menyulitkan seseorang."
        />

        <FillInBlank
          sentence="Could you give me ___ guidance on narrowing my thesis?"
          options={["some", "any", "few", "much"]}
          answer="some"
          explanation="'Some' digunakan dalam kalimat permintaan positif yang sopan. 'Any' biasanya digunakan dalam kalimat negatif atau pertanyaan yang mengantisipasi jawaban negatif."
        />

        <CulturalNote
          note="Di universitas Amerika dan Eropa, 'office hours' adalah waktu yang dijadwalkan secara rutin ketika dosen atau profesor tersedia bagi mahasiswa tanpa perlu membuat janji terlebih dahulu. Mahasiswa didorong untuk memanfaatkan waktu ini untuk mendapatkan bimbingan. Mengunjungi office hours dengan pertanyaan yang spesifik dan terperinci dianggap sebagai tanda keseriusan akademis."
        />

        <PronunciationTip
          tip="Kata 'thesis' diucapkan /ˈθiːsɪs/ — perhatikan bunyi 'th' di awal yang diucapkan dengan menempatkan lidah di antara gigi atas dan bawah, bukan seperti 'S' atau 'T'. Kata 'thoroughly' diucapkan /ˈθʌrəli/ — tiga suku kata: THOR-uh-lee."
        />

        <ExpressionMeter
          expressions={[
            { text: "I request clarification on my thesis.", level: 1, label: 'Very Formal' },
            { text: "I need help with my thesis statement.", level: 2, label: 'Standard' },
            { text: "My thesis is a mess — any ideas?", level: 3, label: 'Informal' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 83: Client Meeting ───────────────────────────────────────────────────
  {
    id: 83,
    day: 83,
    title: 'Client Meeting',
    category: 'Professional',
    difficulty: 'Advanced',
    color: 'slate',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Room */}
            <rect width="200" height="140" fill="#F8FAFC" />
            <rect x="0" y="0" width="200" height="80" fill="#E2E8F0" />
            <rect x="0" y="80" width="200" height="60" fill="#CBD5E1" />
            {/* Window */}
            <rect x="140" y="10" width="50" height="45" rx="4" fill="#BAE6FD" stroke="#94A3B8" strokeWidth="2" />
            <line x1="165" y1="10" x2="165" y2="55" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="140" y1="32" x2="190" y2="32" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Blinds */}
            {[14, 19, 24, 29, 34, 39, 44, 49].map((y, i) => (
              <line key={i} x1="141" y1={y} x2="189" y2={y} stroke="#7DD3FC" strokeWidth="0.8" opacity="0.7" />
            ))}
            {/* Conference table */}
            <ellipse cx="100" cy="100" rx="85" ry="30" fill="#92400E" />
            <ellipse cx="100" cy="98" rx="85" ry="30" fill="#A16207" />
            {/* Table surface highlight */}
            <ellipse cx="100" cy="96" rx="80" ry="25" fill="#B45309" opacity="0.5" />
            {/* Documents/laptop on table */}
            <rect x="75" y="82" width="28" height="20" rx="2" fill="#1E293B" />
            <rect x="77" y="84" width="24" height="15" rx="1" fill="#0EA5E9" />
            <rect x="68" y="102" width="30" height="3" rx="1" fill="#374151" />
            {/* Papers */}
            <rect x="110" y="85" width="20" height="15" rx="1" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="113" y="88" width="14" height="2" rx="1" fill="#94A3B8" />
            <rect x="113" y="92" width="14" height="2" rx="1" fill="#94A3B8" />
            <rect x="113" y="96" width="10" height="2" rx="1" fill="#94A3B8" />
            {/* People around table */}
            {/* Person 1 - presenter (left) */}
            <circle cx="30" cy="80" r="10" fill="#FBBF24" />
            <rect x="23" y="90" width="14" height="22" rx="3" fill="#1D4ED8" />
            {/* Person 2 - client (right) */}
            <circle cx="168" cy="80" r="10" fill="#FDE68A" />
            <rect x="161" y="90" width="14" height="22" rx="3" fill="#065F46" />
            {/* Person 3 - observer */}
            <circle cx="100" cy="60" r="8" fill="#FECACA" />
            <rect x="94" y="68" width="12" height="18" rx="3" fill="#7C3AED" />
            {/* Presentation chart on wall */}
            <rect x="15" y="5" width="80" height="55" rx="4" fill="white" stroke="#CBD5E1" strokeWidth="2" />
            <text x="55" y="18" textAnchor="middle" fontSize="7" fill="#1E293B" fontWeight="bold">Q1 RESULTS</text>
            {/* Bar chart */}
            <rect x="25" y="35" width="10" height="20" fill="#3B82F6" />
            <rect x="40" y="28" width="10" height="27" fill="#10B981" />
            <rect x="55" y="22" width="10" height="33" fill="#F59E0B" />
            <rect x="70" y="18" width="10" height="37" fill="#EF4444" />
            <line x1="22" y1="55" x2="83" y2="55" stroke="#94A3B8" strokeWidth="1" />
            {/* Arrow pointer */}
            <line x1="30" y1="88" x2="55" y2="30" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="3,2" />
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Client Meeting – Opening the Discussion"
          dialog={[
            {
              speaker: 'Alex (Presenter)',
              lines: [
                { text: "Thank you for making time for us today, Mr. Patterson. We're excited to walk you through our Q1 findings and proposed strategy.", translation: 'Terima kasih telah meluangkan waktu untuk kami hari ini, Pak Patterson. Kami senang dapat memandu Anda melalui temuan Q1 dan strategi yang kami usulkan.' },
              ],
            },
            {
              speaker: 'Mr. Patterson (Client)',
              lines: [
                { text: "Of course. I've been looking forward to this. Your preliminary report looked promising.", translation: 'Tentu. Saya sudah menantikan ini. Laporan awal Anda terlihat menjanjikan.' },
                { text: "Before we dive in, can you give me a brief overview of what to expect?", translation: 'Sebelum kita mulai, bisakah Anda memberi saya gambaran singkat tentang apa yang bisa saya harapkan?' },
              ],
            },
            {
              speaker: 'Alex',
              lines: [
                { text: "Absolutely. We'll cover three key areas: performance metrics, market positioning, and our recommended action plan.", translation: 'Tentu saja. Kami akan membahas tiga area utama: metrik kinerja, pemosisian pasar, dan rencana aksi yang kami rekomendasikan.' },
                { text: "Feel free to interrupt with questions at any point.", translation: 'Jangan ragu untuk menyela dengan pertanyaan kapan saja.' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Client Meeting – Handling a Concern"
          dialog={[
            {
              speaker: 'Mr. Patterson',
              lines: [
                { text: "These numbers are impressive, but I'm concerned about the projected timeline. Six months seems overly optimistic given our current resources.", translation: 'Angka-angka ini mengesankan, tetapi saya khawatir tentang jadwal yang diproyeksikan. Enam bulan tampaknya terlalu optimis mengingat sumber daya kami saat ini.' },
              ],
            },
            {
              speaker: 'Alex',
              lines: [
                { text: "That's a valid concern, and I appreciate you raising it.", translation: 'Itu adalah kekhawatiran yang valid, dan saya menghargai Anda menyampaikannya.' },
                { text: "We've built contingency phases into the plan. If resource constraints arise, we can prioritize the highest-impact deliverables.", translation: 'Kami telah membangun fase kontingensi ke dalam rencana. Jika kendala sumber daya muncul, kami dapat memprioritaskan hasil dengan dampak tertinggi.' },
              ],
            },
            {
              speaker: 'Mr. Patterson',
              lines: [
                { text: "That's reassuring. Can we schedule a follow-up to review the phased milestones?", translation: 'Itu menenangkan. Bisakah kita jadwalkan tindak lanjut untuk meninjau tonggak-tonggak bertahap?' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "Walk you through our findings.", meaning: 'Memandu Anda melalui temuan kami.' },
            { phrase: "That's a valid concern.", meaning: 'Itu adalah kekhawatiran yang valid.' },
            { phrase: "Feel free to interrupt at any point.", meaning: 'Jangan ragu untuk menyela kapan saja.' },
            { phrase: "Contingency phases built into the plan.", meaning: 'Fase kontingensi yang dibangun dalam rencana.' },
            { phrase: "Highest-impact deliverables.", meaning: 'Hasil dengan dampak tertinggi.' },
            { phrase: "Schedule a follow-up.", meaning: 'Menjadwalkan tindak lanjut.' },
          ]}
        />

        <FillInBlank
          sentence="We've ___ contingency phases into the project plan to handle delays."
          options={["built", "build", "building", "been built"]}
          answer="built"
          explanation="Kalimat ini menggunakan present perfect 'we've built' (we have built) untuk menunjukkan tindakan yang telah selesai dengan relevansi sekarang."
        />

        <FillInBlank
          sentence="The proposed timeline seems ___ optimistic given the current budget."
          options={["overly", "over", "overall", "overlie"]}
          answer="overly"
          explanation="'Overly' adalah kata keterangan yang berarti 'terlalu' atau 'berlebihan', digunakan untuk memodifikasi kata sifat seperti 'optimistic'. 'Over' tidak bisa memodifikasi kata sifat secara langsung."
        />

        <CulturalNote
          note="Dalam rapat klien profesional di lingkungan bisnis Anglo-Amerika, sangat penting untuk mengakui kekhawatiran klien sebelum memberikan solusi. Frasa seperti 'That's a valid concern' atau 'I appreciate you raising that' menunjukkan bahwa Anda mendengarkan secara aktif dan menghormati perspektif klien. Merespons secara defensif atau langsung membantah kekhawatiran klien dianggap tidak profesional."
        />

        <PronunciationTip
          tip="Kata 'preliminary' diucapkan /prɪˈlɪmɪnəri/ — lima suku kata: pre-LIM-i-na-ry. Ini adalah kata yang sering salah diucapkan. Kata 'contingency' diucapkan /kənˈtɪndʒənsi/ dengan penekanan pada suku kata kedua: con-TIN-gen-cy."
        />

        <ExpressionMeter
          expressions={[
            { text: "We acknowledge your concern and propose mitigation strategies.", level: 1, label: 'Formal/Corporate' },
            { text: "That's a fair point. We have a backup plan for that.", level: 2, label: 'Professional' },
            { text: "Good catch — we thought of that too.", level: 3, label: 'Casual Business' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 84: Blood Donation Drive ────────────────────────────────────────────
  {
    id: 84,
    day: 84,
    title: 'Blood Donation Drive',
    category: 'Health',
    difficulty: 'Intermediate',
    color: 'rose',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Background */}
            <rect width="200" height="140" fill="#FFF1F2" />
            {/* Floor */}
            <rect x="0" y="100" width="200" height="40" fill="#FFE4E6" />
            {/* Medical tent / canopy */}
            <polygon points="10,40 100,10 190,40" fill="#EF4444" />
            <polygon points="10,40 100,10 190,40" fill="#DC2626" opacity="0.3" />
            {/* Tent poles */}
            <rect x="10" y="40" width="5" height="65" rx="2" fill="#9F1239" />
            <rect x="185" y="40" width="5" height="65" rx="2" fill="#9F1239" />
            {/* Donation bed */}
            <rect x="30" y="75" width="90" height="25" rx="5" fill="white" stroke="#FCA5A5" strokeWidth="2" />
            <rect x="30" y="85" width="90" height="15" rx="5" fill="#FEE2E2" />
            {/* Pillow */}
            <rect x="32" y="77" width="20" height="14" rx="4" fill="white" stroke="#FCA5A5" strokeWidth="1" />
            {/* Person lying down */}
            <ellipse cx="88" cy="83" rx="10" ry="9" fill="#FBBF24" />
            <rect x="58" y="85" width="30" height="12" rx="3" fill="#BFDBFE" />
            {/* IV bag */}
            <rect x="140" y="30" width="18" height="28" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="149" y1="58" x2="149" y2="78" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="149" y1="78" x2="82" y2="84" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3,2" />
            {/* Red cross on bag */}
            <rect x="146" y="40" width="6" height="2" fill="#EF4444" />
            <rect x="148" y="38" width="2" height="6" fill="#EF4444" />
            {/* Medical staff */}
            <circle cx="160" cy="70" r="9" fill="#FECACA" />
            <rect x="153" y="79" width="14" height="20" rx="3" fill="white" stroke="#EF4444" strokeWidth="1" />
            {/* Red cross on uniform */}
            <rect x="159" y="83" width="2" height="6" fill="#EF4444" />
            <rect x="157" y="85" width="6" height="2" fill="#EF4444" />
            {/* Sign */}
            <rect x="5" y="42" width="60" height="18" rx="3" fill="white" stroke="#EF4444" strokeWidth="1.5" />
            <text x="35" y="51" textAnchor="middle" fontSize="6" fill="#DC2626" fontWeight="bold">BLOOD DONATION</text>
            <text x="35" y="58" textAnchor="middle" fontSize="6" fill="#DC2626">DRIVE TODAY</text>
            {/* Heart symbol */}
            <path d="M100 28 C100 25 96 22 93 25 C90 22 86 25 86 28 C86 32 100 40 100 40 C100 40 114 32 114 28 C114 25 110 22 107 25 C104 22 100 25 100 28 Z" fill="#EF4444" transform="scale(0.5) translate(100,10)" />
            {/* Waiting area - chairs */}
            {[5, 20, 35].map((x, i) => (
              <rect key={i} x={x} y="108" width="12" height="18" rx="2" fill="#FCA5A5" />
            ))}
            {/* People waiting */}
            <circle cx="11" cy="104" r="5" fill="#FBBF24" />
            <circle cx="26" cy="104" r="5" fill="#FDE68A" />
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Blood Donation – Registration"
          dialog={[
            {
              speaker: 'Volunteer (Priya)',
              lines: [
                { text: "Good morning! Are you here to donate blood today?", translation: 'Selamat pagi! Apakah Anda di sini untuk mendonorkan darah hari ini?' },
                { text: "I'll need you to fill out this health screening form first.", translation: 'Saya perlu Anda mengisi formulir pemeriksaan kesehatan ini terlebih dahulu.' },
              ],
            },
            {
              speaker: 'Donor (James)',
              lines: [
                { text: "Yes, it's my first time donating. I have to admit, I'm a little nervous.", translation: 'Ya, ini pertama kali saya mendonor. Saya harus mengakui, saya sedikit gugup.' },
              ],
            },
            {
              speaker: 'Priya',
              lines: [
                { text: "That's completely understandable! The process is much simpler than most people expect.", translation: 'Itu sangat bisa dimengerti! Prosesnya jauh lebih sederhana dari yang kebanyakan orang bayangkan.' },
                { text: "Have you eaten anything today and stayed hydrated?", translation: 'Apakah Anda sudah makan hari ini dan tetap terhidrasi?' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Blood Donation – Post-Donation Care"
          dialog={[
            {
              speaker: 'Nurse',
              lines: [
                { text: "You did great! Now I need you to stay seated for at least ten minutes.", translation: 'Anda luar biasa! Sekarang saya perlu Anda tetap duduk setidaknya selama sepuluh menit.' },
                { text: "Have some juice and cookies — your blood sugar might be a little low.", translation: 'Minumlah jus dan makan kue — gula darah Anda mungkin sedikit rendah.' },
              ],
            },
            {
              speaker: 'James',
              lines: [
                { text: "I feel a bit lightheaded. Is that normal?", translation: 'Saya merasa sedikit pusing. Apakah itu normal?' },
              ],
            },
            {
              speaker: 'Nurse',
              lines: [
                { text: "Yes, that's quite common. Just rest and drink some fluids.", translation: 'Ya, itu cukup umum. Istirahat saja dan minumlah beberapa cairan.' },
                { text: "Avoid heavy exercise for the rest of the day, and don't forget to keep the bandage on for a few hours.", translation: 'Hindari olahraga berat sisa hari ini, dan jangan lupa untuk tetap memasang perban selama beberapa jam.' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "I have to admit, I'm a little nervous.", meaning: 'Saya harus mengakui, saya sedikit gugup.' },
            { phrase: "That's completely understandable.", meaning: 'Itu sangat bisa dimengerti.' },
            { phrase: "Have you stayed hydrated?", meaning: 'Apakah Anda sudah tetap terhidrasi?' },
            { phrase: "I feel a bit lightheaded.", meaning: 'Saya merasa sedikit pusing.' },
            { phrase: "That's quite common.", meaning: 'Itu cukup umum.' },
            { phrase: "Avoid heavy exercise.", meaning: 'Hindari olahraga berat.' },
          ]}
        />

        <FillInBlank
          sentence="You should ___ seated for at least ten minutes after donating."
          options={["stay", "stayed", "staying", "to stay"]}
          answer="stay"
          explanation="Setelah modal verb 'should', gunakan infinitif tanpa 'to'. Jadi 'should stay', bukan 'should to stay' atau 'should staying'."
        />

        <FillInBlank
          sentence="Feeling lightheaded after donation is ___ common."
          options={["quite", "quiet", "quit", "quote"]}
          answer="quite"
          explanation="'Quite' adalah kata keterangan yang berarti 'cukup' atau 'sangat'. Jangan disamakan dengan 'quiet' (sunyi) atau 'quit' (berhenti)."
        />

        <CulturalNote
          note="Donor darah merupakan kegiatan sukarela yang sangat dihargai di banyak negara. Di Amerika Serikat, American Red Cross menyelenggarakan blood drive secara rutin. Donor biasanya mendapat makanan ringan setelah mendonor untuk membantu pemulihan kadar gula darah. Dalam budaya banyak negara, mendonorkan darah dipandang sebagai tindakan altruisme yang sangat positif dan sering mendapat apresiasi sosial yang besar."
        />

        <PronunciationTip
          tip="Kata 'lightheaded' diucapkan /ˈlaɪtˌhɛdɪd/ — LIGHT-head-ed, tiga suku kata. Perhatikan bahwa 'gh' dalam 'lightheaded' tidak diucapkan. Kata 'hydrated' diucapkan /ˈhaɪdreɪtɪd/ — HY-dra-ted, tiga suku kata dengan penekanan pada suku kata pertama."
        />

        <ExpressionMeter
          expressions={[
            { text: "I experience mild post-donation dizziness.", level: 1, label: 'Clinical/Formal' },
            { text: "I feel a bit lightheaded.", level: 2, label: 'Natural' },
            { text: "I'm feeling a little woozy.", level: 3, label: 'Casual/Informal' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 85: Concert / Live Music ────────────────────────────────────────────
  {
    id: 85,
    day: 85,
    title: 'Concert / Live Music',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'pink',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Dark concert background */}
            <rect width="200" height="140" fill="#1E1B4B" />
            {/* Stage floor */}
            <rect x="30" y="80" width="140" height="30" rx="4" fill="#312E81" />
            {/* Stage edge */}
            <rect x="28" y="108" width="144" height="6" rx="3" fill="#4338CA" />
            {/* Spotlights */}
            <polygon points="40,5 20,80 60,80" fill="#FDE68A" opacity="0.15" />
            <polygon points="100,0 75,80 125,80" fill="#BFDBFE" opacity="0.12" />
            <polygon points="160,5 140,80 180,80" fill="#FBCFE8" opacity="0.15" />
            {/* Spotlight circles */}
            <circle cx="40" cy="5" r="6" fill="#FDE68A" />
            <circle cx="100" cy="0" r="6" fill="#BFDBFE" />
            <circle cx="160" cy="5" r="6" fill="#FBCFE8" />
            {/* Performer (guitarist) */}
            <circle cx="100" cy="65" r="10" fill="#FBBF24" />
            <rect x="93" y="75" width="14" height="18" rx="3" fill="#7C3AED" />
            {/* Guitar */}
            <rect x="84" y="78" width="5" height="20" rx="2" fill="#92400E" />
            <ellipse cx="86" cy="91" rx="7" ry="8" fill="#B45309" />
            <ellipse cx="86" cy="91" rx="4" ry="5" fill="#78350F" />
            {/* Guitar strings */}
            {[84, 86, 88].map((x, i) => (
              <line key={i} x1={x} y1="79" x2={x} y2="98" stroke="#FCD34D" strokeWidth="0.5" />
            ))}
            {/* Microphone stand */}
            <rect x="108" y="60" width="2" height="25" rx="1" fill="#9CA3AF" />
            <ellipse cx="109" cy="60" rx="4" ry="5" fill="#6B7280" />
            {/* Crowd */}
            {[15, 35, 55, 75, 95, 115, 135, 155, 175].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={126 - (i % 2) * 6} r="7" fill={['#FBBF24', '#FECACA', '#BFDBFE', '#D9F99D', '#FDE68A'][i % 5]} />
                <rect x={x - 6} y={133 - (i % 2) * 6} width="12" height="10" rx="2" fill={['#1D4ED8', '#DC2626', '#7C3AED', '#065F46', '#B45309'][i % 5]} />
              </g>
            ))}
            {/* Raised hands in crowd */}
            {[25, 65, 110, 150].map((x, i) => (
              <g key={i}>
                <rect x={x} y={108 - (i % 2) * 4} width="3" height="12" rx="1.5" fill="#FBBF24" />
                <circle cx={x + 1.5} cy={107 - (i % 2) * 4} r="3" fill="#FBBF24" />
              </g>
            ))}
            {/* Music notes */}
            <text x="140" y="35" fontSize="14" fill="#EC4899" opacity="0.8">♪</text>
            <text x="55" y="40" fontSize="10" fill="#818CF8" opacity="0.8">♫</text>
            <text x="165" y="50" fontSize="8" fill="#FCD34D" opacity="0.8">♩</text>
            {/* Disco ball effect */}
            <circle cx="100" cy="20" r="8" fill="#E2E8F0" opacity="0.4" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={100 + 10 * Math.cos(rad)}
                  y1={20 + 10 * Math.sin(rad)}
                  x2={100 + 16 * Math.cos(rad)}
                  y2={20 + 16 * Math.sin(rad)}
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  opacity="0.6"
                />
              );
            })}
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="At the Concert – Before the Show"
          dialog={[
            {
              speaker: 'Jess',
              lines: [
                { text: "I can't believe we got front-row seats! This is so exciting.", translation: 'Saya tidak percaya kita mendapat kursi baris pertama! Ini sangat menggembirakan.' },
                { text: "Have you seen this band live before?", translation: 'Apakah kamu pernah melihat band ini secara langsung sebelumnya?' },
              ],
            },
            {
              speaker: 'Kira',
              lines: [
                { text: "No, this is my first time! I've only listened to them on streaming.", translation: 'Tidak, ini pertama kali saya! Saya hanya mendengarkan mereka di streaming.' },
                { text: "What's their best song, in your opinion?", translation: 'Apa lagu terbaik mereka, menurut pendapatmu?' },
              ],
            },
            {
              speaker: 'Jess',
              lines: [
                { text: "Definitely 'Midnight Echo' — it sounds even better live, trust me!", translation: 'Pasti "Midnight Echo" — itu terdengar bahkan lebih bagus secara langsung, percayalah padaku!' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="At the Concert – During and After"
          dialog={[
            {
              speaker: 'Kira',
              lines: [
                { text: "Oh wow, the crowd is going crazy! Everyone is singing along.", translation: 'Oh wow, penonton menjadi gila! Semua orang ikut bernyanyi.' },
                { text: "The energy in here is unreal!", translation: 'Energi di sini luar biasa!' },
              ],
            },
            {
              speaker: 'Jess',
              lines: [
                { text: "I know, right? This is why live music is so special.", translation: 'Aku tahu, kan? Inilah mengapa musik live sangat istimewa.' },
                { text: "You can never get this feeling from just listening at home.", translation: 'Kamu tidak akan pernah mendapatkan perasaan ini hanya dengan mendengarkan di rumah.' },
              ],
            },
            {
              speaker: 'Kira',
              lines: [
                { text: "I'm already looking forward to the next one. Any upcoming concerts you know about?", translation: 'Saya sudah tidak sabar untuk konser berikutnya. Apakah ada konser mendatang yang kamu ketahui?' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "I can't believe we got ___!", meaning: 'Saya tidak percaya kita mendapat ___!' },
            { phrase: "Have you seen ___ live before?", meaning: 'Apakah kamu pernah melihat ___ secara langsung sebelumnya?' },
            { phrase: "In your opinion.", meaning: 'Menurut pendapatmu.' },
            { phrase: "The crowd is going crazy!", meaning: 'Penonton menjadi gila!' },
            { phrase: "Singing along.", meaning: 'Ikut bernyanyi.' },
            { phrase: "The energy is unreal!", meaning: 'Energinya luar biasa!' },
          ]}
        />

        <FillInBlank
          sentence="Everyone was ___ along to the song during the concert."
          options={["singing", "sing", "sang", "to sing"]}
          answer="singing"
          explanation="'Singing along' adalah frasa tetap yang berarti ikut bernyanyi. Kata kerja berakhiran '-ing' digunakan di sini sebagai bagian dari past continuous (was singing) untuk menggambarkan aksi yang sedang berlangsung."
        />

        <FillInBlank
          sentence="I've only listened to them ___ streaming services."
          options={["on", "in", "at", "by"]}
          answer="on"
          explanation="Kita menggunakan 'on' dengan platform digital: 'on streaming', 'on YouTube', 'on Spotify'. Ini adalah penggunaan preposisi yang sudah baku dalam konteks media digital."
        />

        <CulturalNote
          note="Di konser musik Barat, sangat umum bagi penonton untuk ikut bernyanyi (sing along) terutama pada bagian chorus dari lagu-lagu populer. Mengangkat tangan, melambaikan ponsel dengan lampu menyala, atau bernyanyi keras-keras adalah cara penonton mengekspresikan apresiasi mereka. Tidak dianggap tidak sopan untuk berdiri, bergoyang, atau bahkan menari selama pertunjukan, terutama di konser musik rock atau pop."
        />

        <PronunciationTip
          tip="Kata 'definitely' diucapkan /ˈdɛfɪnɪtli/ — DEF-i-nit-ly, empat suku kata. Banyak orang salah mengucapkannya menjadi 'defiantly' (dengan makna berbeda). Kata 'unreal' diucapkan /ʌnˈriːl/ dengan penekanan pada suku kata kedua: un-REAL."
        />

        <ExpressionMeter
          expressions={[
            { text: "The performance was exceptional.", level: 1, label: 'Formal' },
            { text: "They sounded amazing live!", level: 2, label: 'Natural' },
            { text: "That was absolutely insane — best night ever!", level: 3, label: 'Excited/Casual' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 86: Home Cooking / Potluck ──────────────────────────────────────────
  {
    id: 86,
    day: 86,
    title: 'Home Cooking / Potluck',
    category: 'Daily Life',
    difficulty: 'Beginner',
    color: 'amber',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Kitchen background */}
            <rect width="200" height="140" fill="#FFFBEB" />
            {/* Counter / kitchen surface */}
            <rect x="0" y="90" width="200" height="50" fill="#FDE68A" />
            <rect x="0" y="88" width="200" height="5" rx="2" fill="#F59E0B" />
            {/* Wall tiles */}
            {[0, 40, 80, 120, 160].map((x, i) =>
              [5, 35, 65].map((y, j) => (
                <rect key={`${i}-${j}`} x={x + 2} y={y + 2} width="36" height="26" rx="2" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1" />
              ))
            )}
            {/* Stove */}
            <rect x="70" y="78" width="60" height="22" rx="4" fill="#374151" />
            {/* Burners */}
            {[82, 104, 118].map((x, i) => (
              <ellipse key={i} cx={x} cy="89" rx="8" ry="5" fill="#1F2937" />
            ))}
            {/* Pot on stove */}
            <ellipse cx="100" cy="76" rx="20" ry="6" fill="#1D4ED8" />
            <rect x="80" y="58" width="40" height="18" rx="3" fill="#1D4ED8" />
            <ellipse cx="100" cy="58" rx="20" ry="6" fill="#2563EB" />
            {/* Steam */}
            <path d="M88 55 Q86 48 90 42" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M100 53 Q98 44 102 37" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M112 55 Q114 47 110 41" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
            {/* Pot handles */}
            <rect x="60" y="63" width="12" height="5" rx="2" fill="#3B82F6" />
            <rect x="128" y="63" width="12" height="5" rx="2" fill="#3B82F6" />
            {/* Dish on counter */}
            <ellipse cx="40" cy="95" rx="28" ry="9" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2" />
            <ellipse cx="40" cy="93" rx="26" ry="7" fill="#FEFCE8" />
            {/* Food on dish */}
            {[30, 38, 46].map((x, i) => (
              <circle key={i} cx={x} cy="93" r="5" fill={['#EF4444', '#F59E0B', '#10B981'][i]} />
            ))}
            {/* Dish on right */}
            <ellipse cx="160" cy="95" rx="28" ry="9" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="2" />
            <ellipse cx="160" cy="93" rx="26" ry="7" fill="#FEFCE8" />
            <rect x="140" y="88" width="40" height="8" rx="2" fill="#B45309" opacity="0.7" />
            {/* Spice jars */}
            <rect x="10" y="78" width="10" height="18" rx="2" fill="#EF4444" />
            <rect x="22" y="76" width="10" height="20" rx="2" fill="#F59E0B" />
            <rect x="34" y="78" width="10" height="18" rx="2" fill="#10B981" />
            {/* People */}
            <circle cx="30" cy="65" r="9" fill="#FBBF24" />
            <rect x="23" y="74" width="14" height="18" rx="3" fill="#DC2626" />
            {/* Apron */}
            <rect x="25" y="76" width="10" height="14" rx="2" fill="white" />
            <circle cx="170" cy="62" r="9" fill="#FECACA" />
            <rect x="163" y="71" width="14" height="18" rx="3" fill="#7C3AED" />
            {/* Speech bubble */}
            <rect x="45" y="48" width="80" height="18" rx="5" fill="white" stroke="#FCD34D" strokeWidth="1.5" />
            <polygon points="52,66 58,66 55,72" fill="white" stroke="#FCD34D" strokeWidth="1" />
            <text x="85" y="58" textAnchor="middle" fontSize="7" fill="#92400E">What did you bring?</text>
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Potluck Party – Sharing Food"
          dialog={[
            {
              speaker: 'Host (Maria)',
              lines: [
                { text: "Welcome, everyone! Just put your dishes on the table over there.", translation: 'Selamat datang, semua! Letakkan saja hidangan kalian di meja di sana.' },
                { text: "This is looking like an amazing spread already!", translation: 'Ini sudah terlihat seperti sajian yang luar biasa!' },
              ],
            },
            {
              speaker: 'Guest (David)',
              lines: [
                { text: "I made a pasta salad. It's an old family recipe.", translation: 'Saya membuat salad pasta. Ini resep keluarga lama.' },
                { text: "I hope people like it — I wasn't sure if it would feed everyone.", translation: 'Saya harap orang-orang menyukainya — saya tidak yakin apakah itu cukup untuk semua orang.' },
              ],
            },
            {
              speaker: 'Maria',
              lines: [
                { text: "It looks delicious! Don't worry — there's more than enough food.", translation: 'Kelihatannya lezat! Jangan khawatir — ada lebih dari cukup makanan.' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Potluck Party – Asking for the Recipe"
          dialog={[
            {
              speaker: 'Another Guest (Sophie)',
              lines: [
                { text: "This soup is absolutely incredible! What's in it?", translation: 'Sup ini benar-benar luar biasa! Apa isinya?' },
                { text: "I can taste garlic and something else... coconut milk?", translation: 'Saya bisa merasakan bawang putih dan sesuatu yang lain... santan?' },
              ],
            },
            {
              speaker: 'Maria',
              lines: [
                { text: "You've got a good palate! Yes, it's a Thai-inspired coconut curry.", translation: 'Kamu punya selera yang baik! Ya, ini adalah kari kelapa dengan inspirasi Thai.' },
                { text: "I can send you the recipe if you'd like.", translation: 'Saya bisa mengirimkan resepnya kalau kamu mau.' },
              ],
            },
            {
              speaker: 'Sophie',
              lines: [
                { text: "Yes please! My family would love this.", translation: 'Ya tolong! Keluarga saya pasti akan menyukai ini.' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "An amazing spread!", meaning: 'Sajian yang luar biasa! (banyak variasi makanan)' },
            { phrase: "An old family recipe.", meaning: 'Resep keluarga lama.' },
            { phrase: "I hope people like it.", meaning: 'Saya harap orang-orang menyukainya.' },
            { phrase: "More than enough food.", meaning: 'Lebih dari cukup makanan.' },
            { phrase: "You've got a good palate!", meaning: 'Kamu punya selera yang baik!' },
            { phrase: "I can send you the recipe.", meaning: 'Saya bisa mengirimkan resepnya.' },
          ]}
        />

        <FillInBlank
          sentence="I ___ a pasta salad using my grandmother's old recipe."
          options={["made", "make", "making", "have make"]}
          answer="made"
          explanation="Gunakan past tense 'made' (bentuk lampau dari 'make') karena tindakan membuat salad sudah selesai sebelum percakapan berlangsung."
        />

        <FillInBlank
          sentence="I can ___ you the recipe if you'd like."
          options={["send", "sends", "sent", "sending"]}
          answer="send"
          explanation="Setelah modal verb 'can', selalu gunakan infinitif tanpa 'to'. Jadi 'can send', bukan 'can sends' atau 'can sent'."
        />

        <CulturalNote
          note="Potluck adalah pesta makan bersama di mana setiap tamu membawa satu hidangan untuk dibagi bersama. Tradisi ini sangat populer di Amerika Serikat, Kanada, dan banyak negara Barat lainnya. Potluck menghemat biaya tuan rumah dan memungkinkan setiap orang berbagi masakan favorit mereka. Biasanya ada koordinasi informal tentang siapa membawa apa (hidangan utama, lauk, dessert, minuman) untuk memastikan variasi menu yang seimbang."
        />

        <PronunciationTip
          tip="Kata 'recipe' diucapkan /ˈrɛsɪpi/ — RES-i-pi, tiga suku kata. Banyak orang salah mengucapkannya dengan dua suku kata (res-pi) atau seperti kata Prancis. Kata 'delicious' diucapkan /dɪˈlɪʃəs/ — de-LI-cious, dengan penekanan pada suku kata kedua dan bunyi 'sh' pada akhirnya."
        />

        <ExpressionMeter
          expressions={[
            { text: "This dish is quite palatable.", level: 1, label: 'Formal' },
            { text: "This is really tasty!", level: 2, label: 'Natural' },
            { text: "Oh my gosh, this is SO good!", level: 3, label: 'Enthusiastic' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 87: Internship Interview ────────────────────────────────────────────
  {
    id: 87,
    day: 87,
    title: 'Internship Interview',
    category: 'Professional',
    difficulty: 'Advanced',
    color: 'blue',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Room background */}
            <rect width="200" height="140" fill="#EFF6FF" />
            <rect x="0" y="0" width="200" height="90" fill="#DBEAFE" />
            <rect x="0" y="90" width="200" height="50" fill="#BFDBFE" />
            {/* Company logo on wall */}
            <rect x="75" y="8" width="50" height="28" rx="4" fill="white" stroke="#BFDBFE" strokeWidth="2" />
            <text x="100" y="20" textAnchor="middle" fontSize="8" fill="#1D4ED8" fontWeight="bold">NEXUS</text>
            <text x="100" y="30" textAnchor="middle" fontSize="6" fill="#3B82F6">TECH CORP</text>
            {/* Desk */}
            <rect x="30" y="85" width="140" height="12" rx="3" fill="#92400E" />
            <rect x="35" y="97" width="8" height="30" rx="2" fill="#78350F" />
            <rect x="157" y="97" width="8" height="30" rx="2" fill="#78350F" />
            {/* Interviewer side */}
            {/* Laptop */}
            <rect x="40" y="65" width="45" height="25" rx="3" fill="#1E293B" />
            <rect x="42" y="67" width="41" height="20" rx="2" fill="#3B82F6" />
            <rect x="35" y="90" width="55" height="4" rx="1" fill="#334155" />
            {/* Papers/folder */}
            <rect x="88" y="70" width="25" height="20" rx="2" fill="white" stroke="#BFDBFE" strokeWidth="1" />
            <rect x="90" y="73" width="20" height="2" rx="1" fill="#94A3B8" />
            <rect x="90" y="77" width="20" height="2" rx="1" fill="#94A3B8" />
            <rect x="90" y="81" width="15" height="2" rx="1" fill="#94A3B8" />
            {/* Interviewer */}
            <circle cx="62" cy="55" r="11" fill="#FBBF24" />
            {/* Glasses */}
            <ellipse cx="57" cy="53" rx="5" ry="4" fill="none" stroke="#374151" strokeWidth="1.5" />
            <ellipse cx="67" cy="53" rx="5" ry="4" fill="none" stroke="#374151" strokeWidth="1.5" />
            <line x1="62" y1="53" x2="62" y2="53" stroke="#374151" strokeWidth="1.5" />
            <rect x="54" y="66" width="16" height="22" rx="3" fill="#0F172A" />
            {/* Tie */}
            <polygon points="62,67 59,72 62,88 65,72" fill="#EF4444" />
            {/* Candidate side */}
            <circle cx="148" cy="55" r="10" fill="#FECACA" />
            <rect x="141" y="65" width="14" height="22" rx="3" fill="#1D4ED8" />
            {/* Resume on table */}
            <rect x="120" y="72" width="22" height="17" rx="2" fill="white" stroke="#93C5FD" strokeWidth="1" />
            <rect x="122" y="75" width="18" height="1.5" rx="1" fill="#1D4ED8" />
            <rect x="122" y="79" width="14" height="1" rx="0.5" fill="#94A3B8" />
            <rect x="122" y="82" width="16" height="1" rx="0.5" fill="#94A3B8" />
            <rect x="122" y="85" width="12" height="1" rx="0.5" fill="#94A3B8" />
            {/* Speech bubble */}
            <rect x="72" y="32" width="65" height="18" rx="5" fill="white" stroke="#93C5FD" strokeWidth="1.5" />
            <polygon points="80,50 86,50 83,56" fill="white" stroke="#93C5FD" strokeWidth="1" />
            <text x="104" y="40" textAnchor="middle" fontSize="6" fill="#1D4ED8">Tell me about</text>
            <text x="104" y="48" textAnchor="middle" fontSize="6" fill="#1D4ED8">yourself.</text>
            {/* Plant decoration */}
            <rect x="178" y="75" width="12" height="20" rx="2" fill="#D97706" />
            <ellipse cx="184" cy="72" rx="10" ry="12" fill="#16A34A" />
            <ellipse cx="178" cy="78" rx="7" ry="9" fill="#15803D" />
            <ellipse cx="190" cy="78" rx="7" ry="9" fill="#15803D" />
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Internship Interview – Introduction"
          dialog={[
            {
              speaker: 'Interviewer (Ms. Park)',
              lines: [
                { text: "Good morning, Daniel. Please take a seat. I've had a chance to review your application — very impressive.", translation: 'Selamat pagi, Daniel. Silakan duduk. Saya sudah sempat meninjau lamaran Anda — sangat mengesankan.' },
              ],
            },
            {
              speaker: 'Daniel (Candidate)',
              lines: [
                { text: "Thank you, Ms. Park. I'm really excited about this opportunity. Nexus Tech has been at the forefront of sustainable tech solutions, which aligns perfectly with my academic focus.", translation: 'Terima kasih, Ms. Park. Saya sangat antusias dengan kesempatan ini. Nexus Tech telah berada di garis terdepan solusi teknologi berkelanjutan, yang sangat selaras dengan fokus akademis saya.' },
              ],
            },
            {
              speaker: 'Ms. Park',
              lines: [
                { text: "I'm glad to hear that. Could you start by telling me a bit about yourself and what drew you to apply for this specific internship?", translation: 'Senang mendengarnya. Bisakah Anda mulai dengan menceritakan sedikit tentang diri Anda dan apa yang membuat Anda melamar internship khusus ini?' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Internship Interview – Behavioral Question"
          dialog={[
            {
              speaker: 'Ms. Park',
              lines: [
                { text: "Tell me about a time you faced a challenging situation in a team project. How did you handle it?", translation: 'Ceritakan tentang saat Anda menghadapi situasi yang menantang dalam proyek tim. Bagaimana Anda mengatasinya?' },
              ],
            },
            {
              speaker: 'Daniel',
              lines: [
                { text: "Certainly. During my final-year capstone project, our team had a significant disagreement about the project direction.", translation: 'Tentu. Selama proyek capstone tahun terakhir saya, tim kami memiliki perbedaan pendapat yang signifikan tentang arah proyek.' },
                { text: "I took the initiative to facilitate a structured discussion where each member could outline their priorities.", translation: 'Saya mengambil inisiatif untuk memfasilitasi diskusi terstruktur di mana setiap anggota dapat menguraikan prioritas mereka.' },
                { text: "We ultimately reached a consensus that incorporated everyone's core concerns, and we delivered the project ahead of schedule.", translation: 'Kami akhirnya mencapai konsensus yang mengakomodasi kekhawatiran utama semua orang, dan kami menyelesaikan proyek lebih awal dari jadwal.' },
              ],
            },
            {
              speaker: 'Ms. Park',
              lines: [
                { text: "That's an excellent example of leadership and conflict resolution. Those are exactly the qualities we value here.", translation: 'Itu adalah contoh kepemimpinan dan resolusi konflik yang sangat baik. Itulah kualitas yang kami nilai di sini.' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "At the forefront of ___.", meaning: 'Di garis terdepan ___.' },
            { phrase: "Aligns perfectly with my focus.", meaning: 'Sangat selaras dengan fokus saya.' },
            { phrase: "I took the initiative to ___.", meaning: 'Saya mengambil inisiatif untuk ___.' },
            { phrase: "Facilitate a structured discussion.", meaning: 'Memfasilitasi diskusi terstruktur.' },
            { phrase: "We reached a consensus.", meaning: 'Kami mencapai konsensus.' },
            { phrase: "Delivered the project ahead of schedule.", meaning: 'Menyelesaikan proyek lebih awal dari jadwal.' },
          ]}
        />

        <FillInBlank
          sentence="I took the ___ to organize a meeting to resolve the team conflict."
          options={["initiative", "initiation", "initial", "initiating"]}
          answer="initiative"
          explanation="'Take the initiative' adalah frasa tetap yang berarti mengambil tindakan pertama tanpa diminta. 'Initiative' adalah kata benda yang tepat di sini."
        />

        <FillInBlank
          sentence="We ___ the project two days ahead of the original deadline."
          options={["delivered", "deliver", "delivering", "have deliver"]}
          answer="delivered"
          explanation="Gunakan past tense 'delivered' karena ini mengacu pada peristiwa yang sudah selesai di masa lalu (proyek capstone yang sudah selesai)."
        />

        <CulturalNote
          note="Dalam wawancara kerja di perusahaan Anglo-Amerika, pertanyaan perilaku (behavioral questions) yang dimulai dengan 'Tell me about a time...' atau 'Describe a situation when...' sangat umum. Teknik yang direkomendasikan untuk menjawabnya adalah STAR method: Situation (situasi), Task (tugas), Action (tindakan yang diambil), dan Result (hasil). Kandidat yang memberikan jawaban spesifik dengan contoh nyata selalu lebih mengesankan daripada yang memberikan jawaban umum."
        />

        <PronunciationTip
          tip="Kata 'initiative' diucapkan /ɪˈnɪʃɪətɪv/ — i-NI-sha-tiv, empat suku kata. Perhatikan bunyi 'sh' di tengah kata. Kata 'consensus' diucapkan /kənˈsɛnsəs/ — con-SEN-sus, tiga suku kata dengan penekanan di tengah."
        />

        <ExpressionMeter
          expressions={[
            { text: "I facilitated conflict resolution through structured dialogue.", level: 1, label: 'Formal/Interview' },
            { text: "I helped the team resolve our disagreement.", level: 2, label: 'Natural' },
            { text: "I got everyone to just talk it out.", level: 3, label: 'Casual' },
          ]}
        />
      </div>
    ),
  },

  // ─── Day 88: Amusement Park ───────────────────────────────────────────────────
  {
    id: 88,
    day: 88,
    title: 'Amusement Park',
    category: 'Entertainment',
    difficulty: 'Beginner',
    color: 'pink',
    body: (
      <div className="space-y-6">
        <SceneIllustration>
          <svg viewBox="0 0 200 140" className="w-full h-full">
            {/* Sky */}
            <rect width="200" height="140" fill="#FDF2F8" />
            {/* Clouds */}
            <ellipse cx="30" cy="20" rx="18" ry="10" fill="white" />
            <ellipse cx="45" cy="15" rx="14" ry="10" fill="white" />
            <ellipse cx="18" cy="18" rx="12" ry="8" fill="white" />
            <ellipse cx="160" cy="18" rx="16" ry="9" fill="white" />
            <ellipse cx="175" cy="14" rx="12" ry="8" fill="white" />
            {/* Ground */}
            <rect x="0" y="108" width="200" height="32" fill="#BBF7D0" />
            {/* Path */}
            <rect x="85" y="108" width="30" height="32" fill="#FEF3C7" />
            {/* Ferris wheel */}
            <circle cx="160" cy="65" r="38" fill="none" stroke="#EC4899" strokeWidth="3" />
            <circle cx="160" cy="65" r="30" fill="none" stroke="#FBCFE8" strokeWidth="1.5" />
            {/* Ferris wheel spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1="160"
                  y1="65"
                  x2={160 + 38 * Math.cos(rad)}
                  y2={65 + 38 * Math.sin(rad)}
                  stroke="#EC4899"
                  strokeWidth="1.5"
                />
              );
            })}
            {/* Ferris wheel gondolas */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F97316', '#06B6D4'];
              return (
                <rect
                  key={i}
                  x={160 + 36 * Math.cos(rad) - 5}
                  y={65 + 36 * Math.sin(rad) - 6}
                  width="10"
                  height="10"
                  rx="2"
                  fill={colors[i]}
                />
              );
            })}
            {/* Ferris wheel center */}
            <circle cx="160" cy="65" r="6" fill="#9D174D" />
            {/* Ferris wheel support */}
            <line x1="140" y1="103" x2="160" y2="65" stroke="#9D174D" strokeWidth="3" />
            <line x1="180" y1="103" x2="160" y2="65" stroke="#9D174D" strokeWidth="3" />
            {/* Roller coaster track */}
            <path d="M0 70 Q20 40 40 70 Q60 95 80 60 Q90 40 100 70" stroke="#7C3AED" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M0 74 Q20 44 40 74 Q60 99 80 64 Q90 44 100 74" stroke="#A78BFA" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Roller coaster car */}
            <rect x="58" y="57" width="18" height="10" rx="3" fill="#EF4444" />
            <circle cx="62" cy="67" r="3" fill="#374151" />
            <circle cx="72" cy="67" r="3" fill="#374151" />
            {/* Person in coaster */}
            <circle cx="67" cy="55" r="4" fill="#FBBF24" />
            {/* Ticket booth */}
            <rect x="5" y="85" width="35" height="28" rx="3" fill="#F59E0B" />
            <rect x="8" y="88" width="29" height="16" rx="2" fill="#FDE68A" />
            <rect x="5" y="100" width="35" height="5" rx="2" fill="#D97706" />
            <text x="22" y="97" textAnchor="middle" fontSize="7" fill="#92400E">TICKETS</text>
            {/* People */}
            <circle cx="22" cy="80" r="6" fill="#FBBF24" />
            <rect x="16" y="86" width="12" height="15" rx="3" fill="#EC4899" />
            {/* Balloons */}
            {['#EF4444', '#3B82F6', '#F59E0B'].map((color, i) => (
              <g key={i}>
                <circle cx={115 + i * 12} cy={90 - i * 5} r="8" fill={color} />
                <line x1={115 + i * 12} y1={98 - i * 5} x2={115 + i * 12} y2={115} stroke="#374151" strokeWidth="1" />
              </g>
            ))}
            {/* Cotton candy */}
            <ellipse cx="140" cy="108" rx="10" ry="7" fill="#FBCFE8" />
            <rect x="139" y="108" width="2" height="15" rx="1" fill="#D1D5DB" />
            {/* Flag on booth */}
            <rect x="39" y="73" width="2" height="15" fill="#9D174D" />
            <polygon points="41,73 55,77 41,81" fill="#EC4899" />
          </svg>
        </SceneIllustration>

        <ConversationCard
          title="Amusement Park – Choosing a Ride"
          dialog={[
            {
              speaker: 'Leo',
              lines: [
                { text: "Okay, we're finally here! What do you want to go on first?", translation: 'Oke, kita akhirnya di sini! Kamu mau naik apa dulu?' },
                { text: "The roller coaster looks amazing — but also terrifying!", translation: 'Roller coaster-nya kelihatan keren — tapi juga menakutkan!' },
              ],
            },
            {
              speaker: 'Mia',
              lines: [
                { text: "Let's start with the Ferris wheel. It's less scary and we can see the whole park from the top!", translation: 'Mari mulai dengan roda Ferris. Tidak terlalu menakutkan dan kita bisa melihat seluruh taman dari atas!' },
              ],
            },
            {
              speaker: 'Leo',
              lines: [
                { text: "Good idea. Then we can figure out which rides to skip and which ones to line up for.", translation: 'Ide bagus. Lalu kita bisa tahu wahana mana yang dilewati dan mana yang perlu antre.' },
              ],
            },
          ]}
        />

        <ConversationCard
          title="Amusement Park – At the Ticket Booth"
          dialog={[
            {
              speaker: 'Ticket Seller',
              lines: [
                { text: "Hi there! Are you getting a day pass or individual ride tickets?", translation: 'Halo! Apakah Anda membeli tiket harian atau tiket wahana individual?' },
                { text: "The day pass gives you unlimited rides for a flat fee.", translation: 'Tiket harian memberi Anda wahana tak terbatas dengan biaya tetap.' },
              ],
            },
            {
              speaker: 'Mia',
              lines: [
                { text: "How much is the day pass per person?", translation: 'Berapa harga tiket harian per orang?' },
              ],
            },
            {
              speaker: 'Ticket Seller',
              lines: [
                { text: "It's thirty dollars each. If you're here for more than three rides, it's definitely worth it.", translation: 'Harganya tiga puluh dolar masing-masing. Jika Anda di sini untuk lebih dari tiga wahana, itu pasti worth it.' },
              ],
            },
            {
              speaker: 'Leo',
              lines: [
                { text: "We'll take two day passes, please!", translation: 'Kami akan ambil dua tiket harian, tolong!' },
              ],
            },
          ]}
        />

        <KeyPhrasesCard
          phrases={[
            { phrase: "What do you want to go on first?", meaning: 'Kamu mau naik apa dulu?' },
            { phrase: "It looks amazing — but also terrifying!", meaning: 'Kelihatannya keren — tapi juga menakutkan!' },
            { phrase: "Line up for ___.", meaning: 'Antre untuk ___.' },
            { phrase: "A day pass / individual tickets.", meaning: 'Tiket harian / tiket individual.' },
            { phrase: "Unlimited rides for a flat fee.", meaning: 'Wahana tak terbatas dengan biaya tetap.' },
            { phrase: "It's definitely worth it.", meaning: 'Itu pasti sepadan.' },
          ]}
        />

        <FillInBlank
          sentence="The day pass gives you ___ rides for a fixed price."
          options={["unlimited", "unlimit", "unlimiting", "not limited"]}
          answer="unlimited"
          explanation="'Unlimited' adalah kata sifat yang berarti 'tak terbatas'. Ini adalah satu kata baku (bukan dua kata). Bentuk lain seperti 'unlimit' atau 'unlimiting' tidak digunakan dalam bahasa Inggris."
        />

        <FillInBlank
          sentence="We can ___ out which rides are worth waiting for."
          options={["figure", "find", "look", "check"]}
          answer="figure"
          explanation="Frasa 'figure out' berarti 'menentukan' atau 'memahami'. Kalimat ini menggunakan frasa idiomatik 'figure out which...' yang sangat umum dalam bahasa Inggris percakapan."
        />

        <CulturalNote
          note="Taman hiburan (amusement park) adalah hiburan keluarga yang sangat populer di Amerika Serikat dan negara-negara Barat. Banyak taman menawarkan 'day pass' atau 'annual pass' sebagai pilihan yang lebih ekonomis dibanding tiket individual per wahana. Di taman yang ramai, 'wait time' (waktu tunggu) untuk wahana populer bisa mencapai satu jam atau lebih. Beberapa taman menawarkan 'Fast Pass' atau 'Skip the Line' sebagai layanan premium."
        />

        <PronunciationTip
          tip="Kata 'terrifying' diucapkan /ˈtɛrɪfaɪɪŋ/ — TER-i-fy-ing, empat suku kata. Perhatikan penekanan pada suku kata pertama. Kata 'unlimited' diucapkan /ʌnˈlɪmɪtɪd/ — un-LIM-it-ed, empat suku kata dengan penekanan pada suku kata kedua."
        />

        <ExpressionMeter
          expressions={[
            { text: "The roller coaster appears quite intense.", level: 1, label: 'Formal' },
            { text: "That ride looks really scary!", level: 2, label: 'Natural' },
            { text: "No way I'm getting on THAT thing!", level: 3, label: 'Casual/Excited' },
          ]}
        />
      </div>
    ),
  },
];
