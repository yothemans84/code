import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [Credentials({
    credentials: { email: {}, password: {} },
    authorize: async (creds) => {
      if (!creds?.email) return null;
      const user = await prisma.user.findUnique({ where: { email: creds.email as string } });
      return user;
    }
  })],
  callbacks: { jwt: async ({ token, user }) => { if (user) token.role = (user as any).role; return token; } }
});
