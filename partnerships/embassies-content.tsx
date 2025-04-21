"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, MapPin, ArrowRight } from "lucide-react"

interface Embassy {
  name: string
  country: string
  flagUrl: string
  flagEmoji: string
  description: string
  address: string
  website: string
  color: string
  hoverColor: string
  borderColor: string
  textColor: string
  bgColor: string
  textColorClass: string
  backgroundImage: string
}

export function EmbassiesContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [embassies, setEmbassies] = useState<Embassy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, this would be an API call
    // For demonstration, we're using a simulated async fetch
    const fetchEmbassies = async () => {
      setLoading(true)

      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const embassyData: Embassy[] = [
        {
          name: "Embassy of the United States",
          country: "United States",
          flagUrl: "https://flagcdn.com/w320/us.png",
          flagEmoji: "🇺🇸",
          description:
            "The U.S. Embassy in Ethiopia works to strengthen the relationship between the United States and Ethiopia through diplomatic, development, and cultural initiatives.",
          address: "Entoto Street, Addis Ababa",
          website: "https://et.usembassy.gov/",
          color: "bg-blue-50 dark:bg-blue-950/30",
          hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-700 dark:text-blue-300",
          bgColor: "bg-blue-600",
          textColorClass: "text-white",
          backgroundImage: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=2071",
        },
        {
          name: "Embassy of the Russian Federation",
          country: "Russia",
          flagUrl: "https://flagcdn.com/w320/ru.png",
          flagEmoji: "🇷🇺",
          description:
            "The Russian Embassy in Ethiopia represents Russian interests and provides consular services to Russian citizens in Ethiopia.",
          address: "Yeka Sub-City, Addis Ababa",
          website: "https://ethiopia.mid.ru/en/",
          color: "bg-red-50 dark:bg-red-950/30",
          hoverColor: "group-hover:bg-red-100 dark:group-hover:bg-red-900/40",
          borderColor: "border-red-200 dark:border-red-800",
          textColor: "text-red-700 dark:text-red-300",
          bgColor: "bg-red-600",
          textColorClass: "text-white",
          backgroundImage: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=2070",
        },
        {
          name: "Embassy of the Federal Republic of Germany",
          country: "Germany",
          flagUrl: "https://flagcdn.com/w320/de.png",
          flagEmoji: "🇩🇪",
          description:
            "The German Embassy promotes bilateral relations between Germany and Ethiopia, focusing on development cooperation, economic partnerships, and cultural exchange.",
          address: "Kazanchis, Addis Ababa",
          website: "https://addis-abeba.diplo.de/et-en",
          color: "bg-yellow-50 dark:bg-yellow-950/30",
          hoverColor: "group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/40",
          borderColor: "border-yellow-200 dark:border-yellow-800",
          textColor: "text-yellow-700 dark:text-yellow-300",
          bgColor: "bg-yellow-400",
          textColorClass: "text-black",
          backgroundImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070",
        },
        {
          name: "Embassy of Belgium",
          country: "Belgium",
          flagUrl: "https://flagcdn.com/w320/be.png",
          flagEmoji: "🇧🇪",
          description:
            "The Belgian Embassy works to strengthen ties between Belgium and Ethiopia through diplomatic relations, development cooperation, and cultural exchanges.",
          address: "Kazanchis, Addis Ababa",
          website: "https://ethiopia.diplomatie.belgium.be/en",
          color: "bg-amber-50 dark:bg-amber-950/30",
          hoverColor: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40",
          borderColor: "border-amber-200 dark:border-amber-800",
          textColor: "text-amber-700 dark:text-amber-300",
          bgColor: "bg-amber-400",
          textColorClass: "text-black",
          backgroundImage: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070",
        },
        {
          name: "Embassy of the Republic of Turkey",
          country: "Turkey",
          flagUrl: "https://flagcdn.com/w320/tr.png",
          flagEmoji: "🇹🇷",
          description:
            "The Turkish Embassy promotes diplomatic, economic, and cultural relations between Turkey and Ethiopia, supporting various development projects.",
          address: "Bole Sub-City, Addis Ababa",
          website: "http://addisababa.emb.mfa.gov.tr/",
          color: "bg-red-50 dark:bg-red-950/30",
          hoverColor: "group-hover:bg-red-100 dark:group-hover:bg-red-900/40",
          borderColor: "border-red-200 dark:border-red-800",
          textColor: "text-red-700 dark:text-red-300",
          bgColor: "bg-red-600",
          textColorClass: "text-white",
          backgroundImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071",
        },
        {
          name: "Embassy of the Kingdom of Morocco",
          country: "Morocco",
          flagUrl: "https://flagcdn.com/w320/ma.png",
          flagEmoji: "🇲🇦",
          description:
            "The Moroccan Embassy represents Morocco's interests in Ethiopia and works to strengthen bilateral relations between the two countries.",
          address: "Old Airport Area, Addis Ababa",
          website: "#",
          color: "bg-green-50 dark:bg-green-950/30",
          hoverColor: "group-hover:bg-green-100 dark:group-hover:bg-green-900/40",
          borderColor: "border-green-200 dark:border-green-800",
          textColor: "text-green-700 dark:text-green-300",
          bgColor: "bg-green-600",
          textColorClass: "text-white",
          backgroundImage: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=2070",
        },
        {
          name: "Royal Danish Embassy",
          country: "Denmark",
          flagUrl: "https://flagcdn.com/w320/dk.png",
          flagEmoji: "🇩🇰",
          description:
            "The Danish Embassy focuses on development cooperation, green growth, and sustainable development in its partnership with Ethiopia.",
          address: "Kirkos Sub-City, Addis Ababa",
          website: "https://etiopien.um.dk/en",
          color: "bg-red-50 dark:bg-red-950/30",
          hoverColor: "group-hover:bg-red-100 dark:group-hover:bg-red-900/40",
          borderColor: "border-red-200 dark:border-red-800",
          textColor: "text-red-700 dark:text-red-300",
          bgColor: "bg-red-600",
          textColorClass: "text-white",
          backgroundImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070",
        },
      ]

      setEmbassies(embassyData)
      setLoading(false)
    }

    fetchEmbassies()
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
          <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <Globe className="mr-1 h-4 w-4" />
            Diplomatic Partners
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Embassy Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We collaborate with embassies in Ethiopia to promote international cooperation, cultural exchange, and
            educational opportunities.
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
            {embassies.map((embassy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full ${embassy.borderColor}`}
                >
                  <div className={`p-6 flex items-center justify-center transition-colors duration-300 h-48 relative`}>
                    <Image
                      src={embassy.backgroundImage || "/placeholder.svg"}
                      alt={`${embassy.name} background`}
                      fill
                      className="object-cover opacity-20"
                    />
                    <div className={`absolute inset-0 ${embassy.color} ${embassy.hoverColor}`}></div>
                    <div className="w-40 h-40 flex items-center justify-center relative z-10">
                      <div
                        className={`w-32 h-32 flex items-center justify-center rounded-lg shadow-md overflow-hidden`}
                      >
                        <Image
                          src={embassy.flagUrl || "/placeholder.svg"}
                          alt={`Flag of ${embassy.country}`}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full overflow-hidden`}>
                        <Image
                          src={embassy.flagUrl || "/placeholder.svg"}
                          alt={`Flag of ${embassy.country}`}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                      <span className={`text-sm font-medium ${embassy.textColor}`}>{embassy.country}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{embassy.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{embassy.description}</p>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{embassy.address}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={`mt-auto group/btn ${embassy.borderColor} ${embassy.textColor}`}
                    >
                      <Link href={embassy.website} target="_blank" rel="noopener noreferrer">
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
          <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">International Cooperation</h3>
            <p className="mx-auto max-w-[700px] text-gray-500 mb-8 dark:text-gray-400">
              Our partnerships with embassies enable us to create international opportunities for students, including
              exchange programs, internships, and cultural events that broaden horizons and build global competencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
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
