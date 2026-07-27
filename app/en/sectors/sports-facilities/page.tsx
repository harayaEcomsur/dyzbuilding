import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'HVAC for Sports Facilities & Gyms in Chile',

  description:
    'Indoor pool dehumidification, gym CO₂ ventilation, locker room exhaust, and multi-court arena HVAC in Chile. ASHRAE 62.1 and DS 594 compliance for fitness centers and sports clubs.',
  alternates: {
    canonical: `${siteUrl}/en/sectors/sports-facilities/`,
    languages: {
      en: `${siteUrl}/en/sectors/sports-facilities/`,
      es: `${siteUrl}/sectores/centros-deportivos/`,
    },
  },
  openGraph: {
    title: 'Sports Facility & Indoor Pool HVAC Chile — ASHRAE 62.1 | D&Z Building',
    description:
      'Pool dehumidification with heat recovery, gym CO₂ demand ventilation, locker room negative-pressure exhaust, and ice rink refrigeration for sports facilities in Chile.',
    url: `${siteUrl}/en/sectors/sports-facilities/`,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUTIONS = [
  {
    titulo: 'Indoor Pool Dehumidification',
    subtitulo: 'Humidity control · Condensation prevention · Corrosion protection',
    desc: 'An indoor swimming pool generates large volumes of water vapor. Without adequate dehumidification, relative humidity exceeds 80%, causing condensation on windows and structural elements and accelerating corrosion of the metallic structure. ASHRAE 62.1 recommends maintaining relative humidity at 50–60% in pool enclosures. D&Z Building designs dehumidification units with heat recovery to minimize electrical consumption — heat extracted from the air can pre-heat pool water.',
  },
  {
    titulo: 'Gym & Exercise Room Ventilation',
    subtitulo: '6–10 air changes/hour · CO₂ control · Odor neutralization',
    desc: 'A high-density weight room or aerobics studio generates CO₂ and body vapor rapidly. ASHRAE 62.1 requires a minimum of 0.06 l/s per m² plus 3.5 l/s per person in exercise zones. D&Z Building designs variable-airflow systems with CO₂ sensors that activate increased ventilation only at actual occupancy levels, reducing electrical consumption during low-occupancy periods. High-efficiency MERV 11–13 filters control odors and bioaerosols.',
  },
  {
    titulo: 'Locker Rooms & Shower Areas',
    subtitulo: 'Negative pressure · High air changes · DS 594',
    desc: 'Locker rooms must be maintained at negative pressure relative to common areas to contain odors. DS 594 mandates ventilation in sanitary facilities. D&Z Building designs exhaust systems with at least 10–15 air changes per hour in wet locker rooms (with showers), with compensated supply air from clean zones. Fans are selected for quiet operation (maximum NC-40) and low consumption in continuous operation.',
  },
  {
    titulo: 'Multi-Court Pavilions & Indoor Arenas',
    subtitulo: 'Large volumes · Thermal stratification · Player comfort',
    desc: 'Pavilions with heights ≥8 m present thermal stratification: heat rises to the ceiling while the activity zone (1.0–2.5 m above floor) can remain cool. D&Z Building designs long-range nozzle distribution systems or destratification fans, achieving vertical temperature differences below 2°C between court level and ceiling. This allows reducing heating setpoints without sacrificing player comfort.',
  },
  {
    titulo: 'Covered Courts (Squash, Tennis, Padel)',
    subtitulo: 'No drafts · NC-35 · Stable temperature',
    desc: 'In squash, tennis, or padel courts, air currents can affect play. HVAC design must supply air without creating perceptible drafts in the playing zone (air velocity < 0.2 m/s at 0.5–1.5 m height). D&Z Building uses low-velocity diffusers or perimeter displacement ventilation. The NC-35 noise criterion ensures the HVAC system does not interfere with player concentration.',
  },
  {
    titulo: 'Ice Rinks',
    subtitulo: 'Floor refrigeration · Humidity control · Spectator comfort',
    desc: 'Ice rinks require floor refrigeration (glycol at -8°C to -12°C), humidity control to prevent ice fog (caused by the psychrometric difference between ambient air and the ice surface), and independent heating of the spectator area. D&Z Building designs the floor refrigeration system, enclosure dehumidification, and zone conditioning for the different areas (rink, viewing areas, team locker rooms).',
  },
]

const STATS = [
  { valor: '50–60%', etiqueta: 'Target RH for indoor pools (ASHRAE 62.1)' },
  { valor: '10+', etiqueta: 'Air changes/hour required in wet locker rooms' },
  { valor: '0.2 m/s', etiqueta: 'Max air velocity in courts (no perceptible draft)' },
  { valor: 'NC-35', etiqueta: 'Noise criterion for exercise rooms and courts' },
]

const FAQ = [
  {
    q: 'How much energy does indoor pool dehumidification consume?',
    a: 'A covered pool of 25×12 m (300 m², water temperature 28°C, air temperature 30°C) will evaporate approximately 60–100 kg of water per hour under normal operating conditions. A heat-recovery dehumidification unit for that load has an electrical power of 15–30 kW. Monthly electricity cost (18 hours/day operation) is approximately CLP 400,000–800,000 (≈ USD 400–800). Heat recovery can reduce water heating costs by 30–50%, partially offsetting the electrical cost of dehumidification.',
  },
  {
    q: 'What happens if an indoor pool has no dehumidification?',
    a: 'Without dehumidification, relative humidity can exceed 85–95%, causing: (1) constant condensation on windows and skylights, with water runoff; (2) accelerated corrosion of metallic structure, clips, and aluminum profiles (a costly maintenance issue); (3) mold and fungal growth on walls and ceilings; (4) thermal discomfort for users due to "steam bath" sensation; and (5) accelerated deterioration of users\' clothing and equipment. D&Z Building has replaced simple ventilation systems with dehumidifiers in sports centers experiencing these problems.',
  },
  {
    q: 'How do I control odors in a high-traffic gym?',
    a: 'Odor control in a gym has three components: (1) sufficient ventilation (0.06 l/s·m² + 3.5 l/s·person per ASHRAE 62.1); (2) filtration with MERV 11–13 high-efficiency filters or activated carbon; (3) cold plasma ionization or UV-C light in the air handling unit. The most effective system combines demand-controlled ventilation (CO₂ sensors) with ionization, which neutralizes the volatile organic compounds (VOCs) responsible for odors, reducing the need for extreme ventilation rates.',
  },
  {
    q: 'How much does HVAC cost for an 800 m² gym?',
    a: 'For an 800 m² gym (weights room, exercise studio, locker rooms, reception), the complete ventilation and conditioning system costs UF 150–350 (≈ USD 5,000–11,500) in equipment and installation. The range is wide because it depends on whether air conditioning is included (ventilation-only is less expensive), the ductwork finish level, and whether automatic CO₂ control is integrated. D&Z Building provides a detailed quote with engineering calculations at no cost.',
  },
  {
    q: 'What regulations apply to sports facility ventilation in Chile?',
    a: 'In Chile, sports facility ventilation is regulated by: (1) DS 594 from MINSAL, setting minimum temperature, air changes, and ventilation requirements in workplaces (applies to locker rooms, instructor areas, and service zones); (2) Ordenanza General de Urbanismo y Construcción (OGUC), establishing minimum ventilation per space type; (3) NCh 1993/1 (local ventilation); and (4) ASHRAE 62.1 as the international technical reference adopted in larger-scale projects. D&Z Building designs to both local regulations and ASHRAE standards.',
  },
  {
    q: 'Can a covered padel or tennis court be air-conditioned without affecting play?',
    a: 'Yes, with proper design. Perimeter air displacement ventilation systems or low-velocity diffusers positioned at the upper perimeter of the court supply air at low velocity (< 0.5 m/s in the perimeter zone, < 0.2 m/s in the playing zone at 1 m height), without generating drafts in the ball trajectory. System noise is also critical: units are selected for NC-35 or lower noise levels to avoid interfering with play. D&Z Building has designed HVAC for padel and squash courts in Santiago and the provinces.',
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
        { '@type': 'ListItem', position: 3, name: 'Sports Facilities', item: `${siteUrl}/en/sectors/sports-facilities/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/sectors/sports-facilities/#service`,
      name: 'HVAC for Sports Facilities & Gyms in Chile',
      description:
        'HVAC design, supply, and installation for sports facilities in Chile: indoor pool dehumidification, gym CO₂ ventilation, locker room exhaust, covered courts, and ice rinks. ASHRAE 62.1 and DS 594 compliance.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial and Industrial HVAC',
      url: `${siteUrl}/en/sectors/sports-facilities/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/sectors/sports-facilities/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function EnSectorSportsFacilitiesPage() {
  return (
    <>
      <Script id="ld-sports-facilities-en" type="application/ld+json">
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
            <span>Sports Facilities</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Industrial · Commercial · Sports
          </p>
          <h1 className="sp-hero-title">HVAC for Sports Facilities<br />&amp; Gyms in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Indoor pool dehumidification with heat recovery, gym CO₂ demand ventilation, locker room negative-pressure
            exhaust, and covered court HVAC — ASHRAE 62.1 and DS 594 compliant.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/en/#contacto" className="sp-hero-cta">Request a quote</Link>
            <Link href="/en/services/" className="sp-hero-cta sp-hero-cta-outline">All services</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
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
            Installation types
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Sports Facility HVAC Solutions
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
            Dehumidification, ventilation, and regulations
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
            Planning a sports facility HVAC project in Chile?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            We design pool dehumidification, gym ventilation, and court HVAC — with full engineering documentation
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us the facility type, area, and occupancy profile.
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
