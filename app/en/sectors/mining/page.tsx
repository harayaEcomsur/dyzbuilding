import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Mining Operations in Chile — Control Rooms, Process Plants & Camps',

  description:
    'HVAC specialists for mining in Chile: control room precision cooling, process plants with ATEX, high-altitude camps, and analytical labs. DS 132 compliance, remote-site logistics, 24/7 SLA.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/mining/`,
    languages: {
      en: `${siteUrl}/en/sectors/mining/`,
      es: `${siteUrl}/sectores/mineria/`,
    },
  },
  openGraph: {
    title: 'Mining HVAC Chile — Control Rooms, Atacama Desert, High Altitude | D&Z Building',
    description:
      'HVAC for Chilean mining: precision control room cooling, ATEX process plants, altitude-corrected camp systems. DS 132 / SERNAGEOMIN compliance.',
    url: `${siteUrl}/en/sectors/mining/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const INSTALLATIONS = [
  {
    titulo: 'Control Rooms & Operations Centers',
    subtitulo: 'N+1 redundancy · 20–24°C precision',
    desc: 'Mine control rooms (pit, plant, crusher, SCADA) run 24/7 with critical computing equipment. Systems require N+1 redundancy (one active, one standby), UPS-backed power, and precision cooling (±1°C). Target conditions: 20–24°C, 40–55% RH, positive pressure to prevent dust ingress. We size units with altitude correction for the operating elevation.',
  },
  {
    titulo: 'Process Plants & Concentrators',
    subtitulo: 'Dust control · ATEX-rated · Ex certification',
    desc: 'Processing areas (flotation, grinding, concentration) require industrial ventilation with anti-dust filtration (HEPA or bag filters), localized extraction at dust-generation points, and HVAC for process control areas. In zones with combustible dust risk (reagent warehouses, flotation with solvents), equipment must carry ATEX/IECEx certification per IEC 60079.',
  },
  {
    titulo: 'Mining Camps',
    subtitulo: 'Atacama desert · Altiplano · −15 to +40°C',
    desc: 'Camps in the Atacama and Altiplano face extreme conditions: intense UV, daytime temperatures reaching +35–40°C and nights at −5 to −15°C, elevations of 2,500–4,500 masl (reducing compressor capacity 3–4% per 300 m above 1,000 masl). Systems are oversized 10–15% for altitude loss and protected against sand and dust ingress. Manufacturer altitude-correction programs applied at selection stage.',
  },
  {
    titulo: 'Mineralogical Analysis Laboratories',
    subtitulo: 'T ±0.5°C · ISO 17025 compliance',
    desc: 'Sample preparation and analysis labs (ICP, XRF, AAS) require temperature stability to ensure analytical accuracy. HVAC systems use precision control (±0.5°C), and units must be vibration-free to protect analytical balances. We specify split systems with remote condensers to eliminate vibration near weighing equipment.',
  },
  {
    titulo: 'Administrative Buildings on Site',
    subtitulo: 'VRF altitude models · Comfort cooling',
    desc: 'Offices, canteens, medical stations, and meeting rooms at mine sites need comfort cooling. Above 3,500 masl (Altiplano), VRF systems must be selected with altitude correction or specified as high-altitude models (Daikin Altitude Series, Mitsubishi Electric High Altitude). We verify compressor capacity de-rating before selection.',
  },
  {
    titulo: 'Remote-Site Maintenance',
    subtitulo: 'SLA adapted to mine logistics · Nationwide',
    desc: "Maintaining equipment at remote sites (300–800 km from Santiago) requires special logistics: critical spare parts stocked on site, technicians available for air transfer to regional airports (Antofagasta, Calama, Copiapó), and SLA response times calibrated to actual mine access requirements. We coordinate induction, ODL permits, and site insurance with the mine's HSE department.",
  },
]

const FAQ = [
  {
    q: 'How does high altitude affect HVAC equipment capacity in Chilean mines?',
    a: 'At higher elevations, air density drops, reducing the heat the air can transfer per unit volume. Capacity loss is approximately 3–4% per 300 m above 1,000 masl. At 3,500 masl this can mean 20–30% capacity reduction. VRF manufacturers such as Daikin and Mitsubishi Electric provide altitude de-rating programs; in extreme cases (Altiplano >4,000 masl), they offer purpose-built high-altitude models with larger displacement compressors. We apply these corrections at the selection stage and submit correction worksheets with every proposal.',
  },
  {
    q: 'Which Chilean regulations apply to HVAC in mining operations?',
    a: "DS 132 (Ministry of Mining, Mining Safety Regulations) sets environmental conditions in underground and surface mining workplaces: maximum 28°C WBGT for physical work, minimum ventilation rates, and air quality requirements. DS 594 (MINSAL) sets chemical agent exposure limits (dust, gases) and extreme-environment working conditions. SCADA/DCS control rooms must also comply with the control system manufacturer's environmental spec (typically 18–25°C, 30–60% RH, non-condensing). We provide a regulatory compliance matrix with each project deliverable.",
  },
  {
    q: 'Can you design and install HVAC in ATEX-classified hazardous areas?',
    a: 'Yes. For zones with explosive atmosphere risk (reagent warehouses, flotation circuits with solvents, blasting magazines), we select and specify equipment with ATEX or IECEx certification matched to the zone classification (Zone 1/2 for gases, Zone 21/22 for dust). All electrical installation in Ex zones follows IEC 60079 and must be performed by certified installers. We submit Ex equipment data sheets and zone classification drawings as part of project documentation.',
  },
  {
    q: 'How do you handle logistics for remote mine-site projects?',
    a: "We coordinate equipment and materials transport via road to regional staging hubs (Antofagasta, Calama, Copiapó, La Serena) and then the final leg to site. Technical crews travel by commercial flight to regional airports and transfer to site. Logistics and per-diem costs are itemized in the project budget. For recurring maintenance, we coordinate with the mine's logistics department for access authorizations (site induction, ODL, site insurance). We have executed projects at sites operated by BHP, Anglo American, and Codelco.",
  },
  {
    q: 'Can you produce engineering documentation for a mining tender (licitación)?',
    a: 'Yes. We prepare conceptual and basic engineering (heat load calculations, technical specifications, ±20% cost estimate) for tender stages, and detail engineering (drawings, bill of materials, procurement specs) for execution stages. Documentation follows the standards required by major mining companies: IFC format, document numbering per Codelco/Anglo American conventions, A/B/0 revision cycles. We can participate in pre-qualification processes and provide company credentials in English.',
  },
  {
    q: 'Do you cover mine sites outside the Santiago metropolitan region?',
    a: 'Yes — nationwide. Our project and maintenance teams travel to the Atacama, Antofagasta, Coquimbo, Tarapacá, and Arica regions. Remote-site projects include travel, accommodation, and logistics in the project budget. For long-term maintenance contracts, we evaluate on-site technician stationing or rotation schemes depending on site volume and client preference. Response time SLAs are agreed per site and documented in the maintenance contract.',
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
        { '@type': 'ListItem', position: 3, name: 'Mining', item: `${siteUrl}/en/sectors/mining/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/mining/#service`,
      name: 'HVAC for Mining Operations in Chile',
      description:
        'HVAC design, supply, and installation for Chilean mining: control rooms, process plants, camps, and analytical laboratories. DS 132 / SERNAGEOMIN compliance, ATEX-rated solutions, high-altitude correction.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/mining/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/mining/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorMiningPage() {
  return (
    <>
      <Script id="ld-mining-en" type="application/ld+json">
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
            <span>Mining</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Mining
          </p>
          <h1 className="sp-hero-title">HVAC for Mining Operations<br />in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Precision cooling for control rooms, process plants with ATEX compliance, high-altitude camp systems,
            and analytical laboratories — across the Atacama and Altiplano.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {[
            { val: '4,500', unit: 'masl', label: 'Max. operating altitude', sub: 'Altitude correction applied at selection' },
            { val: '+40/−15', unit: '°C', label: 'Atacama temperature range', sub: 'Systems oversized for extremes' },
            { val: '24/7', unit: 'SLA', label: 'Support for critical operations', sub: 'N+1 redundancy for control rooms' },
            { val: 'DS 132', unit: 'SERNAGEOMIN', label: 'Regulatory compliance', sub: 'Compliance matrix with every project' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.val}<span style={{ fontSize: '14px', marginLeft: 2, opacity: 0.8 }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Installations */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Installation types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Mining HVAC Installations
          </h2>
          <div className="sp-aplic-grid">
            {INSTALLATIONS.map((inst, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {inst.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {inst.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {inst.desc}
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
            Altitude, regulations and logistics
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
            Working on a mining project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We prepare engineering and cost estimates for tender stages — in English
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the site location, elevation, facility type, and regulatory requirements.
            We will respond with a technical proposal.
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
