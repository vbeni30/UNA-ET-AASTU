import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { InitiativesPreview } from "@/components/home/initiatives-preview"
import { EventsPreview } from "@/components/home/events-preview"
import { ImpactSection } from "@/components/home/impact-section"
import { CtaSection } from "@/components/home/cta-section"
import { NewsSection } from "@/components/news-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FeaturedSDGsSection } from "@/components/home/featured-sdgs-section"
import { MediaGalleryPreview } from "@/components/home/media-gallery-preview"
import { FaqSection } from "@/components/home/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutPreview />
      <FeaturedSDGsSection />
      <InitiativesPreview />
      <ImpactSection />
      <EventsPreview />
      <TestimonialsSection />
      <MediaGalleryPreview />
      <NewsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

