"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Set initial states immediately — prevents flash of content before GSAP runs
      gsap.set(".hero-word", { yPercent: 110 });
      gsap.set(".hero-sub", { y: 24, opacity: 0 });
      gsap.set(".hero-cta", { y: 16, opacity: 0 });
      gsap.set(".hero-badge", { scale: 0.7, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(".hero-word", { yPercent: 0, duration: 1.1, stagger: 0.08 })
        .to(".hero-sub", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .to(".hero-cta", { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .to(".hero-badge", { scale: 1, opacity: 1, duration: 0.5 }, "-=0.6");

      gsap.to(".hero-orb", {
        yPercent: 35,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden min-h-[92vh] flex items-center px-6 md:px-12 pt-24"
    >
      <div
        aria-hidden
        className="hero-orb absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-brand/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="hero-orb absolute -bottom-48 -left-32 w-[520px] h-[520px] rounded-full bg-brand/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <a
          href="https://cal.com/avinashthakur"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-badge inline-block mb-8"
        >
          <Badge
            variant="outline"
            className="gap-2 border-brand/40 text-brand bg-brand/5 hover:bg-brand/10 hover:border-brand/70 transition-colors cursor-pointer"
          >
            <span className="size-2 rounded-full bg-brand animate-pulse" />
            Available for freelance · Open to talk ↗
          </Badge>
        </a>

        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
          <span className="block overflow-hidden pb-1">
            <span className="hero-word inline-block">I build</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-word inline-block bg-gradient-to-r from-brand via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              SaaS products
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-word inline-block">for offline businesses.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty">
          Full-stack developer freelancing while studying B.Tech AI/ML. 8+ shipped client apps, now
          converting them into multi-tenant SaaS — starting with a Gym CRM.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="hero-cta gap-2">
            <a href="#products">
              Try Gym CRM — free 3 days
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="hero-cta gap-2">
            <a href="#youtube">
              <Play className="size-4" />
              Watch demos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
