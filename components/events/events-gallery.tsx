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
      previewImage: "/Launch Day/launch-preview.webp",
      images: [
        { src: "/Launch Day/launch-preview.webp", alt: "Opening remarks", caption: "Opening remarks" },
        { src: "/Launch Day/photo_2_2025-06-30_11-19-39.webp", alt: "Opening remarks", caption: "Opening remarks" },
        { src: "/Launch Day/IMG_6114.webp", alt: "Ribbon cutting", caption: "Chapter Launch Ceremony" },
        { src: "/Launch Day/photo_3_2025-06-30_11-19-39.webp", alt: "Guest speakers", caption: "Enthusiastic student participation" },
        { src: "/Launch Day/IMG_3923.webp", alt: "Group photo", caption: "Founding members group photo" },
        { src: "/Launch Day/IMG_6120.webp", alt: "Chapter Launch Ceremony", caption: "Chapter Launch Ceremony" },
        { src: "/Launch Day/IMG_6122.webp", alt: "Student participants", caption: "Student participants" },
        { src: "/Launch Day/IMG_3975.webp", alt: "Group photo", caption: "members group photo" },
        { src: "/Launch Day/IMG_3962.webp", alt: "Group photo", caption: "members group photo" },
        { src: "/Launch Day/IMG_3955.webp", alt: "Group photo", caption: "members group photo" },
      ],
    },
    {
      id: "mou-signing",
      title: "MOU Signing",
      description: "Memorandum of Understanding signing ceremony",
      date: "July 2025",
      imageCount: 5,
      previewImage: "/Mou/mou-preview.webp",
      images: [
        { src: "/Mou/mou-preview.webp", alt: "MOU Signing Ceremony", caption: "Official MOU signing" },
        { src: "/Mou/IMG_3895.webp", alt: "Document review", caption: "Partnership" },
        { src: "/Mou/IMG_3902.webp", alt: "Handshake moment", caption: "Sealing the partnership" },
        { src: "/Mou/IMG_3909.webp", alt: "Witness signatures", caption: "Witnesses signing the document" },
        { src: "/Mou/IMG_3904.webp", alt: "Celebration toast", caption: "Celebrating the new partnership" },
      ],
    },
    {
      id: "earth-day",
      title: "Earth Day",
      description: "Environmental awareness and tree planting initiative",
      date: "April 2024",
      imageCount: 15,
      previewImage: "/Earth Day/earth-day-preview.webp",
      images: [
        { src: "/Earth Day/earth-day-preview.webp", alt: "Earth Day banner", caption: "Earth Day celebration" },
        { src: "/Earth Day/IMG_0669.webp", alt: "Participants and Members", caption: "Students gathering for Earth Day" },
        { src: "/Earth Day/20250430_154048.webp", alt: "Speech", caption: "Speech" },
        { src: "/Earth Day/IMG_0671.webp", alt: "Discussion", caption: "Discussion Panel" },
        { src: "/Earth Day/20250430_153540.webp", alt: "Speech", caption: "Speech" },
        {
          src: "/Earth Day/IMG_0713.webp",
          alt: "Seedling distribution",
          caption: "Group Photo",
        },
        { src: "/Earth Day/20250430_152732.webp", alt: "Speech", caption: "Speech" },
        { src: "/Earth Day/IMG_0684.webp", alt: "Solar panel exhibit", caption: "Event Photo" },
        { src: "/Earth Day/IMG_0678.webp", alt: "Water conservation", caption: "Event Photo" },
        { src: "/Earth Day/20250430_152502.webp", alt: "Eco-friendly crafts", caption: "Speech" },
        { src: "/Earth Day/20250430_161902.webp", alt: "Nature walk", caption: "Acknowledgement" },
        { src: "/Earth Day/20250430_165255.webp", alt: "Environmental quiz", caption: "Event Image" },
        { src: "/Earth Day/20250430_155114.webp", alt: "Green technology", caption: "People at the Evvent" },
        { src: "/Earth Day/20250430_155506.webp", alt: "Community cleanup", caption: "Participants" },
        { src: "/Earth Day/IMG_0687.webp", alt: "Group commitment", caption: "Crafts co-memorating Earth-Day " },
      ],
    },
    {
      id: "morning-run",
      title: "Morning Run",
      description: "Health and wellness community run",
      date: "March 2024",
      imageCount: 8,
      previewImage: "/Morning Run/run-preview.webp",
      images: [
        { src: "/Morning Run/run-preview.webp", alt: "Morning run start", caption: "Morning run" },
        { src: "/Morning Run/photo_5805665186047183280_y.webp", alt: "Warm-up session", caption: "Pre-run Memebers Photo Shoot" },
        { src: "/Morning Run/photo_5803288209411657092_y.webp", alt: "Running group", caption: "Fellow runner" },
        { src: "/Morning Run/IMG_20250430_072055.webp", alt: "Finish line", caption: "Participants Photo" },
        { src: "/Morning Run/IMG_20250430_074839.webp", alt: "Hydration station", caption: "Winners of the Race" },
        { src: "/Morning Run/IMG_20250430_071942.webp", alt: "Team spirit", caption: "Participants during the run" },
        { src: "/Morning Run/IMG_20250430_074833.webp", alt: "Cool down", caption: "Winners of the Race" },
        { src: "/Morning Run/IMG_20250430_074800.webp", alt: "Group celebration", caption: "Celebrating completion together" },
      ],
    },
    {
      id: "blockchain-competition",
      title: "Blockchain Competition",
      description: "Innovation and technology hackathon",
      date: "February 2024",
      imageCount: 10,
      previewImage: "/BlockChain/blockchain-preview.webp",
      images: [
        { src: "/BlockChain/blockchain-preview.webp", alt: "Blockchain hackathon", caption: "Blockchain competition" },
        { src: "/BlockChain/AP0A9836.webp", alt: "Team formation", caption: "Discussion And Speech" },
        { src: "/BlockChain/AP0A9495.webp", alt: "Coding session", caption: "Participants" },
        { src: "/BlockChain/20250405_153312.webp", alt: "Mentorship", caption: "Presentation" },
        { src: "/BlockChain/20250405_150859.webp", alt: "Presentation prep", caption: "Presentation" },
        { src: "/BlockChain/20250405_161147.webp", alt: "Demo time", caption: "Group Image" },
        { src: "/20250405_161022(0).webp", alt: "Judging panel", caption: "Group Image" },
        { src: "/BlockChain/20250405_155926.webp", alt: "Winner announcement", caption: "Presentation" },
        { src: "/BlockChain/1E4A9557.webp", alt: "Prize ceremony", caption: "African Blockchain Championship" },
        { src: "/BlockChain/1E4A9527.webp", alt: "Networking", caption: "Midnight + African Blockchain" },
      ],
    },
    {
      id: "advocacy-training",
      title: "Advocacy Training",
      description: "Leadership and advocacy skills development",
      date: "January 2024",
      imageCount: 7,
      previewImage: "/Advocacy Training/advocacy-preview.webp",
      images: [
        {
          src: "/Advocacy Training/advocacy-preview.webp",
          alt: "Training facilitator",
          caption: "Discussion",
        },
        { src: "/Advocacy Training/photo_1_2025-06-28_11-21-50.webp", alt: "Workshop session", caption: "Interactive advocacy workshop" },
        { src: "/Advocacy Training/photo_8_2025-06-28_11-21-50.webp", alt: "Group discussions", caption: "Small group advocacy discussions" },
        { src: "/Advocacy Training/photo_6_2025-06-28_11-21-50.webp", alt: "Role playing", caption: "Presentation" },
        { src: "/Advocacy Training/photo_9_2025-06-28_11-21-50.webp", alt: "Presentation skills", caption: "Presentation" },
        { src: "/Advocacy Training/photo_10_2025-06-28_11-21-50.webp", alt: "Certificate ceremony", caption: "Training" },
        { src: "/Advocacy Training/photo_2_2025-06-28_11-21-50.webp", alt: "Group photo", caption: "Participants group photo" },
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
