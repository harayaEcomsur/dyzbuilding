import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Parts Request — LG, Samsung and Gree',
  description:
    'Catalog of original parts for LG, Samsung and Gree equipment. Select what you need and request a free, no-commitment quote.',
  alternates: {
    canonical: `${siteUrl}/en/parts/`,
    languages: {
      es: `${siteUrl}/repuestos/`,
      en: `${siteUrl}/en/parts/`,
    },
  },
  openGraph: {
    title: 'Parts Request — LG, Samsung and Gree | D&Z Building Chile',
    description: 'Original parts for LG, Samsung and Gree equipment. Free, no-commitment quote.',
    url: `${siteUrl}/en/parts/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function PartsPage() {
  return (
    <div className="sp-wrap">
      <nav className="sp-topnav">
        <Link href="/en" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
        </Link>
        <Link href="/en#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
          Request a quote
        </Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-breadcrumb">
          <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <span>Parts</span>
        </div>
        <h1 className="sp-hero-title">Parts<br />Request</h1>
        <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 0' }}>
          Original parts for LG, Samsung and Gree. Select what you need and we&apos;ll send you a quote — free, no commitment.
        </p>
      </div>

      <RepuestosCatalogo lang="en" />

      <footer className="sp-footer">
        <Link href="/en" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>
    </div>
  )
}
