import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Restaurantes y Cocinas Industriales Chile',

  description:
    'Sistemas de ventilación y climatización para restaurantes, cocinas industriales, casinos empresariales y food courts en Chile: NFPA 96, extracción de grasas, makeup air y DS 594.',
  alternates: {
    canonical: `${siteUrl}/sectores/restaurantes-alimentacion/`,
    languages: {
      es: `${siteUrl}/sectores/restaurantes-alimentacion/`,
      en: `${siteUrl}/en/sectors/food-service/`,
    },
  },
  openGraph: {
    title: 'Ventilación NFPA 96 para Cocinas Industriales y Restaurantes Chile',
    description:
      'Extracción de grasas y vapores, makeup air, presión negativa en cocina y positiva en salón, y DS 594 para personal. Experiencia en restaurantes, hoteles y casinos empresariales.',
    url: `${siteUrl}/sectores/restaurantes-alimentacion/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Extracción de Grasas y Vapores (NFPA 96)',
    subtitulo: 'Campanas · Ductos de acero inoxidable · Filtros de grasa',
    desc: 'La norma NFPA 96 "Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations" regula el diseño de sistemas de extracción en cocinas con equipos de cocción. D&Z Building diseña campanas de extracción con ductos de acero inoxidable calibre 18, velocidades de extracción de 0,25–0,51 m/s en la cara de la campana, y sistemas de supresión de incendios integrados (Ansul o similar). Certificación conforme a NCh Nº 898 (locales de expendio de alimentos).',
  },
  {
    titulo: 'Make-up Air (Aire de Reposición)',
    subtitulo: 'Equilibrio de presión · Confort térmico en cocina',
    desc: 'Por cada metro cúbico de aire extraído en la cocina, debe ingresar el mismo volumen de aire de reposición (make-up air). Sin make-up air, la cocina opera en presión negativa excesiva: las puertas son difíciles de abrir, el fuego en hornillas se apaga, y el aire de los baños entra a la cocina. D&Z Building diseña unidades de make-up air con pre-calentamiento o pre-enfriamiento para no impactar el confort de los cocineros y cumplir DS 594.',
  },
  {
    titulo: 'Climatización de Salones y Comedores',
    subtitulo: 'VRF · Presión positiva · NC-35 · DS 594',
    desc: 'El salón del restaurante debe mantenerse en presión positiva respecto a la cocina para evitar que los olores y el calor de cocción lleguen a los comensales. D&Z Building diseña sistemas VRF o fan-coils con suministro de aire fresco incorporado. El nivel de ruido objetivo para restaurantes es NC-35 (ambiente de conversación normal). Para terrazas y áreas exteriores, se diseñan sistemas de cortina de aire o calefacción radiante según las condiciones climáticas locales.',
  },
  {
    titulo: 'Casinos Empresariales e Institucionales',
    subtitulo: 'JUNAEB · Casino hospitales · Comedores industriales',
    desc: 'Los casinos empresariales, comedores de hospital o comedores de colegios (JUNAEB) tienen características especiales: alta densidad de personas durante el almuerzo (12:00–14:00), cocinas con alta carga de calor latente, y requisitos de la SEREMI de Salud para la calidad del aire. D&Z Building ha instalado sistemas en comedores para 200–1.500 personas, con diseño que asegura confort en el peak de ocupación sin sobredimensionar el equipo.',
  },
  {
    titulo: 'Áreas de Producción Alimentaria (HACCP)',
    subtitulo: 'Temperatura controlada · Humedad · Salas limpias alimentarias',
    desc: 'Las plantas de procesamiento de alimentos que operan bajo HACCP (Hazard Analysis Critical Control Points) requieren control de temperatura y humedad en áreas de corte, envasado y almacenaje intermedio. D&Z Building diseña sistemas de climatización para plantas de procesamiento de carnes, embutidos, lácteos y conservas, cumpliendo las exigencias del SERVICIO AGRÍCOLA Y GANADERO (SAG) y la SEREMI de Salud.',
  },
  {
    titulo: 'Áreas de Almacenaje y Cámaras de Conservación',
    subtitulo: '0°C–4°C · -18°C · DS 594 para manipuladores',
    desc: 'La cocina de un restaurante o casino requiere cámaras de refrigeración (0°C–4°C para frutas, verduras y lácteos), cámaras de congelación (-18°C para carnes y helados) y bodega seca (temperatura ambiente controlada). D&Z Building diseña las cámaras con equipos de refrigeración condensados por aire o agua, garantizando que el personal de cocina cumpla DS 594 al acceder a las cámaras (EPP para frío extremo, limitaciones de tiempo de exposición).',
  },
]

const STATS = [
  { valor: 'NFPA 96', etiqueta: 'Norma de extracción en cocinas comerciales' },
  { valor: 'NC-35', etiqueta: 'Nivel de ruido objetivo en salones' },
  { valor: 'HACCP', etiqueta: 'Estándar de inocuidad alimentaria' },
  { valor: 'DS 594', etiqueta: 'Confort térmico para manipuladores' },
]

const FAQ = [
  {
    pregunta: '¿Es obligatorio cumplir la NFPA 96 en Chile para restaurantes?',
    respuesta: 'La NFPA 96 no es de aplicación directa en Chile como norma legal, pero la SEREMI de Salud y el Cuerpo de Bomberos de Chile la toman como referencia técnica principal en auditorías e inspecciones. El D.S. Nº 594 establece la obligación de ventilación adecuada, y la Ordenanza General de Urbanismo y Construcción exige que los locales de expendio de alimentos cuenten con sistemas de extracción de grasas y vapores conformes a la NCh Nº 898. En la práctica, diseñar conforme a NFPA 96 es la manera más segura de cumplir todas las exigencias locales.',
  },
  {
    pregunta: '¿Cuánto caudal de extracción necesita una campana de cocina?',
    respuesta: 'La NFPA 96 establece caudales según el tipo de equipo cubierto y el tipo de campana. Para campanas tipo I (equipos con grasas: freidoras, planchas, hornos convectores): caudal mínimo de 0,25 m/s en la cara abierta de la campana, usualmente 1.000–3.000 m³/h por cada 1,2 m de longitud de campana. Para campanas tipo II (equipos sin grasas: lavavajillas, hornos de pan): caudal menor (0,10–0,15 m/s). D&Z Building dimensiona el sistema según el inventario de equipos de cocción y entrega el cálculo de ingeniería.',
  },
  {
    pregunta: '¿Qué pasa si no tengo make-up air en mi cocina?',
    respuesta: 'Una cocina sin make-up air entra en presión negativa severa: las llamas de los quemadores a gas se apagan por falta de comburente, las puertas de la cocina son difíciles de abrir, y el aire de zonas sucias (baños, residuos) es aspirado hacia la cocina. Además, el sistema de extracción trabaja con mayor resistencia, reduciendo su caudal real por debajo del diseñado. En invierno, el aire frío no controlado que entra por cualquier abertura genera malestar en el personal. D&Z Building diseña siempre el sistema de extracción e inyección como un conjunto equilibrado.',
  },
  {
    pregunta: '¿Cuánto cuesta instalar un sistema de ventilación para un restaurante mediano?',
    respuesta: 'Para un restaurante con cocina de 40–60 m² y salón de 120–200 personas, el sistema completo (campana, extractor, make-up air, climatización del salón) tiene un costo de UF 100–250 (≈ CLP 2,6–6,5 millones) en equipamiento e instalación, dependiendo de la complejidad de la campana, la longitud del ducto de extracción y si se requiere un trampeo de grasa por Bomberos. D&Z Building entrega cotización detallada con planos y cálculo de ingeniería sin compromiso.',
  },
  {
    pregunta: '¿Qué mantenimiento requiere una campana extractora industrial?',
    respuesta: 'La NFPA 96 establece inspecciones y limpiezas periódicas: mensual para cocinas de alto volumen (restaurantes con fritura intensiva); trimestral para cocinas de volumen moderado; semestral para cocinas de bajo volumen (cafeterías de oficina). La limpieza incluye ductos, campana, filtros de grasa, y el extractor. El incumplimiento de la mantención es la causa más frecuente de incendios en cocinas comerciales en Chile. D&Z Building ofrece contratos de mantención con certificado para Bomberos y la SEREMI.',
  },
  {
    pregunta: '¿Cómo controlo los olores que salen por el ducto de extracción a la calle?',
    respuesta: 'El ducto de extracción debe descargar sobre el nivel del techo a suficiente altura para que los olores se dispersen. Si la descarga está cerca de ventanas de edificios vecinos o áreas peatonales, se instalan sistemas de tratamiento de olores: filtros de carbón activo, ionización de plasma frío, o sistemas UV-C. La solución más efectiva para cocinas con alta carga de olores (fritura, asado) es la combinación de ionización + carbón activo al final del ducto. D&Z Building evalúa la situación de descarga y propone la solución más adecuada según la ubicación del local.',
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
        { '@type': 'ListItem', position: 3, name: 'Restaurantes y Alimentación', item: `${siteUrl}/sectores/restaurantes-alimentacion/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/restaurantes-alimentacion/#service`,
      name: 'Climatización para Restaurantes y Cocinas Industriales Chile',
      description: 'Diseño, instalación y mantención de sistemas de ventilación y climatización para restaurantes, cocinas industriales, casinos empresariales y food courts en Chile, con cumplimiento de NFPA 96 y DS 594.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Restaurant & Food Service HVAC',
      url: `${siteUrl}/sectores/restaurantes-alimentacion/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/restaurantes-alimentacion/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorRestaurantesAlimentacionPage() {
  return (
    <>
      <Script id="ld-sector-restaurantes-alimentacion" type="application/ld+json">
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
            <Link href="/?servicio=ventilacion-industrial#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar asesoría técnica
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
            <span>Restaurantes y Alimentación</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Cocinas Industriales · Casinos Empresariales · Food Courts
          </p>
          <h1 className="sp-hero-title">Ventilación y Climatización<br />para Restaurantes en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas de extracción NFPA 96, make-up air y climatización de salones para restaurantes,
            cocinas industriales, casinos empresariales y food courts. Cumplimiento DS 594 para
            el confort térmico del personal en cocina.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion-industrial#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta sp-hero-cta-outline">Proyecto llave en mano</Link>
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
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Sistemas que diseñamos para el sector alimentación
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((aplic, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {aplic.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {aplic.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {aplic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 'clamp(24px,3vw,40px)', maxWidth: 720 }}>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
              ¿Necesita asesoría para su proyecto?
            </p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2vw,26px)', margin: '0 0 12px', color: 'var(--text)' }}>
              Cotización sin compromiso para su cocina o salón
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.65, margin: '0 0 20px' }}>
              Cuéntenos el tipo de local, equipos de cocción y aforo del salón.
              Evaluamos el proyecto y respondemos en 48–72 horas con una propuesta técnica.
            </p>
            <Link href="/?servicio=ventilacion-industrial#contacto" className="sp-hero-cta">
              Solicitar cotización
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            NFPA 96, make-up air y mantenimiento
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

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto en restauración?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de cocina, equipos de cocción y aforo del comedor.
            Entregamos propuesta técnica con cálculo de ingeniería en 48–72 horas.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion-industrial#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
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
