"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Globe, BookOpen, Users, ExternalLink, ArrowRight } from "lucide-react"

export function UniversityPartnersContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Updated university partners data with images
  const universityPartners = [
    {
      name: "Addis Ababa University",
      description:
        "Ethiopia's oldest and largest higher education institution, collaborating on research and student exchange programs.",
      logo: <Building2 className="h-12 w-12 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2066",
      partnership: "Research collaboration, student exchange, joint conferences",
      website: "#",
      color: "bg-blue-50 dark:bg-blue-950/30",
      hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
      borderColor: "border-blue-200 dark:border-blue-800",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      name: "Addis Ababa Science and Technology University",
      description: "Our host institution providing facilities, academic support, and resources for our initiatives.",
      logo: <GraduationCap className="h-12 w-12 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2070",
      partnership: "Host institution, academic support, resource sharing",
      website: "#",
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      hoverColor: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      textColor: "text-emerald-700 dark:text-emerald-300",
    },
    {
      name: "New Generation University",
      description: "Partner in innovative educational approaches and entrepreneurship development programs.",
      logo: <Globe className="h-12 w-12 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070",
      partnership: "Educational innovation, entrepreneurship programs",
      website: "#",
      color: "bg-purple-50 dark:bg-purple-950/30",
      hoverColor: "group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40",
      borderColor: "border-purple-200 dark:border-purple-800",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      name: "Jimma University",
      description: "Collaboration on health and social welfare programs aligned with UN Sustainable Development Goals.",
      logo: <BookOpen className="h-12 w-12 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070",
      partnership: "Health programs, social welfare initiatives",
      website: "#",
      color: "bg-amber-50 dark:bg-amber-950/30",
      hoverColor: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40",
      borderColor: "border-amber-200 dark:border-amber-800",
      textColor: "text-amber-700 dark:text-amber-300",
    },
    {
      name: "Hawassa University",
      description:
        "Joint agricultural and rural development programs focusing on food security and sustainable farming.",
      logo: <Users className="h-12 w-12 text-cyan-600" />,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071",
      partnership: "Agricultural programs, rural development initiatives",
      website: "#",
      color: "bg-cyan-50 dark:bg-cyan-950/30",
      hoverColor: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      textColor: "text-cyan-700 dark:text-cyan-300",
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
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <GraduationCap className="mr-1 h-4 w-4" />
            Academic Institutions
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">University Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            UNA-ET AASTU Chapter collaborates with universities across Ethiopia to advance education, research, and
            implementation of the UN Sustainable Development Goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universityPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full border ${partner.borderColor}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      {partner.logo}
                    </div>
                    <span className="text-white font-medium">{partner.name}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-sm mb-2 font-medium">
                    Partnership: {partner.partnership}
                  </CardDescription>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">{partner.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`mt-auto group/btn ${partner.borderColor} ${partner.textColor}`}
                  >
                    <Link href={partner.website}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interested in University Partnership?</h3>
            <p className="mx-auto max-w-[700px] text-gray-500 mb-8 dark:text-gray-400">
              We are always looking to expand our network of university partners. If your institution is interested in
              collaborating with UNA-ET AASTU Chapter on initiatives related to the UN Sustainable Development Goals,
              please reach out to our partnerships team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/partnerships/join">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/get-involved">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
