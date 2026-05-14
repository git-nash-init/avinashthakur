import { SectionHeading } from "@/components/section-heading";

const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "GSAP", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Supabase", "Firebase"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "Firestore", "Pandas"],
  },
  {
    group: "Infra & Tools",
    items: ["Vercel", "GCP", "Git", "Razorpay"],
  },
  {
    group: "AI/ML",
    items: ["Scikit-learn", "Data analysis", "LLM integration"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Stack" title="Tools I work with." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                {g.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border bg-card px-2.5 py-1 text-sm transition-colors hover:border-brand/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
