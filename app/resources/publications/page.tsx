import { ResourcesHero } from "@/components/resources/resources-hero-detail"
import { PublicationsContent } from "@/components/resources/publications-content"

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero
        title="Publications"
        subtitle="Research papers, reports, and articles published by UNA-ET AASTU Chapter"
        image="/placeholder.svg?height=500&width=1200"
      />
      <PublicationsContent />
    </div>
  )
}

