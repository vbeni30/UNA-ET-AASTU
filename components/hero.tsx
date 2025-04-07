"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const slides = [
    {
      title: "UNA-ET AASTU Chapter",
      subtitle:
        "Empowering students to engage with global issues and develop leadership skills through the United Nations framework",
      cta: "Join Us",
      ctaLink: "#get-involved",
    },
    {
      title: "Global Citizenship",
      subtitle:
        "Fostering a sense of global citizenship among students, helping them understand international relations and cooperation",
      cta: "Learn More",
      ctaLink: "#about",
    },
    {
      title: "Sustainable Development",
      subtitle:
        "Working together to advance the UN's Sustainable Development Goals through innovation and community engagement",
      cta: "Our Initiatives",
      ctaLink: "#initiatives",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section ref={containerRef} className="w-full h-screen relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70 z-10"></div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-10"></div>

      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        style={{ y, opacity }}
      />

      <div className="absolute inset-0 z-20">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              {slides.map((slide, index) => (
                <div key={index} className={currentSlide === index ? "block" : "hidden"}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                  >
                    {/* Badge with enhanced design */}
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-r from-un-blue to-un-lightblue rounded-lg blur opacity-30"></div>
                      <div className="relative glass px-4 py-1.5 rounded-full text-white text-sm font-medium">
                        United Nations Association of Ethiopia
                      </div>
                    </div>

                    {/* Title with enhanced typography */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle with improved readability */}
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">
                      {slide.subtitle}
                    </p>

                    {/* CTA buttons with enhanced design */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full group bg-white text-un-darkblue hover:bg-white/90 hover:shadow-glow transition-all duration-300"
                      >
                        <Link href={slide.ctaLink}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
                      >
                        <Link href="#about">About Us</Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced slide indicators and scroll prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-10 shadow-glow" : "bg-white/50 w-3 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="mt-6"
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium mb-1 group-hover:underline">Scroll Down</span>
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ChevronDown className="h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Gradient overlay at the top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
    </section>
  )
}

