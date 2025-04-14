import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { StudentOrganizationsContent } from "@/components/partnerships/student-organizations-content"

export default function StudentOrganizationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Student Organizations"
        subtitle="Building a network of student-led initiatives across Ethiopia"
        image="/placeholder.svg?height=500&width=1200"
      />
      <StudentOrganizationsContent />
    </div>
  )
}
