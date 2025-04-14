import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { ProfessionalEducatorsContent } from "@/components/membership/professional-educators-content"

export default function ProfessionalEducatorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Professional Educators Membership"
        subtitle="Join our community of dedicated educators committed to advancing global education and UN values"
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
      />
      <ProfessionalEducatorsContent />
    </div>
  )
}
