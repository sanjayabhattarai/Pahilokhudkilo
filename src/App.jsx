import { useState } from 'react';
import { questions } from './data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import LanguageModal from './components/LanguageModal';
import CategorySelection from './components/CategorySelection';
import ConsonantGroupSelection from './components/ConsonantGroupSelection';
import LevelSelection from './components/LevelSelection';
import QuizScreen from './components/QuizScreen';
import GridQuizScreen from './components/GridQuizScreen';
import MatchingQuizScreen from './components/MatchingQuizScreen';
import ScoreScreen from './components/ScoreScreen';

function App() {
  // Screen Management
  const [currentScreen, setCurrentScreen] = useState('welcome');
  
  // User Selections
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedConsonantGroup, setSelectedConsonantGroup] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Filter questions based on selections
  const filteredQuestions = questions.filter(q => {
    if (selectedCategory?.id !== q.category) return false;
    if (selectedLevel !== q.level) return false;
    if (selectedCategory?.id === 'consonants' && selectedConsonantGroup) {
      return q.consonantGroup === selectedConsonantGroup.id;
    }
    return true;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Navigation Handlers
  const handleStartGame = () => {
    setCurrentScreen('languageModal');
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setCurrentScreen('categorySelection');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // If consonants, go to group selection; otherwise go to level selection
    if (category.hasGroups) {
      setCurrentScreen('consonantGroupSelection');
    } else {
      setCurrentScreen('levelSelection');
    }
  };

  const handleConsonantGroupSelect = (group) => {
    setSelectedConsonantGroup(group);
    setCurrentScreen('levelSelection');
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleBackFromCategory = () => {
    setCurrentScreen('languageModal');
    setSelectedLanguage(null);
  };

  const handleBackFromConsonantGroup = () => {
    setCurrentScreen('categorySelection');
    setSelectedConsonantGroup(null);
  };

  const handleBackFromLevel = () => {
    if (selectedCategory?.hasGroups) {
      setCurrentScreen('consonantGroupSelection');
    } else {
      setCurrentScreen('categorySelection');
    }
    setSelectedLevel(null);
  };

  const handleBackFromQuiz = () => {
    setCurrentScreen('levelSelection');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // Quiz Handlers
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);

    if (option === currentQuestion.correctAnswer) {
      setIsAnswered(true);
      setScore(score + 1);
      
      setTimeout(() => {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
        } else {
          setCurrentScreen('score');
        }
      }, 500);
    } else {
      // Wrong answer - just show red briefly then allow retry
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 500);
    }
  };

  // Grid Quiz Handler
  const handleGridComplete = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen('score');
    }
  };

  const handlePlayAgain = () => {
    setCurrentScreen('levelSelection');
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleNextLevel = () => {
    if (selectedLevel < 3) {
      handleLevelSelect(selectedLevel + 1);
    }
  };

  const handleBackToMenu = () => {
    setCurrentScreen('categorySelection');
    setSelectedCategory(null);
    setSelectedConsonantGroup(null);
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  // Render current screen
  return (
    <>
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStartGame={handleStartGame} />
      )}

      {currentScreen === 'languageModal' && (
        <LanguageModal onLanguageSelect={handleLanguageSelect} />
      )}

      {currentScreen === 'categorySelection' && (
        <CategorySelection 
          language={selectedLanguage}
          onCategorySelect={handleCategorySelect}
          onBack={handleBackFromCategory}
        />
      )}

      {currentScreen === 'consonantGroupSelection' && (
        <ConsonantGroupSelection
          onGroupSelect={handleConsonantGroupSelect}
          onBack={handleBackFromConsonantGroup}
        />
      )}

      {currentScreen === 'levelSelection' && (
        <LevelSelection
          onLevelSelect={handleLevelSelect}
          onBack={handleBackFromLevel}
          availableLevels={selectedCategory?.availableLevels}
        />
      )}
      
      {currentScreen === 'quiz' && currentQuestion && (
        currentQuestion.type === 'grid' ? (
          <GridQuizScreen 
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={filteredQuestions.length}
            selectedLanguage={selectedLanguage}
            onComplete={handleGridComplete}
            onBack={handleBackFromQuiz}
          />
        ) : currentQuestion.type === 'matching' ? (
          <MatchingQuizScreen 
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={filteredQuestions.length}
            selectedLanguage={selectedLanguage}
            onComplete={handleGridComplete}
            onBack={handleBackFromQuiz}
          />
        ) : (
          <QuizScreen 
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={filteredQuestions.length}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
            selectedLanguage={selectedLanguage}
            onAnswerClick={handleAnswerClick}
            onBack={handleBackFromQuiz}
          />
        )
      )}
      
      {currentScreen === 'score' && (
        <ScoreScreen 
          score={score}
          totalQuestions={filteredQuestions.length}
          level={selectedLevel}
          onNextLevel={handleNextLevel}
          onBackToMenu={handleBackToMenu}
        />
      )}
    </>
  );
}

export default App;
