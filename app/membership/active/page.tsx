import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { ActiveMembershipContent } from "@/components/membership/active-membership-content"

export default function ActiveMembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Active Membership"
        subtitle="Take your involvement to the next level as an active member of UNA-ET AASTU Chapter"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
      />
      <ActiveMembershipContent />
    </div>
  )
}

