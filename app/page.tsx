import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative">
        <Header />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
