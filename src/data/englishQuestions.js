export const englishQuestions = [
  // ===== GRAMMAR (1-12) =====
  {
    id: 1,
    topic: "Grammar",
    subtopic: "Past Simple",
    question: "She ____ the exam last week.",
    options: ["complete", "completed", "has completed", "had complete"],
    correctAnswer: 1,
    explanation: "Past simple is used for completed actions at a specific time in the past. 'last week' signals past simple."
  },
  {
    id: 2,
    topic: "Grammar",
    subtopic: "Subject-Verb Agreement",
    question: "The results of the experiment ____ surprising.",
    options: ["was", "were", "is", "be"],
    correctAnswer: 1,
    explanation: "The subject is 'results' (plural), so we use 'were'. 'of the experiment' is just a prepositional phrase."
  },
  {
    id: 3,
    topic: "Grammar",
    subtopic: "Past Perfect",
    question: "By the time I arrived, she ____ already left.",
    options: ["had", "has", "have", "did"],
    correctAnswer: 0,
    explanation: "Past perfect (had + V3) is used for an action completed before another past action."
  },
  {
    id: 4,
    topic: "Grammar",
    subtopic: "Conditional Type 2",
    question: "If I ____ you, I would study harder.",
    options: ["am", "were", "will be", "had been"],
    correctAnswer: 1,
    explanation: "Conditional type 2 (unreal present): If + past tense (were for all subjects), would + V1."
  },
  {
    id: 5,
    topic: "Grammar",
    subtopic: "Passive Voice",
    question: "The book ____ by a famous author.",
    options: ["write", "written", "was written", "had write"],
    correctAnswer: 2,
    explanation: "Passive voice = to be + past participle (V3). 'was written' is the correct passive form."
  },
  {
    id: 6,
    topic: "Grammar",
    subtopic: "Relative Clause",
    question: "She's the woman ____ I met yesterday.",
    options: ["whom", "which", "where", "whose"],
    correctAnswer: 0,
    explanation: "'Whom' is used as the object of a relative clause referring to people (formal)."
  },
  {
    id: 7,
    topic: "Grammar",
    subtopic: "Present Perfect Continuous",
    question: "I ____ studying for three hours.",
    options: ["have been", "am", "was", "had been"],
    correctAnswer: 0,
    explanation: "Present perfect continuous (have/has been + V-ing) is used for actions that started in the past and continue now."
  },
  {
    id: 8,
    topic: "Grammar",
    subtopic: "Passive Voice - Future",
    question: "\"They will finish the project by tomorrow.\" Passive form is...",
    options: ["The project will be finishing by tomorrow.", "The project finishes tomorrow.", "The project will be finished by tomorrow.", "The project is finished tomorrow."],
    correctAnswer: 2,
    explanation: "Future passive: will be + V3. 'will be finished' is correct."
  },
  {
    id: 9,
    topic: "Grammar",
    subtopic: "Wish Clause",
    question: "\"I wish I ____ more time to study.\"",
    options: ["have", "had", "will have", "would have"],
    correctAnswer: 1,
    explanation: "'Wish' + past tense expresses a desire for something that is not currently true. 'I wish I had' is correct."
  },
  {
    id: 10,
    topic: "Grammar",
    subtopic: "Comparative Clause",
    question: "\"The more you practice, ____ you become.\"",
    options: ["the better", "better", "the best", "best"],
    correctAnswer: 0,
    explanation: "The parallel comparative structure is 'The more..., the more/better/faster...'. 'The better' is correct."
  },
  {
    id: 11,
    topic: "Grammar",
    subtopic: "Gerund vs Infinitive",
    question: "She enjoys ____ novels in her free time.",
    options: ["read", "to read", "reading", "to reading"],
    correctAnswer: 2,
    explanation: "'Enjoy' is always followed by a gerund (V-ing). 'She enjoys reading' is correct."
  },
  {
    id: 12,
    topic: "Grammar",
    subtopic: "Reported Speech",
    question: "He said, \"I am studying.\" → He said that he ____ studying.",
    options: ["is", "was", "were", "had been"],
    correctAnswer: 1,
    explanation: "In reported speech, present continuous becomes past continuous. 'am studying' → 'was studying'."
  },

  // ===== VOCABULARY (13-22) =====
  {
    id: 13,
    topic: "Vocabulary",
    subtopic: "Synonym",
    question: "What is the synonym of 'analyze'?",
    options: ["ignore", "examine", "create", "simplify"],
    correctAnswer: 1,
    explanation: "'Analyze' means to study or examine something carefully. 'Examine' is its closest synonym."
  },
  {
    id: 14,
    topic: "Vocabulary",
    subtopic: "Antonym",
    question: "What is the antonym of 'ambiguous'?",
    options: ["clear", "vague", "uncertain", "complex"],
    correctAnswer: 0,
    explanation: "'Ambiguous' means unclear or having multiple meanings. Its antonym is 'clear' or 'unambiguous'."
  },
  {
    id: 15,
    topic: "Vocabulary",
    subtopic: "Academic Vocabulary",
    question: "The word 'hypothesis' means...",
    options: ["a proven theory", "a proposed explanation", "an experiment", "a conclusion"],
    correctAnswer: 1,
    explanation: "A 'hypothesis' is a proposed explanation made on the basis of limited evidence."
  },
  {
    id: 16,
    topic: "Vocabulary",
    subtopic: "Academic Vocabulary",
    question: "The word 'ubiquitous' means...",
    options: ["rare and unique", "very important", "found everywhere", "quickly changing"],
    correctAnswer: 2,
    explanation: "'Ubiquitous' means present, appearing, or found everywhere."
  },
  {
    id: 17,
    topic: "Vocabulary",
    subtopic: "Academic Vocabulary",
    question: "The word 'elucidate' means...",
    options: ["to confuse", "to explain clearly", "to eliminate", "to evaluate"],
    correctAnswer: 1,
    explanation: "'Elucidate' means to make something clear; to explain it in an easy-to-understand way."
  },
  {
    id: 18,
    topic: "Vocabulary",
    subtopic: "Word Formation",
    question: "The noun form of 'analyze' is...",
    options: ["analytical", "analysis", "analyzer", "analyzation"],
    correctAnswer: 1,
    explanation: "The standard noun form of 'analyze' is 'analysis'. 'Analytical' is an adjective."
  },
  {
    id: 19,
    topic: "Vocabulary",
    subtopic: "Collocation",
    question: "Which phrase is correct?",
    options: ["make a decision", "do a decision", "take a decision (AmE)", "have a decision"],
    correctAnswer: 0,
    explanation: "'Make a decision' is the standard English collocation. 'Take a decision' is British but less common."
  },
  {
    id: 20,
    topic: "Vocabulary",
    subtopic: "Synonym",
    question: "What is the synonym of 'significant'?",
    options: ["trivial", "important", "simple", "minor"],
    correctAnswer: 1,
    explanation: "'Significant' means important or notable. 'Important' is its closest synonym."
  },
  {
    id: 21,
    topic: "Vocabulary",
    subtopic: "Antonym",
    question: "What is the antonym of 'expand'?",
    options: ["enlarge", "grow", "contract", "develop"],
    correctAnswer: 2,
    explanation: "'Expand' means to grow bigger. 'Contract' means to become smaller — the opposite."
  },
  {
    id: 22,
    topic: "Vocabulary",
    subtopic: "Context Clue",
    question: "\"The professor's lecture was so convoluted that most students couldn't follow it.\" The word 'convoluted' means...",
    options: ["simple", "interesting", "complicated", "boring"],
    correctAnswer: 2,
    explanation: "The context clue 'couldn't follow it' suggests complexity. 'Convoluted' means extremely complex and difficult to follow."
  },

  // ===== READING (23-30) =====
  {
    id: 23,
    topic: "Reading",
    subtopic: "Main Idea",
    question: "Read: \"Climate change is one of the most pressing issues of our time. Rising temperatures, melting ice caps, and extreme weather events are becoming more frequent. Scientists warn that immediate action is needed to prevent catastrophic outcomes.\"\n\nThe main idea of the passage is...",
    options: ["Ice caps are melting rapidly.", "Climate change is a serious issue requiring immediate action.", "Scientists study weather patterns.", "Temperatures are rising globally."],
    correctAnswer: 1,
    explanation: "The main idea encompasses the entire passage — climate change is critical and needs urgent action."
  },
  {
    id: 24,
    topic: "Reading",
    subtopic: "Inference",
    question: "Read: \"Despite studying extensively, Maria barely passed the qualifying exam. She spent the next month reviewing her weakest areas before taking it again.\"\n\nWhat can be inferred about Maria?",
    options: ["Maria gave up after failing.", "Maria is determined to improve and succeed.", "The exam was too easy.", "Maria does not study effectively."],
    correctAnswer: 1,
    explanation: "Maria's action of reviewing and retaking the exam shows determination."
  },
  {
    id: 25,
    topic: "Reading",
    subtopic: "Vocabulary in Context",
    question: "\"The new policy was designed to diminish the gap between wealthy and poor communities.\"\n\nThe word 'diminish' means...",
    options: ["decrease", "increase", "maintain", "investigate"],
    correctAnswer: 0,
    explanation: "'Diminish' means to make or become smaller."
  },
  {
    id: 26,
    topic: "Reading",
    subtopic: "Author's Purpose",
    question: "Read: \"Regular physical exercise has been proven to reduce the risk of heart disease by up to 35%. Experts recommend at least 150 minutes of moderate activity per week.\"\n\nThe author's purpose is to...",
    options: ["entertain readers.", "persuade people to buy gym memberships.", "inform readers about the benefits of exercise.", "criticize inactive lifestyles."],
    correctAnswer: 2,
    explanation: "The passage presents factual information about exercise. The purpose is to inform."
  },
  {
    id: 27,
    topic: "Reading",
    subtopic: "Detail",
    question: "Read: \"The Industrial Revolution began in Britain in the late 18th century. It was marked by the transition from hand production to machine manufacturing, new chemical processes, and the use of steam power.\"\n\nAccording to the passage, the Industrial Revolution...",
    options: ["started in America.", "began in the 17th century.", "involved a shift to machine manufacturing.", "was about digital technology."],
    correctAnswer: 2,
    explanation: "The passage directly states 'the transition from hand production to machine manufacturing'."
  },
  {
    id: 28,
    topic: "Reading",
    subtopic: "Reference",
    question: "Read: \"The researchers published their findings in a respected journal. They concluded that further studies were necessary.\"\n\nThe word 'They' refers to...",
    options: ["the findings", "the researchers", "the journal", "the studies"],
    correctAnswer: 1,
    explanation: "'They' is a pronoun referring back to 'the researchers' — the people who concluded."
  },
  {
    id: 29,
    topic: "Reading",
    subtopic: "Tone",
    question: "Read: \"While some argue that AI will eliminate jobs, evidence suggests it creates new opportunities. A balanced perspective is essential.\"\n\nThe tone of the passage is...",
    options: ["alarming", "sarcastic", "objective and balanced", "pessimistic"],
    correctAnswer: 2,
    explanation: "Words like 'balanced perspective' and presenting both sides indicate an objective tone."
  },
  {
    id: 30,
    topic: "Reading",
    subtopic: "Inference",
    question: "Read: \"The library was empty, the lights were dimmed, and a single book lay open on the table. A cold cup of coffee sat beside it.\"\n\nWhat can be inferred?",
    options: ["The library just opened.", "Someone left in a hurry.", "The library is always empty.", "Coffee is not allowed."],
    correctAnswer: 1,
    explanation: "The open book and cold coffee suggest someone was there but left unexpectedly."
  },

  // ===== STRUCTURE & WRITTEN EXPRESSION (31-40) =====
  {
    id: 31,
    topic: "Structure",
    subtopic: "Neither...nor",
    question: "\"Neither the teacher nor the students ____ present.\"",
    options: ["was", "were", "is", "are"],
    correctAnswer: 1,
    explanation: "With 'neither...nor', the verb agrees with the closest subject. 'students' (plural) → 'were'."
  },
  {
    id: 32,
    topic: "Structure",
    subtopic: "Inversion",
    question: "\"Hardly ____ arrived when the meeting started.\"",
    options: ["he had", "had he", "he has", "has he"],
    correctAnswer: 1,
    explanation: "After 'Hardly', we use inversion (auxiliary + subject). 'Hardly had he' is correct."
  },
  {
    id: 33,
    topic: "Structure",
    subtopic: "Collective Noun",
    question: "\"The committee ____ made their decision.\"",
    options: ["has", "have", "had", "having"],
    correctAnswer: 0,
    explanation: "In American English, collective nouns take singular verbs. 'The committee has' is correct."
  },
  {
    id: 34,
    topic: "Structure",
    subtopic: "Concession",
    question: "\"____ studying hard, she failed the exam.\"",
    options: ["Although", "Despite", "However", "Because"],
    correctAnswer: 1,
    explanation: "'Despite' is followed by a noun/gerund phrase. 'Although' would need a clause: 'Although she studied hard'."
  },
  {
    id: 35,
    topic: "Structure",
    subtopic: "Subjunctive",
    question: "\"He insisted that she ____ the truth.\"",
    options: ["tell", "tells", "told", "telling"],
    correctAnswer: 0,
    explanation: "After 'insist/suggest/recommend', the subjunctive uses the base form (V1)."
  },
  {
    id: 36,
    topic: "Structure",
    subtopic: "Cleft Sentence",
    question: "\"It was she who ____ the research.\"",
    options: ["conducted", "conducting", "had conduct", "conducts"],
    correctAnswer: 0,
    explanation: "In a cleft sentence, the verb in the relative clause is in past simple: 'conducted'."
  },
  {
    id: 37,
    topic: "Structure",
    subtopic: "Parallel Structure",
    question: "\"She likes swimming, jogging, and ____ in the park.\"",
    options: ["to cycle", "cycling", "cycles", "cycled"],
    correctAnswer: 1,
    explanation: "Parallel structure: swimming, jogging, and cycling (all gerund -ing forms)."
  },
  {
    id: 38,
    topic: "Structure",
    subtopic: "Modal Verb",
    question: "\"You ____ have told me earlier about the deadline.\"",
    options: ["should", "would", "can", "may"],
    correctAnswer: 0,
    explanation: "'Should have + V3' expresses regret or criticism about a past action not done."
  },
  {
    id: 39,
    topic: "Structure",
    subtopic: "Article Usage",
    question: "\"____ Nile is the longest river in Africa.\"",
    options: ["A", "An", "The", "(no article)"],
    correctAnswer: 2,
    explanation: "'The' is used before specific rivers, oceans, and geographic features. 'The Nile'."
  },
  {
    id: 40,
    topic: "Structure",
    subtopic: "Quantifier",
    question: "\"There isn't ____ milk left in the fridge.\"",
    options: ["some", "many", "much", "few"],
    correctAnswer: 2,
    explanation: "'Much' is used with uncountable nouns (milk) in negative sentences. 'Many' is for countable nouns."
  },
]

// Utility: get questions by topic
export const getEnglishByTopic = (topic) => englishQuestions.filter(q => q.topic === topic)
