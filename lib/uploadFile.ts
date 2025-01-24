
import { Bucket, s3 } from "@/app/configs/s3config";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from 'uuid';



export const uploadFileAws = async (file: File) => {
    if (!file) return;
    const ext = file?.name.split(".").at(-1);
    const uid = uuidv4().split('-')
    const fileName = `${uid[0]}${ext ? "." + ext : ""}`;
     
    try {
      const uploadToS3 = new PutObjectCommand({
        Bucket,
        Key: fileName,
        Body: file,
        ContentType:"image/jpeg"
      });
      await s3.send(uploadToS3);
      return {
        success: true,
        key: fileName
      }
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong in uploading to aws")
    }
}

//get file by key
export const getFileByKey = async (gkey:string) => {
    try {
        // Create a command for getting the object
        const command = new GetObjectCommand({
          Bucket,
          Key: gkey
        });
    
        // Get the pre-signed URL
        const signedUrl = await getSignedUrl(s3, command);
        return signedUrl;
      } catch (error) {
        console.error('Error getting pre-signed URL from S3:', error);
        throw error;
      }
}