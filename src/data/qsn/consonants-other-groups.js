// Consonants Groups 2-8 Questions

// ==========================================
// Group 2 (च to ञ)
// ==========================================
export const consonantsGroup2Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 202,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'च', pronunciation: 'cha' },
      { letter: 'छ', pronunciation: 'chha' },
      { letter: 'ज', pronunciation: 'ja' },
      { letter: 'झ', pronunciation: 'jha' },
      { letter: 'ञ', pronunciation: 'nya' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 53,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'कुन अक्षर च हो?',
      english: 'Which alphabet is च?',
      finnish: 'Mikä kirjain on च?'
    },
    options: ['cha', 'chha', 'jha', 'ja'],
    correctAnswer: 'cha'
  },
  {
    id: 54,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'कुन अक्षर छ हो?',
      english: 'Which alphabet is छ?',
      finnish: 'Mikä kirjain on छ?'
    },
    options: ['cha', 'nya', 'chha', 'ja'],
    correctAnswer: 'chha'
  },
  {
    id: 55,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ज हो?',
      english: 'Which alphabet is ज?',
      finnish: 'Mikä kirjain on ज?'
    },
    options: ['jha', 'chha', 'cha', 'ja'],
    correctAnswer: 'ja'
  },
  {
    id: 56,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'कुन अक्षर झ हो?',
      english: 'Which alphabet is झ?',
      finnish: 'Mikä kirjain on झ?'
    },
    options: ['ja', 'jha', 'cha', 'nya'],
    correctAnswer: 'jha'
  },
  {
    id: 57,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ञ हो?',
      english: 'Which alphabet is ञ?',
      finnish: 'Mikä kirjain on ञ?'
    },
    options: ['na', 'nya', 'chha', 'jha'],
    correctAnswer: 'nya'
  },

  // ===== LEVEL 2 (Words) =====
  {
    id: 58,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'चरा मा कुन अक्षर छ?',
      english: 'Which alphabet is in चरा?',
      finnish: 'Mikä kirjain on sanassa चरा?'
    },
    options: ['च', 'छ', 'ज', 'झ'],
    correctAnswer: 'च'
  },
  {
    id: 59,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'छाता मा कुन अक्षर छ?',
      english: 'Which alphabet is in छाता?',
      finnish: 'Mikä kirjain on sanassa छाता?'
    },
    options: ['च', 'छ', 'ज', 'झ'],
    correctAnswer: 'छ'
  },
  {
    id: 60,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'जुत्ता मा कुन अक्षर छ?',
      english: 'Which alphabet is in जुत्ता?',
      finnish: 'Mikä kirjain on sanassa जुत्ता?'
    },
    options: ['ञ', 'छ', 'ज', 'च'],
    correctAnswer: 'ज'
  },
  {
    id: 61,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 2,
    question: {
      nepali: 'झोला मा कुन अक्षर छ?',
      english: 'Which alphabet is in झोला?',
      finnish: 'Mikä kirjain on sanassa झोला?'
    },
    options: ['च', 'ञ', 'झ', 'ज'],
    correctAnswer: 'झ'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 116,
    category: 'consonants',
    consonantGroup: 'group2',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['च', 'ट', 'ज', 'प', 'छ'],
      ['ल', 'झ', 'म', 'ग', 'र'],
      ['ञ', 'क', 'स', 'द', 'ब'],
      ['ह', 'छ', 'य', 'ज', 'व'],
      ['त', 'न', 'झ', 'च', 'फ']
    ],
    correctAnswers: ['च', 'छ', 'ज', 'झ', 'ञ']
  }
];

// ==========================================
// Group 3 (ट to ण)
// ==========================================
export const consonantsGroup3Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 203,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'ट', pronunciation: 'Ta' },
      { letter: 'ठ', pronunciation: 'Tha' },
      { letter: 'ड', pronunciation: 'Da' },
      { letter: 'ढ', pronunciation: 'Dha' },
      { letter: 'ण', pronunciation: 'Anda' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 62,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ट हो?',
      english: 'Which alphabet is ट?',
      finnish: 'Mikä kirjain on ट?'
    },
    options: ['Ta', 'tha', 'dha', 'da'],
    correctAnswer: 'Ta'
  },
  {
    id: 63,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ठ हो?',
      english: 'Which alphabet is ठ?',
      finnish: 'Mikä kirjain on ठ?'
    },
    options: ['da', 'Tha', 'ta', 'na'],
    correctAnswer: 'Tha'
  },
  {
    id: 64,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ड हो?',
      english: 'Which alphabet is ड?',
      finnish: 'Mikä kirjain on ड?'
    },
    options: ['dha', 'na', 'Da', 'tha'],
    correctAnswer: 'Da'
  },
  {
    id: 65,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ढ हो?',
      english: 'Which alphabet is ढ?',
      finnish: 'Mikä kirjain on ढ?'
    },
    options: ['ta', 'Dha', 'da', 'na'],
    correctAnswer: 'Dha'
  },
  {
    id: 66,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ण हो?',
      english: 'Which alphabet is ण?',
      finnish: 'Mikä kirjain on ण?'
    },
    options: ['AnDa', 'ta', 'da', 'dha'],
    correctAnswer: 'AnDa'
  },

  // ===== LEVEL 2 (Words) =====
  {
    id: 67,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'टमाटर मा कुन अक्षर छ?',
      english: 'Which alphabet is in टमाटर?',
      finnish: 'Mikä kirjain on sanassa टमाटर?'
    },
    options: ['ट', 'ठ', 'ड', 'ढ'],
    correctAnswer: 'ट'
  },
  {
    id: 68,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'ठूलो मा कुन अक्षर छ?',
      english: 'Which alphabet is in ठूलो?',
      finnish: 'Mikä kirjain on sanassa ठूलो?'
    },
    options: ['ट', 'ठ', 'ड', 'ढ'],
    correctAnswer: 'ठ'
  },
  {
    id: 69,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'डब्बा मा कुन अक्षर छ?',
      english: 'Which alphabet is in डब्बा?',
      finnish: 'Mikä kirjain on sanassa डब्बा?'
    },
    options: ['ण', 'ठ', 'ड', 'ट'],
    correctAnswer: 'ड'
  },
  {
    id: 70,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'ढोका मा कुन अक्षर छ?',
      english: 'Which alphabet is in ढोका?',
      finnish: 'Mikä kirjain on sanassa ढोका?'
    },
    options: ['ट', 'ड', 'ढ', 'ठ'],
    correctAnswer: 'ढ'
  },
  {
    id: 71,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 2,
    question: {
      nepali: 'कर्ण मा कुन अक्षर छ?',
      english: 'Which alphabet is in कर्ण?',
      finnish: 'Mikä kirjain on sanassa कर्ण?'
    },
    options: ['ण', 'न', 'ड', 'ट'],
    correctAnswer: 'ण'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 117,
    category: 'consonants',
    consonantGroup: 'group3',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['ट', 'ग', 'ड', 'प', 'ढ'],
      ['क', 'ठ', 'म', 'ण', 'त'],
      ['ड', 'ज', 'ट', 'ब', 'न'],
      ['ढ', 'ल', 'र', 'ठ', 'स'],
      ['य', 'ण', 'व', 'ट', 'ह']
    ],
    correctAnswers: ['ट', 'ठ', 'ड', 'ढ', 'ण']
  }
];

// ==========================================
// Group 4 (त to न)
// ==========================================
export const consonantsGroup4Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 204,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'त', pronunciation: 'ta' },
      { letter: 'थ', pronunciation: 'tha' },
      { letter: 'द', pronunciation: 'da' },
      { letter: 'ध', pronunciation: 'dha' },
      { letter: 'न', pronunciation: 'na' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 72,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'कुन अक्षर त हो?',
      english: 'Which alphabet is त?',
      finnish: 'Mikä kirjain on त?'
    },
    options: ['ta', 'tha', 'da', 'dha'],
    correctAnswer: 'ta'
  },
  {
    id: 73,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'कुन अक्षर थ हो?',
      english: 'Which alphabet is थ?',
      finnish: 'Mikä kirjain on थ?'
    },
    options: ['na', 'tha', 'ta', 'da'],
    correctAnswer: 'tha'
  },
  {
    id: 74,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'कुन अक्षर द हो?',
      english: 'Which alphabet is द?',
      finnish: 'Mikä kirjain on द?'
    },
    options: ['dha', 'da', 'tha', 'na'],
    correctAnswer: 'da'
  },
  {
    id: 75,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ध हो?',
      english: 'Which alphabet is ध?',
      finnish: 'Mikä kirjain on ध?'
    },
    options: ['da', 'dha', 'ta', 'tha'],
    correctAnswer: 'dha'
  },
  {
    id: 76,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'कुन अक्षर न हो?',
      english: 'Which alphabet is न?',
      finnish: 'Mikä kirjain on न?'
    },
    options: ['ta', 'na', 'dha', 'da'],
    correctAnswer: 'na'
  },

  // ===== LEVEL 2 (Words) =====
  {
    id: 77,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'तारा मा कुन अक्षर छ?',
      english: 'Which alphabet is in तारा?',
      finnish: 'Mikä kirjain on sanassa तारा?'
    },
    options: ['त', 'थ', 'द', 'ध'],
    correctAnswer: 'त'
  },
  {
    id: 78,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'थाल मा कुन अक्षर छ?',
      english: 'Which alphabet is in थाल?',
      finnish: 'Mikä kirjain on sanassa थाल?'
    },
    options: ['त', 'थ', 'द', 'ध'],
    correctAnswer: 'थ'
  },
  {
    id: 79,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'दूध मा कुन अक्षर छ?',
      english: 'Which alphabet is in दूध?',
      finnish: 'Mikä kirjain on sanassa दूध?'
    },
    options: ['न', 'द', 'त', 'थ'],
    correctAnswer: 'द'
  },
  {
    id: 80,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'धन मा कुन अक्षर छ?',
      english: 'Which alphabet is in धन?',
      finnish: 'Mikä kirjain on sanassa धन?'
    },
    options: ['ध', 'त', 'द', 'थ'],
    correctAnswer: 'ध'
  },
  {
    id: 81,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 2,
    question: {
      nepali: 'नाम मा कुन अक्षर छ?',
      english: 'Which alphabet is in नाम?',
      finnish: 'Mikä kirjain on sanassa नाम?'
    },
    options: ['न', 'ध', 'द', 'थ'],
    correctAnswer: 'न'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 118,
    category: 'consonants',
    consonantGroup: 'group4',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['त', 'ग', 'द', 'प', 'ध'],
      ['क', 'थ', 'म', 'न', 'त'],
      ['द', 'ज', 'त', 'ब', 'न'],
      ['ध', 'ल', 'र', 'थ', 'स'],
      ['न', 'त', 'व', 'द', 'ह']
    ],
    correctAnswers: ['त', 'थ', 'द', 'ध', 'न']
  }
];

// ==========================================
// Group 5 (प to म)
// ==========================================
export const consonantsGroup5Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 205,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'प', pronunciation: 'pa' },
      { letter: 'फ', pronunciation: 'pha' },
      { letter: 'ब', pronunciation: 'ba' },
      { letter: 'भ', pronunciation: 'bha' },
      { letter: 'म', pronunciation: 'ma' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 82,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 2,
    question: {
      nepali: 'कुन अक्षर प हो?',
      english: 'Which alphabet is प?',
      finnish: 'Mikä kirjain on प?'
    },
    options: ['pa', 'pha', 'bha', 'ba'],
    correctAnswer: 'pa'
  },
  {
    id: 83,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 2,
    question: {
      nepali: 'कुन अक्षर फ हो?',
      english: 'Which alphabet is फ?',
      finnish: 'Mikä kirjain on फ?'
    },
    options: ['ba', 'pha', 'pa', 'ma'],
    correctAnswer: 'pha'
  },
  {
    id: 84,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ब हो?',
      english: 'Which alphabet is ब?',
      finnish: 'Mikä kirjain on ब?'
    },
    options: ['bha', 'ma', 'ba', 'pha'],
    correctAnswer: 'ba'
  },
  {
    id: 85,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 2,
    question: {
      nepali: 'कुन अक्षर भ हो?',
      english: 'Which alphabet is भ?',
      finnish: 'Mikä kirjain on भ?'
    },
    options: ['pa', 'bha', 'ba', 'ma'],
    correctAnswer: 'bha'
  },
  {
    id: 86,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 2,
    question: {
      nepali: 'कुन अक्षर म हो?',
      english: 'Which alphabet is म?',
      finnish: 'Mikä kirjain on म?'
    },
    options: ['ma', 'pa', 'bha', 'pha'],
    correctAnswer: 'ma'
  },

  // ===== LEVEL 3 (Words) =====
  {
    id: 87,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    question: {
      nepali: 'पानी मा कुन अक्षर छ?',
      english: 'Which alphabet is in पानी?',
      finnish: 'Mikä kirjain on sanassa पानी?'
    },
    options: ['प', 'फ', 'ब', 'भ'],
    correctAnswer: 'प'
  },
  {
    id: 88,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    question: {
      nepali: 'फल मा कुन अक्षर छ?',
      english: 'Which alphabet is in फल?',
      finnish: 'Mikä kirjain on sanassa फल?'
    },
    options: ['प', 'फ', 'म', 'भ'],
    correctAnswer: 'फ'
  },
  {
    id: 89,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    question: {
      nepali: 'बिरालो मा कुन अक्षर छ?',
      english: 'Which alphabet is in बिरालो?',
      finnish: 'Mikä kirjain on sanassa बिरालो?'
    },
    options: ['ब', 'प', 'फ', 'भ'],
    correctAnswer: 'ब'
  },
  {
    id: 90,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    question: {
      nepali: 'भात मा कुन अक्षर छ?',
      english: 'Which alphabet is in भात?',
      finnish: 'Mikä kirjain on sanassa भात?'
    },
    options: ['म', 'भ', 'प', 'फ'],
    correctAnswer: 'भ'
  },
  {
    id: 91,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    question: {
      nepali: 'माछा मा कुन अक्षर छ?',
      english: 'Which alphabet is in माछा?',
      finnish: 'Mikä kirjain on sanassa माछा?'
    },
    options: ['ब', 'भ', 'म', 'प'],
    correctAnswer: 'म'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 119,
    category: 'consonants',
    consonantGroup: 'group5',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['प', 'ग', 'ब', 'ट', 'भ'],
      ['क', 'फ', 'म', 'प', 'त'],
      ['ब', 'ज', 'प', 'म', 'न'],
      ['भ', 'ल', 'र', 'फ', 'स'],
      ['म', 'प', 'व', 'ब', 'ह']
    ],
    correctAnswers: ['प', 'फ', 'ब', 'भ', 'म']
  }
];

// ==========================================
// Group 6 (य to व)
// ==========================================
export const consonantsGroup6Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 206,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'य', pronunciation: 'Ya' },
      { letter: 'र', pronunciation: 'Ra' },
      { letter: 'ल', pronunciation: 'La' },
      { letter: 'व', pronunciation: 'Wa' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 92,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 2,
    question: {
      nepali: 'कुन अक्षर य हो?',
      english: 'Which alphabet is य?',
      finnish: 'Mikä kirjain on य?'
    },
    options: ['ya', 'ra', 'la', 'va'],
    correctAnswer: 'ya'
  },
  {
    id: 93,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 2,
    question: {
      nepali: 'कुन अक्षर र हो?',
      english: 'Which alphabet is र?',
      finnish: 'Mikä kirjain on र?'
    },
    options: ['va', 'la', 'ra', 'ya'],
    correctAnswer: 'ra'
  },
  {
    id: 94,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ल हो?',
      english: 'Which alphabet is ल?',
      finnish: 'Mikä kirjain on ल?'
    },
    options: ['ra', 'ya', 'va', 'la'],
    correctAnswer: 'la'
  },
  {
    id: 95,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 2,
    question: {
      nepali: 'कुन अक्षर व हो?',
      english: 'Which alphabet is व?',
      finnish: 'Mikä kirjain on व?'
    },
    options: ['la', 'va', 'ya', 'ra'],
    correctAnswer: 'va'
  },

  // ===== LEVEL 3 (Words) =====
  {
    id: 96,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 3,
    question: {
      nepali: 'यो मा कुन अक्षर छ?',
      english: 'Which alphabet is in यो?',
      finnish: 'Mikä kirjain on sanassa यो?'
    },
    options: ['य', 'र', 'ल', 'व'],
    correctAnswer: 'य'
  },
  {
    id: 97,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 3,
    question: {
      nepali: 'रङ मा कुन अक्षर छ?',
      english: 'Which alphabet is in रङ?',
      finnish: 'Mikä kirjain on sanassa रङ?'
    },
    options: ['य', 'व', 'र', 'ल'],
    correctAnswer: 'र'
  },
  {
    id: 98,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 3,
    question: {
      nepali: 'लामो मा कुन अक्षर छ?',
      english: 'Which alphabet is in लामो?',
      finnish: 'Mikä kirjain on sanassa लामो?'
    },
    options: ['र', 'ल', 'व', 'य'],
    correctAnswer: 'ल'
  },
  {
    id: 99,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 3,
    question: {
      nepali: 'वन मा कुन अक्षर छ?',
      english: 'Which alphabet is in वन?',
      finnish: 'Mikä kirjain on sanassa वन?'
    },
    options: ['व', 'य', 'र', 'ल'],
    correctAnswer: 'व'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 120,
    category: 'consonants',
    consonantGroup: 'group6',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['य', 'क', 'र', 'ट', 'व'],
      ['प', 'ल', 'म', 'य', 'त'],
      ['र', 'ज', 'य', 'ब', 'ल'],
      ['व', 'ल', 'र', 'य', 'स'],
      ['म', 'व', 'त', 'र', 'ल']
    ],
    correctAnswers: ['य', 'र', 'ल', 'व']
  }
];

// ==========================================
// Group 7 (श to ह)
// ==========================================
export const consonantsGroup7Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 207,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'श', pronunciation: 'sha' },
      { letter: 'ष', pronunciation: 'Sha' },
      { letter: 'स', pronunciation: 'Sa' },
      { letter: 'ह', pronunciation: 'Ha' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 100,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'कुन अक्षर श हो?',
      english: 'Which alphabet is श?',
      finnish: 'Mikä kirjain on श?'
    },
    options: ['sha', 'sa', 'Sha', 'ha'],
    correctAnswer: 'sha'
  },
  {
    id: 101,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ष हो?',
      english: 'Which alphabet is ष?',
      finnish: 'Mikä kirjain on ष?'
    },
    options: ['ha', 'sha', 'sa', 'Sha'],
    correctAnswer: 'Sha'
  },
  {
    id: 102,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'कुन अक्षर स हो?',
      english: 'Which alphabet is स?',
      finnish: 'Mikä kirjain on स?'
    },
    options: ['Sha', 'sha', 'ha', 'sa'],
    correctAnswer: 'sa'
  },
  {
    id: 103,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ह हो?',
      english: 'Which alphabet is ह?',
      finnish: 'Mikä kirjain on ह?'
    },
    options: ['sa', 'ha', 'sha', 'Sha'],
    correctAnswer: 'ha'
  },

  // ===== LEVEL 2 (Words) =====
  {
    id: 104,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'शिर मा कुन अक्षर छ?',
      english: 'Which alphabet is in शिर?',
      finnish: 'Mikä kirjain on sanassa शिर?'
    },
    options: ['श', 'ष', 'स', 'ह'],
    correctAnswer: 'श'
  },
  {
    id: 105,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'षट्कोण मा कुन अक्षर छ?',
      english: 'Which alphabet is in षट्कोण?',
      finnish: 'Mikä kirjain on sanassa षट्कोण?'
    },
    options: ['ह', 'स', 'ष', 'श'],
    correctAnswer: 'ष'
  },
  {
    id: 106,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'सूर्य मा कुन अक्षर छ?',
      english: 'Which alphabet is in सूर्य?',
      finnish: 'Mikä kirjain on sanassa सूर्य?'
    },
    options: ['स', 'ह', 'ष', 'श'],
    correctAnswer: 'स'
  },
  {
    id: 107,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 2,
    question: {
      nepali: 'हात मा कुन अक्षर छ?',
      english: 'Which alphabet is in हात?',
      finnish: 'Mikä kirjain on sanassa हात?'
    },
    options: ['श', 'ष', 'स', 'ह'],
    correctAnswer: 'ह'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 121,
    category: 'consonants',
    consonantGroup: 'group7',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['श', 'क', 'स', 'ट', 'ह'],
      ['प', 'ष', 'म', 'श', 'त'],
      ['स', 'ज', 'ह', 'ब', 'ष'],
      ['ह', 'ल', 'श', 'स', 'र'],
      ['म', 'ह', 'त', 'ष', 'स']
    ],
    correctAnswers: ['श', 'ष', 'स', 'ह']
  }
];

// ==========================================
// Group 8 (क्ष to ज्ञ)
// ==========================================
export const consonantsGroup8Questions = [
  // ===== LEVEL 1 (Matching) =====
  {
    id: 208,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
      english: 'Match alphabets with the right pronounciation.',
      finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
    },
    pairs: [
      { letter: 'क्ष', pronunciation: 'Ksha' },
      { letter: 'त्र', pronunciation: 'tra' },
      { letter: 'ज्ञ', pronunciation: 'gya' }
    ]
  },

  // ===== LEVEL 2 =====
  {
    id: 108,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 2,
    question: {
      nepali: 'कुन अक्षर क्ष हो?',
      english: 'Which alphabet is क्ष?',
      finnish: 'Mikä kirjain on क्ष?'
    },
    options: ['ksha', 'tra', 'gya', 'jha'],
    correctAnswer: 'ksha'
  },
  {
    id: 109,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 2,
    question: {
      nepali: 'कुन अक्षर त्र हो?',
      english: 'Which alphabet is त्र?',
      finnish: 'Mikä kirjain on त्र?'
    },
    options: ['gya', 'tra', 'ksha', 'cha'],
    correctAnswer: 'tra'
  },
  {
    id: 110,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 2,
    question: {
      nepali: 'कुन अक्षर ज्ञ हो?',
      english: 'Which alphabet is ज्ञ?',
      finnish: 'Mikä kirjain on ज्ञ?'
    },
    options: ['tra', 'gya', 'ksha', 'sha'],
    correctAnswer: 'gya'
  },

  // ===== LEVEL 3 (Words) =====
  {
    id: 111,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 3,
    question: {
      nepali: 'क्षमा मा कुन अक्षर छ?',
      english: 'Which alphabet is in क्षमा?',
      finnish: 'Mikä kirjain on sanassa क्षमा?'
    },
    options: ['क्ष', 'त्र', 'ज्ञ', 'श'],
    correctAnswer: 'क्ष'
  },
  {
    id: 112,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 3,
    question: {
      nepali: 'त्रिकोण मा कुन अक्षर छ?',
      english: 'Which alphabet is in त्रिकोण?',
      finnish: 'Mikä kirjain on sanassa त्रिकोण?'
    },
    options: ['क्ष', 'ज्ञ', 'त्र', 'ट'],
    correctAnswer: 'त्र'
  },
  {
    id: 113,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 3,
    question: {
      nepali: 'ज्ञान मा कुन अक्षर छ?',
      english: 'Which alphabet is in ज्ञान?',
      finnish: 'Mikä kirjain on sanassa ज्ञान?'
    },
    options: ['त्र', 'ज्ञ', 'क्ष', 'ग'],
    correctAnswer: 'ज्ञ'
  },

  // ===== LEVEL 3 (Grid) =====
  {
    id: 122,
    category: 'consonants',
    consonantGroup: 'group8',
    level: 3,
    type: 'grid',
    question: {
      nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
      english: 'Find These Letters',
      finnish: 'Etsi nämä kirjeet'
    },
    grid: [
      ['क्ष', 'क', 'त्र', 'म', 'ज्ञ'],
      ['प', 'त्र', 'ब', 'क्ष', 'त'],
      ['म', 'ज', 'ज्ञ', 'ल', 'र'],
      ['त्र', 'स', 'क', 'ज्ञ', 'ह'],
      ['न', 'क्ष', 'प', 'त्र', 'म']
    ],
    correctAnswers: ['क्ष', 'त्र', 'ज्ञ']
  }
];
