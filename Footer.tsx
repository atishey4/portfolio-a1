import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // New Delhi time (UTC+5:30)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const delhiOffset = 5.5;
      const delhiDate = new Date(utc + (3600000 * delhiOffset));
      
      let hours = delhiDate.getHours();
      const minutes = delhiDate.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12; 
      
      const strMinutes = minutes < 10 ? '0' + minutes : minutes;
      setTime(`${hours}:${strMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-[10px] md:text-xs font-medium tracking-widest text-gray-500 uppercase relative z-50">
      
      {/* Left: Time & Location */}
      <div className="flex items-end justify-start order-2 md:order-1 col-span-2 md:col-span-1 border-t border-white/10 pt-4 md:border-none md:pt-0">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></span>
          <span className="text-off-white">NEW DELHI</span> 
          <span>{time}</span>
        </div>
      </div>

      {/* Center: Social Links */}
      <div className="flex items-end justify-start md:justify-center order-1 md:order-2">
        <div className="flex space-x-2 md:space-x-4">
            <a href="#" className="hover:text-white transition-colors relative group">
                LINKEDIN
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
        </div>
      </div>

      {/* Right: Main Navigation */}
      <div className="flex items-end justify-end order-3 md:order-3">
        <nav className="flex space-x-6 text-off-white">
          {['HOME', 'WORK', 'INFO', 'CONTACT'].map((item) => (
            <a key={item} href="#" className="hover:text-gray-300 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};