# Questions Folder (qsn)

This folder contains all the quiz questions organized by category.

## 📁 File Structure

Each category has its own file for easy management:

### 1. 🔤 **vowels.js**
   - **Category:** स्वर अक्षरहरु / Vowels / Vokaalit
   - Contains questions about Nepali vowels (अ, आ, इ, ई, etc.)
   - 3 levels: Easy, Medium, Hard

### 2. 📝 **Consonants**
   - **consonants-group1.js** - क to ङ questions
   - **consonants-other-groups.js** - Groups 2-8 (च to ज्ञ)
   - Category: व्यञ्जन अक्षरहरू / Consonants / Konsonantit
   - 8 groups of consonants with multiple questions per group

### 3. 🔠 **halant.js**
   - **Category:** हलन्त / Halg Consonants / Puolikonsonantti
   - Contains questions about halant consonants (क्, ख्, etc.)
   - 3 levels: Easy, Medium, Hard

### 4. 📚 **baarahkhari.js**
   - **Category:** बाह्रखरी / Baarahkhari
   - Contains questions about Baarahkhari (क, का, कि, की, etc.)
   - 3 levels: Easy, Medium, Hard

### 5. ✌️ **two-letter-words.js**
   - **Category:** दुई-अक्षरका शब्द / Two-letter Words / Kaksikirjaimiset Sanat
   - Contains questions about two-letter Nepali words
   - 3 levels: Easy, Medium, Hard

### 6. 👤 **pronouns.js**
   - **Category:** सर्वनाम / Pronouns / Pronominit
   - Contains questions about Nepali pronouns (म, तिमी, उनी, etc.)
   - 3 levels: Easy, Medium, Hard

## 📝 How to Add/Edit Questions

### Adding New Questions
1. Open the appropriate category file
2. Add your question following this format:
```javascript
{
  id: 'category-level-number',
  category: 'category-id',
  level: 1, // 1=Easy, 2=Medium, 3=Hard
  type: 'multiple-choice', // or 'grid', 'matching'
  question: {
    nepali: 'Question in Nepali',
    english: 'Question in English',
    finnish: 'Question in Finnish'
  },
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 'Correct Option',
  explanation: {
    nepali: 'Explanation in Nepali',
    english: 'Explanation in English',
    finnish: 'Explanation in Finnish'
  }
}
```

### Editing Questions
1. Find the question by its ID
2. Update the necessary fields
3. Save the file

### Deleting Questions
1. Find the question in the appropriate file
2. Remove the entire question object
3. Save the file

## 🎯 Question Types

- **multiple-choice**: Standard 4-option questions
- **grid**: Find letters in a 5x5 grid
- **matching**: Match letters with pronunciations

## 📊 Current Status

- ✅ Vowels: Complete with multiple questions
- ✅ Consonants: Complete (Groups 1-8)
- ⏳ Halant: 1 starter question (needs more)
- ⏳ Baarahkhari: Needs questions
- ⏳ Two-letter Words: 1 starter question (needs more)
- ⏳ Pronouns: Needs questions

## 💡 Tips

- Keep questions age-appropriate (for kids)
- Use emojis in questions to make them fun
- Test questions before adding them
- Maintain consistent ID format: `category-level-number`
