import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Hospitales y Clínicas en Chile — HVAC Sector Salud',

  description:
    'Especialistas en HVAC para el sector salud en Chile. Pabellones quirúrgicos, UCI, salas limpias y áreas críticas con control de presión diferencial, filtración HEPA y cumplimiento normativa ISP/MINSAL.',
  alternates: {
    canonical: `${siteUrl}/sectores/salud/`,
    languages: {
      es: `${siteUrl}/sectores/salud/`,
      en: `${siteUrl}/en/sectors/health/`,
    },
  },
  openGraph: {
    title: 'HVAC para Hospitales y Clínicas Chile | D&Z Building',
    description:
      'Climatización de precisión para pabellones quirúrgicos, UCI, salas limpias y áreas críticas. Normativa ISP/MINSAL. Modelamiento BIM HVAC. Cobertura nacional.',
    url: `${siteUrl}/sectores/salud/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const AREAS = [
  {
    titulo: 'Pabellones Quirúrgicos',
    norma: 'ISO 5 / Clase 100',
    desc: 'Sistemas de flujo laminar unidireccional con filtración HEPA H14, control de temperatura ±0.5°C, humedad relativa 45–55% HR, y presión positiva mínima de +8 Pa respecto a zonas adyacentes. Cumplimiento de Res. Exenta N°283 MINSAL.',
  },
  {
    titulo: 'Unidades de Cuidados Intensivos (UCI)',
    norma: 'ISO 7 / Clase 10.000',
    desc: 'Ventilación con al menos 6 renovaciones de aire fresco por hora, filtración F7+H13, presión positiva configurable a negativa para aislamientos infecciosos, y monitoreo continuo de temperatura (21–24°C) y humedad (40–60% HR).',
  },
  {
    titulo: 'Salas de Aislamiento de Infecciosos',
    norma: 'Presión negativa verificada',
    desc: 'Habitaciones de presión negativa (-8 Pa) con antecámara de transición a presión neutra, extracción de aire por sistemas HEPA de 100% retorno, y alarmas de presión diferencial en tiempo real para enfermería y control central.',
  },
  {
    titulo: 'Farmacia y Laboratorio Clínico',
    norma: 'ISO 7–8 / BPF',
    desc: 'Salas limpias de preparación estéril con flujo laminar, temperatura estable (18–22°C), humedad controlada (<55% HR) y diferencial de presión positivo. Diseño según Buenas Prácticas de Fabricación (BPF) para preparados estériles.',
  },
  {
    titulo: 'Áreas de Diagnóstico por Imágenes',
    norma: 'Temperatura de equipo',
    desc: 'Las salas de RM, TC y PET-CT requieren control estricto de temperatura (18–22°C) para proteger los imanes y detectores. Usamos unidades de precisión de bajo nivel de ruido (< 45 dB) para no interferir con el equipamiento.',
  },
  {
    titulo: 'Morgue y Patología',
    norma: 'T ≤ 10°C, extracción forzada',
    desc: 'Sistemas de refrigeración específicos para cámaras mortuorias (T 2–6°C), salas de autopsia con extracción forzada de 10 renovaciones/hora y presión negativa para contención de aerosoles.',
  },
]

const FAQ = [
  {
    pregunta: '¿Qué normativa rige la climatización de pabellones quirúrgicos en Chile?',
    respuesta: 'Los pabellones quirúrgicos en Chile se rigen principalmente por la Resolución Exenta N°283 del MINSAL ("Manual de Normas para Establecimientos Hospitalarios"), que establece requisitos de caudal de aire, clasificación de salas limpias, diferenciales de presión y filtración. Adicionalmente, se aplican las normas ASHRAE 170 (Healthcare Facilities HVAC) y las guías ISO 14644 para salas limpias.',
  },
  {
    pregunta: '¿Qué es la clasificación ISO de una sala limpia y cómo se logra?',
    respuesta: 'La clasificación ISO de una sala limpia indica la concentración máxima de partículas por metro cúbico. Un pabellón quirúrgico típico requiere ISO 5 (máximo 3.520 partículas ≥ 0.5 μm/m³) en la zona de campo operatorio. Esto se logra con flujo laminar unidireccional, filtración HEPA H14, número adecuado de renovaciones de aire (típicamente 20–30 vol/h) y control de ingreso de personal.',
  },
  {
    pregunta: '¿Cuánto cuesta climatizar un pabellón quirúrgico en Chile?',
    respuesta: 'Un pabellón quirúrgico de tamaño estándar (50–80 m²) con sistema de flujo laminar, filtración HEPA H14, control diferencial de presión y monitoreo tiene un costo de instalación de UF 1.500–4.000 dependiendo de la configuración y las obras civiles existentes. Los proyectos de remodelación son más costosos que nuevas construcciones por las restricciones de obra en área hospitalaria activa.',
  },
  {
    pregunta: '¿Pueden hacer el modelamiento BIM para un proyecto hospitalario?',
    respuesta: 'Sí. Ofrecemos modelamiento BIM HVAC completo (LOD 300–400) para proyectos hospitalarios, incluyendo coordinación con las especialidades de arquitectura, estructura, eléctrica, gases medicinales y sistemas de incendio. Trabajamos con Revit MEP y AutoCAD MEP, y entregamos modelos IFC compatibles con la plataforma BIM del mandante.',
  },
  {
    pregunta: '¿Pueden trabajar en recintos hospitalarios con actividad clínica activa?',
    respuesta: 'Sí. Tenemos experiencia en obras dentro de recintos hospitalarios activos, lo que requiere protocolos estrictos: cierre de zonas de trabajo, barreras de polvo, trabajo nocturno o en fines de semana para no interrumpir la operación clínica, y coordinación con el equipo de epidemiología del establecimiento para evitar contaminación cruzada durante la instalación.',
  },
  {
    pregunta: '¿Ofrecen mantención preventiva para HVAC hospitalario?',
    respuesta: 'Sí. Ofrecemos planes de mantención preventiva mensual o trimestral específicos para entornos hospitalarios: cambio de filtros HEPA y pre-filtros, calibración de sensores de presión diferencial, verificación de caudales, inspección de drenajes y bandejas de condensados (control de Legionella), y emisión de informes técnicos para la Unidad de Gestión de Calidad y el programa de control de infecciones asociadas a la atención en salud (IAAS).',
  },
  {
    pregunta: '¿Cuál es el plazo típico de un proyecto de HVAC para una clínica?',
    respuesta: 'Una clínica mediana (10–30 pabellones y camas UCI) con sistema completo nuevo tiene un plazo de ingeniería de 4–8 semanas y construcción de 3–6 meses según complejidad. Proyectos de ampliación o remodelación parcial pueden ejecutarse en plazos menores, sectorialmente, para no interrumpir la operación del establecimiento.',
  },
  {
    pregunta: '¿Trabajan con hospitales públicos y privados?',
    respuesta: 'Sí. Tenemos experiencia tanto en el sistema de salud público (hospitales del Servicio de Salud, consultorios de atención primaria) como en el sector privado (clínicas, centros médicos, laboratorios). Manejamos los procesos de licitación pública (Chile Compra/Mercado Público) y contratos privados.',
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
        { '@type': 'ListItem', position: 3, name: 'Sector Salud', item: `${siteUrl}/sectores/salud/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/salud/#service`,
      name: 'Climatización HVAC para Hospitales y Clínicas — Chile',
      description: 'Diseño, ingeniería BIM, instalación y mantención de sistemas HVAC para el sector salud en Chile: pabellones quirúrgicos, UCI, salas limpias, farmacia y laboratorios.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Healthcare HVAC',
      url: `${siteUrl}/sectores/salud/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/salud/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorSaludPage() {
  return (
    <>
      <Script id="ld-sector-salud" type="application/ld+json">
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
            <span>Salud</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Hospitales, Clínicas y Centros Médicos
          </p>
          <h1 className="sp-hero-title">HVAC para el Sector Salud<br />en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Pabellones quirúrgicos, UCI, salas limpias e instalaciones críticas con control
            de presión diferencial, filtración HEPA y cumplimiento de normativa ISP/MINSAL.
            Modelamiento BIM HVAC y mantención preventiva hospitalaria.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/#contacto" className="sp-hero-cta sp-hero-cta-outline">Hablar con un especialista</Link>
          </div>
        </div>

        {/* Areas */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Áreas de aplicación
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Cada área, sus requisitos técnicos
          </h2>
          <div className="sp-aplic-grid">
            {AREAS.map((a, i) => (
              <div key={i} className="sp-aplic-item">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
                    {a.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)', whiteSpace: 'nowrap' }}>
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

        {/* BIM callout */}
        <div style={{ padding: 'clamp(28px,3.5vw,48px) clamp(20px,6vw,96px)', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 580 }}>
              <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
                Modelamiento BIM HVAC
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.5vw,18px)', color: 'var(--text)', margin: '0 0 10px' }}>
                Los proyectos hospitalarios requieren coordinación BIM con arquitectura, estructura, gases medicinales y sistemas de incendio.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                Trabajamos con Revit MEP y entregamos modelos IFC (LOD 300–400) para integración con la plataforma BIM del mandante o del MINVU/MINSAL.
              </p>
            </div>
            <Link href="/?servicio=asesoria#contacto" className="sp-hero-cta">
              Consultar BIM HVAC →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Normativa, costos y procesos
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
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector Data Centers →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Primer paso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cuéntenos su proyecto de salud
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Asesoría técnica y cotización orientativa gratuita.
            Ingeniería de detalle y BIM HVAC disponibles para etapas de licitación.
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
