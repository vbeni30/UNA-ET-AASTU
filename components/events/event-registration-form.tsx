"use client"

import type React from "react"
import { useState, useCallback } from "react"
import debounce from "lodash.debounce"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CalendarCheck, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { EventRegistration } from "@/types"

// Sample upcoming events data
const upcomingEvents = [
  { id: "1", name: "SDG Hackathon 2025", date: "May 15-17, 2025" },
  { id: "2", name: "Environmental Awareness Workshop", date: "June 5, 2025" },
  { id: "3", name: "Human Rights Seminar Series", date: "June 20, 2025" },
  { id: "4", name: "Model UN Conference", date: "July 10-12, 2025" },
  { id: "5", name: "Internship Forum", date: "August 3, 2025" },
]

export function EventRegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studentId: "",
    event: "",
    department: "",
    yearOfStudy: "",
    dietaryRestrictions: "",
    specialRequirements: "",
    agreeToTerms: false,
  })

  const debouncedSubmit = useCallback(
    debounce(async (data: typeof formData) => {
      setIsLoading(true)
      setError(null)

      try {
        // Simulate API call with a timeout
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Create registration object with ID and timestamp
        const registration: EventRegistration = {
          id: uuidv4(),
          ...data,
          registeredAt: new Date().toISOString(),
        }

        // In a real app, you would save this data to a database
        console.log("Registration submitted:", registration)

        // Show success message
        setSubmitted(true)

        // Reset form after submission
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            studentId: "",
            event: "",
            department: "",
            yearOfStudy: "",
            dietaryRestrictions: "",
            specialRequirements: "",
            agreeToTerms: false,
          })
        }, 3000)
      } catch (err) {
        setError("An error occurred while submitting your registration. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }, 300),
    [],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    debouncedSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        {submitted ? (
          <Alert className="mb-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CalendarCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-800 dark:text-green-400">Registration Successful!</AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-500">
              Thank you for registering. You will receive a confirmation email shortly with more details about the
              event.
            </AlertDescription>
          </Alert>
        ) : null}

        {error ? (
          <Alert className="mb-8 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-800 dark:text-red-400">Registration Failed</AlertTitle>
            <AlertDescription className="text-red-700 dark:text-red-500">{error}</AlertDescription>
          </Alert>
        ) : null}

        <Card className="shadow-lg border-un-blue/20">
          <CardHeader className="bg-un-blue/5">
            <CardTitle className="text-2xl text-un-blue">Event Registration</CardTitle>
            <CardDescription>
              Fill out the form below to register for upcoming UNA-ET AASTU Chapter events
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentId">
                      Student ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="studentId"
                      name="studentId"
                      placeholder="Enter your student ID"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Event Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event">
                      Select Event <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("event", value)}
                      value={formData.event}
                      disabled={isLoading}
                      required
                    >
                      <SelectTrigger id="event">
                        <SelectValue placeholder="Select an event" />
                      </SelectTrigger>
                      <SelectContent>
                        {upcomingEvents.map((event) => (
                          <SelectItem key={event.id} value={event.id}>
                            {event.name} ({event.date})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">
                      Department <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("department", value)}
                      value={formData.department}
                      disabled={isLoading}
                      required
                    >
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineering">Software Engineering</SelectItem>
                        <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil-engineering">Civil Engineering</SelectItem>
                        <SelectItem value="chemical-engineering">Chemical Engineering</SelectItem>
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">
                      Year of Study <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("yearOfStudy", value)}
                      value={formData.yearOfStudy}
                      disabled={isLoading}
                      required
                    >
                      <SelectTrigger id="yearOfStudy">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="5">5th Year</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="staff">Staff/Faculty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Input
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    placeholder="Please list any dietary restrictions or allergies"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Special Requirements or Accommodations</Label>
                  <Textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    placeholder="Please list any special requirements or accommodations you may need"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                  required
                  disabled={isLoading}
                />
                <Label htmlFor="agreeToTerms" className="text-sm leading-tight">
                  I agree to the terms and conditions, and I understand that my personal information will be processed
                  in accordance with the UNA-ET AASTU Chapter&apos;s privacy policy.
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-4">
              <Button variant="outline" type="button" disabled={isLoading}>
                Cancel
              </Button>
              <Button type="submit" className="bg-un-blue hover:bg-un-darkblue" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-un-blue" />
            <h3 className="text-lg font-medium">Important Information</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Registration closes 48 hours before the event starts.</li>
            <li>For events with limited capacity, registrations are processed on a first-come, first-served basis.</li>
            <li>You will receive a confirmation email after successful registration.</li>
            <li>
              For any questions or issues with registration, please contact{" "}
              <span className="text-un-blue">events@una-et-aastu.org</span>.
            </li>
            <li>If you need to cancel your registration, please do so at least 24 hours before the event.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
