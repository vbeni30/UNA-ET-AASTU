"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, BarChart3, Lightbulb, BookOpen } from "lucide-react"
import CountUp from "react-countup"

export function Impact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const impactData = [
    {
      icon: <Globe className="h-8 w-8 text-un-blue dark:text-un-lightblue" />,
      number: 17,
      label: "SDGs Addressed",
      description: "Working on all Sustainable Development Goals",
    },
    {
      icon: <Users className="h-8 w-8 text-un-blue dark:text-un-lightblue" />,
      number: 13,
      label: "Departments",
      description: "Engaging students across all AASTU departments",
    },
    {
      icon: <Award className="h-8 w-8 text-un-blue dark:text-un-lightblue" />,
      number: 9,
      label: "Accredited Departments",
      description: "Excellence in academic standards",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-un-blue dark:text-un-lightblue" />,
      number: 5,
      label: "Key Initiatives",
      description: "Focused projects with measurable impact",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden bg-gradient-mesh">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-un-blue/10 dark:bg-un-blue/20 px-4 py-1.5 text-sm text-un-blue dark:text-un-lightblue font-medium mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-gradient">
            Making a Difference at AASTU
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl text-pretty">
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
              <Card className="border-un-blue/10 dark:border-un-blue/20 h-full bg-gradient-to-br from-white to-blue-50/50 dark:from-background dark:to-blue-950/10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 text-gradient">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-un-gradient-soft rounded-xl p-6 border border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                <BookOpen className="h-7 w-7 text-un-blue dark:text-un-lightblue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                  Academic Excellence
                </h3>
                <p className="text-muted-foreground text-pretty">
                  AASTU is a recognized leader in engineering and technological research, preparing students for both
                  national and international platforms. Our students consistently achieve success in global
                  competitions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-un-gradient-soft rounded-xl p-6 border border-un-blue/10 dark:border-un-blue/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                <BarChart3 className="h-7 w-7 text-un-blue dark:text-un-lightblue" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                  Global Citizenship
                </h3>
                <p className="text-muted-foreground text-pretty">
                  Our chapter will foster a sense of global citizenship among students, helping them understand
                  international relations and the importance of global cooperation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

