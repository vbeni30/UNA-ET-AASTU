import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { UniversityPartnersContent } from "@/components/partnerships/university-partners-content"

export default function UniversityPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="University Partners"
        subtitle="Collaborating with academic institutions to advance our mission"
        image="/placeholder.svg?height=500&width=1200"
      />
      <UniversityPartnersContent />
    </div>
  )
}
