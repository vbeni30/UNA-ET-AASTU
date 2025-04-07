import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import { InternshipForumContent } from "@/components/initiatives/internship-forum-content"

export default function InternshipForumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <InitiativeHero
        title="International Internship Forum"
        subtitle="Connecting students with global opportunities for professional development"
        image="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070"
      />
      <InternshipForumContent />
    </div>
  )
}

