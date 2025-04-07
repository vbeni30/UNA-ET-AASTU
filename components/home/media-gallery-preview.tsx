"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function MediaGalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      alt: "SDG Hackathon participants collaborating",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070",
      alt: "Students at Model UN conference",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069",
      alt: "Environmental awareness campaign",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070",
      alt: "Leadership workshop session",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2087",
      alt: "Community outreach program",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070",
      alt: "Student networking event",
      width: 600,
      height: 400,
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Moments & Memories
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            A glimpse into our activities, events, and the impact we're making together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="rounded-full group">
            <Link href="/events/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

