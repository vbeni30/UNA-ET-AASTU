import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Users, Globe, Lightbulb, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PartnershipBenefitsContent() {
  // Sample partnership benefits
  const benefits = [
    {
      title: "Access to Talent",
      description:
        "Connect with motivated, globally-minded students from AASTU who are passionate about making a difference.",
      icon: <Users className="h-6 w-6 text-un-blue" />,
    },
    {
      title: "Visibility & Recognition",
      description:
        "Gain visibility through our events, publications, and digital platforms, reaching a diverse audience of students, academics, and professionals.",
      icon: <Globe className="h-6 w-6 text-un-blue" />,
    },
    {
      title: "Innovation & Fresh Perspectives",
      description:
        "Tap into fresh ideas and innovative approaches to addressing global challenges from our student members.",
      icon: <Lightbulb className="h-6 w-6 text-un-blue" />,
    },
    {
      title: "SDG Alignment & Impact",
      description:
        "Demonstrate your commitment to the UN Sustainable Development Goals through tangible projects and initiatives.",
      icon: <Target className="h-6 w-6 text-un-blue" />,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with other partner organizations, UN agencies, and stakeholders working on similar global issues.",
      icon: <Users className="h-6 w-6 text-un-blue" />,
    },
    {
      title: "Recognition & Credibility",
      description:
        "Association with the United Nations Association and its principles enhances organizational credibility.",
      icon: <Award className="h-6 w-6 text-un-blue" />,
    },
  ]

  // Partnership tiers
  const partnershipTiers = [
    {
      title: "Strategic Partner",
      description:
        "Our highest level of partnership, reserved for organizations with deep alignment to our mission and substantial collaborative initiatives.",
      benefits: [
        "Featured prominently on all UNA-ET AASTU Chapter materials",
        "Speaking opportunities at major events",
        "Co-branding opportunities for joint initiatives",
        "Priority access to student talent and research capabilities",
        "Customized engagement opportunities",
      ],
    },
    {
      title: "Program Partner",
      description:
        "Organizations that collaborate with us on specific programs or initiatives aligned with the UN SDGs.",
      benefits: [
        "Recognition in program-specific materials",
        "Participation in relevant events and activities",
        "Access to student volunteers and participants",
        "Opportunity to shape program content and direction",
        "Visibility within the specific program community",
      ],
    },
    {
      title: "Supporting Partner",
      description: "Organizations that provide resources, funding, or in-kind support for our activities.",
      benefits: [
        "Recognition on our website and relevant materials",
        "Invitation to partner events and networking opportunities",
        "Regular updates on chapter activities and impact",
        "Opportunities to engage with student members",
        "Certificate of appreciation",
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Partner With Us?</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Partnering with UNA-ET AASTU Chapter offers numerous benefits for organizations committed to global
            citizenship and the UN Sustainable Development Goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-un-blue/10 hover:border-un-blue/30 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                {benefit.icon}
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Partnership Tiers</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer different levels of partnership to accommodate various organizations and their goals.
          </p>
        </div>

        <div className="space-y-6">
          {partnershipTiers.map((tier, index) => (
            <Card key={index} className="border-un-blue/10">
              <CardHeader>
                <CardTitle className="text-xl text-un-blue">{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{tier.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Benefits include:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium mb-4">Ready to Partner With Us?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We welcome conversations with potential partners who share our vision for a better world through the
            implementation of the UN Sustainable Development Goals.
          </p>
          <Button asChild className="bg-un-blue hover:bg-un-darkblue">
            <Link href="/partnerships/join">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

