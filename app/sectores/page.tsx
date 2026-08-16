import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Sectores que Atendemos — HVAC Comercial e Industrial en Chile',

  description:
    'D&Z Building entrega soluciones HVAC especializadas para oficinas, data centers, minería, hotelería, retail, agroindustria e industria. Climatización y refrigeración comercial e industrial en Chile.',
  alternates: {
    canonical: `${siteUrl}/sectores/`,
    languages: {
      es: `${siteUrl}/sectores/`,
      en: `${siteUrl}/en/sectors/`,
    },
  },
  openGraph: {
    title: 'Sectores — HVAC Comercial e Industrial Chile | D&Z Building',
    description:
      'Soluciones HVAC por sector: oficinas, data centers, minería, hoteles, retail y agroindustria. Especialistas en climatización industrial y comercial.',
    url: `${siteUrl}/sectores/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SECTORES = [
  {
    titulo: 'Oficinas y Edificios Comerciales',
    descripcion:
      'Sistemas VRF por zona para plantas libres y planos de piso corporativos. Integración BMS, medición por arrendatario, documentación LEED/EDGE.',
    href: '/sectores/oficinas/',
    hasPagina: true,
  },
  {
    titulo: 'Data Centers y Salas de Servidores',
    descripcion:
      'Climatización de precisión (CRAC/CRAH), redundancia N+1, contención de pasillos caliente/frío, free cooling. Diseño ANSI/TIA-942 Tier I–IV.',
    href: '/sectores/data-centers/',
    hasPagina: true,
  },
  {
    titulo: 'Minería',
    descripcion:
      'Salas de control (redundancia N+1), plantas procesadoras (ATEX), campamentos en altiplano y desierto, laboratorios de análisis. Cumplimiento DS 132 SERNAGEOMIN.',
    href: '/sectores/mineria/',
    hasPagina: true,
  },
  {
    titulo: 'Hotelería y Turismo',
    descripcion:
      'VRF silencioso para habitaciones (NC-25/30), deshumidificación spa, integración PMS, documentación LEED v4 y EDGE. Cobertura nacional.',
    href: '/sectores/hoteleria/',
    hasPagina: true,
  },
  {
    titulo: 'Retail y Supermercados',
    descripcion:
      'HVAC + refrigeración comercial integrados: sala de ventas VRF, racks centrales de compresores, sistemas CO₂ transcrítico R-744, contratos multi-sucursal con SLA.',
    href: '/sectores/retail/',
    hasPagina: true,
  },
  {
    titulo: 'Agroindustria y Cadena de Frío',
    descripcion:
      'Packing (T 8–14°C), cámaras frigoríficas, atmósfera controlada (O₂/CO₂), túneles de preenfriamiento. Para la industria frutícola exportadora de Chile.',
    href: '/sectores/agroindustria/',
    hasPagina: true,
  },
  {
    titulo: 'Plantas Industriales y Naves',
    descripcion:
      'Ventilación industrial, extracción ATEX, enfriamiento evaporativo para grandes espacios y climatización de áreas de control de proceso.',
    href: '/sectores/plantas-industriales/',
    hasPagina: true,
  },
  {
    titulo: 'Farmacéutica',
    descripcion:
      'Salas limpias GMP ISO 7-8, manufactura de sólidos y líquidos, laboratorios de control de calidad y validación IQ/OQ/PQ para el ISP.',
    href: '/sectores/farmaceutica/',
    hasPagina: true,
  },
  {
    titulo: 'Restaurantes y Alimentación',
    descripcion:
      'Extracción de grasas NFPA 96, make-up air, climatización de salones y cocinas industriales para restaurantes, hoteles y casinos empresariales.',
    hasPagina: true,
    href: '/sectores/restaurantes-alimentacion/',
  },
  {
    titulo: 'Centros Deportivos y Gimnasios',
    descripcion: 'Deshumidificación de piscinas cubiertas, ventilación por demanda de CO₂ en gimnasios, vestuarios en presión negativa y climatización de canchas y pabellones deportivos.',
    hasPagina: true,
    href: '/sectores/centros-deportivos/',
  },
  {
    titulo: 'Educación y Espacios Públicos',
    descripcion:
      'Climatización para universidades, colegios, bibliotecas y edificios de servicio público. Control de CO₂ y calidad de aire en aulas.',
    href: '/sectores/educacion/',
    hasPagina: true,
  },
  {
    titulo: 'Centros Comerciales y Strip Centers',
    descripcion: 'Climatización de tiendas ancla y locales medianos con VRF y medición por arrendatario, extracción NFPA 96 en patios de comidas, zonas comunes con AHU y BMS para optimización energética.',
    hasPagina: true,
    href: '/sectores/centros-comerciales/',
  },
  {
    titulo: 'Bodegas y Centros de Logística',
    descripcion: 'Ventilación de grandes volúmenes, climatización de oficinas dentro de bodegas, control de temperatura para almacenamiento de mercancías sensibles y extracción para zonas de carga y descarga.',
    hasPagina: true,
    href: '/sectores/bodegas-logistica/',
  },
  {
    titulo: 'Laboratorios y Centros de I+D',
    descripcion: 'Ventilación de campanas extractoras con VAV, presión negativa para laboratorios BSL-2/3, salas limpias ISO 14644, control de humedad ±2% HR y cumplimiento MINSAL resolución 510/99.',
    hasPagina: true,
    href: '/sectores/laboratorios-centros-id/',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Sectores', item: `${siteUrl}/sectores/` },
  ],
}

export default function SectoresIndexPage() {
  return (
    <>
      <Script id="ld-sectores" type="application/ld+json">
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
          <Link href="/?servicio=0#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
            Solicitar cotización
          </Link>
        </nav>

        {/* Hero */}
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Sectores</span>
          </div>
          <div className="sp-hero-eyebrow">Industrial · Comercial</div>
          <h1 className="sp-hero-title">Sectores que Atendemos</h1>
          <p className="sp-hero-sub">
            Soluciones HVAC especializadas por industria — desde oficinas corporativas
            hasta faenas mineras y hoteles en todo Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Solicitar Cotización</Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">Ver Servicios</Link>
          </div>
        </header>

        {/* Sectors grid */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Industrias
          </p>
          <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(22px,2.8vw,34px)', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, color: 'var(--text)' }}>
            ¿En qué sector operas?
          </h2>
          <div className="sp-aplic-grid">
            {SECTORES.map((s) => (
              <div key={s.titulo} className="sp-aplic-item">
                {s.hasPagina ? (
                  <h3>
                    <Link href={s.href} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      {s.titulo}
                    </Link>
                  </h3>
                ) : (
                  <h3>{s.titulo}</h3>
                )}
                <p>{s.descripcion}</p>
                {s.hasPagina ? (
                  <Link
                    href={s.href}
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      marginTop: 'auto',
                    }}
                  >
                    Ver más →
                  </Link>
                ) : (
                  <Link
                    href="/?servicio=0#contacto"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontSize: '10px',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      color: 'var(--dim)',
                      textDecoration: 'none',
                      marginTop: 'auto',
                    }}
                  >
                    Cotizar →
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
          <h2 className="sp-cta-title">¿Tu sector no aparece? Igual podemos ayudarte</h2>
          <p className="sp-cta-sub">
            Cotización gratuita. Técnicos certificados. Cobertura nacional.
          </p>
          <div className="sp-cta-btns">
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">Ver Servicios</Link>
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
