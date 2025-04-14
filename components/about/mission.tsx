"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="mission" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
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
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Connecting AASTU with the United Nations
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            The United Nations is crucial in promoting global peace, security, and sustainable development, fostering
            cooperation among nations. Its values of human rights, social progress, and international collaboration
            align closely with the mission of the United Nations Association of Ethiopia (UNA-ET).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-2xl"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="UNA-ET AASTU Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 z-20">
              <p className="text-white text-lg font-medium">Bridging Ethiopian students with the UN</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={item} className="space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                Our Purpose
              </h3>
              <p className="text-muted-foreground">
                UNA-ET serves as a bridge between the Ethiopian people and the UN to raise awareness about global issues
                like the Sustainable Development Goals (SDGs) within Ethiopian communities, engaging students and young
                leaders in the process.
              </p>
              <p className="text-muted-foreground mt-4">
                By establishing a UNA-ET chapter at AASTU, we aim to complement our strong academic focus with
                opportunities for students to develop a deeper understanding of global issues and leadership skills.
                This chapter will serve as a platform for our students to engage in meaningful extracurricular
                activities, including Model UN simulations, internships, and leadership workshops.
              </p>
            </motion.div>

            <motion.div variants={item} className="grid gap-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Global Awareness</h4>
                  <p className="text-sm text-muted-foreground">
                    Promoting understanding of international relations and the importance of global cooperation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Student Engagement</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating meaningful extracurricular activities for students to engage with global issues
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Lightbulb className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Innovation & Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraging AASTU's reputation in research and technology for global challenges
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
