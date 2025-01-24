import GreetingCom from '@/components/auxComps/GreetingCom'
import Insights from '@/components/charts/Insights'
import DalUpCalender from '@/components/dashboard/DalUpCalender'
import InsightsGrp from '@/components/dashboard/InsightsGrp'
import QuickActions from '@/components/dashboard/QuickActions'
import Recents from '@/components/dashboard/Recents'
import DailyMatrics from '@/components/Uplaods/DailyMatrics'
import UploadCom from '@/components/Uplaods/UploadCom'
import React from 'react'

const page = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
       <div className="flex justify-between items-center mb-8">
         <GreetingCom/>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Health Insights Graph */}
         <InsightsGrp/>
   
         {/* Daily Upload Calendar */}
         <DalUpCalender/>
   
         {/* Document Upload Section */}
         <UploadCom/>
   
         {/* Recent Activities */}
         <Recents/>
       </div>

       {/* Quick Actions */}
       <QuickActions/>
  </main>
  )
}

export default page