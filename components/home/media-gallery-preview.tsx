"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface AlbumPreview {
  id: string
  title: string
  description: string
  date: string
  imageCount: number
  previewImage: string
  briefDescription: string
}

export function MediaGalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const albumPreviews: AlbumPreview[] = [
    {
      id: "launch-day",
      title: "Launch Day",
      description: "The official launch of UNA-ET AASTU Chapter",
      briefDescription: "Celebrating the birth of our chapter with distinguished guests and founding members",
      date: "September 2024",
      imageCount: 10,
      previewImage: "/Launch Day/launch-preview.webp",
    },
    {
      id: "mou-signing",
      title: "MOU Signing",
      description: "Memorandum of Understanding signing ceremony",
      briefDescription: "Formalizing strategic partnerships to advance our mission and impact",
      date: "July 2025",
      imageCount: 5,
      previewImage: "/Mou/mou-preview.webp",
    },
    {
      id: "earth-day",
      title: "Earth Day",
      description: "Environmental awareness and tree planting initiative",
      briefDescription: "Taking action for our planet through community engagement and environmental stewardship",
      date: "April 2024",
      imageCount: 15,
      previewImage: "/Earth Day/earth-day-preview.webp",
    },
    {
      id: "morning-run",
      title: "Morning Run",
      description: "Health and wellness community run",
      briefDescription: "Promoting physical wellness and community bonding through healthy activities",
      date: "March 2024",
      imageCount: 8,
      previewImage: "/Morning Run/run-preview.webp",
    },
    {
      id: "blockchain-competition",
      title: "Blockchain Competition",
      description: "Innovation and technology hackathon",
      briefDescription: "Fostering innovation and technological advancement through competitive programming",
      date: "February 2024",
      imageCount: 10,
      previewImage: "/BlockChain/blockchain-preview.webp",
    },
    {
      id: "advocacy-training",
      title: "Advocacy Training",
      description: "Leadership and advocacy skills development",
      briefDescription: "Empowering members with essential leadership and advocacy skills for global impact",
      date: "January 2024",
      imageCount: 7,
      previewImage: "/Advocacy Training/advocacy-preview.webp",
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
            Explore our event albums and discover the impactful moments we've shared together as a community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {albumPreviews.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/events/gallery" className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={album.previewImage || "/placeholder.svg"}
                      alt={album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white">
                        {album.imageCount} photos
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1 group-hover:text-blue-200 transition-colors">
                        {album.title}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{album.date}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{album.briefDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        <span>View Album</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
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
