const MenuScreen = ({ onGoToMaterials, onGoToQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-blue to-kid-pink flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-bounce-in">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Choose Your Path! 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={onGoToMaterials}
            className="bg-white text-kid-blue px-8 py-16 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            📚 Read the Materials
          </button>
          <button
            onClick={onGoToQuiz}
            className="bg-white text-kid-orange px-8 py-16 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95"
          >
            🎮 Play Game and Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
