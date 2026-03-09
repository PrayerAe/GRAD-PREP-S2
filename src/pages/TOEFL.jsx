import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { toeflChapterQuiz } from '../data/toeflChapterQuiz'
import { toeflSections } from '../data/toeflContent.jsx'
import { CheatSheet } from '../data/mathContent.jsx'
import { toeflCheatsheets } from '../data/toeflCheatsheets'
import ListeningSimulator from '../components/ListeningSimulator'
import {
  Menu, ArrowRight, BookMarked, BookOpen, Headphones, Mic, PenLine,
  ChevronLeft, ChevronRight, Sparkles, Award, List
} from 'lucide-react'

const chapters = [
  {
    id: 'reading',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '1. TOEFL Reading',
    shortTitle: 'Reading',
    subs: ['Jenis Passage & Strategi', 'Question Types', 'Time Management', 'Latihan Passage'],
  },
  {
    id: 'listening',
    icon: Headphones,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-700',
    title: '2. TOEFL Listening',
    shortTitle: 'Listening',
    subs: ['Struktur Listening', 'Note-Taking Efektif', 'Jenis Soal & Strategi', 'Simulasi Lecture'],
  },
  {
    id: 'speaking',
    icon: Mic,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. TOEFL Speaking',
    shortTitle: 'Speaking',
    subs: ['4 Task Overview', 'Template & Strategi', 'Contoh Response & Tips'],
  },
  {
    id: 'writing',
    icon: PenLine,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-700',
    title: '4. TOEFL Writing',
    shortTitle: 'Writing',
    subs: ['Overview & Scoring', 'Integrated Writing', 'Independent Essay'],
  },
]

const chapterColors = { reading: 'blue', listening: 'emerald', speaking: 'violet', writing: 'amber' }

// ── TOEFL Listening passages (multi-passage) ────────────────────────────────
const toeflListeningPassages = [
  // ── Passage 1: Campus Conversation ───────────────────────────────────────
  {
    shortTitle: 'Conversation 1',
    title: 'Campus Conversation: Assignment Extension',
    type: 'conversation',
    context: 'A student visits a professor during office hours to ask for an extension on a research paper due to unexpected personal circumstances. Listen carefully to the reasons the student gives and the professor\'s conditions.',
    tips: [
      'Perhatikan TUJUAN percakapan — soal sering menanyakan "What is the purpose of the student\'s visit?"',
      'Catat detail spesifik: tanggal, alasan, kondisi yang disebut professor.',
      'Dengarkan attitude/tone — apakah professor setuju, ragu, atau menolak?',
      'TOEFL conversation = 2 speaker, biasanya di kampus (student + professor/advisor/librarian).',
    ],
    script: [
      { speaker: 'Professor Chen', text: 'Come in! Oh, hi Marcus. What brings you by during office hours?', speakerIndex: 0 },
      { speaker: 'Marcus', text: 'Hi Professor Chen. I\'m really sorry to bother you. I wanted to talk about the research paper due on Friday.', speakerIndex: 1 },
      { speaker: 'Professor Chen', text: 'Of course. Is something wrong? You\'ve been doing solid work in class.', speakerIndex: 0 },
      { speaker: 'Marcus', text: 'Well, my grandmother passed away last weekend, and I had to fly home for the funeral. I\'ve fallen behind on my research. I was wondering if there\'s any possibility of getting a short extension?', speakerIndex: 1 },
      { speaker: 'Professor Chen', text: 'I\'m very sorry for your loss, Marcus. That\'s a difficult situation. How far along are you in the paper?', speakerIndex: 0 },
      { speaker: 'Marcus', text: 'I\'ve finished the literature review and have my thesis and outline ready, but I still need to write the analysis sections — that\'s roughly half the paper. I have about eight pages done out of the required fifteen.', speakerIndex: 1 },
      { speaker: 'Professor Chen', text: 'I see. Normally I don\'t grant extensions, because it creates problems for everyone — especially when I have thirty papers to grade. But I do understand this is a genuine emergency, not just poor planning.', speakerIndex: 0 },
      { speaker: 'Marcus', text: 'I completely understand your policy. I just — I really want to do the topic justice. It\'s on urban microbiome diversity, and I think I have something genuinely interesting to argue.', speakerIndex: 1 },
      { speaker: 'Professor Chen', text: 'Alright. I\'ll give you until Monday — that\'s three additional days. But I need you to email me by tonight with what you have so far, so I can confirm your progress. And the extension is conditional — if I don\'t receive that email, the original deadline stands.', speakerIndex: 0 },
      { speaker: 'Marcus', text: 'Absolutely. I\'ll send it this evening. Thank you so much, Professor Chen. I really appreciate it.', speakerIndex: 1 },
      { speaker: 'Professor Chen', text: 'No problem. And Marcus — I\'m sorry again about your grandmother. Take care of yourself.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tc1_1',
        question: 'Why does the student visit the professor?',
        options: [
          'To submit his research paper early',
          'To ask for help understanding the assignment requirements',
          'To request more time to complete his research paper',
          'To discuss the topic of urban microbiome diversity',
        ],
        correctAnswer: 2,
        explanation: 'Marcus explicitly says: "I was wondering if there\'s any possibility of getting a short extension?" — he wants more time to finish the paper.',
      },
      {
        id: 'tc1_2',
        question: 'What reason does Marcus give for needing an extension?',
        options: [
          'He misunderstood the assignment guidelines',
          'His grandmother passed away and he had to travel home',
          'He has been sick for the past two weeks',
          'His computer broke and he lost his work',
        ],
        correctAnswer: 1,
        explanation: 'Marcus says: "My grandmother passed away last weekend, and I had to fly home for the funeral. I\'ve fallen behind on my research."',
      },
      {
        id: 'tc1_3',
        question: 'What condition does Professor Chen place on the extension?',
        options: [
          'Marcus must visit office hours every day until Monday',
          'Marcus must rewrite the literature review section',
          'Marcus must email his current progress by tonight',
          'Marcus must submit his thesis statement for approval',
        ],
        correctAnswer: 2,
        explanation: 'The professor says: "I need you to email me by tonight with what you have so far, so I can confirm your progress. And the extension is conditional — if I don\'t receive that email, the original deadline stands."',
      },
      {
        id: 'tc1_4',
        question: 'How does the professor feel about granting extensions generally?',
        options: [
          'She always grants extensions when students ask politely',
          'She normally does not grant extensions but makes exceptions for genuine emergencies',
          'She refuses all extensions regardless of the situation',
          'She prefers students to drop the course rather than request extensions',
        ],
        correctAnswer: 1,
        explanation: 'Professor Chen says: "Normally I don\'t grant extensions, because it creates problems for everyone... But I do understand this is a genuine emergency, not just poor planning."',
      },
      {
        id: 'tc1_5',
        question: 'How much of the paper has Marcus already completed?',
        options: [
          'Less than one-quarter',
          'About one-third',
          'Roughly half',
          'More than two-thirds',
        ],
        correctAnswer: 2,
        explanation: 'Marcus states: "I have about eight pages done out of the required fifteen." 8/15 is roughly half the paper.',
      },
    ],
  },

  // ── Passage 2: Academic Lecture — Epigenetics ────────────────────────────
  {
    shortTitle: 'Lecture 1',
    title: 'Academic Lecture: Epigenetics',
    type: 'lecture',
    context: 'A biology professor lectures to undergraduates about epigenetics — how gene expression can change without altering the DNA sequence itself. This is a typical TOEFL iBT lecture: academic, technical vocabulary, one speaker with organized structure.',
    tips: [
      'Baca soal lebih dulu sebelum mendengar — ketahui apa yang harus dicatat.',
      'Catat sinyal struktur: "First...", "However...", "The key point is..." untuk menandai ide penting.',
      'Catat istilah teknis + definisinya — soal sering menguji definisi terminologi baru.',
      'Perhatikan contoh dan analogi — sering menjadi dasar soal inference.',
    ],
    script: [
      { speaker: 'Professor', text: 'Alright, let\'s begin today\'s lecture. We\'re going to discuss a fascinating field of biology called epigenetics. Now, epigenetics literally means "above genetics," and it studies how gene expression — that is, whether a gene is turned on or off — can be modified without any change to the actual DNA sequence itself.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'I like to use this analogy: think of your DNA as a recipe book. Every recipe is there — nothing is added or removed. Epigenetics, however, determines which recipes get cooked today and which ones stay on the shelf. The content of the book doesn\'t change, but what gets prepared does.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'One of the primary mechanisms of epigenetics is something called DNA methylation. This involves attaching a methyl group — a very small chemical structure — to specific locations on the DNA strand. When a gene is heavily methylated, it typically gets silenced, or switched off. Remove the methylation, and the gene can be expressed again. Crucially, the underlying DNA sequence is unchanged.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Now, here\'s where it gets really interesting. These epigenetic changes can be triggered by environmental factors — things like diet, chronic stress, and exposure to environmental toxins. And in some documented cases, these modifications can actually be passed down to the next generation. Scientists call this transgenerational epigenetic inheritance.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The classic example researchers point to is the Dutch Hunger Winter of 1944. During World War II, a severe famine hit the Netherlands. Studies conducted decades later found that children — and even grandchildren — of people who survived that famine showed distinct metabolic differences, including higher rates of obesity and diabetes. These differences appear to be linked to epigenetic changes caused by nutritional deprivation during the famine.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The medical implications are enormous. Epigenetic modifications are now a major focus in cancer research. Many cancers involve abnormal epigenetic silencing of tumor suppressor genes — genes that would normally prevent uncontrolled cell growth. If we can reverse those silencing patterns using epigenetic drugs, we might be able to reactivate the body\'s own defenses. Several such drugs have already been approved by the FDA for treating certain blood cancers.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'So to summarize: epigenetics shows us that the relationship between our genes and our environment is far more dynamic than we once thought. Our lifestyle choices, our surroundings, and even our ancestors\' experiences can all leave marks on how our genome is read — without ever altering the sequence itself. That\'s the core insight of epigenetics.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tl2_1',
        question: 'What is the main purpose of the lecture?',
        options: [
          'To explain how DNA mutations lead to genetic diseases',
          'To introduce the concept of epigenetics and its mechanisms',
          'To compare the effectiveness of various cancer treatments',
          'To argue that genetics is more important than environment',
        ],
        correctAnswer: 1,
        explanation: 'The lecture introduces and explains epigenetics — its definition, mechanisms (methylation), environmental triggers, and medical implications. All content serves this central purpose.',
      },
      {
        id: 'tl2_2',
        question: 'According to the professor, what does DNA methylation cause?',
        options: [
          'The gene\'s DNA sequence is permanently altered',
          'The gene is copied to a different chromosome',
          'The gene is typically silenced or switched off',
          'The gene replicates at a faster rate',
        ],
        correctAnswer: 2,
        explanation: 'The professor says: "When a gene is heavily methylated, it typically gets silenced, or switched off." The DNA sequence itself remains unchanged.',
      },
      {
        id: 'tl2_3',
        question: 'What does the professor say about the Dutch Hunger Winter example?',
        options: [
          'It proves that famine directly alters DNA sequences in survivors',
          'It shows that epigenetic changes from stress can appear in later generations',
          'It demonstrates why the Netherlands has high cancer rates today',
          'It illustrates how diet can reverse DNA methylation patterns',
        ],
        correctAnswer: 1,
        explanation: 'The Dutch Hunger Winter study showed that grandchildren of famine survivors had metabolic differences — evidence of "transgenerational epigenetic inheritance," i.e., epigenetic changes passed to later generations.',
      },
      {
        id: 'tl2_4',
        question: 'What analogy does the professor use to explain epigenetics?',
        options: [
          'A computer program that updates itself automatically',
          'A library where books can be added or removed',
          'A recipe book where epigenetics determines which recipes are cooked',
          'A blueprint that architects can modify over time',
        ],
        correctAnswer: 2,
        explanation: 'The professor says: "Think of your DNA as a recipe book... Epigenetics determines which recipes get cooked today and which ones stay on the shelf."',
      },
      {
        id: 'tl2_5',
        question: 'What does the professor imply about epigenetic cancer drugs?',
        options: [
          'They work by permanently deleting tumor suppressor genes',
          'They are still entirely experimental with no approved treatments',
          'They aim to reverse abnormal silencing of tumor suppressor genes',
          'They are only effective when combined with radiation therapy',
        ],
        correctAnswer: 2,
        explanation: 'The professor says cancer involves "epigenetic silencing of tumor suppressor genes" and that "epigenetic drugs" aim to "reactivate the body\'s own defenses." He also notes some have already been FDA-approved.',
      },
    ],
  },

  // ── Passage 3: Academic Lecture — Behavioral Economics ──────────────────
  {
    shortTitle: 'Lecture 2',
    title: 'Academic Lecture: Behavioral Economics',
    type: 'lecture',
    context: 'An economics professor introduces behavioral economics — the study of how psychological biases affect financial decisions — and discusses two key concepts: loss aversion and the anchoring effect.',
    tips: [
      'Lecture topik sosial-sains → perhatikan nama teori, tokoh peneliti, dan definisi konsep.',
      'Catat contoh konkret yang professor berikan — itu sering muncul di soal.',
      'Bedakan teori utama dengan sub-examples yang mendukungnya.',
      'Soal "What does the professor mean when he says...?" = replay question — dengar baik-baik nada bicara.',
    ],
    script: [
      { speaker: 'Professor', text: 'Good morning everyone. Today we start a new unit: behavioral economics. Classical economics assumes that people are rational actors who always make decisions to maximize their utility — their self-interest. Behavioral economics challenges that assumption. It argues that humans are systematically irrational in predictable ways.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The field was largely pioneered by two psychologists — Daniel Kahneman and Amos Tversky — in the 1970s and 80s. Their work earned Kahneman the Nobel Prize in Economics in 2002, which is remarkable since neither of them held economics degrees. Their key insight: psychological biases consistently lead people away from optimal decisions.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Let\'s look at the first major concept: loss aversion. Research shows that people feel the pain of losing something roughly twice as intensely as they feel the pleasure of gaining the equivalent. Losing twenty dollars feels about twice as bad as finding twenty dollars feels good. This asymmetry has profound effects on decision-making.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'For example, consider investors. Classical economics says a rational investor should evaluate an investment purely on expected returns. But behavioral economics shows that many investors hold onto losing stocks far longer than they should — simply because selling feels like "locking in" a loss. Psychologically, they cannot accept that loss. This behavior is called the disposition effect.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The second concept I want to cover today is anchoring. When people are given an initial piece of information — called an anchor — it disproportionately influences all subsequent judgments. A famous experiment by Kahneman and Tversky involved asking people to spin a wheel of fortune — which was actually rigged to stop at either ten or sixty-five — and then estimate the percentage of African nations in the United Nations.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Those who saw the wheel land on sixty-five gave significantly higher estimates than those who saw it land on ten — even though the wheel number was completely irrelevant to the geography question. The anchor — a random number — still influenced their response. This is anchoring bias in action.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Real-world anchoring is everywhere. Car dealerships list a high sticker price before offering a "discount." Online retailers show a crossed-out original price next to the sale price. First salary offers in negotiations serve as anchors that influence the final negotiated number. Understanding anchoring can make you a more effective negotiator and consumer.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tl3_1',
        question: 'What is behavioral economics primarily concerned with?',
        options: [
          'How governments should set tax policies to maximize economic growth',
          'Why people systematically make irrational decisions due to psychological biases',
          'The mathematical modeling of supply and demand in global markets',
          'How corporations manipulate consumers through advertising',
        ],
        correctAnswer: 1,
        explanation: 'The professor states: "Behavioral economics challenges [the rational actor] assumption. It argues that humans are systematically irrational in predictable ways" due to psychological biases.',
      },
      {
        id: 'tl3_2',
        question: 'What is loss aversion, according to the professor?',
        options: [
          'The tendency to invest only in low-risk financial products',
          'A preference for losing small amounts rather than large amounts',
          'Feeling the pain of loss about twice as intensely as the pleasure of an equal gain',
          'The fear of making any financial decisions due to uncertainty',
        ],
        correctAnswer: 2,
        explanation: 'The professor defines it clearly: "People feel the pain of losing something roughly twice as intensely as they feel the pleasure of gaining the equivalent."',
      },
      {
        id: 'tl3_3',
        question: 'What does the "disposition effect" refer to?',
        options: [
          'Investors always selling profitable stocks too quickly',
          'Investors holding losing stocks too long to avoid accepting a loss',
          'The tendency to spread investments equally across many assets',
          'The psychological satisfaction of making profitable trades',
        ],
        correctAnswer: 1,
        explanation: 'The professor explains: "Many investors hold onto losing stocks far longer than they should — simply because selling feels like locking in a loss... This behavior is called the disposition effect."',
      },
      {
        id: 'tl3_4',
        question: 'In the Kahneman and Tversky wheel experiment, what was the key finding?',
        options: [
          'People who studied geography gave more accurate estimates',
          'A random irrelevant number still influenced people\'s subsequent estimates',
          'People with higher education were unaffected by the wheel number',
          'The wheel number was an accurate predictor of general knowledge',
        ],
        correctAnswer: 1,
        explanation: 'The random wheel number (10 or 65) influenced participants\' estimates about African nations in the UN — demonstrating anchoring bias: even irrelevant initial information shapes subsequent judgment.',
      },
      {
        id: 'tl3_5',
        question: 'According to the professor, which of the following is an example of anchoring in everyday life?',
        options: [
          'Comparing interest rates at two different banks before choosing one',
          'A car dealership listing a high sticker price before offering a discount',
          'An investor calculating the exact expected return of a stock portfolio',
          'A consumer buying the cheapest available product to save money',
        ],
        correctAnswer: 1,
        explanation: 'The professor explicitly gives this example: "Car dealerships list a high sticker price before offering a discount" — the high price is the anchor that makes the discounted price seem more attractive.',
      },
    ],
  },
]

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-blue-500 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'blue'} />
      )}
    </div>
  )
}

export default function TOEFL() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = toeflSections[chapter.id] || []
  const cheatsheets = toeflCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'blue'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

  // Show listening simulator in the listening chapter
  const isListeningChapter = chapter.id === 'listening'

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileSidebar} onClose={() => setMobileSidebar(false)} />

      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors" onClick={() => setMobileSidebar(true)}>
              <Menu size={20} />
            </button>
            <div className={`w-10 h-10 bg-gradient-to-br ${chapter.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
              <BookMarked size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi TOEFL</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Section · Reading, Listening, Speaking, Writing</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-gray-400 font-medium px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-semibold">iBT Format</span>
              <button
                onClick={() => navigate('/latihan/toefl')}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Latihan Soal <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </header>

        {/* Chapter Navigation - Desktop */}
        <div className="hidden md:block bg-white border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
            {chapters.map((ch, i) => {
              const ChIcon = ch.icon
              const isActive = activeChapter === i
              return (
                <button
                  key={ch.id}
                  onClick={() => handleChapterChange(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${ch.gradient} text-white shadow-md`
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <ChIcon size={15} />
                  <span className="hidden lg:inline">{ch.title}</span>
                  <span className="lg:hidden">{ch.shortTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Chapter Navigation - Mobile */}
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
            {chapters.map((ch, i) => {
              const ChIcon = ch.icon
              const isActive = activeChapter === i
              return (
                <button
                  key={ch.id}
                  onClick={() => handleChapterChange(i)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${ch.gradient} text-white shadow-md`
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChIcon size={13} />
                  {ch.shortTitle}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex">
          {/* Sub-chapter sidebar - Desktop */}
          <aside className="hidden lg:block w-60 bg-white border-r border-gray-100 min-h-[calc(100vh-130px)] sticky top-[130px] self-start">
            <div className="p-4 space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-3">Sub-Bab</p>
              <button
                onClick={() => { setActiveSub(null); window.scrollTo(0, 0) }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeSub === null ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${activeSub === null ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                  <List size={10} className={activeSub === null ? chapter.lightText : 'text-gray-400'} />
                </div>
                <span className="truncate text-xs">Semua Materi</span>
              </button>
              {chapter.subs.map((sub, si) => (
                <button
                  key={sub}
                  onClick={() => { setActiveSub(si); window.scrollTo(0, 0) }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    activeSub === si ? `${chapter.lightBg} ${chapter.lightText} font-semibold` : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full ${activeSub === si ? 'bg-white' : chapter.lightBg} flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-[10px] font-bold ${chapter.lightText}`}>{si + 1}</span>
                  </div>
                  <span className="truncate text-xs">{sub}</span>
                </button>
              ))}
              <button
                onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeSub === 'quiz' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${activeSub === 'quiz' ? 'bg-white' : 'bg-amber-50'} flex items-center justify-center flex-shrink-0`}>
                  <Award size={10} className="text-amber-600" />
                </div>
                <span className="truncate text-xs">Kuis Section</span>
              </button>
            </div>
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-xs font-bold text-blue-900">Progress Section</span>
              </div>
              <div className="w-full h-2 bg-blue-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-blue-600 mt-1.5 font-medium">Section {activeChapter + 1} dari {chapters.length}</p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="max-w-3xl mx-auto">
              {/* Chapter Hero Card */}
              <div className={`bg-gradient-to-r ${chapter.gradient} rounded-2xl p-5 sm:p-6 mb-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg sm:text-xl">{chapter.title}</h2>
                      <p className="text-white/70 text-xs sm:text-sm">{chapter.subs.length} sub-bab materi</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {chapter.subs.map(sub => (
                      <span key={sub} className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-lg text-xs font-medium text-white/90">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Sub-chapter selector */}
              <div className="lg:hidden mb-4">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                  <button
                    onClick={() => { setActiveSub(null); window.scrollTo(0, 0) }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeSub === null ? `bg-gradient-to-r ${chapter.gradient} text-white shadow-sm` : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Semua
                  </button>
                  {chapter.subs.map((sub, si) => (
                    <button
                      key={sub}
                      onClick={() => { setActiveSub(si); window.scrollTo(0, 0) }}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeSub === si ? `bg-gradient-to-r ${chapter.gradient} text-white shadow-sm` : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                  <button
                    onClick={() => { setActiveSub('quiz'); window.scrollTo(0, 0) }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeSub === 'quiz' ? 'bg-amber-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Kuis
                  </button>
                </div>
              </div>

              {/* Rich Content Sections */}
              {activeSub !== 'quiz' && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8 mb-6">
                  {activeSub === null
                    ? sections.map((section, idx) => (
                        <SectionCard key={idx} section={section} index={idx} cheatsheet={cheatsheets[idx]} color={color} />
                      ))
                    : sections[activeSub] && (
                        <SectionCard key={activeSub} section={sections[activeSub]} index={0} cheatsheet={cheatsheets[activeSub]} color={color} />
                      )
                  }

                  {/* Listening Simulator — tampil di chapter Listening */}
                  {isListeningChapter && (activeSub === null || activeSub === 3) && (
                    <div className={`${activeSub === null ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
                      <h2 className="font-heading font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-emerald-500 rounded-full flex-shrink-0" />
                        Simulasi Listening Interaktif
                      </h2>
                      <p className="text-sm text-gray-500 mb-1">
                        Tekan <strong>Play</strong> — suara otomatis berbicara dalam bahasa Inggris via browser TTS.
                        Kata yang sedang diucapkan akan di-highlight secara real-time.
                      </p>
                      <p className="text-xs text-gray-400 mb-4">3 passage tersedia: 1 campus conversation + 2 academic lectures. Gunakan tombol di bawah untuk berpindah.</p>
                      <ListeningSimulator passages={toeflListeningPassages} color="emerald" />
                    </div>
                  )}
                </div>
              )}

              {/* Chapter Quiz */}
              {(activeSub === null || activeSub === 'quiz') && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
                  <ChapterQuiz
                    key={chapter.id}
                    title={chapter.title}
                    questions={toeflChapterQuiz[chapter.id] || []}
                    chapterId={`toefl-${chapter.id}`}
                    onQuizSubmit={saveQuizScore}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 gap-3">
                <button
                  disabled={activeChapter === 0}
                  onClick={() => { setActiveChapter(i => i - 1); setActiveSub(null); window.scrollTo(0, 0) }}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  <span className="hidden sm:inline">Section Sebelumnya</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                {activeChapter < chapters.length - 1 ? (
                  <button
                    onClick={() => { setActiveChapter(i => i + 1); setActiveSub(null); window.scrollTo(0, 0) }}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${chapters[activeChapter + 1].gradient} shadow-md hover:shadow-lg transition-all`}
                  >
                    <span className="hidden sm:inline">Section Berikutnya</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/materi/ielts')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Lanjut ke IELTS
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <div className="sm:hidden mt-4">
                <button
                  onClick={() => navigate('/latihan/toefl')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Latihan Soal TOEFL <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
