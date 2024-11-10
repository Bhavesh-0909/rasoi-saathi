// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  // Define the protected routes
  const protectedRoutes = ['/', '/donation-history', '/education', '/recipe-suggestions']; // Add any routes you want to protect

  // Check if the route is protected
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    const token = req.cookies.get('authToken')?.value;
    if (!token) {
      // Redirect to login if no token is found
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the token
      const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET!);
      await jwtVerify(token, secret);
    } catch (error) {
      console.error('Token verification failed:', error);
      // Redirect to login if the token is invalid or expired
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow request to proceed if authenticated or not a protected route
  return NextResponse.next();
}

// Apply middleware to specific routes or all routes
export const config = {
  matcher: ['/', '/donation-history', '/education', '/recipe-suggestions'], // Apply to these routes
};
