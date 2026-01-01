import { useState } from 'react';
import { questions } from './questions';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';
import MaterialsScreen from './components/MaterialsScreen';
import DifficultySelectScreen from './components/DifficultySelectScreen';
import QuizScreen from './components/QuizScreen';
import ScoreScreen from './components/ScoreScreen';

function App() {
  // Screen Management
  const [currentScreen, setCurrentScreen] = useState('welcome');
  
  // Quiz State
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Filter questions based on difficulty only
  const filteredQuestions = questions.filter(q => {
    const matchesDifficulty = selectedDifficulty ? q.difficulty === selectedDifficulty : true;
    return matchesDifficulty;
  });

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Navigation Handlers
  const handleStartGame = () => {
    setCurrentScreen('menu');
  };

  const handleGoToMaterials = () => {
    setCurrentScreen('materials');
  };

  const handleGoToQuiz = () => {
    setCurrentScreen('difficultySelect');
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  // Quiz Handlers
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
    setCurrentScreen('menu');
    setSelectedDifficulty(null);
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
      
      {currentScreen === 'menu' && (
        <MenuScreen 
          onGoToMaterials={handleGoToMaterials}
          onGoToQuiz={handleGoToQuiz}
        />
      )}
      
      {currentScreen === 'materials' && (
        <MaterialsScreen onBackToMenu={handleBackToMenu} />
      )}
      
      {currentScreen === 'difficultySelect' && (
        <DifficultySelectScreen 
          onDifficultySelect={handleDifficultySelect}
          onBackToMenu={handleBackToMenu}
        />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={filteredQuestions.length}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswerClick={handleAnswerClick}
        />
      )}
      
      {currentScreen === 'score' && (
        <ScoreScreen 
          score={score}
          totalQuestions={filteredQuestions.length}
          difficulty={selectedDifficulty}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </>
  );
}

export default App;
