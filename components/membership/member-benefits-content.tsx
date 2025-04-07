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
      description: "Develop essential leadership skills through hands-on experience in organizing events, managing projects, and leading teams."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Knowledge Enhancement",
      description: "Deepen your understanding of global issues, international relations, and the United Nations system."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Community Building",
      description: "Connect with like-minded students who share your passion for global issues and making a positive impact."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Global Perspective",
      description: "Develop a broader worldview and understanding of diverse cultures and international challenges."
    }
  ]

  const professionalBenefits = [
    {
      icon: <Briefcase className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Career Opportunities",
      description: "Access to internship and job opportunities with partner organizations, including UN agencies and international NGOs."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Networking",
      description: "Connect with professionals, diplomats, and leaders in international affairs and development."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Skill Building",
      description: "Develop transferable skills valued by employers, such as project management, public speaking, and cross-cultural communication."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700 dark:text-blue-400" />,
      title: "Resume Enhancement",
      description: "Add valuable experience and achievements to your resume, making you stand out to potential employers."
    }
  ]

  const exclusiveAccess = [
    {
      title: "Model UN Conferences",
      description: "Priority registration and specialized training for Model UN conferences at local, national, and international levels.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070"
    },
    {
      title: "Leadership Workshops",
      description: "Exclusive workshops led by experienced professionals and leaders in international affairs.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
    },
    {
      title: "Networking Events",
      description: "Special events with diplomats, UN officials, and leaders from international organizations.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
    },
    {
      title: "Educational Resources",
      description: "Access to a comprehensive library of resources on global issues, the UN system, and professional development.",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070"
    }
  ]

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 dark:from-blue-900 to-transparent" />\

\

\

\

\

\

\

