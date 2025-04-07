import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Image, Play, Download, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function MediaLibraryContent() {
  // Sample media library data
  const mediaLibrary = {
    photos: [
      {
        title: "SDG Hackathon 2024",
        description:
          "Photos from our annual SDG Hackathon event featuring student teams developing innovative solutions.",
        date: "April 2024",
        count: "32 photos",
        tags: ["Events", "SDG Hackathon", "Innovation"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
      {
        title: "Environmental Awareness Campaign",
        description: "Photo documentation of our campus-wide environmental awareness and cleanup initiative.",
        date: "March 2024",
        count: "45 photos",
        tags: ["Environment", "Campus Activities", "SDG 13"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
      {
        title: "Model UN Conference 2024",
        description:
          "Images from our annual Model United Nations conference with participants from multiple universities.",
        date: "February 2024",
        count: "78 photos",
        tags: ["Model UN", "Conference", "Diplomacy"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
      {
        title: "Human Rights Seminar Series",
        description: "Photos from our seminar series on human rights issues and advocacy.",
        date: "January 2024",
        count: "24 photos",
        tags: ["Human Rights", "Seminars", "SDG 16"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
    ],
    videos: [
      {
        title: "SDG Hackathon 2024 Highlights",
        description: "A 5-minute highlight reel showcasing the best moments from our annual SDG Hackathon.",
        date: "April 2024",
        duration: "5:23",
        tags: ["Events", "SDG Hackathon", "Innovation"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
      {
        title: "Interview Series: Youth Climate Activists",
        description: "Interviews with student climate activists discussing their work and vision for the future.",
        date: "March 2024",
        duration: "18:45",
        tags: ["Climate Action", "Interviews", "Youth Activism"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
      {
        title: "Model UN Conference Opening Ceremony",
        description: "Full recording of the opening ceremony of our 2024 Model United Nations conference.",
        date: "February 2024",
        duration: "42:10",
        tags: ["Model UN", "Conference", "Ceremony"],
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "#",
      },
    ],
    presentations: [
      {
        title: "SDGs in Ethiopia: Progress and Challenges",
        description: "Presentation on Ethiopia's progress towards achieving the Sustainable Development Goals.",
        date: "May 2024",
        format: "PowerPoint",
        tags: ["SDGs", "Ethiopia", "Development"],
        link: "#",
      },
      {
        title: "Climate Change Impacts in East Africa",
        description: "Educational presentation on climate change effects and adaptation strategies in East Africa.",
        date: "April 2024",
        format: "PDF",
        tags: ["Climate Change", "East Africa", "Adaptation"],
        link: "#",
      },
      {
        title: "Introduction to the United Nations System",
        description: "Beginner-friendly presentation explaining the structure and functions of the UN.",
        date: "March 2024",
        format: "Google Slides",
        tags: ["United Nations", "Education", "International Organizations"],
        link: "#",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Media Library</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Browse our collection of photos, videos, and presentations from UNA-ET AASTU Chapter events and initiatives.
          </p>
        </div>

        <Tabs defaultValue="photos" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {mediaLibrary.photos.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-un-blue/10 hover:border-un-blue/30 transition-colors"
                >
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md flex items-center">
                      <Image className="h-3 w-3 mr-1" />
                      {item.count}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardDescription className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {item.date}
                      </CardDescription>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={item.link}>View Gallery</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {mediaLibrary.videos.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-un-blue/10 hover:border-un-blue/30 transition-colors"
                >
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-un-blue/80 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md">
                      {item.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardDescription className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {item.date}
                      </CardDescription>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={item.link}>Watch Video</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="presentations" className="mt-6">
            <div className="space-y-4">
              {mediaLibrary.presentations.map((item, index) => (
                <Card key={index} className="border-un-blue/10 hover:border-un-blue/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardDescription className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {item.date}
                      </CardDescription>
                      <Badge variant="outline">{item.format}</Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={item.link}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Presentation
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-4">Media Usage Guidelines</h3>
          <p className="mb-4">
            All media in this library is available for educational and non-commercial use with proper attribution to
            UNA-ET AASTU Chapter. For commercial use or high-resolution versions, please contact us.
          </p>
          <p className="text-sm">
            For media inquiries or to contribute to our media library, contact{" "}
            <span className="text-un-blue">media@una-et-aastu.org</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

