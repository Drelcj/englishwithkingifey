import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { privateRoutes } from "./routes";


const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  console.log("middleware called", req.nextUrl.pathname);
  console.log(req.auth);
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const url = "http://localhost:3000"; //change this to domain for production
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/auth");
  const isApiRoute = nextUrl.pathname.includes("/api");

  if (isApiRoute) {
    return;
  }
  
  //this if statement will redirect the user away from the login or register page if they are already logged in
  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(`${url}/dashboard`);

  }
  if (isAuthRoute && !isLoggedIn) {
    return;
  }

    //this if statement will redirect the user to the login page if they are not logged in and try to access a private route
  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(`${url}/auth/login`);
  }

  })
//check to see if the user should have access to this route

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
