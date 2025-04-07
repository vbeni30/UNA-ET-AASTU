"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function History() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineEvents = [
    {
      year: "2022",
      title: "Initial Planning",
      description:
        "The idea for establishing a UNA-ET chapter at AASTU was first proposed by a group of passionate students and faculty members interested in global affairs.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
    },
    {
      year: "2023",
      title: "Official Recognition",
      description:
        "After months of planning and preparation, the UNA-ET AASTU Chapter received official recognition from both the university administration and the United Nations Association of Ethiopia.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032",
    },
    {
      year: "2024",
      title: "First Initiatives",
      description:
        "The chapter launched its first initiatives, including awareness campaigns about the Sustainable Development Goals and a Model UN simulation for AASTU students.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
    {
      year: "2025",
      title: "Growth & Expansion",
      description:
        "With growing membership and successful initiatives, the chapter expanded its activities to include partnerships with other universities and organizations in Ethiopia.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070",
    },
  ]

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
            Our Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            The History of UNA-ET AASTU Chapter
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            From a small group of passionate students to a thriving chapter, our journey has been one of growth,
            learning, and impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800/50 z-0 hidden md:block"></div>

          <div className="space-y-16 relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="md:w-1/2 relative">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center z-20 hidden md:flex
                    ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                  >
                    {event.year}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <Card className="border-blue-100 dark:border-blue-900/30">
                    <CardContent className="p-6">
                      <div className="md:hidden text-blue-600 text-xl font-bold mb-2">{event.year}</div>
                      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Looking to the Future</h3>
            <p className="text-center max-w-3xl mx-auto">
              As we continue to grow, our chapter aims to expand our impact both within AASTU and beyond. We envision
              becoming a leading student organization in Ethiopia, known for our commitment to the UN's mission and our
              innovative approach to addressing global challenges. Through continued partnerships, impactful
              initiatives, and dedicated leadership, we will work to create a more sustainable, equitable, and peaceful
              world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

