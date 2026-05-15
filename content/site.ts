export const site = {
  name: "Avinash Thakur",
  domain: "avinashthakur.com",
  url: "https://avinashthakur.com",
  email: "avinash.saitm@gmail.com",
  tagline: "I build SaaS products for offline businesses.",
  bio: "Full-stack developer freelancing since 2025. B.Tech AI/ML at SAITM (graduating 2028). Shipped 8+ web apps for paying clients — CRMs, business platforms, payment-integrated systems. Currently building a multi-tenant Gym CRM as my first SaaS product.",
  location: "Gurugram, India",
  social: {
    github: "https://github.com/git-nash-init",
    linkedin: "https://www.linkedin.com/in/avinash-ai",
    twitter: "https://x.com/Avinash_ai",
    youtube: "https://www.youtube.com/@avinashthakur", // placeholder until channel exists
    cal: "https://cal.com/avinashthakur/30min", // placeholder — wire up after Cal.com signup
  },
  youtube: {
    firstVideoDate: "2026-06-07",
    channelExists: false,
  },
  products: {
    gymCrmReady: false, // flip to true when demo-gym.avinashthakur.com goes live
    gymCrmDemoUrl: "https://demo-gym.avinashthakur.com",
    gymCrmTrialUrl: "https://gym.avinashthakur.com/signup",
  },
} as const;
