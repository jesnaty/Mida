export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground mt-2">Communicate with your team and clients</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[
            {
              sender: "Sarah Smith",
              message: "Project update: Website design is 80% complete",
              time: "2 hours ago",
              unread: true,
            },
            {
              sender: "Client Support",
              message: "Your ticket has been resolved",
              time: "5 hours ago",
              unread: false,
            },
            {
              sender: "Mike Johnson",
              message: "Can we schedule a meeting for tomorrow?",
              time: "1 day ago",
              unread: false,
            },
          ].map((msg, index) => (
            <div
              key={index}
              className={`p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors ${msg.unread ? "bg-primary/5" : ""}`}
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold">{msg.sender}</p>
                <p className="text-sm text-muted-foreground">{msg.time}</p>
              </div>
              <p className="text-muted-foreground">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
