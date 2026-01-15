// Pronouns (सर्वनाम) Questions
export const pronounsQuestions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 'pronouns-1-1',
    category: 'pronouns',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही सर्वनामसँग मिलाउनुहोस्।',
      english: 'Match it with the correct pronoun.',
      finnish: 'Yhdistä se oikeaan pronominiin.'
    },
    pairs: [
      { letter: 'म', pronunciation: 'I' },
      { letter: 'तिमी', pronunciation: 'you' },
      { letter: 'हामी', pronunciation: 'we' },
      { letter: 'ऊ', pronunciation: 'he' },
      { letter: 'उनीहरु', pronunciation: 'they' },
      { letter: 'त्यो', pronunciation: 'it' }
    ]
  },

  // ===== LEVEL 2 (Grid Search) =====
  {
    id: 'pronouns-2-1',
    category: 'pronouns',
    level: 2,
    type: 'grid',
    question: {
      nepali: 'सर्वनामहरु खोज्नुहोस्।',
      english: 'Find the pronouns.',
      finnish: 'Etsi pronominit.'
    },
    grid: [
      ['ता', 'या', 'त्यो', 'का'],
      ['प', 'हामी', 'ऊ', 'नि'],
      ['उनी', 'र', 'त', 'मा'],
      ['यो', 'म', 'खा', 'नि'],
      ['पा', 'सो', 'तिमी', 'तँ'],
      ['ख', 'गा', 'चा', 'ज']
    ],
    correctAnswers: ['म', 'तिमी', 'हामी', 'ऊ', 'उनी', 'यो', 'त्यो', 'तँ']
  },

  // ===== LEVEL 3 (Fill in the blanks) =====
  {
    id: 'pronouns-3-1',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ स्कूल जान्छु।',
      english: 'I go to school.',
      finnish: 'Minä menen kouluun.'
    },
    options: ['म', 'हामी'],
    correctAnswer: 'म'
  },
  {
    id: 'pronouns-3-2',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ घरमा बस्छु।',
      english: 'I live at home.',
      finnish: 'Minä asun kotona.'
    },
    options: ['म', 'ऊ'],
    correctAnswer: 'म'
  },
  {
    id: 'pronouns-3-3',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ खाना खान्छौं।',
      english: 'We eat food.',
      finnish: 'Me syömme ruokaa.'
    },
    options: ['म', 'हामी'],
    correctAnswer: 'हामी'
  },
  {
    id: 'pronouns-3-4',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ किताब पढ्छौ।',
      english: 'You read a book.',
      finnish: 'Sinä luet kirjaa.'
    },
    options: ['तिमी', 'म'],
    correctAnswer: 'तिमी'
  },
  {
    id: 'pronouns-3-5',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ राम्रो मान्छे हो।',
      english: 'He/She is a good person.',
      finnish: 'Hän on hyvä ihminen.'
    },
    options: ['ऊ', 'हामी'],
    correctAnswer: 'ऊ'
  },
  {
    id: 'pronouns-3-6',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ खेल खेल्छौं।',
      english: 'We play games.',
      finnish: 'Me pelaamme.'
    },
    options: ['हामी', 'तिमी'],
    correctAnswer: 'हामी'
  },
  {
    id: 'pronouns-3-7',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ दूध पिउँछ।',
      english: 'He/She drinks milk.',
      finnish: 'Hän juo maitoa.'
    },
    options: ['ऊ', 'म'],
    correctAnswer: 'ऊ'
  },
  {
    id: 'pronouns-3-8',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ स्कूल जानुहुन्छ।',
      english: 'You (polite) go to school.',
      finnish: 'Te menette kouluun.'
    },
    options: ['तपाईं', 'तँ'],
    correctAnswer: 'तपाईं'
  },
  {
    id: 'pronouns-3-9',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ घर सफा गर्छु।',
      english: 'I clean the house.',
      finnish: 'Minä siivoan talon.'
    },
    options: ['म', 'उनी'],
    correctAnswer: 'म'
  },
  {
    id: 'pronouns-3-10',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ गीत गाउँछौ।',
      english: 'You sing a song.',
      finnish: 'Sinä laulat laulun.'
    },
    options: ['तिमी', 'हामी'],
    correctAnswer: 'तिमी'
  },
  {
    id: 'pronouns-3-11',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ बजार जान्छन्।',
      english: 'They go to the market.',
      finnish: 'He menevät torille.'
    },
    options: ['उनीहरू', 'ऊ'],
    correctAnswer: 'उनीहरू'
  },
  {
    id: 'pronouns-3-12',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ खाना पकाउनुहुन्छ।',
      english: 'You (polite) cook food.',
      finnish: 'Te laitatte ruokaa.'
    },
    options: ['तपाईं', 'तिमी'],
    correctAnswer: 'तपाईं'
  },
  {
    id: 'pronouns-3-13',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ पार्कमा खेल्छ।',
      english: 'He/She plays in the park.',
      finnish: 'Hän leikkii puistossa.'
    },
    options: ['ऊ', 'हामी'],
    correctAnswer: 'ऊ'
  },
  {
    id: 'pronouns-3-14',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ सँगै बस्छौं।',
      english: 'We live together.',
      finnish: 'Me asumme yhdessä.'
    },
    options: ['हामी', 'तिमी'],
    correctAnswer: 'हामी'
  },
  {
    id: 'pronouns-3-15',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ काम गर्छु।',
      english: 'I work.',
      finnish: 'Minä työskentelen.'
    },
    options: ['म', 'ऊ'],
    correctAnswer: 'म'
  },
  {
    id: 'pronouns-3-16',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ स्कूल जान्छौ।',
      english: 'You go to school.',
      finnish: 'Sinä menet kouluun.'
    },
    options: ['तिमी', 'हामी'],
    correctAnswer: 'तिमी'
  },
  {
    id: 'pronouns-3-17',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ घर जानुहुन्छ।',
      english: 'You (polite) go home.',
      finnish: 'Te menette kotiin.'
    },
    options: ['तपाईं', 'म'],
    correctAnswer: 'तपाईं'
  },
  {
    id: 'pronouns-3-18',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ किताब पढ्छन्।',
      english: 'They read books.',
      finnish: 'He lukevat kirjoja.'
    },
    options: ['उनीहरू', 'ऊ'],
    correctAnswer: 'उनीहरू'
  },
  {
    id: 'pronouns-3-19',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ खुशी छु।',
      english: 'I am happy.',
      finnish: 'Minä olen iloinen.'
    },
    options: ['म', 'हामी'],
    correctAnswer: 'म'
  },
  {
    id: 'pronouns-3-20',
    category: 'pronouns',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '___ यहाँ आउनुहोस्।',
      english: 'You (polite) come here.',
      finnish: 'Tulkaa tänne.'
    },
    options: ['तपाईं', 'तिमी'],
    correctAnswer: 'तपाईं'
  }
];
