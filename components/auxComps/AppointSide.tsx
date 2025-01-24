import Link from "next/link"
import { Dna, GitGraph, LucideTicketPlus, Plug, User2 } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function AppointSide() {
 
  return (
    <div className="flex justify-center bg-background mt-auto w-full ">
      <div className="flex flex-col items-start justify-between bg-background p-4">
        <div className="flex flex-col items-start gap-4 border-slate-600 border-2 rounded-md p-2">
          <nav className="flex items-start gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <User2 className="h-5 w-5" />
              <span>Doctors</span>
            </Link>
            <Link
              href="/reports"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <LucideTicketPlus className="h-5 w-5" />
              <span>Bookings</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}


  