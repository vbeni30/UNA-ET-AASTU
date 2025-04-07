import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { BecomePartnerContent } from "@/components/partnerships/become-partner-content"

export default function BecomePartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Become a Partner"
        subtitle="Join us in advancing the UN Sustainable Development Goals"
        image="/placeholder.svg?height=500&width=1200"
      />
      <BecomePartnerContent />
    </div>
  )
}

