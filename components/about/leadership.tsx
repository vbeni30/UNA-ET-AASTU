"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const leaders = [
    {
      name: "Leadership Name 1",
      position: "Chapter President",
      bio: "Brief biography about the leadership team member and their background in international relations and student leadership.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+1",
    },
    {
      name: "Leadership Name 2",
      position: "Vice President",
      bio: "Brief biography about the leadership team member and their background in environmental science and sustainable development.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+2",
    },
    {
      name: "Leadership Name 3",
      position: "Secretary General",
      bio: "Brief biography about the leadership team member and their background in diplomacy and Model United Nations.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+3",
    },
    {
      name: "Leadership Name 4",
      position: "Treasurer",
      bio: "Brief biography about the leadership team member and their background in finance and project management.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+4",
    },
    {
      name: "Leadership Name 5",
      position: "Events Coordinator",
      bio: "Brief biography about the leadership team member and their background in event planning and community engagement.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+5",
    },
    {
      name: "Leadership Name 6",
      position: "Communications Director",
      bio: "Brief biography about the leadership team member and their background in media, communications, and public relations.",
      image: "/placeholder.svg?height=300&width=300&text=Leader+6",
    },
  ]

  return (
    <section id="leadership" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Leadership Team
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Meet the dedicated team of students leading the UNA-ET AASTU Chapter and driving our mission forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-bold text-lg">{leader.name}</h4>
                  <p className="text-un-blue text-sm mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

