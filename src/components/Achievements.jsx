import React from 'react';
import { Trophy, Code2, Users, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Achievements() {
  const achievementIcons = [Trophy, Code2, Users];

  return (
    <section id="achievements" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            HONORS &amp; DISTINCTIONS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white">
              ACHIEVEMENTS &amp; CERTS
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Competitive hackathons, algorithmic consistency, student leadership, and certified coursework.
            </p>
          </div>
        </div>

        {/* 1. LARGE VISUAL ACHIEVEMENT BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {personalInfo.achievements.map((item, idx) => {
            const Icon = achievementIcons[idx] || Trophy;

            return (
              <div
                key={item.id}
                className="relative p-8 rounded-3xl bg-dark-850/60 border border-white/10 hover:border-electric-400/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Top Block: Id + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-display text-electric-400/80 group-hover:text-electric-400 transition-colors">
                      {item.id}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-400/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-electric-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-electric-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-4">
                    {item.event}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-500">
                  <span>VERIFIED RECORD</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. MINIMAL PREMIUM CERTIFICATIONS DISPLAY */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-4 h-4 text-violetAccent-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              VERIFIED CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalInfo.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-dark-850/50 border border-white/10 hover:border-violetAccent-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider bg-violetAccent-500/10 text-violetAccent-300 border border-violetAccent-500/20">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-display text-white mb-4">
                    {cert.title}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-dark-900 text-slate-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-400">
                  <span>Curriculum Verified</span>
                  <span className="text-emerald-400 font-bold">Credential Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
