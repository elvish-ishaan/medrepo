import razorpay from 'razorpay'
const RAZORPAY_kEY_ID = process.env.RAZORPAY_KEY_ID as string
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET as string

export const razorpayInstance = new razorpay({
    key_id: RAZORPAY_kEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
})
