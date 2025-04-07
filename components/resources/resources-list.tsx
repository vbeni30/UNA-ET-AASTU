"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, ExternalLink, Book, Video, Globe } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function ResourcesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const resources = [
    {
      title: "SDG Resource Guide",
      description:
        "Comprehensive guide to the UN's 17 Sustainable Development Goals with case studies and action items",
      type: "Guide",
      icon: <Book className="h-5 w-5 text-un-blue" />,
      link: "/resources/sdg",
      category: "SDGs",
    },
    {
      title: "Model UN Handbook",
      description: "Step-by-step guide to participating in and organizing Model UN simulations",
      type: "Handbook",
      icon: <Globe className="h-5 w-5 text-un-blue" />,
      link: "/resources/model-un",
      category: "Model UN",
    },
    {
      title: "Climate Action Toolkit",
      description: "Resources for organizing climate awareness campaigns and environmental initiatives",
      type: "Toolkit",
      icon: <FileText className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "Environment",
    },
    {
      title: "Human Rights Education",
      description: "Materials for learning about and teaching human rights principles and issues",
      type: "Educational",
      icon: <Book className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "Human Rights",
    },
    {
      title: "UN in Ethiopia Report",
      description: "Annual report on the United Nations' activities and impact in Ethiopia",
      type: "Publication",
      icon: <FileText className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "Publications",
    },
    {
      title: "Leadership Development",
      description: "Resources for developing leadership skills and managing student organizations",
      type: "Guide",
      icon: <Book className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "Leadership",
    },
    {
      title: "SDG Video Series",
      description: "Educational videos explaining each of the 17 Sustainable Development Goals",
      type: "Video",
      icon: <Video className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "Media",
    },
    {
      title: "UN Charter & Structure",
      description: "Overview of the United Nations' charter, structure, and key bodies",
      type: "Guide",
      icon: <Book className="h-5 w-5 text-un-blue" />,
      link: "#",
      category: "UN System",
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
            Available Resources
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Browse our collection of educational materials, guides, and publications to enhance your knowledge and
            skills.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full border-blue-100 dark:border-blue-900/30 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    >
                      {resource.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">{resource.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-2">
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={resource.link}>
                      {resource.type === "Publication" ? (
                        <>
                          Download
                          <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </>
                      ) : (
                        <>
                          View Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

