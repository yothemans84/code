import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (credentials) => {
      const email = String(credentials?.email ?? "");
      const password = String(credentials?.password ?? "");
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) return null;
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok || !user.isActive) return null;
      return user;
    }
  })],
  callbacks: {
    jwt: async ({ token, user }) => { if (user) { token.role = (user as any).role; token.uid = user.id; } return token; },
    session: async ({ session, token }) => { if (session.user) { (session.user as any).role = token.role; (session.user as any).id = token.uid; } return session; }
  }
});
