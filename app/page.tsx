import type { Metadata } from 'next'
import type React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import ContactForm from '@/components/ContactForm'
import HeroCanvas from '@/components/HeroCanvas'
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

const BRANDS = [
  { name: 'LG', src: '/brands/lg.png', width: 63, height: 34 },
  { name: 'Samsung', src: '/brands/samsung.png', width: 1024, height: 272 },
  { name: 'Gree', src: '/brands/gree.png', width: 120, height: 24 },
  { name: 'CYPE', src: '/brands/cype.png', width: 1024, height: 943 },
] as const

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  return {
    metadataBase: new URL(siteUrl),
    title: c.seo.titulo,
    description: c.seo.descripcion,
    keywords: c.seo.keywords,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: c.seo.titulo,
      description: c.seo.descripcion,
      type: 'website',
      locale: 'es_CL',
      url: '/',
      siteName: c.empresa.nombre,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: c.empresa.nombre }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.seo.titulo,
      description: c.seo.descripcion,
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
  }
}

export default async function Home() {
  const c = await getSiteContent()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: c.empresa.nombre,
        description: c.seo.descripcion,
        url: siteUrl,
        telephone: c.empresa.telefono,
        email: c.empresa.email,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Santiago',
          addressRegion: 'Región Metropolitana',
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
          'Climatización comercial', 'Sistemas VRF', 'Sistemas VRV',
          'Refrigeración comercial', 'HVAC', 'Eficiencia energética',
          'Proyectos llave en mano', 'Mantención preventiva',
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
                description: 'Diseño, suministro e instalación de sistemas VRF/VRV para oficinas, hoteles, locales y centros comerciales.',
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
          ],
        },
        foundingDate: '2006',
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10 },
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
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1G3JSB5T7X" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1G3JSB5T7X');
      `}</Script>
      <nav>
        <a className="nav-logo" href="#inicio">
          <Image src="/logo.png" alt={c.empresa.nombre} width={650} height={300} priority style={{ height: 44, width: 'auto' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#servicios">Especialidades</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Solicitar Cotización</a>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero">
        <HeroCanvas />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow">{c.hero.eyebrow}</div>
          <h1>{c.hero.titulo}</h1>
          <p>{c.hero.subtitulo}</p>
          <div className="actions">
            <a className="btn-p" href="#servicios">Nuestras especialidades</a>
            <a className="btn-o" href="#contacto">Solicitar cotización</a>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <div className="brands">
        <span className="brands-label">Marcas oficiales</span>
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
      <section className="sec" id="servicios">
        <div className="sec-eyebrow">{c.servicios.eyebrow}</div>
        <h2 className="sec-title">{c.servicios.titulo}</h2>
        <div className="svc-grid">
          {c.servicios.items.map((item, i) => (
            <div className="svc" key={i}>
              <svg className="svc-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                {SVC_ICONS[i]}
              </svg>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="sec" id="nosotros">
        <div className="nosotros-wrap">
          <div className="nt">
            <div className="sec-eyebrow">Quiénes somos</div>
            <h2 className="sec-title">
              {c.nosotros.titulo.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
            <p>{c.nosotros.p1}</p>
            <p>{c.nosotros.p2}</p>
          </div>
          <div className="stats">
            <div className="stat"><div className="stat-n">20</div><div className="stat-l">años de experiencia</div></div>
            <div className="stat"><div className="stat-n">CL</div><div className="stat-l">Cobertura nacional</div></div>
            <div className="stat"><div className="stat-n">3</div><div className="stat-l">Marcas oficiales</div></div>
            <div className="stat"><div className="stat-n">24/7</div><div className="stat-l">Soporte técnico</div></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="sec" id="contacto">
        <div className="sec-eyebrow">Hablemos</div>
        <h2 className="sec-title">Solicitar Cotización</h2>
        <div className="contact-grid">
          <div className="ci-block">
            <h4>Contacto directo</h4>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M7.5 1C5.6 1 4 2.6 4 4.5c0 3 3.5 8.5 3.5 8.5S11 7.5 11 4.5C11 2.6 9.4 1 7.5 1z"/>
                <circle cx="7.5" cy="4.5" r="1.5"/>
              </svg>
              <div className="ci-txt"><strong>Ubicación</strong>{c.empresa.direccion}</div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M1.5 1.5h2l1 2-1.5 1.5a8.5 8.5 0 003.5 3.5L8 7l2 1v2a1 1 0 01-1 1A11 11 0 01.5 2.5a1 1 0 011-1z"/>
              </svg>
              <div className="ci-txt"><strong>Teléfono</strong>{c.empresa.telefono}</div>
            </div>
            <div className="ci">
              <svg className="ci-ico" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="2.5" width="13" height="10" rx="1"/>
                <path d="M1 3.5l6.5 4.5 6.5-4.5"/>
              </svg>
              <div className="ci-txt"><strong>Email</strong>{c.empresa.email}</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="f-logo">
          <Image src="/logo.png" alt={c.empresa.nombre} width={650} height={300} style={{ height: 32, width: 'auto' }} />
        </div>
        <ul className="f-links">
          <li><a href="#servicios">Especialidades</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="f-copy">© {new Date().getFullYear()} {c.empresa.nombre}. Todos los derechos reservados.</div>
      </footer>
    </>
  )
}
