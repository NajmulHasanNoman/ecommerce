import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req,res) {
    try{
        const headerList= await headers();
        let id= parseInt(headerList.get('id'))
        let reqBody=await req.json()
        reqBody.user_id=id;
        

        const prisma=new PrismaClient();
        const result=await prisma.product_carts.create({
            data:reqBody
        })

        return NextResponse.json({status:"success",data:result})
    }
    catch(e){
        return NextResponse.json({status:"fail",data:e.toString()})
    }
}

export async function PUT(req,res) {
    try{
         const headerList=await headers()     
         let user_id= parseInt(headerList.get('id'))
         let reqBody=await req.json();

         const prisma=new PrismaClient();
         const result= await prisma.product_carts.updateMany({
            where:{
                AND:[
                    {id:reqBody['id']},
                    {user_id:user_id}
                ],
            },
            data:{color:reqBody['color'],size:reqBody['size'],qty:reqBody['qty']}
         })
         return NextResponse.json({status:"success",data:result})
    }
    catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}

export async function GET(req,res) {
    try{
        const headerList=await headers();
        let User_id=parseInt(headerList.get('id'));
        
        const prisma=new PrismaClient();
        const result=await prisma.product_carts.findMany({
            where:{user_id:User_id},
            include:{products:true}
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch(e){
        return NextResponse.json({status:"success",data:e.toString()})
    }
}
 
export async function DELETE(req,res) {
    try{
        const headerList=await headers();
        let User_id=parseInt(headerList.get('id'));
        const reqBody=await req.json();

        const prisma=new PrismaClient();
        const result=await prisma.product_carts.deleteMany({
            where:{
                AND:[
                    {user_id:User_id},  
                    {id:reqBody['id']}
                     
                ]  
            }
        })
        return NextResponse.json({status:"success",data:result})
    } 
    catch(e){
        return NextResponse.json({status:"success",data:e.toString()})
    }
}
