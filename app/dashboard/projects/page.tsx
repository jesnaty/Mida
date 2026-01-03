"use client"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex-1">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-2">Manage your ongoing and completed projects</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Social Media Campaign",
              client: "Tech Startup Inc.",
              status: "In Progress",
              progress: 65,
              dueDate: "Jan 30, 2025",
            },
            {
              name: "Website Redesign",
              client: "Fashion Brand Co.",
              status: "In Progress",
              progress: 40,
              dueDate: "Feb 15, 2025",
            },
            {
              name: "SEO Optimization",
              client: "E-commerce Store",
              status: "Pending Review",
              progress: 90,
              dueDate: "Jan 25, 2025",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-primary font-medium">{project.status}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium">{project.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}