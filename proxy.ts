import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname

  // Language auto-detection for public homepage
  if (path === '/') {
    const manualPref = req.cookies.get('lang-manual')?.value
    if (!manualPref) {
      const accept = req.headers.get('accept-language') ?? ''
      const first = accept.split(',')[0]?.split('-')[0]?.toLowerCase()
      if (first === 'en') {
        return NextResponse.redirect(new URL('/en/', req.url))
      }
    }
  }

  // Admin auth guard
  const isAdminRoute = path.startsWith('/admin')
  const isLoginPage = path === '/admin/login'

  if (!isAdminRoute) return NextResponse.next()

  const cookie = req.cookies.get('session')?.value
  const session = await decrypt(cookie)

  if (!isLoginPage && !session?.role) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
  }

  if (isLoginPage && session?.role) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.png$).*)'],
}
