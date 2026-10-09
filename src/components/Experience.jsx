import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Layers, Users, Database, Search } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            WORK TIMELINE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
              INDUSTRY EXPERIENCE
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Practical full-stack and backend software development internships working on real-world systems.
            </p>
          </div>
          <div className="text-xs font-mono-code text-slate-400 px-4 py-2 rounded-xl bg-dark-850 border border-white/5 w-fit">
            // 2 VERIFIED INDUSTRY INTERNSHIPS
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-dark-850/50 border border-white/10 hover:border-electric-400/40 transition-all duration-300 shadow-xl group"
            >
              {/* Left Column: Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-400/20">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono-code">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-electric-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300 mt-1 mb-4 flex items-center gap-2">
                    <span className="text-electric-400">@</span>
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    &ldquo;{exp.description}&rdquo;
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-dark-900 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Original UI Artifact Visual Mockup (5 cols) */}
              <div className="lg:col-span-5">
                {exp.id === 'anvistar' ? (
                  /* Abstract CRM Dashboard Visual Mockup */
                  <div className="rounded-2xl p-5 bg-dark-900 border border-white/10 shadow-2xl relative overflow-hidden group-hover:border-electric-400/30 transition-all">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="text-xs font-mono-code text-slate-400 ml-2">DXSure CRM Preview</span>
                      </div>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">LIVE MERN</span>
                    </div>

                    {/* Mini CRM Stats Row */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-dark-850 border border-white/5">
                        <div className="text-[10px] text-slate-400 font-mono-code">Clients</div>
                        <div className="text-sm font-bold text-white">48 Active</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-dark-850 border border-white/5">
                        <div className="text-[10px] text-slate-400 font-mono-code">Vendors</div>
                        <div className="text-sm font-bold text-white">19 Verified</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-dark-850 border border-white/5">
                        <div className="text-[10px] text-slate-400 font-mono-code">Petty Cash</div>
                        <div className="text-sm font-bold text-emerald-400">₹84,200</div>
                      </div>
                    </div>

                    {/* Table Schema Sneak Peek */}
                    <div className="rounded-xl bg-dark-850 p-3 border border-white/5 text-[11px] font-mono-code space-y-2">
                      <div className="flex justify-between text-slate-400 border-b border-white/5 pb-1">
                        <span>MODULE</span>
                        <span>REST ENDPOINT</span>
                        <span>STATUS</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>/api/auth/login</span>
                        <span className="text-electric-400">JWT Sign</span>
                        <span className="text-emerald-400">200 OK</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>/api/employees</span>
                        <span className="text-electric-400">RBAC Guard</span>
                        <span className="text-emerald-400">200 OK</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>/api/payments</span>
                        <span className="text-electric-400">Mongo Aggr</span>
                        <span className="text-emerald-400">200 OK</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* College Finder Search Filter Visual Mockup */
                  <div className="rounded-2xl p-5 bg-dark-900 border border-white/10 shadow-2xl relative overflow-hidden group-hover:border-violetAccent-400/30 transition-all">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-slate-600" />
                        <span className="w-3 h-3 rounded-full bg-slate-600" />
                        <span className="w-3 h-3 rounded-full bg-slate-600" />
                        <span className="text-xs font-mono-code text-slate-400 ml-2">CollegeFinder Engine</span>
                      </div>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-violetAccent-500/20 text-violetAccent-400">JSP / SERVLET</span>
                    </div>

                    {/* Search query box */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-dark-850 border border-white/10 mb-4 text-xs font-mono-code text-slate-300">
                      <Search className="w-4 h-4 text-violetAccent-400" />
                      <span>SELECT * FROM colleges WHERE city = &apos;Pune&apos; AND cutoff &lt;= 92.5</span>
                    </div>

                    {/* Simulated Results */}
                    <div className="space-y-2 text-xs font-mono-code">
                      <div className="p-2.5 rounded-xl bg-dark-850 border border-white/5 flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold">MMCOE Pune</div>
                          <div className="text-[10px] text-slate-400">Comp Engg • Pune City</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-violetAccent-500/20 text-violetAccent-300 text-[10px] font-bold">94.2%</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-dark-850 border border-white/5 flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold">COEP Tech Univ</div>
                          <div className="text-[10px] text-slate-400">Comp Engg • Shivajinagar</div>
                        </div>
                        <span className="px-2 py-1 rounded bg-violetAccent-500/20 text-violetAccent-300 text-[10px] font-bold">98.4%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
