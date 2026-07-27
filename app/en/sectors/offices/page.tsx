import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Office HVAC in Chile — VRF Systems for Commercial Buildings',

  description:
    'VRF air conditioning for office buildings and commercial spaces in Chile. Zoned control, BMS integration, LEED/EDGE documentation, per-tenant energy metering. Santiago and nationwide.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/offices/`,
    languages: {
      en: `${siteUrl}/en/sectors/offices/`,
      es: `${siteUrl}/sectores/oficinas/`,
    },
  },
  openGraph: {
    title: 'Office HVAC Chile — VRF, BMS Integration, LEED | D&Z Building',
    description:
      'Commercial office HVAC in Chile: zoned VRF, BMS/BACnet integration, LEED energy documentation, per-tenant metering. Class A & B buildings.',
    url: `${siteUrl}/en/sectors/offices/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Open-Plan Floors & Flexible Layout',
    subtitulo: 'Zone control · 10–15 workstations per zone',
    desc: 'Open-plan floors require uniform temperature distribution without cold or hot spots. We use 4-way cassettes or ducted fan-coils on a grid, with independent temperature control per work zone (10–15 workstations per zone). VRF zoning can be reconfigured when the floor layout changes — no refrigerant piping changes required.',
  },
  {
    titulo: 'Meeting Rooms & Boardrooms',
    subtitulo: 'Variable occupancy · CO₂ demand ventilation',
    desc: 'Meeting rooms have highly variable occupancy and are the hardest spaces to condition correctly. We install CO₂ sensors that automatically increase ventilation when the room fills (ASHRAE 62.1 demand-controlled ventilation) and reduce consumption when empty. Each room is independently zoned from the open-plan system.',
  },
  {
    titulo: 'Server Rooms & IT Closets',
    subtitulo: 'T ±1°C precision · N+1 redundancy',
    desc: "Building server rooms, telephone exchanges, and network equipment rooms require 24/7 precision cooling with N+1 redundancy. We use precision CRAC units or inverter splits rated for continuous operation, with remote alarm on system failure. We coordinate UPS-backed power supply with the building's electrical team.",
  },
  {
    titulo: 'Lobbies & Common Areas',
    subtitulo: 'Double-height · Solar load · Glazed facades',
    desc: 'Corporate lobbies with double-height ceilings and glass facades have high solar loads on north/west orientations. We solve this with floor-standing VRF, AHU distribution through the plenum, or floor-to-ceiling fan-coils for curtain-wall facades. Design accounts for seasonal solar load variation to prevent overheating in summer.',
  },
  {
    titulo: 'Coworking & High-Density Spaces',
    subtitulo: '3× occupancy density · Modular expansion',
    desc: "Coworking spaces have occupancy densities three times higher than a conventional corporate office. HVAC must be sized for peak occupancy and allow expansion without replacing outdoor units. VRF systems are ideal: add indoor units within the outdoor unit's capacity as the space grows, with no refrigerant line changes.",
  },
  {
    titulo: 'BMS Integration & Tenant Energy Metering',
    subtitulo: 'BACnet IP · Modbus TCP · Per-floor metering',
    desc: 'All office projects integrate with the building BMS via BACnet IP or Modbus TCP — enabling the building manager to monitor all equipment, schedule operation by floor or zone, and generate per-tenant energy consumption reports. We support both direct sub-metering (electricity meters per tenant circuit) and proportional allocation depending on building class.',
  },
]

const STATS = [
  { valor: 'UF 350–600', unidad: '600 m² floor', etiqueta: 'Reference cost, VRF installed' },
  { valor: '21–23°C', unidad: 'setpoint', etiqueta: 'Optimal productivity range (ASHRAE 55)' },
  { valor: 'LEED / EDGE', unidad: '', etiqueta: 'Energy documentation support' },
  { valor: 'BACnet IP', unidad: 'BMS', etiqueta: 'Integration protocol' },
]

const FAQ = [
  {
    question: 'How much does it cost to air-condition a 600 m² office floor in Santiago?',
    answer:
      'A 600 m² office floor with a commercial-grade VRF system (Daikin, Mitsubishi Electric, LG) including indoor cassette or ducted units, outdoor VRF unit, refrigerant piping, control cabling, and commissioning has a reference cost of approximately UF 350–600 installed. This varies by floor layout complexity, ceiling height, distance to the mechanical space, and brand selection. We provide a free specification and quote within 72 hours of receiving the floor plan.',
  },
  {
    question: 'VRF or chiller + fan-coil: which is better for office buildings in Chile?',
    answer:
      'For individual office floors (one tenant, 300–2,000 m²), VRF is typically the better choice: faster installation, no central plant room, individual zone control, and better efficiency at partial loads. For whole buildings with total cooling loads above 500 TR and multiple tenants per floor, chilled water systems (chiller + fan-coil) offer advantages: centralized maintenance, longer equipment life, and easier large-scale expansion. For leased space in Class A buildings, the base building system is usually already installed by the landlord — the tenant selects the indoor unit style.',
  },
  {
    question: 'How is cooling energy consumption distributed between tenants?',
    answer:
      "Two approaches are common. Direct sub-metering installs energy meters on each tenant's HVAC circuits and bills actual consumption — the fairest method, but requires meter investment. Proportional allocation divides total building HVAC consumption among tenants in proportion to leased area — simpler but doesn't reflect actual usage differences. For new Class A buildings, direct sub-metering with BMS integration is increasingly the standard. We support both and can specify the metering infrastructure as part of the HVAC project.",
  },
  {
    question: 'What temperature setpoint should a Santiago office use?',
    answer:
      'ASHRAE 55 (Thermal Environmental Conditions) recommends 20–26°C for sedentary office work. Studies on cognitive performance suggest 21–23°C as the sweet spot for productivity. We recommend 22°C in summer and 20°C in winter. A common error is setting very low setpoints in summer (18–19°C) — this increases energy consumption 20–40% with no comfort benefit and creates uncomfortable drafts near supply diffusers.',
  },
  {
    question: 'Can you provide LEED or EDGE documentation for the HVAC system?',
    answer:
      "Yes. While D&Z Building is not a LEED or EDGE certifying body, we prepare all HVAC technical documentation required for certification: thermal load calculations, equipment specifications with efficiency metrics (EER, COP, SEER), commissioning plan, and the building energy model for EA Prerequisite 2 and EA Credit 1 (LEED v4) or the 20% energy reduction vs. baseline (EDGE). We coordinate with the project's LEED consultant or certified architect to ensure the HVAC contributes the projected Energy & Atmosphere credits.",
  },
  {
    question: 'How long does VRF installation take in an occupied office building?',
    answer:
      'A 600–1,000 m² office floor during fit-out (with construction work ongoing) can be completed in 3–5 weeks: one week for refrigerant piping and cabling during rough-in phase, one to two weeks for indoor unit installation during finish phase, and one week for commissioning and testing. In occupied offices with access restrictions (weekends or night-shifts only), the timeline extends to 6–10 weeks. We prepare a detailed installation program showing work phases relative to the construction schedule.',
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
        { '@type': 'ListItem', position: 3, name: 'Offices', item: `${siteUrl}/en/sectors/offices/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/offices/#service`,
      name: 'Office HVAC & VRF Systems in Chile',
      description:
        'VRF air conditioning design, supply, and installation for office buildings and commercial spaces in Chile. Zoned control, BMS/BACnet integration, per-tenant energy metering, LEED/EDGE documentation support.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/offices/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/offices/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorOfficesPage() {
  return (
    <>
      <Script id="ld-offices-en" type="application/ld+json">
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
            <Link href="/en/sectors/" style={{ color: 'inherit', textDecoration: 'none' }}>Sectors</Link>
            <span>›</span>
            <span>Offices</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Commercial · Class A & B · LEED
          </p>
          <h1 className="sp-hero-title">Office HVAC in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            VRF systems for office buildings and commercial spaces — zoned control, BMS integration,
            per-tenant energy metering, and LEED/EDGE documentation support.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}{s.unidad && <span style={{ fontSize: '14px', marginLeft: 2, opacity: 0.8 }}>{s.unidad}</span>}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Zones & solutions
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Every building space, optimized
          </h2>
          <div className="sp-aplic-grid">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {s.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {s.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
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
            Costs, technology, and certifications
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(13px,1.3vw,15px)', fontWeight: 400, letterSpacing: '.02em', color: 'var(--text)', margin: '0 0 10px' }}>
                  {f.question}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {f.answer}
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
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All Sectors →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Office or commercial building project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Technical quote
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Share the floor plan, total area, building class, and any BMS or certification requirements.
            We will respond with a technical proposal and cost estimate.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Get in Touch</Link>
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
