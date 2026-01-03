"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Contracts</h1>
                <p className="text-muted-foreground mt-2">View and manage all your signed contracts</p>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Contract ID</th>
                        <th className="text-left p-4 font-semibold">Service</th>
                        <th className="text-left p-4 font-semibold">Start Date</th>
                        <th className="text-left p-4 font-semibold">End Date</th>
                        <th className="text-left p-4 font-semibold">Value</th>
                        <th className="text-left p-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        {
                          id: "CNT-2024-001",
                          service: "Social Media Management",
                          startDate: "Dec 1, 2024",
                          endDate: "Feb 28, 2025",
                          value: "$1,500",
                          status: "Active",
                        },
                        {
                          id: "CNT-2024-002",
                          service: "Website Development",
                          startDate: "Jan 1, 2025",
                          endDate: "Mar 31, 2025",
                          value: "$5,000",
                          status: "Active",
                        },
                        {
                          id: "CNT-2023-045",
                          service: "SEO Optimization",
                          startDate: "Nov 1, 2024",
                          endDate: "Dec 31, 2024",
                          value: "$800",
                          status: "Completed",
                        },
                      ].map((contract) => (
                        <tr key={contract.id} className="hover:bg-muted/50">
                          <td className="p-4 font-mono text-sm">{contract.id}</td>
                          <td className="p-4">{contract.service}</td>
                          <td className="p-4 text-muted-foreground">{contract.startDate}</td>
                          <td className="p-4 text-muted-foreground">{contract.endDate}</td>
                          <td className="p-4 font-semibold">{contract.value}</td>
                          <td className="p-4">
                            <span
                              className={
                                contract.status === "Active"
                                  ? "px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                                  : "px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                              }
                            >
                              {contract.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
