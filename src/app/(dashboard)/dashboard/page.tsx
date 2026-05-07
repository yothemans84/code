import { prisma } from "@/lib/prisma";
export default async function Page(){const [bookings,payments]=await Promise.all([prisma.booking.count(),prisma.payment.aggregate({_sum:{amount:true}})]);return <div className="grid md:grid-cols-2 gap-4"><div className="bg-white p-4 rounded">Bookings: {bookings}</div><div className="bg-white p-4 rounded">Revenue: RM {payments._sum.amount ?? 0}</div></div>}
