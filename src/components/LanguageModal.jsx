const LanguageModal = ({ onLanguageSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl animate-bounce-in">
        <h2 className="text-3xl md:text-4xl font-bold text-kid-purple text-center mb-4">
          Which language do you prefer for questions?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          कुन भाषामा प्रश्नहरू देखाउने?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => onLanguageSelect('english')}
            className="bg-gradient-to-br from-kid-blue to-kid-purple text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-xl
                     hover:shadow-2xl active:scale-95 flex flex-col items-center gap-4"
          >
            <span className="text-6xl">🇬🇧</span>
            <span>English</span>
            <span className="text-lg font-normal">Questions in English + Nepali</span>
          </button>

          <button
            onClick={() => onLanguageSelect('finnish')}
            className="bg-gradient-to-br from-kid-green to-kid-blue text-white px-8 py-12 rounded-3xl text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-xl
                     hover:shadow-2xl active:scale-95 flex flex-col items-center gap-4"
          >
            <span className="text-6xl">🇫🇮</span>
            <span>Finnish</span>
            <span className="text-lg font-normal">Questions in Nepali + English + Finnish</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
