import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server"; 

export async function POST(req,res) {
      try{
        let headerList=await headers();
        let id= parseInt(headerList.get('id'));
        
       // let id=4;
        //for just checking whether it comes correctly from headers after verifying token
        //let email= (headerList.get('email'));
        // console.log(id,email)

        let reqBody=await req.json();

        const prisma=new PrismaClient();
        const result=await prisma.customer_profiles.upsert({
            where:{user_id:id},
            update:reqBody,
            create: {...reqBody,user_id: id}
        })
        return NextResponse.json({status:"success",data:result})
      }
      catch(e){
        NextResponse.json({status:"fail",data:e.toString()})
      }
}
export async function GET(req,res) {
  try{
    let headerList=await headers();
    let id=parseInt(headerList.get('id'));

    const prisma=new PrismaClient();
    const result=await prisma.customer_profiles.findUnique({
      where:{user_id:id}
    })
    return NextResponse.json({status:"success",data:result})
  }
  catch(e){
    return NextResponse.json({status:"fail",data:e.toString()})
  }
}