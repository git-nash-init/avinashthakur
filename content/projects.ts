export type ProjectTier = "product" | "case-study";

export type Project = {
  slug: string;
  name: string;
  tier: ProjectTier;
  industry: string;
  client?: string;
  blurb: string; // 1 line for cards
  description: string; // 2–3 lines for detail
  stack: string[];
  links: {
    demo?: string; // live URL or demo tenant
    youtube?: string; // youtube video URL
    source?: string; // GitHub
  };
  thumbnail: string; // /public path or remote URL
  status?: "live" | "coming-soon";
  featured?: boolean;
};

export const projects: Project[] = [
  // ─── FEATURED PRODUCTS (Phase 2 SaaS) ───────────────────────────
  {
    slug: "gym-crm",
    name: "Gym CRM",
    tier: "product",
    industry: "Fitness / Gym Management",
    blurb: "Member management, classes, attendance, and payments for independent gyms.",
    description:
      "Multi-tenant CRM built for gym owners. Each gym gets their own branded workspace — custom logo, color, brand name. Tracks members, class schedules, attendance, and payments-to-gym, with a 3-day free trial.",
    stack: ["Next.js", "Supabase", "Razorpay", "shadcn/ui"],
    links: {
      demo: "https://demo-gym.avinashthakur.com",
    },
    thumbnail: "/projects/gym-crm.png",
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "super-stockist",
    name: "Super Stockist",
    tier: "product",
    industry: "B2B Distribution / E-commerce",
    blurb: "Distributor-to-retailer ordering platform with product catalog and payments.",
    description:
      "Jio-Mart-style multi-tier marketplace. Admin manages products, distributors fulfill orders, retailers buy in bulk. Includes invoicing, GST, and payment workflows.",
    stack: ["Next.js", "Supabase", "Razorpay"],
    links: {},
    thumbnail: "/projects/super-stockist.png",
    status: "coming-soon",
    featured: true,
  },

  // ─── CASE STUDIES (shipped client work) ─────────────────────────
  {
    slug: "thestockmarket-io",
    name: "TheStockMarket.io",
    tier: "case-study",
    industry: "EdTech / Fintech",
    blurb: "Learn stock market trading & analysis platform.",
    description:
      "Educational platform for Indian retail investors. Structured learning modules, live market data, blog system, and an admin dashboard for content management. Built with Firebase auth + Firestore and a responsive dark/light theme.",
    stack: ["React", "TypeScript", "Vite", "Firebase", "TailwindCSS", "TanStack Query"],
    links: {
      demo: "https://thestockmarket.io",
      source: "https://github.com/git-nash-init/stockmarket.io",
    },
    thumbnail: "/projects/thestockmarket-io.png",
    status: "live",
  },
  {
    slug: "myoptiontrading",
    name: "MyOptionTrading",
    tier: "case-study",
    industry: "Trading Education",
    blurb: "“Stop gambling. Start trading.” Disciplined options education for Indian traders.",
    description:
      "Education-first options trading platform. Daily pre-market bias, defined-risk trade ideas, position-sizing guidance, weekly performance reviews, and mentorship — built to replace tip-driven culture with systematic learning.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    links: {
      demo: "https://myoptiontrading.com",
      source: "https://github.com/git-nash-init/myoptiontrading",
    },
    thumbnail: "/projects/myoptiontrading.png",
    status: "live",
  },
  {
    slug: "strength-club",
    name: "The Strength Club",
    tier: "case-study",
    industry: "Fitness / Local Business",
    client: "The Strength Club, Mumbai",
    blurb: "Premium fitness landing for a Sakinaka, Mumbai gym — with built-in BMI calculator.",
    description:
      "Marketing site for a premium gym in Andheri East. Animated dark-mode landing with team showcase, class schedule, interactive BMI calculator, photo gallery, blog, and contact form. Designed to convert walk-bys into trial signups.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "shadcn/ui"],
    links: {
      source: "https://github.com/git-nash-init/strength-club-launch",
    },
    thumbnail: "/projects/strength-club.png",
    status: "live",
  },
  {
    slug: "eco-wipe-chain",
    name: "Eco Wipe Chain",
    tier: "case-study",
    industry: "Green IT / Compliance",
    blurb: "Secure data erasure with environmental impact tracking and compliance certificates.",
    description:
      "Green-IT compliance tool that pairs certified data destruction with environmental accounting. Manages device queues, generates Certificates of Erasure, and tracks CO₂ offset + devices repurposed on an executive dashboard.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "shadcn/ui"],
    links: {
      demo: "https://eco-wipe-chain.vercel.app",
      source: "https://github.com/git-nash-init/eco-wipe-chain",
    },
    thumbnail: "/projects/eco-wipe-chain.png",
    status: "live",
  },
  {
    slug: "spg-canteen",
    name: "SPG Grocer Connect",
    tier: "case-study",
    industry: "E-commerce / Local Business",
    client: "SPG Canteen",
    blurb: "Full-stack canteen e-commerce with admin inventory dashboard.",
    description:
      "Mobile-first grocery storefront for a local canteen. Searchable catalog, full cart flow, real-time inventory via Firestore, and a separate admin portal for managing products and orders. Animated and responsive end-to-end.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "Firebase",
      "TanStack Query",
    ],
    links: {
      source: "https://github.com/git-nash-init/SPG-Canteen",
    },
    thumbnail: "/projects/spg-canteen.png",
    status: "live",
  },
  {
    slug: "cloudwiseavenue",
    name: "CloudWise Avenue",
    tier: "case-study",
    industry: "Community SaaS / Creator Economy",
    blurb: "All-in-one community platform — courses, events, live streaming, and memberships under one brand.",
    description:
      "Circle.so-style community platform for creators and businesses. Drag-and-drop course builder, real-time chat, event hosting with up to 10k concurrent viewers, subscription payments, AI member-support agents, email marketing, and a native mobile app — all white-labelled under the client's brand.",
    stack: ["React", "Vite", "React Router", "Vanilla CSS", "Lucide React"],
    links: {
      demo: "https://cloudwiseavenue.vercel.app",
      source: "https://github.com/git-nash-init/cloudwiseavenue",
    },
    thumbnail: "/projects/cloudwiseavenue.png",
    status: "live",
  },
  {
    slug: "creativebee",
    name: "CreativeBee",
    tier: "case-study",
    industry: "AI Agency / Marketing",
    client: "CreativeBee",
    blurb: "Landing site for an AI-driven brand & workflow automation agency.",
    description:
      "Marketing site for an AI agency that builds branding, workflow automation, and growth systems for SMBs. Smooth motion design, services breakdown, and lead capture — the public face of the CreativeBee ecosystem.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS"],
    links: {
      demo: "https://creativebee.app",
      source: "https://github.com/git-nash-init/creativebee.app",
    },
    thumbnail: "/projects/creativebee.png",
    status: "live",
  },
];

export const featuredProducts = projects.filter((p) => p.tier === "product" && p.featured);
export const caseStudies = projects.filter((p) => p.tier === "case-study");
