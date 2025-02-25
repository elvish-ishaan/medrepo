import { S3Client } from '@aws-sdk/client-s3'

export const Bucket = process.env.AWS_BUCKET_NAME
export const region = process.env.AWS_REGION
export const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
})
