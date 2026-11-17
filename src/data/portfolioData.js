export const PERSONAL_INFO = {
  name: "Kanika Rajput",
  role: "Computer Science Engineering Undergraduate",
  tagline: "Building thoughtful digital experiences.",
  description:
    "Computer Science undergraduate passionate about software engineering, problem-solving, data science and building meaningful technology.",
  degree: "B.Tech CSE | 2024–2028",
  cgpa: "CGPA: 8.9",
  dsaStat: "300+ coding problems on GeeksforGeeks",
  email: "rajputkanika874@gmail.com",
  github: "https://github.com/kanikkka",
  linkedin: "https://www.linkedin.com/in/kanikarajput-13895a353",
};

export const EDUCATION = [
  {
    degree: "B.Tech — Computer Science Engineering",
    institution: "Chandigarh Group of Colleges, Landran",
    period: "2024–2028",
    score: "CGPA: 8.9",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "CBSE",
    period: "2023–24",
    score: "91.4%",
  },
  {
    degree: "Matriculation (Class X)",
    institution: "CBSE",
    period: "2021–22",
    score: "89%",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: ["C++", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Libraries and Frameworks",
    iconName: "Layers",
    skills: ["NumPy", "Pandas", "FastAPI", "React.js", "Next.js", "Scikit-learn"],
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
  {
    category: "Core Areas",
    iconName: "Cpu",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Problem Solving",
      "Software Development",
      "Data Analytics",
      "Machine Learning",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "agrisetu-ai",
    title: "AgriSetu AI",
    status: "Completed",
    category: "AI / Agricultural Marketplace",
    summary: "An agricultural marketplace platform designed to connect farmers and buyers.",
    overview:
      "AgriSetu AI bridges the gap between agricultural producers and institutional buyers through machine learning price estimation, multi-attribute crop matching, and geospatial distance computation.",
    features: [
      "Crop price prediction using Random Forest.",
      "Buyer matching based on crop type, variety, lot size, moisture and location.",
      "Matching score based on agricultural attributes.",
      "Distance analysis using OSRM.",
    ],
    technologies: ["Python", "FastAPI", "React", "Random Forest"],
    github: "https://github.com/kanikkka/AgriSetuAI",
  },
  {
    slug: "gapfinder-ai",
    title: "GapFinder AI",
    status: "In Progress",
    category: "RAG / Research Synthesis",
    summary: "An evidence-grounded research synthesis and research gap discovery platform.",
    overview:
      "GapFinder AI ingests academic literature in PDF format, segments text into semantic chunks, retrieves evidence via vector embeddings, and highlights under-explored research directions grounded in source papers.",
    features: [
      "Research paper and PDF processing.",
      "Text extraction and chunking.",
      "Embeddings and vector retrieval.",
      "RAG-powered research analysis.",
      "Similarity detection.",
      "Research gap ranking.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Supabase", "Groq", "RAG"],
    github: "https://github.com/kanikkka",
  },
  {
    slug: "ecolens-ai",
    title: "EcoLens AI",
    status: "Completed",
    category: "Computer Vision / Sustainability",
    summary: "An AI-powered sustainability platform.",
    overview:
      "EcoLens AI combines optical character recognition and computer vision to inspect consumer product packaging, classify polymer types, and guide users toward actionable reuse, repair, or local collection facilities.",
    features: [
      "Product and packaging information analysis.",
      "OCR and computer vision.",
      "Plastic and packaging identification.",
      "Reuse, repair and recycling recommendations.",
      "Collection-point mapping and environmental impact tracking.",
    ],
    technologies: ["Python", "OCR", "Computer Vision", "AI"],
    github: "https://github.com/kanikkka/Ecolens-AI",
  },
  {
    slug: "modalguard-ai",
    title: "ModalGuard AI",
    status: "Completed",
    category: "ML Evaluation & Reliability",
    summary: "An ML reliability and model evaluation platform.",
    overview:
      "ModalGuard AI streamlines structured dataset ingestion, classification training, and diagnostic evaluation—surfacing standard classification metrics alongside robustness checks to assess overall model health.",
    features: [
      "Dataset upload.",
      "Classification model training.",
      "Model evaluation.",
      "Accuracy, precision, recall and F1 metrics.",
      "Model robustness tests.",
      "Model health assessment.",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SQLite",
    ],
    github: "https://github.com/kanikkka/ModalGuardAI",
  },
  {
    slug: "blackbox-ai",
    title: "BLACKBOX AI",
    status: "Concept / Architecture",
    category: "Distributed Systems Observability",
    summary: "An AI software flight recorder and memory engine for distributed software systems.",
    overview:
      "BLACKBOX AI is designed around deterministic event recording and incident timeline reconstruction—enabling engineering teams to replay failures and investigate root causes across distributed services.",
    features: [
      "Event recording.",
      "Incident timeline reconstruction.",
      "Failure analysis.",
      "Root-cause investigation.",
      "Incident replay.",
    ],
    technologies: ["React", "Vite", "Python", "FastAPI", "Uvicorn"],
    github: "https://github.com/kanikkka/BLACKBOX-AI",
  },
  {
    slug: "punjabimandi-ai",
    title: "PunjabiMandi.AI",
    status: "Concept",
    category: "Agricultural Price Forecasting",
    summary: "An agricultural mandi price forecasting concept focused on Punjab farmers.",
    overview:
      "PunjabiMandi.AI explores historical mandi price modeling and cross-market comparisons to support farmers in evaluating sell-or-wait timing decisions across Punjab agricultural markets.",
    features: [
      "Mandi price forecasting.",
      "Sell-or-wait insights.",
      "Mandi comparison.",
      "Agricultural data analysis.",
    ],
    technologies: [
      "Python",
      "TensorFlow/Keras",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
    ],
    github: "https://github.com/kanikkka/Mandi-Price-Detection.AI-PUNJAB-",
  },
  {
    slug: "civicare",
    title: "CiviCare",
    status: "Additional Project",
    category: "Civic Tech",
    summary: "A digital civic issue reporting and tracking platform.",
    overview:
      "CiviCare provides a structured digital channel for citizens to report local civic issues and monitor resolution progress transparently.",
    features: [
      "Digital civic issue reporting.",
      "Structured issue categorization and tracking.",
    ],
    technologies: ["Web Development", "Software Engineering"],
    github: "https://github.com/kanikkka/CIVICARE..",
  },
  {
    slug: "jaysikha-virtual-assistant",
    title: "Jaysikha — Virtual Assistant",
    status: "Additional Project",
    category: "Python Automation",
    summary: "A Python-based voice assistant.",
    overview:
      "Jaysikha is a Python-driven desktop voice assistant built to interpret spoken commands and automate everyday utility workflows.",
    features: [
      "Voice command recognition and audio response.",
      "Python-based task and utility automation.",
    ],
    technologies: ["Python"],
    github: "https://github.com/kanikkka/Jaysikha-VIRTUAL-ASSISTANTE",
  },
];

export const EXPERIENCE = [
  {
    role: "AI/ML Trainee",
    organization: "Grazitti Interactive",
    duration: "28-day training",
    type: "Industrial Training",
    description:
      "Completed an intensive 28-day structured training program focused on practical Python workflows, dataset preparation, and core machine learning model lifecycles.",
    learningAreas: [
      "Python",
      "Data preprocessing",
      "Machine learning fundamentals",
      "Model training",
      "Model evaluation",
    ],
  },
];

export const CERTIFICATIONS = [
  { title: "Machine Learning", issuer: "Dell Technologies" },
  { title: "Python for Data Science", issuer: "NPTEL" },
  { title: "AWS Academy — Cloud Operations", issuer: "AWS Academy" },
  { title: "AI/ML Training", issuer: "Grazitti Interactive" },
  { title: "Introduction to Linux", issuer: "Linux Foundation / Training" },
  { title: "Learning Linux Command Line", issuer: "Linux Training" },
  { title: "Linux: Bash Shell and Scripts", issuer: "Linux Training" },
  { title: "Linux: Overview and Installation", issuer: "Linux Training" },
  { title: "Generative AI", issuer: "NASSCOM" },
  { title: "Digital Edge 101", issuer: "FutureSkills Prime" },
];

export const ACHIEVEMENTS = [
  {
    title: "Hack-A-Throne National Hackathon 2026",
    highlight: "Final Submission Round",
    detail: "Advanced to the Final Submission Round at the national-level hackathon.",
  },
  {
    title: "Smart India Hackathon 2026",
    highlight: "Pre-Finalist",
    detail: "Selected as a Pre-Finalist in Smart India Hackathon 2026.",
  },
  {
    title: "Code Nova Hackathon (PARIVARTAN)",
    highlight: "2nd Runner-Up",
    detail: "Secured the 2nd Runner-Up position at Code Nova Hackathon (PARIVARTAN).",
  },
  {
    title: "GeeksforGeeks",
    highlight: "300+ Coding Problems Solved",
    detail: "Consistently solved over 300 algorithmic and data structure problems on GeeksforGeeks.",
  },
  {
    title: "NASSCOM Digital Edge",
    highlight: "97% Score",
    detail: "Achieved a 97% score in the NASSCOM Digital Edge assessment.",
  },
];
