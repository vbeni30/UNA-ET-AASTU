import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { ExternalPartnersContent } from "@/components/partnerships/external-partners-content"

export default function ExternalPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="External Partners"
        subtitle="Collaborating with organizations beyond academia to achieve our goals"
        image="/placeholder.svg?height=500&width=1200"
      />
      <ExternalPartnersContent />
    </div>
  )
}

