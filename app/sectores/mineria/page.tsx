import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Minería en Chile — HVAC Faenas, Salas de Control y Campamentos',

  description:
    'Especialistas en HVAC para el sector minero en Chile: salas de control, plantas procesadoras, campamentos y laboratorios. Sistemas para zonas remotas, extremos climáticos y cumplimiento de DS 132 SERNAGEOMIN.',
  alternates: {
    canonical: `${siteUrl}/sectores/mineria/`,
    languages: {
      es: `${siteUrl}/sectores/mineria/`,
      en: `${siteUrl}/en/sectors/mining/`,
    },
  },
  openGraph: {
    title: 'HVAC Minería Chile — Salas de Control, Plantas y Campamentos | D&Z Building',
    description:
      'Climatización para faenas mineras en Chile: salas de control 24/7, plantas procesadoras, campamentos y laboratorios. Zonas extremas, cumplimiento DS 132.',
    url: `${siteUrl}/sectores/mineria/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const INSTALACIONES = [
  {
    titulo: 'Salas de Control y Centro de Operaciones',
    subtitulo: 'T 20–24°C · Redundancia N+1',
    desc: 'Las salas de control de faenas mineras (mina, planta, chancador) operan 24/7 con equipos de cómputo y pantallas de proceso. Requieren sistemas con redundancia N+1 (dos unidades, una activa una en espera), alimentación desde UPS y equipos de climatización de precisión (±1°C). Temperatura objetivo: 20–24°C, HR 40–55%.',
  },
  {
    titulo: 'Plantas Procesadoras y Concentradoras',
    subtitulo: 'Polvo · T° extremas · Ex-i',
    desc: 'Las plantas de procesamiento (flotación, molienda, concentrado) requieren ventilación industrial con filtros antipolvo (HEPA o bolsa), extracción localizada en puntos de generación de polvo fino, y climatización de las áreas de control de procesos. En áreas con riesgo de polvo combustible, los equipos deben cumplir normas ATEX (certificación Ex).',
  },
  {
    titulo: 'Campamentos Mineros',
    subtitulo: 'Desierto · Altiplano · −10 a +40°C',
    desc: 'Los campamentos en el desierto de Atacama y el Altiplano enfrentan condiciones extremas: radiación UV intensa, temperatura diurna de +35–40°C y nocturna de −5 a −15°C, alturas de 2.500–4.500 m.s.n.m. (que reducen la capacidad de los compresores). Los sistemas deben estar sobredimensionados un 10–15% por la reducción de rendimiento a alturas y protegidos contra arena y polvo.',
  },
  {
    titulo: 'Laboratorios de Análisis Mineralógico',
    subtitulo: 'T ±0.5°C · ISO 17025',
    desc: 'Los laboratorios de análisis de muestras (ICP, XRF, preparación de muestras) requieren temperatura estable para garantizar la precisión de los análisis. Los sistemas de climatización deben ser de tipo "comfort cooling" con control de precisión, y los equipos no deben generar vibraciones que interfieran con las balanzas analíticas.',
  },
  {
    titulo: 'Edificios Administrativos en Faena',
    subtitulo: 'VRF · Split · Comfort',
    desc: 'Las oficinas, comedores, enfermería y salas de reuniones de faenas mineras requieren climatización de confort. En zonas de altitud extrema (Altiplano, >3.500 m.s.n.m.), los sistemas VRF deben seleccionarse con corrección altitudinal o usar equipos especificados para grandes alturas (Daikin Altitude, Mitsubishi High Altitude).',
  },
  {
    titulo: 'Mantención en Zonas Remotas',
    subtitulo: 'SLA 24/7 · Logística remota',
    desc: 'La mantención de equipos en zonas remotas (faenas a 300–800 km de Santiago) requiere logística especial: partes críticas en stock en faena, técnicos con disponibilidad para traslado en vuelo a aeropuertos regionales (Antofagasta, Calama, Copiapó), y SLA de respuesta adaptados a la realidad de la minería (tiempo de respuesta desde la llamada hasta llegada a faena).',
  },
]

const FAQ = [
  {
    pregunta: '¿Cómo afecta la altura sobre el nivel del mar al rendimiento de los equipos de climatización?',
    respuesta: 'A mayor altitud, la densidad del aire es menor, lo que reduce el calor que puede transferir el aire por unidad de volumen. La pérdida de rendimiento es aproximadamente un 3–4% de la capacidad de enfriamiento por cada 300 metros de altitud sobre los 1.000 m.s.n.m. Para una faena a 3.500 m.s.n.m., la pérdida puede ser del 20–30%. Los fabricantes de VRF como Daikin y Mitsubishi Electric tienen programas de corrección altitudinal y, en algunos casos, modelos específicamente diseñados para altitudes extremas que usan compresores de mayor desplazamiento o velocidades ajustadas.',
  },
  {
    pregunta: '¿Qué normativa aplica a la climatización en faenas mineras chilenas?',
    respuesta: 'El DS 132 del Ministerio de Minería (Reglamento de Seguridad Minera) establece los requisitos de condiciones ambientales en recintos de trabajo minero: temperatura máxima (28°C WBGT para trabajo físico), ventilación mínima y calidad del aire. El DS 594 del MINSAL complementa con los límites de exposición a agentes químicos (polvo, gases) y condiciones de trabajo en ambientes extremos. Las salas de control que alojan sistemas SCADA o DCS (Distributed Control Systems) también deben cumplir con las especificaciones del fabricante del sistema de control (típicamente T 18–25°C, HR 30–60%, sin condensación).',
  },
  {
    pregunta: '¿Pueden hacer proyectos en zonas declaradas como Ex (ATEX)?',
    respuesta: 'Sí. Para zonas con riesgo de atmósferas explosivas (bodegas de reactivos, áreas de flotación con solventes, polvorines), seleccionamos y especificamos equipos con certificación ATEX o IECEx según la clasificación de zonas. Los equipos deben tener certificación Ex (prueba de llama, seguridad aumentada o seguridad intrínseca según zona). La instalación eléctrica de los equipos en zonas Ex debe cumplir con la norma IEC 60079 y ser realizada por instaladores certificados.',
  },
  {
    pregunta: '¿Cómo manejan la logística de proyectos en faenas remotas?',
    respuesta: 'Para proyectos en faenas remotas, coordinamos el transporte de equipos y materiales vía terrestre a centros de acopio cercanos (Antofagasta, Calama, Copiapó, La Serena) y luego los últimos kilómetros a faena. El equipo técnico se traslada en vuelos desde Santiago a los aeropuertos regionales y de ahí a faena. Los costos de logística y estadía se contemplan en el presupuesto del proyecto. Para mantenciones recurrentes, coordinamos con el departamento de logística de la compañía minera para las autorizaciones de ingreso (inducción, ODL, seguro de faena).',
  },
  {
    pregunta: '¿Pueden hacer la ingeniería para un proyecto en etapa de licitación minera?',
    respuesta: 'Sí. Preparamos ingeniería conceptual y básica (memoria de cálculo, especificaciones técnicas, estimación de costos ±20%) para etapas de licitación. También preparamos ingeniería de detalle (planos de ingeniería, lista de materiales, especificaciones de compra) para etapas de ejecución. Trabajamos con los estándares de documentación que exigen las grandes compañías mineras (Codelco, Anglo American, BHP, Antofagasta Minerals): formato IFC, numeración de documentos, revisiones A/B/0.',
  },
  {
    pregunta: '¿Tienen experiencia con la normativa de salud ocupacional para faenas mineras?',
    respuesta: 'Sí. Conocemos las exigencias del DS 132 en materia de condiciones ambientales de trabajo, los límites de exposición del DS 594, y las especificaciones de las principales compañías mineras operando en Chile en cuanto a condiciones térmicas de trabajo (método de evaluación WBGT, protocolos de calor extremo en Atacama y Altiplano). Participamos en el proceso de línea base ambiental y de condiciones laborales cuando el proyecto así lo requiere.',
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
        { '@type': 'ListItem', position: 3, name: 'Minería', item: `${siteUrl}/sectores/mineria/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/mineria/#service`,
      name: 'Climatización HVAC para Minería — Chile',
      description: 'Diseño, instalación y mantención de sistemas HVAC para el sector minero en Chile: salas de control, plantas procesadoras, campamentos y laboratorios en faenas remotas y zonas de clima extremo.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Mining HVAC',
      url: `${siteUrl}/sectores/mineria/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/mineria/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorMineriaPage() {
  return (
    <>
      <Script id="ld-sector-mineria" type="application/ld+json">
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
            <span>Sectores</span>
            <span>›</span>
            <span>Minería</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Salas de Control · Plantas Procesadoras · Campamentos
          </p>
          <h1 className="sp-hero-title">HVAC para el Sector<br />Minero en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Climatización de precisión para salas de control, plantas procesadoras y campamentos
            en faenas mineras chilenas. Zonas de clima extremo, alturas sobre 2.500 m.s.n.m.,
            cumplimiento DS 132 y normas ATEX donde se requiera.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta sp-hero-cta-outline">Proyecto llave en mano</Link>
          </div>
        </div>

        {/* Condiciones extremas strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {[
            { val: '4.500', unit: 'm.s.n.m.', label: 'altitud máxima de proyecto', sub: 'Corrección altitudinal en diseño' },
            { val: '+40 / −15', unit: '°C', label: 'rango térmico Atacama', sub: 'Sobredimensionamiento previsto' },
            { val: '24/7', unit: '', label: 'operación de salas de control', sub: 'Redundancia N+1 obligatoria' },
            { val: 'DS 132', unit: '', label: 'SERNAGEOMIN', sub: 'Normativa que conocemos' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.val}<span style={{ fontSize: '14px', marginLeft: 2, opacity: .8 }}>{s.unit}</span>
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '11px', color: 'var(--dim)', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Instalaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Tipos de instalación
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Recintos que climatizamos en faenas mineras
          </h2>
          <div className="sp-aplic-grid">
            {INSTALACIONES.map((inst, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {inst.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {inst.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {inst.desc}
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
            Altitud, normativa y logística
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
            <Link href="/servicios/proyectos-llave-en-mano/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Proyectos llave en mano →
            </Link>
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector data centers →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto en faena?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos la ubicación de la faena, altitud, tipo de recinto y requisitos normativos.
            Evaluamos el proyecto y respondemos con una propuesta técnica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
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
