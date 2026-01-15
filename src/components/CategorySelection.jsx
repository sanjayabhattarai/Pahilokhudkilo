import { categories } from '../data/questions';

const CategorySelection = ({ language, onCategorySelect, onBack }) => {
  const getDisplayName = (category) => {
    if (language === 'finnish') {
      return `${category.name.nepali} / ${category.name.english} / ${category.name.finnish}`;
    }
    return `${category.name.nepali} / ${category.name.english}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-pink p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg animate-bounce-in">
          Choose a Category 📚
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category)}
              className="bg-white text-kid-purple px-4 py-6 rounded-2xl text-lg md:text-xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-2xl
                       hover:shadow-3xl active:scale-95 flex flex-col items-center gap-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl">{category.emoji}</span>
              <span className="text-center leading-relaxed text-sm">{getDisplayName(category)}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => window.open('/book.pdf', '_blank')}
          className="w-full bg-gradient-to-r from-kid-blue to-kid-green text-white px-6 md:px-8 py-4 md:py-5 rounded-full text-base md:text-lg font-bold 
                   hover:scale-105 transform transition-all duration-300 shadow-2xl
                   hover:shadow-3xl active:scale-95 mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap"
        >
          <span className="text-2xl md:text-3xl">📖</span>
          <span className="text-center">
            {language === 'finnish' 
              ? 'सामग्री / Read / Lue'
              : language === 'english'
              ? 'सामग्री / Read Material'
              : 'सामग्री पढ्नुहोस्'}
          </span>
        </button>

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

export default CategorySelection;
