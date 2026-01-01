const WelcomeScreen = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-pink flex items-center justify-center p-4">
      <div className="text-center animate-bounce-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
          🎉 पहिलो खुड्किलोमा स्वागत छ 🎉
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-12 drop-shadow">
          Learn Nepali in a Fun Way!
        </p>
        <button
          onClick={onStartGame}
          className="bg-white text-kid-orange px-12 py-6 rounded-full text-3xl font-bold 
                   hover:scale-110 transform transition-all duration-300 shadow-2xl
                   hover:shadow-3xl active:scale-95"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
