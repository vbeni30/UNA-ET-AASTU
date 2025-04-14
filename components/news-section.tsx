"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const newsItems = [
    {
      title: "UNA-ET AASTU Chapter Officially Launched",
      excerpt:
        "The United Nations Association of Ethiopia at AASTU was officially launched in a ceremony attended by university officials and UN representatives.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
      date: "March 15, 2025",
      category: "Announcement",
      url: "#",
      featured: true,
    },
    {
      title: "AASTU Students Win Regional Model UN Competition",
      excerpt:
        "A team of students from our chapter represented Ethiopia at the East African Model UN Conference and brought home the top delegation award.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070",
      date: "February 28, 2025",
      category: "Achievement",
      url: "#",
      featured: true,
    },
    {
      title: "SDG Hackathon Produces Innovative Solutions",
      excerpt:
        "The 48-hour hackathon saw students develop prototype solutions addressing clean water access, renewable energy, and waste management.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      date: "January 20, 2025",
      category: "Innovation",
      url: "#",
      featured: false,
    },
    {
      title: "UNA-ET AASTU Hosts Environmental Awareness Week",
      excerpt:
        "A week-long series of events raised awareness about climate change and environmental conservation through workshops, exhibitions, and a campus cleanup.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070",
      date: "December 5, 2024",
      category: "Environment",
      url: "#",
      featured: false,
    },
    {
      title: "Chapter Members Attend UN Day Celebrations",
      excerpt:
        "Representatives from our chapter participated in the national UN Day celebrations held at the United Nations Economic Commission for Africa.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071",
      date: "October 24, 2024",
      category: "Event",
      url: "#",
      featured: false,
    },
    {
      title: "Human Rights Seminar Addresses Gender Equality",
      excerpt:
        "The seminar brought together experts, activists, and students to discuss challenges and opportunities in advancing gender equality in Ethiopia.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070",
      date: "September 10, 2024",
      category: "Human Rights",
      url: "#",
      featured: false,
    },
  ]

  return (
    <section id="news" className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">News & Insights</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Stay informed about UNA-ET AASTU's work, impact, and the latest developments in our chapter.
          </p>
        </motion.div>

        <Tabs defaultValue="featured" className="w-full mb-8">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All News</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              {newsItems
                .filter((item) => item.featured)
                .map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col h-full"
                  >
                    <Card className="flex flex-col h-full overflow-hidden group">
                      <div className="relative h-64 overflow-hidden">
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
                        <CardTitle className="text-2xl line-clamp-2">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 pb-2">
                        <CardDescription className="line-clamp-3 text-base">{item.excerpt}</CardDescription>
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
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-8 md:grid-cols-3">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/news" className="group">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
