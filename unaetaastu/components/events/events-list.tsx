"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function EventsList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const events = [
    {
      title: "Chapter Launch Workshop",
      description: "Official launch of the UNA-ET AASTU Chapter",
      image: "https://images.unsplash.com/photo-1475721027785-f74ec9c7180a?q=80&w=2070",
      date: "September 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "AASTU Main Auditorium",
      category: "Launch",
    },
    {
      title: "SDG Awareness Day",
      description: "Learn about the UN Sustainable Development Goals",
      image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=2070",
      date: "October 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "AASTU Campus Square",
      category: "SDGs",
    },
    {
      title: "Model UN Workshop",
      description: "Introduction to Model United Nations",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
      date: "October 20, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Engineering Building, Room 302",
      category: "MUN",
    },
    {
      title: "Human Rights Seminar",
      description: "Discussion on gender equality and education access",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069",
      date: "November 10, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "AASTU Conference Hall",
      category: "Human Rights",
    },
    {
      title: "Environmental Awareness Campaign",
      description: "Tree planting and waste reduction workshop",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
      date: "November 25, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "AASTU Campus Grounds",
      category: "Environment",
    },
    {
      title: "International Internship Forum",
      description: "Connect with organizations offering internships",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070",
      date: "December 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "AASTU Career Center",
      category: "Career",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Upcoming Events
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Join us for these exciting events and activities to engage with global issues and develop your leadership
            skills.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full overflow-hidden group border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-un-blue text-white text-xs font-medium py-1 px-2 rounded-full">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 pb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-un-blue" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-un-blue" />
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-un-blue" />
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group rounded-full" variant="outline">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
