"use client"
import { Hand } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

const GreetingCom = () => {
    const {data} = useSession()
  return (
    <div className=' text-2xl font-semibold mt-6 flex items-center gap-2'>
    Welcome, {data?.user?.name || 'guest'} <Hand/>
    </div>
  )
}

export default GreetingCom