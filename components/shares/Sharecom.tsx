"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Share } from 'lucide-react'
import { toast, useToast } from '@/hooks/use-toast'

const Sharecom = ({urlLink}:{urlLink: string}) => {
  const [isCopiedLoading, setIsCopiedLoading] = useState<boolean>(false)
  const { toast } = useToast()
  //hanlding share click
  const handleShareclick = async () => {
    try {
      setIsCopiedLoading(true)
      await navigator.clipboard.writeText(urlLink)
      setIsCopiedLoading(false)
      toast({
        description: "Link Copied"
      })
    } catch (error) {
      console.log(error,'error in copying link')
    }
  }
  return (
    <div>
      {
        !isCopiedLoading ? <Button onClick={handleShareclick}>share <Share className=" size-4 ml-2"/></Button> : <Button>Copied</Button>
      }
    </div>
  )
}

export default Sharecom