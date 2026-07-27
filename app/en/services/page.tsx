import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC & Refrigeration Services in Chile',

  description:
    'Complete catalog of D&Z Building services: VRF systems, commercial refrigeration, preventive maintenance, industrial ventilation, turnkey projects, and engineering consultancy. Commercial and industrial HVAC specialists in Chile.',
  alternates: {
    canonical: `${siteUrl}/en/services/`,
    languages: {
      en: `${siteUrl}/en/services/`,
      es: `${siteUrl}/servicios/`,
    },
  },
  openGraph: {
    title: 'HVAC & Refrigeration Services in Chile | D&Z Building',
    description:
      'VRF systems, commercial refrigeration, preventive maintenance, and engineering consultancy for commercial and industrial clients in Chile.',
    url: `${siteUrl}/en/services/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SERVICES = [
  {
    title: 'Commercial HVAC / VRF Systems',
    desc: 'Design, supply, and installation of VRF/VRV multi-split systems for offices, hotels, retail, shopping centers, clinics, and data centers.',
    href: '/en/services/vrf-systems/',
    hasPage: true,
  },
  {
    title: 'Commercial Refrigeration',
    desc: 'Display cases, gondolas, and cold rooms for supermarkets, butcher shops, food service, pharmacies, and agro-industry.',
    href: '/en/services/commercial-refrigeration/',
    hasPage: true,
  },
  {
    title: 'Industrial Ventilation & Extraction',
    desc: 'HRV systems, industrial extractors, and air renewal for environments with technical or regulatory air quality requirements.',
    href: '/en/services/industrial-ventilation/',
    hasPage: true,
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Periodic maintenance plans, diagnostics, and performance guarantees for VRF, air conditioning, and commercial refrigeration systems.',
    href: '/en/services/preventive-maintenance/',
    hasPage: true,
  },
  {
    title: 'Turnkey Projects',
    desc: 'Engineering, supply, installation, and commissioning of complete HVAC systems. One point of contact from start to finish.',
    href: '/en/services/turnkey-projects/',
    hasPage: true,
  },
  {
    title: 'VRV/VRF Operational Analysis',
    desc: 'Audit of installed VRV/VRF systems: real-world efficiency, recurring faults, and an optimization plan for commercial and industrial installations.',
    href: '/?servicio=analisis-vrf#contacto',
    hasPage: false,
  },
  {
    title: 'HVAC Energy Efficiency',
    desc: 'Energy consumption diagnostics, A+++ equipment selection, and energy efficiency certification for commercial and industrial buildings.',
    href: '/en/services/energy-efficiency/',
    hasPage: true,
  },
  {
    title: 'Engineering Consultancy',
    desc: 'Detailed engineering, technical specifications, BIM HVAC modeling, and consultancy support for architects and contractors.',
    href: '/?servicio=asesoria#contacto',
    hasPage: false,
  },
  {
    title: 'BIM HVAC Modeling',
    desc: '3D BIM modeling of HVAC systems in Revit MEP: LOD 300, multi-discipline clash detection, IFC export, and Plan BIM Chile compliance for commercial and industrial projects.',
    href: '/en/services/bim-hvac-modeling/',
    hasPage: true,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/en/services/` },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'HVAC & Refrigeration Services — D&Z Building Chile',
      description: 'Catalog of commercial and industrial HVAC services by D&Z Building in Chile.',
      url: `${siteUrl}/en/services/`,
      numberOfItems: SERVICES.length,
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        description: s.desc,
        url: s.hasPage ? `${siteUrl}${s.href}` : `${siteUrl}/en/services/`,
      })),
    },
  ],
}

export default function EnServicesPage() {
  return (
    <>
      <Script id="ld-en-services" type="application/ld+json">
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
            <span>Services</span>
          </div>
          <h1 className="sp-hero-title">HVAC & Refrigeration<br />Services in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 28px' }}>
            D&Z Building provides commercial and industrial HVAC solutions across Chile.
            VRF systems, commercial refrigeration, preventive maintenance, and specialized engineering consultancy.
          </p>
          <Link href="/en/#contacto" className="sp-hero-cta">Request a free quote</Link>
        </div>

        {/* Services grid */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Specialties
          </p>
          <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(22px,2.8vw,34px)', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, color: 'var(--text)' }}>
            What we do
          </h2>
          <div className="svc-index-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="svc-index-card">
                <h3 className="svc-index-title">{s.title}</h3>
                <p className="svc-index-desc">{s.desc}</p>
                {s.hasPage ? (
                  <Link href={s.href} className="svc-index-link">Learn more →</Link>
                ) : (
                  <Link href="/en/#contacto" className="svc-index-link">Request a quote →</Link>
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
          <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            What project are you planning?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)' }}>
            Free quote within 48–72 hours. Certified technicians. Nationwide coverage across Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
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
