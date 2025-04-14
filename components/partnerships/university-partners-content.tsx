import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, GraduationCap, Globe, BookOpen, Users } from "lucide-react"

export function UniversityPartnersContent() {
  // Updated university partners data - removed Environmental Engineering Department
  const universityPartners = [
    {
      name: "Addis Ababa University",
      description:
        "Ethiopia's oldest and largest higher education institution, collaborating on research and student exchange programs.",
      logo: <Building2 className="h-12 w-12 text-un-blue" />,
      partnership: "Research collaboration, student exchange, joint conferences",
    },
    {
      name: "Addis Ababa Science and Technology University",
      description: "Our host institution providing facilities, academic support, and resources for our initiatives.",
      logo: <GraduationCap className="h-12 w-12 text-un-blue" />,
      partnership: "Host institution, academic support, resource sharing",
    },
    {
      name: "New Generation University",
      description: "Partner in innovative educational approaches and entrepreneurship development programs.",
      logo: <Globe className="h-12 w-12 text-un-blue" />,
      partnership: "Educational innovation, entrepreneurship programs",
    },
    {
      name: "Jimma University",
      description: "Collaboration on health and social welfare programs aligned with UN Sustainable Development Goals.",
      logo: <BookOpen className="h-12 w-12 text-un-blue" />,
      partnership: "Health programs, social welfare initiatives",
    },
    {
      name: "Hawassa University",
      description:
        "Joint agricultural and rural development programs focusing on food security and sustainable farming.",
      logo: <Users className="h-12 w-12 text-un-blue" />,
      partnership: "Agricultural programs, rural development initiatives",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Academic Partnerships</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            UNA-ET AASTU Chapter collaborates with universities across Ethiopia to advance education, research, and
            implementation of the UN Sustainable Development Goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {universityPartners.map((partner, index) => (
            <Card key={index} className="overflow-hidden border-un-blue/10 hover:border-un-blue/30 transition-colors">
              <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-center p-6 bg-un-blue/5 lg:w-1/4">{partner.logo}</div>
                <div className="lg:w-3/4">
                  <CardHeader>
                    <CardTitle>{partner.name}</CardTitle>
                    <CardDescription className="text-sm">Partnership: {partner.partnership}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{partner.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-4">Interested in University Partnership?</h3>
          <p className="mb-4">
            We are always looking to expand our network of university partners. If your institution is interested in
            collaborating with UNA-ET AASTU Chapter on initiatives related to the UN Sustainable Development Goals,
            please reach out to our partnerships team.
          </p>
          <p>
            Contact us at <span className="text-un-blue">partnerships@una-et-aastu.org</span> to discuss potential
            collaboration opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}
