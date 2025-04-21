import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { FoundationsContent } from "@/components/partnerships/foundations-content"

export default function FoundationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Foundation Partners"
        subtitle="Collaborating with NGOs and foundations to create positive impact and drive change"
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070"
        color="orange"
      />
      <FoundationsContent />
    </div>
  )
}
