import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { StudentOrganizationsContent } from "@/components/partnerships/student-organizations-content"

export default function StudentOrganizationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Student Organization Partners"
        subtitle="Building a network of student-led initiatives across AASTU to create meaningful impact"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
        color="blue"
      />
      <StudentOrganizationsContent />
    </div>
  )
}
