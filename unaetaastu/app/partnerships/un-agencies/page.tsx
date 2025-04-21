import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { UNAgenciesContent } from "@/components/partnerships/un-agencies-content"

export default function UNAgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="UN Agency Partners"
        subtitle="Partnering with United Nations agencies and international organizations to advance global goals"
        image="/images/un-banner.webp"
        color="cyan"
        type="un-agencies"
      />
      <UNAgenciesContent />
    </div>
  )
}
