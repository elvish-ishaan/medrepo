'use server'
import prisma from '@/lib/prismaClient'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const generateLatestHistory = async () => {
    try {
        const session = await getServerSession()
        if (!session) {
            redirect('/')
        }
        const allRecords = await prisma.user.findUnique({
            where: {
                email: session?.user?.email || '',
            },
            include: {
                records: true,
            },
        })
        if (!allRecords) {
            return {
                success: false,
                message: 'no records found',
            }
        }
        return {
            success: true,
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: 'Cant Generate History',
        }
    }
}

export const updateUserConCode = async () => {
    try {
        const session = await getServerSession()
        if (!session?.user) {
            return {
                success: false,
                message: 'user not found',
            }
        }
        const updateUserCode = await prisma.user.update({
            where: {
                email: session?.user?.email || '',
            },
            data: {
                profileCode: Math.floor(1000 + Math.random() * 9000),
            },
        })
        if (updateUserCode) {
            return {
                success: true,
                message: 'updated code successfully',
                updateUserCode,
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'internal server error',
        }
    }
}
