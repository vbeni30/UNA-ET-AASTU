import type { Metadata } from "next"
import InitiativeHero from "@/components/initiatives/initiative-hero"
import HumanRightsSeminarContent from "@/components/initiatives/human-rights-seminar-content"

export const metadata: Metadata = {
  title: "Human Rights Seminar | AASTU UN Association",
  description:
    "Explore our human rights seminar series addressing critical global issues and advocating for justice and equality.",
}

export default function HumanRightsSeminarPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <InitiativeHero
        title="Human Rights Seminar"
        subtitle="Advocating for justice, equality, and human dignity"
        imageSrc="/placeholder.svg?height=500&width=1200"
      />
      <HumanRightsSeminarContent />
    </main>
  )
}

