import { EventsHero } from "@/components/events/events-hero"
import { PastEvents } from "@/components/events/past-events"

export default function PastEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero
        title="Past Events"
        subtitle="Explore our previous events and the impact they've made on our community and beyond"
        image="https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070"
      />
      <PastEvents />
    </div>
  )
}

