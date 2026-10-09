import React, { useState } from 'react';
import { Cpu, Terminal, Database, Sparkles, Layers, BookOpen, Code2 } from 'lucide-react';
import { skillsCategories } from '../data/skills';
import TechConstellation from './TechConstellation';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredCategories = activeTab === 'ALL'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            TECHNICAL REPERTOIRE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white">
              SKILLS &amp; ARCHITECTURE
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Curated technical stack spanning modern JavaScript runtimes, robust Java OOP backend systems, and AI/ML data processing pipelines.
            </p>
          </div>
        </div>

        {/* 1. INTERACTIVE TECH CONSTELLATION */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="text-xs font-mono-code text-electric-400 tracking-wider uppercase px-3 py-1 rounded-full bg-electric-500/10 border border-electric-400/20">
              INTERACTIVE CONSTELLATION • HOVER NODES TO CONNECT
            </span>
          </div>
          <TechConstellation />
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
              activeTab === 'ALL'
                ? 'bg-electric-500 text-white shadow-sm'
                : 'bg-dark-850 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            ALL CATEGORIES ({skillsCategories.length})
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
                activeTab === cat.category
                  ? 'bg-electric-500 text-white shadow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Structured Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-850/60 border border-white/10 hover:border-electric-400/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
                  <span className="text-xs font-mono-code font-bold text-electric-400 uppercase tracking-wider">
                    {cat.category}
                  </span>
                  <span className="text-[10px] font-mono-code text-slate-500">
                    {cat.skills.length} competencies
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-normal">
                  {cat.description}
                </p>

                {/* Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-electric-400/20 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white font-display">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-code text-electric-400 px-2 py-0.5 rounded bg-electric-500/10">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
