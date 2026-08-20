import type { Metadata } from 'next'
import type React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import ContactForm from '@/components/ContactForm'
import HeroCanvas from '@/components/HeroCanvas'
import LangSwitcher from '@/components/LangSwitcher'
import MobileMenu from '@/components/MobileMenu'
import BottomTabBar from '@/components/BottomTabBar'
import RevealSection from '@/components/RevealSection'
import CountUp from '@/components/CountUp'
import FaqAccordion from '@/components/FaqAccordion'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getSiteContent } from '@/lib/site-content'

// Mirror any structural changes in this file to app/page.tsx (and vice versa)

const SVC_ICONS: React.ReactNode[] = [
  /* Commercial HVAC / VRF */
  <><rect key="a" x="2" y="8" width="14" height="9" rx=".5"/><rect key="b" x="20" y="8" width="14" height="9" rx=".5"/><line key="c" x1="2" y1="12" x2="16" y2="12"/><line key="d" x1="20" y1="12" x2="34" y2="12"/><line key="e" x1="9" y1="17" x2="9" y2="22"/><line key="f" x1="27" y1="17" x2="27" y2="22"/><rect key="g" x="5" y="22" width="8" height="8" rx=".5"/><rect key="h" x="23" y="22" width="8" height="8" rx=".5"/><line key="i" x1="13" y1="26" x2="23" y2="26"/></>,
  /* Commercial Refrigeration */
  <><rect key="a" x="3" y="6" width="30" height="22" rx=".5"/><line key="b" x1="3" y1="14" x2="33" y2="14"/><line key="c" x1="10" y1="6" x2="10" y2="14"/><line key="d" x1="18" y1="6" x2="18" y2="14"/><line key="e" x1="26" y1="6" x2="26" y2="14"/><line key="f" x1="7" y1="20" x2="7" y2="22"/><line key="g" x1="14" y1="20" x2="14" y2="22"/><line key="h" x1="21" y1="20" x2="21" y2="22"/><line key="i" x1="28" y1="20" x2="28" y2="22"/><line key="j" x1="3" y1="28" x2="33" y2="28"/></>,
  /* Ventilation & Extraction */
  <><circle key="a" cx="18" cy="18" r="8"/><circle key="b" cx="18" cy="18" r="2.5"/><path key="c" d="M18 4v5M18 27v5M4 18h5M27 18h5"/><path key="d" d="M8.5 8.5l3.5 3.5M24 24l3.5 3.5M27.5 8.5L24 12M12 24l-3.5 3.5"/></>,
  /* Preventive Maintenance */
  <><path key="a" d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10"/><path key="b" d="M22 10 L26 14 M22 10 L18 14"/><circle key="c" cx="28" cy="10" r="3"/><path key="d" d="M10 32 L14 26 L18 29 L24 20"/></>,
  /* Turnkey Project */
  <><rect key="a" x="5" y="5" width="18" height="26" rx=".5"/><line key="b" x1="9" y1="12" x2="19" y2="12"/><line key="c" x1="9" y1="17" x2="19" y2="17"/><line key="d" x1="9" y1="22" x2="15" y2="22"/><circle key="e" cx="26" cy="26" r="6"/><path key="f" d="M23 26 L25 28 L29 23"/></>,
  /* VRV/VRF Operational Analysis */
  <><path key="a" d="M4 32 L12 20 L20 25 L28 10 L34 14"/><circle key="b" cx="12" cy="20" r="2" fill="currentColor" stroke="none"/><circle key="c" cx="20" cy="25" r="2" fill="currentColor" stroke="none"/><circle key="d" cx="28" cy="10" r="2" fill="currentColor" stroke="none"/><line key="e" x1="4" y1="32" x2="34" y2="32"/></>,
  /* HVAC Energy Efficiency */
  <><path key="a" d="M18 4 L21 13 L30 13 L23 19 L26 28 L18 22 L10 28 L13 19 L6 13 L15 13 Z"/></>,
  /* Engineering Consultancy */
  <><rect key="a" x="3" y="4" width="30" height="22" rx=".5"/><line key="b" x1="10" y1="4" x2="10" y2="26"/><line key="c" x1="18" y1="4" x2="18" y2="26"/><line key="d" x1="3" y1="12" x2="33" y2="12"/><line key="e" x1="3" y1="20" x2="33" y2="20"/><line key="f" x1="8" y1="30" x2="28" y2="30"/><line key="g" x1="18" y1="26" x2="18" y2="30"/></>,
]

const SECTOR_ICONS: React.ReactNode[] = [
  /* Retail — storefront */
  <><rect key="a" x="3" y="13" width="30" height="19" rx=".5"/><path key="b" d="M3 13 L8 5 L28 5 L33 13"/><line key="c" x1="3" y1="21" x2="33" y2="21"/><rect key="d" x="14" y="24" width="8" height="8"/></>,
  /* Mining & Industry — factory */
  <><rect key="a" x="2" y="16" width="32" height="16" rx=".5"/><path key="b" d="M2 16 L10 8 L18 16 L26 8 L34 16"/><rect key="c" x="6" y="22" width="5" height="10"/><rect key="d" x="15" y="22" width="5" height="10"/><rect key="e" x="24" y="22" width="5" height="10"/></>,
  /* Hospitality — hotel with star */
  <><rect key="a" x="5" y="12" width="26" height="20" rx=".5"/><line key="b" x1="5" y1="20" x2="31" y2="20"/><line key="c" x1="5" y1="26" x2="31" y2="26"/><line key="d" x1="13" y1="12" x2="13" y2="20"/><line key="e" x1="23" y1="12" x2="23" y2="20"/><rect key="f" x="14" y="26" width="8" height="6"/><path key="g" d="M18 3 L19 6.5 L22.5 6.5 L19.8 8.5 L20.8 12 L18 10 L15.2 12 L16.2 8.5 L13.5 6.5 L17 6.5 Z"/></>,
  /* Data Centers — server rack */
  <><rect key="a" x="4" y="3" width="28" height="30" rx=".5"/><rect key="b" x="8" y="7" width="14" height="4" rx=".3"/><rect key="c" x="8" y="15" width="14" height="4" rx=".3"/><rect key="d" x="8" y="23" width="14" height="4" rx=".3"/><circle key="e" cx="26" cy="9" r="1.5" fill="currentColor" stroke="none"/><circle key="f" cx="26" cy="17" r="1.5" fill="currentColor" stroke="none"/><circle key="g" cx="26" cy="25" r="1.5" fill="currentColor" stroke="none"/></>,
  /* Agribusiness — snowflake (cold chain) */
  <><line key="a" x1="18" y1="4" x2="18" y2="32"/><line key="b" x1="4" y1="18" x2="32" y2="18"/><line key="c" x1="9" y1="9" x2="27" y2="27"/><line key="d" x1="27" y1="9" x2="9" y2="27"/></>,
]

const SECTORES_EN = [
  { nombre: 'Retail & Shopping Centers', desc: 'HVAC for stores, supermarkets and large commercial surfaces.' },
  { nombre: 'Mining & Industry', desc: 'Ventilation and cooling for process plants, electrical rooms and mining facilities.' },
  { nombre: 'Hospitality', desc: 'VRF systems for boutique hotels, apart hotels and hotel chains.' },
  { nombre: 'Data Centers', desc: 'Precision cooling for server rooms and enterprise data centers.' },
  { nombre: 'Agribusiness', desc: 'Industrial refrigeration for cold storage, packing plants and cold chain logistics.' },
]

const BRANDS = [
  { name: 'LG', src: '/brands/lg.png', width: 63, height: 34 },
  { name: 'Samsung', src: '/brands/samsung.png', width: 1024, height: 272 },
  { name: 'Gree', src: '/brands/gree.png', width: 120, height: 24 },
] as const

const TAB_ICONS_EN = {
  inicio: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20h-6v-5.5H9V20H3z"/></svg>,
  servicios: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="7.5" height="7.5" rx=".5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx=".5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx=".5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx=".5"/></svg>,
  nosotros: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  faq: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M10 9.8c0-1.2 1-2 2-2s2 .9 2 2c0 1.1-1 1.7-1.7 2.5-.3.4-.3.7-.3 1"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>,
  contacto: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="M2 7l10 7 10-7"/></svg>,
}

const t = {
  navInicio: 'Home',
  navServicios: 'Specialties', navNosotros: 'About', navFaq: 'FAQ', navContacto: 'Contact',
  navCta: 'Request a Quote', marcasLabel: 'Parts Request', quienesSomos: 'Who we are',
  whatsapp: 'WhatsApp', horario: 'Hours', horarioValue: 'Monday – Friday, 8:30 – 18:00',
  heroBtn1: 'Our specialties', heroBtn2: 'Request a quote', svcCta: 'Get a quote →',
  sectorBadge: 'Industrial · Commercial services',
  statsAnios: 'years of experience', statsCobertura: 'Nationwide coverage',
  statsMarcas: 'Brands with parts support', statsSoporte: 'Technical support',
  contactoEyebrow: "Let's talk", contactoTitulo: 'Request a Quote',
  contactoDirecto: 'Direct contact', ubicacion: 'Location', telefono: 'Phone', email: 'Email',
  intlEyebrow: 'International Projects',
  intlTitle: 'Working with us from abroad',
  intlBody: 'D&Z Building delivers BIM HVAC models and full technical documentation in English. Whether you are an international consultant, developer, or investor working in Chile, we are set up for remote collaboration.',
  intlF1: 'Technical documentation in English',
  intlF2: 'BIM models for cross-border workflows',
  intlF3: 'Remote consultations via video call',
  intlF4: 'Dedicated contact for international inquiries',
  intlCta: 'Get in touch',
}

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  const seo = c.en.seo
  return {
    metadataBase: new URL(siteUrl),
    title: seo.titulo,
    description: seo.descripcion,
    keywords: seo.keywords,
    alternates: {
      canonical: '/en/',
      languages: {
        'es': '/',
        'en': '/en/',
        'x-default': '/',
      },
    },
    openGraph: {
      title: seo.titulo,
      description: seo.descripcion,
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['es_CL'],
      url: '/en/',
      siteName: c.empresa.nombre,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: c.empresa.nombre }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.titulo,
      description: seo.descripcion,
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
    other: {
      'geo.region': 'CL-RM',
      'geo.placename': 'Santiago, Chile',
      'geo.position': '-33.4489;-70.6693',
      'ICBM': '-33.4489, -70.6693',
    },
  }
}

export default async function HomeEN() {
  const c = await getSiteContent()
  const hero = c.en.hero
  const nosotros = c.en.nosotros
  const servicios = c.en.servicios
  const faq = c.en.faq
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  const waDigits = c.empresa.telefono.replace(/\D/g, '')
  const waNumber = waDigits.startsWith('56') ? waDigits : `56${waDigits}`
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello, I am interested in getting a quote for a commercial HVAC or refrigeration project. Could you contact me?')}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HVACBusiness',
        '@id': `${siteUrl}/#business`,
        name: c.empresa.nombre,
        description: c.en.seo.descripcion,
        url: siteUrl,
        telephone: c.empresa.telefono,
        email: c.empresa.email,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og.png`,
        taxID: c.empresa.rut,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -33.4489,
          longitude: -70.6693,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Santiago',
          addressRegion: 'Metropolitan Region',
          addressCountry: 'CL',
        },
        areaServed: { '@type': 'Country', name: 'Chile' },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:30',
            closes: '18:00',
          },
        ],
        priceRange: '$$',
        knowsAbout: [
          'Commercial HVAC Chile', 'VRF System Installation Chile', 'VRV System Chile',
          'Commercial Refrigeration Chile', 'Industrial HVAC Chile',
          'HVAC Energy Efficiency', 'Turnkey HVAC Projects Chile',
          'Preventive VRF Maintenance', 'BIM HVAC Modeling', 'HVAC BIM Design',
          'LG VRF Parts Chile', 'Samsung HVAC Parts Chile', 'Gree Air Conditioning Chile',
          'Mining Facility HVAC Chile', 'Data Center Cooling Santiago', 'Cold Chain Refrigeration Chile',
          'Hotel Air Conditioning Chile', 'BIM HVAC Engineering Chile',
          'Corporate Office HVAC', 'Heat Recovery VRF System', 'HVAC Operational Analysis',
        ],
        brand: [
          { '@type': 'Brand', name: 'LG' },
          { '@type': 'Brand', name: 'Samsung' },
          { '@type': 'Brand', name: 'Gree' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'HVAC and Refrigeration Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial HVAC VRF/VRV',
                description: 'Design, supply and installation of VRF/VRV systems for offices, hotels, retail, clinics, mining plants and data centers.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial Refrigeration',
                description: 'Display cases, cold rooms and refrigeration equipment for supermarkets, foodservice and food industry.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Turnkey HVAC Projects',
                description: 'Engineering, supply, installation and commissioning of complete HVAC systems.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Preventive HVAC Maintenance',
                description: 'Periodic maintenance plans for VRF systems, air conditioning and commercial refrigeration.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'HVAC Energy Efficiency',
                description: 'Consumption diagnostics, energy audits and HVAC system optimization.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Industrial Ventilation & Extraction',
                description: 'HRV systems, exhaust fans and air renewal for industrial and commercial spaces.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'VRV/VRF Operational Analysis',
                description: 'Diagnostics of VRV/VRF systems in operation: real efficiency, recurring faults and optimization plan for commercial and industrial installations.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'BIM HVAC Modeling & Engineering Consulting',
                description: 'Independent technical consulting for HVAC projects: specifications, tendering, design review and BIM HVAC modeling.',
              },
            },
          ],
        },
        foundingDate: '2006',
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10 },
        sameAs: [`https://wa.me/${waNumber}`],
        contactPoint: [{
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: c.empresa.telefono,
          email: c.empresa.email,
          areaServed: 'CL',
          availableLanguage: ['Spanish', 'English'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:30',
            closes: '18:00',
          },
        }],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: c.empresa.nombre,
        description: c.en.seo.descripcion,
        publisher: { '@id': `${siteUrl}/#business` },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/en/#webpage`,
        url: `${siteUrl}/en/`,
        name: c.en.seo.titulo,
        description: c.en.seo.descripcion,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#business` },
        inLanguage: 'en',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [{
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/en/`,
          }],
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.sec-title', '.hero-content p'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/en/#faq`,
        url: `${siteUrl}/en/#faq`,
        inLanguage: 'en',
        mainEntity: faq.items.map(item => ({
          '@type': 'Question',
          name: item.pregunta,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.respuesta,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? 'G-1G3JSB5T7X'}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        if (!window.location.pathname.startsWith('/admin')) {
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID ?? 'G-1G3JSB5T7X'}');
        }
      `}</Script>
      <a href="#inicio" className="skip-link">Skip to content</a>
      <nav>
        <a className="nav-logo" href="#inicio">
          <Image src="/logo.png" alt={c.empresa.nombre} width={650} height={300} priority style={{ height: 44, width: 'auto' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#servicios">{t.navServicios}</a></li>
          <li><a href="#nosotros">{t.navNosotros}</a></li>
          <li><a href="#faq">{t.navFaq}</a></li>
          <li><a href="#contacto">{t.navContacto}</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a className="nav-tel" href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="nav" data-ga-lang="en" aria-label={`Call ${c.empresa.telefono}`}>
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/></svg>
            {c.empresa.telefono}
          </a>
          <LangSwitcher lang="en" />
          <a className="nav-cta" href="#contacto" data-ga-event="cta_clicked" data-ga-location="nav" data-ga-label={t.navCta} data-ga-lang="en">{t.navCta}</a>
          <MobileMenu
            lang="en"
            links={[
              { label: t.navServicios, href: '#servicios' },
              { label: t.navNosotros, href: '#nosotros' },
              { label: t.navFaq,      href: '#faq' },
              { label: t.navContacto, href: '#contacto' },
            ]}
            cta={{ label: t.navCta, href: '#contacto' }}
            quickContact={{ waUrl, waLabel: 'WhatsApp', phoneUrl: `tel:${c.empresa.telefono}`, phoneLabel: 'Call' }}
          />
        </div>
      </nav>

      <main>
      {/* HERO */}
      <section id="inicio" className="hero">
        <HeroCanvas />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1>{hero.titulo}</h1>
          <p>{hero.subtitulo}</p>
          <div className="actions">
            <a className="btn-p" href="#contacto" data-ga-event="cta_clicked" data-ga-location="hero_primary" data-ga-label={t.heroBtn2} data-ga-lang="en">{t.heroBtn2}</a>
            <a className="btn-o" href="#servicios" data-ga-event="cta_clicked" data-ga-location="hero_secondary" data-ga-label={t.heroBtn1} data-ga-lang="en">{t.heroBtn1}</a>
          </div>
          <span className="sector-badge">{t.sectorBadge}</span>
        </div>
      </section>

      {/* BRANDS */}
      <div className="brands">
        <span className="brands-label">{t.marcasLabel}</span>
        <div className="brands-list">
          {BRANDS.map(brand => (
            <div key={brand.name} className="brand-logo">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALTIES */}
      <RevealSection className="sec" id="servicios">
        <div className="sec-eyebrow">{servicios.eyebrow}</div>
        <h2 className="sec-title">{servicios.titulo}</h2>
        <div className="svc-grid">
          {servicios.items.map((item, i) => (
            <div className="svc" key={i}>
              <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                {SVC_ICONS[i]}
              </svg>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <a
                href="#contacto"
                className="svc-cta"
                aria-label={`${t.svcCta} — ${item.titulo}`}
                data-ga-event="cta_clicked"
                data-ga-location="service_card"
                data-ga-label={item.titulo}
                data-ga-lang="en"
                data-service-idx={i}
              >{t.svcCta}</a>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* HOW WE WORK */}
      <RevealSection className="sec" id="proceso">
        <div className="sec-eyebrow">Our process</div>
        <h2 className="sec-title">How we work</h2>
        <div className="proceso-grid">
          {([
            { n: '01', titulo: 'Initial assessment', desc: 'We evaluate the space, needs and project conditions.' },
            { n: '02', titulo: 'Technical proposal', desc: 'Detailed quote with equipment specifications, project timeline and total cost.' },
            { n: '03', titulo: 'Design & engineering', desc: 'Calculations, drawings and BIM coordination for project approval and permitting.' },
            { n: '04', titulo: 'Installation & commissioning', desc: 'Execution by certified technicians, performance testing and full documentation handover.' },
          ] as const).map(s => (
            <div className="proceso-step" key={s.n}>
              <div className="proceso-n">{s.n}</div>
              <h3>{s.titulo}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ABOUT */}
      <RevealSection className="sec" id="nosotros">
        <div className="nosotros-wrap">
          <div className="nt">
            <div className="sec-eyebrow">{t.quienesSomos}</div>
            <h2 className="sec-title">
              {nosotros.titulo.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
            <p>{nosotros.p1}</p>
            <p>{nosotros.p2}</p>
          </div>
          <div className="stats">
            <div className="stat"><div className="stat-n"><CountUp to={20} /></div><div className="stat-l">{t.statsAnios}</div></div>
            <div className="stat"><div className="stat-n">Chile</div><div className="stat-l">{t.statsCobertura}</div></div>
            <div className="stat"><div className="stat-n"><CountUp to={3} /></div><div className="stat-l">{t.statsMarcas}</div></div>
            <div className="stat"><div className="stat-n">24/7</div><div className="stat-l">{t.statsSoporte}</div></div>
          </div>
        </div>
        <div className="ventajas">
          <div className="ventaja">
            <span className="ventaja-tag">BIM</span>
            <h3>Integrated BIM engineering</h3>
            <p>We coordinate with architects and contractors through BIM HVAC models, reducing installation conflicts and accelerating project approval.</p>
          </div>
          <div className="ventaja">
            <span className="ventaja-tag">PARTS</span>
            <h3>LG, Samsung &amp; Gree parts request</h3>
            <p>We manage parts requests and dispatch for LG, Samsung and Gree, with certified after-sales technical support from the market-leading brands.</p>
          </div>
          <div className="ventaja">
            <span className="ventaja-tag">B2B</span>
            <h3>Commercial and industrial projects only</h3>
            <p>20 years without residential projects. All our technical capacity is dedicated to the level of complexity required by commercial and industrial projects.</p>
          </div>
        </div>
      </RevealSection>

      {/* INDUSTRIES */}
      <RevealSection className="sec" id="sectores">
        <div className="sec-eyebrow">Industries</div>
        <h2 className="sec-title">Industries we serve</h2>
        <div className="sectores-grid">
          {SECTORES_EN.map((s, i) => (
            <div className="sector-card" key={i}>
              <svg className="sector-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                {SECTOR_ICONS[i]}
              </svg>
              <h3>{s.nombre}</h3>
              <p>{s.desc}</p>
              <a
                href="#contacto"
                className="sector-cta"
                aria-label={`Get a quote for ${s.nombre}`}
                data-ga-event="cta_clicked"
                data-ga-location="sector_card"
                data-ga-label={s.nombre}
                data-ga-lang="en"
                data-sector-idx={i}
              >Get a quote →</a>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* GUARANTEES */}
      <RevealSection className="sec" id="garantias">
        <div className="garantia-bar">
          {([
            {
              titulo: 'Factory-backed equipment warranty',
              desc: 'LG, Samsung & Gree parts request. All equipment includes direct manufacturer warranty — no gray-market risk.',
              icon: <><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></>,
            },
            {
              titulo: '12-month installation warranty',
              desc: 'All labor is covered for 12 months. If anything fails due to our work, we fix it at no charge.',
              icon: <><path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5z"/></>,
            },
            {
              titulo: 'Manufacturer-certified technicians',
              desc: 'Our team is trained and certified directly by LG, Samsung and Gree for VRF/VRV installation and maintenance.',
              icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h10M7 12h6"/></>,
            },
            {
              titulo: 'Detailed technical proposal',
              desc: 'We evaluate your project and deliver a technical and cost proposal tailored to your needs.',
              icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
            },
          ] as const).map((g, i) => (
            <div className="garantia-bar-item" key={i}>
              <svg className="garantia-bar-ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                {g.icon}
              </svg>
              <div className="garantia-bar-txt">
                <span className="garantia-bar-titulo">{g.titulo}</span>
                <span className="garantia-bar-desc">{g.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="sec" id="faq">
        <div className="sec-eyebrow">{faq.eyebrow}</div>
        <h2 className="sec-title">{faq.titulo}</h2>
        <FaqAccordion items={faq.items} lang="en" />
      </RevealSection>

      {/* INTERNATIONAL PROJECTS */}
      <RevealSection className="sec" id="internacional">
        <div className="intl-callout">
          <div className="sec-eyebrow">{t.intlEyebrow}</div>
          <h2 className="sec-title">{t.intlTitle}</h2>
          <p style={{ fontSize: 14, color: 'var(--dim)', fontWeight: 300, lineHeight: 1.7, marginBottom: 0 }}>{t.intlBody}</p>
          <ul className="intl-features">
            <li>{t.intlF1}</li>
            <li>{t.intlF2}</li>
            <li>{t.intlF3}</li>
            <li>{t.intlF4}</li>
          </ul>
          <a
            className="btn-p"
            href="#contacto"
            data-ga-event="cta_clicked"
            data-ga-location="intl_callout"
            data-ga-label={t.intlCta}
            data-ga-lang="en"
            data-service-idx="4"
          >{t.intlCta}</a>
        </div>
      </RevealSection>

      {/* CONTACT */}
      <RevealSection className="sec" id="contacto">
        <div className="sec-eyebrow">{t.contactoEyebrow}</div>
        <h2 className="sec-title">{t.contactoTitulo}</h2>
        <div className="contact-grid">
          <div className="ci-block">
            <h4>{t.contactoDirecto}</h4>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M7.5 1C5.6 1 4 2.6 4 4.5c0 3 3.5 8.5 3.5 8.5S11 7.5 11 4.5C11 2.6 9.4 1 7.5 1z"/>
                <circle cx="7.5" cy="4.5" r="1.5"/>
              </svg>
              <div className="ci-txt"><strong>{t.ubicacion}</strong>{c.empresa.direccion}</div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/>
              </svg>
              <div className="ci-txt"><strong>{t.telefono}</strong><a href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="contact_block" data-ga-lang="en">{c.empresa.telefono}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="2.5" width="13" height="10" rx="1"/>
                <path d="M1 3.5l6.5 4.5 6.5-4.5"/>
              </svg>
              <div className="ci-txt"><strong>{t.email}</strong><a href={`mailto:${c.empresa.email}`} data-ga-event="email_clicked" data-ga-location="contact_block" data-ga-lang="en">{c.empresa.email}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true">
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.16.32 2.24.87 3.17L1.25 13.75l3.15-.85c.9.5 1.94.79 3.1.79 3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25zm0 11.25c-1 0-1.94-.28-2.73-.76l-1.9.51.52-1.86A5 5 0 117.5 12.5zm2.77-3.74c-.15-.08-.9-.44-1.04-.49-.14-.05-.24-.08-.34.08-.1.15-.4.49-.48.59-.09.1-.18.11-.33.04-.15-.08-.63-.23-1.2-.74-.44-.4-.74-.89-.83-1.04-.09-.15-.01-.23.07-.3.07-.07.15-.18.23-.27.08-.09.1-.15.15-.25.05-.1.02-.19-.01-.27-.04-.08-.34-.82-.46-1.12-.12-.3-.25-.26-.34-.26-.09 0-.19-.01-.29-.01-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.54 1.47.62 1.57c.08.1 1.06 1.62 2.57 2.27.36.16.64.25.86.32.36.11.69.1.95.06.29-.04.9-.37 1.03-.72.13-.35.13-.65.09-.72-.04-.07-.14-.11-.29-.18z"/>
              </svg>
              <div className="ci-txt"><strong>{t.whatsapp}</strong><a href={waUrl} target="_blank" rel="noopener noreferrer" data-ga-event="whatsapp_clicked" data-ga-location="contact_block" data-ga-lang="en">{c.empresa.telefono}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="6"/>
                <path d="M7.5 4.5v3l1.8 1.8"/>
              </svg>
              <div className="ci-txt"><strong>{t.horario}</strong>{t.horarioValue}</div>
            </div>
            <div className="ci-trust" aria-label="Fast response">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><circle cx="7.5" cy="7.5" r="6"/><path d="M7.5 4.5v3l1.8 1.8"/></svg>
              We&apos;ll get back to you shortly
            </div>
            <div className="ci-trust" aria-label="Free quote, no commitment">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2.5 7.5L6 11l6.5-7"/></svg>
              Free quote · No commitment
            </div>
            <div className="next-steps">
              <p className="next-steps-hd">What happens next?</p>
              <div className="next-step">
                <span className="next-step-n">01</span>
                <div><div className="next-step-l">Immediate confirmation</div><div className="next-step-d">You&apos;ll receive an automatic acknowledgement</div></div>
              </div>
              <div className="next-step">
                <span className="next-step-n">02</span>
                <div><div className="next-step-l">Project review</div><div className="next-step-d">A specialist evaluates your project at no cost or obligation</div></div>
              </div>
              <div className="next-step">
                <span className="next-step-n">03</span>
                <div><div className="next-step-l">Technical proposal</div><div className="next-step-d">Design and detailed quote tailored to your project</div></div>
              </div>
            </div>
          </div>
          <ContactForm lang="en" waUrl={waUrl} />
        </div>
      </RevealSection>
      </main>

      <footer>
        <div className="f-cta">
          <p className="f-cta-txt">Have a commercial or industrial HVAC project? <em>Let&apos;s talk.</em></p>
          <a className="nav-cta" href="#contacto" data-ga-event="cta_clicked" data-ga-location="footer" data-ga-label={t.navCta} data-ga-lang="en">{t.navCta}</a>
        </div>
        <div className="f-logo">
          <Image src="/logo.png" alt={c.empresa.nombre} width={650} height={300} style={{ height: 32, width: 'auto' }} />
        </div>
        <div className="f-contact">
          <a className="f-contact-link" href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="footer" data-ga-lang="en">
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/></svg>
            {c.empresa.telefono}
          </a>
          <a className="f-contact-link" href={`mailto:${c.empresa.email}`} data-ga-event="email_clicked" data-ga-location="footer" data-ga-lang="en">
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><rect x="1" y="2.5" width="13" height="10" rx="1"/><path d="M1 3.5l6.5 4.5 6.5-4.5"/></svg>
            {c.empresa.email}
          </a>
          <a className="f-contact-link" href={waUrl} target="_blank" rel="noopener noreferrer" data-ga-event="whatsapp_clicked" data-ga-location="footer" data-ga-lang="en">
            <svg viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true"><path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.16.32 2.24.87 3.17L1.25 13.75l3.15-.85c.9.5 1.94.79 3.1.79 3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25zm2.77 8.51c-.15-.08-.9-.44-1.04-.49-.14-.05-.24-.08-.34.08-.1.15-.4.49-.48.59-.09.1-.18.11-.33.04-.15-.08-.63-.23-1.2-.74-.44-.4-.74-.89-.83-1.04-.09-.15-.01-.23.07-.3.07-.07.15-.18.23-.27.08-.09.1-.15.15-.25.05-.1.02-.19-.01-.27-.04-.08-.34-.82-.46-1.12-.12-.3-.25-.26-.34-.26-.09 0-.19-.01-.29-.01-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.54 1.47.62 1.57c.08.1 1.06 1.62 2.57 2.27.36.16.64.25.86.32.36.11.69.1.95.06.29-.04.9-.37 1.03-.72.13-.35.13-.65.09-.72-.04-.07-.14-.11-.29-.18z"/></svg>
            WhatsApp
          </a>
        </div>
        <ul className="f-links">
          <li><a href="#servicios">{t.navServicios}</a></li>
          <li><a href="#nosotros">{t.navNosotros}</a></li>
          <li><a href="#faq">{t.navFaq}</a></li>
          <li><a href="#contacto">{t.navContacto}</a></li>
        </ul>
        <div className="f-copy">
          © {new Date().getFullYear()} {c.empresa.nombre}. All rights reserved.
          {' · '}
          <a href="https://haraya.dev" target="_blank" rel="noopener" className="f-credit">Site by HarayaDev</a>
        </div>
      </footer>

      <BottomTabBar lang="en" tabs={[
        { label: t.navInicio,    href: '#inicio',    icon: TAB_ICONS_EN.inicio },
        { label: t.navServicios, href: '#servicios', icon: TAB_ICONS_EN.servicios },
        { label: t.navNosotros,  href: '#nosotros',  icon: TAB_ICONS_EN.nosotros },
        { label: t.navFaq,       href: '#faq',       icon: TAB_ICONS_EN.faq },
        { label: t.navContacto,  href: '#contacto',  icon: TAB_ICONS_EN.contacto, accent: true },
      ]} />
      <WhatsAppButton phone={c.empresa.telefono} lang="en" />
      <AnalyticsTracker />
    </>
  )
}
