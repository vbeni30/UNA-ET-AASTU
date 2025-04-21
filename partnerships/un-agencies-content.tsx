"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Landmark, ArrowRight } from "lucide-react"

interface UNAgency {
  name: string
  abbreviation: string
  description: string
  logoUrl: string
  logoAlt: string
  link: string
  color: string
  hoverColor: string
  borderColor: string
  textColor: string
  brandColor: string
  backgroundImage: string
}

export function UNAgenciesContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [agencies, setAgencies] = useState<UNAgency[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would be an API call
    // For demonstration, we're using a simulated async fetch
    const fetchAgencies = async () => {
      setLoading(true)

      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const agencyData: UNAgency[] = [
        {
          name: "United Nations Development Programme",
          abbreviation: "UNDP",
          description:
            "Working to eradicate poverty, reduce inequalities and build resilience so countries can sustain progress.",
          logoUrl: "https://images.seeklogo.com/logo-png/32/2/undp-logo-png_seeklogo-322648.png",
          logoAlt: "UNDP Logo",
          link: "https://www.undp.org/",
          color: "bg-blue-50 dark:bg-blue-950/30",
          hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-700 dark:text-blue-300",
          brandColor: "#0057b7",
          backgroundImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069",
        },
        {
          name: "United Nations Children's Fund",
          abbreviation: "UNICEF",
          description:
            "Working in over 190 countries and territories to save children's lives, defend their rights, and help them fulfill their potential.",
          logoUrl: "https://images.seeklogo.com/logo-png/14/1/unicef-logo-png_seeklogo-144974.png",
          logoAlt: "UNICEF Logo",
          link: "https://www.unicef.org/",
          color: "bg-cyan-50 dark:bg-cyan-950/30",
          hoverColor: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40",
          borderColor: "border-cyan-200 dark:border-cyan-800",
          textColor: "text-cyan-700 dark:text-cyan-300",
          brandColor: "#00aeef",
          backgroundImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
        },
        {
          name: "African Union",
          abbreviation: "AU",
          description:
            "Continental body consisting of 55 member states that promotes integration and development of Africa.",
          logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA69m36XiI42NHYm183I40Ig3ITHoaYdljA&s",
          logoAlt: "African Union Logo",
          link: "https://au.int/",
          color: "bg-green-50 dark:bg-green-950/30",
          hoverColor: "group-hover:bg-green-100 dark:group-hover:bg-green-900/40",
          borderColor: "border-green-200 dark:border-green-800",
          textColor: "text-green-700 dark:text-green-300",
          brandColor: "#3d8c40",
          backgroundImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2074",
        },
        {
          name: "European Union",
          abbreviation: "EU",
          description:
            "Political and economic union of 27 member states that are located primarily in Europe, supporting global development.",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
          logoAlt: "European Union Logo",
          link: "https://european-union.europa.eu/",
          color: "bg-yellow-50 dark:bg-yellow-950/30",
          hoverColor: "group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/40",
          borderColor: "border-yellow-200 dark:border-yellow-800",
          textColor: "text-yellow-700 dark:text-yellow-300",
          brandColor: "#003399",
          backgroundImage: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070",
        },
        {
          name: "United Nations",
          abbreviation: "UN",
          description:
            "International organization founded in 1945 to maintain international peace and security and promote sustainable development.",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png",
          logoAlt: "United Nations Logo",
          link: "https://www.un.org/",
          color: "bg-blue-50 dark:bg-blue-950/30",
          hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-700 dark:text-blue-300",
          brandColor: "#009edb",
          backgroundImage: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070",
        },
        {
          name: "United Nations Association",
          abbreviation: "UNA",
          description:
            "Grassroots movement dedicated to supporting the principles and vital work of the United Nations.",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/1200px-UN_emblem_blue.svg.png",
          logoAlt: "United Nations Association Logo",
          link: "https://www.una.org.uk/",
          color: "bg-cyan-50 dark:bg-cyan-950/30",
          hoverColor: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40",
          borderColor: "border-cyan-200 dark:border-cyan-800",
          textColor: "text-cyan-700 dark:text-cyan-300",
          brandColor: "#00adef",
          backgroundImage: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2074",
        },
      ]

      setAgencies(agencyData)
      setLoading(false)
    }

    fetchAgencies()
  }, [])

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
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4">
            <Globe className="mr-1 h-4 w-4" />
            International Organizations
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UN Agency Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We work closely with United Nations agencies and international organizations to advance global goals and
            create positive impact.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-[450px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencies.map((agency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full ${agency.borderColor}`}
                >
                  <div className={`p-6 flex items-center justify-center transition-colors duration-300 h-48 relative`}>
                    <Image
                      src={agency.backgroundImage || "/placeholder.svg"}
                      alt={`${agency.name} background`}
                      fill
                      className="object-cover opacity-20"
                    />
                    <div className={`absolute inset-0 ${agency.color} ${agency.hoverColor}`}></div>
                    <div className="w-40 h-40 flex items-center justify-center relative z-10">
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md bg-white">
                        <Image
                          src={agency.logoUrl || "/placeholder.svg"}
                          alt={agency.logoAlt}
                          width={128}
                          height={128}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: agency.brandColor }}
                      >
                        <span className="text-xs font-bold">{agency.abbreviation}</span>
                      </div>
                      <span className={`text-sm font-medium ${agency.textColor}`}>{agency.abbreviation}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{agency.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">{agency.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`mt-auto group/btn ${agency.borderColor} ${agency.textColor}`}
                    >
                      <Link href={agency.link} target="_blank" rel="noopener noreferrer">
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
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Landmark className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Cooperation</h3>
            <p className="mx-auto max-w-[700px] text-gray-500 mb-8 dark:text-gray-400">
              Our partnerships with UN agencies and international organizations enable us to connect local initiatives
              with global frameworks, ensuring that our work contributes to the achievement of the Sustainable
              Development Goals and other international priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
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
