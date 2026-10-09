import React, { useState } from 'react';
import { 
  Building2, Users, CreditCard, DollarSign, FileText, CheckCircle2, 
  Sparkles, ArrowRight, Activity, ShieldCheck, HeartPulse, Send,
  Compass, MapPin, Search, ChevronRight, Sliders, Play, Layers
} from 'lucide-react';

export default function ProjectVisual({ visualType, accent, project }) {
  // Interactive mini states
  const [activeTab, setActiveTab] = useState(0);
  const [sbarApproved, setSbarApproved] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState(94);

  // 1. DXSure CRM Dashboard
  if (visualType === 'crm-dashboard') {
    return (
      <div className="w-full rounded-2xl bg-dark-900 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
        {/* Top App Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono-code text-slate-300 font-bold ml-1">DXSure CRM • Enterprise Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-electric-500/10 text-electric-400 border border-electric-500/20">
              ROLE: SUPER_ADMIN
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Client Accounts</span>
              <Building2 className="w-3.5 h-3.5 text-electric-400" />
            </div>
            <div className="text-xl font-bold font-display text-white">124</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">↑ 12% this month</div>
          </div>

          <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Vendor Billing</span>
              <CreditCard className="w-3.5 h-3.5 text-violetAccent-400" />
            </div>
            <div className="text-xl font-bold font-display text-white">₹3.82L</div>
            <div className="text-[10px] text-slate-400 mt-0.5">18 Active POs</div>
          </div>

          <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
              <span>Petty Cash Balance</span>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold font-display text-emerald-400">₹45,500</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Audited &amp; Reconciled</div>
          </div>
        </div>

        {/* Clients & Employees Table Mockup */}
        <div className="rounded-xl bg-dark-850 border border-white/5 overflow-hidden">
          <div className="px-3 py-2 bg-dark-800 border-b border-white/5 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
            <span>CLIENT RECORDS &amp; DISBURSEMENTS</span>
            <span className="text-electric-400">REST API / MONGODB</span>
          </div>
          <div className="divide-y divide-white/5 text-xs">
            <div className="px-3 py-2.5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">Apex Logistics Pvt. Ltd.</div>
                <div className="text-[10px] text-slate-400">Vendor: Logistics Contract #4092</div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
                  PAID ₹1,20,000
                </span>
                <div className="text-[10px] text-slate-500 font-mono-code">INV-9821</div>
              </div>
            </div>

            <div className="px-3 py-2.5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">Zenith Tech Solutions</div>
                <div className="text-[10px] text-slate-400">Client: Retainer Renewal Q2</div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-400">
                  PENDING ₹85,000
                </span>
                <div className="text-[10px] text-slate-500 font-mono-code">INV-9822</div>
              </div>
            </div>

            <div className="px-3 py-2.5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">Staff Discretionary Fund</div>
                <div className="text-[10px] text-slate-400">Petty Cash: Office Hardware</div>
              </div>
              <div className="text-right">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/15 text-blue-400">
                  EXPENSED ₹4,200
                </span>
                <div className="text-[10px] text-slate-500 font-mono-code">RECEIPT #102</div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Pipeline Bar */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400" />
            <span>JWT Auth Guard</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Express Middleware</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violetAccent-400" />
            <span>Mongo Aggregation</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. IntelliDocs AI Document Intelligence System
  if (visualType === 'ai-doc-pipeline') {
    return (
      <div className="w-full rounded-2xl bg-dark-900 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
        {/* Pipeline Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violetAccent-400" />
            <span className="text-xs font-mono-code text-white font-bold">IntelliDocs AI Neural Pipeline</span>
          </div>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-violetAccent-500/20 text-violetAccent-400">
            TESSERACT OCR + LLM
          </span>
        </div>

        {/* Pipeline Steps Flow */}
        <div className="grid grid-cols-6 gap-1 p-2 rounded-xl bg-dark-850 border border-white/5 text-center mb-4 text-[10px] font-mono-code">
          <div className="p-1 rounded bg-dark-800 text-slate-300">DOC</div>
          <div className="p-1 text-slate-600">→</div>
          <div className="p-1 rounded bg-violetAccent-500/20 text-violetAccent-300 font-bold">OCR</div>
          <div className="p-1 text-slate-600">→</div>
          <div className="p-1 rounded bg-electric-500/20 text-electric-300 font-bold">AI LLM</div>
          <div className="p-1 rounded bg-emerald-500/20 text-emerald-300 font-bold">Q&amp;A</div>
        </div>

        {/* Live Document & Summary Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {/* Extracted Document OCR Text */}
          <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
            <div className="text-[10px] font-mono-code text-slate-400 mb-1 flex items-center justify-between">
              <span>INGESTED: contract_v4.pdf</span>
              <span className="text-emerald-400">99.4% OCR Conf.</span>
            </div>
            <div className="text-xs text-slate-300 font-mono-code space-y-1 bg-dark-900/80 p-2.5 rounded-lg border border-white/5 h-28 overflow-y-auto">
              <p className="text-slate-400">&gt; OCR extracted text block...</p>
              <p>&ldquo;Clause 4.1: The licensee shall deploy services across designated cloud tenants with zero data exfiltration safeguards...&rdquo;</p>
              <p className="text-slate-400">&gt; Entities: Licensee, Sovereign Cloud, SLA 99.9%</p>
            </div>
          </div>

          {/* AI Synthesis Card */}
          <div className="p-3 rounded-xl bg-dark-850 border border-violetAccent-500/30">
            <div className="text-[10px] font-mono-code text-violetAccent-400 mb-1 flex items-center justify-between">
              <span>GENERATED AI SUMMARY</span>
              <Sparkles className="w-3 h-3 text-violetAccent-400" />
            </div>
            <div className="text-xs text-slate-200 space-y-1.5 bg-violetAccent-500/5 p-2.5 rounded-lg border border-violetAccent-500/20 h-28 overflow-y-auto">
              <div className="font-semibold text-white">Summary Highlights:</div>
              <p className="text-[11px] text-slate-300 leading-snug">
                • 100% cloud tenant containment required.
              </p>
              <p className="text-[11px] text-slate-300 leading-snug">
                • Termination penalty clause activated on unauthorized exfiltration.
              </p>
              <p className="text-[11px] text-electric-300 font-mono-code">
                [Latency: 380ms | Tokens: 420]
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Query Box */}
        <div className="p-2.5 rounded-xl bg-dark-850 border border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="text-electric-400 font-mono-code font-bold">Q:</span>
            <span>What are the compliance penalties in this document?</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-electric-500 text-white font-mono-code text-[10px] font-bold shrink-0">
            AI ANSWERED
          </span>
        </div>
      </div>
    );
  }

  // 3. ShiftFlow AI Healthcare SBAR System
  if (visualType === 'health-sbar') {
    return (
      <div className="w-full rounded-2xl bg-dark-900 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-mono-code text-white font-bold">Patient Health Record AI • SBAR Handover</span>
          </div>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
            PATIENT: WARD 4B • BED 12
          </span>
        </div>

        {/* Clinical Vitals Row */}
        <div className="grid grid-cols-4 gap-2 mb-4 text-center">
          <div className="p-2 rounded-xl bg-dark-850 border border-white/5">
            <div className="text-[10px] text-slate-400 font-mono-code">Heart Rate</div>
            <div className="text-base font-bold text-white">76 bpm</div>
          </div>
          <div className="p-2 rounded-xl bg-dark-850 border border-white/5">
            <div className="text-[10px] text-slate-400 font-mono-code">Blood Press.</div>
            <div className="text-base font-bold text-white">122/80</div>
          </div>
          <div className="p-2 rounded-xl bg-dark-850 border border-white/5">
            <div className="text-[10px] text-slate-400 font-mono-code">SpO2</div>
            <div className="text-base font-bold text-emerald-400">98%</div>
          </div>
          <div className="p-2 rounded-xl bg-dark-850 border border-white/5">
            <div className="text-[10px] text-slate-400 font-mono-code">Temp</div>
            <div className="text-base font-bold text-white">98.6°F</div>
          </div>
        </div>

        {/* SBAR Synthesized Protocol Block */}
        <div className="rounded-xl bg-dark-850 p-3.5 border border-white/5 text-xs space-y-2 mb-4">
          <div className="flex items-center gap-2 text-rose-400 font-mono-code font-bold text-[11px]">
            <span>SBAR SYNTHESIS</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-normal">Model: SequenceMatch &amp; Jaccard Evaluated</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-dark-900 border border-white/5">
              <span className="font-bold text-rose-300">S (Situation):</span> Post-op day 2 recovery stable.
            </div>
            <div className="p-2 rounded bg-dark-900 border border-white/5">
              <span className="font-bold text-amber-300">B (Background):</span> Hypertension history; no allergies.
            </div>
            <div className="p-2 rounded bg-dark-900 border border-white/5">
              <span className="font-bold text-electric-300">A (Assessment):</span> Pain level 2/10 managed with meds.
            </div>
            <div className="p-2 rounded bg-dark-900 border border-white/5">
              <span className="font-bold text-emerald-300">R (Recommendation):</span> Ambulation trial in shift morning.
            </div>
          </div>
        </div>

        {/* Doctor Approval Workflow Interactive Action */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-dark-850 border border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className={`w-4 h-4 ${sbarApproved ? 'text-emerald-400' : 'text-slate-400'}`} />
            <span className="text-xs text-slate-300 font-mono-code">
              {sbarApproved ? 'Physician Approved & Sealed' : 'Awaiting Attending Physician Sign-off'}
            </span>
          </div>
          <button
            onClick={() => setSbarApproved(!sbarApproved)}
            className={`px-3 py-1 rounded-lg text-xs font-mono-code font-bold transition-all ${
              sbarApproved
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-electric-500 text-white hover:bg-electric-600'
            }`}
          >
            {sbarApproved ? 'APPROVED ✓' : 'VERIFY & SIGN'}
          </button>
        </div>
      </div>
    );
  }

  // 4. IdeaForge Collaboration Platform
  if (visualType === 'collaboration-network') {
    return (
      <div className="w-full rounded-2xl bg-dark-900 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-electric-400" />
            <span className="text-xs font-mono-code text-white font-bold">IdeaForge • Co-Founder Network</span>
          </div>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SOCKET.IO ACTIVE
          </span>
        </div>

        {/* Pitch Showcase Card */}
        <div className="p-3.5 rounded-xl bg-dark-850 border border-white/5 mb-4">
          <div className="flex items-center justify-between text-[11px] font-mono-code mb-1">
            <span className="text-electric-400 font-bold">#STARTUP-PITCH</span>
            <span className="text-slate-400">42 Upvotes</span>
          </div>
          <h4 className="text-sm font-bold text-white font-display">
            Autonomous Drone Logistics for Emergency Medicine
          </h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Looking for a MERN developer + Embedded systems engineer to build our telemetry dispatcher.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-dark-900 text-slate-300 border border-white/5">React</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-dark-900 text-slate-300 border border-white/5">Socket.io</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-dark-900 text-slate-300 border border-white/5">Node.js</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-dark-900 text-emerald-400 border border-emerald-500/20">Team: 3/4 Members</span>
          </div>
        </div>

        {/* Live Socket.io Room Preview */}
        <div className="rounded-xl bg-dark-850 p-3 border border-white/5 space-y-2">
          <div className="text-[10px] font-mono-code text-slate-400 flex justify-between">
            <span>REAL-TIME COLLABORATOR THREAD</span>
            <span className="text-electric-400">LATENCY 14ms</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded bg-dark-900/80 flex items-start justify-between">
              <div>
                <span className="font-bold text-white">Akanksha (Full Stack):</span>
                <span className="text-slate-300 ml-1.5">Socket channels &amp; JWT auth implemented!</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono-code">12:40 PM</span>
            </div>
            <div className="p-2 rounded bg-dark-900/80 flex items-start justify-between">
              <div>
                <span className="font-bold text-violetAccent-400">Rohan (Hardware):</span>
                <span className="text-slate-300 ml-1.5">Telemetry sensor payload schema ready for integration.</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono-code">12:41 PM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. AI-Driven Scheme Matching (Smart India Hackathon 2026)
  return (
    <div className="w-full rounded-2xl bg-dark-900 border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-violetAccent-400" />
          <span className="text-xs font-mono-code text-white font-bold">Smart Scheme Engine • SIH 2026</span>
        </div>
        <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-violetAccent-500/20 text-violetAccent-300">
          ELIGIBILITY: 94% MATCH
        </span>
      </div>

      {/* Profile & Subsidies Calculator */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
          <div className="text-[10px] text-slate-400 font-mono-code">Sector Target</div>
          <div className="text-sm font-bold text-white">Micro Agritech / MSME</div>
          <div className="text-[10px] text-electric-400 mt-0.5">Maharashtra Region</div>
        </div>
        <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
          <div className="text-[10px] text-slate-400 font-mono-code">Capital Subsidy</div>
          <div className="text-sm font-bold text-emerald-400">Up to ₹25,00,000</div>
          <div className="text-[10px] text-slate-400 mt-0.5">35% Margin Rebate</div>
        </div>
        <div className="p-3 rounded-xl bg-dark-850 border border-white/5">
          <div className="text-[10px] text-slate-400 font-mono-code">Channel Partner</div>
          <div className="text-sm font-bold text-violetAccent-400">SBI MSME Branch</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Shivajinagar, Pune</div>
        </div>
      </div>

      {/* Recommended Schemes List */}
      <div className="rounded-xl bg-dark-850 border border-white/5 p-3 space-y-2 mb-3">
        <div className="text-[10px] font-mono-code text-slate-400 flex justify-between">
          <span>RECOMMENDED SCHEMES (EXPLAINABLE SCORING)</span>
          <span className="text-emerald-400">ELIGIBLE</span>
        </div>
        <div className="p-2.5 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-between text-xs">
          <div>
            <div className="font-bold text-white">PMEGP Scheme (Prime Minister Employment Generation)</div>
            <div className="text-[10px] text-slate-400">Qualifies based on applicant age, project capital &amp; location</div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono-code text-[11px] font-bold">
            96% Score
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-dark-900 border border-white/5 flex items-center justify-between text-xs">
          <div>
            <div className="font-bold text-white">Stand-Up India Enterprise Support</div>
            <div className="text-[10px] text-slate-400">Commercial credit subsidy with collateral guarantees</div>
          </div>
          <span className="px-2 py-0.5 rounded bg-electric-500/20 text-electric-400 font-mono-code text-[11px] font-bold">
            91% Score
          </span>
        </div>
      </div>

      {/* Geospatial Partner Locator Preview */}
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-dark-850 border border-white/10 text-xs font-mono-code">
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin className="w-3.5 h-3.5 text-rose-400" />
          <span>Local Nodal Center: District Industries Centre (DIC) Pune</span>
        </div>
        <span className="text-electric-400 font-bold">2.4 km away</span>
      </div>
    </div>
  );
}
