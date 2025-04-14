import { AboutHero } from "@/components/about/about-hero"
import { Values } from "@/components/about/values"

export default function ValuesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero
        title="Values & Principles"
        subtitle="The core values and guiding principles that drive our work and mission"
        image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2071"
      />
      <Values />
    </div>
  )
}
