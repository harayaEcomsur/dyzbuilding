import type { Metadata } from 'next'
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
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers()
  const pathname = hdrs.get('x-invoke-path') ?? hdrs.get('next-url') ?? ''
  const lang = pathname.startsWith('/en') ? 'en' : 'es-CL'

  return (
    <html lang={lang} className={`${josefinSans.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
