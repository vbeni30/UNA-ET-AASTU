"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Landmark, ArrowRight, Building, Users, BookOpen } from "lucide-react"

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
          logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069",
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
          logoUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
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
          name: "World Health Organization",
          abbreviation: "WHO",
          description:
            "Directing and coordinating authority on international health within the United Nations system, leading global efforts to promote health and well-being.",
          logoUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070",
          logoAlt: "WHO Logo",
          link: "https://www.who.int/",
          color: "bg-teal-50 dark:bg-teal-950/30",
          hoverColor: "group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40",
          borderColor: "border-teal-200 dark:border-teal-800",
          textColor: "text-teal-700 dark:text-teal-300",
          brandColor: "#0093d5",
          backgroundImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2032",
        },
        {
          name: "United Nations Educational, Scientific and Cultural Organization",
          abbreviation: "UNESCO",
          description:
            "Building peace through international cooperation in Education, the Sciences and Culture to further universal respect for justice and human rights.",
          logoUrl: "https://images.unsplash.com/photo-1544298621-30ca38ff2f4d?q=80&w=2070",
          logoAlt: "UNESCO Logo",
          link: "https://www.unesco.org/",
          color: "bg-indigo-50 dark:bg-indigo-950/30",
          hoverColor: "group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40",
          borderColor: "border-indigo-200 dark:border-indigo-800",
          textColor: "text-indigo-700 dark:text-indigo-300",
          brandColor: "#1e50a0",
          backgroundImage: "https://images.unsplash.com/photo-1544298621-30ca38ff2f4d?q=80&w=2070",
        },
        {
          name: "United Nations High Commissioner for Refugees",
          abbreviation: "UNHCR",
          description:
            "Leading international organization dedicated to saving lives, protecting rights and building a better future for refugees and forcibly displaced communities.",
          logoUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070",
          logoAlt: "UNHCR Logo",
          link: "https://www.unhcr.org/",
          color: "bg-blue-50 dark:bg-blue-950/30",
          hoverColor: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-700 dark:text-blue-300",
          brandColor: "#0072bc",
          backgroundImage: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070",
        },
        {
          name: "United Nations Environment Programme",
          abbreviation: "UNEP",
          description:
            "Leading global environmental authority that sets the global environmental agenda and promotes sustainable development within the United Nations system.",
          logoUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074",
          logoAlt: "UNEP Logo",
          link: "https://www.unep.org/",
          color: "bg-green-50 dark:bg-green-950/30",
          hoverColor: "group-hover:bg-green-100 dark:group-hover:bg-green-900/40",
          borderColor: "border-green-200 dark:border-green-800",
          textColor: "text-green-700 dark:text-green-300",
          brandColor: "#00a651",
          backgroundImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074",
        },
        {
          name: "World Food Programme",
          abbreviation: "WFP",
          description:
            "Leading humanitarian organization saving lives and changing lives, delivering food assistance in emergencies and working with communities to improve nutrition.",
          logoUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
          logoAlt: "WFP Logo",
          link: "https://www.wfp.org/",
          color: "bg-orange-50 dark:bg-orange-950/30",
          hoverColor: "group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40",
          borderColor: "border-orange-200 dark:border-orange-800",
          textColor: "text-orange-700 dark:text-orange-300",
          brandColor: "#0a6eb4",
          backgroundImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
        },
        {
          name: "International Labour Organization",
          abbreviation: "ILO",
          description:
            "Promoting social justice and internationally recognized human and labour rights, pursuing its founding mission that social justice is essential to universal and lasting peace.",
          logoUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
          logoAlt: "ILO Logo",
          link: "https://www.ilo.org/",
          color: "bg-yellow-50 dark:bg-yellow-950/30",
          hoverColor: "group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/40",
          borderColor: "border-yellow-200 dark:border-yellow-800",
          textColor: "text-yellow-700 dark:text-yellow-300",
          brandColor: "#009edb",
          backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
        },
        {
          name: "United Nations Population Fund",
          abbreviation: "UNFPA",
          description:
            "Sexual and reproductive health agency, delivering a world where every pregnancy is wanted, every childbirth is safe and every young person's potential is fulfilled.",
          logoUrl: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2074",
          logoAlt: "UNFPA Logo",
          link: "https://www.unfpa.org/",
          color: "bg-purple-50 dark:bg-purple-950/30",
          hoverColor: "group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40",
          borderColor: "border-purple-200 dark:border-purple-800",
          textColor: "text-purple-700 dark:text-purple-300",
          brandColor: "#ff671f",
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
            {[...Array(9)].map((_, index) => (
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
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md bg-white p-2">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-700">{agency.abbreviation}</span>
                          </div>
                        </div>
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
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Cooperation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our partnerships with UN agencies enable us to connect local initiatives with global frameworks,
                ensuring our work contributes to the SDGs.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Institutional Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We receive technical assistance, capacity building, and resources from our UN agency partners to
                strengthen our programs.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Knowledge Exchange</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Through our UN partnerships, we participate in knowledge sharing networks and gain access to global best
                practices.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=2074"
                  alt="UN Partnership"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-cyan-600" />
                    </div>
                    <span className="text-white font-medium">Partnership Guide</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Join Our Global Network</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Our partnerships with UN agencies and international organizations enable us to connect local
                  initiatives with global frameworks, ensuring that our work contributes to the achievement of the
                  Sustainable Development Goals and other international priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
