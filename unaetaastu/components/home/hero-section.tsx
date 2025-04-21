"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "UNA-ET AASTU Chapter",
      subtitle:
        "Empowering students to engage with global issues and develop leadership skills through the United Nations framework",
      cta: "Join Us",
      ctaLink: "/get-involved",
      image:
        "https://images.unsplash.com/photo-1536181783029-1097aaf179de?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Global Citizenship",
      subtitle:
        "Fostering a sense of global citizenship among students, helping them understand international relations and cooperation",
      cta: "Learn More",
      ctaLink: "/about",
      image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2074",
    },
    {
      title: "Sustainable Development",
      subtitle:
        "Working together to advance the UN's Sustainable Development Goals through innovation and community engagement",
      cta: "Our Initiatives",
      ctaLink: "/initiatives",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-700/50 z-10"
        ></motion.div>

        <motion.div
          key={`img-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <div className="relative inline-block">
                    <div className="relative bg-background/10 backdrop-blur-sm px-4 py-1 rounded-lg text-white text-sm font-medium">
                      United Nations Association of Ethiopia
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{slides[currentSlide].subtitle}</p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button asChild size="lg" className="rounded-full group bg-white text-blue-900 hover:bg-white/90">
                      <Link href={slides[currentSlide].ctaLink}>
                        {slides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-full bg-transparent border-white text-white hover:bg-white/10"
                    >
                      <Link href="/about">About Us</Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="mt-4"
        >
          <Link
            href="#about-preview"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium mb-1">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
