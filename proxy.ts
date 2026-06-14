import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isAdminRoute = path.startsWith('/admin')
  const isLoginPage = path === '/admin/login'

  const cookie = req.cookies.get('session')?.value
  const session = await decrypt(cookie)

  if (isAdminRoute && !isLoginPage && !session?.role) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
  }

  if (isLoginPage && session?.role) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
