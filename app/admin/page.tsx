"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Download, Loader2, Lock, Search, UserCheck } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type { EventRegistration } from "@/types"

// Mock data for the admin dashboard
const MOCK_SUBMISSIONS: EventRegistration[] = [
  {
    id: "1",
    fullName: "Abebe Kebede",
    email: "abebe.kebede@example.com",
    phone: "+251912345678",
    studentId: "ETS0123/12",
    event: "1",
    department: "software-engineering",
    yearOfStudy: "3",
    dietaryRestrictions: "None",
    specialRequirements: "",
    registeredAt: "2025-04-01T10:30:00.000Z",
  },
  {
    id: "2",
    fullName: "Tigist Haile",
    email: "tigist.haile@example.com",
    phone: "+251923456789",
    studentId: "ETS0234/12",
    event: "1",
    department: "electrical-engineering",
    yearOfStudy: "2",
    dietaryRestrictions: "Vegetarian",
    specialRequirements: "",
    registeredAt: "2025-04-02T09:15:00.000Z",
  },
  {
    id: "3",
    fullName: "Dawit Tadesse",
    email: "dawit.tadesse@example.com",
    phone: "+251934567890",
    studentId: "ETS0345/12",
    event: "2",
    department: "mechanical-engineering",
    yearOfStudy: "4",
    dietaryRestrictions: "",
    specialRequirements: "Requires wheelchair access",
    registeredAt: "2025-04-02T14:45:00.000Z",
  },
  {
    id: "4",
    fullName: "Sara Mohammed",
    email: "sara.mohammed@example.com",
    phone: "+251945678901",
    studentId: "ETS0456/12",
    event: "4",
    department: "civil-engineering",
    yearOfStudy: "3",
    dietaryRestrictions: "Halal",
    specialRequirements: "",
    registeredAt: "2025-04-03T11:20:00.000Z",
  },
  {
    id: "5",
    fullName: "Yonas Girma",
    email: "yonas.girma@example.com",
    phone: "+251956789012",
    studentId: "ETS0567/12",
    event: "5",
    department: "architecture",
    yearOfStudy: "5",
    dietaryRestrictions: "",
    specialRequirements: "",
    registeredAt: "2025-04-03T16:10:00.000Z",
  },
]

export default function AdminDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submissions, setSubmissions] = useState<EventRegistration[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Demo password for the admin dashboard
  const DEMO_PASSWORD = "admin123"

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Simulate API call with a timeout
    setTimeout(() => {
      if (password === DEMO_PASSWORD) {
        setIsAuthorized(true)
        setSubmissions(MOCK_SUBMISSIONS)
      } else {
        setError("Invalid password. Please try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  // Filter submissions based on search term and active tab
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.studentId.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch

    // Filter by event type
    return matchesSearch && submission.event === activeTab
  })

  // Export submissions as CSV
  const exportCSV = () => {
    // Create CSV header
    const headers = [
      "ID",
      "Full Name",
      "Email",
      "Phone",
      "Student ID",
      "Event",
      "Department",
      "Year of Study",
      "Dietary Restrictions",
      "Special Requirements",
      "Registered At",
    ]

    // Convert submissions to CSV rows
    const rows = filteredSubmissions.map((s) => [
      s.id,
      s.fullName,
      s.email,
      s.phone,
      s.studentId,
      s.event,
      s.department,
      s.yearOfStudy,
      s.dietaryRestrictions,
      s.specialRequirements,
      s.registeredAt,
    ])

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n")

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `event-registrations-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Get event name from ID
  const getEventName = (eventId: string) => {
    const events: Record<string, string> = {
      "1": "SDG Hackathon 2025",
      "2": "Environmental Awareness Workshop",
      "3": "Human Rights Seminar Series",
      "4": "Model UN Conference",
      "5": "Internship Forum",
    }
    return events[eventId] || eventId
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Format department
  const formatDepartment = (dept: string) => {
    return dept
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // If loading
  if (isLoading) {
    return (
      <div className="container flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-un-blue" />
          <h2 className="text-xl font-semibold">Loading...</h2>
          <p className="text-muted-foreground">Please wait while we verify your credentials</p>
        </div>
      </div>
    )
  }

  // If not authorized
  if (!isAuthorized) {
    return (
      <div className="container py-12 max-w-md mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-12 w-12 text-un-blue" />
            </div>
            <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
            <CardDescription className="text-center">
              Please enter your password to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert className="mb-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertTitle className="text-red-800 dark:text-red-400">Access Denied</AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-500">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">Demo password: admin123</p>
              </div>
              <Button type="submit" className="w-full bg-un-blue hover:bg-un-darkblue">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Admin dashboard
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-un-blue">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage event registrations and submissions</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search registrations..."
              className="pl-8 w-full md:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-1" onClick={exportCSV}>
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Event Registrations</CardTitle>
              <CardDescription>
                {filteredSubmissions.length} {filteredSubmissions.length === 1 ? "registration" : "registrations"} found
              </CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <UserCheck className="h-3.5 w-3.5" />
              <span>{submissions.length} Total</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="1">SDG Hackathon</TabsTrigger>
              <TabsTrigger value="2">Environmental Workshop</TabsTrigger>
              <TabsTrigger value="4">Model UN</TabsTrigger>
              <TabsTrigger value="5">Internship Forum</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.length > 0 ? (
                      filteredSubmissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell className="font-medium">{submission.fullName}</TableCell>
                          <TableCell>{submission.email}</TableCell>
                          <TableCell>{submission.studentId}</TableCell>
                          <TableCell>{getEventName(submission.event)}</TableCell>
                          <TableCell>{formatDepartment(submission.department)}</TableCell>
                          <TableCell>{formatDate(submission.registeredAt)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                          No registrations found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
