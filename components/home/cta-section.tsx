"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-white">
            Ready to Make a Global Impact?
          </h2>
          <p className="max-w-[800px] text-white/90 md:text-xl">
            Join the UNA-ET AASTU Chapter and be part of a community dedicated to advancing the United Nations' mission
            and developing future global leaders.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button asChild size="lg" className="rounded-full group bg-white text-blue-900 hover:bg-white/90">
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

