import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC Technical Guides — Commercial & Industrial Chile',

  description:
    'D&Z Building HVAC guides for Chile: commercial HVAC cost ranges, how to choose between VRF, chiller, and multi-split. Practical information for B2B buyers.',
  alternates: {
    canonical: `${siteUrl}/en/guide/`,
    languages: {
      en: `${siteUrl}/en/guide/`,
      es: `${siteUrl}/guias/`,
    },
  },
  openGraph: {
    title: 'HVAC Guides Chile — Costs & Selection Criteria | D&Z Building',
    description:
      'HVAC technical guides for Chile: commercial system costs, VRF vs chiller comparison, and market pricing. For B2B buyers and project managers.',
    url: `${siteUrl}/en/guide/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const GUIDES = [
  {
    title: 'What is a VRF System? Technical Guide 2025',
    desc: 'How VRF (Variable Refrigerant Flow) systems work, the difference between cooling-only, heat pump, and heat recovery types, comparison with conventional splits, and which projects they suit best.',
    href: '/en/guide/what-is-a-vrf-system/',
  },
  {
    title: 'Commercial HVAC Cost in Chile — 2025 Price Guide',
    desc: 'Real HVAC price ranges for offices, data centers, hotels, retail, and industrial projects in Chile. VRF, chiller, commercial refrigeration, and ventilation systems.',
    href: '/en/guide/commercial-hvac-costs-chile/',
  },
  {
    title: 'How to Choose a Commercial HVAC System in Chile',
    desc: 'Technical guide comparing VRF, multi-split, chiller, and packaged units for Chilean commercial projects — with selection criteria, UF budget ranges, and project-type recommendations.',
    href: '/en/guide/choosing-hvac-system-chile/',
  },
  {
    title: 'HVAC Energy Efficiency for Businesses in Chile: 2025 Guide',
    desc: 'How to cut HVAC energy consumption 30–50% with VRF inverter systems, free cooling, heat recovery, and BMS automation. Includes a step-by-step energy audit walkthrough.',
    href: '/en/guide/energy-efficiency-hvac-chile/',
  },
  {
    title: 'HVAC Regulations in Chile: A Guide for Foreign Companies',
    desc: 'DS 594 thermal comfort requirements, OGUC ventilation minimums, NCh vs. ASHRAE standards, and the 4-step permit process. Essential reading for international firms planning HVAC projects in Chile.',
    href: '/en/guide/hvac-regulations-chile-foreign-companies/',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/en/guide/` },
  ],
}

export default function EnGuideIndexPage() {
  return (
    <>
      <Script id="ld-en-guide" type="application/ld+json">
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
          <Link href="/?servicio=0#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
            Request a Quote
          </Link>
        </nav>

        {/* Hero */}
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
            <span>›</span>
            <span>Guides</span>
          </div>
          <h1>
            HVAC Technical Guides
            <br />
            for Chile
          </h1>
          <p className="sp-hero-sub">
            Practical information for B2B buyers of commercial and industrial HVAC in Chile: cost
            ranges, system comparisons, and market context.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Request a Quote
            </Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">
              Our Services
            </Link>
          </div>
        </header>

        {/* Guides grid */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            Technical resources
          </p>
          <h2
            style={{
              margin: '0 0 40px',
              fontSize: 'clamp(22px,2.8vw,34px)',
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            HVAC Buyer&apos;s Guides
          </h2>
          <div className="sp-aplic-grid">
            {GUIDES.map((g) => (
              <div key={g.href} className="sp-aplic-item">
                <h3>
                  <Link
                    href={g.href}
                    style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {g.title}
                  </Link>
                </h3>
                <p>{g.desc}</p>
                <Link
                  href={g.href}
                  style={{
                    fontSize: '11px',
                    color: 'var(--accent)',
                    fontFamily: "'Josefin Sans', sans-serif",
                    letterSpacing: '.08em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                  }}
                >
                  Read guide →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(22px,2.8vw,36px)',
              margin: '0 0 14px',
              color: 'var(--text)',
            }}
          >
            Have an HVAC project in mind?
          </h2>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit', sans-serif",
              margin: '0 0 28px',
              fontSize: 'clamp(14px,1.4vw,17px)',
            }}
          >
            Free quote in 48 – 72 h. Certified technicians. Nationwide coverage in Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Request a free quote
            </Link>
            <Link href="/en/" className="sp-hero-cta sp-hero-cta-outline">
              Back to home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={90}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <span
            style={{
              color: 'var(--dim)',
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '.06em',
            }}
          >
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
