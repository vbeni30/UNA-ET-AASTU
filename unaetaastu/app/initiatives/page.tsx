import { InitiativesHero } from "@/components/initiatives/initiatives-hero"
import { InitiativesList } from "@/components/initiatives/initiatives-list"
import { ApproachSection } from "@/components/initiatives/approach-section"

export default function InitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InitiativesHero />
      <InitiativesList />
      <ApproachSection />
    </div>
  )
}
