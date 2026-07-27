import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Modelamiento BIM HVAC en Chile — Revit MEP LOD 300',

  description:
    'Modelamiento BIM HVAC para proyectos de climatización y ventilación en Chile: Revit MEP, LOD 300, coordinación con otras especialidades (estructuras, electricidad, sanitario) y detección de interferencias. Proyectos comerciales e industriales.',
  alternates: {
    canonical: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
    languages: {
      es: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
      en: `${siteUrl}/en/services/bim-hvac-modeling/`,
    },
  },
  openGraph: {
    title: 'BIM HVAC Chile — Revit MEP, LOD 300, Coordinación Multidisciplinaria | D&Z Building',
    description:
      'Modelamiento BIM para sistemas HVAC en Chile: Revit MEP LOD 300, coordinación de instalaciones MEP, detección de interferencias y exportación a IFC para BIM gerencial.',
    url: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const ENTREGABLES = [
  {
    titulo: 'Modelo 3D HVAC en Revit MEP',
    subtitulo: 'LOD 200–400 · Conductos, tuberías, equipos',
    desc: 'Modelamiento tridimensional de todos los sistemas HVAC en Autodesk Revit MEP: conductos de aire, tuberías de refrigerante, redes de agua helada o caliente, unidades interiores y exteriores, fan coils, UFAs, chillers. Nivel de detalle LOD 300 estándar (geometría, ubicación, orientación y cantidad definidas); LOD 400 disponible para fabricación y coordinación avanzada.',
  },
  {
    titulo: 'Coordinación MEP y Detección de Interferencias',
    subtitulo: 'Clash detection · Navisworks · BIM 360',
    desc: 'Coordinación con otras especialidades (estructural, eléctrica, sanitaria, seguridad) mediante revisión de interferencias (clash detection) con Autodesk Navisworks o BIM 360. Identificación y resolución de conflictos antes de la construcción — reducción de RFIs y cambios en obra. Reuniones BIM de coordinación con el equipo del proyecto.',
  },
  {
    titulo: 'Planimetría 2D Derivada del Modelo',
    subtitulo: 'Planos de planta, cortes, detalles, esquemas',
    desc: 'Extracción de planimetría 2D directamente del modelo 3D: plantas de distribución HVAC por piso, cortes y perfiles de salas de máquinas, detalles de conexión de equipos, esquemas isométricos de tuberías, y cuadros de equipos con especificaciones técnicas. Consistencia garantizada entre modelo 3D y planos 2D.',
  },
  {
    titulo: 'Cuantificación y Metrados desde BIM',
    subtitulo: 'Take-off · Quantities · Cómputos métricos',
    desc: 'Exportación de metrados y cómputos métricos directamente del modelo BIM: cantidades de conductos por sección y tramo, longitudes de tuberías por diámetro y material, unidades de equipos por tipo y capacidad, cantidad de difusores y grillas. Base directa para licitación y cotización, con trazabilidad total a elementos del modelo.',
  },
  {
    titulo: 'Exportación IFC y Compatibilidad OpenBIM',
    subtitulo: 'IFC 2x3 / IFC 4 · BIM gerencial · Coordinación abierta',
    desc: 'Exportación del modelo HVAC a formato IFC (Industry Foundation Classes) 2x3 o IFC 4 para integración con plataformas de BIM gerencial (BIM+, ACC, ProjectWise, Procore) y revisión por parte del BIM Manager o cliente. Cumplimiento de EIR (Employer Information Requirements) cuando el proyecto lo exige.',
  },
  {
    titulo: 'BIM para Licitaciones y Concursos Públicos',
    subtitulo: 'BIM en Mercado Público · MINVU · MOP',
    desc: 'El Estado de Chile exige BIM en proyectos públicos de más de UF 5.000 desde 2020, con cobertura creciente hacia proyectos menores. D&Z Building puede entregar el modelo BIM HVAC conforme al Plan BIM Chile (MINVU/MOP), incluyendo LOD requerido, CDE (Common Data Environment) y entregables según el BEP (BIM Execution Plan) del proyecto.',
  },
]

const STATS = [
  { valor: 'LOD 300', etiqueta: 'Nivel de detalle estándar en entrega' },
  { valor: 'Revit MEP', etiqueta: 'Herramienta principal de modelamiento' },
  { valor: 'IFC', etiqueta: 'Formato abierto para BIM gerencial' },
  { valor: 'Plan BIM Chile', etiqueta: 'Proyectos públicos MINVU / MOP' },
]

const FAQ = [
  {
    pregunta: '¿Qué es el modelamiento BIM HVAC?',
    respuesta: 'BIM HVAC (Building Information Modeling para sistemas de climatización) es el proceso de crear un modelo digital tridimensional e informado de todos los sistemas HVAC de un edificio: conductos de aire, tuberías de refrigerante o agua helada, equipos (chillers, fan coils, VRF), y sus atributos técnicos. A diferencia de los planos 2D tradicionales, el modelo BIM contiene geometría precisa, especificaciones de equipos, datos de fabricación y relaciones con otros sistemas del edificio. Esto permite detectar conflictos con otras especialidades antes de la construcción y reducir cambios y sobrecostos en obra.',
  },
  {
    pregunta: '¿Qué es LOD 300 en un modelo BIM HVAC?',
    respuesta: 'LOD (Level of Development o Level of Detail) es la escala que define cuánta información contiene un elemento del modelo BIM. LOD 300 significa que los elementos tienen geometría, ubicación, orientación, cantidad y tamaño definidos con precisión suficiente para coordinación con otras especialidades y extracción de metrados. LOD 200 es esquemático (solo forma aproximada). LOD 400 incluye detalles de fabricación. Para la mayoría de proyectos de diseño y coordinación, LOD 300 es el nivel estándar exigido.',
  },
  {
    pregunta: '¿El BIM HVAC reemplaza los planos 2D?',
    respuesta: 'No reemplaza los planos, sino que los genera. Los planos 2D (plantas, cortes, detalles) se extraen directamente del modelo 3D, garantizando consistencia total entre el modelo tridimensional y la planimetría aprobada para construcción. El modelo 3D es la fuente de verdad; los planos 2D son vistas del modelo. Este flujo elimina las discrepancias que ocurren cuando los planos 2D se dibujan manualmente sin modelo de referencia.',
  },
  {
    pregunta: '¿Qué proyectos en Chile exigen BIM?',
    respuesta: 'El Plan BIM Chile (MINVU/MOP) establece la adopción progresiva de BIM en proyectos públicos: desde 2020 es obligatorio en proyectos de edificación pública de más de UF 5.000; desde 2022, en proyectos de infraestructura pública mayor. Para proyectos privados, BIM lo exigen principalmente los dueños de proyectos internacionales, cadenas de retail, hoteles y centros comerciales que siguen estándares corporativos globales. El mercado privado chileno adopta BIM de forma voluntaria pero creciente.',
  },
  {
    pregunta: '¿Cuánto cuesta el modelamiento BIM HVAC en Chile?',
    respuesta: 'El costo depende del tamaño del proyecto y el LOD requerido. Para un piso de oficinas de 1.000 m² (LOD 300, sin coordinación MEP completa): UF 20–60. Para un edificio completo de 10 pisos con coordinación MEP full: UF 150–500. Para un proyecto industrial o de salud con exportación IFC y reuniones BIM de coordinación: UF 300–1.000+. El modelamiento BIM suele representar el 2–5% del honorario total de ingeniería HVAC del proyecto, y se recupera en reducción de cambios en obra.',
  },
  {
    pregunta: '¿Pueden hacer el BIM si el proyecto ya tiene modelo de arquitectura?',
    respuesta: 'Sí, es la situación más común. El arquitecto entrega el modelo arquitectónico en Revit o IFC, y D&Z Building modela el HVAC sobre esa base. Para coordinar con otras especialidades MEP (eléctrica, sanitaria), necesitamos los modelos de esas especialidades en Revit o IFC para ejecutar el clash detection. Si las otras especialidades no tienen modelo BIM, podemos igualmente modelar el HVAC sobre el modelo arquitectónico y coordinar 2D con las otras especialidades.',
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
        { '@type': 'ListItem', position: 3, name: 'Modelamiento BIM HVAC', item: `${siteUrl}/servicios/modelamiento-bim-hvac/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/servicios/modelamiento-bim-hvac/#service`,
      name: 'Modelamiento BIM HVAC en Chile — Revit MEP LOD 300',
      description: 'Modelamiento BIM para sistemas HVAC en Chile: Revit MEP LOD 300, coordinación de instalaciones MEP, detección de interferencias y exportación a IFC para BIM gerencial.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'BIM HVAC Modeling',
      url: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/servicios/modelamiento-bim-hvac/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function ServicioBimHvacPage() {
  return (
    <>
      <Script id="ld-bim-hvac" type="application/ld+json">
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
            <Link href="/?servicio=2#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar cotización
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header className="sp-hero">
          <div className="sp-breadcrumb">
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
            <span>›</span>
            <Link href="/servicios/" style={{ color: 'inherit', textDecoration: 'none' }}>Servicios</Link>
            <span>›</span>
            <span>Modelamiento BIM HVAC</span>
          </div>
          <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            Revit MEP · LOD 300 · Clash Detection · IFC · Plan BIM Chile
          </div>
          <h1>Modelamiento BIM HVAC<br />en Chile</h1>
          <p className="sp-hero-sub">
            Modelamiento tridimensional de sistemas HVAC en Revit MEP: conductos,
            tuberías, equipos y coordinación multidisciplinaria para proyectos
            comerciales, industriales y de salud en Chile.
          </p>
          <div className="sp-hero-ctas">
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Solicitar Cotización</Link>
            <Link href="/servicios/" className="sp-hero-cta-outline">Ver Servicios</Link>
          </div>
        </header>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)', background: 'var(--bg2)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1px', background: 'var(--border)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: 'var(--bg2)', padding: '20px 24px' }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(16px,2vw,22px)', fontWeight: 300, color: 'var(--accent)', marginBottom: 6, letterSpacing: '.02em' }}>
                  {s.valor}
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', lineHeight: 1.45 }}>
                  {s.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entregables */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Qué entregamos
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Del modelo 3D a los planos de construcción
          </h2>
          <div className="sp-aplic-grid">
            {ENTREGABLES.map((e, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {e.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {e.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {e.desc}
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
            BIM HVAC, LOD 300 y proyectos en Chile
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
            <Link href="/servicios/eficiencia-energetica" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Eficiencia Energética →
            </Link>
            <Link href="/servicios/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Todos los servicios →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Su proyecto requiere entregables BIM?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Solicite una cotización de modelamiento BIM HVAC
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Necesitamos: descripción del proyecto, número de pisos y m², especialidades a coordinar y LOD requerido.
            Con eso podemos dimensionar el alcance BIM y entregar una propuesta.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=2#contacto" className="sp-hero-cta">Solicitar cotización BIM HVAC</Link>
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
