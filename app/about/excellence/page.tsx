import { AboutHero } from "@/components/about/about-hero"
import { AastuExcellence } from "@/components/about/aastu-excellence"

export default function ExcellencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero
        title="AASTU Excellence"
        subtitle="Discover what makes Addis Ababa Science and Technology University a leader in education and innovation"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071"
      />
      <AastuExcellence />
    </div>
  )
}
