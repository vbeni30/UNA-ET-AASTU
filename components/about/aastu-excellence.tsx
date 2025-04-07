"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Cpu, GraduationCap } from "lucide-react"

export function AastuExcellence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="excellence"
      className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden"
    >
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
            AASTU Excellence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Academic Excellence and Innovation
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            At Addis Ababa Science and Technology University, we excel in both academics and innovation, recently
            becoming the first ISO certified university in Ethiopia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              With nine of our thirteen departments accredited, AASTU is a recognized leader in engineering and
              technological research, preparing students for both national and international platforms. Our students
              consistently achieve success in global competitions, reflecting their potential not only in academics but
              also in real-world problem solving.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-sm">
                <Award className="h-8 w-8 text-un-blue mb-4" />
                <h3 className="text-lg font-bold mb-2">First ISO Certified</h3>
                <p className="text-sm text-muted-foreground">First ISO certified university in Ethiopia</p>
              </div>

              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-sm">
                <BookOpen className="h-8 w-8 text-un-blue mb-4" />
                <h3 className="text-lg font-bold mb-2">9/13 Departments</h3>
                <p className="text-sm text-muted-foreground">Nine accredited departments leading in their fields</p>
              </div>

              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-sm">
                <Cpu className="h-8 w-8 text-un-blue mb-4" />
                <h3 className="text-lg font-bold mb-2">Research Leader</h3>
                <p className="text-sm text-muted-foreground">Leading in engineering and technological research</p>
              </div>

              <div className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-sm">
                <GraduationCap className="h-8 w-8 text-un-blue mb-4" />
                <h3 className="text-lg font-bold mb-2">Global Success</h3>
                <p className="text-sm text-muted-foreground">Students achieving success in global competitions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
              Complementing Academic Excellence
            </h3>

            <p className="text-muted-foreground">
              The UNA-ET chapter at AASTU will complement our strong academic focus with opportunities for students to
              develop a deeper understanding of global issues and leadership skills. This chapter will serve as a
              platform for our students to engage in meaningful extracurricular activities.
            </p>

            <p className="text-muted-foreground">
              The chapter will not only enhance our students' global awareness but also align with the university's
              commitment to fostering entrepreneurship, innovation, and excellence in research. Together, we can drive
              change both within Ethiopia and on the international stage, creating empowered global citizens.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p>
                To create a community of globally-minded students who leverage their technical expertise to address the
                world's most pressing challenges through the framework of the United Nations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

