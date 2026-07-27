import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Oficinas y Edificios Comerciales en Chile — Sistemas VRF',

  description:
    'Especialistas en HVAC para edificios de oficinas y edificios comerciales en Chile. Sistemas VRF de alta eficiencia, control individualizado por zona, integración BMS y certificación LEED/EDGE para la industria inmobiliaria corporativa.',
  alternates: {
    canonical: `${siteUrl}/sectores/oficinas/`,
    languages: {
      es: `${siteUrl}/sectores/oficinas/`,
      en: `${siteUrl}/en/sectors/offices/`,
    },
  },
  openGraph: {
    title: 'HVAC Oficinas Chile — Sistemas VRF para Edificios Comerciales | D&Z Building',
    description:
      'Climatización VRF para oficinas en Chile: control por zona, eficiencia energética, integración BMS y certificación LEED. Proyectos clase A y B.',
    url: `${siteUrl}/sectores/oficinas/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SOLUCIONES = [
  {
    titulo: 'VRF para Open Space y Planta Libre',
    subtitulo: 'Zonificación flexible · Control por área',
    desc: 'Los espacios open space con planta libre requieren distribución uniforme de temperatura sin puntos fríos ni calientes. Usamos cassettes de 4 vías o fan-coils de conductos distribuidos en una cuadrícula, con control de temperatura por zona de trabajo (máximo 10–15 puestos por zona). El sistema permite reconfigurar las zonas cuando cambia el layout del piso.',
  },
  {
    titulo: 'Salas de Reuniones y Directorios',
    subtitulo: 'Ocupación variable · CO₂',
    desc: 'Las salas de reuniones tienen ocupación altamente variable y son las más difíciles de climatizar bien. Instalamos sensores de CO₂ que aumentan el caudal de ventilación automáticamente cuando la sala se llena (ASHRAE 62.1, Ventilación por demanda) y reducen el consumo cuando está vacía. Los splits o cassettes se zonizan independientemente del sistema de open space.',
  },
  {
    titulo: 'Data Room y Cuartos Técnicos',
    subtitulo: 'Precisión T ±1°C · N+1',
    desc: 'Los cuartos de servidores, centrales telefónicas y equipamiento de red de los edificios de oficinas requieren climatización de precisión 24/7 con redundancia N+1. Usamos unidades de climatización de precisión (CRAC de sala o de pasillo) o splits de tecnología inverter especificados para operación continua, con alarma remota ante fallo del sistema.',
  },
  {
    titulo: 'Lobby y Áreas Comunes',
    subtitulo: 'Doble altura · Carga solar',
    desc: 'Los lobbies de edificios corporativos con doble altura y fachada de vidrio tienen alta carga solar en orientación norte/poniente. Resolvemos con VRF de piso o AHU con distribución lineal por el plenum del cielo, o fan-coils de suelo-techo para fachadas acristaladas. El diseño considera la carga solar estacional para evitar el sobrecalentamiento en verano.',
  },
  {
    titulo: 'Plataformas de Coworking',
    subtitulo: 'Alta densidad · Flexibilidad',
    desc: 'Los espacios de coworking tienen densidades de ocupación (personas/m²) tres veces superiores a una oficina corporativa convencional. El sistema HVAC debe diseñarse para la densidad máxima de ocupación y permitir ampliaciones sin cambiar los equipos exteriores. Los sistemas VRF son ideales por su modularidad: se agregan unidades interiores dentro de la capacidad del equipo exterior.',
  },
  {
    titulo: 'Integración BMS y Control Centralizado',
    subtitulo: 'BACnet · Modbus · LONWORKS',
    desc: 'Todos nuestros proyectos de oficinas se integran con el Building Management System (BMS) del edificio vía BACnet IP o Modbus TCP. Esto permite al administrador del edificio ver el estado de todos los equipos, programar horarios de encendido/apagado por piso o zona, y generar reportes de consumo energético por inquilino (para cobro de energía por arrendatario).',
  },
]

const FAQ = [
  {
    pregunta: '¿Cuánto cuesta climatizar un piso de oficinas de 600 m² en Santiago?',
    respuesta: 'Un piso de oficinas de 600 m² en Santiago con sistema VRF de calidad comercial (Daikin, Mitsubishi, LG) incluyendo unidades interiores cassette o ducto, unidad exterior VRF, tuberías de refrigerante, cableado de control y puesta en marcha tiene un costo referencial de UF 350–600 dependiendo de la distribución del piso, la complejidad de la instalación (altura de cielo, distancia al espacio técnico) y la marca de equipos seleccionada.',
  },
  {
    pregunta: '¿Qué sistema es mejor para un piso de oficinas: VRF o fan-coil con chiller?',
    respuesta: 'Para pisos de oficinas individuales (un arrendatario por piso, 300–2.000 m²), el VRF es generalmente la mejor opción: instalación más rápida, sin sala de máquinas centralizada, control individual, y mejor eficiencia en cargas parciales. Para edificios completos con carga térmica total superior a 500 TR y múltiples arrendatarios por piso, los sistemas de agua helada (chiller + fan-coil) ofrecen ventajas en megaproyectos: mantenimiento centralizado, mayor vida útil y facilidad de expansión modular. Para pisos arrendados en edificios clase A, el sistema típicamente ya está instalado por el propietario del edificio — el arrendatario solo elige la marca de cassette.',
  },
  {
    pregunta: '¿Cómo se distribuye el consumo energético de climatización entre arrendatarios?',
    respuesta: 'Hay dos métodos. El primero es la submédición directa: se instalan medidores de energía eléctrica en los circuitos de climatización de cada piso o arrendatario y se factura el consumo real. Es el método más justo pero requiere inversión en medidores. El segundo es la distribución proporcional: el consumo total del edificio se divide entre los arrendatarios en proporción a su superficie arrendada. Es más simple pero no refleja las diferencias de uso. Para edificios clase A nuevos, la tendencia es a la submédición directa con integración al BMS.',
  },
  {
    pregunta: '¿Qué temperatura setpoint debe tener una oficina en Chile?',
    respuesta: 'La norma ASHRAE 55 (Thermal Environmental Conditions) y el DS 594 del MINSAL establecen que la temperatura de confort para trabajo sedentario (oficinas) es 20–26°C. El rango de mayor productividad documentado en estudios es 21–23°C. En Chile, la tendencia común es configurar a 22°C en verano y 20°C en invierno. Es un error común configurar temperaturas muy bajas en verano (18–19°C) — esto aumenta el consumo entre un 20–40% sin mejora en confort, y puede generar corrientes de aire molestas.',
  },
  {
    pregunta: '¿Pueden hacer la certificación LEED o EDGE del sistema HVAC?',
    respuesta: 'D&Z Building no es organismo certificador LEED o EDGE, pero preparamos toda la documentación técnica del sistema HVAC que requiere la certificación: cálculo de cargas térmicas, especificación de equipos con indicadores de eficiencia (EER, COP, SEER), plan de commissioning, y el modelo energético del edificio para la evaluación comparativa con el edificio base (energy baseline). Trabajamos con los consultores LEED o los arquitectos certificadores para asegurar que el sistema HVAC aporte los créditos de Energy & Atmosphere previstos.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda en instalarse el VRF en un piso de oficinas en remodelación?',
    respuesta: 'Un piso de oficinas de 600–1.000 m² en remodelación (con obra civil en paralelo) puede instalarse en 3–5 semanas de trabajo: 1 semana de instalación de tuberías de refrigerante y cableado en fase de obra gruesa, 1–2 semanas de instalación de unidades interiores en fase de terminaciones, y 1 semana de puesta en marcha y ajuste. Si la oficina está en operación y hay restricciones de horario de trabajo (solo fines de semana o nocturno), el plazo se extiende a 6–10 semanas.',
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
        { '@type': 'ListItem', position: 3, name: 'Oficinas', item: `${siteUrl}/sectores/oficinas/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/oficinas/#service`,
      name: 'Climatización VRF para Oficinas y Edificios Comerciales — Chile',
      description: 'Diseño, instalación y mantención de sistemas VRF y HVAC para edificios de oficinas y espacios comerciales en Chile. Control por zona, integración BMS, eficiencia energética.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Office HVAC',
      url: `${siteUrl}/sectores/oficinas/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/oficinas/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorOficinasPage() {
  return (
    <>
      <Script id="ld-sector-oficinas" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sp-wrap">
        {/* Nav */}
        <nav className="sp-topnav">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="D&Z Building" width={110} height={36} style={{ objectFit: 'contain' }} priority />
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Link href="/servicios/climatizacion-vrf" style={{ color: 'var(--dim)', fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Sistemas VRF
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
            <span>Sectores</span>
            <span>›</span>
            <span>Oficinas y Edificios</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Edificios de Oficinas · Espacios Corporativos · Coworking
          </p>
          <h1 className="sp-hero-title">Climatización VRF para<br />Oficinas en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas VRF con control individualizado por zona para edificios de oficinas
            clase A y B en Chile. Integración BMS, medición por arrendatario y soporte
            para certificaciones LEED y EDGE.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">Cotizar sistema VRF</Link>
            <Link href="/guias/precio-sistema-vrf-chile/" className="sp-hero-cta sp-hero-cta-outline">Guía de precios VRF</Link>
          </div>
        </div>

        {/* Soluciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Zonas y soluciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cada espacio del edificio, optimizado
          </h2>
          <div className="sp-aplic-grid">
            {SOLUCIONES.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {s.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {s.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
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
            Costos, tecnología y certificaciones
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
            <Link href="/servicios/eficiencia-energetica/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Eficiencia energética →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/guias/precio-sistema-vrf-chile/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios VRF →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Edificios y oficinas en Chile
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cotización técnica
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Necesitamos: superficie, número de pisos, distribución del espacio y ubicación.
            Con eso dimensionamos el sistema y entregamos una propuesta técnica y económica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">Solicitar cotización</Link>
            <Link href="/servicios/climatizacion-vrf" className="sp-hero-cta sp-hero-cta-outline">Ver más sobre sistemas VRF</Link>
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
