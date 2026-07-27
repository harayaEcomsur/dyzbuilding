import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Pharmaceutical HVAC in Chile — GMP Cleanrooms',

  description:
    'HVAC systems for GMP cleanrooms, pharma manufacturing, and quality control labs in Chile: ISO 7-8 classification, pressure cascades, IQ/OQ/PQ validation, and ISP certification.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/pharmaceutical/`,
    languages: {
      en: `${siteUrl}/en/sectors/pharmaceutical/`,
      es: `${siteUrl}/sectores/farmaceutica/`,
    },
  },
  openGraph: {
    title: 'GMP Cleanroom HVAC Chile — Pharmaceutical Manufacturing | D&Z Building',
    description:
      'ISO 7-8 cleanroom HVAC for pharmaceutical manufacturing in Chile: ±0.5°C temperature control, pressure cascades, HEPA H14 filtration, and complete IQ/OQ/PQ validation documentation.',
    url: `${siteUrl}/en/sectors/pharmaceutical/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'API Manufacturing Cleanrooms',
    subtitulo: 'ISO 7 (Class 10,000) · Positive pressure · ±0.5°C',
    desc: 'Active pharmaceutical ingredient (API) synthesis requires ISO 7 or ISO 8 cleanrooms with positive pressure relative to corridors, temperature control ±0.5°C, and relative humidity ±5%. D&Z Building designs HVAC systems with precision air handling units, HEPA H14 filtration, and documented pressure cascades for GMP validation.',
  },
  {
    titulo: 'Tableting & Capsule Filling Areas',
    subtitulo: 'Dust control · 40–60% RH · 20 ACH ventilation',
    desc: 'Tablet compressing and capsule filling generate API dust that may be toxic or allergenic. The HVAC system must control dust dispersion through local negative pressure, high ventilation rates (15–20 air changes/hour), and HEPA filters on the return. Relative humidity (40–60% RH) directly affects tablet quality — variations >5% can cause friability or punch adhesion.',
  },
  {
    titulo: 'Coating Rooms',
    subtitulo: 'High process temperature · 60°C · Solvent vapor control',
    desc: 'Film and sugar coating processes involve organic solvents and high process temperatures (50–70°C). HVAC must handle process heat, extract solvent vapors above the LEL, and supply preheated dry air. D&Z Building designs systems with heat recovery and solvent vapor control compliant with NCh 2635 and ATEX standards.',
  },
  {
    titulo: 'Primary & Secondary Packaging Areas',
    subtitulo: 'ISO 8 (Class 100,000) · Particle-free environment',
    desc: 'Primary packaging (direct product contact: blisters, ampoules, vials) requires a minimum of ISO 8 with temperature and humidity control to preserve container integrity. Secondary packaging (cartons, labels) has less stringent requirements but still requires controlled environment for label printing quality and carton sealing.',
  },
  {
    titulo: 'Quality Control Laboratories',
    subtitulo: 'ICH stability chambers · 25°C/60% RH · 40°C/75% RH',
    desc: 'ICH stability chambers (Q1A conditions: 25°C/60% RH long-term, 40°C/75% RH accelerated) are a regulatory requirement for drug registration in Chile. D&Z Building installs walk-in stability chambers with ±0.5°C temperature and ±3% RH humidity control, 24/7 monitoring, and alarms compliant with ICH guidelines Q1A, Q1B, and Q1D.',
  },
  {
    titulo: 'IQ/OQ/PQ Documentation & ISP Validation',
    subtitulo: 'Qualification protocols · GMP records',
    desc: 'HVAC system validation (IQ: installation qualification; OQ: operational qualification; PQ: performance qualification) is mandatory for ISP licensing. D&Z Building delivers complete validation protocols: as-built drawings, sensor calibration certificates, smoke studies for airflow visualization, particle counts, and documented pressure differentials compliant with ISPE HVAC guidelines.',
  },
]

const STATS = [
  { valor: 'ISO 7-8', etiqueta: 'GMP cleanroom classification' },
  { valor: '±0.5°C', etiqueta: 'Precision temperature control' },
  { valor: 'IQ/OQ/PQ', etiqueta: 'ISP validation documentation' },
  { valor: 'HEPA H14', etiqueta: 'Filtration efficiency' },
]

const FAQ = [
  {
    question: 'What cleanroom classification does a pharmaceutical lab in Chile require?',
    answer: 'WHO GMP guidelines (TRS 961) and ISP requirements establish classifications by process type: Zone A (ISO 5, Class 100) for aseptic filling of injectables; Zone B (ISO 7, Class 10,000) for aseptic manufacturing background; Zone C (ISO 8, Class 100,000) for less critical stages of aseptic manufacturing; Zone D (controlled air) for material preparation. Most solid-dose laboratories in Chile operate in Zones C and D. D&Z Building advises on classification based on the process and delivers the validation protocol.',
  },
  {
    question: 'How much does an ISO 8 cleanroom cost in Chile?',
    answer: 'A 100 m² ISO 8 (Class 100,000) cleanroom has a total cost (construction, HVAC, validation) of UF 1,500–4,000 (≈ USD 49,500–132,000) depending on wall materials, temperature and humidity control precision, and required validation documentation. The HVAC system represents 40–55% of total cost. For ISO 7 (Class 10,000) rooms, costs rise to UF 3,000–8,000 due to higher ventilation rates and more demanding HEPA filtration.',
  },
  {
    question: 'What is the difference between positive and negative pressure in a pharmaceutical room?',
    answer: 'Positive pressure (room at higher pressure than the corridor) is used in standard manufacturing zones to prevent external contaminants from entering the product area. Negative pressure (room at lower pressure than the corridor) is used for highly potent APIs, toxic compounds, or allergens, to contain particles within the process zone and protect personnel and other areas. The minimum pressure differential recommended by GMP is 12.5 Pa. D&Z Building designs pressure cascades that maintain the differential under all operating conditions, including door openings.',
  },
  {
    question: 'How often must a pharmaceutical cleanroom be recertified in Chile?',
    answer: 'ISO 14644-2 recommends annual recertification for ISO 7-8 rooms (particle count, HEPA filter integrity test). ISP requires recertification whenever there are changes to the HVAC system, room modifications, or when PQ is part of a registration dossier. Continuous monitoring (temperature, humidity, pressure differential) must be performed with annually calibrated sensors. D&Z Building offers maintenance and annual recertification contracts with ISP-ready reports.',
  },
  {
    question: 'What is IQ/OQ/PQ validation of a pharmaceutical HVAC system?',
    answer: 'IQ (Installation Qualification) verifies the system was installed according to design drawings and specifications: equipment, materials, connections, and initial calibration. OQ (Operational Qualification) verifies the system operates within specified parameters under empty and loaded conditions: temperature, humidity, airflow, pressure differential, and particle counts. PQ (Performance Qualification) verifies the system reproducibly maintains parameters during the actual manufacturing process. D&Z Building prepares all three protocols with reference to ISPE HVAC guidelines and ISP requirements.',
  },
  {
    question: 'Can D&Z Building work with laboratories that already have an existing cleanroom?',
    answer: 'Yes. D&Z Building performs technical audits of existing HVAC systems: as-built drawing review, airflow and pressure measurements, HEPA filter integrity tests, temperature and humidity mapping. If the system needs upgrading to meet current ISP requirements (e.g., due to updated GMP guidelines or a new process), D&Z Building prepares the improvement plan and delivers re-validation documentation.',
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
        { '@type': 'ListItem', position: 3, name: 'Pharmaceutical', item: `${siteUrl}/en/sectors/pharmaceutical/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/pharmaceutical/#service`,
      name: 'Pharmaceutical HVAC in Chile — GMP Cleanrooms',
      description:
        'HVAC design, supply, and installation for pharmaceutical manufacturing in Chile: GMP cleanrooms, pressure cascades, HEPA H14 filtration, and complete IQ/OQ/PQ validation documentation for ISP licensing.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/pharmaceutical/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/pharmaceutical/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorPharmaceuticalPage() {
  return (
    <>
      <Script id="ld-pharmaceutical-en" type="application/ld+json">
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
            <span>Pharmaceutical</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Pharmaceutical
          </p>
          <h1 className="sp-hero-title">Pharmaceutical HVAC<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            GMP cleanrooms, pressure cascades, HEPA H14 filtration, and complete IQ/OQ/PQ validation
            documentation for ISP licensing — ISO 7 and ISO 8 classification.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Solutions
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Pharmaceutical HVAC Solutions
          </h2>
          <div className="sp-aplic-grid">
            {SOLUTIONS.map((sol, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {sol.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {sol.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {sol.desc}
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
            Cleanrooms, GMP, and ISP validation
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
            Related guides &amp; services
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/guide/what-is-a-vrf-system/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              What is a VRF System? →
            </Link>
            <Link href="/en/services/preventive-maintenance/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Preventive Maintenance →
            </Link>
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Planning a pharmaceutical facility in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We design GMP cleanroom HVAC and deliver complete IQ/OQ/PQ documentation
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the room classification, process type, and ISP requirements.
            We will respond with a technical proposal.
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
