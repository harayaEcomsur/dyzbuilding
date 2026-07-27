import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Schools and Universities in Chile — D&Z Building',
  description:
    'HVAC and ventilation for educational facilities in Chile: classrooms, auditoriums, libraries, gyms, and cafeterias. CO₂ air quality control, low-noise systems, and public tender (Mercado Público) experience.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/education/`,
    languages: {
      en: `${siteUrl}/en/sectors/education/`,
      es: `${siteUrl}/sectores/educacion/`,
    },
  },
  openGraph: {
    title: 'School & University HVAC Chile — Classrooms, Auditoriums, Labs | D&Z Building',
    description:
      'HVAC for Chilean educational facilities: CO₂ classroom air quality, silent auditorium systems, gym ventilation, and cafeteria kitchen extraction. Public tender experience.',
    url: `${siteUrl}/en/sectors/education/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Classrooms & Teaching Spaces',
    subtitulo: 'DS 594 · Indoor air quality · CO₂ < 1,000 ppm',
    desc: 'HVAC for classrooms with high, intermittent occupancy. CO₂ is the key indicator: unventilated classrooms exceed 2,000 ppm in under 30 minutes, directly impairing concentration. VRF or multi-split with mechanical controlled ventilation (MCV) to maintain CO₂ below 1,000 ppm. Occupied/unoccupied mode with CO₂ sensors for energy efficiency.',
  },
  {
    titulo: 'Auditoriums & Lecture Halls',
    subtitulo: 'High capacity · Low air velocity · NC-30 noise level',
    desc: 'Auditoriums for 200–1,500 people: air handling units (AHU) with displacement diffusers or low-velocity grilles to avoid background noise during presentations. HVAC noise level ≤ NC-30. F7 pre-filters for dust. Variable air volume (VAV) control based on actual occupancy, with pre-cooling mode before events.',
  },
  {
    titulo: 'Gyms & Sports Facilities',
    subtitulo: 'High thermal load · Forced ventilation · DS 594',
    desc: 'Sports spaces with highly variable thermal loads: during intensive use, human heat generation can exceed 60 W/m². Mechanical ventilation systems with forced roof extraction and outdoor air supply. For indoor pools, humid air treatment to prevent condensation on the structure and corrosion of steel components.',
  },
  {
    titulo: 'Libraries & Study Centers',
    subtitulo: 'Humidity control · Collection preservation · NC-25 silence',
    desc: 'Libraries with physical collections: temperature 18–20°C and relative humidity 45–55% to preserve books and documents. F7 filtration for dust and particles that deteriorate the archive. NC-25 noise level for quiet study. Reading room and shelving areas may require differentiated conditioning zones.',
  },
  {
    titulo: 'Cafeterias & School Kitchens',
    subtitulo: 'NFPA 96 · Extraction hoods · Make-up air',
    desc: 'School and university cafeterias: vapor and grease extraction above cooking equipment using hoods per NFPA 96. Make-up air system proportional to the extracted volume. Grease separators in ductwork, activated carbon filters for odor elimination. Sizing for peak concurrent occupancy during lunch rush.',
  },
  {
    titulo: 'Administrative Buildings & Classrooms',
    subtitulo: 'VRF · Multi-split · Public tender experience',
    desc: 'For state-funded facilities (MINEDUC, DGA, municipalities), HVAC is tendered via Mercado Público/Chile Compra. D&Z Building has experience preparing technical specifications and participating as an accredited supplier. VRF or multi-split systems with brand certification, technical catalogs, and factory warranty as required by public tender terms.',
  },
]

const STATS = [
  { valor: 'CO₂ < 1,000 ppm', etiqueta: 'Classroom air quality standard' },
  { valor: 'NC-25–30', etiqueta: 'Noise level for auditoriums & libraries' },
  { valor: 'DS 594', etiqueta: 'Chilean workplace health regulation' },
  { valor: 'Mercado Público', etiqueta: 'Public tender experience (MINEDUC)' },
]

const FAQ = [
  {
    q: 'How much ventilation does a classroom in Chile need?',
    a: 'DS 594 (Sanitary Conditions for Workplaces) requires sufficient ventilation to maintain CO₂ below levels affecting health. ASHRAE 62.1 recommends a minimum of 5 L/s per person plus 0.6 L/s per m² of floor area. For a classroom with 40 students in 70 m², that means approximately 250 L/s of outdoor air — a complete air change every 8–10 minutes. Without mechanical ventilation, CO₂ in full classrooms exceeds 2,000 ppm in under 30 minutes, measurably impairing attention and memory.',
  },
  {
    q: 'What HVAC system is best for a school or university?',
    a: 'The most common options for educational facilities are: (1) Conventional multi-split: lower upfront cost, suitable for small schools with few rooms; (2) VRF/VRV inverter: greater efficiency for long operating hours, per-room control, ideal for mid-to-large facilities; (3) Mechanical ventilation with heat recovery (HRV/ERV): a priority in cold southern Chile, recovering up to 75% of heat from extracted air. Many projects combine approaches: VRF for temperature conditioning + MCV for air quality.',
  },
  {
    q: 'How is HVAC tendered for public educational facilities in Chile?',
    a: 'Public establishments (municipal or DAEM-managed) must tender via Mercado Público/Chile Compra (mercadopublico.cl). Technical specifications typically require: specific brand and model or technical equivalent, manufacturer certification, minimum 12-month factory warranty, installation by brand-certified technicians, and an operation manual. D&Z Building can advise on preparing technical specifications and participate as an accredited supplier.',
  },
  {
    q: 'What regulations apply to school HVAC in Chile?',
    a: 'Key regulations include: (1) DS 594: sanitary conditions for workplaces — temperature, ventilation, noise; (2) MINEDUC resolution on school habitability: specifies comfort temperature requirements in classrooms; (3) ASHRAE 62.1: indoor air quality standard used as technical reference; (4) NFPA 96: for school cafeteria kitchens; (5) DS 4 Energy/MINVU: for new state-funded buildings. For cafeterias, DS 977 (Food Sanitation Regulation) also applies.',
  },
  {
    q: 'How much does it cost to add HVAC to a school or university in Chile?',
    a: 'Costs vary widely by facility type: a school with 10–20 classrooms using basic multi-split can cost UF 200–500 (Unidad de Fomento, Chile\'s inflation-indexed unit, ≈ USD 33 in 2025) (≈ USD 7K–16K). A mid-size facility with VRF and integrated MCV for 30–60 classrooms can cost UF 800–2,500. A university campus building or faculty building of 5,000–15,000 m² may require UF 3,000–15,000. These figures include equipment, installation, ductwork/piping, and commissioning — but exclude civil works.',
  },
  {
    q: 'Can you install HVAC in a school while classes are in session?',
    a: 'Yes. Most projects in educational facilities are phased to minimize disruption, using summer holidays (January–February in Chile), school recesses, and weekends. We work with school management to sequence installation without interrupting operations. For rooftop work or restricted-access areas during class hours, we coordinate access schedules with the facility administrator. Phased project planning at no extra cost is standard for educational clients.',
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
        { '@type': 'ListItem', position: 3, name: 'Education', item: `${siteUrl}/en/sectors/education/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/education/#service`,
      name: 'HVAC for Schools and Universities in Chile',
      description:
        'HVAC design, supply, and installation for Chilean educational facilities: classrooms, auditoriums, gyms, libraries, cafeterias, and administrative buildings. DS 594 compliance, CO₂ air quality control, and Mercado Público tender experience.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Educational HVAC and Ventilation',
      url: `${siteUrl}/en/sectors/education/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/education/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorEducationPage() {
  return (
    <>
      <Script id="ld-education-en" type="application/ld+json">
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
            <span>Education</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Schools · Universities · Technical Training · Municipal Facilities
          </p>
          <h1 className="sp-hero-title">HVAC for Schools &<br />Universities in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            HVAC and ventilation for Chilean educational facilities — CO₂-controlled
            classrooms, silent auditoriums, gym ventilation, cafeteria extraction,
            and public tender (Mercado Público) experience.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/sectors/" className="sp-hero-cta sp-hero-cta-outline">All Sectors</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(16px,2vw,24px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
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
            Educational HVAC Installations
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
            Classrooms, regulations, and tender process
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
            Working on an educational project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We design HVAC and ventilation for schools, universities, and public facilities — in English
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the facility type, number of classrooms, location, and any regulatory requirements.
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
