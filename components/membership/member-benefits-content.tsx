"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Award, BookOpen, Users, Globe, Briefcase, GraduationCap } from "lucide-react"

export function MemberBenefitsContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const personalBenefits = [
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Leadership Development",
      description:
        "Develop essential leadership skills through hands-on experience in organizing events, managing projects, and leading teams.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Knowledge Enhancement",
      description:
        "Deepen your understanding of global issues, international relations, and the United Nations system.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Community Building",
      description:
        "Connect with like-minded students who share your passion for global issues and making a positive impact.",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Global Perspective",
      description: "Develop a broader worldview and understanding of diverse cultures and international challenges.",
    },
  ]

  const professionalBenefits = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Career Opportunities",
      description:
        "Access to internship and job opportunities with partner organizations, including UN agencies and international NGOs.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Networking",
      description: "Connect with professionals, diplomats, and leaders in international affairs and development.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Skill Building",
      description:
        "Develop transferable skills valued by employers, such as project management, public speaking, and cross-cultural communication.",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Resume Enhancement",
      description:
        "Add valuable experience and achievements to your resume, making you stand out to potential employers.",
    },
  ]

  const exclusiveAccess = [
    {
      title: "Model UN Conferences",
      description:
        "Priority registration and specialized training for Model UN conferences at local, national, and international levels.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
    },
    {
      title: "Leadership Workshops",
      description: "Exclusive workshops led by experienced professionals and leaders in international affairs.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
    },
    {
      title: "Networking Events",
      description: "Special events with diplomats, UN officials, and leaders from international organizations.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
    },
    {
      title: "Educational Resources",
      description:
        "Access to a comprehensive library of resources on global issues, the UN system, and professional development.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070",
    },
  ]

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 dark:from-blue-900 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Member Benefits</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Joining the AASTU UN Association provides a wide range of benefits that enhance both your personal
            development and professional prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Personal Development</h3>
            <div className="space-y-6">
              {personalBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Professional Advancement</h3>
            <div className="space-y-6">
              {professionalBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Exclusive Access</h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            {exclusiveAccess.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-lg">Become a member today and start enjoying these benefits!</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/membership/student"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              Student Membership
            </a>
            <a
              href="/membership/active"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 h-10 px-4 py-2"
            >
              Active Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

