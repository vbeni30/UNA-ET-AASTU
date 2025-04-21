import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { MemberBenefitsContent } from "@/components/membership/member-benefits-content"

export default function MemberBenefitsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Member Benefits"
        subtitle="Discover the advantages and opportunities available to UNA-ET AASTU Chapter members"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068"
      />
      <MemberBenefitsContent />
    </div>
  )
}
