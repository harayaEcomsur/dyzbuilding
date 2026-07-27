import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización y Ventilación para Laboratorios y Centros de I+D Chile',

  description:
    'Sistemas HVAC para laboratorios: presión negativa/positiva, ventilación de campanas extractoras, control de humedad ±2% HR, cleanrooms ISO 14644 y cumplimiento MINSAL DS 594 y resolución 510/99.',
  alternates: {
    canonical: `${siteUrl}/sectores/laboratorios-centros-id/`,
    languages: {
      es: `${siteUrl}/sectores/laboratorios-centros-id/`,
      en: `${siteUrl}/en/sectors/laboratories/`,
    },
  },
  openGraph: {
    title: 'HVAC para Laboratorios Chile — Presión Negativa, Cleanrooms, Campanas Extractoras',
    description:
      'Diseño e instalación de sistemas de climatización y ventilación para laboratorios de análisis, I+D farmacéutico, laboratorios de bioseguridad y salas limpias en Chile.',
    url: `${siteUrl}/sectores/laboratorios-centros-id/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Ventilación de Campanas Extractoras',
    subtitulo: 'ANSI/ASHRAE 110 · Caudal mínimo 0,5 m/s en la cara',
    desc: 'Las campanas de laboratorio (chemical fume hoods) requieren sistemas de extracción con caudal variable (VAV) para mantener la velocidad facial mínima de 0,5 m/s independiente de la posición del sash. D&Z Building diseña los ductos de extracción en acero inoxidable o PVC antisolvente según los agentes manejados, los ventiladores de extracción con materiales resistentes a ácidos (polipropileno o fibra de vidrio), y el aire de reposición (make-up air) calefaccionado o enfriado para compensar el volumen extraído sin crear corrientes sobre la campana.',
  },
  {
    titulo: 'Control de Presión Diferencial',
    subtitulo: 'Laboratorios BSL-2/3 · Presión negativa −12,5 Pa',
    desc: 'Los laboratorios de bioseguridad nivel 2 y 3 (BSL-2/3) deben mantenerse en presión negativa respecto a los corredores, evitando la fuga de bioaerosoles al exterior. D&Z Building instala sistemas de control de presión diferencial con transductores de precisión (±0,5 Pa de resolución), controladores DDC y válvulas de caudal variable de respuesta rápida (<2 segundos). El sistema mantiene la cascada de presiones (corredor → ante-sala → laboratorio) conforme a CDC/NIH BMBL 6ª edición y verifica la integridad con pruebas de humo (smoke pencil).',
  },
  {
    titulo: 'Salas Limpias (Cleanrooms)',
    subtitulo: 'ISO 14644-1 · Clase ISO 5–8 · 20–600 ACH',
    desc: 'Las salas limpias para fabricación farmacéutica, envasado estéril, y electrónica de precisión requieren control simultáneo de partículas, temperatura (±0,5°C), humedad relativa (±2% HR), y presión diferencial. D&Z Building diseña el sistema de recirculación con filtros HEPA H14 (eficiencia 99,995%), las unidades manejadoras de aire con deshumidificación por enfriamiento + rehumidificación eléctrica para control fino, y el layout de los difusores de flujo laminar unidireccional. El diseño sigue los estándares ISO 14644-1 e ISPE Baseline Guide (GMP).',
  },
  {
    titulo: 'Control de Temperatura y Humedad de Precisión',
    subtitulo: '±0,5°C · ±2% HR · Laboratorios de calibración y metrología',
    desc: 'Los laboratorios de calibración (acreditados por INN o ENAC), ensayos de materiales (IDIEM), y estaciones meteorológicas requieren control de temperatura de ±0,5°C y humedad relativa de ±2% HR durante 24/7/365. D&Z Building utiliza unidades de precisión (CRAC/CRAH units), con sistemas redundantes N+1. La instalación incluye monitoreo continuo con sensores calibrados trazables al Sistema Internacional y registro de datos conforme a NCh ISO 17025.',
  },
  {
    titulo: 'Extracción de Laboratorios de Química Analítica',
    subtitulo: 'Solventes · Ácidos · Percloro · Escape de emergencia',
    desc: 'Los laboratorios que trabajan con solventes inflamables (etanol, acetona, hexano) o ácidos concentrados (sulfúrico, nítrico, perclórico) requieren extractores antideflagrantes con materiales resistentes a la corrosión. D&Z Building diseña los sistemas conforme a NFPA 45: ductos de PVC o polipropileno para ácidos, ductos de acero inox 316 para solventes halogenados, separación de corrientes de extracción incompatibles, y neutralizadores antes de la descarga al exterior.',
  },
  {
    titulo: 'Laboratorios de Análisis de Alimentos (SEREMI)',
    subtitulo: 'HACCP · Control de contaminación cruzada · Flujo unidireccional',
    desc: 'Los laboratorios de análisis microbiológico y fisicoquímico de alimentos acreditados por el SEREMI de Salud deben cumplir la resolución MINSAL 510/99. D&Z Building diseña la ventilación para separar las zonas de "sucio" (recepción de muestras, preparación) y "limpio" (análisis microbiológico, medios de cultivo) mediante presiones diferenciales y flujo unidireccional. Los sistemas incluyen autoclave con extracción independiente y zona de lavado con extracción de vapores.',
  },
]

const STATS = [
  { valor: 'ISO 14644', etiqueta: 'Estándar internacional para clasificación de salas limpias' },
  { valor: '−12,5 Pa', etiqueta: 'Presión negativa mínima para laboratorios BSL-2/3' },
  { valor: '0,5 m/s', etiqueta: 'Velocidad facial mínima en campana extractora (ASHRAE 110)' },
  { valor: '±0,5°C', etiqueta: 'Precisión de control en laboratorios de calibración' },
]

const FAQ = [
  {
    pregunta: '¿Cuántos cambios de aire por hora necesita un laboratorio BSL-2?',
    respuesta: 'Un laboratorio de bioseguridad nivel 2 (BSL-2) requiere un mínimo de 6–12 cambios de aire por hora (ACH) de ventilación mecánica, sin recirculación del aire hacia otras zonas del edificio. Las directrices CDC/NIH BMBL 6ª edición recomiendan 10–12 ACH para laboratorios de patógenos. Para laboratorios BSL-3, el mínimo es 12–15 ACH con 100% de extracción directa al exterior y filtración HEPA en el escape. D&Z Building calcula los ACH según la carga de contaminantes, el número de campanas, y la superficie del laboratorio.',
  },
  {
    pregunta: '¿Qué regulación chilena aplica a la ventilación de laboratorios?',
    respuesta: 'La ventilación de laboratorios en Chile está regida por varias normas simultáneas: DS 594 (MINSAL) para condiciones de trabajo generales, incluyendo concentraciones máximas de contaminantes en el aire del trabajo; Resolución MINSAL 510/99 para laboratorios clínicos y ambientales; NCh 1993 para ventilación general; y NFPA 45 para laboratorios con líquidos inflamables (referenciada por Bomberos). Para laboratorios farmacéuticos, aplica además el Manual de Buenas Prácticas de Manufactura (BPM) del ISP.',
  },
  {
    pregunta: '¿Puedo recircular el aire de un laboratorio para ahorrar energía?',
    respuesta: 'Depende del tipo de laboratorio y los agentes manejados. Para laboratorios de bioseguridad BSL-2/3, laboratorios con solventes inflamables o agentes carcinogénicos, y cualquier área con campanas extractoras activas, la recirculación está prohibida: el 100% del aire debe extraerse al exterior. Para laboratorios de electrónica, metrología o análisis físico sin agentes peligrosos, la recirculación con filtros HEPA y carbón activado puede lograr ahorros de 30–50% en energía de climatización.',
  },
  {
    pregunta: '¿Qué es un sistema VAV y por qué se usa en ventilación de laboratorios?',
    respuesta: 'VAV (Variable Air Volume) varía el caudal de aire según la demanda en tiempo real. En laboratorios, el VAV es esencial para las campanas extractoras: cuando el sash (vidrío deslizante) baja, la campana necesita menos extracción para mantener la velocidad facial de 0,5 m/s. Si el sistema fuerza el caudal máximo, el exceso crea turbulencia que contamina la campana. Los sistemas VAV para laboratorios incluyen sensores de posición del sash, controladores de caudal por caja VAV, y un controlador maestro que coordina la extracción de todas las campanas con el sistema de make-up air.',
  },
  {
    pregunta: '¿Cuánto cuesta instalar HVAC en un laboratorio de 200 m²?',
    respuesta: 'El costo varía enormemente según las especificaciones: un laboratorio de análisis de alimentos básico puede instalarse por UF 80–150 (≈ CLP 2–4 millones); un laboratorio de química analítica con 4 campanas extractoras y control de presión diferencial, UF 200–400 (≈ CLP 5,2–10,4 millones); un laboratorio BSL-2 con sistema de presión negativa completo, UF 350–600; una sala limpia Clase ISO 7 de 50 m², UF 400–800. Los costos de mantenimiento son más altos que en oficinas: los filtros HEPA y los sistemas de control de presión requieren calibración semestral o anual.',
  },
  {
    pregunta: '¿D&Z Building puede diseñar laboratorios bajo estándar GMP (Buenas Prácticas de Manufactura)?',
    respuesta: 'Sí. D&Z Building tiene experiencia en el diseño HVAC de laboratorios de control de calidad farmacéutico bajo estándar GMP, incluyendo salas limpias de clasificación A/B/C/D según EU GMP Annex 1, sistemas de monitoreo continuo con registro conforme a 21 CFR Parte 11, y procedimientos de calificación DQ/IQ/OQ/PQ requeridos para la aprobación del ISP. Los diseños se documentan con memorias de cálculo según ASHRAE 62.1, ISO 14644-4 e ISPE Baseline Guide Vol. 3.',
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
        { '@type': 'ListItem', position: 3, name: 'Laboratorios y Centros de I+D', item: `${siteUrl}/sectores/laboratorios-centros-id/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/laboratorios-centros-id/#service`,
      name: 'Climatización para Laboratorios y Centros de I+D',
      description: 'Diseño, instalación y mantención de sistemas HVAC para laboratorios: presión negativa/positiva, ventilación de campanas extractoras, control de humedad de precisión, cleanrooms ISO 14644 y cumplimiento normativo MINSAL.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Laboratory HVAC',
      url: `${siteUrl}/sectores/laboratorios-centros-id/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/laboratorios-centros-id/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorLaboratoriosPage() {
  return (
    <>
      <Script id="ld-sector-laboratorios" type="application/ld+json">
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
            <span>Laboratorios y Centros de I+D</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Presión Diferencial · Cleanrooms · Campanas Extractoras
          </p>
          <h1 className="sp-hero-title">HVAC para Laboratorios<br />y Centros de I+D</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas de climatización y ventilación para laboratorios de análisis, I+D
            farmacéutico, laboratorios de bioseguridad y salas limpias. Control de presión
            diferencial, humedad de precisión y cumplimiento normativo MINSAL.
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
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4, maxWidth: 220 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Sistemas que diseñamos e instalamos en laboratorios
          </h2>
          <div className="sp-aplic-grid">
            {APLICACIONES.map((ap, i) => (
              <div key={i} className="sp-aplic-item">
                <div>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 4px' }}>
                    {ap.titulo}
                  </h3>
                  <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {ap.subtitulo}
                  </span>
                </div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {ap.desc}
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
            Normativa, presión diferencial y costos
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
            <Link href="/servicios/proyectos-llave-en-mano/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Proyectos llave en mano →
            </Link>
            <Link href="/servicios/climatizacion-vrf" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sistemas VRF →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/sectores/data-centers/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector data centers →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto de laboratorio?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de laboratorio, los agentes manejados y los requisitos normativos.
            Evaluamos el proyecto y respondemos en 48–72 horas con una propuesta técnica.
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
