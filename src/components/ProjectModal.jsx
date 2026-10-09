import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, isOpen, onClose, onOpenPlaceholder }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl p-6 sm:p-8 md:p-10 z-10 max-h-[90vh] overflow-y-auto my-auto animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-dark-850 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all focus:outline-none"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono-code text-electric-400 font-bold px-3 py-1 rounded-full bg-electric-500/10 border border-electric-400/20">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-mono-code text-slate-400">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-xs font-mono-code text-violetAccent-400 font-bold px-3 py-1 rounded-full bg-violetAccent-500/10 border border-violetAccent-400/20">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-2">
          {project.title}
        </h2>
        <div className="text-xs sm:text-sm font-mono-code text-slate-400 tracking-wider uppercase mb-6">
          {project.subtitle}
        </div>

        {/* Interactive Visual Preview */}
        <div className="mb-8">
          <ProjectVisual visualType={project.visualType} accent={project.accent} project={project} />
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          
          {/* Main Description & Features (8 cols) */}
          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="text-sm font-mono-code text-electric-400 uppercase tracking-widest font-semibold mb-2">
                OVERVIEW &amp; PROBLEM STATEMENT
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Architecture Pipeline */}
            {project.pipeline && (
              <div>
                <h3 className="text-sm font-mono-code text-slate-400 uppercase tracking-widest font-semibold mb-3">
                  SYSTEM ARCHITECTURE PIPELINE
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {project.pipeline.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-dark-850 border border-white/5 text-center">
                      <div className="text-[10px] font-mono-code text-slate-500 mb-1">0{idx + 1}</div>
                      <div className="text-xs font-bold text-white font-mono-code">{item.step}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Highlights List */}
            <div>
              <h3 className="text-sm font-mono-code text-slate-400 uppercase tracking-widest font-semibold mb-3">
                KEY TECHNICAL HIGHLIGHTS
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Metadata (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            {/* Tech Stack */}
            <div className="p-5 rounded-2xl bg-dark-850 border border-white/10">
              <h4 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-3">
                TECHNOLOGIES USED
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-dark-900 text-electric-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            {project.metrics && (
              <div className="p-5 rounded-2xl bg-dark-850 border border-white/10">
                <h4 className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-3">
                  SPECIFICATIONS
                </h4>
                <div className="space-y-2.5">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex justify-between items-center text-xs pb-2 border-b border-white/5 last:border-none">
                      <span className="text-slate-400">{m.label}</span>
                      <span className="font-semibold text-white font-mono-code">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              {project.links?.github && project.links.github !== '#' && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-electric-500 hover:bg-electric-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-electric-500/20 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW ON GITHUB</span>
                </a>
              )}
              {project.links?.demo && project.links.demo !== '#' && !project.links.demoPlaceholder && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-200 bg-dark-800 hover:bg-dark-700 border border-white/10 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  aria-label={`Live Demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMO</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
