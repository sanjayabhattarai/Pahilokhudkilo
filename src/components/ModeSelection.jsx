const ModeSelection = ({ language, onModeSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-purple via-kid-pink to-kid-orange p-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg animate-bounce-in">
          {language === 'finnish' 
            ? 'Valitse tila / Choose Mode'
            : language === 'english'
            ? 'Choose Mode'
            : 'मोड छान्नुहोस्'} ✨
        </h2>

        <div className="grid grid-cols-1 gap-6 mb-8 max-w-2xl mx-auto">
          {/* Read the Materials Button */}
          <button
            onClick={() => {
              const pdfFile = language === 'finnish' ? '/book_fi_eng_nep.pdf' : '/book_eng_nep.pdf';
              window.open(pdfFile, '_blank');
            }}
            className="bg-gradient-to-r from-kid-blue to-kid-green text-white px-8 py-8 rounded-2xl text-xl md:text-2xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95 flex flex-col items-center gap-4"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-5xl">📖</span>
            <span className="text-center leading-relaxed">
              {language === 'finnish' 
                ? 'सामग्री पढ्नुहोस् / Read Materials / Lue Materiaalit'
                : language === 'english'
                ? 'Read the Materials / सामग्री पढ्नुहोस्'
                : 'सामग्री पढ्नुहोस्'}
            </span>
          </button>

          {/* Play Game and Learn Button */}
          <button
            onClick={() => onModeSelect('game')}
            className="bg-gradient-to-r from-kid-orange to-kid-yellow text-white px-8 py-8 rounded-2xl text-xl md:text-2xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-2xl
                     hover:shadow-3xl active:scale-95 flex flex-col items-center gap-4"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-5xl">🎮</span>
            <span className="text-center leading-relaxed">
              {language === 'finnish' 
                ? 'खेलौं र सिकौं / Play & Learn / Pelata ja oppia'
                : language === 'english'
                ? 'Play Game and Learn / खेलौं र सिकौं'
                : 'खेलौं र सिकौं'}
            </span>
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-full bg-white text-kid-purple px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-bold 
                   hover:scale-105 transform transition-all duration-300 shadow-xl
                   active:scale-95"
        >
          ← {language === 'finnish' 
            ? 'पछाडि / Back / Takaisin'
            : language === 'english'
            ? 'Back / पछाडि'
            : 'पछाडि'}
        </button>
      </div>
    </div>
  );
};

export default ModeSelection;
