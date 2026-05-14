import { type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "npm run build",
  // Wildcard domain support for multi-tenant Gym CRM (Phase 3)
  // *.avinashthakur.com → handled by middleware/tenant resolution
  headers: [
    {
      source: "/resume.pdf",
      headers: [
        {
          key: "Content-Disposition",
          value: "attachment; filename=Avinash_Resume.pdf",
        },
        {
          key: "Cache-Control",
          value: "public, max-age=86400",
        },
      ],
    },
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
};
