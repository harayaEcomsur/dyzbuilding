import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Centros Deportivos y Gimnasios Chile',

  description:
    'HVAC para piscinas cubiertas, gimnasios, canchas y vestuarios en Chile: deshumidificación, control de CO₂, ventilación de vestuarios y DS 594. SportLife, Bodytech, clubes y municipios.',
  alternates: {
    canonical: `${siteUrl}/sectores/centros-deportivos/`,
    languages: {
      es: `${siteUrl}/sectores/centros-deportivos/`,
      en: `${siteUrl}/en/sectors/sports-facilities/`,
    },
  },
  openGraph: {
    title: 'Climatización Piscina Cubierta y Gimnasio Chile — HVAC Centros Deportivos',
    description:
      'Deshumidificación de piscinas, ventilación de alta renovación en gimnasios, control de CO₂ y DS 594 para vestuarios. Diseño e instalación en centros deportivos y fitness en Chile.',
    url: `${siteUrl}/sectores/centros-deportivos/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Deshumidificación de Piscinas Cubiertas',
    subtitulo: 'Control de humedad relativa · Condensación · Corrosión',
    desc: 'Una piscina cubierta genera grandes volúmenes de vapor de agua. Sin deshumidificación adecuada, la humedad relativa supera el 80%, provocando condensación en ventanas y estructuras, y acelerando la corrosión de la estructura metálica. La norma ASHRAE 62.1 recomienda mantener la humedad relativa entre 50–60% en recintos de piscinas. D&Z Building diseña unidades deshumidificadoras con recuperación de calor para minimizar el consumo eléctrico, ya que el calor extraído del aire puede precalentar el agua de la piscina.',
  },
  {
    titulo: 'Ventilación de Salas de Ejercicio y Gimnasios',
    subtitulo: '6–10 renovaciones/hora · Control CO₂ · Neutralización de olores',
    desc: 'Una sala de máquinas o aeróbica con alta densidad de personas genera CO₂ y vapores corporales rápidamente. ASHRAE 62.1 requiere un mínimo de 0,06 l/s por m² más 3,5 l/s por persona en zonas de ejercicio. D&Z Building diseña sistemas de ventilación con sensores de CO₂ que activan caudal variable según la ocupación real, reduciendo el consumo eléctrico en horarios de baja ocupación (madrugada, mediodía). Los filtros de alta eficiencia (MERV 11-13) controlan olores y bioaerosoles.',
  },
  {
    titulo: 'Vestuarios y Duchas',
    subtitulo: 'Presión negativa · Alta renovación · DS 594',
    desc: 'Los vestuarios deben mantenerse en presión negativa respecto a las zonas comunes para contener los olores. DS 594 exige ventilación en recintos sanitarios. D&Z Building diseña sistemas de extracción con al menos 10–15 renovaciones por hora en vestuarios húmedos (con duchas), con inyección de aire compensado desde zonas limpias. Los ventiladores se seleccionan para operación silenciosa (máximo NC-40) y bajo consumo en operación continua.',
  },
  {
    titulo: 'Pabellones Multicancha y Estadios Techados',
    subtitulo: 'Grandes volúmenes · Estratificación · Confort térmico',
    desc: 'Los pabellones de altura ≥8 m presentan el problema de estratificación térmica: el calor sube al techo mientras el nivel de actividad (1,0–2,5 m sobre el suelo) puede estar frío. D&Z Building diseña sistemas de distribución de aire por toberas de largo alcance o unidades de circulación de destratificación, logrando diferencias de temperatura vertical menores a 2°C entre nivel de cancha y techo. Esto permite reducir la temperatura de consigna en calefacción sin sacrificar confort.',
  },
  {
    titulo: 'Canchas Cubiertas (Squash, Tenis, Padel)',
    subtitulo: 'Sin corrientes de aire · NC-35 · Temperatura estable',
    desc: 'En canchas de squash, tenis o padel, las corrientes de aire pueden afectar el juego. El diseño de climatización debe suministrar aire sin generar corrientes perceptibles en la zona de juego (velocidad del aire < 0,2 m/s en altura de 0,5–1,5 m). D&Z Building utiliza difusores de baja velocidad o desplazamiento de aire perimetral. El criterio de ruido NC-35 evita que el equipo de climatización interfiera con la concentración de los deportistas.',
  },
  {
    titulo: 'Pistas de Hielo',
    subtitulo: 'Refrigeración del suelo · Control de humedad · Visibilidad',
    desc: 'Las pistas de hielo requieren refrigeración del piso (glicol a -8°C a -12°C), control de humedad para evitar neblina sobre el hielo (causada por diferencia psicrométrica entre el aire ambiente y la superficie del hielo), y calefacción de la zona de espectadores independiente. D&Z Building diseña el sistema de refrigeración de piso, la deshumidificación del recinto y la zonificación para los distintos recintos (pista, palcos, camarines de equipos).',
  },
]

const STATS = [
  { valor: '50–60%', etiqueta: 'Humedad relativa objetivo en piscinas cubiertas (ASHRAE)' },
  { valor: '10+', etiqueta: 'Renovaciones/hora en vestuarios húmedos' },
  { valor: '0,2 m/s', etiqueta: 'Velocidad máxima de aire en canchas (sin corriente perceptible)' },
  { valor: 'NC-35', etiqueta: 'Criterio de ruido para salas de ejercicio y canchas' },
]

const FAQ = [
  {
    pregunta: '¿Cuánto consume la deshumidificación de una piscina cubierta?',
    respuesta: 'Una piscina cubierta de 25×12 m (300 m², temperatura del agua 28°C, temperatura del aire 30°C) evaporará aproximadamente 60–100 kg de agua por hora en condiciones normales de uso. Una unidad deshumidificadora con recuperación de calor para esa carga tiene una potencia eléctrica de 15–30 kW. El costo eléctrico mensual (operación 18 h/día) es aproximadamente CLP 400.000–800.000. La recuperación de calor puede reducir el costo de calefacción del agua en 30–50%, compensando parte del costo eléctrico de la deshumidificación.',
  },
  {
    pregunta: '¿Qué pasa si la piscina cubierta no tiene deshumidificación?',
    respuesta: 'Sin deshumidificación, la humedad relativa puede superar el 85–95%, lo que provoca: (1) condensación constante en ventanas y lucernarios, con escurrimiento de agua; (2) corrosión acelerada de estructura metálica, grapas y perfiles de aluminio (un problema de mantenimiento de costo elevado); (3) aparición de hongos y moho en muros y cielos; (4) malestar térmico de los usuarios por sensación de "baño sauna"; y (5) deterioro acelerado de la ropa y equipamiento de los usuarios. D&Z Building ha reemplazado sistemas de ventilación simple por deshumidificadores en centros deportivos que sufrían estos problemas.',
  },
  {
    pregunta: '¿Cómo controlo los olores en un gimnasio de alta concurrencia?',
    respuesta: 'El control de olores en un gimnasio tiene tres componentes: (1) ventilación suficiente (0,06 l/s·m² + 3,5 l/s·persona según ASHRAE 62.1); (2) filtración con filtros de alta eficiencia MERV 11-13 o carbón activo; (3) ionización de plasma frío o luz UV-C en la unidad de tratamiento de aire. El sistema más efectivo es la combinación de ventilación con caudal variable (sensores CO₂) + ionización, que neutraliza los compuestos orgánicos volátiles (COV) responsables de los olores, reduciendo la necesidad de caudales de ventilación extremos.',
  },
  {
    pregunta: '¿Cuánto cuesta el HVAC para un gimnasio de 800 m²?',
    respuesta: 'Para un gimnasio de 800 m² (sala de máquinas, sala de clases, vestuarios, recepción), el sistema completo de ventilación y climatización tiene un costo de UF 150–350 (≈ CLP 3,9–9,1 millones) en equipamiento e instalación. El rango es amplio porque depende de si el local tiene climatización (solo ventilación es más barato), el nivel de acabado de los ductos (ductos metálicos vs. difusores de diseño) y si se integra control automático por CO₂. D&Z Building entrega cotización detallada con cálculo de ingeniería sin costo.',
  },
  {
    pregunta: '¿Qué certificaciones o normas aplican a la ventilación de centros deportivos en Chile?',
    respuesta: 'En Chile, la ventilación de centros deportivos está regulada por: (1) DS 594 del MINSAL, que establece condiciones mínimas de temperatura, renovación de aire y ventilación en lugares de trabajo (aplica a vestuarios, salas de instructores y zonas de servicio); (2) Ordenanza General de Urbanismo y Construcción (OGUC), que establece ventilación mínima en cada tipo de recinto; (3) NCh 1993/1 (ventilación de locales); y (4) normas ASHRAE 62.1 como referencia técnica internacional adoptada en proyectos de mayor escala. D&Z Building diseña según las normas locales e ASHRAE.',
  },
  {
    pregunta: '¿Se puede climatizar una cancha de padel o tenis cubierta sin afectar el juego?',
    respuesta: 'Sí, con un diseño adecuado. Los sistemas de desplazamiento de aire perimetral (air displacement ventilation) o los difusores de baja velocidad ubicados en el perímetro superior de la cancha suministran aire a baja velocidad (< 0,5 m/s en la zona perimetral, < 0,2 m/s en la zona de juego a 1 m de altura), sin generar corrientes perceptibles en la trayectoria de la pelota. El ruido del sistema también es crítico: se seleccionan unidades con nivel NC-35 o menor para no interferir con el juego. D&Z Building ha diseñado climatización para canchas de padel y squash en Santiago y provincias.',
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
        { '@type': 'ListItem', position: 3, name: 'Centros Deportivos', item: `${siteUrl}/sectores/centros-deportivos/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/centros-deportivos/#service`,
      name: 'Climatización para Centros Deportivos y Gimnasios Chile',
      description: 'Diseño, instalación y mantención de sistemas HVAC para centros deportivos en Chile: piscinas cubiertas, gimnasios, vestuarios, pabellones y canchas cubiertas.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Sports Facility HVAC',
      url: `${siteUrl}/sectores/centros-deportivos/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/centros-deportivos/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorCentrosDeportivosPage() {
  return (
    <>
      <Script id="ld-sector-centros-deportivos" type="application/ld+json">
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
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
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
            <span>Centros Deportivos</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Piscinas Cubiertas · Gimnasios · Vestuarios · Canchas
          </p>
          <h1 className="sp-hero-title">HVAC para Centros<br />Deportivos en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Deshumidificación de piscinas cubiertas, ventilación de alta renovación en gimnasios,
            control de CO₂ y DS 594 para vestuarios. Diseño e instalación en centros deportivos,
            fitness y clubes en Chile.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta sp-hero-cta-outline">Cotizar proyecto</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--dim)', marginTop: 6, maxWidth: 200, lineHeight: 1.4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Recintos que climatizamos en centros deportivos
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((aplic, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {aplic.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {aplic.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {aplic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="sp-section" style={{ paddingTop: 0 }}>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 'clamp(24px,3vw,40px)', maxWidth: 720 }}>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
              Ingeniería sin costo
            </p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2vw,26px)', margin: '0 0 12px', color: 'var(--text)' }}>
              Cotización con cálculo de ingeniería incluido
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.65, margin: '0 0 20px' }}>
              Cuéntenos el tipo de recinto (piscina, gimnasio, cancha), superficie y ubicación.
              Preparamos una propuesta técnica con selección de equipos y estimación de costo.
            </p>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">
              Solicitar cotización
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Piscinas, gimnasios y normativa deportiva
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

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un centro deportivo o gimnasio?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de recinto, superficie y ubicación. Evaluamos el proyecto y
            respondemos en 48–72 horas con una propuesta técnica.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
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
