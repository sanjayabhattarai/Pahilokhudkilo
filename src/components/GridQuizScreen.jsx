import { useState } from 'react';

function GridQuizScreen({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  selectedLanguage,
  onComplete,
  onBack
}) {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Get question text based on language
  const getQuestionText = () => {
    const { question } = currentQuestion;
    if (selectedLanguage === 'finnish') {
      return (
        <>
          <div className="text-2xl font-bold text-kid-purple">{question.nepali}</div>
          <div className="text-xl text-kid-blue mt-2">{question.english}</div>
          <div className="text-xl text-kid-green mt-1">{question.finnish}</div>
        </>
      );
    } else {
      // English selected - show English + Nepali
      return (
        <>
          <div className="text-2xl font-bold text-kid-blue">{question.english}</div>
          <div className="text-xl text-kid-purple mt-2">{question.nepali}</div>
        </>
      );
    }
  };

  const handleCellClick = (rowIndex, colIndex, letter) => {
    const cellKey = `${rowIndex}-${colIndex}`;
    
    if (isCompleted) return;

    // Check if already selected
    if (selectedCells.some(cell => cell.key === cellKey)) {
      // Deselect
      setSelectedCells(selectedCells.filter(cell => cell.key !== cellKey));
    } else {
      // Select
      setSelectedCells([...selectedCells, { key: cellKey, letter }]);
    }
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    
    // Calculate score
    const selectedLetters = selectedCells.map(cell => cell.letter);
    const correctAnswers = currentQuestion.correctAnswers;
    
    // Count correct selections
    const correctSelections = selectedLetters.filter(letter => 
      correctAnswers.includes(letter)
    ).length;

    // Check if all correct answers were found
    const allFound = correctAnswers.every(answer => 
      selectedLetters.includes(answer)
    );

    const isCorrect = allFound && selectedLetters.length === correctAnswers.length;

    // Wait a bit then move to next question
    setTimeout(() => {
      onComplete(isCorrect);
    }, 2000);
  };

  const isCellSelected = (rowIndex, colIndex) => {
    return selectedCells.some(cell => cell.key === `${rowIndex}-${colIndex}`);
  };

  const isCellCorrect = (letter) => {
    return currentQuestion.correctAnswers.includes(letter);
  };

  const getCellStyle = (rowIndex, colIndex, letter) => {
    const isSelected = isCellSelected(rowIndex, colIndex);
    const isCorrect = isCellCorrect(letter);

    if (isCompleted) {
      if (isSelected && isCorrect) {
        return 'bg-green-500 text-white border-green-600';
      } else if (isSelected && !isCorrect) {
        return 'bg-red-500 text-white border-red-600';
      } else if (!isSelected && isCorrect) {
        return 'bg-yellow-300 text-gray-800 border-yellow-500 animate-pulse';
      }
    } else if (isSelected) {
      return 'bg-kid-blue text-white border-kid-blue transform scale-110';
    }

    return 'bg-white text-gray-800 border-gray-300 hover:bg-kid-yellow hover:border-kid-orange';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-pink via-kid-purple to-kid-blue p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-bold text-lg">
              प्रश्न {currentQuestionIndex + 1} / {totalQuestions}
            </span>
            <span className="text-white font-bold text-lg">
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
          <div className="h-3 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-kid-green transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          {/* Question Text */}
          <div className="text-center mb-8">
            {getQuestionText()}
          </div>

          {/* Letters to Find */}
          <div className="mb-6 text-center">
            <div className="text-lg font-semibold text-gray-700 mb-3">
              {selectedLanguage === 'finnish' ? 'Etsi:' : 'Find:'} 
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {currentQuestion.correctAnswers.map((letter, index) => (
                <span 
                  key={index}
                  className="inline-block px-4 py-2 bg-kid-yellow text-kid-purple font-bold text-xl rounded-lg border-2 border-kid-orange"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="flex justify-center mb-6">
            <div className="inline-block">
              {currentQuestion.grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {row.map((letter, colIndex) => (
                    <button
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => handleCellClick(rowIndex, colIndex, letter)}
                      disabled={isCompleted}
                      className={`
                        w-14 h-14 m-1 flex items-center justify-center
                        text-2xl font-bold rounded-lg border-2
                        transition-all duration-200
                        ${getCellStyle(rowIndex, colIndex, letter)}
                        ${!isCompleted ? 'cursor-pointer' : 'cursor-default'}
                      `}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          {!isCompleted && (
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={selectedCells.length === 0}
                className={`
                  px-8 py-4 rounded-2xl font-bold text-xl
                  transition-all duration-200 transform
                  ${selectedCells.length > 0
                    ? 'bg-kid-green text-white hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                {selectedLanguage === 'finnish' ? 'Tarkista' : 'Submit'} ✓
              </button>
              <div className="mt-3 text-sm text-gray-600">
                {selectedCells.length} / {currentQuestion.correctAnswers.length} selected
              </div>
            </div>
          )}

          {/* Result Message */}
          {isCompleted && (
            <div className="text-center">
              {selectedCells.filter(cell => currentQuestion.correctAnswers.includes(cell.letter)).length === currentQuestion.correctAnswers.length &&
               selectedCells.length === currentQuestion.correctAnswers.length ? (
                <div className="text-3xl font-bold text-green-600 animate-bounce">
                  🎉 {selectedLanguage === 'finnish' ? 'Oikein!' : 'Correct!'}
                </div>
              ) : (
                <div className="text-2xl font-bold text-orange-600">
                  {selectedLanguage === 'finnish' ? 'Yritä uudelleen!' : 'Try again!'}
                </div>
              )}
            </div>
          )}

          {/* Back Button */}
          <div className="text-center mt-8">
            <button
              onClick={onBack}
              className="bg-white text-kid-purple px-8 py-3 rounded-full text-xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-lg
                       hover:shadow-xl active:scale-95 border-2 border-kid-purple"
            >
              ← Back to Levels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridQuizScreen;
