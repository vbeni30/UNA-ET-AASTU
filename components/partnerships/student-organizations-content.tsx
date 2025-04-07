import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Heart, Globe, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StudentOrganizationsContent() {
  // Sample student organization partners data
  const studentOrganizations = [
    {
      name: "AASTU Student Union",
      description:
        "The official student representative body at Addis Ababa Science and Technology University, helping mobilize students for our initiatives.",
      logo: <Users className="h-12 w-12 text-un-blue" />,
      partnership: "Student mobilization, event coordination, campus outreach",
    },
    {
      name: "Innovation Club",
      description:
        "A student-led organization focused on technological solutions to social and environmental challenges.",
      logo: <Lightbulb className="h-12 w-12 text-un-blue" />,
      partnership: "SDG Hackathon co-organizer, technology workshops",
    },
    {
      name: "Volunteer Association",
      description: "A network of student volunteers dedicated to community service and social impact projects.",
      logo: <Heart className="h-12 w-12 text-un-blue" />,
      partnership: "Volunteer recruitment, community outreach programs",
    },
    {
      name: "International Relations Society",
      description: "Student organization focused on global affairs, diplomacy, and international development.",
      logo: <Globe className="h-12 w-12 text-un-blue" />,
      partnership: "Model UN co-organizer, international awareness campaigns",
    },
    {
      name: "Green Campus Initiative",
      description:
        "Student-led environmental sustainability group working to promote eco-friendly practices on campus.",
      logo: <Leaf className="h-12 w-12 text-un-blue" />,
      partnership: "Environmental campaigns, sustainability workshops",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Student Organization Partnerships</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            UNA-ET AASTU Chapter collaborates with student-led organizations to amplify our impact and create meaningful
            engagement opportunities for students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {studentOrganizations.map((org, index) => (
            <Card key={index} className="overflow-hidden border-un-blue/10 hover:border-un-blue/30 transition-colors">
              <div className="flex flex-col lg:flex-row">
                <div className="flex items-center justify-center p-6 bg-un-blue/5 lg:w-1/4">{org.logo}</div>
                <div className="lg:w-3/4">
                  <CardHeader>
                    <CardTitle>{org.name}</CardTitle>
                    <CardDescription className="text-sm">Partnership: {org.partnership}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{org.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-medium mb-4">Partner With Us</h3>
          <p className="mb-6">
            Is your student organization interested in partnering with UNA-ET AASTU Chapter? We welcome collaborations
            with student groups that share our commitment to the UN Sustainable Development Goals and global
            citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-un-blue hover:bg-un-darkblue">
              <Link href="/partnerships/join">Become a Partner</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/get-involved">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

