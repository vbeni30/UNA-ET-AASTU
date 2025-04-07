import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { AastuExcellence } from "@/components/about/aastu-excellence"
import { Leadership } from "@/components/about/leadership"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Mission />
      <AastuExcellence />
      <Leadership />
    </div>
  )
}

