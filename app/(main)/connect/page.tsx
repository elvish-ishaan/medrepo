'use client'
import { getAllRecordHistory } from '@/app/actions/allReports'
import { updateUserConCode } from '@/app/actions/connect'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import prisma from '@/lib/prismaClient'
import { profile } from 'console'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { toast } = useToast()
    const { data } = useSession()
    const [profileCode, setProfileCode] = useState<number | null>(null)
    //generate new code and save to db
    const updateCode = async () => {
        try {
            const updatedUser = await updateUserConCode()
            if (!updatedUser) {
                toast({
                    title: 'cant update code',
                    variant: 'destructive',
                })
            }
            setProfileCode(updatedUser?.updateUserCode?.profileCode || null)
        } catch (error) {
            console.log(error, 'error in updating user code')
        }
    }
    return (
        <section className=' h-[100vh] w-full flex flex-col items-center justify-center '>
            <div className=' flex flex-col gap-4'>
                <h1 className=' text-center text-4xl tracking-widest'>
                    {profileCode}
                </h1>
                <h1 className=' text-center text-lg'>
                    Share this Code with your choice of doctor to get your
                    medical profile
                </h1>
            </div>
            <div className=' w-full flex items-center justify-center flex-col gap-6 my-5'>
                <Button onClick={updateCode}>
                    {!profileCode ? 'Generate Code' : 'Regenerate Code'}
                </Button>
            </div>
        </section>
    )
}

export default page
