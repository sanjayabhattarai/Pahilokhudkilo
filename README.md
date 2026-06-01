# Pahilo Khudkilo (पहिलो खुड्किलो)

**Pahilo Khudkilo** ("First Step" in Nepali) is an interactive, kid-friendly web application for learning the Nepali language through gamified quizzes and exercises. It targets young learners and makes alphabet and vocabulary learning engaging through multiple quiz formats, multilingual support, and celebration animations.

---

## Live Demo

Deployed on Vercel — usage is tracked with Vercel Analytics.

---

## Features

- **6 learning categories:** Vowels, Consonants (8 groups), Baarahkhari, Halant (Half Consonants), Two-letter Words, and Pronouns
- **3 difficulty levels** per category (Easy, Medium, Hard)
- **3 quiz types:** Multiple-choice, 5×5 grid letter-hunt, and letter-pronunciation matching
- **Multilingual questions:** English or Finnish question mode (Nepali answers always shown)
- **Celebration UX:** Animated dancing + Madal tune audio plays on 80%+ score
- **Level progression:** Advance to the next level directly from the score screen
- **Mobile-first:** Fully responsive design with Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| CSS Processing | PostCSS + Autoprefixer |
| Analytics | Vercel Analytics |
| Image Processing | Sharp |

---

## Project Structure

```
pahilokhudkilo/
├── public/
│   ├── pahilokhudkilalogo.png   # App logo
│   ├── favicon.png
│   ├── madal-tune.mp3           # Celebration audio
│   ├── book_eng_nep.pdf         # Reference book (English-Nepali)
│   ├── book_fi_eng_nep.pdf      # Reference book (Finnish-English-Nepali)
│   └── materials/               # Additional educational materials
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Root component — screen routing & game state
│   ├── index.css                # Global styles and custom keyframe animations
│   ├── components/
│   │   ├── WelcomeScreen.jsx    # Landing page with About modal
│   │   ├── LanguageModal.jsx    # English / Finnish question language picker
│   │   ├── ModeSelection.jsx    # Game mode selection
│   │   ├── CategorySelection.jsx
│   │   ├── ConsonantGroupSelection.jsx  # 8 consonant sub-groups
│   │   ├── LevelSelection.jsx   # Easy / Medium / Hard
│   │   ├── QuizScreen.jsx       # Multiple-choice quiz
│   │   ├── GridQuizScreen.jsx   # 5×5 letter-grid puzzle
│   │   ├── MatchingQuizScreen.jsx
│   │   ├── ScoreScreen.jsx      # Results + next-level navigation
│   │   └── DancingCelebration.jsx
│   └── data/
│       └── qsn/
│           ├── questions.js          # Master aggregator
│           ├── vowels.js
│           ├── consonants-group1.js  # क to ङ
│           ├── consonants-other-groups.js  # Groups 2–8
│           ├── baarahkhari.js
│           ├── halant.js
│           ├── two-letter-words.js
│           └── pronouns.js
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Learning Categories

| Category | Nepali | Groups / Levels |
|---|---|---|
| Vowels | स्वर अक्षरहरु | 3 levels |
| Consonants | व्यञ्जन अक्षरहरू | 8 groups × 3 levels |
| Baarahkhari | बाह्रखरी | 3 levels |
| Half Consonants (Halant) | हलन्त | Level 1 |
| Two-letter Words | दुई-अक्षरका शब्द | 3 levels |
| Pronouns | सर्वनाम | 3 levels |

**Consonant groups:**

| Group | Letters |
|---|---|
| 1 | क, ख, ग, घ, ङ |
| 2 | च, छ, ज, झ, ञ |
| 3 | ट, ठ, ड, ढ, ण |
| 4 | त, थ, द, ध, न |
| 5 | प, फ, ब, भ, म |
| 6 | य, र, ल, व |
| 7 | श, ष, स, ह |
| 8 | क्ष, त्र, ज्ञ (combined consonants) |

---

## Question Format

```js
{
  id: 'unique-id',
  category: 'vowels' | 'consonants' | 'baarahkhari' | 'halant' | 'two-letter-words' | 'pronouns',
  level: 1 | 2 | 3,
  consonantGroup: 'group1' | 'group2' | ...,  // consonants only
  type: 'multiple-choice' | 'grid' | 'matching',
  question: {
    nepali: '...',
    english: '...',
    finnish: '...'
  },
  options: ['...', '...', '...', '...'],       // multiple-choice
  correctAnswer: '...',
  explanation: { nepali: '...', english: '...', finnish: '...' }
}
```

---

## Screen Flow

```
WelcomeScreen
    └── LanguageModal (English / Finnish)
            └── ModeSelection
                    └── CategorySelection
                            └── ConsonantGroupSelection  (consonants only)
                                    └── LevelSelection
                                            └── QuizScreen | GridQuizScreen | MatchingQuizScreen
                                                    └── ScoreScreen
                                                            └── (replay / next level / back to categories)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/your-username/pahilokhudkilo.git
cd pahilokhudkilo
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output goes to `/dist`.

### Preview Production Build

```bash
npm run preview
```

---

## Custom Theme Colors

Defined in `tailwind.config.js` for a kid-friendly palette:

| Token | Hex |
|---|---|
| `kid-yellow` | `#FFD93D` |
| `kid-orange` | `#FF6B35` |
| `kid-blue` | `#4ECDC4` |
| `kid-purple` | `#A855F7` |
| `kid-pink` | `#F472B6` |
| `kid-green` | `#10B981` |

---

## Custom Animations

Defined in `src/index.css`:

| Class | Effect |
|---|---|
| `bounce-in` | Scale entry animation for cards |
| `shake` | Wrong-answer shake feedback |
| `success-pulse` | Correct-answer celebration pulse |

---

## Credits

| Role | Person |
|---|---|
| Curriculum & Content | Luv Upadhyaya |
| Development | Sanjay Bhattarai |

**Contact:** pahilokhudkila@gmail.com

---

## License

Private project — all rights reserved.
