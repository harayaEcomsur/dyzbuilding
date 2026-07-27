import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta la climatización comercial en Chile? Guía de precios 2025',

  description:
    'Precios reales de climatización comercial en Chile: sistemas VRF, splits multi, refrigeración, ventilación industrial y aire acondicionado para oficinas, locales y plantas. Rangos por m² y tipo de proyecto.',
  alternates: {
    canonical: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
    languages: {
      es: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
      en: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
    },
  },
  openGraph: {
    title: 'Precios de Climatización Comercial Chile 2025 | D&Z Building',
    description:
      'Guía de precios para climatización de empresas en Chile: oficinas, retail, hoteles, data centers, plantas industriales. Rangos reales en UF y CLP.',
    url: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const SISTEMAS = [
  {
    sistema: 'VRF / VRV Multi-Split',
    uso: 'Oficinas, hoteles, clínicas 300–5.000 m²',
    rango_uf: 'UF 250 – 3.000',
    rango_clp: '~$8M – $100M CLP',
    nota: 'Mayor eficiencia energética (COP 3.5–5.0). Ver guía específica de precios VRF.',
  },
  {
    sistema: 'Multi-Split convencional',
    uso: 'Locales, oficinas pequeñas hasta 300 m²',
    rango_uf: 'UF 60 – 250',
    rango_clp: '~$2M – $8M CLP',
    nota: 'Solución más económica para proyectos pequeños. Menor eficiencia que VRF.',
  },
  {
    sistema: 'Chiller + Fan-Coil (agua helada)',
    uso: 'Edificios >2.000 m², múltiples arrendatarios',
    rango_uf: 'UF 2.000 – 30.000+',
    rango_clp: 'Proyecto mayor',
    nota: 'Mayor vida útil (25–30 años). Requiere sala de máquinas centralizada.',
  },
  {
    sistema: 'Refrigeración comercial (muebles/cámaras)',
    uso: 'Supermercados, restaurantes, farmacéuticos',
    rango_uf: 'UF 200 – 8.000',
    rango_clp: '~$6.5M – $260M CLP',
    nota: 'Incluye rack central de compresores, muebles frigoríficos y cámaras.',
  },
  {
    sistema: 'Ventilación industrial / AHU',
    uso: 'Plantas, estacionamientos, cocinas, salas limpias',
    rango_uf: 'UF 150 – 5.000',
    rango_clp: '~$5M – $165M CLP',
    nota: 'Incluye unidades AHU, ductos, rejillas, VFDs y control automático.',
  },
  {
    sistema: 'HVAC hospitalario (pabellones, UCI)',
    uso: 'Clínicas, hospitales, laboratorios clínicos',
    rango_uf: 'UF 1.500 – 20.000',
    rango_clp: 'Proyecto mayor',
    nota: 'Mayor complejidad técnica. Incluye filtración HEPA, control diferencial de presión y certificación.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Oficina small (hasta 200 m²)',
    sistema: 'Multi-split o VRF entrada',
    rango: 'UF 60 – 200',
    plazo: '1–2 semanas',
  },
  {
    tipo: 'Piso corporativo (300–1.000 m²)',
    sistema: 'VRF multi-zona',
    rango: 'UF 350 – 1.200',
    plazo: '3–6 semanas',
  },
  {
    tipo: 'Local comercial / Retail (500–2.000 m²)',
    sistema: 'VRF + Refrigeración comercial',
    rango: 'UF 400 – 4.000',
    plazo: '4–10 semanas',
  },
  {
    tipo: 'Hotel (50–200 habitaciones)',
    sistema: 'VRF + AHU zonas comunes',
    rango: 'UF 2.000 – 20.000',
    plazo: '16–24 semanas',
  },
  {
    tipo: 'Data center / Sala de servidores',
    sistema: 'CRAC de precisión + Free cooling',
    rango: 'UF 400 – 30.000',
    plazo: '4–16 semanas',
  },
  {
    tipo: 'Planta industrial / Nave (1.000–5.000 m²)',
    sistema: 'Ventilación industrial + Climatización áreas técnicas',
    rango: 'UF 500 – 8.000',
    plazo: '6–12 semanas',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué está incluido en el precio de climatización comercial?',
    respuesta:
      'El precio estándar incluye: equipos (unidades interiores + exteriores), tuberías de refrigerante o ductos, cableado de control, puesta en marcha y garantía de instalación (12 meses mano de obra, 5 años fábrica en equipos principales). No incluye obras civiles mayores (demoliciones, empotramiento en muros de hormigón), permisos municipales si aplican, ni instalación eléctrica en media tensión. Los proyectos llave en mano sí pueden incluir todas estas partidas — consultar cotización.',
  },
  {
    pregunta: '¿Cuál es el factor que más afecta el precio de climatización?',
    respuesta:
      'El factor más determinante es la carga térmica del proyecto (en kW de refrigeración necesarios), que depende de la superficie, la orientación, la envolvente del edificio (vidrios, aislación), la densidad de ocupación y el equipamiento eléctrico interno. En oficinas, la carga promedio es 80–120 W/m²; en locales comerciales con vidrio, puede llegar a 150–200 W/m². Un error en la estimación de carga genera un equipo sobredimensionado (gasto innecesario) o subdimensionado (equipo trabaja al 100% constantemente, alto consumo y desgaste).',
  },
  {
    pregunta: '¿Cuánto cuesta la mantención anual de un sistema de climatización comercial?',
    respuesta:
      'Para sistemas VRF de 6–10 unidades: UF 15–40 por año en plan semestral. Para sistemas mayores (20+ unidades o chiller): UF 60–200 por año en plan trimestral. La mantención preventiva reduce el consumo energético en 10–20% y extiende la vida útil de los equipos. Sin mantención, los equipos pierden eficiencia progresivamente y las reparaciones correctivas son 3–5 veces más caras que la mantención preventiva anual.',
  },
  {
    pregunta: '¿Cuánto se ahorra en energía con un sistema VRF vs. splits convencionales?',
    respuesta:
      'Un sistema VRF de tecnología inverter consume 30–50% menos energía que splits convencionales de la misma capacidad. En un edificio de oficinas de 1.000 m² en Santiago, el consumo estimado de climatización con splits convencionales es 90.000–120.000 kWh/año. Con VRF eficiente, puede reducirse a 50.000–70.000 kWh/año. Al costo promedio de electricidad comercial en Chile (> $170 CLP/kWh para BT1), el ahorro anual puede ser de $3M–$8M CLP dependiendo del uso.',
  },
  {
    pregunta: '¿Es posible financiar la instalación de climatización para mi empresa?',
    respuesta:
      'Sí. Las opciones disponibles incluyen: (1) leasing financiero o de operación con cuotas mensuales fijas, (2) crédito CORFO para eficiencia energética (tasas preferentes para proyectos que reducen el consumo), (3) contratos ESCO (Energy Service Company) donde el sistema se paga con los ahorros energéticos generados, sin inversión inicial, y (4) financiamiento directo del proveedor para proyectos mayores de UF 500. Consultar disponibilidad según tipo de empresa y proyecto.',
  },
  {
    pregunta: '¿Puedo cotizar solo por m² o necesito una visita técnica?',
    respuesta:
      'Para proyectos pequeños (hasta 200 m² con distribución estándar), podemos entregar un rango de precio aproximado con planos o fotos del espacio. Para proyectos medianos y grandes, recomendamos una visita técnica gratuita para medir la carga térmica real, evaluar las condiciones del espacio (orientación, altura de cielo, obstáculos) y entregar una cotización firme. La cotización técnica precisa evita sorpresas de precio y especifica exactamente los equipos necesarios — en 72 horas hábiles.',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Precio Climatización Comercial',
          item: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/precio-climatizacion-comercial-chile/#article`,
      headline: '¿Cuánto cuesta la climatización comercial en Chile? Guía de precios 2025',
      description:
        'Guía de precios reales para todos los sistemas de climatización comercial e industrial en Chile: VRF, splits, chiller, refrigeración y ventilación.',
      url: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
      inLanguage: 'es-CL',
      author: { '@type': 'Organization', name: 'D&Z Building' },
      publisher: {
        '@type': 'Organization',
        name: 'D&Z Building',
        url: `${siteUrl}`,
      },
      datePublished: '2025-01-01',
      dateModified: '2025-07-01',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/guias/precio-climatizacion-comercial-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaPrecioClimatizacionComercialPage() {
  return (
    <>
      <Script id="ld-guia-precio-climatizacion-comercial" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Top nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link
              href="/servicios/"
              style={{
                color: 'var(--dim)',
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Servicios
            </Link>
            <Link href="/#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
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
            <span>Precio climatización comercial</span>
          </div>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Guía de precios · 2025
          </p>
          <h1 className="sp-hero-title">
            ¿Cuánto cuesta la climatización<br />comercial en Chile?
          </h1>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              fontSize: 'clamp(15px,1.6vw,18px)',
              maxWidth: 680,
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            Precios reales para todos los sistemas: VRF, splits multi, chiller, refrigeración comercial y
            ventilación industrial. Rangos por tipo de proyecto y m² de superficie. Basado en 20 años
            instalando en oficinas, retail, hoteles, plantas y data centers en Chile.
          </p>
          <Link href="/#contacto" className="sp-hero-cta">
            Cotización gratuita en 72 h →
          </Link>
        </div>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(20px,2.4vw,28px)',
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              ¿Por qué hay tanta diferencia de precio entre sistemas?
            </h2>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 16px',
              }}
            >
              No existe un precio único de climatización comercial porque el sistema correcto depende de
              factores que cambian radicalmente el costo final:
            </p>
            <ul
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: '0 0 20px',
                paddingLeft: 24,
              }}
            >
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'var(--text)' }}>Carga térmica real</strong> — medida en kW según
                la orientación, vidrios, densidad de personas y equipamiento eléctrico del espacio.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'var(--text)' }}>Tipo de recinto</strong> — una oficina estándar,
                un pabellón quirúrgico y una cámara frigorífica requieren tecnologías completamente distintas.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'var(--text)' }}>Complejidad de instalación</strong> — accesos,
                distancia entre unidades, altura de cielo, necesidad de obras civiles.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'var(--text)' }}>Marca y tecnología</strong> — sistemas inverter
                VRF con recuperación de calor cuestan 15–30% más que splits convencionales, pero reducen
                el consumo eléctrico anual en 30–50%.
              </li>
            </ul>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              La siguiente tabla de sistemas y la tabla de proyectos de referencia entregan rangos
              orientativos expresados en Unidades de Fomento (UF) para compensar la variación cambiaria.
            </p>
          </div>
        </div>

        {/* Systems price cards */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(18px,2.2vw,26px)',
              color: 'var(--text)',
              margin: '0 0 24px',
            }}
          >
            Precios por tipo de sistema
          </h2>
          <div className="sp-aplic-grid">
            {SISTEMAS.map(s => (
              <div key={s.sistema} className="sp-aplic-item">
                <h3
                  style={{
                    color: 'var(--text)',
                    fontSize: '14px',
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontWeight: 400,
                    margin: '0 0 6px',
                  }}
                >
                  {s.sistema}
                </h3>
                <p
                  style={{
                    color: 'var(--accent)',
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: 600,
                    fontSize: '15px',
                    margin: '0 0 4px',
                  }}
                >
                  {s.rango_uf}
                </p>
                <p
                  style={{
                    color: 'var(--dim)',
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '13px',
                    margin: '0 0 8px',
                  }}
                >
                  {s.rango_clp}
                </p>
                <p
                  style={{
                    color: 'var(--dim)',
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '13px',
                    lineHeight: 1.55,
                    margin: '0 0 6px',
                  }}
                >
                  <strong style={{ color: 'var(--text)' }}>Uso:</strong> {s.uso}
                </p>
                <p
                  style={{
                    color: 'var(--dim)',
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '12px',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {s.nota}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: '12px',
              color: 'var(--dim)',
              margin: '16px 0 0',
              opacity: 0.7,
            }}
          >
            * Precios referenciales 2025. Incluyen equipos, instalación y puesta en marcha. No incluyen
            obras civiles ni permisos. Los valores varían según marca, acceso y distancia desde Santiago.
          </p>
        </div>

        {/* Reference projects table */}
        <div className="sp-section">
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(18px,2.2vw,26px)',
              color: 'var(--text)',
              margin: '0 0 24px',
            }}
          >
            Proyectos de referencia por tipo de edificio
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse' as const,
                fontFamily: "'Outfit',sans-serif",
                fontSize: '14px',
              }}
            >
              <thead>
                <tr>
                  {['Tipo de proyecto', 'Sistema recomendado', 'Rango (UF)', 'Plazo de instalación'].map(h => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '10px 16px',
                        background: 'var(--accent)',
                        fontFamily: "'Josefin Sans',sans-serif",
                        fontSize: '10px',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#0c0c0c',
                        fontWeight: 600,
                        border: '1px solid var(--border)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROYECTOS.map((p, i) => (
                  <tr
                    key={p.tipo}
                    style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}
                  >
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--text)',
                        fontWeight: 500,
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p.tipo}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--dim)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p.sistema}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--accent)',
                        fontVariantNumeric: 'tabular-nums',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p.rango}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--dim)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {p.plazo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key cost factors */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(18px,2.2vw,26px)',
                color: 'var(--text)',
                margin: '0 0 20px',
              }}
            >
              Factores clave que determinan el costo final
            </h2>
            <ul
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 'clamp(15px,1.4vw,17px)',
                color: 'var(--dim)',
                lineHeight: 1.75,
                margin: 0,
                paddingLeft: 24,
              }}
            >
              <li style={{ marginBottom: 12 }}>
                <strong style={{ color: 'var(--text)' }}>Cálculo de carga térmica:</strong> un error de
                diseño puede encarecer el proyecto en 20–40% o comprometer el confort térmico. El
                dimensionamiento correcto requiere levantamiento técnico en terreno, no solo m².
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong style={{ color: 'var(--text)' }}>Tipo de distribución interior:</strong> cassettes
                de 4 vías y unidades de ducto tienen un costo de instalación 30–60% mayor que murales,
                pero son necesarios en espacios abiertos o con cielos falsos.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong style={{ color: 'var(--text)' }}>Distancia entre unidades y accesos:</strong> cada
                metro adicional de tubería de refrigerante o ducto suma costo de material y mano de obra.
                Instalaciones en altura o espacios confinados también incrementan el plazo y costo.
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong style={{ color: 'var(--text)' }}>Control y automatización:</strong> un sistema con
                control centralizado BMS o integrado a KNX/BACnet puede agregar UF 50–500 al proyecto,
                pero reduce el consumo energético en 15–25% con una tasa de retorno de 3–5 años.
              </li>
            </ul>
          </div>
        </div>

        {/* Mid-article CTA */}
        <div
          style={{
            padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)',
            background: 'var(--bg2)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Josefin Sans',sans-serif",
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  margin: '0 0 8px',
                }}
              >
                Cotización gratuita
              </p>
              <p
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 'clamp(15px,1.5vw,18px)',
                  color: 'var(--text)',
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Obtenga un presupuesto detallado para su proyecto en 72 horas hábiles.
              </p>
            </div>
            <Link href="/#contacto" className="sp-hero-cta">
              Solicitar cotización →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 10px',
            }}
          >
            Preguntas frecuentes
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,30px)',
              margin: '0 0 32px',
              color: 'var(--text)',
            }}
          >
            Todo lo que necesita saber antes de cotizar
          </h2>
          <div style={{ maxWidth: 780 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
                <h3
                  style={{
                    fontFamily: "'Josefin Sans',sans-serif",
                    fontSize: 'clamp(13px,1.3vw,15px)',
                    fontWeight: 400,
                    letterSpacing: '.02em',
                    color: 'var(--text)',
                    margin: '0 0 10px',
                  }}
                >
                  {f.pregunta}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: '15px',
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              margin: '0 0 16px',
            }}
          >
            Recursos relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/guias/precio-sistema-vrf-chile/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Guía de precios VRF →
            </Link>
            <Link
              href="/servicios/climatizacion-vrf"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Sistema VRF →
            </Link>
            <Link
              href="/servicios/mantenimiento-preventivo"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Mantención preventiva →
            </Link>
            <Link
              href="/servicios/"
              style={{
                fontFamily: "'Josefin Sans',sans-serif",
                fontSize: '11px',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '10px 18px',
              }}
            >
              Todos los servicios →
            </Link>
          </div>
        </div>

        {/* Final CTA bar */}
        <div className="sp-cta-bar">
          <p
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontSize: '10px',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 14px',
            }}
          >
            Siguiente paso
          </p>
          <h2
            style={{
              fontFamily: "'Josefin Sans',sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(22px,2.8vw,36px)',
              margin: '0 0 14px',
              color: 'var(--text)',
            }}
          >
            Obtenga un precio exacto para su proyecto
          </h2>
          <p
            style={{
              color: 'var(--dim)',
              fontFamily: "'Outfit',sans-serif",
              margin: '0 0 28px',
              fontSize: 'clamp(14px,1.4vw,17px)',
              maxWidth: 540,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Los rangos de esta guía son orientativos. El precio real depende de su layout, accesos y
            especificaciones técnicas. Cotización gratuita y sin compromiso en 72 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contacto" className="sp-hero-cta">
              Solicitar cotización gratuita
            </Link>
            <Link href="/servicios/" className="sp-hero-cta sp-hero-cta-outline">
              Ver todos los servicios
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="sp-footer">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={90} height={30} style={{ objectFit: 'contain' }} />
          </Link>
          <span
            style={{
              color: 'var(--dim)',
              fontFamily: "'Josefin Sans',sans-serif",
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
