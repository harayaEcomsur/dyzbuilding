import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC Preventive Maintenance in Chile — VRF & Refrigeration Service Contracts',

  description:
    'Preventive maintenance contracts for VRF systems, commercial refrigeration, and industrial HVAC in Chile. Certified technicians, scheduled visits, technical reports, and manufacturer warranty preservation.',
  alternates: {
    canonical: `${siteUrl}/en/services/preventive-maintenance/`,
    languages: {
      en: `${siteUrl}/en/services/preventive-maintenance/`,
      es: `${siteUrl}/servicios/mantenimiento-preventivo/`,
    },
  },
  openGraph: {
    title: 'HVAC Preventive Maintenance Chile | D&Z Building',
    description:
      'Maintenance contracts for VRF, commercial refrigeration, and industrial HVAC in Chile. Quarterly or monthly visits, technical reports, SLA available.',
    url: `${siteUrl}/en/services/preventive-maintenance/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const INCLUDED = [
  {
    titulo: 'VRF / Multi-Split Systems',
    items: [
      'Filter cleaning and replacement (indoor units)',
      'Condensate drain inspection and cleaning',
      'Refrigerant pressure check (Schrader port)',
      'Compressor amperage and superheat verification',
      'Remote controller function test',
      'Error code history scan (Daikin/Mitsubishi/LG service tools)',
      'Fan blade and coil cleaning (outdoor unit)',
    ],
  },
  {
    titulo: 'Commercial Refrigeration',
    items: [
      'Evaporator and condenser coil cleaning',
      'Door gasket and hinge inspection',
      'Defrost cycle verification',
      'Refrigerant leak check with electronic detector',
      'Oil level check (semi-hermetic compressors)',
      'Temperature setpoint and alarm calibration',
      'Electrical panel inspection and tightening',
    ],
  },
  {
    titulo: 'Ventilation and AHUs',
    items: [
      'Filter replacement (G4/F7/H13 as specified)',
      'Belt tension and motor bearing check',
      'Damper actuator and position verification',
      'HRV heat exchanger cleaning',
      'CO/CO₂ sensor calibration check',
      'BMS data point verification',
    ],
  },
]

const PLANS = [
  {
    name: 'Essential',
    cadence: 'Twice a year',
    ideal: 'Small offices, retail stores',
    includes: ['Semi-annual visit', 'Maintenance report', 'Phone support', 'Manufacturer warranty preservation'],
  },
  {
    name: 'Standard',
    cadence: 'Quarterly',
    ideal: 'Mid-size offices, clinics, restaurants',
    includes: ['4 visits / year', 'Detailed technical report', 'Priority response (48h)', 'Minor consumables included', 'Manufacturer warranty preservation'],
  },
  {
    name: 'Priority',
    cadence: 'Monthly',
    ideal: 'Hotels, hospitals, data centers',
    includes: ['12 visits / year', 'Detailed technical report', 'SLA 24h response', 'Consumables included', 'Emergency dispatch', 'Manufacturer warranty preservation'],
  },
]

const FAQ = [
  {
    q: 'Does preventive maintenance keep the manufacturer warranty valid?',
    a: 'Yes. All major brands (Daikin, Mitsubishi Electric, LG, Carrier) require documented preventive maintenance by a certified technician as a condition of their warranty. We provide a signed technical report after each visit that you can present to the manufacturer if needed. Without periodic maintenance, a warranty claim for compressor failure — typically the most expensive repair — may be denied.',
  },
  {
    q: 'How often does a VRF system need maintenance in Chile?',
    a: 'For commercial VRF systems in Chile, we recommend a minimum of two visits per year: one before the summer cooling season (October–November) and one before the winter heating season (April–May). Systems in high-use environments (24/7 operations, dusty areas, coastal locations with salt air) benefit from quarterly visits. Heavy-duty environments like data centers or hospitals require monthly inspection.',
  },
  {
    q: 'Do you service brands you did not install?',
    a: 'Yes. We service all major brands: Daikin, Mitsubishi Electric, LG, Samsung, Carrier, Lennox, York, and Midea. For systems under manufacturer warranty that we did not install, we can provide maintenance aligned with the manufacturer\'s requirements so your warranty remains valid. We have access to brand-specific diagnostic tools and service manuals.',
  },
  {
    q: 'What is included in the technical report after each visit?',
    a: 'Each visit produces a signed technical report with: date and equipment list inspected, measurements taken (refrigerant pressures, compressor amperage, air temperature delta), anomalies found and their severity, work performed, consumables replaced, and recommendations for the next visit. The report is delivered digitally (PDF) and can be sent to your facilities or property management team.',
  },
  {
    q: 'Can you cover multiple locations across Chile?',
    a: 'Yes. We cover all regions of Chile. For clients with multiple locations (retail chains, hotel groups, clinic networks), we coordinate maintenance schedules centrally and deliver a consolidated report per location. This simplifies facilities management and ensures all sites are covered under a single contract.',
  },
  {
    q: 'What is the response time for an emergency repair under a maintenance contract?',
    a: 'Under our Standard plan, response time is 48 business hours for non-critical equipment. Under our Priority plan, we commit to a 24-hour response for critical equipment (server room cooling, operating room HVAC, refrigerated cold rooms). For data centers and hospitals, we can structure a custom SLA with a 4-hour on-site response.',
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
        { '@type': 'ListItem', position: 3, name: 'Preventive Maintenance', item: `${siteUrl}/en/services/preventive-maintenance/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/preventive-maintenance/#service`,
      name: 'HVAC Preventive Maintenance Contracts — Chile',
      description: 'Preventive maintenance contracts for VRF systems, commercial refrigeration, and industrial HVAC in Chile. Certified technicians, scheduled visits, technical reports.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'HVAC Preventive Maintenance',
      url: `${siteUrl}/en/services/preventive-maintenance/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/preventive-maintenance/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function PreventiveMaintenancePage() {
  return (
    <>
      <Script id="ld-maintenance-en" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/en/services/" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/en/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Request a quote
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/en/services/" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
            <span>›</span>
            <span>Preventive Maintenance</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Service · Maintenance Contracts · VRF · Refrigeration · Ventilation
          </p>
          <h1 className="sp-hero-title">HVAC Preventive Maintenance<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Maintenance contracts for VRF systems, commercial refrigeration, and industrial HVAC
            across Chile. Certified technicians, scheduled visits, signed technical reports,
            and manufacturer warranty preservation.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a maintenance quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* What's included */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            What each visit includes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            System-specific inspection checklists
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {INCLUDED.map((cat, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 16px' }}>
                  {cat.titulo}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Maintenance plans
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Choose the coverage that fits your operation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {PLANS.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg2)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '14px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 4 }}>
                    {p.name}
                  </div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {p.cadence}
                  </div>
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)' }}>
                  Ideal for: {p.ideal}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {p.includes.map((inc, j) => (
                    <li key={j} style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', paddingLeft: 14, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link href="/en/#contacto" className="sp-hero-cta" style={{ fontSize: '11px', textAlign: 'center', marginTop: 'auto' }}>
                  Request {p.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Common questions
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(13px,1.3vw,15px)', fontWeight: 400, letterSpacing: '.02em', color: 'var(--text)', margin: '0 0 10px' }}>
                  {f.q}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Related services
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/services/vrf-systems/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              VRF Systems →
            </Link>
            <Link href="/en/services/commercial-refrigeration/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Commercial Refrigeration →
            </Link>
            <Link href="/en/services/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All services →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Get a maintenance quote
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Protect your HVAC investment
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us your equipment list, location, and number of units.
            We will send you a maintenance contract proposal within 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request maintenance quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">View all services</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
