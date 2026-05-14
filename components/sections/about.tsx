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
            <div className="aspect-square rounded-xl border overflow-hidden">
              <img
                src="/avatar.jpg"
                alt="Avinash Thakur"
                className="w-full h-full object-cover object-top"
              />
            </div>
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
