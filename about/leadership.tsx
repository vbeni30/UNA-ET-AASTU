"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Lightbulb, GraduationCap } from "lucide-react"

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Executive Committee
  const president = {
    name: "Robera Berhanu",
    position: "President",
    bio: "Leads the chapter and oversees all operations and strategic initiatives.",
    image: "/images/robera-berhanu.png",
  }

  const executiveCommittee = [
    {
      name: "Hana",
      position: "Vice President of Internal Affairs",
      bio: "Manages internal operations and coordinates between different committees.",
      image: "/placeholder.svg?height=300&width=300&text=Hana",
    },
    {
      name: "Nadia",
      position: "Vice President of External Affairs",
      bio: "Handles external relationships and partnerships with other organizations.",
      image: "/placeholder.svg?height=300&width=300&text=Nadia",
    },
    {
      name: "Samir",
      position: "Secretary-General",
      bio: "Maintains records, handles correspondence, and manages administrative tasks.",
      image: "/placeholder.svg?height=300&width=300&text=Samir",
    },
    {
      name: "Elshaday",
      position: "Treasurer",
      bio: "Oversees financial operations, budgeting, and expense management.",
      image: "/placeholder.svg?height=300&width=300&text=Elshaday",
    },
  ]

  // Core Committees Chairs
  const committeeChairs = [
    {
      name: "Tsion",
      position: "Media and Communications Chair",
      bio: "Leads the media team responsible for the chapter's communications and public presence.",
      image: "/placeholder.svg?height=300&width=300&text=Tsion",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      name: "Bisrat",
      position: "Membership and Outreach Chair",
      bio: "Oversees recruitment, member engagement, and community outreach initiatives.",
      image: "/placeholder.svg?height=300&width=300&text=Bisrat",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      name: "Helen",
      position: "Events and Logistics Chair",
      bio: "Manages event planning, coordination, and logistics for all chapter activities.",
      image: "/placeholder.svg?height=300&width=300&text=Helen",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      name: "Robel",
      position: "Education and Training Chair",
      bio: "Leads educational initiatives, training programs, and skill development activities.",
      image: "/placeholder.svg?height=300&width=300&text=Robel",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
  ]

  // Advisory Board
  const advisoryBoard = {
    honorary: [
      {
        name: "Dr. Abebe Bekele",
        position: "Honorary Advisor",
        bio: "Distinguished professor with expertise in international relations and sustainable development.",
        image: "/placeholder.svg?height=300&width=300&text=Dr.+Abebe",
      },
      {
        name: "Ambassador Sarah Johnson",
        position: "Honorary Advisor",
        bio: "Former diplomat with extensive experience in UN operations and international cooperation.",
        image: "/placeholder.svg?height=300&width=300&text=Amb.+Sarah",
      },
      {
        name: "Prof. Mekonnen Tadesse",
        position: "Honorary Advisor",
        bio: "Renowned academic specializing in global governance and policy development.",
        image: "/placeholder.svg?height=300&width=300&text=Prof.+Mekonnen",
      },
    ],
    youth: {
      name: "Yared Mulugeta",
      position: "Youth Advisor",
      bio: "Young leader with significant experience in youth empowerment and advocacy programs.",
      image: "/placeholder.svg?height=300&width=300&text=Yared",
    },
    alumni: {
      name: "Bethlehem Tilahun",
      position: "Alumni Advisor",
      bio: "Former chapter member who has gone on to work with international organizations.",
      image: "/placeholder.svg?height=300&width=300&text=Bethlehem",
    },
  }

  return (
    <section id="leadership" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Leadership Structure
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Meet the dedicated team of students leading the UNA-ET AASTU Chapter and driving our mission forward.
          </p>
        </motion.div>

        {/* Executive Committee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-100">
            Executive Committee
          </h3>

          {/* President - Featured at the top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800">
                <div className="relative h-72 overflow-hidden bg-white dark:bg-gray-900 flex justify-center">
                  <div className="relative w-48 h-full">
                    <Image
                      src={president.image || "/placeholder.svg"}
                      alt={president.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/80 text-white text-sm mb-2">
                      <Award className="mr-1 h-4 w-4" />
                      Leadership
                    </div>
                    <h4 className="font-bold text-2xl">{president.name}</h4>
                    <p className="text-blue-100 text-lg mb-2">{president.position}</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">{president.bio}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Other Executive Members - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveCommittee.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-4 flex flex-col h-[calc(100%-12rem)]">
                    <h4 className="font-bold text-lg">{leader.name}</h4>
                    <p className="text-un-blue text-sm mb-2">{leader.position}</p>
                    <p className="text-sm text-muted-foreground mt-auto">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Committees Section - Only Chairs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-100">
            Core Committee Chairs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeChairs.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={chair.image || "/placeholder.svg"}
                      alt={chair.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      {chair.icon}
                    </div>
                  </div>
                  <CardContent className="pt-4 flex flex-col h-[calc(100%-12rem)]">
                    <h4 className="font-bold text-lg">{chair.name}</h4>
                    <p className="text-un-blue text-sm mb-2">{chair.position}</p>
                    <p className="text-sm text-muted-foreground mt-auto">{chair.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisory Board Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-100">
            Advisory Board
          </h3>

          {/* Honorary Advisors */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-24 mr-4"></div>
              <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 flex items-center">
                <Award className="mr-2 h-5 w-5" /> Honorary Advisors
              </h4>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-24 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryBoard.honorary.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-blue-900/30">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h4 className="font-bold text-lg">{advisor.name}</h4>
                        <p className="text-blue-100 text-sm">{advisor.position}</p>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground">{advisor.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Youth and Alumni Advisors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Youth Advisor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-16 mr-4"></div>
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" /> Youth Advisor
                </h4>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-16 ml-4"></div>
              </div>

              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-blue-900/30">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-56 md:h-auto md:w-1/3 overflow-hidden">
                    <Image
                      src={advisoryBoard.youth.image || "/placeholder.svg"}
                      alt={advisoryBoard.youth.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h4 className="font-bold text-lg">{advisoryBoard.youth.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{advisoryBoard.youth.position}</p>
                    <p className="text-muted-foreground">{advisoryBoard.youth.bio}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Alumni Advisor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-16 mr-4"></div>
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" /> Alumni Advisor
                </h4>
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent w-16 ml-4"></div>
              </div>

              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-blue-900/30">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-56 md:h-auto md:w-1/3 overflow-hidden">
                    <Image
                      src={advisoryBoard.alumni.image || "/placeholder.svg"}
                      alt={advisoryBoard.alumni.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h4 className="font-bold text-lg">{advisoryBoard.alumni.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{advisoryBoard.alumni.position}</p>
                    <p className="text-muted-foreground">{advisoryBoard.alumni.bio}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
