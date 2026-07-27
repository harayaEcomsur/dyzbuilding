import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Mantención Preventiva HVAC para Empresas Chile: Guía 2025',

  description:
    'Qué incluye un contrato de mantención preventiva HVAC en Chile, cada cuánto debe realizarse, obligaciones del DS 594 y cómo elegir el proveedor adecuado para su empresa.',
  alternates: {
    canonical: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
    languages: {
      es: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
    },
  },
  openGraph: {
    title: 'Mantención Preventiva HVAC Chile: Frecuencias, Costos y DS 594',
    description:
      'Guía completa de mantención preventiva para sistemas VRF, splits y equipos de refrigeración comercial en Chile: checklist de revisión, frecuencias recomendadas y obligaciones legales.',
    url: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const INCLUYE = [
  {
    titulo: 'Revisión y limpieza de filtros',
    subtitulo: 'Mensual o trimestral · Según carga de uso',
    desc: 'Los filtros de aire atrapan polvo, bacterias y partículas que afectan la calidad del aire interior y la eficiencia del equipo. Un filtro sucio puede reducir el caudal de aire en 30–50% y aumentar el consumo eléctrico en 15–25%. La limpieza de filtros de splits e inyectores de cassette debe realizarse cada 1–3 meses según el nivel de polvo ambiental.',
  },
  {
    titulo: 'Revisión del sistema de refrigeración',
    subtitulo: 'Carga de refrigerante · Fugas · Compresor',
    desc: 'El refrigerante no se consume en condiciones normales — una pérdida de carga indica una fuga. La detección temprana de fugas evita daños al compresor (el componente más costoso del sistema) y multas por manejo inadecuado de gases refrigerantes bajo la normativa DS 148. D&Z Building usa detectores electrónicos calibrados para detectar fugas de R-410A, R-32 y R-22.',
  },
  {
    titulo: 'Inspección eléctrica y de controles',
    subtitulo: 'Tensión · Amperaje · Termostatos · BMS',
    desc: 'Las conexiones eléctricas flojas generan calor y pueden causar fallas del equipo o incendios. La revisión incluye: medición de tensión y amperaje en arranque y régimen, verificación de contactores y relés, calibración de termostatos e integración con sistemas BMS. Esta inspección reduce el riesgo de fallas eléctricas que son la causa del 40% de los siniestros en equipos de climatización.',
  },
  {
    titulo: 'Limpieza de unidades evaporadoras y condensadoras',
    subtitulo: 'Serpentines · Bandejas de condensado · Torres',
    desc: 'Los serpentines sucios actúan como aislantes térmicos, reduciendo la eficiencia de transferencia de calor en hasta 30%. La limpieza con productos apropiados (neutros, sin corrosivos) restaura el rendimiento original. Las bandejas de condensado obstruidas generan desbordamiento de agua y riesgo de legionella. Las torres de enfriamiento requieren tratamiento biocida semestral para prevención de legionella.',
  },
]

const STATS = [
  { valor: '30%', etiqueta: 'Pérdida de eficiencia con filtros sucios' },
  { valor: '40%', etiqueta: 'Fallas por causas eléctricas' },
  { valor: 'DS 594', etiqueta: 'Obliga a mantener equipos en buen estado' },
  { valor: '2–4 años', etiqueta: 'Vida útil extra con mantención preventiva' },
]

const OBLIGACIONES = [
  {
    titulo: 'Equipos en buen estado (Art. 33)',
    subtitulo: 'Obligación del empleador',
    desc: 'El DS 594 exige que los sistemas de ventilación y climatización estén en buen estado de funcionamiento y limpieza. No es solo una recomendación — el empleador es responsable de acreditar el mantenimiento ante la Inspección del Trabajo. Un equipo averiado que genera calor excesivo puede dar lugar a una multa de hasta 300 UTM.',
  },
  {
    titulo: 'Temperatura dentro de rangos (Art. 96)',
    subtitulo: 'Máx 27°C WBGT · Mín 10°C bulbo seco',
    desc: 'Un sistema mal mantenido puede dejar de enfriar en verano o calefaccionar en invierno, sacando al recinto de los rangos del DS 594. La Inspección del Trabajo puede visitar el lugar de trabajo en cualquier momento y medir las condiciones ambientales. D&Z Building emite un informe de confort térmico tras cada mantención preventiva.',
  },
  {
    titulo: 'Calidad del aire interior (Art. 32)',
    subtitulo: 'CO₂ < 1.000 ppm · Sin contaminantes',
    desc: 'Los filtros sucios y los sistemas de ventilación averiados deterioran la calidad del aire interior, pudiendo elevar el CO₂ por encima de los 1.000 ppm recomendados por el ISP. Además, los condensados estancados en bandejas pueden generar bacterias y hongos. Un contrato de mantención preventiva incluye verificación de caudales de aire y limpieza de conductos.',
  },
  {
    titulo: 'Registros para auditoría',
    subtitulo: 'Historial de mantenciones · Informe técnico',
    desc: 'Ante una inspección de la Autoridad Sanitaria o de la Inspección del Trabajo, el empleador debe poder acreditar que el sistema de climatización ha sido mantenido regularmente. D&Z Building entrega un informe técnico firmado por técnico certificado SEC tras cada visita, con fecha, actividades realizadas y estado del equipo.',
  },
]

const FAQ = [
  {
    pregunta: '¿Con qué frecuencia debo hacer mantención preventiva al aire acondicionado de mi empresa?',
    respuesta: 'La frecuencia mínima recomendada depende del tipo de equipo y el uso. Para splits de oficina con uso normal (8 horas/día laborales): limpieza de filtros mensual, revisión general semestral, y limpieza de serpentines anual. Para sistemas VRF de uso intensivo o continuo: revisión trimestral. Para refrigeración comercial (vitrinas, cuartos fríos) que opera 24/7: revisión mensual es lo mínimo seguro. D&Z Building asesora sobre la frecuencia óptima según el equipamiento específico de su empresa.',
  },
  {
    pregunta: '¿Cuánto cuesta un contrato de mantención preventiva HVAC para una empresa?',
    respuesta: 'El costo depende del número y tipo de equipos. Como referencia: para una oficina de 200 m² con 4 splits de cassette, un contrato de mantención anual (2 visitas) cuesta aproximadamente UF 15–25 (≈ CLP 400.000–650.000). Para un piso completo de 1.000 m² con sistema VRF de 20 unidades interiores, el contrato anual (4 visitas) ronda UF 50–90. El costo de mantención preventiva es 5–10 veces menor que el costo promedio de una reparación mayor (cambio de compresor, limpieza de válvula de expansión).',
  },
  {
    pregunta: '¿Qué pasa si no hago mantención preventiva al sistema HVAC?',
    respuesta: 'A corto plazo: mayor consumo eléctrico (10–25%), reducción de capacidad frigorífica y mayor ruido. A mediano plazo (1–2 años sin mantención): tapones de refrigerante, serpentines con escamas que actúan como aislante, y desgaste acelerado del compresor. A largo plazo: falla prematura del equipo (un sistema con mantención dura 15–20 años; sin mantención puede fallar en 5–8 años). Adicionalmente, sin registros de mantención, el empleador no puede acreditar cumplimiento del DS 594 ante la Inspección del Trabajo.',
  },
  {
    pregunta: '¿Puedo hacer la mantención preventiva con cualquier técnico o necesito uno certificado?',
    respuesta: 'Para la limpieza de filtros y revisión visual, cualquier técnico capacitado puede realizar la tarea. Sin embargo, para intervenir el circuito de refrigerante (medir carga, detectar fugas, recargar) se requiere técnico habilitado por la SEC (Superintendencia de Electricidad y Combustibles), ya que el refrigerante es un gas a presión regulado. Además, para que el informe de mantención sirva como respaldo ante la Inspección del Trabajo, debe estar firmado por un técnico certificado.',
  },
  {
    pregunta: '¿El contrato de mantención cubre los repuestos?',
    respuesta: 'Depende del tipo de contrato. D&Z Building ofrece dos modalidades: (1) Contrato de mantención preventiva — incluye mano de obra, materiales de limpieza e insumos menores (filtros estándar, biocida, lubricantes); excluye repuestos mayores. (2) Contrato integral — incluye mantención preventiva más reparaciones correctivas con repuestos cubiertos hasta un monto acordado anual. La modalidad integral tiene un costo mayor pero elimina la incertidumbre de costos de reparación.',
  },
  {
    pregunta: '¿D&Z Building hace mantención a equipos de marcas que no instaló?',
    respuesta: 'Sí. D&Z Building realiza mantención preventiva para equipos de las principales marcas comerciales en Chile: Daikin, Mitsubishi Electric, LG, Samsung, Carrier, Trane, York, entre otras. Para equipos VRF, se requiere acceso a herramienta de diagnóstico de la marca (PC-DIAG de Daikin, G-50A de Mitsubishi) — D&Z Building cuenta con acceso a las herramientas de las marcas principales. Para equipos de marcas poco comunes o sin representación en Chile, se evalúa caso a caso.',
  },
]

const frecuencias = [
  { equipo: 'Split mural (residencial/comercial)', filtros: 'Mensual', revision: 'Semestral', carga: 'Anual o c/fuga', serpentines: 'Anual' },
  { equipo: 'Cassette de techo VRF', filtros: 'Mensual', revision: 'Semestral', carga: 'Anual o c/fuga', serpentines: 'Semestral' },
  { equipo: 'Manejadora de aire (AHU)', filtros: 'Mensual', revision: 'Trimestral', carga: 'Anual o c/fuga', serpentines: 'Semestral' },
  { equipo: 'Chiller industrial', filtros: 'Semanal (check)', revision: 'Mensual', carga: 'Anual o c/fuga', serpentines: 'Trimestral' },
  { equipo: 'Refrigeración comercial (vitrinas)', filtros: 'Quincenal', revision: 'Trimestral', carga: 'Semestral', serpentines: 'Trimestral' },
  { equipo: 'Torre de enfriamiento', filtros: 'N/A', revision: 'Trimestral', carga: 'N/A', serpentines: 'Semestral + biocida' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${siteUrl}/guias/` },
        { '@type': 'ListItem', position: 3, name: 'Mantención Preventiva HVAC', item: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/#article`,
      headline: 'Mantención Preventiva HVAC para Empresas Chile: Guía 2025',
      description: 'Qué incluye un contrato de mantención preventiva HVAC en Chile, cada cuánto debe realizarse, obligaciones del DS 594 y cómo elegir el proveedor adecuado para su empresa.',
      url: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
      inLanguage: 'es-CL',
      publisher: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      author: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#business`,
      },
      datePublished: '2025-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      about: {
        '@type': 'Service',
        name: 'Mantención Preventiva HVAC',
        '@id': `${siteUrl}/servicios/mantenimiento-preventivo/#service`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaMantenimientoPreventivoPag() {
  return (
    <>
      <Script id="ld-guia-mantenimiento-preventivo" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/mantenimiento-preventivo" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Mantención Preventiva
            </Link>
            <Link href="/?servicio=mantenimiento-preventivo#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar contrato
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <span>Guías</span>
            <span>›</span>
            <span>Mantención Preventiva HVAC</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía técnica · 2025
          </p>
          <h1 className="sp-hero-title">Mantención Preventiva HVAC<br />para Empresas en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Qué incluye un contrato de mantención preventiva, frecuencias recomendadas por tipo de equipo, obligaciones del DS 594 y cómo elegir el proveedor adecuado para su empresa en Chile.
          </p>
          <Link href="/?servicio=mantenimiento-preventivo#contacto" className="sp-hero-cta">
            Solicitar contrato de mantención →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Por qué es crítica la mantención preventiva HVAC?
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              Un sistema de climatización sin mantención es como un vehículo sin service: puede funcionar durante meses antes de la primera falla visible, pero internamente el desgaste avanza. Los filtros se tapan, los serpentines se ensucian, las conexiones eléctricas se aflojan y el refrigerante puede estar perdiéndose por una microfuga imperceptible.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              El resultado: consumo eléctrico 15–25% mayor, reducción de la capacidad de enfriamiento o calefacción, mayor ruido y, eventualmente, una falla del compresor — el componente más costoso del sistema, cuyo reemplazo puede superar los CLP 800.000 en un equipo split comercial y CLP 3–6 millones en un sistema VRF.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              Adicionalmente, en Chile el Decreto Supremo 594 obliga a los empleadores a mantener los equipos de climatización y ventilación en buen estado, con registros verificables. Un contrato de mantención preventiva cumple simultáneamente con el objetivo técnico y el legal.
            </p>
          </div>
        </div>

        {/* QUÉ INCLUYE */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Alcance del contrato
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            ¿Qué incluye la mantención preventiva HVAC?
          </h2>
          <div className="sp-aplic-grid">
            {INCLUYE.map((c) => (
              <div key={c.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {c.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {c.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FRECUENCIAS table */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Frecuencias recomendadas por tipo de equipo
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Equipo', 'Filtros', 'Revisión general', 'Carga refrigerante', 'Limpieza serpentines'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {frecuencias.map((row, i) => (
                  <tr key={row.equipo} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.equipo}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.filtros}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.revision}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.carga}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.serpentines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '28px 40px' }}>
            {STATS.map((s) => (
              <div key={s.etiqueta} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(22px,2.8vw,34px)', fontWeight: 300, color: 'var(--accent)', margin: '0 0 6px', letterSpacing: '-.01em' }}>
                  {s.valor}
                </p>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', margin: 0 }}>
                  {s.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* OBLIGACIONES DS 594 */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Marco legal
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Obligaciones del DS 594 para sistemas HVAC
          </h2>
          <div className="sp-aplic-grid">
            {OBLIGACIONES.map((o) => (
              <div key={o.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {o.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {o.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-article CTA */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                Contrato de mantención preventiva
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                D&Z Building cubre VRF, splits, AHU y refrigeración comercial. Informe técnico SEC tras cada visita.
              </p>
            </div>
            <Link href="/servicios/mantenimiento-preventivo" className="sp-hero-cta">
              Ver servicio de mantención →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Todo lo que necesita saber sobre mantención preventiva HVAC
          </h2>
          <div style={{ maxWidth: 780 }}>
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

        {/* Related links */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Recursos relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/guias/que-es-un-sistema-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              ¿Qué es un sistema VRF? →
            </Link>
            <Link href="/guias/decreto-supremo-594-ventilacion-hvac-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía DS 594 HVAC →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Servicio de mantención preventiva →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿Necesita un contrato de mantención para su empresa?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Nuestro equipo técnico revisa su equipamiento actual y propone un contrato de mantención preventiva ajustado a su tipo de sistema y presupuesto. Informe técnico SEC en cada visita.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=mantenimiento-preventivo#contacto" className="sp-hero-cta">Solicitar contrato de mantención</Link>
            <Link href="/servicios/mantenimiento-preventivo" className="sp-hero-cta sp-hero-cta-outline">Ver servicio completo</Link>
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
