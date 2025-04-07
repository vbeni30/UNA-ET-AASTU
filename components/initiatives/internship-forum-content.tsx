"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Briefcase, Globe, GraduationCap, Building } from "lucide-react"
import Link from "next/link"

export function InternshipForumContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const upcomingEvents = [
    {
      title: "International Organizations Career Fair",
      date: "March 20, 2025",
      location: "AASTU Main Hall",
      description:
        "Meet representatives from international organizations offering internships and career opportunities.",
    },
    {
      title: "UN Internship Application Workshop",
      date: "April 5, 2025",
      location: "Engineering Building, Room 204",
      description: "Learn how to successfully apply for internships with various United Nations agencies.",
    },
    {
      title: "Global NGOs Networking Event",
      date: "May 10, 2025",
      location: "AASTU Conference Center",
      description: "Network with representatives from global NGOs and learn about their internship programs.",
    },
  ]

  const partnerOrganizations = [
    {
      name: "United Nations Development Programme",
      logo: "/placeholder.svg?height=80&width=200&text=UNDP",
      type: "UN Agency",
    },
    {
      name: "World Health Organization",
      logo: "/placeholder.svg?height=80&width=200&text=WHO",
      type: "UN Agency",
    },
    {
      name: "African Development Bank",
      logo: "/placeholder.svg?height=80&width=200&text=AfDB",
      type: "International Organization",
    },
    {
      name: "Save the Children",
      logo: "/placeholder.svg?height=80&width=200&text=Save+the+Children",
      type: "International NGO",
    },
    {
      name: "Ethiopian Red Cross Society",
      logo: "/placeholder.svg?height=80&width=200&text=ERCS",
      type: "National NGO",
    },
    {
      name: "GIZ Ethiopia",
      logo: "/placeholder.svg?height=80&width=200&text=GIZ",
      type: "International Development Agency",
    },
  ]

  const testimonials = [
    {
      name: "Abebe Kebede",
      program: "Electrical Engineering",
      organization: "UNDP Ethiopia",
      quote:
        "The internship opportunity I found through the forum completely changed my career trajectory. Working with UNDP gave me invaluable experience in applying my engineering skills to sustainable development projects.",
      image: "/placeholder.svg?height=100&width=100&text=AK",
    },
    {
      name: "Sara Hailu",
      program: "Computer Science",
      organization: "WHO Africa",
      quote:
        "Thanks to the connections made at the Internship Forum, I secured a position with WHO where I helped develop health data systems. This experience opened doors I never thought possible.",
      image: "/placeholder.svg?height=100&width=100&text=SH",
    },
    {
      name: "Dawit Mengistu",
      program: "Civil Engineering",
      organization: "African Development Bank",
      quote:
        "My internship with AfDB allowed me to work on infrastructure projects across Africa. The professional network I built during this experience has been invaluable for my career development.",
      image: "/placeholder.svg?height=100&width=100&text=DM",
    },
  ]

  return (
    <section className="w-full py-20 relative overflow-hidden">
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
            Career Development
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            International Internship Forum
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            AASTU values real-world experience, so we organize forums where students can connect with international
            organizations offering internships. This aligns with both UNA-ET's focus on student engagement and AASTU's
            goal of enhancing students' professional development.
          </p>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">About the Forum</TabsTrigger>
            <TabsTrigger value="partners">Partner Organizations</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Bridging Education and Career</h3>
                  <p className="text-muted-foreground mb-4">
                    The International Internship Forum is a flagship initiative of the UNA-ET AASTU Chapter designed to
                    connect students with global internship opportunities. We believe that practical experience in
                    international organizations is invaluable for students' professional development and global
                    perspective.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Through career fairs, workshops, and networking events, we create platforms for students to engage
                    directly with representatives from UN agencies, international NGOs, and other global organizations
                    offering internships.
                  </p>
                  <p className="text-muted-foreground">
                    Our forum also provides resources and guidance to help students prepare competitive applications,
                    develop necessary skills, and navigate the internship application process for international
                    organizations.
                  </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070"
                    alt="Career Fair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Forum Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h4 className="font-medium mb-2">Global Exposure</h4>
                    <p className="text-sm text-muted-foreground">
                      Gain international experience and develop a global perspective through internships abroad
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h4 className="font-medium mb-2">Professional Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Build practical skills, expand your professional network, and enhance your resume
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h4 className="font-medium mb-2">Career Advancement</h4>
                    <p className="text-sm text-muted-foreground">
                      Open doors to future employment opportunities in international organizations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="partners" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Our Partner Organizations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {partnerOrganizations.map((org, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-20 relative w-full mb-4">
                          <Image src={org.logo || "/placeholder.svg"} alt={org.name} fill className="object-contain" />
                        </div>
                        <h4 className="font-medium mb-1">{org.name}</h4>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                        >
                          {org.type}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-blue-100 dark:border-blue-900/50">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                        Become a Partner Organization
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        We're always looking to expand our network of partner organizations to provide more diverse
                        internship opportunities for our students. If your organization is interested in partnering with
                        us, we'd love to hear from you.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        By partnering with UNA-ET AASTU Chapter, you'll gain access to a pool of talented and motivated
                        students eager to contribute to your organization's mission.
                      </p>
                      <Button asChild className="rounded-full group">
                        <Link href="/partnerships/join">
                          Partner With Us
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                        alt="Partnership meeting"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="events" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="md:w-1/4">
                            <Badge className="bg-blue-600 text-white">Internship Event</Badge>
                            <div className="flex items-center gap-2 mt-2">
                              <Calendar className="h-4 w-4 text-blue-600" />
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{event.location}</div>
                          </div>
                          <div className="md:w-3/4">
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <Button variant="outline" className="rounded-full group">
                              Register for Event
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Want to see all our upcoming internship events? Check out our full events calendar.
                </p>
                <Button asChild variant="outline" className="rounded-full group">
                  <Link href="/events/calendar">
                    View Full Calendar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="success" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Success Stories</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/6 flex flex-col items-center">
                            <div className="relative h-20 w-20 rounded-full overflow-hidden mb-2">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <h4 className="font-medium text-center">{testimonial.name}</h4>
                            <p className="text-xs text-muted-foreground text-center">{testimonial.program}</p>
                          </div>
                          <div className="md:w-5/6">
                            <div className="flex items-start mb-2">
                              <Building className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                              <p className="text-sm font-medium">Interned at: {testimonial.organization}</p>
                            </div>
                            <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button asChild className="rounded-full group">
                  <Link href="/get-involved">
                    Share Your Internship Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Prepare for Your International Internship</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Resume & Cover Letter Workshop</h4>
                <p className="text-sm">
                  Learn how to craft compelling application materials tailored for international organizations.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Interview Preparation</h4>
                <p className="text-sm">
                  Practice with mock interviews and receive feedback from professionals with international experience.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Internship Database</h4>
                <p className="text-sm">
                  Access our curated database of international internship opportunities updated regularly.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/resources/educational">Access Internship Resources</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

