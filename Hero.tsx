import React, { useRef, useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Invert Y for tilt
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full min-h-[90vh] flex items-center justify-center perspective-container overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
          {/* User provided image placeholder - Replace src with your specific image URL */}
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop" 
            alt="Background Portrait" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          
          {/* Lighting Overlay: Mimicking the Red/Blue lighting from the reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-red-900/30 mix-blend-overlay"></div>
          
          {/* Dark Fade Overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/30"></div>
          <div className="absolute inset-0 bg-deep-black/40"></div>
      </div>

      {/* Large Typography Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
        <h1 className="font-serif text-[13vw] md:text-[16vw] leading-none text-off-white tracking-[-0.04em] opacity-80 text-center whitespace-nowrap flex items-center justify-center gap-[2vw] md:gap-[4vw] mix-blend-overlay blur-[0.5px]">
          <span className="translate-x-[2vw] md:translate-x-[4vw] transition-transform duration-700 ease-out">
            Atishey
          </span>
          <span className="-translate-x-[2vw] md:-translate-x-[4vw] transition-transform duration-700 ease-out">
             Jain
          </span>
        </h1>
      </div>

      {/* 3D Phone Element */}
      <div 
        className="relative z-20 w-[260px] md:w-[340px] aspect-[9/19] transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full transform scale-90 translate-y-10 -z-10"></div>
        
        {/* Phone Body */}
        <div 
          className="w-full h-full bg-black rounded-[48px] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden relative group"
          style={{
            boxShadow: '0 25px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(0,0,0,1)'
          }}
        >
            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 rounded-[42px]"></div>

            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#120303] via-[#1a0505] to-black flex flex-col items-center justify-between p-6 text-center overflow-hidden">
                
                {/* Background Noise on Screen */}
                <div className="absolute inset-0 opacity-[0.15]" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}>
                </div>

                {/* Top Bar */}
                <div className="w-full pt-4 flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-wider z-20 relative">
                    <span>IMI DELHI</span>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow flex flex-col items-center justify-center w-full relative z-10 space-y-8">
                     {/* Floating Badge */}
                     <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                        <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-red-600 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                           <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        
                        {/* Orbiting Text or Ring */}
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                     </div>

                     <div className="text-left w-full pl-2 space-y-[-0.2em]">
                        <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 leading-[0.9] tracking-tighter">STUDENT</h2>
                        <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 leading-[0.9] tracking-tighter">AT</h2>
                        <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 leading-[0.9] tracking-tighter">IMI</h2>
                        <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 leading-[0.9] tracking-tighter">DELHI</h2>
                     </div>
                </div>

                {/* Bottom Footer on Phone */}
                <div className="w-full pb-6 z-20 relative">
                     <div className="flex justify-between items-end border-t border-white/10 pt-4">
                         <div className="text-left">
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Batch</div>
                            <div className="text-lg font-serif italic text-white leading-none">2025-27</div>
                         </div>
                         <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                         </div>
                     </div>
                </div>

                {/* Bottom Bar Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-20"></div>
            </div>

            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-full z-40 flex justify-end items-center px-2">
               <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#333]"></div>
            </div>
            
            {/* Side Buttons */}
            <div className="absolute top-24 -right-[8px] w-[8px] h-12 bg-[#2a2a2a] rounded-r-md border-l border-black"></div>
            <div className="absolute top-16 -left-[8px] w-[8px] h-8 bg-[#2a2a2a] rounded-l-md border-r border-black"></div>
            <div className="absolute top-28 -left-[8px] w-[8px] h-14 bg-[#2a2a2a] rounded-l-md border-r border-black"></div>
        </div>
      </div>
    </div>
  );
};