"use client"
import { signOut, useSession } from 'next-auth/react'
import React,{ useEffect} from 'react'
import { Button } from '../ui/button'
import { LogOutIcon, Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

const SignOutBtn = () => {
    const { data } = useSession()
    const {toast} = useToast()
    const router = useRouter()
    useEffect(()=>{
        if(!data){
            //redirect the user to home page
            router.push('/')
            toast({
                title: 'Log Out Success'
            })
        }
    },[data])
  return (
    <Button
          onClick={() => signOut()}
            variant="ghost"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-muted-foreground 
            transition-colors hover:bg-muted hover:text-foreground"
          >
            <LogOutIcon className="h-5 w-5" />
            <span>Logout</span>
          </Button>
  )
}

export default SignOutBtn