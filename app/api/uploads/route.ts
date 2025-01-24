import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { getInsights } from '../../goai/index'
import prisma from '@/lib/prismaClient'
import { randomUUID } from "crypto";
import { docType } from "@prisma/client";
import { getServerSession } from "next-auth/next"


export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession()
    if(!session){
      return NextResponse.json({
        success: false,
        message: 'user not found'
      },{status: 404})
    }

    const formData = await req.formData();
    const file = formData.get("rawReport");
    const mType = formData.get('type') as docType
    const imageUrl = formData.get('imageUrl') as string
    if (!file && !mType && !imageUrl) {
      return NextResponse.json({
      message: 'No file or imageUrl and type provided',
      }, { status: 400 });
    }
   //initailize AI to perform analytics and insights
   let genInsights
   try {
     genInsights  = await getInsights(file as string, mType as string)
   } catch (error) {
    console.log(error,'error in getting insights')
   }
  //save results to db
  try {
    // Ensure mType matches one of the docType enum values
     if (!Object.values(docType).includes(mType as docType)) {
       return NextResponse.json({
         message: 'Invalid type provided',
       }, { status: 400 });
     }
    const result = await prisma.report.create({
      data: {
        id: randomUUID(),
        userEmail: session?.user?.email,
        mType: mType || docType.Report,
        insights: genInsights as string,
        imageUrl: imageUrl || '',
        date: new Date().toISOString()
      },
    })
    //update recent activities of user
     const up = await prisma.recentActivities.create({
      data: {
         date: new Date().toISOString(),
         uploadType: mType,
         userEmail: session.user?.email || ''
      }
    })
    return NextResponse.json({
      success: true,
      message: "Document uplaoded",
      result
    })
  } catch (error) {
    console.log(error, 'error in saving to db')
    return NextResponse.json({
      success: false,
      message: 'Cant Upload Document'
    })
  }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'internal server error'
    })
  }
  
};

