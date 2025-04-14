"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Lightbulb, Heart, Shield, Handshake } from "lucide-react"

export function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: <Globe className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Global Citizenship",
      description:
        "We believe in fostering a sense of responsibility and connection to the global community, recognizing our role in addressing shared challenges.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Inclusivity",
      description:
        "We are committed to creating a welcoming environment where students of all backgrounds, disciplines, and perspectives can contribute and thrive.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Innovation",
      description:
        "We encourage creative thinking and novel approaches to addressing global challenges, leveraging technology and research for positive impact.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Compassion",
      description:
        "We approach our work with empathy and understanding, recognizing the human dimension of global issues and the importance of caring for others.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Opportunity",
      description:
        "We advocate for fairness, equality, and human rights, working to address systemic inequities and promote dignity for all.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-700 dark:text-blue-400" />,
      title: "Collaboration",
      description:
        "We believe in the power of partnership and teamwork, recognizing that complex global challenges require collective action and diverse perspectives.",
    },
  ]

  const principles = [
    "Student-led initiatives that empower young leaders",
    "Evidence-based approaches to problem-solving",
    "Ethical conduct in all activities and relationships",
    "Transparency in decision-making and operations",
    "Accountability to our members, partners, and communities",
    "Sustainability in our practices and impact",
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
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Foundation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Values & Principles
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Our work is guided by a set of core values and principles that reflect our commitment to the UN's mission
            and our vision for a better world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-blue-100 dark:border-blue-900/30 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Guiding Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/90">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
