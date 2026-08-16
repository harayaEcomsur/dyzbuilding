import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Turnkey HVAC Projects in Chile — Engineering, Supply & Installation',

  description:
    'Turnkey HVAC contractor in Chile: BIM HVAC engineering, equipment supply, installation, and commissioning for commercial and industrial projects. Hotels, offices, clinics, data centers, retail. Nationwide coverage.',
  alternates: {
    canonical: `${siteUrl}/en/services/turnkey-projects/`,
    languages: {
      en: `${siteUrl}/en/services/turnkey-projects/`,
      es: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
    },
  },
  openGraph: {
    title: 'Turnkey HVAC Projects Chile — BIM Engineering to Commissioning | D&Z Building',
    description:
      'One HVAC contractor for engineering, supply, installation, and commissioning in Chile. BIM HVAC Modeling (Revit MEP LOD 300), certified crew, 12-month warranty. Hotels, offices, data centers.',
    url: `${siteUrl}/en/services/turnkey-projects/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const PHASES = [
  {
    num: '01',
    titulo: 'Site Survey & Preliminary Design',
    desc: 'Technical site visit, thermal load analysis (ASHRAE CLTD method or HAP/Trace700 software), and system proposal with technology alternatives and cost reference. This phase is free for projects above UF 500 (Unidad de Fomento, Chile\'s inflation-indexed unit, ≈ USD 33 in 2025) (≈ USD 16,500).',
  },
  {
    num: '02',
    titulo: 'Detailed Engineering & BIM HVAC',
    desc: 'Engineer-stamped calculation report, equipment layout drawings, duct and refrigerant pipe routing in Revit MEP (LOD 300), clash coordination with structural and other disciplines, and technical specifications for tender or permitting.',
  },
  {
    num: '03',
    titulo: 'Equipment & Materials Supply',
    desc: 'Direct procurement of VRF systems, AHUs, chillers, condensers, control panels, and installation materials. We work with Daikin, Mitsubishi Electric, LG, and Carrier — sourced without inflated intermediary margin.',
  },
  {
    num: '04',
    titulo: 'Installation',
    desc: 'Equipment mounting, refrigerant piping, control cabling, minor civil works (penetrations, equipment bases, fire seals). Our own certified installation crew — we do not subcontract the installation.',
  },
  {
    num: '05',
    titulo: 'Commissioning & Startup',
    desc: 'Leak tests, refrigerant charging, airflow balancing, controller programming, and verification of design parameters. We deliver a signed commissioning protocol for building handover.',
  },
  {
    num: '06',
    titulo: 'Training & Warranty',
    desc: 'Operations and maintenance team training, delivery of O&M manuals. 12-month installation warranty. Optional tie-in to a preventive maintenance contract to preserve manufacturer warranty.',
  },
]

const PROJECT_TYPES = [
  { type: 'Office Buildings', range: 'UF 800 – 25,000', tech: 'VRF + HRV + BMS' },
  { type: 'Hotels & Resorts', range: 'UF 5,000 – 80,000', tech: 'Fan-coil + chiller + VRF suites' },
  { type: 'Clinics & Medical Centers', range: 'UF 3,000 – 60,000', tech: 'HEPA + differential pressure + redundancy' },
  { type: 'Supermarkets & Retail', range: 'UF 2,000 – 30,000', tech: 'VRF + integrated commercial refrigeration' },
  { type: 'Data Centers', range: 'UF 10,000 – 200,000', tech: 'CRAC/CRAH + free cooling + N+1 redundancy' },
  { type: 'Industrial & Manufacturing', range: 'UF 1,500 – 50,000', tech: 'Industrial ventilation + splits + evaporative' },
]

const STATS = [
  { valor: 'BIM HVAC', unidad: 'LOD 300', etiqueta: 'Revit MEP engineering' },
  { valor: '12 months', etiqueta: 'Installation warranty' },
  { valor: 'Own crew', etiqueta: 'No subcontracting installation' },
  { valor: 'All Chile', etiqueta: 'Nationwide coverage' },
]

const FAQ = [
  {
    question: 'What exactly is included in a turnkey HVAC project?',
    answer: 'A turnkey HVAC project includes: detailed engineering with a stamped calculation report, layout drawings and technical specifications, supply of all equipment and materials, complete installation (mounting, control cabling, refrigerant piping, ductwork), startup and commissioning, and operations team training. What is NOT included: major civil works (partitions, slabs, water tanks), power electrical installations (power feeds to panels) — these are the owner\'s or general contractor\'s responsibility.',
  },
  {
    question: 'How long does a turnkey HVAC project take in Chile?',
    answer: 'It depends on scale. A 500–1,500 m² office fit-out takes 6–10 weeks (2 weeks engineering, 2–3 weeks equipment lead time, 2–4 weeks installation). A mid-size hotel or clinic can take 4–8 months. The biggest timeline driver is imported equipment lead time — VRF systems and chillers typically have 8–16 weeks lead time from the manufacturer in Asia.',
  },
  {
    question: 'Can you participate in public sector tenders in Chile?',
    answer: 'Yes. We participate in public procurement tenders (Mercado Público / Chile Compra) for public buildings, MINEDUC educational facilities, and municipalities. We have experience preparing technical and economic proposals per tender requirements, including technical reports, solution proposals, work programs, and bond/guarantee documentation.',
  },
  {
    question: 'Do you subcontract installation, or do you have your own crew?',
    answer: 'We have our own installation crew. We do not subcontract the installation labor — quality is best controlled with direct employees. Our installers are certified in refrigeration and HVAC, and trained in the quality and safety standards required for proper commissioning. For large-scale projects (hotels), we can supplement with our network of vetted subcontractors.',
  },
  {
    question: 'What warranties does D&Z Building provide on a turnkey project?',
    answer: 'We provide a 12-month installation warranty (covering installation, assembly, and commissioning defects) plus we process the manufacturer warranty for each piece of equipment (typically 2–5 years depending on brand). For mission-critical infrastructure (server rooms), we can offer 24/7 SLA maintenance and technical response. We recommend connecting the project to a preventive maintenance contract to keep manufacturer warranties valid.',
  },
  {
    question: 'Can you execute HVAC projects outside the Santiago metro area?',
    answer: 'Yes. We have project experience in Antofagasta, La Serena/Coquimbo, Valparaíso, O\'Higgins, Maule, Bío-Bío, Araucanía, and Magallanes. For regional projects, accommodation and travel costs for the technical team are included in the budget. Equipment lead times are the same as in Santiago — units ship directly to site from regional distributors or from Santiago.',
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
        { '@type': 'ListItem', position: 3, name: 'Turnkey Projects', item: `${siteUrl}/en/services/turnkey-projects/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/turnkey-projects/#service`,
      name: 'Turnkey HVAC Projects in Chile — Engineering, Supply & Installation',
      description: 'Turnkey HVAC contractor in Chile: BIM HVAC engineering (Revit MEP LOD 300), equipment supply, installation by certified crew, commissioning, and 12-month warranty. Commercial and industrial projects nationwide.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Turnkey HVAC Projects',
      url: `${siteUrl}/en/services/turnkey-projects/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/turnkey-projects/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnServiceTurnkeyProjectsPage() {
  return (
    <>
      <Script id="ld-turnkey-en" type="application/ld+json">
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
            <Link href="/?servicio=0#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Request a quote
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
            <span>Turnkey Projects</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Service · BIM HVAC · Engineering · Supply · Installation
          </p>
          <h1>Turnkey HVAC Projects<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            One HVAC contractor for the full project: BIM HVAC engineering, direct equipment procurement,
            certified installation crew, and commissioning — from site survey to handover.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Request a Project Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="sp-section" style={{ paddingTop: 'clamp(20px,2.5vw,32px)', paddingBottom: 'clamp(20px,2.5vw,32px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2vw,24px)', color: 'var(--accent)', letterSpacing: '-.01em', marginBottom: 2 }}>
                  {s.valor}
                </div>
                {s.unidad && (
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 4 }}>
                    {s.unidad}
                  </div>
                )}
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)' }}>
                  {s.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Process
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 40px', color: 'var(--text)' }}>
            From engineering to commissioning
          </h2>
          <div className="sp-aplic-grid">
            {PHASES.map((phase) => (
              <div key={phase.num} className="sp-aplic-item">
                <span style={{ color: 'var(--accent)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>{phase.num}</span>
                <strong style={{ display: 'block', color: 'var(--accent)', marginBottom: 6 }}>{phase.titulo}</strong>
                <p style={{ color: 'var(--dim)', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project types */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)' }}>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
              Project types and reference budget ranges (excl. VAT)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1px', background: 'var(--border)' }}>
              {PROJECT_TYPES.map((t, i) => (
                <div key={i} style={{ background: 'var(--bg)', padding: '18px 16px' }}>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                    {t.type}
                  </div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '18px', color: 'var(--accent)', letterSpacing: '-.01em', marginBottom: 4 }}>
                    {t.range}
                  </div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)' }}>
                    {t.tech}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', margin: '12px 0 0' }}>
              * Reference ranges based on projects executed 2022–2024. Final cost depends on technical specifications, equipment brand, and site conditions.
            </p>
          </div>
        </div>

        {/* BIM HVAC callout */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                BIM HVAC Modeling
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                All our turnkey projects are modeled in Revit MEP (LOD 300–400).
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                BIM coordination reduces installation time by up to 25% by detecting clashes before construction begins.
                We deliver IFC models for integration with the architect&apos;s or owner&apos;s BIM platform.
                Ideal for projects where the general contractor requires BIM.
              </p>
            </div>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Inquire about BIM HVAC →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Scope, timelines &amp; warranties
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

        {/* Related services */}
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
            <Link href="/en/services/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All services →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            First step is free
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Tell us about your project
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            For projects above UF 500, we offer a free technical meeting and indicative quote.
            We need: type of space, floor area, number of floors, and intended use.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Request a Project Quote</Link>
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
