import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCookie } from './utils/cookieManager'

const protectedRoutes = [
    '/dashboard',
    '/welcome-page',
]
export async function middleware(request: NextRequest) {
    if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
        const token = await getCookie('accessToken')
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|images|favicon.ico).*)"],
}