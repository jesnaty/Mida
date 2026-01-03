"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  EyeIcon,
  MousePointerClickIcon,
  UsersIcon,
  FileTextIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
} from "lucide-react"

// Mock data - replace with real data from your backend
const analyticsData = {
  totalViews: 12453,
  viewsChange: 12.5,
  clicks: 3421,
  clicksChange: -3.2,
  conversions: 234,
  conversionsChange: 8.7,
  activeUsers: 1893,
  activeUsersChange: 15.3,
}

const currentProjects = [
  {
    id: 1,
    name: "Social Media Marketing Campaign",
    type: "Marketing - SMM",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    dueDate: "2024-02-28",
    budget: "$1,200",
  },
  {
    id: 2,
    name: "E-commerce Website Development",
    type: "Software - Website",
    status: "In Progress",
    progress: 40,
    startDate: "2024-01-20",
    dueDate: "2024-03-15",
    budget: "$4,500",
  },
  {
    id: 3,
    name: "SEO Optimization Package",
    type: "Marketing - SEO",
    status: "In Review",
    progress: 85,
    startDate: "2024-01-10",
    dueDate: "2024-02-10",
    budget: "$800",
  },
]

const signedContracts = [
  {
    id: 1,
    name: "Professional Service Agreement - Q1 2024",
    type: "Service Contract",
    signedDate: "2024-01-15",
    value: "$6,500",
    status: "Active",
    expiryDate: "2024-04-15",
  },
  {
    id: 2,
    name: "Marketing Services Retainer",
    type: "Retainer Agreement",
    signedDate: "2024-01-01",
    value: "$2,400/month",
    status: "Active",
    expiryDate: "2024-12-31",
  },
  {
    id: 3,
    name: "Website Development Contract",
    type: "Project Contract",
    signedDate: "2024-01-20",
    value: "$4,500",
    status: "Active",
    expiryDate: "2024-03-15",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          {/* Dashboard Header */}
          <header className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back! Here's your overview</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8 flex-1">
        {/* Analytics Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
                <EyeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{analyticsData.totalViews.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">{analyticsData.viewsChange}%</span>
                  <span className="ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Clicks</CardTitle>
                <MousePointerClickIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{analyticsData.clicks.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowDownIcon className="h-3 w-3 text-red-500 mr-1" />
                  <span className="text-red-500">{Math.abs(analyticsData.clicksChange)}%</span>
                  <span className="ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Conversions</CardTitle>
                <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{analyticsData.conversions.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">{analyticsData.conversionsChange}%</span>
                  <span className="ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{analyticsData.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500">{analyticsData.activeUsersChange}%</span>
                  <span className="ml-1">from last month</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Current Projects</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {currentProjects.map((project) => (
              <Card key={project.id} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{project.name}</CardTitle>
                      <CardDescription>{project.type}</CardDescription>
                    </div>
                    <Badge
                      variant={project.status === "In Progress" ? "default" : "secondary"}
                      className={
                        project.status === "In Progress"
                          ? "bg-purple-600 text-white"
                          : "bg-yellow-600/20 text-yellow-600"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Start Date</p>
                      <p className="font-medium text-foreground">{project.startDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Due Date</p>
                      <p className="font-medium text-foreground">{project.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">Budget</span>
                    <span className="font-bold text-primary text-lg">{project.budget}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Signed Contracts Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Signed Contracts</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <Card className="border-border bg-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Contract Name</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Signed Date</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Value</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Expiry</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signedContracts.map((contract) => (
                      <tr key={contract.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">{contract.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{contract.type}</td>
                        <td className="p-4 text-sm text-muted-foreground">{contract.signedDate}</td>
                        <td className="p-4">
                          <span className="font-semibold text-primary">{contract.value}</span>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30">
                            <CheckCircleIcon className="h-3 w-3 mr-1" />
                            {contract.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ClockIcon className="h-3 w-3" />
                            {contract.expiryDate}
                          </div>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                            <DownloadIcon className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
          </main>
        </div>
      </div>
    </div>
  )
}
