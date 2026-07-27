import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'BIM HVAC Modeling in Chile — Revit MEP LOD 300',

  description:
    'BIM HVAC modeling for commercial and industrial projects in Chile: Revit MEP LOD 300, multi-discipline coordination, clash detection, IFC export, and Plan BIM Chile compliance for public tenders.',
  alternates: {
    canonical: `${siteUrl}/en/services/bim-hvac-modeling/`,
    languages: {
      en: `${siteUrl}/en/services/bim-hvac-modeling/`,
      es: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
    },
  },
  openGraph: {
    title: 'BIM HVAC Modeling Chile — Revit MEP, Clash Detection, IFC | D&Z Building',
    description:
      '3D BIM modeling of HVAC systems in Revit MEP: LOD 300 ductwork, piping, equipment, multi-discipline clash detection, and IFC export for BIM management platforms.',
    url: `${siteUrl}/en/services/bim-hvac-modeling/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const DELIVERABLES = [
  {
    titulo: '3D HVAC Model in Revit MEP',
    subtitulo: 'LOD 200–400 · Ductwork, piping, equipment',
    desc: 'Full three-dimensional modeling of all HVAC systems in Autodesk Revit MEP: supply/return air ductwork, refrigerant piping, chilled/hot water networks, indoor and outdoor units, fan coils, AHUs, chillers, and exhaust systems. Standard delivery at LOD 300 (defined geometry, location, orientation, and quantity); LOD 400 available for fabrication and advanced coordination.',
  },
  {
    titulo: 'Multi-Discipline MEP Coordination',
    subtitulo: 'Clash detection · Navisworks · BIM 360',
    desc: 'Coordination with other disciplines (structural, electrical, plumbing, fire protection) via clash detection in Autodesk Navisworks or BIM 360/ACC. Identification and resolution of conflicts before construction — reduced RFIs and field change orders. BIM coordination meetings with the project team as needed.',
  },
  {
    titulo: '2D Construction Drawings from the Model',
    subtitulo: 'Plans, sections, details, schematics',
    desc: 'Extraction of 2D construction drawings directly from the 3D model: HVAC floor plans by level, mechanical room sections and profiles, equipment connection details, piping isometrics, and equipment schedules with technical specifications. Full consistency guaranteed between 3D model and 2D drawings.',
  },
  {
    titulo: 'Quantities & Take-Offs from BIM',
    subtitulo: 'Automated quantities · Bidding basis · Full traceability',
    desc: 'Export of quantities and take-offs directly from the BIM model: duct lengths by cross-section and segment, pipe lengths by diameter and material, equipment quantities by type and capacity, diffuser and grille counts. Direct basis for tendering and costing, with full traceability to model elements.',
  },
  {
    titulo: 'IFC Export & OpenBIM Compatibility',
    subtitulo: 'IFC 2x3 / IFC 4 · BIM management · Open coordination',
    desc: 'Export of the HVAC model to IFC (Industry Foundation Classes) 2x3 or IFC 4 format for integration with BIM management platforms (BIM+, ACC, ProjectWise, Procore) and review by the BIM Manager or client. Compliance with EIR (Employer Information Requirements) when specified by the project.',
  },
  {
    titulo: 'BIM for Chilean Public Tenders',
    subtitulo: 'Plan BIM Chile · MINVU · MOP · Mercado Público',
    desc: "Chile's Plan BIM (MINVU/MOP) requires BIM on public building projects over UF 5,000 since 2020, with growing coverage toward smaller projects. D&Z Building delivers BIM-compliant HVAC models per Plan BIM Chile requirements: specified LOD, CDE (Common Data Environment) integration, and deliverables per the project's BEP (BIM Execution Plan).",
  },
]

const STATS = [
  { valor: 'LOD 300', etiqueta: 'Standard delivery level of detail' },
  { valor: 'Revit MEP', etiqueta: 'Primary BIM authoring tool' },
  { valor: 'IFC', etiqueta: 'Open format for BIM management' },
  { valor: 'Plan BIM Chile', etiqueta: 'Public project compliance (MINVU/MOP)' },
]

const FAQ = [
  {
    question: 'What is BIM HVAC modeling?',
    answer: 'BIM HVAC (Building Information Modeling for HVAC systems) is the process of creating an informed, three-dimensional digital model of all HVAC systems in a building: air ductwork, refrigerant or chilled-water piping, equipment (chillers, fan coils, VRF), and their technical attributes. Unlike traditional 2D drawings, a BIM model contains precise geometry, equipment specifications, fabrication data, and relationships with other building systems. This enables conflict detection with other disciplines before construction, reducing field changes and cost overruns.',
  },
  {
    question: 'What is LOD 300 in a BIM HVAC model?',
    answer: 'LOD (Level of Development or Level of Detail) defines how much information a BIM model element contains. LOD 300 means elements have geometry, location, orientation, quantity, and size defined with sufficient precision for coordination with other disciplines and quantity take-offs. LOD 200 is schematic (approximate shape only). LOD 400 includes fabrication details. For most design and coordination projects, LOD 300 is the standard required level.',
  },
  {
    question: 'Does BIM HVAC replace 2D drawings?',
    answer: 'It does not replace drawings — it generates them. 2D construction drawings (plans, sections, details) are extracted directly from the 3D model, guaranteeing full consistency between the three-dimensional model and the approved-for-construction drawings. The 3D model is the single source of truth; 2D drawings are views of the model. This workflow eliminates discrepancies that occur when 2D drawings are produced manually without a model reference.',
  },
  {
    question: 'Which projects in Chile require BIM?',
    answer: "Chile's Plan BIM (MINVU/MOP) establishes progressive BIM adoption for public projects: mandatory since 2020 for public building projects over UF 5,000; since 2022 for major public infrastructure. For private projects, BIM is required primarily by international project owners, retail chains, hotel groups, and shopping centers following global corporate standards. The Chilean private market adopts BIM voluntarily but at a growing pace.",
  },
  {
    question: 'How much does BIM HVAC modeling cost in Chile?',
    answer: 'Cost depends on project size and LOD required. For a single 1,000 m² office floor (LOD 300, no full MEP coordination): approximately UF 20–60 (≈ USD 660–2,000). For a full 10-story building with complete MEP coordination: UF 150–500. For a complex industrial or healthcare project with IFC export and BIM coordination meetings: UF 300–1,000+. BIM modeling typically represents 2–5% of total HVAC engineering fees, and the investment is recovered in reduced field change orders. UF (Unidad de Fomento) ≈ USD 33 in 2025.',
  },
  {
    question: 'Can you model HVAC if the project already has an architectural BIM model?',
    answer: 'Yes — that is the most common scenario. The architect provides the architectural model in Revit or IFC, and D&Z Building models the HVAC on top of that base. To coordinate with other MEP disciplines (electrical, plumbing), we need those discipline models in Revit or IFC to run clash detection. If other disciplines do not have BIM models, we can still model the HVAC on the architectural model and coordinate in 2D with the other disciplines.',
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
        { '@type': 'ListItem', position: 3, name: 'BIM HVAC Modeling', item: `${siteUrl}/en/services/bim-hvac-modeling/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/bim-hvac-modeling/#service`,
      name: 'BIM HVAC Modeling in Chile — Revit MEP LOD 300',
      description: 'BIM HVAC modeling for commercial and industrial projects in Chile: Revit MEP LOD 300, multi-discipline coordination, clash detection, IFC export, and Plan BIM Chile compliance.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'BIM HVAC Modeling',
      url: `${siteUrl}/en/services/bim-hvac-modeling/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/bim-hvac-modeling/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnServiceBimHvacPage() {
  return (
    <>
      <Script id="ld-bim-hvac-en" type="application/ld+json">
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
            <Link href="/?servicio=2#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
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
            <span>BIM HVAC Modeling</span>
          </div>
          <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            Revit MEP · LOD 300 · Clash Detection · IFC · Plan BIM Chile
          </div>
          <h1>BIM HVAC Modeling<br />in Chile</h1>
          <p className="sp-hero-sub">
            3D BIM modeling of HVAC systems in Revit MEP — ductwork, piping,
            equipment, multi-discipline coordination, and IFC export for
            commercial, industrial, and public projects in Chile.
          </p>
          <div className="sp-hero-ctas">
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '24px 20px', borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(16px,2vw,22px)', fontWeight: 400, color: 'var(--accent)', marginBottom: 6 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', lineHeight: 1.4 }}>
                {s.etiqueta}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            What we deliver
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            BIM HVAC modeling deliverables
          </h2>
          <div className="sp-aplic-grid">
            {DELIVERABLES.map((d, i) => (
              <div key={i} className="sp-aplic-item">
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                  {d.titulo}
                </h3>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
                  {d.subtitulo}
                </p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65, margin: 0 }}>
                  {d.desc}
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
            Common questions
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
            <Link href="/en/services/turnkey-projects/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Turnkey Projects →
            </Link>
            <Link href="/en/services/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All services →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Get a BIM HVAC quote
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Start your BIM HVAC model
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Share your architectural model or drawings, project scope, and LOD required.
            We will send you a proposal within 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Request a BIM HVAC quote</Link>
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
