import React, { useState } from 'react';
import { Download, FileText, ExternalLink, Sparkles, CheckCircle2, Eye, X } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-electric-500/10 via-violetAccent-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Decals */}
          <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono-code text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PDF VERIFIED &bull; UPDATED 2026</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold block mb-4">
              CURRICULUM VITAE
            </span>

            {/* Large Dramatic Heading */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.02] mb-6">
              LET&apos;S BUILD<br />
              <span className="text-stroke-white hover:text-electric-400/90 transition-all">THE NEXT THING.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Want to know more about my work? Download my official resume detailing course qualifications, internship metrics, and technical competencies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumePath}
                download="Akanksha_Saraf_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-electric-500 hover:bg-electric-600 transition-all duration-300 shadow-xl shadow-electric-500/25 hover:shadow-electric-500/40 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200 bg-dark-800 hover:bg-dark-750 border border-white/15 hover:border-white/30 transition-all hover:text-white"
              >
                <Eye className="w-4 h-4 text-electric-400" />
                <span>PREVIEW RESUME</span>
              </button>
            </div>

            {/* Quick Specs Checklist */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10 text-xs font-mono-code text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Full-Stack &amp; AI Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>9.46 CGPA Academic Record</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>2 Industry Internships</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* PDF Quick Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl transition-opacity"
            onClick={() => setShowPreviewModal(false)}
          />
          <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl bg-dark-900 border border-white/15 shadow-2xl p-4 sm:p-6 z-10 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-electric-400" />
                <span className="text-xs font-mono-code text-white font-bold">
                  Akanksha_Saraf_Resume.pdf
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.resumePath}
                  download="Akanksha_Saraf_Resume.pdf"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono-code uppercase bg-electric-500 text-white flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD</span>
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-full bg-dark-850 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 w-full bg-dark-950 rounded-2xl overflow-hidden border border-white/5">
              <iframe
                src={`${personalInfo.resumePath}#toolbar=0`}
                title="Akanksha Saraf Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
