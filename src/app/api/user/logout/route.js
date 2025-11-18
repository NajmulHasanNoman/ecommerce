import { NextResponse } from "next/server";

export async function GET(req,res){
    let expireduration=new Date(Date.now()- 24*60*60*1000);
    const cookieString=`token=' '; expires=${expireduration.toUTCString()} ;path=/`;
    return NextResponse.json({status:"success"},{status:200,headers:{'set-cookie':cookieString}})
} 