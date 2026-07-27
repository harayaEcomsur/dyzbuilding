import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Plantas Industriales y Naves en Chile',

  description:
    'HVAC y ventilación para plantas industriales, farmacéuticas, logística y centros de distribución en Chile. Salas limpias GMP, ventilación ATEX, climatización de áreas técnicas. DS 594 y normativa sectorial.',
  alternates: {
    canonical: `${siteUrl}/sectores/plantas-industriales/`,
    languages: {
      es: `${siteUrl}/sectores/plantas-industriales/`,
      en: `${siteUrl}/en/sectors/industrial/`,
    },
  },
  openGraph: {
    title: 'HVAC Plantas Industriales Chile — Manufactura, Logística, Farmacéutica | D&Z Building',
    description:
      'Climatización y ventilación industrial para plantas de manufactura, bodegas logísticas, plantas farmacéuticas y centros de distribución. Cumplimiento DS 594, GMP y ATEX.',
    url: `${siteUrl}/sectores/plantas-industriales/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Áreas de Producción y Manufactura',
    subtitulo: 'DS 594 · ASHRAE 62.1 · Control de temperatura',
    desc: 'Climatización de líneas de producción con requisitos de temperatura y humedad para el proceso: manufactura de electrónica (T 21–23°C, HR 40–50%), plantas de envasado de alimentos (T 10–14°C), producción de plásticos y pinturas (control de temperatura para viscosidad). Cálculo de cargas térmicas por generación de calor de maquinaria e iluminación industrial.',
  },
  {
    titulo: 'Salas Limpias Farmacéuticas (GMP)',
    subtitulo: 'ISO 8 / Clase C–D · GMP EU Annex 1',
    desc: 'Áreas de manufactura farmacéutica bajo Buenas Prácticas de Manufactura (GMP). Clasificación ISO 7–8 (Clase C–D): 20 a 30 renovaciones de aire por hora, HEPA H14 en las últimas etapas, presión diferencial positiva entre áreas limpias y de servicio. Validación de HVAC (DQ, IQ, OQ, PQ) para autorización del ISP.',
  },
  {
    titulo: 'Bodegas y Centros de Distribución',
    subtitulo: 'Ventilación mecánica · DS 594 · Confort operador',
    desc: 'Ventilación mecánica para bodegas de logística y centros de distribución: control de temperatura para el personal operador (DS 594), extracción de calor de equipos de movimiento de materiales (cargadores, montacargas eléctricos), y ventilación de zonas de carga para prevenir acumulación de CO de vehículos a combustión.',
  },
  {
    titulo: 'Plantas de Procesos Químicos y Pinturas',
    subtitulo: 'ATEX · DS 78 · Ventilación de emergencia',
    desc: 'Ventilación antideflagrante (ATEX) para plantas con solventes, pinturas, agroquímicos y gases inflamables. Sistemas de detección de gases con arranque automático de ventiladores de emergencia. Extracción localizada en cabinas de pintura y zonas de mezcla. Cumplimiento del DS 78 (MINSAL) y del SAG para almacenamiento de fitosanitarios.',
  },
  {
    titulo: 'Áreas Técnicas y Salas de Control',
    subtitulo: 'Redundancia N+1 · 20–24°C · Filtración G4–F7',
    desc: 'Climatización de salas de control de proceso, cuartos de servidores industriales (SCADA, DCS), laboratorios de control de calidad, y áreas de instrumentación. Redundancia N+1 en la unidad de climatización, filtración G4–F7 para ambientes con polvo industrial, y UPS integrado en los tableros de control del HVAC.',
  },
  {
    titulo: 'Confort de Operadores en Entornos de Alta Carga Térmica',
    subtitulo: 'Enfriamiento evaporativo · ASHRAE 55',
    desc: 'Para operadores en zonas calientes (cerca de hornos, compresores, líneas de soldadura), instalación de enfriadores evaporativos adiabáticos o sistemas de aire frío localizado (spot cooling) con tubería flexible de distribución. El DS 594 establece que la temperatura no debe superar los 32°C WBGT en trabajos moderados.',
  },
]

const STATS = [
  { valor: 'ISO 7–8', etiqueta: 'Salas GMP farmacéuticas' },
  { valor: 'ATEX', etiqueta: 'Zonas con atmósferas explosivas' },
  { valor: 'DS 594', etiqueta: 'Normativa sanitaria del trabajo' },
  { valor: '32°C WBGT', etiqueta: 'Límite DS 594 para trabajo moderado' },
]

const FAQ = [
  {
    pregunta: '¿Qué temperatura debe tener una planta industrial según el DS 594?',
    respuesta: 'El DS 594 (Reglamento de Condiciones Sanitarias de los Establecimientos de Trabajo) establece que en trabajos físicos moderados la temperatura efectiva no debe superar los 26.5°C (sin carga radiante) y el índice WBGT no debe superar 32°C. Para trabajos sedentarios la temperatura debe estar entre 18°C y 24°C. En áreas con fuentes de calor intenso (hornos, calderas, líneas de soldadura) se deben implementar controles de ingeniería (aislamiento, enfriamiento localizado) para proteger a los trabajadores.',
  },
  {
    pregunta: '¿Qué es una sala limpia GMP y cómo se clasifica?',
    respuesta: 'Una sala limpia GMP (Good Manufacturing Practices) es un área de producción farmacéutica con control de partículas, temperatura, humedad y presión diferencial. La clasificación más usada en Chile es la del Anexo 1 EU GMP: Clase A (ISO 5, zona de llenado aséptico), Clase B (ISO 7, entorno de Clase A), Clase C (ISO 8, fases menos críticas), Clase D (sin clasificación ISO formal, áreas de preparación). El ISP (Instituto de Salud Pública) requiere calificación del sistema HVAC (DQ, IQ, OQ, PQ) para la autorización sanitaria de la planta.',
  },
  {
    pregunta: '¿Qué diferencia hay entre ventilación industrial y climatización?',
    respuesta: 'La ventilación industrial tiene como objetivo principal el control de contaminantes en el aire (gases, vapores, polvo, calor) y la renovación del aire para cumplir con DS 594. No necesariamente controla la temperatura con precisión. La climatización (HVAC) controla temperatura, humedad y calidad del aire simultáneamente. En plantas industriales se necesitan ambas: ventilación para las zonas de proceso y climatización de precisión para salas de control, laboratorios y áreas de producción sensibles a la temperatura.',
  },
  {
    pregunta: '¿Qué es una zona ATEX en una planta industrial?',
    respuesta: 'Una zona ATEX es un área donde puede formarse una mezcla explosiva de gases, vapores o polvo con el aire. La clasificación de zonas (Zona 0/1/2 para gases/vapores, Zona 20/21/22 para polvo) determina qué equipos pueden instalarse. En zonas ATEX, todos los equipos eléctricos —incluyendo ventiladores, motores de extracción, interruptores y tableros— deben tener certificación EX conforme a la directiva ATEX 2014/34/UE o la norma IECEx. Instalar equipos estándar en una zona ATEX puede generar responsabilidad legal en caso de accidente.',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar una planta industrial o bodega en Chile?',
    respuesta: 'Una bodega logística con ventilación mecánica básica (extracción + inyección de aire para DS 594) de 2.000–5.000 m² puede costar UF 150–600. Una planta de manufactura con climatización de áreas técnicas y sala de control (T 20–24°C, filtración G4–F7) de 500–2.000 m² puede costar UF 400–2.000. Una sala limpia GMP Clase C–D de 200–500 m² cuesta UF 1.500–6.000 incluyendo el sistema HVAC validable. El rango es muy amplio porque depende del nivel de control requerido y de la normativa aplicable.',
  },
  {
    pregunta: '¿Pueden hacer la calificación HVAC (DQ, IQ, OQ, PQ) para el ISP?',
    respuesta: 'Sí. Para salas limpias farmacéuticas en Chile, el ISP requiere la calificación del sistema HVAC como parte de la autorización sanitaria. Nosotros diseñamos y ejecutamos el HVAC de la sala limpia con los parámetros de proceso acordados, y preparamos la documentación técnica de diseño (DQ) e instalación (IQ). La calificación operacional (OQ) y de performance (PQ) se realiza con el equipamiento en servicio y requiere mediciones de partículas, caudales y presiones diferenciales. Recomendamos coordinarlo con una empresa de validación farmacéutica.',
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
        { '@type': 'ListItem', position: 3, name: 'Plantas Industriales', item: `${siteUrl}/sectores/plantas-industriales/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/plantas-industriales/#service`,
      name: 'Climatización y Ventilación para Plantas Industriales en Chile',
      description: 'HVAC y ventilación industrial para plantas de manufactura, farmacéuticas, bodegas logísticas y centros de distribución. Salas limpias GMP, zonas ATEX, cumplimiento DS 594.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Industrial HVAC and Ventilation',
      url: `${siteUrl}/sectores/plantas-industriales/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/plantas-industriales/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorPlantasIndustrialesPage() {
  return (
    <>
      <Script id="ld-sector-plantas-industriales" type="application/ld+json">
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
            <span>Plantas Industriales</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Manufactura · Farmacéutico · Logística · Procesos Químicos
          </p>
          <h1 className="sp-hero-title">Climatización para Plantas<br />Industriales en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            HVAC y ventilación industrial para manufactura, plantas farmacéuticas GMP,
            bodegas logísticas y plantas de procesos — con cumplimiento de DS 594,
            normas ATEX y certificación GMP para el ISP.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/sectores/" className="sp-hero-cta sp-hero-cta-outline">Ver sectores</Link>
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
            Recintos que climatizamos en plantas industriales
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((apl, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {apl.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {apl.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {apl.desc}
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
            Normativa, GMP y zonas ATEX
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
            <Link href="/servicios/ventilacion-industrial/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Ventilación industrial →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/sectores/mineria/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector minería →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto industrial?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de planta, actividad productiva y normativa aplicable.
            Evaluamos el proyecto y respondemos en 48–72 horas con una propuesta técnica.
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
