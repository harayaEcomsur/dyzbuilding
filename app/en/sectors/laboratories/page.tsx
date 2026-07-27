import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Laboratories & R&D Centers Chile',

  description: 'Laboratory HVAC systems in Chile: fume hood VAV extraction, negative pressure BSL-2/3, cleanrooms ISO 14644, ±0.5°C precision control, and Chilean DS 594 / MINSAL Resolution 510/99 compliance.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/laboratories/`,
    languages: {
      en: `${siteUrl}/en/sectors/laboratories/`,
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
    },
  },
  openGraph: {
    title: 'Laboratory HVAC Chile — Cleanrooms, Negative Pressure, Fume Hoods | D&Z Building',
    description: 'Design and installation of HVAC systems for analytical labs, pharmaceutical R&D, BSL-2/3 biosafety labs, and ISO-class cleanrooms in Chile.',
    url: `${siteUrl}/en/sectors/laboratories/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Fume Hood VAV Extraction',
    subtitulo: 'ANSI/ASHRAE 110 · 0.5 m/s minimum face velocity',
    desc: 'Chemical fume hoods require variable air volume (VAV) extraction to maintain minimum face velocity of 0.5 m/s regardless of sash position. D&Z Building designs extraction ducts in stainless steel or solvent-resistant PVC, acid-resistant fans (polypropylene or fiberglass housings), and tempered or cooled make-up air systems to replace extracted volume without creating cross-drafts at the hood face.',
  },
  {
    titulo: 'Differential Pressure Control',
    subtitulo: 'BSL-2/3 labs · −12.5 Pa negative pressure',
    desc: 'BSL-2 and BSL-3 biosafety laboratories must be maintained at negative pressure relative to corridors, preventing bioaerosol escape. D&Z Building installs differential pressure control systems with precision transducers (±0.5 Pa resolution), DDC controllers, and fast-response VAV dampers (<2 seconds). Systems maintain the pressure cascade (corridor → ante-room → lab) per CDC/NIH BMBL 6th edition and verify integrity with smoke pencil testing.',
  },
  {
    titulo: 'ISO-Class Cleanrooms',
    subtitulo: 'ISO 14644-1 · Class ISO 5–8 · 20–600 ACH',
    desc: 'Cleanrooms for pharmaceutical manufacturing, sterile packaging, and precision electronics require simultaneous control of particles, temperature (±0.5°C), relative humidity (±2% RH), and differential pressure. D&Z Building designs recirculation systems with H14 HEPA filters (99.995% efficiency), air handling units with cooling dehumidification and electric rehumidification for fine control, and unidirectional (laminar) airflow diffuser layouts per ISO 14644-1 and ISPE GMP Baseline Guide.',
  },
  {
    titulo: 'Temperature & Humidity Precision Control',
    subtitulo: '±0.5°C · ±2% RH · Calibration labs and testing chambers',
    desc: 'Calibration laboratories (INN/ENAC-accredited), materials testing facilities, and metrology chambers require ±0.5°C and ±2% RH control 24/7/365. D&Z Building uses precision CRAC/CRAH units with N+1 redundancy, continuous monitoring with traceable calibrated sensors, and data logging conformant with NCh ISO 17025 for laboratory accreditation.',
  },
  {
    titulo: 'Chemical & Analytical Lab Extraction',
    subtitulo: 'Solvents · Acids · Perchloric · Emergency purge',
    desc: 'Labs handling flammable solvents (ethanol, acetone, hexane) or concentrated acids (sulfuric, nitric, perchloric) require explosion-proof extraction fans and corrosion-resistant materials. D&Z Building designs systems per NFPA 45: PVC or polypropylene ducts for acids, 316 stainless steel for halogenated solvents, separated incompatible exhaust streams, and scrubbers or neutralizers before exterior discharge.',
  },
  {
    titulo: 'Food Analysis Laboratories (SEREMI-Licensed)',
    subtitulo: 'HACCP · Cross-contamination control · Unidirectional flow',
    desc: 'Microbiological and physicochemical food analysis laboratories licensed by SEREMI de Salud must comply with MINSAL Resolution 510/99. D&Z Building designs ventilation that separates "dirty" zones (sample receipt, preparation) from "clean" zones (microbiological analysis, culture media) via differential pressures and unidirectional airflow. Systems include autoclave extraction, washroom vapor exhausts, and temperature-controlled incubation chambers.',
  },
]

const FAQ = [
  {
    q: 'How many air changes per hour does a BSL-2 laboratory require?',
    a: 'A BSL-2 biosafety laboratory requires a minimum of 6–12 air changes per hour (ACH) of mechanical ventilation with no recirculation to other building zones. CDC/NIH BMBL 6th edition recommends 10–12 ACH for pathogen laboratories. BSL-3 requires 12–15 ACH with 100% direct exterior exhaust and HEPA filtration on the exhaust. D&Z Building calculates ACH based on contaminant load, number of fume hoods, and lab area — not solely on biosafety level.',
  },
  {
    q: 'Can laboratory air be recirculated to save energy?',
    a: 'It depends on the lab type and agents handled. For BSL-2/3 biosafety labs, labs with flammable solvents or carcinogens, and any area with active fume hoods, recirculation is prohibited — 100% of air must be exhausted outdoors. For electronics, metrology, or physical analysis labs with no hazardous agents, recirculation with HEPA (particles) and activated carbon (VOCs) filters can achieve 30–50% HVAC energy savings. D&Z Building evaluates each project against the Safety Data Sheet (SDS) of all materials used.',
  },
  {
    q: 'What is a VAV system and why is it required for lab fume hoods?',
    a: 'VAV (Variable Air Volume) varies airflow based on real-time demand rather than running at maximum flow constantly. In laboratories, VAV is essential for fume hoods: when the sash closes, the hood needs less extraction to maintain 0.5 m/s face velocity. A constant-volume system would create excess airflow that generates turbulence, pulling contaminants out of the hood. Lab VAV systems include sash position sensors, individual VAV box controllers, and a master controller coordinating all hood exhausts with the make-up air system.',
  },
  {
    q: 'What Chilean regulations apply to laboratory ventilation?',
    a: 'Laboratory ventilation in Chile is governed simultaneously by: DS 594 (MINSAL) for workplace conditions including maximum airborne contaminant concentrations; MINSAL Resolution 510/99 for clinical and environmental labs; NCh 1993 for general ventilation; and NFPA 45 for labs with flammable liquids (referenced by Bomberos). Pharmaceutical labs manufacturing or testing medicines must also comply with ISP Good Manufacturing Practice (GMP) guidelines. D&Z Building prepares the DS 594 compliance report and ventilation calculation for the SEREMI health operating license.',
  },
  {
    q: 'What does HVAC for a 200 m² laboratory cost in Chile?',
    a: 'Laboratory HVAC costs vary significantly by specification: a basic food analysis lab can be installed for UF 80–150 (≈ USD 2,600–4,900); an analytical chemistry lab with 4 fume hoods and pressure control, UF 200–400 (≈ USD 6,500–13,100); a complete BSL-2 negative pressure system, UF 350–600; a 50 m² ISO Class 7 cleanroom, UF 400–800. Maintenance costs are higher than offices: HEPA filters, fume hood performance testing, and pressure control calibration require semi-annual or annual recertification per applicable standards.',
  },
  {
    q: 'Can D&Z Building design labs to GMP (Good Manufacturing Practice) standards?',
    a: 'Yes. D&Z Building has experience designing HVAC for pharmaceutical quality control laboratories under GMP standards, including cleanrooms classified A/B/C/D per EU GMP Annex 1, continuous particle and temperature monitoring with data logging per 21 CFR Part 11, and DQ/IQ/OQ/PQ qualification documentation required for ISP approval. Designs are documented with calculation reports per ASHRAE 62.1, ISO 14644-4 (cleanroom design), and ISPE Baseline Guide Vol. 3.',
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
        { '@type': 'ListItem', position: 3, name: 'Laboratories & R&D Centers', item: `${siteUrl}/en/sectors/laboratories/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/laboratories/#service`,
      name: 'HVAC for Laboratories and R&D Centers',
      description:
        'HVAC design, supply, and installation for Chilean laboratories and R&D centers: fume hood VAV extraction, BSL-2/3 negative pressure, ISO-class cleanrooms, and precision temperature/humidity control.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/laboratories/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/laboratories/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorLaboratoriesPage() {
  return (
    <>
      <Script id="ld-laboratories-en" type="application/ld+json">
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
            <span>Laboratories</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Laboratories
          </p>
          <h1 className="sp-hero-title">HVAC for Laboratories<br />&amp; R&amp;D Centers</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Fume hood VAV extraction, negative pressure BSL-2/3 biosafety, ISO-class cleanrooms, and ±0.5°C
            precision control — for analytical, pharmaceutical, and food safety laboratories across Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {[
            { valor: 'ISO 14644', etiqueta: 'International cleanroom classification standard' },
            { valor: '−12.5 Pa', etiqueta: 'Minimum negative pressure for BSL-2/3 labs' },
            { valor: '0.5 m/s', etiqueta: 'Fume hood face velocity (ASHRAE 110 minimum)' },
            { valor: '±0.5°C', etiqueta: 'Temperature precision in calibration labs' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Solutions
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Laboratory HVAC Solutions
          </h2>
          <div className="sp-aplic-grid">
            {SOLUTIONS.map((inst, i) => (
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
            Cleanrooms, pressure control and regulations
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
            Working on a laboratory or R&D project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We prepare engineering and cost estimates for laboratory HVAC projects — in English
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the lab type, biosafety level or cleanroom classification, and area.
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
