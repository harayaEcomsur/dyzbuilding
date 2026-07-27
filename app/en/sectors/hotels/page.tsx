import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Hotel HVAC in Chile — VRF for Guest Rooms, Lobby & Spa',

  description:
    'HVAC specialists for hotels and resorts in Chile: silent VRF for guest rooms (< 35 dB), lobby and spa systems, PMS integration, and LEED/EDGE documentation. Nationwide coverage.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/hotels/`,
    languages: {
      en: `${siteUrl}/en/sectors/hotels/`,
      es: `${siteUrl}/sectores/hoteleria/`,
    },
  },
  openGraph: {
    title: 'Hotel HVAC Chile — Silent VRF, PMS Integration, LEED/EDGE | D&Z Building',
    description:
      'Hotel HVAC in Chile: guest room VRF (NC-25/30), lobby, spa dehumidification, meeting rooms with CO₂ control, PMS integration, LEED v4 energy documentation.',
    url: `${siteUrl}/en/sectors/hotels/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const ZONES = [
  {
    titulo: 'Guest Rooms & Suites',
    subtitulo: '< 35 dB · Individual room control',
    desc: 'Acoustic performance is the most critical differentiator in hospitality HVAC. VRF with slim-duct fan-coils or 4-way cassettes delivers individual thermostat control per room, noise levels below 25 dB in silent mode, and automatic shutdown when the room key card is removed (card key interface or PMS integration). We select equipment to meet NC-30 (3–4 star) or NC-25 (5-star/boutique) acoustic targets.',
  },
  {
    titulo: 'Lobby & Reception Areas',
    subtitulo: 'Double-height · Solar load · AHU or VRF floor',
    desc: 'Hotel lobbies with double-height ceilings and large glazed facades have high solar heat gains and variable occupancy. We use floor-standing VRF or central AHU with high-induction diffusers to prevent air stratification in tall spaces. Design accounts for seasonal solar load and peak vs. off-peak occupancy patterns.',
  },
  {
    titulo: 'Restaurant & Commercial Kitchen',
    subtitulo: 'NFPA 96 hood · Make-up air unit',
    desc: 'The restaurant requires an HVAC system independent from the kitchen. The kitchen needs a commercial exhaust hood (NFPA 96 compliant) with a dedicated make-up air unit to replace exhausted air. The dining room system must neutralize heat from diners (70 W/person) while maintaining below 24°C without drafts at the seating areas.',
  },
  {
    titulo: 'Spa, Pool & Wet Areas',
    subtitulo: '50–60% RH · Heat recovery dehumidification',
    desc: 'Indoor pool and spa areas generate high humidity loads. We specify dehumidifier units with heat recovery to the pool water, maintaining 50–60% RH to prevent condensation on windows and architectural elements. Ductwork in these areas uses chlorine-resistant materials (stainless steel or rigid PVC) to withstand the corrosive atmosphere.',
  },
  {
    titulo: 'Meeting Rooms & Event Spaces',
    subtitulo: 'Variable occupancy · CO₂ demand ventilation',
    desc: 'Meeting rooms have highly variable occupancy (0–200 people). Systems include CO₂ sensors that automatically increase fresh air supply as occupancy rises (ASHRAE 62.1 demand-controlled ventilation) and reduce consumption when empty. Movable partitions dividing a large ballroom into two or more rooms require independent zone control per partition configuration.',
  },
  {
    titulo: 'Server Room & Technology Infrastructure',
    subtitulo: 'T 18–24°C · N+1 redundancy · 24/7',
    desc: 'The hotel technology room (PMS servers, PBX, NVRs, Wi-Fi controllers) requires 24/7 precision cooling with N+1 redundancy (two units, one active one standby). Temperature must be maintained at 18–24°C regardless of hotel occupancy. We integrate with the hotel BMS for remote alarm and temperature monitoring.',
  },
]

const STATS = [
  { valor: 'NC-25', unidad: '5-star target', etiqueta: 'Guest room acoustic standard' },
  { valor: '50–60%', unidad: 'RH', etiqueta: 'Pool/spa humidity control' },
  { valor: 'LEED / EDGE', etiqueta: 'Energy certification support' },
  { valor: 'BACnet / PMS', etiqueta: 'Property management integration' },
]

const FAQ = [
  {
    question: 'What noise levels should hotel HVAC systems achieve in guest rooms?',
    answer: 'The international reference standard is the NC (Noise Criteria) curve. For 3–4 star hotels, the target is NC-30 (approximately 33 dB(A)). For 5-star and boutique hotels, the target is NC-25 (28 dB(A)). VRF systems with slim-duct fan-coils, correctly sized and balanced, can achieve these levels without difficulty. Outdoor unit noise is managed through placement (technical floor, rooftop with acoustic barriers) and selecting low-noise models (typically < 58 dB(A) for Daikin and Mitsubishi Electric hotel-grade units).',
  },
  {
    question: 'How much does HVAC cost for a 50-room hotel in Chile?',
    answer: 'A 50-room hotel (mid-size, no indoor pool or spa) with VRF for guest rooms and splits for common areas has a reference installed cost of approximately UF 1,800–4,000, depending on equipment quality, civil work complexity, and building height. Hotels with indoor pools, spas, or large event spaces carry additional cost for dehumidification systems and AHUs. We provide a free HVAC specification and cost estimate within 72 hours of receiving the building plans.',
  },
  {
    question: 'Slim-duct or 4-way cassette: which is better for hotel guest rooms?',
    answer: 'It depends on room type and interior design. The slim-duct fan-coil is concealed entirely in the false ceiling — only supply and return grilles are visible, achieving the cleanest aesthetic. It is the premium choice for boutique and 5-star properties. The 4-way cassette is recessed in the ceiling and distributes air in four directions — more visible but lower civil installation cost. Both options allow individual wireless thermostat control per room and card-key integration for automatic shutdown.',
  },
  {
    question: 'Can you integrate HVAC with the hotel Property Management System (PMS)?',
    answer: 'Yes. Modern VRF systems from Daikin, Mitsubishi Electric, and LG integrate with hotel PMS platforms via BACnet or Modbus. This enables: automatic shutdown when the room is unoccupied (via card key or PMS occupancy status), pre-cooling or pre-heating the room before guest check-in, and per-room energy consumption reporting for efficiency analysis. We handle the BACnet/Modbus integration and commission the PMS connectivity as part of the project.',
  },
  {
    question: 'Can your VRF system qualify for LEED v4 or EDGE certification?',
    answer: "Yes. A high-efficiency VRF system can contribute to LEED v4 Energy & Atmosphere credits (EA Prerequisite 2 — Minimum Energy Performance, EA Credit 1 — Optimize Energy Performance) and the EDGE IFC/World Bank certification (20% energy reduction vs. baseline). We prepare the required HVAC documentation: thermal load calculations, equipment efficiency specifications (EER, COP, SEER), commissioning plan, and the energy model baseline comparison. We coordinate with the project's LEED consultant or certifier.",
  },
  {
    question: 'How long does hotel HVAC installation take during construction?',
    answer: 'For a 50–80 room hotel in new construction, the typical timeline is: BIM engineering (4–6 weeks), refrigerant piping and ductwork installation during rough-in (8–12 weeks, concurrent with other trades), indoor unit installation during finish phase (4–6 weeks), and commissioning (1–2 weeks). Total: 16–24 weeks from construction start to commissioning. Early BIM coordination with the architecture team is essential for routing refrigerant lines and ductwork through the building structure.',
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
        { '@type': 'ListItem', position: 3, name: 'Hotels', item: `${siteUrl}/en/sectors/hotels/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/hotels/#service`,
      name: 'Hotel & Hospitality HVAC in Chile',
      description:
        'HVAC design, supply, and installation for hotels and resorts in Chile: silent VRF for guest rooms, lobby and spa systems, PMS integration, and LEED/EDGE documentation. Nationwide coverage.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Hospitality HVAC',
      url: `${siteUrl}/en/sectors/hotels/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/hotels/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnSectorHotelsPage() {
  return (
    <>
      <Script id="ld-hotels-en" type="application/ld+json">
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
            <span>Hotels</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Hotels · Resorts · Boutique
          </p>
          <h1 className="sp-hero-title">Hotel HVAC in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Silent VRF systems for guest rooms, PMS integration, spa dehumidification,
            and LEED/EDGE documentation — for hotels and resorts across Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Request a Quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All Services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}{s.unidad && <span style={{ fontSize: '14px', marginLeft: 2, opacity: 0.8 }}>{s.unidad}</span>}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Zones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Hotel zones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Hotel HVAC by Zone
          </h2>
          <div className="sp-aplic-grid">
            {ZONES.map((z, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {z.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {z.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {z.desc}
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
            Acoustics, costs and integration
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
            Planning a hotel project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We deliver HVAC engineering and cost estimates for hotel projects — in English
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            New construction, expansion, or equipment replacement in an operating hotel.
            We respond with a technical proposal.
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
