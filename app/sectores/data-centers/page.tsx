import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización de Data Centers en Chile — HVAC para Salas de Servidores',

  description:
    'Especialistas en climatización de data centers y salas de servidores en Chile. Sistemas de precisión, redundancia N+1, optimización de PUE y soporte 24/7. Cotización gratuita.',
  alternates: {
    canonical: `${siteUrl}/sectores/data-centers/`,
    languages: {
      es: `${siteUrl}/sectores/data-centers/`,
      en: `${siteUrl}/en/sectors/data-centers/`,
    },
  },
  openGraph: {
    title: 'Climatización de Data Centers Chile | D&Z Building',
    description:
      'HVAC de precisión para data centers y salas de servidores en Chile. Redundancia, control de temperatura y humedad, PUE optimizado.',
    url: `${siteUrl}/sectores/data-centers/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const REQUISITOS = [
  {
    titulo: 'Disponibilidad 24/7 y redundancia N+1',
    desc: 'Un data center no puede tener tiempo de parada. Los sistemas de climatización deben diseñarse con redundancia N+1 o 2N, de modo que la falla de cualquier componente no interrumpa la operación. Usamos unidades CRAC en configuración activa-activa o activa-pasiva según el nivel Tier requerido.',
  },
  {
    titulo: 'Control preciso de temperatura y humedad',
    desc: 'Los servidores operan de forma óptima entre 18–27 °C y 40–60% HR (ASHRAE A2). Cualquier desviación accelera el envejecimiento del hardware. Nuestros sistemas mantienen la temperatura con tolerancias de ±0.5 °C y la humedad relativa dentro del rango normativo.',
  },
  {
    titulo: 'Optimización de PUE (Power Usage Effectiveness)',
    desc: 'El PUE objetivo para un data center eficiente es < 1.5. Logramos esto combinando free cooling adiabático (cuando la temperatura exterior lo permite), contención de pasillos caliente/frío, y variadores de frecuencia en compresores y ventiladores.',
  },
  {
    titulo: 'Monitoreo y alarmas en tiempo real',
    desc: 'Integramos los sistemas de climatización con el BMS del data center para monitoreo en tiempo real de temperatura, humedad, presión diferencial y estado de cada unidad. Generamos alarmas por correo y SMS con tiempos de respuesta definidos en el SLA.',
  },
]

const SOLUCIONES = [
  {
    titulo: 'Unidades CRAC / CRAH de precisión',
    desc: 'Computer Room Air Conditioning (CRAC) y Computer Room Air Handling (CRAH) con control electrónico de temperatura y humedad, para salas de servidores de 10 kW a 10 MW de carga de TI.',
  },
  {
    titulo: 'Refrigeración en fila (In-Row Cooling)',
    desc: 'Unidades de refrigeración instaladas entre los racks para eliminar el calor en el punto de generación. Ideal para densidades de rack superiores a 10 kW por rack.',
  },
  {
    titulo: 'Contención de pasillos caliente/frío',
    desc: 'Diseño y construcción de sistemas de contención física para separar el aire frío de suministro del aire caliente de retorno, mejorando el PUE entre un 15 y un 30%.',
  },
  {
    titulo: 'Free Cooling y economizadores',
    desc: 'En Chile, las condiciones climáticas permiten aprovechar el free cooling adiabático durante 2.000–4.000 horas al año (según ubicación), reduciendo drásticamente el consumo de los compresores.',
  },
  {
    titulo: 'UPS y grupos electrógenos para climatización',
    desc: 'Coordinamos la alimentación eléctrica de los sistemas de climatización con los UPS y grupos electrógenos del data center para garantizar continuidad ante cortes de suministro.',
  },
  {
    titulo: 'Mantenimiento preventivo con SLA',
    desc: 'Planes de mantención trimestral o mensual con SLA de respuesta a definir según criticidad. Incluye revisión de refrigerante, filtros, correas, drenajes, calibración de sensores y pruebas de transferencia de carga.',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué diferencia hay entre un sistema CRAC y un CRAH para data centers?',
    respuesta: 'Un CRAC (Computer Room Air Conditioning) tiene compresor propio y puede operar de forma independiente. Un CRAH (Computer Room Air Handler) usa agua helada de un chiller central, lo que permite mayor eficiencia en instalaciones grandes (> 500 kW) pero requiere infraestructura adicional. Para data centers medianos en Chile, el CRAC es más frecuente; para grandes instalaciones (Tier III o IV), el CRAH con chiller suele ser más eficiente.',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar un data center en Chile?',
    respuesta: 'El costo depende del nivel Tier y la carga de TI. Un sala de servidores pequeña (< 20 kW) puede climatizarse con 1–2 unidades CRAC de precisión desde UF 400–800. Un data center mediano (100–500 kW) requiere una inversión de UF 3.000–15.000 incluyendo redundancia N+1. Proyectos Tier III o IV con carga > 1 MW implican inversiones superiores a UF 30.000. Ofrecemos cotización gratuita con especificación técnica en 72 horas.',
  },
  {
    pregunta: '¿Cuál es el PUE que pueden lograr con sus sistemas?',
    respuesta: 'Con nuestros diseños de contención de pasillos + free cooling adiabático + variadores de frecuencia, logramos PUE de 1.3–1.5 para data centers en Santiago y regiones. El clima de Chile (especialmente en el norte y zona central) es favorable para free cooling, lo que reduce significativamente el consumo de los compresores.',
  },
  {
    pregunta: '¿Pueden cumplir con los estándares ANSI/TIA-942 o UPTIME Institute?',
    respuesta: 'Sí. Diseñamos los sistemas de climatización conforme a ANSI/TIA-942 (categorías de disponibilidad para Tier I a IV) y a los requisitos del Uptime Institute para los niveles de disponibilidad correspondientes. Emitimos la documentación técnica necesaria para procesos de certificación.',
  },
  {
    pregunta: '¿Ofrecen monitoreo remoto y soporte 24/7 para data centers?',
    respuesta: 'Sí. Integramos los sistemas de climatización con plataformas BMS/DCIM para monitoreo en tiempo real, alarmas y tele-diagnóstico. Nuestros planes de mantención para data centers pueden estructurarse con SLA de respuesta prioritaria según los requerimientos del sitio.',
  },
  {
    pregunta: '¿Qué marcas de equipos de precisión instalan?',
    respuesta: 'Trabajamos con unidades de precisión de Stulz, Schneider Electric (APC InRow), Vertiv (Liebert), y equipos de chiller de Carrier y LG. La selección de marca depende del nivel de redundancia, la densidad de calor y el presupuesto del proyecto.',
  },
  {
    pregunta: '¿Tienen experiencia con data centers fuera de Santiago?',
    respuesta: 'Sí. Hemos trabajado en instalaciones en Antofagasta, Valparaíso y Concepción. Las condiciones climáticas del norte de Chile (baja humedad, temperaturas moderadas nocturnas) son particularmente favorables para sistemas de free cooling, lo que reduce el CAPEX y el OPEX del proyecto.',
  },
  {
    pregunta: '¿Pueden hacer la ingeniería del sistema además de la instalación?',
    respuesta: 'Sí. Ofrecemos ingeniería de detalle completa: cálculo de carga térmica, dimensionamiento de equipos, diseño de distribución de aire (CFD si se requiere), especificaciones técnicas, planos de construcción y coordinación con otros sistemas (eléctrico, UPS, supresión de incendio). También realizamos modelamiento BIM HVAC para proyectos que lo requieran.',
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
        { '@type': 'ListItem', position: 3, name: 'Data Centers', item: `${siteUrl}/sectores/data-centers/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/data-centers/#service`,
      name: 'Climatización de Data Centers — Chile',
      description: 'Diseño, suministro, instalación y mantención de sistemas de climatización de precisión para data centers y salas de servidores en Chile. Redundancia N+1, optimización de PUE, monitoreo 24/7.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Data Center Cooling',
      url: `${siteUrl}/sectores/data-centers/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/data-centers/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function DataCentersPage() {
  return (
    <>
      <Script id="ld-data-centers" type="application/ld+json">
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
            <span>Sectores</span>
            <span>›</span>
            <span>Data Centers</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Data Centers y Salas de Servidores
          </p>
          <h1 className="sp-hero-title">Climatización de Data Centers<br />en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas de precisión con redundancia N+1, contención de pasillos caliente/frío y
            optimización de PUE para data centers, salas de servidores y centros de cómputo en Chile.
            Uptime 99.9%, monitoreo 24/7 y SLA de respuesta garantizado.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">Solicitar cotización técnica</Link>
            <Link href="/#contacto" className="sp-hero-cta sp-hero-cta-outline">Hablar con un especialista</Link>
          </div>
        </div>

        {/* Requirements */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Requisitos críticos
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Lo que exige un data center
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'var(--border)' }}>
            {REQUISITOS.map((r, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: '28px 32px' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
                  {r.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Soluciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cómo lo resolvemos
          </h2>
          <div className="sp-aplic-grid">
            {SOLUCIONES.map((s, i) => (
              <div key={i} className="sp-aplic-item">
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
                  {s.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid CTA */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px' }}>
                Ingeniería incluida
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: 0, maxWidth: 480 }}>
                Incluimos cálculo de carga térmica, dimensionamiento y especificación técnica en la cotización gratuita.
              </p>
            </div>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">
              Solicitar cotización técnica →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Todo lo que necesita saber
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
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Todos los servicios →
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Siguiente paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cuéntenos su proyecto
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cotización técnica gratuita. Ingeniería incluida sin costo.
            Técnicos certificados. Cobertura nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=vrf#contacto" className="sp-hero-cta">Solicitar cotización técnica</Link>
            <Link href="/servicios/climatizacion-vrf" className="sp-hero-cta sp-hero-cta-outline">Ver sistemas VRF</Link>
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
