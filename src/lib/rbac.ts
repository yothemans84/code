import { auth } from "@/lib/auth";
import { Role } from "@prisma/client";

export async function requireRoles(roles: Role[]) {
  const session = await auth();
  const role = (session?.user as any)?.role as Role | undefined;
  if (!session?.user || !role || !roles.includes(role)) throw new Error("Forbidden");
  return session;
}
