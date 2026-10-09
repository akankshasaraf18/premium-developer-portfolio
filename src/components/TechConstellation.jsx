import React, { useState } from 'react';
import { constellationNodes } from '../data/skills';
import portraitImg from '../assets/akanksha-saraf.png';

export default function TechConstellation() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[480px] sm:h-[540px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-dark-900/40 border border-white/5 p-4">
      
      {/* SVG Connecting Vector Lines to Center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-240 -240 480 480">
        <defs>
          <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Orbit Rings */}
        <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 6" />
        <circle cx="0" cy="0" r="170" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="6 8" />

        {/* Dynamic Connection Lines */}
        {constellationNodes.map((node) => {
          const isTarget = hoveredNode?.id === node.id;
          return (
            <line
              key={node.id}
              x1="0"
              y1="0"
              x2={node.x}
              y2={node.y}
              stroke={isTarget ? node.color : 'rgba(255,255,255,0.1)'}
              strokeWidth={isTarget ? '2' : '1'}
              strokeDasharray={isTarget ? 'none' : '3 3'}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* CENTER NODE: AKANKSHA */}
      <div className="relative z-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-full bg-dark-850 border-2 border-electric-400 shadow-[0_0_30px_rgba(56,189,248,0.35)] group">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/20 mb-1">
          <img
            src={portraitImg}
            alt="Akanksha Saraf"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <span className="font-display font-extrabold text-[11px] sm:text-xs text-white tracking-wider">
          AKANKSHA
        </span>
        <span className="text-[9px] font-mono-code text-electric-400 font-bold">
          CORE ENGINE
        </span>
      </div>

      {/* ORBITING TECH NODES */}
      {constellationNodes.map((node) => {
        const isHovered = hoveredNode?.id === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute transition-transform duration-300 ease-out cursor-pointer z-20"
            style={{
              transform: `translate(${node.x}px, ${node.y}px) scale(${isHovered ? 1.2 : 1})`,
            }}
          >
            <div
              className={`px-3 py-1.5 rounded-full border text-xs font-mono-code font-bold backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 ${
                isHovered
                  ? 'bg-dark-850 shadow-lg'
                  : 'bg-dark-900/80 text-slate-300 border-white/10'
              }`}
              style={{
                borderColor: isHovered ? node.color : 'rgba(255,255,255,0.1)',
                color: isHovered ? '#ffffff' : undefined,
                boxShadow: isHovered ? `0 0 20px ${node.color}60` : undefined,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              <span>{node.name}</span>
            </div>
          </div>
        );
      })}

      {/* Floating Info Tooltip for Selected Node */}
      {hoveredNode && (
        <div className="absolute bottom-4 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-30 px-4 py-2.5 rounded-xl bg-dark-850/95 border border-white/15 backdrop-blur-md shadow-2xl text-center text-xs font-mono-code text-slate-200 animate-fade-in">
          <span className="font-bold text-white" style={{ color: hoveredNode.color }}>
            {hoveredNode.name}
          </span>
          <span className="text-slate-400 mx-2">•</span>
          <span className="text-slate-300">{hoveredNode.category}</span>
        </div>
      )}
    </div>
  );
}
