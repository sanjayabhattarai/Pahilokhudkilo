# Questions Folder - README

## 📁 Organization

All questions are organized by category in separate files for easy maintenance.

### File Structure
```
questions/
├── README.md (this file)
├── vowels.js ✅ (36 questions)
├── consonants-group1.js ✅ (15 questions)
├── consonants-other-groups.js ✅ (73 questions - groups 2-8)
├── baarahkhari.js ⏳ (placeholder)
└── pronouns.js ⏳ (placeholder)
```

---

## 📊 Current Status

| File | Questions | Status | Notes |
|------|-----------|--------|-------|
| vowels.js | 36 | ✅ Complete | All 11 vowels with multiple levels |
| consonants-group1.js | 15 | ✅ Complete | क to ङ with matching game |
| consonants-other-groups.js | 73 | ✅ Complete | All 8 groups with matching |
| baarahkhari.js | 0 | ⏳ Waiting | Awaiting content |
| pronouns.js | 0 | ⏳ Waiting | Awaiting content |
| **TOTAL** | **124** | **100% consonants/vowels** | Ready for expansion |

---

## 🎯 Question Types

### 1. Multiple Choice (Default)
Standard quiz format with 4 options.

```javascript
{
  id: 1,
  category: 'vowels',
  level: 1,
  question: {
    nepali: 'कुन अक्षर अ हो?',
    english: 'Which alphabet is अ?',
    finnish: 'Mikä kirjain on अ?'
  },
  options: ['a', 'aa', 'i', 'u'],
  correctAnswer: 'a'
}
```

### 2. Grid Search
Find letters in a 5x5 grid.

```javascript
{
  id: 114,
  category: 'vowels',
  level: 2,
  type: 'grid',  // ← Important!
  question: {
    nepali: 'यी अक्षरहरू फेला पार्नुहोस्',
    english: 'Find These Letters',
    finnish: 'Etsi nämä kirjeet'
  },
  grid: [
    ['अ', 'क', 'आ', 'म', 'इ'],
    ['ल', 'प', 'ई', 'ग', 'उ'],
    ['ऊ', 'त', 'न', 'ऋ', 'र'],
    ['ए', 'ब', 'द', 'ऐ', 'स'],
    ['ओ', 'य', 'व', 'औ', 'ह']
  ],
  correctAnswers: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ']
}
```

### 3. Matching Pairs (NEW!)
Interactive letter-pronunciation matching.

```javascript
{
  id: 201,
  category: 'consonants',
  consonantGroup: 'group1',
  level: 1,
  type: 'matching',  // ← Important!
  question: {
    nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
    english: 'Match alphabets with the right pronunciation.',
    finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
  },
  pairs: [
    { letter: 'क', pronunciation: 'Ka' },
    { letter: 'ख', pronunciation: 'Kha' },
    { letter: 'ग', pronunciation: 'Ga' },
    { letter: 'घ', pronunciation: 'Gha' },
    { letter: 'ङ', pronunciation: 'Nga' }
  ]
}
```

---

## 🔢 ID System

To avoid conflicts, use these ID ranges:

| Range | Category | Details |
|-------|----------|---------|
| 1-35 | Vowels | Standard questions |
| 36-113 | Consonants | Groups 1-8, Levels 2-4 |
| 114-122 | Grid Questions | Cross-category |
| 201-208 | Matching Level 1 | Consonant groups 1-8 |
| 300+ | Baarahkhari | Reserved for future |
| 400+ | Pronouns | Reserved for future |

---

## 📝 Adding New Questions

### Step 1: Choose the Right File
- Vowels → `vowels.js`
- Consonants Group 1 (क to ङ) → `consonants-group1.js`
- Consonants Groups 2-8 → `consonants-other-groups.js`
- Baarahkhari → `baarahkhari.js`
- Pronouns → `pronouns.js`

### Step 2: Copy a Template

#### For Multiple Choice:
```javascript
{
  id: YOUR_UNIQUE_ID,
  category: 'vowels',  // or 'consonants', 'baarahkhari', 'pronouns'
  consonantGroup: 'group1',  // only for consonants
  level: 2,  // 1-4
  question: {
    nepali: 'YOUR QUESTION IN NEPALI',
    english: 'YOUR QUESTION IN ENGLISH',
    finnish: 'YOUR QUESTION IN FINNISH'
  },
  options: ['option1', 'option2', 'option3', 'option4'],
  correctAnswer: 'option1'
}
```

#### For Grid Search:
```javascript
{
  id: YOUR_UNIQUE_ID,
  category: 'consonants',
  consonantGroup: 'group2',
  level: 3,
  type: 'grid',  // DON'T FORGET THIS!
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
```

#### For Matching:
```javascript
{
  id: YOUR_UNIQUE_ID,
  category: 'consonants',
  consonantGroup: 'group3',
  level: 1,
  type: 'matching',  // DON'T FORGET THIS!
  question: {
    nepali: 'सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्।',
    english: 'Match alphabets with the right pronunciation.',
    finnish: 'Yhdistä aakkoset oikeaan ääntämykseen.'
  },
  pairs: [
    { letter: 'ट', pronunciation: 'Ta' },
    { letter: 'ठ', pronunciation: 'Tha' },
    { letter: 'ड', pronunciation: 'Da' },
    { letter: 'ढ', pronunciation: 'Dha' },
    { letter: 'ण', pronunciation: 'Anda' }
  ]
}
```

### Step 3: Add to Array
Add your question object to the appropriate array in the file.

### Step 4: Test
Save the file and test in the app. The main `questions.js` will automatically import it.

---

## 🌍 Multilingual Support

**EVERY** question must have translations in all 3 languages:

```javascript
question: {
  nepali: 'नेपाली प्रश्न',    // Primary
  english: 'English question',  // Secondary
  finnish: 'Suomalainen kysymys'  // Tertiary
}
```

### Common Translations

#### Questions
| Nepali | English | Finnish |
|--------|---------|---------|
| कुन अक्षर X हो? | Which alphabet is X? | Mikä kirjain on X? |
| X मा कुन अक्षर छ? | Which alphabet is in X? | Mikä kirjain on sanassa X? |
| यी अक्षरहरू फेला पार्नुहोस् | Find These Letters | Etsi nämä kirjeet |
| सही उच्चारणसँग वर्णमालाहरू मिलाउनुहोस्। | Match alphabets with the right pronunciation. | Yhdistä aakkoset oikeaan ääntämykseen. |

---

## ✅ Testing Checklist

Before committing new questions:

- [ ] Unique ID assigned (no conflicts)
- [ ] All 3 languages provided (Nepali, English, Finnish)
- [ ] Correct category assigned
- [ ] Correct level assigned (1-4)
- [ ] consonantGroup specified (for consonants only)
- [ ] type specified (for grid/matching questions)
- [ ] Correct answer is in options array (for multiple choice)
- [ ] Grid is 5x5 (for grid questions)
- [ ] All correctAnswers exist in grid (for grid questions)
- [ ] Pairs have both letter and pronunciation (for matching)
- [ ] Tested in app (no errors in console)
- [ ] Question displays correctly in all 3 languages

---

## 🎨 Best Practices

### Question Quality
✅ **DO:**
- Use simple, clear language
- Test pronunciations with native speakers
- Make options distinct (avoid confusing similar letters)
- Use common, kid-friendly words

❌ **DON'T:**
- Use complex vocabulary
- Create ambiguous questions
- Make options too similar
- Use adult/formal language

### Technical
✅ **DO:**
- Follow the ID system
- Use proper Nepali Unicode
- Include all required fields
- Test before committing

❌ **DON'T:**
- Skip language translations
- Reuse IDs
- Forget type field for special questions
- Leave TODO comments in production

---

## 📈 Future Expansion

### Planned Categories
1. **Baarahkhari** (बाह्रखरी)
   - 12 rows × 36 forms = 432 possible questions
   - Suggested: 50-100 carefully selected questions

2. **Pronouns** (सर्वनाम)
   - Personal pronouns
   - Demonstrative pronouns
   - Suggested: 30-50 questions

### Suggested Additions
- Audio pronunciations
- Picture-based questions (for words)
- Timed challenges
- Difficulty settings

---

## 🔗 Related Files

- **Main Questions**: `../questions.js` (imports all category files)
- **Components**:
  - `../../components/QuizScreen.jsx` (multiple choice)
  - `../../components/GridQuizScreen.jsx` (grid search)
  - `../../components/MatchingQuizScreen.jsx` (matching pairs)
- **Backup**: `../questions.backup.js` (original 122 questions)

---

## 💡 Need Help?

### Common Issues

**Q: My question doesn't appear in the app**
- Check the export statement in your file
- Verify the import in `questions.js`
- Make sure ID doesn't conflict with existing questions

**Q: Grid question not working**
- Ensure `type: 'grid'` is set
- Verify grid is exactly 5x5
- Check that correctAnswers exist in the grid

**Q: Matching question not showing**
- Ensure `type: 'matching'` is set
- Verify pairs array has objects with letter and pronunciation
- Check that MatchingQuizScreen is imported in App.jsx

**Q: Wrong language showing**
- All questions need nepali, english, and finnish properties
- Check spelling of language keys (case-sensitive)

---

**Last Updated**: Today
**Total Questions**: 124
**Question Types**: 3 (Multiple Choice, Grid, Matching)
**Languages**: 3 (Nepali, English, Finnish)
