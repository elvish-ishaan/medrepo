'use server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getPoints } from '@/app/goai'
import prisma from '@/lib/prismaClient'
import { docType } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export const getAllReports = async (rtype: docType) => {
    try {
        //check auth user
        const session = await getServerSession()
        if (!session?.user) {
            return {
                success: false,
                message: 'user not found',
            }
        }
        try {
            const allReports = await prisma.report.findMany({
                where: {
                    userEmail: session.user.email,
                    mType: rtype,
                },
            })
            if (allReports.length == 0) {
                throw new Error('No reports found')
            }
            return {
                success: true,
                message: 'all reports fetched',
                allReports,
            }
        } catch (error) {
            console.log(error, 'error in getting reports from db')
        }
    } catch (error) {
        return {
            success: false,
            message: 'Internal server error',
        }
    }
}

//get reportbyid
export const getRepById = async (repId: string) => {
    try {
        const report = await prisma.report.findUnique({
            where: {
                id: repId,
            },
        })
        return report
    } catch (error) {
        return {
            success: false,
            message: 'internal server error',
        }
    }
}

//get all records
export const getAllRecordHistory = async () => {
    const session = await getServerSession()
    if (!session) {
        return {
            success: false,
            message: 'user not found',
        }
    }
    try {
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
                message: 'no records found for this email',
            }
        }
        //make pdf out of all records
        return {
            success: true,
            allRecords,
        }
    } catch (error) {
        return {
            sucess: false,
            message: 'internal server error',
        }
    }
}

//get points for health data
export const getHealthPoints = async () => {
    const session = await getServerSession()
    if (!session) {
        return {
            success: false,
            message: 'user not found',
        }
    }
    try {
        const now = new Date()
        // Calculate the first day of the current month
        const startDate = new Date(now.getFullYear(), now.getMonth(), 1) // Start of the month
        // Calculate the first day of the next month
        const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1) // Start of the next mon
        // Convert Date objects to ISO strings for Prisma
        const startDateISO = startDate.toISOString()
        const endDateISO = endDate.toISOString()
        const getPoint = await prisma.report.findMany({
            where: {
                userEmail: session?.user?.email,
                date: {
                    gte: startDateISO,
                    lt: endDateISO,
                },
            },
        })
        if (!getPoint) {
            return {
                success: false,
                message: 'cant fetch data',
            }
        }
        //save data to db
        //first check for dublicationg same month points
        const date = new Date()
        let month = date.getMonth() + 1
        const currentMonthData = await prisma.healthPointGraph.findMany({
            where: {
                userEmail: session?.user?.email,
                healthMonth: {
                    equals: month,
                },
            },
        })
        //check month should not same
        if (!currentMonthData || currentMonthData.length == 0) {
            //get current months all records
            // Get the current date
            const now = new Date()
            // Calculate the start and end of the current month
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1) // First day of the current month
            const startOfNextMonth = new Date(
                now.getFullYear(),
                now.getMonth() + 1,
                1
            ) // First day of the next month

            const allCurrentMonthRecs = await prisma.report.findMany({
                where: {
                    userEmail: session?.user?.email,
                    date: {
                        gte: startOfMonth.toISOString(), // Greater than or equal to the start of the current month
                        lt: startOfNextMonth.toISOString(), // Less than the start of the next month
                    },
                },
            })
            if (!allCurrentMonthRecs || allCurrentMonthRecs.length == 0) {
                return {
                    success: false,
                    message: 'cant get current months saved data from db',
                }
            }
            //generate points from goai
            const genPoints = await getPoints(
                JSON.stringify(allCurrentMonthRecs)
            )
            //trim the point value
            if (!genPoints) {
                return {
                    success: false,
                    message: 'points not generated',
                }
            }
            //save this date to databse
            const updatedMonthPoints = await prisma.healthPointGraph.create({
                data: {
                    healthMonth: date.getMonth() + 1,
                    yearValue: date.getFullYear(),
                    healthDay: date.getDate(),
                    //@ts-ignore                         //fix this
                    points: parseInt(genPoints.trim(), 10) || 0,
                    userEmail: session?.user?.email,
                },
            })
        }
        return {
            success: true,
            message: 'fetched success',
            getPoint,
        }
    } catch (error) {
        console.log(error, 'error in getting point with database data')
        return {
            success: false,
            message: 'internal server error',
        }
    }
}

export const getHealthGrpData = async () => {
    const session = await getServerSession()
    if (!session) {
        return {
            success: false,
            message: 'user not found',
        }
    }
    try {
        const data = await prisma.healthPointGraph.findMany({
            where: {
                userEmail: session?.user?.email,
            },
        })
        if (!data || data.length == 0) {
            return {
                success: false,
                message: 'No data found for the user',
            }
        }
        return {
            success: true,
            message: 'health data fetched',
            healthGrpData: data,
        }
    } catch (error) {
        console.log(error, 'errro in getting data for health graph')
        return {
            success: false,
            message: 'cant get data for health graph',
        }
    }
}
