
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Appointment Booked</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <CircleCheckIcon className="mx-auto text-green-500 w-12 h-12 mb-4" />
            <p className="text-lg font-medium">Your appointment has been successfully booked.</p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Doctor:</span>
              <span>Dr. Sarah Johnson</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Date:</span>
              <span>June 15, 2024</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Time:</span>
              <span>2:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Location:</span>
              <span>123 Main St, Anytown USA</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            Done
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

function CircleCheckIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}