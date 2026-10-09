import React from 'react';
import { X, ExternalLink, Copy, Check, Info } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function SocialModal({ platform, isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const isGithub = platform === 'github';
  const title = isGithub ? 'GitHub Profile' : platform === 'linkedin' ? 'LinkedIn Profile' : platform;

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-3xl bg-dark-900 border border-white/15 p-6 shadow-2xl z-10 animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-dark-850 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4 text-electric-400">
          <Info className="w-5 h-5" />
          <h3 className="text-lg font-bold font-display text-white">{title}</h3>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          As instructed, genuine URLs are kept as placeholders until you update them in{' '}
          <code className="text-electric-400 font-mono-code bg-dark-950 px-1.5 py-0.5 rounded">
            src/data/personal.js
          </code>.
        </p>

        <div className="p-3.5 rounded-2xl bg-dark-950 border border-white/5 space-y-2 mb-5 text-xs font-mono-code">
          <div className="text-slate-400">Direct Contact:</div>
          <div className="text-white font-bold">{personalInfo.email}</div>
          <div className="text-slate-400">{personalInfo.phone}</div>
        </div>

        <div className="flex gap-2.5">
          <button
            onClick={copyEmail}
            className="flex-1 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-xs uppercase font-mono-code flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-dark-800 text-slate-300 hover:text-white font-bold text-xs uppercase font-mono-code transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
