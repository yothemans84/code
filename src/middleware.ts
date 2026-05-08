export { auth as middleware } from "@/lib/auth";
export const config = { matcher: ["/dashboard/:path*","/bookings/:path*","/payments/:path*","/reports/:path*","/documents/:path*","/users/:path*"] };
