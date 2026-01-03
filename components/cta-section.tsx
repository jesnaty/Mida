"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSubmitted(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setEmail("")
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        setError(data.message || "Something went wrong. Please try again.")
        setSubmitted(false)
      }
    } catch (err) {
      console.error("Error submitting waitlist:", err)
      setError("Failed to submit. Please try again.")
      setSubmitted(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Ready to transform your business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/80 text-pretty leading-relaxed">
            Join the waitlist and be among the first to access our complete suite of marketing and software solutions
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background text-foreground"
              disabled={submitted}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={submitted}
            >
              {submitted ? "Added to Waitlist!" : "Join Waitlist"}
              {!submitted && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {error && (
            <p className="mt-4 text-sm text-red-300">{error}</p>
          )}
          <p className="mt-6 text-sm text-primary-foreground/60">No spam, ever. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
