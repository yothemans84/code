import { prisma } from "@/lib/prisma";
export async function GET(){const bookings=await prisma.booking.findMany();const csv=["refNo,totalAmount,paidAmount",...bookings.map(b=>`${b.refNo},${b.totalAmount},${b.paidAmount}`)].join("\n");return new Response(csv,{headers:{"Content-Type":"text/csv","Content-Disposition":"attachment; filename=bookings.csv"}})}
