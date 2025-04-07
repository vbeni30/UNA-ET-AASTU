"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function PartnersList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("university")

  const partners = {
    university: [
      {
        name: "VP Administration and Development",
        logo: "/placeholder.svg?height=100&width=200&text=VP+Admin",
        description: "Supports the chapter's administrative needs and development initiatives.",
      },
      {
        name: "VP Academic Affairs",
        logo: "/placeholder.svg?height=100&width=200&text=VP+Academic",
        description: "Helps integrate chapter activities with academic curriculum and programs.",
      },
      {
        name: "VP Research and Technology Transfer",
        logo: "/placeholder.svg?height=100&width=200&text=VP+Research",
        description: "Collaborates on research initiatives related to sustainable development.",
      },
      {
        name: "Department of Engineering",
        logo: "/placeholder.svg?height=100&width=200&text=Engineering",
        description: "Partners on technical solutions for sustainable development challenges.",
      },
    ],
    student: [
      {
        name: "Engineering Students Association",
        logo: "/placeholder.svg?height=100&width=200&text=ESA",
        description: "Collaborates on technical workshops and SDG-focused hackathons.",
      },
      {
        name: "Innovation Club",
        logo: "/placeholder.svg?height=100&width=200&text=Innovation",
        description: "Partners on creative solutions to global challenges.",
      },
      {
        name: "Debate Society",
        logo: "/placeholder.svg?height=100&width=200&text=Debate",
        description: "Helps prepare students for Model UN and diplomatic simulations.",
      },
      {
        name: "Volunteer Club",
        logo: "/placeholder.svg?height=100&width=200&text=Volunteer",
        description: "Supports community outreach and service initiatives.",
      },
      {
        name: "Environmental Club",
        logo: "/placeholder.svg?height=100&width=200&text=Environment",
        description: "Collaborates on environmental awareness and sustainability projects.",
      },
    ],
    external: [
      {
        name: "United Nations Association of Ethiopia",
        logo: "/placeholder.svg?height=100&width=200&text=UNA-ET",
        description: "Our parent organization that provides guidance and resources.",
      },
      {
        name: "Ethiopian Sustainability Network",
        logo: "/placeholder.svg?height=100&width=200&text=ESN",
        description: "Network of organizations focused on sustainable development in Ethiopia.",
      },
      {
        name: "Education for All Ethiopia",
        logo: "/placeholder.svg?height=100&width=200&text=EFE",
        description: "Partners on educational access and equality initiatives.",
      },
      {
        name: "Ministry of Science and Higher Education",
        logo: "/placeholder.svg?height=100&width=200&text=MoSHE",
        description: "Government partner supporting higher education initiatives.",
      },
    ],
  }

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
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Network
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Partnership Network
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            We collaborate with university departments, student organizations, and external partners to enhance our
            impact.
          </p>
        </motion.div>

        <Tabs
          defaultValue="university"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto"
        >
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {partnerList.map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="flex flex-col h-full items-center justify-center p-6 bg-background/80 backdrop-blur-sm hover:shadow-md transition-shadow duration-300 border-blue-100 dark:border-blue-900/30 group">
                        <CardContent className="flex flex-col items-center justify-center p-0">
                          <div className="relative h-16 w-full mb-4 transition-transform duration-300 group-hover:scale-105">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-center font-medium text-sm mb-2">{partner.name}</h3>
                          <p className="text-xs text-muted-foreground text-center">{partner.description}</p>
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
                        ? "Partnering with these groups helps bridge technical skills and global awareness, leading to impactful joint initiatives like SDG-focused hackathons."
                        : "We connect with local NGOs and government bodies working in areas such as sustainability and education to amplify our community outreach efforts."}
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

