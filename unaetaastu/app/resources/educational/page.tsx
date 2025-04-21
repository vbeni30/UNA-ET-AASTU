import { ResourcesHero } from "@/components/resources/resources-hero-detail"
import { EducationalMaterialsContent } from "@/components/resources/educational-materials-content"

export default function EducationalMaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero
        title="Educational Materials"
        subtitle="Learning resources on global issues, sustainable development, and UN initiatives"
        image="/placeholder.svg?height=500&width=1200"
      />
      <EducationalMaterialsContent />
    </div>
  )
}
