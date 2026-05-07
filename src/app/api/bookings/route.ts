import { prisma } from "@/lib/prisma";
import { createBookingAction } from "@/actions/booking-actions";
export async function GET(req: Request){const {searchParams}=new URL(req.url);const q=searchParams.get("q")||"";return Response.json(await prisma.booking.findMany({where:{OR:[{reference:{contains:q,mode:"insensitive"}},{customerName:{contains:q,mode:"insensitive"}}]},take:50,orderBy:{createdAt:"desc"}}));}
export async function POST(req: Request){const payload=await req.json();const booking=await createBookingAction(payload);return Response.json(booking,{status:201});}
