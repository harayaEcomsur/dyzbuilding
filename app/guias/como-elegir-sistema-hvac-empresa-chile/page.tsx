import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: '¿Qué Sistema de Climatización Elegir para mi Empresa? — Guía HVAC Chile 2025',

  description:
    'Guía para elegir el sistema HVAC correcto para tu empresa en Chile: VRF vs multi-split vs chiller vs fan-coil. Criterios técnicos, rangos de presupuesto en UF y recomendaciones por tipo de proyecto.',
  alternates: {
    canonical: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
    languages: {
      es: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
    },
  },
  openGraph: {
    title: '¿Qué Sistema HVAC Elegir para mi Empresa? — Guía Chile 2025 | D&Z Building',
    description:
      'Compara VRF, multi-split, chiller y fan-coil para uso comercial en Chile. Criterios de selección, presupuestos y casos de uso según tamaño y tipo de edificio.',
    url: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
    locale: 'es_CL',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const SISTEMAS = [
  {
    nombre: 'VRF / VRV Multi-Split',
    ideal: 'Oficinas 200–5.000 m², hoteles, clínicas, retail',
    ventajas: [
      'Control independiente por zona (inverter)',
      'Eficiencia COP 3.5–5.0 a carga parcial',
      'Sin cuarto de máquinas',
      'Fácil expansión futura',
      'Recuperación de calor simultánea (calefacción + refrigeración)',
    ],
    limitaciones: [
      'Inversión inicial mayor que multi-split',
      'Largo de cañería limitado (50–165 m según fabricante)',
      'Requiere mantención especializada',
    ],
    rango: 'UF 250 – 3.000',
    recomendado_para: 'Primera opción para edificios comerciales de 200–5.000 m²',
  },
  {
    nombre: 'Multi-Split Convencional',
    ideal: 'Oficinas pequeñas < 200 m², locales comerciales',
    ventajas: [
      'Menor inversión inicial',
      'Instalación rápida (1–2 semanas)',
      'Piezas de repuesto ampliamente disponibles',
    ],
    limitaciones: [
      'Sin control de zona independiente por compresor',
      'Menor eficiencia a carga parcial que VRF',
      'Escalabilidad limitada',
    ],
    rango: 'UF 60 – 250',
    recomendado_para: 'Locales < 200 m² o cuando el presupuesto es restrictivo',
  },
  {
    nombre: 'Chiller + Fan-Coil (agua helada)',
    ideal: 'Edificios > 2.000 m², multi-arrendatario, hospitales',
    ventajas: [
      'Vida útil 25–30 años (mayor que VRF)',
      'Medición por arrendatario con submedidores',
      'Mayor flexibilidad en distribución de agua',
      'Ideal para edificios de gran altura',
    ],
    limitaciones: [
      'Requiere cuarto de máquinas',
      'Inversión inicial significativamente mayor',
      'Mayor complejidad de operación y mantención',
      'Rendimiento inferior en cargas parciales sin VFD',
    ],
    rango: 'UF 2.000 – 30.000+',
    recomendado_para: 'Edificios > 2.000 m² o cuando la vida útil del activo > 25 años es prioritaria',
  },
  {
    nombre: 'Unidad Paquete / Rooftop',
    ideal: 'Tiendas retail, naves industriales, espacios abiertos',
    ventajas: [
      'Todo el equipo en una sola unidad en el techo',
      'Instalación simple (sin unidad exterior visible)',
      'Buena opción para espacios de techo plano',
    ],
    limitaciones: [
      'Sin control por zona dentro del espacio',
      'Rendimiento inferior a VRF para múltiples zonas',
      'Ruido en cubierta',
    ],
    rango: 'UF 150 – 600',
    recomendado_para: 'Tiendas de un solo ambiente o espacios de planta libre sin subdivisión',
  },
]

const CRITERIOS = [
  {
    criterio: 'Superficie a climatizar',
    guia: 'Menos de 200 m² → multi-split. 200–5.000 m² → VRF. Más de 2.000 m² en edificio multi-arrendatario → chiller. La superficie es el primer filtro pero no el único.',
  },
  {
    criterio: 'Número de zonas y uso',
    guia: 'Si necesitas controlar temperatura de forma independiente en más de 3 zonas (salas de reunión, oficinas privadas, acceso) el VRF paga la diferencia en eficiencia y confort. El multi-split tiene menos control por compresor.',
  },
  {
    criterio: 'Presupuesto inicial vs. costo operacional',
    guia: 'Multi-split tiene menor CAPEX pero mayor OPEX. VRF tiene mayor CAPEX pero 30–50% menos consumo que splits equivalentes. El payback de VRF respecto a splits es típicamente 3–6 años en uso comercial intensivo.',
  },
  {
    criterio: 'Obra nueva vs. retrofit',
    guia: 'En obra nueva se puede prever el cuarto de máquinas para chiller y el paso de cañerías para VRF. En retrofit, el VRF es más flexible (cañerías de menor diámetro, sin obra civil mayor). El chiller en retrofit es complejo e invasivo.',
  },
  {
    criterio: 'Exigencias de certificación o normativa',
    guia: 'Para LEED o EDGE se requieren datos de eficiencia certificados — los VRF de alta eficiencia (EER > 4.5) facilitan el crédito de energía. Para hospitales, salas limpias o data centers los sistemas deben incluir redundancia N+1 y control de precisión independiente del sistema de confort.',
  },
]

const CONTEXTOS = [
  { tipo: 'Oficina pequeña (< 200 m²)', recomendado: 'Multi-split', razon: 'Menor presupuesto inicial, instalación en < 1 semana' },
  { tipo: 'Piso de oficinas (200–1.000 m²)', recomendado: 'VRF multi-zona', razon: 'Control por zona, eficiencia a carga parcial' },
  { tipo: 'Edificio corporativo (> 2.000 m²)', recomendado: 'VRF o chiller', razon: 'VRF para < 5 pisos, chiller para edificio de altura con vida útil larga' },
  { tipo: 'Retail / Local comercial', recomendado: 'Multi-split o rooftop', razon: 'Un solo ambiente, sin necesidad de control por zona' },
  { tipo: 'Hotel (50–200 habitaciones)', recomendado: 'VRF silencioso (NC-25)', razon: 'Control individual por habitación, recuperación de calor en zonas comunes' },
  { tipo: 'Data center / Sala de servidores', recomendado: 'CRAC/CRAH de precisión + redundancia N+1', razon: 'La temperatura constante ±0.5°C y la disponibilidad 24/7 superan cualquier criterio de costo' },
]

const FAQ = [
  {
    pregunta: '¿Cuántos BTU o TR necesita mi empresa por m²?',
    respuesta: 'La carga térmica por m² varía enormemente según el uso: una oficina de bajo consumo tecnológico necesita 40–60 W/m² (140–200 BTU/m²), mientras que un data center puede requerir 500–3.000 W/m² por rack. Para uso comercial estándar (oficinas, clínicas, hotel) el rango más común es 80–120 W/m². Sin embargo, el cálculo correcto depende de la orientación solar, el tipo de vidriado, la densidad de ocupación y las cargas internas (equipos, iluminación). Nunca dimensione por m² sin un análisis térmico real — el sobredimensionamiento es el error más frecuente y el más costoso.',
  },
  {
    pregunta: '¿VRF o sistema de aire central con ductos?',
    respuesta: 'El VRF sin ductos es más eficiente en espacios con múltiples zonas de distinto uso horario. El sistema de aire central (AHU + ductos) permite tratar el 100% del aire y es obligatorio en hospitales, laboratorios y cocinas. Para oficinas y hoteles, la comparación depende del espacio disponible para ductos: si hay pleno de altura suficiente, el AHU centralizado puede ser más silencioso en la zona de trabajo; si no hay espacio, el VRF con cassettes de techo es la solución estándar.',
  },
  {
    pregunta: '¿Vale la pena el VRF respecto a splits convencionales en una pyme?',
    respuesta: 'Para una empresa que ocupa más de 200 m² en jornada laboral completa (8+ horas), el VRF inverter consume entre un 30–50% menos que splits de velocidad fija equivalentes. A un precio de energía BT-1 de > $170 CLP/kWh, el ahorro anual puede ser de CLP 3–8 millones en un piso de 500 m². El payback suele ser de 3–5 años. Si el espacio es < 200 m² o el uso es solo 4–6 horas al día, el multi-split convencional es suficiente.',
  },
  {
    pregunta: '¿Qué diferencia hay entre VRF y VRV?',
    respuesta: 'VRV (Variable Refrigerant Volume) es una marca registrada de Daikin para su línea de sistemas multi-split con compresor inverter y flujo de refrigerante variable. VRF (Variable Refrigerant Flow) es el término genérico que describe el mismo tipo de tecnología para los demás fabricantes (Mitsubishi Electric, LG, Carrier, Samsung). Técnicamente son equivalentes; la diferencia es de marketing, no de ingeniería.',
  },
  {
    pregunta: '¿Qué sistema HVAC es mejor para certificación LEED en Chile?',
    respuesta: 'LEED v4 evalúa la eficiencia del sistema HVAC bajo los créditos EA (Energy and Atmosphere). Los VRF de alta eficiencia (EER 4.0–5.0) y los chillers de tornillo o centrífugos con VFD son las tecnologías que mejor puntúan. Para LEED es importante que el fabricante entregue datos de eficiencia certificados por AHRI (para EE.UU.) o Eurovent (para Europa). En Chile, los proyectos LEED utilizan la ruta de modelación energética con EnergyPlus o eQUEST.',
  },
  {
    pregunta: '¿Cuándo es mejor optar por un chiller en lugar de VRF?',
    respuesta: 'El chiller conviene cuando: (1) la superficie supera los 2.000 m² en un edificio multi-arrendatario donde se requiere medición independiente por piso; (2) la vida útil esperada del activo supera los 25 años; (3) el proyecto requiere flujo de agua helada para AHUs centralizadas (hospitales, hoteles de gran escala); o (4) hay restricciones normativas que limitan la cantidad de refrigerante dentro del edificio (en algunos países el refrigerante de VRF tiene límites de carga por m²). En Chile, para edificios de oficinas de 5–15 pisos, el VRF suele ser más eficiente y de menor costo que un chiller.',
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
        { '@type': 'ListItem', position: 3, name: '¿Cómo elegir sistema HVAC?', item: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/` },
      ],
    },
    {
      '@type': 'Article',
      headline: '¿Qué Sistema de Climatización Elegir para mi Empresa? — Guía HVAC Chile 2025',
      author: { '@type': 'Organization', name: 'D&Z Building' },
      publisher: { '@type': 'Organization', name: 'D&Z Building', url: siteUrl },
      datePublished: '2025-01-01',
      dateModified: '2025-07-01',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function GuiaComoElegirHvacPage() {
  return (
    <>
      <Script id="ld-guia-como-elegir-hvac" type="application/ld+json">
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
            <Link href="/?servicio=0#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/guias/" style={{ color: 'inherit', textDecoration: 'none' }}>Guías</Link>
            <span>›</span>
            <span>¿Cómo elegir sistema HVAC?</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Guía técnica · VRF vs Chiller vs Multi-Split · Chile 2025
          </p>
          <h1>¿Qué Sistema de Climatización<br />Elegir para mi Empresa?</h1>
          <p className="sp-hero-sub">
            Comparativa técnica entre VRF, chiller y multi-split para proyectos
            comerciales e industriales en Chile — con criterios de selección,
            rangos de inversión en UF y recomendaciones por tipo de proyecto.
          </p>
          <div className="sp-hero-ctas">
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Solicitar Cotización</Link>
            <Link href="/servicios/" className="sp-hero-cta-outline">Ver Servicios</Link>
          </div>
        </header>

        {/* Intro */}
        <div className="sp-section">
          <div style={{ maxWidth: 780 }}>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.4vw,17px)', color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
              Esta guía está dirigida a gerentes de operaciones, administradores de edificios y directores de proyectos que deben decidir qué sistema HVAC instalar en una empresa chilena. Cubre los cuatro tipos de sistema más utilizados en el segmento comercial e industrial, sus criterios de selección y una tabla de recomendaciones por tipo de proyecto.
            </p>
          </div>
        </div>

        {/* System comparison cards */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Comparativa de sistemas HVAC para empresas
          </h2>
          <div className="sp-aplic-grid">
            {SISTEMAS.map(s => (
              <div key={s.nombre} className="sp-aplic-item">
                <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: 4 }}>{s.nombre}</strong>
                <span style={{ color: 'var(--dim)', fontSize: '11px', fontFamily: "'Josefin Sans',sans-serif" }}>{s.ideal}</span>
                <p style={{ margin: '10px 0 6px', fontSize: '13px', color: 'var(--text)' }}>Ventajas:</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7 }}>
                  {s.ventajas.map(v => <li key={v}>{v}</li>)}
                </ul>
                <p style={{ margin: '10px 0 6px', fontSize: '13px', color: 'var(--text)' }}>Limitaciones:</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7 }}>
                  {s.limitaciones.map(l => <li key={l}>{l}</li>)}
                </ul>
                <p style={{ margin: '10px 0 0', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>{s.rango}</p>
                <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--dim)', lineHeight: 1.55 }}>{s.recomendado_para}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decision criteria */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            5 criterios para elegir el sistema correcto
          </h2>
          <div className="sp-aplic-grid">
            {CRITERIOS.map(c => (
              <div key={c.criterio} className="sp-aplic-item">
                <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: 8 }}>{c.criterio}</strong>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7 }}>{c.guia}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Context recommendation table */}
        <div className="sp-section">
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', margin: '0 0 24px' }}>
            Recomendación por tipo de proyecto
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontFamily: "'Outfit',sans-serif", fontSize: '14px' }}>
              <thead>
                <tr>
                  {['Tipo de proyecto', 'Sistema recomendado', 'Razón principal'].map(h => (
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
                {CONTEXTOS.map((c, i) => (
                  <tr key={c.tipo} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,.02)' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--text)', fontWeight: 500, border: '1px solid var(--border)' }}>
                      {c.tipo}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--accent)', border: '1px solid var(--border)' }}>
                      {c.recomendado}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--dim)', border: '1px solid var(--border)' }}>
                      {c.razon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mid-article CTA */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                Recomendación específica
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                ¿Necesitas una recomendación específica para tu proyecto? Nuestros ingenieros evalúan tu caso sin costo.
              </p>
            </div>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">
              Consultar gratis →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Dudas técnicas frecuentes sobre sistemas HVAC
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

        {/* Related service links */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--dim)', margin: '0 0 16px' }}>
            Recursos relacionados
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/servicios/climatizacion-vrf"
              style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}
            >
              Servicio VRF →
            </Link>
            <Link
              href="/servicios/refrigeracion-comercial"
              style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}
            >
              Refrigeración comercial →
            </Link>
            <Link
              href="/servicios/mantenimiento-preventivo"
              style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}
            >
              Mantención preventiva →
            </Link>
            <Link
              href="/guias/precio-sistema-vrf-chile/"
              style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}
            >
              Guía de precios VRF →
            </Link>
          </div>
        </div>

        {/* Final CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Obtenga una recomendación técnica para su proyecto
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            Esta guía entrega criterios generales. La elección correcta depende de su edificio, su uso y su presupuesto.
            Nuestros ingenieros evalúan cada caso con una visita técnica gratuita.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=0#contacto" className="sp-hero-cta">Solicitar cotización gratuita</Link>
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
