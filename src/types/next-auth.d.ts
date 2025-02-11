import "next-auth";

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "USER";
    isOauth?: boolean;
  }
  
  interface Session {
    user?: {
      id?: string;
      role?: "ADMIN" | "USER";
      isOauth?: boolean;
    } & DefaultSession["user"];
  }
}