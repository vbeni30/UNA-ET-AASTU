import { EventsHero } from "@/components/events/events-hero"
import { EventsCalendar } from "@/components/events/events-calendar"

export default function EventsCalendarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero
        title="Events Calendar"
        subtitle="View our upcoming events by date and plan your participation"
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068"
      />
      <EventsCalendar />
    </div>
  )
}
