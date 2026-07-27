import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Warehousing & Logistics in Chile',

  description:
    'Temperature-controlled HVAC solutions for pharmaceutical warehouses (GDP), cold chain facilities, distribution centers, and chemical storage in Chile. DS 594 compliance for warehouse workers.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/warehousing/`,
    languages: {
      en: `${siteUrl}/en/sectors/warehousing/`,
      es: `${siteUrl}/sectores/bodegas-logistica/`,
    },
  },
  openGraph: {
    title: 'Warehouse HVAC Chile — GDP Cold Chain & DS 594 | D&Z Building',
    description:
      'Pharmaceutical GDP warehouses, cold rooms, food storage, and fulfillment center HVAC in Chile. 24/7 monitoring, ISP-auditable records, and DS 594 worker comfort compliance.',
    url: `${siteUrl}/en/sectors/warehousing/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Pharmaceutical Warehouses — GDP Compliance',
    subtitulo: '15°C–25°C controlled · 24/7 monitoring',
    desc: "Good Distribution Practice (GDP) warehouses require controlled temperature, continuous monitoring with alarms, and auditable records. D&Z Building installs systems with IoT sensors and automated reports compatible with ISP (Chile's Public Health Institute) audits and FDA requirements for importers.",
  },
  {
    titulo: 'Cold Rooms & Cold Chain',
    subtitulo: '2°C–8°C · -18°C to -25°C · DS 109',
    desc: 'Refrigeration chambers for uninterrupted cold chain: pharmaceuticals, frozen food, flowers, and lab reagents. N+1 redundancy design to prevent product loss from equipment failure. DS 594 compliance for personnel working in cold environments.',
  },
  {
    titulo: 'Food & Agro-Industrial Warehouses',
    subtitulo: 'HACCP · Temperature-controlled ambient',
    desc: 'Dry food storage (grains, canned goods, oils) requires temperature and humidity control to prevent condensation and mold. D&Z Building designs systems that meet SAG (Chilean Agricultural Service) and SEREMI de Salud requirements for the food industry.',
  },
  {
    titulo: 'E-commerce Fulfillment Centers',
    subtitulo: 'Operator comfort · 24/7 shifts · DS 594',
    desc: 'Large fulfillment centers with three-shift operations require robust HVAC that guarantees DS 594 compliance at all hours. VRF systems and industrial air handling units allow zoning by area (sorter, packing, dispatch) with independent temperature control.',
  },
  {
    titulo: 'Chemical & ATEX-Classified Warehouses',
    subtitulo: 'Forced ventilation · ATEX classification',
    desc: 'Warehouses storing solvents, paints, gases, or flammables require forced ventilation to keep vapor concentrations below the LEL (Lower Explosive Limit). ATEX classification determines the permitted equipment type. D&Z Building designs explosion-proof systems compliant with NCh 2635 and NFPA 30.',
  },
  {
    titulo: 'Electronics & Industrial Parts Storage',
    subtitulo: '18°C–22°C · 40–60% RH · Condensation-free',
    desc: 'Electronic components, precision equipment, and industrial spare parts are sensitive to temperature and humidity. Condensation from thermal cycling damages circuit boards. D&Z Building designs systems with precise humidity and temperature control to protect high-value inventory.',
  },
]

const FAQ = [
  {
    q: 'What is the difference between a GDP pharmaceutical warehouse and a standard warehouse?',
    a: "A GDP (Good Distribution Practice) warehouse must maintain temperature within the ranges specified in the product's technical data sheet (typically 15°C–25°C or 2°C–8°C), with continuous temperature monitoring, automatic alarms on deviation, and auditable records for the health authority (ISP in Chile). A standard warehouse only needs to comply with DS 594 for worker comfort. A pharmaceutical warehouse requires equipment redundancy, certified sensor calibration, and documented contingency plans for equipment failure.",
  },
  {
    q: 'What temperature must a Chilean warehouse maintain under DS 594?',
    a: 'DS 594 establishes that in warehouses and workspaces, dry-bulb temperature cannot be lower than 10°C during working hours. For hot environments, WBGT (Wet Bulb Globe Temperature) cannot exceed 27°C for moderate work. This means an unventilated warehouse in northern Chile (Antofagasta, Iquique) during summer can be out of compliance. D&Z Building performs thermal diagnostics to determine whether a facility meets the regulation.',
  },
  {
    q: 'How do you air-condition a warehouse with a metal roof and no insulation?',
    a: "Metal-roof warehouses without insulation face very high heat loads in summer. The optimal solution combines: (1) thermal insulation on the roof (EPS or glass wool under the metal sheeting), (2) natural-assist ventilation with turbine extractors or industrial ridge extractors, and (3) HVAC for specific work zones using industrial or evaporative units if humidity permits. Insulation cost is typically recovered within 1–2 years by reducing the HVAC equipment's load by 40–60%.",
  },
  {
    q: 'How much does it cost to air-condition a 1,000 m² warehouse in Chile?',
    a: 'It depends on the type of conditioning. For worker comfort (DS 594) in a 1,000 m² warehouse with 5 m clear height, the typical range is UF 300–600 (≈ USD 9,900–19,800) for equipment and installation. For pharmaceutical GDP temperature control (15°C–25°C with monitoring), the range rises to UF 500–1,200 (≈ USD 16,500–39,600) depending on existing insulation. For a refrigerated cold room (2°C–8°C) of 1,000 m³, costs can exceed UF 2,000 (≈ USD 66,000). D&Z Building provides engineering proposals with itemized budgets at no cost.',
  },
  {
    q: 'Can evaporative cooling be used in a Chilean warehouse?',
    a: 'Santiago averages 55–65% relative humidity in summer, which limits evaporative cooling effectiveness (it works well below 40% RH). However, Santiago afternoons in summer can drop to 30–40% RH, making evaporative portable units or ducted evaporative systems viable as a conventional system supplement. In northern Chile (Atacama, Antofagasta), low humidity makes evaporative systems very effective and low-cost to operate.',
  },
  {
    q: 'What certifications does a pharmaceutical warehouse need in Chile?',
    a: 'Pharmaceutical distribution warehouses in Chile must be authorized by the ISP (Instituto de Salud Pública) under Chilean GDP standards. ISP requires: a warehouse floor plan with temperature-differentiated zones, HVAC equipment with calibration certificates, a monitoring system with continuous 24/7 temperature records for at least 3 months before the audit, and written temperature deviation contingency procedures. D&Z Building delivers the full HVAC technical documentation compatible with ISP audit requirements.',
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
        { '@type': 'ListItem', position: 3, name: 'Warehousing & Logistics', item: `${siteUrl}/en/sectors/warehousing/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/warehousing/#service`,
      name: 'HVAC for Warehousing & Logistics in Chile',
      description:
        'HVAC design, supply, and installation for Chilean warehouses and logistics facilities: pharmaceutical GDP compliance, cold chain, food storage, fulfillment centers, and chemical warehouses. DS 594 worker comfort compliance.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/warehousing/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/warehousing/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorWarehousingPage() {
  return (
    <>
      <Script id="ld-warehousing-en" type="application/ld+json">
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
            <span>Warehousing &amp; Logistics</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Logistics
          </p>
          <h1 className="sp-hero-title">HVAC for Warehousing<br />&amp; Logistics in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Temperature-controlled solutions for pharmaceutical GDP warehouses, cold chain facilities,
            fulfillment centers, and chemical storage — with DS 594 worker comfort compliance.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {[
            { val: 'GDP', label: 'Pharmaceutical distribution standard', sub: 'ISP-auditable records and monitoring' },
            { val: '2°C–25°C', label: 'Pharmaceutical cold chain range', sub: 'From cold rooms to ambient GDP zones' },
            { val: 'DS 594', label: 'Worker comfort in cold environments', sub: 'Compliance for all shift schedules' },
            { val: '24/7', label: 'IoT monitoring with alarms', sub: 'Automated deviation alerts' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Solution types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Warehouse &amp; Logistics HVAC Solutions
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
            GDP compliance, DS 594 and cold chain
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
            <Link href="/en/guide/what-is-a-vrf-system/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
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
            Need HVAC for a warehouse or logistics facility in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We prepare engineering proposals with itemized budgets — at no cost
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us your facility type, floor area, regulatory requirements, and location.
            We will respond within 48–72 hours with a technical proposal.
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
