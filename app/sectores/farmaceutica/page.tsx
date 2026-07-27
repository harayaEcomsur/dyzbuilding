import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Climatización para Industria Farmacéutica Chile',

  description:
    'Sistemas HVAC para salas limpias GMP, laboratorios farmacéuticos y plantas de manufactura en Chile: presión diferencial, ISO 7-8, validación IQ/OQ/PQ y certificación ISP.',
  alternates: {
    canonical: `${siteUrl}/sectores/farmaceutica/`,
    languages: {
      es: `${siteUrl}/sectores/farmaceutica/`,
      en: `${siteUrl}/en/sectors/pharmaceutical/`,
    },
  },
  openGraph: {
    title: 'HVAC GMP para Laboratorios Farmacéuticos Chile | D&Z Building',
    description:
      'Climatización de salas limpias ISO 7-8, presión positiva/negativa, temperatura ±0,5°C, humedad ±5% HR y documentación para validación GMP e inspección ISP.',
    url: `${siteUrl}/sectores/farmaceutica/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const APLICACIONES = [
  {
    titulo: 'Salas Limpias de Manufactura API',
    subtitulo: 'ISO 7 (clase 10.000) · Presión positiva · ±0,5°C',
    desc: 'La síntesis de principios activos farmacéuticos (API) requiere salas limpias ISO 7 o ISO 8 con presión positiva respecto a pasillos, temperatura controlada ±0,5°C y humedad relativa ±5%. D&Z Building diseña sistemas HVAC con manejadoras de aire de precisión, filtración HEPA H14 y cascadas de presión documentadas para validación GMP.',
  },
  {
    titulo: 'Áreas de Tableteado y Encapsulado',
    subtitulo: 'Control de polvo · 40–60% HR · Ventilación 20 reh/h',
    desc: 'El tableteado de comprimidos y el encapsulado generan polvo de API que puede ser tóxico o alergénico. El sistema HVAC debe controlar la dispersión de polvo mediante presión negativa local, alta tasa de ventilación (15–20 renovaciones/hora) y filtros HEPA en el retorno. La humedad relativa (40–60% HR) afecta directamente la calidad del comprimido — variaciones >5% pueden causar friabilidad o adhesión al punzón.',
  },
  {
    titulo: 'Salas de Recubrimiento (Coating)',
    subtitulo: 'Alta temperatura · 60°C · Control solventes orgánicos',
    desc: 'El proceso de recubrimiento de comprimidos (film coating, sugar coating) trabaja con solventes orgánicos y altas temperaturas de proceso (50–70°C). El HVAC debe manejar el calor del proceso, la extracción de vapores de solvente por encima del LEL, y el suministro de aire seco precalentado. D&Z Building diseña sistemas con recuperación de calor y control de vapores conforme a la NCh 2635 y ATEX.',
  },
  {
    titulo: 'Áreas de Envasado Primario y Secundario',
    subtitulo: 'ISO 8 (clase 100.000) · Libre de partículas',
    desc: 'El envasado primario (contacto directo con el producto: blísters, ampollas, viales) requiere ISO 8 mínimo, con control de temperatura y humedad para mantener la integridad del envase. El envasado secundario (cajas, estuches) tiene requisitos menos exigentes pero requiere control de temperatura y humedad para la impresión de etiquetas y el correcto sellado de cartones.',
  },
  {
    titulo: 'Laboratorios de Control de Calidad',
    subtitulo: 'CRHV estabilidad · 25°C/60% HR · 40°C/75% HR',
    desc: 'Las cámaras de estabilidad ICH (condiciones Q1A: 25°C/60% HR a largo plazo, 40°C/75% HR aceleradas) son un requisito regulatorio para registrar medicamentos en Chile. D&Z Building instala cámaras walk-in de estabilidad con control de temperatura ±0,5°C y humedad ±3% HR, con monitoreo 24/7 y alarmas compatibles con las guías ICH Q1A, Q1B y Q1D.',
  },
  {
    titulo: 'Documentación IQ/OQ/PQ y Validación ISP',
    subtitulo: 'Protocolos de calificación · Registros GMP',
    desc: 'La validación del sistema HVAC (IQ: calificación de instalación; OQ: calificación operacional; PQ: calificación de desempeño) es obligatoria para la habilitación ante el ISP. D&Z Building entrega protocolos de validación completos: planos as-built, certificados de calibración de sensores, pruebas de humo para visualización de flujos de aire, recuento de partículas y diferenciales de presión documentados.',
  },
]

const STATS = [
  { valor: 'ISO 7-8', etiqueta: 'Clasificación sala limpia GMP' },
  { valor: '±0,5°C', etiqueta: 'Control de temperatura de precisión' },
  { valor: 'IQ/OQ/PQ', etiqueta: 'Documentación de validación ISP' },
  { valor: 'HEPA H14', etiqueta: 'Eficiencia de filtración' },
]

const FAQ = [
  {
    pregunta: '¿Qué clasificación de sala limpia necesita un laboratorio farmacéutico en Chile?',
    respuesta: 'Las guías GMP de la OMS (TRS 961) y los requisitos del ISP establecen las clasificaciones según el tipo de proceso: Zona A (ISO 5, clase 100) para llenado aséptico de inyectables; Zona B (ISO 7, clase 10.000) para manufactura aséptica de fondo; Zona C (ISO 8, clase 100.000) para etapas menos críticas de manufactura aséptica; Zona D (aire controlado) para preparación de materiales. La mayoría de los laboratorios de sólidos en Chile opera en Zonas C y D. D&Z Building asesora en la clasificación según el proceso y entrega el protocolo de validación.',
  },
  {
    pregunta: '¿Cuánto cuesta implementar una sala limpia ISO 8 en Chile?',
    respuesta: 'Una sala limpia ISO 8 (clase 100.000) de 100 m² tiene un costo total (construcción, HVAC, validación) de UF 1.500–4.000 (≈ USD 49.500–132.000) dependiendo de los materiales de las paredes, nivel de control de temperatura y humedad, y documentación de validación requerida. El sistema HVAC representa 40–55% del costo total. Para salas ISO 7 (clase 10.000), el costo asciende a UF 3.000–8.000 por la mayor tasa de ventilación y filtración HEPA más exigente.',
  },
  {
    pregunta: '¿Qué diferencia hay entre presión positiva y negativa en una sala farmacéutica?',
    respuesta: 'La presión positiva (sala a mayor presión que el pasillo) se usa en zonas de manufactura estándar para evitar la entrada de contaminantes exteriores hacia el producto. La presión negativa (sala a menor presión que el pasillo) se usa en áreas con APIs altamente potentes, tóxicos o alergénicos, para contener las partículas dentro de la zona de proceso y proteger al personal y a otras áreas. El diferencial de presión mínimo recomendado por GMP es 12,5 Pa. D&Z Building diseña cascadas de presión que garantizan el diferencial en todas las condiciones de operación, incluyendo apertura de puertas.',
  },
  {
    pregunta: '¿Con qué frecuencia debe recertificarse una sala limpia farmacéutica en Chile?',
    respuesta: 'La ISO 14644-2 recomienda recertificación anual para ISO 7-8 (conteo de partículas, prueba de integridad de filtros HEPA). El ISP exige recertificación siempre que haya cambios en el sistema HVAC, modificaciones a la sala, o cuando la PQ sea parte de un expediente de registro. Además, el monitoreo continuo (temperatura, humedad, presión diferencial) debe realizarse con sensores calibrados anualmente. D&Z Building ofrece contratos de mantención y recertificación anual con entrega de informe para el ISP.',
  },
  {
    pregunta: '¿Qué es la validación IQ/OQ/PQ de un sistema HVAC farmacéutico?',
    respuesta: 'IQ (Installation Qualification) verifica que el sistema fue instalado según los planos y especificaciones de diseño: equipos, materiales, conexiones y calibración inicial. OQ (Operational Qualification) verifica que el sistema opera dentro de los parámetros especificados bajo condiciones de vacío y carga: temperatura, humedad, caudal, presión diferencial y conteo de partículas. PQ (Performance Qualification) verifica que el sistema mantiene los parámetros de manera reproducible durante el proceso real de manufactura. D&Z Building elabora los tres protocolos con referencia a la guía ISPE HVAC y los requisitos del ISP.',
  },
  {
    pregunta: '¿Puede D&Z Building trabajar con laboratorios que ya tienen una sala limpia existente?',
    respuesta: 'Sí. D&Z Building realiza auditorías técnicas de sistemas HVAC existentes: revisión de planos as-built, medición de caudales y presiones, prueba de integridad de filtros HEPA, mapeo de temperatura y humedad. Si el sistema requiere actualización para cumplir las exigencias actuales del ISP (por ejemplo, por un cambio en las guías GMP o un nuevo proceso), D&Z Building elabora el plan de mejora y entrega la documentación de re-validación.',
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
        { '@type': 'ListItem', position: 3, name: 'Farmacéutica', item: `${siteUrl}/sectores/farmaceutica/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/sectores/farmaceutica/#service`,
      name: 'Climatización para Industria Farmacéutica Chile',
      description: 'Diseño, instalación y validación de sistemas HVAC GMP para salas limpias, laboratorios farmacéuticos y plantas de manufactura en Chile, con documentación IQ/OQ/PQ para certificación ISP.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Pharmaceutical HVAC GMP',
      url: `${siteUrl}/sectores/farmaceutica/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/sectores/farmaceutica/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function SectorFarmaceuticaPage() {
  return (
    <>
      <Script id="ld-sector-farmaceutica" type="application/ld+json">
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
            <span>Farmacéutica</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Sector · Salas Limpias GMP · Laboratorios · Manufactura Farmacéutica
          </p>
          <h1 className="sp-hero-title">HVAC GMP para la Industria<br />Farmacéutica en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Sistemas de climatización para salas limpias ISO 7-8, áreas de manufactura GMP
            y laboratorios farmacéuticos en Chile. Presión diferencial documentada, filtración
            HEPA H14 y validación IQ/OQ/PQ para certificación ISP.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">Solicitar asesoría técnica</Link>
            <Link href="/?servicio=mantenimiento-preventivo#contacto" className="sp-hero-cta sp-hero-cta-outline">Recertificación y mantención</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(18px,2vw,24px) clamp(20px,6vw,96px)', display: 'flex', gap: 32, flexWrap: 'wrap', background: 'var(--bg2)' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 'clamp(18px,2.2vw,28px)', color: 'var(--accent)', letterSpacing: '-.01em', lineHeight: 1 }}>
                {s.valor}
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', color: 'var(--text)', marginTop: 4 }}>{s.etiqueta}</div>
            </div>
          ))}
        </div>

        {/* Aplicaciones */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Aplicaciones
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Áreas que climatizamos en plantas farmacéuticas
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
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 12px' }}>
              ¿Necesita diseñar una sala limpia?
            </p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(18px,2vw,26px)', margin: '0 0 12px', color: 'var(--text)' }}>
              Diseño GMP con documentación para validación ISP
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', lineHeight: 1.65, margin: '0 0 20px' }}>
              Elaboramos el diseño HVAC de su sala limpia con memorias de cálculo, planos de
              ingeniería, especificaciones de equipos y el protocolo IQ/OQ/PQ completo para
              presentación ante el ISP.
            </p>
            <Link href="/?servicio=climatizacion-vrf#contacto" className="sp-hero-cta">
              Cotizar diseño de sala limpia
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 32px', color: 'var(--text)' }}>
            Clasificación, costos y validación GMP
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
              Sistemas VRF de precisión →
            </Link>
            <Link href="/servicios/mantenimiento-preventivo" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Mantención preventiva →
            </Link>
            <Link href="/servicios/proyectos-llave-en-mano/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Proyectos llave en mano →
            </Link>
            <Link href="/sectores/salud/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Sector salud →
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            ¿Tiene un proyecto farmacéutico?
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Asesoría técnica gratuita
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Cuéntenos el tipo de proceso, clasificación de sala requerida y los requisitos del ISP.
            Evaluamos el proyecto y respondemos en 48–72 horas con una propuesta técnica.
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
