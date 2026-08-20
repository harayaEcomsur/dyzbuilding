import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta un sistema VRF en Chile? Guía de precios 2025',

  description:
    'Guía completa de precios para sistemas VRF/VRV en Chile: rangos de costo por tipo de proyecto, marcas, instalación y mantención. Cotización gratuita.',
  alternates: {
    canonical: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
    languages: {
      es: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
    },
  },
  openGraph: {
    title: '¿Cuánto cuesta un sistema VRF en Chile? Guía 2025',
    description:
      'Precios reales de sistemas VRF/VRV en Chile según tipo de proyecto, superficie y marca. D&Z Building — 20 años de experiencia.',
    url: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const RANGOS = [
  {
    tipo: 'Oficina pequeña / Local comercial',
    superficie: 'Hasta 300 m²',
    unidades: '2–4 unidades interiores',
    rangoUF: 'UF 80 – 250',
    rangoClp: '~$3M – $8M CLP',
  },
  {
    tipo: 'Oficina mediana / Piso corporativo',
    superficie: '300 – 800 m²',
    unidades: '4–10 unidades interiores',
    rangoUF: 'UF 250 – 700',
    rangoClp: '~$8M – $23M CLP',
  },
  {
    tipo: 'Edificio corporativo / Hotel boutique',
    superficie: '800 – 3.000 m²',
    unidades: '10–30 unidades interiores',
    rangoUF: 'UF 700 – 3.000',
    rangoClp: '~$23M – $100M CLP',
  },
  {
    tipo: 'Centro comercial / Planta industrial',
    superficie: '3.000 m² o más',
    unidades: '30+ unidades / sistema central',
    rangoUF: 'UF 3.000+',
    rangoClp: 'Proyecto mayor',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué incluye el precio de un sistema VRF?',
    respuesta: 'El precio estándar incluye la unidad condensadora exterior, las unidades interiores (cassettes, ductos o murales), tuberías de refrigerante, cableado de control, puesta en marcha y una garantía de instalación. No incluye obras civiles (empotramiento, techos falsos), ni permisos municipales si aplican.',
  },
  {
    pregunta: '¿Cuánto se ahorra con VRF vs. climatizadores convencionales?',
    respuesta: 'Un sistema VRF consume entre 30 y 50% menos energía que equipos split convencionales del mismo tamaño, gracias al compresor inverter de velocidad variable y la recuperación de calor entre zonas. En proyectos de más de 500 m², el ahorro anual puede superar las UF 50–200 según tarifa eléctrica.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda la instalación de un sistema VRF?',
    respuesta: 'Una instalación de 4–8 unidades interiores toma entre 3 y 7 días hábiles. Sistemas medianos (10–20 unidades) requieren 2 a 4 semanas. Proyectos grandes con 30+ unidades pueden tomar 1 a 3 meses, dependiendo de las obras civiles asociadas.',
  },
  {
    pregunta: '¿Cuánto cuesta la mantención anual de un sistema VRF?',
    respuesta: 'Un plan de mantención semestral para un sistema de 6–10 unidades tiene un costo aproximado de UF 15–40 por año. Esto incluye limpieza de filtros, revisión de carga de refrigerante, medición de presiones y ajuste de parámetros. La mantención preventiva evita fallas correctivas costosas.',
  },
  {
    pregunta: '¿Qué marcas de VRF son más utilizadas en Chile?',
    respuesta: 'Las marcas más instaladas en el mercado chileno son LG (Multi V), Samsung (DVM), Daikin (VRV), Mitsubishi Electric (City Multi) y Midea. D&Z Building gestiona la solicitud de repuestos originales para LG y Samsung, lo que garantiza acceso a stock y soporte técnico certificado.',
  },
  {
    pregunta: '¿Es posible financiar la instalación de un sistema VRF?',
    respuesta: 'Sí. D&Z Building trabaja con leasing y financiamiento bancario para proyectos mayores. También existe la modalidad de contrato ESCO (Energy Service Company) donde el cliente paga el sistema con los ahorros energéticos generados, sin inversión inicial.',
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
        { '@type': 'ListItem', position: 3, name: 'Precio sistema VRF Chile', item: `${siteUrl}/guias/precio-sistema-vrf-chile/` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${siteUrl}/guias/precio-sistema-vrf-chile/#article`,
      headline: '¿Cuánto cuesta un sistema VRF en Chile? Guía de precios 2025',
      description: 'Guía completa de precios para sistemas VRF/VRV en Chile según tipo de proyecto, superficie y marca.',
      url: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
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
      '@id': `${siteUrl}/guias/precio-sistema-vrf-chile/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaPrecioVrfPage() {
  return (
    <>
      <Script id="ld-guia-precio-vrf" type="application/ld+json">
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
            <span>Precio sistema VRF</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía de precios · 2025
          </p>
          <h1 className="sp-hero-title">¿Cuánto cuesta un sistema<br />VRF en Chile?</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Rangos de precio por tipo de proyecto, factores que afectan el costo final
            y cómo comparar presupuestos. Basado en 20 años instalando sistemas VRF/VRV en Chile.
          </p>
          <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">
            Cotización gratuita →
          </Link>
        </div>

        {/* Intro article content */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.4vw,28px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Por qué varía tanto el precio de un sistema VRF?
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              El precio de un sistema VRF (Variable Refrigerant Flow) en Chile depende de cuatro factores principales:
            </p>
            <ul style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 20px', paddingLeft: 24 }}>
              <li style={{ marginBottom: 10 }}><strong style={{ color: 'var(--text)' }}>Capacidad del sistema</strong> — medida en kW o toneladas de refrigeración. A mayor superficie climatizada, mayor capacidad y mayor costo.</li>
              <li style={{ marginBottom: 10 }}><strong style={{ color: 'var(--text)' }}>Número de zonas o unidades interiores</strong> — cada zona adicional suma costo de equipo, tubería y mano de obra.</li>
              <li style={{ marginBottom: 10 }}><strong style={{ color: 'var(--text)' }}>Tipo de unidades interiores</strong> — los cassettes de 4 vías cuestan más que los murales; los de conducto son los más complejos de instalar.</li>
              <li style={{ marginBottom: 10 }}><strong style={{ color: 'var(--text)' }}>Marca y tecnología</strong> — sistemas con recuperación de calor (VRF-HR) cuestan entre 15–30% más que los de 2 tubos, pero reducen el consumo eléctrico en edificios con necesidades simultáneas de calefacción y refrigeración.</li>
            </ul>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              La siguiente tabla muestra rangos orientativos para proyectos típicos en Chile. Los valores están expresados en Unidades de Fomento (UF) para compensar la variación cambiaria.
            </p>
          </div>
        </div>

        {/* Price table */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Rangos de precio por tipo de proyecto
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Tipo de proyecto', 'Superficie', 'Unidades interiores', 'Rango (UF)', 'Aprox. CLP'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RANGOS.map((r, i) => (
                  <tr key={r.tipo} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500 }}>{r.tipo}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{r.superficie}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)' }}>{r.unidades}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)', fontVariantNumeric: 'tabular-nums' }}>{r.rangoUF}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)', fontVariantNumeric: 'tabular-nums' }}>{r.rangoClp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', margin: '12px 0 0', opacity: 0.7 }}>
            * Precios referenciales 2025. Incluyen equipos, instalación y puesta en marcha. No incluyen obras civiles ni permisos.
            Los valores varían según marca, acceso a la instalación y distancia desde Santiago.
          </p>
        </div>

        {/* What's included */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 20px' }}>
              ¿Qué incluye y qué no incluye el precio?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 40px' }}>
              <div>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
                  ✓ Incluido
                </p>
                <ul style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
                  {[
                    'Unidad condensadora exterior',
                    'Unidades interiores (cassettes, ductos o murales)',
                    'Tuberías de refrigerante y aislación',
                    'Cableado de control entre unidades',
                    'Controladores individuales por zona',
                    'Puesta en marcha y ajuste de parámetros',
                    'Garantía de instalación 12 meses',
                  ].map(item => (
                    <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 12px' }}>
                  ✗ No incluido (cotizar aparte)
                </p>
                <ul style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
                  {[
                    'Obras civiles (perforaciones, cielos falsos)',
                    'Desmontar equipos existentes',
                    'Permisos municipales o sectoriales',
                    'Instalación eléctrica hasta el tablero',
                    'Sistema de gestión centralizada (BMS)',
                    'Contratos de mantención preventiva',
                  ].map(item => (
                    <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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

        {/* Brands comparison */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 20px' }}>
              Comparativa de marcas VRF disponibles en Chile
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              No todas las marcas tienen el mismo nivel de soporte técnico ni stock en Chile. Este es un factor
              tan importante como el precio del equipo, ya que un sistema sin servicio local puede generar
              tiempos de parada de semanas mientras se espera un repuesto importado.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              <strong style={{ color: 'var(--text)' }}>LG Multi V</strong> y <strong style={{ color: 'var(--text)' }}>Samsung DVM</strong>:
              Excelente relación precio-eficiencia, amplia red de soporte en Chile, stock local. D&Z Building gestiona la solicitud de repuestos para ambas marcas.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: '0 0 16px' }}>
              <strong style={{ color: 'var(--text)' }}>Daikin VRV</strong>: Tecnología de referencia, precio 15–25% sobre LG/Samsung. Amplia oferta de unidades interiores especializadas.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: 'var(--text)' }}>Mitsubishi Electric City Multi</strong>: Precio premium, equipo de referencia para data centers que requieren máxima confiabilidad.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Todo lo que necesita saber antes de cotizar
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
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Servicio VRF completo →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Todos los servicios →
            </Link>
          </div>
        </div>

        {/* CTA final */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Obtenga un precio exacto para su proyecto
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Los rangos de esta guía son orientativos. El precio real depende de su layout, accesos y especificaciones.
            Cotización gratuita y sin compromiso.
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
