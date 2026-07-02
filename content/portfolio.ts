export type Project = {
  slug: string;
  name: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  github?: string;
  demo?: string;
  caseStudy: { overview: string; problem: string; built: string[]; stack: string; outcome: string };
};

export type Experience = { company: string; location: string; position: string; duration: string };
export type Education = { degree: string; institution: string; year: string; details: string };
export type SkillGroup = { label: string; items: string[] };

export const profile = {
  name: "Firlandi Althaf Ansyari",
  role: "Software Engineer",
  tagline: "I build full-stack products across web and mobile — from marketplace platforms to real-time community apps.",
  location: "Jakarta, Indonesia",
  email: "firlandi.althaf@gmail.com",
  linkedIn: "https://linkedin.com/in/firlandi",
  github: "https://github.com/faransyari",
  website: "https://firlandiansyari.com",
  available: true,
  resume: "/resume.pdf",
  bio: [
    "I'm a software engineer with dual degrees from the University of Indonesia and the University of Queensland, currently building at GoTo.",
    "I work across the stack — shipping production web and mobile apps with React, Next.js, Django, Spring Boot, and Flutter — and I care about clean interfaces, solid data models, and details that make software feel considered.",
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "pc-marketplace",
    name: "PC Marketplace",
    year: "2024",
    role: "Full-stack developer",
    description: "A modern e-commerce platform for PC enthusiasts to buy and sell components.",
    technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
    image: "/images/pc-marketplace.png",
    github: "https://github.com/faransyari/pc-marketplace",
    demo: "https://pc-marketplace.vercel.app/",
    caseStudy: {
      overview: "An e-commerce marketplace tailored to PC hardware, where enthusiasts can list, browse, and purchase components with a build-focused catalogue.",
      problem: "General marketplaces bury component specs and make compatibility hard to reason about. PC builders need structured, spec-first listings and a fast browsing experience.",
      built: [
        "Spec-first product catalogue with category and attribute filtering",
        "Listing creation and management flow for sellers",
        "A responsive Next.js storefront backed by a Django + PostgreSQL API",
      ],
      stack: "Next.js and Tailwind CSS on the front end, Django REST for the API, PostgreSQL for persistence, deployed on Vercel.",
      outcome: "A working marketplace demo with a clean storefront and a structured, filterable catalogue.",
    },
  },
  {
    slug: "collectiv",
    name: "Collectiv",
    year: "2024",
    role: "Full-stack developer",
    description: "A crowd-sourced app connecting users with local events and volunteer opportunities.",
    technologies: ["Django", "React", "Next.js"],
    video: "https://www.youtube.com/embed/oqvEPiTc-5s?controls=1&modestbranding=1&rel=0",
    github: "https://github.com/The-Mud-Koalas/collectiv-fe-mobile",
    demo: "https://collectiv-fe-web.vercel.app/",
    caseStudy: {
      overview: "A community platform that surfaces nearby events and volunteer opportunities and lets people participate, contribute, and track engagement.",
      problem: "Local events and volunteering are fragmented across channels, making it hard for people to discover and commit to opportunities near them.",
      built: [
        "Location-aware event and opportunity discovery",
        "Participation and contribution tracking for community members",
        "A shared Django backend serving both web and mobile clients",
      ],
      stack: "Django REST backend with React/Next.js web and a mobile client consuming the same API.",
      outcome: "A functioning cross-platform prototype spanning web and mobile from a single backend.",
    },
  },
  {
    slug: "isaveit",
    name: "iSaveIt",
    year: "2024",
    role: "Full-stack developer",
    description: "A financial management app for budgeting and expense tracking.",
    technologies: ["Django", "Flutter", "Dart"],
    video: "https://www.youtube.com/embed/ECg8z9c7sK0?controls=1&modestbranding=1&rel=0",
    github: "https://github.com/PPL-Waffar/iSaveIt?tab=readme-ov-file",
    caseStudy: {
      overview: "A mobile budgeting app that helps people plan budgets, record expenses, and understand where their money goes.",
      problem: "Everyday budgeting tools are often heavier than they need to be; users want quick expense capture and a clear view of their spending.",
      built: [
        "Budget planning and category-based expense tracking",
        "A Flutter mobile client for fast expense entry",
        "A Django backend for accounts, budgets, and transaction history",
      ],
      stack: "Flutter and Dart on mobile, Django on the backend.",
      outcome: "A complete mobile budgeting prototype covering budgets, expenses, and history.",
    },
  },
  {
    slug: "menuscanorder",
    name: "Menuscanorder",
    year: "2023",
    role: "Backend & full-stack developer",
    description: "A restaurant service app for menu scanning, ordering, and payment.",
    technologies: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],
    image: "/images/menuscanorder.png",
    github: "https://github.com/faransyari/menuscanorder",
    caseStudy: {
      overview: "A QR-based restaurant ordering system where diners scan a table code to browse the menu, order, and pay without waiting on staff.",
      problem: "Table-service ordering is slow and staff-dependent; restaurants want diners to self-serve from their phones.",
      built: [
        "QR-to-menu flow that maps a scanned code to a table and live menu",
        "Cart, ordering, and payment steps for diners",
        "An admin side for menu and order management",
      ],
      stack: "CodeIgniter (PHP) with a MySQL database and a JavaScript front end.",
      outcome: "An end-to-end scan-order-pay flow demonstrated for restaurant service.",
    },
  },
];

export const experience: Experience[] = [
  { company: "GoTo", location: "Jakarta, Indonesia", position: "Software Engineer", duration: "Apr 2025 — Present" },
  { company: "Distrosub", location: "Brisbane, Australia", position: "Founding Software Engineer", duration: "Jul 2025 — Mar 2026" },
  { company: "University of Queensland", location: "Brisbane, Australia", position: "Casual Academic Tutor", duration: "Feb 2025 — Jul 2025" },
  { company: "Purple Patch Consulting", location: "Brisbane, Australia", position: "Full Stack Developer Intern", duration: "Oct 2024 — Dec 2024" },
  { company: "Kamar Pelajar", location: "Brisbane, Australia", position: "Backend Developer Intern", duration: "Jul 2024 — Oct 2024" },
  { company: "University of Indonesia", location: "Jakarta, Indonesia", position: "Teaching Assistant", duration: "Feb 2022 — Dec 2022" },
];

export const education: Education[] = [
  { degree: "Bachelor of Information Technology", institution: "University of Queensland", year: "2023 — 2024", details: "Software Information Systems major · UQ International Excellence Scholarship" },
  { degree: "Bachelor of Computer Science", institution: "University of Indonesia", year: "2020 — 2022", details: "Specialised in Software Engineering" },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "PHP", "Dart", "Go", "Swift"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Django", "Spring Boot", "Laravel", "CodeIgniter"] },
  { label: "Mobile", items: ["Flutter", "Dart", "Swift"] },
  { label: "Data", items: ["PostgreSQL", "MySQL"] },
  { label: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
