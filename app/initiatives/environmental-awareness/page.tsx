import type { Metadata } from "next"
import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import { EnvironmentalCampaignContent } from "@/components/initiatives/environmental-campaign-content"

export const metadata: Metadata = {
  title: "Environmental Awareness | AASTU UN Association",
  description:
    "Learn about our environmental awareness initiatives and how you can get involved in creating a greener future.",
}

export default function EnvironmentalAwarenessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <InitiativeHero
        title="Environmental Awareness"
        subtitle="Promoting sustainability and environmental consciousness"
        image="/placeholder.svg?height=500&width=1200"
      />
      <EnvironmentalCampaignContent />
    </main>
  )
}
