import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero
        title="Our Mission"
        subtitle="Learn about our purpose and the impact we aim to make at AASTU and beyond"
        image="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2074"
      />
      <Mission />
    </div>
  )
}

