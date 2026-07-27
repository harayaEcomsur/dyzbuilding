import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC Energy Efficiency for Businesses in Chile: 2025 Guide',

  description:
    'How to reduce commercial HVAC energy consumption 30–50% with VRF inverter systems, free cooling, heat recovery, and BMS automation. Step-by-step energy audit guide for Chile.',
  alternates: {
    canonical: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
    languages: {
      en: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
      es: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
    },
  },
  openGraph: {
    title: 'Reduce HVAC Energy Costs in Chile — VRF, Free Cooling, BMS | D&Z Building',
    description:
      'VRF inverter systems, free cooling, heat recovery, BMS automation, and energy audits to cut commercial HVAC consumption by 30–50% in Chile.',
    url: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const STRATEGIES = [
  {
    titulo: 'Upgrading to VRF Inverter Systems',
    subtitulo: 'COP 3.5–5.0 · 30–50% less energy',
    desc: 'Fixed-speed direct expansion systems (on/off splits) run at 100% capacity or off. A VRF inverter system modulates compressor speed to match actual demand, achieving a COP of 3.5 to 5.0 versus 2.5–3.0 for older equipment. For a company with 500 m² of offices in Santiago, the replacement can save CLP 2–4 million (≈ USD 2,000–4,000) annually in electricity costs.',
  },
  {
    titulo: 'Free Cooling & Economizers',
    subtitulo: 'Using outdoor cold air at no cost',
    desc: 'In Santiago and other cities with cool nights, systems equipped with an air-side economizer or free cooling mode can cool the building using outdoor air when the outside temperature is lower than indoors. This can reduce compressor energy by 20–40% during intermediate months (May–August in Santiago). D&Z Building designs economizer modules compatible with existing BMS infrastructure.',
  },
  {
    titulo: 'Heat Recovery VRF',
    subtitulo: 'Heat one zone while cooling another',
    desc: 'Three-pipe VRF heat recovery systems transfer heat rejected by cooling zones to zones requiring heating, instead of dumping it outdoors. In an office building with mixed orientations (north/south), this can reduce total HVAC energy by 40–60% compared to conventional systems, because the recovered heat costs nothing in electricity.',
  },
  {
    titulo: 'BMS Automation & Demand-Controlled Operation',
    subtitulo: 'Occupancy · Schedules · Optimized setpoints',
    desc: '25–35% of office HVAC energy is consumed during unoccupied hours (after business hours, weekends, holidays). A BMS (Building Management System) with occupancy sensors or integrated with access control can automatically reduce setpoints when spaces are empty. D&Z Building integrates HVAC systems with BMS via BACnet, Modbus, or LonWorks protocols.',
  },
]

const STATS = [
  { valor: '30–50%', etiqueta: 'Typical savings upgrading to VRF inverter' },
  { valor: 'COP 5.0', etiqueta: 'Peak efficiency of VRF heat recovery systems' },
  { valor: '25–35%', etiqueta: 'Energy wasted in unoccupied hours (without BMS)' },
  { valor: 'LEED', etiqueta: 'Certification that rewards HVAC efficiency' },
]

const AUDIT_STEPS = [
  {
    titulo: '1. Baseline Energy Assessment',
    subtitulo: 'Utility bills · Sub-metering · Operating hours',
    desc: 'The audit begins with analysis of the last 12 months of electricity bills and, if available, sub-metering data by circuit. D&Z Building installs temporary energy loggers to measure actual HVAC consumption per unit over 1–2 representative weeks.',
  },
  {
    titulo: '2. Existing System Analysis',
    subtitulo: 'Efficiency · Age · Condition · Setpoints',
    desc: 'The actual efficiency of the installed system (measured COP/EER vs. datasheet specification) is evaluated, along with equipment age, condition, current setpoints, operating schedules, and whether automation is in place or manual. A 10-year-old system may be operating at 60–70% of its original efficiency due to lack of maintenance.',
  },
  {
    titulo: '3. Opportunity Identification',
    subtitulo: 'Quick wins · Medium-term investments · Replacements',
    desc: 'D&Z Building delivers a report with three categories of measures: (1) No-cost adjustments (setpoint changes, schedules, clean filters) that can reduce energy 10–20% immediately; (2) Low-cost measures (BMS automation, occupancy sensors) with 1–2 year payback; (3) Equipment replacements with 3–7 year payback. Each measure includes estimated savings in kWh/year and CLP/year.',
  },
  {
    titulo: '4. Implementation & Certification',
    subtitulo: 'Engineering · Installation · Measurement & verification',
    desc: 'D&Z Building implements the selected measures and conducts post-implementation M&V (Measurement & Verification) to confirm actual savings. For projects applying for MINENERGIA energy efficiency subsidies or LEED/EDGE certifications, D&Z Building provides all required technical documentation.',
  },
]

const FAQ = [
  {
    question: 'How much can I save by replacing conventional splits with a VRF system?',
    answer: 'For a 500 m² office in Santiago with 8-year-old on/off splits, replacing with a VRF inverter system can reduce HVAC energy consumption by 35–50%. At a BT2 tariff of approximately CLP 150/kWh (≈ USD 0.16), that means CLP 2–4 million (≈ USD 2,000–4,000) in annual savings. The VRF system payback period (factoring in installation cost minus residual value of old equipment) is typically 4–8 years. D&Z Building provides a detailed financial projection before the investment.',
  },
  {
    question: 'What is COP and how do I know if my system is efficient?',
    answer: "COP (Coefficient of Performance) measures how many units of heating or cooling the system produces per unit of electricity consumed. A COP of 3.0 means the system delivers 3 kW of cooling per 1 kW of electrical input. Modern inverter splits have COP 3.5–4.5 under rated conditions. VRF systems reach COP 4.0–5.0. An old fixed-speed unit may have dropped to COP 2.0–2.5 due to wear. Your system's actual COP can be measured during the energy audit.",
  },
  {
    question: 'Are there subsidies or tax incentives for HVAC energy efficiency in Chile?',
    answer: 'Yes. MINENERGIA (Ministry of Energy) offers co-financing programs for SME energy efficiency projects (PYMES Energía program), with subsidies covering up to 50% of project cost. Larger companies can access Acuerdos de Producción Limpia (APL — Clean Production Agreements), which include efficiency targets and reputational benefits. Additionally, Law 21.305 (2021) imposes mandatory energy efficiency obligations on large consumers (above 50 TEP/year). D&Z Building can guide you through the application process for these instruments.',
  },
  {
    question: 'Does LEED certification require specific HVAC systems or brands?',
    answer: 'LEED does not mandate specific brands or system types. It requires meeting efficiency levels expressed as a percentage improvement over the ASHRAE 90.1 baseline. For the EA (Energy & Atmosphere) category, the HVAC system accounts for 35–45% of available credits. VRF heat recovery systems, high-efficiency chillers, and free cooling systems are the most common choices in LEED projects in Chile. D&Z Building has participated in LEED Silver and Gold certified projects in Santiago.',
  },
  {
    question: 'Is an energy audit worth it for a small company?',
    answer: 'For companies with fewer than 200 m² of offices, the cost of a formal audit (UF 5–15, ≈ USD 175–525) may not be justified. In those cases, D&Z Building offers a free diagnostic visit where a technician reviews equipment condition, setpoints, and operating schedules and delivers recommendations at no cost. For mid-sized companies (200–2,000 m²), a formal audit is justified when annual HVAC electricity costs exceed CLP 5 million (≈ USD 5,000).',
  },
  {
    question: 'How long does an HVAC energy efficiency implementation take?',
    answer: 'Setpoint and schedule adjustments are immediate (1 day of configuration). BMS automation or occupancy sensor installation takes 1–2 weeks. Equipment replacement (splits to VRF) in a 1,000 m² facility takes 2–4 weeks, with 80–90% operational continuity during installation (old equipment is removed zone by zone). D&Z Building schedules installation outside peak hours (weekends, nights) to minimize operational disruption.',
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
          name: 'HVAC Energy Efficiency',
          item: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/en/guide/energy-efficiency-hvac-chile/#article`,
      headline: 'HVAC Energy Efficiency for Businesses in Chile: 2025 Guide',
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
      '@id': `${siteUrl}/en/guide/energy-efficiency-hvac-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnGuideEnergyEfficiencyPage() {
  return (
    <>
      <Script id="ld-en-guide-energy-efficiency" type="application/ld+json">
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
              href="/en/services/energy-efficiency/"
              style={{
                color: 'var(--dim)',
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Energy Efficiency
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
            <span>HVAC Energy Efficiency</span>
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
            Practical Guide · 2025
          </p>
          <h1 className="sp-hero-title">HVAC Energy Efficiency<br />for Businesses in Chile</h1>
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
            How to reduce commercial HVAC energy consumption 30–50% with VRF inverter systems,
            free cooling, heat recovery, and BMS automation. Step-by-step energy audit guide for Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Get a free energy audit</Link>
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
              Why HVAC efficiency matters for your business
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
              HVAC systems typically account for 30–50% of a commercial building&apos;s total electricity consumption.
              For a medium-sized office or retail space in Chile, that translates to CLP 3–10 million per year
              in electricity costs — a significant operational expense with real room for reduction.
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
              Modern HVAC technology — particularly VRF inverter systems, free cooling economizers, and
              BMS automation — can reduce that consumption by 30–50% without sacrificing comfort. The key
              is choosing the right combination of strategies for your building, climate zone, and operating
              profile.
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
              This guide explains the four main strategies D&Z Building uses in commercial and industrial
              projects in Chile, along with a practical energy audit methodology to identify the highest-impact
              opportunities for your facility.
            </p>
          </div>
        </div>

        {/* Strategies */}
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
            Four proven strategies
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
            How to Reduce HVAC Energy Consumption
          </h2>
          <div className="sp-aplic-grid">
            {STRATEGIES.map((s) => (
              <div key={s.titulo} className="sp-aplic-item">
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
                  {s.subtitulo}
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
                  {s.titulo}
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
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency comparison table */}
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
            HVAC System Efficiency Comparison
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['System', 'Typical COP', 'Installation cost', 'Savings vs. conventional split'].map(h => (
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
                  { system: 'Fixed-speed split (on/off)', cop: '2.5–3.0', cost: 'Low', savings: '— (baseline)' },
                  { system: 'Inverter split', cop: '3.0–4.0', cost: 'Low–medium', savings: '15–25%' },
                  { system: 'VRF inverter (cooling-only / heat pump)', cop: '3.5–5.0', cost: 'Medium–high', savings: '30–45%' },
                  { system: 'VRF heat recovery', cop: 'Up to 6.0 in recovery mode', cost: 'High', savings: '40–60%' },
                  { system: 'High-efficiency chiller + AHU', cop: '4.0–6.5 (EER)', cost: 'High', savings: '35–55%' },
                  { system: 'Free cooling + VRF/chiller', cop: 'Variable', cost: 'High', savings: '40–65%' },
                ].map((row, i) => (
                  <tr
                    key={row.system}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.system}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.cop}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.cost}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.savings}</td>
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

        {/* Energy audit steps */}
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
            Step-by-step methodology
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
            The HVAC Energy Audit Process
          </h2>
          <div className="sp-aplic-grid">
            {AUDIT_STEPS.map((a) => (
              <div key={a.titulo} className="sp-aplic-item">
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
                  {a.subtitulo}
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
                Free energy audit
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
                D&Z Building evaluates your HVAC system at no cost and delivers a savings report with
                prioritized recommendations.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/en/services/energy-efficiency/" className="sp-hero-cta">
                Energy efficiency service →
              </Link>
              <Link href="/?servicio=eficiencia-energetica#contacto" className="sp-hero-cta sp-hero-cta-outline">
                Request audit
              </Link>
            </div>
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
            Common questions about HVAC energy efficiency
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

        {/* Related guides */}
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
              href="/en/guide/what-is-a-vrf-system/"
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
              What is a VRF System? →
            </Link>
            <Link
              href="/en/guide/commercial-hvac-costs-chile/"
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
          </div>
        </div>

        {/* Final CTA */}
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
            Ready to reduce your HVAC energy costs?
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
            Our technical team conducts a free energy assessment of your facility and delivers
            a prioritized savings report.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a free energy audit</Link>
            <Link href="/en/services/energy-efficiency/" className="sp-hero-cta sp-hero-cta-outline">View energy efficiency service</Link>
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
