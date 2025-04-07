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
      src: "https://images.unsplash.com/photo-1475721027785-f74ec9c7180a?q=80&w=2070",
      alt: "Chapter Launch Workshop",
      event: "Chapter Launch",
      date: "September 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070",
      alt: "SDG Workshop Series",
      event: "SDG Workshop",
      date: "May 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069",
      alt: "Model UN Conference",
      event: "Model UN",
      date: "April 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
      alt: "Leadership Team Meeting",
      event: "Team Meeting",
      date: "March 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974",
      alt: "Climate Action Day",
      event: "Climate Action",
      date: "March 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=2070",
      alt: "Human Rights Seminar",
      event: "Human Rights",
      date: "February 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      alt: "Networking Event",
      event: "Networking",
      date: "January 2024",
    },
    {
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070",
      alt: "International Internship Forum",
      event: "Internship Forum",
      date: "December 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
      alt: "Model UN Session",
      event: "Model UN",
      date: "November 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      alt: "SDG Hackathon",
      event: "Hackathon",
      date: "October 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070",
      alt: "Tree Planting Initiative",
      event: "Environmental",
      date: "September 2023",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032",
      alt: "Partnership Meeting",
      event: "Partnerships",
      date: "August 2023",
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

