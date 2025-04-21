import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { BecomePartnerContent } from "@/components/partnerships/become-partner-content"

export default function BecomePartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Become a Partner"
        subtitle="Join us in advancing the UN Sustainable Development Goals"
        image="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=2074"
        color="red"
      />
      <BecomePartnerContent />
    </div>
  )
}
