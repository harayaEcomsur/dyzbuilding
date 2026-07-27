import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Commercial HVAC Cost in Chile — Price Guide 2025',

  description:
    'Real HVAC prices in Chile for offices, data centers, hotels, retail, and industrial plants. VRF systems, commercial refrigeration, ventilation: cost ranges in UF and CLP for 2025.',
  alternates: {
    canonical: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
    languages: {
      en: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
      es: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
    },
  },
  openGraph: {
    title: 'Commercial HVAC Costs Chile 2025 — Real Price Ranges | D&Z Building',
    description:
      'HVAC price guide for Chile: VRF offices UF 350–600/floor, data center CRAC UF 400–30K, hotels UF 1.8K–4K/50 rooms. All system types covered.',
    url: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const SYSTEMS = [
  {
    system: 'VRF / VRV Multi-Split',
    use: 'Offices, hotels, clinics, retail 300–5,000 m²',
    range_uf: 'UF 250 – 3,000',
    range_clp: '~USD 8K – 100K',
    note: 'Best energy efficiency (COP 3.5–5.0). Most common system for commercial spaces in Chile.',
  },
  {
    system: 'Conventional Multi-Split',
    use: 'Small offices, retail under 300 m²',
    range_uf: 'UF 60 – 250',
    range_clp: '~USD 2K – 8K',
    note: 'Lower upfront cost for small projects. Less efficient than VRF at partial loads.',
  },
  {
    system: 'Chiller + Fan-Coil (chilled water)',
    use: 'Buildings >2,000 m², multi-tenant',
    range_uf: 'UF 2,000 – 30,000+',
    range_clp: 'Major project',
    note: 'Longer equipment life (25–30 years). Requires dedicated mechanical room.',
  },
  {
    system: 'Commercial Refrigeration (cases + cold rooms)',
    use: 'Supermarkets, restaurants, pharmacies',
    range_uf: 'UF 200 – 8,000',
    range_clp: '~USD 6.5K – 260K',
    note: 'Includes compressor rack, display cases, and cold room panels.',
  },
  {
    system: 'Industrial Ventilation / AHU',
    use: 'Plants, parking, kitchens, cleanrooms',
    range_uf: 'UF 150 – 5,000',
    range_clp: '~USD 5K – 165K',
    note: 'Includes AHU units, ductwork, diffusers, VFDs, and automatic controls.',
  },
  {
    system: 'Healthcare HVAC (OR, ICU, cleanrooms)',
    use: 'Hospitals, clinics, clinical laboratories',
    range_uf: 'UF 1,500 – 20,000',
    range_clp: 'Major project',
    note: 'Highest technical complexity. Includes HEPA filtration, differential pressure control, and certification.',
  },
]

const PROJECTS = [
  {
    type: 'Small office / Retail (up to 200 m²)',
    system: 'Multi-split or entry-level VRF',
    range: 'UF 60 – 200',
    timeline: '1–2 weeks',
  },
  {
    type: 'Corporate office floor (300–1,000 m²)',
    system: 'Multi-zone VRF',
    range: 'UF 350 – 1,200',
    timeline: '3–6 weeks',
  },
  {
    type: 'Retail / Supermarket (500–2,000 m²)',
    system: 'VRF + Commercial refrigeration',
    range: 'UF 400 – 4,000',
    timeline: '4–10 weeks',
  },
  {
    type: 'Hotel (50–200 rooms)',
    system: 'VRF + AHU for common areas',
    range: 'UF 2,000 – 20,000',
    timeline: '16–24 weeks',
  },
  {
    type: 'Data center / Server room',
    system: 'Precision CRAC + Free cooling',
    range: 'UF 400 – 30,000',
    timeline: '4–16 weeks',
  },
  {
    type: 'Industrial plant / Warehouse (1,000–5,000 m²)',
    system: 'Industrial ventilation + technical area HVAC',
    range: 'UF 500 – 8,000',
    timeline: '6–12 weeks',
  },
]

const FAQ = [
  {
    question: 'What is typically included in a commercial HVAC installation quote in Chile?',
    answer:
      'A standard quote includes: equipment (indoor and outdoor units), refrigerant piping or ductwork, control cabling, commissioning, and a 12-month labor warranty plus manufacturer warranty on equipment (typically 5 years on main components). It does not include major civil works (concrete penetrations, suspended ceiling installation), municipal permits where applicable, or medium-voltage electrical installation. Turnkey projects can include all of these — request a full-scope quote.',
  },
  {
    question: 'What factors most affect HVAC cost in Chile?',
    answer:
      'The primary driver is the thermal load (kW of cooling required), which depends on floor area, building orientation, glazing type and area, occupancy density, and internal heat loads (computers, lighting, cooking equipment). Secondary drivers include: floor-to-ceiling height (affects duct sizing), distance from the mechanical room to the occupied space, installation access restrictions (occupied buildings require night or weekend work, which costs more), and equipment brand tier. A properly sized system costs less to operate over its lifetime than an oversized one.',
  },
  {
    question: 'How much is annual HVAC maintenance in Chile?',
    answer:
      'For a VRF system with 6–10 indoor units: approximately UF 15–40 per year under a semi-annual maintenance contract. For larger systems (20+ units or chiller plant): UF 60–200 per year on a quarterly plan. Preventive maintenance reduces energy consumption 10–20% and extends equipment life. Without maintenance, equipment loses efficiency progressively — corrective repairs typically cost 3–5× more than the annual maintenance contract.',
  },
  {
    question: 'How much energy does commercial HVAC consume in Chile?',
    answer:
      "In a well-designed Santiago office with VRF, HVAC typically represents 30–40% of total electricity consumption. At Chile's commercial electricity rate (BT-1 tariff, > $170 CLP/kWh ≈ USD 0.18/kWh for 2025), a 1,000 m² office floor may spend CLP 600K–900K/month (≈ USD 650–1,000) on HVAC. Upgrading from conventional splits to high-efficiency VRF (COP > 4.5) typically delivers 30–50% energy savings. Chile's Law 21.305 requires large energy consumers (>50 TOE/year) to report consumption to the Ministry of Energy.",
  },
  {
    question: 'Can I finance HVAC installation for my business in Chile?',
    answer:
      'Yes. Options include: financial or operating leasing with fixed monthly payments, CORFO energy efficiency credit lines at preferential rates for projects that reduce consumption, ESCO (Energy Service Company) contracts where the system is paid from the energy savings generated with no upfront investment, and direct financing from the HVAC contractor for projects above UF 500. Contact us to discuss which option fits your project and credit profile.',
  },
  {
    question: 'How long does commercial HVAC installation take in Chile?',
    answer:
      'Small office (200 m²): 1–2 weeks. Mid-size office floor (600 m²): 3–5 weeks. Large retail fit-out (1,000–2,000 m²): 4–8 weeks. Hotel new construction (50–80 rooms): 16–24 weeks from start to commissioning. In occupied buildings with access restrictions, timelines extend 50–100% — plan for night and weekend work hours in your project schedule.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/en/guide/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Commercial HVAC Costs Chile',
          item: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/en/guide/commercial-hvac-costs-chile/#article`,
      headline: 'Commercial HVAC Cost in Chile — Price Guide 2025',
      author: { '@type': 'Organization', name: 'D&Z Building' },
      publisher: {
        '@type': 'Organization',
        name: 'D&Z Building',
        url: siteUrl,
      },
      datePublished: '2025-01-01',
      dateModified: '2025-07-01',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/guide/commercial-hvac-costs-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnGuideCommercialHvacCostsPage() {
  return (
    <>
      <Script id="ld-en-guide-hvac-costs" type="application/ld+json">
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
              style={{
                color: 'var(--dim)',
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
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
            <Link href="/en/guide/" style={{ color: 'inherit', textDecoration: 'none' }}>Guides</Link>
            <span>›</span>
            <span>Commercial HVAC Costs Chile</span>
          </div>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Price Guide · 2025
          </p>
          <h1 className="sp-hero-title">Commercial HVAC Cost in Chile<br />— 2025 Price Guide</h1>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              fontSize: 'clamp(15px,1.6vw,18px)',
              maxWidth: 700,
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            Real price ranges for VRF systems, commercial refrigeration, industrial ventilation, and
            healthcare HVAC — for offices, hotels, retail, data centers, and industrial plants in
            Chile. Prices expressed in UF (Unidad de Fomento, Chile&apos;s inflation-indexed unit, ≈ USD 33 in 2025)
            and approximate USD.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Get a free quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(20px,2.4vw,28px)',
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              How to read this guide
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 16px',
              }}
            >
              This guide is for project managers, facility managers, and decision-makers at Chilean companies
              budgeting a commercial or industrial HVAC installation. Ranges below include equipment,
              installation labor, refrigerant piping or ductwork, controls, and commissioning.
              They do not include civil works, permits, or medium-voltage electrical infrastructure.
            </p>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Prices are in UF (Unidad de Fomento) — Chile&apos;s official inflation-indexed unit,
              valued daily by the Central Bank and used in all major commercial contracts.
              At the 2025 reference rate, 1 UF ≈ CLP 38,000 ≈ USD 33.
              USD equivalents are approximate and may shift with the CLP/USD exchange rate.
            </p>
          </div>
        </div>

        {/* Systems pricing cards */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            By system type
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            HVAC System Price Ranges
          </h2>
          <div className="sp-aplic-grid">
            {SYSTEMS.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Josefin Sans',sans-serif",
                      fontSize: '13px',
                      fontWeight: 400,
                      letterSpacing: '.04em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                      margin: '0 0 4px',
                    }}
                  >
                    {s.system}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Josefin Sans',sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                    }}
                  >
                    {s.range_uf} · {s.range_clp}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '13px',
                    color: 'var(--dim)',
                    lineHeight: 1.55,
                    margin: '0 0 8px',
                  }}
                >
                  <strong style={{ color: 'var(--text)', fontSize: '12px' }}>Typical use:</strong> {s.use}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project reference table */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            By project type
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(18px,2.2vw,26px)',
              color: 'var(--text)',
              margin: '0 0 24px',
            }}
          >
            Project Reference Budget
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr>
                  {['Building / Project type', 'Recommended system', 'Budget range (UF)', 'Typical timeline'].map(h => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '10px 16px',
                        background: 'var(--accent)',
                        fontFamily: "'Josefin Sans',sans-serif",
                        fontSize: '10px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#0c0c0c',
                        fontWeight: 600,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((p, i) => (
                  <tr
                    key={p.type}
                    style={{
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>
                      {p.type}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)', borderBottom: '1px solid var(--border)' }}>
                      {p.system}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--accent)',
                        fontVariantNumeric: 'tabular-nums',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      {p.range}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)', borderBottom: '1px solid var(--border)' }}>
                      {p.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: '12px',
              color: 'var(--dim)',
              margin: '12px 0 0',
              opacity: 0.7,
            }}
          >
            * Reference budgets 2025. Include equipment, installation, and commissioning.
            Exclude civil works, permits, and medium-voltage electrical. Values may vary by brand,
            access conditions, and distance from Santiago.
          </p>
        </div>

        {/* Key cost drivers */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <p
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '10px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                margin: '0 0 10px',
              }}
            >
              What drives cost
            </p>
            <h2
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(18px,2.2vw,26px)',
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              Key Cost Drivers for Commercial HVAC in Chile
            </h2>
            <ul
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: 0,
                paddingLeft: 24,
              }}
            >
              {[
                {
                  label: 'Thermal load (kW)',
                  detail:
                    'The primary driver. Determined by floor area, orientation, glazing ratio, occupancy density, and internal equipment heat.',
                },
                {
                  label: 'System type',
                  detail:
                    'VRF costs 20–40% more upfront than conventional multi-split but delivers 30–50% lower energy bills over its 15-year lifespan.',
                },
                {
                  label: 'Number of zones',
                  detail:
                    'Each additional zone adds indoor unit, piping, and control wiring cost. VRF systems can share a single outdoor unit across 8–64 indoor units.',
                },
                {
                  label: 'Brand tier',
                  detail:
                    'Entry-level (Midea, Carrier) is 15–25% cheaper than premium (Daikin, Mitsubishi Electric). Warranty and spare parts availability differ significantly in Chile.',
                },
                {
                  label: 'Access and work hours',
                  detail:
                    'Occupied buildings requiring night or weekend shifts add 20–35% to labor cost. Roof access with crane adds logistics cost.',
                },
                {
                  label: 'Distance from Santiago',
                  detail:
                    'Projects in Antofagasta, Atacama, or the south add 10–20% for transport and per-diem costs. Remote mining and agricultural sites add more.',
                },
                {
                  label: 'Regulatory requirements',
                  detail:
                    'Healthcare (MINSAL), cleanrooms (ISO 14644), and data centers (TIA-942) have strict tolerance and documentation requirements that increase engineering and commissioning cost.',
                },
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: 12 }}>
                  <strong style={{ color: 'var(--text)' }}>{item.label}</strong> — {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mid-article CTA */}
        <div
          style={{
            padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)',
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Josefin Sans',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  margin: '0 0 8px',
                }}
              >
                Free quote
              </p>
              <p
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 'clamp(15px,1.5vw,18px)',
                  color: 'var(--text)',
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Get a detailed budget for your project within 72 business hours.
              </p>
            </div>
            <Link href="/en/#contacto" className="sp-hero-cta">
              Request a free quote →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            Everything you need to know before budgeting
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(13px,1.3vw,15px)',
                    fontWeight: 400,
                    letterSpacing: '.02em',
                    color: 'var(--text)',
                    margin: '0 0 10px',
                  }}
                >
                  {f.question}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '15px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              margin: '0 0 16px',
            }}
          >
            Related services
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/en/services/vrf-systems/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              VRF Systems →
            </Link>
            <Link
              href="/en/services/commercial-refrigeration/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Commercial Refrigeration →
            </Link>
            <Link
              href="/en/services/preventive-maintenance/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Preventive Maintenance →
            </Link>
            <Link
              href="/en/services/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              All services →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Ready to get an exact price?
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(22px,2.8vw,36px)',
              margin: '0 0 14px',
              color: 'var(--text)',
            }}
          >
            Get a free quote within 72 hours
          </h2>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              margin: '0 0 28px',
              fontSize: 'clamp(14px,1.4vw,17px)',
              maxWidth: 540,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            The ranges in this guide are indicative. Your actual cost depends on your floor layout,
            access conditions, and technical specifications. Tell us about your project and we will
            respond with a detailed proposal.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a free quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">View all services</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span
            style={{
              color: 'var(--dim)',
              fontFamily: "'Josefin Sans',sans-serif",
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
