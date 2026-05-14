import { SectionHeading } from "@/components/section-heading";
import { InquiryForm } from "@/components/inquiry-form";

export function HireMe() {
  return (
    <section id="hire-me" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Hire me"
          title="Need something custom built?"
          description="I take on a small number of freelance projects each quarter — usually SaaS, CRMs, business websites, or AI integrations. Fill the form below and I'll reply within 48 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">What I help with</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span className="text-brand">→</span> Multi-tenant SaaS apps (auth, billing, onboarding, white-label)</li>
                <li className="flex gap-2"><span className="text-brand">→</span> CRMs and internal tools for SMBs</li>
                <li className="flex gap-2"><span className="text-brand">→</span> Payment-integrated business websites (Razorpay, Stripe)</li>
                <li className="flex gap-2"><span className="text-brand">→</span> AI/ML feature integration in existing apps</li>
                <li className="flex gap-2"><span className="text-brand">→</span> Migrating prototypes to production</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">How it works</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-5">
                <li>You fill the form or book a 30-min call</li>
                <li>Scoping call to understand the project</li>
                <li>Written proposal with timeline + fixed price</li>
                <li>50% deposit, build, weekly demos, launch</li>
              </ol>
            </div>
            <div className="rounded-lg border bg-card/50 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Current availability</p>
              <p>Open to 1–2 new projects starting June 2026. Minimum engagement: ~₹50k / 2 weeks.</p>
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
