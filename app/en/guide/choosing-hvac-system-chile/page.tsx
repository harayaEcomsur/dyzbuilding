import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'How to Choose a Commercial HVAC System in Chile — 2025 Guide',

  description:
    'Technical guide for choosing the right HVAC system for your Chilean facility: VRF vs multi-split vs chiller vs fan-coil. Selection criteria, UF budget ranges, and recommendations by project type.',
  alternates: {
    canonical: `${siteUrl}/en/guide/choosing-hvac-system-chile/`,
    languages: {
      en: `${siteUrl}/en/guide/choosing-hvac-system-chile/`,
      es: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
    },
  },
  openGraph: {
    title: 'Choosing HVAC for Chile — VRF vs Chiller vs Multi-Split | D&Z Building',
    description:
      'VRF, chiller, or multi-split? Compare systems for offices, hotels, retail, and industrial facilities in Chile — with budget ranges and project-type recommendations.',
    url: `${siteUrl}/en/guide/choosing-hvac-system-chile/`,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const SYSTEMS = [
  {
    name: 'VRF / VRV Multi-Split',
    ideal: 'Offices 200–5,000 m², hotels, clinics, retail',
    advantages: [
      'Independent zone control (inverter)',
      'High efficiency COP 3.5–5.0 at partial load',
      'No dedicated mechanical room required',
      'Easy future expansion',
      'Simultaneous heat recovery (heating + cooling at once)',
    ],
    limitations: [
      'Higher upfront cost than conventional multi-split',
      'Refrigerant pipe length limit (50–165 m depending on brand)',
      'Requires specialist maintenance',
    ],
    range: 'UF 250 – 3,000',
    recommended: 'First choice for commercial spaces 200–5,000 m²',
  },
  {
    name: 'Conventional Multi-Split',
    ideal: 'Small offices < 200 m², retail outlets',
    advantages: [
      'Lower upfront investment',
      'Fast installation (1–2 weeks)',
      'Widely available spare parts',
    ],
    limitations: [
      'No independent zone control per compressor',
      'Less efficient at partial loads than VRF',
      'Limited scalability',
    ],
    range: 'UF 60 – 250',
    recommended: 'For spaces < 200 m² or when budget is the primary constraint',
  },
  {
    name: 'Chiller + Fan-Coil (chilled water)',
    ideal: 'Buildings > 2,000 m², multi-tenant',
    advantages: [
      'Equipment life 25–30 years (longer than VRF)',
      'Per-tenant metering via sub-meters',
      'Greater flexibility in water distribution',
      'Best for tall buildings',
    ],
    limitations: [
      'Requires a dedicated mechanical room',
      'Significantly higher upfront investment',
      'Greater operational and maintenance complexity',
      'Poor performance at partial loads without VFDs',
    ],
    range: 'UF 2,000 – 30,000+',
    recommended: 'For buildings > 2,000 m² or when asset life > 25 years is the priority',
  },
  {
    name: 'Packaged / Rooftop Unit',
    ideal: 'Retail stores, industrial buildings, open-plan spaces',
    advantages: [
      'All equipment in one unit on the roof',
      'Simple installation (no separate outdoor unit)',
      'Good for flat-roof buildings',
    ],
    limitations: [
      'No zone control within the space',
      'Less efficient than VRF for multiple zones',
      'Rooftop noise',
    ],
    range: 'UF 150 – 600',
    recommended: 'For single-zone stores or open-plan spaces without room subdivision',
  },
]

const CRITERIA = [
  {
    criterion: 'Floor area to condition',
    guide: 'Under 200 m² → multi-split. 200–5,000 m² → VRF. Over 2,000 m² in a multi-tenant building → chiller. Area is the first filter but not the only one.',
  },
  {
    criterion: 'Number of zones and use patterns',
    guide: 'If you need independent temperature control in more than 3 zones (meeting rooms, private offices, reception), a VRF pays back its premium in efficiency and comfort. Conventional multi-split has less per-compressor zone control.',
  },
  {
    criterion: 'Upfront investment vs. operating cost',
    guide: 'Multi-split has lower CAPEX but higher OPEX. VRF has higher CAPEX but 30–50% lower consumption than equivalent splits. VRF payback vs. conventional splits is typically 3–6 years in intensive commercial use.',
  },
  {
    criterion: 'New construction vs. retrofit',
    guide: 'In new construction, space can be planned for a chiller mechanical room and VRF pipe runs. In retrofit, VRF is more flexible (smaller-diameter pipes, no major civil works). Chiller retrofits are complex and invasive.',
  },
  {
    criterion: 'Certification and regulatory requirements',
    guide: 'For LEED or EDGE, you need certified efficiency data — high-efficiency VRF (EER > 4.5) supports the energy credit. For cleanrooms and data centers, systems must include N+1 redundancy and precision control independent of the comfort HVAC.',
  },
]

const CONTEXTS = [
  { type: 'Small office / retail (< 200 m²)', recommended: 'Multi-split', reason: 'Lower upfront cost, < 1 week installation' },
  { type: 'Office floor (200–1,000 m²)', recommended: 'Multi-zone VRF', reason: 'Zone control, efficiency at partial load' },
  { type: 'Corporate building (> 2,000 m²)', recommended: 'VRF or chiller', reason: 'VRF for < 5 floors; chiller for tall buildings with long asset life' },
  { type: 'Retail / single-tenant store', recommended: 'Multi-split or rooftop', reason: 'Single zone, no need for per-zone control' },
  { type: 'Hotel (50–200 rooms)', recommended: 'Silent VRF (NC-25)', reason: 'Individual room control, heat recovery for common areas' },
  { type: 'Data center / server room', recommended: 'Precision CRAC/CRAH + N+1', reason: 'Constant ±0.5°C and 24/7 availability outweigh any cost criterion' },
]

const FAQ = [
  {
    question: 'How many BTU or TR does my facility need per square meter?',
    answer: 'Thermal load per m² varies enormously by use: a low-tech office needs 40–60 W/m² (140–200 BTU/m²), while a data center can require 500–3,000 W/m² per rack. For standard commercial use (offices, clinics, hotels), the most common range is 80–120 W/m². However, the correct calculation depends on solar orientation, glazing type, occupancy density, and internal loads (equipment, lighting). Never size by m² without a real thermal analysis — oversizing is the most common and most expensive mistake.',
  },
  {
    question: 'VRF or central air with ductwork?',
    answer: 'Ductless VRF is more efficient in spaces with multiple zones that have different operating hours. Centralized AHU + ductwork is mandatory in labs and commercial kitchens (100% fresh air treatment required). For offices and hotels, the comparison depends on ceiling plenum space: if there is enough plenum height, a central AHU can be quieter at the work area level; if not, VRF with ceiling cassettes is the standard solution.',
  },
  {
    question: 'Is VRF worth it vs. conventional splits for a mid-size business?',
    answer: "For a company occupying more than 200 m² in full-time operation (8+ hours/day), inverter VRF consumes 30–50% less than equivalent constant-speed splits. At Chile's BT-1 commercial electricity rate (>$170 CLP/kWh, ≈ USD 0.18/kWh in 2025), annual savings can be CLP 3–8 million for a 500 m² floor. Payback is typically 3–5 years. If the space is < 200 m² or operating hours are only 4–6/day, a conventional multi-split is sufficient.",
  },
  {
    question: 'What is the difference between VRF and VRV?',
    answer: "VRV (Variable Refrigerant Volume) is Daikin's registered trademark for their inverter multi-split line with variable refrigerant flow. VRF (Variable Refrigerant Flow) is the generic industry term for the same technology from other manufacturers (Mitsubishi Electric, LG, Carrier, Samsung). Technically they are equivalent — the difference is marketing, not engineering.",
  },
  {
    question: 'Which HVAC system is best for LEED certification in Chile?',
    answer: 'LEED v4 evaluates HVAC efficiency under the EA (Energy and Atmosphere) credits. High-efficiency VRF (EER 4.0–5.0) and VFD-equipped screw or centrifugal chillers score best. For LEED, the manufacturer must provide efficiency data certified by AHRI (US standard) or Eurovent (European standard). In Chile, LEED projects use energy modeling with EnergyPlus or eQUEST.',
  },
  {
    question: 'When is a chiller better than VRF?',
    answer: 'A chiller is preferable when: (1) the space exceeds 2,000 m² in a multi-tenant building requiring independent per-floor metering; (2) the expected asset life exceeds 25 years; (3) the project requires chilled water flow for centralized AHUs (large hotels); or (4) there are regulatory constraints limiting the refrigerant charge inside the building (some jurisdictions set VRF charge limits per m²). In Chile, for 5–15-story office buildings, VRF is typically more efficient and lower cost than a chiller.',
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
        { '@type': 'ListItem', position: 3, name: 'How to Choose an HVAC System', item: `${siteUrl}/en/guide/choosing-hvac-system-chile/` },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to Choose a Commercial HVAC System in Chile — 2025 Guide',
      author: { '@type': 'Organization', name: 'D&Z Building' },
      publisher: { '@type': 'Organization', name: 'D&Z Building', url: siteUrl },
      datePublished: '2025-01-01',
      dateModified: '2025-07-01',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnGuideChoosingHvacPage() {
  return (
    <>
      <Script id="ld-en-guide-choosing-hvac" type="application/ld+json">
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
            <span>How to Choose an HVAC System</span>
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
            Technical Guide · VRF vs Chiller vs Multi-Split · Chile 2025
          </p>
          <h1 className="sp-hero-title">How to Choose a Commercial<br />HVAC System in Chile</h1>
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
            Technical comparison of VRF, chiller, and multi-split systems for
            commercial and industrial projects in Chile — with selection criteria,
            UF budget ranges, and recommendations by project type.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">Our Services</Link>
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
              What this guide covers
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
              This guide is for project managers, facility directors, and architects
              selecting HVAC systems for commercial or industrial facilities in Chile.
              It compares the four main system types — VRF, conventional multi-split,
              chiller + fan-coil, and packaged rooftop — across technical performance,
              total cost of ownership, and regulatory fit.
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
              Budget ranges are expressed in UF (Unidad de Fomento, Chile&apos;s
              inflation-indexed unit, ≈ USD 33 in 2025) and cover equipment,
              installation labor, piping or ductwork, controls, and commissioning.
              Civil works, permits, and medium-voltage electrical infrastructure are
              not included.
            </p>
          </div>
        </div>

        {/* Systems comparison cards */}
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
            System comparison
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
            Four Main HVAC System Types
          </h2>
          <div className="sp-aplic-grid">
            {SYSTEMS.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: 4, fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{s.name}</strong>
                <span style={{ color: 'var(--dim)', fontSize: '11px', fontFamily: "'Josefin Sans',sans-serif", letterSpacing: '.04em' }}>{s.ideal}</span>
                <p style={{ margin: '10px 0 4px', fontSize: '13px', color: 'var(--text)', fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>Advantages:</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7, fontFamily: "'Outfit',sans-serif" }}>
                  {s.advantages.map((a, ai) => <li key={ai}>{a}</li>)}
                </ul>
                <p style={{ margin: '10px 0 4px', fontSize: '13px', color: 'var(--text)', fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>Limitations:</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7, fontFamily: "'Outfit',sans-serif" }}>
                  {s.limitations.map((l, li) => <li key={li}>{l}</li>)}
                </ul>
                <p style={{ margin: '12px 0 4px', fontSize: '13px', color: 'var(--accent)', fontFamily: "'Josefin Sans',sans-serif", letterSpacing: '.06em' }}>{s.range}</p>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontStyle: 'italic' }}>{s.recommended}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decision criteria */}
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
            How to decide
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
            Five Selection Criteria
          </h2>
          <div className="sp-aplic-grid">
            {CRITERIA.map((c, i) => (
              <div key={i} className="sp-aplic-item">
                <strong
                  style={{
                    color: 'var(--text)',
                    display: 'block',
                    marginBottom: 10,
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '13px',
                    letterSpacing: '.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {c.criterion}
                </strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.65,
                    fontFamily: "'Outfit',sans-serif",
                  }}
                >
                  {c.guide}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Context recommendation table */}
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
            Quick reference
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
            Recommended System by Project Context
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr>
                  {['Project / Building type', 'Recommended system', 'Why'].map(h => (
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
                {CONTEXTS.map((ctx, i) => (
                  <tr
                    key={ctx.type}
                    style={{
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>
                      {ctx.type}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', letterSpacing: '.04em', borderBottom: '1px solid var(--border)' }}>
                      {ctx.recommended}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)', borderBottom: '1px solid var(--border)' }}>
                      {ctx.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                Need a specific recommendation?
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
                Tell us your facility size, use, and timeline — we will recommend the right system and provide a detailed budget within 72 hours.
              </p>
            </div>
            <Link href="/en/#contacto" className="sp-hero-cta">
              Request a free assessment →
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
            Common questions about HVAC system selection
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
            Related guides &amp; services
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/en/guide/commercial-hvac-costs-chile/"
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
              HVAC Cost Guide →
            </Link>
            <Link
              href="/en/services/vrf-systems/"
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
            Ready to choose the right system?
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
            Get a free technical recommendation
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
            The best HVAC system depends on your specific floor plan, use patterns,
            and budget. Share your project details and our engineers will respond
            with a concrete system recommendation and budget range within 72 hours.
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
