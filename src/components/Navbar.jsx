import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight, Github } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#hero', id: 'hero' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { name: 'EDUCATION', href: '#education', id: 'education' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Akanksha Saraf Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-electric-400/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <span className="font-display font-extrabold text-sm tracking-tighter text-white group-hover:text-electric-400 transition-colors">
                AS
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-electric-400 to-violetAccent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold tracking-wider text-white uppercase font-display">
                AKANKSHA SARAF
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono-code">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-dark-850/80 border border-white/5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-electric-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume & GitHub */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akanksha Saraf GitHub Profile"
              title="GitHub Profile"
              className="p-2.5 rounded-full bg-dark-850 border border-white/10 hover:border-electric-400/50 hover:text-white text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-electric-400"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumePath}
              download="Akanksha_Saraf_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-electric-500/20 to-violetAccent-500/20 border border-electric-400/40 hover:border-electric-400 hover:bg-electric-500/30 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              <Download className="w-3.5 h-3.5 text-electric-400" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-dark-850 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-dark-950/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fade-in">
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-mono-code text-electric-400 uppercase tracking-widest mb-2">
              NAVIGATION
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-electric-500/15 text-electric-400 border border-electric-400/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl font-bold text-center text-xs tracking-wider uppercase text-slate-200 bg-dark-900 border border-white/10 hover:border-electric-400/50 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <a
                href={personalInfo.resumePath}
                download="Akanksha_Saraf_Resume.pdf"
                className="py-3 rounded-xl font-bold text-center text-xs tracking-wider uppercase text-white bg-electric-500 hover:bg-electric-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-electric-500/25"
              >
                <Download className="w-4 h-4" />
                <span>RESUME</span>
              </a>
            </div>
            <div className="text-center text-xs text-slate-500 font-mono-code">
              {personalInfo.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
