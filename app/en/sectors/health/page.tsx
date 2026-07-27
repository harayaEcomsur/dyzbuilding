import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Healthcare HVAC in Chile — Hospitals, Surgical Suites & Cleanrooms',

  description:
    'Precision HVAC for hospitals and clinics in Chile: surgical theaters (ISO 5, HEPA H14, laminar flow), ICU, isolation rooms, pharmacies, and imaging areas. MINSAL Res. N°283 and ASHRAE 170 compliance.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/health/`,
    languages: {
      en: `${siteUrl}/en/sectors/health/`,
      es: `${siteUrl}/sectores/salud/`,
    },
  },
  openGraph: {
    title: 'Healthcare HVAC Chile — OR, ICU, Cleanrooms, ASHRAE 170 | D&Z Building',
    description:
      'HVAC for Chilean hospitals: ISO 5 surgical theaters, ICU, isolation rooms, cleanroom pharmacy. MINSAL / ASHRAE 170 / ISO 14644 compliance.',
    url: `${siteUrl}/en/sectors/health/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const AREAS = [
  {
    titulo: 'Surgical Theaters (Operating Rooms)',
    norma: 'ISO 5 / Class 100',
    desc: 'Unidirectional laminar flow systems with HEPA H14 filtration, temperature control ±0.5°C, relative humidity 45–55% RH, and positive pressure of at least +8 Pa relative to adjacent zones. Compliant with MINSAL Res. Exenta N°283 and ASHRAE 170. We produce laminar flow canopy sizing calculations and pressure cascade diagrams for regulatory submission.',
  },
  {
    titulo: 'Intensive Care Units (ICU)',
    norma: 'ISO 7 / Class 10,000',
    desc: 'Minimum 6 fresh air changes per hour, dual-stage filtration (F7 pre-filter + H13 terminal), pressure configurable positive (immunocompromised) or negative (infectious isolation), and continuous monitoring of temperature (21–24°C) and humidity (40–60% RH). Pressure differential alarms at nursing station and central control.',
  },
  {
    titulo: 'Infectious Isolation Rooms',
    norma: 'Verified negative pressure',
    desc: 'Negative pressure rooms (−8 Pa) with a transitional anteroom at neutral pressure, 100% exhaust HEPA filtration (no recirculation), and real-time differential pressure alarms at the nursing station. Used for airborne-precaution patients (tuberculosis, COVID, measles). We supply and install the monitoring hardware and connect to the hospital BAS.',
  },
  {
    titulo: 'Pharmacy & Clinical Laboratory',
    norma: 'ISO 7–8 / GMP',
    desc: 'Sterile compounding rooms and clinical labs require laminar flow workstations, stable temperature (18–22°C), controlled humidity (<55% RH), and positive differential pressure. Design follows GMP (Good Manufacturing Practice) guidelines for sterile preparations. We provide IQ/OQ/PQ qualification documentation where required.',
  },
  {
    titulo: 'Diagnostic Imaging (MRI, CT, PET-CT)',
    norma: 'Equipment temperature spec · <45 dB',
    desc: 'MRI, CT, and PET-CT rooms require strict temperature control (18–22°C) to protect magnets and detectors. We specify precision units with low acoustic noise (< 45 dB) to avoid interference with sensitive imaging equipment. Remote condenser placement prevents vibration transmission through the structure.',
  },
  {
    titulo: 'Morgue & Pathology',
    norma: 'T 2–6°C · Negative pressure',
    desc: 'Dedicated refrigeration systems for mortuary chambers (2–6°C), autopsy rooms with forced exhaust at 10 air changes per hour and negative pressure for aerosol containment. Exhaust passes through HEPA terminal filtration before discharge. Design complies with MINSAL guidelines for pathology facilities.',
  },
]

const STATS = [
  { valor: 'ISO 5', unidad: 'OR cleanroom', etiqueta: 'Surgical theater classification' },
  { valor: 'HEPA H14', unidad: '99.995%', etiqueta: 'Filtration efficiency (OR / ICU)' },
  { valor: '±0.5°C', unidad: 'T control', etiqueta: 'Surgical suite precision' },
  { valor: 'ASHRAE 170', unidad: 'MINSAL N°283', etiqueta: 'Regulatory compliance' },
]

const FAQ = [
  {
    question: 'Which regulations govern HVAC in Chilean hospital surgical theaters?',
    answer:
      "Surgical theaters in Chile are primarily governed by MINSAL Resolución Exenta N°283 (\"Manual de Normas para Establecimientos Hospitalarios\"), which sets airflow rates, cleanroom classification, differential pressure requirements, and filtration standards. Additionally, ASHRAE 170 (Ventilation of Health Care Facilities) and ISO 14644 cleanroom standards apply. For public hospital projects, the Ministerio de Salud's technical specifications for infrastructure works (MINSAL UNIH standards) also define HVAC requirements.",
  },
  {
    question: 'What is a cleanroom ISO classification and how is it achieved in an OR?',
    answer:
      'ISO cleanroom classification measures maximum particle concentration per cubic meter. A standard surgical theater requires ISO 5 (maximum 3,520 particles ≥0.5 μm/m³) in the operative field zone. This is achieved through unidirectional laminar airflow, HEPA H14 terminal filtration, 20–30 air changes per hour, and controlled personnel access. We provide clean room qualification protocols (IQ/OQ/PQ) and particle count measurements to certify classification after installation.',
  },
  {
    question: 'How much does it cost to install HVAC in a surgical theater in Chile?',
    answer:
      'A standard surgical theater (50–80 m²) with laminar flow canopy, HEPA H14 filtration, differential pressure control, and monitoring has an installed cost of approximately UF 1,500–4,000, depending on configuration and existing civil infrastructure. Renovation projects in active hospitals are more expensive than new construction due to work-area access restrictions, protective partitions, night and weekend work, and infection-control protocols.',
  },
  {
    question: 'Can you provide BIM modeling for a hospital HVAC project?',
    answer:
      "Yes. We offer complete BIM HVAC modeling (LOD 300–400) for healthcare projects, including coordination with architecture, structure, electrical, medical gases, and fire protection disciplines. We work with Revit MEP and deliver IFC models compatible with the owner's BIM platform. For public hospital tenders that require BIM Level 2 deliverables, we produce the required documentation in the specified formats.",
  },
  {
    question: 'Can you work in operational hospital facilities without disrupting clinical activity?',
    answer:
      'Yes. We have experience in active clinical environments and follow strict protocols: sealed work zones, dust barriers, night or weekend work schedules to avoid disrupting clinical operations, and coordination with the infection control team to prevent cross-contamination during installation. All staff working in healthcare environments complete the required hospital induction and use appropriate PPE.',
  },
  {
    question: 'Do you service both public and private hospitals in Chile?',
    answer:
      'Yes — both sectors. We have experience with public hospitals (Servicio de Salud facilities, primary care centers) and private healthcare (clinics, medical centers, private laboratories). We manage public tender processes through Chile Compra / Mercado Público and handle private contracts directly. We prepare technical documentation in English when required by international hospital consultants or lenders funding the project.',
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
        { '@type': 'ListItem', position: 3, name: 'Healthcare', item: `${siteUrl}/en/sectors/health/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/health/#service`,
      name: 'Healthcare HVAC — Hospitals, Surgical Theaters & Cleanrooms in Chile',
      description:
        'HVAC design, BIM engineering, installation, and maintenance for Chilean hospitals and clinics: surgical theaters, ICU, cleanrooms, pharmacy, and critical areas. MINSAL N°283 / ASHRAE 170 / ISO 14644 compliance.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Healthcare HVAC',
      url: `${siteUrl}/en/sectors/health/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/health/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorHealthPage() {
  return (
    <>
      <Script id="ld-health-en" type="application/ld+json">
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
            <span>Healthcare</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Hospitals, Clinics &amp; Medical Centers
          </p>
          <h1 className="sp-hero-title">Healthcare HVAC in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Precision HVAC for surgical theaters, ICUs, cleanroom pharmacies, and diagnostic imaging —
            built to MINSAL and ASHRAE 170 standards for Chilean hospitals and clinics.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}<span style={{ fontSize: '14px', marginLeft: 2, opacity: 0.8 }}>{s.unidad}</span>
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Clinical areas */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Clinical areas
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Healthcare HVAC Applications
          </h2>
          <div className="sp-aplic-grid">
            {AREAS.map((area, i) => (
              <div key={i} className="sp-aplic-item">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
                    {area.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                    {area.norma}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BIM callout */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                BIM HVAC Modeling
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                Hospital projects require BIM coordination across architecture, structure, medical gases, electrical, and fire protection.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                We work with Revit MEP and deliver IFC models (LOD 300–400) compatible with the owner&apos;s BIM platform or MINSAL/MINVU infrastructure standards.
              </p>
            </div>
            <Link href="/en/#contacto" className="sp-hero-cta">
              Enquire about BIM HVAC →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Regulations, costs, and processes
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
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Planning a hospital or clinic project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We prepare HVAC engineering documentation in English for international consultants
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            We prepare HVAC engineering documentation in English for international consultants, lenders, and hospital groups operating in Chile.
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
