import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SurfacesSection } from "@/components/surfaces-section"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SurfacesSection />
        <CtaSection />
      </main>
    </div>
  )
}
