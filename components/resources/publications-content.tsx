import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, User } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function PublicationsContent() {
  // Sample publications data
  const publications = [
    {
      title: "SDG Implementation in Ethiopian Universities: Challenges and Opportunities",
      description:
        "A comprehensive study on how Ethiopian higher education institutions are incorporating the UN Sustainable Development Goals into their curricula, research, and operations.",
      authors: ["Abebe Kebede", "Tigist Hailu", "Daniel Tesfaye"],
      date: "March 2025",
      type: "Research Paper",
      categories: ["SDGs", "Higher Education", "Ethiopia"],
      link: "#",
    },
    {
      title: "Youth Engagement in Climate Action: Case Studies from Addis Ababa",
      description:
        "This report documents successful youth-led climate initiatives in Addis Ababa and analyzes their impact, challenges, and lessons learned.",
      authors: ["Hiwot Alemayehu", "Yonas Tadesse"],
      date: "January 2025",
      type: "Case Study",
      categories: ["Climate Action", "Youth", "Urban Development"],
      link: "#",
    },
    {
      title: "Model UN as a Tool for Developing Global Citizenship",
      description:
        "An analysis of how Model UN programs contribute to developing global citizenship skills among university students, with specific focus on the AASTU experience.",
      authors: ["Bethlehem Alemu", "Solomon Girma", "Rahel Tesfaye"],
      date: "November 2024",
      type: "Academic Paper",
      categories: ["Model UN", "Global Citizenship", "Education"],
      link: "#",
    },
    {
      title: "Annual Impact Report: UNA-ET AASTU Chapter Activities 2024",
      description:
        "A comprehensive overview of the chapter's activities, achievements, challenges, and impact during the 2024 academic year.",
      authors: ["UNA-ET AASTU Chapter Leadership Team"],
      date: "October 2024",
      type: "Annual Report",
      categories: ["Impact Assessment", "Annual Report"],
      link: "#",
    },
    {
      title: "Sustainable Development in Ethiopia: Policy Brief for University Stakeholders",
      description:
        "A policy brief outlining recommendations for university administrators and policymakers on enhancing sustainable development initiatives in Ethiopian higher education.",
      authors: ["Kidist Mengistu", "Dawit Haile"],
      date: "August 2024",
      type: "Policy Brief",
      categories: ["Policy", "Sustainable Development", "Higher Education"],
      link: "#",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Publications</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore research papers, reports, and articles published by UNA-ET AASTU Chapter members and affiliates on
            topics related to the UN Sustainable Development Goals.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((publication, index) => (
            <Card key={index} className="border-un-blue/10 hover:border-un-blue/30 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardDescription className="flex items-center">
                    <FileText className="mr-1 h-4 w-4" />
                    {publication.type}
                  </CardDescription>
                  <CardDescription className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {publication.date}
                  </CardDescription>
                </div>
                <CardTitle className="text-xl">{publication.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="mr-1 h-4 w-4" />
                  {publication.authors.join(", ")}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{publication.description}</p>
                <div className="flex flex-wrap gap-2">
                  {publication.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={publication.link}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Publication
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-4">Submit Your Research</h3>
          <p className="mb-4">
            Are you a student or faculty member working on research related to the UN Sustainable Development Goals? We
            welcome submissions for potential publication through our platform.
          </p>
          <p className="text-sm mb-4">Submission guidelines:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
            <li>Research must be related to one or more of the UN Sustainable Development Goals</li>
            <li>Authors must be affiliated with AASTU or partner institutions</li>
            <li>Submissions undergo peer review before publication</li>
            <li>Both completed research and works in progress are welcome</li>
          </ul>
          <p className="text-sm">
            Contact <span className="text-un-blue">publications@una-et-aastu.org</span> to learn more about the
            submission process.
          </p>
        </div>
      </div>
    </div>
  )
}

