"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"

export function LeadershipPositionsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const positions = [
    {
      title: "President",
      responsibilities: [
        "Provide overall leadership and direction for the chapter",
        "Represent the chapter at university and external events",
        "Chair executive committee meetings",
        "Oversee strategic planning and goal setting",
      ],
      qualifications: [
        "Active member for at least two semesters",
        "Strong leadership and communication skills",
        "Good academic standing",
        "Demonstrated commitment to the chapter's mission",
      ],
      image: "/placeholder.svg?height=300&width=300&text=President",
    },
    {
      title: "Vice President",
      responsibilities: [
        "Assist the President in chapter leadership",
        "Oversee committee activities and project implementation",
        "Serve as acting President when necessary",
        "Coordinate with committee chairs",
      ],
      qualifications: [
        "Active member for at least one semester",
        "Strong organizational and interpersonal skills",
        "Good academic standing",
        "Experience with project management",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Vice+President",
    },
    {
      title: "Secretary",
      responsibilities: [
        "Maintain chapter records and documentation",
        "Take minutes at meetings",
        "Manage membership database",
        "Handle official correspondence",
      ],
      qualifications: [
        "Active member for at least one semester",
        "Excellent organizational and writing skills",
        "Attention to detail",
        "Proficiency with documentation and record-keeping",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Secretary",
    },
    {
      title: "Treasurer",
      responsibilities: [
        "Manage chapter finances and budget",
        "Collect membership fees",
        "Prepare financial reports",
        "Oversee fundraising activities",
      ],
      qualifications: [
        "Active member for at least one semester",
        "Strong financial management skills",
        "Experience with budgeting",
        "Integrity and accountability",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Treasurer",
    },
    {
      title: "Events Coordinator",
      responsibilities: [
        "Plan and organize chapter events",
        "Coordinate logistics for activities",
        "Develop event schedules and programs",
        "Evaluate event success and gather feedback",
      ],
      qualifications: [
        "Active member for at least one semester",
        "Strong event planning and organizational skills",
        "Creativity and attention to detail",
        "Experience with event management",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Events",
    },
    {
      title: "Communications Director",
      responsibilities: [
        "Manage chapter's social media presence",
        "Develop promotional materials",
        "Coordinate internal and external communications",
        "Maintain the chapter website",
      ],
      qualifications: [
        "Active member for at least one semester",
        "Excellent communication and writing skills",
        "Experience with social media management",
        "Graphic design and content creation abilities",
      ],
      image: "/placeholder.svg?height=300&width=300&text=Communications",
    },
  ]

  const electionTimeline = [
    {
      phase: "Nominations",
      date: "First two weeks of April",
      description: "Members can nominate themselves or others for leadership positions",
    },
    {
      phase: "Campaign Period",
      date: "Third week of April",
      description: "Candidates present their platforms and vision for the chapter",
    },
    {
      phase: "Elections",
      date: "Last week of April",
      description: "Members vote for their preferred candidates",
    },
    {
      phase: "Transition Period",
      date: "First two weeks of May",
      description: "Outgoing leaders train and mentor incoming leaders",
    },
    {
      phase: "New Term Begins",
      date: "May 15",
      description: "New leadership team officially takes office",
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
            Leadership Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Chapter Leadership Positions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Leadership positions within the UNA-ET AASTU Chapter offer valuable opportunities to develop leadership
            skills, make a significant impact, and shape the direction of our organization.
          </p>
        </motion.div>

        <Tabs defaultValue="positions" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="positions">Available Positions</TabsTrigger>
            <TabsTrigger value="elections">Election Process</TabsTrigger>
            <TabsTrigger value="apply">How to Apply</TabsTrigger>
          </TabsList>

          <TabsContent value="positions" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {positions.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="relative h-20 w-20 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                            <Image
                              src={position.image || "/placeholder.svg"}
                              alt={position.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">{position.title}</h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-1">
                                  Key Responsibilities:
                                </h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {position.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                      <span>{responsibility}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-1">Qualifications:</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {position.qualifications.map((qualification, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                      <span>{qualification}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button asChild className="rounded-full group">
                  <Link href="/membership/apply">
                    Apply for Leadership Position
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="elections" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Election Process</h3>
                  <p className="text-muted-foreground mb-4">
                    Leadership positions in the UNA-ET AASTU Chapter are filled through a democratic election process
                    held annually. All active members are eligible to vote, and the process is designed to be fair,
                    transparent, and inclusive.
                  </p>
                  <p className="text-muted-foreground">
                    Elections are supervised by an Election Committee composed of graduating senior members who are not
                    running for positions. This ensures impartiality and integrity throughout the process.
                  </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=2071"
                    alt="Election process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6 text-center">Election Timeline</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800/50 z-0 hidden md:block"></div>
                <div className="space-y-12 relative z-10">
                  {electionTimeline.map((phase, index) => (
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
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">{phase.date}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2">{phase.phase}</h4>
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
                  <h3 className="text-2xl font-bold mb-4">How to Apply for Leadership Positions</h3>
                  <p className="text-muted-foreground mb-6">
                    If you're interested in taking on a leadership role in the UNA-ET AASTU Chapter, here's how to
                    apply:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Check Eligibility</h4>
                        <p className="text-sm text-muted-foreground">
                          Ensure you meet the qualifications for the position you're interested in.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Submit Nomination</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete the nomination form during the nomination period, including your statement of
                          interest and qualifications.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Prepare Campaign</h4>
                        <p className="text-sm text-muted-foreground">
                          Develop your platform and vision for the position and the chapter.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Present at Candidates' Forum</h4>
                        <p className="text-sm text-muted-foreground">
                          Share your platform with members and answer questions at the candidates' forum.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-blue-700 dark:text-blue-400 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Election Day</h4>
                        <p className="text-sm text-muted-foreground">
                          Participate in the election process and respect the results.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <Button asChild className="mt-6 rounded-full group">
                    <Link href="/membership/apply">
                      Download Nomination Form
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <h3 className="text-xl font-bold mb-4">Leadership Development</h3>
                  <p className="text-muted-foreground mb-4">
                    The UNA-ET AASTU Chapter is committed to developing the next generation of leaders. We provide:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Leadership training workshops for all elected leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Mentorship from previous leadership team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Opportunities to attend regional and national leadership conferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Regular feedback and performance evaluations</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                    <h4 className="font-medium mb-2">Term of Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Leadership positions are held for one academic year, from May 15 to May 14 of the following year.
                      Leaders may run for re-election for a maximum of two consecutive terms in the same position.
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
            <h3 className="text-2xl font-bold mb-4 text-center">Leadership Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Professional Development</h4>
                <p className="text-sm">
                  Gain valuable leadership experience that enhances your resume and career prospects.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Networking Opportunities</h4>
                <p className="text-sm">
                  Connect with UNA-ET leadership, university administration, and external partners.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Make an Impact</h4>
                <p className="text-sm">Shape the direction of the chapter and contribute to meaningful initiatives.</p>
              </div>
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full group"
              >
                <Link href="/membership/apply">
                  Apply for Leadership Position
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

