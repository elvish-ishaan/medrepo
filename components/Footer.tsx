
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-12 w-full px-5">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">About</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Our Story
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Careers
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Web App
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Mobile App
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Enterprise
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Tutorials
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Blog
          </Link>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; 2024 Medrepo. All rights reserved.</p>
        <Link href="#" className="hover:underline" prefetch={false}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}