import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC Energy Efficiency in Chile — Energy Audit & Law 21.305 Compliance',

  description:
    'HVAC energy audit services in Chile: real consumption measurement, VRF diagnostics, savings plan (ROI, TIR, payback), M&V protocol, and Law 21.305 SGE compliance. Cut HVAC electricity use by 20–40%.',
  alternates: {
    canonical: `${siteUrl}/en/services/energy-efficiency/`,
    languages: {
      en: `${siteUrl}/en/services/energy-efficiency/`,
      es: `${siteUrl}/servicios/eficiencia-energetica/`,
    },
  },
  openGraph: {
    title: 'HVAC Energy Efficiency Chile — Audit & Law 21.305 Compliance | D&Z Building',
    description:
      'We audit your HVAC system\'s real consumption, identify inefficiencies, and implement improvements with a 20–40% energy reduction. Law 21.305 SGE compliance support.',
    url: `${siteUrl}/en/services/energy-efficiency/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SERVICES = [
  {
    titulo: 'HVAC Energy Audit',
    subtitulo: 'ISO 50001 · ASHRAE Level 1–2',
    desc: 'Full survey of all HVAC equipment: real consumption measurement (kWh/month per unit), operating schedule analysis, setpoint vs. actual temperature, and maintenance status. We deliver a report establishing the energy baseline and identifying the highest-waste points in the system.',
  },
  {
    titulo: 'VRF / VRV System Diagnostics',
    subtitulo: 'Error history analysis',
    desc: 'Error log and operational data read-out via manufacturer software (Daikin D-Checker, Mitsubishi PAC-SIF, LG LGAP). We identify inefficient operating modes, mis-calibrated expansion valves, refrigerant leaks, and dirty or degraded outdoor-unit fans that can increase consumption by 10–30%.',
  },
  {
    titulo: 'Savings Plan & Financial Projection',
    subtitulo: 'ROI · IRR · Simple & discounted payback',
    desc: 'For each measure identified in the audit: description, required investment, estimated savings in kWh/year and CLP at current electricity rates, simple and discounted payback, and CO₂ emission reduction. All projections use actual Chilean tariff rates (BT-1 > $170 CLP/kWh in 2025).',
  },
  {
    titulo: 'Improvement Implementation',
    subtitulo: 'Execution of identified measures',
    desc: 'We carry out the improvements found in the audit: heat exchanger cleaning, refrigerant recharge, replacement with high-efficiency controllers, VFD installation on AHU motors and cooling towers, and setpoint and schedule updates in the BMS.',
  },
  {
    titulo: 'Measurement & Verification (M&V)',
    subtitulo: 'IPMVP Option A/B',
    desc: 'We install energy sub-meters on HVAC circuits to verify actual savings after improvements. Monthly M&V reports are delivered per the IPMVP protocol (International Performance Measurement and Verification Protocol) — accepted by insurers and green finance institutions for savings accreditation.',
  },
  {
    titulo: 'Law 21.305 Compliance',
    subtitulo: 'Large energy consumers · SGE / ISO 50001',
    desc: 'Advisory for companies consuming more than 50 TOE/year: Energy Management System (SGE, ISO 50001-aligned) implementation, Energy Consumption Report (RCE) for the Ministry of Energy, and Energy Management Programs (PGE) with the HVAC baseline. Penalties for non-compliance reach 500 UTM.',
  },
]

const CASES = [
  { type: 'Office Building', area: '5,000 m²', before: '420,000 kWh/year', after: '290,000 kWh/year', saving: '31%', measure: 'VRF controller upgrade + coil cleaning + setpoint correction' },
  { type: '4-Star Hotel', area: '8,500 m²', before: '680,000 kWh/year', after: '460,000 kWh/year', saving: '32%', measure: 'VFD on AHU pumps + schedule optimization + refrigerant recharge' },
  { type: 'Supermarket', area: '2,800 m²', before: '950,000 kWh/year', after: '650,000 kWh/year', saving: '32%', measure: 'R-404A → R-449A migration + electronic expansion valves + door seal replacement' },
]

const STATS = [
  { valor: '20–40%', etiqueta: 'Typical HVAC consumption reduction' },
  { valor: '1–3 yrs', etiqueta: 'Payback on mid-range improvements' },
  { valor: 'ISO 50001', etiqueta: 'SGE certification standard' },
  { valor: 'Law 21.305', etiqueta: 'Compliance advisory for >50 TOE/year' },
]

const FAQ = [
  {
    question: 'How much can an older VRF system\'s consumption be reduced?',
    answer: 'A VRF system installed more than 5 years ago without proper maintenance can be consuming 20–40% more than it should. The most common causes: dirty filters (reduces airflow, forces the compressor to work longer), dirty outdoor unit heat exchanger (raises condensing temperature +3–5°C — equivalent to +10–15% consumption), refrigerant leaks, and setpoints set too low for actual use. Fixing these costs a fraction of equipment replacement.',
  },
  {
    question: 'What is Law 21.305 and how does it affect my company in Chile?',
    answer: 'Chile\'s Energy Efficiency Act (Law 21.305, enacted 2021) establishes obligations for "large energy consumers" — companies with annual consumption above 50 TOE (tonnes of oil equivalent, roughly 580,000 kWh/year of electricity). These companies must: implement an Energy Management System (SGE, ISO 50001-alignable), report annual energy consumption to the Ministry of Energy (RCE), and set Energy Management Programs (PGE). Non-compliance penalties reach 500 UTM (≈ CLP 30M / USD 32K in 2025). International companies with Chilean facilities are subject to the same requirements.',
  },
  {
    question: 'How much does an HVAC energy audit cost in Chile?',
    answer: 'An ASHRAE Level 1 audit (site walk-through, invoice review, low-cost measure identification) for a 1,000–5,000 m² building costs UF (Unidad de Fomento, Chile\'s inflation-indexed unit, ≈ USD 33 in 2025) 20–60. A Level 2 audit (per-equipment consumption measurement, detailed analysis, savings projections) for the same size costs UF 60–150. For buildings over 10,000 m² or industrial operations, cost is quoted based on number of systems and equipment.',
  },
  {
    question: 'Which technology delivers the greatest energy savings in commercial HVAC?',
    answer: 'In comfort HVAC (offices, hotels, retail), high-efficiency VRF systems (inverter, EER/COP > 4.5) consume up to 40% less than constant-speed equivalents. In commercial refrigeration, the biggest lever is migrating to low-GWP refrigerants with electronic expansion valve controllers and centralized monitoring. For chilled water systems, VFD installation on compressors and pumps typically cuts consumption 25–50% at partial loads.',
  },
  {
    question: 'How long does the payback period typically take for HVAC energy efficiency investments?',
    answer: 'Low-cost measures (equipment cleaning, setpoint correction, schedule adjustments): immediate payback — no significant investment, only labor cost. Mid-range investments (refrigerant recharge, controller replacement, motor VFDs): typical payback 1–3 years. Equipment replacement (new high-efficiency VRF): 4–8 years depending on energy price and usage profile. At Chile\'s current commercial electricity rate (BT-1 tariff, >$170 CLP/kWh), efficiency projects are highly attractive financially.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/en/services/` },
        { '@type': 'ListItem', position: 3, name: 'Energy Efficiency', item: `${siteUrl}/en/services/energy-efficiency/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/energy-efficiency/#service`,
      name: 'HVAC Energy Efficiency in Chile — Audit & Law 21.305 Compliance',
      description: 'Energy audit, diagnostics, and improvement of HVAC and refrigeration systems in Chile. 20–40% electricity reduction. Law 21.305 SGE compliance support.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'HVAC Energy Efficiency',
      url: `${siteUrl}/en/services/energy-efficiency/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/energy-efficiency/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnServiceEnergyEfficiencyPage() {
  return (
    <>
      <Script id="ld-energy-efficiency-en" type="application/ld+json">
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
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Request an audit
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/en/services/" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
            <span>›</span>
            <span>Energy Efficiency</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Service · Energy Audit · Law 21.305 · Consumption Reduction
          </p>
          <h1 className="sp-hero-title">HVAC Energy Efficiency<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            We audit your HVAC system&apos;s real consumption, identify inefficiencies,
            and implement improvements that reduce electricity use 20–40% —
            with documented ROI and Law 21.305 compliance support.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta">Request an Energy Audit</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: 'clamp(24px,4vw,56px)', flexWrap: 'wrap', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 300, color: 'var(--accent)', letterSpacing: '.02em' }}>
                {s.valor}
              </span>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', lineHeight: 1.4 }}>
                {s.etiqueta}
              </span>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            What we do
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            From diagnosis to verified improvement
          </h2>
          <div className="sp-aplic-grid">
            {SERVICES.map((s, i) => (
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

        {/* Reference cases */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)', background: 'var(--bg2)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
            Reference cases (anonymised data)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {CASES.map((c, i) => (
              <div key={i} style={{ background: 'var(--bg2)', padding: '20px' }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 12 }}>
                  {c.type} · {c.area}
                </div>
                <div style={{ display: 'flex', gap: 16, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginBottom: 2 }}>Before</div>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '16px', color: 'var(--dim)' }}>{c.before}</div>
                  </div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '18px', color: 'var(--border)', alignSelf: 'center' }}>→</div>
                  <div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--accent)', marginBottom: 2 }}>After</div>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '16px', color: 'var(--accent)' }}>{c.after}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '24px', color: 'var(--accent)', lineHeight: 1 }}>−{c.saving}</div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)' }}>consumption</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                  {c.measure}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-article CTA band */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg2)', padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            How much are you overspending?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Find out your savings potential
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 auto 24px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, lineHeight: 1.65 }}>
            Share your equipment list, location, and the last 3 months of electricity bills.
            We will identify your savings potential at no cost.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta">Request a free assessment</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Savings, Law 21.305, and costs
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
            <Link href="/en/services/commercial-refrigeration/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Commercial Refrigeration →
            </Link>
            <Link href="/en/services/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All services →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Get a free quote within 72 hours
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Request an HVAC energy audit
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            We need: equipment type and quantity, the last 3 months of electricity bills,
            and your facility&apos;s operating schedule. That is enough to identify the savings potential.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=eficiencia#contacto" className="sp-hero-cta">Request energy audit</Link>
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
