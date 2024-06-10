import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectRoute = createRouteMatcher(["/:path*"]);
export default clerkMiddleware((auth,req)=>{
  if(isProtectRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};