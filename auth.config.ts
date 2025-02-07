// import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { prisma } from "./prisma/prisma";
import bcrypt from "bcryptjs";

// // Define a type for the email object in Google profile (if needed - adjust if Google's profile is different)
// interface GoogleEmail {
//   value: string;
//   type?: string; // Optional type (e.g., "account", "personal")
//   primary?: boolean; // Optional primary indicator
// }

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   profile(profile) {
    //     // Robust email extraction - try a few common paths
    //     let emailAddress = profile.email; // First, try the standard profile.email

    //     if (!emailAddress && profile.emails && Array.isArray(profile.emails) && profile.emails.length > 0) {
    //       // If profile.email is missing, check profile.emails array
    //       const emailObject = profile.emails.find((e: GoogleEmail) => e.value) as GoogleEmail | undefined; // Explicitly type 'e' as 'any' (or create a more specific interface if you know the exact structure of profile.emails)

    //       if (emailObject && emailObject.value) {
    //         emailAddress = emailObject.value;
    //       }
    //     }

    //     if (!emailAddress) {
    //       console.error("Could not extract email from Google profile:", profile);
    //     }

    //     return {
    //       id: profile.sub.toString(),
    //       name: profile.name,
    //       email: emailAddress,
    //       image: profile.picture,
    //     };
    //   },
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedData = LoginSchema.safeParse(credentials);
        if (!validatedData.success) return null;
        const { email, password } = validatedData.data;
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!user || !user.password || !user.email) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;