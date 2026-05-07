import { prisma } from "@/lib/prisma";
export async function GET(){return Response.json(await prisma.booking.findMany({include:{payments:true,package:true}}));}
