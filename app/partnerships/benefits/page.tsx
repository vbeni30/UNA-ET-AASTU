import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { PartnershipBenefitsContent } from "@/components/partnerships/partnership-benefits-content"

export default function PartnershipBenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Partnership Benefits"
        subtitle="The value of collaborating with UNA-ET AASTU Chapter"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
        color="teal"
      />
      <PartnershipBenefitsContent />
    </div>
  )
}
