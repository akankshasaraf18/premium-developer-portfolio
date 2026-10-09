export const skillsCategories = [
  {
    category: "PROGRAMMING",
    description: "Core algorithmic foundations and multi-paradigm software engineering",
    skills: [
      { name: "Java", level: "Advanced", desc: "Enterprise OOP, Collections, Servlets & backend systems" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, closures, modern functional patterns & DOM" },
      { name: "Python", level: "Proficient", desc: "Data analysis, scripting, AI pipelines & NLP tooling" },
      { name: "C++", level: "Proficient", desc: "STL, high-performance data structures & algorithm solving" },
      { name: "C", level: "Solid", desc: "Memory management, pointers and procedural programming" },
      { name: "SQL", level: "Proficient", desc: "Relational queries, joins, constraints and schema design" }
    ]
  },
  {
    category: "FRONTEND",
    description: "Modern, performant, component-driven web interfaces",
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, component composition, state management & virtual DOM" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first design systems, responsive layouts & micro-styling" },
      { name: "Vite", level: "Advanced", desc: "Modern ESM build tool, fast HMR & optimized production bundling" },
      { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, CSS Grid/Flexbox, animations & accessibility" }
    ]
  },
  {
    category: "BACKEND",
    description: "Scalable server architectures, secure APIs, and microservices",
    skills: [
      { name: "Node.js", level: "Advanced", desc: "Non-blocking event-driven backend runtimes and worker scripts" },
      { name: "Express.js", level: "Advanced", desc: "Modular routing, middleware chains & RESTful architectures" },
      { name: "REST APIs", level: "Advanced", desc: "Clean HTTP contract design, status codes & payload validation" },
      { name: "JWT Authentication", level: "Proficient", desc: "Stateless authorization, token signing and role enforcement" },
      { name: "Flask", level: "Proficient", desc: "Lightweight Python microframework for ML model serving" }
    ]
  },
  {
    category: "DATABASE",
    description: "Document stores and relational schemas engineered for integrity",
    skills: [
      { name: "MongoDB", level: "Advanced", desc: "Document collections, aggregation pipelines & indexing" },
      { name: "Mongoose", level: "Advanced", desc: "Schema modeling, data validation & lifecycle hooks" },
      { name: "MySQL", level: "Proficient", desc: "Relational database modeling, transactions & indexing" },
      { name: "SQLite", level: "Proficient", desc: "Embedded relational storage for rapid local prototypes" }
    ]
  },
  {
    category: "AI/ML",
    description: "Intelligent pipelines, NLP, document intelligence & predictive modeling",
    skills: [
      { name: "Python AI Ecosystem", level: "Proficient", desc: "End-to-end data pipelines and model integration" },
      { name: "NumPy & Pandas", level: "Proficient", desc: "Vectorized computing, dataframe transformations & wrangling" },
      { name: "Scikit-Learn", level: "Proficient", desc: "Supervised & unsupervised ML classifiers and evaluators" },
      { name: "NLP & LLM Prompting", level: "Proficient", desc: "Tesseract OCR, SBAR clinical handoffs & generative Q&A" },
      { name: "TensorFlow", level: "Familiar", desc: "Deep neural networks and tensor operations" }
    ]
  },
  {
    category: "TOOLS",
    description: "Industry-standard developer productivity and version control toolchain",
    skills: [
      { name: "Git", level: "Advanced", desc: "Branching workflows, rebasing, commit discipline & merge resolution" },
      { name: "GitHub", level: "Advanced", desc: "Pull requests, code reviews, releases and portfolio repositories" },
      { name: "VS Code", level: "Advanced", desc: "Primary IDE environment with debugging and linting configs" },
      { name: "Postman", level: "Proficient", desc: "REST endpoint debugging, environment variables & payload tests" },
      { name: "Jupyter Notebooks", level: "Proficient", desc: "Interactive data exploration, visualization and ML notebooks" }
    ]
  },
  {
    category: "CORE CONCEPTS",
    description: "Theoretical computer science disciplines mastered with high academic honors",
    skills: [
      { name: "Data Structures & Algorithms", level: "150+ Solved", desc: "Binary trees, graphs, sorting, dynamic programming, recursion" },
      { name: "OOP (Object-Oriented Programming)", level: "Advanced", desc: "Inheritance, polymorphism, encapsulation, abstraction & design patterns" },
      { name: "Operating Systems", level: "Academic Honor", desc: "Process scheduling, concurrency, virtual memory & threads" },
      { name: "DBMS", level: "Certified", desc: "ACID properties, normalization, indexing & relational algebra" },
      { name: "Computer Networks", level: "Academic Honor", desc: "OSI layer, TCP/IP protocol stack, HTTP/S & socket communication" }
    ]
  }
];

// Interactive constellation nodes surrounding the center "AKANKSHA"
export const constellationNodes = [
  { id: "react", name: "React.js", category: "Frontend", x: -140, y: -70, color: "#38bdf8", size: 54 },
  { id: "node", name: "Node.js", category: "Backend", x: 130, y: -60, color: "#22c55e", size: 52 },
  { id: "mongo", name: "MongoDB", category: "Database", x: 140, y: 70, color: "#10b981", size: 50 },
  { id: "java", name: "Java", category: "Languages", x: -70, y: -130, color: "#f97316", size: 50 },
  { id: "python", name: "Python", category: "AI/ML", x: 60, y: -135, color: "#eab308", size: 52 },
  { id: "cpp", name: "C++", category: "Languages", x: -145, y: 65, color: "#0ea5e9", size: 48 },
  { id: "js", name: "JavaScript", category: "Languages", x: 0, y: 135, color: "#facc15", size: 54 },
  { id: "git", name: "Git / GitHub", category: "Tools", x: -80, y: 120, color: "#f43f5e", size: 46 },
  { id: "express", name: "Express.js", category: "Backend", x: 170, y: 0, color: "#94a3b8", size: 46 },
  { id: "sklearn", name: "Scikit-Learn", category: "AI/ML", x: 80, y: 120, color: "#a855f7", size: 46 },
  { id: "dsa", name: "DSA (150+)", category: "Core", x: -170, y: 0, color: "#6366f1", size: 48 }
];
