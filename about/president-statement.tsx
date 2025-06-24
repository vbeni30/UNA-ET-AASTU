"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function PresidentStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="president-statement"
      className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/10 dark:to-gray-950 relative overflow-hidden"
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
          <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-800 dark:text-purple-300 mb-4">
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-600 dark:from-purple-400 dark:to-purple-200">
            President's Statement
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900/50 shadow-lg">
              <Image src="/placeholder.svg?height=300&width=300&text=robera" alt="Robera Berhanu" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Robera Berhanu</h3>
              <p className="text-purple-700 dark:text-purple-400 font-medium">President, UNA-ET AASTU Chapter</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-8 top-0 text-6xl text-purple-200 dark:text-purple-800 font-serif">"</div>
              <p className="text-lg text-muted-foreground italic relative z-10 pl-6">
                As the President of the UNA-ET AASTU Chapter, I am honored to lead our community in advancing the
                principles and goals of the United Nations. Our chapter is committed to fostering global citizenship,
                promoting sustainable development, and addressing pressing global challenges through education,
                advocacy, and action.
              </p>
            </div>

            <p className="text-muted-foreground">
              At AASTU, we believe that our technical expertise and innovative mindset can contribute significantly to
              achieving the Sustainable Development Goals. Our chapter provides a platform for students to engage with
              global issues, develop leadership skills, and collaborate with peers from diverse backgrounds.
            </p>

            <p className="text-muted-foreground">
              I invite you to join us in our mission to create a more just, peaceful, and sustainable world. Together,
              we can make a meaningful impact on our campus, in our community, and beyond.
            </p>

            <div className="pt-4">
              <Link
                href="/about/leadership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
              >
                Meet Our Leadership Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
