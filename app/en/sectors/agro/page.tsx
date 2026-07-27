import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Agro-Industry HVAC & Cold Chain in Chile — Packing, Cold Storage & Controlled Atmosphere',

  description:
    'HVAC and refrigeration for agro-industry in Chile: packing facilities (8–14°C), cold storage chambers (−1 to +4°C), controlled atmosphere (O₂/CO₂/N₂), pre-cooling tunnels, food processing plants. GlobalGAP, BRC and SENASA protocol compliance.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/agro/`,
    languages: {
      en: `${siteUrl}/en/sectors/agro/`,
      es: `${siteUrl}/sectores/agroindustria/`,
    },
  },
  openGraph: {
    title: 'Agro-Industry Cold Chain Chile — Packing, Cold Storage, Controlled Atmosphere | D&Z Building',
    description:
      'Industrial refrigeration for Chilean fruit exporters and food processors: packing plants, long-term cold rooms, controlled atmosphere chambers, and pre-cooling systems. Nationwide coverage.',
    url: `${siteUrl}/en/sectors/agro/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Packing Facilities',
    subtitulo: 'T 8–14°C · RH 85–92%',
    desc: 'Temperature-controlled packing rooms for sorting, grading, and packing operations. A mid-scale fruit packing facility (5,000–20,000 m²) requires VRF or direct-expansion systems with humidity control to maintain the cold chain from field intake through palletizing. We design for year-round operation under GlobalGAP (Good Agricultural Practices) and BRC (British Retail Consortium) requirements.',
  },
  {
    titulo: 'Cold Storage Chambers',
    subtitulo: 'T −1 to +4°C · RH 90–95%',
    desc: 'Long-term storage for apple, table grape, kiwi, blueberry, and pear. Low air-velocity evaporators (low ∆T) minimize moisture loss and chilling injury. PUR panels 100–150 mm with hermetic doors. Capacity 500 to 10,000 metric tons. Designed to preserve export quality through the full storage season.',
  },
  {
    titulo: 'Controlled Atmosphere (CA) Storage',
    subtitulo: 'O₂ 1–3% · CO₂ 0–5% · T −1 to +1°C',
    desc: 'CA chambers for maximum post-harvest life extension: apple up to 12 months, pear 8–10 months. The HVAC system maintains temperature ±0.3°C and the chamber airtightness required for CA. Integration with nitrogen generators, gas analyzers, and Storex/Isolcell/ECA controllers.',
  },
  {
    titulo: 'Pre-Cooling Systems',
    subtitulo: 'Forced air tunnels · Hydrocooling',
    desc: 'Rapid pre-cooling systems to reduce product temperature from field temperature (25–35°C) to storage temperature in 2–6 hours. Forced-air pre-cooling tunnels with high-velocity evaporators, remote condensers, and automatic differential temperature control.',
  },
  {
    titulo: 'Food Processing Plants',
    subtitulo: 'HACCP · DS 977 MINSAL · Food safety',
    desc: 'HVAC for food processing under HACCP (Hazard Analysis and Critical Control Points) and DS 977 (MINSAL Food Sanitary Regulations). Cold processing rooms (0–10°C), hot process areas, washing and disinfection zones with integrated drainage, and mechanical rooms with forced ventilation.',
  },
  {
    titulo: 'Agrochemical & Fertilizer Storage',
    subtitulo: 'ATEX ventilation · 10 vol/h minimum',
    desc: 'Forced mechanical ventilation (minimum 10 air changes per hour) for agrochemical warehouses, with temperature control to preserve pesticide shelf life and SAG (Agricultural and Livestock Service)/DS 78 regulatory compliance for pesticide storage.',
  },
]

const STATS = [
  { valor: '±0.3°C', etiqueta: 'CA chamber temperature precision' },
  { valor: '10,000 t', etiqueta: 'Cold storage capacity range' },
  { valor: 'GlobalGAP', etiqueta: 'Export protocol compliance' },
  { valor: "O’Higgins–Atacama", etiqueta: 'Nationwide agro coverage' },
]

const FAQ = [
  {
    question: 'How much does a cold storage chamber cost in Chile?',
    answer:
      "A mid-size cold storage chamber (1,000–3,000 metric tons of apple or pear) costs approximately UF 2,500–8,000 (Unidad de Fomento, Chile's inflation-indexed unit, ≈ USD 33 in 2025; total ≈ USD 82K–264K), depending on design temperature, insulation thickness, refrigeration equipment type (remote condensers vs. packaged units), and automation level. Controlled atmosphere adds 25–40% for airtightness and gas management systems. Contact us for a preliminary estimate with your net storage volume and product.",
  },
  {
    question: 'What regulations apply to cold chain refrigeration in Chile?',
    answer:
      'Cold chain installations in Chile are governed by DS 594 (Sanitary Conditions for Workplaces), DS 977 (MINSAL Food Safety Regulations) for processing plants, and ASHRAE 15 / EN 378 for refrigeration systems. For export markets, additional requirements apply: GlobalGAP and BRC (British Retail Consortium) for EU/UK, SENASA (National Agri-Food Health and Quality Service) protocols for the US market, and EFSA (European Food Safety Authority) food safety standards for European buyers.',
  },
  {
    question: 'Can you design controlled atmosphere (CA) storage rooms?',
    answer:
      'Yes. We design and build CA chambers for apple, pear, kiwi, table grape, and blueberry. Design scope includes the airtight envelope (PUR panels with vapor barrier), the low-∆T refrigeration system, nitrogen generators or VPSA systems, and gas controller integration (Storex, Isolcell, ECA). We also conduct airtightness audits (pressure tests) on existing CA chambers.',
  },
  {
    question: 'Do you work outside Santiago and the Metropolitan Region?',
    answer:
      "Yes — most of our agro-industrial work is in the fruit-growing regions: O'Higgins (Rancagua, San Fernando), Maule (Curicó, Talca), Bío-Bío (Chillán), Coquimbo (Ovalle, La Serena), and Atacama (Copiapó). We have technical teams available for regional work with no extended response delays.",
  },
  {
    question: 'Which refrigerants do you use for Chilean cold rooms?',
    answer:
      'For positive temperature (0 to +12°C), we use R-449A or R-452A (lower-GWP replacements for R-404A). For negative temperature (−25 to −18°C) in blast freezing tunnels, we use R-449A or CO₂ in cascade. We do not install R-404A or R-22 systems in new projects due to their environmental impact and regulatory trajectory. All refrigerants we use comply with the Montreal Protocol and EU F-Gas Regulation 2024.',
  },
  {
    question: 'Do you offer preventive maintenance for agro-industrial refrigeration?',
    answer:
      'Yes. We offer annual (pre-season) and semi-annual preventive maintenance contracts for cold rooms, CA chambers, and pre-cooling systems. Maintenance includes: compressor oil change, expansion valve inspection, pressure switch calibration, condenser cleaning, CA chamber airtightness check, and a technical report for the season. Contract clients get priority scheduling before the harvest season.',
  },
  {
    question: 'How long does it take to build a cold storage chamber?',
    answer:
      'A new mid-size cold room (1,000–3,000 metric tons) takes 8–16 weeks from purchase order to commissioning, assuming civil works are ready. For CA chambers, add 14–20 weeks for the airtightness testing and gas system programming. We recommend initiating the quotation and engineering process at least 4 months before the target commissioning date (i.e., before harvest season).',
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
        { '@type': 'ListItem', position: 3, name: 'Agro-Industry & Cold Chain', item: `${siteUrl}/en/sectors/agro/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/agro/#service`,
      name: 'Agro-Industry HVAC & Cold Chain in Chile',
      description:
        'Industrial refrigeration and HVAC for Chilean fruit exporters and food processors: packing plants, cold storage, controlled atmosphere chambers, pre-cooling tunnels, and food processing facilities.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Agro-Industry Refrigeration and HVAC',
      url: `${siteUrl}/en/sectors/agro/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/agro/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorAgroPage() {
  return (
    <>
      <Script id="ld-agro-en" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link
              href="/en/services/"
              style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
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
            <span>Agro-Industry &amp; Cold Chain</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Packing · Cold Storage · Controlled Atmosphere · Pre-Cooling
          </p>
          <h1 className="sp-hero-title">Agro-Industry HVAC &amp;<br />Cold Chain in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Industrial refrigeration and HVAC for the Chilean fresh produce and food processing industry —
            packing facilities, long-term cold rooms, controlled atmosphere chambers,
            and export-protocol-compliant cold chain systems.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=1#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/sectors/" className="sp-hero-cta sp-hero-cta-outline">All Sectors</Link>
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
            Installation types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Agro-Industry HVAC &amp; Cold Chain Installations
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

        {/* Mid-article CTA band */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                BIM HVAC Engineering
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                Large packing facilities and processing plants require precise coordination between steel structure, insulation panels, refrigeration piping, and production processes.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                We model in Revit MEP (LOD 300) to detect clashes before construction and deliver fabrication drawings to installers — reducing on-site assembly time by up to 30%.
              </p>
            </div>
            <Link href="/en/#contacto" className="sp-hero-cta">
              Ask about BIM →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Costs, regulations and timelines
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
            <Link href="/en/sectors/mining/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mining Sector →
            </Link>
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Working on an agro-industrial cold chain project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Preliminary cost estimate and engineering in 48–72 hours
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us your storage volume, product, and design temperature.
            We will size the system and provide a cost reference at no commitment.
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
            © {new Date().getFullYear()} D&amp;Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
