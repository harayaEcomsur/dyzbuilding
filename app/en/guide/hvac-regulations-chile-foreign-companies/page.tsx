import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC Regulations in Chile: A Guide for Foreign Companies',

  description:
    'Key Chilean regulations for HVAC projects: DS 594 (worker thermal comfort), OGUC (building ventilation), NCh standards, and ASHRAE adoption. What international firms need to know before designing HVAC in Chile.',
  alternates: {
    canonical: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
    languages: {
      en: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
    },
  },
  openGraph: {
    title: 'HVAC Regulations Chile for Foreign Companies — DS 594, OGUC | D&Z Building',
    description:
      'DS 594 thermal comfort requirements, OGUC ventilation minimums, NCh standards, and how ASHRAE and NFPA codes apply in Chile. Essential reading for international HVAC projects.',
    url: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
    locale: 'en_US',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const KEY_REGULATIONS = [
  {
    titulo: 'DS 594 — Worker Thermal Comfort',
    subtitulo: 'Ministry of Health · Mandatory for workplaces',
    desc: 'Decree Nº 594 of the Ministry of Health (MINSAL) is the primary regulation governing workplace conditions in Chile, including thermal comfort. It sets maximum operative temperatures by work intensity (sedentary work: max 27°C; light work: max 30°C; moderate work: max 26°C), minimum ventilation rates (0.14 m³/s per occupant for non-industrial premises), and prohibits direct air supply that causes cold drafts on workers. DS 594 applies to all enclosed workplaces regardless of whether they are Chilean or foreign-owned.',
  },
  {
    titulo: 'OGUC — General Urban Planning and Construction Ordinance',
    subtitulo: 'Building ventilation minimums · Permit requirements',
    desc: 'The Ordenanza General de Urbanismo y Construcción (OGUC) sets ventilation and climate control requirements at the building permit (permiso de edificación) stage. Articles 4.1.10 and 4.5 specify minimum air changes by occupancy type (residential, office, retail, healthcare, industrial). HVAC system designs submitted with the building permit must meet OGUC minimums, and the system must be commissioned and reported to the municipality (DOM) before the final occupation certificate (recepción final) is issued.',
  },
  {
    titulo: 'NCh Standards — Chilean National Standards',
    subtitulo: 'NCh 1993, NCh 898, NCh 440 — ventilation and combustion',
    desc: 'The Instituto Nacional de Normalización (INN) publishes the NCh standards that are the Chilean equivalents of ISO/ASHRAE/NFPA standards. Key HVAC-related NCh standards: NCh 1993/1 (general ventilation); NCh 898 (food service premises — ventilation and extraction); NCh 440 (gas installations, including flue venting for gas heating). When Chilean regulations refer to "applicable standards," NCh standards are the default; ASHRAE or NFPA standards are referenced when a Chilean NCh equivalent does not exist for the application.',
  },
  {
    titulo: 'International Codes Accepted in Chile',
    subtitulo: 'ASHRAE · NFPA · ISO · LEED',
    desc: 'Chile has no equivalent to ASHRAE 62.1 (ventilation for acceptable indoor air quality) or ASHRAE 90.1 (energy efficiency in buildings) as national legislation. However, both are widely accepted as technical references by inspectors, the SEREMI de Salud (regional health authority), and the Cuerpo de Bomberos (fire department) when Chilean NCh standards do not cover the specific application. NFPA 96 is routinely used for food service extraction design. LEED and EDGE certifications are recognized by the Ministry of Energy and some municipalities for building permit fast-tracks.',
  },
]

const STATS = [
  { valor: 'DS 594', etiqueta: 'Primary workplace thermal comfort regulation' },
  { valor: 'OGUC', etiqueta: 'Building ventilation minimums (permit stage)' },
  { valor: 'NFPA 96', etiqueta: 'Food service extraction — accepted by Bomberos' },
  { valor: 'LEED', etiqueta: 'Green building certification recognized in Chile' },
]

const PROCESS_STEPS = [
  {
    titulo: '1. Building Permit (Permiso de Edificación)',
    subtitulo: 'DOM · OGUC compliance · Engineer seal',
    desc: 'Any new construction or major renovation in Chile requires a building permit from the Dirección de Obras Municipales (DOM). The permit submission must include HVAC plans stamped by a registered Chilean civil or mechanical engineer, demonstrating compliance with OGUC ventilation minimums. Foreign engineering credentials are not directly recognized — designs must be countersigned by a Chilean professional engineer (PE) registered with the Colegio de Ingenieros de Chile.',
  },
  {
    titulo: '2. DS 594 Compliance Review',
    subtitulo: 'SEREMI de Salud · Workplace inspection',
    desc: 'Once the facility is operating with workers, the SEREMI de Salud (Regional Ministry of Health) may inspect for DS 594 compliance. D&Z Building provides a DS 594 compliance report with each project, documenting the operative temperatures achieved at each workstation, the ventilation rates installed, and the noise levels measured. This document is the primary defense in a SEREMI inspection and is required to obtain the health operating license (resolución sanitaria) for food service and healthcare facilities.',
  },
  {
    titulo: '3. Fire Department (Bomberos) Review',
    subtitulo: 'NFPA 96 · Suppression systems · Kitchen certification',
    desc: 'The Cuerpo de Bomberos (Chilean Fire Department) reviews kitchen extraction systems and fire suppression systems. For commercial kitchen hood systems, Bomberos expects NFPA 96 compliance including 18-gauge stainless steel ducts, minimum face velocities at the hood, and an integrated suppression system (Ansul or equivalent). D&Z Building manages this process and has established relationships with Bomberos companies in the Santiago and Valparaíso regions.',
  },
  {
    titulo: '4. Occupation Certificate (Recepción Final)',
    subtitulo: 'DOM · As-built inspection · HVAC commissioning report',
    desc: 'Before the building can be legally occupied, the DOM conducts a final inspection and issues the recepción final. The HVAC system must be commissioned and operational. D&Z Building provides a commissioning report (informe de puesta en marcha) documenting measured airflows, temperatures, and pressures at all terminals, signed by the responsible engineer. Some municipalities also require a noise measurement report for systems near residential areas.',
  },
]

const FAQ = [
  {
    question: 'Can a foreign engineer design HVAC systems in Chile without a local license?',
    answer:
      'Foreign engineers cannot independently sign HVAC designs for Chilean building permits. Designs must be countersigned by a Chilean professional engineer (PE) registered with the Colegio de Ingenieros de Chile. The most common approach for international firms is to engage a local engineering firm (like D&Z Building) to review, adapt, and sign the HVAC design for submission. The foreign engineer can contribute the design; the Chilean PE takes legal responsibility for regulatory compliance.',
  },
  {
    question: 'Is DS 594 equivalent to ASHRAE 55 (Thermal Environmental Conditions)?',
    answer:
      'DS 594 and ASHRAE 55 address the same topic (thermal comfort) but from different angles. ASHRAE 55 uses a probability-based model (Predicted Mean Vote) and allows adaptive comfort for naturally ventilated spaces. DS 594 is prescriptive: it sets absolute temperature limits by work intensity category (sedentary, light, moderate, heavy), without PMV models. For a foreign firm, the safest approach is to design to DS 594 limits and document it; ASHRAE 55 calculations can supplement the DS 594 compliance report for discussions with sophisticated clients or LEED submissions.',
  },
  {
    question: 'Does Chile use metric or imperial units in HVAC design?',
    answer:
      'Chile uses the metric system (SI) for all engineering purposes. Airflows are in m³/s or m³/h, temperatures in °C, pressures in Pa or kPa, power in kW, and energy in kWh or MJ. Equipment ratings from US manufacturers (BTU/h, CFM, °F) must be converted. Chilean construction documents, permits, and commissioning reports must be in SI units. D&Z Building prepares all documentation in SI units and can adapt US/Australian manufacturer datasheets for Chilean permit submissions.',
  },
  {
    question: 'Are LEED-certified buildings subject to different HVAC regulations in Chile?',
    answer:
      "LEED certification does not replace Chilean legal requirements — it is an additional overlay. A LEED-certified building must still comply with DS 594, OGUC, and NCh standards. Where LEED requirements (e.g., ASHRAE 62.1 ventilation rates or ASHRAE 90.1 energy efficiency levels) exceed Chilean minimums, the more demanding LEED requirement governs. The Ministry of Energy's \"Camino a la Carbono Neutralidad\" policy recognizes LEED and EDGE certifications, and some municipalities offer expedited permitting for certified projects.",
  },
  {
    question: 'What documentation does D&Z Building provide for international projects?',
    answer:
      "For international clients and multinational projects, D&Z Building provides: (1) Design reports in Spanish (required for permits) plus English summaries; (2) DS 594 and OGUC compliance certification signed by a registered Chilean PE; (3) Commissioning reports in SI units suitable for both Chilean DOM submission and LEED documentation; (4) Equipment datasheets from Chilean distributors; and (5) A regulatory compliance matrix mapping the project's design parameters against DS 594, OGUC, NFPA 96 (where applicable), and LEED EA credits.",
  },
  {
    question: 'How long does it take to get HVAC permits in Chile?',
    answer:
      'The building permit process (permiso de edificación) from submission to approval takes 30–90 business days depending on the municipality and project complexity. Santiago municipalities (Providencia, Las Condes, Vitacura) tend to be faster (30–45 days for straightforward projects); municipalities outside Santiago can take longer. Once the permit is approved, construction can begin without waiting for the final occupation certificate. D&Z Building coordinates with the architect of record and the DOM to minimize permit review cycles.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/en/guide/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'HVAC Regulations Chile',
          item: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/#article`,
      headline: 'HVAC Regulations in Chile: A Guide for Foreign Companies',
      author: { '@type': 'Organization', name: 'D&Z Building' },
      publisher: {
        '@type': 'Organization',
        name: 'D&Z Building',
        url: siteUrl,
      },
      datePublished: '2025-01-01',
      dateModified: '2025-07-01',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/#faq`,
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
}

export default function EnGuideHvacRegulationsChilePage() {
  return (
    <>
      <Script id="ld-en-guide-hvac-regulations-chile" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link
              href="/en/services/"
              style={{
                color: 'var(--dim)',
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
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
            <Link href="/en/guide/" style={{ color: 'inherit', textDecoration: 'none' }}>Guides</Link>
            <span>›</span>
            <span>HVAC Regulations Chile</span>
          </div>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Regulatory Guide · For Foreign Companies
          </p>
          <h1 className="sp-hero-title">HVAC Regulations in Chile<br />A Guide for Foreign Companies</h1>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              fontSize: 'clamp(15px,1.6vw,18px)',
              maxWidth: 700,
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            Key Chilean regulations for HVAC projects: DS 594 (worker thermal comfort),
            OGUC (building ventilation), NCh standards, and ASHRAE adoption. What
            international firms need to know before designing HVAC in Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Talk to a local engineer</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(20px,2.4vw,28px)',
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              What foreign companies need to know about HVAC in Chile
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 16px',
              }}
            >
              International firms entering the Chilean market — whether opening a manufacturing
              facility, a regional office, a hotel, or a data center — often assume that ASHRAE or
              ISO standards will govern HVAC design, as they do in North America, Europe, or
              Australia. In Chile, the primary regulatory framework is different: it is anchored in
              national decrees (DS 594), the construction ordinance (OGUC), and Chilean national
              standards (NCh).
            </p>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 16px',
              }}
            >
              International standards like ASHRAE 62.1, ASHRAE 90.1, and NFPA 96 are accepted as
              technical references — and often required for LEED certification or Bomberos approval —
              but they do not replace Chilean law. Understanding this layered framework is essential
              before submitting permit documents or commissioning a Chilean facility.
            </p>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              This guide covers the four key Chilean regulations, maps them to their international
              equivalents, explains the permit and inspection process, and answers the most common
              questions from international engineering teams working in Chile for the first time.
            </p>
          </div>
        </div>

        {/* KEY_REGULATIONS */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            Chilean regulations overview
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            Key Regulations for HVAC Projects in Chile
          </h2>
          <div className="sp-aplic-grid">
            {KEY_REGULATIONS.map((r) => (
              <div key={r.titulo} className="sp-aplic-item">
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    margin: '0 0 8px',
                  }}
                >
                  {r.subtitulo}
                </p>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(14px,1.4vw,16px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    margin: '0 0 12px',
                  }}
                >
                  {r.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NORMS comparison table */}
        <div className="sp-section">
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(18px,2.2vw,26px)',
              color: 'var(--text)',
              margin: '0 0 24px',
            }}
          >
            Chilean Regulations vs International Standards
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse' as const,
                fontFamily: "'Outfit',sans-serif",
                fontSize: '14px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Requirement', 'Chilean Regulation', 'International Equivalent'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '10px 16px',
                        fontFamily: "'Josefin Sans',sans-serif",
                        fontSize: '10px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: 'var(--dim)',
                        fontWeight: 400,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { req: 'Workplace thermal comfort', cl: 'DS 594 (MINSAL)', intl: 'ASHRAE 55' },
                  { req: 'Building ventilation minimums', cl: 'OGUC Art. 4.1.10', intl: 'ASHRAE 62.1' },
                  { req: 'Food service extraction', cl: 'NCh 898 + OGUC', intl: 'NFPA 96' },
                  { req: 'Energy efficiency (buildings)', cl: 'Calificación Energética de Edificios (CEE)', intl: 'ASHRAE 90.1 / LEED EA' },
                  { req: 'Gas appliance venting', cl: 'NCh 440', intl: 'ANSI Z223 / EN 1443' },
                  { req: 'Clean room environments', cl: 'MINSAL Resolution 510/99', intl: 'ISO 14644-1 (cleanroom classes)' },
                  { req: 'Industrial ventilation', cl: 'DS 594 + DS 78', intl: 'ACGIH Industrial Ventilation' },
                ].map((row, i) => (
                  <tr
                    key={row.req}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)',
                    }}
                  >
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.req}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.cl}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.intl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '28px 40px',
            }}
          >
            {STATS.map((s) => (
              <div key={s.etiqueta} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(22px,2.8vw,34px)',
                    fontWeight: 300,
                    color: 'var(--accent)',
                    margin: '0 0 6px',
                    letterSpacing: '-.01em',
                  }}
                >
                  {s.valor}
                </p>
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    margin: 0,
                  }}
                >
                  {s.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS_STEPS */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            Step-by-step permit process
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            The HVAC Approval Process in Chile
          </h2>
          <div className="sp-aplic-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.titulo} className="sp-aplic-item">
                <p
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: '10px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    margin: '0 0 8px',
                  }}
                >
                  {s.subtitulo}
                </p>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(14px,1.4vw,16px)',
                    fontWeight: 400,
                    color: 'var(--text)',
                    margin: '0 0 12px',
                  }}
                >
                  {s.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '14px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-article CTA */}
        <div
          style={{
            padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)',
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Josefin Sans',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  margin: '0 0 8px',
                }}
              >
                Local expertise
              </p>
              <p
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 'clamp(15px,1.5vw,18px)',
                  color: 'var(--text)',
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Need a Chilean PE to countersign your HVAC design and manage the permit process?
              </p>
            </div>
            <Link href="/en/#contacto" className="sp-hero-cta">
              Contact our team →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            Questions from international HVAC teams
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(13px,1.3vw,15px)',
                    fontWeight: 400,
                    letterSpacing: '.02em',
                    color: 'var(--text)',
                    margin: '0 0 10px',
                  }}
                >
                  {f.question}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '15px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              margin: '0 0 16px',
            }}
          >
            Related guides
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/en/guide/what-is-a-vrf-system/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              What is a VRF System? →
            </Link>
            <Link
              href="/en/guide/energy-efficiency-hvac-chile/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Energy Efficiency HVAC Chile →
            </Link>
            <Link
              href="/en/guide/commercial-hvac-costs-chile/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Commercial HVAC Costs Chile →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Next step
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(22px,2.8vw,36px)',
              margin: '0 0 14px',
              color: 'var(--text)',
            }}
          >
            Ready to navigate Chilean HVAC regulations?
          </h2>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              margin: '0 0 28px',
              fontSize: 'clamp(14px,1.4vw,17px)',
              maxWidth: 540,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Our team of registered Chilean engineers guides international firms through DS 594,
            OGUC, and Bomberos approvals — from design countersignature to commissioning report.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Contact our team</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">View all services</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span
            style={{
              color: 'var(--dim)',
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '11px',
              letterSpacing: '.06em',
            }}
          >
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
