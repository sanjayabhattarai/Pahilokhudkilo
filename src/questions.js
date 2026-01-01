export const questions = [
  // Beginner Level - Fruits
  {
    id: 1,
    question: "What is 'Apple' in Nepali?",
    options: ["Syau", "Kera", "Aap", "Anar"],
    correctAnswer: "Syau",
    category: "Fruits",
    difficulty: "beginner"
  },
  {
    id: 2,
    question: "What is 'Banana' in Nepali?",
    options: ["Anar", "Kera", "Angur", "Amba"],
    correctAnswer: "Kera",
    category: "Fruits",
    difficulty: "beginner"
  },
  {
    id: 3,
    question: "What is 'Mango' in Nepali?",
    options: ["Amba", "Kera", "Syau", "Santara"],
    correctAnswer: "Amba",
    category: "Fruits",
    difficulty: "beginner"
  },
  // Medium Level - Fruits
  {
    id: 4,
    question: "What is 'Orange' in Nepali?",
    options: ["Kera", "Santara", "Amba", "Angur"],
    correctAnswer: "Santara",
    category: "Fruits",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What is 'Grapes' in Nepali?",
    options: ["Angur", "Anar", "Syau", "Kera"],
    correctAnswer: "Angur",
    category: "Fruits",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "What is 'Pomegranate' in Nepali?",
    options: ["Anar", "Angur", "Amba", "Syau"],
    correctAnswer: "Anar",
    category: "Fruits",
    difficulty: "medium"
  },
  // Advanced Level - Fruits
  {
    id: 12,
    question: "What is 'Guava' in Nepali?",
    options: ["Amba", "Belauti", "Kera", "Anar"],
    correctAnswer: "Belauti",
    category: "Fruits",
    difficulty: "advanced"
  },
  {
    id: 13,
    question: "What is 'Papaya' in Nepali?",
    options: ["Mewa", "Syau", "Angur", "Kera"],
    correctAnswer: "Mewa",
    category: "Fruits",
    difficulty: "advanced"
  },
  // Beginner Level - Animals
  {
    id: 6,
    question: "What is 'Dog' in Nepali?",
    options: ["Kukur", "Biralo", "Gai", "Bheda"],
    correctAnswer: "Kukur",
    category: "Animals",
    difficulty: "beginner"
  },
  {
    id: 7,
    question: "What is 'Cat' in Nepali?",
    options: ["Bheda", "Biralo", "Kukur", "Hatti"],
    correctAnswer: "Biralo",
    category: "Animals",
    difficulty: "beginner"
  },
  {
    id: 8,
    question: "What is 'Cow' in Nepali?",
    options: ["Gai", "Bheda", "Kukur", "Sungur"],
    correctAnswer: "Gai",
    category: "Animals",
    difficulty: "beginner"
  },
  // Medium Level - Animals
  {
    id: 9,
    question: "What is 'Elephant' in Nepali?",
    options: ["Hatti", "Bagh", "Kukur", "Gai"],
    correctAnswer: "Hatti",
    category: "Animals",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "What is 'Goat' in Nepali?",
    options: ["Bheda", "Khasi", "Kukur", "Gai"],
    correctAnswer: "Khasi",
    category: "Animals",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "What is 'Buffalo' in Nepali?",
    options: ["Raango", "Gai", "Bheda", "Kukur"],
    correctAnswer: "Raango",
    category: "Animals",
    difficulty: "medium"
  },
  // Advanced Level - Animals
  {
    id: 15,
    question: "What is 'Monkey' in Nepali?",
    options: ["Badar", "Kukur", "Biralo", "Syal"],
    correctAnswer: "Badar",
    category: "Animals",
    difficulty: "advanced"
  },
  {
    id: 16,
    question: "What is 'Tiger' in Nepali?",
    options: ["Bagh", "Hatti", "Syal", "Badar"],
    correctAnswer: "Bagh",
    category: "Animals",
    difficulty: "advanced"
  }
];

export const categories = [...new Set(questions.map(q => q.category))];
