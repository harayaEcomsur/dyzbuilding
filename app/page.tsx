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

const SVC_ICONS: React.ReactNode[] = [
  /* Climatización Comercial / VRF */
  <><rect key="a" x="2" y="8" width="14" height="9" rx=".5"/><rect key="b" x="20" y="8" width="14" height="9" rx=".5"/><line key="c" x1="2" y1="12" x2="16" y2="12"/><line key="d" x1="20" y1="12" x2="34" y2="12"/><line key="e" x1="9" y1="17" x2="9" y2="22"/><line key="f" x1="27" y1="17" x2="27" y2="22"/><rect key="g" x="5" y="22" width="8" height="8" rx=".5"/><rect key="h" x="23" y="22" width="8" height="8" rx=".5"/><line key="i" x1="13" y1="26" x2="23" y2="26"/></>,
  /* Refrigeración Comercial */
  <><rect key="a" x="3" y="6" width="30" height="22" rx=".5"/><line key="b" x1="3" y1="14" x2="33" y2="14"/><line key="c" x1="10" y1="6" x2="10" y2="14"/><line key="d" x1="18" y1="6" x2="18" y2="14"/><line key="e" x1="26" y1="6" x2="26" y2="14"/><line key="f" x1="7" y1="20" x2="7" y2="22"/><line key="g" x1="14" y1="20" x2="14" y2="22"/><line key="h" x1="21" y1="20" x2="21" y2="22"/><line key="i" x1="28" y1="20" x2="28" y2="22"/><line key="j" x1="3" y1="28" x2="33" y2="28"/></>,
  /* Ventilación y Extracción */
  <><circle key="a" cx="18" cy="18" r="8"/><circle key="b" cx="18" cy="18" r="2.5"/><path key="c" d="M18 4v5M18 27v5M4 18h5M27 18h5"/><path key="d" d="M8.5 8.5l3.5 3.5M24 24l3.5 3.5M27.5 8.5L24 12M12 24l-3.5 3.5"/></>,
  /* Mantenimiento Preventivo */
  <><path key="a" d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10"/><path key="b" d="M22 10 L26 14 M22 10 L18 14"/><circle key="c" cx="28" cy="10" r="3"/><path key="d" d="M10 32 L14 26 L18 29 L24 20"/></>,
  /* Proyectos Llave en Mano */
  <><rect key="a" x="5" y="5" width="18" height="26" rx=".5"/><line key="b" x1="9" y1="12" x2="19" y2="12"/><line key="c" x1="9" y1="17" x2="19" y2="17"/><line key="d" x1="9" y1="22" x2="15" y2="22"/><circle key="e" cx="26" cy="26" r="6"/><path key="f" d="M23 26 L25 28 L29 23"/></>,
  /* Análisis Operacional VRV/VRF */
  <><path key="a" d="M4 32 L12 20 L20 25 L28 10 L34 14"/><circle key="b" cx="12" cy="20" r="2" fill="currentColor" stroke="none"/><circle key="c" cx="20" cy="25" r="2" fill="currentColor" stroke="none"/><circle key="d" cx="28" cy="10" r="2" fill="currentColor" stroke="none"/><line key="e" x1="4" y1="32" x2="34" y2="32"/></>,
  /* Eficiencia Energética HVAC */
  <><path key="a" d="M18 4 L21 13 L30 13 L23 19 L26 28 L18 22 L10 28 L13 19 L6 13 L15 13 Z"/></>,
  /* Asesoría de Ingeniería */
  <><rect key="a" x="3" y="4" width="30" height="22" rx=".5"/><line key="b" x1="10" y1="4" x2="10" y2="26"/><line key="c" x1="18" y1="4" x2="18" y2="26"/><line key="d" x1="3" y1="12" x2="33" y2="12"/><line key="e" x1="3" y1="20" x2="33" y2="20"/><line key="f" x1="8" y1="30" x2="28" y2="30"/><line key="g" x1="18" y1="26" x2="18" y2="30"/></>,
]

const SECTOR_ICONS: React.ReactNode[] = [
  /* Retail — storefront */
  <><rect key="a" x="3" y="13" width="30" height="19" rx=".5"/><path key="b" d="M3 13 L8 5 L28 5 L33 13"/><line key="c" x1="3" y1="21" x2="33" y2="21"/><rect key="d" x="14" y="24" width="8" height="8"/></>,
  /* Salud — medical cross */
  <><rect key="a" x="13" y="3" width="10" height="30" rx=".5"/><rect key="b" x="3" y="13" width="30" height="10" rx=".5"/></>,
  /* Industria / Minería — factory */
  <><rect key="a" x="2" y="16" width="32" height="16" rx=".5"/><path key="b" d="M2 16 L10 8 L18 16 L26 8 L34 16"/><rect key="c" x="6" y="22" width="5" height="10"/><rect key="d" x="15" y="22" width="5" height="10"/><rect key="e" x="24" y="22" width="5" height="10"/></>,
  /* Hotelería — hotel con estrella */
  <><rect key="a" x="5" y="12" width="26" height="20" rx=".5"/><line key="b" x1="5" y1="20" x2="31" y2="20"/><line key="c" x1="5" y1="26" x2="31" y2="26"/><line key="d" x1="13" y1="12" x2="13" y2="20"/><line key="e" x1="23" y1="12" x2="23" y2="20"/><rect key="f" x="14" y="26" width="8" height="6"/><path key="g" d="M18 3 L19 6.5 L22.5 6.5 L19.8 8.5 L20.8 12 L18 10 L15.2 12 L16.2 8.5 L13.5 6.5 L17 6.5 Z"/></>,
  /* Data Centers — server rack */
  <><rect key="a" x="4" y="3" width="28" height="30" rx=".5"/><rect key="b" x="8" y="7" width="14" height="4" rx=".3"/><rect key="c" x="8" y="15" width="14" height="4" rx=".3"/><rect key="d" x="8" y="23" width="14" height="4" rx=".3"/><circle key="e" cx="26" cy="9" r="1.5" fill="currentColor" stroke="none"/><circle key="f" cx="26" cy="17" r="1.5" fill="currentColor" stroke="none"/><circle key="g" cx="26" cy="25" r="1.5" fill="currentColor" stroke="none"/></>,
  /* Agroindustria — copo de nieve (cadena de frío) */
  <><line key="a" x1="18" y1="4" x2="18" y2="32"/><line key="b" x1="4" y1="18" x2="32" y2="18"/><line key="c" x1="9" y1="9" x2="27" y2="27"/><line key="d" x1="27" y1="9" x2="9" y2="27"/></>,
]

const SECTORES_ES = [
  { nombre: 'Retail y Centros Comerciales', desc: 'Climatización de salas de ventas, supermercados y grandes superficies comerciales.' },
  { nombre: 'Salud', desc: 'HVAC para clínicas, hospitales, pabellones quirúrgicos y unidades de cuidado intensivo.' },
  { nombre: 'Industria y Minería', desc: 'Ventilación y refrigeración para plantas de proceso, salas eléctricas y recintos mineros.' },
  { nombre: 'Hotelería', desc: 'Sistemas VRF para hoteles boutique, apart hoteles y cadenas hoteleras.' },
  { nombre: 'Data Centers', desc: 'Climatización de precisión para salas de servidores y centros de datos empresariales.' },
  { nombre: 'Agroindustria', desc: 'Refrigeración industrial para frigoríficos, plantas de packing y cadena de frío.' },
]

const BRANDS = [
  { name: 'LG', src: '/brands/lg.png', width: 63, height: 34 },
  { name: 'Samsung', src: '/brands/samsung.png', width: 1024, height: 272 },
  { name: 'Gree', src: '/brands/gree.png', width: 120, height: 24 },
  { name: 'CYPE', src: '/brands/cype.png', width: 1024, height: 943 },
] as const

const TAB_ICONS = {
  inicio: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5V20h-6v-5.5H9V20H3z"/></svg>,
  servicios: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="7.5" height="7.5" rx=".5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx=".5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx=".5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx=".5"/></svg>,
  nosotros: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  faq: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M10 9.8c0-1.2 1-2 2-2s2 .9 2 2c0 1.1-1 1.7-1.7 2.5-.3.4-.3.7-.3 1"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>,
  contacto: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="1.5"/><path d="M2 7l10 7 10-7"/></svg>,
}

const UI = {
  es: {
    navInicio: 'Inicio',
    navServicios: 'Especialidades', navNosotros: 'Nosotros', navFaq: 'Preguntas', navContacto: 'Contacto',
    navCta: 'Solicitar Cotización', marcasLabel: 'Distribuidores oficiales', quienesSomos: 'Quiénes somos',
    whatsapp: 'WhatsApp', horario: 'Horario', horarioValue: 'Lunes a viernes, 8:30 – 18:00',
    heroBtn1: 'Nuestras especialidades', heroBtn2: 'Solicitar cotización', svcCta: 'Cotizar →',
    sectorBadge: 'Servicios industriales · Comerciales · Hospitalarios',
    statsAnios: 'años de experiencia', statsCobertura: 'Cobertura nacional',
    statsMarcas: 'Distribuidores oficiales', statsSoporte: 'Soporte técnico',
    contactoEyebrow: 'Hablemos', contactoTitulo: 'Solicitar Cotización',
    contactoDirecto: 'Contacto directo', ubicacion: 'Ubicación', telefono: 'Teléfono', email: 'Email',
  },
  en: {
    whatsapp: 'WhatsApp', horario: 'Hours', horarioValue: 'Monday – Friday, 8:30 – 18:00',
    navInicio: 'Home',
    navServicios: 'Specialties', navNosotros: 'About', navFaq: 'FAQ', navContacto: 'Contact',
    navCta: 'Request a Quote', marcasLabel: 'Official brands', quienesSomos: 'Who we are',
    heroBtn1: 'Our specialties', heroBtn2: 'Request a quote', svcCta: 'Get a quote →',
    sectorBadge: 'Industrial · Commercial · Healthcare services',
    statsAnios: 'years of experience', statsCobertura: 'Nationwide coverage',
    statsMarcas: 'Official brands', statsSoporte: 'Technical support',
    contactoEyebrow: "Let's talk", contactoTitulo: 'Request a Quote',
    contactoDirecto: 'Direct contact', ubicacion: 'Location', telefono: 'Phone', email: 'Email',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  const seo = c.seo
  return {
    metadataBase: new URL(siteUrl),
    title: seo.titulo,
    description: seo.descripcion,
    keywords: seo.keywords,
    alternates: {
      canonical: '/',
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
      locale: 'es_CL',
      alternateLocale: ['en_US'],
      url: '/',
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

export default async function Home() {
  const c = await getSiteContent()
  const t = UI.es
  const hero = c.hero
  const nosotros = c.nosotros
  const servicios = c.servicios
  const faq = c.faq
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  const waDigits = c.empresa.telefono.replace(/\D/g, '')
  const waNumber = waDigits.startsWith('56') ? waDigits : `56${waDigits}`
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa cotizar un proyecto de climatización o refrigeración comercial. ¿Podrían contactarme?')}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HVACBusiness',
        '@id': `${siteUrl}/#business`,
        name: c.empresa.nombre,
        description: c.seo.descripcion,
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
          addressRegion: 'Región Metropolitana',
          addressCountry: 'CL',
        },
        areaServed: [
          { '@type': 'Country', name: 'Chile' },
          { '@type': 'City', name: 'Santiago', containedInPlace: { '@type': 'AdministrativeArea', name: 'Región Metropolitana' } },
          { '@type': 'City', name: 'Valparaíso' },
          { '@type': 'City', name: 'Antofagasta' },
          { '@type': 'City', name: 'Concepción' },
        ],
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
          'Climatización comercial Chile', 'Sistemas VRF Chile', 'Sistemas VRV Chile',
          'Refrigeración comercial industrial', 'HVAC industrial Chile',
          'Eficiencia energética HVAC', 'Proyectos llave en mano climatización',
          'Mantención preventiva VRF', 'BIM HVAC', 'Modelamiento BIM HVAC',
          'Distribuidor LG VRF Chile', 'Distribuidor Samsung HVAC Chile', 'Distribuidor Gree Chile',
          'Climatización minería Chile', 'HVAC data centers Santiago', 'Refrigeración agroindustrial Chile',
          'VRF hospitales y clínicas Chile', 'Climatización hoteles Chile', 'Ingeniería BIM HVAC Chile',
          'Climatización edificios corporativos', 'VRF recuperación de calor', 'Análisis operacional HVAC',
        ],
        brand: [
          { '@type': 'Brand', name: 'LG' },
          { '@type': 'Brand', name: 'Samsung' },
          { '@type': 'Brand', name: 'Gree' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de Climatización y Refrigeración',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Climatización Comercial VRF/VRV',
                description: 'Diseño, suministro e instalación de sistemas VRF/VRV para oficinas, hoteles, centros comerciales, clínicas, plantas mineras y data centers.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Refrigeración Comercial',
                description: 'Vitrinas, cámaras frigoríficas y equipos de frío para supermercados, gastronomía e industria alimentaria.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Proyectos Llave en Mano HVAC',
                description: 'Ingeniería, suministro, instalación y puesta en marcha de sistemas de climatización completos.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mantención Preventiva de Climatización',
                description: 'Planes de mantención periódica para sistemas VRF, aire acondicionado y refrigeración comercial en empresas.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Eficiencia Energética HVAC',
                description: 'Diagnóstico de consumo, auditoría energética y optimización de sistemas de climatización.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ventilación y Extracción Industrial',
                description: 'Sistemas VMC, extractores y renovación de aire para espacios industriales y comerciales.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Análisis Operacional VRV/VRF',
                description: 'Diagnóstico de sistemas VRV/VRF en operación: eficiencia real, fallas recurrentes y plan de optimización para instalaciones comerciales e industriales.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Asesoría de Ingeniería HVAC',
                description: 'Consultoría técnica para proyectos de climatización: especificaciones, licitaciones, revisión de diseños y modelamiento BIM HVAC.',
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
        description: c.seo.descripcion,
        publisher: { '@id': `${siteUrl}/#business` },
        inLanguage: 'es-CL',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: c.seo.titulo,
        description: c.seo.descripcion,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#business` },
        inLanguage: 'es-CL',
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
            name: 'Inicio',
            item: `${siteUrl}/`,
          }],
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.sec-title', '.hero-content p'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        url: `${siteUrl}/#faq`,
        inLanguage: 'es-CL',
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
      <a href="#inicio" className="skip-link">Saltar al contenido</a>
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
          <a className="nav-tel" href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="nav" data-ga-lang="es" aria-label={`Llamar a ${c.empresa.telefono}`}>
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/></svg>
            {c.empresa.telefono}
          </a>
          <LangSwitcher lang="es" />
          <a className="nav-cta" href="#contacto" data-ga-event="cta_clicked" data-ga-location="nav" data-ga-label={t.navCta} data-ga-lang="es">{t.navCta}</a>
          <MobileMenu
            lang="es"
            links={[
              { label: t.navServicios, href: '#servicios' },
              { label: t.navNosotros, href: '#nosotros' },
              { label: t.navFaq,      href: '#faq' },
              { label: t.navContacto, href: '#contacto' },
            ]}
            cta={{ label: t.navCta, href: '#contacto' }}
            quickContact={{ waUrl, waLabel: 'WhatsApp', phoneUrl: `tel:${c.empresa.telefono}`, phoneLabel: 'Llamar' }}
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
            <a className="btn-p" href="#contacto" data-ga-event="cta_clicked" data-ga-location="hero_primary" data-ga-label={t.heroBtn2} data-ga-lang="es">{t.heroBtn2}</a>
            <a className="btn-o" href="#servicios" data-ga-event="cta_clicked" data-ga-location="hero_secondary" data-ga-label={t.heroBtn1} data-ga-lang="es">{t.heroBtn1}</a>
          </div>
          <span className="sector-badge">{t.sectorBadge}</span>
        </div>
      </section>

      {/* MARCAS */}
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

      {/* ESPECIALIDADES */}
      <RevealSection className="sec" id="servicios">
        <div className="sec-eyebrow">{servicios.eyebrow}</div>
        <h2 className="sec-title">{servicios.titulo}</h2>
        <div className="svc-grid">
          {servicios.items.map((item, i) => (
            <div className="svc" key={i}>
              <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                {SVC_ICONS[i]}
              </svg>
              {i === 0 ? (
                <h3><a href="/servicios/climatizacion-vrf" style={{ color: 'inherit', textDecoration: 'none' }}>{item.titulo}</a></h3>
              ) : (
                <h3>{item.titulo}</h3>
              )}
              <p>{item.descripcion}</p>
              <a
                href="#contacto"
                className="svc-cta"
                aria-label={`${t.svcCta} — ${item.titulo}`}
                data-ga-event="cta_clicked"
                data-ga-location="service_card"
                data-ga-label={item.titulo}
                data-ga-lang="es"
                data-service-idx={i}
              >{t.svcCta}</a>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* PROCESO */}
      <RevealSection className="sec" id="proceso">
        <div className="sec-eyebrow">Nuestro proceso</div>
        <h2 className="sec-title">¿Cómo trabajamos?</h2>
        <div className="proceso-grid">
          {([
            { n: '01', titulo: 'Diagnóstico inicial', desc: 'Evaluamos el espacio, necesidades y condiciones del proyecto.' },
            { n: '02', titulo: 'Propuesta técnica', desc: 'Cotización detallada con especificaciones de equipos, plazos de ejecución y valor total.' },
            { n: '03', titulo: 'Diseño e ingeniería', desc: 'Memorias de cálculo, planos y coordinación BIM para la aprobación del proyecto.' },
            { n: '04', titulo: 'Instalación y puesta en marcha', desc: 'Ejecución con técnicos certificados, pruebas de funcionamiento y entrega documentada.' },
          ] as const).map(s => (
            <div className="proceso-step" key={s.n}>
              <div className="proceso-n">{s.n}</div>
              <h3>{s.titulo}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* NOSOTROS */}
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
            <h3>Ingeniería BIM integrada</h3>
            <p>Coordinamos con arquitectos y constructoras mediante modelos BIM HVAC, reduciendo conflictos de instalación y acelerando la aprobación de proyectos.</p>
          </div>
          <div className="ventaja">
            <span className="ventaja-tag">OFICIAL</span>
            <h3>Distribuidores oficiales LG, Samsung y Gree</h3>
            <p>Acceso directo a equipos genuinos, precios de distribuidor y soporte técnico postventa certificado por las marcas líderes del mercado.</p>
          </div>
          <div className="ventaja">
            <span className="ventaja-tag">B2B</span>
            <h3>Solo proyectos comerciales e industriales</h3>
            <p>20 años sin proyectos residenciales. Toda nuestra capacidad técnica está dedicada al nivel de exigencia de proyectos comerciales, hospitalarios e industriales.</p>
          </div>
        </div>
      </RevealSection>

      {/* SECTORES */}
      <RevealSection className="sec" id="sectores">
        <div className="sec-eyebrow">Sectores</div>
        <h2 className="sec-title">Industrias que atendemos</h2>
        <div className="sectores-grid">
          {SECTORES_ES.map((s, i) => (
            <div className="sector-card" key={i}>
              <svg className="sector-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                {SECTOR_ICONS[i]}
              </svg>
              <h3>{s.nombre}</h3>
              <p>{s.desc}</p>
              <a
                href="#contacto"
                className="sector-cta"
                aria-label={`Cotizar para ${s.nombre}`}
                data-ga-event="cta_clicked"
                data-ga-location="sector_card"
                data-ga-label={s.nombre}
                data-ga-lang="es"
                data-sector-idx={i}
              >Cotizar →</a>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* GARANTIAS */}
      <RevealSection className="sec" id="garantias">
        <div className="garantia-bar">
          {([
            {
              titulo: 'Equipos con garantía de fábrica',
              desc: 'Distribuidores oficiales LG, Samsung y Gree. Todos los equipos incluyen garantía directa del fabricante.',
              icon: <><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></>,
            },
            {
              titulo: 'Garantía de instalación 12 meses',
              desc: 'Garantizamos toda mano de obra ejecutada por 12 meses. Si algo falla por nuestra instalación, lo resolvemos sin costo.',
              icon: <><path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5z"/></>,
            },
            {
              titulo: 'Técnicos certificados por fabricante',
              desc: 'Nuestro personal está capacitado y habilitado directamente por LG, Samsung y Gree para instalación y mantención de sistemas VRF.',
              icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h10M7 12h6"/></>,
            },
            {
              titulo: 'Propuesta técnica detallada',
              desc: 'Evaluamos su proyecto y entregamos una propuesta técnica y económica ajustada a sus necesidades.',
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
        <FaqAccordion items={faq.items} lang="es" />
      </RevealSection>

      {/* CONTACTO */}
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
              <div className="ci-txt"><strong>{t.telefono}</strong><a href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="contact_block" data-ga-lang="es">{c.empresa.telefono}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="2.5" width="13" height="10" rx="1"/>
                <path d="M1 3.5l6.5 4.5 6.5-4.5"/>
              </svg>
              <div className="ci-txt"><strong>{t.email}</strong><a href={`mailto:${c.empresa.email}`} data-ga-event="email_clicked" data-ga-location="contact_block" data-ga-lang="es">{c.empresa.email}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true">
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.16.32 2.24.87 3.17L1.25 13.75l3.15-.85c.9.5 1.94.79 3.1.79 3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25zm0 11.25c-1 0-1.94-.28-2.73-.76l-1.9.51.52-1.86A5 5 0 117.5 12.5zm2.77-3.74c-.15-.08-.9-.44-1.04-.49-.14-.05-.24-.08-.34.08-.1.15-.4.49-.48.59-.09.1-.18.11-.33.04-.15-.08-.63-.23-1.2-.74-.44-.4-.74-.89-.83-1.04-.09-.15-.01-.23.07-.3.07-.07.15-.18.23-.27.08-.09.1-.15.15-.25.05-.1.02-.19-.01-.27-.04-.08-.34-.82-.46-1.12-.12-.3-.25-.26-.34-.26-.09 0-.19-.01-.29-.01-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.54 1.47.62 1.57c.08.1 1.06 1.62 2.57 2.27.36.16.64.25.86.32.36.11.69.1.95.06.29-.04.9-.37 1.03-.72.13-.35.13-.65.09-.72-.04-.07-.14-.11-.29-.18z"/>
              </svg>
              <div className="ci-txt"><strong>{t.whatsapp}</strong><a href={waUrl} target="_blank" rel="noopener noreferrer" data-ga-event="whatsapp_clicked" data-ga-location="contact_block" data-ga-lang="es">{c.empresa.telefono}</a></div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="6"/>
                <path d="M7.5 4.5v3l1.8 1.8"/>
              </svg>
              <div className="ci-txt"><strong>{t.horario}</strong>{t.horarioValue}</div>
            </div>
            <div className="ci-trust" aria-label="Respuesta rápida">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><circle cx="7.5" cy="7.5" r="6"/><path d="M7.5 4.5v3l1.8 1.8"/></svg>
              Te contactamos a la brevedad
            </div>
            <div className="ci-trust" aria-label="Cotización gratuita y sin compromiso">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2.5 7.5L6 11l6.5-7"/></svg>
              Cotización sin costo ni compromiso
            </div>
            <div className="next-steps">
              <p className="next-steps-hd">¿Qué pasa después?</p>
              <div className="next-step">
                <span className="next-step-n">01</span>
                <div><div className="next-step-l">Confirmación inmediata</div><div className="next-step-d">Recibirá un acuse de recibo automático</div></div>
              </div>
              <div className="next-step">
                <span className="next-step-n">02</span>
                <div><div className="next-step-l">Revisión del proyecto</div><div className="next-step-d">Un especialista evalúa el proyecto sin costo ni compromiso</div></div>
              </div>
              <div className="next-step">
                <span className="next-step-n">03</span>
                <div><div className="next-step-l">Propuesta técnica</div><div className="next-step-d">Diseño y cotización detallada para su proyecto</div></div>
              </div>
            </div>
          </div>
          <ContactForm lang="es" waUrl={waUrl} />
        </div>
      </RevealSection>
      </main>

      <footer>
        <div className="f-cta">
          <p className="f-cta-txt">¿Tiene un proyecto comercial o industrial? <em>Conversemos.</em></p>
          <a className="nav-cta" href="#contacto" data-ga-event="cta_clicked" data-ga-location="footer" data-ga-label={t.navCta} data-ga-lang="es">{t.navCta}</a>
        </div>
        <div className="f-logo">
          <Image src="/logo.png" alt={c.empresa.nombre} width={650} height={300} style={{ height: 32, width: 'auto' }} />
        </div>
        <div className="f-contact">
          <a className="f-contact-link" href={`tel:${c.empresa.telefono}`} data-ga-event="phone_clicked" data-ga-location="footer" data-ga-lang="es">
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/></svg>
            {c.empresa.telefono}
          </a>
          <a className="f-contact-link" href={`mailto:${c.empresa.email}`} data-ga-event="email_clicked" data-ga-location="footer" data-ga-lang="es">
            <svg viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><rect x="1" y="2.5" width="13" height="10" rx="1"/><path d="M1 3.5l6.5 4.5 6.5-4.5"/></svg>
            {c.empresa.email}
          </a>
          <a className="f-contact-link" href={waUrl} target="_blank" rel="noopener noreferrer" data-ga-event="whatsapp_clicked" data-ga-location="footer" data-ga-lang="es">
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
          © {new Date().getFullYear()} {c.empresa.nombre}. Todos los derechos reservados.
          {' · '}
          <a href="https://haraya.dev" target="_blank" rel="noopener" className="f-credit">Sitio por HarayaDev</a>
        </div>
      </footer>

      <BottomTabBar lang="es" tabs={[
        { label: t.navInicio,    href: '#inicio',    icon: TAB_ICONS.inicio },
        { label: t.navServicios, href: '#servicios', icon: TAB_ICONS.servicios },
        { label: t.navNosotros,  href: '#nosotros',  icon: TAB_ICONS.nosotros },
        { label: t.navFaq,       href: '#faq',       icon: TAB_ICONS.faq },
        { label: t.navContacto,  href: '#contacto',  icon: TAB_ICONS.contacto, accent: true },
      ]} />
      <WhatsAppButton phone={c.empresa.telefono} lang="es" />
      <AnalyticsTracker />
    </>
  )
}
