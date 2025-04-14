"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function StrategicPartnerships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const strategicPartners = [
    {
      name: "Tech Innovation Hub",
      description: "Providing technology solutions for sustainable development challenges",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      category: "Technology",
    },
    {
      name: "Green Ethiopia Initiative",
      description: "Partnering on environmental sustainability projects",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
      category: "Environment",
    },
    {
      name: "Global Education Access",
      description: "Supporting educational initiatives and scholarships",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
      category: "Education",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Strategic Alliances
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Strategic Partnerships
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Beyond the university and NGOs, we explore partnerships with companies and organizations focused on
            sustainability, technology, and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
          <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-100 dark:border-blue-900/50">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  Why Strategic Partnerships?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Strategic partnerships with companies and organizations focused on sustainability, technology, or
                  innovation provide students with real-world exposure and internships, while giving partners access to
                  a talented pool of problem-solvers.
                </p>
                <p className="text-muted-foreground">
                  These partnerships can lead to funding opportunities, technical support, and mentorship for our
                  initiatives, enhancing their impact and sustainability.
                </p>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032"
                  alt="Strategic Partnerships"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 z-20">
                  <p className="text-white text-lg font-medium">Building impactful collaborations</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-center">Featured Strategic Partners</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {strategicPartners.map((partner, index) => (
                <Card
                  key={index}
                  className="bg-white/50 dark:bg-gray-900/50 border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 mb-4 rounded-full overflow-hidden">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold mb-1">{partner.name}</h4>
                    <p className="text-xs text-un-blue mb-2">{partner.category}</p>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
