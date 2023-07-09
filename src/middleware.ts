import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const isPublicPath=path=="/login"||path=="/signup";
    // const isPrivatePath=path=="/profile"||path=="/profile/:id";
    const token=request.cookies.get("token")?.value||"";
    if (isPublicPath && token){
        return NextResponse.redirect(new URL("/profile",request.nextUrl));
    }
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
}

export const config = {
    matcher: [
    "/",
    "/profile",
    // "/profile/:id",
    "/login",
    "/signup",
    ]
}