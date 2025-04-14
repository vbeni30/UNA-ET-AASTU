"use client"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function LeadershipPositionsContent() {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Leadership Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Core Committee Leadership Positions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Take the next step in your leadership journey by applying for a position within the UNA-ET AASTU Chapter.
          </p>
        </div>

        {/* Introduction section with benefits, opportunities, and responsibilities */}
        <div className="mb-16">
          <Card className="border-blue-100 dark:border-blue-900/30">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Benefits & Opportunities
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Develop essential leadership and management skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Build a strong professional network with peers and faculty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Enhance your resume with valuable leadership experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Opportunity to represent AASTU at regional and national events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Access to specialized leadership training and workshops</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Core Responsibilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Attend regular committee meetings and executive sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Develop and implement strategic plans for your committee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Collaborate with other committee chairs on cross-functional projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Recruit and manage committee members and volunteers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Report progress and outcomes to the executive committee</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Media and Communication Chair
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Oversees all chapter communications, social media presence, and promotional materials. Responsible
                    for maintaining the chapter's brand identity and public relations.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Manage social media accounts and website content</li>
                    <li>• Create newsletters and promotional materials</li>
                    <li>• Coordinate press releases and media relations</li>
                    <li>• Document chapter events through photos and videos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Membership and Outreach Chair
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Leads recruitment efforts and member engagement initiatives. Focuses on growing and maintaining an
                    active membership base through strategic outreach.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Develop and implement recruitment strategies</li>
                    <li>• Maintain membership database and communications</li>
                    <li>• Organize member orientation and engagement activities</li>
                    <li>• Build relationships with other student organizations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Events and Logistics Chair
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Plans and executes all chapter events, from small meetings to large conferences. Handles all
                    logistical aspects of event management.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Plan and coordinate chapter events and activities</li>
                    <li>• Manage event budgets and resources</li>
                    <li>• Secure venues and necessary equipment</li>
                    <li>• Coordinate with speakers and special guests</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    Education and Training Chair
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Develops educational content and training programs for members. Focuses on building capacity and
                    knowledge related to UN initiatives and SDGs.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Create educational workshops and training materials</li>
                    <li>• Organize skill-building sessions for members</li>
                    <li>• Develop resources on UN initiatives and SDGs</li>
                    <li>• Coordinate with faculty advisors on academic content</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild className="rounded-full">
                  <Link href="/membership/apply">
                    Apply for Leadership Position
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className="relative"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s 0.3s, transform 0.7s 0.3s",
          }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Leadership Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Professional Development</h4>
                <p className="text-sm">
                  Gain valuable leadership experience that enhances your resume and career prospects.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Networking Opportunities</h4>
                <p className="text-sm">
                  Connect with UNA-ET leadership, university administration, and external partners.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Make an Impact</h4>
                <p className="text-sm">Shape the direction of the chapter and contribute to meaningful initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
