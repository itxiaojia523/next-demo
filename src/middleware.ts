import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/mock-users", "/user-profile"]);
const isPublickRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-out(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // if (!isPublickRoute(req)) await auth.protect();
  const { userId, redirectToSignIn } = await auth();

  if (!userId && !isPublickRoute(req)) {
    // add  custom logic before redirect
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
