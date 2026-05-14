"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About" title="Who I am." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          <div className="md:col-span-1">
            <motion.div
              className="relative aspect-square rounded-xl overflow-hidden border border-border cursor-pointer"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Violet glow ring */}
              <motion.div
                className="absolute inset-0 rounded-xl ring-2 ring-brand/70 z-20 pointer-events-none"
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.25 }}
              />
              {/* Image — zoom + saturate on hover */}
              <motion.img
                src="/avatar.jpg"
                alt="Avinash Thakur"
                className="w-full h-full object-cover object-center"
                variants={{
                  rest: { scale: 1, filter: "saturate(0.8) brightness(0.95)" },
                  hover: { scale: 1.07, filter: "saturate(1.15) brightness(1.05)" },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
              {/* Brand gradient shimmer from bottom */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent pointer-events-none z-10"
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="text-lg text-pretty">{site.bio}</p>
            <p className="text-muted-foreground text-pretty">
              Based in {site.location}. I speak Maithili, Hindi, English, and some Assamese. I&apos;m
              currently freelancing while completing my B.Tech — open to a small number of new
              clients each quarter.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <Button asChild className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="size-4" /> Download resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
