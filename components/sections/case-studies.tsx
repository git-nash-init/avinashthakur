"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon } from "@/components/brand-icons";
import { caseStudies } from "@/content/projects";

export function CaseStudies() {
  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected work"
          title="Client projects I've shipped."
          description="Real software running in production for paying clients. Some are open source — most aren't (NDA / client preference)."
        />

        {caseStudies.length === 0 ? (
          <div className="rounded-lg border border-dashed p-12 text-center text-muted-foreground">
            <p>Adding 6–7 case studies here.</p>
            <p className="text-xs mt-2 font-mono">
              Edit <code className="text-brand">content/projects.ts</code> to populate.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              >
                <Card className="overflow-hidden h-full group hover:border-brand/40 transition-colors py-0">
                  <div className="aspect-[16/10] bg-muted border-b overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {p.industry}
                      </p>
                      <h3 className="text-lg font-semibold mt-1">{p.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty line-clamp-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <Badge key={s} variant="outline" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.links.youtube && (
                        <Button asChild size="sm" variant="ghost" className="gap-1.5 px-2.5 h-8">
                          <a href={p.links.youtube} target="_blank" rel="noopener noreferrer">
                            <Play className="size-3.5" /> Watch
                          </a>
                        </Button>
                      )}
                      {p.links.demo && (
                        <Button asChild size="sm" variant="ghost" className="gap-1.5 px-2.5 h-8">
                          <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="size-3.5" /> Live
                          </a>
                        </Button>
                      )}
                      {p.links.source && (
                        <Button asChild size="sm" variant="ghost" className="gap-1.5 px-2.5 h-8">
                          <a href={p.links.source} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="size-3.5" /> Source
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
