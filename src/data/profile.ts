export interface RoleEntry {
  dateStart: string;
  dateEnd: string;
  title: string;
  company: string;
  bullets: string[];
}

export interface ProjectEntry {
  badge: string;
  title: string;
  description: string;
  variant: "pink" | "coral";
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/clara-k-56a0a5414/",
  github: "https://www.github.com/clvkwong",
  email: "mailto:claravk3005@gmail.com",
};

export const sectors: { label: string; variant: "coral" | "pink" | "peach" }[] =
  [
    { label: "healthcare & medtech", variant: "coral" },
    { label: "climate & clean energy", variant: "pink" },
    { label: "edtech", variant: "peach" },
    { label: "social impact", variant: "coral" },
    { label: "civic tech", variant: "pink" },
    { label: "accessibility", variant: "peach" },
    { label: "food & agtech", variant: "coral" },
    { label: "disaster relief", variant: "pink" },
    { label: "sports tech", variant: "peach" },
  ];

export const skills = {
  languages: [
    { label: "JavaScript", solid: true },
    { label: "TypeScript", solid: true },
    { label: "Golang", solid: true },
    { label: "Python", solid: true },
  ],
  tools: [
    { label: "React", solid: true },
    { label: "React Native", solid: true },
    { label: "GraphQL", solid: true },
    { label: "Node.js", solid: true },
    { label: "Git", solid: true },
    { label: "AWS", solid: true },
    { label: "Docker", solid: true },
    { label: "PostgreSQL", solid: true },
    { label: "MongoDB", solid: true },
    { label: "Redis", solid: true },
  ],
};

export const roles: RoleEntry[] = [
  {
    dateStart: "jun 2026",
    dateEnd: "present",
    title: "Software Engineer",
    company: "Asana",
    bullets: [],
  },
  {
    dateStart: "mar 2025",
    dateEnd: "aug 2025",
    title: "Software Engineer II, Canada Dev Tech Lead",
    company: "Sezzle",
    bullets: [
      "Architected the Canada Virtual Card project, projected to generate $100M+ in annual revenue",
      "Led a cross-functional Canada dev team across mobile, web, and backend",
      "Spearheaded a cross-team user-verification feature on a 2-week deadline to secure a major partner launch",
    ],
  },
  {
    dateStart: "jun 2023",
    dateEnd: "mar 2025",
    title: "Software Engineer",
    company: "Sezzle",
    bullets: [
      "Generated $12M in annual revenue by targeting offers to specific user cohorts and payment plans",
      "Improved retention by ~60% by automating Sezzle Premium free trials",
      "Lifted store click-through rate ~30% by customizing category rankings in the shop tab",
      "Cut Braze event data loss to under 1% with an outbox-pattern architecture",
    ],
  },
  {
    dateStart: "nov 2023",
    dateEnd: "mar 2024",
    title: "Co-Founder",
    company: "Janet AI — YC W24",
    bullets: [
      "Built an AI phone receptionist for cleaning companies using Twilio and the OpenAI API",
      "Accepted into Y Combinator Winter 2024 under Dalton Caldwell",
    ],
  },
  {
    dateStart: "sep 2020",
    dateEnd: "oct 2023",
    title: "Co-Founder",
    company: "Dawn",
    bullets: [
      "Engaged ~1,500 users for an average of 15m52s daily",
      "Rated 5 stars on both the App Store and Google Play",
      "Designed, built, and shipped the whole app solo with React Native and Firebase",
      "Built a recommendation algorithm matching users on proximity and shared interests",
    ],
  },
  {
    dateStart: "apr 2022",
    dateEnd: "jan 2023",
    title: "Software Engineer",
    company: "SAP",
    bullets: [
      "Cut queries sent by ~60% and component re-renders by ~85% by building the Filter Apply Selections button for SAP Stories",
    ],
  },
];

export const earlierRoles: RoleEntry[] = [
  {
    dateStart: "jun 2020",
    dateEnd: "aug 2020",
    title: "Software Engineer Intern",
    company: "Amazon",
    bullets: [
      'Built the recommendation system behind "Popular Items For Your Pet," projected to generate $10M in revenue',
      "Cut processing of 730 days of purchase data from 20+ hours to under 4 by adding multiprocessing",
    ],
  },
  {
    dateStart: "sep 2019",
    dateEnd: "dec 2019",
    title: "Software Engineer Intern",
    company: "LinkedIn",
    bullets: [
      "Shipped a post-application modal nudging members toward skill assessments — projected to lift participation by 250% and generate ~$2M in annual revenue",
    ],
  },
  {
    dateStart: "may 2019",
    dateEnd: "aug 2019",
    title: "Software Engineer Intern, Cloud & Data Platform",
    company: "Splunk",
    bullets: [
      "Built checkpoint recovery for multi-region data ingestion and cut metric data loss to under 1%",
    ],
  },
  {
    dateStart: "sep 2018",
    dateEnd: "apr 2019",
    title: "Security Engineer & Cloud Ops Intern",
    company: "GE Digital",
    bullets: [
      "Closed the final LockPath risks for general availability with Wazuh agents and AWS PrivateLink",
      "Mitigated OWASP Top 10 risks with AWS WAF, Kinesis, S3, and Athena logging",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    badge: "in personal use, open sourced",
    title: "FlowState",
    description:
      "A gamified habit tracker with timed routines. Built with React Native, Expo, Firebase, Zustand.",
    variant: "pink",
  },
  {
    badge: "in personal use",
    title: "WorryfreeFinance",
    description:
      "A personal finance project born from one too many spreadsheet headaches. Built with React Native, Firebase, Redux.",
    variant: "coral",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science, with Distinction",
  school: "University of British Columbia · Graduated 2021",
  gpa: "3.7 / 4.0 GPA",
  honour: "Dean's Honour List",
};
