import type { Metadata } from 'next'
import { Josefin_Sans, Outfit } from 'next/font/google'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="es-CL" className={`${josefinSans.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
