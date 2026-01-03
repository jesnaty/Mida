export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Team</h1>
        <p className="text-muted-foreground mt-2">Manage your team members and permissions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "John Doe", role: "Account Manager", email: "john@example.com", status: "Active" },
          { name: "Sarah Smith", role: "Project Lead", email: "sarah@example.com", status: "Active" },
          { name: "Mike Johnson", role: "Developer", email: "mike@example.com", status: "Active" },
        ].map((member) => (
          <div key={member.email} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-semibold">
                {member.name[0]}
              </div>
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{member.email}</p>
            <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
