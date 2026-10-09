import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/personal';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative py-16 border-y border-white/5 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-850/60 border border-white/5 hover:border-electric-400/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-widest mb-2">
                  METRIC 0{idx + 1}
                </div>
                
                {/* Large Animated Number */}
                <div
                  className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display transition-all duration-1000 ${
                    stat.highlight
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-sky-300 to-white'
                      : 'text-white'
                  } ${
                    hasAnimated
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-4 scale-95'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {stat.value}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <div className="text-xs sm:text-sm font-bold text-slate-200 tracking-wide uppercase font-display">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono-code mt-0.5">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
