// TOEFL-like questions for S2 entrance exam preparation
export const toeflQuestions = [
  // ===== STRUCTURE (1-10) =====
  {
    id: 1,
    topic: "Structure",
    subtopic: "Subject-Verb Agreement",
    question: "The number of students who ____ enrolled in the graduate program has increased significantly.",
    options: ["have", "has", "are", "were"],
    correctAnswer: 0,
    explanation: "'Who' refers to 'students' (plural), so the verb in the relative clause is 'have'. Note: 'The number of' takes singular 'has increased'."
  },
  {
    id: 2,
    topic: "Structure",
    subtopic: "Reduced Clause",
    question: "____ in 1945, the United Nations has played a crucial role in international diplomacy.",
    options: ["Established", "Establishing", "Having established", "To establish"],
    correctAnswer: 0,
    explanation: "Reduced passive clause: 'Established in 1945' = 'Having been established in 1945'. The subject (UN) received the action."
  },
  {
    id: 3,
    topic: "Structure",
    subtopic: "Noun Clause",
    question: "____ the professor discussed in the lecture was beyond our current understanding.",
    options: ["That", "What", "Which", "How"],
    correctAnswer: 1,
    explanation: "'What' introduces a noun clause acting as the subject. 'What the professor discussed' = 'The thing that the professor discussed'."
  },
  {
    id: 4,
    topic: "Structure",
    subtopic: "Subjunctive",
    question: "The dean recommended that every thesis ____ submitted before the deadline.",
    options: ["be", "is", "was", "were"],
    correctAnswer: 0,
    explanation: "After 'recommend/suggest/insist', use subjunctive: base form 'be' regardless of subject."
  },
  {
    id: 5,
    topic: "Structure",
    subtopic: "Correlative Conjunction",
    question: "Not only ____ the research methodology, but she also revised the entire literature review.",
    options: ["she changed", "did she change", "she did change", "changed she"],
    correctAnswer: 1,
    explanation: "'Not only' at the start of a clause triggers inversion: auxiliary + subject + verb."
  },
  {
    id: 6,
    topic: "Structure",
    subtopic: "Adjective Clause",
    question: "The university, ____ was founded in 1850, has produced many Nobel laureates.",
    options: ["that", "which", "where", "whom"],
    correctAnswer: 1,
    explanation: "Non-restrictive (with commas) adjective clauses use 'which', not 'that'."
  },
  {
    id: 7,
    topic: "Structure",
    subtopic: "Parallel Structure",
    question: "The research involves collecting data, ____, and interpreting the results.",
    options: ["analysis of data", "to analyze data", "analyzing data", "data analysis"],
    correctAnswer: 2,
    explanation: "Parallel structure: collecting, analyzing, interpreting (all gerund forms)."
  },
  {
    id: 8,
    topic: "Structure",
    subtopic: "Conditional",
    question: "Had the researchers ____ more participants, the study would have been more reliable.",
    options: ["include", "included", "including", "to include"],
    correctAnswer: 1,
    explanation: "Inverted conditional type 3: Had + S + V3 = If S had V3. 'Had the researchers included' = 'If the researchers had included'."
  },
  {
    id: 9,
    topic: "Structure",
    subtopic: "Gerund vs Infinitive",
    question: "The committee postponed ____ a decision until all members were present.",
    options: ["make", "to make", "making", "made"],
    correctAnswer: 2,
    explanation: "'Postpone' is always followed by a gerund. 'Postponed making' is correct."
  },
  {
    id: 10,
    topic: "Structure",
    subtopic: "Appositive",
    question: "Dr. Sari, ____, has published over fifty papers on molecular biology.",
    options: ["a renowned researcher at ITB", "who a renowned researcher", "is a renowned researcher", "being renowned researcher"],
    correctAnswer: 0,
    explanation: "An appositive is a noun phrase that renames the subject. No verb needed: 'Dr. Sari, a renowned researcher at ITB, has...'"
  },

  // ===== READING COMPREHENSION (11-20) =====
  {
    id: 11,
    topic: "Reading",
    subtopic: "Main Idea",
    question: "Read: \"Photosynthesis is the process by which green plants convert sunlight into chemical energy. Chlorophyll in the leaves absorbs light energy, which is then used to transform carbon dioxide and water into glucose and oxygen. This process is fundamental to life on Earth, as it produces the oxygen we breathe and forms the base of most food chains.\"\n\nWhat is the main idea?",
    options: ["Chlorophyll absorbs light energy.", "Photosynthesis is essential for life as it converts sunlight to energy.", "Plants produce oxygen.", "Food chains depend on glucose."],
    correctAnswer: 1,
    explanation: "The passage explains what photosynthesis is and why it's fundamental to life — that's the main idea."
  },
  {
    id: 12,
    topic: "Reading",
    subtopic: "Detail",
    question: "Read: \"The peer review process in academic publishing serves as quality control. Submitted manuscripts are evaluated by experts in the field who assess the methodology, validity of results, and significance of findings. Reviewers may recommend acceptance, revision, or rejection.\"\n\nAccording to the passage, peer reviewers assess all of the following EXCEPT...",
    options: ["methodology", "validity of results", "the author's credentials", "significance of findings"],
    correctAnswer: 2,
    explanation: "The passage mentions methodology, validity, and significance. The author's credentials are NOT mentioned as something reviewers assess."
  },
  {
    id: 13,
    topic: "Reading",
    subtopic: "Vocabulary in Context",
    question: "\"The unprecedented growth of technology has fundamentally altered how we communicate.\"\n\nThe word 'unprecedented' most closely means...",
    options: ["gradual", "never before experienced", "controversial", "expected"],
    correctAnswer: 1,
    explanation: "'Unprecedented' means never done or known before. 'Un-' (not) + 'precedented' (having a precedent/previous example)."
  },
  {
    id: 14,
    topic: "Reading",
    subtopic: "Inference",
    question: "Read: \"While developed nations have largely transitioned to renewable energy sources, many developing countries continue to rely on coal and oil. Economic constraints and lack of infrastructure make the shift challenging, though international aid programs are beginning to address these barriers.\"\n\nIt can be inferred that...",
    options: ["Developing countries prefer coal over renewables.", "Financial limitations hinder the adoption of renewable energy.", "International aid has solved the energy problem.", "Developed nations no longer use fossil fuels."],
    correctAnswer: 1,
    explanation: "'Economic constraints make the shift challenging' implies financial limitations are a key barrier."
  },
  {
    id: 15,
    topic: "Reading",
    subtopic: "Purpose",
    question: "Read: \"A recent meta-analysis of 47 studies involving over 12,000 participants found that regular meditation reduces anxiety levels by 38%. The researchers controlled for variables such as age, gender, and pre-existing conditions.\"\n\nThe author mentions the controlled variables in order to...",
    options: ["criticize the research methodology.", "demonstrate the study's scientific rigor.", "suggest that meditation doesn't work for everyone.", "list the participants' demographics."],
    correctAnswer: 1,
    explanation: "Mentioning controlled variables shows the study was scientifically rigorous and the results are reliable."
  },
  {
    id: 16,
    topic: "Reading",
    subtopic: "Reference",
    question: "Read: \"Coral reefs support approximately 25% of all marine species. However, rising ocean temperatures are causing widespread bleaching events. Scientists estimate that if current trends continue, these ecosystems could disappear within decades.\"\n\nThe phrase 'these ecosystems' refers to...",
    options: ["marine species", "ocean temperatures", "coral reefs", "bleaching events"],
    correctAnswer: 2,
    explanation: "'These ecosystems' refers back to 'coral reefs' — the ecosystems being discussed throughout."
  },
  {
    id: 17,
    topic: "Reading",
    subtopic: "Tone",
    question: "Read: \"Despite the promising results of the initial trial, it would be premature to declare the treatment a breakthrough. Further large-scale studies are necessary before any definitive conclusions can be drawn.\"\n\nThe author's tone is best described as...",
    options: ["enthusiastic", "dismissive", "cautiously optimistic", "indifferent"],
    correctAnswer: 2,
    explanation: "'Promising results' shows some optimism, but 'premature' and 'further studies necessary' show caution."
  },
  {
    id: 18,
    topic: "Reading",
    subtopic: "Organization",
    question: "Read: \"First, the raw data is collected through surveys. Next, statistical analysis is performed to identify patterns. Finally, the findings are compiled into a comprehensive report.\"\n\nThe passage is organized by...",
    options: ["comparison and contrast", "cause and effect", "chronological/sequential order", "problem and solution"],
    correctAnswer: 2,
    explanation: "Signal words 'First', 'Next', 'Finally' indicate chronological/sequential organization."
  },
  {
    id: 19,
    topic: "Reading",
    subtopic: "Inference",
    question: "Read: \"The professor's office hours were always packed. Students would arrive thirty minutes early just to secure a spot. Some even brought their lunch, knowing they might wait for over an hour.\"\n\nWhat can be inferred about the professor?",
    options: ["The professor is strict.", "The professor is highly sought after for guidance.", "The professor frequently cancels classes.", "The office is too small."],
    correctAnswer: 1,
    explanation: "Students arriving early and waiting long suggests the professor is popular and valued for academic guidance."
  },
  {
    id: 20,
    topic: "Reading",
    subtopic: "Vocabulary in Context",
    question: "\"The committee scrutinized every aspect of the proposal before granting approval.\"\n\nThe word 'scrutinized' means...",
    options: ["ignored", "examined carefully", "briefly reviewed", "rejected"],
    correctAnswer: 1,
    explanation: "'Scrutinize' means to examine or inspect closely and thoroughly."
  },

  // ===== WRITTEN EXPRESSION / ERROR RECOGNITION (21-30) =====
  {
    id: 21,
    topic: "Written Expression",
    subtopic: "Word Form",
    question: "Choose the correct sentence:",
    options: [
      "The researcher's finding was significance.",
      "The researcher's finding was significant.",
      "The researcher's finding was significants.",
      "The researcher's finding was significanted."
    ],
    correctAnswer: 1,
    explanation: "After 'was' (linking verb), we need an adjective: 'significant'. 'Significance' is a noun."
  },
  {
    id: 22,
    topic: "Written Expression",
    subtopic: "Pronoun Agreement",
    question: "Choose the correct sentence:",
    options: [
      "Each student must submit their thesis on time.",
      "Each student must submit his or her thesis on time.",
      "Each students must submit their thesis on time.",
      "Each student must submit its thesis on time."
    ],
    correctAnswer: 1,
    explanation: "In formal/academic English, 'each' (singular) takes 'his or her'. Option A is increasingly accepted but B is traditionally correct for TOEFL."
  },
  {
    id: 23,
    topic: "Written Expression",
    subtopic: "Comparative",
    question: "The experimental group performed ____ than the control group.",
    options: ["more better", "more well", "better", "more good"],
    correctAnswer: 2,
    explanation: "'Better' is the comparative form of both 'good' and 'well'. Never use 'more better' (double comparative)."
  },
  {
    id: 24,
    topic: "Written Expression",
    subtopic: "Article",
    question: "Choose the correct sentence:",
    options: [
      "She is studying the mathematics at university.",
      "She is studying mathematics at the university.",
      "She is studying a mathematics at a university.",
      "She is studying the mathematics at the university."
    ],
    correctAnswer: 1,
    explanation: "Academic subjects (mathematics) don't take articles. 'The university' (specific) is correct."
  },
  {
    id: 25,
    topic: "Written Expression",
    subtopic: "Preposition",
    question: "The results are consistent ____ previous findings in the field.",
    options: ["to", "with", "for", "at"],
    correctAnswer: 1,
    explanation: "'Consistent with' is the correct collocation in academic English."
  },
  {
    id: 26,
    topic: "Written Expression",
    subtopic: "Verb Tense",
    question: "By the time the professor arrives, the students ____ for twenty minutes.",
    options: ["will wait", "will have been waiting", "waited", "have waited"],
    correctAnswer: 1,
    explanation: "Future perfect continuous: 'will have been waiting' for an action that will be ongoing until a future point."
  },
  {
    id: 27,
    topic: "Written Expression",
    subtopic: "Causative",
    question: "The supervisor had the assistant ____ the data twice.",
    options: ["checked", "check", "to check", "checking"],
    correctAnswer: 1,
    explanation: "Causative 'had' + person + base form: 'had the assistant check'. If using passive: 'had the data checked'."
  },
  {
    id: 28,
    topic: "Written Expression",
    subtopic: "Passive vs Active",
    question: "The experiment ____ by a team of international researchers.",
    options: ["conducted", "was conducted", "is conducting", "has conducting"],
    correctAnswer: 1,
    explanation: "Passive voice is needed because the experiment receives the action. 'Was conducted by' is correct."
  },
  {
    id: 29,
    topic: "Written Expression",
    subtopic: "Conjunction",
    question: "The hypothesis was not supported; ____, the researchers proposed an alternative explanation.",
    options: ["moreover", "therefore", "however", "furthermore"],
    correctAnswer: 1,
    explanation: "'Therefore' shows cause-and-effect: hypothesis wasn't supported → researchers proposed alternative. 'However' shows contrast."
  },
  {
    id: 30,
    topic: "Written Expression",
    subtopic: "Modal Perfect",
    question: "The data anomaly ____ detected earlier if the equipment had been properly calibrated.",
    options: ["would be", "could have been", "should be", "will have been"],
    correctAnswer: 1,
    explanation: "Conditional type 3 passive: 'could have been detected' (past possibility that didn't happen)."
  },
]

export const getToeflByTopic = (topic) => toeflQuestions.filter(q => q.topic === topic)
