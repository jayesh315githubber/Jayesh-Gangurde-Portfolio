/**
 * PORTFOLIO DATA FOR AI ASSISTANT
 *
 * Fill in all your information below. This data will be used by the AI Assistant
 * to answer questions about you, your experience, projects, and skills.
 *
 * Update this file with your actual information and the AI will use it to respond accurately.
 */

import { profileConfig } from "@/lib/profileConfig";

export interface PortfolioData {
  personalInfo: {
    name: string;
    pronouns?: string; // e.g., "She/Her", "He/Him", "They/Them"
    title: string;
    bio: string;
    email?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    period: string; // e.g., "2016 - 2018"
    specialization?: string;
    achievements?: string[];
    description?: string;
    link?: string;
  }>;
  career: Array<{
    title: string;
    company: string;
    period: string; // e.g., "2024 - Present"
    description: string;
    achievements?: string[];
    technologies?: string[];
  }>;
  projects: Array<{
    name: string;
    period: string; // e.g., "2022 - Present"
    description: string;
    technologies?: string[];
    features?: string[];
    achievements?: string[];
    link?: string;
  }>;
  technicalSkills: {
    frontend?: Array<{ name: string; level?: number }>; // level: 0-100
    backend?: Array<{ name: string; level?: number }>;
    database?: Array<{ name: string; level?: number }>;
    cloud?: Array<{ name: string; level?: number }>;
    devops?: Array<{ name: string; level?: number }>;
    tools?: Array<{ name: string; level?: number }>;
    languages?: Array<{ name: string; level?: number }>;
  };
  softSkills: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
    date?: string;
  }>;
  languages?: Array<{
    language: string;
    proficiency: string; // e.g., "Native", "Fluent", "Intermediate"
  }>;
}

// ============================================================================
// FILL IN YOUR INFORMATION BELOW
// ============================================================================

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Jayesh Gangurde",
    pronouns: "He/him",
    title: "Full Stack Developer",
    bio: "Full Stack Developer with 2+ years of experience at Thinkitive Technology, building multi-tenant healthcare SaaS applications using Next.js 15, React 19, Node.js, and TypeScript. Built 110+ API proxy routes and integrated real-time features using Centrifugo WebSocket. Contributed to a Node.js/Express microservices backend with 17 services communicating via NATS message broker, backed by MongoDB and Redis. Integrated 15+ third-party services including Stripe, OpenAI, AWS Transcribe, and more. Experienced with WebRTC, D3.js, Auth0, and Agile/Scrum methodologies.",
    email: profileConfig.contactEmail,
    location: "Pune, India",
    // website: "https://yourwebsite.com",
    // linkedin: "https://linkedin.com/in/yourprofile",
    // github: "https://github.com/yourusername",
  },

  education: [
    {
      degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      institution: "Institute for Advance Computing and Software Development, Akurdi",
      period: "Sep 2022 - Mar 2023",
      specialization: "Advanced Computing",
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Sinhgad Institute of Technology, Lonavala",
      period: "Aug 2013 - Jul 2017",
      specialization: "Mechanical Engineering",
    },
    {
      degree: "HSC",
      institution: "K.A.A.N.M. Sonawane Art's, Science and Commerce College, Satana",
      period: "Aug 2012 - Jul 2013",
    },
    {
      degree: "SSC",
      institution: "L.P.D.P. Maratha English School, Satana",
      period: "Jun 2010 - Mar 2011",
    },
  ],

  career: [
    {
      title: "Software Engineer - E2",
      company: "Thinkitive Technologies Private Limited",
      period: "Jan 2025 - Present",
      description:
        "Working on enterprise-level applications, focusing on scalable web solutions and advanced React development. Contributing to complex projects with emphasis on code quality, performance optimization, and best practices.",
      achievements: [
        "Honored with Key Contributor Award 2025",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "REST API",
      ],
    },
    {
      title: "Software Engineer - E1",
      company: "Thinkitive Technologies Private Limited",
      period: "July 2024 - Jan 2025",
      description:
        "Developed and maintained full-stack web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions. Gained expertise in building responsive user interfaces and robust backend services.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "REST API",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company: "Thinkitive Technologies Private Limited",
      period: "Dec 2023 - July 2024",
      description:
        "Completed comprehensive training on MERN stack development. Successfully onboarded to live projects, learning industry best practices, version control, and collaborative development workflows. Built foundational skills in full-stack web development.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    // {
    //   title: "Lead Full-Stack Developer",
    //   company: "Skyline Interactive",
    //   period: "2016 - 2020",
    //   description: "Spearheaded the creation of immersive web applications using React, GraphQL, and Node.js for high-profile clients. Reduced application load times by 70% through advanced performance optimization. Introduced component-driven workflows that became the company's standard practice.",
    //   achievements: [
    //     "Reduced application load times by 70%",
    //     "Introduced component-driven workflows",
    //   ],
    //   technologies: ["React", "GraphQL", "Node.js", "Performance Optimization"],
    // },
    // {
    //   title: "Senior UI/UX Designer",
    //   company: "PixelForge Studios",
    //   period: "2012 - 2016",
    //   description: "Designed award-winning digital experiences for global brands, winning multiple Awwwards and Webby Awards. Championed user-centered design by integrating continuous feedback loops into every sprint. Collaborated with cross-functional teams to unify visual and interaction design.",
    //   achievements: [
    //     "Won multiple Awwwards and Webby Awards",
    //     "Championed user-centered design",
    //   ],
    //   technologies: ["UI/UX Design", "Design Systems", "User Research"],
    // },
    // {
    //   title: "Frontend Developer & Interaction Designer",
    //   company: "CreativeSpark Agency",
    //   period: "2008 - 2012",
    //   description: "Built responsive and interactive marketing websites during the rise of mobile-first design. Created high-conversion landing pages for major e-commerce campaigns. Developed custom animations that improved user engagement metrics by over 45%.",
    //   achievements: [
    //     "Improved user engagement metrics by over 45%",
    //   ],
    //   technologies: ["Frontend Development", "Responsive Design", "Animation"],
    // },
  ],

  projects: [
    {
      name: "EverBetter",
      period: "Dec 2023 - Present",
      description:
        "Multi-tenant healthcare SaaS platform built with Next.js 15, React 19, and 17 Node.js/Express.js microservices communicating via NATS JetStream. Features Auth0 RBAC with 13 roles, WebRTC video consultations, AWS Transcribe clinical documentation, Stripe billing, and a full GCP/GKE deployment pipeline managed with Terraform and ArgoCD.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "NATS JetStream",
        "Auth0",
        "Redis",
        "Docker",
        "GCP/GKE",
        "Terraform",
        "ArgoCD",
      ],
      features: [
        "17 microservices via NATS JetStream",
        "Auth0 RBAC with 13 roles and 646 route permissions",
        "WebRTC peer-to-peer video consultations",
        "AWS Transcribe AI clinical documentation",
        "Stripe billing and insurance claims",
        "GCP/GKE with Terraform and ArgoCD GitOps",
      ],
      achievements: [
        "Multi-tenant architecture with 134 MongoDB collections",
        "Single gateway routing 645 API routes",
        "Production healthcare platform serving multiple clinics",
      ],
    },
    {
      name: "NousTalk",
      period: "2023 - 2024",
      description:
        "Secure online therapy and practice management platform connecting therapists and clients through encrypted live audio and video sessions. Built the React frontend with WebRTC video calling, D3.js data visualizations, appointment scheduling with reminders, Redux state management, and Stripe payment integration.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Material UI",
        "Ant Design",
        "D3.js",
        "WebRTC",
        "Redux",
        "React Hook Form",
        "Stripe",
        "Tailwind CSS",
        "AgGrid",
      ],
      features: [
        "WebRTC encrypted live audio/video therapy sessions",
        "Appointment scheduling with automated reminders",
        "D3.js interactive charts for clinical insights",
        "Redux state management for complex workflows",
        "React Hook Form + AgGrid for data management",
        "Stripe billing for therapy sessions",
      ],
      achievements: [
        "Full stack delivery for Techno Venture client",
        "Eliminated commute barriers for mental health access",
        "Live production platform at noustalkclinic.noustalk.com",
      ],
    },
    {
      name: "TechShowcase",
      period: "2025 - Present",
      description:
        "My small step which showcase my work, my expertise and my interests.",
      technologies: ["NextJS", "OpenAI", "ReactJS", "Redux"],
    },
    // {
    //   name: "AI-Powered Design Automation Platform",
    //   period: "2024",
    //   description:
    //     "AI-driven platform that automates design workflows for global e-commerce brands.",
    //   technologies: ["AI/ML", "Design Automation", "E-commerce"],
    // },
    // {
    //   name: "Enterprise Resource Planning (ERP) System",
    //   period: "2023",
    //   description: "Modular ERP system for manufacturing conglomerate.",
    //   technologies: ["ERP", "Manufacturing", "Enterprise Software"],
    // },
    // {
    //   name: "Blockchain-Based Supply Chain Tracker",
    //   period: "2022",
    //   description:
    //     "Transparent and tamper-proof supply chain tracking system using Hyperledger Fabric.",
    //   technologies: ["Blockchain", "Hyperledger Fabric", "Supply Chain"],
    // },
    // {
    //   name: "Global E-Learning Platform",
    //   period: "2021",
    //   description: "Comprehensive e-learning platform for global education.",
    //   technologies: ["E-Learning", "Education Technology"],
    // },
  ],

  technicalSkills: {
    frontend: [
      { name: "React.js / Next.js", level: 91 },
      { name: "TypeScript & JavaScript", level: 90 },
      { name: "HTML/CSS", level: 92 },
      { name: "Tailwind CSS", level: 88 },
    ],
    backend: [
      { name: "Node.js / Express", level: 90 },
      { name: "REST API", level: 92 },
      { name: "GraphQL", level: 85 },
    ],
    database: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Prisma", level: 90 },
    ],
    cloud: [{ name: "AWS", level: 85 }],
    devops: [
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Jira", level: 90 },
    ],
    languages: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
    ],
  },

  softSkills: [
    "Leadership",
    "Problem Solving",
    "Agile Methodologies",
    "Mentorship",
    "Strategic Thinking",
    "Cross-Team Collaboration",
    "Communication",
    "Team Management",
  ],

  // certifications: [
  //   {
  //     name: "AWS Certified Solutions Architect",
  //     issuer: "Amazon Web Services",
  //     date: "2023",
  //   },
  // ],

  // languages: [
  //   {
  //     language: "English",
  //     proficiency: "Native",
  //   },
  //   {
  //     language: "Spanish",
  //     proficiency: "Fluent",
  //   },
  // ],
};
