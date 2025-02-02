import { razorpayInstance } from '@/app/configs/paymentConfig'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    try {
        //getting payment varification
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            body

        try {
            if (
                !razorpay_payment_id ||
                !razorpay_order_id ||
                !razorpay_signature
            ) {
                return NextResponse.json({
                    success: false,
                    message: 'required parameters not found',
                })
            }

            // varifying signiture
            const secret: string | undefined = process.env.RAZORPAY_KEY_SECRET
            const body_data = razorpay_order_id + '|' + razorpay_payment_id
            const expectedSignature = crypto
                .createHmac('sha256', secret || 'defaultSecret')
                .update(body_data)
                .digest('hex')
            // comparing signitures
            const isValid = expectedSignature === razorpay_signature
            // Retrieve the order details from Razorpay
            const order = await razorpayInstance.orders.fetch(razorpay_order_id)

            //if varified
            if (isValid) {
                console.log('order varified..........')
                //update the booking data
                //redirect to success page
                // return res.redirect('http://localhost:5173/payment/success')
            } else {
                console.log('order not varified.......')
                // return res.redirect('http://localhost:5173/payment/failed')
            }
        } catch (error) {
            console.log(error, 'error in payment varification')
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
