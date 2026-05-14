import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avinash Thakur — Full Stack Developer & SaaS Builder",
    template: "%s — Avinash Thakur",
  },
  description:
    "Full-stack developer building SaaS products for offline businesses. Currently shipping a multi-tenant Gym CRM and other tools for SMBs. Available for select freelance projects.",
  metadataBase: new URL("https://avinashthakur.com"),
  openGraph: {
    title: "Avinash Thakur — Full Stack Developer & SaaS Builder",
    description:
      "Full-stack developer building SaaS products for offline businesses. Watch product demos, try the products, or hire me for custom work.",
    url: "https://avinashthakur.com",
    siteName: "Avinash Thakur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Avinash_ai",
    title: "Avinash Thakur — Full Stack Developer & SaaS Builder",
    description:
      "Building SaaS for offline businesses. Watch demos, try the products, hire me for custom work.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
