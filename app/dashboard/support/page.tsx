"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardNav } from "@/components/dashboard-nav"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardNav />
          
          <main className="container mx-auto px-4 py-8 flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Help & Support</h1>
                <p className="text-muted-foreground mt-2">Get assistance and find answers</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        className="w-full px-3 py-2 bg-background border border-border rounded-lg h-32"
                        placeholder="Describe your issue..."
                      />
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {[
                      "Documentation",
                      "Video Tutorials",
                      "FAQs",
                      "Community Forum",
                      "API Reference",
                      "Status Page",
                    ].map(
                      (link) => (
                        <a
                          key={link}
                          href="#"
                          className="block p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                          {link}
                        </a>
                      ),
                    )}
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
