import { Calendar, Users, Globe, Leaf, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EnvironmentalCampaignContent() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Our Environmental Campaign</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              The AASTU UN Association Environmental Campaign is a student-led initiative focused on promoting
              environmental sustainability both on campus and in the wider community. We believe that local action can
              lead to global impact, especially when it comes to environmental challenges.
            </p>
            <p className="text-lg mb-4">
              Our campaign aligns with the UN Sustainable Development Goals, particularly SDG 13 (Climate Action), SDG
              14 (Life Below Water), and SDG 15 (Life on Land). Through awareness, education, and direct action, we aim
              to create a more sustainable future.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Campaign Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Leaf className="h-5 w-5 mr-2 text-green-600 mt-1" />
                <span>Campus-wide tree planting initiatives</span>
              </li>
              <li className="flex items-start">
                <Globe className="h-5 w-5 mr-2 text-green-600 mt-1" />
                <span>Waste reduction and recycling programs</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 mr-2 text-green-600 mt-1" />
                <span>Community clean-up events</span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-green-600 mt-1" />
                <span>Environmental awareness workshops</span>
              </li>
              <li className="flex items-start">
                <Award className="h-5 w-5 mr-2 text-green-600 mt-1" />
                <span>Sustainable innovation competitions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Current Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Green Campus Challenge</CardTitle>
              <CardDescription>Transforming AASTU into a model of sustainability</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A semester-long competition between departments to reduce energy consumption, increase recycling rates,
                and implement green innovations on campus.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium">Timeline:</span> September - December 2023
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Addis River Restoration</CardTitle>
              <CardDescription>Cleaning and protecting our local waterways</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A collaborative project with local communities to clean up river pollution, restore riparian habitats,
                and establish ongoing monitoring systems.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium">Timeline:</span> Monthly clean-ups, year-round
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sustainable Solutions Workshop</CardTitle>
              <CardDescription>Developing practical environmental innovations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A series of workshops where students collaborate to design and prototype solutions to environmental
                challenges facing our community.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium">Timeline:</span> Bi-weekly workshops
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Impact & Achievements</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1,500+</div>
              <p className="text-lg">Trees Planted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <p className="text-lg">Tons of Waste Recycled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <p className="text-lg">Community Clean-ups</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-lg">Students Engaged</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="text-lg mb-6">
            There are many ways to contribute to our environmental campaign, regardless of your experience level or time
            commitment. Join us in making a difference!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Tree planting events</li>
                  <li>• Campus clean-up days</li>
                  <li>• Awareness campaign team</li>
                  <li>• Workshop facilitators</li>
                  <li>• Social media and communications</li>
                </ul>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">Sign Up as Volunteer</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Environmental Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Earth Day Campus Celebration</h4>
                    <p className="text-sm text-muted-foreground">April 22, 2024 • Main Campus</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sustainable Innovation Hackathon</h4>
                    <p className="text-sm text-muted-foreground">May 15-16, 2024 • Technology Building</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">World Environment Day Workshop</h4>
                    <p className="text-sm text-muted-foreground">June 5, 2024 • Science Center</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  View All Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Contact the Environmental Campaign Team</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Campaign Coordinators</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Abebe Kebede</p>
                    <p className="text-sm text-muted-foreground">Environmental Campaign Lead</p>
                    <p className="text-sm">abebe.kebede@aastu.edu.et</p>
                  </div>
                  <div>
                    <p className="font-medium">Sara Mohammed</p>
                    <p className="text-sm text-muted-foreground">Community Outreach Coordinator</p>
                    <p className="text-sm">sara.mohammed@aastu.edu.et</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Get Updates</h3>
                <p className="mb-4">
                  Subscribe to our newsletter to stay informed about upcoming environmental initiatives and how you can
                  participate.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

// Export as default as well
export default EnvironmentalCampaignContent

