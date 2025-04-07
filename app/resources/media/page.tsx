import { ResourcesHero } from "@/components/resources/resources-hero-detail"
import { MediaLibraryContent } from "@/components/resources/media-library-content"

export default function MediaLibraryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero
        title="Media Library"
        subtitle="Photos, videos, and multimedia resources from our events and initiatives"
        image="/placeholder.svg?height=500&width=1200"
      />
      <MediaLibraryContent />
    </div>
  )
}

