import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Industrial & Commercial Ventilation in Chile — Extraction & Air Renewal',

  description:
    'Industrial and commercial ventilation systems in Chile: commercial kitchen extraction (NFPA 96), parking CO/NOₓ systems, HRV/ERV heat recovery, ATEX extraction, cleanrooms (ISO 14644), and large-space ventilation. DS 594 and SEREMI health permit support.',
  alternates: {
    canonical: `${siteUrl}/en/services/industrial-ventilation/`,
    languages: {
      en: `${siteUrl}/en/services/industrial-ventilation/`,
      es: `${siteUrl}/servicios/ventilacion-industrial/`,
    },
  },
  openGraph: {
    title: 'Industrial Ventilation Chile — ATEX, Kitchens, Cleanrooms, HRV | D&Z Building',
    description:
      'Forced ventilation, industrial extraction, HRV heat recovery, and air quality control for industry, hospitality, and healthcare in Chile. DS 594, NFPA 96, ATEX compliance.',
    url: `${siteUrl}/en/services/industrial-ventilation/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APPLICATIONS = [
  {
    titulo: 'Commercial & Industrial Kitchens',
    norma: 'NFPA 96 · ASHRAE 154',
    desc: 'Extraction hoods with grease filters, 16-gauge stainless steel ductwork, high-static-pressure centrifugal fans (500–1,500 Pa), and makeup air units for restaurants, hotels, casinos, hospitals, and industrial canteens. Airflow calculations per DS 594 and NFPA 96.',
  },
  {
    titulo: 'Parking Garage Ventilation',
    norma: 'DS 594 · CO ≤ 25 ppm',
    desc: 'Jet-fan impulse ventilation systems with automatic CO/NO₂ sensor control. The system activates at 15 ppm CO and extracts until levels fall below 25 ppm (OSHA/DS 594 limit). For garages with more than 3 levels, CFD simulation is recommended to validate airflow patterns.',
  },
  {
    titulo: 'Heat Recovery Ventilators (HRV/ERV)',
    norma: 'ASHRAE 62.1 · Efficiency > 75%',
    desc: 'Sensible (HRV) and enthalpy (ERV) heat recovery units for offices, hotels, and clinics. Allows 100% fresh air renewal with less than 25% loss of HVAC energy. Integration with existing VRF and fan-coil systems via Modbus/BACnet controllers.',
  },
  {
    titulo: 'ATEX Industrial Extraction',
    norma: 'ATEX Directive 2014/34/EU',
    desc: 'Explosion-proof (ATEX-certified) fans and ductwork for plants with potentially explosive atmospheres: solvent storage, agrochemical warehouses, gas processing facilities. Zone classification design (Zone 1/2 for gases, Zone 21/22 for dust) with EX-certified equipment selection.',
  },
  {
    titulo: 'Cleanrooms & Technical Rooms',
    norma: 'ISO 14644 · GMP',
    desc: 'Ventilation systems for pharmaceutical cleanrooms (ISO 7–8), laboratories (HEPA + differential pressure control), and server rooms (±1°C precision with CRAC/CRAH). Air change calculations per ISO classification and particle count validation for GMP certification.',
  },
  {
    titulo: 'Large-Space Ventilation',
    norma: 'ASHRAE 62.1 · DS 594',
    desc: 'Industrial warehouses, manufacturing plants, and distribution centers with assisted natural ventilation (louvered panels) or mechanical ventilation with indirect evaporative coolers for high heat-load zones. Sensible heat gain calculations and air distribution design for working environments.',
  },
]

const ADVANTAGES = [
  { titulo: 'CFD Simulation Available', desc: 'Computational fluid dynamics (CFD) simulation for parking garages, warehouses, and complex-geometry spaces where empirical design is insufficient.' },
  { titulo: 'BIM HVAC Engineering', desc: 'Revit MEP modeling for coordination with structural, architectural, and other building systems. Clash detection before construction.' },
  { titulo: 'Automatic Controls', desc: 'BMS integration with CO/NO₂ sensors, smoke detectors, and Modbus/BACnet controllers for autonomous operation.' },
  { titulo: 'Regulatory Compliance', desc: 'We know DS 594, NFPA 96, ASHRAE 62.1, ATEX, and SEREMI health permit requirements. We prepare and accompany the permitting process.' },
]

const STATS = [
  { valor: 'ATEX', etiqueta: 'Explosion-proof equipment' },
  { valor: 'CFD', etiqueta: 'Simulation for complex spaces' },
  { valor: '75%+', etiqueta: 'HRV/ERV heat recovery efficiency' },
  { valor: 'ISO 14644', etiqueta: 'Cleanroom classification' },
]

const FAQ = [
  {
    question: 'How many air changes does a commercial kitchen in Chile need?',
    answer: 'Per NFPA 96 and ASHRAE 154, a commercial kitchen with open-flame cooking equipment needs 30–60 air changes per hour, depending on cooking load. The exhaust must exceed the supply (negative pressure in the kitchen) to prevent odors from migrating to the dining area. Exact airflow is calculated from installed cooking capacity (BTU/h) and equipment type (fryer, grill, combi-oven).',
  },
  {
    question: 'What regulations govern parking garage ventilation in Chile?',
    answer: 'Enclosed parking in Chile is governed by DS 594 (Sanitary Conditions for Workplaces), which sets a CO limit of 25 ppm for 8-hour exposure. The OGUC (General Urban and Construction Ordinance) requires ventilation in enclosed parking for more than 5 vehicles. For facilities with more than 50 vehicles, NFPA 88A is recommended along with automatic CO/NO₂ sensors.',
  },
  {
    question: 'What is an HRV and why does an office building in Chile need one?',
    answer: 'An HRV (Heat Recovery Ventilator) renews indoor air without discarding the energy used to condition it. It extracts stale interior air and, before expelling it, transfers its heat (or coolness) to incoming fresh air — at 70–85% efficiency. In an air-conditioned office, an HRV can reduce ventilation energy consumption by 30–40% compared to direct exhaust systems.',
  },
  {
    question: 'What does a commercial kitchen ventilation system cost in Chile?',
    answer: 'An extraction hood with grease filters, stainless steel duct, centrifugal fan, and makeup air unit for a 30–60-seat restaurant kitchen costs approximately UF 120–350 (Unidad de Fomento, Chile\'s inflation-indexed unit, ≈ USD 33 in 2025), depending on duct run length, filter count, and whether odor treatment is required (activated carbon or UV filtration). For hotel or industrial canteen kitchens, the complete system can exceed UF 800.',
  },
  {
    question: 'What is an ATEX zone and how does it affect ventilation design?',
    answer: 'An ATEX zone (ATmosphere EXplosive) is an area where an explosive mixture of gases, vapors, or combustible dust with air can form. Zone classification (Zone 0/1/2 for gases, Zone 20/21/22 for dust) determines which equipment is permitted. In an ATEX zone, fans, motors, and control panels must hold EX certification (flame proof, pressurized, or intrinsically safe). Non-compliant installations can void the facility\'s insurance and create criminal liability in case of an incident.',
  },
  {
    question: 'Can you handle the SEREMI health permit for a kitchen or food facility?',
    answer: 'Yes. We prepare the ventilation calculation report, duct layout drawings, and technical memorandum in the format required by the regional SEREMI de Salud. The sanitary permit for commercial kitchens (resolución sanitaria) requires demonstrating that the extraction system meets minimum airflow rates and that grease cannot accumulate in the duct. We accompany the client throughout the permitting process.',
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
        { '@type': 'ListItem', position: 3, name: 'Industrial Ventilation', item: `${siteUrl}/en/services/industrial-ventilation/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/industrial-ventilation/#service`,
      name: 'Industrial & Commercial Ventilation in Chile',
      description: 'Industrial and commercial ventilation systems in Chile: kitchen extraction (NFPA 96), parking CO/NOₓ systems, HRV/ERV, ATEX extraction, cleanrooms (ISO 14644), and large-space ventilation. DS 594 and SEREMI health permit support.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Industrial and Commercial Ventilation',
      url: `${siteUrl}/en/services/industrial-ventilation/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/industrial-ventilation/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnServiceIndustrialVentilationPage() {
  return (
    <>
      <Script id="ld-ventilation-en" type="application/ld+json">
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
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
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
            <span>Industrial Ventilation</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Service · Industrial Extraction · HRV/ERV · ATEX · Cleanrooms
          </p>
          <h1>Industrial & Commercial<br />Ventilation in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Forced ventilation, industrial extraction, and air quality systems for kitchens,
            parking garages, warehouses, cleanrooms, and ATEX zones —
            engineered to DS 594, NFPA 96, ASHRAE 62.1, and ISO 14644.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">Request a Ventilation Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', display: 'flex', gap: 'clamp(24px,4vw,56px)', flexWrap: 'wrap' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 300, color: 'var(--accent)', letterSpacing: '.04em' }}>{s.valor}</span>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', letterSpacing: '.02em' }}>{s.etiqueta}</span>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Applications
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Systems we design and install
          </h2>
          <div className="sp-aplic-grid">
            {APPLICATIONS.map((a, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {a.titulo}
                  </h3>
                  <span style={{ color: 'var(--accent)', fontSize: '11px', fontFamily: "'Josefin Sans',sans-serif", letterSpacing: '.08em', textTransform: 'uppercase' }}>{a.norma}</span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Why D&Z Building
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Engineering that solves the complete problem
          </h2>
          <div className="sp-aplic-grid">
            {ADVANTAGES.map((v, i) => (
              <div key={i} className="sp-aplic-item">
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 10px' }}>
                  {v.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-article CTA band */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
              Need a ventilation design?
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 520, lineHeight: 1.5 }}>
              Tell us your space type, surface area, occupancy, and applicable regulations.
              We will send you a preliminary design and cost estimate within 48 hours.
            </p>
          </div>
          <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta" style={{ whiteSpace: 'nowrap' }}>
            Request a Quote →
          </Link>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Regulations, costs, and design
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
            Tell us about your project
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Technical quote in 48–72 hours
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            We need: space type, surface area, occupancy, and applicable regulations.
            With that we size the system and provide a cost estimate with no obligation.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">Request a Ventilation Quote</Link>
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
