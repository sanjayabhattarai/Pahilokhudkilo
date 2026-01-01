const DifficultySelectScreen = ({ onDifficultySelect, onBackToMenu }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-green via-kid-yellow to-kid-orange flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-bounce-in">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Choose Difficulty! 🎯
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onDifficultySelect('beginner')}
            className="bg-kid-green text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            😊 Beginner
          </button>
          <button
            onClick={() => onDifficultySelect('medium')}
            className="bg-kid-yellow text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            😎 Medium
          </button>
          <button
            onClick={() => onDifficultySelect('advanced')}
            className="bg-kid-orange text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            🔥 Advanced
          </button>
        </div>
        <button
          onClick={onBackToMenu}
          className="mt-8 w-full bg-white text-kid-purple px-8 py-4 rounded-full text-2xl font-bold 
                   hover:scale-105 transform transition-all duration-300 shadow-lg
                   hover:shadow-xl active:scale-95"
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
};

export default DifficultySelectScreen;
