import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Centros Comerciales y Strip Centers Chile',

  description:
    'HVAC para malls, strip centers y centros comerciales en Chile: climatización de tiendas ancla, patio de comidas NFPA 96, zonas comunes y BMS para gestión energética. VRF y chillers de alta eficiencia.',
  alternates: {
    canonical: `${siteUrl}/sectores/centros-comerciales/`,
    languages: {
      es: `${siteUrl}/sectores/centros-comerciales/`,
      en: `${siteUrl}/en/sectors/shopping-centers/`,
    },
  },
  openGraph: {
    title: 'Climatización Mall y Centro Comercial Chile — HVAC Retail | D&Z Building',
    description:
      'Sistemas VRF y chiller para tiendas ancla, extracción NFPA 96 en patio de comidas, climatización de zonas comunes y automatización BMS para reducir costos en centros comerciales chilenos.',
    url: `${siteUrl}/sectores/centros-comerciales/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Tiendas Ancla y Grandes Superficies',
    subtitulo: 'Chiller · VRF · Alta densidad de personas',
    desc: 'Las tiendas ancla (supermercados, tiendas por departamento, home improvement) tienen grandes cargas de refrigeración por la alta densidad de personas, la iluminación LED de alta potencia y los equipos de exhibición. D&Z Building diseña sistemas de chiller centrifugo o de tornillo con AHUs para grandes superficies (>2.000 m²), o sistemas VRF de recuperación de calor para locales medianos, optimizando el costo de ciclo de vida según el perfil de carga del local.',
  },
  {
    titulo: 'Patio de Comidas (Food Court)',
    subtitulo: 'NFPA 96 · Make-up air · Presión positiva',
    desc: 'El patio de comidas de un mall tiene las mismas exigencias técnicas que un casino empresarial de alta concurrencia, con la complejidad adicional de múltiples locales con distintos tipos de cocción. D&Z Building diseña el sistema de extracción centralizado conforme a NFPA 96, con campanas por local o extracción centralizada tipo plenum, make-up air climatizado para el patio, y presión positiva en el área de mesas respecto a las cocinas. El diseño considera la simultaneidad de todos los locales en hora pico.',
  },
  {
    titulo: 'Zonas Comunes y Pasillos',
    subtitulo: 'AHU · Difusión uniforme · Control de CO₂',
    desc: 'Los pasillos y zonas comunes de un mall deben mantener temperatura uniforme a pesar de las cargas variables por la ocupación (0–5 personas/m² según la hora). D&Z Building diseña AHUs con caudal variable controladas por sensores de CO₂ y temperatura, asegurando confort en las horas de mayor concurrencia (fines de semana, 17:00–21:00) sin sobreconsumo en horarios de baja ocupación. Los difusores se seleccionan para distribución de aire uniforme sin corrientes perceptibles en el pasillo.',
  },
  {
    titulo: 'Locales Comerciales Medianos (100–500 m²)',
    subtitulo: 'VRF · Medición de consumo por local · Facturación a arrendatarios',
    desc: 'Los locales de tamaño mediano (ropa, calzado, electrónica) son el corazón de la rentabilidad de un strip center o mall pequeño. D&Z Building diseña sistemas VRF con medición de consumo eléctrico por unidad indoor y control independiente por local. Esto permite al propietario facturar el consumo de climatización a cada arrendatario por su consumo real, en lugar de prorratearlo por m², lo que incentiva el uso eficiente y reduce conflictos con arrendatarios.',
  },
  {
    titulo: 'Salas de Cine y Entretenimiento',
    subtitulo: 'Alta densidad · Oscuridad · Control de humedad',
    desc: 'Las salas de cine presentan la combinación más desafiante: alta densidad de personas (hasta 8 personas/m² en butacas), ausencia de luz natural y equipos de proyección de alta disipación térmica. D&Z Building diseña sistemas de ventilación por desplazamiento (displacement ventilation) para salas de cine, suministrando aire fresco a nivel de piso y extrayendo el aire caliente y el CO₂ del nivel del techo, logrando mayor eficiencia que los sistemas de mezcla convencionales.',
  },
  {
    titulo: 'Automatización BMS y Gestión Energética',
    subtitulo: 'SCADA · Horarios · Tarifas eléctricas especiales',
    desc: 'El consumo eléctrico de climatización representa el 40–60% de los costos operacionales de un mall. D&Z Building integra todos los sistemas (chillers, VRF, AHUs, extracción) en un BMS central con SCADA que permite optimizar los setpoints según la ocupación, los precios eléctricos horarios (tarifas AT4 con punta/fuera de punta), y los pronósticos de temperatura exterior. Los algoritmos de pre-cooling (enfriar el edificio antes de la hora punta eléctrica) pueden reducir la factura en 15–25%.',
  },
]

const STATS = [
  { valor: '40–60%', etiqueta: 'Costos operacionales de un mall que corresponden a climatización' },
  { valor: 'NFPA 96', etiqueta: 'Norma de extracción en patios de comidas' },
  { valor: '15–25%', etiqueta: 'Ahorro posible con pre-cooling y gestión de tarifas' },
  { valor: 'VRF', etiqueta: 'Tecnología para medición y facturación por local' },
]

const FAQ = [
  {
    pregunta: '¿Qué tecnología de climatización es más eficiente para un strip center en Chile?',
    respuesta: 'Para un strip center de 3.000–8.000 m² con locales medianos (100–300 m² cada uno), el sistema VRF multizona de recuperación de calor es el más adecuado: permite control independiente por local, medición de consumo por arrendatario, y recuperación del calor rechazado por los locales de mayor carga (tiendas con alta iluminación) hacia los locales que necesitan calefacción (horario de apertura en invierno). Para un mall de gran formato (>20.000 m²), los sistemas de chiller de alta eficiencia con AHUs de caudal variable pueden ser más económicos en costos de ciclo de vida.',
  },
  {
    pregunta: '¿Cómo se mide el consumo de climatización por local para facturarlo a los arrendatarios?',
    respuesta: 'Existen dos métodos: (1) Medición directa con analizadores de energía eléctrica en el tablero de cada unidad indoor VRF o fan-coil (la más precisa, costo UF 3–8 por local en hardware más instalación); (2) Cálculo proporcional basado en el tiempo de uso y la capacidad del equipo (menos preciso, pero válido para contratos de arrendamiento con tarifa plana de climatización). D&Z Building diseña el sistema de medición en la etapa de proyecto y entrega los protocolos de lectura para la administración del mall.',
  },
  {
    pregunta: '¿Es obligatorio tener un sistema BMS en un centro comercial en Chile?',
    respuesta: 'No existe una norma chilena que exija BMS en centros comerciales. Sin embargo, la Ordenanza General de Urbanismo y Construcción exige sistemas de control automático de climatización en edificios de uso público con superficie superior a 5.000 m². Para centros comerciales que solicitan la calificación energética de edificios (CEE), el grado de automatización del HVAC es uno de los factores evaluados. D&Z Building recomienda BMS en todo centro comercial de más de 3.000 m² por el retorno de inversión documentado en la primera temporada.',
  },
  {
    pregunta: '¿Cuánto cuesta la climatización de un strip center de 5.000 m²?',
    respuesta: 'Para un strip center de 5.000 m² (10–15 locales de 150–300 m², pasillo central, servicios), el sistema de climatización completo (VRF multizona con recuperación de calor, medición por local, control automatizado, extracción de servicios) tiene un costo de UF 600–1.200 (≈ CLP 15,6–31,2 millones) en equipamiento e instalación. El costo por m² (UF 0,12–0,24/m²) varía según la altura de cielo, la complejidad de la distribución de ductos y el número de zonas de control. D&Z Building entrega cotización con ingeniería básica incluida.',
  },
  {
    pregunta: '¿Qué pasa cuando un local comercial cambia de rubro y aumenta su carga de climatización?',
    respuesta: 'El cambio de rubro de un local (por ejemplo, de ropa a restaurante) puede incrementar la carga de climatización en 3–5 veces. El contrato de arrendamiento debe especificar la capacidad de climatización disponible por local (kW de frío). D&Z Building evalúa si la capacidad instalada del sistema VRF o chiller del mall permite absorber la nueva carga del local modificado, y diseña la ampliación necesaria cuando el sistema original no tiene capacidad de reserva. Este análisis evita costosas intervenciones de emergencia cuando el nuevo arrendatario ya está operando.',
  },
  {
    pregunta: '¿Cómo se gestiona el ruido del equipo de climatización en áreas de tiendas y pasillos?',
    respuesta: 'El nivel de ruido objetivo en pasillos de mall es NC-40 (conversación posible sin esfuerzo), y en tiendas de retail NC-35. Los equipos de condensación de VRF o las torres de enfriamiento del chiller se ubican en techos o terrazas con aislación acústica y antivibraciones. D&Z Building realiza el cálculo acústico del sistema como parte del proyecto de ingeniería, seleccionando ventiladores de bajo ruido y diseñando las cajas de silenciadores en la impulsión de las AHUs cuando el nivel de ruido de fondo es crítico (tiendas de lujo, cines).',
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
        { '@type': 'ListItem', position: 3, name: 'Centros Comerciales', item: `${siteUrl}/sectores/centros-comerciales/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/centros-comerciales/#service`,
      name: 'Climatización para Centros Comerciales y Strip Centers Chile',
      description: 'Diseño, instalación y mantención de sistemas HVAC para centros comerciales y strip centers en Chile: tiendas ancla, patio de comidas NFPA 96, zonas comunes y automatización BMS para gestión energética.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Commercial HVAC',
      url: `${siteUrl}/sectores/centros-comerciales/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/centros-comerciales/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorCentrosComercialesPage() {
  return (
    <>
      <Script id="ld-sector-centros-comerciales" type="application/ld+json">
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
              Solicitar asesoría técnica
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
            <span>Centros Comerciales</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Tiendas Ancla · Patio de Comidas · BMS Energético
          </p>
          <h1 className="sp-hero-title">HVAC para Centros<br />Comerciales y Strip Centers</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Climatización de malls, strip centers y centros comerciales en Chile:
            tiendas ancla, patio de comidas conforme a NFPA 96, zonas comunes con control
            de CO₂ y automatización BMS para reducir el 40–60% de costos operacionales
            que representa el HVAC.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta sp-hero-cta-outline">Proyecto llave en mano</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', marginTop: 4, maxWidth: 200 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Espacios que climatizamos en centros comerciales
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((apl, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {apl.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {apl.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {apl.desc}
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
            Tecnología, costos y gestión energética
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
            <Link href="/sectores/retail/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector retail →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto de mall o strip center?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el formato del proyecto, m² totales, número de locales y arrendatarios.
            Evaluamos la solución óptima y respondemos en 48–72 horas con una propuesta técnica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
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
