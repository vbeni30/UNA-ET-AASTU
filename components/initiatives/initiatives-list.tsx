"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function InitiativesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const initiatives = [
    {
      title: "SDG Hackathon",
      description:
        "We plan to organize an SDG-centered hackathon, encouraging students to develop innovative solutions to challenges such as clean energy, water sanitation, and climate action. This project will bridge students' engineering expertise with UNA-ET's goals of advancing sustainable development.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      badges: ["SDG 6: Clean Water", "SDG 7: Clean Energy", "SDG 13: Climate Action"],
      link: "/initiatives/sdg-hackathon",
    },
    {
      title: "Environmental Awareness Campaign",
      description:
        "In collaboration with local organizations, we'll launch campaigns focused on raising awareness about climate change, pollution, and sustainable practices. Events like tree-planting drives and waste-reduction workshops will engage both students and the community, directly supporting the UN's SDG 13 (Climate Action).",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070",
      badges: ["Tree Planting", "Waste Reduction", "Climate Education"],
      link: "/initiatives/environmental-awareness",
    },
    {
      title: "Human Rights Seminar Series",
      description:
        "We aim to host a series of seminars on human rights issues, such as gender equality, education access, and freedom of expression, involving experts, diplomats, and activists. This initiative will align with UNA-ET's mission to foster global awareness and respect for human rights.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      badges: ["Gender Equality", "Education Access", "Freedom of Expression"],
      link: "/initiatives/human-rights-seminar",
    },
    {
      title: "International Internship Forum",
      description:
        "AASTU values real-world experience, so we plan to organize a forum where students can connect with international organizations offering internships. This aligns with both UNA-ET's focus on student engagement and AASTU's goal of enhancing students' professional development.",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070",
      badges: ["Professional Development", "Global Experience", "Career Growth"],
      link: "/initiatives/internship-forum",
    },
    {
      title: "Model United Nations Conference",
      description:
        "We will host a Model UN conference, allowing students to simulate UN sessions, debate global issues, and practice diplomacy. This activity fosters global citizenship, critical thinking, and leadership—all key values of UNA-ET.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
      badges: ["Diplomacy", "Global Citizenship", "Leadership"],
      link: "/initiatives/model-un",
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
            Our Key Initiatives
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            These initiatives will not only engage AASTU students in meaningful activities but also support UNA-ET's
            mission to promote global cooperation and sustainable development.
          </p>
        </motion.div>

        <div className="space-y-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-sm z-10 rounded-2xl"></div>
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 z-20">
                    <h3 className="text-white text-2xl font-bold">{initiative.title}</h3>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  {initiative.title}
                </h3>

                <p className="text-muted-foreground">{initiative.description}</p>

                <div className="flex flex-wrap gap-2">
                  {initiative.badges.map((badge, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="group rounded-full">
                  <Link href={initiative.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

