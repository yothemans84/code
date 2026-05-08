import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
export default function DashboardLayout({children}:{children:React.ReactNode}){return <div><Sidebar/><div className="md:ml-64"><Topbar/><main className="p-4 md:p-6">{children}</main></div></div>}
