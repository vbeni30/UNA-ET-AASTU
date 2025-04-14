import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourcesList } from "@/components/resources/resources-list"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ResourcesHero />
      <ResourcesList />
    </div>
  )
}
