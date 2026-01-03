"use client"

export default function BillingPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex-1">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground mt-2">Manage your payments and invoices</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold">Professional Plan</p>
              <p className="text-muted-foreground">$499/month</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Upgrade Plan
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Invoices</h3>
          <div className="space-y-3">
            {[
              { id: "INV-001", date: "Jan 1, 2025", amount: "$499", status: "Paid" },
              { id: "INV-002", date: "Dec 1, 2024", amount: "$499", status: "Paid" },
              { id: "INV-003", date: "Nov 1, 2024", amount: "$499", status: "Paid" },
            ].map((invoice) => (
              <div key={invoice.id} className="flex justify-between items-center p-4 border border-border rounded-lg">
                <div>
                  <p className="font-semibold">{invoice.id}</p>
                  <p className="text-sm text-muted-foreground">{invoice.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{invoice.amount}</p>
                  <p className="text-sm text-primary">{invoice.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}