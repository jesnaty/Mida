"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function DashboardNav() {
  return (
    <nav className="border-b border-border bg-card fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/2.png" 
                alt="Theday Digital Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <span className="font-bold text-foreground text-xl">Theday Digital</span>
            </Link>
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
