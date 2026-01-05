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
    id: 'halant',
    name: {
      nepali: 'हलन्त',
      english: 'Halg Consonants',
      finnish: 'Puolikonsonantti'
    },
    emoji: '🔠'
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
    id: 'two-letter-words',
    name: {
      nepali: 'दुई-अक्षरका शब्द',
      english: 'Two-letter Words',
      finnish: 'Kaksikirjaimiset Sanat'
    },
    emoji: '✌️'
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
import { vowelsQuestions } from './qsn/vowels.js';
import { consonantsGroup1Questions } from './qsn/consonants-group1.js';
import { 
  consonantsGroup2Questions,
  consonantsGroup3Questions,
  consonantsGroup4Questions,
  consonantsGroup5Questions,
  consonantsGroup6Questions,
  consonantsGroup7Questions,
  consonantsGroup8Questions
} from './qsn/consonants-other-groups.js';
import { halantQuestions } from './qsn/halant.js';
import { baarahkhariQuestions } from './qsn/baarahkhari.js';
import { twoLetterWordsQuestions } from './qsn/two-letter-words.js';
import { pronounsQuestions } from './qsn/pronouns.js';

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
  ...halantQuestions,
  ...baarahkhariQuestions,
  ...twoLetterWordsQuestions,
  ...pronounsQuestions
];

/*
 * ==========================================
 * ORGANIZED QUESTION STRUCTURE
 * ==========================================
 * 
 * All questions are organized in separate files under:
 * src/data/qsn/
 * 
 * Categories & Files:
 * 🔤 vowels.js                    ✅ स्वर अक्षरहरु / Vowels / Vokaalit (36 questions)
 * 📝 consonants-group1.js          ✅ व्यञ्जन (Group 1: क to ङ) (15 questions)
 * 📝 consonants-other-groups.js    ✅ व्यञ्जन (Groups 2-8: च to ज्ञ) (73 questions)
 * 🔠 halant.js                    ⏳ हलन्त / Halg Consonants (1 question - needs more)
 * 📚 baarahkhari.js               ⏳ बाह्रखरी (TODO: Add questions)
 * ✌️ two-letter-words.js          ⏳ दुई-अक्षरका शब्द / Two-letter Words (1 question - needs more)
 * 👤 pronouns.js                  ⏳ सर्वनाम / Pronouns (TODO: Add questions)
 * 
 * TOTAL QUESTIONS: 126+ (36 vowels + 88 consonants + 2 new categories)
 * 
 * QUESTION TYPES:
 * - Multiple Choice: Standard questions with 4 options
 * - Grid Search: Find letters in 5x5 grid
 * - Matching: Match letters with pronunciations
 * 
 * HOW TO ADD/EDIT/DELETE QUESTIONS:
 * 1. Navigate to src/data/qsn/
 * 2. Open the appropriate category file
 * 3. Add/edit/remove questions following the format
 * 4. See qsn/README.md for detailed instructions
 */
