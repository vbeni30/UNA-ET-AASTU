"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function InitiativesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const initiatives = [
    {
      title: "SDG Hackathon",
      description:
        "Encouraging students to develop innovative solutions to challenges such as clean energy, water sanitation, and climate action through a multi-day collaborative event.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      link: "/initiatives/sdg-hackathon",
    },
    {
      title: "Environmental Awareness",
      description:
        "Raising awareness about climate change, pollution, and sustainable practices through campaigns, tree-planting drives, and waste-reduction workshops.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070",
      link: "/initiatives/environmental-awareness",
    },
    {
      title: "Human Rights Seminar",
      description:
        "Hosting seminars on human rights issues, such as gender equality, education access, and freedom of expression with experts, diplomats, and activists.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      link: "/initiatives/human-rights-seminar",
    },
    {
      title: "Model UN Conference",
      description:
        "Simulating UN sessions to debate global issues, practice diplomacy, and develop critical thinking skills through role-playing international negotiations.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
      link: "/initiatives/model-un",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-  bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Initiatives & Projects
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Our UNA-ET chapter focuses on activities that align with both the values of the United Nations and the
            innovative spirit of AASTU.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                  <Link
                    href={initiative.link}
                    className="text-un-blue hover:text-un-darkblue font-medium text-sm inline-flex items-center group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full group">
            <Link href="/initiatives">
              View All Initiatives
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

