import React from 'react';
import { Award, Code2, GraduationCap, MapPin, Sparkles, Terminal, CheckCircle2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personal';
import portraitImg from '../assets/akanksha-saraf.png';

export default function About() {
  const pillars = [
    {
      icon: Terminal,
      title: "Clean Full-Stack Architecture",
      desc: "Specialized in the MERN stack with modular controller-service separation, JWT role security, and scalable MongoDB schemas."
    },
    {
      icon: Cpu,
      title: "Practical AI & ML Integration",
      desc: "Building document intelligence pipelines, OCR extraction with Tesseract, and fine-tuned LLM clinical summarization tools."
    },
    {
      icon: Code2,
      title: "Algorithmic Problem Solving",
      desc: "150+ solved challenges across LeetCode & CodeChef, demonstrating strong fundamentals in trees, recursion, graphs, and dynamic programming."
    }
  ];

  return (
    <section id="about" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            WHO I AM
          </span>
        </div>

        {/* Large Editorial Statement */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white max-w-4xl leading-[1.05]">
            &ldquo;{personalInfo.statement}&rdquo;
          </h2>
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300">
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-200">
              I am a <strong className="text-white font-semibold">Computer Engineering student</strong> graduating in 2027 from <span className="text-electric-400">Marathwada Mitra Mandal&apos;s College of Engineering (MMCOE Pune)</span>, passionate about full-stack development, artificial intelligence, and engineering software that solves genuine problems.
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              My engineering journey is driven by a deep commitment to technical rigor. Having completed my Diploma with <span className="text-white font-medium">90.74% Distinction</span> and serving as Class Representative for two consecutive years, I maintain a <span className="text-emerald-400 font-bold">9.46 CGPA</span> in my undergraduate degree.
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              Rather than generic toy projects, I focus on building <strong className="text-slate-200">production-grade applications</strong> — from enterprise CRM systems during my industry internship at Anvistar ITS, to hospital patient SBAR clinical summarizers and document intelligence suites with generative AI.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 mt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-dark-850/80 border border-white/10 flex flex-col gap-2 hover:border-electric-400/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-electric-500/10 border border-electric-400/20 flex items-center justify-center text-electric-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-display mt-1">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 leading-normal">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Academic & Location Quick Details */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-mono-code text-slate-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850 border border-white/5">
                <GraduationCap className="w-3.5 h-3.5 text-electric-400" />
                <span>B.E. 2024 – 2027</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850 border border-white/5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>State Tech Winner</span>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Detail Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-electric-400/40 shrink-0">
                  <img
                    src={portraitImg}
                    alt="Akanksha Saraf close-up portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">AKANKSHA SARAF</h3>
                  <p className="text-xs text-electric-400 font-mono-code">MMCOE Pune (2024 – 2027)</p>
                  <p className="text-[11px] text-slate-400">Computer Engineering</p>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">9.46 Current CGPA</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Consistent academic distinction across all semesters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">150+ Algorithmic Problems</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Practiced across LeetCode &amp; CodeChef platforms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">State Level Technical Winner</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">1st Prize at PINNACLE RAISONI Technical Competition.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-violetAccent-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Class Representative (2 Years)</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Elected leadership role at Government Polytechnic Jalgaon.</p>
                  </div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="mt-6 p-4 rounded-2xl bg-electric-500/5 border border-electric-400/20">
                <p className="text-xs italic text-slate-300 leading-relaxed font-sans">
                  &ldquo;I believe in writing code that is clean, predictable, and directly delivers tangible value to users.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
