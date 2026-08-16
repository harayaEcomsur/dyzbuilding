import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Ventilación Industrial y Comercial en Chile — Extracción y Renovación de Aire',

  description:
    'Diseño e instalación de sistemas de ventilación industrial y comercial en Chile: extracción de cocinas, ventilación de estacionamientos, salas limpias, HRV y renovación de aire en ambientes con requisitos técnicos y normativos.',
  alternates: {
    canonical: `${siteUrl}/servicios/ventilacion-industrial/`,
    languages: {
      es: `${siteUrl}/servicios/ventilacion-industrial/`,
      en: `${siteUrl}/en/services/industrial-ventilation/`,
    },
  },
  openGraph: {
    title: 'Ventilación Industrial Chile — Extracción y Renovación de Aire | D&Z Building',
    description:
      'Sistemas de ventilación forzada, extracción industrial, HRV y control de calidad del aire para industria y comercio en Chile.',
    url: `${siteUrl}/servicios/ventilacion-industrial/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Cocinas Comerciales e Industriales',
    norma: 'NFPA 96 · ASHRAE 154',
    desc: 'Campanas de extracción con filtros de grasa, ductos de acero inoxidable calibre 16, ventiladores centrífugos de alta presión estática (500–1.500 Pa), y equipos de aire de reposición (makeup air unit) para restaurantes, hoteles, casinos y casinos industriales. Cálculo de caudales según DS 594 y NFPA 96.',
  },
  {
    titulo: 'Ventilación de Estacionamientos',
    norma: 'DS 594 · CO ≤ 25 ppm',
    desc: 'Sistemas de jet-fan (ventiladores de impulso) con control automático por sensores de CO y NO₂. El sistema arranca al detectar 15 ppm de CO y extrae hasta alcanzar < 25 ppm (límite OSHA). Para estacionamientos de más de 3 niveles se recomienda simulación CFD para validar los patrones de flujo.',
  },
  {
    titulo: 'Recuperadores de Calor (HRV/ERV)',
    norma: 'ASHRAE 62.1 · Eficiencia > 75%',
    desc: 'Recuperadores de calor sensible (HRV) o entálpico (ERV) para edificios de oficinas, hoteles y clínicas. Permiten renovar el 100% del aire interior con pérdida de < 25% de la energía de climatización. Integración con sistemas VRF y fan-coil existentes mediante controladores Modbus/BACnet.',
  },
  {
    titulo: 'Extracción Industrial y ATEX',
    norma: 'ATEX Directiva 2014/34/UE',
    desc: 'Ventiladores y ducterías antideflagrantes (ATEX) para plantas con atmósferas potencialmente explosivas (almacenamiento de solventes, bodegas de agroquímicos, plantas de gas). Diseño según clasificación de zonas ATEX (Zona 1/2 para gases, Zona 21/22 para polvo) y selección de equipos con certificación EX.',
  },
  {
    titulo: 'Salas Limpias y Cuartos Técnicos',
    norma: 'ISO 14644 · GMP',
    desc: 'Sistemas de ventilación para salas limpias farmacéuticas (ISO 7–8), laboratorios (HEPA + presión diferencial), y cuartos de servidores (precisión ±1°C con CRAC/CRAH). Cálculo de renovaciones de aire por hora según clasificación ISO y validación de partículas para certificación GMP.',
  },
  {
    titulo: 'Ventilación de Espacios Grandes',
    norma: 'ASHRAE 62.1 · DS 594',
    desc: 'Galpones industriales, naves de manufactura y centros de distribución con ventilación natural asistida (paneles de aleta) o ventilación mecánica con evaporadores indirectos (adiabáticos) para zonas de alta carga de calor. Cálculo de CBH (calor sensible) y diseño de distribución de aire para ambientes de trabajo.',
  },
]

const VENTAJAS = [
  { titulo: 'Cálculo CFD disponible', desc: 'Simulación computacional de flujo de fluidos para estacionamientos, galpones y recintos de geometría compleja donde el diseño empírico no es suficiente.' },
  { titulo: 'Ingeniería BIM HVAC', desc: 'Modelamiento en Revit MEP para coordinación con estructura, arquitectura y otras instalaciones. Detectamos interferencias antes de la obra.' },
  { titulo: 'Control automático', desc: 'Integración con BMS (Building Management Systems), sensores CO/NO₂, detectores de humo y controladores Modbus/BACnet para operación autónoma.' },
  { titulo: 'Cumplimiento normativo', desc: 'Conocemos DS 594, NFPA 96, ASHRAE 62.1, ATEX y los requisitos del SEREMI de Salud para tramitación de permisos sanitarios.' },
]

const FAQ = [
  {
    pregunta: '¿Cuántas renovaciones de aire necesita una cocina comercial en Chile?',
    respuesta: 'Según NFPA 96 y ASHRAE 154, una cocina comercial con equipos de cocción abierta necesita entre 30 y 60 renovaciones de aire por hora dependiendo de la carga de cocción. La extracción debe ser mayor que el suministro (presión negativa en la cocina) para evitar que los olores se propaguen al comedor. El caudal exacto se calcula en función de la potencia de cocción instalada (BTU/h) y el tipo de equipos (freidor, parrilla, horno combinado).',
  },
  {
    pregunta: '¿Qué normativa rige la ventilación de estacionamientos en Chile?',
    respuesta: 'En Chile, los estacionamientos cerrados se rigen por el DS 594 (Reglamento de Condiciones Sanitarias de Establecimientos de Trabajo) que establece el límite de CO en 25 ppm para 8 horas de exposición. La OGUC (Ordenanza General de Urbanismo y Construcciones) exige ventilación en estacionamientos de más de 5 vehículos en recintos cerrados. Para proyectos con más de 50 vehículos se recomienda la norma NFPA 88A y el uso de sensores automáticos de CO/NO₂.',
  },
  {
    pregunta: '¿Qué es un HRV y para qué sirve en un edificio de oficinas?',
    respuesta: 'Un HRV (Heat Recovery Ventilator) es un equipo que permite renovar el aire interior de un edificio sin perder la energía de climatización. Extrae el aire viciado interior y, antes de expulsarlo, transfiere su calor (o frío) al aire fresco exterior entrante, con eficiencias del 70–85%. En un edificio de oficinas climatizado, el HRV puede reducir el consumo energético de ventilación en un 30–40% respecto a un sistema de extracción directa.',
  },
  {
    pregunta: '¿Cuánto cuesta instalar un sistema de ventilación para una cocina de restaurante en Chile?',
    respuesta: 'Una campana de extracción con filtros de grasa, ducto de acero inoxidable, ventilador centrífugo y unidad de aire de reposición para una cocina de restaurante de 30–60 cubiertos tiene un costo referencial de UF 120–350 dependiendo de la longitud del ducto, el número de filtros, y si se requiere tratamiento de olores (filtro de carbón activo o sistema de UV). Para cocinas de hoteles o casino industrial el sistema completo puede superar las UF 800.',
  },
  {
    pregunta: '¿Qué es una zona ATEX y cómo afecta al diseño de la ventilación?',
    respuesta: 'Una zona ATEX (ATmosphere EXplosive) es un área donde puede formarse una mezcla explosiva de gases, vapores o polvo combustible con el aire. La clasificación de zonas (Zona 0/1/2 para gases, Zona 20/21/22 para polvo) determina qué equipos pueden instalarse. En una zona ATEX, los ventiladores, motores y tableros de control deben tener certificación EX (prueba de llama, presurización o seguridad intrínseca). Ignorar esta normativa puede invalidar el seguro del recinto e implicar responsabilidad penal en caso de accidente.',
  },
  {
    pregunta: '¿Pueden hacer el trámite de permiso sanitario ante el SEREMI de Salud?',
    respuesta: 'Sí. Preparamos la memoria de cálculo de ventilación, los planos de ductos y el informe técnico en el formato requerido por la SEREMI de Salud de la región. El permiso sanitario para cocinas comerciales (resolución sanitaria) requiere demostrar que el sistema de extracción cumple con los caudales mínimos y que las grasas no se acumulan en el ducto. Acompañamos al cliente durante todo el proceso de tramitación.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/servicios/` },
        { '@type': 'ListItem', position: 3, name: 'Ventilación Industrial', item: `${siteUrl}/servicios/ventilacion-industrial/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/servicios/ventilacion-industrial/#service`,
      name: 'Ventilación Industrial y Comercial — Chile',
      description: 'Diseño, ingeniería BIM, instalación y mantención de sistemas de ventilación forzada, extracción industrial, HRV y control de calidad del aire para industria, comercio y salud en Chile.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Industrial Ventilation',
      url: `${siteUrl}/servicios/ventilacion-industrial/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/servicios/ventilacion-industrial/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function VentilacionIndustrialPage() {
  return (
    <>
      <Script id="ld-ventilacion" type="application/ld+json">
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
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Cotizar proyecto
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/servicios/" style={{ color: 'inherit', textDecoration: 'none' }}>Servicios</Link>
            <span>›</span>
            <span>Ventilación Industrial</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Servicio · Ventilación · Extracción · Renovación de Aire
          </p>
          <h1 className="sp-hero-title">Ventilación Industrial<br />y Comercial en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 680, lineHeight: 1.65, margin: '0 0 28px' }}>
            Diseño e instalación de sistemas de ventilación forzada, extracción industrial,
            HRV y control de calidad del aire para cocinas comerciales, estacionamientos,
            industria y edificios de uso mixto en todo Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">Cotizar sistema de ventilación</Link>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta sp-hero-cta-outline">Consulta técnica</Link>
          </div>
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Sistemas que instalamos
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((a, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {a.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {a.norma}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Por qué D&Z Building
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,28px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Ingeniería que resuelve el problema completo
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {VENTAJAS.map((v, i) => (
              <div key={i} style={{ background: 'var(--bg2)', padding: '24px 20px' }}>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 10px' }}>
                  {v.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
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
            Normativa, costos y diseño
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
            <Link href="/sectores/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Ver todos los sectores →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Cuéntenos su proyecto
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cotización técnica
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Necesitamos: tipo de recinto, superficie, ocupación y normativa aplicable.
            Con eso dimensionamos el sistema y entregamos una referencia de costo sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=ventilacion#contacto" className="sp-hero-cta">Solicitar cotización</Link>
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
