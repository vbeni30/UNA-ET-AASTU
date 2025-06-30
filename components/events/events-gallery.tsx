"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ArrowLeft, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Album {
  id: string
  title: string
  description: string
  date: string
  imageCount: number
  previewImage: string
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function EventsGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentAlbum, setCurrentAlbum] = useState<string | null>(null)

  const albums: Album[] = [
    {
      id: "launch-day",
      title: "Launch Day",
      description: "The official launch of UNA-ET AASTU Chapter",
      date: "September 2024",
      imageCount: 10,
      previewImage: "/IMG000.jpg",
      images: [
        { src: "/IMG000.jpg", alt: "Chapter Launch Ceremony", caption: "Official launch ceremony" },
        { src: "/images/event-01.jpg", alt: "Opening remarks", caption: "Welcome address by chapter president" },
        { src: "/images/event-02.jpg", alt: "Ribbon cutting", caption: "Ceremonial ribbon cutting" },
        { src: "/images/event-03.jpg", alt: "Guest speakers", caption: "Distinguished guests addressing the audience" },
        { src: "/images/event-04.jpg", alt: "Student participants", caption: "Enthusiastic student participation" },
        { src: "/images/event-05.jpg", alt: "UN flag raising", caption: "Raising the UN flag" },
        { src: "/images/event-06.jpg", alt: "Group photo", caption: "Founding members group photo" },
        { src: "/images/event-07.jpg", alt: "Networking session", caption: "Post-launch networking" },
        { src: "/images/event-08.jpg", alt: "Refreshments", caption: "Celebration refreshments" },
        { src: "/images/event-09.jpg", alt: "Media coverage", caption: "Local media documenting the event" },
      ],
    },
    {
      id: "mou-signing",
      title: "MOU Signing",
      description: "Memorandum of Understanding signing ceremony",
      date: "July 2025",
      imageCount: 5,
      previewImage: "/IMG_0661.JPG",
      images: [
        { src: "/IMG_0661.JPG", alt: "MOU Signing Ceremony", caption: "Official MOU signing" },
        { src: "/images/event-10.jpg", alt: "Document review", caption: "Reviewing partnership terms" },
        { src: "/images/event-11.jpg", alt: "Handshake moment", caption: "Sealing the partnership" },
        { src: "/images/event-12.jpg", alt: "Witness signatures", caption: "Witnesses signing the document" },
        { src: "/images/event-13.jpg", alt: "Celebration toast", caption: "Celebrating the new partnership" },
      ],
    },
    {
      id: "earth-day",
      title: "Earth Day",
      description: "Environmental awareness and tree planting initiative",
      date: "April 2024",
      imageCount: 15,
      previewImage: "/images/event-14.jpg",
      images: [
        { src: "/images/event-14.jpg", alt: "Earth Day banner", caption: "Earth Day celebration banner" },
        { src: "/images/event-15.jpg", alt: "Tree planting", caption: "Students planting trees" },
        { src: "/images/event-16.jpg", alt: "Environmental workshop", caption: "Climate change awareness session" },
        { src: "/images/event-17.jpg", alt: "Recycling drive", caption: "Campus recycling initiative" },
        { src: "/images/event-18.jpg", alt: "Green pledge", caption: "Students taking environmental pledge" },
        {
          src: "/images/event-19.jpg",
          alt: "Seedling distribution",
          caption: "Distributing seedlings to participants",
        },
        { src: "/images/event-20.jpg", alt: "Composting demo", caption: "Composting demonstration" },
        { src: "/images/event-21.jpg", alt: "Solar panel exhibit", caption: "Renewable energy showcase" },
        { src: "/images/event-22.jpg", alt: "Water conservation", caption: "Water saving techniques presentation" },
        { src: "/images/event-23.jpg", alt: "Eco-friendly crafts", caption: "Making crafts from recycled materials" },
        { src: "/images/event-24.jpg", alt: "Nature walk", caption: "Guided nature walk" },
        { src: "/images/event-25.jpg", alt: "Environmental quiz", caption: "Sustainability knowledge quiz" },
        { src: "/images/event-26.jpg", alt: "Green technology", caption: "Eco-friendly technology display" },
        { src: "/images/event-27.jpg", alt: "Community cleanup", caption: "Campus cleanup activity" },
        { src: "/images/event-28.jpg", alt: "Group commitment", caption: "Collective environmental commitment" },
      ],
    },
    {
      id: "morning-run",
      title: "Morning Run",
      description: "Health and wellness community run",
      date: "March 2024",
      imageCount: 8,
      previewImage: "/images/event-29.jpg",
      images: [
        { src: "/images/event-29.jpg", alt: "Morning run start", caption: "Runners at the starting line" },
        { src: "/images/event-30.jpg", alt: "Warm-up session", caption: "Pre-run warm-up exercises" },
        { src: "/images/event-01.jpg", alt: "Running group", caption: "Participants during the run" },
        { src: "/images/event-02.jpg", alt: "Finish line", caption: "Crossing the finish line" },
        { src: "/images/event-03.jpg", alt: "Hydration station", caption: "Water break during the run" },
        { src: "/images/event-04.jpg", alt: "Team spirit", caption: "Encouraging fellow runners" },
        { src: "/images/event-05.jpg", alt: "Cool down", caption: "Post-run stretching session" },
        { src: "/images/event-06.jpg", alt: "Group celebration", caption: "Celebrating completion together" },
      ],
    },
    {
      id: "blockchain-competition",
      title: "Blockchain Competition",
      description: "Innovation and technology hackathon",
      date: "February 2024",
      imageCount: 10,
      previewImage: "/images/event-07.jpg",
      images: [
        { src: "/images/event-07.jpg", alt: "Blockchain hackathon", caption: "Opening of blockchain competition" },
        { src: "/images/event-08.jpg", alt: "Team formation", caption: "Participants forming teams" },
        { src: "/images/event-09.jpg", alt: "Coding session", caption: "Intense coding session" },
        { src: "/images/event-10.jpg", alt: "Mentorship", caption: "Industry mentors guiding teams" },
        { src: "/images/event-11.jpg", alt: "Presentation prep", caption: "Teams preparing presentations" },
        { src: "/images/event-12.jpg", alt: "Demo time", caption: "Demonstrating blockchain solutions" },
        { src: "/images/event-13.jpg", alt: "Judging panel", caption: "Expert judges evaluating projects" },
        { src: "/images/event-14.jpg", alt: "Winner announcement", caption: "Announcing competition winners" },
        { src: "/images/event-15.jpg", alt: "Prize ceremony", caption: "Award ceremony for winners" },
        { src: "/images/event-16.jpg", alt: "Networking", caption: "Post-competition networking" },
      ],
    },
    {
      id: "advocacy-training",
      title: "Advocacy Training",
      description: "Leadership and advocacy skills development",
      date: "January 2024",
      imageCount: 7,
      previewImage: "/images/robera-berhanu.png",
      images: [
        {
          src: "/images/robera-berhanu.png",
          alt: "Training facilitator",
          caption: "Expert facilitator leading the session",
        },
        { src: "/images/event-17.jpg", alt: "Workshop session", caption: "Interactive advocacy workshop" },
        { src: "/images/event-18.jpg", alt: "Group discussions", caption: "Small group advocacy discussions" },
        { src: "/images/event-19.jpg", alt: "Role playing", caption: "Advocacy role-playing exercises" },
        { src: "/images/event-20.jpg", alt: "Presentation skills", caption: "Developing presentation skills" },
        { src: "/images/event-21.jpg", alt: "Certificate ceremony", caption: "Training completion certificates" },
        { src: "/images/event-22.jpg", alt: "Group photo", caption: "Training participants group photo" },
      ],
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

  const openAlbum = (albumId: string) => {
    setCurrentAlbum(albumId)
  }

  const closeAlbum = () => {
    setCurrentAlbum(null)
  }

  const currentAlbumData = albums.find((album) => album.id === currentAlbum)

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
            {currentAlbum
              ? "Browse through photos from this event"
              : "Explore our event albums and relive the memorable moments"}
          </p>
        </motion.div>

        {/* Album View */}
        {!currentAlbum && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="cursor-pointer group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  onClick={() => openAlbum(album.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={album.previewImage || "/placeholder.svg"}
                      alt={album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{album.title}</h3>
                      <p className="text-sm text-white/90">{album.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{album.title}</h3>
                    <p className="text-muted-foreground mb-4">{album.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{album.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{album.imageCount} photos</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Individual Album View */}
        {currentAlbum && currentAlbumData && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={closeAlbum}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Albums
              </Button>
              <div>
                <h3 className="text-2xl font-bold">{currentAlbumData.title}</h3>
                <p className="text-muted-foreground">
                  {currentAlbumData.description} • {currentAlbumData.date}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentAlbumData.images.map((image, index) => (
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
                    {image.caption && <p className="text-white text-sm">{image.caption}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

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
