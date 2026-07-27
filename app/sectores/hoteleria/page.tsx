import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Hoteles y Resorts en Chile — HVAC Hotelería',

  description:
    'Especialistas en HVAC para hoteles, resorts y hostales en Chile. Sistemas VRF silenciosos para habitaciones, climatización de lobby, spa, restaurante y salas de eventos. Cumplimiento acústico y certificaciones LEED/EDGE.',
  alternates: {
    canonical: `${siteUrl}/sectores/hoteleria/`,
    languages: {
      es: `${siteUrl}/sectores/hoteleria/`,
      en: `${siteUrl}/en/sectors/hotels/`,
    },
  },
  openGraph: {
    title: 'HVAC para Hoteles Chile — Sistemas VRF Silenciosos y Eficientes | D&Z Building',
    description:
      'Climatización hotelera en Chile: control individual por habitación, bajo nivel de ruido, eficiencia energética y gestión BMS. Cobertura nacional.',
    url: `${siteUrl}/sectores/hoteleria/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const ZONAS = [
  {
    titulo: 'Habitaciones y Suites',
    subtitulo: '< 35 dB · Control individual',
    desc: 'El confort acústico es el factor diferenciador más importante en la hotelería. Los sistemas VRF con fan-coil de conductos (ducto slim) o cassette de 4 vías son la solución estándar para habitaciones: control individual por thermostat en la habitación, nivel de ruido < 25 dB en modo silencioso, y apagado automático cuando la llave de habitación es retirada (card key interface).',
  },
  {
    titulo: 'Lobby y Áreas de Recepción',
    subtitulo: 'AHU + VRF · Doble altura',
    desc: 'Los lobbies de hotel con doble altura y grandes superficies acristaladas tienen altas cargas de calor solar y baja ocupación variable. Usamos sistemas VRF de piso o AHU (manejadora de aire) con control de temperatura por zona, difusores de alta inducción para evitar estratificación en espacios de doble altura.',
  },
  {
    titulo: 'Restaurante y Cocina Comercial',
    subtitulo: 'Campana de extracción · Makeup air',
    desc: 'El restaurante del hotel requiere un sistema de climatización independiente de la cocina. La cocina necesita campana de extracción NFPA 96 con unidad de makeup air (aire de reposición). El comedor necesita un sistema que neutralice el calor aportado por los comensales (70 W/persona) manteniendo < 24°C sin corrientes de aire en los asientos.',
  },
  {
    titulo: 'Spa, Piscina y Áreas Húmedas',
    subtitulo: 'HR 50–60% · Deshumidificación',
    desc: 'Las áreas de piscina cubierta y spa tienen alta generación de humedad. Se requieren unidades deshumidificadoras de aire con recuperación de calor hacia el agua de la piscina, mantenimiento de HR 50–60% para evitar condensación en ventanas y elementos arquitectónicos, y materiales de ducto resistentes a la corrosión por cloro (acero inoxidable o PVC rígido).',
  },
  {
    titulo: 'Salas de Reuniones y Eventos',
    subtitulo: 'Variable occupancy · CO₂ control',
    desc: 'Las salas de reuniones tienen ocupación altamente variable (0–200 personas). Los sistemas deben incluir control de calidad de aire por CO₂ (demanda ventilación, ASHRAE 62.1) que aumente el caudal de aire fresco automáticamente al subir la CO₂ y reduzca el consumo cuando la sala está vacía. Las particiones móviles de una sala grande a dos pequeñas requieren zonificación independiente.',
  },
  {
    titulo: 'Cuarto de Servidores y Tecnología',
    subtitulo: 'T 18–24°C · Redundancia',
    desc: 'El cuarto de equipos tecnológicos (central telefónica, servidores del PMS, NVRs de seguridad) requiere climatización de precisión 24/7. Usamos unidades de climatización de precisión o splits de tecnología inverter con redundancia N+1 (dos equipos, uno en espera). La temperatura debe mantenerse entre 18–24°C independientemente de la ocupación del hotel.',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué nivel de ruido debe tener el sistema de climatización en las habitaciones de hotel?',
    respuesta: 'La norma de referencia internacional es la curva NC (Noise Criteria). Para habitaciones de hotel de categoría 3–4 estrellas, el nivel NC no debe superar NC-30 (aproximadamente 33 dB(A)). Para hoteles boutique y 5 estrellas, el objetivo es NC-25 (28 dB(A)). Los sistemas VRF con fan-coil de conductos (ducto slim), correctamente seleccionados y balanceados, pueden alcanzar estos niveles sin problemas. El ruido del equipo exterior se controla mediante la ubicación (piso técnico, cubierta con barreras acústicas) y la selección de equipos de bajo nivel sonoro (típicamente < 58 dB(A) en los modelos residenciales/hotel de Daikin y Mitsubishi).',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar un hotel de 50 habitaciones en Chile?',
    respuesta: 'Un hotel de 50 habitaciones (tamaño medio, sin spa ni piscina cubierta) con sistema VRF para habitaciones + split para áreas comunes tiene un costo referencial de instalación entre UF 1.800–4.000 dependiendo de la calidad de los equipos seleccionados, la complejidad de la obra civil y la altura del edificio. Hoteles con piscina cubierta, spa o grandes salones de eventos tienen costos adicionales por los sistemas de deshumidificación y AHU. El costo de operación mensual depende del nivel de ocupación y el clima de la ciudad.',
  },
  {
    pregunta: '¿Qué sistema VRF es mejor para un hotel: ducto slim o cassette?',
    respuesta: 'Depende del tipo de habitación y el diseño arquitectónico. El ducto slim (fan-coil de conductos oculto) es más elegante — no hay unidad interior visible, solo una rejilla de retorno y otra de impulsión integradas en el cielo falso. Es la solución de mayor calidad estética. El cassette de 4 vías va embutido en el cielo y difunde el aire en cuatro direcciones — es más visible pero más económico en términos de obra de instalación. Ambos permiten control individual por habitación con thermostat inalámbrico.',
  },
  {
    pregunta: '¿Pueden integrar el sistema de climatización con el PMS del hotel?',
    respuesta: 'Sí. Los sistemas VRF actuales de Daikin, Mitsubishi y LG pueden integrarse con el PMS (Property Management System) del hotel vía BACnet o Modbus. Esto permite: apagar automáticamente la climatización cuando la habitación no está ocupada (card key interface o integración con el PMS), encender la habitación a temperatura confort antes del check-in del huésped, y dar acceso al informe de consumo energético por habitación para análisis de eficiencia.',
  },
  {
    pregunta: '¿El sistema VRF puede certificar para LEED o EDGE?',
    respuesta: 'Sí. Un sistema VRF de última generación puede contribuir a la certificación LEED v4 (créditos de Energy & Atmosphere: EA Prereq 2, EA Credit 1) y la certificación EDGE de IFC/World Bank, que requiere una reducción del 20% en consumo energético respecto a la línea base. Para la certificación, necesitamos modelar el consumo energético del edificio con software de simulación (EnergyPlus, eQUEST) y compararlo con el edificio base. Los sistemas VRF de alta eficiencia (COP > 4.5) tienen ventaja significativa sobre sistemas de expansión directa convencionales.',
  },
  {
    pregunta: '¿Cuánto tiempo demora la instalación del sistema HVAC en un hotel en construcción?',
    respuesta: 'Para un hotel de 50–80 habitaciones en construcción nueva, el cronograma típico es: ingeniería BIM (4–6 semanas), instalación de tuberías de refrigerante y ductos en obra gruesa (8–12 semanas, en paralelo con otras especialidades), instalación de unidades interiores en fase de terminaciones (4–6 semanas), y puesta en marcha y commissioning (1–2 semanas). El total es 16–24 semanas desde el inicio de obra hasta la puesta en marcha. Es fundamental coordinar los conductos de instalación con el equipo de arquitectura desde la fase de proyecto.',
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
        { '@type': 'ListItem', position: 3, name: 'Hotelería', item: `${siteUrl}/sectores/hoteleria/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/hoteleria/#service`,
      name: 'Climatización para Hoteles y Resorts — Chile',
      description: 'Diseño, ingeniería BIM, instalación y mantención de sistemas VRF para habitaciones, lobbies, restaurantes, spas y salas de eventos en hoteles de Chile.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Hospitality HVAC',
      url: `${siteUrl}/sectores/hoteleria/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/hoteleria/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorHoteleriaPage() {
  return (
    <>
      <Script id="ld-sector-hoteleria" type="application/ld+json">
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
              Solicitar cotización
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
            <span>Hotelería</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Hoteles · Resorts · Apart-Hoteles
          </p>
          <h1 className="sp-hero-title">Climatización para Hoteles<br />y Resorts en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas VRF silenciosos para habitaciones, climatización de lobby, restaurante,
            spa y salas de eventos. Integración con PMS, certificación LEED/EDGE y mantención
            de baja perturbación para hotelería en operación.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Consultar proyecto hotelero</Link>
            <Link href="/servicios/proyectos-llave-en-mano/" className="sp-hero-cta sp-hero-cta-outline">Proyecto llave en mano</Link>
          </div>
        </div>

        {/* Zonas */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Zonas del hotel
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cada zona tiene sus requisitos específicos
          </h2>
          <div className="sp-aplic-grid">
            {ZONAS.map((z, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {z.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {z.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {z.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BIM callout */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                Coordinación BIM HVAC
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                En hotelería, los elementos visibles de la climatización (rejillas, difusores, cassettes) son parte del diseño de interiores — su posición no puede improvisarse en obra.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                Modelamos en Revit MEP la posición exacta de cada elemento visible y la coordinamos con el arquitecto y el diseñador de interiores antes de que comience la instalación. Esto elimina los cambios costosos en obra y garantiza que el resultado final coincida con los renders del proyecto.
              </p>
            </div>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">
              Consultar BIM hotelería →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Acústica, costos e integración
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
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/servicios/proyectos-llave-en-mano/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Proyectos llave en mano →
            </Link>
            <Link href="/servicios/eficiencia-energetica/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Eficiencia energética →
            </Link>
            <Link href="/sectores/salud/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector salud →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Hoteles y resorts en Chile
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cuéntenos su proyecto hotelero
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Obra nueva, ampliación o remplazo de equipos en hotel en operación.
            Cotización orientativa con visita técnica sin costo para proyectos sobre UF 500.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar cotización hotelera</Link>
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
