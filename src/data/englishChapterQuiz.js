// Bank soal English — berbasis pola ujian masuk S2 (TOEFL-like/SIMAK UI/UM UGM/EPT)
// 20 soal per bab, sistem random 5 soal setiap sesi
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
    {
      id: 'eg6',
      question: "\"By the time you arrive, I ____ the report.\"",
      options: ["will finish", "will have finished", "finished", "am finishing"],
      correctAnswer: 1,
      explanation: "Future perfect: 'will have + V3' for actions completed before a future time point."
    },
    {
      id: 'eg7',
      question: "\"She ____ working on her thesis when I called her.\"",
      options: ["is", "was", "has been", "will be"],
      correctAnswer: 1,
      explanation: "Past continuous: was/were + V-ing for ongoing action interrupted by another past action."
    },
    {
      id: 'eg8',
      question: "\"If I ____ rich, I would travel around the world.\"",
      options: ["am", "was", "were", "be"],
      correctAnswer: 2,
      explanation: "Conditional Type 2 (unreal present): If + were (for all subjects). 'If I were rich'."
    },
    {
      id: 'eg9',
      question: "\"The students ____ to submit their papers by Friday.\"",
      options: ["require", "are required", "requiring", "has required"],
      correctAnswer: 1,
      explanation: "Passive voice: 'are required' (subject receives the action). Students are required to submit."
    },
    {
      id: 'eg10',
      question: "\"Neither the teacher nor the students ____ present at the meeting.\"",
      options: ["was", "were", "is", "has been"],
      correctAnswer: 1,
      explanation: "With 'neither...nor', the verb agrees with the nearest subject ('students' = plural → 'were')."
    },
    {
      id: 'eg11',
      question: "\"Had she studied harder, she ____ the exam.\"",
      options: ["would pass", "would have passed", "will pass", "passed"],
      correctAnswer: 1,
      explanation: "Conditional Type 3 (past unreal): Had + V3, would have + V3."
    },
    {
      id: 'eg12',
      question: "\"The news ____ shocking to everyone in the office.\"",
      options: ["are", "is", "were", "have been"],
      correctAnswer: 1,
      explanation: "'News' is an uncountable noun (always singular) → takes 'is'."
    },
    {
      id: 'eg13',
      question: "\"She insisted that he ____ on time for the interview.\"",
      options: ["arrives", "arrive", "arrived", "arriving"],
      correctAnswer: 1,
      explanation: "Subjunctive mood after 'insist/demand/suggest': base form (V1) regardless of subject."
    },
    {
      id: 'eg14',
      question: "\"The research paper, ____ was published last year, received an award.\"",
      options: ["that", "which", "who", "whom"],
      correctAnswer: 1,
      explanation: "Non-restrictive relative clause (with commas) uses 'which' for things, not 'that'."
    },
    {
      id: 'eg15',
      question: "\"I wish I ____ more time to prepare for the presentation.\"",
      options: ["have", "had", "has", "will have"],
      correctAnswer: 1,
      explanation: "'Wish' + past simple for unreal present wishes. 'I wish I had more time.'"
    },
    {
      id: 'eg16',
      question: "\"____ the heavy traffic, we arrived at the conference on time.\"",
      options: ["Although", "Despite", "However", "Because of"],
      correctAnswer: 1,
      explanation: "'Despite' + noun phrase. 'Although' needs a full clause. 'Despite the heavy traffic' is correct."
    },
    {
      id: 'eg17',
      question: "\"The committee ____ not yet reached a decision.\"",
      options: ["have", "has", "are", "is"],
      correctAnswer: 1,
      explanation: "'Committee' as a unit takes singular verb. 'The committee has not yet reached a decision.'"
    },
    {
      id: 'eg18',
      question: "\"It is essential that every student ____ the orientation program.\"",
      options: ["attends", "attend", "attending", "will attend"],
      correctAnswer: 1,
      explanation: "Subjunctive after 'essential/important/necessary that': base form V1."
    },
    {
      id: 'eg19',
      question: "\"She is used to ____ early in the morning.\"",
      options: ["wake", "waking", "woke", "waken"],
      correctAnswer: 1,
      explanation: "'Be used to' + V-ing (gerund). 'She is used to waking early.'"
    },
    {
      id: 'eg20',
      question: "\"No sooner ____ the lecture begun than the fire alarm went off.\"",
      options: ["has", "had", "have", "did"],
      correctAnswer: 1,
      explanation: "'No sooner had...than' uses past perfect with inversion. 'No sooner had the lecture begun...'"
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
    {
      id: 'er6',
      question: "Read: \"Global warming has caused polar ice caps to melt at unprecedented rates. Scientists predict that sea levels could rise by up to one meter by 2100, potentially displacing millions of coastal residents.\"\n\nThe author's primary purpose is to...",
      options: ["Criticize the government", "Warn about the consequences of global warming", "Promote renewable energy", "Discuss weather patterns"],
      correctAnswer: 1,
      explanation: "The passage presents facts about ice melting and predictions about sea level rise — a warning."
    },
    {
      id: 'er7',
      question: "Read: \"The implementation of universal healthcare would require substantial government funding. However, proponents argue that the long-term savings from preventive care would offset the initial costs.\"\n\nProponents of universal healthcare believe that...",
      options: ["It is too expensive to implement", "Preventive care will reduce costs over time", "The government cannot afford it", "Only wealthy nations should adopt it"],
      correctAnswer: 1,
      explanation: "'Long-term savings from preventive care would offset initial costs' = costs reduced over time."
    },
    {
      id: 'er8',
      question: "Read: \"The Renaissance, which began in Italy in the 14th century, marked a period of renewed interest in classical art, literature, and philosophy. It fundamentally transformed European culture.\"\n\nThe word 'renewed' in this context means...",
      options: ["Replaced", "Revived", "Rejected", "Removed"],
      correctAnswer: 1,
      explanation: "'Renewed interest' means a revival or return of interest in something from the past."
    },
    {
      id: 'er9',
      question: "Read: \"Despite being widely regarded as a genius, Einstein struggled in school as a young boy and was considered a slow learner by some of his teachers.\"\n\nThis passage suggests that...",
      options: ["Einstein was a poor student throughout his life", "Early academic performance does not always predict future success", "Teachers are always wrong about students", "Einstein was not actually intelligent"],
      correctAnswer: 1,
      explanation: "The contrast between 'genius' and 'slow learner' suggests early struggles don't determine future success."
    },
    {
      id: 'er10',
      question: "Read: \"The company's quarterly revenue increased by 15%, but operating costs rose by 22%, resulting in a net decrease in profit margins.\"\n\nWhat can be concluded?",
      options: ["The company is highly profitable", "Revenue growth outpaced cost increases", "Cost increases exceeded revenue growth", "The company should hire more employees"],
      correctAnswer: 2,
      explanation: "Operating costs (22%) grew faster than revenue (15%), leading to decreased profit margins."
    },
    {
      id: 'er11',
      question: "Read: \"Artificial intelligence is transforming healthcare by enabling faster diagnosis, personalized treatment plans, and efficient drug discovery. However, ethical concerns about data privacy and algorithmic bias remain significant challenges.\"\n\nThe author's tone is best described as...",
      options: ["Entirely optimistic", "Cautiously balanced", "Strongly pessimistic", "Indifferent"],
      correctAnswer: 1,
      explanation: "The author presents both benefits and challenges — a balanced, cautious perspective."
    },
    {
      id: 'er12',
      question: "Read: \"The correlation between poverty and educational attainment is well-documented. Children from low-income families are less likely to complete higher education, perpetuating a cycle of disadvantage.\"\n\nThe word 'perpetuating' most closely means...",
      options: ["Breaking", "Continuing", "Creating", "Ending"],
      correctAnswer: 1,
      explanation: "'Perpetuating a cycle' means continuing or maintaining an ongoing pattern."
    },
    {
      id: 'er13',
      question: "Read: \"While traditional classrooms emphasize teacher-led instruction, the flipped classroom model requires students to learn new content at home and practice skills in class.\"\n\nThe flipped classroom differs from traditional classrooms because...",
      options: ["Students don't need teachers", "Instruction and practice are reversed", "Students never go to class", "Teachers prepare more materials"],
      correctAnswer: 1,
      explanation: "In a flipped model, content is learned at home (reversed from traditional) and practice happens in class."
    },
    {
      id: 'er14',
      question: "Read: \"The findings of the longitudinal study suggest that regular physical activity reduces the risk of cognitive decline by approximately 30% in adults over 60.\"\n\nThe study implies that...",
      options: ["Exercise cures cognitive decline", "Physical activity is beneficial only for young people", "Regular exercise may help protect brain function in older adults", "All older adults exercise regularly"],
      correctAnswer: 2,
      explanation: "'Reduces the risk of cognitive decline' in adults over 60 = exercise helps protect brain function."
    },
    {
      id: 'er15',
      question: "Read: \"The author argues that social media has fundamentally altered interpersonal communication, creating both unprecedented connectivity and alarming isolation.\"\n\nThe phrase 'alarming isolation' suggests...",
      options: ["Social media only brings people together", "Despite connection, social media can cause loneliness", "Isolation is not a real problem", "Everyone uses social media equally"],
      correctAnswer: 1,
      explanation: "'Unprecedented connectivity AND alarming isolation' — social media creates both connection and loneliness."
    },
    {
      id: 'er16',
      question: "Read: \"Remote sensing technology has revolutionized environmental monitoring. Satellites can now detect changes in forest cover, ocean temperatures, and atmospheric composition in real-time.\"\n\nThe primary advantage of remote sensing described here is...",
      options: ["It is cheaper than other methods", "It provides comprehensive real-time environmental data", "It replaces scientists completely", "It only monitors forests"],
      correctAnswer: 1,
      explanation: "The passage emphasizes real-time detection of multiple environmental factors (comprehensive data)."
    },
    {
      id: 'er17',
      question: "Read: \"The placebo effect demonstrates the powerful connection between mind and body. Patients who believe they are receiving treatment often show measurable physiological improvements, even when given an inactive substance.\"\n\nThe passage primarily explains...",
      options: ["Why medicine is unnecessary", "How belief can influence physical health", "That placebos are better than real medicine", "Why doctors lie to patients"],
      correctAnswer: 1,
      explanation: "The passage explains how believing in treatment (mind) causes physical improvements (body)."
    },
    {
      id: 'er18',
      question: "Read: \"Multilingualism offers cognitive benefits beyond communication, including enhanced executive function, improved memory, and delayed onset of dementia.\"\n\nAccording to the passage, speaking multiple languages...",
      options: ["Only helps with communication", "Has no effect on the brain", "Provides cognitive advantages", "Causes confusion"],
      correctAnswer: 2,
      explanation: "'Cognitive benefits beyond communication' = multilingualism provides advantages for brain function."
    },
    {
      id: 'er19',
      question: "Read: \"The genome project, despite costing billions of dollars, has yielded invaluable data that continues to drive breakthroughs in personalized medicine and genetic therapy.\"\n\nThe word 'yielded' means...",
      options: ["Wasted", "Produced", "Destroyed", "Consumed"],
      correctAnswer: 1,
      explanation: "'Yielded invaluable data' — 'yielded' means produced or generated results."
    },
    {
      id: 'er20',
      question: "Read: \"Unlike quantitative research, which relies on numerical data and statistical analysis, qualitative research seeks to understand human behavior through observation, interviews, and case studies.\"\n\nQualitative research is characterized by...",
      options: ["Statistical analysis of numbers", "Understanding behavior through non-numerical methods", "Large sample sizes", "Mathematical formulas"],
      correctAnswer: 1,
      explanation: "Qualitative research uses observation, interviews, and case studies — non-numerical methods."
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
    {
      id: 'ev6',
      question: "The word 'ubiquitous' means...",
      options: ["rare and unique", "present everywhere", "difficult to find", "old-fashioned"],
      correctAnswer: 1,
      explanation: "'Ubiquitous' means found everywhere, omnipresent. E.g., 'Smartphones are ubiquitous.'"
    },
    {
      id: 'ev7',
      question: "What is the synonym of 'meticulous'?",
      options: ["careless", "thorough", "quick", "lazy"],
      correctAnswer: 1,
      explanation: "'Meticulous' means showing great attention to detail. 'Thorough' is its synonym."
    },
    {
      id: 'ev8',
      question: "The word 'ambiguous' means...",
      options: ["clear and definite", "having multiple meanings", "strong and powerful", "small and insignificant"],
      correctAnswer: 1,
      explanation: "'Ambiguous' means open to more than one interpretation; not clear."
    },
    {
      id: 'ev9',
      question: "What is the antonym of 'exacerbate'?",
      options: ["worsen", "alleviate", "complicate", "increase"],
      correctAnswer: 1,
      explanation: "'Exacerbate' means to make worse. 'Alleviate' means to make better — the opposite."
    },
    {
      id: 'ev10',
      question: "The suffix '-ology' in 'methodology' means...",
      options: ["fear of", "study of", "love of", "hatred of"],
      correctAnswer: 1,
      explanation: "'-ology' means the study of. 'Methodology' = study of methods."
    },
    {
      id: 'ev11',
      question: "\"The findings corroborate the initial hypothesis.\" The word 'corroborate' means...",
      options: ["contradict", "confirm", "ignore", "weaken"],
      correctAnswer: 1,
      explanation: "'Corroborate' means to confirm or give support to a statement or theory."
    },
    {
      id: 'ev12',
      question: "What is the meaning of 'pragmatic'?",
      options: ["idealistic and dreamy", "practical and realistic", "emotional and sensitive", "theoretical and abstract"],
      correctAnswer: 1,
      explanation: "'Pragmatic' means dealing with things sensibly and realistically. Practical."
    },
    {
      id: 'ev13',
      question: "The word 'paradigm' is best defined as...",
      options: ["A type of paragraph", "A model or framework", "A mathematical formula", "A historical event"],
      correctAnswer: 1,
      explanation: "'Paradigm' means a typical pattern, model, or framework of thinking."
    },
    {
      id: 'ev14',
      question: "\"The professor's lecture was remarkably lucid.\" The word 'lucid' means...",
      options: ["confusing", "boring", "clear and easy to understand", "long"],
      correctAnswer: 2,
      explanation: "'Lucid' means expressed clearly, easy to understand."
    },
    {
      id: 'ev15',
      question: "What is the synonym of 'prolific'?",
      options: ["unproductive", "productive", "amateur", "slow"],
      correctAnswer: 1,
      explanation: "'Prolific' means producing a lot of something. 'Productive' is its synonym."
    },
    {
      id: 'ev16',
      question: "The word 'empirical' refers to something based on...",
      options: ["Imagination", "Observation and experiment", "Theory alone", "Personal belief"],
      correctAnswer: 1,
      explanation: "'Empirical' means based on observation or experience rather than theory alone."
    },
    {
      id: 'ev17',
      question: "What is the antonym of 'homogeneous'?",
      options: ["similar", "heterogeneous", "uniform", "identical"],
      correctAnswer: 1,
      explanation: "'Homogeneous' means all the same. 'Heterogeneous' means diverse — the opposite."
    },
    {
      id: 'ev18',
      question: "\"The new policy was implemented to mitigate the effects of climate change.\" The word 'mitigate' means...",
      options: ["increase", "eliminate completely", "lessen or reduce", "ignore"],
      correctAnswer: 2,
      explanation: "'Mitigate' means to make less severe, serious, or painful. To reduce."
    },
    {
      id: 'ev19',
      question: "The word 'juxtapose' means...",
      options: ["To separate things", "To place side by side for comparison", "To destroy completely", "To combine into one"],
      correctAnswer: 1,
      explanation: "'Juxtapose' means to place close together for comparison or contrast."
    },
    {
      id: 'ev20',
      question: "\"His argument was cogent and well-structured.\" The word 'cogent' means...",
      options: ["weak", "confusing", "clear and convincing", "aggressive"],
      correctAnswer: 2,
      explanation: "'Cogent' means clear, logical, and convincing."
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
    {
      id: 'es6',
      question: "\"____ had the meeting started when the power went out.\"",
      options: ["Hardly", "Rarely", "Since", "Although"],
      correctAnswer: 0,
      explanation: "'Hardly had...when' is a standard structure with inversion showing something happened immediately."
    },
    {
      id: 'es7',
      question: "\"The report, together with the appendices, ____ submitted yesterday.\"",
      options: ["were", "was", "are", "have been"],
      correctAnswer: 1,
      explanation: "'Together with' does not change the subject. 'The report' (singular) → 'was submitted'."
    },
    {
      id: 'es8',
      question: "\"She is interested in ____ a master's degree in linguistics.\"",
      options: ["pursue", "pursuing", "pursued", "to pursuing"],
      correctAnswer: 1,
      explanation: "'Interested in' + gerund (V-ing). 'Interested in pursuing a master's degree.'"
    },
    {
      id: 'es9',
      question: "\"____ to the conference, she gained valuable networking opportunities.\"",
      options: ["Having gone", "Gone", "She went", "To going"],
      correctAnswer: 0,
      explanation: "Participial phrase: 'Having gone' (perfect participle) modifies the subject 'she'."
    },
    {
      id: 'es10',
      question: "\"It is imperative that the data ____ analyzed before the deadline.\"",
      options: ["is", "be", "are", "being"],
      correctAnswer: 1,
      explanation: "'It is imperative that' + base form (subjunctive). 'That the data be analyzed.'"
    },
    {
      id: 'es11',
      question: "\"The more you practice, ____ you will become.\"",
      options: ["the better", "better", "the best", "more better"],
      correctAnswer: 0,
      explanation: "Correlative comparative: 'The more...the better/the more.' 'The more...the better.'"
    },
    {
      id: 'es12',
      question: "\"She not only excels in academics ____ in sports.\"",
      options: ["and also", "but also", "or also", "as also"],
      correctAnswer: 1,
      explanation: "'Not only...but also' is a correlative conjunction pair."
    },
    {
      id: 'es13',
      question: "\"____ his lack of experience, he was offered the position.\"",
      options: ["Because", "Due to", "In spite of", "As a result of"],
      correctAnswer: 2,
      explanation: "'In spite of' + noun phrase shows contrast (similar to 'despite'). He got the job despite inexperience."
    },
    {
      id: 'es14',
      question: "\"The professor asked the students ____ their assignments.\"",
      options: ["submit", "to submit", "submitting", "submitted"],
      correctAnswer: 1,
      explanation: "'Ask someone to do something' uses infinitive (to + V1). 'Asked them to submit.'"
    },
    {
      id: 'es15',
      question: "\"Were I the president, I ____ invest more in education.\"",
      options: ["will", "would", "should", "can"],
      correctAnswer: 1,
      explanation: "Inverted conditional (formal): 'Were I...' = 'If I were...', → 'I would invest.'"
    },
    {
      id: 'es16',
      question: "\"The research findings, ____ were published in a peer-reviewed journal, have been widely cited.\"",
      options: ["that", "which", "what", "who"],
      correctAnswer: 1,
      explanation: "Non-restrictive relative clause (with commas) for things uses 'which', not 'that'."
    },
    {
      id: 'es17',
      question: "\"He is accustomed ____ under pressure.\"",
      options: ["work", "to work", "to working", "working"],
      correctAnswer: 2,
      explanation: "'Accustomed to' + gerund (V-ing). 'To' here is a preposition, not infinitive marker."
    },
    {
      id: 'es18',
      question: "\"Only after completing the course ____ receive the certificate.\"",
      options: ["students will", "will students", "students can", "can students"],
      correctAnswer: 1,
      explanation: "'Only after...' at the start requires inversion: auxiliary before subject. 'Will students receive.'"
    },
    {
      id: 'es19',
      question: "\"The number of students enrolled in the program ____ increased.\"",
      options: ["have", "has", "are", "were"],
      correctAnswer: 1,
      explanation: "'The number of' is singular → takes 'has'. (vs. 'A number of' which is plural → 'have')"
    },
    {
      id: 'es20',
      question: "\"She would rather ____ the presentation tomorrow than today.\"",
      options: ["give", "gives", "giving", "to give"],
      correctAnswer: 0,
      explanation: "'Would rather' + base form (V1). 'She would rather give the presentation tomorrow.'"
    },
  ],
}
