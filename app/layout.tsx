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
  title: 'D&Z Building — Climatización & Refrigeración Comercial',
  description: '20 años de experiencia en climatización comercial, refrigeración, ventilación y proyectos VRF/VRV en todo Chile. LG, Samsung, Gree.',
  keywords: 'climatización, refrigeración, HVAC, VRF, Chile, D&Z Building',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${josefinSans.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
