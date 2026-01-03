"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    {[
                      "Email notifications",
                      "SMS alerts",
                      "Project updates",
                      "Marketing emails",
                    ].map((pref) => (
                      <label key={pref} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4" defaultChecked />
                        <span>{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
