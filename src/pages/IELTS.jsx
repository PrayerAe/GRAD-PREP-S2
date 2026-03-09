import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../components/Sidebar'
import ChapterQuiz from '../components/ChapterQuiz'
import { ieltsChapterQuiz } from '../data/ieltsChapterQuiz'
import { ieltsSections } from '../data/ieltsContent.jsx'
import { CheatSheet } from '../data/mathContent.jsx'
import { ieltsCheatsheets } from '../data/ieltsCheatsheets'
import ListeningSimulator from '../components/ListeningSimulator'
import {
  Menu, ArrowRight, BookMarked, BookOpen, Headphones, Mic, PenLine,
  ChevronLeft, ChevronRight, Sparkles, Award, List
} from 'lucide-react'

const chapters = [
  {
    id: 'listening',
    icon: Headphones,
    gradient: 'from-cyan-500 to-teal-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-700',
    title: '1. IELTS Listening',
    shortTitle: 'Listening',
    subs: ['Format & Struktur', 'Strategi Listening', 'Question Types', 'Simulasi Section 1'],
  },
  {
    id: 'reading',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-700',
    title: '2. IELTS Reading',
    shortTitle: 'Reading',
    subs: ['Format & Band Score', 'Question Types', 'True/False/Not Given', 'Matching Headings'],
  },
  {
    id: 'writing',
    icon: PenLine,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-700',
    title: '3. IELTS Writing',
    shortTitle: 'Writing',
    subs: ['Task 1: Graphs & Diagrams', 'Task 1: Language & Phrases', 'Task 2: Essay Types', 'Task 2: Band 7+ Tips'],
  },
  {
    id: 'speaking',
    icon: Mic,
    gradient: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-700',
    title: '4. IELTS Speaking',
    shortTitle: 'Speaking',
    subs: ['Format 3 Part', 'Strategi Setiap Part', 'Contoh Cue Card & Response'],
  },
]

const chapterColors = { listening: 'teal', reading: 'blue', writing: 'violet', speaking: 'rose' }

// ── IELTS Listening passages — Sections 1–4 ────────────────────────────────
const ieltsListeningPassages = [
  // ── Section 1: Everyday Conversation ─────────────────────────────────────
  {
    shortTitle: 'Section 1',
    title: 'Section 1: Apartment Inquiry (Everyday Conversation)',
    type: 'conversation',
    context: 'Tom calls a rental agency about a two-bedroom apartment. Section 1 is always an everyday social/service conversation between two people. Focus on specific details: names (often spelled out), numbers, dates, and corrections — IELTS often includes a "distractor" where the speaker corrects information.',
    tips: [
      'Baca soal dulu — ketahui tipe informasi yang dicari (nama? nomor? tanggal?).',
      'Waspadai distractor: speaker sering menyebut angka lalu mengoreksinya — catat yang terakhir.',
      'Nama sering dieja — dengarkan huruf per huruf dengan seksama.',
      'Form completion: jawaban max 3 kata/angka, periksa singular/plural.',
    ],
    script: [
      { speaker: 'Agent (Sandra)', text: 'Good morning, Sunrise Rentals, Sandra speaking. How can I help you?', speakerIndex: 0 },
      { speaker: 'Tom', text: 'Hi, good morning. My name\'s Tom Hargreaves — H-A-R-G-R-E-A-V-E-S. I\'m calling about a two-bedroom apartment I saw advertised on your website.', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'Of course, Mr. Hargreaves. Which listing were you interested in? We have a couple of two-bedroom properties available right now.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'It was the one on 14 Maple Street. The monthly rent was listed as 950 pounds. Is that still available?', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'Let me check... yes, that one is still available. The rent is actually 975 pounds per month — the price was recently updated, so sorry for any confusion with the website.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'Oh, I see. That\'s fine. And when would it be available to move in?', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'It\'s available from the first of March. The current tenant leaves on the 28th of February, so you could move in the very next day.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'That works perfectly for me. Could you tell me — is parking included in the rent?', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'Yes, there\'s one parking space included in the rent. If you need a second space, there\'s an additional charge of 40 pounds per month.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'One space is enough, thank you. Is it a furnished apartment?', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'It comes partially furnished — there\'s a fridge, washing machine, and sofa, but no beds or wardrobes. The kitchen is fully equipped.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'That sounds good. What\'s the process for viewing?', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'Could I take your contact number? I\'ll arrange a viewing for this week.', speakerIndex: 0 },
      { speaker: 'Tom', text: 'Of course — my mobile is 07821 349 612.', speakerIndex: 1 },
      { speaker: 'Agent (Sandra)', text: 'Great, 07821 349 612. I\'ll call you back within the hour to confirm a time. Thank you for calling, Mr. Hargreaves.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is1_1',
        question: 'What is the correct spelling of the caller\'s surname?',
        options: ['HARGREEVE', 'HARGREAVES', 'HARGRAEVES', 'HARGRIEVES'],
        correctAnswer: 1,
        explanation: 'Tom spells his name out loud: "H-A-R-G-R-E-A-V-E-S" — Hargreaves. Classic IELTS Section 1: names are often spelled to test careful listening.',
      },
      {
        id: 'is1_2',
        question: 'What is the actual monthly rent for the apartment?',
        options: ['£900', '£950', '£975', '£1,000'],
        correctAnswer: 2,
        explanation: 'The agent corrects the price: "The rent is actually 975 pounds per month." The website showed £950 — this is a classic IELTS distractor where the first number mentioned is wrong.',
      },
      {
        id: 'is1_3',
        question: 'When is the apartment available to move in?',
        options: ['28th February', '1st March', '2nd March', '14th March'],
        correctAnswer: 1,
        explanation: '"It\'s available from the first of March." The 28th February is when the current tenant leaves — not the move-in date. Another classic distractor.',
      },
      {
        id: 'is1_4',
        question: 'What does the apartment NOT include in its furnishing?',
        options: ['Washing machine', 'Kitchen equipment', 'Sofa', 'Beds and wardrobes'],
        correctAnswer: 3,
        explanation: 'The agent says it includes fridge, washing machine, sofa, and fully equipped kitchen — but "no beds or wardrobes." In IELTS, listen for what is explicitly excluded.',
      },
      {
        id: 'is1_5',
        question: 'What is Tom\'s mobile phone number?',
        options: ['07812 349 612', '07821 349 612', '07821 394 612', '07821 349 162'],
        correctAnswer: 1,
        explanation: 'Tom says "07821 349 612" and the agent confirms the same number. IELTS often tests number sequences — each digit matters.',
      },
    ],
  },

  // ── Section 2: Monologue — Community Center ───────────────────────────────
  {
    shortTitle: 'Section 2',
    title: 'Section 2: Greenfield Community Center — New Facilities (Monologue)',
    type: 'monologue',
    context: 'A community center manager, Janet Park, gives a recorded phone announcement about new facilities and services at the Greenfield Community Center. Section 2 is always a monologue in an everyday/community context — one speaker, organized like a tour or announcement.',
    tips: [
      'Section 2 = satu speaker, mirip pengumuman atau tur. Dengarkan penanda arah: "on your left", "upstairs", "opposite the..."',
      'Map/diagram labelling sering muncul di Section 2 — bayangkan layout saat mendengar.',
      'Informasi disajikan berurutan — gunakan urutan soal sebagai panduan posisi dalam audio.',
      'Waspadai kata yang mirip: "first floor" vs "ground floor" dalam British English.',
    ],
    script: [
      { speaker: 'Janet (Manager)', text: 'Hello and welcome to the Greenfield Community Center information line. My name is Janet Park, and I\'m the center manager. I\'d like to tell you about our exciting new facilities that opened this month.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'As you enter the main building through the front entrance, you\'ll find our reception desk directly ahead. From Monday to Friday, reception is staffed from eight in the morning until nine in the evening. On weekends, the hours are ten until six.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'On the ground floor, to the left of reception, we have our brand-new fitness suite. This is equipped with twenty treadmills, fifteen cycling stations, and a free weights area. The fitness suite is available to all members and day visitors. A day pass costs eight pounds, or you can get a monthly membership for forty-five pounds.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'Opposite the fitness suite, on the right side of the ground floor, is the children\'s activity zone. This area is supervised by qualified childcare workers every day from nine until five. Parents can drop children between the ages of three and twelve for up to three hours at a time. There is a small charge of three pounds fifty per hour.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'If you take the stairs or lift to the first floor, you\'ll find our newly refurbished swimming pool. The pool is twenty-five meters long and has eight lanes. It\'s open for lane swimming every morning from six until nine, and for general swimming from ten in the morning until eight in the evening. Swimming lessons for adults and children are available on Tuesday and Thursday evenings.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'Also on the first floor is our community hall, which can be hired for private events such as birthday parties, meetings, and fitness classes. The hall holds up to one hundred and fifty people. Hire charges start from sixty pounds for a two-hour slot. Please contact reception for availability and booking.', speakerIndex: 0 },
      { speaker: 'Janet (Manager)', text: 'Finally, the café on the ground floor near the main entrance serves hot and cold meals from eight in the morning until seven in the evening on weekdays, and until five on weekends. We also have free wi-fi throughout the building. We look forward to seeing you at Greenfield Community Center soon. Thank you for calling.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is2_1',
        question: 'What are the reception desk hours on weekends?',
        options: ['8:00 am – 9:00 pm', '9:00 am – 7:00 pm', '10:00 am – 6:00 pm', '10:00 am – 8:00 pm'],
        correctAnswer: 2,
        explanation: 'Janet says: "On weekends, the hours are ten until six." The 8 am – 9 pm hours are for weekdays (Monday to Friday).',
      },
      {
        id: 'is2_2',
        question: 'How much does a monthly membership for the fitness suite cost?',
        options: ['£8', '£40', '£45', '£50'],
        correctAnswer: 2,
        explanation: '"A day pass costs eight pounds, or you can get a monthly membership for forty-five pounds." The £8 is the day pass — a common distractor.',
      },
      {
        id: 'is2_3',
        question: 'Where is the children\'s activity zone located?',
        options: [
          'On the first floor, to the left of the lift',
          'On the ground floor, opposite the fitness suite',
          'On the ground floor, next to the café',
          'On the first floor, beside the swimming pool',
        ],
        correctAnswer: 1,
        explanation: '"Opposite the fitness suite, on the right side of the ground floor, is the children\'s activity zone." In IELTS map tasks, spatial language is key.',
      },
      {
        id: 'is2_4',
        question: 'On which days are swimming lessons available?',
        options: ['Monday and Wednesday', 'Tuesday and Thursday', 'Wednesday and Friday', 'Saturday and Sunday'],
        correctAnswer: 1,
        explanation: '"Swimming lessons for adults and children are available on Tuesday and Thursday evenings."',
      },
      {
        id: 'is2_5',
        question: 'What is the maximum capacity of the community hall?',
        options: ['100 people', '120 people', '150 people', '200 people'],
        correctAnswer: 2,
        explanation: '"The hall holds up to one hundred and fifty people." This is a detail question requiring exact number retention.',
      },
    ],
  },

  // ── Section 3: Academic Discussion ───────────────────────────────────────
  {
    shortTitle: 'Section 3',
    title: 'Section 3: Academic Discussion — Plastic Pollution Research',
    type: 'conversation',
    context: 'Two students, Priya and James, discuss their group research project on plastic pollution with their university tutor, Dr. Walsh. Section 3 is an academic conversation — 2 to 4 speakers in an educational context. Listen for opinions, agreements, disagreements, and specific suggestions.',
    tips: [
      'Section 3 = diskusi akademik. Perhatikan SIAPA yang berpendapat apa — soal sering menguji attribution.',
      'Dengarkan kata hedging: "I think...", "Perhaps...", "It seems..." = opini, bukan fakta.',
      'Persetujuan dan penolakan sering ditandai oleh "That\'s a good point" atau "But doesn\'t that mean..."',
      'Catat rekomendasi atau rencana tindakan spesifik — soal sering menguji apa yang akan dilakukan selanjutnya.',
    ],
    script: [
      { speaker: 'Dr. Walsh', text: 'Come in, Priya, James. Good to see you both. So, how is the research project coming along? You\'re focusing on plastic pollution in marine environments, yes?', speakerIndex: 0 },
      { speaker: 'Priya', text: 'Yes, that\'s right. We\'ve collected quite a lot of data from coastal surveys, and we\'ve been analyzing the types of plastic most commonly found. Microplastics seem to be the dominant issue — they\'re far more prevalent than larger debris items.', speakerIndex: 1 },
      { speaker: 'James', text: 'We were actually surprised by that. We expected to find mostly bottles and bags, but the microplastics — particles smaller than five millimeters — make up about seventy percent of what we found at the three sites we surveyed.', speakerIndex: 2 },
      { speaker: 'Dr. Walsh', text: 'That\'s consistent with recent literature. Have you identified where those microplastics are coming from? Because the sources are quite varied — it\'s not just one industry.', speakerIndex: 0 },
      { speaker: 'Priya', text: 'We\'ve been looking at that. A significant portion appears to come from synthetic textiles — when you wash polyester clothing, tiny fibers shed into the water system. There\'s also degraded plastic from larger items that break down over time.', speakerIndex: 1 },
      { speaker: 'James', text: 'I was going to suggest we expand our methodology to include water column sampling, not just beach surveys. That way we could track microplastics that haven\'t settled yet and get a more complete picture of the contamination levels.', speakerIndex: 2 },
      { speaker: 'Dr. Walsh', text: 'That\'s an excellent suggestion, James. Water column sampling would strengthen your methodology considerably. What about the impact on marine fauna? Have you addressed that in your literature review?', speakerIndex: 0 },
      { speaker: 'Priya', text: 'We have a section on ingestion by seabirds and filter feeders like mussels, but we haven\'t fully covered the chemical toxicity aspect — the idea that plastics absorb and concentrate pollutants, which then enter the food chain.', speakerIndex: 1 },
      { speaker: 'Dr. Walsh', text: 'That chemical concentration effect — it\'s called bioaccumulation — is really important to include. It explains why the effects of microplastics can be far more serious than their small size might suggest. I\'d strongly recommend you add that to your analysis section.', speakerIndex: 0 },
      { speaker: 'James', text: 'We\'ll do that. Do you think our sample size of three coastal sites is sufficient for the conclusions we want to draw?', speakerIndex: 2 },
      { speaker: 'Dr. Walsh', text: 'It\'s on the lower end for a quantitative study. I\'d suggest either expanding to five or six sites, or being very explicit in your methodology section about the limitations of your sample size and how that affects the generalizability of your findings.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is3_1',
        question: 'What surprising finding did Priya and James discover in their coastal surveys?',
        options: [
          'Plastic bottles were more common than expected',
          'Microplastics made up about 70% of the plastic found',
          'The pollution was mainly caused by fishing equipment',
          'Larger debris items were more prevalent than microplastics',
        ],
        correctAnswer: 1,
        explanation: 'James says: "The microplastics... make up about seventy percent of what we found at the three sites we surveyed. We expected to find mostly bottles and bags" — expressing surprise.',
      },
      {
        id: 'is3_2',
        question: 'According to Priya, what is a significant source of microplastics?',
        options: [
          'Industrial chemical waste from factories',
          'Plastic bags from supermarkets',
          'Synthetic textile fibers released during washing',
          'Oil spills from shipping containers',
        ],
        correctAnswer: 2,
        explanation: 'Priya says: "A significant portion appears to come from synthetic textiles — when you wash polyester clothing, tiny fibers shed into the water system."',
      },
      {
        id: 'is3_3',
        question: 'What does James suggest to improve the research methodology?',
        options: [
          'Interviewing local fishermen about plastic sightings',
          'Including water column sampling alongside beach surveys',
          'Reducing the number of survey sites to save time',
          'Focusing only on plastic bottles and bags',
        ],
        correctAnswer: 1,
        explanation: 'James proposes: "I was going to suggest we expand our methodology to include water column sampling, not just beach surveys." Dr. Walsh calls this "an excellent suggestion."',
      },
      {
        id: 'is3_4',
        question: 'What does Dr. Walsh say they must add to the analysis section?',
        options: [
          'A comparison with plastic pollution in freshwater rivers',
          'The history of plastic manufacturing since the 1950s',
          'The bioaccumulation effect of chemical toxins on the food chain',
          'Government policies on plastic regulation in different countries',
        ],
        correctAnswer: 2,
        explanation: 'Dr. Walsh says: "That chemical concentration effect — it\'s called bioaccumulation — is really important to include... I\'d strongly recommend you add that to your analysis section."',
      },
      {
        id: 'is3_5',
        question: 'What does Dr. Walsh say about the sample size of three sites?',
        options: [
          'It is more than sufficient for a reliable study',
          'It needs to be reduced to one representative site',
          'It is on the lower end, so they should expand or clearly state limitations',
          'It is acceptable only if they focus exclusively on microplastics',
        ],
        correctAnswer: 2,
        explanation: 'Dr. Walsh says: "It\'s on the lower end for a quantitative study. I\'d suggest either expanding to five or six sites, or being very explicit... about the limitations of your sample size."',
      },
    ],
  },

  // ── Section 4: Academic Lecture ───────────────────────────────────────────
  {
    shortTitle: 'Section 4',
    title: 'Section 4: Academic Lecture — Urban Heat Islands',
    type: 'lecture',
    context: 'A geography professor lectures on the urban heat island (UHI) effect — why cities are significantly warmer than surrounding rural areas — and discusses its causes and mitigation strategies. Section 4 is always an academic monologue: the hardest section, with no pause, complex vocabulary, and abstract ideas.',
    tips: [
      'Section 4 = monologue akademik paling sulit. Kecepatan tinggi, kosakata teknis, tanpa jeda.',
      'Soal follow the order of the lecture — jaga posisi kamu dengan mengikuti urutan soal.',
      'Sentence completion: gunakan konteks grammar untuk mengecek apakah jawaban cocok (noun/verb/adj).',
      'Jika melewatkan satu jawaban, lanjutkan ke berikutnya — jangan panik.',
    ],
    script: [
      { speaker: 'Professor', text: 'Good afternoon. Today I want to discuss a phenomenon that affects nearly every major city in the world, and one that\'s becoming increasingly significant as global temperatures rise. I\'m talking about the urban heat island effect, commonly abbreviated as UHI.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The urban heat island effect refers to the observation that urban areas — cities and towns — are measurably warmer than the surrounding rural and suburban areas. The temperature difference can be as high as ten degrees Celsius in extreme cases, though a difference of two to five degrees is more typical. This difference is not caused by climate change directly, but it does interact with and amplify the effects of rising global temperatures.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'So what causes the urban heat island effect? The primary factor is surface materials. Rural areas are covered predominantly with natural surfaces — vegetation, soil, water bodies — which absorb solar radiation and release it slowly through a process called evapotranspiration. In contrast, cities are covered with impervious surfaces: asphalt roads, concrete buildings, glass, and metal roofing. These materials absorb heat rapidly during the day and release it slowly at night, keeping cities warm around the clock.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'A second major cause is the reduction of vegetation in cities. Trees and plants normally cool the environment through evapotranspiration — they draw water from the soil and release it as water vapor through their leaves, which has a cooling effect similar to air conditioning. When forests and grasslands are replaced by concrete, this natural cooling mechanism disappears entirely.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'There\'s also the issue of anthropogenic heat — heat generated by human activities. Cars, air conditioning units, industrial processes, and power generation all produce significant amounts of waste heat that is released directly into the urban environment. Studies have estimated that in dense urban cores like Manhattan or Hong Kong, anthropogenic heat can add two to three degrees Celsius to the local temperature.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The consequences of urban heat islands are serious. Higher temperatures increase energy demand for cooling, which in turn leads to more emissions from power plants, creating a feedback loop. Heat-related illnesses and mortality increase significantly during heatwaves in urban areas compared to rural ones. Air quality also worsens, since heat accelerates the chemical reactions that produce ground-level ozone — a respiratory irritant.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Fortunately, there are several evidence-based mitigation strategies. The most effective is increasing urban greenery — through street trees, parks, green roofs, and what are called urban forests. Studies show that a ten percent increase in urban tree cover can reduce peak summer temperatures by one to two degrees Celsius. Green roofs, which are covered in plants, not only insulate buildings but also cool the surrounding air.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Another strategy is cool roofing and cool pavements — using highly reflective surfaces that bounce solar radiation back into the atmosphere rather than absorbing it. These are sometimes painted white or made from special reflective materials. Several cities, including Los Angeles and Athens, have implemented large-scale cool pavement programs with measurable results.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'In summary, the urban heat island effect is a complex interaction of materials science, ecology, and urban planning. Solving it requires integrated strategies that address surface materials, vegetation, and energy use simultaneously. As cities continue to grow, the UHI effect will be a central challenge for sustainable urban development in the twenty-first century.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is4_1',
        question: 'What is the typical temperature difference between urban and rural areas due to the UHI effect?',
        options: ['Less than 1°C', '2 to 5°C', '5 to 8°C', 'More than 10°C'],
        correctAnswer: 1,
        explanation: 'The professor says: "A difference of two to five degrees is more typical" — though extremes can reach 10°C. This is a common IELTS distinction between typical and extreme values.',
      },
      {
        id: 'is4_2',
        question: 'According to the professor, what is the PRIMARY cause of the urban heat island effect?',
        options: [
          'Air pollution from factories and vehicles',
          'The reduction of rainfall in urban areas',
          'Urban surface materials like asphalt and concrete absorbing and retaining heat',
          'The large population density generating body heat',
        ],
        correctAnswer: 2,
        explanation: 'The professor identifies "surface materials" as "the primary factor" — impervious surfaces like asphalt and concrete absorb heat rapidly and release it slowly, unlike natural surfaces.',
      },
      {
        id: 'is4_3',
        question: 'What does "evapotranspiration" do in a natural environment?',
        options: [
          'It increases the absorption of solar radiation into the soil',
          'It generates heat through the decomposition of organic matter',
          'It cools the environment by releasing water vapor through plant leaves',
          'It converts carbon dioxide into oxygen through photosynthesis',
        ],
        correctAnswer: 2,
        explanation: 'The professor explains: "Trees and plants cool the environment through evapotranspiration — they draw water from the soil and release it as water vapor through their leaves, which has a cooling effect."',
      },
      {
        id: 'is4_4',
        question: 'What feedback loop does the professor describe as a consequence of UHI?',
        options: [
          'Higher temperatures → more vegetation growth → more cooling',
          'Higher temperatures → more cooling energy demand → more power plant emissions',
          'More concrete → more rainfall → cooler temperatures',
          'More heat → more wind → lower urban temperatures',
        ],
        correctAnswer: 1,
        explanation: '"Higher temperatures increase energy demand for cooling, which in turn leads to more emissions from power plants, creating a feedback loop."',
      },
      {
        id: 'is4_5',
        question: 'What is the estimated effect of a 10% increase in urban tree cover on peak summer temperatures?',
        options: [
          'A reduction of 0.5°C',
          'A reduction of 1 to 2°C',
          'A reduction of 3 to 4°C',
          'No measurable effect',
        ],
        correctAnswer: 1,
        explanation: '"Studies show that a ten percent increase in urban tree cover can reduce peak summer temperatures by one to two degrees Celsius." This is a sentence-completion style detail.',
      },
    ],
  },
]

function SectionCard({ section, index, cheatsheet, color }) {
  return (
    <div className={`${index > 0 ? 'pt-6 mt-6 border-t border-gray-100' : ''}`}>
      <h2 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-cyan-500 rounded-full flex-shrink-0" />
        {section.title}
      </h2>
      {section.body}
      {cheatsheet && (
        <CheatSheet title={cheatsheet.title} items={cheatsheet.items} color={color || 'teal'} />
      )}
    </div>
  )
}

export default function IELTS() {
  const [activeChapter, setActiveChapter] = useState(0)
  const [activeSub, setActiveSub] = useState(null)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const navigate = useNavigate()
  const { saveQuizScore } = useAuth()
  const chapter = chapters[activeChapter]
  const Icon = chapter.icon
  const sections = ieltsSections[chapter.id] || []
  const cheatsheets = ieltsCheatsheets[chapter.id] || []
  const color = chapterColors[chapter.id] || 'teal'

  const handleChapterChange = (i) => {
    setActiveChapter(i)
    setActiveSub(null)
    window.scrollTo(0, 0)
  }

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
              <h1 className="font-heading font-bold text-lg sm:text-xl text-gray-900 truncate">Materi IELTS</h1>
              <p className="text-xs text-gray-500 hidden sm:block">4 Section · Listening, Reading, Writing, Speaking</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs px-3 py-1.5 bg-cyan-50 text-cyan-600 rounded-lg font-semibold">Academic Band</span>
              <button
                onClick={() => navigate('/latihan/ielts')}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
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
            <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-cyan-600" />
                <span className="text-xs font-bold text-cyan-900">Progress Section</span>
              </div>
              <div className="w-full h-2 bg-cyan-200/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-cyan-600 mt-1.5 font-medium">Section {activeChapter + 1} dari {chapters.length}</p>
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
                        <div className="w-1.5 h-6 bg-cyan-500 rounded-full flex-shrink-0" />
                        Simulasi Listening Interaktif — Section 1–4
                      </h2>
                      <p className="text-sm text-gray-500 mb-1">
                        Tekan <strong>Play</strong> — suara bahasa Inggris otomatis dari browser TTS.
                        Kata yang sedang diucapkan di-highlight secara real-time.
                      </p>
                      <p className="text-xs text-gray-400 mb-4">4 passage tersedia: Section 1 (conversation), Section 2 (monologue), Section 3 (academic discussion), Section 4 (lecture). Gunakan tombol untuk berpindah.</p>
                      <ListeningSimulator passages={ieltsListeningPassages} color="cyan" />
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
                    questions={ieltsChapterQuiz[chapter.id] || []}
                    chapterId={`ielts-${chapter.id}`}
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
                    onClick={() => navigate('/tryout')}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Ikuti Tryout
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <div className="sm:hidden mt-4">
                <button
                  onClick={() => navigate('/latihan/ielts')}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-xl px-5 py-3 text-sm font-semibold shadow-md"
                >
                  Latihan Soal IELTS <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
