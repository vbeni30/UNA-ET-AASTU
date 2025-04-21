"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Initiatives", href: "/initiatives" },
        { name: "Membership", href: "/membership" },
        { name: "Events", href: "/events" },
        { name: "Partnerships", href: "/partnerships" },
        { name: "Get Involved", href: "/get-involved" },
      ],
    },
    {
      title: "Initiatives",
      links: [
        { name: "SDG Hackathon", href: "/initiatives/sdg-hackathon" },
        { name: "Environmental Awareness", href: "/initiatives/environmental-awareness" },
        { name: "Human Rights Seminar", href: "/initiatives/human-rights-seminar" },
        { name: "Internship Forum", href: "/initiatives/internship-forum" },
        { name: "Model UN Conference", href: "/initiatives/model-un" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "SDG Resources", href: "#" },
        { name: "Model UN Guide", href: "#" },
        { name: "Leadership Training", href: "#" },
        { name: "Advocacy Toolkit", href: "#" },
      ],
    },
  ]

  return (
    <footer className="w-full bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient-y"></div>

      <div className="container relative z-10 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden shadow-glow">
                <Image
                  src="/UN_emblem_blue.svg"
                  alt="UN Emblem"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div className="absolute inset-0 bg-un-darkblue rounded-full animate-pulse opacity-20"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">UNA-ET</span>
                <span className="text-sm text-blue-300 leading-tight">AASTU Chapter</span>
              </div>
            </div>
            <p className="text-blue-200 max-w-md text-pretty">
              The United Nations Association of Ethiopia at AASTU serves as a bridge between the Ethiopian people and
              the UN to raise awareness about global issues like the Sustainable Development Goals (SDGs).
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-transparent border-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-300"
                asChild
              >
                <Link
                  href="https://www.facebook.com/profile.php?id=61556959823519"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-transparent border-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-300"
                asChild
              >
                <Link href="https://www.instagram.com/una_et_aastu/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-transparent border-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-300"
                asChild
              >
                <Link href="https://t.me/unaetaastu" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21.5 4.5L2.5 12.5L21.5 20.5L21.5 16.5L9.5 12.5L21.5 8.5V4.5Z"></path>
                  </svg>
                  <span className="sr-only">Telegram</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 bg-transparent border-blue-700 text-blue-200 hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-300"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/company/una-et-aastu-chapter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
              style={{ willChange: "opacity, transform" }}
            >
              <h3 className="font-bold text-lg text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors hover-underline inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-blue-800"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-medium text-white">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-blue-200 group">
                  <div className="p-2 rounded-full bg-blue-800/50 group-hover:bg-blue-800 transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>AASTU Campus, Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-200 group">
                  <div className="p-2 rounded-full bg-blue-800/50 group-hover:bg-blue-800 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>una-et-aastu@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-200 group">
                  <div className="p-2 rounded-full bg-blue-800/50 group-hover:bg-blue-800 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+251 123 456 789</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white">Subscribe to Our Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="h-10 bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300 focus:border-un-blue focus:ring-un-blue"
                />
                <Button
                  size="sm"
                  className="h-10 rounded-full bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blue-300">Stay updated with our latest events and initiatives.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300">&copy; {currentYear} UNA-ET AASTU Chapter. All rights reserved.</p>
          <p className="text-sm text-blue-300">Affiliated with the United Nations Association of Ethiopia</p>
        </div>
      </div>
    </footer>
  )
}
