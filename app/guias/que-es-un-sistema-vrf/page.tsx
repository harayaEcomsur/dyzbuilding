import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: '¿Qué es un Sistema VRF? — Guía Técnica Completa Chile 2025',

  description:
    'Todo sobre sistemas VRF (Variable Refrigerant Flow) en Chile: cómo funcionan, ventajas y limitaciones, diferencia con splits convencionales y con VRV. Guía técnica para compradores empresariales.',
  alternates: {
    canonical: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
    languages: {
      es: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
    },
  },
  openGraph: {
    title: '¿Qué es VRF? Sistemas de Volumen Variable de Refrigerante | D&Z Building',
    description:
      'Guía técnica completa sobre sistemas VRF: funcionamiento, tipos (solo frío, bomba de calor, recuperación de calor), aplicaciones comerciales e industriales en Chile.',
    url: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const COMPONENTES = [
  {
    titulo: 'Unidad Exterior (Condensadora)',
    subtitulo: 'Compresor inverter · 1 o 2 módulos',
    desc: 'El corazón del sistema: contiene el(los) compresor(es) con tecnología inverter que modulan su velocidad según la demanda real. Una sola unidad exterior puede alimentar entre 2 y 60+ unidades interiores según la capacidad del sistema. Potencias desde 4 hasta 50+ TR (toneladas de refrigeración).',
  },
  {
    titulo: 'Red de Tuberías de Refrigerante',
    subtitulo: 'Cobre · Largos hasta 165m · Diferencias de nivel',
    desc: 'El refrigerante (R-410A, R-32 o R-454B según la marca) circula en tuberías de cobre desde la unidad exterior hasta cada unidad interior. Los sistemas modernos permiten longitudes de tubería de hasta 165 metros equivalentes y diferencias de nivel de hasta 50 metros entre unidades, lo que los hace viables en edificios de varios pisos.',
  },
  {
    titulo: 'Unidades Interiores',
    subtitulo: 'Cassette · Muro · Ducto · Piso-techo',
    desc: 'Cada unidad interior opera de forma independiente: puede enfriar, calentar o estar apagada, independientemente de lo que hagan las otras. Formatos disponibles: cassette de 4 vías (para cielo falso), de muro (tipo split), ducto (para sistemas de distribución por aire), y piso-techo. Una unidad exterior soporta tipos mixtos de interiores.',
  },
  {
    titulo: 'Controlador Centralizado',
    subtitulo: 'Touch screen · BMS · App móvil',
    desc: 'Un controlador central permite gestionar todas las unidades interiores desde un solo punto: programación horaria, temperatura por zona, modo operación y monitoreo de consumo. Los sistemas más avanzados se integran con BMS (Building Management System) mediante protocolos BACnet, Modbus o LonWorks.',
  },
]

const TIPOS = [
  {
    titulo: 'VRF Solo Frío (Heat Pump — Cooling Only)',
    subtitulo: 'Clima templado · Todo el año en modo frío',
    desc: 'El modo más simple: la unidad exterior solo puede enfriar. Las unidades interiores en modo calefacción usan una resistencia eléctrica auxiliar o no tienen calefacción. Indicado para zonas con clima cálido durante todo el año donde la calefacción no es necesaria o es esporádica. Costo de inversión 10–15% menor que bomba de calor.',
  },
  {
    titulo: 'VRF Bomba de Calor (Heat Pump)',
    subtitulo: 'Frío + calor con el mismo sistema',
    desc: 'La unidad exterior puede operar en modo frío o en modo calor. Todas las unidades interiores deben operar en el mismo modo simultáneamente. Ideal para climas con estaciones bien diferenciadas (invierno frío, verano caluroso), como Santiago, Concepción o Coquimbo. Eficiencia en calefacción muy superior a resistencias eléctricas.',
  },
  {
    titulo: 'VRF Recuperación de Calor (Heat Recovery)',
    subtitulo: 'Frío y calor simultáneos · Máxima eficiencia',
    desc: 'El sistema más avanzado: algunas unidades interiores enfrían mientras otras calientan, simultáneamente. El calor "desechado" por las zonas en enfriamiento se "recupera" para calentar otras zonas. Resultado: eficiencias altísimas (COP de hasta 6 en modo recuperación). Ideal para hoteles, oficinas con zonas de exposición solar diferenciada.',
  },
]

const STATS = [
  { valor: 'COP 3.5–5.0', etiqueta: 'Eficiencia a carga parcial' },
  { valor: '165 m', etiqueta: 'Longitud máxima de tuberías' },
  { valor: '60+', etiqueta: 'Unidades interiores por exterior' },
  { valor: '30–50%', etiqueta: 'Ahorro vs splits convencionales' },
]

const USOS = [
  { titulo: 'Oficinas 200–5.000 m²', desc: 'Uso más común. Control por sala/zona. Eficiencia alta en uso parcial (muchas zonas apagadas durante el día).' },
  { titulo: 'Hoteles', desc: 'Control por habitación. Modo recuperación de calor para zonas de piscina y spa. Bajo nivel de ruido NC-25.' },
  { titulo: 'Clínicas y Centros Médicos', desc: 'Zonas con demandas opuestas (quirófanos, radiología, salas de espera). Sistema de recuperación de calor para eficiencia máxima.' },
  { titulo: 'Retail y Centros Comerciales', desc: 'Tiendas con alta densidad de clientes. VRF permite control por local arrendado y medición individual de consumo.' },
  { titulo: 'Edificios Mixtos', desc: 'Oficinas + retail + zona gastronómica en el mismo edificio. Una sola red VRF cubre todas las zonas con control diferenciado.' },
]

const FAQ = [
  {
    pregunta: '¿Qué significa VRF y VRV?',
    respuesta: 'VRF significa Variable Refrigerant Flow (flujo variable de refrigerante). VRV es exactamente la misma tecnología pero es la marca registrada de Daikin — fue la primera empresa en desarrollar y comercializar esta tecnología, en 1982 en Japón. El resto de fabricantes (Mitsubishi Electric, LG, Samsung, Carrier) usan el término genérico VRF. Técnicamente son equivalentes.',
  },
  {
    pregunta: '¿Cuántas unidades interiores puede tener un sistema VRF?',
    respuesta: 'Depende de la capacidad de la unidad exterior. Los sistemas residenciales pequeños (4–6 TR) soportan 2–8 unidades interiores. Los sistemas comerciales medianos (10–20 TR) soportan 8–20 unidades. Los sistemas industriales grandes (30–50 TR con múltiples módulos exteriores) pueden conectar hasta 60 o más unidades interiores. La limitación no es solo el número sino también la capacidad total instalada de los interiores, que no debe superar el 130% de la capacidad exterior.',
  },
  {
    pregunta: '¿Un VRF puede enfriar y calentar al mismo tiempo?',
    respuesta: 'Solo el VRF de recuperación de calor puede enfriar y calentar simultáneamente. Los sistemas de solo frío y de bomba de calor deben operar en un solo modo a la vez (todo frío o todo calor). El VRF de recuperación de calor usa una tubería de 3 conexiones en vez de 2, lo que añade costo pero permite que la energía desechada por las zonas en frío se reutilice para calentar otras zonas.',
  },
  {
    pregunta: '¿El refrigerante del VRF es peligroso?',
    respuesta: 'Los refrigerantes más usados en VRF hoy son R-410A y R-32. El R-32 (el más moderno) tiene potencial de calentamiento global (GWP) de 675, frente a los 2.088 del R-410A — un 68% menos. Ambos son "seguros" para uso en espacios cerrados en las concentraciones normales de operación; no son tóxicos ni inflamables a concentraciones normales. En caso de escape, el sistema moderno tiene sensores de refrigerante con alarma y ventilación automática de emergencia. La normativa EN 378 establece cargas máximas de refrigerante por volumen de sala.',
  },
  {
    pregunta: '¿Qué pasa si falla la unidad exterior del VRF?',
    respuesta: 'Si la unidad exterior falla, todo el sistema queda sin climatización. Por eso, para instalaciones críticas (data centers, quirófanos, hoteles de lujo), se recomienda instalar dos unidades exteriores en modo redundante N+1 conectadas al mismo anillo de tuberías. Para oficinas estándar, una única unidad exterior es la norma. La disponibilidad de repuestos de las marcas principales (Daikin, Mitsubishi, LG) en Chile suele permitir reparaciones en 24–72 horas hábiles.',
  },
  {
    pregunta: '¿Cuánto consume un sistema VRF comparado con splits?',
    respuesta: 'Un sistema VRF inverter consume entre 30 y 50% menos que splits convencionales de velocidad fija equivalentes. Esto se debe a dos factores: el compresor inverter modula su velocidad según la demanda real (no arranca y para continuamente), y la operación a carga parcial (cuando solo algunas zonas están activas) es mucho más eficiente que en sistemas on/off. Para una empresa con 500 m² en operación 8h/día en Santiago, el ahorro puede ser CLP 1,5–3 millones anuales comparado con splits convencionales.',
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
        { '@type': 'ListItem', position: 3, name: '¿Qué es un sistema VRF?', item: `${siteUrl}/guias/que-es-un-sistema-vrf/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/que-es-un-sistema-vrf/#article`,
      headline: '¿Qué es un Sistema VRF? Guía Técnica Completa Chile 2025',
      description: 'Todo sobre sistemas VRF (Variable Refrigerant Flow) en Chile: cómo funcionan, ventajas y limitaciones, diferencia con splits convencionales y con VRV.',
      url: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
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
        name: 'Sistemas VRF/VRV',
        '@id': `${siteUrl}/servicios/climatizacion-vrf/#service`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/que-es-un-sistema-vrf/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaQueEsVrfPage() {
  return (
    <>
      <Script id="ld-guia-que-es-vrf" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/climatizacion-vrf" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Sistema VRF
            </Link>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
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
            <span>¿Qué es un sistema VRF?</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía técnica · 2025
          </p>
          <h1 className="sp-hero-title">¿Qué es un sistema VRF?<br />Guía técnica completa</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Todo lo que necesita saber sobre los sistemas de Volumen Variable de Refrigerante: cómo funcionan, tipos, diferencias con splits convencionales y para qué proyectos son la mejor opción en Chile.
          </p>
          <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">
            Cotización gratuita →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Qué es exactamente un sistema VRF?
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              Un sistema VRF (Variable Refrigerant Flow, o flujo variable de refrigerante) es un tipo de sistema de climatización centralizado que permite controlar la temperatura de múltiples zonas de forma independiente, utilizando una sola unidad exterior conectada a varias unidades interiores mediante una red de tuberías de refrigerante.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              A diferencia de los sistemas de splits tradicionales —donde cada compresor exterior sólo puede controlar 1 a 4 unidades interiores—, un sistema VRF puede gestionar entre 2 y 60 o más unidades interiores desde una sola unidad exterior, con cada zona operando de forma completamente independiente.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              La clave del sistema es el compresor inverter de velocidad variable: en lugar de operar siempre a máxima potencia (encendido/apagado), el compresor ajusta su velocidad exactamente a lo que demanda el edificio en cada momento, lo que reduce el consumo energético entre un 30 y 50% respecto a sistemas convencionales.
            </p>
          </div>
        </div>

        {/* How it works — COMPONENTES */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Componentes principales
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            ¿Cómo funciona un sistema VRF?
          </h2>
          <div className="sp-aplic-grid">
            {COMPONENTES.map((c) => (
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

        {/* Types — TIPOS */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Tres configuraciones disponibles
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Tipos de sistemas VRF
          </h2>
          <div className="sp-aplic-grid">
            {TIPOS.map((t) => (
              <div key={t.titulo} className="sp-aplic-item">
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                  {t.subtitulo}
                </p>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {t.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table — VRF vs splits */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            VRF vs splits convencionales
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Criterio', 'Split Convencional', 'VRF Inverter'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { criterio: 'Zonas independientes', split: 'No (todas ligadas al compresor)', vrf: 'Sí (cada unidad opera independiente)' },
                  { criterio: 'Eficiencia energética', split: 'Media (COP 2.5–3.5)', vrf: 'Alta (COP 3.5–5.0 a carga parcial)' },
                  { criterio: 'Longitud tuberías', split: '30–50 m', vrf: 'Hasta 165 m equivalentes' },
                  { criterio: 'N° de unidades int.', split: '1–4 por compresor', vrf: '2 a 60+ por unidad exterior' },
                  { criterio: 'Costo de inversión', split: 'Bajo', vrf: 'Medio-alto' },
                  { criterio: 'Mantenimiento', split: 'Sencillo, amplia red', vrf: 'Requiere técnico certificado por marca' },
                ].map((row, i) => (
                  <tr key={row.criterio} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{row.criterio}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{row.split}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)' }}>{row.vrf}</td>
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

        {/* Use cases — USOS */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Proyectos ideales
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            ¿Para qué tipo de proyecto es el VRF?
          </h2>
          <div className="sp-aplic-grid">
            {USOS.map((u) => (
              <div key={u.titulo} className="sp-aplic-item">
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(14px,1.4vw,16px)', fontWeight: 400, color: 'var(--text)', margin: '0 0 12px' }}>
                  {u.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {u.desc}
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
                Cotización gratuita
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                Obtenga un presupuesto detallado para su proyecto.
              </p>
            </div>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">
              Solicitar cotización →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Todo lo que necesita saber sobre sistemas VRF
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
            <Link href="/guias/precio-sistema-vrf-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios VRF →
            </Link>
            <Link href="/guias/como-elegir-sistema-hvac-empresa-chile" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Cómo elegir sistema HVAC →
            </Link>
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Servicio VRF completo →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            ¿Es el VRF la solución adecuada para su proyecto?
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Nuestro equipo técnico evalúa su proyecto sin costo y le entrega una recomendación fundada. Si el VRF no es la mejor solución para su caso, se lo diremos.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
            <Link href="/servicios/climatizacion-vrf" className="sp-hero-cta sp-hero-cta-outline">Ver servicio VRF</Link>
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
