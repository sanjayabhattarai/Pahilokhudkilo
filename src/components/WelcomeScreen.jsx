import { useState } from 'react';

const WelcomeScreen = ({ onStartGame }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-orange to-kid-pink flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Info Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="bg-white text-kid-purple rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          title="About Us"
        >
          ℹ
        </button>
      </div>

      {/* About Us Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-bounce-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-kid-purple">About Us</h2>
              <button
                onClick={() => setShowAbout(false)}
                className="text-2xl text-gray-500 hover:text-gray-700 font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-center text-lg font-semibold text-kid-orange">
                पहिलो खुड्किलो
              </p>
              <p className="text-center text-base leading-relaxed">
                Learn Nepali in a fun and interactive way! Our app is designed to help you master the Nepali alphabet step by step.
              </p>
              
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <p className="text-sm font-semibold text-kid-purple mb-3">Founders:</p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-kid-yellow to-kid-orange rounded-lg p-3">
                    <p className="font-bold text-white">Lov Upadhya</p>
                  </div>
                  <div className="bg-gradient-to-r from-kid-blue to-kid-green rounded-lg p-3">
                    <p className="font-bold text-white">Sanjaya Bhattarai</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-gray-500 pt-2">
                Made with ❤️ for Nepali learners
              </p>
            </div>

            <button
              onClick={() => setShowAbout(false)}
              className="w-full mt-6 bg-gradient-to-r from-kid-green via-kid-blue to-kid-yellow text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="text-center z-10 space-y-6 md:space-y-8 animate-bounce-in max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-10">
          <img 
            src="/pahilokhudkilalogo.png" 
            alt="Pahilo Khudkilo Logo" 
            className="h-64 md:h-80 object-contain drop-shadow-xl"
          />
        </div>

        {/* Subtitle */}
        <div className="space-y-3 md:space-y-4">
          <p className="text-lg md:text-2xl text-white font-semibold drop-shadow-lg">
            Learn Nepali in a Fun Way!
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 py-6 md:py-8 px-2 md:px-4">
          <div className="flex flex-col items-center space-y-3 bg-gradient-to-br from-blue-400 to-cyan-400 px-4 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl md:text-5xl">🎮</span>
            <p className="text-sm md:text-base text-white font-semibold">Interactive</p>
          </div>
          <div className="flex flex-col items-center space-y-3 bg-gradient-to-br from-purple-400 to-pink-400 px-4 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl md:text-5xl">🧠</span>
            <p className="text-sm md:text-base text-white font-semibold">Quick Learn</p>
          </div>
          <div className="flex flex-col items-center space-y-3 bg-gradient-to-br from-green-400 to-emerald-400 px-4 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-4xl md:text-5xl">🥳</span>
            <p className="text-sm md:text-base text-white font-semibold">Fun & Easy</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={onStartGame}
            className="bg-gradient-to-r from-kid-green via-kid-blue to-kid-yellow hover:shadow-3xl text-white px-10 md:px-16 py-4 md:py-5 rounded-full text-lg md:text-2xl font-bold 
                     hover:scale-110 transform transition-all duration-300 shadow-2xl
                     active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              शुरु गर्नुहोस् / Start
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>

        {/* Footer tagline */}
        <p className="text-white text-xs md:text-sm pt-6 md:pt-8 drop-shadow-lg">
          Master Nepali alphabet one step at a time ✨
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
