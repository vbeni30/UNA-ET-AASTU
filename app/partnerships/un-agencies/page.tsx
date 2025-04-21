import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { UNAgenciesContent } from "@/components/partnerships/un-agencies-content"

export default function UNAgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="UN Agency Partners"
        subtitle="Partnering with United Nations agencies and international organizations to advance global goals"
        image="https://images.unsplash.com/photo-1607037183811-2a54d746cd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        color="cyan"
        type="un-agencies"
      />
      <UNAgenciesContent />
    </div>
  )
}
