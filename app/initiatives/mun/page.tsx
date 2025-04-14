import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import { MunContent } from "@/components/initiatives/mun-content"

export default function MunPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InitiativeHero
        title="Model United Nations (MUN)"
        subtitle="Developing diplomatic skills and global awareness through simulated UN conferences"
        image="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2574"
      />
      <MunContent />
    </div>
  )
}
