import type { Metadata, Viewport } from 'next'
import { Josefin_Sans, Outfit } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-josefin',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: { default: 'D&Z Building', template: '%s | D&Z Building' },
  generator: 'HarayaDev — haraya.dev',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0c0c',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers()
  const pathname = hdrs.get('x-invoke-path') ?? hdrs.get('next-url') ?? ''
  const lang = pathname.startsWith('/en') ? 'en' : 'es-CL'

  return (
    <html lang={lang} className={`${josefinSans.variable} ${outfit.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://wa.me" />
      </head>
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
