"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboardIcon,
  FolderIcon,
  FileTextIcon,
  BarChart3Icon,
  SettingsIcon,
  UsersIcon,
  CreditCardIcon,
  BellIcon,
  HelpCircleIcon,
  MessageSquareIcon,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderIcon,
  },
  {
    title: "Contracts",
    href: "/dashboard/contracts",
    icon: FileTextIcon,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3Icon,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCardIcon,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: UsersIcon,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquareIcon,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: BellIcon,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
  {
    title: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircleIcon,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card overflow-y-auto z-40">
      <nav className="p-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
