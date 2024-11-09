// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  // Define the protected routes
  const protectedRoutes = ['/protected', '/dashboard', '/profile']; // Add any routes you want to protect

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
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
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
  matcher: ['/protected', '/dashboard', '/profile'], // Apply to these routes
};
