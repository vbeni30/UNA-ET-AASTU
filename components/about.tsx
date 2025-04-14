"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export function About() {
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
    <section id="about" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden bg-gradient-mesh">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-un-blue/10 dark:bg-un-blue/20 px-4 py-1.5 text-sm text-un-blue dark:text-un-lightblue font-medium mb-4">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-gradient">
            Connecting AASTU with the United Nations
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl text-pretty">
            The United Nations Association of Ethiopia at AASTU serves as a bridge between the Ethiopian people and the
            UN to raise awareness about global issues like the Sustainable Development Goals (SDGs).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden gradient-border"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-un-blue/20 to-un-darkblue/20 backdrop-blur-sm z-10 rounded-2xl"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="UNA-ET AASTU Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 z-20">
              <p className="text-white text-lg font-medium">First ISO certified university in Ethiopia</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={item} className="space-y-3">
              <h3 className="text-2xl font-bold text-gradient">Our Purpose</h3>
              <p className="text-muted-foreground text-pretty">
                By establishing a UNA-ET chapter at AASTU, we aim to complement our strong academic focus with
                opportunities for students to develop a deeper understanding of global issues and leadership skills.
              </p>
            </motion.div>

            <motion.div variants={item} className="grid gap-6">
              <div className="flex gap-5 group">
                <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                  <Globe className="h-7 w-7 text-un-blue dark:text-un-lightblue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                    Global Awareness
                  </h4>
                  <p className="text-muted-foreground">
                    Promoting understanding of international relations and the importance of global cooperation
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                  <Users className="h-7 w-7 text-un-blue dark:text-un-lightblue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                    Student Engagement
                  </h4>
                  <p className="text-muted-foreground">
                    Creating meaningful extracurricular activities for students to engage with global issues
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="h-14 w-14 rounded-full bg-un-blue/10 dark:bg-un-blue/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-un-blue/20 dark:group-hover:bg-un-blue/30">
                  <Lightbulb className="h-7 w-7 text-un-blue dark:text-un-lightblue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-un-blue dark:group-hover:text-un-lightblue transition-colors">
                    Innovation & Research
                  </h4>
                  <p className="text-muted-foreground">
                    Leveraging AASTU's reputation in research and technology for global challenges
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-un-gradient rounded-lg blur opacity-25"></div>
          <div className="relative backdrop-blur-card p-8 md:p-10 rounded-xl border border-un-blue/10 dark:border-un-blue/20 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">AASTU Excellence</h3>
                <p className="text-muted-foreground mb-4 text-pretty">
                  At AASTU, we excel in both academics and innovation, recently becoming the first ISO certified
                  university in Ethiopia with nine of our thirteen departments accredited.
                </p>
                <p className="text-muted-foreground text-pretty">
                  Our students consistently achieve success in global competitions, reflecting their potential not only
                  in academics but also in real-world problem solving.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-un-gradient-soft p-5 rounded-lg text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-un-blue dark:text-un-lightblue mb-1">9/13</div>
                  <div className="text-sm text-muted-foreground">Accredited Departments</div>
                </div>
                <div className="bg-un-gradient-soft p-5 rounded-lg text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-un-blue dark:text-un-lightblue mb-1">1st</div>
                  <div className="text-sm text-muted-foreground">ISO Certified University</div>
                </div>
                <div className="bg-un-gradient-soft p-5 rounded-lg text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-un-blue dark:text-un-lightblue mb-1">SDGs</div>
                  <div className="text-sm text-muted-foreground">Focus on Sustainable Development</div>
                </div>
                <div className="bg-un-gradient-soft p-5 rounded-lg text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-un-blue dark:text-un-lightblue mb-1">MUN</div>
                  <div className="text-sm text-muted-foreground">Model UN Simulations</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
