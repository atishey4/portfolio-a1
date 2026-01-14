import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-start text-off-white text-sm md:text-base relative z-50 mix-blend-difference px-6 md:px-0 pt-4 md:pt-0">
      {/* Left - Empty to balance layout or minimal identifier if needed. 
          The main 'A' is now a side element. */}
      <div className="w-12"></div>

      {/* Center Text */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 text-center flex-col items-center max-w-lg pointer-events-none">
        <p className="text-gray-400 font-light tracking-wide leading-relaxed">
          A <span className="font-serif italic text-xl text-white mx-1">financial data Analyst</span>
        </p>
        <p className="text-gray-400 font-light tracking-wide">
          that prints money
        </p>
      </div>

      {/* Mobile-only center text */}
      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 text-center text-[10px] leading-tight text-gray-400 px-4 max-w-[200px] pointer-events-none">
          <span className="font-serif italic text-white block mb-1">Financial Analyst</span> that prints money.
      </div>

      {/* Right Navigation */}
      <nav className="flex items-center space-x-6 md:space-x-8 text-[10px] md:text-xs font-medium tracking-widest uppercase">
        {['HOME', 'WORK', 'INFO', 'CONTACT'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-gray-400 hover:text-white transition-colors">
              {item}
              <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
        ))}
      </nav>
    </header>
  );
};