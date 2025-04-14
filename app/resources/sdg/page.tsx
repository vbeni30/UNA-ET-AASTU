import { ResourcesHero } from "@/components/resources/resources-hero-detail"
import { SdgResources } from "@/components/resources/sdg-resources"

export default function SdgResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero
        title="SDG Resources"
        subtitle="Comprehensive guides and materials on the UN's Sustainable Development Goals"
        image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=2070"
      />
      <SdgResources />
    </div>
  )
}
