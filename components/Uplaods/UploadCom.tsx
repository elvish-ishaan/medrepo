'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import {performOCR} from '../../lib/performOCR'
import { uploadFileAws } from "@/lib/uploadFile";
import { toast, useToast } from "@/hooks/use-toast";
import DeadBtn from "../auxComps/DeadBtn";


enum UploadType {
  diagnosis = "Diagnosis",
  medicines = "Medicine",
  report = "Report",
}

interface UploadData {
  type: UploadType | null;
  image: File | null;
}

export default function UploadCom() {
  const { data } = useSession();
  const [uploadData, setUploadData] = useState<UploadData>({
    type: null,
    image: null,
  });
  const [rawReport, setRawReport] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [objUrlKey, setObjUrlKey] = useState<string | undefined>('')

 const {toast} = useToast()

  const handleSelectChange = (value: UploadType) => {
    setUploadData((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadData((prev) => ({
        ...prev,
        image: files[0],
      }));
    }
  };

  //handling submit 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!uploadData.type || !uploadData.image) {
      alert("Please select a type and upload a file.");
      return;
    }
    //set loading to true
    setLoading(true);
    // Getting text data from images
    try {
      const data = await performOCR(uploadData.image);
      setRawReport(data);
    } catch (error) {
      console.log(error, 'error in getting data from uploaded image');
    }
  
    // Upload image to the bucket
    const UploadUrl = await uploadFileAws(uploadData.image);

    if (!UploadUrl) {
      toast({
        description: 'Something went wrong while uploading',
      });
      return;
    }
  
    // Appending form data
    const formData = new FormData();
    formData.append("type", uploadData.type as string);
    formData.append("rawReport", rawReport);
    formData.append("imageUrl", UploadUrl.key);
  
    try {
      const res = await axios.post('/api/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
  
      if (res.data.success) {
        toast({
          description: "Uploaded Successfully",
        });
      } else {
        toast({
          variant: 'destructive',
          description: 'Something went wrong',
        });
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Medical Record Submission</CardTitle>
        <CardDescription>Upload your medical documents.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <Select defaultValue={UploadType.diagnosis} onValueChange={handleSelectChange}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent defaultValue={UploadType.report}>
                  <SelectItem value={UploadType.diagnosis}>Diagnosis</SelectItem>
                  <SelectItem value={UploadType.medicines}>Medicines</SelectItem>
                  <SelectItem value={UploadType.report}>Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file">File</Label>
              <Input id="file" type="file" onChange={handleFileChange} />
            </div>
          </div>
          <CardFooter className="flex justify-end mt-4">
           {
            !loading ?  <Button type="submit" className="w-full">Submit</Button> :
             <DeadBtn/>
           }
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
