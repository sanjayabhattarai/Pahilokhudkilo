/**
 * दुई-अक्षरका शब्द / Two-letter Words / Kaksikirjaimiset Sanat
 * 
 * Questions for learning two-letter words in Nepali
 * Category: two-letter-words
 */

export const twoLetterWordsQuestions = [
  // ===== LEVEL 1: Matching words with meanings =====
  {
    id: 'two-letter-1-1',
    category: 'two-letter-words',
    level: 1,
    type: 'matching',
    question: {
      nepali: 'सही उच्चारणसँग शब्दहरू मिलाउनुहोस्।',
      english: 'Match words with the right pronunciation.',
      finnish: 'Yhdistä sanat oikeaan ääntämykseen.'
    },
    pairs: [
      { left: 'आमा', right: 'mother' },
      { left: 'बाबा', right: 'father' },
      { left: 'दाइ', right: 'brother' },
      { left: 'दिदि', right: 'sister' },
      { left: 'घर', right: 'house' },
      { left: 'दुध', right: 'milk' },
      { left: 'रातो', right: 'red' },
      { left: 'सेतो', right: 'white' }
    ]
  },

  // ===== LEVEL 2: Complete the word =====
  {
    id: 'two-letter-2-1',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __मा',
      english: 'Choose the correct answer: __मा',
      finnish: 'Valitse oikea vastaus: __मा'
    },
    options: ['बा', 'का', 'आ', 'रऺ'],
    correctAnswer: 'आ',
    explanation: {
      nepali: 'आ + मा = आमा (mother)',
      english: 'आ + मा = आमा (mother)',
      finnish: 'आ + मा = आमा (äiti)'
    }
  },
  {
    id: 'two-letter-2-2',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __बा',
      english: 'Choose the correct answer: __बा',
      finnish: 'Valitse oikea vastaus: __बा'
    },
    options: ['बा', 'का', 'आ', 'रा'],
    correctAnswer: 'बा',
    explanation: {
      nepali: 'बा + बा = बाबा (father)',
      english: 'बा + बा = बाबा (father)',
      finnish: 'बा + बा = बाबा (isä)'
    }
  },
  {
    id: 'two-letter-2-3',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __र',
      english: 'Choose the correct answer: __र',
      finnish: 'Valitse oikea vastaus: __र'
    },
    options: ['स', 'घ', 'ज', 'ण'],
    correctAnswer: 'घ',
    explanation: {
      nepali: 'घ + र = घर (house)',
      english: 'घ + र = घर (house)',
      finnish: 'घ + र = घर (talo)'
    }
  },
  {
    id: 'two-letter-2-4',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __ध',
      english: 'Choose the correct answer: __ध',
      finnish: 'Valitse oikea vastaus: __ध'
    },
    options: ['क', 'आ', 'दू', 'रऺ'],
    correctAnswer: 'दू',
    explanation: {
      nepali: 'दू + ध = दूध (milk)',
      english: 'दू + ध = दूध (milk)',
      finnish: 'दू + ध = दूध (maito)'
    }
  },
  {
    id: 'two-letter-2-5',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __न',
      english: 'Choose the correct answer: __न',
      finnish: 'Valitse oikea vastaus: __न'
    },
    options: ['च', 'म', 'त', 'क'],
    correctAnswer: 'म',
    explanation: {
      nepali: 'म + न = मन (heart)',
      english: 'म + न = मन (heart)',
      finnish: 'म + न = मन (sydän)'
    }
  },
  {
    id: 'two-letter-2-6',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __त',
      english: 'Choose the correct answer: __त',
      finnish: 'Valitse oikea vastaus: __त'
    },
    options: ['बा', 'रा', 'मा', 'हा'],
    correctAnswer: 'रा',
    explanation: {
      nepali: 'रा + त = रात (night)',
      english: 'रा + त = रात (night)',
      finnish: 'रा + त = रात (yö)'
    }
  },
  {
    id: 'two-letter-2-7',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __न',
      english: 'Choose the correct answer: __न',
      finnish: 'Valitse oikea vastaus: __न'
    },
    options: ['मि', 'कि', 'आ', 'दि'],
    correctAnswer: 'दि',
    explanation: {
      nepali: 'दि + न = दिन (day)',
      english: 'दि + न = दिन (day)',
      finnish: 'दि + न = दिन (päivä)'
    }
  },
  {
    id: 'two-letter-2-8',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __ल',
      english: 'Choose the correct answer: __ल',
      finnish: 'Valitse oikea vastaus: __ल'
    },
    options: ['फ', 'क', 'आ', 'त'],
    correctAnswer: 'फ',
    explanation: {
      nepali: 'फ + ल = फल (fruit)',
      english: 'फ + ल = फल (fruit)',
      finnish: 'फ + ल = फल (hedelmä)'
    }
  },
  {
    id: 'two-letter-2-9',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __तो',
      english: 'Choose the correct answer: __तो',
      finnish: 'Valitse oikea vastaus: __तो'
    },
    options: ['ने', 'छ', 'आ', 'रऺ'],
    correctAnswer: 'रऺ',
    explanation: {
      nepali: 'रा + तो = रातो (red)',
      english: 'रा + तो = रातो (red)',
      finnish: 'रा + तो = रातो (punainen)'
    }
  },
  {
    id: 'two-letter-2-10',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __लो',
      english: 'Choose the correct answer: __लो',
      finnish: 'Valitse oikea vastaus: __लो'
    },
    options: ['रा', 'मा', 'नि', 'बा'],
    correctAnswer: 'बा',
    explanation: {
      nepali: 'बा + लो = बालो (sand)',
      english: 'बा + लो = बालो (sand)',
      finnish: 'बा + लो = बालो (hiekka)'
    }
  },
  {
    id: 'two-letter-2-11',
    category: 'two-letter-words',
    level: 2,
    type: 'multiple-choice',
    question: {
      nepali: 'सही उत्तर छान्नुहोस्: __दी',
      english: 'Choose the correct answer: __दी',
      finnish: 'Valitse oikea vastaus: __दी'
    },
    options: ['दि', 'रि', 'कि', 'पी'],
    correctAnswer: 'दि',
    explanation: {
      nepali: 'दि + दी = दिदी (sister)',
      english: 'दि + दी = दिदी (sister)',
      finnish: 'दि + दी = दिदी (sisko)'
    }
  },

  // ===== LEVEL 3: Complete sentences with correct words =====
  {
    id: 'two-letter-3-1',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'मेरो _____ मा आमा र बुवा हुनुहुन्छ।',
      english: 'I have a mother and father at home.',
      finnish: 'Minulla on kotona äiti ja isä.'
    },
    options: ['घर', 'अफिस', 'स्कूल', 'बाटो'],
    correctAnswer: 'घर',
    explanation: {
      nepali: 'घर = house',
      english: 'घर = house',
      finnish: 'घर = talo'
    }
  },
  {
    id: 'two-letter-3-2',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'मेरो _____ मा आमा बस्नुहुन्छ।',
      english: 'My mother lives in my house.',
      finnish: 'Äitini asuu kotona.'
    },
    options: ['घर', 'बाटो', 'अफिस', 'जंगल'],
    correctAnswer: 'घर',
    explanation: {
      nepali: 'घर = house',
      english: 'घर = house',
      finnish: 'घर = talo'
    }
  },
  {
    id: 'two-letter-3-3',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'म _____ पिउँछु।',
      english: 'I drink water.',
      finnish: 'Minä juon vettä.'
    },
    options: ['दूध', 'पानी', 'चिया', 'रस'],
    correctAnswer: 'पानी',
    explanation: {
      nepali: 'पानी = water',
      english: 'पानी = water',
      finnish: 'पानी = vesi'
    }
  },
  {
    id: 'two-letter-3-4',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'आज राम्रो _____ छ।',
      english: 'Today is a good day.',
      finnish: 'Tänään on hyvä päivä.'
    },
    options: ['दिन', 'समय', 'मौसम', 'बिहान'],
    correctAnswer: 'दिन',
    explanation: {
      nepali: 'दिन = day',
      english: 'दिन = day',
      finnish: 'दिन = päivä'
    }
  },
  {
    id: 'two-letter-3-5',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'मेरो _____ खुसी छ।',
      english: 'My friend is happy.',
      finnish: 'Minun kaveri on iloinen.'
    },
    options: ['साथी', 'शरीर', 'घर', 'काम'],
    correctAnswer: 'साथी',
    explanation: {
      nepali: 'साथी = friend',
      english: 'साथी = friend',
      finnish: 'साथी = kaveri'
    }
  },
  {
    id: 'two-letter-3-6',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '_____ मीठो छ।',
      english: 'Fruit is sweet.',
      finnish: 'Hedelmä on makea.'
    },
    options: ['फल', 'तरकारी', 'खाना', 'भात'],
    correctAnswer: 'फल',
    explanation: {
      nepali: 'फल = fruit',
      english: 'फल = fruit',
      finnish: 'फल = hedelmä'
    }
  },
  {
    id: 'two-letter-3-7',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'म _____ धुन्छु।',
      english: 'I wash my hand.',
      finnish: 'Pesen käteni.'
    },
    options: ['हात', 'अनुहार', 'लुगा', 'जुत्ता'],
    correctAnswer: 'हात',
    explanation: {
      nepali: 'हात = hand',
      english: 'हात = hand',
      finnish: 'हात = käsi'
    }
  },
  {
    id: 'two-letter-3-8',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '_____ ठूलो छ।',
      english: 'House is big.',
      finnish: 'Talo on iso.'
    },
    options: ['घर', 'विद्यालय', 'अस्पताल', 'शहर'],
    correctAnswer: 'घर',
    explanation: {
      nepali: 'घर = house',
      english: 'घर = house',
      finnish: 'घर = talo'
    }
  },
  {
    id: 'two-letter-3-9',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: 'म _____ले देख्छु।',
      english: 'I see from eyes.',
      finnish: 'Näen silmistä.'
    },
    options: ['नाक', 'आँखा', 'कान', 'मुख'],
    correctAnswer: 'आँखा',
    explanation: {
      nepali: 'आँखा = eyes',
      english: 'आँखा = eyes',
      finnish: 'आँखा = silmät'
    }
  },
  {
    id: 'two-letter-3-10',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '_____ चिसो छ।',
      english: 'Wind is cold.',
      finnish: 'Tuuli on kylmää.'
    },
    options: ['पानी', 'मौसम', 'हावा', 'ठाउँ'],
    correctAnswer: 'हावा',
    explanation: {
      nepali: 'हावा = wind',
      english: 'हावा = wind',
      finnish: 'हावा = tuuli'
    }
  },
  {
    id: 'two-letter-3-11',
    category: 'two-letter-words',
    level: 3,
    type: 'multiple-choice',
    question: {
      nepali: '_____ सेतो छ।',
      english: 'Milk is white.',
      finnish: 'Maito on valkoinen.'
    },
    options: ['दूध', 'कागज', 'कपडा', 'भात'],
    correctAnswer: 'दूध',
    explanation: {
      nepali: 'दूध = milk',
      english: 'दूध = milk',
      finnish: 'दूध = maito'
    }
  }
];
