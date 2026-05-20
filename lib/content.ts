/**
 * PIXELNOVA — Content
 *
 * Edit this file to update any text on the site.
 */

export const STUDIO = {
  name: "PixelNova",
  tagline: "From Imagination to Innovation.",
  email: "hello@pixelnova.lk",
  phone: "+94 78 368 1521",
  whatsapp: "94783681521",
  website: "www.pixelnova.lk",
  location: "Sri Lanka",
  established: "2024",
  booking: "Q3 2026",
  founders: ["Dasun Kalhara", "Tharindu Deshan"],
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
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export type Founder = {
  name: string;
  role: string;
  bio: string;
};

export const FOUNDERS: Founder[] = [
  {
    name: "Dasun Kalhara",
    role: "Creative Director",
    bio:
      "Dasun leads the creative vision of PixelNova, specializing in high-end visual design, cinematic content creation, and brand storytelling. His focus is on crafting visually compelling experiences that elevate brand identity and audience engagement.",
  },
  {
    name: "Tharindu Deshan",
    role: "Director, Development",
    bio:
      "Tharindu oversees the technical direction, delivering robust, scalable, and high-performance systems. His expertise ensures every creative idea is transformed into a functional and future-ready digital solution.",
  },
];

export type Service = {
  n: string;
  icon: "bot" | "rocket" | "sparkles" | "code";
  title: string;
  desc: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    n: "01",
    icon: "bot",
    title: "AI Business Automation",
    desc:
      "Smart, automated communication systems designed to handle customer interactions 24/7. Respond instantly, capture leads, and improve customer experience without manual effort.",
    features: [
      "WhatsApp AI Chatbot Integration",
      "Automated Customer Support",
      "Lead Generation & Response Automation",
      "Business Workflow Automation",
    ],
  },
  {
    n: "02",
    icon: "rocket",
    title: "Nova Business Launch Suite",
    desc:
      "Everything you need to launch your business with a powerful, professional presence, all in one package. Built for startups and growing brands ready to make an impact.",
    features: [
      "Logo & Brand Identity Design",
      "Modern Business Website",
      "Social Media Starter Content",
    ],
  },
  {
    n: "03",
    icon: "sparkles",
    title: "Creative & Visual Production",
    desc:
      "High-end visual content designed to capture attention and communicate your brand with clarity and impact.",
    features: [
      "Graphic Design & Social Media Creatives",
      "Cinematic Video Production",
      "Brand Visual Identity Systems",
      "3D Design & Product Visualization",
    ],
  },
  {
    n: "04",
    icon: "code",
    title: "Digital Development Solutions",
    desc:
      "Scalable and high-performance digital solutions built to support and grow your business.",
    features: [
      "Website Design & Development",
      "Custom System Development",
      "Web Applications",
      "Business Process Automation Systems",
    ],
  },
];

export const WHY_POINTS: { title: string; desc: string }[] = [
  {
    title: "Creative & Technical Expertise",
    desc: "Design and engineering under one roof. No translation lost between disciplines.",
  },
  {
    title: "Premium, Modern Standards",
    desc: "Work that meets the bar of contemporary design and engineering, built to age well.",
  },
  {
    title: "Business-Focused Solutions",
    desc: "Every decision tied to a business outcome, not just a pretty interface.",
  },
  {
    title: "Scalable & Future-Ready",
    desc: "Systems that grow with you. Clean architecture, documented, maintainable.",
  },
  {
    title: "Client-Centered Approach",
    desc: "Honest communication, predictable delivery, and partnership beyond launch.",
  },
];

export type FAQItem = { q: string; a: string };

export const FAQS: FAQItem[] = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 3–8 weeks. A Nova Business Launch Suite lands in around 3 weeks, a custom website or web app in 5–8, and AI automation flows in 2–4 once requirements are locked.",
  },
  {
    q: "What does it cost to work with PixelNova?",
    a: "Every project is scoped individually. We share a fixed quote after a short discovery call. No hourly billing, no surprise change orders. Start a conversation and we'll send a tailored proposal within two business days.",
  },
  {
    q: "Do you work with clients outside Sri Lanka?",
    a: "Yes. Most of our clients are international. We work async with weekly review calls in your timezone and ship the same way regardless of location.",
  },
  {
    q: "What do I need before getting started?",
    a: "Just a rough idea of the outcome you want. We'll handle the rest in a discovery session, clarifying scope, audience, brand voice, and technical needs together.",
  },
  {
    q: "Do you handle hosting and ongoing support?",
    a: "Yes. We can host, monitor, and maintain everything we ship, or hand it off cleanly to your team with full documentation. Optional retainers cover updates, content changes, and new features after launch.",
  },
  {
    q: "How is your AI automation different from a regular chatbot?",
    a: "Off-the-shelf chatbots answer FAQs. Our systems plug into your real business (WhatsApp, CRM, sheets, payment links) to qualify leads, book meetings, and trigger workflows automatically. They learn your tone and stay on-brand.",
  },
];

export const FEATURED_OFFER = {
  eyebrow: "Featured Offer",
  title: "Start Strong with Nova Business Launch Suite",
  content:
    "Build your brand the right way from day one with a complete business identity system designed for success.",
  cta: "Get Started Today",
};

export const STATS = [
  { n: "04", label: "Solutions" },
  { n: "02", label: "Founders" },
  { n: "24/7", label: "Automation" },
];
