import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import RevealSection from '@/components/RevealSection'
import FaqAccordion from '@/components/FaqAccordion'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  return {
    title: `VRF and VRV Systems in Chile — Installation & Maintenance`,

    description:
      'Specialist company in VRF/VRV system installation and maintenance in Chile. Authorized distributors of LG, Samsung, and Gree. Commercial, healthcare, and industrial projects. Free quotation.',
    alternates: {
      canonical: `${siteUrl}/en/services/vrf-systems/`,
      languages: {
        es: `${siteUrl}/servicios/climatizacion-vrf/`,
      },
    },
    openGraph: {
      title: `VRF/VRV Systems in Chile | ${c.empresa.nombre}`,
      description:
        'VRF/VRV system installation and maintenance in Chile. 20+ years of experience. Authorized distributors LG, Samsung, and Gree. Free quote.',
      url: `${siteUrl}/en/services/vrf-systems/`,
      siteName: c.empresa.nombre,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

const APPLICATIONS = [
  {
    title: 'Offices & Commercial Buildings',
    desc: 'Individual zone control with a single outdoor unit. Up to 40% energy savings versus conventional central systems.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="3" y1="12" x2="33" y2="12" />
        <line key="c" x1="10" y1="4" x2="10" y2="12" />
        <line key="d" x1="18" y1="4" x2="18" y2="12" />
        <line key="e" x1="26" y1="4" x2="26" y2="12" />
        <line key="f" x1="8" y1="30" x2="28" y2="30" />
        <line key="g" x1="18" y1="26" x2="18" y2="30" />
      </>
    ),
  },
  {
    title: 'Hotels & Apart-Hotels',
    desc: 'Silent, high-efficiency system for guest rooms, common areas, and meeting rooms. Compatible with hotel BMS.',
    icon: (
      <>
        <rect key="a" x="5" y="12" width="26" height="20" rx=".5" />
        <line key="b" x1="5" y1="20" x2="31" y2="20" />
        <line key="c" x1="13" y1="12" x2="13" y2="20" />
        <line key="d" x1="23" y1="12" x2="23" y2="20" />
        <rect key="e" x="14" y="26" width="8" height="6" />
        <path key="f" d="M18 3 L19 6.5 L22.5 6.5 L19.8 8.5 L20.8 12 L18 10 L15.2 12 L16.2 8.5 L13.5 6.5 L17 6.5 Z" />
      </>
    ),
  },
  {
    title: 'Retail & Shopping Centres',
    desc: 'HVAC for stores, sales floors, and large retail surfaces. Flexibility for food courts and technical areas.',
    icon: (
      <>
        <rect key="a" x="3" y="13" width="30" height="19" rx=".5" />
        <path key="b" d="M3 13 L8 5 L28 5 L33 13" />
        <line key="c" x1="3" y1="21" x2="33" y2="21" />
        <rect key="d" x="14" y="24" width="8" height="8" />
      </>
    ),
  },
  {
    title: 'Healthcare & Clinics',
    desc: 'Filtration and precise temperature control for operating theaters, ICUs, and recovery areas. Regulatory compliance.',
    icon: (
      <>
        <rect key="a" x="13" y="3" width="10" height="30" rx=".5" />
        <rect key="b" x="3" y="13" width="30" height="10" rx=".5" />
      </>
    ),
  },
  {
    title: 'Data Centers & Technical Rooms',
    desc: 'Precision cooling with N+1 redundancy. Critical temperature and humidity control for server and networking equipment.',
    icon: (
      <>
        <rect key="a" x="4" y="3" width="28" height="30" rx=".5" />
        <rect key="b" x="8" y="7" width="14" height="4" rx=".3" />
        <rect key="c" x="8" y="15" width="14" height="4" rx=".3" />
        <rect key="d" x="8" y="23" width="14" height="4" rx=".3" />
        <circle key="e" cx="26" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle key="f" cx="26" cy="17" r="1.5" fill="currentColor" stroke="none" />
        <circle key="g" cx="26" cy="25" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: 'Industry & Process Plants',
    desc: 'Ventilation and air conditioning for electrical rooms, control rooms, and administrative offices in industrial facilities.',
    icon: (
      <>
        <rect key="a" x="2" y="16" width="32" height="16" rx=".5" />
        <path key="b" d="M2 16 L10 8 L18 16 L26 8 L34 16" />
        <rect key="c" x="6" y="22" width="5" height="10" />
        <rect key="d" x="15" y="22" width="5" height="10" />
        <rect key="e" x="24" y="22" width="5" height="10" />
      </>
    ),
  },
]

const FAQ_VRF = [
  {
    pregunta: 'How many indoor units can a VRF system support?',
    respuesta:
      'A VRF system can connect between 2 and up to 64 indoor units to a single outdoor unit, depending on the model and manufacturer. This makes it ideal for buildings with multiple zones that require individual temperature control.',
  },
  {
    pregunta: 'What is the difference between VRF and VRV?',
    respuesta:
      'VRF (Variable Refrigerant Flow) and VRV (Variable Refrigerant Volume) are exactly the same technology. "VRV" is Daikin\'s registered trademark; all other manufacturers (LG, Samsung, Mitsubishi, etc.) use the generic term "VRF." The operating principle is identical in both cases.',
  },
  {
    pregunta: 'Can VRF systems be installed in existing buildings (retrofit)?',
    respuesta:
      'Yes. VRF systems are particularly well suited for retrofits because they require only refrigerant piping and control cabling — no ductwork. This significantly reduces the impact on the building structure and installation time.',
  },
  {
    pregunta: 'What COP do VRF systems achieve compared to other systems?',
    respuesta:
      'Modern VRF systems from LG, Samsung, and Gree reach a COP between 3.5 and 5.5, meaning they deliver 3.5 to 5.5 times more energy than they consume. This far exceeds conventional central systems (COP 2.5–3.0) and independent split units.',
  },
  {
    pregunta: 'Can VRF systems provide simultaneous heating and cooling?',
    respuesta:
      'Yes. Heat recovery VRF (HR) systems allow some indoor units to cool while others heat simultaneously. This maximizes energy efficiency by transferring the heat displaced internally from one zone to another.',
  },
  {
    pregunta: 'Which VRF brands does D&Z Building install and distribute?',
    respuesta:
      'D&Z Building is an authorized distributor of LG, Samsung, and Gree in Chile. All three brands lead the VRF market with systems from 8 to 130+ HP and broad spare-parts availability in the country.',
  },
  {
    pregunta: 'How long does VRF system installation take?',
    respuesta:
      'The timeline depends on project size. A 3–8 unit system for a mid-size office typically takes 3 to 7 business days. Full-building projects can extend from 4 to 12 weeks. D&Z Building provides a detailed schedule in the quotation.',
  },
  {
    pregunta: 'How do I request a VRF system quotation?',
    respuesta:
      'You can request a free quotation by filling out the contact form at dyzbuilding.cl, emailing contacto@dyzbuilding.cl, or calling the phone number listed on the website. Our technical team responds with a detailed proposal.',
  },
]

const ADVANTAGES = [
  {
    title: 'Authorized Distributors',
    desc: 'LG, Samsung, and Gree. Original equipment with manufacturer warranty and direct technical service support.',
    icon: (
      <path d="M18 3 L21 12 L30 12 L23 18 L26 27 L18 21 L10 27 L13 18 L6 12 L15 12 Z" />
    ),
  },
  {
    title: 'Detailed Engineering',
    desc: 'Load calculations, equipment selection, and BIM coordination for projects requiring permits or technical inspection.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="10" y1="4" x2="10" y2="26" />
        <line key="c" x1="18" y1="4" x2="18" y2="26" />
        <line key="d" x1="3" y1="12" x2="33" y2="12" />
        <line key="e" x1="3" y1="20" x2="33" y2="20" />
      </>
    ),
  },
  {
    title: 'Nationwide Coverage',
    desc: 'We operate throughout Chile — Metropolitan Region, mining regions, southern zone, and remote areas.',
    icon: (
      <>
        <circle key="a" cx="18" cy="15" r="8" />
        <path key="b" d="M18 3 C18 3 18 10 14 18 C10 26 18 33 18 33 C18 33 26 26 22 18 C18 10 18 3 18 3Z" />
        <line key="c" x1="10" y1="15" x2="26" y2="15" />
      </>
    ),
  },
  {
    title: 'Post-Installation Maintenance',
    desc: 'Preventive maintenance plans with diagnostics, cleaning, and performance optimization.',
    icon: (
      <>
        <path key="a" d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10" />
        <path key="b" d="M22 10 L26 14 M22 10 L18 14" />
        <circle key="c" cx="28" cy="10" r="3" />
        <path key="d" d="M10 32 L14 26 L18 29 L24 20" />
      </>
    ),
  },
]

export default async function VrfSystemsPage() {
  const c = await getSiteContent()
  const waNumber = c.empresa.telefono.replace(/\D/g, '')
  const waMsg = encodeURIComponent('Hello, I am interested in getting a quote for a VRF system for a commercial project. Could you contact me?')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/en/` },
          { '@type': 'ListItem', position: 3, name: 'VRF Systems', item: `${siteUrl}/en/services/vrf-systems/` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/en/services/vrf-systems#service`,
        name: 'VRF/VRV System Installation & Maintenance',
        description:
          'Design, installation, and maintenance of VRF and VRV air conditioning systems for commercial, healthcare, and industrial projects in Chile.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'Country', name: 'Chile' },
        serviceType: 'HVAC Installation',
        url: `${siteUrl}/en/services/vrf-systems/`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_VRF.map(faq => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
        })),
      },
    ],
  }

  return (
    <>
      <Script id="ld-vrf-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnalyticsTracker />
      <div className="sp-wrap">

        {/* NAV */}
        <nav className="sp-topnav" role="navigation" aria-label="Main navigation">
          <Link href="/en/" className="sp-topnav-logo">
            <Image src="/logo.png" alt={`${c.empresa.nombre} — Commercial HVAC`} width={120} height={44} priority />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/en/#servicios" className="sp-topnav-link">All services</Link>
            <Link href="/en/#contacto" className="nav-cta" data-ga-event="cta_clicked" data-ga-location="sp_nav" data-ga-lang="en">
              Get a quote
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="sp-hero">
          <nav aria-label="Breadcrumb" className="sp-breadcrumb">
            <Link href="/en/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/en/#servicios">Services</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">VRF Systems</span>
          </nav>
          <div className="sp-hero-eyebrow">Technical specialty · {c.empresa.nombre}</div>
          <h1 className="sp-hero-title">
            VRF and VRV Systems<br />for Commercial HVAC in Chile
          </h1>
          <p className="sp-hero-sub">
            We design, install, and maintain VRF/VRV systems from LG, Samsung, and Gree for commercial,
            healthcare, and industrial projects throughout Chile. Over 20 years of experience and free quotation.
          </p>
          <div className="sp-hero-tags">
            {['VRF System', 'VRV System', 'Multi-Split', 'LG · Samsung · Gree Distributor', 'All Chile'].map(tag => (
              <span key={tag} className="sp-hero-tag">{tag}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/en/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_hero"
              data-ga-lang="en"
            >
              Request a free quotation
            </Link>
            <a
              href={`tel:${c.empresa.telefono.replace(/\s/g, '')}`}
              className="sp-hero-cta sp-hero-cta-outline"
              data-ga-event="phone_clicked"
              data-ga-location="sp_hero"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M3.5 3C5 3 6.5 5 7 7c.3.9 0 2-1 2.5C7.5 12 8 12.5 10.5 14c.5-1 1.6-1.3 2.5-1 2 .5 4 2 4 3.5 0 2-2 3.5-4 3C6.5 18 2 11.5 2 7c0-2 1.5-4 1.5-4Z" />
              </svg>
              {c.empresa.telefono}
            </a>
          </div>
        </section>

        {/* WHAT IS VRF? */}
        <RevealSection className="sp-section" id="sp-what-is">
          <div className="sec-eyebrow">Technology</div>
          <h2 className="sec-title">What is a VRF or VRV system?</h2>
          <div className="sp-what-grid">
            <div className="sp-what-col">
              <h3>Variable refrigerant flow</h3>
              <p>
                A VRF (Variable Refrigerant Flow) system distributes refrigerant to multiple indoor units from a
                single outdoor unit. Inverter technology adjusts the exact capacity needed at each moment,
                eliminating the on/off cycling of conventional systems.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Individual zone control</h3>
              <p>
                Each indoor unit operates independently: a meeting room can be at 64°F while the lobby is at 72°F,
                all connected to the same system. This reduces energy consumption by up to 40% versus central
                systems and provides personalized comfort per zone.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>VRF vs. VRV: what is the difference?</h3>
              <p>
                They are the same technology. &quot;VRV&quot; is Daikin&apos;s registered trademark; all other manufacturers use
                the generic term &quot;VRF.&quot; D&amp;Z Building installs VRF systems from LG, Samsung, and Gree —
                authorized distributors in Chile — with full technical equivalence.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Heat recovery (HR)</h3>
              <p>
                Heat recovery VRF (HR) systems allow simultaneous heating and cooling in the same building.
                Heat extracted from one zone is transferred to another that needs it, maximizing efficiency.
                Ideal for hotels and mixed-use buildings with different solar exposures.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* APPLICATIONS */}
        <RevealSection className="sp-section" id="sp-applications">
          <div className="sec-eyebrow">Application sectors</div>
          <h2 className="sec-title">What type of projects?</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginTop: 12 }}>
            VRF systems are the standard solution for medium and large commercial projects in Chile.
            We install across the following sectors:
          </p>
          <div className="sp-aplic-grid">
            {APPLICATIONS.map(a => (
              <div className="sp-aplic-item" key={a.title}>
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                  {a.icon}
                </svg>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* BRANDS */}
        <RevealSection className="sp-section" id="sp-brands">
          <div className="sec-eyebrow">Authorized distributors</div>
          <h2 className="sec-title">Brands we install</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginTop: 12, marginBottom: 36 }}>
            As authorized distributors of LG, Samsung, and Gree in Chile, we have direct access to original
            equipment, spare parts, and factory technical support for all installed VRF systems.
          </p>
          <div className="brands-row" style={{ justifyContent: 'flex-start', gap: 40 }}>
            <Image src="/brands/lg.png" alt="LG VRF — authorized distributor Chile" width={63} height={34} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
            <Image src="/brands/samsung.png" alt="Samsung VRF — authorized distributor Chile" width={110} height={29} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
            <Image src="/brands/gree.png" alt="Gree VRF — authorized distributor Chile" width={90} height={18} style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
          </div>
        </RevealSection>

        {/* PROCESS */}
        <RevealSection className="sp-section" id="sp-process">
          <div className="sec-eyebrow">Our process</div>
          <h2 className="sec-title">How we work</h2>
          <div className="proceso-grid" style={{ marginTop: 32 }}>
            {([
              { n: '01', titulo: 'Initial assessment', desc: 'We evaluate the space, climate needs, and project conditions. No cost, no commitment.' },
              { n: '02', titulo: 'Technical proposal', desc: 'Detailed quotation with VRF equipment selection, project timeline, and total cost.' },
              { n: '03', titulo: 'Design & engineering', desc: 'Load calculations, installation drawings, and BIM coordination for projects requiring technical inspection.' },
              { n: '04', titulo: 'Installation & commissioning', desc: 'Execution by manufacturer-certified technicians, performance testing, and documented handover.' },
            ] as const).map(s => (
              <div className="proceso-step" key={s.n}>
                <div className="proceso-n">{s.n}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* ADVANTAGES */}
        <RevealSection className="sp-section" id="sp-advantages">
          <div className="sec-eyebrow">Why D&amp;Z Building</div>
          <h2 className="sec-title">What sets us apart</h2>
          <div className="garantia-bar" style={{ marginTop: 32 }}>
            {ADVANTAGES.map(v => (
              <div className="garantia-bar-item" key={v.title}>
                <svg className="garantia-bar-ico" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
                  {v.icon}
                </svg>
                <div className="garantia-bar-txt">
                  <span className="garantia-bar-titulo">{v.title}</span>
                  <span className="garantia-bar-desc">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="sp-section" id="sp-faq">
          <div className="sec-eyebrow">Frequently asked questions</div>
          <h2 className="sec-title">About VRF/VRV systems</h2>
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ_VRF} lang="en" />
          </div>
        </RevealSection>

        {/* FINAL CTA */}
        <section className="sp-cta-bar">
          <div className="sec-eyebrow" style={{ marginBottom: 12 }}>Have a project in mind?</div>
          <h2 className="sp-cta-title">Get a free VRF system quote</h2>
          <p className="sp-cta-sub">
            Our technical team evaluates your project and delivers a detailed proposal.
          </p>
          <div className="sp-cta-btns">
            <Link
              href="/en/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="en"
            >
              Request a free quotation
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              className="sp-hero-cta sp-hero-cta-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="whatsapp_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="en"
            >
              <svg viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.15.31 2.24.86 3.18L1.25 13.75l3.18-.86A6.19 6.19 0 0 0 7.5 13.75c3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25ZM5.6 4.69c.15 0 .3.01.43.04.14.03.32.07.49.5l.63 1.56c.08.2.04.43-.1.6l-.37.45c-.06.07-.1.16-.07.25.2.53.54 1.02.96 1.43.43.42.93.75 1.47.95.1.03.2 0 .26-.08l.38-.47c.16-.2.4-.26.62-.16l1.57.7c.43.19.48.38.49.53.03.34.01.67-.06.99-.23.97-1.18 1.5-2.1 1.5-1 0-2.3-.47-3.6-1.77C4.86 9.9 4.4 8.59 4.38 7.59c-.02-.93.5-1.87 1.47-2.1.08-.02.16-.03.24-.03l-.49.23Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sp-footer">
          <p>
            <Link href="/en/" style={{ color: 'var(--accent)' }}>{c.empresa.nombre}</Link>
            {' '}· Commercial HVAC & Industrial Refrigeration · Santiago, Chile
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/en/">Home</Link>
            <Link href="/en/#servicios">Services</Link>
            <Link href="/en/#contacto">Contact</Link>
          </div>
        </footer>
      </div>
      <WhatsAppButton phone={c.empresa.telefono} lang="en" />
    </>
  )
}
