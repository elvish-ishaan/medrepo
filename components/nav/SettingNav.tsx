import Link from 'next/link'
import { User, Shield, CreditCard, Menu, ShieldBan, LucidePaperclip } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SettingNav() {
  return (
    <nav className=" shadow-md border-zinc-800 border-2 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center space-x-4">
            <Link href="/account" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-50">
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
            <Link href="/privacy" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-50">
              <LucidePaperclip className="w-5 h-5 mr-2" />
              Privacy
            </Link>
            <Link href="/membership" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-50">
              <CreditCard className="w-5 h-5 mr-2" />
              Membership
            </Link>
            <Link href="/membership" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900 hover:bg-gray-50">
              <ShieldBan className="w-5 h-5 mr-2" />
              Security
            </Link>
          </div>
          
          {/* Mobile menu */}
          <div className="sm:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/account" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Account</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/privacy" className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Privacy</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/membership" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Membership</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}