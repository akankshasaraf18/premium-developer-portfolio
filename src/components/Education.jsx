import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Education() {
  return (
    <section id="education" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            ACADEMIC FOUNDATION
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white">
              EDUCATION &amp; PEDAGOGY
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Demonstrated academic excellence across high school, diploma engineering, and undergraduate university study.
            </p>
          </div>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-electric-400 before:via-violetAccent-500/40 before:to-transparent">
          {personalInfo.education.map((edu, idx) => (
            <div
              key={idx}
              className="relative pl-10 sm:pl-20 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 rounded-full bg-dark-950 border-2 border-electric-400 -translate-x-1/2 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-dark-850/60 border border-white/10 hover:border-electric-400/40 transition-all duration-300 shadow-xl group-hover:bg-dark-850/90">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-400/20">
                      {edu.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Score Tag */}
                  <div className="px-4 py-1.5 rounded-xl bg-dark-900 border border-white/10 flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-mono-code">{edu.scoreLabel}:</span>
                    <span className="text-sm font-bold font-display text-emerald-400">{edu.score}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-electric-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-base font-semibold text-slate-300 mt-1 mb-4">
                  {edu.institution}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                  {edu.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
