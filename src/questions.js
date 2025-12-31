export const questions = [
  {
    id: 1,
    question: "What is 'Apple' in Nepali?",
    options: ["Syau", "Kera", "Aap", "Anar"],
    correctAnswer: "Syau",
    category: "Fruits"
  },
  {
    id: 2,
    question: "What is 'Banana' in Nepali?",
    options: ["Anar", "Kera", "Angur", "Amba"],
    correctAnswer: "Kera",
    category: "Fruits"
  },
  {
    id: 3,
    question: "What is 'Mango' in Nepali?",
    options: ["Amba", "Kera", "Syau", "Santara"],
    correctAnswer: "Amba",
    category: "Fruits"
  },
  {
    id: 4,
    question: "What is 'Orange' in Nepali?",
    options: ["Kera", "Santara", "Amba", "Angur"],
    correctAnswer: "Santara",
    category: "Fruits"
  },
  {
    id: 5,
    question: "What is 'Grapes' in Nepali?",
    options: ["Angur", "Anar", "Syau", "Kera"],
    correctAnswer: "Angur",
    category: "Fruits"
  },
  {
    id: 6,
    question: "What is 'Dog' in Nepali?",
    options: ["Kukur", "Biralo", "Gai", "Bheda"],
    correctAnswer: "Kukur",
    category: "Animals"
  },
  {
    id: 7,
    question: "What is 'Cat' in Nepali?",
    options: ["Bheda", "Biralo", "Kukur", "Hatti"],
    correctAnswer: "Biralo",
    category: "Animals"
  },
  {
    id: 8,
    question: "What is 'Cow' in Nepali?",
    options: ["Gai", "Bheda", "Kukur", "Sungur"],
    correctAnswer: "Gai",
    category: "Animals"
  },
  {
    id: 9,
    question: "What is 'Elephant' in Nepali?",
    options: ["Hatti", "Bagh", "Kukur", "Gai"],
    correctAnswer: "Hatti",
    category: "Animals"
  },
  {
    id: 10,
    question: "What is 'Goat' in Nepali?",
    options: ["Bheda", "Khasi", "Kukur", "Gai"],
    correctAnswer: "Khasi",
    category: "Animals"
  }
];

export const categories = [...new Set(questions.map(q => q.category))];
