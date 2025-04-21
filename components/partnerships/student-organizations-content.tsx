"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, ArrowRight, Lightbulb, Code, Palette, Globe } from "lucide-react"

export function StudentOrganizationsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const studentOrganizations = [
    {
      name: "AASTU Environmental Engineering Association",
      description: "Focused on environmental sustainability and engineering solutions to ecological challenges.",
      logo: "/placeholder.svg?height=200&width=200&text=AEEA",
      link: "#",
      icon: <Users className="h-10 w-10 text-emerald-500" />,
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      hoverColor: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40",
    },
    {
      name: "AASTU Software Engineering Association",
      description: "Promoting innovation in software development and digital solutions.",
      logo: "/placeholder.svg?height=200&width=200&text=ASEA",
      link: "#",
      icon: <Code className="h-10 w-10 text-blue-500" />,
      color: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
    },
    {
      name: "AASTU Chemical Engineering Association",
      description: "Advancing knowledge and applications in chemical engineering and related fields.",
      logo: "/placeholder.svg?height=200&width=200&text=ACEA",
      link: "#",
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      color: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      hoverColor: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40",
    },
    {
      name: "AASTU CGI Club",
      description: "Exploring computer graphics, animation, and visual effects technologies.",
      logo: "/placeholder.svg?height=200&width=200&text=CGI+Club",
      link: "#",
      icon: <Palette className="h-10 w-10 text-purple-500" />,
      color: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      hoverColor: "group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40",
    },
    {
      name: "Tadias AASTU",
      description: "Promoting cultural exchange and community engagement within the university.",
      logo: "/placeholder.svg?height=200&width=200&text=Tadias",
      link: "#",
      icon: <Globe className="h-10 w-10 text-cyan-500" />,
      color: "bg-cyan-50 dark:bg-cyan-950/30",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      hoverColor: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="mr-1 h-4 w-4" />
            Student-Led Initiatives
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Organization Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We collaborate with student-led organizations across AASTU to amplify our impact and create a more
            interconnected campus community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentOrganizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full border ${org.borderColor}`}
              >
                <div
                  className={`p-6 flex items-center justify-center ${org.color} ${org.hoverColor} transition-colors duration-300`}
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                    {org.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{org.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{org.description}</p>
                  <Button variant="outline" size="sm" asChild className="mt-auto group/btn">
                    <Link href={org.link}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Organization
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h3>
            <p className="mx-auto max-w-[700px] text-gray-500 mb-8 dark:text-gray-400">
              If your student organization is interested in collaborating with the UNA-ET AASTU Chapter, we'd love to
              hear from you. Together, we can create meaningful impact and advance the UN's Sustainable Development
              Goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/partnerships/join">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
