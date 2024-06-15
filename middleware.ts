import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Define the custom redirect logic
const customRedirectMiddleware = (request: NextRequest) => {
  if (request.headers?.get("host")?.includes("next-enterprise.vercel.app")) {
    return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
  }
}

// Define public routes
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"])

// Combine the custom middleware and Clerk middleware
export function middleware(request: NextRequest, event: any) {
  // Apply custom redirect logic
  const customRedirectResponse = customRedirectMiddleware(request)
  if (customRedirectResponse) return customRedirectResponse

  // Apply Clerk middleware and return the response
  return clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)) auth().protect()
    return NextResponse.next()
  })(request, event) // Pass both arguments to clerkMiddleware
}

// Configuration for the routes to match
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
}
