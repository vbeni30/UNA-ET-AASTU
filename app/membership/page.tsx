import { MembershipHero } from "@/components/membership/membership-hero"
import { MembershipOptions } from "@/components/membership/membership-options"
import { RecruitmentStrategy } from "@/components/membership/recruitment-strategy"
import { MembershipBenefits } from "@/components/membership/membership-benefits"

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero />
      <MembershipOptions />
      <RecruitmentStrategy />
      <MembershipBenefits />
    </div>
  )
}

