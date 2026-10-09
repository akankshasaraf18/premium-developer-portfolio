import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* Subtle Radial Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violetAccent-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[550px] h-[550px] bg-electric-600/08 rounded-full blur-[160px]" />

      {/* Fine Coordinate Grid */}
      <div className="absolute inset-0 bg-grid opacity-35" />

      {/* Floating Ambient Code Symbols (Subtle & Minimal) */}
      <div className="absolute top-[18%] left-[8%] text-[11px] font-mono-code text-electric-400/20 tracking-wider hidden lg:block select-none">
        0101 // INIT_ENGINE: AKANKSHA_SYS
      </div>
      <div className="absolute top-[35%] right-[6%] text-[11px] font-mono-code text-violetAccent-400/20 tracking-wider hidden lg:block select-none">
        const model = new NeuralNetwork();
      </div>
      <div className="absolute bottom-[22%] left-[12%] text-[11px] font-mono-code text-electric-400/15 tracking-wider hidden lg:block select-none">
        &lt;MERN_STACK /&gt; 9.46_CGPA
      </div>
      <div className="absolute bottom-[40%] right-[10%] text-[11px] font-mono-code text-slate-500/20 tracking-wider hidden lg:block select-none">
        git commit -m &quot;feat: production ready&quot;
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(7,9,14,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
