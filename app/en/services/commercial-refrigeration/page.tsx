import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import RevealSection from '@/components/RevealSection'
import FaqAccordion from '@/components/FaqAccordion'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnalyticsTracker from '@/components/AnalyticsTracker'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Commercial Refrigeration Chile — Installation & Maintenance',

  description:
    'Specialist in commercial refrigeration systems in Chile. Display cases, cold rooms, and refrigeration equipment for supermarkets, food service, pharmacies, and agro-industry. Free quote.',
  alternates: {
    canonical: `${siteUrl}/en/services/commercial-refrigeration/`,
    languages: {
      en: `${siteUrl}/en/services/commercial-refrigeration/`,
      es: `${siteUrl}/servicios/refrigeracion-comercial/`,
    },
  },
  openGraph: {
    title: 'Commercial Refrigeration Chile | D&Z Building',
    description:
      'Installation and maintenance of commercial refrigeration equipment in Chile. Display cases, gondolas, and cold rooms. 20+ years of experience.',
    url: `${siteUrl}/en/services/commercial-refrigeration/`,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APPLICATIONS = [
  {
    titulo: 'Supermarkets & Large Retail',
    desc: 'Wall gondolas, frozen-food islands, and meat display cases with continuous cold chain and centralized temperature management.',
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
    titulo: 'Butcher Shops & Fish Markets',
    desc: 'Refrigerated display cases for meat and seafood with controlled temperature and humidity complying with sanitary regulations.',
    icon: (
      <>
        <rect key="a" x="3" y="6" width="30" height="22" rx=".5" />
        <line key="b" x1="3" y1="14" x2="33" y2="14" />
        <line key="c" x1="10" y1="6" x2="10" y2="14" />
        <line key="d" x1="18" y1="6" x2="18" y2="14" />
        <line key="e" x1="26" y1="6" x2="26" y2="14" />
        <line key="f" x1="7" y1="20" x2="7" y2="22" />
        <line key="g" x1="14" y1="20" x2="14" y2="22" />
        <line key="h" x1="21" y1="20" x2="21" y2="22" />
        <line key="i" x1="28" y1="20" x2="28" y2="22" />
        <line key="j" x1="3" y1="28" x2="33" y2="28" />
      </>
    ),
  },
  {
    titulo: 'Restaurants & Food Service',
    desc: 'Cold preparation tables, back-bar coolers, and refrigerated salad bars for professional kitchens and catering.',
    icon: (
      <>
        <rect key="a" x="4" y="8" width="28" height="20" rx=".5" />
        <line key="b" x1="4" y1="16" x2="32" y2="16" />
        <line key="c" x1="14" y1="8" x2="14" y2="16" />
        <line key="d" x1="22" y1="8" x2="22" y2="16" />
        <line key="e" x1="9" y1="22" x2="9" y2="26" />
        <line key="f" x1="18" y1="22" x2="18" y2="26" />
        <line key="g" x1="27" y1="22" x2="27" y2="26" />
      </>
    ),
  },
  {
    titulo: 'Pharmacies & Healthcare',
    desc: 'Pharmaceutical refrigerators and cold rooms that meet ISP/Chile health authority requirements for vaccines and medications.',
    icon: (
      <>
        <rect key="a" x="13" y="3" width="10" height="30" rx=".5" />
        <rect key="b" x="3" y="13" width="30" height="10" rx=".5" />
      </>
    ),
  },
  {
    titulo: 'Agro-industry & Cold Chain',
    desc: 'Walk-in cold rooms, freezer tunnels, and packing plant refrigeration for agribusiness and food distribution.',
    icon: (
      <>
        <line key="a" x1="18" y1="4" x2="18" y2="32" />
        <line key="b" x1="4" y1="18" x2="32" y2="18" />
        <line key="c" x1="9" y1="9" x2="27" y2="27" />
        <line key="d" x1="27" y1="9" x2="9" y2="27" />
      </>
    ),
  },
  {
    titulo: 'Industry & Logistics',
    desc: 'Industrial refrigeration for warehouses, processing plants, and controlled-atmosphere storage facilities.',
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

const FAQ_REFRIG = [
  {
    pregunta: 'What types of commercial refrigeration equipment does D&Z Building install?',
    respuesta: 'We install display cases (upright and open), wall gondolas, refrigerated islands, walk-in cold rooms, under-counter units, prep tables, bar coolers, and industrial freezer tunnels. We work with equipment from leading brands and adapt to your specific needs.',
  },
  {
    pregunta: 'Do you service refrigeration equipment from any brand?',
    respuesta: 'Yes. Our technicians are trained to maintain and repair commercial refrigeration systems from major brands including Carrier, Bohn, Hussmann, True, and others. We also supply spare parts for the most common brands.',
  },
  {
    pregunta: 'How long does installation of a commercial cold room take?',
    respuesta: 'A standard cold room installation typically takes 3–7 business days depending on size and type. We coordinate to minimize disruption to your operations — including weekend or overnight installation if required.',
  },
  {
    pregunta: 'What certifications do your refrigeration technicians hold?',
    respuesta: 'Our technicians are certified in F-Gas refrigerant handling and comply with Chilean regulations. We use environmentally responsible refrigerants (R448A, R449A, R290) where applicable and follow RSSS sanitary standards for food refrigeration.',
  },
  {
    pregunta: 'Do you offer preventive maintenance contracts for refrigeration equipment?',
    respuesta: 'Yes. We offer quarterly, bi-monthly, and monthly maintenance plans that include preventive inspection, refrigerant checks, cleaning of condensers and evaporators, and temperature calibration. Contracts include 24/7 emergency support.',
  },
  {
    pregunta: 'How much does it cost to install commercial refrigeration in Chile?',
    respuesta: 'The cost depends on the type, number of units, and required cold chain. A single display case installation starts from approximately UF 80–150; a full cold room system ranges from UF 500 to UF 5,000+. We provide a detailed free quote.',
  },
  {
    pregunta: 'What is the typical energy consumption of commercial refrigeration systems?',
    respuesta: "Commercial refrigeration can represent 30–60% of a food business's electricity bill. We recommend energy-efficient equipment (Class A++ or A+++) with EC fan motors and variable-speed compressors, which reduce consumption by 20–40% versus older systems.",
  },
  {
    pregunta: 'Do you cover the whole of Chile, or only the Santiago metropolitan region?',
    respuesta: 'We have nationwide coverage. We serve clients in Santiago, Valparaíso, Concepción, Antofagasta, La Serena, Temuco, Iquique, and other regions. For large projects outside the Metropolitan Region, we coordinate our technicians and logistics accordingly.',
  },
]

const VENTAJAS = [
  {
    titulo: '20+ Years of Experience',
    desc: 'We have been installing and maintaining commercial refrigeration in Chile since 2006. We know Chilean regulations, climate conditions, and suppliers.',
  },
  {
    titulo: 'Authorized Multi-Brand Service',
    desc: 'Official distributors of LG and Samsung; authorized service for Carrier, Bohn, Hussmann, True, and other leading brands.',
  },
  {
    titulo: 'Nationwide Coverage',
    desc: 'Teams in the Metropolitan Region with regional coverage from Arica to Puerto Montt. We coordinate remote installations with local logistics.',
  },
  {
    titulo: 'Regulatory Compliance',
    desc: 'All our installations comply with RSSS sanitary regulations and Chilean food safety standards. We provide technical certificates on request.',
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
        { '@type': 'ListItem', position: 3, name: 'Commercial Refrigeration', item: `${siteUrl}/en/services/commercial-refrigeration/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/en/services/commercial-refrigeration/#service`,
      name: 'Commercial Refrigeration Systems — Chile',
      description:
        'Installation, maintenance, and repair of commercial refrigeration equipment in Chile: display cases, cold rooms, gondolas, and industrial refrigeration for supermarkets, food service, pharmacies, and agro-industry.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial Refrigeration',
      url: `${siteUrl}/en/services/commercial-refrigeration/`,
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/en/services/commercial-refrigeration/#faq`,
      mainEntity: FAQ_REFRIG.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default async function CommercialRefrigerationPage() {
  const waMsg = encodeURIComponent('Hello, I am interested in getting a quote for commercial refrigeration equipment. Could you please contact me?')
  const waUrl = `https://wa.me/56940798360?text=${waMsg}`

  return (
    <>
      <Script id="ld-commercial-refrigeration" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <AnalyticsTracker />
      <WhatsAppButton phone="940798360" lang="en" />

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={110}
              height={36}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/en/#servicios" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Services
            </Link>
            <Link href="/en/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Request a Quote
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <RevealSection className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/en/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span>Commercial Refrigeration</span>
          </div>
          <h1 className="sp-hero-title">Commercial Refrigeration<br />Systems in Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 28px' }}>
            Installation, maintenance, and repair of commercial refrigeration equipment for supermarkets,
            food service, pharmacies, and agro-industry. Nationwide coverage. 20+ years of experience.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">
              Request a free quote
            </Link>
            <Link href="/en/#contacto" className="sp-hero-cta sp-hero-cta-outline">
              Contact us
            </Link>
          </div>
        </RevealSection>

        {/* Applications */}
        <RevealSection className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Applications
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Who we serve
          </h2>
          <div className="sp-aplic-grid">
            {APPLICATIONS.map(a => (
              <div key={a.titulo} className="sp-aplic-item">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 36, height: 36, color: 'var(--accent)', flexShrink: 0 }}>
                  {a.icon}
                </svg>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
                  {a.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Advantages */}
        <RevealSection className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Why D&Z Building
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Our differentiators
          </h2>
          <div className="sp-what-grid">
            {VENTAJAS.map(v => (
              <div key={v.titulo}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {v.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Common questions
          </h2>
          <FaqAccordion items={FAQ_REFRIG.map(f => ({ pregunta: f.pregunta, respuesta: f.respuesta }))} />
        </RevealSection>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Let&apos;s talk
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Ready to quote your project?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)' }}>
            Free quote. Certified technicians. Nationwide coverage.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">
              Request a free quote
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="sp-hero-cta sp-hero-cta-outline">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/en/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <nav style={{ display: 'flex', gap: 20 }}>
            <Link href="/en/services/vrf-systems/" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', textDecoration: 'none', letterSpacing: '.06em' }}>
              VRF Systems
            </Link>
            <Link href="/en/#contacto" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', textDecoration: 'none', letterSpacing: '.06em' }}>
              Contact
            </Link>
          </nav>
          <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
