"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Rocket, Zap, Globe } from "lucide-react"

export function Innovation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="innovation"
      className="w-full py-20 md:py-28 lg:py-36 bg-white dark:bg-gray-950 relative overflow-hidden"
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
          <div className="inline-block rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-800 dark:text-green-300 mb-4">
            Innovation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-600 dark:from-green-400 dark:to-green-200">
            Innovation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm group-hover:bg-green-900/60 transition-all duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <Lightbulb className="h-10 w-10 text-green-200 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Creative Problem Solving</h3>
                <p className="text-green-100">
                  We encourage innovative thinking and creative approaches to address complex challenges in our
                  communities.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm group-hover:bg-green-900/60 transition-all duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <Rocket className="h-10 w-10 text-green-200 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Entrepreneurship</h3>
                <p className="text-green-100">
                  We support student-led ventures and initiatives that have the potential to create positive social
                  impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm group-hover:bg-green-900/60 transition-all duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <Zap className="h-10 w-10 text-green-200 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Technology Integration</h3>
                <p className="text-green-100">
                  We leverage cutting-edge technologies to enhance learning experiences and develop innovative
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              }}
            ></div>
            <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm group-hover:bg-green-900/60 transition-all duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <Globe className="h-10 w-10 text-green-200 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Global Collaboration</h3>
                <p className="text-green-100">
                  We foster partnerships with organizations worldwide to exchange ideas and develop innovative
                  approaches.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
