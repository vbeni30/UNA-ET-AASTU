import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { MembershipApplicationForm } from "@/components/membership/membership-application-form"

export default function ApplyForMembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Apply for Membership"
        subtitle="Join the UNA-ET AASTU Chapter and become part of a global movement for positive change"
        image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070"
      />
      <MembershipApplicationForm />
    </div>
  )
}
