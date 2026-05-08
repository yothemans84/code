"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export function RevenueChart({ data }:{data:{month:string,revenue:number}[]}){return <div className="h-72 bg-white p-4 rounded"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="month"/><YAxis/><Tooltip/><Bar dataKey="revenue" fill="#14b8a6"/></BarChart></ResponsiveContainer></div>}
