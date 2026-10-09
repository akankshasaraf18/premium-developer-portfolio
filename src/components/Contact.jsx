import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Contact({ onOpenSocialModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto link so it genuinely triggers communication without fake backend
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Akanksha,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-electric-400" />
          <span className="text-xs font-mono-code text-electric-400 uppercase tracking-widest font-semibold">
            GET IN TOUCH
          </span>
        </div>

        {/* Dramatic Typography */}
        <div className="mb-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold tracking-tighter leading-[0.95] font-display text-white">
            LET&apos;S<br />
            <span className="text-stroke-white hover:text-electric-400/90 transition-all">BUILD</span><br />
            SOMETHING.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mt-6 max-w-2xl font-normal leading-relaxed">
            Have an internship, software opportunity, idea or collaboration in mind? Let&apos;s connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Pills (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-dark-850/60 border border-white/10 space-y-6">
              <h3 className="text-base font-bold font-display text-white uppercase tracking-wider">
                DIRECT CONTACT
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-400/20 flex items-center justify-center text-electric-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono-code">EMAIL ADDRESS</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-electric-400 transition-colors font-mono-code break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violetAccent-500/10 border border-violetAccent-400/20 flex items-center justify-center text-violetAccent-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono-code">DIRECT PHONE</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-violetAccent-400 transition-colors font-mono-code"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-400/20 flex items-center justify-center text-rose-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono-code">LOCATION</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold font-mono-code uppercase bg-electric-500 text-white hover:bg-electric-600 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL ME</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold font-mono-code uppercase bg-dark-900 text-slate-300 hover:text-white hover:border-electric-400/50 border border-white/10 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  aria-label="Akanksha Saraf LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-electric-400" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={personalInfo.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold font-mono-code uppercase bg-dark-900 text-slate-300 hover:text-white hover:border-electric-400/50 border border-white/10 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-electric-400"
                  aria-label="Akanksha Saraf GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-dark-850/60 border border-white/10 relative">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                SEND A MESSAGE
              </h3>
              <p className="text-xs font-mono-code text-slate-400 mb-6">
                Directly opens your default mail client with pre-filled content.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-slate-300 mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 focus:border-electric-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-slate-300 mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 focus:border-electric-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-slate-300 mb-2">
                    MESSAGE / PROJECT SCOPE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, internship role, or project opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 focus:border-electric-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold font-mono-code tracking-wider uppercase text-white bg-electric-500 hover:bg-electric-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-electric-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono-code flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Opening your mail client with your inquiry to {personalInfo.email}.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
