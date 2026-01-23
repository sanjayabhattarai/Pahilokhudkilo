const LanguageModal = ({ onLanguageSelect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-2xl w-full shadow-2xl animate-bounce-in my-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-kid-purple text-center mb-2 sm:mb-3 md:mb-4 leading-tight">
          Which language do you prefer for questions?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-4 sm:mb-6 md:mb-8">
          कुन भाषामा प्रश्नहरू देखाउने?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={() => onLanguageSelect('english')}
            className="bg-gradient-to-br from-kid-blue to-kid-purple text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl text-xl sm:text-2xl md:text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-xl
                     hover:shadow-2xl active:scale-95 flex flex-col items-center gap-2 sm:gap-3 md:gap-4"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">🇬🇧</span>
            <span className="leading-tight">English</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center px-2">Questions in English + Nepali</span>
          </button>

          <button
            onClick={() => onLanguageSelect('finnish')}
            className="bg-gradient-to-br from-kid-green to-kid-blue text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 rounded-2xl sm:rounded-3xl text-xl sm:text-2xl md:text-3xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-xl
                     hover:shadow-2xl active:scale-95 flex flex-col items-center gap-2 sm:gap-3 md:gap-4"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">🇫🇮</span>
            <span className="leading-tight">Finnish</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center px-2">Questions in Nepali + English + Finnish</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
