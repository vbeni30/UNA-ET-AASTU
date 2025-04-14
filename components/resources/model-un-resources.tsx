"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ModelUnResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const resources = [
    {
      title: "Model UN Handbook",
      description: "Comprehensive guide to participating in Model UN conferences",
      type: "PDF",
      link: "#",
    },
    {
      title: "Rules of Procedure",
      description: "Detailed explanation of Model UN rules and procedures",
      type: "PDF",
      link: "#",
    },
    {
      title: "Position Paper Guide",
      description: "How to research and write effective position papers",
      type: "PDF",
      link: "#",
    },
    {
      title: "Resolution Writing Guide",
      description: "Templates and tips for drafting UN-style resolutions",
      type: "PDF",
      link: "#",
    },
  ]

  const steps = [
    {
      title: "Research Your Country",
      description: "Learn about your assigned country's history, politics, economy, and positions on key issues.",
    },
    {
      title: "Understand the Committee",
      description:
        "Research the committee you'll be participating in, including its mandate, powers, and current agenda items.",
    },
    {
      title: "Write a Position Paper",
      description: "Prepare a document outlining your country's stance on the issues to be discussed.",
    },
    {
      title: "Practice Parliamentary Procedure",
      description: "Familiarize yourself with the rules of debate, motions, and voting procedures.",
    },
    {
      title: "Develop Public Speaking Skills",
      description: "Practice delivering speeches, responding to questions, and negotiating with other delegates.",
    },
    {
      title: "Collaborate on Resolutions",
      description:
        "Work with other delegates to draft, amend, and vote on resolutions addressing the committee's agenda.",
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
            Model United Nations
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Model United Nations (MUN) is an educational simulation where students learn about diplomacy, international
            relations, and the United Nations. Participants role-play as delegates representing different countries and
            debate current global issues.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full max-w-5xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">What is MUN?</TabsTrigger>
            <TabsTrigger value="participate">How to Participate</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">About Model UN</h3>
                  <p className="text-muted-foreground mb-4">
                    Model United Nations, also known as Model UN or MUN, is an educational simulation and academic
                    activity in which students can learn about diplomacy, international relations, and the United
                    Nations.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    In Model UN, students take on roles as diplomats representing various countries and participate in
                    simulated sessions of committees of the United Nations, such as the Security Council or the General
                    Assembly.
                  </p>
                  <p className="text-muted-foreground">
                    Participants research a country, take on roles as diplomats, investigate international issues,
                    debate, deliberate, consult, and then develop solutions to world problems.
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
                <h3 className="text-xl font-bold mb-4 text-center">Benefits of Participating in Model UN</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Research Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop the ability to research complex global issues and country positions
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Public Speaking</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhance your ability to speak confidently in front of groups and articulate ideas clearly
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Diplomacy</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn the art of negotiation, compromise, and building consensus
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="participate" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">How to Participate in Model UN</h3>

              <div className="space-y-6 mb-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h4 className="font-bold text-lg mb-4">Tips for Success</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Start researching early and create a research binder with key information
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Practice your opening speech multiple times before the conference
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Network with other delegates during unmoderated caucuses
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Stay in character as your country's representative throughout the conference
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Be active in drafting and amending resolutions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Dress professionally and follow the conference dress code
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="resources" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <Button asChild variant="outline" className="group">
                          <Link href={resource.link}>
                            Download {resource.type}
                            <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Additional Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://www.un.org/en/model-united-nations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      United Nations Model UN Resources
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://www.nmun.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      National Model United Nations
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://bestdelegate.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      Best Delegate - Model UN Resources
                    </Link>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Join Our Model UN Conference</h3>
            <p className="text-center max-w-3xl mx-auto mb-6">
              The UNA-ET AASTU Chapter organizes an annual Model UN conference for students. This is a great opportunity
              to apply your knowledge, develop your skills, and connect with other students interested in international
              relations.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 group"
              >
                <Link href="/initiatives/model-un">
                  Learn About Our Model UN Conference
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
