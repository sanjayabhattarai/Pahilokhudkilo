import { useState, useEffect } from 'react';
import DancingCelebration from './DancingCelebration';

const ScoreScreen = ({ score, totalQuestions, difficulty, onPlayAgain }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const percentage = (score / totalQuestions) * 100;
  let message = "";
  let emoji = "";

  if (percentage === 100) {
    message = "Perfect! You're a Nepali Master! 🌟";
    emoji = "🎉";
  } else if (percentage >= 80) {
    message = "Excellent Work! Keep it up! 👏";
    emoji = "😊";
  } else if (percentage >= 60) {
    message = "Good Job! Practice more! 💪";
    emoji = "😄";
  } else {
    message = "Keep Learning! You can do it! 📚";
    emoji = "🤗";
  }

  // Show celebration when score is good (80% or above) for all difficulty levels
  useEffect(() => {
    if (percentage >= 80) {
      setShowCelebration(true);
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [percentage]);

  return (
    <>
      {showCelebration && (
        <DancingCelebration audioSrc="/madal-tune.mp3" />
      )}
      
      <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-pink to-kid-orange flex items-center justify-center p-4">
        <div className="text-center animate-bounce-in max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
            {emoji}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Score
          </h3>
          <p className="text-7xl md:text-9xl font-bold text-white mb-8 drop-shadow-lg">
            {score}/{totalQuestions}
          </p>
          <p className="text-3xl md:text-4xl text-white mb-12 drop-shadow">
            {message}
          </p>
          <button
            onClick={onPlayAgain}
            className="bg-white text-kid-purple px-12 py-6 rounded-full text-3xl font-bold 
                     hover:scale-110 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    </>
  );
};

export default ScoreScreen;
