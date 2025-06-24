"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function EventsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/images/event-01.jpg",
      alt: "Chapter Launch Workshop",
      event: "Chapter Launch",
      date: "September 2024",
    },
    {
      src: "/images/event-01.jpg",
      alt: "MOU Signing Ceremony",
      event: "MOU Signing",
      date: "July 2025",
    },
    {
      src: "/images/event-01.jpgg",
      alt: "Leadership Team Meeting",
      event: "Leadership Meeting",
      date: "June 2024",
    },
    {
      src: "/images/event-01.jpg",
      alt: "SDG Workshop Series",
      event: "SDG Workshop",
      date: "May 2024",
    },
    {
      src: "/images/event-02.jpg",
      alt: "Model UN Conference",
      event: "Model UN",
      date: "April 2024",
    },
    {
      src: "/images/event-03.jpg",
      alt: "Climate Action Day",
      event: "Climate Action",
      date: "March 2024",
    },
    {
      src: "/images/event-04.jpg",
      alt: "Human Rights Seminar",
      event: "Human Rights",
      date: "February 2024",
    },
    {
      src: "/images/event-05.jpg",
      alt: "Networking Event",
      event: "Networking",
      date: "January 2024",
    },
    {
      src: "/images/event-06.jpg",
      alt: "International Internship Forum",
      event: "Internship Forum",
      date: "December 2023",
    },
    {
      src: "/images/event-07.jpg",
      alt: "Model UN Session",
      event: "Model UN",
      date: "November 2023",
    },
    {
      src: "/images/event-08.jpg",
      alt: "SDG Hackathon",
      event: "Hackathon",
      date: "October 2023",
    },
    {
      src: "/images/event-09.jpg",
      alt: "Tree Planting Initiative",
      event: "Environmental",
      date: "September 2023",
    },
    {
      src: "/images/event-10.jpg",
      alt: "Partnership Meeting",
      event: "Partnerships",
      date: "August 2023",
    },
    {
      src: "/images/event-11.jpg",
      alt: "UN Day Celebration",
      event: "UN Day",
      date: "October 2023",
    },
    {
      src: "/images/event-12.jpg",
      alt: "Research Presentation Day",
      event: "Research Showcase",
      date: "October 2023",
    },
    {
      src: "/images/event-13.jpg",
      alt: "Leadership Training Program",
      event: "Leadership Training",
      date: "September 2023",
    },
    {
      src: "/images/event-14.jpg",
      alt: "Alumni Networking Event",
      event: "Alumni Meeting",
      date: "September 2023",
    },
    {
      src: "/images/event-15.jpg",
      alt: "Charity Fundraising Gala",
      event: "Fundraising Gala",
      date: "August 2023",
    },
    {
      src: "/images/event-16.jpg",
      alt: "Inter-Chapter Sports Tournament",
      event: "Sports Tournament",
      date: "August 2023",
    },
    {
      src: "/images/event-17.jpg",
      alt: "Student Art Exhibition",
      event: "Art Exhibition",
      date: "July 2023",
    },
    {
      src: "/images/event-18.jpg",
      alt: "Book Club Discussion",
      event: "Book Club",
      date: "July 2023",
    },
    {
      src: "/images/event-19.jpg",
      alt: "Member Graduation Ceremony",
      event: "Graduation",
      date: "June 2023",
    },
    {
      src: "/images/event-20.jpg",
      alt: "Global Youth Conference",
      event: "Global Conference",
      date: "June 2023",
    },
    {
      src: "/images/event-21.jpg",
      alt: "Volunteer Orientation Session",
      event: "Volunteer Training",
      date: "May 2023",
    },
    {
      src: "/images/event-22.jpg",
      alt: "Multicultural Festival",
      event: "Cultural Festival",
      date: "April 2023",
    },
    {
      src: "/images/event-23.jpg",
      alt: "Skills Development Workshop",
      event: "Skills Workshop",
      date: "April 2023",
    },
    {
      src: "/images/event-24.jpg",
      alt: "New Year Celebration",
      event: "New Year Event",
      date: "January 2023",
    },
    {
      src: "/images/event-25.jpg",
      alt: "Academic Excellence Awards",
      event: "Excellence Awards",
      date: "December 2022",
    },
    {
      src: "/images/event-26.jpg",
      alt: "International Conference",
      event: "Global Summit",
      date: "November 2022",
    },
    {
      src: "/images/event-27.jpg",
      alt: "Panel Discussion Forum",
      event: "Expert Panel",
      date: "October 2022",
    },
    {
      src: "/images/event-28.jpg",
      alt: "Innovation Showcase",
      event: "Innovation Fair",
      date: "August 2022",
    },
    {
      src: "/images/event-29.jpg",
      alt: "Community Outreach Program",
      event: "Community Service",
      date: "September 2022",
    },
    {
      src: "/images/event-30.jpg",
      alt: "Technology Innovation Summit",
      event: "Tech Summit",
      date: "July 2022",
    },
  ]

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Photo Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Event Memories
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Browse through photos from our past events and activities. Click on any image to view it in full size.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium">{image.event}</h3>
                <p className="text-white/80 text-sm">{image.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
              >
                <X className="h-6 w-6" />
              </Button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged event photo"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
