export const projects = [
  {
    id: "patient-health-record-ai",
    number: "01",
    title: "Patient Health Record AI",
    subtitle: "AI-POWERED PATIENT HEALTH RECORD SUMMARIZATION",
    tagline: "Clinical Handoff Synthesis with SBAR Protocol",
    description: "A hospital patient tracking and communication system with AI-powered SBAR summary generation, streamlining nurse-to-doctor clinical handovers.",
    longDescription: "Developed as a technical prototype tackling critical information loss during hospital shift changes. Patient Health Record AI synthesizes raw EHR entries into standardized Situation-Background-Assessment-Recommendation (SBAR) clinical handoffs with automated evaluation pipelines (SequenceMatch & Jaccard) and doctor approval workflows.",
    category: "Healthcare AI & Full Stack",
    technologies: ["Python", "Node.js", "Express.js", "React.js", "MongoDB", "NLP", "Fine-Tuned LLMs", "JWT"],
    features: [
      "Role-Based Clinical Access: Segregated views and permissions for Doctors, Charge Nurses, and Floor Staff",
      "Shift-Validated Data Entry: Time-stamped input checkpoints matching institutional nursing shifts",
      "Automated SBAR Generation: AI models translate messy nursing logs into Situation, Background, Assessment & Recommendation",
      "Comprehensive Clinical Modules: Real-time tracking of patient Vitals, Medications, Labs, Procedures, and Clinical Notes",
      "Doctor Approval Workflows: Sign-off mechanisms allowing physician overrides and verification before permanent filing",
      "Confidence Routing: Low-confidence summaries are automatically routed for mandatory manual review",
      "Immutable Audit Trails: Full edit history and timestamps ensuring regulatory transparency"
    ],
    pipeline: [
      { step: "PATIENT DATA", label: "Vitals, Labs & Notes" },
      { step: "AI PROCESSING", label: "NLP & Evaluator Pipeline" },
      { step: "SBAR SUMMARY", label: "Structured Synthesis" },
      { step: "DOCTOR APPROVAL", label: "Physician Sign-Off" }
    ],
    metrics: [
      { label: "Clinical Protocol", value: "SBAR Standard" },
      { label: "Evaluation", value: "SequenceMatch / Jaccard" },
      { label: "Safety Controls", value: "Doctor Overrides" },
      { label: "Stack", value: "Python + MERN" }
    ],
    links: {
      github: "https://github.com/akankshasaraf18/patient-health-record-ai",
      demo: null,
      githubPlaceholder: false,
      demoPlaceholder: true
    },
    visualType: "health-sbar",
    accent: "cyan"
  },
  {
    id: "dxsure-crm",
    number: "02",
    title: "DXSure CRM",
    subtitle: "FULL-STACK CUSTOMER RELATIONSHIP MANAGEMENT SYSTEM",
    tagline: "Enterprise CRM with RBAC & Financial Tracking",
    description: "A full-stack CRM platform engineered for comprehensive operational tracking — managing employees, client portfolios, vendor contracts, petty cash flows, and structured client payments.",
    longDescription: "Architected during my MERN Stack Internship at Anvistar ITS, DXSure CRM handles mission-critical enterprise workflows. It provides real-time oversight of financial disbursements, role-enforced authorizations for administrative and operational staff, and dynamic reporting for organizational decision-making.",
    category: "Full Stack Development",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Axios", "REST APIs"],
    features: [
      "Role-Based Access Control: Granular Admin and Employee role permissions",
      "Employee Directory: Onboarding records, performance history, and departmental assignments",
      "Client Management: Lifecycle tracking, communication logs, and contract milestones",
      "Vendor Management: Supply partner registry, billing verification, and vendor relations",
      "Petty Cash Tracking: Audited expense logs with receipt verification and balance ceilings",
      "Client Payment Management: Invoicing, payment status tracking, and automated receipts",
      "JWT Authentication: Secure token rotation and stateless session verification",
      "RESTful API Architecture: Clean controller-service layer with MongoDB aggregation pipelines"
    ],
    pipeline: [
      { step: "AUTH", label: "JWT RBAC Security" },
      { step: "DATA", label: "MongoDB & Mongoose" },
      { step: "API", label: "Express REST Engine" },
      { step: "UI", label: "React Responsive CRM" }
    ],
    metrics: [
      { label: "Role Separation", value: "Admin & Staff" },
      { label: "Operational Modules", value: "5 Modules" },
      { label: "API Endpoints", value: "25+ Endpoints" },
      { label: "Architecture", value: "MERN Stack" }
    ],
    links: {
      github: "https://github.com/akankshasaraf18/Dxsure-CRM",
      demo: null,
      githubPlaceholder: false,
      demoPlaceholder: true
    },
    visualType: "crm-dashboard",
    accent: "electric"
  },
  {
    id: "intellidocs-ai",
    number: "03",
    title: "IntelliDocs AI",
    subtitle: "AI DOCUMENT INTELLIGENCE SYSTEM",
    tagline: "OCR Extraction, LLM Summaries & Multimodal Q&A",
    description: "Built an AI-powered document intelligence platform that lets users upload PDFs, DOCX, TXT, and images, then automatically extracts text with OCR, generates concise summaries, and answers questions using generative AI.",
    longDescription: "Developed a full-stack MERN application with a modern React/Vite dashboard for document analytics, smart report generation, and interactive research workflows to improve productivity on complex documents.",
    category: "AI & Full Stack",
    technologies: ["Node.js", "React.js", "MongoDB", "Express.js", "Tesseract OCR", "Generative AI", "LLMs", "Multer"],
    features: [
      "Multiformat Ingestion: High-throughput upload pipelines for PDF, DOCX, TXT, and scanned image formats",
      "OCR Text Extraction: Integrated Tesseract optical character recognition for digitizing legacy scans",
      "AI Summarization: Neural synthesis yielding structured executive summaries and bullet insights",
      "Contextual Q&A: Conversational semantic retrieval answering queries directly cited from source text",
      "Document Analytics: Token distribution, entity density, and semantic complexity scores",
      "Smart Report Generation: Instant downloadable digests formatted for academic and business review",
      "Interactive Research Workflows: Multi-document side-by-side comparison and cross-referencing"
    ],
    pipeline: [
      { step: "DOCUMENT", label: "Multiformat Upload" },
      { step: "OCR", label: "Text Extraction" },
      { step: "AI PROCESSING", label: "LLM Inference" },
      { step: "SUMMARY", label: "Structured Synthesis" },
      { step: "Q&A", label: "Contextual Querying" },
      { step: "INSIGHTS", label: "Actionable Reports" }
    ],
    metrics: [
      { label: "Formats Supported", value: "PDF / DOCX / TXT / IMG" },
      { label: "Extraction Tech", value: "Tesseract OCR" },
      { label: "AI Backend", value: "LLM Generative API" },
      { label: "Interface", value: "React Dashboard" }
    ],
    links: {
      github: "https://github.com/akankshasaraf18/IntelliDocs-AI-Final",
      demo: null,
      githubPlaceholder: false,
      demoPlaceholder: true
    },
    visualType: "ai-doc-pipeline",
    accent: "violet"
  }
];
