"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Notifications</h1>
                <p className="text-muted-foreground mt-2">Stay updated with important alerts</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "New Project Assigned",
                      description: "You have been assigned to the Social Media Campaign project",
                      time: "1 hour ago",
                      type: "info",
                    },
                    {
                      title: "Payment Received",
                      description: "Payment of $499 has been processed successfully",
                      time: "3 hours ago",
                      type: "success",
                    },
                    {
                      title: "Contract Expiring Soon",
                      description: "Your contract CNT-2023-045 will expire in 7 days",
                      time: "1 day ago",
                      type: "warning",
                    },
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${notification.type === "success" ? "bg-primary" : notification.type === "warning" ? "bg-yellow-500" : "bg-blue-500"}`}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-semibold">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.time}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{notification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
