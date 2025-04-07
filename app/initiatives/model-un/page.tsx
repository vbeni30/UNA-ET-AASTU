import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import { ModelUnContent } from "@/components/initiatives/model-un-content"

export default function ModelUnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InitiativeHero
        title="Model United Nations Conference"
        subtitle="Simulating UN sessions and practicing diplomacy to develop global leadership skills"
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070"
      />
      <ModelUnContent />
    </div>
  )
}

