'use client'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '../ui/card'
import {
    CartesianGrid,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Line,
    Tooltip,
} from 'recharts'
import { getHealthGrpData, getHealthPoints } from '@/app/actions/allReports'
import { useToast } from '@/hooks/use-toast'
import RoboHelp from '../auxComps/RoboHelp'
import { MessageCircleQuestion } from 'lucide-react'

// Function for converting month number to string
function formatMonthData(month: number): string {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    return months[month - 1] || 'Invalid month'
}

interface GrpData {
    id: string
    healthMonth: number
    yearValue: number
    points: number
    userEmail: string | null
}

const InsightsGrp = () => {
    const [grpData, setGrpData] = useState<GrpData[]>([]) // Avoid nullable state
    const { toast } = useToast() // Assuming you may use this for notifications
    const [isRoboOn, setIsRoboOn] = useState<boolean>(false)

    useEffect(() => {
        const fetchHealthPoints = async () => {
            try {
                // Initialize the health point checker
                await getHealthPoints()

                // Fetch grp data for rendering
                const response = await getHealthGrpData()
                if (!response.success) {
                    return
                } else {
                    setGrpData(response.healthGrpData || [])
                }
            } catch (error) {
                console.error('Error fetching group data:', error)
                toast({
                    title: 'Error',
                    description: 'An error occurred while fetching group data.',
                })
            }
        }

        fetchHealthPoints()
    }, [toast])

    // Create chart data from the response
    const chartData = grpData.map((x) => ({
        name: formatMonthData(x.healthMonth),
        value: x.points,
    }))

    return (
        <Card>
            <CardHeader>
                <CardTitle>Health Insights</CardTitle>
                <CardDescription>
                    Your health progress over time
                </CardDescription>
                {grpData.length < 2 && (
                    <CardDescription className=' text-green-600'>
                        Check-In daily to get your graph more elobrated
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {grpData.length === 0 ? (
                    <p className='text-center dark:text-muted-foreground'>
                        No Data Found
                    </p>
                ) : (
                    <div className='h-[300px] w-full'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='name' />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type='monotone'
                                    dataKey='value'
                                    stroke='#3b82f6'
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default InsightsGrp
