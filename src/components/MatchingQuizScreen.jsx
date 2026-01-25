import { useState } from 'react';

function MatchingQuizScreen({ 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  selectedLanguage,
  onComplete,
  onBack
}) {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedPronunciation, setSelectedPronunciation] = useState(null);
  const [matches, setMatches] = useState([]);
  const [incorrectAttempts, setIncorrectAttempts] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Shuffle pairs for display
  const [letters] = useState(() => 
    [...currentQuestion.pairs].sort(() => Math.random() - 0.5)
  );
  const [pronunciations] = useState(() => 
    [...currentQuestion.pairs].map(p => p.pronunciation).sort(() => Math.random() - 0.5)
  );

  const handleLetterClick = (letter) => {
    if (matches.some(m => m.letter === letter)) return;
    setSelectedLetter(letter);
    
    // If pronunciation already selected, check match
    if (selectedPronunciation) {
      checkMatch(letter, selectedPronunciation);
    }
  };

  const handlePronunciationClick = (pronunciation) => {
    if (matches.some(m => m.pronunciation === pronunciation)) return;
    setSelectedPronunciation(pronunciation);
    
    // If letter already selected, check match
    if (selectedLetter) {
      checkMatch(selectedLetter, pronunciation);
    }
  };

  const checkMatch = (letter, pronunciation) => {
    const correctPair = currentQuestion.pairs.find(
      p => p.letter === letter && p.pronunciation === pronunciation
    );

    if (correctPair) {
      // Correct match
      setMatches([...matches, { letter, pronunciation }]);
      setSelectedLetter(null);
      setSelectedPronunciation(null);
      
      // Check if all matches complete
      if (matches.length + 1 === currentQuestion.pairs.length) {
        setShowFeedback(true);
        setTimeout(() => {
          onComplete(true); // All correct
        }, 1500);
      }
    } else {
      // Incorrect match - show feedback briefly
      setIncorrectAttempts([...incorrectAttempts, { letter, pronunciation }]);
      setTimeout(() => {
        setSelectedLetter(null);
        setSelectedPronunciation(null);
        setIncorrectAttempts(incorrectAttempts.filter(
          attempt => !(attempt.letter === letter && attempt.pronunciation === pronunciation)
        ));
      }, 800);
    }
  };

  const isMatched = (letter, pronunciation) => {
    return matches.some(m => m.letter === letter || m.pronunciation === pronunciation);
  };

  const isIncorrect = (letter, pronunciation) => {
    return incorrectAttempts.some(
      attempt => attempt.letter === letter && attempt.pronunciation === pronunciation
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-pink to-kid-orange p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="text-white text-sm sm:text-base md:text-lg mb-2">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
            {currentQuestion.question[selectedLanguage]}
          </h2>
          <div className="text-kid-yellow text-base sm:text-lg md:text-xl font-semibold">
            {matches.length} / {currentQuestion.pairs.length} matched
          </div>
        </div>

        {/* Matching Interface */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Letters Column */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Letters</h3>
            {letters.map((pair) => (
              <button
                key={pair.letter}
                onClick={() => handleLetterClick(pair.letter)}
                disabled={isMatched(pair.letter, null)}
                className={`
                  w-full p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 transform
                  ${isMatched(pair.letter, null) 
                    ? 'bg-kid-green text-white scale-95 opacity-50 cursor-not-allowed' 
                    : selectedLetter === pair.letter
                    ? isIncorrect(pair.letter, selectedPronunciation)
                      ? 'bg-red-500 text-white scale-105 animate-shake'
                      : 'bg-kid-yellow text-gray-800 scale-105 shadow-2xl ring-4 ring-white'
                    : 'bg-white text-gray-800 hover:scale-105 hover:shadow-xl'
                  }
                `}
              >
                {pair.letter}
              </button>
            ))}
          </div>

          {/* Pronunciations Column */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Pronunciation</h3>
            {pronunciations.map((pronunciation) => (
              <button
                key={pronunciation}
                onClick={() => handlePronunciationClick(pronunciation)}
                disabled={isMatched(null, pronunciation)}
                className={`
                  w-full p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 transform
                  ${isMatched(null, pronunciation)
                    ? 'bg-kid-green text-white scale-95 opacity-50 cursor-not-allowed'
                    : selectedPronunciation === pronunciation
                    ? isIncorrect(selectedLetter, pronunciation)
                      ? 'bg-red-500 text-white scale-105 animate-shake'
                      : 'bg-kid-blue text-white scale-105 shadow-2xl ring-4 ring-white'
                    : 'bg-white text-gray-800 hover:scale-105 hover:shadow-xl'
                  }
                `}
              >
                {pronunciation}
              </button>
            ))}
          </div>
        </div>

        {/* Success Feedback */}
        {showFeedback && (
          <div className="text-center animate-bounce-in">
            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🎉</div>
            <div className="text-white text-2xl sm:text-3xl font-bold">Perfect Match!</div>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-white text-sm sm:text-base md:text-lg bg-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm mb-4 sm:mb-6">
          Click a letter, then click its matching pronunciation
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="bg-white text-kid-purple px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-lg
                     hover:shadow-xl active:scale-95 border-2 border-kid-purple"
          >
            ← Back to Levels
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchingQuizScreen;
