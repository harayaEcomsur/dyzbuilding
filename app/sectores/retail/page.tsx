import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización y Refrigeración para Supermercados y Retail en Chile',

  description:
    'Especialistas en HVAC y refrigeración comercial para el sector retail en Chile: supermercados, centros comerciales, tiendas y cadenas de locales. Sistemas VRF, muebles frigoríficos y mantención de flota.',
  alternates: {
    canonical: `${siteUrl}/sectores/retail/`,
    languages: {
      es: `${siteUrl}/sectores/retail/`,
      en: `${siteUrl}/en/sectors/retail/`,
    },
  },
  openGraph: {
    title: 'HVAC Retail Chile — Supermercados, Malls y Centros Comerciales | D&Z Building',
    description:
      'Climatización y refrigeración para supermercados, centros comerciales y cadenas retail en Chile. VRF, muebles frigoríficos, mantención preventiva y BIM HVAC.',
    url: `${siteUrl}/sectores/retail/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUCIONES = [
  {
    titulo: 'Climatización de Sala de Ventas',
    subtitulo: 'VRF / Fan-Coil / HVAC',
    desc: 'Sistemas VRF multi-split o fan-coil centralizados para la sala de ventas de supermercados e hipermercados. La clave en retail es equilibrar el confort del cliente con el calor generado por los muebles frigoríficos abiertos y la iluminación. Usamos herramientas de simulación térmica para optimizar la distribución de difusores y la carga de los sistemas.',
  },
  {
    titulo: 'Muebles Frigoríficos de Exposición',
    subtitulo: 'T −2 a +8°C · Eficiencia A+',
    desc: 'Instalación y mantención de góndolas frigoríficas, islas de congelados y vitrinas de carnicería/fiambrería. Trabajamos con sistemas centralizados de rack de compresores con refrigerantes HFC o CO₂ transcrítico (R-744), que reducen el consumo energético hasta un 30% respecto a sistemas descentralizados con R-404A.',
  },
  {
    titulo: 'Sala de Máquinas y Rack de Compresores',
    subtitulo: 'Refrigeración centralizada',
    desc: 'Diseño e instalación de salas de máquinas con racks de compresores semi-herméticos o herméticos, condensadores remotos en techo, tableros de control con monitoreo remoto y sistemas de recuperación de calor para uso en agua caliente o calefacción de trastienda.',
  },
  {
    titulo: 'Ventilación de Bodegas y Trastienda',
    subtitulo: 'DS 594 · Inocuidad',
    desc: 'Ventilación mecánica para áreas de recepción de mercadería, cámaras de maduración de frutas/verduras, cámaras frigoríficas de trastienda y áreas de panadería. Diseño según DS 594 y MINSAL para establecimientos expendedores de alimentos.',
  },
  {
    titulo: 'Centros Comerciales y Malls',
    subtitulo: 'AHU centralizado + zonificación',
    desc: 'Para centros comerciales (malls, strip centers, power centers) usamos sistemas centralizados con AHU (manejadoras de aire) y distribución por ductos, o sistemas VRF de gran capacidad por zona. La regulación independiente por local inquilino permite cobrar el consumo por separado (sistema de medición de energía por local).',
  },
  {
    titulo: 'Mantención de Flota Multi-Sucursal',
    subtitulo: 'Contratos de flota · SLA',
    desc: 'Para cadenas con múltiples sucursales ofrecemos contratos de mantención preventiva coordinados centralmente: programa de visitas, registro centralizado de equipos, informe consolidado mensual y atención de emergencias bajo SLA. Cubrimos todo Chile bajo un solo contrato.',
  },
]

const FAQ = [
  {
    pregunta: '¿Cuánto consume un sistema de refrigeración en un supermercado en Chile?',
    respuesta: 'Un supermercado de tamaño medio (1.500–4.000 m² de sala de ventas) con 30–60 metros lineales de muebles frigoríficos consume entre 180 y 400 kWh/m²/año en refrigeración. Este costo representa el 40–60% de la factura eléctrica total del local. La migración a sistemas con CO₂ transcrítico (R-744) o la actualización de controladores electrónicos de expansión puede reducir este consumo entre un 20–35%.',
  },
  {
    pregunta: '¿Qué refrigerante se usa hoy en supermercados en Chile?',
    respuesta: 'Los sistemas instalados antes de 2018 usan mayoritariamente R-404A (GWP 3.922), que está siendo eliminado progresivamente. Los proyectos nuevos en Chile usan R-448A, R-449A (drop-in de menor GWP) o CO₂ transcrítico (R-744, GWP=1) para instalaciones de mayor escala. El CO₂ transcrítico está ganando terreno en supermercados chilenos por su eficiencia energética en climas templados (Santiago, zona central) y la eliminación del riesgo de sanciones por uso de gases de alto GWP.',
  },
  {
    pregunta: '¿Qué normativa aplica a la refrigeración en supermercados chilenos?',
    respuesta: 'Los supermercados y expendios de alimentos en Chile están sujetos al DS 977 del MINSAL (Reglamento Sanitario de los Alimentos), que establece temperaturas máximas de conservación por tipo de alimento. Adicionalmente, el DS 594 regula las condiciones laborales en cámaras frigoríficas (temperatura, EPP, sistemas de emergencia). Para proyectos nuevos o remodelaciones que involucren cambios en la red de refrigerante, se requiere la visación del plano de instalación de gas por la SEC (Superintendencia de Electricidad y Combustibles).',
  },
  {
    pregunta: '¿Pueden atender emergencias de refrigeración en fin de semana o festivos?',
    respuesta: 'Sí. Para clientes con contrato de mantención Priority, ofrecemos atención de emergencias 24/7, incluyendo fines de semana y festivos. Una falla de refrigeración en un supermercado activo puede significar pérdida de mercadería de $5–30 millones de pesos en pocas horas — el tiempo de respuesta es crítico. Tenemos stock de repuestos de alta rotación (compresores, válvulas, controladores) para las marcas más comunes.',
  },
  {
    pregunta: '¿Hacen proyectos de climatización para locales en centros comerciales?',
    respuesta: 'Sí. Para locales en centros comerciales (tiendas de ropa, gastronomía, servicios) instalamos sistemas VRF o splits de alta pared según el tamaño y las restricciones del mall. La instalación debe cumplir con las especificaciones técnicas del mall (normas de instalación, tipos de refrigerante permitidos, condensadores en el piso técnico permitido). Tenemos experiencia en las exigencias técnicas de los principales malls operados por Parque Arauco, Mall Plaza y Grupo Patio.',
  },
  {
    pregunta: '¿Pueden hacer la ingeniería para una cadena que está en proceso de expansión?',
    respuesta: 'Sí. Para cadenas en expansión ofrecemos un servicio de ingeniería estandarizada: desarrollo de un proyecto tipo (layout, selección de equipos, especificaciones) que luego se adapta a cada local nuevo. Esto acelera los procesos de licitación y mantiene la coherencia técnica entre sucursales. También podemos preparar el dossier técnico para la tramitación de permisos municipales y sectoriales.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Sectores', item: `${siteUrl}/sectores/` },
        { '@type': 'ListItem', position: 3, name: 'Retail y Supermercados', item: `${siteUrl}/sectores/retail/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/retail/#service`,
      name: 'Climatización y Refrigeración para Supermercados y Retail — Chile',
      description: 'Diseño, instalación y mantención de sistemas HVAC y refrigeración comercial para supermercados, centros comerciales y cadenas retail en Chile.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Retail HVAC & Commercial Refrigeration',
      url: `${siteUrl}/sectores/retail/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/retail/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorRetailPage() {
  return (
    <>
      <Script id="ld-sector-retail" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/refrigeracion-comercial" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Refrigeración
            </Link>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Sectores</span>
            <span>›</span>
            <span>Retail y Supermercados</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Supermercados · Centros Comerciales · Cadenas Retail
          </p>
          <h1 className="sp-hero-title">HVAC y Refrigeración para<br />Supermercados en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Climatización de sala de ventas, refrigeración centralizada, muebles frigoríficos
            y mantención de flota para supermercados, centros comerciales y cadenas retail en Chile.
            Un solo contratista para HVAC y refrigeración.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">Cotizar proyecto retail</Link>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta sp-hero-cta-outline">Consulta técnica</Link>
          </div>
        </div>

        {/* Diferenciador: HVAC + Refrigeración */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Climatización de sala de ventas', icon: '❄' },
              { label: '+', icon: '', accent: true },
              { label: 'Refrigeración comercial', icon: '🏪' },
              { label: '=', icon: '', accent: true },
              { label: 'Un solo contratista', icon: '✓' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                {item.accent ? (
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '28px', color: 'var(--accent)', lineHeight: 1 }}>{item.label}</span>
                ) : (
                  <>
                    <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '14px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 4 }}>
                      {item.label}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', textAlign: 'center', maxWidth: 600, margin: '16px auto 0' }}>
            La mayoría de los contratistas HVAC no hacen refrigeración comercial, y viceversa.
            D&Z Building hace las dos cosas — simplificando la coordinación y los plazos en proyectos retail.
          </p>
        </div>

        {/* Soluciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Soluciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Lo que instalamos en proyectos retail
          </h2>
          <div className="sp-aplic-grid">
            {SOLUCIONES.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {s.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {s.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Refrigerantes, normativa y costos
          </h2>
          <div style={{ maxWidth: 820 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(13px,1.3vw,15px)', fontWeight: 400, letterSpacing: '.02em', color: 'var(--text)', margin: '0 0 10px' }}>
                  {f.pregunta}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {f.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/servicios/refrigeracion-comercial" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Refrigeración comercial →
            </Link>
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/sectores/agroindustria/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector agroindustria →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Supermercados y cadenas retail
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cuéntenos sobre su proyecto o flota
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Proyectos nuevos o remodelaciones: cotización técnica.
            Contratos de mantención multi-sucursal: propuesta en 72 horas con programa de visitas.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion#contacto" className="sp-hero-cta">Solicitar cotización</Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">Ver todos los servicios</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
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
