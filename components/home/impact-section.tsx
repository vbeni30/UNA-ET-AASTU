"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, BarChart3 } from "lucide-react"
import CountUp from "react-countup"

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const impactData = [
    {
      icon: <Globe className="h-8 w-8 text-un-blue" />,
      number: 17,
      label: "SDGs Addressed",
      description: "Working on all Sustainable Development Goals",
    },
    {
      icon: <Users className="h-8 w-8 text-un-blue" />,
      number: 13,
      label: "Departments",
      description: "Engaging students across all AASTU departments",
    },
    {
      icon: <Award className="h-8 w-8 text-un-blue" />,
      number: 9,
      label: "Accredited Departments",
      description: "Excellence in academic standards",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-un-blue" />,
      number: 5,
      label: "Key Initiatives",
      description: "Focused projects with measurable impact",
    },
  ]

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Making a Difference at AASTU
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Our chapter is committed to fostering a welcoming environment where students of all genders, ethnicities,
            and disciplines can contribute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-100 dark:border-blue-900/30 h-full bg-gradient-to-br from-white to-blue-50/50 dark:from-background dark:to-blue-950/10">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                    {isInView && <CountUp end={item.number} duration={2.5} separator="," />}
                    {!isInView && "0"}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

