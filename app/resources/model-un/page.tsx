import { ResourcesHero } from "@/components/resources/resources-hero-detail"
import { ModelUnResources } from "@/components/resources/model-un-resources"

export default function ModelUnResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero
        title="Model UN Guide"
        subtitle="Resources for participating in and organizing Model United Nations simulations"
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070"
      />
      <ModelUnResources />
    </div>
  )
}
