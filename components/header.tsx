import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-bold text-primary-foreground text-lg">M</span>
          </div>
          <span className="font-bold text-xl">Mida</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#home"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
