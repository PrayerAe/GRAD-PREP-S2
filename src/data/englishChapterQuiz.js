// Quiz per chapter English — 5 soal per bab
export const englishChapterQuiz = {
  grammar: [
    {
      id: 'eg1',
      question: "\"She ____ to the library every Saturday.\"",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: 1,
      explanation: "Subject 'She' (3rd person singular) takes V1+s in simple present. 'She goes'."
    },
    {
      id: 'eg2',
      question: "\"If it ____ tomorrow, we will cancel the trip.\"",
      options: ["will rain", "rains", "rained", "would rain"],
      correctAnswer: 1,
      explanation: "Conditional Type 1: If + simple present, will + V1. 'If it rains' is correct."
    },
    {
      id: 'eg3',
      question: "\"The letter ____ yesterday by the secretary.\"",
      options: ["was typed", "is typed", "typed", "has typed"],
      correctAnswer: 0,
      explanation: "Passive past simple: was/were + V3. 'was typed' is correct."
    },
    {
      id: 'eg4',
      question: "\"I have lived here ____ 2015.\"",
      options: ["for", "since", "from", "during"],
      correctAnswer: 1,
      explanation: "'Since' is used with a specific point in time. 'For' is used with a duration."
    },
    {
      id: 'eg5',
      question: "\"This is the house ____ I was born.\"",
      options: ["which", "where", "that", "whom"],
      correctAnswer: 1,
      explanation: "'Where' is used for places in relative clauses. 'The house where I was born.'"
    },
  ],

  reading: [
    {
      id: 'er1',
      question: "Read: \"Deforestation is destroying biodiversity at an alarming rate. Over 80% of the world's land-based species live in forests. When trees are cut down, these species lose their habitats.\"\n\nThe main idea is...",
      options: ["Trees are important for oxygen.", "Deforestation threatens biodiversity and animal habitats.", "80% of species live in water.", "Forests are being replanted."],
      correctAnswer: 1,
      explanation: "The passage focuses on how deforestation destroys habitats and threatens biodiversity."
    },
    {
      id: 'er2',
      question: "Read: \"The study revealed that students who sleep 8 hours perform 20% better on exams than those who sleep only 5 hours.\"\n\nWhat can be inferred?",
      options: ["All students sleep 8 hours.", "Sleep duration affects academic performance.", "5 hours of sleep is sufficient.", "The study is unreliable."],
      correctAnswer: 1,
      explanation: "The correlation between sleep hours and exam performance implies sleep affects academics."
    },
    {
      id: 'er3',
      question: "\"The novel was so captivating that I couldn't put it down.\"\n\nThe word 'captivating' means...",
      options: ["boring", "confusing", "fascinating", "long"],
      correctAnswer: 2,
      explanation: "Context clue: 'couldn't put it down' suggests great interest. 'Captivating' = fascinating."
    },
    {
      id: 'er4',
      question: "Read: \"Although solar energy is becoming cheaper, many countries still rely heavily on fossil fuels due to existing infrastructure.\"\n\nWhat does the passage suggest?",
      options: ["Solar energy is too expensive.", "Fossil fuels are renewable.", "Infrastructure is a barrier to adopting solar energy.", "All countries use solar energy."],
      correctAnswer: 2,
      explanation: "'Due to existing infrastructure' indicates it's a barrier to transitioning to solar."
    },
    {
      id: 'er5',
      question: "Read: \"The professor emphasized the importance of critical thinking, stating that memorization alone is insufficient for academic success.\"\n\nThe professor believes that...",
      options: ["Memorization is the key to success.", "Critical thinking is more important than just memorizing.", "Students should not memorize anything.", "Academic success is easy."],
      correctAnswer: 1,
      explanation: "'Memorization alone is insufficient' implies critical thinking is also needed — more important."
    },
  ],

  vocabulary: [
    {
      id: 'ev1',
      question: "The word 'preliminary' means...",
      options: ["final", "initial or introductory", "important", "secondary"],
      correctAnswer: 1,
      explanation: "'Preliminary' means preceding or done in preparation for the main event. Initial/introductory."
    },
    {
      id: 'ev2',
      question: "What is the synonym of 'enhance'?",
      options: ["reduce", "improve", "destroy", "maintain"],
      correctAnswer: 1,
      explanation: "'Enhance' means to intensify, increase, or improve. 'Improve' is its synonym."
    },
    {
      id: 'ev3',
      question: "What is the antonym of 'temporary'?",
      options: ["permanent", "short", "brief", "instant"],
      correctAnswer: 0,
      explanation: "'Temporary' means lasting for a short time. 'Permanent' means lasting forever — the opposite."
    },
    {
      id: 'ev4',
      question: "The prefix 're-' in 'reconstruct' means...",
      options: ["before", "against", "again", "not"],
      correctAnswer: 2,
      explanation: "The prefix 're-' means again or back. 'Reconstruct' = construct again."
    },
    {
      id: 'ev5',
      question: "\"The government implemented a comprehensive plan to address the crisis.\" The word 'comprehensive' means...",
      options: ["incomplete", "thorough and complete", "simple", "expensive"],
      correctAnswer: 1,
      explanation: "'Comprehensive' means complete, including all or nearly all elements. Thorough."
    },
  ],

  structure: [
    {
      id: 'es1',
      question: "\"Not only ____ win the competition, but she also set a new record.\"",
      options: ["she did", "did she", "she does", "does she"],
      correctAnswer: 1,
      explanation: "After 'Not only' at the start of a sentence, we use inversion: 'did she'."
    },
    {
      id: 'es2',
      question: "\"The manager suggested that every employee ____ the training.\"",
      options: ["attends", "attend", "attending", "will attend"],
      correctAnswer: 1,
      explanation: "After 'suggest', subjunctive mood: base form (V1) regardless of subject."
    },
    {
      id: 'es3',
      question: "\"____ the rain, the match continued.\"",
      options: ["Although", "Despite", "However", "Because of"],
      correctAnswer: 1,
      explanation: "'Despite' + noun phrase. 'Although' needs a clause. 'Despite the rain' is correct."
    },
    {
      id: 'es4',
      question: "\"She speaks English, French, and ____.\"",
      options: ["Germany", "German", "in German", "the German"],
      correctAnswer: 1,
      explanation: "Parallel structure with languages: English, French, and German (all adjective/noun forms)."
    },
    {
      id: 'es5',
      question: "\"Each of the students ____ responsible for their own project.\"",
      options: ["are", "is", "were", "have been"],
      correctAnswer: 1,
      explanation: "'Each' is a singular indefinite pronoun → takes singular verb 'is'."
    },
  ],
}
