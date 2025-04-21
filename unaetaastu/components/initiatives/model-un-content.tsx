"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Globe, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export function ModelUnContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const committees = [
    {
      name: "General Assembly",
      description: "Discussing global issues requiring broad international cooperation",
      topics: ["Sustainable Development", "Disarmament", "International Law"],
    },
    {
      name: "Security Council",
      description: "Addressing threats to international peace and security",
      topics: ["Conflict Resolution", "Peacekeeping Operations", "Sanctions"],
    },
    {
      name: "Economic and Social Council",
      description: "Focusing on economic, social, and environmental challenges",
      topics: ["Poverty Eradication", "Climate Action", "Social Development"],
    },
    {
      name: "Human Rights Council",
      description: "Promoting and protecting human rights worldwide",
      topics: ["Civil Liberties", "Minority Rights", "Gender Equality"],
    },
  ]

  const timeline = [
    {
      phase: "Registration",
      date: "January 15-30, 2025",
      description: "Open registration for delegates and assignment of countries",
    },
    {
      phase: "Training Workshops",
      date: "February 10-28, 2025",
      description: "Series of workshops on rules of procedure, position papers, and public speaking",
    },
    {
      phase: "Position Paper Submission",
      date: "March 15, 2025",
      description: "Deadline for delegates to submit position papers representing their assigned countries",
    },
    {
      phase: "Conference Days",
      date: "April 5-7, 2025",
      description: "Three-day simulation of UN sessions with committee meetings, debates, and resolution drafting",
    },
    {
      phase: "Awards Ceremony",
      date: "April 7, 2025",
      description: "Recognition of outstanding delegates and closing ceremony",
    },
  ]

  const skills = [
    {
      icon: <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Global Awareness",
      description: "Develop a deeper understanding of international relations and global issues",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Diplomacy",
      description: "Learn the art of negotiation, compromise, and building consensus",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Research",
      description: "Enhance your ability to research complex topics and country positions",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Public Speaking",
      description: "Improve your confidence and skills in addressing large groups",
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
            Diplomatic Simulation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Model United Nations Conference
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            We host a Model UN conference, allowing students to simulate UN sessions, debate global issues, and practice
            diplomacy. This activity fosters global citizenship, critical thinking, and leadership—all key values of
            UNA-ET.
          </p>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">About MUN</TabsTrigger>
            <TabsTrigger value="committees">Committees</TabsTrigger>
            <TabsTrigger value="timeline">Conference Timeline</TabsTrigger>
            <TabsTrigger value="skills">Skills Developed</TabsTrigger>
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
                  <h3 className="text-2xl font-bold mb-4">What is Model UN?</h3>
                  <p className="text-muted-foreground mb-4">
                    Model United Nations (MUN) is an educational simulation where students role-play as delegates
                    representing different countries in various UN committees. Participants research their assigned
                    countries, debate global issues, and work together to draft resolutions addressing these challenges.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our annual MUN conference at AASTU provides students with a unique opportunity to step into the
                    shoes of diplomats, develop critical thinking and public speaking skills, and gain a deeper
                    understanding of international relations and global issues.
                  </p>
                  <p className="text-muted-foreground">
                    Through this immersive experience, participants learn about diplomacy, negotiation, and the
                    complexities of international cooperation, all while building valuable leadership and communication
                    skills.
                  </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069"
                    alt="Model UN Conference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Conference Highlights</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Authentic Simulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Experience realistic UN committee sessions with formal debate procedures
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive mentorship from experienced MUN participants and international relations experts
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Compete for awards including Best Delegate, Best Position Paper, and Best Delegation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="committees" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Conference Committees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committees.map((committee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{committee.name}</h4>
                        <p className="text-muted-foreground mb-4">{committee.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Discussion Topics:</p>
                          <div className="flex flex-wrap gap-2">
                            {committee.topics.map((topic, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
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
                        Become a Delegate
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Representing a country in our Model UN conference is a unique opportunity to develop diplomatic
                        skills, deepen your understanding of global issues, and connect with like-minded students.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        No prior experience is necessary—we provide comprehensive training to help you succeed as a
                        delegate.
                      </p>
                      <Button asChild className="rounded-full group">
                        <Link href="/events/register">
                          Register as a Delegate
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                        alt="MUN delegates"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="timeline" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Conference Timeline</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800/50 z-0 hidden md:block"></div>
                <div className="space-y-12 relative z-10">
                  {timeline.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                    >
                      <div className="md:w-1/2 relative">
                        <Card className="border-blue-100 dark:border-blue-900/30">
                          <CardContent className="p-6">
                            <Badge className="mb-2 bg-blue-600 text-white">{phase.phase}</Badge>
                            <h4 className="text-xl font-bold mb-2">{phase.date}</h4>
                            <p className="text-muted-foreground">{phase.description}</p>
                          </CardContent>
                        </Card>
                        <div
                          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center z-20 hidden md:flex
                          ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="md:w-1/2 md:invisible">{/* This is just a spacer for the timeline layout */}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild variant="outline" className="rounded-full group">
                  <Link href="/resources/model-un">
                    View Detailed Conference Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Skills You'll Develop</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
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
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                          <p className="text-muted-foreground">{skill.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Testimonials</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <p className="text-muted-foreground italic mb-4">
                      "Participating in the Model UN conference was a transformative experience. I gained confidence in
                      public speaking, learned how to research effectively, and made friends with shared interests in
                      global affairs."
                    </p>
                    <p className="font-medium">- Meron Abebe, Computer Science</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <p className="text-muted-foreground italic mb-4">
                      "As someone studying engineering, I never thought I'd be interested in international relations.
                      The MUN conference opened my eyes to how technical expertise can contribute to solving global
                      challenges."
                    </p>
                    <p className="font-medium">- Yonas Tadesse, Electrical Engineering</p>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Get Involved</h3>
            <p className="text-center max-w-3xl mx-auto mb-6">
              There are many ways to participate in our Model UN conference, whether as a delegate, organizer, or
              volunteer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/events/register">Register as Delegate</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/get-involved">Join Organizing Committee</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/get-involved">Volunteer</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
