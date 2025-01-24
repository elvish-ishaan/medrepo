import { razorpayInstance } from '@/app/configs/paymentConfig'
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export const POST = async (req: NextApiRequest) => {
    try {
        //generating order
        let order
        try {
            // Create order using Razorpay
            order = await razorpayInstance.orders.create({
                amount: req.body?.amount || 888, //fix
                currency: 'INR',
                receipt: uuidv4(),
                notes: {
                    userEmail: req.body?.userEmail,
                    doctorId: req.body?.doctorId,
                },
            })
            //what if order not created
            if (!order) {
                return NextResponse.json(
                    {
                        success: false,
                        message: 'order not generated',
                    },
                    { status: 500 }
                )
            }
            //if successfully generated order return it
            return NextResponse.json(
                {
                    success: true,
                    message: 'Order created successfully',
                    order,
                },
                { status: 200 }
            )
        } catch (error) {
            console.log(error, 'error in creating order')
            return NextResponse.json({
                success: false,
                message: 'error in creating order',
            })
        }
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Internal Server Error',
            },
            { status: 500 }
        )
    }
}
