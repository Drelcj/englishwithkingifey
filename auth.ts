import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/prisma";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { getAccountByUserId } from "./data/account";
// import { getUserByEmail } from "./data/useremail";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,

  callbacks: {
    async signIn({ user, account }) {
      // Simplified credentials-only flow
      if (account?.provider === "credentials") {
        if (!user.id) return false;
        
        const existingUser = await getUserById(user.id);
        if (!existingUser?.password) return false;
        
        return true;
      }
      
      return false; // Block all other providers
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      // Add role to token
      token.role = existingUser.role;
      token.isOauth = !!(
        await getAccountByUserId(existingUser.id)
      );
      
      return {
        ...token,
        name: existingUser.name,
        email: existingUser.email,
        // image: existingUser.image,
      };
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role,
          isOauth: token.isOauth,
          name: token.name,
          email: token.email,
          // image: token.image,
        },
      };
    },
  },
});