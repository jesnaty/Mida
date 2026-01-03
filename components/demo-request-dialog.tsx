"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DemoRequestDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFormData({ name: "", email: "", company: "", message: "" })
        setTimeout(() => {
          setSuccess(false)
          setOpen(false)
        }, 2000)
      } else {
        setError(data.message || "Failed to submit request. Please try again.")
      }
    } catch (err) {
      console.error("Error submitting demo request:", err)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you soon to schedule your personalized demo.
          </DialogDescription>
        </DialogHeader>
        {success ? (
          <div className="py-4 text-center">
            <p className="text-green-600 font-medium">Demo request submitted successfully!</p>
            <p className="text-sm text-muted-foreground mt-2">We'll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your needs..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                disabled={isLoading}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <DialogFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit Request"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

