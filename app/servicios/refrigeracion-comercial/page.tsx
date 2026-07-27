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
    title: `Refrigeración Comercial en Chile — Instalación y Mantención`,

    description:
      'Empresa especialista en refrigeración comercial en Chile. Vitrinas, góndolas, cámaras frigoríficas y equipos de frío para supermercados, gastronomía e industria alimentaria. Cotización gratuita.',
    alternates: {
      canonical: `${siteUrl}/servicios/refrigeracion-comercial/`,
      languages: {
        es: `${siteUrl}/servicios/refrigeracion-comercial/`,
        en: `${siteUrl}/en/services/commercial-refrigeration/`,
      },
    },
    openGraph: {
      title: `Refrigeración Comercial en Chile | ${c.empresa.nombre}`,
      description:
        'Instalación y mantención de equipos de refrigeración comercial en Chile. Vitrinas, góndolas y cámaras frigoríficas. 20 años de experiencia.',
      url: `${siteUrl}/servicios/refrigeracion-comercial/`,
      siteName: c.empresa.nombre,
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
      locale: 'es_CL',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

const APLICACIONES = [
  {
    titulo: 'Supermercados y Grandes Superficies',
    desc: 'Góndolas murales, islas de congelados y vitrinas de carnes con cadena de frío continua y gestión centralizada de temperatura.',
    icon: (
      <>
        <rect key="a" x="3" y="13" width="30" height="19" rx=".5" />
        <path key="b" d="M3 13 L8 5 L28 5 L33 13" />
        <line key="c" x1="3" y1="21" x2="33" y2="21" />
        <rect key="d" x="14" y="24" width="8" height="8" />
      </>
    ),
  },
  {
    titulo: 'Carnicerías y Pescaderías',
    desc: 'Vitrinas refrigeradas específicas para carnes y pescados. Temperatura y humedad controlada según normativa sanitaria.',
    icon: (
      <>
        <rect key="a" x="3" y="6" width="30" height="22" rx=".5" />
        <line key="b" x1="3" y1="14" x2="33" y2="14" />
        <line key="c" x1="10" y1="6" x2="10" y2="14" />
        <line key="d" x1="18" y1="6" x2="18" y2="14" />
        <line key="e" x1="26" y1="6" x2="26" y2="14" />
        <line key="f" x1="7" y1="20" x2="7" y2="22" />
        <line key="g" x1="14" y1="20" x2="14" y2="22" />
        <line key="h" x1="21" y1="20" x2="21" y2="22" />
        <line key="i" x1="28" y1="20" x2="28" y2="22" />
      </>
    ),
  },
  {
    titulo: 'Gastronomía y Restaurantes',
    desc: 'Cámaras de conservación, refrigeradores bajo mesón y equipos de mantención para cocinas profesionales y líneas de frío.',
    icon: (
      <>
        <circle key="a" cx="18" cy="18" r="12" />
        <path key="b" d="M12 18 L18 12 L24 18" />
        <line key="c" x1="18" y1="12" x2="18" y2="26" />
        <line key="d" x1="12" y1="26" x2="24" y2="26" />
      </>
    ),
  },
  {
    titulo: 'Farmacias y Salud',
    desc: 'Refrigeradores farmacéuticos y cámaras con temperatura controlada para medicamentos y vacunas. Cumplimiento normativo ISP.',
    icon: (
      <>
        <rect key="a" x="13" y="3" width="10" height="30" rx=".5" />
        <rect key="b" x="3" y="13" width="30" height="10" rx=".5" />
      </>
    ),
  },
  {
    titulo: 'Agroindustria y Packing',
    desc: 'Cámaras frigoríficas industriales para frutas, hortalizas y productos procesados. Cadena de frío desde el campo al consumidor.',
    icon: (
      <>
        <line key="a" x1="18" y1="4" x2="18" y2="32" />
        <line key="b" x1="4" y1="18" x2="32" y2="18" />
        <line key="c" x1="9" y1="9" x2="27" y2="27" />
        <line key="d" x1="27" y1="9" x2="9" y2="27" />
      </>
    ),
  },
  {
    titulo: 'Industria y Manufactura',
    desc: 'Refrigeración de procesos industriales, salas limpias y almacenamiento de materias primas sensibles a la temperatura.',
    icon: (
      <>
        <rect key="a" x="2" y="16" width="32" height="16" rx=".5" />
        <path key="b" d="M2 16 L10 8 L18 16 L26 8 L34 16" />
        <rect key="c" x="6" y="22" width="5" height="10" />
        <rect key="d" x="15" y="22" width="5" height="10" />
        <rect key="e" x="24" y="22" width="5" height="10" />
      </>
    ),
  },
]

const FAQ_REFRIG = [
  {
    pregunta: '¿Qué tipos de equipos de refrigeración comercial instala D&Z Building?',
    respuesta:
      'D&Z Building instala y mantiene vitrinas refrigeradas, góndolas murales e islas de congelados para supermercados, cámaras frigoríficas de conservación y congelación, refrigeradores bajo mesón para cocinas profesionales, equipos farmacéuticos con temperatura controlada, y sistemas de refrigeración industrial para agroindustria y plantas de proceso.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre una cámara frigorífica de conservación y una de congelación?',
    respuesta:
      'Una cámara de conservación mantiene temperaturas entre 0 °C y 10 °C, ideal para frutas, verduras, lácteos y carnes frescas. Una cámara de congelación opera entre -18 °C y -25 °C para conservar productos congelados por períodos prolongados. D&Z Building diseña ambos tipos y puede instalar cámaras combinadas con antecámara.',
  },
  {
    pregunta: '¿Qué marcas de equipos de refrigeración comercial distribuye D&Z Building?',
    respuesta:
      'D&Z Building trabaja con fabricantes líderes del mercado de refrigeración comercial en Chile. Contáctenos para conocer el catálogo de equipos disponibles según su tipo de proyecto y presupuesto.',
  },
  {
    pregunta: '¿Ofrecen mantención preventiva para equipos de refrigeración comercial?',
    respuesta:
      'Sí. D&Z Building ofrece planes de mantención preventiva trimestral, semestral y anual para toda la línea de refrigeración comercial. El servicio incluye limpieza de condensadores y evaporadores, verificación de carga de gas refrigerante, calibración de termostatos y revisión de sellos y puertas.',
  },
  {
    pregunta: '¿Qué refrigerantes se usan en los equipos de refrigeración comercial?',
    respuesta:
      'Los sistemas modernos de refrigeración comercial utilizan principalmente R-404A, R-448A (Solstice N40) y R-449A para aplicaciones de media y baja temperatura. D&Z Building trabaja con refrigerantes de bajo GWP conforme a la normativa chilena vigente y los protocolos de reducción de HFC.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda la instalación de una cámara frigorífica?',
    respuesta:
      'Una cámara frigorífica modular estándar de hasta 20 m³ se instala en 2 a 4 días hábiles. Proyectos de mayor envergadura, como salas de proceso o cámaras de capacidad industrial, pueden requerir entre 1 y 3 semanas. D&Z Building entrega cronograma detallado en la cotización.',
  },
  {
    pregunta: '¿Pueden instalar refrigeración en locales en funcionamiento?',
    respuesta:
      'Sí. D&Z Building cuenta con experiencia en instalaciones en locales operativos, coordinando los trabajos para minimizar el impacto en la operación del negocio. En supermercados y restaurantes, los trabajos se planifican en horario nocturno o de menor actividad cuando es necesario.',
  },
  {
    pregunta: '¿Cómo solicito una cotización para equipos de refrigeración comercial?',
    respuesta:
      'Puede solicitar cotización gratuita completando el formulario en dyzbuilding.cl, escribiendo a contacto@dyzbuilding.cl o llamando al número publicado en el sitio. Nuestro equipo técnico le responde dentro de 24 horas hábiles con una propuesta según sus necesidades.',
  },
]

const VENTAJAS = [
  {
    titulo: '20 años de experiencia',
    desc: 'Empresa chilena con más de dos décadas instalando y manteniendo refrigeración comercial para retail, gastronomía e industria.',
    icon: (
      <path d="M18 3 L21 12 L30 12 L23 18 L26 27 L18 21 L10 27 L13 18 L6 12 L15 12 Z" />
    ),
  },
  {
    titulo: 'Ingeniería y diseño',
    desc: 'Cálculo de cargas térmicas, selección de equipos y diseño de instalaciones conforme a normativa sanitaria y eléctrica.',
    icon: (
      <>
        <rect key="a" x="3" y="4" width="30" height="22" rx=".5" />
        <line key="b" x1="10" y1="4" x2="10" y2="26" />
        <line key="c" x1="18" y1="4" x2="18" y2="26" />
        <line key="d" x1="3" y1="12" x2="33" y2="12" />
        <line key="e" x1="3" y1="20" x2="33" y2="20" />
      </>
    ),
  },
  {
    titulo: 'Cobertura nacional',
    desc: 'Proyectos de refrigeración comercial en Región Metropolitana y regiones del norte, centro y sur de Chile.',
    icon: (
      <>
        <circle key="a" cx="18" cy="15" r="8" />
        <path key="b" d="M18 3 C18 3 18 10 14 18 C10 26 18 33 18 33 C18 33 26 26 22 18 C18 10 18 3 18 3Z" />
        <line key="c" x1="10" y1="15" x2="26" y2="15" />
      </>
    ),
  },
  {
    titulo: 'Servicio técnico 24/7',
    desc: 'Soporte técnico y respuesta de emergencia para fallas en equipos de refrigeración críticos. Mínimo tiempo de inactividad.',
    icon: (
      <>
        <path key="a" d="M6 28 C8 22 14 18 18 18 C22 18 24 14 22 10" />
        <path key="b" d="M22 10 L26 14 M22 10 L18 14" />
        <circle key="c" cx="28" cy="10" r="3" />
        <path key="d" d="M10 32 L14 26 L18 29 L24 20" />
      </>
    ),
  },
]

export default async function RefrigeracionComercialPage() {
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
          { '@type': 'ListItem', position: 3, name: 'Refrigeración Comercial', item: `${siteUrl}/servicios/refrigeracion-comercial/` },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/servicios/refrigeracion-comercial#service`,
        name: 'Instalación y Mantención de Refrigeración Comercial',
        description:
          'Diseño, instalación y mantención de equipos de refrigeración comercial para supermercados, gastronomía, farmacias y agroindustria en Chile.',
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'Country', name: 'Chile' },
        serviceType: 'Commercial Refrigeration Installation',
        url: `${siteUrl}/servicios/refrigeracion-comercial/`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_REFRIG.map(faq => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
        })),
      },
    ],
  }

  return (
    <>
      <Script id="ld-refrig" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnalyticsTracker />
      <div className="sp-wrap">

        {/* NAV */}
        <nav className="sp-topnav" role="navigation" aria-label="Navegación principal">
          <Link href="/" className="sp-topnav-logo">
            <Image src="/logo.png" alt={`${c.empresa.nombre} — Refrigeración Comercial`} width={120} height={44} priority />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/#servicios" className="sp-topnav-link">Todos los servicios</Link>
            <Link href="/#contacto" className="nav-cta" data-ga-event="cta_clicked" data-ga-location="sp_nav" data-ga-lang="es">
              Cotizar
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
            <span aria-current="page">Refrigeración Comercial</span>
          </nav>
          <div className="sp-hero-eyebrow">Especialidad técnica · {c.empresa.nombre}</div>
          <h1 className="sp-hero-title">
            Refrigeración Comercial<br />en Chile — Instalación y Mantención
          </h1>
          <p className="sp-hero-sub">
            Diseñamos e instalamos vitrinas refrigeradas, góndolas, cámaras frigoríficas y sistemas de frío para
            supermercados, gastronomía, farmacias e industria alimentaria en todo Chile.
            Más de 20 años de experiencia y cotización sin costo.
          </p>
          <div className="sp-hero-tags">
            {['Vitrinas Refrigeradas', 'Cámaras Frigoríficas', 'Góndolas', 'Cadena de Frío', 'Todo Chile'].map(tag => (
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
              Solicitar cotización gratuita
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

        {/* ¿QUÉ ES REFRIGERACIÓN COMERCIAL? */}
        <RevealSection className="sp-section" id="sp-que-es">
          <div className="sec-eyebrow">Especialidad técnica</div>
          <h2 className="sec-title">¿Qué es la refrigeración comercial?</h2>
          <div className="sp-what-grid">
            <div className="sp-what-col">
              <h3>Equipos de exposición y venta</h3>
              <p>
                Las vitrinas refrigeradas y góndolas permiten exponer productos frescos y congelados a temperaturas
                controladas mientras son visibles y accesibles para los clientes. Son el corazón del negocio en
                supermercados, carnicerías y tiendas de conveniencia.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Cámaras de conservación y congelación</h3>
              <p>
                Las cámaras frigoríficas son recintos aislados que mantienen temperatura estable para conservar
                productos en grandes volúmenes. La temperatura varía entre 0 °C y 10 °C para conservación y
                hasta -25 °C para congelación profunda industrial.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Cadena de frío ininterrumpida</h3>
              <p>
                Un sistema de refrigeración comercial bien diseñado garantiza que los productos lleguen al
                consumidor final a la temperatura correcta en todo momento. Esto protege la inocuidad alimentaria
                y cumple con los requisitos del SEREMI de Salud y normas de exportación.
              </p>
            </div>
            <div className="sp-what-col">
              <h3>Eficiencia energética en frío</h3>
              <p>
                Los equipos de refrigeración son responsables de entre el 35% y 60% del consumo eléctrico en
                supermercados y restaurantes. D&Z Building selecciona equipos con alta eficiencia EER/COP,
                sistemas de cortinas de aire y control inteligente para reducir el costo operacional.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* APLICACIONES */}
        <RevealSection className="sp-section" id="sp-aplicaciones">
          <div className="sec-eyebrow">Sectores de aplicación</div>
          <h2 className="sec-title">¿Para qué tipo de negocios?</h2>
          <p style={{ color: 'var(--dim)', fontSize: 15, lineHeight: 1.7, maxWidth: 640, marginTop: 12 }}>
            D&Z Building instala refrigeración comercial en los siguientes sectores en Chile:
          </p>
          <div className="sp-aplic-grid">
            {APLICACIONES.map(a => (
              <div className="sp-aplic-item" key={a.titulo}>
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                  {a.icon}
                </svg>
                <h3>{a.titulo}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* PROCESO */}
        <RevealSection className="sp-section" id="sp-proceso">
          <div className="sec-eyebrow">Nuestro proceso</div>
          <h2 className="sec-title">¿Cómo trabajamos?</h2>
          <div className="proceso-grid" style={{ marginTop: 32 }}>
            {([
              { n: '01', titulo: 'Diagnóstico inicial', desc: 'Evaluamos el espacio, volumen de productos y necesidades de temperatura. Sin costo ni compromiso.' },
              { n: '02', titulo: 'Propuesta técnica', desc: 'Cotización detallada con selección de equipos, cálculo de carga térmica y valor total del proyecto.' },
              { n: '03', titulo: 'Instalación certificada', desc: 'Montaje con técnicos certificados en refrigeración, carga de gas refrigerante y pruebas de funcionamiento.' },
              { n: '04', titulo: 'Mantención preventiva', desc: 'Plan de mantención periódica para garantizar el rendimiento y vida útil de la instalación. Respuesta de emergencia 24/7.' },
            ] as const).map(s => (
              <div className="proceso-step" key={s.n}>
                <div className="proceso-n">{s.n}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* VENTAJAS */}
        <RevealSection className="sp-section" id="sp-ventajas">
          <div className="sec-eyebrow">Por qué D&amp;Z Building</div>
          <h2 className="sec-title">Lo que nos diferencia</h2>
          <div className="garantia-bar" style={{ marginTop: 32 }}>
            {VENTAJAS.map(v => (
              <div className="garantia-bar-item" key={v.titulo}>
                <svg className="garantia-bar-ico" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true" style={{ width: 28, height: 28 }}>
                  {v.icon}
                </svg>
                <div className="garantia-bar-txt">
                  <span className="garantia-bar-titulo">{v.titulo}</span>
                  <span className="garantia-bar-desc">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* FAQ */}
        <RevealSection className="sp-section" id="sp-faq">
          <div className="sec-eyebrow">Preguntas frecuentes</div>
          <h2 className="sec-title">Sobre refrigeración comercial</h2>
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ_REFRIG} lang="es" />
          </div>
        </RevealSection>

        {/* CTA FINAL */}
        <section className="sp-cta-bar">
          <div className="sec-eyebrow" style={{ marginBottom: 12 }}>¿Tiene un proyecto en mente?</div>
          <h2 className="sp-cta-title">Cotice su sistema de refrigeración sin costo</h2>
          <p className="sp-cta-sub">
            Evaluamos su proyecto y entregamos una propuesta detallada dentro de 48 horas hábiles.
          </p>
          <div className="sp-cta-btns">
            <Link
              href="/#contacto"
              className="sp-hero-cta"
              data-ga-event="cta_clicked"
              data-ga-location="sp_cta_final"
              data-ga-lang="es"
            >
              Solicitar cotización gratuita
            </Link>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, me interesa cotizar un sistema de refrigeración comercial para mi negocio. ¿Podrían contactarme?')}`}
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
            {' '}· Refrigeración Comercial e Industrial · Santiago, Chile
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
