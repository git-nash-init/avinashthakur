import { Hero } from "@/components/sections/hero";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { CaseStudies } from "@/components/sections/case-studies";
import { HireMe } from "@/components/sections/hire-me";
import { About } from "@/components/sections/about";
import { YouTubeSection } from "@/components/sections/youtube";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CaseStudies />
      <HireMe />
      <About />
      <YouTubeSection />
      <Skills />
      <Footer />
    </>
  );
}
