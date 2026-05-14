import { Separator } from "@/components/ui/separator";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="text-sm text-muted-foreground mt-1 text-pretty">{site.tagline}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Sections
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#products" className="hover:text-brand transition-colors">Products</a>
              </li>
              <li>
                <a href="#work" className="hover:text-brand transition-colors">Work</a>
              </li>
              <li>
                <a href="#hire-me" className="hover:text-brand transition-colors">Hire me</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand transition-colors">About</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Elsewhere
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js + GSAP on Vercel.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
