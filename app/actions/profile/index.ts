'use server'

import prisma from '@/lib/prismaClient'
import { getServerSession } from 'next-auth'

export interface updatedData {
    firstName: string
    lastName: string
    phone: string
    age: number | undefined
    email: string | ''
}
export const updateProfile = async ({
    firstName,
    lastName,
    phone,
    age,
    email,
}: updatedData) => {
    const session = await getServerSession()
    if (!session?.user) {
        return {
            success: false,
            message: 'user not found',
        }
    }
    try {
        try {
            const updatedUser = await prisma.user.update({
                where: {
                    email: session?.user?.email || '',
                },
                data: {
                    firstName,
                    lastName,
                    age,
                    phone,
                },
            })
            return {
                success: true,
                user: updatedUser,
            }
        } catch (error) {
            console.log(error, 'error in updating profile to db')
        }
    } catch (error) {
        return {
            success: false,
            message: 'something went wrong',
        }
    }
}
