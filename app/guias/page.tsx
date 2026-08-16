import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Guías Técnicas HVAC — Climatización y Refrigeración Comercial Chile',

  description:
    'Guías técnicas de D&Z Building: precios de sistemas VRF, climatización comercial, y cómo elegir el sistema HVAC correcto para tu empresa. Información para compradores industriales y comerciales en Chile.',
  alternates: {
    canonical: `${siteUrl}/guias/`,
    languages: {
      es: `${siteUrl}/guias/`,
      en: `${siteUrl}/en/guide/`,
    },
  },
  openGraph: {
    title: 'Guías HVAC Chile — Precios y Criterios de Selección | D&Z Building',
    description:
      'Guías técnicas para compradores HVAC en Chile: precios VRF, climatización comercial, y cómo elegir entre VRF, chiller y multi-split.',
    url: `${siteUrl}/guias/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const GUIAS = [
  {
    titulo: '¿Qué es un Sistema VRF? Guía Técnica 2025',
    descripcion:
      'Cómo funciona un sistema VRF, diferencias entre VRF y splits convencionales, tipos (solo frío, bomba de calor, recuperación de calor) y para qué proyectos es la mejor opción.',
    href: '/guias/que-es-un-sistema-vrf/',
  },
  {
    titulo: 'Precio Sistema VRF en Chile — Guía 2025',
    descripcion:
      'Rangos de precio para sistemas VRF/VRV en Chile: por zonas, por m², y según fabricante (Daikin, Mitsubishi, LG). Incluye costos de instalación y mantención.',
    href: '/guias/precio-sistema-vrf-chile/',
  },
  {
    titulo: 'Precio Climatización Comercial — Guía 2025',
    descripcion:
      'Rangos de precio reales para todos los sistemas HVAC comerciales en Chile: VRF, multi-split, chiller, refrigeración comercial y ventilación.',
    href: '/guias/precio-climatizacion-comercial-chile/',
  },
  {
    titulo: '¿Qué Sistema de Climatización Elegir para mi Empresa?',
    descripcion:
      'Comparativa VRF vs multi-split vs chiller: criterios técnicos, casos de uso, rangos de inversión y recomendaciones por tipo de proyecto.',
    href: '/guias/como-elegir-sistema-hvac-empresa-chile/',
  },
  {
    titulo: 'DS 594 y Ventilación en el Trabajo: Guía HVAC Chile',
    descripcion:
      'Temperatura máxima 27°C WBGT, ventilación mínima para oficinas y bodegas, obligaciones del empleador y cómo cumplir el Decreto Supremo 594 con sistemas HVAC certificados.',
    href: '/guias/decreto-supremo-594-ventilacion-hvac-chile/',
  },
  {
    titulo: 'Mantención Preventiva HVAC para Empresas Chile: Guía 2025',
    descripcion:
      'Qué incluye un contrato de mantención, frecuencias recomendadas por tipo de equipo, obligaciones del DS 594 y cómo elegir el proveedor de mantención adecuado.',
    href: '/guias/mantenimiento-preventivo-hvac-empresas-chile/',
  },
  {
    titulo: 'Eficiencia Energética HVAC para Empresas Chile: Guía 2025',
    descripcion:
      'Cómo reducir 30–50% el consumo de climatización con sistemas VRF inverter, free cooling, recuperación de calor y automatización BMS. Incluye auditoría energética paso a paso.',
    href: '/guias/eficiencia-energetica-hvac-empresas-chile/',
  },
  {
    titulo: '¿VRF o Chiller? Cómo Elegir el Sistema HVAC para su Empresa',
    descripcion:
      'Comparación técnica y económica entre sistemas VRF y chiller: cuándo usar cada uno, costos de instalación, eficiencia, mantenimiento y casos de uso reales para empresas en Chile.',
    href: '/guias/vrf-vs-chiller-cual-elegir-empresa-chile/',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Guías', item: `${siteUrl}/guias/` },
  ],
}

export default function GuiasIndexPage() {
  return (
    <>
      <Script id="ld-guias" type="application/ld+json">
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
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Inicio
            </Link>
            <span>›</span>
            <span>Guías</span>
          </div>
          <h1>Guías Técnicas HVAC</h1>
          <p className="sp-hero-sub">
            Información técnica y de mercado para compradores de climatización y refrigeración
            comercial e industrial en Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Solicitar Cotización
            </Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">
              Ver Servicios
            </Link>
          </div>
        </header>

        {/* Guides grid */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            Recursos técnicos
          </p>
          <h2
            style={{
              margin: '0 0 40px',
              fontSize: 'clamp(22px,2.8vw,34px)',
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            Guías para compradores HVAC
          </h2>
          <div className="sp-aplic-grid">
            {GUIAS.map((g) => (
              <div key={g.href} className="sp-aplic-item">
                <h3>
                  <Link
                    href={g.href}
                    style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {g.titulo}
                  </Link>
                </h3>
                <p>{g.descripcion}</p>
                <Link
                  href={g.href}
                  style={{
                    fontSize: '11px',
                    color: 'var(--accent)',
                    fontFamily: "'Josefin Sans', sans-serif",
                    letterSpacing: '.08em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                  }}
                >
                  Leer guía →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Hablemos
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(22px,2.8vw,36px)',
              margin: '0 0 14px',
              color: 'var(--text)',
            }}
          >
            ¿Tienes un proyecto de climatización?
          </h2>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit', sans-serif",
              margin: '0 0 28px',
              fontSize: 'clamp(14px,1.4vw,17px)',
            }}
          >
            Cotización gratuita. Técnicos certificados. Cobertura nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contacto" className="sp-hero-cta">
              Solicitar cotización gratuita
            </Link>
            <Link href="/" className="sp-hero-cta sp-hero-cta-outline">
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="D&Z Building"
              width={90}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <span
            style={{
              color: 'var(--dim)',
              fontFamily: "'Josefin Sans', sans-serif",
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
