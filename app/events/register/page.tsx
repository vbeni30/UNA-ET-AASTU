import { EventsHero } from "@/components/events/events-hero"
import { EventRegistrationForm } from "@/components/events/event-registration-form"

export default function RegisterEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero
        title="Register for Events"
        subtitle="Join our upcoming events and be part of the UNA-ET AASTU Chapter community"
        image="/placeholder.svg?height=500&width=1200"
      />
      <EventRegistrationForm />
    </div>
  )
}

