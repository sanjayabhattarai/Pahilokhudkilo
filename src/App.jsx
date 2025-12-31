import { useState } from 'react';
import { questions, categories } from './questions';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // welcome, topicSelect, quiz, score
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const filteredQuestions = selectedCategory
    ? questions.filter(q => q.category === selectedCategory)
    : questions;

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleStartGame = () => {
    setCurrentScreen('topicSelect');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswerClick = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setCurrentScreen('score');
      }
    }, 1500);
  };

  const handlePlayAgain = () => {
    setCurrentScreen('welcome');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-pink flex items-center justify-center p-4">
      <div className="text-center animate-bounce-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
          🎉 पहिलो खुड्किलोमा स्वागत छ 🎉
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-12 drop-shadow">
          Learn Nepali in a Fun Way!
        </p>
        <button
          onClick={handleStartGame}
          className="bg-white text-kid-orange px-12 py-6 rounded-full text-3xl font-bold 
                   hover:scale-110 transform transition-all duration-300 shadow-2xl
                   hover:shadow-3xl active:scale-95"
        >
          Start Game
        </button>
      </div>
    </div>
  );

  // Topic Select Screen Component
  const TopicSelect = () => (
    <div className="min-h-screen bg-gradient-to-br from-kid-blue via-kid-purple to-kid-pink flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-bounce-in">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Choose a Topic! 📚
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className="bg-white text-kid-purple px-8 py-12 rounded-3xl text-3xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category === 'Fruits' ? '🍎' : '🐶'} {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Quiz Screen Component
  const QuizScreen = () => {
    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-blue to-kid-purple p-4">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="bg-white rounded-full h-6 mb-8 shadow-lg overflow-hidden">
            <div
              className="bg-kid-green h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white text-2xl text-center font-bold mb-4">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
          </p>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-bounce-in">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "bg-kid-blue text-white hover:bg-opacity-80";
                
                if (isAnswered) {
                  if (option === currentQuestion.correctAnswer) {
                    buttonClass = "bg-kid-green text-white animate-success";
                  } else if (option === selectedAnswer) {
                    buttonClass = "bg-red-500 text-white animate-shake";
                  } else {
                    buttonClass = "bg-gray-300 text-gray-600 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    disabled={isAnswered}
                    className={`${buttonClass} px-8 py-6 rounded-full text-2xl font-bold 
                             transform transition-all duration-300 shadow-lg
                             hover:scale-105 active:scale-95 disabled:hover:scale-100`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Score Screen Component
  const ScoreScreen = () => {
    const percentage = (score / filteredQuestions.length) * 100;
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

    return (
      <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-pink to-kid-orange flex items-center justify-center p-4">
        <div className="text-center animate-bounce-in max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
            {emoji}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Score
          </h3>
          <p className="text-7xl md:text-9xl font-bold text-white mb-8 drop-shadow-lg">
            {score}/{filteredQuestions.length}
          </p>
          <p className="text-3xl md:text-4xl text-white mb-12 drop-shadow">
            {message}
          </p>
          <button
            onClick={handlePlayAgain}
            className="bg-white text-kid-purple px-12 py-6 rounded-full text-3xl font-bold 
                     hover:scale-110 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    );
  };

  // Render current screen
  return (
    <>
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'topicSelect' && <TopicSelect />}
      {currentScreen === 'quiz' && <QuizScreen />}
      {currentScreen === 'score' && <ScoreScreen />}
    </>
  );
}

export default App;
