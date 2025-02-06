import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/prisma"; // I need to import my Prisma client instance here
import authConfig from "./auth.config"; // I'm also importing my NextAuth configuration from this file
import { getUserById } from "./data/user"; // Importing this function to get user info by ID
import { getAccountByUserId } from "./data/account"; // And this one to get account info by user ID
import { getUserByEmail } from "./data/useremail"; // Need this function (I created it) to find users by email

// Now I'm exporting the auth functionalities from NextAuth, configured with all my settings
export const {
  auth, // This is the main auth function - I'll use this in server components and API routes
  handlers: { GET, POST }, // These are the API route handlers for /api/auth/[...nextauth] - needed by NextAuth
  signIn, // This is the signIn function, I'll use this to start the sign-in process
  signOut, // And this is for signing users out
} = NextAuth({
  adapter: PrismaAdapter(prisma), // I'm telling NextAuth to use Prisma to manage users, accounts, sessions in my MongoDB database
  session: {
    strategy: "jwt", // I chose to use JWT for sessions - they are stateless and stored in cookies
  },
  ...authConfig, // I'm spreading my authConfig here to include all my providers and other settings I defined in auth.config.ts

  callbacks: {
    // These are the callbacks I'm defining to customize how authentication works

    async signIn({ user, account, email }) {
      console.log("signIn callback START - Provider:", account?.provider); // Log when the signIn callback starts and the provider
    
      if (account?.provider === 'google') {
        console.log("  Google Sign-In flow detected"); // Confirm we are in Google flow
        let googleEmail: string | undefined = undefined;
    
        if (typeof email === 'object' && email && 'email' in email) {
          googleEmail = email.email as string | undefined;
          console.log("  Extracted Google Email:", googleEmail); // Log the extracted Google email
        } else {
          console.warn("  WARNING: Could not extract email from Google object:", email); // Warning if email extraction fails
          return false; // Keep this - prevent sign-in if email is missing
        }
    
        if (googleEmail) {
          const existingUser = await getUserByEmail(googleEmail);
          console.log("  Existing user found by email:", !!existingUser, existingUser); // Log if user exists and user object
    
          if (existingUser) {
            const existingAccount = await prisma.account.findFirst({
              where: {
                providerAccountId: account.providerAccountId,
                provider: account.provider,
              },
            });
            console.log("  Existing Google Account:", !!existingAccount, existingAccount); // Log if Google account link exists and account object
    
            if (existingAccount && existingAccount.userId !== existingUser.id) {
              console.log("  OAuthAccountNotLinked SCENARIO DETECTED - Access Denied"); // Confirm OAuthAccountNotLinked scenario
              return false; // This is the intentional Access Denied for account linking conflict
            }
    
            if (!existingAccount) {
              console.log("  Linking Google Account to existing user..."); // Log account linking action
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  refresh_token: account.refresh_token,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                  session_state: account.session_state ? JSON.stringify(account.session_state) : null,
                },
              });
              console.log("  Google Account linked successfully."); // Confirm account linking success
            }
            console.log("  Google Sign-In ALLOWED - Account linked or new user flow"); // Confirm sign-in allowed
            return true; // Sign-in allowed for Google
          } else {
            console.log("  No existing user found with Google email - Proceeding with default (new user) flow - Sign-In ALLOWED"); // Confirm new user flow
            return true; // Allow sign-in for new Google user
          }
        } else {
          // This branch should not be reached now because of the email check at the beginning of googleEmail block, but kept for safety
          console.warn("  Unexpected: googleEmail is still undefined after checks - Access Denied");
          return false; // Prevent sign-in in this unexpected scenario
        }
      }
    
      if (account?.provider !== 'credentials') {
        console.log("  Non-Credential, Non-Google Provider - Sign-In ALLOWED (default)"); // Log for other OAuth providers (if any)
        return true; // Allow other OAuth providers by default
      }
    
      if (!user.id) {
        console.log("  Credential Provider - User ID missing - Access Denied"); // Log if user ID is missing in credential flow
        return false; // Original credential check - User ID missing
      }
    
      console.log("  Credential Sign-In ALLOWED - User ID present"); // Log for successful credential sign-in
      return true; // Allow credential login if it reaches here
    },
    async jwt({ token }) {
      // This is the jwt callback - it's called when a JWT is created or updated. I'm customizing the JWT here.
      if (!token.sub) return token; // If there's no user ID in the token, I'll just return it as is - it's not associated with a user.

      const existingUser = await getUserById(token.sub); // I need to fetch the user from the database using the user ID from the token (token.sub is the user ID)

      if (!existingUser) return token; // If I can't find the user in the DB, just return the token unchanged.

      const existingAccount = await getAccountByUserId(existingUser.id); // Let me check if this user has an associated OAuth account

      token.isOauth = !!existingAccount; // I'm adding a custom 'isOauth' property to the token. True if they signed in with OAuth, false otherwise.
      token.name = existingUser.name; // Adding the user's name to the token so I can easily access it in the session
      token.email = existingUser.email; // Adding email too
      token.image = existingUser.image; // And their image URL

      return token; // Finally, return the modified token with all my extra info.
    },
    async session({ session, token }) {
      // This is the session callback - it's called whenever a session is checked. I can control what goes into the session object here.
      return {
        ...session, // I'm starting with everything that's already in the session
        user: { ...session.user, id: token.sub, isOauth: token.isOauth }, // Then, I'm extending the session's user object to include the user's ID and my custom 'isOauth' flag from the token.
      };
    },
  },
});