// Categories with multilingual names
export const categories = [
  {
    id: 'vowels',
    name: {
      nepali: 'स्वर अक्षरहरु',
      english: 'Vowels',
      finnish: 'Vokaalit'
    },
    emoji: '🔤'
  },
  {
    id: 'consonants',
    name: {
      nepali: 'व्यञ्जन अक्षरहरू',
      english: 'Consonants',
      finnish: 'Konsonantit'
    },
    emoji: '📝',
    hasGroups: true
  },
  {
    id: 'baarahkhari',
    name: {
      nepali: 'बाह्रखरी',
      english: 'Baarahkhari',
      finnish: 'Baarahkhari'
    },
    emoji: '📚'
  },
  {
    id: 'pronouns',
    name: {
      nepali: 'सर्वनाम',
      english: 'Pronouns',
      finnish: 'Pronominit'
    },
    emoji: '👤'
  }
];

// Consonant groups (only for consonants category)
export const consonantGroups = [
  { id: 'group1', range: 'क to ङ', letters: ['क', 'ख', 'ग', 'घ', 'ङ'] },
  { id: 'group2', range: 'च to ञ', letters: ['च', 'छ', 'ज', 'झ', 'ञ'] },
  { id: 'group3', range: 'ट to ण', letters: ['ट', 'ठ', 'ड', 'ढ', 'ण'] },
  { id: 'group4', range: 'त to न', letters: ['त', 'थ', 'द', 'ध', 'न'] },
  { id: 'group5', range: 'प to म', letters: ['प', 'फ', 'ब', 'भ', 'म'] },
  { id: 'group6', range: 'य to व', letters: ['य', 'र', 'ल', 'व'] },
  { id: 'group7', range: 'श to ह', letters: ['श', 'ष', 'स', 'ह'] },
  { id: 'group8', range: 'क्ष to ज्ञ', letters: ['क्ष', 'त्र', 'ज्ञ'] }
];

// Levels (1-3: Easy, Medium, Hard)
export const levels = [1, 2, 3];

// Import questions from organized category files
import { vowelsQuestions } from './questions/vowels.js';
import { consonantsGroup1Questions } from './questions/consonants-group1.js';
import { 
  consonantsGroup2Questions,
  consonantsGroup3Questions,
  consonantsGroup4Questions,
  consonantsGroup5Questions,
  consonantsGroup6Questions,
  consonantsGroup7Questions,
  consonantsGroup8Questions
} from './questions/consonants-other-groups.js';
import { baarahkhariQuestions } from './questions/baarahkhari.js';
import { pronounsQuestions } from './questions/pronouns.js';

// Combine all questions from different category files
export const questions = [
  ...vowelsQuestions,
  ...consonantsGroup1Questions,
  ...consonantsGroup2Questions,
  ...consonantsGroup3Questions,
  ...consonantsGroup4Questions,
  ...consonantsGroup5Questions,
  ...consonantsGroup6Questions,
  ...consonantsGroup7Questions,
  ...consonantsGroup8Questions,
  ...baarahkhariQuestions,
  ...pronounsQuestions
];

/*
 * ==========================================
 * ORGANIZED QUESTION STRUCTURE
 * ==========================================
 * 
 * All questions are now organized in separate files under:
 * src/data/questions/
 * 
 * Files:
 * - vowels.js                    ✅ All vowel questions (36 questions)
 * - consonants-group1.js          ✅ क to ङ questions (15 questions)
 * - consonants-other-groups.js    ✅ Groups 2-8 complete (73 questions)
 * - baarahkhari.js               ⏳ Baarahkhari questions (TODO: Add questions)
 * - pronouns.js                  ⏳ Pronoun questions (TODO: Add questions)
 * 
 * TOTAL QUESTIONS: 124 (36 vowels + 88 consonants)
 * 
 * QUESTION TYPES:
 * - Multiple Choice: Standard questions with 4 options
 * - Grid Search: Find letters in 5x5 grid
 * - Matching: Match letters with pronunciations (Level 1)
 * 
 * HOW TO ADD MORE QUESTIONS:
 * 1. Open the appropriate category file in src/data/questions/
 * 2. Add your question following the existing format
 * 3. The main questions.js file will automatically include it
 * 
 * ORIGINAL BACKUP:
 * Original questions backed up in: questions.backup.js
 * 
 * See README.md in questions/ folder for detailed instructions.
 */
