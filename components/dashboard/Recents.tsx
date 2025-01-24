import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { CalendarIcon, Dna, FileText, Monitor, PieChart, Syringe } from 'lucide-react'
import prisma from '@/lib/prismaClient'
import { getServerSession } from 'next-auth'
import { DateFormatter } from '@/lib/dateFormatter'

const  Recents = async () => {
  const session = await getServerSession()
  let recentsActs
  try {
     recentsActs = await prisma.recentActivities.findMany({
      where: {
        userEmail: session?.user?.email
      },
      orderBy: {
        date: 'desc',
      },
      take: 3,
    })
    if(!recentsActs){
      console.log('recent activities not found')
    }
  } catch (error) {
    console.log(error, 'error in getting recenst activities')
  }
  return (
    <Card>
    <CardHeader>
      <CardTitle>Recent Activities</CardTitle>
      <CardDescription>Your latest health-related activities</CardDescription>
    </CardHeader>
    <CardContent>
      {!recentsActs || recentsActs.length === 0 && <p>No Recent Activities Found</p>}
      {
        recentsActs?.map((act) => {
          return <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              {act.uploadType ===  "Report" && <FileText className="h-4 w-4 text-blue-600" />}
              {act.uploadType === 'Diagnosis' && <Monitor className=' h-4 w-4 text-green-600'/>}
              {act.uploadType === 'Diagnosis' && <Syringe className=' h-4 w-4 text-orange-600'/>}
            </div>
            <div>
              <p className="font-medium">{act.uploadType}</p>
              <p className="text-sm text-gray-500">{DateFormatter(act.date)}</p>
            </div>
          </li>
        </ul>
        })
      }
    </CardContent>
  </Card>
  )
}

export default Recents