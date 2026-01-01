const MaterialsScreen = ({ onBackToMenu }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-green to-kid-blue p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold text-kid-purple text-center mb-8">
            📖 Learning Materials
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-kid-yellow bg-opacity-20 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-kid-orange mb-4">🍎 Fruits (फलफूल)</h3>
              <div className="grid grid-cols-2 gap-4 text-xl">
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Apple</strong> = <span className="text-kid-orange">Syau (स्याउ)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Banana</strong> = <span className="text-kid-orange">Kera (केरा)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Mango</strong> = <span className="text-kid-orange">Amba (आँप)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Orange</strong> = <span className="text-kid-orange">Santara (सुन्तला)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Grapes</strong> = <span className="text-kid-orange">Angur (अंगुर)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Pomegranate</strong> = <span className="text-kid-orange">Anar (अनार)</span></p>
                </div>
              </div>
            </div>

            <div className="bg-kid-blue bg-opacity-20 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-kid-purple mb-4">🐶 Animals (जनावर)</h3>
              <div className="grid grid-cols-2 gap-4 text-xl">
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Dog</strong> = <span className="text-kid-purple">Kukur (कुकुर)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Cat</strong> = <span className="text-kid-purple">Biralo (बिरालो)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Cow</strong> = <span className="text-kid-purple">Gai (गाई)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Elephant</strong> = <span className="text-kid-purple">Hatti (हात्ती)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Goat</strong> = <span className="text-kid-purple">Khasi (खसी)</span></p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p><strong>Tiger</strong> = <span className="text-kid-purple">Bagh (बाघ)</span></p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onBackToMenu}
            className="w-full bg-kid-orange text-white px-8 py-4 rounded-full text-2xl font-bold 
                     hover:scale-105 transform transition-all duration-300 shadow-lg
                     hover:shadow-xl active:scale-95"
          >
            ← Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialsScreen;
