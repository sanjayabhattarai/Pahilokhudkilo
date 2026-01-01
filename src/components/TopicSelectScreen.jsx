import { categories } from '../questions';

const TopicSelectScreen = ({ onCategorySelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-blue via-kid-purple to-kid-pink flex items-center justify-center p-4">
      <div className="max-w-4xl w-full animate-bounce-in">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Choose a Topic! 📚
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className="bg-white text-kid-purple px-8 py-12 rounded-3xl text-3xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category === 'Fruits' ? '🍎' : '🐶'} {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicSelectScreen;
