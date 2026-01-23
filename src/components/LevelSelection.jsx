import { levels } from '../data/questions';

const LevelSelection = ({ onLevelSelect, onBack, availableLevels = levels }) => {
  const levelColors = [
    'from-kid-green to-kid-blue',
    'from-kid-yellow to-kid-orange',
    'from-kid-orange to-kid-pink'
  ];

  const levelEmojis = ['😊', '😎', '🔥'];
  const levelLabels = ['Easy / सजिलो', 'Medium / मध्यम', 'Hard / गाह्रो'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-blue to-kid-green p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 sm:mb-3 md:mb-4 drop-shadow-lg animate-bounce-in leading-tight px-2">
          Choose Your Level 🪜
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white text-center mb-6 sm:mb-8 md:mb-12 drop-shadow">
          आफ्नो स्तर छान्नुहोस्
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {availableLevels.map((level, index) => (
            <button
              key={level}
              onClick={() => onLevelSelect(level)}
              className={`bg-gradient-to-br ${levelColors[level - 1]} text-white px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95 flex flex-col items-center gap-2 sm:gap-3`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl sm:text-5xl">{levelEmojis[level - 1]}</span>
              <span>Level {level}</span>
              <span className="text-sm sm:text-base md:text-lg font-normal">{levelLabels[level - 1]}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onBack}
          className="w-full bg-white text-kid-purple px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-bold 
                   hover:scale-105 transform transition-all duration-300 shadow-lg
                   hover:shadow-xl active:scale-95"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default LevelSelection;
