import Link from "next/link";
const items=["dashboard","bookings","passengers","payments","packages","departures","reports","documents","assistant","users","crm","notifications"];
export function Sidebar(){return <aside className="w-64 hidden md:block bg-white border-r min-h-screen p-4 fixed left-0 top-0"><div className="font-bold mb-4">TongYan ERP</div>{items.map(i=><Link key={i} className="block py-2 capitalize text-sm" href={`/${i}`}>{i}</Link>)}</aside>}
