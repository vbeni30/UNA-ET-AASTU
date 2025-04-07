"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        "Being part of UNA-ET AASTU has transformed my university experience. I've developed leadership skills and made connections that will last a lifetime.",
      name: "Abebe Kebede",
      role: "Computer Science Student, Active Member",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The Model UN program helped me understand global politics in a way classroom learning never could. It's been the highlight of my academic journey.",
      name: "Sara Hailu",
      role: "International Relations Student, Leadership Team",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Through the SDG Hackathon, I was able to apply my engineering knowledge to real-world problems. It's incredible to see how our skills can create positive change.",
      name: "Dawit Mekonnen",
      role: "Electrical Engineering Student, Project Lead",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent opacity-60"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Voices
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Member Testimonials
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Hear from our members about how UNA-ET AASTU has impacted their academic and personal growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-blue-100 dark:border-blue-900/30 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <QuoteIcon className="h-10 w-10 text-blue-200 dark:text-blue-900/50 mb-4" />
                  <p className="text-lg italic mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-blue-100 dark:border-blue-900/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

