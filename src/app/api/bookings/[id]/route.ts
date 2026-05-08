import { prisma } from "@/lib/prisma";
export async function GET(_:Request,{params}:{params:{id:string}}){return Response.json(await prisma.booking.findUnique({where:{id:params.id},include:{payments:true,passengers:{include:{passenger:true}},package:true,departure:true}}));}
export async function PATCH(req:Request,{params}:{params:{id:string}}){const body=await req.json();return Response.json(await prisma.booking.update({where:{id:params.id},data:body}));}
export async function DELETE(_:Request,{params}:{params:{id:string}}){return Response.json(await prisma.booking.update({where:{id:params.id},data:{deletedAt:new Date()}}));}
