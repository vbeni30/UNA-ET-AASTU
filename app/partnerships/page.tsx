import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { PartnersList } from "@/components/partnerships/partners-list"
import { StrategicPartnerships } from "@/components/partnerships/strategic-partnerships"
import { BecomePartner } from "@/components/partnerships/become-partner"

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero />
      <PartnersList />
      <StrategicPartnerships />
      <BecomePartner />
    </div>
  )
}
