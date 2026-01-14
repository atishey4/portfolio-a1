import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Work } from './components/Work';

const App: React.FC = () => {
  // 0: Init, 1: Blur, 2: Show Logos, 3: Move Logos, 4: Reveal Content, 5: Interaction Ready
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    // Animation sequence
    const timers = [
      setTimeout(() => setLoadingStep(1), 500),  // Blur fade in
      setTimeout(() => setLoadingStep(2), 1500), // Logos appear
      setTimeout(() => setLoadingStep(3), 2500), // Split logos
      setTimeout(() => setLoadingStep(4), 3800), // Content reveal
      setTimeout(() => setLoadingStep(5), 4500), // Cleanup loader overlay (bg only)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-deep-black flex flex-col relative overflow-hidden text-off-white selection:bg-red-900 selection:text-white">
      
      {/* --- Persistent Side Branding (A / J) --- */}
      {/* These start centered and animate to sides, remaining fixed */}
      <div className="fixed inset-0 pointer-events-none z-[80]">
         {/* Letter A */}
         <div className={`absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]
             ${loadingStep >= 3 
               ? 'top-1/2 left-4 md:left-8 -translate-y-1/2 translate-x-0' 
               : 'top-1/2 left-1/2 -translate-x-[150%] -translate-y-1/2'
             }
             ${loadingStep < 2 ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}
         `}>
             <span className="font-bold text-4xl md:text-6xl tracking-tighter text-off-white block">A.</span>
         </div>

         {/* Letter J (Circle) */}
         <div className={`absolute transition-all duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]
             ${loadingStep >= 3 
               ? 'top-1/2 right-4 md:right-8 -translate-y-1/2 translate-x-0' 
               : 'top-1/2 left-1/2 translate-x-[50%] -translate-y-1/2'
             }
             ${loadingStep < 2 ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}
         `}>
             <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-deep-black/50 backdrop-blur-sm text-off-white pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors">
                 <span className="text-xl md:text-2xl font-serif">J</span>
             </div>
         </div>
      </div>

      {/* --- Loading Overlay (Background Blur Only) --- */}
      <div className={`fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center transition-opacity duration-1000 ${loadingStep === 5 ? 'opacity-0' : 'opacity-100'}`}>
         {/* Phase 1: Blur Spot */}
         <div className={`absolute w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full transition-all duration-1000 ease-out 
           ${loadingStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
         />
      </div>

      {/* --- Main App Background & Content --- */}
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Background ambient glow */}
      <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-[2000ms] ease-out ${loadingStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
         <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-red-900/20 rounded-full blur-[100px] md:blur-[180px] mix-blend-screen"></div>
         <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[80px]"></div>
      </div>

      <div className={`relative z-10 flex flex-col min-h-screen px-6 py-6 md:px-12 md:py-8 max-w-[1920px] mx-auto w-full transition-all duration-[1500ms] ease-out ${loadingStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Header />
        <main className="flex-grow flex flex-col w-full">
          <Hero />
          <Work />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;