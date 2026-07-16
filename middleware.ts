import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin') || pathname.startsWith('/api') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }
  if (pathname === '/') {
    const manualPref = req.cookies.get('lang-manual')?.value
    if (!manualPref) {
      const accept = req.headers.get('accept-language') ?? ''
      const first = accept.split(',')[0]?.split('-')[0]?.toLowerCase()
      if (first === 'en') {
        return NextResponse.redirect(new URL('/en/', req.url))
      }
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\.png$).*)'],
}
