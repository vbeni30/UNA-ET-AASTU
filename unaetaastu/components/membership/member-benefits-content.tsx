"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import {
  Award,
  BookOpen,
  Users,
  Globe,
  Briefcase,
  GraduationCap,
  Target,
  Zap,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

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
    {
      icon: <Zap className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Personal Growth",
      description: "Challenge yourself, step outside your comfort zone, and develop confidence in your abilities.",
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Social Impact",
      description: "Make a meaningful difference in your community and contribute to global sustainable development.",
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
    {
      icon: <Target className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Career Direction",
      description: "Explore different career paths in international affairs, development, and diplomacy.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Innovation & Creativity",
      description: "Develop creative problem-solving skills by addressing complex global challenges.",
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

  const testimonials = [
    {
      quote:
        "Being a member of the UNA-ET AASTU Chapter has been transformative for my academic and professional development. The leadership skills and global perspective I've gained are invaluable.",
      name: "Abebe Kebede",
      role: "Computer Science, 4th Year",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The networking opportunities and hands-on experience I've received through the chapter have directly contributed to securing my internship with an international organization.",
      name: "Sara Tesfaye",
      role: "International Relations, 3rd Year",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a professional educator member, I've been able to integrate global perspectives into my teaching and connect my students with international opportunities.",
      name: "Dr. Yohannes Alemu",
      role: "Faculty Member, Engineering",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-800 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-100 mb-4">
            Why Join Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto text-blue-800 dark:text-blue-100">
            Member Benefits
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Joining the AASTU UN Association provides a wide range of benefits that enhance both your personal
            development and professional prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Personal Development</h3>
            <div className="grid grid-cols-1 gap-6">
              {personalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 mt-1 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Professional Advancement</h3>
            <div className="grid grid-cols-1 gap-6">
              {professionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 mt-1 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Exclusive Access</h3>
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

        <div className="mb-20 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Member Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 md:p-12 text-white shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-lg text-blue-100">Become a member today and start enjoying these benefits!</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/membership/apply"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
