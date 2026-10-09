import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Footer({ onOpenSocialModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-dark-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <div className="text-base font-extrabold text-white font-display tracking-tight">
              AKANKSHA SARAF
            </div>
            <div className="text-xs font-mono-code text-electric-400 mt-1">
              COMPUTER ENGINEERING STUDENT &bull; FULL STACK &bull; AI/ML
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              MMCOE Pune &bull; 9.46 CGPA
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-white text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-electric-400"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-white text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-electric-400"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-electric-500/20 text-electric-400 border border-electric-400/30 hover:bg-electric-500 hover:text-white transition-all"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono-code text-slate-500">
          <div>
            &copy; 2026 Akanksha Saraf. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React &bull; Vite &bull; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
