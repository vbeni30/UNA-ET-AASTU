import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { GovernmentBodiesContent } from "@/components/partnerships/government-bodies-content"

export default function GovernmentBodiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Government Body Partners"
        subtitle="Working with Ethiopian government institutions to advance sustainable development"
        image="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069"
        color="purple"
      />
      <GovernmentBodiesContent />
    </div>
  )
}
