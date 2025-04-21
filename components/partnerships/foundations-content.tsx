"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, HandHeart, ArrowRight } from "lucide-react"

export function FoundationsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const foundations = [
    {
      name: "Mastercard Foundation",
      description: "Supporting educational initiatives and youth empowerment programs across Ethiopia.",
      logo: "/placeholder.svg?height=200&width=200&text=Mastercard+Foundation",
      link: "#",
    },
    {
      name: "Bill & Melinda Gates Foundation",
      description: "Partnering on health, education, and development initiatives.",
      logo: "/placeholder.svg?height=200&width=200&text=Gates+Foundation",
      link: "#",
    },
    {
      name: "Open Society Foundations",
      description: "Supporting democratic governance and human rights initiatives.",
      logo: "/placeholder.svg?height=200&width=200&text=OSF",
      link: "#",
    },
    {
      name: "Ford Foundation",
      description: "Collaborating on social justice and equality programs.",
      logo: "/placeholder.svg?height=200&width=200&text=Ford+Foundation",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-4">
            <Heart className="mr-1 h-4 w-4" />
            NGOs & Foundations
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Foundation Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We collaborate with NGOs and foundations to amplify our impact and create positive change in our
            communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {foundations.map((foundation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full border border-orange-200 dark:border-orange-800">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 flex items-center justify-center bg-orange-50 dark:bg-orange-950/30 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 transition-colors duration-300 md:w-1/3">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                      <Heart className="h-10 w-10 text-orange-500" />
                    </div>
                  </div>
                  <CardContent className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{foundation.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">{foundation.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mt-auto group/btn border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300"
                    >
                      <Link href={foundation.link}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-lg bg-orange-50 dark:bg-orange-950/30">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <Heart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold">Philanthropic Impact</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our foundation partnerships enable us to access resources, expertise, and networks that enhance our
                ability to create sustainable impact in line with the UN Sustainable Development Goals.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-orange-50 dark:bg-orange-950/30">
            <div className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <HandHeart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Programs</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We work with foundations to design and implement programs that address critical social, economic, and
                environmental challenges in Ethiopia and beyond.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 mt-8 text-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/partnerships/join">
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
