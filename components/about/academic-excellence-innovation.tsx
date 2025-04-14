"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Cpu, GraduationCap } from "lucide-react"

export function AcademicExcellenceInnovation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="academic-excellence-innovation"
      className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Academic Excellence and Innovation
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
              <div className="absolute inset-0 p-6 flex flex-col">
                <Award className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">First ISO Certified</h3>
                <p className="text-blue-100">First ISO certified university in Ethiopia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
              <div className="absolute inset-0 p-6 flex flex-col">
                <BookOpen className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">9/13 Departments</h3>
                <p className="text-blue-100">Nine accredited departments leading in their fields</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
              <div className="absolute inset-0 p-6 flex flex-col">
                <Cpu className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Research Leader</h3>
                <p className="text-blue-100">Leading in engineering and technological research</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
              <div className="absolute inset-0 p-6 flex flex-col">
                <GraduationCap className="h-10 w-10 text-blue-200 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Global Success</h3>
                <p className="text-blue-100">Students achieving success in global competitions</p>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex items-center justify-center p-6">
            {/* Right side content can be added here */}
          </div>
        </div>
      </div>
    </section>
  )
}
