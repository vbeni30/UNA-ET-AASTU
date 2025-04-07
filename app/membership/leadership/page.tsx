import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { LeadershipPositionsContent } from "@/components/membership/leadership-positions-content"

export default function LeadershipPositionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Leadership Positions"
        subtitle="Discover leadership opportunities within the UNA-ET AASTU Chapter and make a significant impact"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
      />
      <LeadershipPositionsContent />
    </div>
  )
}

