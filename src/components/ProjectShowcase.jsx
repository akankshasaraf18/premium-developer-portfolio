import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectVisual from './ProjectVisual';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase({ onOpenPlaceholder }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'FULL STACK', 'AI & ML'];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FULL STACK') {
      return proj.category.toLowerCase().includes('full stack') || proj.technologies.includes('React.js');
    }
    if (activeFilter === 'AI & ML') {
      return proj.category.toLowerCase().includes('ai') || proj.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('ocr') || t.toLowerCase().includes('nlp'));
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            FEATURED WORK
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white">
              PROJECT CASE STUDIES
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Engineered software systems emphasizing clean architecture, machine learning integration, and scalable full-stack capabilities.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-dark-850 border border-white/10 w-fit">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
                  activeFilter === f
                    ? 'bg-electric-500 text-white shadow-md shadow-electric-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Project Case Study Cards */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="relative rounded-3xl p-6 sm:p-8 lg:p-12 bg-dark-850/40 border border-white/10 hover:border-electric-400/40 transition-all duration-500 shadow-2xl group"
                data-cursor="VIEW PROJECT"
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric-500/05 rounded-full blur-[120px] pointer-events-none group-hover:bg-electric-500/10 transition-all duration-700" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Content Column (6 cols) */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Top Meta: Number + Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl sm:text-4xl font-extrabold font-display text-electric-400/80 group-hover:text-electric-400 transition-colors">
                            {project.number}
                          </span>
                          <span className="text-xs font-mono-code text-slate-500">// CASE STUDY</span>
                        </div>
                        {project.badge && (
                          <span className="text-[11px] font-mono-code font-bold px-3 py-1 rounded-full bg-violetAccent-500/15 text-violetAccent-300 border border-violetAccent-500/30">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight group-hover:text-electric-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mt-1 mb-4">
                        {project.subtitle}
                      </div>

                      {/* Project Tagline & Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Architecture Pipeline Snippet */}
                      {project.pipeline && (
                        <div className="mb-6 p-3 rounded-2xl bg-dark-900/80 border border-white/5">
                          <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                            SYSTEM PIPELINE
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono-code">
                            {project.pipeline.map((p, pIdx) => (
                              <React.Fragment key={pIdx}>
                                <span className="px-2 py-0.5 rounded bg-dark-850 text-slate-300 border border-white/5">
                                  {p.step}
                                </span>
                                {pIdx < project.pipeline.length - 1 && (
                                  <span className="text-slate-600">→</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Feature Highlights (top 3) */}
                      <div className="space-y-2 mb-6">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 6).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-dark-900 text-slate-300 border border-white/5 group-hover:border-electric-400/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 rounded-md text-xs font-mono-code text-slate-500">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      {project.links?.github && project.links.github !== '#' && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-dark-900 hover:bg-dark-800 border border-electric-400/40 hover:border-electric-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all focus:outline-none focus:ring-2 focus:ring-electric-400"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 text-electric-400" />
                          <span>VIEW ON GITHUB</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-electric-500 hover:bg-electric-600 transition-all shadow-md shadow-electric-500/20 focus:outline-none focus:ring-2 focus:ring-electric-400"
                        aria-label={`Explore case study for ${project.title}`}
                      >
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.links?.demo && project.links.demo !== '#' && !project.links.demoPlaceholder && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-slate-300 bg-dark-900 hover:bg-dark-800 border border-white/10 hover:border-white/25 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-electric-400"
                          aria-label={`Live Demo of ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-electric-400" />
                          <span>LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Interactive Visual Mockup Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
                    >
                      <ProjectVisual visualType={project.visualType} accent={project.accent} project={project} />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlaceholder={onOpenPlaceholder}
      />
    </section>
  );
}
