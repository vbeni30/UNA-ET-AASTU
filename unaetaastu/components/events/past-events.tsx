"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

export function PastEvents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pastEvents = [
    {
      title: "SDG Workshop Series",
      description: "A series of workshops focusing on the UN Sustainable Development Goals",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070",
      date: "May 15-20, 2024",
      category: "Workshop",
    },
    {
      title: "Model UN Conference",
      description: "Students simulated UN sessions and debated global issues",
      image: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069",
      date: "April 10-12, 2024",
      category: "Conference",
    },
    {
      title: "Climate Action Day",
      description: "Campus-wide event to raise awareness about climate change",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974",
      date: "March 22, 2024",
      category: "Campaign",
    },
    {
      title: "Human Rights Seminar",
      description: "Discussion on gender equality and education access",
      image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=2070",
      date: "February 15, 2024",
      category: "Seminar",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
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
            <Clock className="h-4 w-4 inline-block mr-1" />
            Past Events
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Previous Events
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Explore our past events and the impact they've made.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-blue-100 dark:border-blue-900/30">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                        {event.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-un-blue" />
                        {event.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to see more of our past events? Check out our{" "}
            <a href="#" className="text-un-blue hover:underline">
              event archive
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
