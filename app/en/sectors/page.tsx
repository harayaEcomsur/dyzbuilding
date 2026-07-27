import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Industries We Serve — Commercial & Industrial HVAC in Chile',

  description:
    'D&Z Building provides commercial and industrial HVAC for offices, data centers, healthcare, mining, hotels, retail, and agro-industry in Chile. Explore sector-specific solutions.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/`,
    languages: {
      en: `${siteUrl}/en/sectors/`,
      es: `${siteUrl}/sectores/`,
    },
  },
  openGraph: {
    title: 'Industries We Serve — HVAC Chile | D&Z Building',
    description:
      'Sector-specific HVAC solutions for offices, data centers, healthcare, mining, hotels, and more. Commercial and industrial specialists in Chile.',
    url: `${siteUrl}/en/sectors/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SECTORS = [
  {
    title: 'Offices & Commercial Buildings',
    desc: 'Zoned VRF systems for office floors, coworking, and corporate buildings. BMS integration, per-tenant energy metering, LEED/EDGE documentation.',
    href: '/en/sectors/offices/',
    hasPage: true,
  },
  {
    title: 'Data Centers & Server Rooms',
    desc: 'Precision HVAC (CRAC/CRAH), N+1 redundancy, hot/cold aisle containment, free cooling. ANSI/TIA-942 Tier I–IV compliant designs.',
    href: '/en/sectors/data-centers/',
    hasPage: true,
  },
  {
    title: 'Healthcare — Hospitals & Clinics',
    desc: 'Surgical theaters (ISO 5, HEPA H14, laminar flow), ICU, isolation rooms, cleanroom pharmacy. MINSAL Res. N°283 and ASHRAE 170 compliance.',
    href: '/en/sectors/health/',
    hasPage: true,
  },
  {
    title: 'Mining Operations',
    desc: 'Control rooms (N+1 redundancy), process plants (ATEX), high-altitude camps (Atacama/Altiplano), and analytical laboratories. DS 132 compliance.',
    href: '/en/sectors/mining/',
    hasPage: true,
  },
  {
    title: 'Hotels & Resorts',
    desc: 'Silent VRF for guest rooms (NC-25/30), spa dehumidification, PMS integration, LEED v4 energy documentation. Nationwide coverage.',
    href: '/en/sectors/hotels/',
    hasPage: true,
  },
  {
    title: 'Retail & Supermarkets',
    desc: 'Integrated HVAC + commercial refrigeration: sales floor VRF, centralized refrigeration racks, CO₂ transcritical systems, multi-store SLA contracts.',
    href: '/en/sectors/retail/',
    hasPage: true,
  },
  {
    title: 'Agro-Industry & Cold Chain',
    desc: 'Packing facilities (T 8–14°C), cold storage chambers, controlled atmosphere rooms (O₂/CO₂), and pre-cooling tunnels for Chilean fruit exports.',
    href: '/en/sectors/agro/',
    hasPage: true,
  },
  {
    title: 'Industrial Plants & Warehouses',
    desc: 'Industrial ventilation, ATEX extraction, evaporative cooling for large spaces, and HVAC for process control areas. DS 594 compliance.',
    href: '/en/sectors/industrial/',
    hasPage: true,
  },
  {
    title: 'Pharmaceutical',
    desc: 'GMP cleanrooms ISO 7-8, solid and liquid pharmaceutical manufacturing, QC labs, and IQ/OQ/PQ validation for ISP licensing.',
    href: '/en/sectors/pharmaceutical/',
    hasPage: true,
  },
  {
    title: 'Education & Schools',
    desc: 'HVAC for schools, universities, and technical training centers: CO₂-controlled classrooms, silent auditoriums, gym ventilation, and cafeteria kitchen extraction.',
    href: '/en/sectors/education/',
    hasPage: true,
  },
  {
    title: 'Food Service',
    desc: 'Commercial kitchen ventilation (NFPA 96), make-up air, dining room VRF, and HACCP-compliant food processing HVAC for restaurants, hotels, and corporate cafeterias.',
    hasPage: true,
    href: '/en/sectors/food-service/',
  },
  {
    title: 'Sports Facilities',
    desc: 'Indoor pool dehumidification with heat recovery, CO₂ demand-controlled gym ventilation, locker room negative-pressure exhaust, and multi-court arena climate control.',
    hasPage: true,
    href: '/en/sectors/sports-facilities/',
  },
  {
    title: 'Shopping Centers',
    desc: 'Anchor store and mid-size retail VRF with per-tenant metering, food court NFPA 96 extraction, common area AHU, and BMS energy management for malls and strip centers.',
    hasPage: true,
    href: '/en/sectors/shopping-centers/',
  },
  {
    title: 'Warehousing & Logistics Centers',
    desc: 'Large-volume ventilation, office climate control within warehouses, temperature management for sensitive goods storage, and loading dock extraction.',
    hasPage: true,
    href: '/en/sectors/warehousing/',
  },
  {
    title: 'Laboratories & R&D Centers',
    desc: 'Fume hood VAV extraction, BSL-2/3 negative pressure, ISO 14644 cleanrooms, ±2% RH humidity control, and MINSAL Resolution 510/99 compliance for analytical and pharmaceutical labs.',
    hasPage: true,
    href: '/en/sectors/laboratories/',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
    { '@type': 'ListItem', position: 2, name: 'Sectors', item: `${siteUrl}/en/sectors/` },
  ],
}

export default function EnSectorsIndexPage() {
  return (
    <>
      <Script id="ld-sectors-en" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={110}
              height={36}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <Link href="/en/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
            Request a Quote
          </Link>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span>Sectors</span>
          </div>
          <h1 className="sp-hero-title">Industries We Serve</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 28px' }}>
            Commercial and industrial HVAC specialists in Chile — from corporate offices
            to mining operations, healthcare, and hospitality.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">Our Services</Link>
          </div>
        </div>

        {/* Sectors grid */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            By industry
          </p>
          <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(22px,2.8vw,34px)', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, color: 'var(--text)' }}>
            Sectors we cover
          </h2>
          <div className="sp-aplic-grid">
            {SECTORS.map((s) => (
              <div key={s.title} className="sp-aplic-item">
                {s.hasPage ? (
                  <Link href={s.href} style={{ color: 'var(--accent)', fontWeight: 600 }}>{s.title}</Link>
                ) : (
                  <strong style={{ color: 'var(--accent)' }}>{s.title}</strong>
                )}
                <p>{s.desc}</p>
                {!s.hasPage && (
                  <Link href="/?servicio=0#contacto" style={{ color: 'var(--dim)', fontSize: '0.85rem' }}>
                    Contact us →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Let&apos;s talk
          </p>
          <h2 className="sp-cta-title">
            What sector are you planning for?
          </h2>
          <p className="sp-cta-sub">
            Free quote. Certified technicians. Nationwide coverage across Chile.
          </p>
          <div className="sp-cta-btns">
            <Link href="/en/#contacto" className="sp-hero-cta">Request a free quote</Link>
            <Link href="/en/" className="sp-hero-cta sp-hero-cta-outline">Back to home</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
