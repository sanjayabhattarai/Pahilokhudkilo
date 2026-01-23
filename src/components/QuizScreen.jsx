const QuizScreen = ({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions,
  selectedAnswer,
  isAnswered,
  selectedLanguage,
  onAnswerClick,
  onBack
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Get question text based on selected language
  const getQuestionText = () => {
    if (selectedLanguage === 'finnish') {
      // Show all three: Nepali + English + Finnish
      return (
        <div className="space-y-3">
          <p className="text-kid-purple">{currentQuestion.question.nepali}</p>
          <p className="text-kid-blue">{currentQuestion.question.english}</p>
          <p className="text-kid-green">{currentQuestion.question.finnish}</p>
        </div>
      );
    } else {
      // Show English + Nepali
      return (
        <div className="space-y-3">
          <p className="text-kid-blue">{currentQuestion.question.english}</p>
          <p className="text-kid-purple">{currentQuestion.question.nepali}</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-blue to-kid-purple p-3 sm:p-4 md:p-6 relative">
      {/* Back Button - Top Left Corner */}
      <div className="max-w-4xl mx-auto pt-2 sm:pt-3 md:pt-4 mb-3 sm:mb-4">
        <button
          onClick={onBack}
          className="bg-white text-kid-purple px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-bold 
                   hover:scale-105 transform transition-all duration-300 shadow-lg
                   hover:shadow-xl active:scale-95 border-2 border-kid-purple"
        >
          ← Back
        </button>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-2">
        <div className="bg-white rounded-full h-4 sm:h-5 md:h-6 mb-4 sm:mb-6 md:mb-8 shadow-lg overflow-hidden">
          <div
            className="bg-kid-green h-full transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-white text-lg sm:text-xl md:text-2xl text-center font-bold mb-3 sm:mb-4">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto mt-4 sm:mt-6 md:mt-8 px-2">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl animate-bounce-in">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            {getQuestionText()}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "bg-kid-blue text-white hover:bg-opacity-80";
              let isDisabled = false;
              
              if (isAnswered) {
                // Correct answer was selected - show green for correct, gray for others
                if (option === currentQuestion.correctAnswer) {
                  buttonClass = "bg-kid-green text-white animate-success";
                } else {
                  buttonClass = "bg-gray-300 text-gray-600 cursor-not-allowed";
                }
                isDisabled = true;
              } else if (selectedAnswer === option) {
                // Wrong answer selected - show red briefly
                buttonClass = "bg-red-500 text-white animate-shake";
              }

              return (
                <button
                  key={index}
                  onClick={() => onAnswerClick(option)}
                  disabled={isDisabled}
                  className={`${buttonClass} px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold 
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

export default QuizScreen;
