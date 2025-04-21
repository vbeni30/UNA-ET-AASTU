"use client"

import { PartnershipsHero } from "@/components/partnerships/partnerships-hero"
import { StrategicPartnerships } from "@/components/partnerships/strategic-partnerships"
import { BecomePartner } from "@/components/partnerships/become-partner"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PartnershipsPage() {
  const partnerCategories = [
    {
      title: "Student Organizations",
      description: "Collaborating with student-led initiatives across Ethiopia",
      href: "/partnerships/student",
      color: "from-blue-600 to-blue-800",
      icon: "👨‍🎓",
    },
    {
      title: "Embassies",
      description: "Working with diplomatic missions to foster international cooperation",
      href: "/partnerships/embassies",
      color: "from-green-600 to-green-800",
      icon: "🏛️",
    },
    {
      title: "Government Bodies",
      description: "Partnering with Ethiopian government institutions",
      href: "/partnerships/government",
      color: "from-purple-600 to-purple-800",
      icon: "🏢",
    },
    {
      title: "Foundations",
      description: "Collaborating with NGOs and foundations for positive impact",
      href: "/partnerships/foundations",
      color: "from-orange-600 to-orange-800",
      icon: "❤️",
    },
    {
      title: "UN Agencies",
      description: "Working with United Nations agencies to advance global goals",
      href: "/partnerships/un-agencies",
      color: "from-cyan-600 to-cyan-800",
      icon: "🌐",
    },
    {
      title: "Become a Partner",
      description: "Join our network of partners and help advance our mission",
      href: "/partnerships/join",
      color: "from-red-600 to-red-800",
      icon: "🤝",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PartnershipsHero
        title="Our Partnerships"
        subtitle="Collaborating with organizations to advance the UN's mission and goals"
        image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070"
      />

      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Partnership Categories</h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            We collaborate with a diverse range of partners to create meaningful impact and advance the United Nations'
            Sustainable Development Goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={category.href}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-95 transition-opacity`}
                ></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative p-8 text-white h-full flex flex-col">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="mb-6 text-white/80 flex-grow">{category.description}</p>
                  <span className="inline-flex items-center text-sm font-medium mt-auto group-hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <StrategicPartnerships />
      <BecomePartner />
    </div>
  )
}
