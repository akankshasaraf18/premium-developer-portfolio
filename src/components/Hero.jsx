import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personal';
import portraitImg from '../assets/akanksha-saraf.png';

export default function Hero({ onOpenSocialModal }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingBadges = [
    { name: 'React', x: '-15%', y: '12%', delay: '0s', color: 'text-electric-400 border-electric-400/30' },
    { name: 'Node.js', x: '85%', y: '18%', delay: '1.2s', color: 'text-emerald-400 border-emerald-400/30' },
    { name: 'MongoDB', x: '88%', y: '72%', delay: '2.4s', color: 'text-teal-400 border-teal-400/30' },
    { name: 'AI / ML', x: '-12%', y: '82%', delay: '0.8s', color: 'text-violetAccent-400 border-violetAccent-400/30' },
    { name: 'Java', x: '-18%', y: '48%', delay: '1.8s', color: 'text-amber-400 border-amber-400/30' },
    { name: 'Python', x: '82%', y: '44%', delay: '2.8s', color: 'text-yellow-400 border-yellow-400/30' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Huge Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-850/90 border border-electric-400/30 backdrop-blur-md w-fit mb-6 shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono-code">
                Open to Software Development Opportunities
              </span>
            </div>

            {/* Huge Dominating Editorial Typography */}
            <div 
              className="flex flex-col select-none transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)` }}
            >
              <h1 className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-[92px] font-extrabold tracking-tighter leading-[0.92] font-display">
                <span className="text-white block hover:text-slate-100 transition-colors">
                  AKANKSHA
                </span>
                <span className="text-stroke-white block mt-1 hover:text-electric-400/90 transition-all duration-300">
                  SARAF
                </span>
              </h1>
            </div>

            {/* Tri-Fold Identity Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 mb-6">
              <span className="px-3 py-1 rounded-md bg-dark-800 text-[11px] sm:text-xs font-bold tracking-wider text-electric-400 border border-electric-500/20 font-mono-code uppercase">
                COMPUTER ENGINEERING STUDENT
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-md bg-dark-800 text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 border border-white/10 font-mono-code uppercase">
                FULL STACK DEVELOPER
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-md bg-dark-800 text-[11px] sm:text-xs font-bold tracking-wider text-violetAccent-400 border border-violetAccent-500/20 font-mono-code uppercase">
                AI/ML ENTHUSIAST
              </span>
            </div>

            {/* Main Statement */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-100 leading-snug tracking-tight font-display mb-4">
              &ldquo;{personalInfo.headline}&rdquo;
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Hero Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                data-cursor="PROJECTS"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-electric-500 to-blue-600 hover:from-electric-400 hover:to-blue-500 transition-all duration-300 shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] focus:outline-none"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Akanksha_Saraf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="RESUME"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200 bg-dark-850 hover:bg-dark-800 border border-white/15 hover:border-electric-400/50 transition-all duration-300 hover:text-white focus:outline-none"
              >
                <Download className="w-4 h-4 text-electric-400" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Social Links Pills */}
              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-electric-400 text-slate-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-electric-400 text-slate-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-electric-400 text-slate-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Micro Verification Tags */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-8 border-t border-white/5 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white">9.46</div>
                <div className="text-[11px] text-slate-400 font-mono-code uppercase">Current CGPA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-electric-400">150+</div>
                <div className="text-[11px] text-slate-400 font-mono-code uppercase">DSA Solved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-display text-violetAccent-400">2027</div>
                <div className="text-[11px] text-slate-400 font-mono-code uppercase">Graduation</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Editorial Large Portrait Composition (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div 
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x * -0.7}px, ${mouseOffset.y * -0.7}px, 0)`,
              }}
            >
              {/* Futuristic Background Glows */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-electric-500/20 via-violetAccent-500/15 to-transparent rounded-3xl blur-2xl opacity-70 animate-pulse-slow" />
              
              {/* Outer Decorative Tech Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/15 backdrop-blur-xl shadow-2xl">
                
                {/* Real Portrait Container */}
                <div 
                  className="relative overflow-hidden rounded-2xl bg-dark-900 group aspect-[4/5] max-h-[560px] w-full"
                  data-cursor="EXPLORE"
                >
                  <img
                    src={portraitImg}
                    alt="Akanksha Saraf - Computer Engineering Student and Full Stack Developer"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[0.98] transition-all duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Editorial Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-60" />

                  {/* Corner Accent Tech Decals */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-900/80 border border-white/10 backdrop-blur-md text-[10px] font-mono-code text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
                    MMCOE PUNE
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-900/85 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white font-display">AKANKSHA SARAF</div>
                        <div className="text-[11px] text-electric-400 font-mono-code">Full Stack &amp; AI Systems</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono-code text-emerald-400 font-bold">2024–2027</div>
                        <div className="text-[10px] text-slate-400">B.E. Comp Engg</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Orbiting Tech Badges */}
                {floatingBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`absolute hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border backdrop-blur-md text-xs font-mono-code font-semibold shadow-lg transition-transform duration-300 hover:scale-110 select-none ${badge.color}`}
                    style={{
                      left: badge.x,
                      top: badge.y,
                      transform: `translate3d(${mouseOffset.x * (idx % 2 === 0 ? 0.5 : -0.5)}px, ${mouseOffset.y * (idx % 2 === 0 ? 0.5 : -0.5)}px, 0)`,
                    }}
                  >
                    <span>{badge.name}</span>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
