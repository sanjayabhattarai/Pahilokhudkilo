import { categories } from '../data/questions';

const CategorySelection = ({ language, onCategorySelect, onBack }) => {
  const getDisplayName = (category) => {
    if (language === 'finnish') {
      return `${category.name.nepali} / ${category.name.english} / ${category.name.finnish}`;
    }
    return `${category.name.nepali} / ${category.name.english}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-pink p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12 drop-shadow-lg animate-bounce-in leading-tight px-2">
          Choose a Category 📚
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category)}
              className="bg-white text-kid-purple px-3 sm:px-4 py-5 sm:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95 flex flex-col items-center gap-2 sm:gap-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl sm:text-4xl">{category.emoji}</span>
              <span className="text-center leading-relaxed text-xs sm:text-sm">{getDisplayName(category)}</span>
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

export default CategorySelection;
