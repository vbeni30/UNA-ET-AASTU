import { AboutHero } from "@/components/about/about-hero"
import { History } from "@/components/about/history"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero
        title="Our History"
        subtitle="The journey of UNA-ET AASTU Chapter from its founding to the present day"
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070"
      />
      <History />
    </div>
  )
}

