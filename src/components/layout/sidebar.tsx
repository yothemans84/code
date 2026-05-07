import Link from "next/link";
const items = ["dashboard","bookings","passengers","payments","packages","departures","reports","documents","assistant","users"];
export function Sidebar() { return <aside className="w-64 bg-white border-r min-h-screen p-4">{items.map(i => <Link key={i} className="block py-2 capitalize" href={`/${i}`}>{i}</Link>)}</aside>; }
