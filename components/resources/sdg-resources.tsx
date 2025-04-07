"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SdgResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("overview")

  const sdgs = [
    {
      number: 1,
      name: "No Poverty",
      color: "#e5243b",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg",
      description: "End poverty in all its forms everywhere",
    },
    {
      number: 2,
      name: "Zero Hunger",
      color: "#DDA63A",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
      description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    },
    {
      number: 3,
      name: "Good Health and Well-being",
      color: "#4C9F38",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg",
      description: "Ensure healthy lives and promote well-being for all at all ages",
    },
    {
      number: 4,
      name: "Quality Education",
      color: "#C5192D",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    },
    {
      number: 5,
      name: "Gender Equality",
      color: "#FF3A21",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
      description: "Achieve gender equality and empower all women and girls",
    },
    {
      number: 6,
      name: "Clean Water and Sanitation",
      color: "#26BDE2",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
      description: "Ensure availability and sustainable management of water and sanitation for all",
    },
    {
      number: 7,
      name: "Affordable and Clean Energy",
      color: "#FCC30B",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    },
    {
      number: 8,
      name: "Decent Work and Economic Growth",
      color: "#A21942",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
      description:
        "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    },
    {
      number: 9,
      name: "Industry, Innovation and Infrastructure",
      color: "#FD6925",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
      description:
        "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    },
    {
      number: 10,
      name: "Reduced Inequality",
      color: "#DD1367",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
      description: "Reduce inequality within and among countries",
    },
    {
      number: 11,
      name: "Sustainable Cities and Communities",
      color: "#FD9D24",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    },
    {
      number: 12,
      name: "Responsible Consumption and Production",
      color: "#BF8B2E",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
      description: "Ensure sustainable consumption and production patterns",
    },
    {
      number: 13,
      name: "Climate Action",
      color: "#3F7E44",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
      description: "Take urgent action to combat climate change and its impacts",
    },
    {
      number: 14,
      name: "Life Below Water",
      color: "#0A97D9",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    },
    {
      number: 15,
      name: "Life on Land",
      color: "#56C02B",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg",
      description:
        "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    },
    {
      number: 16,
      name: "Peace, Justice and Strong Institutions",
      color: "#00689D",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
    },
    {
      number: 17,
      name: "Partnerships for the Goals",
      color: "#19486A",
      icon: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
      description:
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
    },
  ]

  const resources = [
    {
      title: "SDG Overview Guide",
      description: "Comprehensive introduction to all 17 Sustainable Development Goals",
      type: "PDF",
      link: "#",
    },
    {
      title: "SDG Action Toolkit",
      description: "Practical tools and resources for implementing SDG-focused projects",
      type: "PDF",
      link: "#",
    },
    {
      title: "SDG Indicators Framework",
      description: "Detailed framework for measuring progress on the SDGs",
      type: "PDF",
      link: "#",
    },
    {
      title: "SDG in Ethiopia Report",
      description: "Analysis of Ethiopia's progress on the Sustainable Development Goals",
      type: "PDF",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Sustainable Development Goals
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            The 17 Sustainable Development Goals (SDGs) are an urgent call for action by all countries in a global
            partnership. They recognize that ending poverty must go hand-in-hand with strategies that improve health and
            education, reduce inequality, and spur economic growth – all while tackling climate change and working to
            preserve our oceans and forests.
          </p>
        </motion.div>

        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto mb-16"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">The 17 Goals</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What are the SDGs?</h3>
                  <p className="text-muted-foreground mb-4">
                    The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United
                    Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by
                    2030 all people enjoy peace and prosperity.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The 17 SDGs are integrated—they recognize that action in one area will affect outcomes in others,
                    and that development must balance social, economic and environmental sustainability.
                  </p>
                  <p className="text-muted-foreground">
                    Countries have committed to prioritize progress for those who're furthest behind. The SDGs are
                    designed to end poverty, hunger, AIDS, and discrimination against women and girls.
                  </p>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=2070"
                    alt="Sustainable Development Goals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Key Principles of the SDGs</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Universal</h4>
                    <p className="text-sm text-muted-foreground">
                      The SDGs apply to all countries, regardless of their level of development
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Integrated</h4>
                    <p className="text-sm text-muted-foreground">
                      The SDGs are interconnected and require a holistic approach
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Inclusive</h4>
                    <p className="text-sm text-muted-foreground">
                      The SDGs aim to leave no one behind and reach the furthest behind first
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="goals" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {sdgs.map((sdg) => (
                  <motion.div
                    key={sdg.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: sdg.number * 0.05 }}
                    viewport={{ once: true }}
                    id={`goal-${sdg.number}`}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-full aspect-square rounded-lg overflow-hidden mb-2 hover:shadow-lg transition-shadow duration-300"
                      style={{ backgroundColor: sdg.color }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={sdg.icon || "/placeholder.svg"}
                          alt={`SDG ${sdg.number}: ${sdg.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center font-medium">
                      {sdg.number}. {sdg.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                {sdgs.map((sdg) => (
                  <div
                    key={`details-${sdg.number}`}
                    id={`goal-${sdg.number}-details`}
                    className="p-6 border border-blue-100 dark:border-blue-900/30 rounded-xl"
                    style={{ borderLeftWidth: "4px", borderLeftColor: sdg.color }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 shrink-0 rounded-lg overflow-hidden"
                        style={{ backgroundColor: sdg.color }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={sdg.icon || "/placeholder.svg"}
                            alt={`SDG ${sdg.number}: ${sdg.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Goal {sdg.number}: {sdg.name}
                        </h3>
                        <p className="text-muted-foreground">{sdg.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button asChild variant="outline" className="group">
                  <Link href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">
                    Learn More on UN SDG Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="resources" className="focus-visible:outline-none focus-visible:ring-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <Button asChild variant="outline" className="group">
                          <Link href={resource.link}>
                            Download {resource.type}
                            <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold mb-4 text-center">Additional Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://sdgs.un.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      UN Sustainable Development Goals Official Website
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://www.undp.org/sustainable-development-goals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      UNDP Sustainable Development Goals
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    <Link
                      href="https://www.un.org/sustainabledevelopment/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      UN Department of Economic and Social Affairs - Sustainable Development
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">SDGs at AASTU</h3>
            <p className="text-center max-w-3xl mx-auto mb-6">
              At AASTU, we are committed to advancing the Sustainable Development Goals through education, research, and
              community engagement. Our UNA-ET chapter focuses particularly on SDGs related to quality education, clean
              energy, climate action, and partnerships.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 group"
              >
                <Link href="/initiatives/sdg-hackathon">
                  Learn About Our SDG Hackathon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

