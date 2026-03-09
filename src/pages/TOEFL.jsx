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

  // ── Passage 4: Campus Conversation — Academic Advisor ────────────────────
  {
    shortTitle: 'Conversation 2',
    title: 'Campus Conversation: Changing Major',
    type: 'conversation',
    context: 'A student, Lisa, meets with her academic advisor, Dr. Thompson, to discuss switching from Computer Science to Environmental Studies. TOEFL campus conversations often involve decisions, procedures, and the student weighing options.',
    tips: [
      'Perhatikan MASALAH utama student dan SOLUSI yang ditawarkan advisor.',
      'Soal sering menanyakan apa yang student AKAN lakukan setelah percakapan.',
      'Catat kondisi atau persyaratan yang disebutkan — sering jadi dasar soal inference.',
      'Dengarkan tone — apakah advisor mendorong, memperingatkan, atau netral?',
    ],
    script: [
      { speaker: 'Dr. Thompson', text: 'Lisa, come on in! So you mentioned in your email you wanted to talk about your academic path. What\'s on your mind?', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'Hi Dr. Thompson. Thanks for seeing me. I\'ve been thinking a lot lately, and I\'m considering switching from Computer Science to Environmental Studies. I know that\'s a big change, and I wanted your advice.', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'That is a significant shift, yes. Can you tell me what\'s driving this? Is it the coursework, or something more fundamental about your interests?', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'It\'s my interests, really. I took an elective last semester on climate systems, and I was completely absorbed in it — more than I\'ve ever been in any CS course. I keep thinking I\'d be more motivated studying something I\'m genuinely passionate about.', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'That\'s a really important insight. Motivation matters enormously in graduate work. Now, you\'re in your second year, so let\'s talk practically. How many CS credits have you completed?', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'I\'ve completed about 48 credits. I checked, and it looks like about 20 of those could count toward Environmental Studies requirements — particularly the math, statistics, and data analysis courses.', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'That\'s actually quite useful. Environmental Studies has become highly quantitative, so your computational background would be an asset, not a disadvantage. You might even consider the Environmental Data Science concentration — it specifically combines programming with environmental analysis.', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'I hadn\'t heard of that concentration. That actually sounds like it might be the best of both worlds. Would I still graduate on time?', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'It would be tight, but possible. You\'d likely need to take an additional summer course to make up the gap in your environmental science foundations — specifically the Introduction to Ecology course, which is a prerequisite for most upper-level classes. But if you do that this coming summer, you should be able to graduate with your cohort.', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'That sounds manageable. What would my next step be?', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'You should first speak directly with Professor Garcia in the Environmental Studies department — she oversees the Data Science concentration and can give you the full picture of requirements. After that conversation, you can submit a formal change-of-major form through the registrar\'s office. I\'d recommend doing that before the end of next week, since the deadline for changes that take effect next semester is Friday.', speakerIndex: 0 },
      { speaker: 'Lisa', text: 'Perfect. I\'ll email Professor Garcia today. Thank you so much, Dr. Thompson — this has really helped me feel more confident about making this decision.', speakerIndex: 1 },
      { speaker: 'Dr. Thompson', text: 'It sounds like you\'ve thought it through carefully, Lisa. Good luck — and keep me posted on how it goes.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tc2_1',
        question: 'Why does Lisa want to change her major?',
        options: [
          'She is failing her Computer Science courses',
          'She found Environmental Studies more motivating after an elective course',
          'Her parents are pressuring her to study a different field',
          'The Computer Science program does not offer enough courses',
        ],
        correctAnswer: 1,
        explanation: 'Lisa says: "I took an elective last semester on climate systems, and I was completely absorbed in it — more than I\'ve ever been in any CS course."',
      },
      {
        id: 'tc2_2',
        question: 'According to Dr. Thompson, how would Lisa\'s CS background be viewed in Environmental Studies?',
        options: [
          'As a significant disadvantage requiring extra remedial courses',
          'As irrelevant to the environmental field',
          'As an asset, especially in the quantitative/data science concentration',
          'As acceptable only if she retakes the math courses',
        ],
        correctAnswer: 2,
        explanation: 'Dr. Thompson says: "Your computational background would be an asset, not a disadvantage." She also suggests the Environmental Data Science concentration as a perfect fit.',
      },
      {
        id: 'tc2_3',
        question: 'What does Dr. Thompson say Lisa needs to do to graduate on time?',
        options: [
          'Retake all her Computer Science courses from the beginning',
          'Take an extra course during the upcoming summer term',
          'Extend her studies by one additional semester',
          'Transfer to a different university with fewer prerequisites',
        ],
        correctAnswer: 1,
        explanation: '"You\'d likely need to take an additional summer course... specifically the Introduction to Ecology course, which is a prerequisite for most upper-level classes."',
      },
      {
        id: 'tc2_4',
        question: 'What does Dr. Thompson recommend as Lisa\'s FIRST next step?',
        options: [
          'Submit the change-of-major form to the registrar immediately',
          'Drop her current CS courses for the semester',
          'Speak with Professor Garcia in the Environmental Studies department',
          'Apply for the summer ecology course online',
        ],
        correctAnswer: 2,
        explanation: 'Dr. Thompson says: "You should first speak directly with Professor Garcia in the Environmental Studies department." The registrar form comes after that conversation.',
      },
      {
        id: 'tc2_5',
        question: 'Why does Dr. Thompson mention Friday as an important deadline?',
        options: [
          'It is the last day to withdraw from CS courses without a grade penalty',
          'It is the deadline for change-of-major forms to take effect next semester',
          'Professor Garcia is only available until Friday this week',
          'The summer ecology course registration closes on Friday',
        ],
        correctAnswer: 1,
        explanation: '"The deadline for changes that take effect next semester is Friday." Lisa must submit the form before then for the change to apply to the upcoming semester.',
      },
    ],
  },

  // ── Passage 5: Lecture — Coral Reef Bleaching ────────────────────────────
  {
    shortTitle: 'Lecture 3',
    title: 'Academic Lecture: Coral Reef Bleaching',
    type: 'lecture',
    context: 'A marine biology professor discusses coral reef bleaching — why it happens, what causes it, and what the global consequences are. The lecture includes a student question mid-way, which is typical in TOEFL iBT lectures.',
    tips: [
      'TOEFL lectures sering mengandung pertanyaan dari student — dengarkan bagaimana professor merespons.',
      'Catat hubungan sebab-akibat: "Because of X, Y happens" — sering jadi soal.',
      'Bedakan fakta yang professor katakan vs inferensi yang harus kamu buat.',
      'Perhatikan kata penekanan: "What\'s crucial here is...", "The important distinction is..."',
    ],
    script: [
      { speaker: 'Professor', text: 'Alright, today we\'re going to talk about one of the most visible and alarming symptoms of ocean stress: coral reef bleaching. Now, many of you have probably seen images of bleached coral — that ghostly white appearance. But what exactly is happening biologically, and why should we care?', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Let\'s start with the basics. Coral reefs are built by tiny animals called coral polyps. These polyps have a mutually beneficial relationship — a symbiosis — with microscopic algae called zooxanthellae. The algae live inside the coral tissue and perform photosynthesis, providing the coral with up to ninety percent of its energy needs. In return, the coral provides the algae with shelter and nutrients.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Now, this relationship is highly temperature-sensitive. When ocean water gets too warm — even just one to two degrees Celsius above the seasonal average — the coral becomes stressed. The heat disrupts the algae\'s photosynthesis, causing them to produce harmful reactive oxygen molecules. The coral\'s response is to expel the algae from its tissue. And when the algae leave... the coral loses its color and turns white. That\'s bleaching.', speakerIndex: 0 },
      { speaker: 'Student', text: 'So does bleaching kill the coral immediately?', speakerIndex: 1 },
      { speaker: 'Professor', text: 'Great question. Not immediately — and this is an important distinction. Bleached coral is stressed and weakened, but it\'s not necessarily dead. If water temperatures return to normal within a few weeks, the algae can recolonize the coral, and it can recover. However, if elevated temperatures persist, the coral will eventually starve and die. In recent decades, recovery windows have become shorter and shorter as ocean temperatures rise more frequently.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The consequences of widespread coral death are enormous. Coral reefs cover less than one percent of the ocean floor, yet they support approximately twenty-five percent of all marine species. Fish, crustaceans, sea turtles, sharks — all depend on reefs either directly or indirectly for food and shelter. The collapse of a reef ecosystem can devastate fisheries that entire coastal communities depend on for protein and income.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The Great Barrier Reef in Australia has experienced four mass bleaching events since 2016. Surveys from 2022 found that over ninety percent of reefs surveyed showed some bleaching damage. Scientists now classify coral bleaching as one of the clearest observable indicators of climate change impact on marine ecosystems.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'What can be done? Some researchers are developing heat-resistant coral strains through selective breeding or genetic modification. Others are exploring assisted evolution — deliberately exposing coral to warmer conditions to select for naturally resilient individuals. These approaches are promising, but they cannot replace the fundamental need to reduce carbon emissions and slow ocean warming. Without that, even the most resilient engineered coral will eventually face temperatures beyond their tolerance.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tl4_1',
        question: 'What is the role of zooxanthellae in coral reefs?',
        options: [
          'They build the physical limestone structure of the reef',
          'They provide coral with up to 90% of its energy through photosynthesis',
          'They protect coral from predators by producing toxic chemicals',
          'They filter seawater to remove harmful bacteria from the reef',
        ],
        correctAnswer: 1,
        explanation: 'The professor states: "The algae... perform photosynthesis, providing the coral with up to ninety percent of its energy needs."',
      },
      {
        id: 'tl4_2',
        question: 'What directly causes coral bleaching?',
        options: [
          'Pollution from agricultural runoff into the ocean',
          'The coral expelling its algae due to thermal stress',
          'Predatory fish eating the outer layer of the coral',
          'A virus that attacks coral polyp tissue',
        ],
        correctAnswer: 1,
        explanation: '"When the coral becomes stressed [from heat]... the coral\'s response is to expel the algae from its tissue. And when the algae leave... the coral loses its color and turns white. That\'s bleaching."',
      },
      {
        id: 'tl4_3',
        question: 'What does the professor say in response to the student\'s question about bleaching killing coral immediately?',
        options: [
          'Yes, bleaching always results in immediate coral death',
          'No, but bleached coral cannot survive more than 24 hours without algae',
          'No, bleached coral can recover if temperatures normalize quickly enough',
          'Yes, but only if combined with ocean acidification',
        ],
        correctAnswer: 2,
        explanation: 'The professor says: "Bleached coral is stressed and weakened, but it\'s not necessarily dead. If water temperatures return to normal within a few weeks, the algae can recolonize the coral, and it can recover."',
      },
      {
        id: 'tl4_4',
        question: 'According to the professor, what proportion of marine species depend on coral reefs?',
        options: ['About 5%', 'About 10%', 'About 25%', 'About 50%'],
        correctAnswer: 2,
        explanation: '"Coral reefs cover less than one percent of the ocean floor, yet they support approximately twenty-five percent of all marine species."',
      },
      {
        id: 'tl4_5',
        question: 'What does the professor say is the fundamental requirement for saving coral reefs long-term?',
        options: [
          'Expanding marine protected areas around all existing reefs',
          'Reducing carbon emissions to slow ocean warming',
          'Breeding entirely new coral species in laboratory conditions',
          'Relocating coral reefs to cooler parts of the ocean',
        ],
        correctAnswer: 1,
        explanation: '"These approaches are promising, but they cannot replace the fundamental need to reduce carbon emissions and slow ocean warming." This is the professor\'s explicit conclusion.',
      },
    ],
  },

  // ── Passage 6: Lecture — Linguistics: Language Acquisition ───────────────
  {
    shortTitle: 'Lecture 4',
    title: 'Academic Lecture: Language Acquisition in Children',
    type: 'lecture',
    context: 'A linguistics professor discusses theories of how children acquire language, comparing Chomsky\'s nativist theory with the interactionist perspective. TOEFL humanities/social science lectures often compare two opposing theories.',
    tips: [
      'Lecture tentang dua teori yang berlawanan → buat tabel perbandingan di catatan kamu.',
      'Catat nama tokoh + teori yang mereka usung: Chomsky = nativist, Vygotsky/interactionist = lingkungan.',
      'TOEFL sering menguji: "What would Chomsky say about X?" — pahami posisi masing-masing pihak.',
      'Dengarkan contoh yang digunakan professor untuk menjelaskan masing-masing pandangan.',
    ],
    script: [
      { speaker: 'Professor', text: 'Good afternoon. Today we\'re starting our unit on language acquisition — specifically, how children go from producing random sounds to speaking in grammatically complex sentences, often in just three to four years. This is one of the most remarkable cognitive achievements in human development, and linguists have debated for decades what explains it.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The dominant theory through most of the twentieth century was the nativist view, associated most strongly with Noam Chomsky. Chomsky observed something striking: children all over the world, regardless of their native language or culture, go through the same developmental stages at roughly the same ages. An English-speaking child and a Japanese-speaking child both start babbling around six months, produce their first words around twelve months, and begin combining words into simple sentences around eighteen to twenty-four months.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Chomsky argued this universal pattern couldn\'t be explained by learning alone. Children are exposed to language that is often fragmentary — adults speak in incomplete sentences, they make errors, they use slang. Yet children somehow extract perfect grammatical rules from this imperfect input. Chomsky called this the "poverty of the stimulus" argument: the input is too poor to account for the linguistic knowledge children end up with.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'His solution was to propose that humans are born with an innate Language Acquisition Device — the LAD — a mental structure that contains universal grammatical principles common to all human languages. Children don\'t learn grammar from scratch; they already have the grammatical framework built in. They simply need exposure to language data to set the specific parameters of their native language.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The opposing view is the interactionist perspective, which argues that social interaction and the environment play a central role in language development. Researchers like Lev Vygotsky emphasized that children learn language through meaningful communication with caregivers. Crucially, studies show that the quality of language a child is exposed to matters significantly — children whose parents use larger vocabularies and more complex sentences tend to develop richer language skills earlier.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'The interactionists also point to what they call child-directed speech — the simplified, melodic, repetitive way adults naturally speak to infants. This "baby talk" is actually highly structured and responsive to the child\'s developmental level. Parents unconsciously adjust their complexity as the child grows. Interactionists argue this scaffolding is what actually drives acquisition, not an innate device.', speakerIndex: 0 },
      { speaker: 'Professor', text: 'Today, most linguists take a middle ground. The evidence for some innate linguistic predisposition is strong — the universality of developmental stages, the existence of critical periods, the fact that children exposed to inadequate linguistic input still develop language far better than any other animal could. But it\'s equally clear that the social environment shapes vocabulary, pragmatics, and many aspects of language use. The current consensus is that both nature and nurture contribute, in ways we\'re still working to understand.', speakerIndex: 0 },
    ],
    questions: [
      {
        id: 'tl5_1',
        question: 'What does Chomsky\'s "poverty of the stimulus" argument mean?',
        options: [
          'Children in poverty have more limited language development',
          'The language input children receive is too imperfect to explain the grammar they acquire',
          'Children need richer and more formal language exposure to develop correctly',
          'Adult language is too complex for children to understand without innate structures',
        ],
        correctAnswer: 1,
        explanation: 'Chomsky argued that "the input is too poor to account for the linguistic knowledge children end up with" — children extract perfect grammar from imperfect, fragmentary input, which can\'t be explained by learning alone.',
      },
      {
        id: 'tl5_2',
        question: 'What is the Language Acquisition Device (LAD)?',
        options: [
          'A teaching tool designed to accelerate vocabulary learning in children',
          'A brain region that Chomsky identified through MRI scanning',
          'An innate mental structure containing universal grammatical principles',
          'A set of language learning exercises developed by Chomsky\'s research team',
        ],
        correctAnswer: 2,
        explanation: '"Chomsky proposed that humans are born with an innate Language Acquisition Device — the LAD — a mental structure that contains universal grammatical principles common to all human languages."',
      },
      {
        id: 'tl5_3',
        question: 'What evidence do interactionists use to support their view?',
        options: [
          'Children in all cultures produce their first words at exactly the same age',
          'Children with richer parental input develop more advanced language skills earlier',
          'Deaf children spontaneously develop sign language without exposure',
          'Identical twins always develop language at the same rate regardless of environment',
        ],
        correctAnswer: 1,
        explanation: '"Studies show that the quality of language a child is exposed to matters significantly — children whose parents use larger vocabularies and more complex sentences tend to develop richer language skills earlier."',
      },
      {
        id: 'tl5_4',
        question: 'What is "child-directed speech" and why do interactionists emphasize it?',
        options: [
          'Formal language instruction specifically designed for toddlers in classroom settings',
          'The simplified, melodic speech adults naturally use with infants, which scaffolds language development',
          'A type of sign language that hearing parents use before children can speak',
          'Written materials with pictures that parents use to teach vocabulary',
        ],
        correctAnswer: 1,
        explanation: '"Child-directed speech — the simplified, melodic, repetitive way adults naturally speak to infants... is actually highly structured and responsive to the child\'s developmental level." Interactionists argue this scaffolding drives acquisition.',
      },
      {
        id: 'tl5_5',
        question: 'What is the professor\'s conclusion about the nativist vs. interactionist debate?',
        options: [
          'Chomsky\'s nativist theory has been proven correct and the debate is settled',
          'The interactionist view has been shown to be superior based on recent brain scans',
          'Both innate factors and the social environment contribute to language acquisition',
          'Neither theory has sufficient evidence, so language acquisition remains unexplained',
        ],
        correctAnswer: 2,
        explanation: '"Most linguists take a middle ground... The current consensus is that both nature and nurture contribute, in ways we\'re still working to understand."',
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
