import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export const metadata: Metadata = {
  title: 'Proyectos HVAC Llave en Mano en Chile — Climatización para Obras Nuevas',

  description:
    'Contratista HVAC llave en mano en Chile: ingeniería de detalle, BIM HVAC, suministro, instalación y puesta en marcha de sistemas de climatización, refrigeración y ventilación para obras comerciales e industriales.',
  alternates: {
    canonical: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
    languages: {
      es: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
      en: `${siteUrl}/en/services/turnkey-projects/`,
    },
  },
  openGraph: {
    title: 'Proyectos HVAC Llave en Mano Chile | D&Z Building',
    description:
      'Un solo contratista para ingeniería, suministro, instalación y puesta en marcha de tu sistema HVAC. Proyectos comerciales e industriales en Chile.',
    url: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
    locale: 'es_CL',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const FASES = [
  {
    num: '01',
    titulo: 'Levantamiento y Anteproyecto',
    desc: 'Visita técnica al recinto, análisis de cargas térmicas (método ASHRAE CLTD o software HAP/Trace700), y propuesta de sistema con alternativas tecnológicas y referencia de costos. Esta fase es gratuita para proyectos sobre UF 500.',
  },
  {
    num: '02',
    titulo: 'Ingeniería de Detalle y BIM',
    desc: 'Memoria de cálculo firmada por ingeniero, planos de distribución de equipos, trazado de ductos y tuberías en Revit MEP (LOD 300), coordinación de interferencias con estructura y otras especialidades, y especificaciones técnicas para licitación o permisos.',
  },
  {
    num: '03',
    titulo: 'Suministro de Equipos y Materiales',
    desc: 'Adquisición directa de equipos VRF, unidades manejadoras, chillers, condensadores, tableros de control y materiales de instalación. Trabajamos con fabricantes como Daikin, Mitsubishi Electric, LG y Carrier — sin margen de intermediario inflado.',
  },
  {
    num: '04',
    titulo: 'Instalación y Obra Civil Menor',
    desc: 'Montaje de equipos, instalación de ducterías y tuberías de refrigerante, cableado de control, obras civiles menores (perforaciones, bases de equipos, sellos cortafuego). Cuadrilla propia certificada — no subcontratamos la instalación.',
  },
  {
    num: '05',
    titulo: 'Puesta en Marcha y Commissioning',
    desc: 'Pruebas de hermeticidad, carga de refrigerante, balanceo de caudales de aire, programación de controladores y verificación de parámetros de diseño. Entregamos protocolo de commissioning firmado para la recepción de obra.',
  },
  {
    num: '06',
    titulo: 'Capacitación y Garantía',
    desc: 'Capacitación del personal de operación y mantención, entrega de manuales de operación y de mantención preventiva. Garantía de instalación de 12 meses. Vinculación a contrato de mantención preventiva si el cliente lo requiere.',
  },
]

const TIPOS_PROYECTO = [
  { tipo: 'Edificios de Oficinas', rango: 'UF 800–25.000', tech: 'VRF + HRV + BMS' },
  { tipo: 'Hoteles y Resorts', rango: 'UF 5.000–80.000', tech: 'Fan-coil + chiller + VRF suites' },
  { tipo: 'Clínicas y Centros Médicos', rango: 'UF 3.000–60.000', tech: 'HEPA + presión diferencial + redundancia' },
  { tipo: 'Supermercados y Retail', rango: 'UF 2.000–30.000', tech: 'VRF + refrigeración comercial integrada' },
  { tipo: 'Data Centers', rango: 'UF 10.000–200.000', tech: 'CRAC/CRAH + free cooling + redundancia N+1' },
  { tipo: 'Industria y Manufactura', rango: 'UF 1.500–50.000', tech: 'Ventilación industrial + splits + evap.' },
]

const FAQ = [
  {
    pregunta: '¿Qué incluye exactamente un proyecto llave en mano de HVAC?',
    respuesta: 'Un proyecto llave en mano incluye: ingeniería de detalle con memoria de cálculo (firmada por ingeniero), planos de distribución y especificaciones técnicas, suministro de todos los equipos y materiales, instalación completa (montaje, conexiones eléctricas de control, cañerías de refrigerante, ducterías), pruebas y commissioning, y capacitación del personal. Lo que no incluye es la obra civil mayor (tabiques, losas, estanques de agua) ni las instalaciones eléctricas de fuerza (alimentación a tableros), que son responsabilidad del mandante o del contratista general.',
  },
  {
    pregunta: '¿Cuánto demora en ejecutarse un proyecto HVAC llave en mano?',
    respuesta: 'Depende de la escala. Un proyecto de climatización para una oficina de 500–1.500 m² tarda 6–10 semanas (2 semanas ingeniería, 2–3 semanas lead time de equipos, 2–4 semanas instalación). Un hotel o clínica de escala media puede tomar 4–8 meses. Lo que más impacta el plazo es la disponibilidad de equipos importados (VRF, chillers) que tienen lead times de 8–16 semanas desde el fabricante en Asia.',
  },
  {
    pregunta: '¿Pueden participar en licitaciones de proyectos del sector público?',
    respuesta: 'Sí. Participamos en licitaciones de Mercado Público (Chile Compra) para proyectos de edificios públicos, establecimientos educacionales del MINEDUC y municipalidades. Tenemos experiencia en la preparación de propuestas técnicas y económicas según los requisitos de las bases de licitación, incluyendo memoria técnica, propuesta de solución, programa de trabajo y garantías.',
  },
  {
    pregunta: '¿Subcontratan la instalación o tienen cuadrilla propia?',
    respuesta: 'Tenemos cuadrilla propia para la instalación. No subcontratamos la mano de obra de instalación — creemos que la calidad del trabajo se controla mejor con personal propio. Nuestros instaladores están certificados en refrigeración y climatización, y conocen los estándares de calidad y seguridad que exige la puesta en marcha. Para proyectos de gran escala (hoteles) podemos complementar con personal de nuestra red de subcontratistas evaluados.',
  },
  {
    pregunta: '¿Qué garantías entrega D&Z Building en un proyecto llave en mano?',
    respuesta: 'Entregamos garantía de instalación de 12 meses (defectos de instalación, montaje y puesta en marcha) y tramitamos la garantía de fábrica de cada equipo (típicamente 2–5 años según fabricante). Para proyectos de infraestructura crítica (salas de servidores) podemos ofrecer SLA de mantención y respuesta técnica 24/7. Recomendamos vincular el proyecto a un contrato de mantención preventiva para mantener la garantía de fábrica vigente.',
  },
  {
    pregunta: '¿Pueden hacer proyectos fuera de la Región Metropolitana?',
    respuesta: 'Sí. Tenemos experiencia en proyectos en Antofagasta, La Serena/Coquimbo, Valparaíso, O\'Higgins, Maule, Bio-Bio, Araucanía y Magallanes. Para proyectos en regiones, los gastos de alojamiento y traslado del equipo técnico se contemplan en el presupuesto. El lead time de equipos es el mismo que en Santiago (los equipos se despachan directamente a la obra desde los distribuidores regionales o desde Santiago).',
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
        { '@type': 'ListItem', position: 3, name: 'Proyectos Llave en Mano', item: `${siteUrl}/servicios/proyectos-llave-en-mano/` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/servicios/proyectos-llave-en-mano/#service`,
      name: 'Proyectos HVAC Llave en Mano — Chile',
      description: 'Contratista HVAC llave en mano: ingeniería de detalle, BIM HVAC, suministro, instalación y commissioning de sistemas de climatización, refrigeración y ventilación para proyectos comerciales e industriales en Chile.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'D&Z Building SpA',
      },
      areaServed: { '@type': 'Country', name: 'Chile' },
      serviceType: 'Turnkey HVAC Projects',
      url: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/servicios/proyectos-llave-en-mano/#faq`,
      mainEntity: FAQ.map(f => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    },
  ],
}

export default function ProyectosLlaveEnManoPage() {
  return (
    <>
      <Script id="ld-proyectos" type="application/ld+json">
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
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta" style={{ fontSize: '11px' }}>
              Solicitar reunión técnica
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
            <span>Proyectos Llave en Mano</span>
          </div>
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            Servicio · Contratista HVAC · Obra Nueva · Remodelación
          </p>
          <h1 className="sp-hero-title">Proyectos HVAC<br />Llave en Mano en Chile</h1>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', maxWidth: 700, lineHeight: 1.65, margin: '0 0 28px' }}>
            Un solo contratista para ingeniería de detalle, BIM HVAC, suministro, instalación
            y puesta en marcha de tu sistema de climatización, refrigeración o ventilación.
            Proyectos comerciales e industriales desde UF 500.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta">Solicitar reunión técnica</Link>
            <Link href="/guias/precio-sistema-vrf-chile/" className="sp-hero-cta sp-hero-cta-outline">Guía de precios VRF</Link>
          </div>
        </div>

        {/* Tipos de proyecto */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ padding: 'clamp(20px,2.5vw,32px) clamp(20px,6vw,96px)' }}>
            <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 20px' }}>
              Tipos de proyecto y rangos referenciales (IVA excl.)
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1px', background: 'var(--border)' }}>
              {TIPOS_PROYECTO.map((t, i) => (
                <div key={i} style={{ background: 'var(--bg)', padding: '18px 16px' }}>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>
                    {t.tipo}
                  </div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '18px', color: 'var(--accent)', letterSpacing: '-.01em', marginBottom: 4 }}>
                    {t.rango}
                  </div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)' }}>
                    {t.tech}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '12px', color: 'var(--dim)', margin: '12px 0 0' }}>
              * Rangos referenciales según proyectos ejecutados 2022–2024. El costo final depende de las especificaciones técnicas, marca de equipos y condiciones de obra.
            </p>
          </div>
        </div>

        {/* Fases del proceso */}
        <div className="sp-section">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>
            Proceso
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(20px,2.5vw,30px)', margin: '0 0 40px', color: 'var(--text)' }}>
            De la ingeniería a la puesta en marcha
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {FASES.map((f) => (
              <div key={f.num} style={{ borderTop: '2px solid var(--border)', paddingTop: 20 }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  Fase {f.num}
                </div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '14px', fontWeight: 400, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text)', margin: '0 0 10px' }}>
                  {f.titulo}
                </h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
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
                Modelamos todos nuestros proyectos llave en mano en Revit MEP (LOD 300–400).
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '15px', color: 'var(--dim)', margin: 0 }}>
                La coordinación BIM reduce hasta un 25% los tiempos de montaje al detectar interferencias antes de la obra. Entregamos modelos IFC para integración con la plataforma BIM del arquitecto o del mandante. Ideal para proyectos donde el contratista general exige BIM.
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
            Alcance, plazos y garantías
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
            <Link href="/guias/precio-sistema-vrf-chile/" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 18px' }}>
              Guía de precios →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="sp-cta-bar">
          <p style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 14px' }}>
            El primer paso es sin costo
          </p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontSize: 'clamp(22px,2.8vw,36px)', margin: '0 0 14px', color: 'var(--text)' }}>
            Cuéntenos su proyecto
          </h2>
          <p style={{ color: 'var(--dim)', fontFamily: "'Outfit',sans-serif", margin: '0 0 28px', fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Para proyectos sobre UF 500, ofrecemos una reunión técnica y cotización orientativa
            sin compromiso. Necesitamos: tipo de recinto, superficie, número de pisos y uso.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/?servicio=llave-en-mano#contacto" className="sp-hero-cta">Solicitar reunión técnica</Link>
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
