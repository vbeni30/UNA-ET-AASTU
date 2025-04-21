import { MembershipHero } from "@/components/membership/membership-hero-detail"
import { StudentMembershipContent } from "@/components/membership/student-membership-content"

export default function StudentMembershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MembershipHero
        title="Student Membership"
        subtitle="Join our chapter as a student member and begin your journey with UNA-ET AASTU"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
      />
      <StudentMembershipContent />
    </div>
  )
}
