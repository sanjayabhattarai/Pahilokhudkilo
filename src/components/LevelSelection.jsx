import { levels } from '../data/questions';

const LevelSelection = ({ onLevelSelect, onBack }) => {
  const levelColors = [
    'from-kid-green to-kid-blue',
    'from-kid-yellow to-kid-orange',
    'from-kid-orange to-kid-pink'
  ];

  const levelEmojis = ['😊', '😎', '🔥'];
  const levelLabels = ['Easy / सजिलो', 'Medium / मध्यम', 'Hard / गाह्रो'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-blue to-kid-green p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg animate-bounce-in">
          Choose Your Level 🎯
        </h2>
        <p className="text-2xl text-white text-center mb-12 drop-shadow">
          आफ्नो स्तर छान्नुहोस्
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {levels.map((level, index) => (
            <button
              key={level}
              onClick={() => onLevelSelect(level)}
              className={`bg-gradient-to-br ${levelColors[index]} text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95 flex flex-col items-center gap-4`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-6xl">{levelEmojis[index]}</span>
              <span>Level {level}</span>
              <span className="text-xl font-normal">{levelLabels[index]}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onBack}
          className="w-full bg-white text-kid-purple px-8 py-4 rounded-full text-2xl font-bold 
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
