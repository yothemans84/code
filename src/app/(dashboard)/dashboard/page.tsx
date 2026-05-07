import { prisma } from "@/lib/prisma";
import { formatMYR } from "@/lib/utils/format";
import { RevenueChart } from "@/components/charts/revenue-chart";
export default async function Page(){
 const [bookings,totalRevenue,totalCollected,upcoming,overdue]=await Promise.all([
  prisma.booking.count({where:{deletedAt:null}}),
  prisma.booking.aggregate({_sum:{totalAmount:true}}),
  prisma.booking.aggregate({_sum:{collectedAmount:true}}),
  prisma.departure.count({where:{departureDate:{gte:new Date()}}}),
  prisma.booking.count({where:{paymentStatus:"OVERDUE"}})
 ]);
 const outstanding=(Number(totalRevenue._sum.totalAmount||0)-Number(totalCollected._sum.collectedAmount||0));
 const kpis=[['Total Bookings',bookings],['Total Revenue',formatMYR(Number(totalRevenue._sum.totalAmount||0))],['Total Collected',formatMYR(Number(totalCollected._sum.collectedAmount||0))],['Outstanding',formatMYR(outstanding)],['Upcoming Departures',upcoming],['Overdue Payments',overdue]];
 return <div className="space-y-4"><div className="grid md:grid-cols-3 gap-4">{kpis.map(([k,v])=><div key={String(k)} className="bg-white rounded-xl border p-4"><p className="text-sm text-slate-500">{k}</p><p className="text-xl font-semibold">{String(v)}</p></div>)}</div><RevenueChart data={[{month:'Jan',revenue:120000},{month:'Feb',revenue:86000},{month:'Mar',revenue:142000}]}/></div>
}
