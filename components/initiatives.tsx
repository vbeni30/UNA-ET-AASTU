"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function Initiatives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("sdg")

  const initiatives = {
    sdg: {
      title: "SDG Hackathon",
      description: "Innovative solutions for sustainable development",
      image: "/placeholder.svg?height=600&width=800",
      content:
        "We plan to organize an SDG-centered hackathon, encouraging students to develop innovative solutions to challenges such as clean energy, water sanitation, and climate action. This project will bridge students' engineering expertise with UNA-ET's goals of advancing sustainable development.",
      badges: ["SDG 6: Clean Water", "SDG 7: Clean Energy", "SDG 13: Climate Action"],
      link: "#initiatives-sdg",
    },
    environment: {
      title: "Environmental Awareness Campaign",
      description: "Promoting sustainable practices and climate action",
      image: "/placeholder.svg?height=600&width=800",
      content:
        "In collaboration with local organizations, we'll launch campaigns focused on raising awareness about climate change, pollution, and sustainable practices. Events like tree-planting drives and waste-reduction workshops will engage both students and the community, directly supporting the UN's SDG 13 (Climate Action).",
      badges: ["Tree Planting", "Waste Reduction", "Climate Education"],
      link: "#initiatives-environment",
    },
    rights: {
      title: "Human Rights Seminar Series",
      description: "Promoting awareness and respect for human rights",
      image: "/placeholder.svg?height=600&width=800",
      content:
        "We aim to host a series of seminars on human rights issues, such as gender equality, education access, and freedom of expression, involving experts, diplomats, and activists. This initiative will align with UNA-ET's mission to foster global awareness and respect for human rights.",
      badges: ["Gender Equality", "Education Access", "Freedom of Expression"],
      link: "#initiatives-rights",
    },
    internship: {
      title: "International Internship Forum",
      description: "Connecting students with global opportunities",
      image: "/placeholder.svg?height=600&width=800",
      content:
        "AASTU values real-world experience, so we plan to organize a forum where students can connect with international organizations offering internships. This aligns with both UNA-ET's focus on student engagement and AASTU's goal of enhancing students' professional development.",
      badges: ["Professional Development", "Global Experience", "Career Growth"],
      link: "#initiatives-internship",
    },
    mun: {
      title: "Model United Nations Conference",
      description: "Simulating UN sessions and practicing diplomacy",
      image: "/placeholder.svg?height=600&width=800",
      content:
        "We will host a Model UN conference, allowing students to simulate UN sessions, debate global issues, and practice diplomacy. This activity fosters global citizenship, critical thinking, and leadership—all key values of UNA-ET.",
      badges: ["Diplomacy", "Global Citizenship", "Leadership"],
      link: "#initiatives-mun",
    },
  }

  return (
    <section
      id="initiatives"
      className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden"
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-un-blue/10 dark:bg-un-blue/20 px-4 py-1.5 text-sm text-un-blue dark:text-un-lightblue font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-gradient">
            Initiatives & Projects
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl text-pretty">
            Our UNA-ET chapter focuses on activities that align with both the values of the United Nations and the
            innovative spirit of AASTU.
          </p>
        </motion.div>

        <Tabs defaultValue="sdg" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="relative">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-12 relative z-10 bg-un-gradient-soft">
              <TabsTrigger value="sdg">SDG Hackathon</TabsTrigger>
              <TabsTrigger value="environment">Environment</TabsTrigger>
              <TabsTrigger value="rights">Human Rights</TabsTrigger>
              <TabsTrigger value="internship">Internships</TabsTrigger>
              <TabsTrigger value="mun">Model UN</TabsTrigger>
            </TabsList>
            <motion.div
              className="absolute bottom-0 h-1 bg-un-blue dark:bg-un-lightblue rounded-full"
              initial={{ left: "0%", width: "20%" }}
              animate={{
                left:
                  activeTab === "sdg"
                    ? "0%"
                    : activeTab === "environment"
                      ? "20%"
                      : activeTab === "rights"
                        ? "40%"
                        : activeTab === "internship"
                          ? "60%"
                          : "80%",
                width: "20%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {Object.entries(initiatives).map(([key, initiative]) => (
            <TabsContent key={key} value={key} className="mt-8 focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden gradient-border shadow-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-un-blue/20 to-un-darkblue/20 backdrop-blur-sm z-10 rounded-2xl"></div>
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end z-20">
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-bold mb-2">{initiative.title}</h3>
                      <p className="text-white/90">{initiative.description}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gradient">{initiative.title}</h3>
                    <p className="text-muted-foreground text-pretty">{initiative.content}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {initiative.badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-un-blue/5 dark:bg-un-blue/10 text-un-blue dark:text-un-lightblue border-un-blue/20 dark:border-un-blue/30 px-3 py-1"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="group rounded-full bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300"
                  >
                    <Link href={initiative.link}>
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-un-gradient rounded-lg blur opacity-25"></div>
          <div className="relative backdrop-blur-card p-8 md:p-10 rounded-xl border border-un-blue/10 dark:border-un-blue/20 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gradient">Our Approach</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                These initiatives will not only engage AASTU students in meaningful activities but also support UNA-ET's
                mission to promote global cooperation and sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-un-gradient-soft border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-un-blue dark:text-un-lightblue"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m7 10 3 3 7-7"></path>
                    </svg>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>Leveraging technology for global challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    We combine AASTU's technical expertise with UN frameworks to develop innovative solutions for
                    sustainable development challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-un-gradient-soft border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-un-blue dark:text-un-lightblue"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>Working together for greater impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    We partner with university departments, student organizations, and external stakeholders to maximize
                    our reach and effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-un-gradient-soft border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-un-blue dark:text-un-lightblue"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <CardTitle>Inclusivity</CardTitle>
                  <CardDescription>Embracing diversity in all forms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">
                    We're committed to fostering a welcoming environment where students of all genders, ethnicities, and
                    disciplines can contribute.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
