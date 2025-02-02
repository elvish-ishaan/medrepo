'use client'
import { signOut } from 'next-auth/react'
import React from 'react'
import { Button } from '../ui/button'
import { LogOutIcon, Router } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SignOutBtn = () => {
    const router = useRouter()
    return (
        <Button
            onClick={() => {
                signOut()
                router.push('/')
            }}
            variant='ghost'
            className='flex w-full items-center gap-2 rounded-md px-3 py-2 text-muted-foreground 
            transition-colors hover:bg-muted hover:text-foreground'
        >
            <LogOutIcon className='h-5 w-5' />
            <span>Logout</span>
        </Button>
    )
}

export default SignOutBtn
