"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Partnerships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = {
    university: [
      { name: "VP Administration and Development", logo: "/placeholder.svg?height=100&width=200" },
      { name: "VP Academic Affairs", logo: "/placeholder.svg?height=100&width=200" },
      { name: "VP Research and Technology Transfer", logo: "/placeholder.svg?height=100&width=200" },
    ],
    student: [
      { name: "Engineering Students Association", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Innovation Club", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Debate Society", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Volunteer Club", logo: "/placeholder.svg?height=100&width=200" },
    ],
    external: [
      { name: "United Nations Association of Ethiopia", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Ethiopian Sustainability Network", logo: "/placeholder.svg?height=100&width=200" },
      { name: "Education for All Ethiopia", logo: "/placeholder.svg?height=100&width=200" },
    ],
  }

  return (
    <section
      id="partnerships"
      className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Collaborations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Our Partnerships
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            We collaborate with university departments, student organizations, and external partners to enhance our
            impact.
          </p>
        </motion.div>

        <Tabs defaultValue="university" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="university">University</TabsTrigger>
            <TabsTrigger value="student">Student Organizations</TabsTrigger>
            <TabsTrigger value="external">External Partners</TabsTrigger>
          </TabsList>

          {Object.entries(partners).map(([category, partnerList]) => (
            <TabsContent key={category} value={category} className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {partnerList.map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="flex flex-col items-center justify-center p-6 h-full bg-background/80 backdrop-blur-sm hover:shadow-md transition-shadow duration-300 border-blue-100 dark:border-blue-900/30 group">
                        <CardContent className="flex flex-col items-center justify-center p-0">
                          <div className="relative h-16 w-full mb-4 transition-transform duration-300 group-hover:scale-105">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-center font-medium text-sm">{partner.name}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {category === "university"
                      ? "Our chapter collaborates with key university offices to align our initiatives with the university's vision of fostering innovation, research, and extracurricular engagement."
                      : category === "student"
                        ? "Partnering with these groups will help bridge technical skills and global awareness, leading to impactful joint initiatives like SDG-focused hackathons."
                        : "We connect with local NGOs working in areas such as sustainability and education to amplify our community outreach efforts."}
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
          <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-100 dark:border-blue-900/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  Strategic Partnerships
                </h3>
                <p className="text-muted-foreground mb-6">
                  Beyond the university and NGOs, we explore partnerships with companies focused on sustainability,
                  technology, or innovation. This can provide students with real-world exposure and internships, while
                  giving companies access to a talented pool of problem-solvers.
                </p>
                <Button asChild className="rounded-full group">
                  <Link href="#">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-xl"></div>
                <Image src="/placeholder.svg?height=400&width=600" alt="Partnership" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 z-20">
                  <p className="text-white text-lg font-medium">Building impactful collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

