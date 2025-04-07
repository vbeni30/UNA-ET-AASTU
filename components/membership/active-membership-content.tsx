"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Star, Briefcase, Award, Users } from "lucide-react"
import Link from "next/link"

export function ActiveMembershipContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <Star className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Leadership Opportunities",
      description: "Take on leadership roles in projects, events, and initiatives",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Project Team Participation",
      description: "Join specialized teams working on chapter initiatives and projects",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Priority for Internships",
      description: "Receive priority consideration for internship opportunities with partner organizations",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Advanced Training",
      description: "Access specialized workshops and training sessions for skill development",
    },
  ]

  const responsibilities = [
    {
      title: "Regular Participation",
      description: "Actively participate in chapter meetings, events, and activities",
    },
    {
      title: "Project Involvement",
      description: "Contribute to at least one chapter project or initiative per semester",
    },
    {
      title: "Mentorship",
      description: "Provide guidance and support to new student members",
    },
    {
      title: "Representation",
      description: "Represent the chapter at university and community events when needed",
    },
  ]

  const testimonials = [
    {
      quote:
        "Becoming an active member was the best decision I made at AASTU. The leadership skills and connections I've gained have been invaluable for my personal and professional growth.",
      name: "Tigist Bekele",
      department: "Computer Science",
      image: "/placeholder.svg?height=100&width=100&text=TB",
    },
    {
      quote:
        "As an active member, I've had the opportunity to lead projects that align with my passion for sustainable development. The experience has transformed my university journey.",
      name: "Dawit Haile",
      department: "Electrical Engineering",
      image: "/placeholder.svg?height=100&width=100&text=DH",
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
            Active Membership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Become an Active Member
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Active membership is for students who want to take their involvement to the next level. As an active member,
            you'll have enhanced opportunities for leadership, project involvement, and professional development.
          </p>
        </motion.div>

        <Tabs defaultValue="benefits" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="benefits">Enhanced Benefits</TabsTrigger>
            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
            <TabsTrigger value="apply">How to Apply</TabsTrigger>
          </TabsList>

          <TabsContent value="benefits" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6 flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-blue-100 dark:border-blue-900/50">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                        Additional Benefits
                      </h3>
                      <p className="text-muted-foreground mb-4">Active members also enjoy these exclusive benefits:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Exclusive networking events with professionals and diplomats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Opportunity to represent the chapter at regional and national events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Enhanced leadership training and professional development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Personalized recommendation letters for academic and career opportunities</span>
                        </li>
                      </ul>
                      <Button asChild className="mt-6 rounded-full group">
                        <Link href="/membership/apply">
                          Apply for Active Membership
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                        alt="Active members"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="responsibilities" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{responsibility.title}</h3>
                        <p className="text-muted-foreground">{responsibility.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Time Commitment</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Active membership typically requires a commitment of 3-5 hours per week, which includes:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Weekly Meetings</h4>
                    <p className="text-sm text-muted-foreground">
                      Attend regular chapter meetings to discuss ongoing projects and initiatives
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Project Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicate time to working on assigned projects and initiatives
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Events</h4>
                    <p className="text-sm text-muted-foreground">
                      Participate in and help organize chapter events throughout the semester
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="apply" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Application Process</h3>
                  <p className="text-muted-foreground mb-6">
                    To become an active member, you must first be a student member for at least one semester. The
                    application process includes:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Submit Application</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete the active membership application form, including a statement of interest.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Interview</h4>
                        <p className="text-sm text-muted-foreground">
                          Participate in a brief interview with current chapter leadership.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Orientation</h4>
                        <p className="text-sm text-muted-foreground">
                          Attend an active member orientation session to learn about responsibilities and opportunities.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Confirmation</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive confirmation of active membership status and begin enhanced participation.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Button asChild className="mt-6 rounded-full group">
                    <Link href="/membership/apply">
                      Start Application Process
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <h3 className="text-xl font-bold mb-4">Eligibility Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Current student member for at least one semester</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Attended at least 5 chapter events as a student member</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Good academic standing at AASTU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Demonstrated commitment to the chapter's mission and values</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <h3 className="text-xl font-bold mb-4">Application Deadlines</h3>
                    <p className="text-muted-foreground mb-4">
                      Applications for active membership are accepted twice a year:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Fall Semester: September 1-15</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Spring Semester: February 1-15</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Hear From Our Active Members</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/70">{testimonial.department}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full group"
              >
                <Link href="/membership/apply">
                  Apply for Active Membership
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

