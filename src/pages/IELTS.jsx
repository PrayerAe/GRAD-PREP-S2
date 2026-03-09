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

  // ════════════ SET 2 ════════════════════════════════════════════════════════

  // ── Section 1 (Set 2): Dental Appointment ────────────────────────────────
  {
    shortTitle: 'S1 – Set 2',
    title: 'Section 1 (Set 2): Booking a Dental Appointment',
    type: 'conversation',
    context: 'A new patient, Daniel, calls Riverside Dental Clinic to register and book his first appointment. Listen carefully for personal details, appointment information, and service options — typical Section 1 form-filling content.',
    tips: [
      'Fokus pada informasi personal: nama, alamat, nomor telepon, tanggal lahir.',
      'Tanggal dan waktu sering menjadi distractor — speaker menyebutkan opsi lalu memilih satu.',
      'Perhatikan ejaan nama dan kata-kata yang spesifik seperti nama jalan.',
      'Dengarkan pilihan layanan yang tersedia dan mana yang dipilih oleh caller.',
    ],
    script: [
      { speaker: 'Receptionist (Emma)', text: 'Good afternoon, Riverside Dental Clinic. Emma speaking. How can I help you?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'Hi, I\'d like to register as a new patient and book an appointment please. My name\'s Daniel Whitmore — W-H-I-T-M-O-R-E.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'Of course, Mr. Whitmore. Let me take some details. What\'s your date of birth?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'It\'s the fourteenth of June, 1994.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'And your current address?', speakerIndex: 0 },
      { speaker: 'Daniel', text: '37 Birchwood Avenue. Birchwood — B-I-R-C-H-W-O-O-D. Postcode is NE4 8PL.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'Thank you. And a contact number?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'My mobile is 07934 821 550.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'Perfect. Now, what\'s the reason for your visit today? Is it a routine check-up, or do you have a specific concern?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'Mainly a check-up, but I\'ve also been having some sensitivity in my lower left molar — cold drinks especially. It\'s been bothering me for about three weeks now.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'I\'d recommend booking you in for a check-up and X-ray so the dentist can assess the sensitivity properly. That appointment would be 45 minutes. We have availability this Thursday at 10:15, or next Monday at 2:30 in the afternoon. Which would you prefer?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'Monday afternoon works better for me, thank you.', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'Monday at 2:30 it is. You\'ll be seeing Dr. Okafor — she specializes in restorative dentistry, so she\'s the right person for sensitivity issues. The consultation fee for new patients is 65 pounds, which includes the X-ray. Is that alright?', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'Yes, that\'s fine. Do I need to bring anything?', speakerIndex: 1 },
      { speaker: 'Receptionist (Emma)', text: 'If you have any previous dental records or X-rays from another clinic, it would be helpful to bring those. Otherwise, just arrive five minutes early to complete a short medical history form. We\'ll send a confirmation text to your mobile. Thank you, Mr. Whitmore.', speakerIndex: 0 },
      { speaker: 'Daniel', text: 'Great, thank you very much. Goodbye.', speakerIndex: 1 },
    ],
    questions: [
      {
        id: 'is5_1',
        question: 'What is the correct spelling of the patient\'s surname?',
        options: ['WHITMORE', 'WHITMOORE', 'WIGHTMORE', 'WHITEMORE'],
        correctAnswer: 0,
        explanation: 'Daniel spells it out: "W-H-I-T-M-O-R-E" — Whitmore. Note that he does NOT say "white" + "more" — the correct spelling is Whitmore, not Whitemore.',
      },
      {
        id: 'is5_2',
        question: 'What is Daniel\'s specific dental concern besides a routine check-up?',
        options: [
          'A broken tooth that needs immediate repair',
          'Sensitivity in his lower left molar, especially to cold drinks',
          'Bleeding gums that have worsened over several months',
          'Staining on his front teeth from coffee',
        ],
        correctAnswer: 1,
        explanation: '"I\'ve been having some sensitivity in my lower left molar — cold drinks especially. It\'s been bothering me for about three weeks now."',
      },
      {
        id: 'is5_3',
        question: 'Which appointment slot does Daniel choose?',
        options: [
          'Thursday at 10:15 am',
          'Thursday at 2:30 pm',
          'Monday at 10:15 am',
          'Monday at 2:30 pm',
        ],
        correctAnswer: 3,
        explanation: 'The receptionist offers Thursday 10:15 or Monday 2:30. Daniel says: "Monday afternoon works better for me." Classic IELTS distractor — two options are mentioned but only one is chosen.',
      },
      {
        id: 'is5_4',
        question: 'What is the consultation fee for new patients?',
        options: ['£45', '£55', '£65', '£75'],
        correctAnswer: 2,
        explanation: '"The consultation fee for new patients is 65 pounds, which includes the X-ray." The 45-minute appointment length is a distractor number — not the price.',
      },
      {
        id: 'is5_5',
        question: 'What does the receptionist ask Daniel to bring to the appointment?',
        options: [
          'A referral letter from his GP doctor',
          'Payment in cash for the consultation fee',
          'Previous dental records or X-rays if available',
          'A list of all medications he currently takes',
        ],
        correctAnswer: 2,
        explanation: '"If you have any previous dental records or X-rays from another clinic, it would be helpful to bring those." Medical history will be collected via a form at the clinic.',
      },
    ],
  },

  // ── Section 2 (Set 2): Museum Audio Guide ────────────────────────────────
  {
    shortTitle: 'S2 – Set 2',
    title: 'Section 2 (Set 2): Hartley Museum of Natural History — Visitor Guide',
    type: 'monologue',
    context: 'A recorded audio guide introduces visitors to the Hartley Museum of Natural History. The guide describes gallery locations, opening hours, facilities, and special exhibitions. Section 2 monologues often involve locations and directions — useful for map labelling tasks.',
    tips: [
      'Bayangkan peta saat mendengar — perhatikan penanda posisi: "next to", "opposite", "on the left".',
      'Multiple choice sering menguji detail harga, jam buka, atau apa yang diperbolehkan/dilarang.',
      'Jangan hanya mendengar kata kuncinya — dengarkan seluruh kalimat untuk menghindari distractor.',
      'Bila ada angka (harga, jam, ukuran), langsung tulis segera sebelum lupa.',
    ],
    script: [
      { speaker: 'Audio Guide', text: 'Welcome to the Hartley Museum of Natural History. We\'re delighted to have you here today. This audio guide will help you make the most of your visit. Please take a moment to collect a printed floor plan from the welcome desk at the entrance before exploring.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'The museum is open every day from nine in the morning until six in the evening, except on Tuesdays, when we are closed for staff training. The last entry is at five-thirty. Admission for adults is twelve pounds. Children under sixteen enter free, as do full-time students with a valid student card.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'As you enter the main hall, you\'ll see the museum\'s centrepiece: the skeleton of a blue whale, suspended from the ceiling. This specimen is eighteen meters long and took three years to prepare and install. Photography is welcome throughout the museum, but please switch your flash off in the fossil galleries to protect the specimens.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'On the ground floor, to your right as you face the whale, is the Earth Sciences gallery, featuring minerals, meteorites, and geological formations from around the world. Directly opposite, on your left, is the Ancient Life gallery, dedicated to dinosaurs and prehistoric marine creatures. This is our most popular gallery with younger visitors.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'Taking the lift or staircase to the first floor, you\'ll find the Human Origins gallery — an interactive exhibition tracing the evolution of our species from early hominids to modern humans. Adjacent to it is the Ecology Hall, which explores the interconnected web of life across different habitats. This hall features a live rainforest enclosure with real plants and insects.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'We currently have a special temporary exhibition called "Deep Ocean: Unknown Frontiers," running until the thirtieth of April. This exhibition is located on the second floor and requires a separate ticket of five pounds per person in addition to the general admission. Tickets can be purchased at the welcome desk or online.', speakerIndex: 0 },
      { speaker: 'Audio Guide', text: 'Refreshments are available in the museum café, which is located on the ground floor near the main exit. Hot meals are served until three in the afternoon; drinks and snacks are available until closing. The museum shop, next to the café, stocks books, gifts, and educational materials. We hope you enjoy your visit to the Hartley Museum.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is6_1',
        question: 'On which day is the museum closed?',
        options: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
        correctAnswer: 1,
        explanation: '"We are closed on Tuesdays, when we are closed for staff training." All other days the museum is open from 9 am to 6 pm.',
      },
      {
        id: 'is6_2',
        question: 'Who can enter the museum for free?',
        options: [
          'All visitors under 18 years old',
          'Senior citizens over 65',
          'Children under 16 and full-time students with a valid student card',
          'Anyone visiting on a Tuesday',
        ],
        correctAnswer: 2,
        explanation: '"Children under sixteen enter free, as do full-time students with a valid student card." Adults pay £12; the guide says "under sixteen", not "under eighteen."',
      },
      {
        id: 'is6_3',
        question: 'Where is the Ancient Life (dinosaur) gallery located?',
        options: [
          'On the first floor, next to the Human Origins gallery',
          'On the ground floor, to the right as you face the whale',
          'On the ground floor, to the left as you face the whale',
          'On the second floor, near the temporary exhibition',
        ],
        correctAnswer: 2,
        explanation: '"Directly opposite [the Earth Sciences gallery], on your left, is the Ancient Life gallery." The Earth Sciences gallery is on the right — Ancient Life is on the left.',
      },
      {
        id: 'is6_4',
        question: 'What is special about the Ecology Hall on the first floor?',
        options: [
          'It contains the museum\'s largest meteorite collection',
          'It has a live rainforest enclosure with real plants and insects',
          'It is the only gallery where photography is permitted',
          'It is exclusively for school group bookings',
        ],
        correctAnswer: 1,
        explanation: '"The Ecology Hall... features a live rainforest enclosure with real plants and insects." This is the unique distinguishing feature of this gallery.',
      },
      {
        id: 'is6_5',
        question: 'How much does the temporary "Deep Ocean" exhibition cost per person?',
        options: [
          'It is free with general admission',
          '£5 extra in addition to general admission',
          '£12 total, replacing the general admission fee',
          '£5 for children, £12 for adults',
        ],
        correctAnswer: 1,
        explanation: '"This exhibition... requires a separate ticket of five pounds per person in addition to the general admission." It is NOT included in the standard £12 ticket.',
      },
    ],
  },

  // ── Section 3 (Set 2): Group Discussion — History Presentation ───────────
  {
    shortTitle: 'S3 – Set 2',
    title: 'Section 3 (Set 2): Group Discussion — History Presentation Prep',
    type: 'conversation',
    context: 'Two students, Yuki and Ade, meet with their history tutor, Dr. Brennan, to finalize their presentation on the Silk Road trade networks. Listen for opinions on content, disagreements about focus, and the tutor\'s suggestions.',
    tips: [
      'Dengan 3 speaker, perhatikan siapa yang SETUJU dan TIDAK SETUJU satu sama lain.',
      'Tutor sering memberikan feedback berupa saran konstruktif — catat kata "suggest", "recommend", "why not..."',
      'Soal matching: "Which speaker thinks X?" — catat pendapat masing-masing speaker secara terpisah.',
      'Perhatikan perubahan pendapat — ketika seseorang awalnya tidak setuju lalu akhirnya setuju.',
    ],
    script: [
      { speaker: 'Dr. Brennan', text: 'Good morning, Yuki, Ade. You mentioned you wanted to go over your presentation structure before the assessment. Where are you up to?', speakerIndex: 0 },
      { speaker: 'Yuki', text: 'We\'ve got a solid outline, I think. We\'re opening with the geography of the Silk Road — the actual routes, which goods traveled where. Then we\'re moving into the economic impact on Tang Dynasty China, and finishing with the spread of religion and ideas.', speakerIndex: 1 },
      { speaker: 'Dr. Brennan', text: 'That sounds like a logical structure. Ade, do you agree with that ordering?', speakerIndex: 0 },
      { speaker: 'Ade', text: 'Mostly, yes. My only concern is that we might be spending too much time on the geography section. The routes themselves are interesting, but I think the cultural exchange angle is more compelling — the way Buddhism spread into China, how Islamic scholarship traveled westward. That\'s the part that really differentiates our presentation.', speakerIndex: 2 },
      { speaker: 'Yuki', text: 'But without the geographical context, the audience won\'t understand why certain goods moved along specific routes, or why certain cities became wealthy. I think the geography section justifies everything that comes after.', speakerIndex: 1 },
      { speaker: 'Dr. Brennan', text: 'You\'re both making valid points. Yuki, I agree the geography provides necessary scaffolding. But Ade has a point about differentiation — most presentations at this level stay at the level of trade goods and economics. You could keep the geography brief — perhaps five to seven minutes — and use it explicitly to set up the cultural exchange section as the analytical heart of the presentation.', speakerIndex: 0 },
      { speaker: 'Ade', text: 'That works for me. And actually, I was thinking we could use the spread of papermaking as a case study — it originated in China, traveled west along the Silk Road, and eventually reached Europe, transforming literacy and knowledge preservation. It connects the geography, economics, and cultural transmission all in one example.', speakerIndex: 2 },
      { speaker: 'Yuki', text: 'Oh, that\'s a really good idea actually. I hadn\'t thought of using a single technology as a thread through the whole presentation. It would give it more coherence.', speakerIndex: 1 },
      { speaker: 'Dr. Brennan', text: 'I love that idea, Ade. A case study approach like that would elevate the analysis considerably. One thing to be careful of: make sure you\'re engaging with at least two primary sources. The assessment rubric explicitly requires primary source evidence, and I\'ve seen presentations lose marks on that criterion specifically. Have you identified your primary sources yet?', speakerIndex: 0 },
      { speaker: 'Yuki', text: 'We\'ve got the Tang Huiyao — that\'s a Tang dynasty administrative record — and some translated excerpts from Ibn Battuta\'s travel accounts.', speakerIndex: 1 },
      { speaker: 'Dr. Brennan', text: 'Excellent choices. Ibn Battuta is a bit later in period — fourteenth century — so make sure you contextualize that chronologically. But both are strong primary sources. I think you\'re in good shape. Final presentation is next Thursday, yes?', speakerIndex: 0 },
      { speaker: 'Ade', text: 'Yes, Thursday at two o\'clock.', speakerIndex: 2 },
    ],
    questions: [
      {
        id: 'is7_1',
        question: 'What concern does Ade raise about the presentation structure?',
        options: [
          'The presentation is too long and exceeds the time limit',
          'The geography section might take up too much time at the expense of cultural exchange',
          'There are not enough primary sources referenced in the current outline',
          'The economic section overlaps too much with another group\'s presentation',
        ],
        correctAnswer: 1,
        explanation: 'Ade says: "My only concern is that we might be spending too much time on the geography section... I think the cultural exchange angle is more compelling." He wants more emphasis on cultural transmission.',
      },
      {
        id: 'is7_2',
        question: 'What does Dr. Brennan suggest regarding the geography section?',
        options: [
          'Remove it entirely and start with the economic impact',
          'Expand it to cover all major trade routes in detail',
          'Keep it brief (5–7 minutes) and use it to introduce the cultural exchange analysis',
          'Move it to the end of the presentation as a visual summary',
        ],
        correctAnswer: 2,
        explanation: '"You could keep the geography brief — perhaps five to seven minutes — and use it explicitly to set up the cultural exchange section as the analytical heart of the presentation."',
      },
      {
        id: 'is7_3',
        question: 'What case study does Ade propose to connect the different themes?',
        options: [
          'The development of the compass and maritime navigation',
          'The spread of silk weaving techniques from China to Persia',
          'The transmission of papermaking technology from China westward to Europe',
          'The introduction of Buddhism from India to China via merchants',
        ],
        correctAnswer: 2,
        explanation: 'Ade proposes using "the spread of papermaking as a case study — it originated in China, traveled west along the Silk Road, and eventually reached Europe, transforming literacy and knowledge preservation."',
      },
      {
        id: 'is7_4',
        question: 'What does Dr. Brennan warn the students about regarding the assessment rubric?',
        options: [
          'Their presentation must not exceed fifteen minutes total',
          'They need to include at least two primary sources or risk losing marks',
          'They must compare the Silk Road with at least one other trade network',
          'Visual aids such as maps are mandatory for a passing grade',
        ],
        correctAnswer: 1,
        explanation: '"The assessment rubric explicitly requires primary source evidence, and I\'ve seen presentations lose marks on that criterion specifically."',
      },
      {
        id: 'is7_5',
        question: 'What is Dr. Brennan\'s concern about using Ibn Battuta as a primary source?',
        options: [
          'His accounts are not considered academically reliable',
          'He wrote in Arabic, making translation accuracy an issue',
          'He belongs to the fourteenth century, which is later than the core period discussed',
          'His travel routes did not actually follow the Silk Road',
        ],
        correctAnswer: 2,
        explanation: '"Ibn Battuta is a bit later in period — fourteenth century — so make sure you contextualize that chronologically." The concern is about the time period, not reliability.',
      },
    ],
  },

  // ── Section 4 (Set 2): Lecture — Cognitive Load Theory ───────────────────
  {
    shortTitle: 'S4 – Set 2',
    title: 'Section 4 (Set 2): Academic Lecture — Cognitive Load Theory',
    type: 'lecture',
    context: 'A psychology professor explains Cognitive Load Theory — a framework for understanding how the brain processes information and how it applies to education and instructional design. Section 4 is always the most challenging section: fast-paced, technical, no breaks.',
    tips: [
      'Section 4 paling sulit — tak ada jeda. Latih diri untuk terus mendengar meski melewatkan satu jawaban.',
      'Definisi teknis penting — soal sentence completion sering menguji definisi istilah kunci.',
      'Perhatikan contoh numerik (angka, kapasitas, batas) — sering jadi kunci jawaban.',
      'Kata-kata seperti "intrinsic", "extraneous", "germane" = istilah teknis — catat dan definisikan.',
    ],
    script: [
      { speaker: 'Professor', text: 'Good morning. Today I want to introduce you to Cognitive Load Theory, or CLT — a framework developed by educational psychologist John Sweller in the late 1980s that has become one of the most influential theories in instructional design. The central question CLT tries to answer is: why do some teaching methods work and others don\'t, even when covering the same content?', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The theory is grounded in what we know about human memory architecture. We have two main memory systems relevant here. Long-term memory has essentially unlimited capacity — you can store vast amounts of information indefinitely. But working memory, where conscious processing happens, is severely limited. Research by George Miller in 1956 famously suggested working memory can hold approximately seven items simultaneously, give or take two. More recent research suggests the effective limit may be closer to four distinct elements when processing complex information.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Cognitive Load Theory proposes that learning fails when we exceed working memory capacity. When students are simultaneously trying to understand new concepts, follow complex instructions, AND make sense of poorly organized information, their working memory becomes overloaded. They can\'t learn efficiently because there\'s simply not enough mental bandwidth left for the actual comprehension.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Sweller identified three types of cognitive load. The first is intrinsic load — this is the inherent complexity of the material itself. Advanced quantum mechanics has high intrinsic load; basic arithmetic has low intrinsic load. Intrinsic load cannot be reduced without simplifying or changing the content — it\'s built into the subject matter.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The second type is extraneous load — this is cognitive effort caused by poor instructional design, not by the content itself. If a textbook has confusing layout, irrelevant examples, or makes you flip between pages to connect related information, that creates extraneous load. Crucially, extraneous load can and should be reduced by better design. This is where CLT has been most practically influential.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The third type is germane load — the cognitive effort devoted to schema formation, meaning the mental structures that allow us to organize and store knowledge efficiently. Germane load is productive load; it\'s the mental work that actually results in learning. Good instructional design reduces extraneous load so that more working memory capacity is available for germane processing.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'CLT has generated a range of instructional design principles with strong empirical support. The worked example effect shows that novice learners benefit more from studying fully worked examples than from solving problems independently — because problem-solving places high demands on working memory for beginners who haven\'t yet formed relevant schemas.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The split-attention effect occurs when learners must mentally integrate information from two physically separated sources — like a diagram and its label placed far apart. Redesigning materials so related information is physically integrated reduces extraneous load significantly. And the redundancy effect shows that adding unnecessary information — even information that seems helpful, like an extra verbal explanation of something already shown in a diagram — can actually impair learning by consuming scarce working memory.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'One important nuance: these effects depend heavily on learner expertise. What reduces load for a novice may not affect — or may even hinder — an expert. Experts have rich schemas in long-term memory that effectively expand their working memory capacity for familiar content. This is called the expertise reversal effect, and it\'s a reminder that instructional design must be tailored to the specific audience, not applied universally.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'is8_1',
        question: 'What is the main limitation of working memory according to the lecture?',
        options: [
          'It can only retain information for about thirty seconds before forgetting',
          'It can only process language-based information, not visual information',
          'It has a severely limited capacity — approximately four to seven items simultaneously',
          'It cannot transfer information to long-term memory without sleep',
        ],
        correctAnswer: 2,
        explanation: 'The professor says: "Working memory, where conscious processing happens, is severely limited... approximately seven items... more recent research suggests closer to four distinct elements when processing complex information."',
      },
      {
        id: 'is8_2',
        question: 'What is "extraneous load" in Cognitive Load Theory?',
        options: [
          'The inherent complexity of the subject matter itself',
          'The mental effort devoted to forming long-term memory schemas',
          'Cognitive effort caused by poor instructional design, not the content',
          'The additional load created by high-stakes test anxiety',
        ],
        correctAnswer: 2,
        explanation: '"Extraneous load — this is cognitive effort caused by poor instructional design, not by the content itself." Examples: confusing layout, irrelevant examples, split information.',
      },
      {
        id: 'is8_3',
        question: 'What is "germane load" and why is it considered productive?',
        options: [
          'Effort spent translating technical vocabulary into everyday language',
          'Cognitive effort devoted to schema formation, which results in actual learning',
          'The mental effort of reading long passages of complex academic text',
          'Load created when students must multitask during lectures',
        ],
        correctAnswer: 1,
        explanation: '"Germane load — the cognitive effort devoted to schema formation... Germane load is productive load; it\'s the mental work that actually results in learning."',
      },
      {
        id: 'is8_4',
        question: 'What does the "split-attention effect" describe?',
        options: [
          'Students being distracted by noise or movement during a lecture',
          'The difficulty of learning from two teachers who give conflicting information',
          'The extra load created when related information is physically separated and must be mentally integrated',
          'The cognitive strain of simultaneously listening and taking notes',
        ],
        correctAnswer: 2,
        explanation: '"The split-attention effect occurs when learners must mentally integrate information from two physically separated sources — like a diagram and its label placed far apart." Placing them together reduces load.',
      },
      {
        id: 'is8_5',
        question: 'What is the "expertise reversal effect" mentioned at the end of the lecture?',
        options: [
          'The finding that experts learn faster when they teach beginners',
          'The phenomenon where instructional strategies effective for novices may not work — or may hinder — experts',
          'The observation that experts forget basic concepts faster than novices',
          'The reversal of learning gains seen when students switch from worked examples to independent problem-solving',
        ],
        correctAnswer: 1,
        explanation: '"What reduces load for a novice may not affect — or may even hinder — an expert... This is called the expertise reversal effect." It means design must be tailored to learner level.',
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
