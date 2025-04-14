"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, useReducedMotion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  // Only access theme after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  // Custom navigation handler to ensure scroll to top
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Navigate to the new page
    router.push(href)
  }

  const navLinks = [
    {
      name: "Home",
      href: "/",
      dropdown: null,
    },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Our Mission", href: "/about/mission" },
        { name: "AASTU Excellence", href: "/about/excellence" },
        { name: "Leadership Team", href: "/about/leadership" },
        { name: "Our History", href: "/about/history" },
        { name: "Values & Principles", href: "/about/values" },
      ],
    },
    {
      name: "Initiatives",
      href: "/initiatives",
      dropdown: [
        { name: "SDG Hackathon", href: "/initiatives/sdg-hackathon" },
        { name: "Environmental Campaign", href: "/initiatives/environmental-awareness" },
        { name: "Human Rights Seminar", href: "/initiatives/human-rights-seminar" },
        { name: "Internship Forum", href: "/initiatives/internship-forum" },
        { name: "Model UN Conference", href: "/initiatives/model-un" },
        { name: "MUN", href: "/initiatives/mun" },
      ],
    },
    {
      name: "Membership",
      href: "/membership",
      dropdown: [
        { name: "Student Membership", href: "/membership/student" },
        { name: "Active Membership", href: "/membership/active" },
        { name: "Leadership Positions", href: "/membership/leadership" },
        { name: "Member Benefits", href: "/membership/benefits" },
        { name: "Professional Educators", href: "/membership/professional-educators" },
        { name: "How to Apply", href: "/membership/apply" },
      ],
    },
    {
      name: "Events",
      href: "/events",
      dropdown: [
        { name: "Upcoming Events", href: "/events/upcoming" },
        { name: "Past Events", href: "/events/past" },
        { name: "Event Calendar", href: "/events/calendar" },
        { name: "Event Gallery", href: "/events/gallery" },
        { name: "Register for Events", href: "/events/register" },
      ],
    },
    {
      name: "Partnerships",
      href: "/partnerships",
      dropdown: [
        { name: "University Partners", href: "/partnerships/university" },
        { name: "Student Organizations", href: "/partnerships/student" },
        { name: "External Partners", href: "/partnerships/external" },
        { name: "Partnership Benefits", href: "/partnerships/benefits" },
        { name: "Become a Partner", href: "/partnerships/join" },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      dropdown: [
        { name: "SDG Resources", href: "/resources/sdg" },
        { name: "Model UN Guide", href: "/resources/model-un" },
        { name: "Educational Materials", href: "/resources/educational" },
        { name: "Publications", href: "/resources/publications" },
        { name: "Media Library", href: "/resources/media" },
      ],
    },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <motion.header
      initial={prefersReducedMotion ? { y: 0 } : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <button onClick={() => handleNavigation("/")} className="flex items-center gap-2">
            <div className="relative w-10 h-10 bg-un-blue rounded-full flex items-center justify-center overflow-hidden shadow-glow">
              <Globe className="h-6 w-6 text-white absolute" />
              <div className="absolute w-full h-full bg-un-darkblue rounded-full animate-pulse opacity-50"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight hidden md:inline-block">UNA-ET</span>
              <span className="text-xs text-muted-foreground leading-tight hidden md:inline-block">AASTU Chapter</span>
            </div>
          </button>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index} className="relative group">
                <button
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium hover:text-un-blue transition-colors relative flex items-center gap-1 ${
                    isActive(link.href) ? "text-un-blue" : ""
                  }`}
                  aria-expanded={activeDropdown === link.name}
                  aria-controls={`dropdown-${link.name}`}
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-un-blue transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
                <div
                  id={`dropdown-${link.name}`}
                  className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                >
                  <div className="py-2 bg-white dark:bg-gray-800 rounded-md shadow-soft border border-gray-200 dark:border-gray-700">
                    {link.dropdown.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={index}
                onClick={() => handleNavigation(link.href)}
                className={`text-sm font-medium hover:text-un-blue transition-colors relative group ${
                  isActive(link.href) ? "text-un-blue" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-un-blue transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ),
          )}

          <div className="flex items-center gap-2 ml-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="default"
              size="sm"
              className="rounded-full bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300"
              onClick={() => handleNavigation("/get-involved")}
            >
              Get Involved
            </Button>
          </div>
        </nav>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 bg-un-blue rounded-full flex items-center justify-center overflow-hidden shadow-glow">
                    <Globe className="h-6 w-6 text-white absolute" />
                    <div className="absolute w-full h-full bg-un-darkblue rounded-full animate-pulse opacity-50"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight">UNA-ET</span>
                    <span className="text-xs text-muted-foreground leading-tight">AASTU Chapter</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                  {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index} className="space-y-2">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className={`text-lg font-medium hover:text-un-blue transition-colors flex items-center justify-between w-full ${
                            isActive(link.href) ? "text-un-blue" : ""
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDropdownToggle(link.name)
                            }}
                          />
                        </button>
                        {activeDropdown === link.name && (
                          <div className="pl-4 border-l-2 border-un-blue/20 space-y-2">
                            {link.dropdown.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleNavigation(item.href)}
                                className="text-sm text-muted-foreground hover:text-un-blue transition-colors block py-1 w-full text-left"
                              >
                                {item.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className={`text-lg font-medium hover:text-un-blue transition-colors block w-full text-left ${
                          isActive(link.href) ? "text-un-blue" : ""
                        }`}
                      >
                        {link.name}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                className="mt-4 rounded-full bg-un-blue hover:bg-un-darkblue hover:shadow-glow transition-all duration-300"
                onClick={() => handleNavigation("/get-involved")}
              >
                Get Involved
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
