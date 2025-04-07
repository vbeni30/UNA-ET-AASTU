import { Calendar, Users, BookOpen, MessageSquare, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function HumanRightsSeminarContent() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Our Human Rights Seminar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              The AASTU UN Association Human Rights Seminar is a flagship initiative that brings together 
              students, academics, activists, and policymakers to discuss pressing human rights issues 
              both locally and globally. Through educational sessions, workshops, and advocacy campaigns, 
              we aim to foster a deeper understanding of human rights principles and challenges.
            </p>
            <p className="text-lg mb-4">
              Our seminar series aligns with the Universal Declaration of Human Rights and the UN Sustainable 
              Development Goals, particularly SDG 10 (Reduced Inequalities) and SDG 16 (Peace, Justice and 
              Strong Institutions). We believe that education and dialogue are powerful tools for promoting 
              human rights awareness and action.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Seminar Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Users className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                <span>Gender equality and women's rights</span>
              </li>
              <li className="flex items-start">
                <BookOpen className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                <span>Right to education and cultural rights</span>
              </li>
              <li className="flex items-start">
                <MessageSquare className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                <span>Freedom of expression and digital rights</span>
              </li>
              <li className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                <span>Refugee rights and migration</span>
              </li>
              <li className="flex items-start">
                <Award className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                <span>Indigenous peoples' rights</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Upcoming Seminars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle>Digital Rights in the Age of AI</CardTitle>
                <Badge className="bg-purple-600">Featured</Badge>
              </div>
              <CardDescription>Exploring privacy, surveillance, and freedom in the digital era</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This seminar will examine how artificial intelligence and digital technologies 
                are reshaping our understanding of human rights, with a focus on privacy, 
                surveillance, and freedom of expression.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>March 15, 2024 • 2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Main Auditorium, Technology Building</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Women's Rights and Gender Equality</CardTitle>
              <CardDescription>Addressing challenges and celebrating progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Join us for a comprehensive discussion on the current state of women's rights 
                globally, with a special focus on education, economic empowerment, and 
                political participation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>April 8, 2024 • 3:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Conference Hall, Social Sciences Building</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Refugee Rights in Ethiopia</CardTitle>
              <CardDescription>Local challenges and international frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This seminar will explore the legal frameworks protecting refugee rights, 
                current challenges in Ethiopia and the Horn of Africa, and opportunities 
                for student engagement and advocacy.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>May 20, 2024 • 1:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Lecture Hall 3, Law Building</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Past Seminars & Resources</h2>
        <Tabs defaultValue="2023" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3">
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2022">2022</TabsTrigger>
            <TabsTrigger value="2021">2021</TabsTrigger>
          </TabsList>
          <TabsContent value="2023" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Indigenous Rights and Environmental Justice</CardTitle>
                  <CardDescription>November 12, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This seminar explored the intersection of indigenous rights and environmental 
                    protection, featuring speakers from indigenous communities and environmental organizations.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Right to Education in Post-Conflict Regions</CardTitle>
                  <CardDescription>September 5, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A comprehensive discussion on educational challenges in post-conflict areas, 
                    with case studies from Ethiopia and neighboring countries.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="2022" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Privacy and Surveillance</CardTitle>
                  <CardDescription>October 18, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    An examination of the balance between security and privacy in the digital age, 
                    with a focus on legal frameworks and individual rights.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Children's Rights and Protection</CardTitle>
                  <CardDescription>March 22, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This seminar addressed the challenges of protecting children's rights, 
                    with a special focus on education, health, and protection from exploitation.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="2021" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Human Rights in Pandemic Response</CardTitle>
                  <CardDescription>November 5, 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    An analysis of how the COVID-19 pandemic affected human rights globally, 
                    with lessons for future public health emergencies.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Freedom of Expression and Media Rights</CardTitle>
                  <CardDescription>April 3, 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This seminar explored the challenges facing journalists and media organizations, 
                    with a focus on legal protections and digital safety.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Photos</Button>
                  <Button variant="outline">Download Materials</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="text-lg mb-6">
            There are many ways to participate in our Human Rights Seminar series, whether you're 
            interested in attending events, volunteering, or contributing to research and advocacy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attend Seminars</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our seminars are open to all AASTU students and faculty. Registration is required 
                  for most events to ensure adequate seating and materials.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">View Calendar</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Join the Research Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Help research human rights issues, prepare briefing papers, and develop 
                  educational materials for our seminars and advocacy campaigns.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Now</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Become a Facilitator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Develop your leadership skills by facilitating discussions, workshops, 
                  and activities during our human rights seminars.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Contact the Human Rights Seminar Team</h2>
        <Card>
          <CardContent className="pt-6">\

\

\

\

\

\

\

