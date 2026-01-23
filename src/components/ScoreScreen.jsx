import { useState, useEffect } from 'react';
import DancingCelebration from './DancingCelebration';

const ScoreScreen = ({ score, totalQuestions, level, onNextLevel, onBackToMenu }) => {
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

  const hasNextLevel = level < 3;

  return (
    <>
      {showCelebration && (
        <DancingCelebration audioSrc="/madal-tune.mp3" />
      )}
      
      <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-pink to-kid-orange flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="text-center animate-bounce-in max-w-2xl px-2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
            {emoji}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Your Score
          </h3>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg">
            {score}/{totalQuestions}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white mb-8 sm:mb-10 md:mb-12 drop-shadow px-4">
            {message}
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4">
            {hasNextLevel && (
              <button
                onClick={onNextLevel}
                className="bg-kid-green text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
                         hover:scale-110 transform transition-all duration-300 shadow-2xl
                         hover:shadow-3xl active:scale-95"
              >
                Next Level ➡️ Level {level + 1}
              </button>
            )}
            
            <button
              onClick={onBackToMenu}
              className="bg-white text-kid-purple px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
                       hover:scale-110 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95"
            >
              Back to Menu 🏠
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreScreen;
