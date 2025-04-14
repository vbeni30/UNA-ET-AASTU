"use client"

import { motion } from "framer-motion"

interface ResourcesHeroProps {
  title: string
  subtitle: string
  image: string
}

export function ResourcesHero({ title, subtitle, image }: ResourcesHeroProps) {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
            Resources
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl text-white">{title}</h1>
          <p className="max-w-[800px] text-white/90 md:text-xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
