import authConfig from "../auth.config";
import NextAuth from "next-auth";
import { apiAuthPrefix, authRoutes, DEFAULT_SIGNIN_REDIRECT, publicRoutes } from "../routes";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) return
  
  if (isAuthRoute && isLoggedIn) return Response.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, nextUrl))
  if (isAuthRoute) return

  if (!isLoggedIn && !isPublicRoute) return Response.redirect(new URL("/auth/signin", nextUrl))

  return
})

// o matcher serve para configurar as condições onde esse middleware deve ser chamado
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}