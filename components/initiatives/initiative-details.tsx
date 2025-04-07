"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ContentSection {
  title: string
  text: string
}

interface RelatedInitiative {
  name: string
  link: string
}

interface InitiativeDetailsProps {
  description: string
  content: ContentSection[]
  badges: string[]
  relatedInitiatives: RelatedInitiative[]
}

export function InitiativeDetails({ description, content, badges, relatedInitiatives }: InitiativeDetailsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8">{description}</p>

            <div className="space-y-12">
              {content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground">{section.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-100 dark:border-blue-900/50">
              <h3 className="text-xl font-bold mb-4">Related Initiatives</h3>
              <p className="text-muted-foreground mb-6">
                Explore other initiatives that complement this program and further our mission.
              </p>

              <div className="flex flex-wrap gap-4">
                {relatedInitiatives.map((initiative, index) => (
                  <Button key={index} asChild variant="outline" className="group">
                    <Link href={initiative.link}>
                      {initiative.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

