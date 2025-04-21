import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { UniversityPartnersContent } from "@/components/partnerships/university-partners-content"

export default function UniversityPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="University Partners"
        subtitle="Collaborating with academic institutions to advance our mission"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071"
        color="blue"
      />
      <UniversityPartnersContent />
    </div>
  )
}
