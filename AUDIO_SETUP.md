# How to Add Madal Music to Your App

## Step 1: Get a Madal Audio File

1. Download a Nepali madal tune (MP3 format)
2. You can find free Nepali madal music on:
   - YouTube (use a converter)
   - Freesound.org
   - Other royalty-free music sites

## Step 2: Add the Audio File

1. Create a `public` folder in your project root if it doesn't exist
2. Place your madal audio file in the `public` folder
3. Rename it to `madal-tune.mp3`

```
PahiloKhudkilo/
├── public/
│   └── madal-tune.mp3  👈 Put your audio file here
├── src/
└── ...
```

## Alternative: Use Online Audio

If you can't find a file, you can use an online URL:

```javascript
// In ScoreScreen.jsx, change:
<DancingCelebration audioSrc="/madal-tune.mp3" />

// To:
<DancingCelebration audioSrc="https://example.com/your-madal-tune.mp3" />
```

## What Happens Now:

✅ When a student completes **beginner level** with **80% or higher**:
- Dancing characters appear (🕺💃)
- Confetti falls
- Drums beat (🥁🥁)
- Madal music plays automatically
- Shows Nepali congratulations text: "बधाई छ!"
- Animation runs for 8 seconds then fades away

The animation will ONLY show for beginner level completions!
