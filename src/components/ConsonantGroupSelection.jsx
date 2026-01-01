import { consonantGroups } from '../data/questions';

const ConsonantGroupSelection = ({ onGroupSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-blue via-kid-purple to-kid-pink p-4">
      <div className="max-w-5xl mx-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg animate-bounce-in">
          Select Consonant Group
        </h2>
        <p className="text-2xl text-white text-center mb-12 drop-shadow">
          व्यञ्जन समूह छान्नुहोस्
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {consonantGroups.map((group, index) => (
            <button
              key={group.id}
              onClick={() => onGroupSelect(group)}
              className="bg-white text-kid-orange px-4 py-8 rounded-2xl text-lg md:text-xl font-bold 
                       hover:scale-105 transform transition-all duration-300 shadow-xl
                       hover:shadow-2xl active:scale-95 flex flex-col items-center gap-3"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-3xl md:text-4xl text-kid-purple">
                {group.letters[0]} - {group.letters[group.letters.length - 1]}
              </span>
              <span className="text-sm md:text-base text-gray-600">{group.range}</span>
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

export default ConsonantGroupSelection;
