import { AboutHero } from "@/components/about/about-hero"
import { Leadership } from "@/components/about/leadership"

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero
        title="Leadership Team"
        subtitle="Meet the dedicated team of students leading the UNA-ET AASTU Chapter"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
      />
      <Leadership />
    </div>
  )
}

