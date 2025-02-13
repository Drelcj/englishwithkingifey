import { DefaultSession, DefaultUser } from "next-auth";

interface UserRole extends DefaultUser { 
    role: "ADMIN" | "USER"; 
    isOauth: boolean;
}

declare module "next-auth" {
        interface Session extends DefaultSession {
        user?: UserRole & DefaultSession["user"];
    }
}