import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'DS 594: Requisitos HVAC y Ventilación en el Trabajo',

  description:
    'Guía técnica del Decreto Supremo 594 para instalaciones HVAC: temperaturas mínimas y máximas, ventilación mínima, humedad relativa y cómo cumplir con la normativa en empresas chilenas.',
  alternates: {
    canonical: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
    languages: {
      es: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
    },
  },
  openGraph: {
    title: 'DS 594 y HVAC: Normativa Chilena de Temperatura y Ventilación Laboral',
    description:
      'Temperatura máxima 27°C WBGT, ventilación mínima 6 renovaciones/hora, humedad 30-70% HR. Cómo cumplir el Decreto 594 con sistemas HVAC certificados.',
    url: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const REQUISITOS = [
  {
    titulo: 'Temperatura Operativa',
    subtitulo: '27°C WBGT máximo · 10°C mínimo de bulbo seco',
    desc: 'El Artículo 96 del DS 594 establece que en ambientes con carga de calor, el valor WBGT (Wet Bulb Globe Temperature) no debe superar 27°C para trabajo moderado. En ambientes fríos, la temperatura de bulbo seco no puede ser inferior a 10°C durante la jornada laboral. Para oficinas, la norma recomienda entre 20°C y 24°C.',
  },
  {
    titulo: 'Ventilación',
    subtitulo: '6 renovaciones/hora mínimo en oficinas',
    desc: 'El Artículo 33 establece ventilación mínima según tipo de local y actividad. Para oficinas y espacios de trabajo general: mínimo 6 renovaciones de aire por hora. Para áreas con generación de contaminantes (talleres, cocinas industriales, laboratorios): caudales específicos según el contaminante. La norma exige que el aire fresco provenga del exterior, no de recirculación.',
  },
  {
    titulo: 'Humedad Relativa',
    subtitulo: '30%–70% HR · Medición en horario laboral',
    desc: 'El DS 594 no fija un rango explícito de humedad relativa, pero la norma técnica complementaria NCh 2251 y los criterios del ISP establecen que ambientes de trabajo deben mantener 30%–70% HR. Humedades por debajo del 30% causan irritación en mucosas y problemas de electrostática; sobre 70% generan riesgo de hongos y condensación.',
  },
  {
    titulo: 'Calidad del Aire Interior',
    subtitulo: 'CO₂ < 1.000 ppm · Sin olores ni contaminantes',
    desc: 'El Artículo 32 exige que el aire interior esté libre de contaminantes en concentraciones que afecten la salud. Para CO₂, el umbral de referencia del ISP es 1.000 ppm como indicador de ventilación insuficiente (no es el límite legal, sino el señalizador de alerta). Concentraciones de CO₂ > 1.500 ppm son señal de ventilación insuficiente y pueden causar somnolencia y pérdida de productividad.',
  },
]

const STATS = [
  { valor: '27°C WBGT', etiqueta: 'Temperatura máxima DS 594' },
  { valor: '6 ren/h', etiqueta: 'Ventilación mínima en oficinas' },
  { valor: '30–70%', etiqueta: 'Rango humedad relativa recomendado' },
  { valor: '1.000 ppm', etiqueta: 'CO₂ umbral de alerta ISP' },
]

const PASOS = [
  {
    titulo: '1. Diagnóstico térmico',
    subtitulo: 'Medición WBGT · Análisis de cargas',
    desc: 'El primer paso es medir las condiciones actuales: temperatura de bulbo seco, bulbo húmedo y globo negro para calcular el WBGT real. D&Z Building realiza diagnósticos térmicos con equipos certificados MINSAL. El diagnóstico determina qué áreas están fuera de norma y qué sistema HVAC corresponde.',
  },
  {
    titulo: '2. Diseño del sistema',
    subtitulo: 'Cálculo de cargas · Selección de equipo',
    desc: 'Con el diagnóstico, se diseña el sistema HVAC que cumpla DS 594 y además sea eficiente energéticamente. Para bodegas o plantas industriales calientes, se prioriza enfriamiento evaporativo o VRF industrial. Para oficinas, un sistema VRF inverter suele ser la solución más eficiente. Para plantas con carga de calor alta, se evalúa climatización industrial por zonas.',
  },
  {
    titulo: '3. Instalación certificada',
    subtitulo: 'Técnicos SEC · Documentación SEREMI',
    desc: 'La instalación de sistemas HVAC en Chile debe ser ejecutada por técnicos habilitados por la SEC (Superintendencia de Electricidad y Combustibles). D&Z Building cuenta con técnicos certificados y entrega la documentación completa para la SEREMI de Salud en caso de inspección: planos, certificados de instalación y ficha técnica del equipo.',
  },
  {
    titulo: '4. Mantención preventiva',
    subtitulo: 'Contratos anuales · Registro de revisiones',
    desc: 'El DS 594 exige que los sistemas de ventilación se mantengan en buenas condiciones (Art. 33). Eso implica limpieza de filtros, revisión de conductos y certificación periódica. D&Z Building ofrece contratos de mantención preventiva con registros para la Inspección del Trabajo: historial de servicios, reemplazo de filtros y pruebas de caudal.',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué multa arriesga una empresa que no cumple el DS 594?',
    respuesta: 'La Inspección del Trabajo puede multar hasta 300 UTM por infracción al DS 594 (Art. 477 del Código del Trabajo). En 2025, 1 UTM equivale a aproximadamente CLP 67.000, lo que significa multas de hasta CLP 20 millones por infracción. Las multas son por establecimiento y pueden ser reiteradas si no se corrige la condición. Además, un accidente laboral con relación causal al incumplimiento puede generar responsabilidad civil y penal para el empleador.',
  },
  {
    pregunta: '¿El DS 594 aplica a todas las empresas o solo a industrias?',
    respuesta: 'Aplica a todas las empresas que tengan trabajadores en Chile, sin excepción de tamaño ni rubro. Oficinas, bodegas, comercios, industrias, clínicas, restaurantes y colegios están todos sujetos al DS 594. La fiscalización la realiza la Inspección del Trabajo y la SEREMI de Salud. Las PYME no tienen exención — la norma es universal.',
  },
  {
    pregunta: '¿El aire acondicionado residencial cumple el DS 594 en una oficina?',
    respuesta: 'No necesariamente. Un equipo split residencial puede mantener la temperatura dentro del rango, pero probablemente no cumplirá los requisitos de ventilación (6 renovaciones/hora de aire exterior). Los equipos residenciales recirculan el aire interno; no introducen aire fresco del exterior. Para cumplir DS 594 en una oficina, se requiere un sistema con ventilación mecánica controlada (VMC) o un sistema de tratamiento de aire que incorpore aire exterior.',
  },
  {
    pregunta: '¿Con qué frecuencia debe certificarse el sistema HVAC para la Inspección del Trabajo?',
    respuesta: 'El DS 594 no establece una frecuencia mínima de certificación formal, pero el Artículo 33 exige que los sistemas de ventilación estén "en buen estado de funcionamiento y de limpieza". La práctica aceptada es una revisión y limpieza semestral del sistema, con mantenimiento preventivo completo anual. En caso de inspección, el empleador debe acreditar que el sistema funciona correctamente y que existe un programa de mantención.',
  },
  {
    pregunta: '¿Qué pasa si la temperatura exterior supera los límites del DS 594?',
    respuesta: 'El DS 594 contempla esta situación en el Artículo 96: cuando las condiciones climáticas exteriores superan los límites operativos (por ejemplo, una ola de calor en el norte de Chile), el empleador debe implementar medidas compensatorias: turnos rotativos, períodos de descanso en zonas frescas, hidratación y protección solar. No basta con señalar que "hacía calor afuera" — la obligación es proteger al trabajador, sea con HVAC o con medidas alternativas.',
  },
  {
    pregunta: '¿Existe normativa específica para bodegas frigoríficas o cuartos fríos?',
    respuesta: 'Sí. Para ambientes fríos industriales (cuartos fríos, bodegas de congelados), el DS 594 fija 10°C como temperatura mínima de bulbo seco para trabajos continuos. Para exposición a temperaturas inferiores, se aplican tiempos máximos de exposición y equipos de protección personal (EPP) térmico. El reglamento complementario de D.S. 109 regula las enfermedades profesionales relacionadas con el frío. D&Z Building diseña sistemas de refrigeración industrial que cumplen la normativa para personal que trabaja en frío.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${siteUrl}/guias/` },
        { '@type': 'ListItem', position: 3, name: 'DS 594 y HVAC', item: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/#article`,
      headline: 'DS 594: Requisitos HVAC y Ventilación en el Trabajo Chile',
      description: 'Guía técnica del Decreto Supremo 594 para instalaciones HVAC: temperaturas mínimas y máximas, ventilación mínima, humedad relativa y cómo cumplir con la normativa en empresas chilenas.',
      url: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
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
        name: 'Ventilación Industrial y HVAC',
        '@id': `${siteUrl}/servicios/ventilacion-industrial/#service`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaDs594HvacPage() {
  return (
    <>
      <Script id="ld-guia-ds594-hvac" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/ventilacion-industrial" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Ventilación Industrial
            </Link>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar diagnóstico
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
            <span>DS 594 y HVAC</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía técnica · Normativa chilena
          </p>
          <h1 className="sp-hero-title">DS 594: Temperatura y ventilación<br />obligatoria en el trabajo</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            El Decreto Supremo Nº 594 establece requisitos obligatorios de temperatura, ventilación y calidad del aire para todos los lugares de trabajo en Chile. Esta guía explica qué exige la norma y cómo cumplirla con sistemas HVAC certificados.
          </p>
          <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">
            Diagnóstico de cumplimiento gratuito →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Qué es el DS 594 y por qué importa para su empresa?
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              El Decreto Supremo Nº 594 del Ministerio de Salud — &ldquo;Reglamento sobre Condiciones Sanitarias y Ambientales Básicas en los Lugares de Trabajo&rdquo; — es la norma que regula las condiciones mínimas de temperatura, ventilación, humedad y calidad del aire que debe garantizar todo empleador en Chile. No aplica solo a industrias: abarca oficinas, bodegas, comercios, clínicas, colegios y cualquier espacio donde haya trabajadores.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              El incumplimiento del DS 594 puede derivar en multas de hasta 300 UTM por infracción, sin perjuicio de la responsabilidad civil o penal si un trabajador sufre un daño relacionado con las condiciones térmicas o de ventilación del lugar de trabajo.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              Un sistema HVAC correctamente diseñado, instalado y mantenido es la solución técnica más efectiva para cumplir con los artículos 32, 33 y 96 del DS 594 de forma permanente y documentable.
            </p>
          </div>
        </div>

        {/* REQUISITOS section */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Requisitos técnicos
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Lo que exige el DS 594 en materia de HVAC
          </h2>
          <div className="sp-aplic-grid">
            {REQUISITOS.map((r) => (
              <div key={r.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {r.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {r.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Temperatura table */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Temperaturas recomendadas por tipo de ambiente
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Tipo de Ambiente', 'Temperatura Recomendada', 'Referencia DS 594 / NCh'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { ambiente: 'Oficinas y salas de reunión', temp: '20°C – 24°C', ref: 'Art. 96: confort térmico' },
                  { ambiente: 'Bodegas y logística', temp: '16°C – 22°C', ref: 'Art. 96: trabajo moderado' },
                  { ambiente: 'Talleres industriales ligeros', temp: '18°C – 26°C', ref: 'Art. 96: 27°C WBGT máx.' },
                  { ambiente: 'Salas limpias (ISO 7–8)', temp: '18°C – 22°C ±0,5°C', ref: 'NCh 2251 + GMP' },
                ].map((row, i) => (
                  <tr key={row.ambiente} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.ambiente}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.temp}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.ref}</td>
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

        {/* CÓMO CUMPLIR section */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Proceso de cumplimiento
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cómo cumplir el DS 594 con sistemas HVAC
          </h2>
          <div className="sp-aplic-grid">
            {PASOS.map((p) => (
              <div key={p.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {p.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {p.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {p.desc}
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
                Diagnóstico gratuito
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                Verificamos si su empresa cumple el DS 594 y le entregamos un informe técnico sin costo.
              </p>
            </div>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">
              Solicitar diagnóstico →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            DS 594 y HVAC: lo que toda empresa debe saber
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
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/ventilacion-industrial" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Ventilación industrial →
            </Link>
            <Link href="/guias/que-es-un-sistema-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              ¿Qué es un sistema VRF? →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿Su empresa cumple el DS 594?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Realizamos un diagnóstico térmico y de ventilación sin costo. Si hay incumplimientos, le entregamos un plan de acción con costos y plazos reales.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">Solicitar diagnóstico gratuito</Link>
            <Link href="/servicios/mantenimiento-preventivo" className="sp-hero-cta sp-hero-cta-outline">Ver mantención preventiva</Link>
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
