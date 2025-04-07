"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function NewsHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            News & Updates
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Latest News & Insights
          </h1>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Stay informed about UNA-ET AASTU's work, impact, and the latest developments in our chapter and the broader
            UN community.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

