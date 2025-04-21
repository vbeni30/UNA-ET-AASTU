"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Building, Landmark, ArrowRight, GraduationCap, Phone, Plane, Globe2 } from "lucide-react"

export function GovernmentBodiesContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const governmentBodies = [
    {
      name: "Ethio Telecom",
      description: "Supporting digital connectivity and telecommunications infrastructure for our initiatives.",
      logo: "/placeholder.svg?height=200&width=200&text=Ethio+Telecom",
      link: "#",
      icon: <Phone className="h-10 w-10 text-purple-500" />,
    },
    {
      name: "FDRE Ministry of Education",
      description: "Collaborating on educational programs and academic initiatives across Ethiopia.",
      logo: "/placeholder.svg?height=200&width=200&text=MoE",
      link: "#",
      icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
    },
    {
      name: "Ministry of Innovation and Technology (MINT)",
      description: "Partnering on technology-driven solutions and innovation projects.",
      logo: "/placeholder.svg?height=200&width=200&text=MINT",
      link: "#",
      icon: <Landmark className="h-10 w-10 text-purple-500" />,
    },
    {
      name: "The Ministry of Foreign Affairs of Ethiopia",
      description: "Supporting our international engagement and diplomatic initiatives.",
      logo: "/placeholder.svg?height=200&width=200&text=MoFA",
      link: "#",
      icon: <Globe2 className="h-10 w-10 text-purple-500" />,
    },
    {
      name: "Ethiopian Airlines",
      description: "Facilitating travel and logistics for international conferences and events.",
      logo: "/placeholder.svg?height=200&width=200&text=Ethiopian+Airlines",
      link: "#",
      icon: <Plane className="h-10 w-10 text-purple-500" />,
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
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Building className="mr-1 h-4 w-4" />
            Government Institutions
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Government Body Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We work closely with Ethiopian government institutions to advance sustainable development and implement
            effective policies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {governmentBodies.map((body, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full border border-purple-200 dark:border-purple-800">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex items-center justify-center bg-purple-50 dark:bg-purple-950/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-colors duration-300 md:w-1/3">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                      {body.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{body.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">{body.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mt-auto group/btn border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
                    >
                      <Link href={body.link}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-lg bg-purple-50 dark:bg-purple-950/30">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Building className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Public-Private Partnerships</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our collaborations with government bodies enable us to bridge the gap between public policy and private
                sector innovation, creating sustainable solutions for Ethiopia's development challenges.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-purple-50 dark:bg-purple-950/30">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Landmark className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Policy Advocacy</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Through our government partnerships, we advocate for policies that align with the UN Sustainable
                Development Goals and promote inclusive growth and development in Ethiopia.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 mt-8 text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/partnerships/join">
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
