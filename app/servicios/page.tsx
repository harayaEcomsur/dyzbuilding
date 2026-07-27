import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Servicios de Climatización y Refrigeración en Chile',

  description:
    'Catálogo completo de servicios de D&Z Building: sistemas VRF, refrigeración comercial, mantención preventiva, ventilación industrial y más. Empresa especialista en HVAC comercial e industrial en Chile.',
  alternates: {
    canonical: `${siteUrl}/servicios/`,
    languages: {
      es: `${siteUrl}/servicios/`,
      en: `${siteUrl}/en/services/`,
    },
  },
  openGraph: {
    title: 'Servicios de Climatización y Refrigeración | D&Z Building Chile',
    description:
      'Empresa especialista en HVAC comercial e industrial en Chile. VRF, refrigeración, mantención preventiva, ventilación y más.',
    url: `${siteUrl}/servicios/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SERVICIOS = [
  {
    titulo: 'Climatización Comercial / VRF',
    descripcion:
      'Diseño, suministro e instalación de sistemas VRF/VRV para oficinas, hoteles, centros comerciales, clínicas, plantas mineras y data centers.',
    href: '/servicios/climatizacion-vrf',
    hasPagina: true,
  },
  {
    titulo: 'Refrigeración Comercial',
    descripcion:
      'Vitrinas refrigeradas, góndolas y cámaras frigoríficas para supermercados, carnicerías, gastronomía e industria alimentaria.',
    href: '/servicios/refrigeracion-comercial',
    hasPagina: true,
  },
  {
    titulo: 'Ventilación y Extracción',
    descripcion:
      'Sistemas VMC, extractores industriales y renovación de aire para ambientes con exigencias técnicas o normativas.',
    href: '/servicios/ventilacion-industrial/',
    hasPagina: true,
  },
  {
    titulo: 'Mantención Preventiva',
    descripcion:
      'Planes de mantención periódica, diagnóstico y garantía de rendimiento para sistemas VRF, aire acondicionado y refrigeración.',
    href: '/servicios/mantenimiento-preventivo',
    hasPagina: true,
  },
  {
    titulo: 'Proyectos Llave en Mano',
    descripcion:
      'Ingeniería, suministro, instalación y puesta en marcha de sistemas de climatización completos. Un solo interlocutor de inicio a fin.',
    href: '/servicios/proyectos-llave-en-mano/',
    hasPagina: true,
  },
  {
    titulo: 'Análisis Operacional VRV/VRF',
    descripcion:
      'Diagnóstico de sistemas VRV/VRF en operación: eficiencia real, fallas recurrentes y plan de optimización para instalaciones comerciales e industriales.',
    href: '/#contacto',
    hasPagina: false,
  },
  {
    titulo: 'Eficiencia Energética HVAC',
    descripcion:
      'Diagnóstico de consumo, auditoría energética, selección de equipos A+++ y certificación de eficiencia energética.',
    href: '/servicios/eficiencia-energetica/',
    hasPagina: true,
  },
  {
    titulo: 'Asesoría de Ingeniería',
    descripcion:
      'Consultoría técnica en proyectos HVAC: especificaciones, bases de licitación, revisión de diseños y modelamiento BIM HVAC.',
    href: '/#contacto',
    hasPagina: false,
  },
  {
    titulo: 'Modelamiento BIM HVAC',
    descripcion:
      'Modelamiento 3D de sistemas HVAC en Revit MEP: LOD 300, coordinación multidisciplinaria, detección de interferencias e IFC para proyectos comerciales e industriales.',
    href: '/servicios/modelamiento-bim-hvac/',
    hasPagina: true,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/servicios/` },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Servicios de Climatización y Refrigeración — D&Z Building',
      description:
        'Catálogo de servicios HVAC comerciales e industriales de D&Z Building en Chile.',
      url: `${siteUrl}/servicios/`,
      numberOfItems: SERVICIOS.length,
      itemListElement: SERVICIOS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.titulo,
        description: s.descripcion,
        url: s.hasPagina ? `${siteUrl}${s.href}` : `${siteUrl}/servicios/`,
      })),
    },
  ],
}

export default function ServiciosPage() {
  return (
    <>
      <Script id="ld-servicios" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={110}
              height={36}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <Link href="/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
            Solicitar cotización
          </Link>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Servicios</span>
          </div>
          <h1 className="sp-hero-title">Servicios de Climatización<br />y Refrigeración</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 640, lineHeight: 1.6, margin: '0 0 28px' }}>
            D&Z Building ofrece soluciones HVAC para el sector comercial e industrial en Chile.
            Sistemas VRF, refrigeración, mantención y asesoría técnica especializada.
          </p>
          <Link href="/#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
        </div>

        {/* Services grid */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Especialidades
          </p>
          <h2 className="sec-title" style={{ margin: '0 0 40px', fontSize: 'clamp(22px,2.8vw,34px)', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 }}>
            Lo que hacemos
          </h2>
          <div className="svc-index-grid">
            {SERVICIOS.map((s) => (
              <div key={s.titulo} className="svc-index-card">
                <h3 className="svc-index-title">{s.titulo}</h3>
                <p className="svc-index-desc">{s.descripcion}</p>
                {s.hasPagina ? (
                  <Link href={s.href} className="svc-index-link">
                    Ver más →
                  </Link>
                ) : (
                  <Link href="/#contacto" className="svc-index-link">
                    Solicitar cotización →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Hablemos
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿Qué proyecto tienes en mente?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit', sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)' }}>
            Cotización gratuita. Técnicos certificados. Cobertura nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
            <Link href="/" className="sp-hero-cta sp-hero-cta-outline">Volver al inicio</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans', sans-serif", fontSize: '11px', letterSpacing: '.06em' }}>
            © {new Date().getFullYear()} D&Z Building SpA
          </span>
        </footer>
      </div>
    </>
  )
}
