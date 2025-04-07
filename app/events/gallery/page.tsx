import { EventsHero } from "@/components/events/events-hero"
import { EventsGallery } from "@/components/events/events-gallery"

export default function EventsGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero
        title="Event Gallery"
        subtitle="Browse photos and memories from our past events and activities"
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
      />
      <EventsGallery />
    </div>
  )
}

