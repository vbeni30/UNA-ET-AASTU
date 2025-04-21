"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const events = [
    {
      title: "Chapter Launch Workshop",
      description: "Official launch of the UNA-ET AASTU Chapter",
      image: "/placeholder.svg?height=300&width=600",
      date: "September 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "AASTU Main Auditorium",
      category: "Launch",
    },
    {
      title: "SDG Awareness Day",
      description: "Learn about the UN Sustainable Development Goals",
      image: "/placeholder.svg?height=300&width=600",
      date: "October 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "AASTU Campus Square",
      category: "SDGs",
    },
    {
      title: "Model UN Workshop",
      description: "Introduction to Model United Nations",
      image: "/placeholder.svg?height=300&width=600",
      date: "October 20, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Engineering Building, Room 302",
      category: "MUN",
    },
  ]

  return (
    <section id="events" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden bg-gradient-mesh">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-un-blue/10 dark:bg-un-blue/20 px-4 py-1.5 text-sm text-un-blue dark:text-un-lightblue font-medium mb-4">
            Calendar
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-gradient">
            Upcoming Events
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl text-pretty">
            Join us for these exciting events and activities to engage with global issues and develop your leadership
            skills.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full overflow-hidden group border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-un-blue text-white text-xs font-medium py-1 px-3 rounded-full">
                      {event.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                      {event.title}
                    </CardTitle>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 pb-2">
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-full bg-un-blue/10 dark:bg-un-blue/20 group-hover/item:bg-un-blue/20 dark:group-hover/item:bg-un-blue/30 transition-colors">
                      <Calendar className="h-4 w-4 text-un-blue dark:text-un-lightblue" />
                    </div>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-full bg-un-blue/10 dark:bg-un-blue/20 group-hover/item:bg-un-blue/20 dark:group-hover/item:bg-un-blue/30 transition-colors">
                      <Clock className="h-4 w-4 text-un-blue dark:text-un-lightblue" />
                    </div>
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-full bg-un-blue/10 dark:bg-un-blue/20 group-hover/item:bg-un-blue/20 dark:group-hover/item:bg-un-blue/30 transition-colors">
                      <MapPin className="h-4 w-4 text-un-blue dark:text-un-lightblue" />
                    </div>
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group rounded-full bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-un-gradient rounded-lg blur opacity-25"></div>
          <div className="relative backdrop-blur-card p-8 md:p-10 rounded-xl border border-un-blue/10 dark:border-un-blue/20 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Key Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue dark:text-un-lightblue"
                      >
                        <path d="M2 12h20"></path>
                        <path d="M12 2v20"></path>
                        <path d="m4.93 4.93 14.14 14.14"></path>
                        <path d="m19.07 4.93-14.14 14.14"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                        Awareness Campaigns
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Workshops and seminars on the UN's Sustainable Development Goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue dark:text-un-lightblue"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m2 12 5-3 2 4 5-6 4 6-3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                        Model United Nations
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        MUN simulations to debate and resolve international issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue dark:text-un-lightblue"
                      >
                        <path d="M12 3v19"></path>
                        <path d="M5 8c1.5 2.5 5 2.5 6.5 0S15 3 16.5 5.5 21 8 22.5 5.5"></path>
                        <path d="M5 16c1.5-2.5 5-2.5 6.5 0S15 21 16.5 18.5 21 16 22.5 18.5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                        Sustainable Development Projects
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Renewable energy initiatives and water sanitation programs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden gradient-border shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-un-blue/20 to-un-darkblue/20 backdrop-blur-sm z-10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="UNA-ET AASTU Events"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full group bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300"
                  >
                    <Link href="#" className="group">
                      View All Events
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
