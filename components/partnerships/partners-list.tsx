import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, FlaskRoundIcon as Flask, Cpu, Building2, Leaf } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PartnersList() {
  // Updated university partners - added Environmental Engineering Department
  const universityPartners = [
    {
      name: "Addis Ababa Science and Technology University",
      description: "Our host institution providing facilities, academic support, and resources for our initiatives.",
      logo: <Building2 className="h-12 w-12 text-un-blue" />,
      type: "Host Institution",
    },
    {
      name: "GDG (Google Developer Group)",
      description: "Collaboration on technology-focused events, workshops, and skill development programs.",
      logo: <Code className="h-12 w-12 text-un-blue" />,
      type: "Technology Partner",
    },
    {
      name: "Chemical Engineering Department",
      description: "Partnership on sustainable development projects and environmental initiatives.",
      logo: <Flask className="h-12 w-12 text-un-blue" />,
      type: "Academic Department",
    },
    {
      name: "Software Engineering Department",
      description: "Collaboration on digital solutions for sustainable development challenges.",
      logo: <Cpu className="h-12 w-12 text-un-blue" />,
      type: "Academic Department",
    },
    {
      name: "Environmental Engineering Department",
      description:
        "Collaborating on sustainable development initiatives, climate action projects, and environmental awareness campaigns.",
      logo: <Leaf className="h-12 w-12 text-un-blue" />,
      type: "Academic Department",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our University Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with academic institutions to advance education, research, and implementation of the UN
            Sustainable Development Goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {universityPartners.map((partner, index) => (
            <Card key={index} className="overflow-hidden border-un-blue/10 hover:border-un-blue/30 transition-colors">
              <div className="flex flex-col">
                <div className="flex items-center justify-center p-6 bg-un-blue/5">{partner.logo}</div>
                <div>
                  <CardHeader>
                    <CardTitle>{partner.name}</CardTitle>
                    <CardDescription>{partner.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{partner.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="bg-un-blue hover:bg-un-darkblue">
            <Link href="/partnerships/university">View All University Partners</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
