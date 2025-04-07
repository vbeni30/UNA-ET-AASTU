import { EventsHero } from "@/components/events/events-hero"
import { EventsList } from "@/components/events/events-list"

export default function UpcomingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero
        title="Upcoming Events"
        subtitle="Join us for these exciting events and activities to engage with global issues and develop your leadership skills"
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
      />
      <EventsList />
    </div>
  )
}

