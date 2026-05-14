"use client";

import { Play } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { YoutubeIcon } from "@/components/brand-icons";
import { site } from "@/content/site";

export function YouTubeSection() {
  const channelExists = site.youtube.channelExists;

  return (
    <section id="youtube" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Watch demos"
          title="Product walkthroughs on YouTube."
          description={
            channelExists
              ? "3–5 min screen recordings showing exactly what each product does in production."
              : `First video drops ${site.youtube.firstVideoDate}. Subscribe so you don't miss it.`
          }
        />

        {channelExists ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TODO: fetch and embed latest 6 videos from YouTube Data API */}
            <Card className="aspect-video flex items-center justify-center text-muted-foreground border-dashed">
              Video grid placeholder — wire up YouTube Data API
            </Card>
          </div>
        ) : (
          <Card className="relative overflow-hidden p-10 md:p-16 text-center border-dashed">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent pointer-events-none"
            />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-brand/15 flex items-center justify-center text-brand">
                <Play className="size-7 ml-1" />
              </div>
              <h3 className="text-2xl font-semibold">
                First video drops {site.youtube.firstVideoDate}
              </h3>
              <p className="text-muted-foreground max-w-md text-pretty">
                A tour of the Gym CRM — exactly what gyms get on day one. Subscribe to get notified.
              </p>
              <Button asChild className="gap-2 mt-2">
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                  <YoutubeIcon className="size-4" /> Subscribe on YouTube
                </a>
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
