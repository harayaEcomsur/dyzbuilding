import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Shopping Centers & Retail in Chile',

  description:
    'Climate control for malls, strip centers, food courts, anchor stores, and retail spaces in Chile. VRF sub-metering, NFPA 96 food court extraction, and BMS energy optimization.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/shopping-centers/`,
    languages: {
      en: `${siteUrl}/en/sectors/shopping-centers/`,
      es: `${siteUrl}/sectores/centros-comerciales/`,
    },
  },
  openGraph: {
    title: 'Shopping Center & Retail HVAC Chile — VRF & Chiller Systems | D&Z Building',
    description:
      'Anchor store chillers, food court NFPA 96 extraction, VRF per-tenant sub-metering, and BMS automation to cut HVAC energy costs by 15–25% in Chilean shopping centers.',
    url: `${siteUrl}/en/sectors/shopping-centers/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Anchor Stores & Large-Format Retail',
    subtitulo: 'Chiller · VRF · High occupancy density',
    desc: "Anchor stores (supermarkets, department stores, home improvement) face large cooling loads from high occupancy density, high-power LED lighting, and display equipment. D&Z Building designs centrifugal or screw chiller systems with AHUs for large-format spaces (>2,000 m²), or VRF heat recovery systems for mid-size tenants, optimizing life-cycle cost based on each tenant's load profile.",
  },
  {
    titulo: 'Food Courts',
    subtitulo: 'NFPA 96 · Make-up air · Positive pressure at seating',
    desc: 'A mall food court has the same technical requirements as a high-traffic corporate cafeteria, with the added complexity of multiple tenants with different cooking types. D&Z Building designs the centralized extraction system to NFPA 96, with per-tenant hoods or a centralized plenum exhaust, conditioned make-up air for the seating area, and positive pressure in seating relative to kitchens. Design accounts for full simultaneous occupancy of all kitchens at peak hour.',
  },
  {
    titulo: 'Common Areas & Mall Corridors',
    subtitulo: 'AHU · Uniform distribution · CO₂ control',
    desc: 'Mall corridors and common areas must maintain uniform temperature despite variable occupancy loads (0–5 people/m² depending on time of day). D&Z Building designs AHUs with variable airflow controlled by CO₂ and temperature sensors, ensuring comfort during peak hours (weekends, 5–9pm) without overconsumption during low-traffic periods. Diffusers are selected for uniform air distribution without perceptible drafts at pedestrian level.',
  },
  {
    titulo: 'Mid-Size Retail Units (100–500 m²)',
    subtitulo: 'VRF · Per-tenant energy metering · Tenant billing',
    desc: "Mid-size retail units (fashion, footwear, electronics) are the core revenue driver of strip centers and small malls. D&Z Building designs VRF multi-zone systems with per-indoor-unit electrical metering and independent control per tenant. This lets property owners bill HVAC energy costs based on each tenant's actual consumption rather than a flat pro-rata, incentivizing efficient use and reducing tenant disputes.",
  },
  {
    titulo: 'Cinema & Entertainment Venues',
    subtitulo: 'High density · Darkness · Humidity control',
    desc: 'Cinema auditoriums present the most challenging combination: high occupancy (up to 8 people/m² of seating), no natural light, and high heat dissipation from projection equipment. D&Z Building designs displacement ventilation systems for cinemas, supplying fresh air at floor level and extracting warm air and CO₂ from the ceiling, achieving higher efficiency than conventional mixing systems.',
  },
  {
    titulo: 'BMS Automation & Energy Management',
    subtitulo: 'SCADA · Peak-shifting · Time-of-use tariffs',
    desc: "HVAC energy consumption represents 40–60% of a mall's operating costs. D&Z Building integrates all systems (chillers, VRF, AHUs, exhaust) into a central BMS with SCADA that optimizes setpoints based on occupancy, time-of-use electricity prices (peak/off-peak tariffs), and outdoor temperature forecasts. Pre-cooling algorithms — lowering setpoints before the electricity peak window — can cut the utility bill by 15–25%.",
  },
]

const STATS = [
  { valor: '40–60%', etiqueta: 'Share of mall operating costs attributable to HVAC' },
  { valor: 'NFPA 96', etiqueta: 'Food court ventilation standard' },
  { valor: '15–25%', etiqueta: 'Savings achievable with pre-cooling & time-of-use tariffs' },
  { valor: 'VRF', etiqueta: 'Technology enabling per-tenant metering & billing' },
]

const FAQ = [
  {
    q: 'Which HVAC technology is most efficient for a strip center in Chile?',
    a: 'For a strip center of 3,000–8,000 m² with mid-size tenants (100–300 m² each), a multi-zone VRF heat recovery system is the best fit: independent control per tenant, per-tenant energy metering, and heat recovery from high-load tenants (stores with heavy lighting) to tenants requiring heating (winter morning startup). For large-format malls (>20,000 m²), high-efficiency chiller systems with variable-airflow AHUs may be more cost-effective over the life cycle.',
  },
  {
    q: 'How is HVAC energy consumption measured per tenant for billing?',
    a: 'Two methods are available: (1) Direct metering with electrical analyzers on each VRF indoor unit or fan-coil panel (most accurate, UF 3–8 per tenant in hardware plus installation); (2) Proportional calculation based on equipment runtime and capacity (less precise, but acceptable for leases with flat-rate HVAC billing). D&Z Building designs the metering system at the project stage and provides reading protocols for mall management.',
  },
  {
    q: 'Is a BMS required by law in shopping centers in Chile?',
    a: 'There is no Chilean regulation mandating BMS in shopping centers. However, the General Urban Planning and Construction Ordinance requires automatic climate control systems in public-use buildings exceeding 5,000 m². For shopping centers seeking the Chilean Building Energy Rating (CEE), the degree of HVAC automation is one of the factors evaluated. D&Z Building recommends BMS for any retail facility above 3,000 m² based on documented ROI within the first operating season.',
  },
  {
    q: 'How much does HVAC cost for a 5,000 m² strip center?',
    a: 'For a 5,000 m² strip center (10–15 units of 150–300 m² each, central corridor, services), the complete HVAC system (multi-zone VRF with heat recovery, per-tenant metering, automated control, service area exhaust) costs UF 600–1,200 (≈ USD 20,000–40,000) in equipment and installation. The per-m² cost (UF 0.12–0.24/m²) varies with ceiling height, duct distribution complexity, and number of control zones. D&Z Building provides a quote including basic engineering.',
  },
  {
    q: 'What happens when a tenant changes business type and increases its HVAC load?',
    a: "A tenant switching from retail to food service can increase its HVAC load 3–5 times. The lease agreement should specify the HVAC capacity allocated to each tenant (kW of cooling). D&Z Building evaluates whether the installed VRF or chiller system has the headroom to absorb the new tenant's load, and designs the necessary expansion when reserve capacity is unavailable. This analysis prevents costly emergency interventions after the new tenant opens.",
  },
  {
    q: 'How is HVAC equipment noise managed in retail stores and corridors?',
    a: 'The target noise level in mall corridors is NC-40 (conversation possible without effort), and in retail stores NC-35. VRF condensing units or chiller cooling towers are located on rooftops or plant rooms with acoustic insulation and vibration dampeners. D&Z Building performs acoustic calculations as part of engineering, selecting low-noise fans and designing silencer boxes on AHU supply when background noise is critical (luxury stores, cinemas).',
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
        { '@type': 'ListItem', position: 3, name: 'Shopping Centers', item: `${siteUrl}/en/sectors/shopping-centers/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/shopping-centers/#service`,
      name: 'HVAC for Shopping Centers & Retail in Chile',
      description:
        'HVAC design, supply, and installation for Chilean shopping centers and retail: anchor store chillers, food court NFPA 96 extraction, VRF per-tenant sub-metering, and BMS automation.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/shopping-centers/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/shopping-centers/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorShoppingCentersPage() {
  return (
    <>
      <Script id="ld-shopping-centers-en" type="application/ld+json">
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
            <span>Shopping Centers</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Commercial · Retail · Mall
          </p>
          <h1 className="sp-hero-title">HVAC for Shopping Centers<br />&amp; Retail in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            VRF per-tenant sub-metering, NFPA 96 food court extraction, anchor store chillers,
            and BMS automation to cut HVAC energy costs by 15–25%.
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
            Installation types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Shopping Center HVAC Solutions
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
            Technology, costs and tenant management
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
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Planning a shopping center or retail HVAC project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We design per-tenant metering, BMS automation, and NFPA 96 food court systems
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the total area, number of tenants, and whether you need food court extraction.
            We will respond with a technical and cost proposal.
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
