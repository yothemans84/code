import { PrismaClient, Role, BookingStatus, PaymentStatus, PaymentMethod } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
async function main(){
 const passwordHash = await bcrypt.hash("Admin@123",10);
 const admin = await prisma.user.upsert({where:{email:"admin@tongyan.my"},update:{},create:{name:"System Admin",email:"admin@tongyan.my",passwordHash,role:Role.ADMIN}});
 const pkg = await prisma.tourPackage.upsert({where:{code:"TYE-UMR-001"},update:{},create:{code:"TYE-UMR-001",name:"Umrah Premium 12D",destination:"Makkah & Madinah",durationDays:12,adultPrice:8990,childPrice:7990,costPrice:6200}});
 const dep = await prisma.departure.create({data:{packageId:pkg.id,departureDate:new Date("2026-08-15"),returnDate:new Date("2026-08-27"),capacity:40,assignedTourLeader:"Ustaz Amin"}});
 const booking = await prisma.booking.create({data:{reference:"TYE-2026-0001",userId:admin.id,packageId:pkg.id,departureId:dep.id,customerName:"Nur Aisyah",customerEmail:"aisyah@example.com",customerPhone:"+60123456789",totalAmount:8990,depositAmount:2500,collectedAmount:2500,outstandingAmount:6490,bookingStatus:BookingStatus.CONFIRMED,paymentStatus:PaymentStatus.PARTIAL}});
 await prisma.payment.create({data:{bookingId:booking.id,amount:2500,method:PaymentMethod.ONLINE_TRANSFER,status:PaymentStatus.PARTIAL,receiptNo:"RCPT-0001"}});
}
main().finally(()=>prisma.$disconnect());
