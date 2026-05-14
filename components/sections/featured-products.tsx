"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bell, Play } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { featuredProducts } from "@/content/projects";

export function FeaturedProducts() {
  return (
    <section id="products" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Products"
          title="SaaS I'm building right now."
          description="Multi-tenant products — try free for 3 days, then subscribe to keep using. Each gym or business gets its own branded workspace."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card className="overflow-hidden h-full group hover:border-brand/40 transition-colors py-0">
                <div className="aspect-[16/9] bg-gradient-to-br from-brand/10 via-card to-card border-b flex items-center justify-center text-muted-foreground text-sm">
                  {/* TODO: replace with /public/projects/{slug}.png screenshot */}
                  <span>Screenshot — {p.name}</span>
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {p.industry}
                      </p>
                      <h3 className="text-2xl font-semibold mt-1">{p.name}</h3>
                    </div>
                    {p.status === "coming-soon" && (
                      <Badge variant="secondary" className="shrink-0">
                        Coming Soon
                      </Badge>
                    )}
                    {p.status === "live" && (
                      <Badge className="shrink-0 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20">
                        Live
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-pretty">{p.blurb}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {p.status === "live" && p.links.demo ? (
                      <Button asChild size="sm" className="gap-1.5">
                        <a href={p.links.demo}>
                          Try free 3 days <ArrowRight className="size-3.5" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild size="sm" variant="outline" className="gap-1.5">
                        <a href="#hire-me">
                          <Bell className="size-3.5" /> Notify me when live
                        </a>
                      </Button>
                    )}
                    {p.links.youtube && (
                      <Button asChild size="sm" variant="ghost" className="gap-1.5">
                        <a href={p.links.youtube} target="_blank" rel="noopener noreferrer">
                          <Play className="size-3.5" /> Watch demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
