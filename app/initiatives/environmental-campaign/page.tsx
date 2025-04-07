import type { Metadata } from "next"
import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import EnvironmentalCampaignContent from "@/components/initiatives/environmental-campaign-content"

export const metadata: Metadata = {
  title: "Environmental Campaign | AASTU UN Association",
  description:
    "Learn about our environmental sustainability campaigns and how you can get involved in creating a greener future.",
}

export default function EnvironmentalCampaignPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <InitiativeHero
        title="Environmental Campaign"
        subtitle="Promoting sustainability and environmental awareness through action"
        image="/placeholder.svg?height=500&width=1200"
      />
      <EnvironmentalCampaignContent />
    </main>
  )
}

