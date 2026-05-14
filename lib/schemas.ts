import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  projectType: z.enum(["saas", "crm", "website", "ai", "other"]),
  budget: z.enum(["under-50k", "50k-2L", "over-2L", "unsure"]),
  timeline: z.string().optional().or(z.literal("")),
  description: z.string().min(20, "A few sentences please — what's the project?"),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
