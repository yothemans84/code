import { PrismaClient, Role, BookingStatus } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
 const admin = await prisma.user.upsert({where:{email:"admin@bpholiday.my"},update:{},create:{name:"Admin",email:"admin@bpholiday.my",role:Role.ADMIN}});
 const pkg = await prisma.tourPackage.upsert({where:{code:"UMR-001"},update:{},create:{code:"UMR-001",name:"Umrah Premium",price:8990}});
 const dep = await prisma.departure.create({data:{packageId:pkg.id,date:new Date(),seats:40}});
 await prisma.booking.create({data:{refNo:"BK-1001",userId:admin.id,packageId:pkg.id,departureId:dep.id,status:BookingStatus.CONFIRMED,totalAmount:8990,paidAmount:3000}});
}
main().finally(()=>prisma.$disconnect());
