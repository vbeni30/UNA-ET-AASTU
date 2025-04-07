"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Search } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NewsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const newsItems = [
    {
      title: "UNA-ET AASTU Chapter Officially Launched",
      excerpt:
        "The United Nations Association of Ethiopia at AASTU was officially launched in a ceremony attended by university officials and UN representatives.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      date: "March 15, 2025",
      category: "Announcement",
      url: "#",
    },
    {
      title: "AASTU Students Win Regional Model UN Competition",
      excerpt:
        "A team of students from our chapter represented Ethiopia at the East African Model UN Conference and brought home the top delegation award.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
      date: "February 28, 2025",
      category: "Achievement",
      url: "#",
    },
    {
      title: "SDG Hackathon Produces Innovative Solutions",
      excerpt:
        "The 48-hour hackathon saw students develop prototype solutions addressing clean water access, renewable energy, and waste management.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      date: "January 20, 2025",
      category: "Innovation",
      url: "#",
    },
    {
      title: "UNA-ET AASTU Hosts Environmental Awareness Week",
      excerpt:
        "A week-long series of events raised awareness about climate change and environmental conservation through workshops, exhibitions, and a campus cleanup.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070",
      date: "December 5, 2024",
      category: "Environment",
      url: "#",
    },
    {
      title: "Chapter Members Attend UN Day Celebrations",
      excerpt:
        "Representatives from our chapter participated in the national UN Day celebrations held at the United Nations Economic Commission for Africa.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071",
      date: "October 24, 2024",
      category: "Event",
      url: "#",
    },
    {
      title: "Human Rights Seminar Addresses Gender Equality",
      excerpt:
        "The seminar brought together experts, activists, and students to discuss challenges and opportunities in advancing gender equality in Ethiopia.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      date: "September 10, 2024",
      category: "Human Rights",
      url: "#",
    },
    {
      title: "UNA-ET AASTU Partners with Local NGOs",
      excerpt:
        "Our chapter has established partnerships with several local NGOs to collaborate on community development projects and expand our impact.",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070",
      date: "August 15, 2024",
      category: "Partnership",
      url: "#",
    },
    {
      title: "Leadership Workshop Series Launches",
      excerpt:
        "A new series of workshops aims to develop leadership skills among AASTU students, with sessions on public speaking, project management, and diplomacy.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070",
      date: "July 20, 2024",
      category: "Education",
      url: "#",
    },
    {
      title: "UNA-ET AASTU Welcomes New Executive Committee",
      excerpt:
        "The chapter has elected a new executive committee for the 2024-2025 academic year, with ambitious plans to expand our initiatives and impact.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2087",
      date: "June 5, 2024",
      category: "Announcement",
      url: "#",
    },
  ]

  // Get unique categories for filter
  const categories = ["all", ...Array.from(new Set(newsItems.map((item) => item.category)))].sort()

  // Filter news items based on search query and category
  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search news..."
                className="pl-10 border-blue-100 dark:border-blue-900/30 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto max-w-xs">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="border-blue-100 dark:border-blue-900/30 rounded-full">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <Card className="flex flex-col h-full overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="bg-primary/5">
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 pb-2">
                      <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="ghost" className="p-0 h-auto text-primary group">
                        <Link href={item.url}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

