import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Data Center Cooling in Chile — Precision HVAC for Server Rooms',

  description:
    'Precision HVAC for data centers and server rooms in Chile. CRAC/CRAH units, N+1 redundancy, hot/cold aisle containment, free cooling, PUE optimization, and 24/7 SLA maintenance.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/data-centers/`,
    languages: {
      en: `${siteUrl}/en/sectors/data-centers/`,
      es: `${siteUrl}/sectores/data-centers/`,
    },
  },
  openGraph: {
    title: 'Data Center Cooling Chile — CRAC, CRAH, N+1, PUE | D&Z Building',
    description:
      'Precision HVAC for data centers in Chile: CRAC/CRAH, hot/cold aisle containment, free cooling, Tier I–IV design, 24/7 SLA.',
    url: `${siteUrl}/en/sectors/data-centers/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'CRAC / CRAH Precision Units',
    subtitulo: '±0.5°C · 18–27°C / 40–60% RH',
    desc: 'Computer Room Air Conditioning (CRAC) with self-contained compressors and Computer Room Air Handlers (CRAH) running chilled water — covering IT loads from 10 kW to multi-MW deployments. Electronic temperature and humidity control maintains ASHRAE A2 class conditions (18–27°C, 40–60% RH) with ±0.5°C tolerances. We size and select Stulz, Vertiv (Liebert), and Schneider Electric (APC InRow) units.',
  },
  {
    titulo: 'In-Row Cooling',
    subtitulo: 'High-density racks · >10 kW/rack',
    desc: 'Cooling units deployed between server racks remove heat at the point of generation — essential for high-density deployments above 10 kW per rack. In-row units eliminate the long air paths of perimeter CRAC and enable dense deployments without hot spots. We design the rack layout and airflow model before specifying unit count and capacity.',
  },
  {
    titulo: 'Hot/Cold Aisle Containment',
    subtitulo: '15–30% PUE improvement',
    desc: 'Physical containment systems separate cold supply air from hot return air, preventing mixing and improving PUE by 15–30%. We design and build containment enclosures (overhead, end-of-row, blanking panels) matched to the existing rack layout. Compatible with all major rack brands. Often the highest-ROI intervention in an existing data center.',
  },
  {
    titulo: 'Free Cooling & Economizers',
    subtitulo: '2,000–4,000 free-cooling hours/year',
    desc: "Chile's climate (especially the dry, mild central region and arid north) allows adiabatic free cooling for 2,000–4,000 hours per year depending on site location — dramatically reducing compressor run-time. We model the free-cooling potential for each site before system selection and include it in the energy consumption projections.",
  },
  {
    titulo: 'BMS Integration & Real-Time Monitoring',
    subtitulo: 'DCIM · BACnet/Modbus · Alerts',
    desc: 'We integrate HVAC systems with the data center BMS or DCIM platform for real-time monitoring of temperature, humidity, differential pressure, and unit status. Alert rules send email and SMS notifications with response times defined in the SLA. Compatible with common DCIM platforms (Schneider EcoStruxure, Vertiv Avocent, custom).',
  },
  {
    titulo: 'Preventive Maintenance — 24/7 SLA',
    subtitulo: '4-hour response · Quarterly or monthly',
    desc: 'Maintenance contracts for data center HVAC include quarterly or monthly scheduled visits (refrigerant checks, filter replacement, belt inspection, drain cleaning, sensor calibration) plus 24/7/365 emergency response with a 4-hour on-site SLA. Critical spare parts are pre-positioned based on site inventory requirements.',
  },
]

const STATS = [
  { valor: '< 1.5', unidad: 'PUE', etiqueta: 'Target power usage effectiveness' },
  { valor: 'N+1', unidad: 'redundancy', etiqueta: 'Cooling system design standard' },
  { valor: '4 h', unidad: 'SLA', etiqueta: '24/7 emergency response time' },
  { valor: 'Tier I–IV', unidad: 'ANSI/TIA-942', etiqueta: 'Design standard compliance' },
]

const FAQ = [
  {
    q: 'What is the difference between CRAC and CRAH units for data centers?',
    a: 'A CRAC (Computer Room Air Conditioning) unit has its own refrigeration compressor and can operate independently — simpler infrastructure, easier redundancy for small and mid-size deployments. A CRAH (Computer Room Air Handler) circulates chilled water from a central chiller plant, enabling higher efficiency at large scale (500 kW+) but requiring additional plant room infrastructure. For most mid-size data centers in Chile, CRAC is the more common and cost-effective choice; for large Tier III/IV facilities, CRAH with chillers typically delivers a lower PUE.',
  },
  {
    q: 'What does precision HVAC for a data center cost in Chile?',
    a: 'Cost depends on the Tier level and IT load. A small server room under 20 kW can be served by 1–2 precision CRAC units from approximately UF 400–800 installed. A mid-size data center (100–500 kW IT load) with N+1 redundancy typically requires UF 3,000–15,000. Tier III or IV projects with loads above 1 MW can exceed UF 30,000. We provide a free technical specification and cost estimate within 72 hours of receiving the project brief.',
  },
  {
    q: 'What PUE can your systems achieve in Chilean conditions?',
    a: "With hot/cold aisle containment, adiabatic free cooling, and variable-frequency drives on compressors and fans, we typically deliver PUE 1.3–1.5 for Santiago and regional sites. Chile's climate — dry, mild central region; arid, thermally stable north — is unusually well suited for free cooling integration, which reduces compressor run-hours significantly compared to tropical climates.",
  },
  {
    q: 'Can you design to ANSI/TIA-942 or Uptime Institute Tier standards?',
    a: 'Yes. We design cooling systems in compliance with ANSI/TIA-942 (Tier I–IV availability categories) and Uptime Institute Tier certification requirements. We produce the technical documentation required for certification processes: single-line diagrams, redundancy matrices, concurrent-maintainability analysis, and ASHRAE compliance sheets. We also support green building certifications (LEED, EDGE) where energy performance documentation is required.',
  },
  {
    q: 'Do you provide remote monitoring and 24/7 support?',
    a: "Yes. We integrate HVAC systems with BMS or DCIM platforms for real-time monitoring, alarm management, and remote diagnostics. Our data center maintenance contracts include 24/7/365 emergency response with a 4-hour on-site SLA for Santiago and major regional cities. Monitoring dashboards can be shared with the client's operations team.",
  },
  {
    q: 'Which precision cooling brands do you install and service?',
    a: 'We work with Stulz, Vertiv (Liebert), and Schneider Electric (APC InRow) for precision CRAC/CRAH units, and Carrier and LG for chiller plants. Brand selection is driven by the load density, redundancy requirements, and budget. We maintain service agreements with all three precision cooling brands, enabling warranty-preserving maintenance and OEM spare parts.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Sectors', item: `${siteUrl}/en/sectors/` },
        { '@type': 'ListItem', position: 3, name: 'Data Centers', item: `${siteUrl}/en/sectors/data-centers/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/data-centers/#service`,
      name: 'Data Center Cooling & Precision HVAC in Chile',
      description:
        'Precision HVAC design, supply, installation, and maintenance for data centers in Chile. CRAC/CRAH units, N+1 redundancy, hot/cold aisle containment, free cooling, PUE optimization, ANSI/TIA-942 compliance.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/data-centers/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/data-centers/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorDataCentersPage() {
  return (
    <>
      <Script id="ld-en-sector-data-centers" type="application/ld+json">
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
            <Link href="/?servicio=0#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Request a quote
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/en/services/" style={{ color: 'inherit', textDecoration: 'none' }}>Sectors</Link>
            <span>›</span>
            <span>Data Centers</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Tier I–IV
          </p>
          <h1 className="sp-hero-title">Data Center Cooling<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Precision HVAC for server rooms and data centers — CRAC/CRAH, N+1 redundancy,
            hot/cold aisle containment, and free cooling optimized for Chilean climate conditions.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip — fallback layout (sp-stats-strip not in globals.css) */}
        <div className="sp-section" style={{ paddingTop: 'clamp(28px,3vw,44px)', paddingBottom: 'clamp(28px,3vw,44px)' }}>
          <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ flex: '1 1 180px', padding: '24px 28px', borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : undefined }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(22px,2.8vw,32px)', fontWeight: 300, color: 'var(--accent)', marginBottom: 4 }}>
                  {s.valor}
                </div>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                  {s.unidad}
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', lineHeight: 1.5 }}>
                  {s.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Solutions
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            How we solve it
          </h2>
          <div className="sp-aplic-grid">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3>{s.titulo}</h3>
                  <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)', margin: '4px 0 0', lineHeight: 1.3 }}>
                    {s.subtitulo}
                  </p>
                </div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid CTA */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                Engineering included
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 520 }}>
                Planning a data center or server room in Chile? We deliver a free technical specification and cost estimate within 72 hours. Our team works in both Spanish and English.
              </p>
            </div>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Get a Free Estimate →
            </Link>
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
            <Link href="/en/services/preventive-maintenance/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Preventive Maintenance →
            </Link>
            <Link href="/en/services/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All services →
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Next step
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Tell us about your project
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Free technical quote in 48–72 hours. Engineering included at no cost.
            Certified technicians. National coverage.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Request a technical quote</Link>
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
