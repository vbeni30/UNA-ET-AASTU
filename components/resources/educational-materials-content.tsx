import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export function EducationalMaterialsContent() {
  // Sample educational materials data
  const educationalMaterials = {
    courses: [
      {
        title: "Introduction to Sustainable Development Goals",
        description: "A comprehensive course covering all 17 SDGs, their targets, and indicators.",
        type: "Course",
        icon: <BookOpen className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Climate Action: From Understanding to Implementation",
        description: "Learn about climate change science, policy frameworks, and practical actions.",
        type: "Course",
        icon: <BookOpen className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Gender Equality and Women's Empowerment",
        description: "Explore the importance of gender equality in sustainable development.",
        type: "Course",
        icon: <BookOpen className="h-5 w-5" />,
        link: "#",
      },
    ],
    guides: [
      {
        title: "SDG Implementation Guide for Students",
        description: "A practical guide for students to implement SDGs in their campus and community.",
        type: "Guide",
        icon: <FileText className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Organizing Model UN Conferences",
        description: "Step-by-step guide to planning and executing successful Model UN events.",
        type: "Guide",
        icon: <FileText className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Advocacy Toolkit for Youth",
        description: "Resources and strategies for effective advocacy on global issues.",
        type: "Guide",
        icon: <FileText className="h-5 w-5" />,
        link: "#",
      },
    ],
    videos: [
      {
        title: "SDGs Explained: The Basics",
        description: "A 15-minute video explaining the fundamentals of the UN Sustainable Development Goals.",
        type: "Video",
        icon: <Video className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Youth in Action: SDG Champions",
        description: "Inspiring stories of young people making a difference through SDG initiatives.",
        type: "Video",
        icon: <Video className="h-5 w-5" />,
        link: "#",
      },
      {
        title: "Understanding the UN System",
        description: "An overview of the United Nations structure, agencies, and functions.",
        type: "Video",
        icon: <Video className="h-5 w-5" />,
        link: "#",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Educational Resources</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Access our collection of educational materials designed to enhance understanding of global issues,
            sustainable development, and UN initiatives.
          </p>
        </div>

        <Tabs defaultValue="courses" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {educationalMaterials.courses.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full border-un-blue/10 hover:border-un-blue/30 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <CardDescription>{item.type}</CardDescription>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={item.link}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access Course
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {educationalMaterials.guides.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full border-un-blue/10 hover:border-un-blue/30 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <CardDescription>{item.type}</CardDescription>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={item.link}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Guide
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {educationalMaterials.videos.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col h-full border-un-blue/10 hover:border-un-blue/30 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <CardDescription>{item.type}</CardDescription>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={item.link}>
                        <Video className="mr-2 h-4 w-4" />
                        Watch Video
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-4">Request Educational Materials</h3>
          <p className="mb-4">
            Can't find what you're looking for? We're constantly developing new educational resources. Let us know what
            topics you'd like us to cover, and we'll consider them for future materials.
          </p>
          <p className="text-sm">
            Contact us at <span className="text-un-blue">education@una-et-aastu.org</span> with your suggestions.
          </p>
        </div>
      </div>
    </div>
  )
}

