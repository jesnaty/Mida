"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with your backend/database
    console.log("[v0] Waitlist signup:", email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
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

          <p className="mt-6 text-sm text-primary-foreground/60">No spam, ever. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
