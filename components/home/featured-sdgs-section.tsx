"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function FeaturedSDGsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const sdgs = [
    {
      number: 1,
      title: "No Poverty",
      description: "End poverty in all its forms everywhere",
      color: "#e5243b",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg",
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
      color: "#DDA63A",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
    },
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all at all ages",
      color: "#4C9F38",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg",
    },
    {
      number: 4,
      title: "Quality Education",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      color: "#C5192D",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Achieve gender equality and empower all women and girls",
      color: "#FF3A21",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
    },
    {
      number: 6,
      title: "Clean Water and Sanitation",
      description: "Ensure availability and sustainable management of water and sanitation for all",
      color: "#26BDE2",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all",
      color: "#FCC30B",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description:
        "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
      color: "#A21942",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description:
        "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
      color: "#FD6925",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
    },
    {
      number: 10,
      title: "Reduced Inequality",
      description: "Reduce inequality within and among countries",
      color: "#DD1367",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
      color: "#FD9D24",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg",
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Ensure sustainable consumption and production patterns",
      color: "#BF8B2E",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts",
      color: "#3F7E44",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
    },
    {
      number: 14,
      title: "Life Below Water",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
      color: "#0A97D9",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
    },
    {
      number: 15,
      title: "Life on Land",
      description:
        "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
      color: "#56C02B",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg",
    },
    {
      number: 16,
      title: "Peace, Justice and Strong Institutions",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
      color: "#00689D",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description:
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
      color: "#19486A",
      image: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Global Goals
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Sustainable Development Goals
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            The 17 Sustainable Development Goals (SDGs) are the world's shared plan to end extreme poverty, reduce
            inequality, and protect the planet by 2030.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={`/resources/sdg#goal-${sdg.number}`} className="block">
                <Card className="overflow-hidden h-full border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: sdg.color }}>
                      <Image
                        src={sdg.image || "/placeholder.svg"}
                        alt={`SDG ${sdg.number}: ${sdg.title}`}
                        fill
                        className="object-cover p-0 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-sm font-bold">
                        {sdg.number}. {sdg.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

