import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Globe, Briefcase, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExternalPartnersContent() {
  // Sample external partners data
  const externalPartners = [
    {
      name: "United Nations Development Programme (UNDP) Ethiopia",
      description:
        "Supporting our initiatives through technical expertise, resources, and connecting us with the broader UN ecosystem in Ethiopia.",
      logo: <Globe className="h-12 w-12 text-un-blue" />,
      partnership: "Technical support, resource provision, networking",
    },
    {
      name: "Ministry of Education",
      description:
        "Collaborating on educational initiatives and providing institutional support for our academic programs.",
      logo: <Building className="h-12 w-12 text-un-blue" />,
      partnership: "Educational policy support, institutional backing",
    },
    {
      name: "Ethiopian Chamber of Commerce",
      description:
        "Connecting us with the business community for internship opportunities and private sector engagement in SDGs.",
      logo: <Briefcase className="h-12 w-12 text-un-blue" />,
      partnership: "Internship program, private sector engagement",
    },
    {
      name: "Ethiopian Red Cross Society",
      description: "Partnering on humanitarian initiatives, disaster preparedness, and community resilience programs.",
      logo: <Heart className="h-12 w-12 text-un-blue" />,
      partnership: "Humanitarian initiatives, community programs",
    },
    {
      name: "Association of Ethiopian Civil Society Organizations",
      description:
        "Providing a network of civil society connections and collaborative opportunities for community engagement.",
      logo: <Users className="h-12 w-12 text-un-blue" />,
      partnership: "Civil society networking, community engagement",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our External Partnerships</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            UNA-ET AASTU Chapter collaborates with government agencies, NGOs, businesses, and international
            organizations to expand our impact and create meaningful change.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {externalPartners.map((partner, index) => (
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
          <h3 className="text-xl font-medium mb-4">Partnership Opportunities</h3>
          <p className="mb-6">
            We are always seeking new partnerships with organizations that share our commitment to the UN Sustainable
            Development Goals. Whether you represent a government agency, NGO, business, or international organization,
            we welcome the opportunity to explore collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-un-blue hover:bg-un-darkblue">
              <Link href="/partnerships/join">Become a Partner</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/partnerships/benefits">Partnership Benefits</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

