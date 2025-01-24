"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Bot } from 'lucide-react'

interface RoboHelpProps {
  title: string
  description: string
  setIsRoboOn: (con: boolean) => void
  onGotIt?: () => void
}

export default function RoboHelp({ title, description, setIsRoboOn }: RoboHelpProps) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className=" bg-slate-900 p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center mb-4">
          <span><Bot className=' h-4 w-4'/></span>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className="mb-6">{description}</p>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => console.log('hello') }>Skip</Button>
          <Button variant="default" onClick={()=> setIsRoboOn(false)}>Got it</Button>
        </div>
      </div>
    </div>
  )
}