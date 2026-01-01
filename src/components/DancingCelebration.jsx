import { useEffect, useState } from 'react';

const DancingCelebration = ({ audioSrc, onDismiss }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const audio = document.getElementById('celebration-audio');
    if (audio) {
      audio.volume = 0.5; // Protect kid's ears
      audio.play().catch(err => console.log('Audio play failed:', err));
    }
    
    // Auto-dismiss after 8 seconds (optional safety)
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* 1. Glassmorphism Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => { if(onDismiss) onDismiss(); setShow(false); }}
      ></div>

      {/* 2. The Main Card */}
      <div className="relative w-full max-w-lg transform transition-all animate-pop-in">
        
        {/* Decorative 'Sunburst' background behind card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-yellow-300/40 to-transparent blur-2xl animate-pulse-slow"></div>

        <div className="relative bg-gradient-to-b from-indigo-500 via-purple-500 to-fuchsia-600 rounded-3xl p-8 border-4 border-white/30 shadow-[0_0_50px_rgba(168,85,247,0.6)] text-center overflow-hidden">
          
          {/* Audio */}
          {audioSrc && <audio id="celebration-audio" src={audioSrc} />}

          {/* Confetti (CSS Only) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: ['#FFD93D', '#FF6B35', '#4ECDC4', '#ffffff'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>

          {/* The Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* Animated Header */}
            <div className="flex items-end gap-4">
               <span className="text-6xl animate-bounce-custom" style={{ animationDelay: '0s' }}>🕺</span>
               <span className="text-8xl animate-bounce-custom" style={{ animationDelay: '0.1s' }}>🏆</span>
               <span className="text-6xl animate-bounce-custom" style={{ animationDelay: '0.2s' }}>💃</span>
            </div>

            {/* Text with Cartoon Stroke Effect */}
            <div className="space-y-2">
              <h2 className="text-5xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]"
                  style={{ textShadow: '3px 3px 0 #000' }}>
                बधाई छ!
              </h2>
              <p className="text-2xl font-bold text-yellow-300 tracking-wide"
                 style={{ textShadow: '2px 2px 0 #7c3aed' }}>
                EXCELLENT JOB!
              </p>
            </div>

            {/* The Drums */}
            <div className="flex gap-8 opacity-90">
              <span className="text-5xl animate-beat">🥁</span>
              <span className="text-5xl animate-beat" style={{ animationDelay: '0.2s' }}>🥁</span>
            </div>

            {/* 3. The 'Gamey' Action Button */}
            <button
              onClick={() => { if(onDismiss) onDismiss(); setShow(false); }}
              className="mt-4 bg-green-500 hover:bg-green-400 text-white text-xl font-bold py-3 px-12 rounded-full 
                         border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all shadow-lg w-full md:w-auto"
            >
              CONTINUE ▶
            </button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2) rotate(10deg); }
        }
        @keyframes fall {
          0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
          100% { transform: translateY(600px) rotate(720deg); opacity: 0; }
        }
        
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-bounce-custom { animation: bounce-custom 2s infinite ease-in-out; }
        .animate-beat { animation: beat 0.6s infinite ease-in-out; }
        
        .confetti-piece {
          position: absolute;
          width: 12px;
          height: 12px;
          top: -20px;
          border-radius: 4px;
          animation: fall 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DancingCelebration;