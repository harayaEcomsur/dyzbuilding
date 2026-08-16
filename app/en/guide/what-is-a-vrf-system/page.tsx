import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'What is a VRF System? Technical Guide Chile 2025',

  description:
    'Complete technical guide to VRF (Variable Refrigerant Flow) systems for commercial projects in Chile: how they work, types (cooling-only, heat pump, heat recovery), advantages over conventional splits, and ideal applications.',
  alternates: {
    canonical: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
    languages: {
      en: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
      es: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
    },
  },
  openGraph: {
    title: 'What is a VRF System? VRF vs Splits, Types, Applications | D&Z Building',
    description:
      'VRF (Variable Refrigerant Flow) systems explained: how they work, cooling-only vs heat pump vs heat recovery, comparison with conventional splits, and applications for offices, hotels, retail, and healthcare.',
    url: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const COMPONENTS = [
  {
    titulo: 'Outdoor Unit (Condenser)',
    subtitulo: 'Inverter compressor · 1 or 2 modules',
    desc: 'The heart of the system: contains one or more inverter compressors that modulate their speed to match actual demand. A single outdoor unit can serve 2 to 60+ indoor units depending on system capacity. Capacities range from 4 to 50+ TR (tons of refrigeration).',
  },
  {
    titulo: 'Refrigerant Piping Network',
    subtitulo: 'Copper · Up to 165 m equivalent · Multi-floor capable',
    desc: 'The refrigerant (R-410A, R-32, or R-454B depending on brand) circulates in copper pipes from the outdoor unit to each indoor unit. Modern systems allow equivalent pipe lengths of up to 165 meters and height differences of up to 50 meters between units — making them viable for multi-story buildings.',
  },
  {
    titulo: 'Indoor Units',
    subtitulo: 'Cassette · Wall-mount · Ducted · Floor-to-ceiling',
    desc: 'Each indoor unit operates independently: it can be cooling, heating, or off regardless of what other units in the system are doing. Available formats: 4-way cassette (suspended ceiling), wall-mount (split-style), ducted (for air distribution systems), and floor-to-ceiling. One outdoor unit can support mixed types of indoor units.',
  },
  {
    titulo: 'Central Controller',
    subtitulo: 'Touchscreen · BMS · Mobile app',
    desc: 'A central controller manages all indoor units from a single point: time schedules, per-zone temperature, operating mode, and energy monitoring. Advanced systems integrate with BMS (Building Management Systems) via BACnet, Modbus, or LonWorks protocols.',
  },
]

const TYPES = [
  {
    titulo: 'Cooling-Only (Heat Pump — Cooling Mode)',
    subtitulo: 'Warm climates · Year-round cooling',
    desc: 'The simplest mode: the outdoor unit only cools. Indoor units in heating mode use an electric resistance element or have no heating function. Suitable for areas with warm climates year-round where heating is unnecessary or occasional. Upfront cost 10–15% lower than heat pump mode.',
  },
  {
    titulo: 'Heat Pump (Heating + Cooling)',
    subtitulo: 'Cooling + heating with one system',
    desc: 'The outdoor unit can operate in cooling or heating mode. All indoor units must run in the same mode simultaneously (all cooling or all heating). Ideal for climates with distinct seasons — Santiago, Concepción, or Coquimbo. Heating efficiency far superior to electric resistance elements.',
  },
  {
    titulo: 'Heat Recovery (Simultaneous Heating & Cooling)',
    subtitulo: 'Cooling and heating at the same time · Maximum efficiency',
    desc: 'The most advanced configuration: some indoor units cool while others heat, simultaneously. Heat "rejected" by the cooling zones is "recovered" to heat other zones. This produces very high efficiencies (COP up to 6 in recovery mode). Ideal for hotels and offices with varied solar exposure by zone.',
  },
]

const STATS = [
  { valor: 'COP 3.5–5.0', etiqueta: 'Efficiency at partial load' },
  { valor: '165 m', etiqueta: 'Maximum equivalent pipe length' },
  { valor: '60+', etiqueta: 'Indoor units per outdoor unit' },
  { valor: '30–50%', etiqueta: 'Energy savings vs conventional splits' },
]

const APPLICATIONS = [
  { titulo: 'Offices 200–5,000 m²', desc: 'Most common application. Per-room zone control. High efficiency at partial load when many zones are idle during business hours.' },
  { titulo: 'Hotels', desc: 'Individual room control. Heat recovery mode for pool and spa areas. Low noise level NC-25 for quiet environments.' },
  { titulo: 'Clinics & Medical Centers', desc: 'Zones with opposing demands (operating rooms, radiology, waiting areas). Heat recovery for maximum efficiency across mixed loads.' },
  { titulo: 'Retail & Shopping Centers', desc: 'Stores with high customer density. VRF allows per-tenant control and individual energy sub-metering.' },
  { titulo: 'Mixed-Use Buildings', desc: 'Offices + retail + food & beverage in the same building. A single VRF network covers all zones with differentiated control.' },
]

const FAQ = [
  {
    question: 'What is the difference between VRF and VRV?',
    answer: "VRF stands for Variable Refrigerant Flow. VRV is exactly the same technology but is Daikin's registered trademark — the company that first developed and commercialized this technology in Japan in 1982. Other manufacturers (Mitsubishi Electric, LG, Samsung, Carrier) use the generic term VRF. Technically they are equivalent.",
  },
  {
    question: 'How many indoor units can a VRF system support?',
    answer: "It depends on the outdoor unit's capacity. Small commercial systems (4–6 TR) support 2–8 indoor units. Mid-size commercial systems (10–20 TR) support 8–20 units. Large industrial systems (30–50 TR with multiple outdoor modules) can connect 60 or more indoor units. The constraint is not just unit count but also total installed indoor capacity, which should not exceed 130% of outdoor unit capacity.",
  },
  {
    question: 'Can a VRF system heat and cool simultaneously?',
    answer: 'Only heat recovery VRF systems can heat and cool simultaneously. Cooling-only and heat pump systems must run in one mode at a time (all cooling or all heating). Heat recovery VRF uses a 3-pipe connection instead of 2, adding upfront cost but allowing energy rejected by cooling zones to be reused for heating other zones.',
  },
  {
    question: 'Is VRF refrigerant dangerous?',
    answer: 'The most common VRF refrigerants today are R-410A and R-32. R-32 (the more modern option) has a global warming potential (GWP) of 675 vs. 2,088 for R-410A — 68% lower. Both are safe for enclosed spaces at normal operating concentrations: non-toxic and non-flammable at normal levels. In the event of a leak, modern systems include refrigerant sensors with alarms and automatic emergency ventilation. EN 378 establishes maximum refrigerant charge limits per room volume.',
  },
  {
    question: 'What happens if the VRF outdoor unit fails?',
    answer: 'If the outdoor unit fails, the entire system loses conditioning. For critical facilities (data centers, operating rooms, luxury hotels), N+1 redundancy with two outdoor units connected to the same piping ring is recommended. For standard offices, a single outdoor unit is the norm. Major brand spare parts availability in Chile (Daikin, Mitsubishi, LG) typically allows repairs.',
  },
  {
    question: 'How much energy does VRF save compared to conventional splits?',
    answer: 'An inverter VRF system consumes 30–50% less than equivalent fixed-speed conventional splits. Two reasons: the inverter compressor modulates speed to match actual demand (no constant on/off cycling), and partial-load operation (when only some zones are active) is far more efficient. For a 500 m² floor operating 8 hours/day in Santiago, annual savings can be CLP 1.5–3 million (≈ USD 1,600–3,200) vs. conventional splits.',
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
          name: 'What is a VRF System?',
          item: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/en/guide/what-is-a-vrf-system/#article`,
      headline: 'What is a VRF System? Technical Guide Chile 2025',
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
      '@id': `${siteUrl}/en/guide/what-is-a-vrf-system/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnGuideWhatIsVrfPage() {
  return (
    <>
      <Script id="ld-en-guide-what-is-vrf" type="application/ld+json">
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
              href="/en/services/vrf-systems/"
              style={{
                color: 'var(--dim)',
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              VRF Systems
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
            <span>What is a VRF System?</span>
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
            Technical Guide · 2025
          </p>
          <h1 className="sp-hero-title">What is a VRF System?<br />Complete Technical Guide</h1>
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
            Everything you need to know about Variable Refrigerant Flow systems: how they work,
            the three VRF types, how they compare to conventional splits, and which commercial
            and industrial projects in Chile benefit most.
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
              What exactly is a VRF system?
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
              A VRF system (Variable Refrigerant Flow) is a centralized HVAC solution that allows
              independent temperature control in multiple zones using a single outdoor unit connected
              to several indoor units through a refrigerant piping network.
            </p>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 16px',
              }}
            >
              Unlike conventional split systems — where each outdoor compressor handles only 1 to 4
              indoor units — a VRF system can manage between 2 and 60 or more indoor units from a
              single outdoor unit, with each zone operating completely independently.
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
              The key is the variable-speed inverter compressor: instead of running at full power
              in an on/off cycle, it adjusts its speed precisely to match real-time building demand —
              reducing energy consumption 30–50% compared to conventional systems.
            </p>
          </div>
        </div>

        {/* How it works — COMPONENTS */}
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
            Main components
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
            How Does a VRF System Work?
          </h2>
          <div className="sp-aplic-grid">
            {COMPONENTS.map((c) => (
              <div key={c.titulo} className="sp-aplic-item">
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    margin: '0 0 8px',
                  }}
                >
                  {c.subtitulo}
                </p>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(14px,1.4vw,16px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    margin: '0 0 12px',
                  }}
                >
                  {c.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Types — TYPES */}
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
            Three available configurations
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
            Types of VRF Systems
          </h2>
          <div className="sp-aplic-grid">
            {TYPES.map((t) => (
              <div key={t.titulo} className="sp-aplic-item">
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    margin: '0 0 8px',
                  }}
                >
                  {t.subtitulo}
                </p>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(14px,1.4vw,16px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    margin: '0 0 12px',
                  }}
                >
                  {t.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table — VRF vs conventional splits */}
        <div className="sp-section">
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(18px,2.2vw,26px)',
              color: 'var(--text)',
              margin: '0 0 24px',
            }}
          >
            VRF vs Conventional Splits
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Criterion', 'Conventional Splits', 'VRF Inverter'].map(h => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '10px 16px',
                        fontFamily: "'Josefin Sans',sans-serif",
                        fontSize: '10px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: 'var(--dim)',
                        fontWeight: 400,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { criterio: 'Independent zone control', split: 'No (all tied to one compressor)', vrf: 'Yes (each unit operates independently)' },
                  { criterio: 'Energy efficiency', split: 'Medium (COP 2.5–3.5)', vrf: 'High (COP 3.5–5.0 at partial load)' },
                  { criterio: 'Pipe length', split: '30–50 m', vrf: 'Up to 165 m equivalent' },
                  { criterio: 'Number of indoor units', split: '1–4 per compressor', vrf: '2 to 60+ per outdoor unit' },
                  { criterio: 'Upfront investment', split: 'Low', vrf: 'Medium-high' },
                  { criterio: 'Maintenance', split: 'Simple, wide service network', vrf: 'Requires brand-certified technician' },
                ].map((row, i) => (
                  <tr
                    key={row.criterio}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.criterio}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.split}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.vrf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '28px 40px',
            }}
          >
            {STATS.map((s) => (
              <div key={s.etiqueta} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(22px,2.8vw,34px)',
                    fontWeight: 300,
                    color: 'var(--accent)',
                    margin: '0 0 6px',
                    letterSpacing: '-.01em',
                  }}
                >
                  {s.valor}
                </p>
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    margin: 0,
                  }}
                >
                  {s.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
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
            Ideal projects
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
            What Type of Project is VRF For?
          </h2>
          <div className="sp-aplic-grid">
            {APPLICATIONS.map((a) => (
              <div key={a.titulo} className="sp-aplic-item">
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(14px,1.4vw,16px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    margin: '0 0 12px',
                  }}
                >
                  {a.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
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
                Get a detailed budget for your VRF project.
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
            Everything you need to know about VRF systems
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
            Related guides
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
              Commercial HVAC Costs Chile →
            </Link>
            <Link
              href="/en/guide/choosing-hvac-system-chile/"
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
              Choosing an HVAC System →
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
              VRF Systems Service →
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
            Next step
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
            Is VRF the right solution for your project?
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
            Our technical team evaluates your project at no cost and delivers a well-founded
            recommendation. If VRF is not the best fit for your case, we will tell you.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a free quote</Link>
            <Link href="/en/services/vrf-systems/" className="sp-hero-cta sp-hero-cta-outline">View VRF service</Link>
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
