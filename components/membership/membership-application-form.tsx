"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-hook-inview"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Upload, User, Mail, Phone } from "lucide-react"

export function MembershipApplicationForm() {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const [membershipType, setMembershipType] = useState("student")
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    yearOfStudy: "",
    position: "",
    institution: "",
    teachingExperience: "",
    cvUploaded: false,
    motivationCompleted: false,
    agreeToTerms: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: string) => {
    setFormState((prev) => ({ ...prev, [field]: true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    alert(`Application for ${membershipType} membership submitted successfully!`)
  }

  const leadershipPositions = [
    "Media and Communication Chair",
    "Membership and Outreach Chair",
    "Events and Logistics Chair",
    "Education and Training Chair",
  ]

  const departments = [
    "Computer Science & Engineering",
    "Electrical & Computer Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Materials Science",
    "Biotechnology",
    "Industrial Engineering",
    "Software Engineering",
    "Other",
  ]

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
            Join Our Community
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Membership Application
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Select your membership type and complete the application form to join the UNA-ET AASTU Chapter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <Card className="border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="student" className="w-full" onValueChange={(value) => setMembershipType(value)}>
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="student">Student</TabsTrigger>
                    <TabsTrigger value="active">Active Member</TabsTrigger>
                    <TabsTrigger value="leadership">Leadership</TabsTrigger>
                    <TabsTrigger value="educator">Professional Educator</TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Fields for All Membership Types */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            className="pl-10"
                            value={formState.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            className="pl-10"
                            value={formState.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10"
                            value={formState.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            className="pl-10"
                            value={formState.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Student and Active Member Fields */}
                    <TabsContent value="student" className="space-y-6 mt-0">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select onValueChange={(value) => handleInputChange("department", value)} required>
                            <SelectTrigger id="department" className="w-full">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((department) => (
                                <SelectItem key={department} value={department}>
                                  {department}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearOfStudy">Year of Study</Label>
                          <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)} required>
                            <SelectTrigger id="yearOfStudy" className="w-full">
                              <SelectValue placeholder="Select your year of study" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">First Year</SelectItem>
                              <SelectItem value="2">Second Year</SelectItem>
                              <SelectItem value="3">Third Year</SelectItem>
                              <SelectItem value="4">Fourth Year</SelectItem>
                              <SelectItem value="5">Fifth Year</SelectItem>
                              <SelectItem value="graduate">Graduate Student</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="studentMotivation">Why do you want to join?</Label>
                        <Textarea
                          id="studentMotivation"
                          placeholder="Tell us why you're interested in joining the UNA-ET AASTU Chapter and what you hope to gain from membership..."
                          className="min-h-[150px]"
                          onChange={() => handleInputChange("motivationCompleted", true)}
                          required
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="active" className="space-y-6 mt-0">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select onValueChange={(value) => handleInputChange("department", value)} required>
                            <SelectTrigger id="department" className="w-full">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((department) => (
                                <SelectItem key={department} value={department}>
                                  {department}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearOfStudy">Year of Study</Label>
                          <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)} required>
                            <SelectTrigger id="yearOfStudy" className="w-full">
                              <SelectValue placeholder="Select your year of study" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">First Year</SelectItem>
                              <SelectItem value="2">Second Year</SelectItem>
                              <SelectItem value="3">Third Year</SelectItem>
                              <SelectItem value="4">Fourth Year</SelectItem>
                              <SelectItem value="5">Fifth Year</SelectItem>
                              <SelectItem value="graduate">Graduate Student</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Areas of Interest</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-sdg" />
                            <label
                              htmlFor="interest-sdg"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Sustainable Development Goals
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-modelun" />
                            <label
                              htmlFor="interest-modelun"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Model UN
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-events" />
                            <label
                              htmlFor="interest-events"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Event Planning
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-outreach" />
                            <label
                              htmlFor="interest-outreach"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Community Outreach
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-research" />
                            <label
                              htmlFor="interest-research"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Research & Policy
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="interest-media" />
                            <label
                              htmlFor="interest-media"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Media & Communications
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cv">Upload CV/Resume</Label>
                        <div className="border-2 border-dashed border-blue-200 dark:border-blue-900/30 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Upload className="h-8 w-8 text-blue-500" />
                            <p className="text-sm text-muted-foreground">
                              {formState.cvUploaded
                                ? "CV uploaded successfully"
                                : "Drag and drop your CV here, or click to browse"}
                            </p>
                            <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 5MB)</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2"
                              onClick={() => handleFileUpload("cvUploaded")}
                            >
                              {formState.cvUploaded ? "Replace File" : "Select File"}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="activeMotivation">Why do you want to be an active member?</Label>
                        <Textarea
                          id="activeMotivation"
                          placeholder="Tell us why you're interested in becoming an active member and how you plan to contribute to the chapter..."
                          className="min-h-[150px]"
                          onChange={() => handleInputChange("motivationCompleted", true)}
                          required
                        />
                      </div>
                    </TabsContent>

                    {/* Leadership Fields */}
                    <TabsContent value="leadership" className="space-y-6 mt-0">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select onValueChange={(value) => handleInputChange("department", value)} required>
                            <SelectTrigger id="department" className="w-full">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((department) => (
                                <SelectItem key={department} value={department}>
                                  {department}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="yearOfStudy">Year of Study</Label>
                          <Select onValueChange={(value) => handleInputChange("yearOfStudy", value)} required>
                            <SelectTrigger id="yearOfStudy" className="w-full">
                              <SelectValue placeholder="Select your year of study" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">First Year</SelectItem>
                              <SelectItem value="2">Second Year</SelectItem>
                              <SelectItem value="3">Third Year</SelectItem>
                              <SelectItem value="4">Fourth Year</SelectItem>
                              <SelectItem value="5">Fifth Year</SelectItem>
                              <SelectItem value="graduate">Graduate Student</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Desired Position</Label>
                        <Select onValueChange={(value) => handleInputChange("position", value)} required>
                          <SelectTrigger id="position" className="w-full">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {leadershipPositions.map((position) => (
                              <SelectItem key={position} value={position}>
                                {position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cv">Upload CV/Resume</Label>
                        <div className="border-2 border-dashed border-blue-200 dark:border-blue-900/30 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Upload className="h-8 w-8 text-blue-500" />
                            <p className="text-sm text-muted-foreground">
                              {formState.cvUploaded
                                ? "CV uploaded successfully"
                                : "Drag and drop your CV here, or click to browse"}
                            </p>
                            <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 5MB)</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2"
                              onClick={() => handleFileUpload("cvUploaded")}
                            >
                              {formState.cvUploaded ? "Replace File" : "Select File"}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="leadershipEssay">Leadership Essay</Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Write a brief essay (300-500 words) explaining why you're interested in this position and what
                          qualifies you for the role.
                        </p>
                        <Textarea
                          id="leadershipEssay"
                          placeholder="Enter your essay here..."
                          className="min-h-[200px]"
                          onChange={() => handleInputChange("motivationCompleted", true)}
                          required
                        />
                      </div>
                    </TabsContent>

                    {/* Professional Educator Fields */}
                    <TabsContent value="educator" className="space-y-6 mt-0">
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution/School</Label>
                        <Input
                          id="institution"
                          placeholder="Enter your institution or school name"
                          value={formState.institution}
                          onChange={(e) => handleInputChange("institution", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teachingExperience">Years of Teaching Experience</Label>
                        <Select onValueChange={(value) => handleInputChange("teachingExperience", value)} required>
                          <SelectTrigger id="teachingExperience" className="w-full">
                            <SelectValue placeholder="Select years of experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="11-15">11-15 years</SelectItem>
                            <SelectItem value="16+">16+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Areas of Expertise</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-sdg" />
                            <label
                              htmlFor="expertise-sdg"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Sustainable Development
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-ir" />
                            <label
                              htmlFor="expertise-ir"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              International Relations
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-env" />
                            <label
                              htmlFor="expertise-env"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Environmental Science
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-policy" />
                            <label
                              htmlFor="expertise-policy"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Policy & Governance
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-econ" />
                            <label
                              htmlFor="expertise-econ"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Economics
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="expertise-other" />
                            <label
                              htmlFor="expertise-other"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cv">Upload CV/Resume</Label>
                        <div className="border-2 border-dashed border-blue-200 dark:border-blue-900/30 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Upload className="h-8 w-8 text-blue-500" />
                            <p className="text-sm text-muted-foreground">
                              {formState.cvUploaded
                                ? "CV uploaded successfully"
                                : "Drag and drop your CV here, or click to browse"}
                            </p>
                            <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 5MB)</p>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2"
                              onClick={() => handleFileUpload("cvUploaded")}
                            >
                              {formState.cvUploaded ? "Replace File" : "Select File"}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="educatorMotivation">How do you plan to contribute?</Label>
                        <Textarea
                          id="educatorMotivation"
                          placeholder="Tell us how you plan to contribute to the chapter and what educational initiatives you're interested in supporting..."
                          className="min-h-[150px]"
                          onChange={() => handleInputChange("motivationCompleted", true)}
                          required
                        />
                      </div>
                    </TabsContent>

                    {/* Terms and Conditions for All */}
                    <div className="flex items-start space-x-2 pt-4">
                      <Checkbox
                        id="terms"
                        checked={formState.agreeToTerms as boolean}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                          By submitting this application, I agree to abide by the UNA-ET AASTU Chapter's code of conduct
                          and participate in chapter activities.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full rounded-full">
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-blue-100 dark:border-blue-900/30 sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Submit Application</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete the form with your personal information and required documents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Application Review</h4>
                      <p className="text-sm text-muted-foreground">
                        Our team will review your application within 5-7 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Confirmation</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an email confirmation with next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 dark:text-blue-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Orientation</h4>
                      <p className="text-sm text-muted-foreground">
                        Attend a new member orientation session to get started.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                  <h4 className="font-medium mb-2">Important Dates</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex justify-between">
                      <span>Application Period:</span>
                      <span className="font-medium">Year-round</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Leadership Applications:</span>
                      <span className="font-medium">April 1-15</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Orientation Sessions:</span>
                      <span className="font-medium">Monthly</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">
                    If you have any questions about the application process, please contact us at{" "}
                    <a href="mailto:membership@unaetaastu.org" className="text-blue-600 hover:underline">
                      membership@unaetaastu.org
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Join Our Global Movement</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Make an Impact</h4>
                <p className="text-sm">
                  Contribute to meaningful initiatives that address global challenges and promote sustainable
                  development.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Develop Skills</h4>
                <p className="text-sm">
                  Gain valuable experience in leadership, project management, communication, and international affairs.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Build Connections</h4>
                <p className="text-sm">
                  Connect with like-minded individuals, professionals, and organizations working toward common goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
