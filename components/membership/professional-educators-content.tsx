"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, BookOpen, Users, GraduationCap, Globe } from "lucide-react"
import Link from "next/link"

export function ProfessionalEducatorsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Curriculum Resources",
      description: "Access specialized teaching materials aligned with UN Sustainable Development Goals",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Professional Network",
      description: "Connect with like-minded educators to share best practices and collaborate",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Professional Development",
      description: "Participate in specialized workshops and training on global education methodologies",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Global Classroom Connections",
      description: "Facilitate international classroom exchanges and collaborative projects",
    },
  ]

  const opportunities = [
    {
      title: "Curriculum Development",
      description: "Contribute to developing UN-focused educational materials and resources",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
    },
    {
      title: "Student Mentorship",
      description: "Guide students in UN-related projects and Model UN preparations",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070",
    },
    {
      title: "Workshop Facilitation",
      description: "Lead workshops on global citizenship and sustainable development",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070",
    },
    {
      title: "Research Collaboration",
      description: "Participate in research on global education methodologies and impact",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
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
            Professional Educators
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Join as a Professional Educator
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Our Professional Educators membership is designed for teachers, professors, and educational professionals
            who are passionate about integrating global perspectives and UN values into their teaching practice.
          </p>
        </motion.div>

        <Tabs defaultValue="benefits" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="benefits">Membership Benefits</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
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
                        Beyond the core benefits, professional educator members also enjoy:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Recognition as an official UN-affiliated educator</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Opportunities to publish in our educational journals and platforms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Access to grants for implementing global education initiatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>Invitations to exclusive educator conferences and events</span>
                        </li>
                      </ul>
                      <Button asChild className="mt-6 rounded-full group">
                        <Link href="/membership/apply">
                          Apply for Professional Membership
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
                        alt="Professional educators"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="opportunities" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunities.map((opportunity, index) => (
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
                          src={opportunity.image || "/placeholder.svg"}
                          alt={opportunity.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                        <p className="text-muted-foreground">{opportunity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Want to see all our upcoming educator events? Check out our full events calendar.
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
                  <h3 className="text-2xl font-bold mb-4">How to Become a Professional Educator Member</h3>
                  <p className="text-muted-foreground mb-6">
                    Joining the UNA-ET AASTU Chapter as a professional educator member is a straightforward process.
                    Follow these steps:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Complete the Application Form</h4>
                        <p className="text-sm text-muted-foreground">
                          Fill out our online application form with your professional and educational information.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Submit Professional Credentials</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide your teaching credentials and a brief statement about your interest in global
                          education.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Pay Membership Fee</h4>
                        <p className="text-sm text-muted-foreground">
                          Submit the annual membership fee of 200 ETB (professional educator rate).
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
                          Get your membership certificate, educational resources, and welcome materials.
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
                      <span>Must be a current educator at primary, secondary, or tertiary level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Valid teaching credentials or academic position</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Commitment to integrating global perspectives in teaching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Willingness to participate in at least 2 educator events per year</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                    <h4 className="font-medium mb-2">Membership Period</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional educator membership is valid for one academic year and can be renewed annually. The
                      membership cycle runs from September to August.
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
              Become a professional educator member today and start integrating global perspectives into your teaching
              practice. Join a community of educators committed to preparing students to become global citizens.
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
