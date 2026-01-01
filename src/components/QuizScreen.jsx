const QuizScreen = ({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions,
  selectedAnswer,
  isAnswered,
  onAnswerClick 
}) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

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
          Question {currentQuestionIndex + 1} of {totalQuestions}
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
                  onClick={() => onAnswerClick(option)}
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

export default QuizScreen;
