import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { PartnershipBenefitsContent } from "@/components/partnerships/partnership-benefits-content"

export default function PartnershipBenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Partnership Benefits"
        subtitle="The value of collaborating with UNA-ET AASTU Chapter"
        image="/placeholder.svg?height=500&width=1200"
      />
      <PartnershipBenefitsContent />
    </div>
  )
}
