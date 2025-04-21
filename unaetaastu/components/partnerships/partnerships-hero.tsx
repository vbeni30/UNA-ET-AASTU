"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface PartnershipsHeroProps {
  title?: string
  subtitle?: string
  image?: string
  color?: string
  type?: string
}

export function PartnershipsHero({
  title = "Our Partnerships",
  subtitle = "Collaborating with organizations around the world to create opportunities and drive positive change.",
  image,
  color = "green",
  type = "general",
}: PartnershipsHeroProps) {
  const getHeroContent = () => {
    switch (type) {
      case "student":
        return {
          title: title || "Student Organization Partners",
          description:
            subtitle ||
            "Collaborating with student organizations to create a vibrant campus community and provide leadership opportunities.",
          bgClass: "bg-gradient-to-r from-purple-600 to-indigo-700",
          btnClass: "bg-purple-600 hover:bg-purple-700",
        }
      case "embassies":
        return {
          title: title || "Embassy Partners",
          description:
            subtitle || "Working with diplomatic missions to foster international cooperation and cultural exchange.",
          bgClass: image ? "" : "bg-gradient-to-r from-green-600 to-green-700",
          btnClass: "bg-green-600 hover:bg-green-700",
          overlayClass: "bg-black/50",
        }
      case "government":
        return {
          title: title || "Government Body Partners",
          description:
            subtitle ||
            "Partnering with government institutions to advance policy initiatives and create opportunities for civic engagement.",
          bgClass: "bg-gradient-to-r from-blue-600 to-cyan-700",
          btnClass: "bg-blue-600 hover:bg-blue-700",
        }
      case "foundations":
        return {
          title: title || "Foundation Partners",
          description:
            subtitle ||
            "Collaborating with foundations to support research, scholarships, and community development projects.",
          bgClass: "bg-gradient-to-r from-amber-500 to-orange-600",
          btnClass: "bg-amber-600 hover:bg-amber-700",
        }
      case "un-agencies":
        return {
          title: title || "UN Agency Partners",
          description:
            subtitle || "Working with United Nations agencies to advance global goals and create positive impact.",
          bgClass: "bg-gradient-to-r from-cyan-600 to-blue-700",
          btnClass: "bg-cyan-600 hover:bg-cyan-700",
        }
      default:
        return {
          title: title || "Our Partnerships",
          description:
            subtitle ||
            "Collaborating with organizations around the world to create opportunities and drive positive change.",
          bgClass: "bg-gradient-to-r from-green-600 to-teal-700",
          btnClass: "bg-green-600 hover:bg-green-700",
        }
    }
  }

  const content = getHeroContent()

  return (
    <section className={`w-full py-20 md:py-32 relative overflow-hidden ${!image ? content.bgClass : ""}`}>
      {image && (
        <div className="absolute inset-0 w-full h-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill priority className="object-cover" sizes="100vw" />
          <div className={`absolute inset-0 ${content.overlayClass || "bg-black/40"}`} />
        </div>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{content.title}</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-white/80">{content.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button asChild size="lg" className={content.btnClass}>
              <Link href="/partnerships/join">
                Become a Partner
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Link href="/partnerships">View All Partnerships</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link
              href="/partnerships/student"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              Student Organizations
            </Link>
            <Link
              href="/partnerships/embassies"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              Embassies
            </Link>
            <Link
              href="/partnerships/government"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              Government Bodies
            </Link>
            <Link
              href="/partnerships/foundations"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              Foundations
            </Link>
            <Link
              href="/partnerships/un-agencies"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              UN Agencies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
