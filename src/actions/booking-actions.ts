"use server";
import { prisma } from "@/lib/prisma";
export async function createBooking(formData: FormData){
  await prisma.booking.create({data:{refNo:String(formData.get("refNo")),userId:String(formData.get("userId")),packageId:String(formData.get("packageId")),totalAmount:Number(formData.get("totalAmount"))}});
}
