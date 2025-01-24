'use client'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardFooter,
    CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { useSession } from 'next-auth/react'
import Script from 'next/script'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { redirect } from 'next/navigation'

declare global {
    interface Window {
        Razorpay: any // or provide a more specific type if you have it
    }
}

interface OrderResponse {
    message: string
    order: OrderDetails
    success: boolean
}

interface OrderDetails {
    amount: number
    amount_due: number
    amount_paid: number
    attempts: number
    created_at: number // Assuming this is a timestamp
    currency: string
    entity: string
    id: string
    notes: string[] // Array of notes, assuming they are strings
    offer_id: string | null // Assuming this can be a string or null
    receipt: string
    status: string
}

const CheckoutCard = ({
    cost,
    consultationTime,
    doctorId,
}: {
    cost?: number
    consultationTime?: string
    doctorId?: string
}) => {
    //check user is authorized or not
    const { data } = useSession()
    if (!data?.user) {
        redirect('/')
    }
    const { toast } = useToast()

    const payNow = async () => {
        try {
            // Create order by calling the server endpoint
            const response: any = await axios.post('/api/payments/checkout', {
                amount: 555,
                currency: 'INR',
                receipt: 'receipt#1',
                notes: {
                    userEmail: data?.user?.email,
                    doctorId: 5,
                },
            })

            const order = response.data?.order
            // Open Razorpay Checkout
            const options = {
                key: 'rzp_test_dxEbqcp6eH7i1U',
                amount: order?.amount,
                currency: order?.currency,
                name: 'Top Nerve',
                description: 'Top Nerve Transaction',
                image: '',
                order_id: order?.id,
                callback_url:
                    'http://localhost:3000/api/payments/payment-varification',
                prefill: {
                    name: `${data.user?.name}`,
                    email: `${data.user?.email}`,
                },
                notes: {
                    userEmail: data?.user?.email,
                    doctorId: 5, // Use data?.doctorId for option 1 above
                },
                theme: {
                    color: '#2563EB',
                },
            }

            const rzp1 = (window as any).Razorpay(options)
            rzp1.open()
        } catch (error) {
            console.error('Error:', error)
            toast({
                variant: 'destructive',
                title: 'Error in creating payment',
            })
        }
    }

    return (
        <>
            <Script
                id='razorpay-checkout-js'
                src='https://checkout.razorpay.com/v1/checkout.js'
            />
            <Card>
                <CardHeader>
                    <CardTitle>Book an Appointment</CardTitle>
                    <CardDescription>
                        Choose a time that works for you
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold mb-2'>$150 / visit</div>
                    <p className='text-muted-foreground mb-4'>
                        30 minutes consultation
                    </p>
                    <Calendar className='w-full h-48 text-muted-foreground' />
                </CardContent>
                <CardFooter>
                    <Button onClick={payNow} className='w-full'>
                        Book Now
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CheckoutCard
