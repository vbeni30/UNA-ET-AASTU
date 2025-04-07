"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Calendar, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"

export function StudentMembershipContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Access to Events",
      description: "Participate in all chapter events, including workshops, seminars, and social gatherings",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Networking Opportunities",
      description: "Connect with like-minded students, professionals, and organizations",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Educational Resources",
      description: "Access exclusive resources on global issues, the UN, and professional development",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Certificate of Membership",
      description: "Receive official recognition of your participation in UNA-ET AASTU Chapter",
    },
  ]

  const activities = [
    {
      title: "Model UN Participation",
      description: "Join our Model UN simulations and develop diplomatic and public speaking skills",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
    },
    {
      title: "SDG Awareness Campaigns",
      description: "Participate in campaigns to raise awareness about the Sustainable Development Goals",
      image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=2070",
    },
    {
      title: "Community Service Projects",
      description: "Engage in service projects that make a positive impact in the local community",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070",
    },
    {
      title: "Social and Cultural Events",
      description: "Attend social gatherings, cultural exchanges, and networking events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
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
            Student Membership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Join as a Student Member
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Student membership is open to all AASTU students interested in global issues, leadership development, and
            making a positive impact. As a student member, you'll have access to a wide range of opportunities and
            resources.
          </p>
        </motion.div>

        <Tabs defaultValue="benefits" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="benefits">Membership Benefits</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="join">How to Join</TabsTrigger>
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
                      <p className="text-muted-foreground mb-4">
                        Beyond the core benefits, student members also enjoy:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Priority registration for high-demand events</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Eligibility for chapter leadership positions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Mentorship opportunities with senior members</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Recognition in chapter publications and website</span>
                        </li>
                      </ul>
                      <Button asChild className="mt-6 rounded-full group">
                        <Link href="/membership/apply">
                          Apply for Student Membership
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                        alt="Student members"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="activities" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Want to see all our upcoming events? Check out our full events calendar.
                </p>
                <Button asChild variant="outline" className="rounded-full group">
                  <Link href="/events/calendar">
                    View Events Calendar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="join" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">How to Become a Student Member</h3>
                  <p className="text-muted-foreground mb-6">
                    Joining the UNA-ET AASTU Chapter as a student member is a simple process. Follow these steps to
                    become part of our community:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Complete the Application Form</h4>
                        <p className="text-sm text-muted-foreground">
                          Fill out our online application form with your personal and academic information.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Pay Membership Fee</h4>
                        <p className="text-sm text-muted-foreground">
                          Submit the annual membership fee of 100 ETB (student rate).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Attend Orientation</h4>
                        <p className="text-sm text-muted-foreground">
                          Participate in our new member orientation session to learn about the chapter and meet other
                          members.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Receive Membership Package</h4>
                        <p className="text-sm text-muted-foreground">
                          Get your membership card, certificate, and welcome materials.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Button asChild className="mt-6 rounded-full group">
                    <Link href="/membership/apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <h3 className="text-xl font-bold mb-4">Membership Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Must be a currently enrolled student at AASTU</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Valid student ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Interest in global issues and the United Nations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Commitment to attend at least 3 events per semester</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                    <h4 className="font-medium mb-2">Membership Period</h4>
                    <p className="text-sm text-muted-foreground">
                      Student membership is valid for one academic year and can be renewed annually. The membership
                      cycle runs from September to August.
                    </p>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to Join?</h3>
            <p className="text-center max-w-3xl mx-auto mb-6">
              Become a student member today and start your journey with UNA-ET AASTU Chapter. Join a community of
              students passionate about global issues and making a positive impact.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full group"
              >
                <Link href="/membership/apply">
                  Apply for Membership
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

