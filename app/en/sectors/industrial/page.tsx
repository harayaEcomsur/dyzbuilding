import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Industrial Plants HVAC in Chile — Manufacturing, Pharma & Logistics',

  description:
    'HVAC and ventilation for industrial plants in Chile: pharmaceutical manufacturing (GMP), logistics warehouses, chemical process plants, and ATEX zones. DS 594 compliance, cleanroom design and ISP qualification support.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/industrial/`,
    languages: {
      en: `${siteUrl}/en/sectors/industrial/`,
      es: `${siteUrl}/sectores/plantas-industriales/`,
    },
  },
  openGraph: {
    title: 'Industrial HVAC Chile — Manufacturing, GMP Cleanrooms, ATEX | D&Z Building',
    description:
      'Industrial HVAC for Chilean manufacturing plants: GMP cleanrooms (ISO 7–8), ATEX ventilation, logistics warehouse DS 594 compliance, process control rooms.',
    url: `${siteUrl}/en/sectors/industrial/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Production & Manufacturing Areas',
    subtitulo: 'DS 594 · ASHRAE 62.1 · Process temperature control',
    desc: 'HVAC for production lines with temperature and humidity requirements: electronics manufacturing (21–23°C, 40–50% RH), food packaging (10–14°C), plastics and paint production (temperature-controlled for viscosity). Thermal load calculations include machinery and industrial lighting heat generation.',
  },
  {
    titulo: 'Pharmaceutical Cleanrooms (GMP)',
    subtitulo: 'ISO 8 / Grade C–D · EU GMP Annex 1',
    desc: 'Pharmaceutical manufacturing areas under Good Manufacturing Practices (GMP). ISO 7–8 classification (Grade C–D): 20–30 air changes per hour, HEPA H14 at terminal filters, positive pressure differentials between clean and service areas. HVAC qualification documentation (DQ, IQ, OQ, PQ) for ISP authorization.',
  },
  {
    titulo: 'Warehouses & Distribution Centers',
    subtitulo: 'Mechanical ventilation · DS 594 · Operator comfort',
    desc: 'Mechanical ventilation for logistics warehouses and distribution centers: temperature control for operators (DS 594), heat extraction from material-handling equipment (electric forklifts), and loading dock ventilation to prevent CO accumulation from internal combustion vehicles.',
  },
  {
    titulo: 'Chemical & Paint Process Plants',
    subtitulo: 'ATEX · DS 78 · Emergency ventilation',
    desc: 'Explosion-proof (ATEX) ventilation for plants with solvents, paints, agrochemicals, and flammable gases. Gas detection systems with automatic emergency fan activation. Localized extraction in paint spray booths and mixing zones. Compliance with DS 78 (MINSAL) and SAG for pesticide storage.',
  },
  {
    titulo: 'Technical Areas & Control Rooms',
    subtitulo: 'N+1 redundancy · 20–24°C · G4–F7 filtration',
    desc: 'HVAC for process control rooms, industrial server rooms (SCADA, DCS), quality control laboratories, and instrumentation areas. N+1 redundancy in the conditioning unit, G4–F7 filtration for dusty industrial environments, and integrated UPS in the HVAC control panels.',
  },
  {
    titulo: 'Operator Comfort in High Heat-Load Environments',
    subtitulo: 'Evaporative cooling · ASHRAE 55 · DS 594',
    desc: 'For operators near heat sources (furnaces, compressors, welding lines), installation of adiabatic evaporative coolers or localized spot cooling systems with flexible air distribution tubing. DS 594 sets a maximum of 32°C WBGT for moderate-intensity work.',
  },
]

const STATS = [
  { valor: 'ISO 7–8', etiqueta: 'GMP pharmaceutical cleanrooms' },
  { valor: 'ATEX', etiqueta: 'Explosion-proof zones' },
  { valor: 'DS 594', etiqueta: 'Chilean workplace health regulations' },
  { valor: '32°C WBGT', etiqueta: 'DS 594 limit for moderate work' },
]

const FAQ = [
  {
    question: 'What temperature does a Chilean industrial plant require under DS 594?',
    answer: 'DS 594 (Sanitary Conditions for Workplaces) establishes that for moderate physical work, the effective temperature must not exceed 26.5°C (without radiant load) and the WBGT index must not exceed 32°C. For sedentary work, temperature must be between 18°C and 24°C. In areas with intense heat sources (furnaces, boilers, welding lines), engineering controls (insulation, localized cooling) must be implemented to protect workers.',
  },
  {
    question: 'What is a GMP cleanroom and how is it classified in Chile?',
    answer: "A GMP cleanroom is a pharmaceutical manufacturing area with controlled particles, temperature, humidity, and differential pressure. The most commonly used classification in Chile follows EU GMP Annex 1: Grade A (ISO 5, aseptic filling zone), Grade B (ISO 7, environment surrounding Grade A), Grade C (ISO 8, less critical processing stages), Grade D (preparation areas). The ISP (Instituto de Salud Pública) requires HVAC qualification (DQ, IQ, OQ, PQ) as part of the plant's sanitary authorization.",
  },
  {
    question: 'What is the difference between industrial ventilation and air conditioning in a plant?',
    answer: 'Industrial ventilation primarily controls airborne contaminants (gases, vapors, dust, heat) and fresh air renewal for DS 594 compliance — but does not precisely control temperature. HVAC (air conditioning) simultaneously controls temperature, humidity, and air quality. Industrial plants typically need both: ventilation for process areas and precision HVAC for control rooms, laboratories, and temperature-sensitive production areas.',
  },
  {
    question: 'What is an ATEX zone in an industrial plant?',
    answer: 'An ATEX zone is an area where an explosive mixture of gases, vapors, or dust with air can form. Zone classification (Zone 0/1/2 for gases/vapors, Zone 20/21/22 for dust) determines which equipment is permitted. In ATEX zones, all electrical equipment — including fans, extraction motors, switches, and control panels — must hold EX certification per ATEX Directive 2014/34/EU or the IECEx standard. Installing standard equipment in an ATEX zone creates legal liability in case of an incident.',
  },
  {
    question: 'How much does HVAC for an industrial plant or warehouse cost in Chile?',
    answer: 'A logistics warehouse with basic mechanical ventilation (extraction + supply for DS 594) of 2,000–5,000 m² costs approximately UF 150–600 (≈ USD 5K–20K). A manufacturing plant with technical area conditioning and control room HVAC (20–24°C, G4–F7 filtration) of 500–2,000 m² costs UF 400–2,000. A GMP cleanroom Grade C–D of 200–500 m² costs UF 1,500–6,000 including the qualifiable HVAC system. UF (Unidad de Fomento, Chile\'s inflation-indexed unit, ≈ USD 33 in 2025).',
  },
  {
    question: 'Can you provide HVAC qualification documentation (DQ, IQ, OQ, PQ) for ISP approval?',
    answer: 'Yes. For pharmaceutical cleanrooms in Chile, the ISP requires HVAC system qualification as part of the sanitary authorization. We design and build the cleanroom HVAC to the agreed process parameters and prepare the Design Qualification (DQ) and Installation Qualification (IQ) documentation. Operational Qualification (OQ) and Performance Qualification (PQ) are conducted with the system in operation and require particle count, airflow, and differential pressure measurements. We recommend coordinating this with a pharmaceutical validation firm.',
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
        { '@type': 'ListItem', position: 3, name: 'Industrial Plants', item: `${siteUrl}/en/sectors/industrial/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/industrial/#service`,
      name: 'Industrial Plants HVAC in Chile — Manufacturing, Pharma & Logistics',
      description:
        'HVAC and ventilation for industrial plants in Chile: pharmaceutical manufacturing (GMP), logistics warehouses, chemical process plants, and ATEX zones. DS 594 compliance, cleanroom design and ISP qualification support.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Industrial HVAC and Ventilation',
      url: `${siteUrl}/en/sectors/industrial/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/industrial/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorIndustrialPage() {
  return (
    <>
      <Script id="ld-industrial-en" type="application/ld+json">
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
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/en/sectors/" style={{ color: 'inherit', textDecoration: 'none' }}>Sectors</Link>
            <span>›</span>
            <span>Industrial Plants</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Manufacturing · Pharma GMP · Logistics · Chemical Processing
          </p>
          <h1 className="sp-hero-title">Industrial Plants HVAC<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            HVAC and ventilation for Chilean manufacturing plants — pharmaceutical
            cleanrooms (GMP), ATEX process zones, logistics warehouses, and
            industrial control rooms. DS 594, GMP Annex 1, and ISP qualification support.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/sectors/" className="sp-hero-cta sp-hero-cta-outline">All Sectors</Link>
          </div>
        </header>

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
            Installation types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Industrial HVAC Solutions
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
            GMP cleanrooms, ATEX zones, and DS 594
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
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Planning an industrial HVAC project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We design GMP cleanrooms, ATEX ventilation, and DS 594-compliant systems — in English
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the facility type, production process, required temperature range, and any regulatory constraints.
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
