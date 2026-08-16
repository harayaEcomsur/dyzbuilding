import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Restaurants & Food Service in Chile',

  description:
    'Commercial kitchen ventilation (NFPA 96), make-up air, dining room VRF systems, and food processing HVAC in Chile. DS 594 compliance for kitchen staff and HACCP for production areas.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/food-service/`,
    languages: {
      en: `${siteUrl}/en/sectors/food-service/`,
      es: `${siteUrl}/sectores/restaurantes-alimentacion/`,
    },
  },
  openGraph: {
    title: 'Restaurant & Commercial Kitchen HVAC Chile — NFPA 96 | D&Z Building',
    description:
      'Grease and vapor extraction, make-up air, dining room VRF, and DS 594 compliance for commercial kitchens, hotel food service, corporate cafeterias, and food courts in Chile.',
    url: `${siteUrl}/en/sectors/food-service/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Grease & Vapor Extraction (NFPA 96)',
    subtitulo: 'Hoods · Stainless steel ducts · Grease filters',
    desc: 'NFPA 96 "Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations" governs the design of kitchen extraction systems with cooking appliances. D&Z Building designs Type I hoods with 18-gauge stainless steel ducts, face velocities of 0.25–0.51 m/s at the hood opening, and integrated fire suppression systems (Ansul or equivalent). Certification per NCh Nº 898 (food service premises).',
  },
  {
    titulo: 'Make-Up Air',
    subtitulo: 'Pressure balance · Thermal comfort for kitchen staff',
    desc: 'For every cubic meter of air extracted from the kitchen, the same volume of replacement air (make-up air) must enter. Without make-up air, the kitchen operates at excessive negative pressure: doors are hard to open, gas flames extinguish, and air from restrooms enters the kitchen. D&Z Building designs make-up air units with pre-heating or pre-cooling to maintain DS 594 compliance and staff comfort.',
  },
  {
    titulo: 'Dining Room & Restaurant Conditioning',
    subtitulo: 'VRF · Positive pressure · NC-35 · DS 594',
    desc: 'The dining room must be at positive pressure relative to the kitchen to prevent cooking odors and heat from reaching diners. D&Z Building designs VRF or fan-coil systems with integrated fresh air supply. The noise criterion for restaurants is NC-35 (normal conversation environment). For terraces and outdoor areas, air curtain systems or radiant heating are designed to suit local climate conditions.',
  },
  {
    titulo: 'Corporate Cafeterias & Institutional Dining',
    subtitulo: 'High peak occupancy · School cafeterias',
    desc: 'Corporate dining rooms and school canteens have distinct characteristics: very high occupancy density during the lunch peak (noon–2pm), kitchens with high latent heat loads, and SEREMI de Salud air quality requirements. D&Z Building has designed systems for 200–1,500-person dining facilities, sized for peak occupancy without oversizing.',
  },
  {
    titulo: 'Food Processing Areas (HACCP)',
    subtitulo: 'Controlled temperature · Humidity · Food-grade clean areas',
    desc: 'Food processing plants operating under HACCP (Hazard Analysis Critical Control Points) require controlled temperature and humidity in cutting, packaging, and intermediate storage areas. D&Z Building designs HVAC systems for meat processing, dairy, delicatessen, and canned food plants, meeting SAG (Chilean Agricultural Service) and SEREMI de Salud requirements.',
  },
  {
    titulo: 'Refrigerated Storage & Cold Rooms',
    subtitulo: '0°C–4°C · -18°C · DS 594 for food handlers',
    desc: 'Restaurant and cafeteria kitchens require refrigeration chambers (0°C–4°C for produce and dairy), freezer rooms (-18°C for meat and ice cream), and ambient dry storage. D&Z Building designs cold rooms with air- or water-cooled refrigeration, ensuring that kitchen staff accessing cold areas comply with DS 594 requirements (PPE for extreme cold, exposure time limits).',
  },
]

const FAQ = [
  {
    q: 'Is NFPA 96 mandatory in Chile for restaurants?',
    a: 'NFPA 96 is not directly enacted as a Chilean legal standard, but the SEREMI de Salud and the Chilean Fire Department (Cuerpo de Bomberos) treat it as the primary technical reference in audits and inspections. DS 594 mandates adequate ventilation, and the General Urban Planning and Construction Ordinance requires grease and vapor extraction systems compliant with NCh Nº 898 in food service premises. In practice, designing to NFPA 96 is the safest way to satisfy all local requirements.',
  },
  {
    q: 'How much extraction airflow does a commercial kitchen hood need?',
    a: 'NFPA 96 sets airflow based on the appliances covered and hood type. For Type I hoods (grease-producing appliances: fryers, griddles, convection ovens): minimum face velocity of 0.25 m/s at the open face of the hood, typically 1,000–3,000 m³/h per 1.2 m of hood length. For Type II hoods (non-grease appliances: dishwashers, bread ovens): lower airflow (0.10–0.15 m/s). D&Z Building dimensions the system based on the cooking equipment inventory and provides the engineering calculation.',
  },
  {
    q: 'What happens if there is no make-up air in a commercial kitchen?',
    a: 'A kitchen without make-up air operates at severe negative pressure: gas burner flames extinguish from lack of combustion air, kitchen doors are difficult to open, and air from dirty areas (restrooms, waste areas) is drawn into the kitchen. The extraction system also operates against higher resistance, reducing its actual airflow below design. In winter, uncontrolled cold air entering through any opening creates discomfort for kitchen staff. D&Z Building always designs extraction and supply systems as a balanced pair.',
  },
  {
    q: 'How much does a ventilation system cost for a mid-size restaurant in Chile?',
    a: 'For a restaurant with a 40–60 m² kitchen and a 120–200-person dining room, the complete system (hood, exhaust fan, make-up air, dining room conditioning) costs UF 100–250 (≈ USD 3,300–8,250) in equipment and installation, depending on hood complexity, duct length, and whether a grease interceptor is required by the Fire Department. D&Z Building provides itemized quotes with drawings and engineering calculations at no cost.',
  },
  {
    q: 'What maintenance does a commercial exhaust hood require?',
    a: 'NFPA 96 mandates periodic inspections and cleaning: monthly for high-volume operations (intensive fryer use); quarterly for moderate-volume kitchens; semi-annually for low-volume operations (office cafeterias). Cleaning covers ducts, hood interior, grease filters, and the exhaust fan. Failure to maintain hoods is the leading cause of kitchen fires in Chile. D&Z Building offers maintenance contracts with a certification report for the Fire Department and SEREMI.',
  },
  {
    q: 'How do I control exhaust odors venting from the rooftop duct?',
    a: 'The exhaust duct must discharge above roof level at sufficient height for odors to disperse. If the discharge is near neighboring building windows or pedestrian areas, odor treatment systems are installed: activated carbon filters, cold plasma ionization, or UV-C systems. The most effective solution for high-odor kitchens (frying, grilling) is combined ionization + activated carbon at the end of the duct. D&Z Building evaluates the discharge situation and proposes the best solution for the specific location.',
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
        { '@type': 'ListItem', position: 3, name: 'Food Service', item: `${siteUrl}/en/sectors/food-service/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/food-service/#service`,
      name: 'HVAC for Restaurants & Food Service in Chile',
      description:
        'Commercial kitchen ventilation (NFPA 96), make-up air, dining room VRF, food processing HVAC, and cold room refrigeration in Chile. DS 594 compliance for kitchen staff and HACCP for production areas.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/food-service/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/food-service/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorFoodServicePage() {
  return (
    <>
      <Script id="ld-food-service-en" type="application/ld+json">
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
            <span>Food Service</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Restaurants · Commercial Kitchens · Food Processing
          </p>
          <h1 className="sp-hero-title">HVAC for Restaurants<br />&amp; Food Service in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Commercial kitchen ventilation (NFPA 96), make-up air, dining room VRF, food processing HVAC,
            and cold rooms — DS 594 compliance for kitchen staff, HACCP for production areas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Solutions
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Food Service HVAC Solutions
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

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {[
            { valor: 'NFPA 96', etiqueta: 'Commercial kitchen ventilation standard' },
            { valor: 'NC-35', etiqueta: 'Target noise criterion for dining rooms' },
            { valor: 'HACCP', etiqueta: 'Food safety standard for processing areas' },
            { valor: 'DS 594', etiqueta: 'Thermal comfort compliance for staff' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="sp-section" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Opening a restaurant or renovating a kitchen?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We provide NFPA 96 engineering and drawings at no upfront cost
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 24px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us your kitchen layout, cooking equipment, and local authority requirements.
            We will respond with a technical proposal.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Get a free quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">View all services</Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Kitchens, regulations and odor control
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
            <Link href="/en/services/commercial-refrigeration/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Commercial Refrigeration →
            </Link>
            <Link href="/en/services/preventive-maintenance/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Preventive Maintenance →
            </Link>
            <Link href="/en/sectors/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              All sectors →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Planning a food service project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            From commercial kitchen hoods to food processing plants — we cover it all
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Share your kitchen layout, cooking equipment list, and permit requirements.
            We will deliver NFPA 96 engineering, drawings, and an itemized quote.
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
