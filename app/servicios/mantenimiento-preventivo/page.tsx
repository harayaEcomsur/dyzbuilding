import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import RevealSection from '@/components/RevealSection'
import FaqAccordion from '@/components/FaqAccordion'
import WhatsAppButton from '@/components/WhatsAppButton'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import { getSiteContent } from '@/lib/site-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'

export async function generateMetadata(): Promise<Metadata> {
  const c = await getSiteContent()
  return {
    title: `Mantención Preventiva de Climatización y Refrigeración en Chile`,

    description:
      'Planes de mantención preventiva para sistemas VRF, aire acondicionado y refrigeración comercial en Chile. Diagnóstico, limpieza y garantía de rendimiento. Empresa con 20 años de experiencia. Cotice aquí.',
    alternates: {
      canonical: `${siteUrl}/servicios/mantenimiento-preventivo/`,
      languages: {
        es: `${siteUrl}/servicios/mantenimiento-preventivo/`,
        en: `${siteUrl}/en/services/preventive-maintenance/`,
      },
    },
    openGraph: {
      title: `Mantención Preventiva Climatización Chile | ${c.empresa.nombre}`,
      description:
        'Planes de mantención preventiva para VRF, aire acondicionado y refrigeración en Chile. 20 años de experiencia. Cotización sin costo.',
      url: `${siteUrl}/servicios/mantenimiento-preventivo/`,
      siteName: c.empresa.nombre,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
      locale: 'es_CL',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

const INCLUYE = [
  {
    titulo: 'Limpieza de filtros y serpentines',
    desc: 'Limpieza de filtros de aire, serpentines del evaporador y condensador. Elimina bacterias, polvo y obstrucciones que reducen el rendimiento.',
    icon: (
      <>
        <rect key="a" x="2" y="8" width="14" height="9" rx=".5" />
        <rect key="b" x="20" y="8" width="14" height="9" rx=".5" />
        <line key="c" x1="2" y1="12" x2="16" y2="12" />
        <line key="d" x1="20" y1="12" x2="34" y2="12" />
        <line key="e" x1="9" y1="17" x2="9" y2="22" />
        <line key="f" x1="27" y1="17" x2="27" y2="22" />
        <rect key="g" x="5" y="22" width="8" height="8" rx=".5" />
        <rect key="h" x="23" y="22" width="8" height="8" rx=".5" />
        <line key="i" x1="13" y1="26" x2="23" y2="26" />
      </>
    ),
  },
  {
    titulo: 'Verificación de carga de gas',
    desc: 'Medición de presiones de trabajo, verificación de carga de refrigerante y detección de fugas. Recarga de gas si es necesaria.',
    icon: (
      <>
        <circle key="a" cx="18" cy="18" r="11" />
        <path key="b" d="M18 10 L18 18 L24 18" />
        <circle key="c" cx="18" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    titulo: 'Diagnóstico de componentes eléctricos',
    desc: 'Revisión de capacitores, contactores, protecciones eléctricas y cableado. Previene fallas inesperadas por deterioro eléctrico.',
    icon: (
      <>
        <path key="a" d="M4 32 L12 20 L20 25 L28 10 L34 14" />
        <circle key="b" cx="12" cy="20" r="2" fill="currentColor" stroke="none" />
        <circle key="c" cx="20" cy="25" r="2" fill="currentColor" stroke="none" />
        <circle key="d" cx="28" cy="10" r="2" fill="currentColor" stroke="none" />
        <line key="e" x1="4" y1="32" x2="34" y2="32" />
      </>
    ),
  },
  {
    titulo: 'Calibración de termostatos y controles',
    desc: 'Verificación de setpoints, calibración de sensores de temperatura y revisión del sistema de control BMS si aplica.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="3" y1="12" x2="33" y2="12" />
        <line key="c" x1="10" y1="4" x2="10" y2="12" />
        <line key="d" x1="18" y1="4" x2="18" y2="12" />
        <line key="e" x1="26" y1="4" x2="26" y2="12" />
        <line key="f" x1="8" y1="30" x2="28" y2="30" />
        <line key="g" x1="18" y1="26" x2="18" y2="30" />
      </>
    ),
  },
  {
    titulo: 'Informe técnico documentado',
    desc: 'Cada visita entrega un informe escrito con el estado del equipo, trabajos realizados, observaciones y recomendaciones de mejora.',
    icon: (
      <>
        <rect key="a" x="5" y="5" width="18" height="26" rx=".5" />
        <line key="b" x1="9" y1="12" x2="19" y2="12" />
        <line key="c" x1="9" y1="17" x2="19" y2="17" />
        <line key="d" x1="9" y1="22" x2="15" y2="22" />
        <circle key="e" cx="26" cy="26" r="6" />
        <path key="f" d="M23 26 L25 28 L29 23" />
      </>
    ),
  },
  {
    titulo: 'Garantía de rendimiento',
    desc: 'Garantizamos que el equipo opere dentro de las especificaciones técnicas del fabricante tras cada visita de mantención.',
    icon: (
      <>
        <path key="a" d="M18 3 L21 12 L30 12 L23 18 L26 27 L18 21 L10 27 L13 18 L6 12 L15 12 Z" />
      </>
    ),
  },
]

const FAQ_MANT = [
  {
    pregunta: '¿Con qué frecuencia se debe hacer la mantención preventiva de un sistema VRF?',
    respuesta:
      'Para sistemas VRF y VRV en uso comercial se recomienda una revisión semestral como mínimo: una en primavera (preparación para verano) y otra en otoño (preparación para invierno). En entornos de alta exigencia como data centers o cocinas industriales, se recomienda mantención trimestral.',
  },
  {
    pregunta: '¿Qué incluye un plan de mantención preventiva de D&Z Building?',
    respuesta:
      'El plan incluye: limpieza de filtros y serpentines (evaporador y condensador), verificación de carga de refrigerante y detección de fugas, diagnóstico de componentes eléctricos (capacitores, contactores, protecciones), calibración de termostatos y sensores, lubricación de partes móviles, y entrega de informe técnico documentado por visita.',
  },
  {
    pregunta: '¿La mantención preventiva cubre también la refrigeración comercial?',
    respuesta:
      'Sí. D&Z Building ofrece planes de mantención para toda la línea de equipos que instala: sistemas VRF/VRV, aire acondicionado split y cassette, unidades de climatización central, vitrinas refrigeradas, góndolas, cámaras frigoríficas y equipos de proceso.',
  },
  {
    pregunta: '¿Qué diferencia hay entre mantención preventiva y correctiva?',
    respuesta:
      'La mantención preventiva se realiza periódicamente para mantener el equipo en óptimas condiciones y evitar fallas. La correctiva se realiza cuando ya ocurrió una falla. La preventiva es siempre más económica: un equipo bien mantenido consume hasta 25% menos energía y tiene una vida útil hasta 40% mayor que uno sin mantención.',
  },
  {
    pregunta: '¿Ofrecen contratos de mantención anuales?',
    respuesta:
      'Sí. D&Z Building ofrece contratos anuales de mantención con visitas programadas, precios fijos, y prioridad de atención ante emergencias. Los contratos pueden incluir 2, 3 o 4 visitas al año según el tipo de equipo y las necesidades del cliente.',
  },
  {
    pregunta: '¿Mantienen equipos de otras marcas además de LG, Samsung y Gree?',
    respuesta:
      'Sí. D&Z Building realiza mantención de sistemas VRF, aire acondicionado y refrigeración de todas las marcas del mercado: Daikin, Mitsubishi, Carrier, Trane, York, Hitachi, y otras. Contamos con técnicos certificados y herramientas de diagnóstico compatibles con los principales fabricantes.',
  },
  {
    pregunta: '¿Qué pasa si se detecta una falla durante la mantención preventiva?',
    respuesta:
      'Si durante la visita preventiva se detecta una falla o componente deteriorado, nuestro técnico lo informa de inmediato con una cotización de reparación. El cliente decide si autoriza la reparación en la misma visita o en fecha posterior. Esto permite planificar el gasto sin interrupciones no programadas.',
  },
  {
    pregunta: '¿Cómo contrato un plan de mantención preventiva?',
    respuesta:
      'Puede solicitar una cotización de plan de mantención completando el formulario en dyzbuilding.cl, escribiendo a contacto@dyzbuilding.cl o llamando al número del sitio. Nuestro equipo le envía una propuesta con las opciones de plan y precios.',
  },
]

const PLANES = [
  { frecuencia: 'Semestral', visitas: '2 visitas/año', ideal: 'Oficinas, locales comerciales, hoteles', destacado: false },
  { frecuencia: 'Trimestral', visitas: '4 visitas/año', ideal: 'Supermercados, restaurantes, clínicas', destacado: true },
  { frecuencia: 'Mensual', visitas: '12 visitas/año', ideal: 'Data centers, quirófanos, plantas industriales', destacado: false },
]

export default async function MantenimientoPage() {
  const c = await getSiteContent()
  const waNumber = c.empresa.telefono.replace(/\D/g, '')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 3, name: 'Mantención Preventiva', item: `${siteUrl}/servicios/mantenimiento-preventivo/` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/servicios/mantenimiento-preventivo#service`,
        name: 'Mantención Preventiva de Climatización y Refrigeración',
        description:
          'Planes de mantención preventiva para sistemas VRF, aire acondicionado y refrigeración comercial en Chile. Diagnóstico, limpieza y garantía de rendimiento.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'Country', name: 'Chile' },
        serviceType: 'HVAC Maintenance',
        url: `${siteUrl}/servicios/mantenimiento-preventivo/`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_MANT.map(faq => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
        })),
      },
    ],
  }

  return (
    <>
      <Script id="ld-mant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnalyticsTracker />
      <div className="sp-wrap">

        {/* NAV */}
        <nav className="sp-topnav" role="navigation" aria-label="Navegación principal">
          <Link href="/" className="sp-topnav-logo">
            <Image src="/logo.png" alt={`${c.empresa.nombre} — Mantención Climatización`} width={120} height={44} priority />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/#servicios" className="sp-topnav-link">Todos los servicios</Link>
            <Link href="/#contacto" className="nav-cta" data-ga-event="cta_clicked" data-ga-location="sp_nav" data-ga-lang="es">
              Cotizar plan
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="sp-hero">
          <nav aria-label="Miga de pan" className="sp-breadcrumb">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">›</span>
            <Link href="/#servicios">Servicios</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Mantención Preventiva</span>
          </nav>
          <div className="sp-hero-eyebrow">Especialidad técnica · {c.empresa.nombre}</div>
          <h1 className="sp-hero-title">
            Mantención Preventiva de<br />Climatización y Refrigeración en Chile
          </h1>
          <p className="sp-hero-sub">
            Planes de mantención periódica para sistemas VRF/VRV, aire acondicionado y refrigeración comercial.
            Diagnóstico, limpieza, verificación de gas y garantía de rendimiento.
            Empresas de todos los rubros en todo Chile.
          </p>
          <div className="sp-hero-tags">
            {['Sistemas VRF/VRV', 'Aire Acondicionado', 'Refrigeración', 'Contratos Anuales', 'Todo Chile'].map(tag => (
              <span key={tag} className="sp-hero-tag">{tag}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_hero"
              data-ga-lang="es"
            >
              Cotizar plan de mantención
            </Link>
            <a
              href={`tel:${c.empresa.telefono.replace(/\s/g, '')}`}
              className="sp-hero-cta sp-hero-cta-outline"
              data-ga-event="phone_clicked"
              data-ga-location="sp_hero"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M3.5 3C5 3 6.5 5 7 7c.3.9 0 2-1 2.5C7.5 12 8 12.5 10.5 14c.5-1 1.6-1.3 2.5-1 2 .5 4 2 4 3.5 0 2-2 3.5-4 3C6.5 18 2 11.5 2 7c0-2 1.5-4 1.5-4Z" />
              </svg>
              {c.empresa.telefono}
            </a>
          </div>
        </section>

        {/* ¿POR QUÉ MANTENCIÓN PREVENTIVA? */}
        <RevealSection className="sp-section" id="sp-por-que">
          <div className="sec-eyebrow">Beneficios comprobados</div>
          <h2 className="sec-title">¿Por qué hacer mantención preventiva?</h2>
          <div className="sp-what-grid">
            <div className="sp-what-col">
              <h3>Reduce el consumo energético hasta 25%</h3>
              <p>
                Un equipo con filtros sucios o refrigerante bajo trabaja más para lograr el mismo resultado.
                La mantención periódica restaura el rendimiento original, reduciendo el consumo eléctrico
                entre un 15% y 25% según el estado inicial del equipo.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Evita paradas no programadas</h3>
              <p>
                El 80% de las fallas graves en sistemas de climatización son predecibles y prevenibles.
                La mantención detecta condensadores sucios, gas bajo, capacitores deteriorados y rodamientos
                desgastados antes de que provoquen una falla en plena temporada.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Prolonga la vida útil del equipo</h3>
              <p>
                Un sistema VRF o aire acondicionado correctamente mantenido puede operar 15 a 20 años.
                Sin mantención, la vida útil se reduce a 8–10 años. El costo del plan de mantención
                es marginal frente al costo de reposición anticipada de equipos.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Mantiene la garantía del fabricante</h3>
              <p>
                LG, Samsung y Gree exigen mantención periódica documentada como condición para honrar
                la garantía de fábrica. D&Z Building entrega informe técnico por cada visita, lo que
                respalda el historial de mantención ante el fabricante.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* QUÉ INCLUYE */}
        <RevealSection className="sp-section" id="sp-incluye">
          <div className="sec-eyebrow">Alcance del servicio</div>
          <h2 className="sec-title">¿Qué incluye cada visita?</h2>
          <div className="sp-aplic-grid">
            {INCLUYE.map(item => (
              <div className="sp-aplic-item" key={item.titulo}>
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                  {item.icon}
                </svg>
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* PLANES */}
        <RevealSection className="sp-section" id="sp-planes">
          <div className="sec-eyebrow">Opciones de contrato</div>
          <h2 className="sec-title">Planes de mantención</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 600, marginTop: 12, marginBottom: 32 }}>
            Adaptamos la frecuencia de visitas según el tipo de equipo, su uso y las exigencias regulatorias del rubro.
          </p>
          <div className="garantia-bar">
            {PLANES.map(plan => (
              <div className="garantia-bar-item" key={plan.frecuencia} style={plan.destacado ? { background: 'rgba(200,168,75,0.06)', borderTop: '2px solid var(--accent)' } : {}}>
                <div className="garantia-bar-txt" style={{ width: '100%' }}>
                  <span className="garantia-bar-titulo" style={plan.destacado ? { color: 'var(--accent)' } : {}}>{plan.frecuencia}</span>
                  <span className="garantia-bar-desc" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', margin: '4px 0' }}>{plan.visitas}</span>
                  <span className="garantia-bar-desc">Ideal para: {plan.ideal}</span>
                </div>
              </div>
            ))}
            <div className="garantia-bar-item">
              <div className="garantia-bar-txt" style={{ width: '100%' }}>
                <span className="garantia-bar-titulo">Plan personalizado</span>
                <span className="garantia-bar-desc" style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', margin: '4px 0' }}>Frecuencia a medida</span>
                <span className="garantia-bar-desc">Para flotas de equipos o múltiples sucursales</span>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* PROCESO */}
        <RevealSection className="sp-section" id="sp-proceso">
          <div className="sec-eyebrow">Nuestro proceso</div>
          <h2 className="sec-title">¿Cómo funciona?</h2>
          <div className="proceso-grid" style={{ marginTop: 32 }}>
            {([
              { n: '01', titulo: 'Diagnóstico inicial', desc: 'Evaluamos el estado actual de sus equipos y definimos la frecuencia y alcance del plan de mantención.' },
              { n: '02', titulo: 'Propuesta de plan', desc: 'Cotización detallada con frecuencia de visitas, alcance del servicio y precio anual del contrato.' },
              { n: '03', titulo: 'Visitas programadas', desc: 'Agenda de mantención con fecha confirmada con anticipación. Minimizamos la interferencia con su operación.' },
              { n: '04', titulo: 'Informe y seguimiento', desc: 'Entrega de informe técnico por visita, historial de mantención y recomendaciones para las próximas temporadas.' },
            ] as const).map(s => (
              <div className="proceso-step" key={s.n}>
                <div className="proceso-n">{s.n}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="sp-section" id="sp-faq">
          <div className="sec-eyebrow">Preguntas frecuentes</div>
          <h2 className="sec-title">Sobre mantención preventiva</h2>
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ_MANT} lang="es" />
          </div>
        </RevealSection>

        {/* CTA FINAL */}
        <section className="sp-cta-bar">
          <div className="sec-eyebrow" style={{ marginBottom: 12 }}>¿Sus equipos ya necesitan mantención?</div>
          <h2 className="sp-cta-title">Cotice su plan de mantención sin costo</h2>
          <p className="sp-cta-sub">
            Evaluamos su instalación y le presentamos un plan ajustado a sus equipos y presupuesto.
          </p>
          <div className="sp-cta-btns">
            <Link
              href="/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="es"
            >
              Cotizar plan de mantención
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa cotizar un plan de mantención preventiva para mis equipos de climatización. ¿Podrían contactarme?')}`}
              className="sp-hero-cta sp-hero-cta-outline"
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="whatsapp_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="es"
            >
              <svg viewBox="0 0 15 15" fill="currentColor" stroke="none" aria-hidden="true" style={{ width: 16, height: 16 }}>
                <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5c0 1.15.31 2.24.86 3.18L1.25 13.75l3.18-.86A6.19 6.19 0 0 0 7.5 13.75c3.45 0 6.25-2.8 6.25-6.25S10.95 1.25 7.5 1.25ZM5.6 4.69c.15 0 .3.01.43.04.14.03.32.07.49.5l.63 1.56c.08.2.04.43-.1.6l-.37.45c-.06.07-.1.16-.07.25.2.53.54 1.02.96 1.43.43.42.93.75 1.47.95.1.03.2 0 .26-.08l.38-.47c.16-.2.4-.26.62-.16l1.57.7c.43.19.48.38.49.53.03.34.01.67-.06.99-.23.97-1.18 1.5-2.1 1.5-1 0-2.3-.47-3.6-1.77C4.86 9.9 4.4 8.59 4.38 7.59c-.02-.93.5-1.87 1.47-2.1.08-.02.16-.03.24-.03l-.49.23Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sp-footer">
          <p>
            <Link href="/" style={{ color: 'var(--accent)' }}>{c.empresa.nombre}</Link>
            {' '}· Mantención Climatización y Refrigeración · Santiago, Chile
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/">Inicio</Link>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#contacto">Contacto</Link>
          </div>
        </footer>
      </div>
      <WhatsAppButton phone={c.empresa.telefono} lang="es" />
    </>
  )
}
