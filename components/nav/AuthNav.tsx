"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from '../themes/ToggleMode'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AvatarImage, Avatar, AvatarFallback } from '../ui/avatar'

const AuthNav = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    }
  }, [data]);
  return (
    <>
    {
        data ? <div className=' flex gap-3 items-center'>
          <Avatar>
             <AvatarImage src={data.user?.image || ''} alt="profile" />
             <AvatarFallback>{data.user?.name}</AvatarFallback>
          </Avatar>
           <ModeToggle/>
           </div> :
        <div className=' flex gap-3'>
       <Button onClick={() => router.push('/auth/sign-in')}>Login</Button>
       <ModeToggle/>
    </div>
    }
    </>
  )
}

export default AuthNav