import { EventsHero } from "@/components/events/events-hero"
import { EventsList } from "@/components/events/events-list"
import { EventsCalendar } from "@/components/events/events-calendar"
import { PastEvents } from "@/components/events/past-events"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero />
      <EventsList />
      <EventsCalendar />
      <PastEvents />
    </div>
  )
}
