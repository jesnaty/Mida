"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Analytics</h1>
                <p className="text-muted-foreground mt-2">Track your performance metrics and insights</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Total Revenue", value: "$24,500", change: "+12.5%", positive: true },
                  { label: "Active Projects", value: "8", change: "+2", positive: true },
                  { label: "Completed Tasks", value: "156", change: "+8.2%", positive: true },
                  { label: "Client Satisfaction", value: "98%", change: "+3%", positive: true },
                ].map((metric) => (
                  <div key={metric.label} className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold mb-2">{metric.value}</p>
                    <p className={metric.positive ? "text-primary text-sm" : "text-destructive text-sm"}>
                      {metric.change} from last month
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart visualization would go here
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
