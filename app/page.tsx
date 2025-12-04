import Hero from "@/components/hero";
import FeatureCards from "@/components/feature-cards";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureCards />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
