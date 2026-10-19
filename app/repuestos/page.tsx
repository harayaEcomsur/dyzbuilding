import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RepuestosCatalogo from '@/components/RepuestosCatalogo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Solicitud de Repuestos LG, Samsung y Gree',
  description:
    'Catálogo de repuestos originales para equipos LG, Samsung y Gree. Selecciona lo que necesitas y solicita una cotización sin costo ni compromiso.',
  alternates: {
    canonical: `${siteUrl}/repuestos/`,
    languages: {
      es: `${siteUrl}/repuestos/`,
      en: `${siteUrl}/en/parts/`,
    },
  },
  openGraph: {
    title: 'Solicitud de Repuestos LG, Samsung y Gree | D&Z Building Chile',
    description: 'Repuestos originales para equipos LG, Samsung y Gree. Cotización sin costo ni compromiso.',
    url: `${siteUrl}/repuestos/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RepuestosPage() {
  return (
    <div className="sp-wrap">
      <nav className="sp-topnav">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
        </Link>
        <Link href="/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
          Solicitar cotización
        </Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-breadcrumb">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
          <span>›</span>
          <span>Repuestos</span>
        </div>
        <h1 className="sp-hero-title">Solicitud de<br />Repuestos</h1>
        <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 0' }}>
          Repuestos originales para LG, Samsung y Gree. Selecciona lo que necesitas y te enviamos una cotización — sin costo ni compromiso.
        </p>
      </div>

      <RepuestosCatalogo lang="es" />

      <footer className="sp-footer">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
        </Link>
        <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} D&Z Building SpA
        </span>
      </footer>
    </div>
  )
}
