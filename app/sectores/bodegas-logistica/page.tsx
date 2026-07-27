import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Bodegas y Logística Chile',

  description:
    'Soluciones HVAC para bodegas farmacéuticas, alimentarias y de distribución en Chile: temperatura controlada, cadena de frío, DS 594 para trabajadores y certificación GDP.',
  alternates: {
    canonical: `${siteUrl}/sectores/bodegas-logistica/`,
    languages: {
      es: `${siteUrl}/sectores/bodegas-logistica/`,
      en: `${siteUrl}/en/sectors/warehousing/`,
    },
  },
  openGraph: {
    title: 'HVAC para Bodegas y Logística — Cadena de Frío y DS 594 | D&Z Building',
    description:
      'Climatización de bodegas con temperatura controlada, monitoreo 24/7 y cumplimiento DS 594 para trabajadores en ambientes fríos. Experiencia en farmacéutica, alimentaria y distribución.',
    url: `${siteUrl}/sectores/bodegas-logistica/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Bodegas Farmacéuticas GDP',
    subtitulo: '15°C–25°C controlado · Monitoreo 24/7',
    desc: 'Las buenas prácticas de distribución (GDP) exigen temperatura controlada, monitoreo continuo con alarmas y registros auditables. D&Z Building instala sistemas con sensores IoT y reportes automáticos compatibles con auditorías de la ISP (Instituto de Salud Pública) y la FDA para distribuidores de productos importados.',
  },
  {
    titulo: 'Cámaras Frigoríficas y Cold Chain',
    subtitulo: '2°C–8°C · -18°C a -25°C · DS 109',
    desc: 'Cámaras de refrigeración para productos que requieren cadena de frío ininterrumpida: productos farmacéuticos, alimentos congelados, flores, reactivos de laboratorio. Diseño con redundancia N+1 para evitar pérdida de producto ante falla de equipo. Cumplimiento DS 594 para personal que trabaja en frío.',
  },
  {
    titulo: 'Bodegas Alimentarias y Agroindustriales',
    subtitulo: 'HACCP · Temperatura ambiente controlada',
    desc: 'Almacenaje de alimentos no perecibles (cereales, conservas, aceites) requiere control de temperatura y humedad para evitar condensación y desarrollo de hongos. D&Z Building diseña sistemas que cumplen los requisitos del SAG y la SEREMI de Salud para la industria alimentaria.',
  },
  {
    titulo: 'Centros de Distribución de E-commerce',
    subtitulo: 'Confort operarios · Turnos 24/7 · DS 594',
    desc: 'Grandes centros de fulfillment con operarios trabajando en 3 turnos requieren climatización robusta que garantice DS 594 en todas las jornadas. Los sistemas VRF y los manejadoras de aire industriales permiten zonificar por áreas (sorter, packing, despacho) con control independiente de temperatura.',
  },
  {
    titulo: 'Bodegas de Productos Químicos y ATEX',
    subtitulo: 'Ventilación forzada · Clasificación ATEX',
    desc: 'Bodegas de solventes, pinturas, gases o productos inflamables requieren ventilación forzada para mantener la concentración de vapores por debajo del LEL (Lower Explosive Limit). La clasificación ATEX determina el tipo de equipo permitido. D&Z Building diseña sistemas antiexplosivos conformes a la NCh 2635 y al Código NFPA 30.',
  },
  {
    titulo: 'Bodegas de Electrónica y Partes Industriales',
    subtitulo: '18°C–22°C · 40–60% HR · Sin condensación',
    desc: 'Componentes electrónicos, equipos de precisión y repuestos industriales son sensibles a temperatura y humedad. La condensación producida por ciclos térmicos daña plaquetas y circuitos. D&Z Building diseña sistemas con control preciso de humedad relativa y temperatura para proteger inventarios de alto valor.',
  },
]

const STATS = [
  { valor: 'GDP', etiqueta: 'Estándar farmacéutico de distribución' },
  { valor: '2°C–25°C', etiqueta: 'Rango cold chain farmacéutico' },
  { valor: 'DS 594', etiqueta: 'Confort trabajadores en frío' },
  { valor: '24/7', etiqueta: 'Monitoreo con alarmas IoT' },
]

const FAQ = [
  {
    pregunta: '¿Qué diferencia hay entre una bodega farmacéutica GDP y una bodega estándar?',
    respuesta: 'Una bodega GDP (Good Distribution Practices) debe mantener temperatura dentro de los rangos especificados en la ficha técnica del producto (usualmente 15°C–25°C o 2°C–8°C), con monitoreo continuo de temperatura, alarmas automáticas ante desviación y registro de datos auditables por la autoridad sanitaria (ISP). La bodega estándar solo debe cumplir DS 594 para el confort de los trabajadores. Una bodega farmacéutica necesita redundancia de equipos, calibración certificada de sensores y planes documentados de contingencia ante falla.',
  },
  {
    pregunta: '¿Qué temperatura debe tener una bodega para cumplir DS 594?',
    respuesta: 'El DS 594 establece que en bodegas y espacios de trabajo, la temperatura de bulbo seco no puede ser inferior a 10°C durante la jornada laboral. Para ambientes cálidos, la temperatura WBGT no debe superar 27°C para trabajo moderado. Esto implica que una bodega sin climatización en verano en el norte de Chile (Antofagasta, Iquique) puede estar fuera de norma. D&Z Building realiza diagnósticos térmicos para determinar si el recinto cumple la normativa.',
  },
  {
    pregunta: '¿Cómo se climatiza una bodega con techo de zinc sin aislación?',
    respuesta: 'Las bodegas con cubierta metálica sin aislación presentan cargas de calor muy altas en verano. La solución óptima combina: (1) aislación térmica del techo (poliestireno o lana de vidrio bajo la cubierta), (2) ventilación natural asistida con extractores de turbina o extractor industrial en la cumbrera, y (3) climatización de zonas de trabajo específicas con equipos industriales o evaporativos si la humedad lo permite. El costo de aislación se amortiza rápidamente al reducir la carga del equipo HVAC en 40–60%.',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar una bodega de 1.000 m²?',
    respuesta: 'Depende del tipo de climatización: para confort de trabajadores (DS 594) en bodega de 1.000 m² con 5 m de altura libre, el rango típico es UF 300–600 en equipamiento más instalación. Para temperatura controlada farmacéutica GDP (15°C–25°C con monitoreo), el rango asciende a UF 500–1.200 dependiendo de la aislación existente. Para cadena de frío refrigerada (2°C–8°C), el costo de cámara de 1.000 m³ puede superar UF 2.000. D&Z Building realiza proyectos de ingeniería con presupuesto detallado sin compromiso.',
  },
  {
    pregunta: '¿Se puede usar refrigeración evaporativa en una bodega de Santiago?',
    respuesta: 'Santiago tiene una humedad relativa promedio de 55–65% en verano, lo que limita la eficacia de la refrigeración evaporativa (funciona bien bajo 40% HR). Sin embargo, en verano, las tardes de Santiago pueden bajar a 30–40% HR, haciendo viable el uso de evaporativos portátiles o ductos evaporativos como complemento de un sistema convencional. En el norte de Chile (Atacama, Antofagasta), la baja humedad hace que los sistemas evaporativos sean muy eficientes y de bajo costo operacional.',
  },
  {
    pregunta: '¿Qué certificaciones necesita una bodega farmacéutica en Chile?',
    respuesta: 'Las bodegas de distribución farmacéutica en Chile deben estar autorizadas por el ISP (Instituto de Salud Pública) bajo la norma GDP chilena. El ISP exige: plano de la bodega con zonas de temperatura diferenciada, equipos de climatización con certificado de calibración, sistema de monitoreo con registro de temperatura 24/7 durante mínimo 3 meses previo a la auditoría, y procedimientos escritos de contingencia ante desviación de temperatura. D&Z Building entrega la documentación técnica del sistema HVAC compatible con los requisitos del ISP.',
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
        { '@type': 'ListItem', position: 3, name: 'Bodegas y Logística', item: `${siteUrl}/sectores/bodegas-logistica/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/bodegas-logistica/#service`,
      name: 'Climatización para Bodegas y Logística',
      description: 'Diseño, instalación y mantención de sistemas HVAC para bodegas farmacéuticas, alimentarias y centros de distribución en Chile: temperatura controlada, cadena de frío, DS 594 y certificación GDP.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Warehousing & Logistics HVAC',
      url: `${siteUrl}/sectores/bodegas-logistica/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/bodegas-logistica/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorBodegasLogisticaPage() {
  return (
    <>
      <Script id="ld-sector-bodegas-logistica" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Servicios
            </Link>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar asesoría técnica
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/sectores/" style={{ color: 'inherit', textDecoration: 'none' }}>Sectores</Link>
            <span>›</span>
            <span>Bodegas y Logística</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Cold Chain · GDP · DS 594 · E-commerce
          </p>
          <h1 className="sp-hero-title">HVAC para Bodegas<br />y Logística en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Climatización de bodegas farmacéuticas, alimentarias y centros de distribución
            con temperatura controlada, cadena de frío, monitoreo 24/7 y cumplimiento
            DS 594 para trabajadores.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion-comercial#contacto" className="sp-hero-cta">Consultar cold chain</Link>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta sp-hero-cta-outline">Diagnóstico DS 594</Link>
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

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Tipos de instalación
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Bodegas y recintos que climatizamos
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((ap, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {ap.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {ap.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {ap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', margin: '0 clamp(20px,6vw,96px)', padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: 0 }}>
            Servicios de entrada recomendados
          </p>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(16px,1.8vw,22px)', color: 'var(--text)', margin: 0, maxWidth: 600, lineHeight: 1.45 }}>
            Auditoría DS 594 para bodegas y mapeo de temperatura GDP como puntos de partida para la certificación
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion-comercial#contacto" className="sp-hero-cta">Consultar cold chain GDP</Link>
            <Link href="/?servicio=mantenimiento-preventivo#contacto" className="sp-hero-cta sp-hero-cta-outline">Mantención preventiva</Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            GDP, DS 594 y cold chain
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
            <Link href="/servicios/refrigeracion-comercial/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Refrigeración comercial →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/climatizacion-vrf/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector data centers →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene una bodega que climatizar?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de producto almacenado, superficie de la bodega y normativa que debe cumplir.
            Evaluamos el proyecto y respondemos en 48–72 horas con una propuesta técnica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=refrigeracion-comercial#contacto" className="sp-hero-cta">Consultar cold chain</Link>
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
