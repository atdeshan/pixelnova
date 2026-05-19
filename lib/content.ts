/**
 * PIXELNOVA — Content
 *
 * Edit this file to update any text on the site.
 */

export const STUDIO = {
  name: "PixelNova",
  email: "hello@pixelnova.studio",
  location: "Sri Lanka",
  established: "2024",
  booking: "Q2 2026",
  founders: ["Deshan", "Dasun"],
  social: {
    instagram: "#",
    linkedin: "#",
    dribbble: "#",
    github: "#",
  },
};

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type WorkItem = {
  n: string;
  client: string;
  project: string;
  tags: string[];
  year: string;
};

export const WORK: WorkItem[] = [
  {
    n: "01",
    client: "Northwave Capital",
    project: "Investor relations platform",
    tags: ["Web App"],
    year: "2025",
  },
  {
    n: "02",
    client: "Orbital Goods",
    project: "DTC brand & storefront",
    tags: ["Brand", "3D"],
    year: "2025",
  },
  {
    n: "03",
    client: "Northwave Capital",
    project: "Quarterly report micro-site",
    tags: ["Web"],
    year: "2025",
  },
  {
    n: "04",
    client: "Field Notes Studio",
    project: "Portfolio site & 3D identity",
    tags: ["3D", "Web"],
    year: "2024",
  },
  {
    n: "05",
    client: "Field Notes Studio",
    project: "Brand refresh",
    tags: ["Brand"],
    year: "2024",
  },
];

export type Service = {
  n: string;
  icon: "code" | "palette" | "box" | "compass";
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    n: "01",
    icon: "code",
    title: "Development",
    desc: "Production sites and web apps. React, Next.js, full-stack.",
  },
  {
    n: "02",
    icon: "palette",
    title: "Design",
    desc: "Brand systems, UI design, and visual identity.",
  },
  {
    n: "03",
    icon: "box",
    title: "3D & Motion",
    desc: "Renders, animation, real-time 3D, WebGL.",
  },
  {
    n: "04",
    icon: "compass",
    title: "Strategy",
    desc: "Discovery, audits, and product direction.",
  },
];

export type ProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  { n: "01", title: "Discover", desc: "Understand the business first." },
  { n: "02", title: "Design", desc: "Iterative rounds, weekly reviews." },
  { n: "03", title: "Build", desc: "Clean, documented, shipped in milestones." },
  { n: "04", title: "Launch", desc: "And the slow work that follows." },
];

export const STATS = [
  { n: "05", label: "Projects" },
  { n: "03", label: "Clients" },
  { n: "02", label: "People" },
];
