import React from 'react';

const projects = [
  { id: 1, title: "Artjom Yakushev", category: "Portfolio", image: "https://images.unsplash.com/photo-1481487484168-9b930d552081?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Floating Device", category: "Product", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Neon Future", category: "App Design", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Blue Laptop", category: "Web", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Editorial", category: "Print", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Abstract Light", category: "Art", image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Real Estate", category: "Web", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Runner", category: "Photography", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" },
  { id: 9, title: "White Stone", category: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" },
  { id: 10, title: "Typography", category: "Design", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop" },
  { id: 11, title: "Shadow", category: "Identity", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop" },
  { id: 12, title: "Dark Cube", category: "3D", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop" },
  { id: 13, title: "Interior", category: "ArchViz", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
  { id: 14, title: "Quantum", category: "System", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop" },
  { id: 15, title: "Counterform", category: "Estate", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="w-full relative z-20 pt-20 pb-32">
      {/* Section Header Controls */}
      <div className="w-full flex justify-end items-center mb-12 px-4 md:px-0">
        <div className="flex items-center space-x-6 text-[10px] md:text-xs font-bold tracking-widest">
            <div className="text-gray-600 hover:text-white transition-colors cursor-pointer">
                EDITORIAL VIEW
            </div>
            <div className="text-white border-b border-white pb-1 cursor-pointer">
                GRID VIEW
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full">
         {projects.map((project) => (
             <div key={project.id} className="group relative w-full aspect-[4/5] bg-[#111] overflow-hidden cursor-pointer">
                 <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                 />
                 
                 {/* Overlay Text */}
                 <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                     <h3 className="text-white font-serif italic text-lg">{project.title}</h3>
                     <p className="text-gray-400 text-[10px] uppercase tracking-wider">{project.category}</p>
                 </div>
             </div>
         ))}
      </div>
    </section>
  );
};