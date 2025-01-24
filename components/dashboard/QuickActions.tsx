"use client"
import { Ambulance, CalendarIcon, FileText, PieChart, Ticket, User } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const QuickActions = () => {
  const router = useRouter()
  return (
    <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Button onClick={()=> router.push('/appointments/doctors')} className="h-auto py-4 flex flex-col items-center">
              <CalendarIcon className="h-6 w-6 mb-2" />
              <span>Schedule Appointment</span>
            </Button>
            <Button className="h-auto py-4 flex flex-col items-center" variant="outline">
              <FileText className="h-6 w-6 mb-2" />
              <span>View Medical Records</span>
            </Button>
            <Button onClick={() => router.push('appointments/bookings')} className="h-auto py-4 flex flex-col items-center" variant="outline">
              <Ticket className="h-6 w-6 mb-2" />
              <span>Recent Bookings</span>
            </Button>
            <Button className="h-auto py-4 flex flex-col items-center" variant="outline">
              <Ambulance className="h-6 w-6 mb-2" />
              <span>Emergency Doctor</span>
            </Button>
          </div>
    </div>
  )
}

export default QuickActions